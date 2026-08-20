/* Tiny procedural sound engine — Web Audio oscillators, no audio assets. */

const MUTE_KEY = "uionox_muted";
let ctx = null;

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function isMuted() {
  try { return localStorage.getItem(MUTE_KEY) === "1"; } catch (e) { return false; }
}

export function toggleMuted() {
  const next = !isMuted();
  try { localStorage.setItem(MUTE_KEY, next ? "1" : "0"); } catch (e) {}
  return next;
}

function tone(freq, dur, { type = "square", gain = 0.15, delay = 0, slide = 0 } = {}) {
  if (isMuted()) return;
  const c = getCtx();
  const t0 = c.currentTime + delay;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(1, freq + slide), t0 + dur);
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(c.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}

export const sfx = {
  boot: () => { tone(392, 0.09, { type: "square" }); tone(523, 0.09, { type: "square", delay: 0.1 }); tone(659, 0.2, { type: "square", delay: 0.2 }); },
  click: () => tone(720, 0.03, { type: "square", gain: 0.08 }),
  place: () => tone(600, 0.04, { type: "sine", gain: 0.1 }),
  flag: () => tone(500, 0.05, { type: "triangle", gain: 0.1 }),
  eat: () => tone(880, 0.07, { type: "square", gain: 0.12, slide: 220 }),
  boom: () => tone(80, 0.35, { type: "sawtooth", gain: 0.22, slide: -40 }),
  error: () => tone(150, 0.12, { type: "sawtooth", gain: 0.15 }),
  gameOver: () => { tone(220, 0.18, { type: "sawtooth", gain: 0.14 }); tone(160, 0.28, { type: "sawtooth", gain: 0.14, delay: 0.16 }); },
  win: () => { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.12, { type: "square", gain: 0.12, delay: i * 0.09 })); }
};
