import { h } from "./vendor/preact.module.js";
import htm from "./vendor/htm.module.js";

const html = htm.bind(h);

export function OsIcon({ kind = "program", size = 32 }) {
  const s = Number(size);
  const box = { width: s + "px", height: s + "px", position: "relative", flex: "none", overflow: "visible" };
  const inner = { position: "absolute", left: 0, top: 0, width: "32px", height: "32px", transform: "scale(" + (s / 32) + ")", transformOrigin: "0 0", filter: s >= 24 ? "drop-shadow(0 1px 1px rgba(0,20,60,0.28))" : "none" };

  return html`
    <div style=${box}>
      <div style=${inner}>
        ${kind === "mypc" && html`
          <div style="position:absolute;left:7px;top:26px;width:18px;height:4px;border-radius:2px 2px 3px 3px;background:linear-gradient(180deg,#c8cdd6,#7f8794 60%,#5a616d);border:1px solid #3f4653;"></div>
          <div style="position:absolute;left:12px;top:21px;width:8px;height:6px;background:linear-gradient(90deg,#6f7784,#b6bdc8 40%,#7d8592);border-left:1px solid #454c58;border-right:1px solid #454c58;"></div>
          <div style="position:absolute;left:0;top:2px;width:32px;height:21px;border-radius:4px;background:linear-gradient(180deg,#e2e6ec 0%,#c2c8d2 22%,#9ba3af 62%,#767e8b 100%);border:1px solid #3d4450;box-shadow:inset 0 1px 0 rgba(255,255,255,0.85),0 1px 2px rgba(0,10,35,0.4);"></div>
          <div style="position:absolute;left:3px;top:4px;width:26px;height:15px;border-radius:3px;background:#1b232f;border:1px solid #2b3340;box-shadow:inset 0 0 3px rgba(0,0,0,0.9);overflow:hidden;">
            <div style="position:absolute;inset:0;background:linear-gradient(165deg,#2f7fd0 0%,#1a5ba8 44%,#0e3d7c 100%);"></div>
            <div style="position:absolute;left:-2px;top:-4px;width:18px;height:16px;transform:rotate(24deg);background:linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0));"></div>
          </div>
          <div style="position:absolute;left:23px;top:20px;width:3px;height:2px;border-radius:1px;background:radial-gradient(circle at 40% 40%,#b6ff8f,#2f8a18);"></div>
        `}
        ${kind === "folder" && html`
          <div style="position:absolute;left:2px;top:5px;width:13px;height:5px;border-radius:2px 3px 0 0;background:linear-gradient(180deg,#ffd77a,#e2a520);border:1px solid #9c6c08;border-bottom:none;"></div>
          <div style="position:absolute;left:1px;top:9px;width:30px;height:19px;border-radius:2px 3px 3px 3px;background:linear-gradient(165deg,#ffe9a8 0%,#ffcf62 30%,#eeab24 62%,#c9860c 100%);border:1px solid #9c6c08;box-shadow:inset 0 1px 0 rgba(255,255,255,0.6);"></div>
          <div style="position:absolute;left:2px;top:10px;width:28px;height:6px;background:linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0));border-radius:2px;"></div>
        `}
        ${kind === "note" && html`
          <div style="position:absolute;left:5px;top:2px;width:22px;height:28px;background:#fff;border:1px solid #9aa3b5;border-radius:1px;box-shadow:1px 1px 2px rgba(20,40,80,0.2);"></div>
          <div style="position:absolute;left:8px;top:7px;width:16px;height:2px;background:#9fb2d4;"></div>
          <div style="position:absolute;left:8px;top:11px;width:16px;height:2px;background:#9fb2d4;"></div>
          <div style="position:absolute;left:8px;top:15px;width:16px;height:2px;background:#9fb2d4;"></div>
          <div style="position:absolute;left:8px;top:19px;width:11px;height:2px;background:#c3cee2;"></div>
          <div style="position:absolute;right:5px;top:2px;width:8px;height:8px;background:linear-gradient(225deg,#dbe2ee 50%,#fff 50%);border-left:1px solid #9aa3b5;border-bottom:1px solid #9aa3b5;"></div>
        `}
        ${kind === "term" && html`
          <div style="position:absolute;left:1px;top:4px;width:30px;height:24px;border-radius:2px;background:#000;border:1px solid #6d7686;box-shadow:0 1px 2px rgba(0,10,40,0.35);overflow:hidden;">
            <div style="height:6px;background:linear-gradient(180deg,#e9edf4,#b9c2d2);border-bottom:1px solid #6d7686;"></div>
            <div style="padding:2px 3px;color:#d8d8d8;font-family:'VT323',Consolas,monospace;font-size:9px;line-height:1;letter-spacing:0.5px;white-space:nowrap;">C:\\>_</div>
          </div>
        `}
        ${kind === "bin" && html`
          <div style="position:absolute;left:6px;top:8px;width:20px;height:22px;background:linear-gradient(90deg,#9fabbe 0%,#e6ebf3 22%,#f7f9fc 40%,#c2cad8 68%,#8d99ad 100%);border:1px solid #6b7688;border-radius:2px 2px 6px 6px;"></div>
          <div style="position:absolute;left:10px;top:11px;width:2px;height:15px;background:rgba(90,105,130,0.5);"></div>
          <div style="position:absolute;left:15px;top:11px;width:2px;height:15px;background:rgba(90,105,130,0.5);"></div>
          <div style="position:absolute;left:20px;top:11px;width:2px;height:15px;background:rgba(90,105,130,0.5);"></div>
          <div style="position:absolute;left:4px;top:4px;width:24px;height:5px;background:linear-gradient(90deg,#8d99ad,#f2f5fa 40%,#a6b1c2);border:1px solid #6b7688;border-radius:3px;"></div>
          <div style="position:absolute;left:13px;top:1px;width:6px;height:3px;border:1px solid #6b7688;border-bottom:none;border-radius:2px 2px 0 0;background:#dfe5ee;"></div>
        `}
        ${kind === "snake" && html`
          <div style="position:absolute;inset:2px;border-radius:3px;background:linear-gradient(160deg,#1e2a20,#0d140f);border:1px solid #5f6a5c;"></div>
          <div style="position:absolute;left:6px;top:18px;width:6px;height:6px;border-radius:2px;background:#6fb733;"></div>
          <div style="position:absolute;left:12px;top:18px;width:6px;height:6px;border-radius:2px;background:#7ec13f;"></div>
          <div style="position:absolute;left:18px;top:18px;width:6px;height:6px;border-radius:2px;background:#8fce4d;"></div>
          <div style="position:absolute;left:18px;top:12px;width:6px;height:6px;border-radius:3px;background:#c9f58a;"></div>
          <div style="position:absolute;left:8px;top:7px;width:5px;height:5px;border-radius:50%;background:#ff5a3c;box-shadow:0 0 4px rgba(255,90,60,0.8);"></div>
        `}
        ${kind === "mine" && html`
          <div style="position:absolute;inset:2px;background:#c0c0c0;border-top:2px solid #fdfdfd;border-left:2px solid #fdfdfd;border-right:2px solid #7b7b74;border-bottom:2px solid #7b7b74;"></div>
          <div style="position:absolute;left:9px;top:9px;width:14px;height:14px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#8a8a8a,#101010 70%);"></div>
          <div style="position:absolute;left:15px;top:5px;width:2px;height:22px;background:#101010;"></div>
          <div style="position:absolute;left:5px;top:15px;width:22px;height:2px;background:#101010;"></div>
          <div style="position:absolute;left:12px;top:12px;width:4px;height:4px;border-radius:50%;background:#fff;opacity:0.85;"></div>
        `}
        ${kind === "browser" && html`
          <div style="position:absolute;left:2px;top:2px;width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 34% 26%,#e8f6ff 4%,#8fd0f7 26%,#2b86dc 62%,#12508f 100%);border:1px solid #14508f;box-shadow:inset 0 0 6px rgba(255,255,255,0.45);"></div>
          <div style="position:absolute;left:2px;top:14px;width:28px;height:4px;background:rgba(255,255,255,0.55);"></div>
          <div style="position:absolute;left:11px;top:2px;width:10px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,0.6);"></div>
          <div style="position:absolute;left:5px;top:5px;width:12px;height:7px;border-radius:50%;background:rgba(255,255,255,0.55);"></div>
        `}
        ${kind === "contact" && html`
          <div style="position:absolute;left:1px;top:7px;width:30px;height:19px;border-radius:2px;background:linear-gradient(180deg,#fdfdff,#dbe3ef);border:1px solid #5d6a80;box-shadow:0 1px 2px rgba(20,40,80,0.25);"></div>
          <div style="position:absolute;left:2px;top:8px;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:12px solid #7f8da4;"></div>
          <div style="position:absolute;left:3px;top:8px;width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-top:10px solid #eef2f9;"></div>
          <div style="position:absolute;left:2px;top:20px;width:11px;height:1px;background:#8b97ab;transform:rotate(-24deg);transform-origin:0 0;"></div>
          <div style="position:absolute;right:2px;top:20px;width:11px;height:1px;background:#8b97ab;transform:rotate(24deg);transform-origin:100% 0;"></div>
        `}
        ${kind === "image" && html`
          <div style="position:absolute;left:3px;top:2px;width:26px;height:28px;background:#fff;border:1px solid #8f98a8;border-radius:1px;box-shadow:1px 1px 2px rgba(20,40,80,0.2);padding:3px;">
            <div style="width:100%;height:100%;position:relative;overflow:hidden;background:linear-gradient(180deg,#8ecdf2,#cfe9f7);border:1px solid #a9b6c6;">
              <div style="position:absolute;left:-2px;bottom:-1px;width:16px;height:10px;border-radius:50% 50% 0 0 / 100% 100% 0 0;background:#5d9c33;"></div>
              <div style="position:absolute;right:-3px;bottom:-1px;width:16px;height:8px;border-radius:50% 50% 0 0 / 100% 100% 0 0;background:#7ab845;"></div>
              <div style="position:absolute;right:3px;top:3px;width:5px;height:5px;border-radius:50%;background:#ffd84a;"></div>
            </div>
          </div>
        `}
        ${kind === "program" && html`
          <div style="position:absolute;left:2px;top:4px;width:28px;height:24px;border-radius:3px 3px 2px 2px;background:#fff;border:1px solid #14509c;overflow:hidden;box-shadow:0 1px 2px rgba(10,30,80,0.3);">
            <div style="height:8px;background:linear-gradient(180deg,#5a95ef,#1c4fb8);"></div>
            <div style="padding:3px;display:flex;flex-direction:column;gap:2px;">
              <div style="height:2px;background:#b9c6dd;"></div>
              <div style="height:2px;background:#b9c6dd;"></div>
              <div style="height:2px;width:60%;background:#d5deec;"></div>
            </div>
          </div>
        `}
        ${kind === "disk" && html`
          <div style="position:absolute;left:1px;top:8px;width:30px;height:16px;border-radius:2px;background:linear-gradient(180deg,#f4f6fa,#c6cdd9 55%,#98a2b2);border:1px solid #5f6a7c;"></div>
          <div style="position:absolute;left:4px;top:12px;width:16px;height:3px;background:#6e7a8d;border-radius:1px;"></div>
          <div style="position:absolute;left:24px;top:12px;width:4px;height:4px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#c9f58a,#3f9b21);"></div>
        `}
        ${kind === "power" && html`
          <div style="position:absolute;left:3px;top:3px;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#ffd8c8,#ea5c3c 52%,#a52a12 100%);border:1px solid #7d1e0b;box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;left:14px;top:8px;width:4px;height:11px;border-radius:2px;background:#fff;"></div>
          <div style="position:absolute;left:9px;top:12px;width:14px;height:9px;border:3px solid #fff;border-top-color:transparent;border-radius:50%;"></div>
        `}
        ${kind === "logoff" && html`
          <div style="position:absolute;left:3px;top:3px;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#dff0ff,#3f92e2 52%,#14508f 100%);border:1px solid #123f7a;box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;left:8px;top:14px;width:12px;height:4px;background:#fff;border-radius:1px;"></div>
          <div style="position:absolute;left:18px;top:11px;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid #fff;"></div>
        `}
      </div>
    </div>
  `;
}
