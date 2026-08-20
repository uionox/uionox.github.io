import { h, render, Component, createRef } from "./vendor/preact.module.js";
import htm from "./vendor/htm.module.js";
import { OsIcon } from "./osicon.js";

const html = htm.bind(h);

/* ============================== data ============================== */

const CV = {
  education: {
    title: "Education.txt",
    blocks: [
      { head: "Lebanese University — Hadath", sub: "Bachelor of Management Information Systems (MIS) · 2026 – Present", lines: ["First year. Coursework in business analytics, financial accounting and information technology.", "Studying the seam between how a business actually runs and the systems that carry it."] },
      { head: "Toulouse College", sub: "High School Diploma · 2015 – 2024", lines: ["General sciences track."] },
      { head: "Certifications", sub: "Ongoing", lines: ["Lebanese Red Cross — Youth & Health manual trainer", "FreeCodeCamp — Expert Python", "FreeCodeCamp — Expert Database Management", "FreeCodeCamp — Beginner Java", "Google — IT Support", "Google — AdSense"] }
    ]
  },
  skills: {
    title: "Skills.txt",
    blocks: [
      { head: "Programming", sub: "Day-to-day", lines: ["Python, Flask, Django — most systems here are built on this stack", "Java, Lua, C", "MongoDB and SQL — designed and maintained 30+ databases", "Full-stack web work, front to back"] },
      { head: "Systems & Infrastructure", sub: "Where the IT support work lives", lines: ["Server and game-server administration across multiple hosting environments", "Networking, troubleshooting and infrastructure maintenance", "Security and automation tooling for monitoring and control", "Windows and Linux host support"] },
      { head: "Data & Tooling", sub: "", lines: ["Excel — advanced formulas, pivot tables, charts", "Data analysis, research and information evaluation", "Word, PowerPoint, Outlook, VS Code"] },
      { head: "Languages", sub: "", lines: ["Arabic — native", "English — fluent", "French — basic"] }
    ]
  },
  experience: {
    title: "Experience.txt",
    blocks: [
      { head: "Lebanese Red Cross — Disaster Management", sub: "2025 – Present", lines: ["Logistics and warehouse management during the 2026 war response.", "Supported emergency aid coordination, organisation and distribution workflow.", "Assisted in high-pressure interventions with hard logistical constraints.", "Data entry for the 2024 war response."] },
      { head: "Lebanese Red Cross — Youth Sector", sub: "Volunteer, Dahieh Center · 2023 – Present", lines: ["Active Youth & Health manual trainer.", "Humanitarian response participation on the ground.", "Leadership, teamwork and communication across very different age groups."] },
      { head: "Freelance & IT Support", sub: "2019 – Present", lines: ["Managed game servers and databases across several hosting environments.", "Built security and automation tools for monitoring and control.", "Designed and maintained 30+ MongoDB and SQL databases.", "IT troubleshooting, support and infrastructure maintenance for clients."] }
    ]
  },
  work: {
    title: "Other Work.txt",
    blocks: [
      { head: "Discord bot development", sub: "30+ clients", lines: ["Ticketing, moderation, gamification and server-security systems.", "Deployed in servers reaching 15,000+ users."] },
      { head: "Hand-tracking module", sub: "Python · MediaPipe · OpenCV", lines: ["A reusable hand-tracking module with 300+ active users."] },
      { head: "GitHub autoPull", sub: "Automation", lines: ["Automated repository pulling and merging with per-user settings."] },
      { head: "YouTube / fixedPafy", sub: "Open source", lines: ["Active contributor; latest work is a fix to the Pafy API."] }
    ]
  },
  overview: {
    title: "My PC",
    blocks: [
      { head: "Hussein Moussa", sub: "MIS student · IT support, systems and automation · Beirut, Lebanon", lines: ["Runs UIONOX, the umbrella this desktop belongs to.", "Comfortable in the unglamorous half of computing: servers, databases, cables, tickets, inventory that has to be right.", "Pick a file on the left to read the rest."] },
      { head: "Currently", sub: "", lines: ["First-year MIS at the Lebanese University.", "Disaster Management logistics with the Lebanese Red Cross.", "Freelance IT support and automation work."] }
    ]
  },
  contact: {
    title: "Contact.txt",
    blocks: [
      { head: "Reach me", sub: "Usually within a day", lines: ["hussein.moussa@uionox.com", "+961 78 867 886", "github.com/uiopler", "Beirut, Lebanon"] }
    ]
  }
};

const PROJECTS = {
  suppy: {
    name: "Suppy", url: "https://supplies.uionox.com", host: "supplies.uionox.com",
    kicker: "Logistics · claim handling", type: "Web application",
    hero: "linear-gradient(135deg,#0f2f6b,#1c58b8 55%,#2b7fd4)",
    tagline: "A fast, claim-based list handler for getting supplies to the people who asked for them.",
    facts: [{ k: "Stack", v: "Python · Flask · SQL" }, { k: "Type", v: "Web application" }, { k: "Status", v: "Private deployment" }],
    body: "Suppy is claim-first. Someone requests what they need, staff approve or decline, and the list stays current without anyone maintaining a spreadsheet. It is currently forked and running for a Lebanese Red Cross camp.",
    bullets: ["Claim submission and approval flow with an audit trail.", "Role separation between requesters and coordinators.", "Built for speed under pressure — few screens, no training required.", "Forked per deployment so a camp can run its own list."],
    notice: "This deployment is private, so the window shows a written overview instead of the live app.",
    readme: "SUPPY\n=====\n\nA claim-based logistics list handler.\n\nWHAT IT IS\nPeople claim what they need. Staff approve or decline.\nThe list is always the current truth — nobody maintains\na parallel spreadsheet, because there isn't one.\n\nWHY IT EXISTS\nDistribution breaks down at the list, not the warehouse.\nWhen the list lives in someone's notebook, the same\nfamily gets counted twice and the next one gets missed.\n\nWHERE IT RUNS\nsupplies.uionox.com — private.\nForked and deployed for a Lebanese Red Cross camp.\n\nHARDEST PART\nMaking approval fast enough that staff use the tool\ninstead of working around it.\n",
    stack: "STACK\n=====\n\nLanguage      Python\nFramework     Flask\nData          SQL\nFrontend      Server-rendered templates\nHosting       Linux VPS, self-administered\n\nNOTE\nExact versions and dependencies live in the repo.\nConnect github.com/uiopler to pull them in here.\n",
    changelog: "CHANGELOG\n=========\n\n0.3   Forked for the Red Cross camp deployment.\n0.2   Approvals, roles and an audit trail on every claim.\n0.1   First working claim flow.\n\n(Version notes are summaries — see the repo for commits.)\n"
  },
  ims: {
    name: "Inventory Management System", url: "https://ims.uionox.com", host: "ims.uionox.com",
    kicker: "Warehouse & stock control", type: "Web application",
    hero: "linear-gradient(135deg,#12324f,#1d5f7a 55%,#2f8fa8)",
    tagline: "A Flask inventory system for tracking what a warehouse has, where it is, and who moved it.",
    facts: [{ k: "Stack", v: "Python · Flask · SQL" }, { k: "Type", v: "Internal web application" }, { k: "Status", v: "Private deployment" }],
    body: "IMS is stock-first. Where Suppy answers who asked for what, IMS answers what is actually on the shelf, in which location, and how it got there.",
    bullets: ["Item, category and location records with running stock levels.", "Movement log — every in, out and transfer is attributable.", "Role-based access so floor staff and coordinators see the right thing.", "Reporting views for low stock and fast-moving items."],
    notice: "This deployment is private and not exposed to the public internet, so this window shows a written overview instead of the live app.",
    readme: "INVENTORY MANAGEMENT SYSTEM\n===========================\n\nWHAT IT IS\nStock control for a real warehouse: items, quantities,\nlocations, and a movement history that says who moved\nwhat and when.\n\nHOW IT DIFFERS FROM SUPPY\nSuppy is claim-first — it handles requests from people.\nIMS is stock-first — it handles what is on the shelf.\nOne answers 'who asked', the other answers 'what's left'.\n\nWHY IT EXISTS\nSpreadsheet inventory survives a quiet week and fails a\nbusy one. Two people edit the same file, and the count\nis fiction by the afternoon.\n\nWHERE IT RUNS\nims.uionox.com — private, internal use.\n",
    stack: "STACK\n=====\n\nLanguage      Python\nFramework     Flask\nData          SQL (schema designed in-house)\nFrontend      Server-rendered templates\nHosting       Linux VPS, self-administered\n\nNOTE\nExact versions and dependencies live in the repo.\nConnect github.com/uiopler to pull them in here.\n",
    changelog: "CHANGELOG\n=========\n\n0.3   Reporting views: low stock, fast movers.\n0.2   Movement log and role-based access.\n0.1   Items, locations and stock levels.\n\n(Version notes are summaries — see the repo for commits.)\n"
  },
  site: {
    name: "uionox.com", url: "https://uionox.com", host: "uionox.com",
    kicker: "This website", type: "Front-end piece",
    hero: "linear-gradient(135deg,#0a2f6e,#1f52bc 55%,#3d8ce8)",
    tagline: "The desktop you are currently clicking around in.",
    facts: [{ k: "Stack", v: "HTML · CSS · JavaScript" }, { k: "Type", v: "Front-end piece" }, { k: "Status", v: "Live" }],
    body: "A whole desktop environment in a browser tab: draggable windows, a taskbar, a working command prompt, a file explorer, two games. No page ever navigates away.",
    bullets: ["Window manager: drag, resize, focus order, minimise, maximise.", "A terminal that takes real commands and hides a few jokes.", "Snake and Minesweeper, both actually playable.", "Every icon drawn in CSS — no image assets to load."],
    notice: "You are inside it. The address bar above is decorative; this window is the site showing you itself.",
    readme: "UIONOX.COM\n==========\n\nWHAT IT IS\nA desktop operating system that runs in a browser tab,\nused as a portfolio. Windows, taskbar, explorer,\nterminal, games.\n\nWHY IT EXISTS\nA CV in a PDF proves you can write a CV. This proves\nsomething harder: state management, interaction detail,\nand restraint. The retro shell is the joke; the window\nmanager underneath it is the point.\n\nRULES IT FOLLOWS\n  1. Nothing navigates away. Everything opens in a window.\n  2. Every icon is CSS. No image requests.\n  3. It has to work on a phone too, so it stops pretending\n     to be draggable there and goes fullscreen instead.\n\nSEE ALSO\nmanifesto.txt on the desktop.\n",
    stack: "STACK\n=====\n\nLanguage      JavaScript\nRendering     Component-based, no framework build step\nStyling       Inline styles, CSS gradients only\nAssets        None — every icon is drawn in CSS\nGames         Snake and Minesweeper, hand-written\n",
    changelog: "CHANGELOG\n=========\n\n0.4   Projects became walk-in folders.\n0.3   CSS icon set across every surface.\n0.2   Terminal, Snake, Minesweeper.\n0.1   Window manager, taskbar, start menu.\n"
  }
};

const SCREENS = {
  suppy: ["claim-form.png", "approvals-queue.png", "camp-list.png"],
  ims: ["stock-overview.png", "item-detail.png", "movement-log.png"],
  site: ["desktop.png", "terminal.png", "explorer.png"]
};

const MANIFESTO = "UIONOX — MANIFESTO.txt\n" +
"=====================================\n\n" +
"creating what deserves to exist\n\n" +
"Most software does not deserve to exist. It was made because a\n" +
"deadline existed, or a budget existed, or because someone had to\n" +
"look busy. You can feel it when you use it.\n\n" +
"UIONOX is the opposite bet. Every project under this name starts\n" +
"from a problem somebody actually had, in a room I was standing in:\n" +
"a warehouse that lost track of its stock, a technician carrying six\n" +
"tools to do one job, a relief centre trying to hand out supplies\n" +
"fairly at speed.\n\n" +
"The rules are short:\n\n" +
"  1. If it is not needed, do not build it.\n" +
"  2. If it is needed, build it so it holds under pressure.\n" +
"  3. Boring reliability beats clever fragility. Always.\n" +
"  4. Ship it to the people who asked for it, not to a portfolio.\n\n" +
"This desktop is the exception that proves rule 1 — it did not need\n" +
"to exist. But you are reading it, so it earned its place.\n\n" +
"— Hussein Moussa, Beirut\n";

const BANNER = [
  "+==========================================+",
  "|                                          |",
  "|   U I O N O X   O S                      |",
  "|   creating what deserves to exist        |",
  "|                                          |",
  "+==========================================+",
];

const APPS = {
  mypc:     { title: "My PC", w: 700, h: 470, kind: "mypc" },
  projects: { title: "Projects", w: 620, h: 420, kind: "folder" },
  note:     { title: "manifesto.txt — Notepad", w: 520, h: 440, kind: "note" },
  term:     { title: "C:\\UIONOX\\command.exe", w: 620, h: 380, kind: "term" },
  bin:      { title: "Recycle Bin", w: 420, h: 300, kind: "bin" },
  snake:    { title: "Snake", w: 380, h: 440, kind: "snake" },
  mine:     { title: "Minesweeper", w: 300, h: 360, kind: "mine" },
  contact:  { title: "Contact", w: 460, h: 340, kind: "contact" },
  display:  { title: "Display Properties", w: 400, h: 500, kind: "display" }
};

const GRID = 20, CELL = 16;
const SNAKE_SPEED = 115;
const WALL_KEY = "uionox_wallpaper";
const BOOT_KEY = "uionox_booted";

/* ============================== app ============================== */

class App extends Component {
  termRef = createRef();
  wallInputRef = createRef();

  state = {
    booting: true, bootLine: "Detecting hardware…",
    clock: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    windows: [], zTop: 100, startOpen: false,
    ctx: null, selIcon: null,
    shuttingDown: false, shutDone: false, busy: false,
    mypcSection: "overview", wall: null, wallCleared: false,
    termLines: [], termInput: "", termHist: [], termHistIdx: -1,
    snake: null, snakeBest: 0, snakeMsg: "Snake", snakeBtn: "Start",
    mine: null, mineTime: 0, mineFace: ":)", mineStatus: "Left-click reveals · right-click flags",
    mobile: false
  };

  timeNow() {
    const d = new Date();
    let h = d.getHours(); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12;
    return h + ":" + String(d.getMinutes()).padStart(2, "0") + " " + ap;
  }

  componentDidMount() {
    this.setState({ mobile: window.innerWidth < 780 });
    this._onResize = () => this.setState({ mobile: window.innerWidth < 780 });
    window.addEventListener("resize", this._onResize);

    try {
      const savedWall = localStorage.getItem(WALL_KEY);
      if (savedWall) this.setState({ wall: savedWall });
    } catch (e) {}

    this.setState({ clock: this.timeNow() });
    this.tick = setInterval(() => {
      this.setState({ clock: this.timeNow() });
      if (this.state.mine && this.state.mine.started && !this.state.mine.over) this.setState(s => ({ mineTime: s.mineTime + 1 }));
    }, 1000);

    let booted = false;
    try { booted = sessionStorage.getItem(BOOT_KEY) === "1"; } catch (e) {}
    if (booted) { this.setState({ booting: false }); }
    else {
      const lines = ["Detecting hardware…", "Loading UIONOX kernel…", "Mounting C:\\PROJECTS…", "Starting desktop shell…"];
      let i = 0;
      this.bootT = setInterval(() => { i++; if (i < lines.length) this.setState({ bootLine: lines[i] }); }, 800);
      this.bootEnd = setTimeout(() => this.skipBoot(), 3400);
    }

    this._onKey = (e) => {
      if (this.state.booting) { this.skipBoot(); return; }
      if (this.snakeAlive() && ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].indexOf(e.key) >= 0) {
        e.preventDefault(); this.turn(e.key);
      }
      if (e.key === "Escape") this.setState({ startOpen: false, ctx: null });
    };
    window.addEventListener("keydown", this._onKey);

    this._onDown = (e) => {
      if (!e.target.closest || !e.target.closest("[data-keep]")) this.setState({ ctx: null });
    };
    window.addEventListener("mousedown", this._onDown);
    this._onMove = (e) => this.drag(e);
    this._onUp = () => { this._drag = null; this._rz = null; };
    window.addEventListener("mousemove", this._onMove);
    window.addEventListener("mouseup", this._onUp);
    window.addEventListener("touchmove", this._onMove, { passive: false });
    window.addEventListener("touchend", this._onUp);
    window.addEventListener("contextmenu", (e) => { if (e.target.closest && e.target.closest("[data-ctx]")) e.preventDefault(); });
  }

  componentWillUnmount() {
    clearInterval(this.tick); clearInterval(this.bootT); clearTimeout(this.bootEnd); clearInterval(this.snakeT);
    window.removeEventListener("keydown", this._onKey);
    window.removeEventListener("mousedown", this._onDown);
    window.removeEventListener("mousemove", this._onMove);
    window.removeEventListener("mouseup", this._onUp);
    window.removeEventListener("resize", this._onResize);
  }

  skipBoot = () => {
    clearInterval(this.bootT); clearTimeout(this.bootEnd);
    try { sessionStorage.setItem(BOOT_KEY, "1"); } catch (e) {}
    this.setState({ booting: false });
  };

  /* ---------- wallpaper ---------- */
  pickWall = () => this.wallInputRef.current && this.wallInputRef.current.click();
  applyWallFile = (file) => {
    if (!file || file.type.indexOf("image/") !== 0) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      this.setState({ wall: dataUrl, wallCleared: false });
      try { localStorage.setItem(WALL_KEY, dataUrl); }
      catch (e) { /* ponytail: over localStorage quota → stays in memory for this session only, no resize pipeline */ }
    };
    reader.readAsDataURL(file);
  };
  onWallFileInput = (e) => { const f = e.target.files && e.target.files[0]; if (f) this.applyWallFile(f); };
  onWallDrop = (e) => { e.preventDefault(); const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) this.applyWallFile(f); };
  onWallDragOver = (e) => e.preventDefault();
  resetWall = () => {
    this.setState({ wall: null, wallCleared: true });
    try { localStorage.removeItem(WALL_KEY); } catch (e) {}
  };

  /* ---------- window management ---------- */
  open = (app, extra) => {
    extra = extra || {};
    const id = extra.id || app;
    const existing = this.state.windows.find(w => w.id === id);
    if (existing) { this.focus(id); this.setState(s => ({ windows: s.windows.map(w => w.id === id ? { ...w, min: false } : w), startOpen: false })); return; }
    const def = APPS[app] || { title: extra.title || "Window", w: 640, h: 440, kind: extra.kind };
    const n = this.state.windows.length;
    const maxW = window.innerWidth, maxH = window.innerHeight - 44;
    const w = Math.min(extra.w || def.w, maxW - 40), h = Math.min(extra.h || def.h, maxH - 30);
    const z = this.state.zTop + 1;
    const win = {
      id, kind: extra.kind || def.kind, title: extra.title || def.title,
      x: Math.max(8, Math.round((maxW - w) / 2 - 90 + n * 26)), y: Math.max(8, Math.round((maxH - h) / 2 - 40 + n * 22)),
      w, h, z, min: false, max: false, project: extra.project || null, loading: !!extra.project,
      folder: extra.folder || (app === "projects" ? "root" : null), text: extra.text || null,
      shot: extra.shot || null, shotOf: extra.shotOf || null
    };
    this.setState(s => ({ windows: [...s.windows, win], zTop: z, startOpen: false, ctx: null, busy: !!extra.project }));
    if (app === "term" && !this.state.termLines.length) this.bootTerm();
    if (app === "snake") this.resetSnake();
    if (app === "mine") this.resetMine();
    if (extra.project) setTimeout(() => this.setState(s => ({ windows: s.windows.map(w2 => w2.id === id ? { ...w2, loading: false } : w2), busy: false })), 950);
    if (app === "term") setTimeout(() => this.termRef.current && this.termRef.current.focus(), 60);
  };

  focus = (id) => this.setState(s => s.windows.find(w => w.id === id && w.z === s.zTop) ? {} : { zTop: s.zTop + 1, windows: s.windows.map(w => w.id === id ? { ...w, z: s.zTop + 1 } : w) });
  close = (id) => this.setState(s => ({ windows: s.windows.filter(w => w.id !== id) }));
  minimize = (id) => this.setState(s => ({ windows: s.windows.map(w => w.id === id ? { ...w, min: true } : w) }));
  toggleMax = (id) => this.setState(s => ({ windows: s.windows.map(w => w.id === id ? { ...w, max: !w.max } : w) }));
  taskClick = (id) => {
    const w = this.state.windows.find(x => x.id === id);
    if (!w) return;
    if (w.min) { this.setState(s => ({ windows: s.windows.map(x => x.id === id ? { ...x, min: false } : x) })); this.focus(id); }
    else if (w.z === this.state.zTop) this.minimize(id);
    else this.focus(id);
  };
  showDesktop = () => this.setState(s => ({ windows: s.windows.map(w => ({ ...w, min: true })), startOpen: false }));

  pt = (e) => e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
  startDrag = (id, e) => {
    if (this.state.mobile) return;
    const w = this.state.windows.find(x => x.id === id);
    if (!w || w.max) return;
    const p = this.pt(e);
    this._drag = { id, dx: p.x - w.x, dy: p.y - w.y };
    this.focus(id);
  };
  startResize = (id, e) => {
    e.stopPropagation();
    const w = this.state.windows.find(x => x.id === id);
    const p = this.pt(e);
    this._rz = { id, sx: p.x, sy: p.y, w: w.w, h: w.h };
  };
  drag = (e) => {
    if (this._drag) {
      const p = this.pt(e);
      const d = this._drag;
      this.setState(s => ({ windows: s.windows.map(w => w.id === d.id ? { ...w, x: Math.max(-w.w + 90, Math.min(window.innerWidth - 60, p.x - d.dx)), y: Math.max(0, Math.min(window.innerHeight - 80, p.y - d.dy)) } : w) }));
    } else if (this._rz) {
      if (e.cancelable) e.preventDefault();
      const p = this.pt(e); const r = this._rz;
      this.setState(s => ({ windows: s.windows.map(w => w.id === r.id ? { ...w, w: Math.max(280, r.w + p.x - r.sx), h: Math.max(180, r.h + p.y - r.sy) } : w) }));
    }
  };

  openFolder = (id, title) => this.open("folder_" + id, { id: "folder_" + id, kind: "folder", title, folder: id, w: 620, h: 420 });

  openText = (key, file, label) => {
    const p = PROJECTS[key];
    const text = file === "readme" ? p.readme : (file === "stack" ? p.stack : p.changelog);
    this.open("txt_" + key + "_" + file, { id: "txt_" + key + "_" + file, kind: "note", title: label + " — Notepad", text, w: 520, h: 430 });
  };

  folderContents = (id) => {
    if (!id) return { files: [], tasks: "Double-click an item to open it.", details: [] };
    if (id === "root") {
      return {
        files: [
          { name: "Suppy", kind: "folder", onOpen: () => this.openFolder("p:suppy", "Suppy") },
          { name: "Inventory Management System", kind: "folder", onOpen: () => this.openFolder("p:ims", "Inventory Management System") },
          { name: "uionox.com", kind: "folder", onOpen: () => this.openFolder("p:site", "uionox.com") }
        ],
        tasks: "Each project is a folder. Open one and read the files inside.",
        details: ["Projects", "File Folder", "3 items"]
      };
    }
    const kind = id.slice(0, 2), key = id.slice(2);
    const p = PROJECTS[key];
    if (kind === "p:") {
      return {
        files: [
          { name: "readme.txt", kind: "note", onOpen: () => this.openText(key, "readme", "readme.txt") },
          { name: "stack.txt", kind: "note", onOpen: () => this.openText(key, "stack", "stack.txt") },
          { name: "changelog.txt", kind: "note", onOpen: () => this.openText(key, "changelog", "changelog.txt") },
          { name: "screens", kind: "folder", onOpen: () => this.openFolder("s:" + key, p.name + "\\screens") },
          { name: "open in browser", kind: "browser", onOpen: () => this.openProject(key) }
        ],
        tasks: "readme first. \"open in browser\" loads the project page.",
        details: [p.name, p.type, "5 items"]
      };
    }
    return {
      files: SCREENS[key].map(n => ({ name: n, kind: "image", onOpen: () => this.openShot(key, n) })),
      tasks: "Screenshots of " + p.name + ".",
      details: ["screens", "File Folder", SCREENS[key].length + " items"]
    };
  };

  openShot = (key, name) => this.open("shot_" + key + "_" + name, { id: "shot_" + key + "_" + name, kind: "shot", title: name + " — Image Viewer", w: 520, h: 400, shot: name, shotOf: PROJECTS[key].name });

  openProject = (key) => {
    const p = PROJECTS[key];
    this.open("browser_" + key, { id: "browser_" + key, kind: "browser", title: p.name + " — UIONOX Browser", w: 760, h: 520, project: key });
  };
  reload = (id) => {
    this.setState(s => ({ windows: s.windows.map(w => w.id === id ? { ...w, loading: true } : w), busy: true }));
    setTimeout(() => this.setState(s => ({ windows: s.windows.map(w => w.id === id ? { ...w, loading: false } : w), busy: false })), 800);
  };

  /* ---------- terminal ---------- */
  bootTerm() {
    this.setState({ termLines: [
      ...BANNER.map(t => ({ t, c: "#6fb3ff" })),
      { t: "", c: "#cfcfcf" },
      { t: "UIONOX OS [Version 2026.08.11]   (c) Hussein Moussa. Beirut.", c: "#9aa7b8" },
      { t: "Type 'help' for a list of commands.", c: "#9aa7b8" },
      { t: "", c: "#cfcfcf" }
    ] });
  }
  say = (lines) => this.setState(s => ({ termLines: [...s.termLines, ...lines.map(l => typeof l === "string" ? { t: l, c: "#cfcfcf" } : l)] }));

  runCmd = (raw) => {
    const cmd = raw.trim();
    this.say([{ t: "C:\\UIONOX> " + cmd, c: "#7ee08a" }]);
    const lc = cmd.toLowerCase();
    const arg = lc.split(/\s+/).slice(1).join(" ");
    const head = lc.split(/\s+/)[0];
    if (!cmd) return;
    const out = [];
    switch (true) {
      case head === "help":
        out.push("Available commands:", "",
          "  about        what UIONOX is", "  whoami       the human behind it",
          "  dir | ls     list C:\\UIONOX", "  cat <file>   read a file",
          "  projects     open the projects folder", "  cv           open the CV explorer",
          "  contact      how to reach me", "  motto        the whole point",
          "  date         today, allegedly", "  echo <text>  say it back",
          "  snake        play snake", "  mines        play minesweeper",
          "  clear        wipe the screen", "  exit         close this window", "",
          "There are a few undocumented ones. You'll find them.");
        break;
      case head === "about":
        out.push("UIONOX — a software umbrella out of Beirut, Lebanon.",
          "Inventory systems, IT tooling, automation, and whatever else",
          "somebody actually needed built.", "", "  creating what deserves to exist");
        break;
      case head === "whoami":
        out.push("hussein.moussa", "  MIS student, Lebanese University — Hadath",
          "  IT support · sysadmin · databases · automation",
          "  Lebanese Red Cross — Youth & Disaster Management",
          "  Beirut, LB");
        break;
      case head === "dir" || head === "ls":
        out.push(" Volume in drive C is UIONOX", "", " Directory of C:\\UIONOX", "",
          " 20/08/2026  10:58    <DIR>          projects\\suppy",
          " 20/08/2026  10:58    <DIR>          projects\\ims",
          " 20/08/2026  10:58    <DIR>          projects\\uionox.com",
          " 20/08/2026  10:58    <DIR>          cv",
          " 20/08/2026  10:58             4,096 manifesto.txt",
          " 20/08/2026  10:58             1,208 contact.txt",
          " 20/08/2026  10:58            13,370 snake.exe",
          " 20/08/2026  10:58             9,001 mines.exe",
          "               4 File(s)         27,675 bytes");
        break;
      case head === "cat" || head === "type":
        if (arg.indexOf("manifesto") >= 0) { this.open("note"); out.push("Opening manifesto.txt in Notepad…"); }
        else if (arg.indexOf("contact") >= 0) { out.push("hussein.moussa@uionox.com", "+961 78 867 886", "github.com/uiopler"); }
        else out.push("The system cannot find the file specified: " + (arg || "<nothing>"));
        break;
      case head === "projects":
        if (arg.indexOf("suppy") >= 0) { this.openFolder("p:suppy", "Suppy"); out.push("Opening C:\\UIONOX\\projects\\suppy…"); }
        else if (arg.indexOf("ims") >= 0 || arg.indexOf("inventory") >= 0) { this.openFolder("p:ims", "Inventory Management System"); out.push("Opening C:\\UIONOX\\projects\\ims…"); }
        else if (arg.indexOf("uionox") >= 0 || arg.indexOf("site") >= 0) { this.openFolder("p:site", "uionox.com"); out.push("Opening C:\\UIONOX\\projects\\uionox.com…"); }
        else { this.open("projects"); out.push("Opening C:\\UIONOX\\projects…", "", "  suppy   ims   uionox.com", "", "Tip: 'projects suppy' opens one directly."); }
        break;
      case head === "cv" || head === "resume": this.open("mypc"); out.push("Mounting My PC…"); break;
      case head === "contact":
        out.push("Email   hussein.moussa@uionox.com", "Phone   +961 78 867 886", "GitHub  github.com/uiopler", "Where   Beirut, Lebanon");
        break;
      case head === "motto": out.push({ t: "creating what deserves to exist", c: "#7ee08a" }); break;
      case head === "date": out.push(new Date().toString()); break;
      case head === "echo": out.push(cmd.slice(5) || ""); break;
      case lc === "snake" || lc === "play snake": this.open("snake"); out.push("Launching snake.exe…"); break;
      case head === "mines" || head === "minesweeper": this.open("mine"); out.push("Launching mines.exe…"); break;
      case head === "clear" || head === "cls": this.setState({ termLines: [] }); return;
      case head === "exit": this.close("term"); return;
      /* easter eggs */
      case head === "sudo": out.push("This is not that kind of computer.", "Permission granted anyway. You seem trustworthy."); break;
      case lc === "hello world" || lc === "hello" || lc === "hi":
        out.push("Hello, world.", "It took 40 years of computing to get to this and we still say it."); break;
      case head === "matrix":
        out.push({ t: "01001101 01100001 01110100 01110010 01101001 01111000", c: "#3ddc6b" },
          { t: "10110010 11001001 00110110 10011010 01011101 00100111", c: "#2fb457" },
          { t: "01110100 01101000 01100101 01110010 01100101 00100000", c: "#3ddc6b" },
          { t: "", c: "#cfcfcf" }, "There is no spoon. There is, however, a snake. Try 'snake'.");
        break;
      case lc.indexOf("rm -rf") === 0:
        out.push("Deleting everything…", "…", "…", "Nothing was deleted. Everything here deserves to exist.");
        break;
      case head === "ping": out.push("Pinging " + (arg || "uionox.com") + " with 32 bytes of data:", "Reply from 127.0.0.1: bytes=32 time<1ms TTL=128", "Reply from 127.0.0.1: bytes=32 time<1ms TTL=128", "", "It's coming from inside the house."); break;
      case head === "vim" || head === "vi" || head === "emacs": out.push("Opened " + head + ". You are now trapped here forever.", "(Just kidding. Try :q! — that won't work either.)"); break;
      case lc === "format c:" || head === "format": out.push("Are you sure? (y/n) y", "Formatting… 0% complete.", "Formatting… 0% complete.", "Formatting… 0% complete.", "This is going to take a while. Go read the manifesto."); break;
      case head === "cd": out.push("There is nowhere else to go. This is the whole world."); break;
      case lc === "hack" || lc === "hack the mainframe": out.push("ACCESS GRANTED", "Downloading… 100%", "You have successfully hacked a portfolio site. Congratulations."); break;
      case head === "coffee": out.push("HTTP 418 — I'm a teapot.", "Also it's Beirut. Get Arabic coffee, it's better."); break;
      case head === "npm" || head === "pip" || head === "apt":
        out.push("Resolving dependencies…", "Found 4,821 packages for a function you could write in nine lines.", "Aborted."); break;
      case lc === "the answer" || lc === "42": out.push("42. But you knew that."); break;
      case head === "shutdown": this.doShutdown(); return;
      default:
        out.push("'" + cmd.split(/\s+/)[0] + "' is not recognized as an internal or external command,", "operable program or batch file.", "Try 'help'.");
    }
    out.push("");
    this.say(out);
  };

  onTermKey = (e) => {
    if (e.key === "Enter") {
      const v = this.state.termInput;
      this.setState(s => ({ termInput: "", termHist: v.trim() ? [v, ...s.termHist].slice(0, 40) : s.termHist, termHistIdx: -1 }));
      this.runCmd(v);
      setTimeout(() => { const el = this.termRef.current; if (el && el.parentElement && el.parentElement.parentElement) { const sc = el.parentElement.parentElement; sc.scrollTop = sc.scrollHeight; } }, 20);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(this.state.termHistIdx + 1, this.state.termHist.length - 1);
      if (i >= 0) this.setState({ termHistIdx: i, termInput: this.state.termHist[i] });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = this.state.termHistIdx - 1;
      this.setState({ termHistIdx: i, termInput: i >= 0 ? this.state.termHist[i] : "" });
    }
  };

  /* ---------- snake ---------- */
  resetSnake = () => {
    clearInterval(this.snakeT);
    this.setState({ snake: { body: [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }], dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: { x: 14, y: 10 }, score: 0, running: false, dead: false }, snakeMsg: "Snake", snakeBtn: "Start" });
  };
  snakeAlive = () => { const s = this.state.snake; return s && s.running; };
  startSnake = () => {
    clearInterval(this.snakeT);
    this.setState(s => ({ snake: { ...s.snake, body: [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }], dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: { x: 14, y: 10 }, score: 0, running: true, dead: false } }));
    this.snakeT = setInterval(this.step, SNAKE_SPEED);
  };
  turn = (k) => {
    const map = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 }, w: { x: 0, y: -1 }, s: { x: 0, y: 1 }, a: { x: -1, y: 0 }, d: { x: 1, y: 0 } };
    const d = map[k] || map[k.toLowerCase()];
    if (!d) return;
    const cur = this.state.snake.dir;
    if (d.x === -cur.x && d.y === -cur.y) return;
    this.setState(s => ({ snake: { ...s.snake, next: d } }));
  };
  step = () => {
    this.setState(s => {
      const sn = s.snake; if (!sn || !sn.running) return {};
      const dir = sn.next;
      const head = { x: sn.body[0].x + dir.x, y: sn.body[0].y + dir.y };
      if (head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID || sn.body.some(b => b.x === head.x && b.y === head.y)) {
        clearInterval(this.snakeT);
        return { snake: { ...sn, running: false, dead: true }, snakeMsg: "Game over — " + sn.score, snakeBtn: "Play again", snakeBest: Math.max(s.snakeBest, sn.score) };
      }
      const body = [head, ...sn.body];
      let food = sn.food, score = sn.score;
      if (head.x === food.x && head.y === food.y) {
        score += 1;
        do { food = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) }; } while (body.some(b => b.x === food.x && b.y === food.y));
      } else body.pop();
      return { snake: { ...sn, body, dir, food, score } };
    });
  };

  /* ---------- minesweeper ---------- */
  resetMine = () => {
    const cells = [];
    for (let i = 0; i < 81; i++) cells.push({ mine: false, open: false, flag: false, n: 0 });
    this.setState({ mine: { cells, started: false, over: false, won: false }, mineTime: 0, mineFace: ":)", mineStatus: "Left-click reveals · right-click flags" });
  };
  plant = (cells, first) => {
    let placed = 0;
    while (placed < 10) {
      const i = Math.floor(Math.random() * 81);
      if (cells[i].mine || i === first) continue;
      cells[i].mine = true; placed++;
    }
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(i / 9), c = i % 9; let n = 0;
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
        const rr = r + dr, cc = c + dc;
        if (rr >= 0 && rr < 9 && cc >= 0 && cc < 9 && cells[rr * 9 + cc].mine) n++;
      }
      cells[i].n = n;
    }
  };
  flood = (cells, i) => {
    const st = [i];
    while (st.length) {
      const k = st.pop(); const c = cells[k];
      if (c.open || c.flag) continue;
      c.open = true;
      if (c.n === 0) {
        const r = Math.floor(k / 9), cc0 = k % 9;
        for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
          const rr = r + dr, cc = cc0 + dc;
          if (rr >= 0 && rr < 9 && cc >= 0 && cc < 9) st.push(rr * 9 + cc);
        }
      }
    }
  };
  mineClick = (i) => {
    this.setState(s => {
      const m = s.mine; if (!m || m.over) return {};
      const cells = m.cells.map(c => ({ ...c }));
      if (cells[i].flag) return {};
      let started = m.started;
      if (!started) { this.plant(cells, i); started = true; }
      if (cells[i].mine) {
        cells.forEach(c => { if (c.mine) c.open = true; });
        return { mine: { ...m, cells, started, over: true }, mineFace: "x(", mineStatus: "Boom. Click the face to try again." };
      }
      this.flood(cells, i);
      const safe = cells.filter(c => !c.mine && c.open).length;
      if (safe === 71) return { mine: { ...m, cells, started, over: true, won: true }, mineFace: "B)", mineStatus: "Cleared. Nine by nine, ten mines, no luck involved. Probably." };
      return { mine: { ...m, cells, started }, mineStatus: "Left-click reveals · right-click flags" };
    });
  };
  mineFlag = (i, e) => {
    e.preventDefault(); e.stopPropagation();
    this.setState(s => {
      const m = s.mine; if (!m || m.over || m.cells[i].open) return {};
      const cells = m.cells.map((c, k) => k === i ? { ...c, flag: !c.flag } : c);
      return { mine: { ...m, cells } };
    });
  };

  /* ---------- shell ---------- */
  doShutdown = () => {
    this.setState({ startOpen: false, shuttingDown: true, shutDone: false });
    setTimeout(() => this.setState({ shutDone: true }), 2200);
  };
  reboot = () => this.setState({ shuttingDown: false, shutDone: false, windows: [], booting: true, bootLine: "Restarting UIONOX OS…" }, () => {
    clearTimeout(this.bootEnd); this.bootEnd = setTimeout(() => this.skipBoot(), 1800);
  });

  ctxMenu = (e, items) => {
    e.preventDefault(); e.stopPropagation();
    this.setState({ ctx: { x: Math.min(e.clientX, window.innerWidth - 170), y: Math.min(e.clientY, window.innerHeight - 190), items }, startOpen: false });
  };

  /* ---------- render ---------- */
  render() {
    const st = this.state, mob = st.mobile;

    const iconDefs = [
      { id: "mypc", label: "My PC", kind: "mypc", app: "mypc" },
      { id: "projects", label: "Projects", kind: "folder", app: "projects" },
      { id: "note", label: "manifesto.txt", kind: "note", app: "note" },
      { id: "term", label: "Command Prompt", kind: "term", app: "term" },
      { id: "bin", label: "Recycle Bin", kind: "bin", app: "bin" }
    ];
    const icons = iconDefs.map(d => {
      const sel = st.selIcon === d.id;
      return {
        ...d,
        wrapStyle: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "4px", padding: "6px 3px", cursor: "default", height: "76px", outline: sel ? "1px dotted rgba(255,255,255,0.75)" : "none", outlineOffset: "-2px" },
        labelStyle: { fontSize: "11px", color: "#fff", textAlign: "center", lineHeight: "1.3", maxWidth: "76px", textShadow: sel ? "none" : "0 1px 2px rgba(0,15,45,0.95), 0 0 3px rgba(0,15,45,0.7)", background: sel ? "#0d47b0" : "transparent", padding: "1px 3px", borderRadius: "1px", overflowWrap: "break-word", boxShadow: sel ? "0 0 0 1px rgba(255,255,255,0.25)" : "none" },
        onSelect: () => { this.setState({ selIcon: d.id, ctx: null }); if (mob) this.open(d.app); },
        onOpen: () => this.open(d.app),
        onCtx: (e) => this.ctxMenu(e, [
          { label: "Open", act: () => this.open(d.app) },
          { label: "Explore", act: () => this.open(d.app) },
          { label: "Rename", act: null },
          { label: "Delete", act: null },
          { label: "Properties", act: () => this.open("note") }
        ])
      };
    });

    const areaH = window.innerHeight - 44;
    const windows = st.windows.filter(w => !w.min).map(w => {
      const maxed = w.max || mob;
      const frameStyle = maxed
        ? { position: "absolute", left: 0, top: 0, width: "100%", height: areaH + "px", zIndex: w.z, padding: "2px" }
        : { position: "absolute", left: w.x + "px", top: w.y + "px", width: w.w + "px", height: w.h + "px", zIndex: w.z };
      const active = w.z === st.zTop;
      const p = w.project ? PROJECTS[w.project] : null;
      const secKeys = [["overview", "My PC"], ["education", "Education.txt"], ["skills", "Skills.txt"], ["experience", "Experience.txt"], ["work", "Other Work.txt"], ["contact", "Contact.txt"]];
      const doc = CV[st.mypcSection] || CV.overview;
      const fc = this.folderContents(w.folder);
      return {
        ...w,
        frameStyle,
        shellStyle: {
          height: "100%", display: "flex", flexDirection: "column", background: "#ece9d8", overflow: "hidden",
          border: active ? "3px solid #0a4bb5" : "3px solid #7f97c2", borderTopWidth: 0,
          borderRadius: "8px 8px 2px 2px",
          boxShadow: active
            ? "0 16px 44px rgba(2,14,44,0.5), 0 2px 8px rgba(2,14,44,0.35), inset 0 0 0 1px rgba(255,255,255,0.28)"
            : "0 8px 22px rgba(2,14,44,0.3), inset 0 0 0 1px rgba(255,255,255,0.2)"
        },
        iconKind: w.kind === "mypc" ? "mypc" : w.kind,
        titleBarStyle: {
          position: "relative", display: "flex", alignItems: "center", gap: "6px", padding: "0 4px 0 6px",
          height: "28px", flex: "none", color: "#fff", cursor: maxed ? "default" : "move", borderRadius: "6px 6px 0 0",
          background: active
            ? "linear-gradient(180deg,#0a4bb5 0%,#3d84ec 6%,#2a6cdc 16%,#1b52c0 46%,#1a4fbb 78%,#3576de 92%,#0e3f9e 100%)"
            : "linear-gradient(180deg,#7f97c2 0%,#a8bcd9 8%,#8ba2c6 46%,#7b91b8 84%,#66799c 100%)",
          boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.25)"
        },
        resizable: !maxed,
        isBrowser: w.kind === "browser", isMyPC: w.kind === "mypc", isFolder: w.kind === "folder",
        isNote: w.kind === "note", isTerm: w.kind === "term", isSnake: w.kind === "snake",
        isMine: w.kind === "mine", isBin: w.kind === "bin", isContact: w.kind === "contact", isShot: w.kind === "shot", isDisplay: w.kind === "display",
        previewStyle: st.wall
          ? { width: "100%", height: "100%", backgroundImage: "url(" + st.wall + ")", backgroundSize: "cover", backgroundPosition: "center" }
          : { width: "100%", height: "100%", background: "linear-gradient(180deg,#1560b8 0%,#3f97e2 34%,#9dd2f2 58%,#e9f2f4 70%,#6fb122 71%,#2f6609 100%)" },
        shotName: w.shot || "", shotOf: w.shotOf || "",
        ready: w.kind === "browser" && !w.loading,
        url: p ? p.url : "", host: p ? p.host : "", kicker: p ? p.kicker : "", name: p ? p.name : "",
        tagline: p ? p.tagline : "", facts: p ? p.facts : [], body: p ? p.body : "", bullets: p ? p.bullets : [], notice: p ? p.notice : "",
        status: p ? "Done" : "",
        heroStyle: p ? { background: p.hero, color: "#fff", padding: "46px 30px 42px", display: "flex", justifyContent: "center", fontFamily: "Tahoma,Verdana,sans-serif" } : {},
        text: w.text || MANIFESTO,
        docTitle: doc.title, blocks: doc.blocks.map(b => ({ ...b, headStyle: { fontSize: "13px", fontWeight: 700, color: "#16283f", marginBottom: b.sub ? "2px" : "6px" } })),
        nav: secKeys.map(([k, label]) => ({
          label,
          style: { display: "flex", alignItems: "center", gap: "7px", padding: "4px 7px", borderRadius: "2px", cursor: "default", fontSize: "11.5px", color: st.mypcSection === k ? "#fff" : "#1b4a94", background: st.mypcSection === k ? "linear-gradient(180deg,#4a8bea,#2a63cf)" : "transparent", fontWeight: st.mypcSection === k ? 700 : 400, textDecoration: st.mypcSection === k ? "none" : "underline", textDecorationColor: "rgba(27,74,148,0.3)" },
          kind: k === "overview" ? "mypc" : (k === "contact" ? "contact" : "note"),
          onClick: () => this.setState({ mypcSection: k })
        })),
        folderTasks: fc.tasks, folderDetails: fc.details, files: fc.files,
        onFocus: () => this.focus(w.id),
        onDragStart: (e) => this.startDrag(w.id, e),
        onResizeStart: (e) => this.startResize(w.id, e),
        onMin: (e) => { e.stopPropagation(); this.minimize(w.id); },
        onMax: (e) => { e.stopPropagation(); this.toggleMax(w.id); },
        onClose: (e) => { e.stopPropagation(); this.close(w.id); },
        onReload: () => this.reload(w.id)
      };
    });

    const taskItems = st.windows.map(w => ({
      title: w.title.length > 26 ? w.title.slice(0, 24) + "…" : w.title,
      kind: w.kind,
      style: {
        display: "flex", alignItems: "center", gap: "6px", padding: "0 9px", height: "30px", minWidth: "92px", maxWidth: "172px",
        borderRadius: "3px", color: "#fff", fontSize: "11px", cursor: "default", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        border: "1px solid rgba(0,20,70,0.32)", textShadow: "0 1px 1px rgba(0,10,40,0.6)",
        fontWeight: (!w.min && w.z === st.zTop) ? 700 : 400,
        background: (!w.min && w.z === st.zTop)
          ? "linear-gradient(180deg,#12379c 0%,#1c49ae 12%,#2d63c9 62%,#3d78dc 100%)"
          : "linear-gradient(180deg,#5c98ec 0%,#3d78dd 12%,#2a5fc6 60%,#1f4cb0 100%)",
        boxShadow: (!w.min && w.z === st.zTop)
          ? "inset 0 2px 4px rgba(0,10,40,0.5), inset 0 -1px 0 rgba(255,255,255,0.18)"
          : "inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -2px 4px rgba(0,10,40,0.2)"
      },
      onClick: () => this.taskClick(w.id)
    }));

    const itemStyle = () => ({ display: "flex", alignItems: "center", gap: "9px", padding: "6px 8px", borderRadius: "2px", cursor: "default" });

    const startPinned = [
      { label: "My PC", sub: "CV, skills, experience", kind: "mypc", act: () => this.open("mypc") },
      { label: "Projects", sub: "Things that shipped", kind: "folder", act: () => this.open("projects") },
      { label: "Command Prompt", sub: "It takes real commands", kind: "term", act: () => this.open("term") }
    ].map(i => ({ ...i, style: itemStyle(), onClick: i.act }));

    const startRecent = [
      { label: "Notepad", sub: "manifesto.txt", kind: "note", act: () => this.open("note") },
      { label: "Snake", sub: "Arrow keys. Obviously.", kind: "snake", act: () => this.open("snake") },
      { label: "Minesweeper", sub: "Nine by nine, ten mines", kind: "mine", act: () => this.open("mine") }
    ].map(i => ({ ...i, style: itemStyle(), onClick: i.act }));

    const startRight = [
      { label: "My PC", kind: "mypc", act: () => this.open("mypc") },
      { label: "My Documents", kind: "folder", act: () => this.open("projects") },
      { label: "Contact", kind: "contact", act: () => this.open("contact") },
      { label: "Recycle Bin", kind: "bin", act: () => this.open("bin") },
      { label: "Command Prompt", kind: "term", act: () => this.open("term") }
    ].map(i => ({ ...i, style: itemStyle(), onClick: i.act }));

    const sn = st.snake;
    const snakeParts = [];
    if (sn) {
      sn.body.forEach((b, i) => snakeParts.push({
        style: { position: "absolute", left: b.x * CELL + "px", top: b.y * CELL + "px", width: CELL + "px", height: CELL + "px", borderRadius: i === 0 ? "4px" : "2px", background: i === 0 ? "#c9f58a" : "#7ec13f", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18)" }
      }));
      snakeParts.push({ style: { position: "absolute", left: sn.food.x * CELL + 3 + "px", top: sn.food.y * CELL + 3 + "px", width: CELL - 6 + "px", height: CELL - 6 + "px", borderRadius: "50%", background: "#ff5a3c", boxShadow: "0 0 6px rgba(255,90,60,0.8)" } });
    }

    const m = st.mine;
    const numColors = ["", "#1a3fd4", "#1a7a1a", "#c31414", "#0d1a7a", "#7a1414", "#0d6f6f", "#000", "#666"];
    const mineCells = m ? m.cells.map((c, i) => ({
      label: c.open ? (c.mine ? "*" : (c.n ? String(c.n) : "")) : (c.flag ? "|>" : ""),
      style: {
        width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Tahoma,sans-serif", fontSize: "12px", fontWeight: 700, cursor: "default",
        color: c.open && c.mine ? "#000" : (c.flag ? "#c31414" : numColors[c.n] || "#000"),
        background: c.open ? (c.mine ? "#e05a4a" : "#c8c4bc") : "#c0c0c0",
        borderTop: c.open ? "1px solid #a5a19a" : "3px solid #fdfdfd",
        borderLeft: c.open ? "1px solid #a5a19a" : "3px solid #fdfdfd",
        borderRight: c.open ? "1px solid #c8c4bc" : "3px solid #7b7b74",
        borderBottom: c.open ? "1px solid #c8c4bc" : "3px solid #7b7b74"
      },
      onClick: () => this.mineClick(i),
      onFlag: (e) => this.mineFlag(i, e)
    })) : [];

    const flags = m ? m.cells.filter(c => c.flag).length : 0;

    const contactRows = [
      { k: "Email", v: "hussein.moussa@uionox.com" },
      { k: "Phone", v: "+961 78 867 886" },
      { k: "GitHub", v: "github.com/uiopler" },
      { k: "Based in", v: "Beirut, Lebanon" }
    ];

    const startBtnStyle = {
      position: "relative", display: "flex", alignItems: "center", gap: "8px", padding: "0 26px 2px 11px", cursor: "default",
      fontSize: "16px", fontWeight: 700, fontStyle: "italic", color: "#fff", textShadow: "0 1px 2px rgba(0,40,0,0.75)",
      borderRadius: "0 16px 16px 0", letterSpacing: "0.01em", flex: "none",
      background: st.startOpen
        ? "linear-gradient(180deg,#2f6412 0%,#3f7a18 30%,#2b5c10 100%)"
        : "linear-gradient(180deg,#5fa923 0%,#8ecb43 10%,#6cb32c 26%,#43900f 60%,#4e9c17 86%,#2c6a0c 100%)",
      boxShadow: st.startOpen
        ? "inset 0 2px 6px rgba(0,20,0,0.55)"
        : "inset 0 1px 0 rgba(255,255,255,0.5), inset -2px 0 6px rgba(0,30,0,0.25), 3px 0 8px rgba(0,10,40,0.3)"
    };

    const wallStyle = st.wall
      ? { pointerEvents: "none", position: "absolute", inset: 0, backgroundImage: "url(" + st.wall + ")", backgroundSize: "cover", backgroundPosition: "center" }
      : { display: "none" };

    const ctxStyle = st.ctx ? { position: "absolute", left: st.ctx.x + "px", top: st.ctx.y + "px", zIndex: 9700, minWidth: "158px", padding: "2px", background: "#f6f4ec", border: "1px solid #9a9484", boxShadow: "3px 3px 8px rgba(0,0,0,0.3)" } : {};
    const ctxItems = st.ctx ? st.ctx.items.map(it => ({
      label: it.label,
      style: { padding: "5px 20px 5px 24px", fontSize: "11.5px", cursor: "default", color: it.act ? "#111" : "#9c9c96", borderRadius: "2px" },
      onClick: () => { this.setState({ ctx: null }); if (it.act) it.act(); }
    })) : [];

    const termLines = st.termLines.map(l => ({ t: l.t === "" ? " " : l.t, style: { color: l.c || "#cfcfcf", whiteSpace: "pre", minHeight: "1.28em" } }));
    const mineTime = String(Math.min(st.mineTime, 999)).padStart(3, "0");
    const mineFlagsLeft = String(Math.max(0, 10 - flags)).padStart(3, "0");
    const shutTitle = st.shutDone ? "It is now safe to contact Hussein." : "UIONOX OS is shutting down…";
    const shutSub = st.shutDone ? "The computer is off. The person is not." : "Saving your settings. Closing 0 unsaved manifestos.";

    return html`
      <div style="position:fixed;inset:0;overflow:hidden;font-family:Tahoma,Verdana,Geneva,sans-serif;font-size:11px;color:#000;user-select:none;background:#0a2f6e;">

        <div style="position:absolute;inset:0;background:linear-gradient(180deg,#0f4f9e 0%,#1560b8 8%,#1d70c9 17%,#2a83d8 27%,#3f97e2 37%,#5aabe8 47%,#7bc0ee 56%,#9dd2f2 63%,#bfe1f4 69%,#d8ecf6 73%,#e9f2f4 76%);"></div>
        <div style="position:absolute;inset:0;" onContextMenu=${(e) => this.ctxMenu(e, [
          { label: "Refresh", act: () => this.forceUpdate() },
          { label: "Arrange icons by", act: null },
          { label: "New folder", act: null },
          { label: "Open Command Prompt", act: () => this.open("term") },
          { label: "Properties", act: () => this.open("display") }
        ])} data-ctx="1" onClick=${() => this.setState({ selIcon: null, startOpen: false, ctx: null })}></div>
        <div style="pointer-events:none;position:absolute;left:0;right:0;top:0;height:80%;filter:blur(9px);opacity:0.55;background:radial-gradient(24% 4.4% at 18% 22%,rgba(255,255,255,0.95),rgba(255,255,255,0) 74%),radial-gradient(17% 3% at 32% 16%,rgba(255,255,255,0.8),rgba(255,255,255,0) 76%),radial-gradient(28% 4.6% at 63% 29%,rgba(255,255,255,0.72),rgba(255,255,255,0) 76%),radial-gradient(19% 3.2% at 85% 21%,rgba(255,255,255,0.6),rgba(255,255,255,0) 78%),radial-gradient(22% 3.6% at 47% 41%,rgba(255,255,255,0.45),rgba(255,255,255,0) 78%);"></div>
        <div style="pointer-events:none;position:absolute;left:0;right:0;top:0;height:82%;filter:blur(4px);background:radial-gradient(15% 2.2% at 20% 20%,rgba(255,255,255,0.92),rgba(255,255,255,0) 74%),radial-gradient(10% 1.5% at 28% 15%,rgba(255,255,255,0.8),rgba(255,255,255,0) 76%),radial-gradient(12% 1.7% at 12% 26%,rgba(255,255,255,0.7),rgba(255,255,255,0) 76%),radial-gradient(17% 2.3% at 65% 28%,rgba(255,255,255,0.7),rgba(255,255,255,0) 76%),radial-gradient(11% 1.6% at 76% 22%,rgba(255,255,255,0.58),rgba(255,255,255,0) 78%),radial-gradient(13% 1.8% at 44% 40%,rgba(255,255,255,0.4),rgba(255,255,255,0) 78%);"></div>
        <div style="pointer-events:none;position:absolute;left:0;right:0;top:0;height:86%;filter:blur(2px);background:radial-gradient(30% 0.7% at 26% 30%,rgba(255,255,255,0.6),rgba(255,255,255,0) 78%),radial-gradient(24% 0.6% at 60% 37%,rgba(255,255,255,0.5),rgba(255,255,255,0) 80%),radial-gradient(20% 0.5% at 84% 33%,rgba(255,255,255,0.42),rgba(255,255,255,0) 80%),radial-gradient(26% 0.6% at 14% 46%,rgba(255,255,255,0.36),rgba(255,255,255,0) 80%);"></div>
        <div style="pointer-events:none;position:absolute;left:0;right:0;bottom:28%;height:12%;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(246,251,253,0.5) 60%,rgba(238,247,250,0.72) 100%);filter:blur(5px);"></div>
        <div style="pointer-events:none;position:absolute;left:-18%;right:-18%;bottom:25%;height:10%;border-radius:50% 50% 0 0 / 100% 100% 0 0;background:linear-gradient(180deg,#8fb27a,#6d9257);opacity:0.4;filter:blur(4px);"></div>
        <div style="pointer-events:none;position:absolute;left:-14%;right:-14%;bottom:19%;height:15%;border-radius:50% 50% 0 0 / 100% 100% 0 0;background:linear-gradient(180deg,#79ae44 0%,#5f9330 58%,#4b7c22 100%);opacity:0.9;filter:blur(1.5px);box-shadow:inset 0 5px 9px rgba(255,255,255,0.3);"></div>
        <div style="pointer-events:none;position:absolute;left:-10%;right:-10%;bottom:-16%;height:50%;border-radius:50% 50% 0 0 / 58% 58% 0 0;background:linear-gradient(180deg,#83c02f 0%,#6fb122 18%,#559b16 46%,#3f800f 74%,#2f6609 100%);box-shadow:inset 0 7px 14px rgba(255,255,255,0.34),inset 0 22px 40px rgba(255,255,255,0.12);"></div>
        <div style="pointer-events:none;position:absolute;left:-10%;right:-10%;bottom:-16%;height:50%;border-radius:50% 50% 0 0 / 58% 58% 0 0;background:radial-gradient(58% 42% at 30% 3%,rgba(214,255,150,0.3),rgba(214,255,150,0) 70%),radial-gradient(46% 34% at 76% 26%,rgba(0,26,10,0.26),rgba(0,26,10,0) 72%);"></div>
        <div style="pointer-events:none;position:absolute;left:-32%;right:38%;bottom:-14%;height:38%;border-radius:50% 50% 0 0 / 68% 68% 0 0;background:linear-gradient(180deg,#9ace35 0%,#7cb824 42%,#5b9614 100%);box-shadow:inset 0 6px 13px rgba(255,255,255,0.38),inset 0 18px 34px rgba(255,255,255,0.14);"></div>
        <div style="pointer-events:none;position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,0.012) 0 1px,rgba(0,0,0,0.012) 1px 2px);"></div>
        <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(115% 92% at 42% 46%,rgba(0,0,0,0) 46%,rgba(4,20,50,0.4) 100%);"></div>
        <div style=${wallStyle}></div>
        <div style="pointer-events:none;position:absolute;right:6%;top:8%;width:min(38vw,420px);text-align:right;color:rgba(255,255,255,0.55);font-size:clamp(28px,4.4vw,64px);font-weight:700;letter-spacing:0.24em;text-shadow:0 2px 18px rgba(10,40,110,0.5);">UIONOX</div>
        <div style="pointer-events:none;position:absolute;right:6%;top:calc(8% + clamp(34px,5.2vw,76px));width:min(38vw,420px);text-align:right;color:rgba(255,255,255,0.5);font-size:clamp(10px,1.1vw,14px);letter-spacing:0.34em;text-transform:uppercase;">creating what deserves to exist</div>

        <div style="position:absolute;left:0;top:0;bottom:44px;width:100px;display:grid;grid-template-columns:repeat(1,84px);grid-auto-rows:76px;gap:2px;align-content:start;padding:8px 6px;z-index:1;">
          ${icons.map(ic => html`
            <div style=${ic.wrapStyle} onClick=${ic.onSelect} onDblClick=${ic.onOpen} onContextMenu=${ic.onCtx} data-ctx="1">
              <div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex:none;">
                <${OsIcon} kind=${ic.kind} size=${32} />
              </div>
              <div style=${ic.labelStyle}>${ic.label}</div>
            </div>
          `)}
        </div>

        ${windows.map(win => html`
          <div style=${win.frameStyle} onMouseDown=${win.onFocus}>
            <div style=${win.shellStyle}>
              <div style=${win.titleBarStyle} onMouseDown=${win.onDragStart} onDblClick=${win.onMax}>
                <div style="position:absolute;left:2px;right:2px;top:1px;height:9px;border-radius:6px 6px 0 0;background:linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0));pointer-events:none;"></div>
                <${OsIcon} kind=${win.iconKind} size=${16} />
                <div style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-size:11.5px;letter-spacing:0.01em;text-shadow:0 1px 2px rgba(0,10,40,0.75);">${win.title}</div>
                <div style="display:flex;gap:2px;flex:none;">
                  <div class="hv-bright18" style="width:22px;height:20px;border-radius:3px;border:1px solid rgba(255,255,255,0.8);background:linear-gradient(180deg,#8fb8f2,#3d76dd 46%,#1f4fae);box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 -3px 5px rgba(0,0,0,0.16);display:flex;align-items:flex-end;justify-content:center;padding-bottom:4px;cursor:default;" onClick=${win.onMin}><div style="width:9px;height:3px;background:#fff;"></div></div>
                  <div class="hv-bright18" style="width:22px;height:20px;border-radius:3px;border:1px solid rgba(255,255,255,0.8);background:linear-gradient(180deg,#8fb8f2,#3d76dd 46%,#1f4fae);box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 -3px 5px rgba(0,0,0,0.16);display:flex;align-items:center;justify-content:center;cursor:default;" onClick=${win.onMax}><div style="width:10px;height:9px;border:2px solid #fff;border-top-width:3px;"></div></div>
                  <div class="hv-bright15" style="width:22px;height:20px;border-radius:3px;border:1px solid rgba(255,255,255,0.85);background:linear-gradient(180deg,#f4a48c,#dd5030 46%,#ab2510);box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 -3px 5px rgba(0,0,0,0.16);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;line-height:1;cursor:default;text-shadow:0 1px 1px rgba(0,0,0,0.4);" onClick=${win.onClose}>×</div>
                </div>
              </div>

              ${win.isBrowser && html`
                <div style="display:flex;gap:13px;padding:3px 9px;background:linear-gradient(180deg,#fdfdfa,#f0eee2 60%,#e6e3d4);border-bottom:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;color:#1b1b17;flex:none;">
                  <span>File</span><span>Edit</span><span>View</span><span>Favorites</span><span>Help</span>
                </div>
                <div style="display:flex;align-items:center;gap:7px;padding:5px 9px;background:linear-gradient(180deg,#fdfdfa,#efedde 55%,#e2dfcf);border-bottom:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;flex:none;">
                  <div style="display:flex;gap:3px;">
                    <div class="hv-blue-dbe7fa" style="width:26px;height:22px;border-radius:3px;border:1px solid #b9b4a2;background:linear-gradient(180deg,#fff,#e2dece);display:flex;align-items:center;justify-content:center;color:#2b5faa;font-size:12px;">◀</div>
                    <div style="width:26px;height:22px;border-radius:3px;border:1px solid #cdc8b6;background:linear-gradient(180deg,#fdfdf9,#eae7d8);display:flex;align-items:center;justify-content:center;color:#9aa2af;font-size:12px;">▶</div>
                    <div class="hv-blue-dbe7fa" style="width:26px;height:22px;border-radius:3px;border:1px solid #b9b4a2;background:linear-gradient(180deg,#fff,#e2dece);display:flex;align-items:center;justify-content:center;color:#2f7a2f;font-size:13px;" onClick=${win.onReload}>⟳</div>
                  </div>
                  <div style="color:#555;padding-left:4px;">Address</div>
                  <div style="flex:1;display:flex;align-items:center;gap:6px;height:22px;padding:0 7px;background:#fff;border:1px solid #7f9db9;border-radius:2px;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.12);">
                    <${OsIcon} kind="browser" size=${13} />
                    <div style="font-size:11px;color:#111;overflow:hidden;white-space:nowrap;flex:1;">${win.url}</div>
                  </div>
                  <div class="hv-blue-dbe7fa" style="display:flex;align-items:center;gap:5px;padding:0 7px 0 5px;height:22px;border:1px solid #b9b49f;border-radius:3px;background:linear-gradient(180deg,#fff,#e6e3d4);color:#1e4f96;font-size:11px;cursor:default;flex:none;" onClick=${win.onReload}>
                    <div style="width:11px;height:11px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#c9f0a8,#3f9b21 60%,#1f6a0f);"></div>Go
                  </div>
                </div>
                <div style="flex:1;overflow:auto;background:#fff;position:relative;border-top:1px solid #7f9db9;box-shadow:inset 1px 1px 0 rgba(0,0,0,0.12);">
                  ${win.loading && html`
                    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#fff;">
                      <div style="width:34px;height:34px;border-radius:50%;border:4px solid #d6ddea;border-top-color:#1c5fb8;animation:uxspin 0.8s linear infinite;"></div>
                      <div style="color:#5a6474;">Connecting to ${win.host}…</div>
                    </div>
                  `}
                  ${win.ready && html`
                    <div style=${win.heroStyle}>
                      <div style="max-width:640px;padding:0 8px;">
                        <div style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.72;margin-bottom:12px;">${win.kicker}</div>
                        <div style="font-size:34px;font-weight:700;letter-spacing:-0.02em;line-height:1.1;">${win.name}</div>
                        <div style="font-size:14px;line-height:1.6;margin-top:14px;opacity:0.88;">${win.tagline}</div>
                      </div>
                    </div>
                    <div style="padding:26px 30px 34px;max-width:760px;margin:0 auto;font-family:Tahoma,Verdana,sans-serif;">
                      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;">
                        ${win.facts.map(f => html`
                          <div style="border:1px solid #e2e5ea;border-radius:6px;padding:13px 14px;background:#fbfcfd;">
                            <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8b93a2;margin-bottom:6px;">${f.k}</div>
                            <div style="font-size:12.5px;color:#1d232e;line-height:1.5;">${f.v}</div>
                          </div>
                        `)}
                      </div>
                      <div style="margin-top:26px;font-size:12.5px;line-height:1.75;color:#2b323d;">${win.body}</div>
                      <div style="margin-top:22px;display:flex;flex-direction:column;gap:9px;">
                        ${win.bullets.map(b => html`
                          <div style="display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:#2b323d;line-height:1.55;">
                            <div style="width:6px;height:6px;border-radius:50%;background:#1c5fb8;margin-top:6px;flex:none;"></div>
                            <div>${b}</div>
                          </div>
                        `)}
                      </div>
                      <div style="margin-top:28px;padding:12px 14px;border-radius:6px;background:#fff8e6;border:1px solid #f0dfae;font-size:11.5px;color:#6b5a26;line-height:1.6;">${win.notice}</div>
                    </div>
                  `}
                </div>
                <div style="display:flex;background:linear-gradient(180deg,#fbfaf3,#e7e4d5);border-top:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;padding:3px 9px;font-size:11px;color:#33332c;gap:10px;flex:none;">
                  <div style="flex:1;">${win.status}</div>
                  <div style="border-left:1px solid #b9b49f;padding-left:10px;">Internet</div>
                </div>
              `}

              ${win.isMyPC && html`
                <div style="display:flex;gap:13px;padding:3px 9px;background:linear-gradient(180deg,#fdfdfa,#f0eee2 60%,#e6e3d4);border-bottom:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;color:#1b1b17;flex:none;">
                  <span>File</span><span>Edit</span><span>View</span><span>Tools</span><span>Help</span>
                </div>
                <div style="flex:1;display:flex;min-height:0;background:#fff;">
                  <div style="width:184px;flex:none;background:linear-gradient(180deg,#7aa1e6 0%,#6b8fdf 40%,#6072d3 100%);border-right:1px solid #4a63b8;padding:11px 9px;overflow:auto;display:flex;flex-direction:column;gap:11px;">
                    <div style="border-radius:5px;overflow:hidden;background:#f0f4fd;box-shadow:0 1px 2px rgba(10,30,80,0.25);">
                      <div style="display:flex;align-items:center;gap:7px;padding:5px 9px;background:linear-gradient(180deg,#fefeff,#dfe8f9);border-bottom:1px solid #c6d4ee;">
                        <${OsIcon} kind="mypc" size=${15} />
                        <div style="font-size:11px;font-weight:700;color:#0c3a86;">System Tasks</div>
                      </div>
                      <div style="padding:5px 5px 7px;display:flex;flex-direction:column;gap:1px;">
                        ${win.nav.map(n => html`
                          <div style=${n.style} onClick=${n.onClick}>
                            <${OsIcon} kind=${n.kind} size=${16} />
                            <div>${n.label}</div>
                          </div>
                        `)}
                        <a href="./assets/cv.pdf" download style="display:flex;align-items:center;gap:7px;padding:4px 7px;border-radius:2px;cursor:default;font-size:11.5px;color:#1b4a94;text-decoration:none;margin-top:2px;">
                          <${OsIcon} kind="disk" size=${16} />
                          <div>Download CV.pdf</div>
                        </a>
                      </div>
                    </div>
                    <div style="border-radius:5px;overflow:hidden;background:#f0f4fd;box-shadow:0 1px 2px rgba(10,30,80,0.25);">
                      <div style="display:flex;align-items:center;gap:7px;padding:5px 9px;background:linear-gradient(180deg,#fefeff,#dfe8f9);border-bottom:1px solid #c6d4ee;">
                        <${OsIcon} kind="disk" size=${15} />
                        <div style="font-size:11px;font-weight:700;color:#0c3a86;">Details</div>
                      </div>
                      <div style="padding:7px 10px 9px;color:#2b3c5e;line-height:1.55;">Local Disk (C:)<br/><b>Hussein Moussa</b><br/>Beirut, Lebanon</div>
                    </div>
                  </div>
                  <div style="flex:1;min-width:0;overflow:auto;padding:16px 20px 26px;">
                    <div style="font-size:16px;font-weight:700;color:#1a3c7d;border-bottom:1px solid #e3e6ec;padding-bottom:8px;margin-bottom:14px;">${win.docTitle}</div>
                    ${win.blocks.map(bl2 => html`
                      <div style="margin-bottom:18px;">
                        <div style=${bl2.headStyle}>${bl2.head}</div>
                        <div style="font-size:11px;color:#7a8494;margin-bottom:6px;">${bl2.sub}</div>
                        ${bl2.lines.map(ln => html`
                          <div style="display:flex;gap:9px;align-items:flex-start;font-size:12px;line-height:1.6;color:#222c3a;padding:1px 0;">
                            <div style="width:5px;height:5px;border-radius:50%;background:#4a7fd4;margin-top:7px;flex:none;"></div>
                            <div>${ln}</div>
                          </div>
                        `)}
                      </div>
                    `)}
                  </div>
                </div>
                <div style="display:flex;background:linear-gradient(180deg,#fbfaf3,#e7e4d5);border-top:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;padding:3px 9px;font-size:11px;color:#33332c;gap:12px;flex:none;">
                  <div style="flex:1;">${win.docTitle}</div>
                  <div style="border-left:1px solid #b9b49f;padding-left:12px;">My Computer</div>
                </div>
              `}

              ${win.isFolder && html`
                <div style="display:flex;gap:13px;padding:3px 9px;background:linear-gradient(180deg,#fdfdfa,#f0eee2 60%,#e6e3d4);border-bottom:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;color:#1b1b17;flex:none;">
                  <span>File</span><span>Edit</span><span>View</span><span>Help</span>
                </div>
                <div style="flex:1;display:flex;min-height:0;">
                  <div style="width:184px;flex:none;background:linear-gradient(180deg,#7aa1e6 0%,#6b8fdf 40%,#6072d3 100%);border-right:1px solid #4a63b8;padding:11px 9px;display:flex;flex-direction:column;gap:11px;">
                    <div style="border-radius:5px;overflow:hidden;background:#f0f4fd;box-shadow:0 1px 2px rgba(10,30,80,0.25);">
                      <div style="display:flex;align-items:center;gap:7px;padding:5px 9px;background:linear-gradient(180deg,#fefeff,#dfe8f9);border-bottom:1px solid #c6d4ee;">
                        <${OsIcon} kind="folder" size=${15} />
                        <div style="font-size:11px;font-weight:700;color:#0c3a86;">File and Folder Tasks</div>
                      </div>
                      <div style="padding:7px 10px 9px;color:#2b3c5e;line-height:1.55;">${win.folderTasks}</div>
                    </div>
                    <div style="border-radius:5px;overflow:hidden;background:#f0f4fd;box-shadow:0 1px 2px rgba(10,30,80,0.25);">
                      <div style="display:flex;align-items:center;gap:7px;padding:5px 9px;background:linear-gradient(180deg,#fefeff,#dfe8f9);border-bottom:1px solid #c6d4ee;">
                        <${OsIcon} kind="disk" size=${15} />
                        <div style="font-size:11px;font-weight:700;color:#0c3a86;">Details</div>
                      </div>
                      <div style="padding:7px 10px 9px;color:#2b3c5e;line-height:1.55;">
                        ${win.folderDetails.map(d => html`<div>${d}</div>`)}
                      </div>
                    </div>
                  </div>
                  <div style="flex:1;background:#fff;overflow:auto;padding:14px;display:flex;flex-wrap:wrap;gap:6px;align-content:flex-start;border-top:1px solid #7f9db9;box-shadow:inset 1px 1px 0 rgba(0,0,0,0.1);">
                    ${win.files.map(f => html`
                      <div class="hv-blue-eaf1fd" style="width:110px;padding:8px 4px;border-radius:3px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:default;text-align:center;" onDblClick=${f.onOpen} onClick=${f.onOpen}>
                        <${OsIcon} kind=${f.kind} size=${44} />
                        <div style="font-size:11px;color:#1a2534;line-height:1.35;">${f.name}</div>
                      </div>
                    `)}
                  </div>
                </div>
              `}

              ${win.isNote && html`
                <div style="display:flex;gap:13px;padding:3px 9px;background:linear-gradient(180deg,#fdfdfa,#f0eee2 60%,#e6e3d4);border-bottom:1px solid #b9b49f;box-shadow:inset 0 1px 0 #fff;color:#1b1b17;flex:none;">
                  <span>File</span><span>Edit</span><span>Format</span><span>Help</span>
                </div>
                <div style="flex:1;overflow:auto;background:#fff;padding:14px 18px;font-family:'Courier New',monospace;font-size:13px;line-height:1.72;color:#111;white-space:pre-wrap;">${win.text}</div>
              `}

              ${win.isTerm && html`
                <div style="flex:1;min-height:0;overflow:auto;background:#000;padding:9px 11px;font-family:'VT323',Consolas,monospace;font-size:17px;line-height:1.28;color:#cfcfcf;" onClick=${() => this.termRef.current && this.termRef.current.focus()}>
                  ${termLines.map(l => html`<div style=${l.style}>${l.t}</div>`)}
                  <div style="display:flex;align-items:center;gap:0;">
                    <div style="flex:none;color:#cfcfcf;">C:\\UIONOX>\u00A0</div>
                    <input value=${st.termInput} onInput=${(e) => this.setState({ termInput: e.target.value })} onKeyDown=${this.onTermKey} ref=${this.termRef} spellcheck="false" autocomplete="off" style="flex:1;background:transparent;border:0;outline:0;color:#cfcfcf;font-family:'VT323',Consolas,monospace;font-size:17px;padding:0;caret-color:#cfcfcf;" />
                  </div>
                </div>
              `}

              ${win.isSnake && html`
                <div style="flex:1;min-height:0;display:flex;flex-direction:column;background:#e9e7dc;padding:10px;gap:8px;align-items:center;">
                  <div style="display:flex;justify-content:space-between;width:100%;max-width:340px;font-size:12px;color:#33404f;">
                    <div>Score: <b>${sn ? sn.score : 0}</b></div><div>Best: <b>${st.snakeBest}</b></div>
                  </div>
                  <div style="position:relative;width:${GRID * CELL}px;height:${GRID * CELL}px;background:#152018;border:3px solid #6e7a6a;box-shadow:inset 0 0 22px rgba(0,0,0,0.6);flex:none;" onTouchStart=${(e) => { const t = e.touches[0]; this._sw = { x: t.clientX, y: t.clientY }; }} onTouchEnd=${(e) => {
                      if (!this._sw || !e.changedTouches) return;
                      const t = e.changedTouches[0], dx = t.clientX - this._sw.x, dy = t.clientY - this._sw.y;
                      if (Math.abs(dx) < 18 && Math.abs(dy) < 18) return;
                      this.turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "ArrowRight" : "ArrowLeft") : (dy > 0 ? "ArrowDown" : "ArrowUp"));
                    }}>
                    ${snakeParts.map(p => html`<div style=${p.style}></div>`)}
                    ${!(sn && sn.running) && html`
                      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(10,20,14,0.82);color:#dfeede;text-align:center;padding:16px;">
                        <div style="font-size:15px;font-weight:700;">${st.snakeMsg}</div>
                        <div style="font-size:11px;opacity:0.75;line-height:1.6;">Arrow keys or WASD to steer.<br/>Swipe on touch.</div>
                        <div class="hv-bright11" style="padding:6px 16px;border-radius:4px;border:1px solid #7fae5a;background:linear-gradient(180deg,#9ed46d,#4f8a25);color:#fff;font-weight:700;cursor:default;" onClick=${this.startSnake}>${st.snakeBtn}</div>
                      </div>
                    `}
                  </div>
                  <div style="font-size:11px;color:#5d6675;">A snake game. It is exactly as deep as it looks.</div>
                </div>
              `}

              ${win.isMine && html`
                <div style="flex:1;min-height:0;overflow:auto;background:#d4d0c8;padding:10px;display:flex;flex-direction:column;align-items:center;gap:9px;">
                  <div style="display:flex;align-items:center;gap:14px;padding:6px 10px;background:#c0c0c0;border-top:2px solid #fff;border-left:2px solid #fff;border-right:2px solid #808080;border-bottom:2px solid #808080;">
                    <div style="background:#000;color:#f33;font-family:'VT323',monospace;font-size:22px;line-height:1;padding:2px 6px;min-width:48px;text-align:center;">${mineFlagsLeft}</div>
                    <div style="width:30px;height:26px;background:linear-gradient(180deg,#f2f2f2,#bdbdbd);border-top:2px solid #fff;border-left:2px solid #fff;border-right:2px solid #808080;border-bottom:2px solid #808080;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:default;" onClick=${this.resetMine}>${st.mineFace}</div>
                    <div style="background:#000;color:#f33;font-family:'VT323',monospace;font-size:22px;line-height:1;padding:2px 6px;min-width:48px;text-align:center;">${mineTime}</div>
                  </div>
                  <div style="display:grid;grid-template-columns:repeat(9,24px);gap:0;border-top:3px solid #808080;border-left:3px solid #808080;border-right:3px solid #fff;border-bottom:3px solid #fff;">
                    ${mineCells.map(c => html`<div style=${c.style} onClick=${c.onClick} onContextMenu=${c.onFlag}>${c.label}</div>`)}
                  </div>
                  <div style="font-size:11px;color:#4a4a44;">${st.mineStatus}</div>
                </div>
              `}

              ${win.isShot && html`
                <div style="flex:1;min-height:0;display:flex;flex-direction:column;background:#5b5b55;padding:12px;gap:10px;border-top:1px solid #3f3f3a;">
                  <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;background:repeating-linear-gradient(135deg,#f4f4f0 0 9px,#e4e4de 9px 18px);border:1px solid #2f2f2b;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.6);">
                    <div style="text-align:center;font-family:'VT323',Consolas,monospace;font-size:16px;color:#55554d;line-height:1.5;padding:16px;">${win.shotName}<div style="font-size:13px;opacity:0.7;">screenshot goes here</div></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;color:#e8e8e2;font-size:11px;">
                    <div>${win.shotName}</div><div>${win.shotOf}</div>
                  </div>
                </div>
              `}

              ${win.isDisplay && html`
                <div style="flex:1;min-height:0;overflow:auto;background:#ece9d8;padding:14px 16px 16px;display:flex;flex-direction:column;gap:14px;">
                  <div style="display:flex;gap:14px;border-bottom:1px solid #b9b49f;box-shadow:0 1px 0 #fff;padding-bottom:0;">
                    <div style="padding:4px 12px;border:1px solid #b9b49f;border-bottom:none;border-radius:3px 3px 0 0;background:linear-gradient(180deg,#fff,#efedde);font-weight:700;color:#1b3f7d;position:relative;top:1px;">Desktop</div>
                    <div style="padding:4px 12px;border:1px solid #c9c4b2;border-bottom:none;border-radius:3px 3px 0 0;background:linear-gradient(180deg,#f3f1e6,#e2dfd0);color:#7b7668;">Appearance</div>
                  </div>
                  <div style="display:flex;justify-content:center;">
                    <div style="width:214px;padding:10px 10px 16px;border-radius:8px;background:linear-gradient(180deg,#e7eaf0,#b3bac6 60%,#8d95a3);border:1px solid #6d7484;box-shadow:0 2px 5px rgba(10,25,60,0.3);">
                      <div style="height:118px;border-radius:3px;border:1px solid #3f4653;overflow:hidden;background:#1b232f;">
                        <div style=${win.previewStyle}></div>
                      </div>
                      <div style="width:52px;height:5px;margin:9px auto 0;border-radius:0 0 3px 3px;background:linear-gradient(180deg,#9aa2af,#6e7684);"></div>
                    </div>
                  </div>
                  <div>
                    <div style="font-weight:700;color:#1b1b17;margin-bottom:6px;">Background</div>
                    <div style="height:132px;border:1px solid #7f9db9;background:#fff;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.14);padding:6px;cursor:pointer;position:relative;overflow:hidden;" onClick=${this.pickWall} onDrop=${this.onWallDrop} onDragOver=${this.onWallDragOver}>
                      ${st.wall
                        ? html`<div style="width:100%;height:100%;background-image:url(${st.wall});background-size:cover;background-position:center;"></div>`
                        : html`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;color:#7a8494;font-size:11.5px;border:1px dashed #b9c2d2;">Drop a wallpaper photo here, or click to browse</div>`
                      }
                      <input ref=${this.wallInputRef} type="file" accept="image/*" style="display:none;" onChange=${this.onWallFileInput} />
                    </div>
                    <div style="display:flex;align-items:center;gap:10px;margin-top:9px;">
                      <div class="hv-blue-eef4fd" style="padding:4px 14px;border:1px solid #9a9484;border-radius:3px;background:linear-gradient(180deg,#fdfdfa,#e4e1d2);cursor:default;white-space:nowrap;flex:none;" onClick=${this.resetWall}>Use painted default</div>
                      <div style="color:#5a564b;">${st.wall ? "Photo in use." : "Painted wallpaper in use."}</div>
                    </div>
                  </div>
                </div>
              `}

              ${win.isBin && html`
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#fff;padding:26px;text-align:center;">
                  <${OsIcon} kind="bin" size=${64} />
                  <div style="font-size:13px;font-weight:700;color:#1a2534;">This folder is empty.</div>
                  <div style="font-size:12px;color:#5c6676;max-width:320px;line-height:1.6;">Nothing here got thrown away. Everything that deserved to exist is still running.</div>
                </div>
              `}

              ${win.isContact && html`
                <div style="flex:1;overflow:auto;background:#fff;padding:24px 26px;">
                  <div style="font-size:17px;font-weight:700;color:#1a3c7d;margin-bottom:4px;">Hussein Moussa</div>
                  <div style="font-size:12px;color:#6a7484;margin-bottom:20px;">MIS student · IT support & systems · Beirut, Lebanon</div>
                  <div style="display:flex;flex-direction:column;gap:10px;max-width:420px;">
                    ${contactRows.map(c => html`
                      <div style="display:flex;gap:12px;align-items:center;border:1px solid #e2e5ea;border-radius:5px;padding:11px 13px;background:#fbfcfd;">
                        <div style="width:78px;flex:none;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#8b93a2;">${c.k}</div>
                        <div style="font-size:13px;color:#16406f;">${c.v}</div>
                      </div>
                    `)}
                    <a href="./assets/cv.pdf" download style="display:flex;gap:12px;align-items:center;border:1px solid #e2e5ea;border-radius:5px;padding:11px 13px;background:#fbfcfd;text-decoration:none;">
                      <div style="width:78px;flex:none;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#8b93a2;">CV</div>
                      <div style="font-size:13px;color:#16406f;text-decoration:underline;">Download CV.pdf</div>
                    </a>
                  </div>
                </div>
              `}

              ${win.resizable && html`
                <div style="position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 46%,#9aa4b6 47%,#9aa4b6 54%,transparent 55%,transparent 66%,#9aa4b6 67%,#9aa4b6 74%,transparent 75%);" onMouseDown=${win.onResizeStart} onTouchStart=${win.onResizeStart}></div>
              `}
            </div>
          </div>
        `)}

        <div style="position:absolute;left:0;right:0;bottom:0;height:44px;z-index:9000;display:flex;align-items:stretch;background:linear-gradient(180deg,#1f57c4 0%,#2f6fdc 4%,#2461cf 10%,#1c4fb8 52%,#2059c6 84%,#1746a4 94%,#0e327f 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,0.55),inset 0 2px 4px rgba(255,255,255,0.22),0 -3px 10px rgba(0,10,40,0.4);">
          <div style=${startBtnStyle} onClick=${(e) => { e.stopPropagation(); this.setState(s => ({ startOpen: !s.startOpen, ctx: null })); }}>
            <div style="position:absolute;left:6px;right:16px;top:3px;height:12px;border-radius:9px 16px 0 0;background:linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0));pointer-events:none;"></div>
            <div style="width:21px;height:21px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#fff 6%,#d8ecff 34%,#7ec0f4 62%,#2f74c8 100%);box-shadow:0 1px 2px rgba(0,30,80,0.45),inset 0 0 0 1px rgba(255,255,255,0.65);flex:none;"></div>
            <span>uionox</span>
          </div>
          <div style="flex:1;display:flex;align-items:center;gap:3px;padding:4px 6px;overflow:hidden;">
            ${taskItems.map(t => html`
              <div style=${t.style} onClick=${t.onClick}>
                <${OsIcon} kind=${t.kind} size=${15} />
                <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.title}</div>
              </div>
            `)}
          </div>
          <div style="display:flex;align-items:center;gap:9px;padding:0 13px 0 12px;flex:none;background:linear-gradient(180deg,#18a3e0 0%,#22b0ea 6%,#118cd0 44%,#0f79bd 82%,#0a5f9f 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,0.5),inset 3px 0 6px rgba(0,20,60,0.28);color:#fff;text-shadow:0 1px 1px rgba(0,0,0,0.4);">
            <${OsIcon} kind="disk" size=${14} />
            <div style="width:12px;height:12px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fff,#79cf58 55%,#2c7d1c);border:1px solid rgba(255,255,255,0.55);flex:none;"></div>
            <div style="font-size:11.5px;letter-spacing:0.01em;">${st.clock}</div>
          </div>
        </div>

        ${st.startOpen && html`
          <div style="position:absolute;left:0;bottom:44px;width:min(400px,94vw);z-index:9500;border-radius:8px 8px 0 0;overflow:hidden;box-shadow:0 -6px 30px rgba(0,10,40,0.5);border:1px solid #1a49a8;">
            <div style="display:flex;align-items:center;gap:11px;padding:9px 12px;background:linear-gradient(180deg,#4a8ceb 0%,#2f6bd6 22%,#1c4fb6 66%,#153f8e 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,0.45),inset 0 -1px 0 rgba(0,0,0,0.25);color:#fff;">
              <div style="width:38px;height:38px;border-radius:5px;background:linear-gradient(150deg,#ffd97a,#e08b1c);border:2px solid rgba(255,255,255,0.75);flex:none;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#5a3a02;">H</div>
              <div>
                <div style="font-size:14px;font-weight:700;text-shadow:1px 1px 2px rgba(0,0,0,0.4);">Hussein Moussa</div>
                <div style="font-size:10.5px;opacity:0.85;">creating what deserves to exist</div>
              </div>
            </div>
            <div style="display:flex;background:#fff;">
              <div style="flex:1.15;padding:7px 6px;display:flex;flex-direction:column;gap:1px;border-right:1px solid #dfe6f2;">
                ${startPinned.map(s => html`
                  <div style=${s.style} onClick=${s.onClick}>
                    <${OsIcon} kind=${s.kind} size=${24} />
                    <div style="flex:1;"><div style="font-weight:700;font-size:11.5px;color:#12233c;">${s.label}</div><div style="font-size:10px;color:#7a8698;">${s.sub}</div></div>
                  </div>
                `)}
                <div style="height:1px;margin:5px 6px;background:#c9d4e8;"></div>
                ${startRecent.map(r => html`
                  <div style=${r.style} onClick=${r.onClick}>
                    <${OsIcon} kind=${r.kind} size=${24} />
                    <div style="flex:1;"><div style="font-weight:700;font-size:11.5px;color:#12233c;">${r.label}</div><div style="font-size:10px;color:#7a8698;">${r.sub}</div></div>
                  </div>
                `)}
                <div style="flex:1;min-height:8px;"></div>
                <div style="height:1px;margin:0 6px 4px;background:#c9d4e8;"></div>
                <div class="hv-blue-e8f0fd" style="display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:2px;cursor:default;" onClick=${() => this.open("projects")}>
                  <${OsIcon} kind="program" size=${24} />
                  <div style="flex:1;font-weight:700;font-size:11.5px;color:#12233c;">All Programs</div>
                  <div style="color:#2a5faa;font-size:9px;">▶</div>
                </div>
              </div>
              <div style="flex:0.85;padding:7px 6px;display:flex;flex-direction:column;gap:1px;background:linear-gradient(180deg,#eaf1fd,#d5e3f8);box-shadow:inset 1px 0 0 #fff;">
                ${startRight.map(s => html`
                  <div style=${s.style} onClick=${s.onClick}>
                    <${OsIcon} kind=${s.kind} size=${24} />
                    <div style="font-weight:700;font-size:11.5px;color:#1a3055;">${s.label}</div>
                  </div>
                `)}
              </div>
            </div>
            <div style="display:flex;justify-content:flex-end;gap:8px;padding:8px 12px;background:linear-gradient(180deg,#4a8ceb 0%,#2a64cf 26%,#1b4db2 70%,#153f92 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,0.4);">
              <div class="hv-white-20" style="display:flex;align-items:center;gap:7px;color:#fff;font-size:11.5px;font-weight:700;padding:5px 11px;border-radius:4px;cursor:default;text-shadow:0 1px 1px rgba(0,10,40,0.5);" onClick=${() => this.open("contact")}>
                <${OsIcon} kind="logoff" size=${18} />
                Log Off
              </div>
              <div class="hv-white-20" style="display:flex;align-items:center;gap:7px;color:#fff;font-size:11.5px;font-weight:700;padding:5px 11px;border-radius:4px;cursor:default;text-shadow:0 1px 1px rgba(0,10,40,0.5);" onClick=${this.doShutdown}>
                <${OsIcon} kind="power" size=${18} />
                Turn Off Computer
              </div>
            </div>
          </div>
        `}

        ${st.ctx && html`
          <div style=${ctxStyle} data-keep="1" data-ctx="1">
            ${ctxItems.map(mi => html`<div style=${mi.style} onClick=${mi.onClick}>${mi.label}</div>`)}
          </div>
        `}

        ${st.busy && html`<div style="position:absolute;inset:0;z-index:9800;cursor:progress;"></div>`}

        ${st.booting && html`
          <div style="position:absolute;inset:0;z-index:9900;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;color:#fff;" onClick=${this.skipBoot}>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
              <div style="font-size:clamp(30px,6vw,58px);font-weight:700;letter-spacing:0.3em;padding-left:0.3em;background:linear-gradient(180deg,#eaf3ff,#5f9be8 60%,#1e58bd);-webkit-background-clip:text;background-clip:text;color:transparent;">UIONOX</div>
              <div style="font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#7ea6dd;">creating what deserves to exist</div>
              <div style="width:180px;height:14px;border:2px solid #6f7f9c;border-radius:8px;padding:2px;overflow:hidden;margin-top:24px;">
                <div style="width:36px;height:100%;border-radius:5px;background:linear-gradient(90deg,#1b4fb0,#7fc0ff,#1b4fb0);animation:uxbar 1.5s linear infinite;"></div>
              </div>
              <div style="font-size:10.5px;color:#5c76a0;letter-spacing:0.12em;">${st.bootLine}</div>
            </div>
            <div style="width:100%;padding:16px 22px;display:flex;justify-content:space-between;font-size:10.5px;color:#54688c;letter-spacing:0.1em;">
              <div>UIONOX OS · build 2026.08</div><div>click anywhere to skip</div>
            </div>
          </div>
        `}

        ${st.shuttingDown && html`
          <div style="position:absolute;inset:0;z-index:9950;background:linear-gradient(180deg,#0d3f8f,#062a63);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;color:#fff;text-align:center;padding:24px;">
            <div style="font-size:clamp(22px,4vw,34px);font-weight:700;letter-spacing:0.05em;">${shutTitle}</div>
            <div style="font-size:12.5px;color:#a9c6ee;line-height:1.7;max-width:420px;">${shutSub}</div>
            ${st.shutDone && html`
              <div style="display:flex;flex-direction:column;gap:9px;margin-top:6px;width:min(400px,90vw);">
                ${contactRows.map(c => html`
                  <div style="display:flex;gap:12px;align-items:center;border:1px solid rgba(255,255,255,0.22);border-radius:6px;padding:11px 14px;background:rgba(255,255,255,0.07);text-align:left;">
                    <div style="width:72px;flex:none;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#8fb0e0;">${c.k}</div>
                    <div style="font-size:13px;color:#fff;">${c.v}</div>
                  </div>
                `)}
                <div class="hv-bright15" style="margin-top:12px;align-self:center;padding:8px 20px;border-radius:5px;border:1px solid #7fb0f0;background:linear-gradient(180deg,#4f92ea,#1c52b6);color:#fff;font-weight:700;font-size:12px;cursor:default;" onClick=${this.reboot}>Turn the computer back on</div>
              </div>
            `}
          </div>
        `}
      </div>
    `;
  }
}

render(html`<${App} />`, document.getElementById("app"));
