// ============ STORAGE KEYS ============
const LS = {
  SCHEDULES: "jg_schedules_v1",
  SETTINGS: "jg_settings_v1",
  LAST_GURU: "jg_last_guru_v1",
  LAST_KELAS: "jg_last_kelas_v1",
  FIRED: "jg_fired_notifs_v1",
};

// ============ STATE ============
let state = {
  settings: loadSettings(),
  schedules: loadInitialSchedules(),
  fired: loadJSON(LS.FIRED, {}),
  currentGuru: null,
  currentKelas: null,
  viewMode: "guru", // "guru" | "kelas"
  activeDay: todayIndex(),
  editingId: null,
};

// Kalau localStorage kosong (pemakaian pertama), isi dari MASTER_SCHEDULE (data resmi hasil impor).
// Kalau sudah pernah dipakai, pakai versi lokal (mungkin sudah diedit) dan JANGAN ditimpa lagi.
function loadInitialSchedules() {
  const existing = loadJSON(LS.SCHEDULES, null);
  if (existing) return existing;
  const seeded = JSON.parse(JSON.stringify(typeof MASTER_SCHEDULE !== "undefined" ? MASTER_SCHEDULE : {}));
  saveJSON(LS.SCHEDULES, seeded);
  return seeded;
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn("Gagal baca localStorage", key, e);
    return fallback;
  }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { console.warn("Gagal simpan localStorage", key, e); }
}
function loadSettings() {
  return loadJSON(LS.SETTINGS, {
    theme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    lang: "id",
    notif: { enabled: false, minutes: 10, sound: "chime" },
  });
}
function saveSettings() { saveJSON(LS.SETTINGS, state.settings); }
function saveSchedules() { saveJSON(LS.SCHEDULES, state.schedules); }
function saveFired() { saveJSON(LS.FIRED, state.fired); }

// Senin=0 ... Minggu=6, konsisten dengan DAY_KEYS di i18n.js
function todayIndex() { return (new Date().getDay() + 6) % 7; }
function t(key) { return (I18N[state.settings.lang] || I18N.id)[key] || key; }
function pad2(n) { return String(n).padStart(2, "0"); }
function minutesToHM(mins) { return `${pad2(Math.floor(mins / 60))}:${pad2(mins % 60)}`; }
function hmToMinutes(hm) { const [h, m] = hm.split(":").map(Number); return h * 60 + m; }
function dateKey(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function initials(nama) {
  return nama.split(/[\s,]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function kelasAvatar(kelas) {
  return kelas.replace(/\s+/g, "").slice(0, 4).toUpperCase();
}

// ============ I18N / THEME APPLY ============
function applyI18nStatic() {
  document.documentElement.lang = state.settings.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); el.setAttribute("aria-label", t(el.dataset.i18nTitle)); });
  document.getElementById("btn-lang-select").textContent = state.settings.lang.toUpperCase();
  populateHariSelect();
}
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.settings.theme);
}

// ============ TOAST ============
function toast(msg) {
  const region = document.getElementById("toast-region");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  region.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 300);
  }, 2600);
}

// ============ DAFTAR KELAS (dari data jadwal) ============
function getAllKelasList() {
  const set = new Set();
  Object.values(state.schedules).forEach(list => list.forEach(e => { if (e.kelas) set.add(e.kelas); }));
  const arr = Array.from(set);
  arr.sort((a, b) => a.localeCompare(b, "id", { numeric: true }));
  return arr;
}

// ============ GURU / KELAS SELECT SCREEN ============
function renderGuruGrid(filter = "") {
  if (state.viewMode === "kelas") { renderKelasGrid(filter); return; }
  const grid = document.getElementById("guru-grid");
  const empty = document.getElementById("guru-empty");
  const f = filter.trim().toLowerCase();
  const list = GURU_SEED.filter(g =>
    !f || g.nama.toLowerCase().includes(f) || g.kode.toLowerCase().includes(f)
  );
  grid.innerHTML = "";
  empty.hidden = list.length !== 0;
  list.forEach(g => {
    const card = document.createElement("button");
    card.className = "guru-card";
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <span class="avatar avatar-sm">${initials(g.nama)}</span>
      <span class="guru-card-text">
        <span class="guru-card-nama">${escapeHtml(g.nama)}</span>
        <span class="guru-card-kode">${t("codeLabel")} ${escapeHtml(g.kode)}</span>
      </span>`;
    card.addEventListener("click", () => selectGuru(g.id));
    grid.appendChild(card);
  });
}

function renderKelasGrid(filter = "") {
  const grid = document.getElementById("guru-grid");
  const empty = document.getElementById("guru-empty");
  const f = filter.trim().toLowerCase();
  const list = getAllKelasList().filter(k => !f || k.toLowerCase().includes(f));
  grid.innerHTML = "";
  empty.hidden = list.length !== 0;
  list.forEach(kelas => {
    const card = document.createElement("button");
    card.className = "guru-card";
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <span class="avatar avatar-sm">${escapeHtml(kelasAvatar(kelas))}</span>
      <span class="guru-card-text">
        <span class="guru-card-nama">${escapeHtml(kelas)}</span>
      </span>`;
    card.addEventListener("click", () => selectKelas(kelas));
    grid.appendChild(card);
  });
}

function setMode(mode) {
  state.viewMode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  document.getElementById("select-heading").textContent = t(mode === "kelas" ? "selectHeadingKelas" : "selectHeading");
  document.getElementById("select-sub").textContent = t(mode === "kelas" ? "selectSubKelas" : "selectSub");
  document.getElementById("search-guru").value = "";
  renderGuruGrid();
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function selectGuru(id) {
  const g = GURU_SEED.find(x => x.id === id);
  if (!g) return;
  state.viewMode = "guru";
  state.currentGuru = g;
  state.currentKelas = null;
  state.activeDay = todayIndex();
  localStorage.setItem(LS.LAST_GURU, id);
  localStorage.removeItem(LS.LAST_KELAS);
  showDashboard();
}
function selectKelas(kelas) {
  state.viewMode = "kelas";
  state.currentKelas = kelas;
  state.currentGuru = null;
  state.activeDay = todayIndex();
  localStorage.setItem(LS.LAST_KELAS, kelas);
  localStorage.removeItem(LS.LAST_GURU);
  showDashboard();
}
function backToSelect() {
  state.currentGuru = null;
  state.currentKelas = null;
  localStorage.removeItem(LS.LAST_GURU);
  localStorage.removeItem(LS.LAST_KELAS);
  document.getElementById("screen-dashboard").hidden = true;
  document.getElementById("screen-select").hidden = false;
}

// ============ DASHBOARD ============
function showDashboard() {
  document.getElementById("screen-select").hidden = true;
  document.getElementById("screen-dashboard").hidden = false;
  const isKelas = state.viewMode === "kelas";
  document.getElementById("btn-add-jadwal").hidden = isKelas;
  document.querySelector(".reminder-label").textContent = t(isKelas ? "upcomingLabelKelas" : "upcomingLabel");

  if (isKelas) {
    document.getElementById("dash-avatar").textContent = kelasAvatar(state.currentKelas);
    document.getElementById("dash-nama").textContent = state.currentKelas;
    document.getElementById("dash-kode").textContent = t("modeKelas");
  } else {
    const g = state.currentGuru;
    document.getElementById("dash-avatar").textContent = initials(g.nama);
    document.getElementById("dash-nama").textContent = g.nama;
    document.getElementById("dash-kode").textContent = `${t("codeLabel")} ${g.kode}`;
  }
  renderWeeklyHours();
  renderDayTabs();
  renderDayPanel();
  renderReminder();
}

function getGuruSchedules() {
  const id = state.currentGuru.id;
  if (!state.schedules[id]) state.schedules[id] = [];
  return state.schedules[id];
}

// Kumpulan entri untuk kelas tertentu, digabung dari semua guru (dengan nama guru ditempel).
function getKelasEntries() {
  const out = [];
  Object.entries(state.schedules).forEach(([guruId, list]) => {
    const guru = GURU_SEED.find(g => g.id === guruId);
    list.forEach(e => {
      if (e.kelas === state.currentKelas) out.push({ ...e, _guruNama: guru ? guru.nama : "?" });
    });
  });
  return out;
}
function getActiveEntries() {
  return state.viewMode === "kelas" ? getKelasEntries() : getGuruSchedules();
}

function renderWeeklyHours() {
  const el = document.getElementById("weekly-hours");
  const list = getActiveEntries();
  const totalMin = list.reduce((sum, e) => sum + (hmToMinutes(e.selesai) - hmToMinutes(e.mulai)), 0);
  const h = Math.floor(totalMin / 60), m = totalMin % 60;
  el.innerHTML = `<span class="weekly-hours-badge">${t("weeklyLoad")}: <b>${h}${m ? "." + Math.round(m / 6) : ""} ${t("hoursShort")}</b> · ${list.length} ${t("sessionsShort")}</span>`;
}

function populateHariSelect() {
  const sel = document.getElementById("f-hari");
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = DAY_KEYS.map((k, i) => `<option value="${i}">${t(k)}</option>`).join("");
  if (prev !== "") sel.value = prev;
}

function renderDayTabs() {
  const nav = document.getElementById("day-tabs");
  nav.innerHTML = "";
  const today = todayIndex();
  DAY_KEYS.forEach((key, i) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (i === state.activeDay ? " active" : "");
    btn.setAttribute("role", "tab");
    btn.innerHTML = `<span>${t(key).slice(0, 3)}</span>${i === today ? `<span class="day-dot"></span>` : ""}`;
    btn.addEventListener("click", () => { state.activeDay = i; renderDayTabs(); renderDayPanel(); });
    nav.appendChild(btn);
  });
}

function renderDayPanel() {
  const panel = document.getElementById("day-panel");
  const isKelas = state.viewMode === "kelas";
  const list = getActiveEntries()
    .filter(e => e.hari === state.activeDay)
    .sort((a, b) => hmToMinutes(a.mulai) - hmToMinutes(b.mulai));

  if (list.length === 0) {
    panel.innerHTML = `<p class="day-empty">${t("dayEmpty")}</p>`;
    return;
  }

  const nowMin = hmToMinutes(`${pad2(new Date().getHours())}:${pad2(new Date().getMinutes())}`);
  const isToday = state.activeDay === todayIndex();

  panel.innerHTML = "";
  list.forEach(entry => {
    const start = hmToMinutes(entry.mulai);
    const end = hmToMinutes(entry.selesai);
    const active = isToday && nowMin >= start && nowMin < end;
    const card = document.createElement("div");
    card.className = "jadwal-card" + (active ? " active-now" : "");
    const metaLine = isKelas
      ? `${escapeHtml(entry._guruNama)}${entry.ruang ? " · " + escapeHtml(entry.ruang) : ""}`
      : `${escapeHtml(entry.kelas)}${entry.ruang ? " · " + escapeHtml(entry.ruang) : ""}`;
    card.innerHTML = `
      <div class="jadwal-time">
        <span>${entry.mulai}</span>
        <span class="jadwal-time-sep">–</span>
        <span>${entry.selesai}</span>
        ${active ? `<span class="badge-now">${t("inProgress")}</span>` : ""}
      </div>
      <div class="jadwal-main">
        <div class="jadwal-mapel">${escapeHtml(entry.mapel)}</div>
        <div class="jadwal-meta">${metaLine}</div>
      </div>
      <div class="jadwal-actions">
        ${isKelas ? "" : `
        <button class="icon-btn-sm btn-edit" aria-label="Edit">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
        </button>
        <button class="icon-btn-sm btn-del" aria-label="Delete">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M6 7h12l-1 13.02A2 2 0 0115 22H9a2 2 0 01-2-1.98L6 7zm3-3h6l1 2H8l1-2zM4 5h16v2H4V5z"/></svg>
        </button>`}
      </div>`;
    if (!isKelas) {
      card.querySelector(".btn-edit").addEventListener("click", () => openModalForEdit(entry));
      card.querySelector(".btn-del").addEventListener("click", () => deleteJadwal(entry.id));
    }
    panel.appendChild(card);
  });
}

// ============ REMINDER "JADWAL TERDEKAT" ============
function computeNextEntry() {
  const all = getActiveEntries();
  if (all.length === 0) return null;
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const today = todayIndex();

  for (let offset = 0; offset < 8; offset++) {
    const dayIdx = (today + offset) % 7;
    const entries = all.filter(e => e.hari === dayIdx).sort((a, b) => hmToMinutes(a.mulai) - hmToMinutes(b.mulai));
    for (const e of entries) {
      const end = hmToMinutes(e.selesai);
      if (offset === 0) {
        if (end > nowMin) return { entry: e, dayOffset: offset };
      } else {
        return { entry: e, dayOffset: offset };
      }
    }
  }
  return null;
}

function renderReminder() {
  const body = document.getElementById("reminder-body");
  const result = computeNextEntry();
  if (!result) {
    body.innerHTML = `<div class="reminder-empty">${t("noUpcoming")}</div>`;
    return;
  }
  const { entry, dayOffset } = result;
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const start = hmToMinutes(entry.mulai);
  const end = hmToMinutes(entry.selesai);

  let statusText;
  if (dayOffset === 0 && nowMin >= start && nowMin < end) {
    statusText = t("inProgress");
  } else {
    let diffMin;
    if (dayOffset === 0) diffMin = start - nowMin;
    else diffMin = (dayOffset * 1440) + start - nowMin;
    const h = Math.floor(diffMin / 60), m = diffMin % 60;
    const dayLabel = dayOffset === 0 ? t("today") : t(DAY_KEYS[entry.hari]);
    statusText = `${t("startsIn")} ${h > 0 ? h + "j " : ""}${m}${t("minsShort")} · ${dayLabel}`;
  }

  const metaLine = state.viewMode === "kelas"
    ? `${escapeHtml(entry._guruNama)}${entry.ruang ? " · " + escapeHtml(entry.ruang) : ""}`
    : `${escapeHtml(entry.kelas)}${entry.ruang ? " · " + escapeHtml(entry.ruang) : ""}`;
  body.innerHTML = `
    <div class="reminder-time">${entry.mulai}–${entry.selesai}</div>
    <div class="reminder-mapel">${escapeHtml(entry.mapel)}</div>
    <div class="reminder-meta">${metaLine}</div>
    <div class="reminder-status">${statusText}</div>`;
}

// ============ DETEKSI BENTROK JADWAL ============
// Cek apakah guru yang sedang dibuka sudah punya jadwal lain yang beririsan waktu, di hari yang sama.
function findConflict(hari, mulai, selesai, excludeId) {
  const start = hmToMinutes(mulai), end = hmToMinutes(selesai);
  return getGuruSchedules().find(e => {
    if (e.id === excludeId || e.hari !== hari) return false;
    const s2 = hmToMinutes(e.mulai), e2 = hmToMinutes(e.selesai);
    return start < e2 && s2 < end;
  }) || null;
}

// ============ MODAL: TAMBAH/EDIT JADWAL ============
const modalJadwal = document.getElementById("modal-jadwal");
function openModalForAdd() {
  state.editingId = null;
  document.getElementById("modal-jadwal-title").textContent = t("addSchedule");
  document.getElementById("f-id").value = "";
  document.getElementById("f-hari").value = state.activeDay;
  document.getElementById("f-mapel").value = "";
  document.getElementById("f-kelas").value = "";
  document.getElementById("f-mulai").value = "";
  document.getElementById("f-selesai").value = "";
  document.getElementById("f-ruang").value = "";
  document.getElementById("btn-delete-jadwal").hidden = true;
  document.getElementById("form-error").hidden = true;
  modalJadwal.hidden = false;
  document.getElementById("f-mapel").focus();
}
function openModalForEdit(entry) {
  state.editingId = entry.id;
  document.getElementById("modal-jadwal-title").textContent = t("editSchedule");
  document.getElementById("f-id").value = entry.id;
  document.getElementById("f-hari").value = entry.hari;
  document.getElementById("f-mapel").value = entry.mapel;
  document.getElementById("f-kelas").value = entry.kelas;
  document.getElementById("f-mulai").value = entry.mulai;
  document.getElementById("f-selesai").value = entry.selesai;
  document.getElementById("f-ruang").value = entry.ruang || "";
  document.getElementById("btn-delete-jadwal").hidden = false;
  document.getElementById("form-error").hidden = true;
  modalJadwal.hidden = false;
}
function closeModal(el) { el.hidden = true; }

function submitJadwalForm(ev) {
  ev.preventDefault();
  const errEl = document.getElementById("form-error");
  const hari = Number(document.getElementById("f-hari").value);
  const mapel = document.getElementById("f-mapel").value.trim();
  const kelas = document.getElementById("f-kelas").value.trim();
  const mulai = document.getElementById("f-mulai").value;
  const selesai = document.getElementById("f-selesai").value;
  const ruang = document.getElementById("f-ruang").value.trim();

  if (!mapel || !kelas || !mulai || !selesai) {
    errEl.textContent = t("formErrorRequired"); errEl.hidden = false; return;
  }
  if (hmToMinutes(selesai) <= hmToMinutes(mulai)) {
    errEl.textContent = t("formErrorTime"); errEl.hidden = false; return;
  }

  const conflict = findConflict(hari, mulai, selesai, state.editingId);

  const list = getGuruSchedules();
  if (state.editingId) {
    const item = list.find(e => e.id === state.editingId);
    Object.assign(item, { hari, mapel, kelas, mulai, selesai, ruang });
  } else {
    list.push({ id: "s" + Date.now() + Math.random().toString(36).slice(2, 6), hari, mapel, kelas, mulai, selesai, ruang });
  }
  saveSchedules();
  closeModal(modalJadwal);
  state.activeDay = hari;
  renderWeeklyHours(); renderDayTabs(); renderDayPanel(); renderReminder();
  toast(conflict
    ? `${t("toastSaved")} ${t("conflictWarning")} "${conflict.mapel}" (${conflict.mulai}–${conflict.selesai})`
    : t("toastSaved"));
}

// ============ CETAK JADWAL ============
function printSchedule() {
  const isKelas = state.viewMode === "kelas";
  const title = isKelas ? state.currentKelas : state.currentGuru.nama;
  const sub = isKelas ? t("modeKelas") : `${t("codeLabel")} ${state.currentGuru.kode}`;
  let html = `<h1>${escapeHtml(title)}</h1><div class="print-sub">${escapeHtml(sub)} · ${t("appName")}</div>`;
  DAY_KEYS.forEach((key, dayIdx) => {
    const list = getActiveEntries().filter(e => e.hari === dayIdx).sort((a, b) => hmToMinutes(a.mulai) - hmToMinutes(b.mulai));
    if (list.length === 0) return;
    html += `<h2>${t(key)}</h2><table><thead><tr><th>${t("fieldStart")}</th><th>${t("fieldEnd")}</th><th>${t("fieldSubject")}</th><th>${isKelas ? t("settings") : t("fieldClass")}</th><th>${t("fieldRoom")}</th></tr></thead><tbody>`;
    list.forEach(e => {
      html += `<tr><td>${e.mulai}</td><td>${e.selesai}</td><td>${escapeHtml(e.mapel)}</td><td>${escapeHtml(isKelas ? e._guruNama : e.kelas)}</td><td>${escapeHtml(e.ruang || "-")}</td></tr>`;
    });
    html += `</tbody></table>`;
  });
  document.getElementById("print-area").innerHTML = html;
  window.print();
}

// ============ RESET KE JADWAL RESMI ============
function resetCurrentGuruSchedule() {
  if (state.viewMode !== "guru" || !state.currentGuru) return;
  if (!confirm(t("confirmReset"))) return;
  const id = state.currentGuru.id;
  const official = (typeof MASTER_SCHEDULE !== "undefined" && MASTER_SCHEDULE[id]) ? JSON.parse(JSON.stringify(MASTER_SCHEDULE[id])) : [];
  state.schedules[id] = official;
  saveSchedules();
  renderWeeklyHours(); renderDayTabs(); renderDayPanel(); renderReminder();
  closeModal(modalSettings);
  toast(t("toastReset"));
}

function deleteJadwal(id) {
  const list = getGuruSchedules();
  const idx = list.findIndex(e => e.id === id);
  if (idx === -1) return;
  list.splice(idx, 1);
  saveSchedules();
  closeModal(modalJadwal);
  renderDayPanel(); renderReminder();
  toast(t("toastDeleted"));
}

// ============ MODAL: SETTINGS ============
const modalSettings = document.getElementById("modal-settings");
function openSettings() {
  document.getElementById("seg-theme").querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.value === state.settings.theme));
  document.getElementById("seg-lang").querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.value === state.settings.lang));
  document.getElementById("notif-enable").checked = state.settings.notif.enabled;
  document.getElementById("notif-minutes").value = state.settings.notif.minutes;
  document.getElementById("notif-sound").value = state.settings.notif.sound;
  updatePermissionHint();
  document.getElementById("btn-reset-guru").closest(".settings-group").hidden = state.viewMode !== "guru";
  modalSettings.hidden = false;
}
function updatePermissionHint() {
  const hint = document.getElementById("notif-permission-hint");
  if (!("Notification" in window)) { hint.hidden = true; return; }
  if (Notification.permission === "denied" && state.settings.notif.enabled) {
    hint.textContent = t("notifPermissionDenied"); hint.hidden = false;
  } else if (Notification.permission === "default" && state.settings.notif.enabled) {
    hint.textContent = t("notifPermissionNeeded"); hint.hidden = false;
  } else {
    hint.hidden = true;
  }
}

function setTheme(v) { state.settings.theme = v; saveSettings(); applyTheme(); }
function setLang(v) {
  state.settings.lang = v; saveSettings(); applyI18nStatic();
  document.getElementById("select-heading").textContent = t(state.viewMode === "kelas" ? "selectHeadingKelas" : "selectHeading");
  document.getElementById("select-sub").textContent = t(state.viewMode === "kelas" ? "selectSubKelas" : "selectSub");
  if (state.currentGuru || state.currentKelas) {
    document.querySelector(".reminder-label").textContent = t(state.viewMode === "kelas" ? "upcomingLabelKelas" : "upcomingLabel");
    if (state.viewMode === "guru") document.getElementById("dash-kode").textContent = `${t("codeLabel")} ${state.currentGuru.kode}`;
    renderWeeklyHours(); renderDayTabs(); renderDayPanel(); renderReminder();
  } else {
    renderGuruGrid(document.getElementById("search-guru").value);
  }
}

async function setNotifEnabled(enabled) {
  state.settings.notif.enabled = enabled;
  saveSettings();
  if (enabled && "Notification" in window && Notification.permission === "default") {
    try { await Notification.requestPermission(); } catch (e) { /* ignore */ }
  }
  updatePermissionHint();
  toast(enabled ? t("toastNotifOn") : t("toastNotifOff"));
}

// ============ NOTIFICATION ENGINE ============
function showNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(reg => reg.showNotification(title, {
        body, icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "jg-" + Date.now(),
      })).catch(() => new Notification(title, { body, icon: "icons/icon-192.png" }));
    } else {
      new Notification(title, { body, icon: "icons/icon-192.png" });
    }
  } else {
    toast(`${title} — ${body}`);
  }
}

function checkNotifications() {
  const n = state.settings.notif;
  if (!n.enabled || !state.currentGuru) return;
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const today = todayIndex();
  const dKey = dateKey(now);
  const list = getGuruSchedules().filter(e => e.hari === today);

  list.forEach(e => {
    const start = hmToMinutes(e.mulai);
    const triggerAt = start - Number(n.minutes);
    const fireKey = `${state.currentGuru.id}_${e.id}_${dKey}`;
    if (nowMin >= triggerAt && nowMin < start + 1 && !state.fired[fireKey]) {
      state.fired[fireKey] = true;
      saveFired();
      showNotification(
        `${t("reminderNotifTitle")}: ${e.mapel}`,
        `${e.kelas} · ${e.mulai}–${e.selesai}${e.ruang ? " · " + e.ruang : ""}`
      );
      if (n.sound !== "none") SoundKit.play(n.sound);
    }
  });

  // beres-beres cache fired notif lama (simpan cuma 3 hari terakhir)
  const keys = Object.keys(state.fired);
  if (keys.length > 300) {
    const cutoff = new Date(now.getTime() - 3 * 86400000);
    keys.forEach(k => {
      const parts = k.split("_");
      const dstr = parts[parts.length - 1];
      if (new Date(dstr) < cutoff) delete state.fired[k];
    });
    saveFired();
  }
}

// ============ EVENT WIRING ============
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applyI18nStatic();
  renderGuruGrid();

  // resume guru/kelas terakhir kalau ada
  const lastId = localStorage.getItem(LS.LAST_GURU);
  const lastKelas = localStorage.getItem(LS.LAST_KELAS);
  if (lastId && GURU_SEED.some(g => g.id === lastId)) selectGuru(lastId);
  else if (lastKelas) selectKelas(lastKelas);

  document.getElementById("search-guru").addEventListener("input", e => renderGuruGrid(e.target.value));
  document.getElementById("btn-back").addEventListener("click", backToSelect);
  document.querySelectorAll(".mode-btn").forEach(btn => btn.addEventListener("click", () => setMode(btn.dataset.mode)));
  document.getElementById("btn-print").addEventListener("click", printSchedule);
  document.getElementById("btn-reset-guru").addEventListener("click", resetCurrentGuruSchedule);

  document.getElementById("btn-theme-select").addEventListener("click", () => setTheme(state.settings.theme === "dark" ? "light" : "dark"));
  document.getElementById("btn-lang-select").addEventListener("click", () => setLang(state.settings.lang === "id" ? "en" : "id"));

  document.getElementById("btn-add-jadwal").addEventListener("click", openModalForAdd);
  document.getElementById("form-jadwal").addEventListener("submit", submitJadwalForm);
  document.getElementById("btn-delete-jadwal").addEventListener("click", () => deleteJadwal(state.editingId));

  document.getElementById("btn-settings").addEventListener("click", openSettings);

  document.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", (e) => closeModal(e.target.closest(".modal-overlay"))));
  document.querySelectorAll(".modal-overlay").forEach(ov => ov.addEventListener("click", (e) => { if (e.target === ov) closeModal(ov); }));

  document.getElementById("seg-theme").addEventListener("click", e => {
    const btn = e.target.closest("button"); if (!btn) return;
    setTheme(btn.dataset.value);
    document.getElementById("seg-theme").querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
  });
  document.getElementById("seg-lang").addEventListener("click", e => {
    const btn = e.target.closest("button"); if (!btn) return;
    setLang(btn.dataset.value);
    document.getElementById("seg-lang").querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
  });
  document.getElementById("notif-enable").addEventListener("change", e => setNotifEnabled(e.target.checked));
  document.getElementById("notif-minutes").addEventListener("change", e => { state.settings.notif.minutes = Number(e.target.value); saveSettings(); });
  document.getElementById("notif-sound").addEventListener("change", e => { state.settings.notif.sound = e.target.value; saveSettings(); });
  document.getElementById("btn-test-notif").addEventListener("click", async () => {
    SoundKit.unlock();
    if ("Notification" in window && Notification.permission === "default") await Notification.requestPermission();
    showNotification(t("testNotifTitle"), t("testNotifBody"));
    if (state.settings.notif.sound !== "none") SoundKit.play(state.settings.notif.sound);
    updatePermissionHint();
  });

  // refresh tampilan waktu-relatif tiap 30 detik + cek notifikasi
  setInterval(() => {
    if (state.currentGuru) { renderReminder(); renderDayPanel(); checkNotifications(); }
  }, 30000);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {/* offline install opsional, aman diabaikan */ });
  }
});
