const APP_STORAGE_KEY = "wc2026-office-predictor-state";
const ADMIN_SESSION_KEY = "wc2026-office-predictor-admin-session";
const SYNC_INTERVAL_MS = 20000;
const LOCALE = "tr-TR";

const SUPABASE_URL = "https://ycgguuxpjkaubzizajwd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Bm88PedADVAjWMrnmYW1og_LIuAuomR";
const SUPABASE_ADMIN_EMAIL = "kemalis@hotmail.com";
const OFFICIAL_RESULTS_SLUG = "default";
const ADMIN_MODE = new URLSearchParams(window.location.search).get("admin") === "1";

const GROUPS = {
  A: ["Mexico", "South Africa", "South Korea", "EU Play-off D"],
  B: ["Canada", "EU Play-off A", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["USA", "Paraguay", "Australia", "EU Play-off C"],
  E: ["Germany", "Curacao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "EU Play-off B", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "INT Play-off 2", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "INT Play-off 1", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"],
};

const FIXTURES = {
  A: [
    ["Mexico", "South Africa"],
    ["South Korea", "EU Play-off D"],
    ["EU Play-off D", "South Africa"],
    ["Mexico", "South Korea"],
    ["South Africa", "South Korea"],
    ["EU Play-off D", "Mexico"],
  ],
  B: [
    ["Canada", "EU Play-off A"],
    ["Qatar", "Switzerland"],
    ["Switzerland", "EU Play-off A"],
    ["Canada", "Qatar"],
    ["Switzerland", "Canada"],
    ["EU Play-off A", "Qatar"],
  ],
  C: [
    ["Brazil", "Morocco"],
    ["Haiti", "Scotland"],
    ["Scotland", "Morocco"],
    ["Brazil", "Haiti"],
    ["Morocco", "Haiti"],
    ["Scotland", "Brazil"],
  ],
  D: [
    ["USA", "Paraguay"],
    ["Australia", "EU Play-off C"],
    ["USA", "Australia"],
    ["EU Play-off C", "Paraguay"],
    ["EU Play-off C", "USA"],
    ["Paraguay", "Australia"],
  ],
  E: [
    ["Germany", "Curacao"],
    ["Ivory Coast", "Ecuador"],
    ["Germany", "Ivory Coast"],
    ["Ecuador", "Curacao"],
    ["Curacao", "Ivory Coast"],
    ["Ecuador", "Germany"],
  ],
  F: [
    ["Netherlands", "Japan"],
    ["EU Play-off B", "Tunisia"],
    ["Netherlands", "EU Play-off B"],
    ["Tunisia", "Japan"],
    ["Japan", "EU Play-off B"],
    ["Tunisia", "Netherlands"],
  ],
  G: [
    ["Belgium", "Egypt"],
    ["Iran", "New Zealand"],
    ["Belgium", "Iran"],
    ["New Zealand", "Egypt"],
    ["Egypt", "Iran"],
    ["New Zealand", "Belgium"],
  ],
  H: [
    ["Spain", "Cape Verde"],
    ["Saudi Arabia", "Uruguay"],
    ["Spain", "Saudi Arabia"],
    ["Uruguay", "Cape Verde"],
    ["Cape Verde", "Saudi Arabia"],
    ["Uruguay", "Spain"],
  ],
  I: [
    ["France", "Senegal"],
    ["INT Play-off 2", "Norway"],
    ["France", "INT Play-off 2"],
    ["Norway", "Senegal"],
    ["Norway", "France"],
    ["Senegal", "INT Play-off 2"],
  ],
  J: [
    ["Argentina", "Algeria"],
    ["Austria", "Jordan"],
    ["Argentina", "Austria"],
    ["Jordan", "Algeria"],
    ["Algeria", "Austria"],
    ["Jordan", "Argentina"],
  ],
  K: [
    ["Portugal", "INT Play-off 1"],
    ["Uzbekistan", "Colombia"],
    ["Portugal", "Uzbekistan"],
    ["Colombia", "INT Play-off 1"],
    ["Colombia", "Portugal"],
    ["INT Play-off 1", "Uzbekistan"],
  ],
  L: [
    ["England", "Croatia"],
    ["Ghana", "Panama"],
    ["England", "Ghana"],
    ["Panama", "Croatia"],
    ["Panama", "England"],
    ["Croatia", "Ghana"],
  ],
};

const KNOCKOUT_MATCHES = [
  { id: 73, stage: "r32", title: "Match 73", sources: ["2A", "2B"] },
  { id: 74, stage: "r32", title: "Match 74", sources: ["1E", "3ABCDF"] },
  { id: 75, stage: "r32", title: "Match 75", sources: ["1F", "2C"] },
  { id: 76, stage: "r32", title: "Match 76", sources: ["1C", "2F"] },
  { id: 77, stage: "r32", title: "Match 77", sources: ["1I", "3CDFGH"] },
  { id: 78, stage: "r32", title: "Match 78", sources: ["2E", "2I"] },
  { id: 79, stage: "r32", title: "Match 79", sources: ["1A", "3CEFHI"] },
  { id: 80, stage: "r32", title: "Match 80", sources: ["1L", "3EHIJK"] },
  { id: 81, stage: "r32", title: "Match 81", sources: ["1D", "3BEFIJ"] },
  { id: 82, stage: "r32", title: "Match 82", sources: ["1G", "3AEHIJ"] },
  { id: 83, stage: "r32", title: "Match 83", sources: ["2K", "2L"] },
  { id: 84, stage: "r32", title: "Match 84", sources: ["1H", "2J"] },
  { id: 85, stage: "r32", title: "Match 85", sources: ["1B", "3EFGIJ"] },
  { id: 86, stage: "r32", title: "Match 86", sources: ["1J", "2H"] },
  { id: 87, stage: "r32", title: "Match 87", sources: ["1K", "3DEIJL"] },
  { id: 88, stage: "r32", title: "Match 88", sources: ["2D", "2G"] },
  { id: 89, stage: "r16", title: "Match 89", sources: ["W74", "W77"] },
  { id: 90, stage: "r16", title: "Match 90", sources: ["W73", "W75"] },
  { id: 91, stage: "r16", title: "Match 91", sources: ["W76", "W78"] },
  { id: 92, stage: "r16", title: "Match 92", sources: ["W79", "W80"] },
  { id: 93, stage: "r16", title: "Match 93", sources: ["W83", "W84"] },
  { id: 94, stage: "r16", title: "Match 94", sources: ["W81", "W82"] },
  { id: 95, stage: "r16", title: "Match 95", sources: ["W86", "W88"] },
  { id: 96, stage: "r16", title: "Match 96", sources: ["W85", "W87"] },
  { id: 97, stage: "qf", title: "Match 97", sources: ["W89", "W90"] },
  { id: 98, stage: "qf", title: "Match 98", sources: ["W93", "W94"] },
  { id: 99, stage: "qf", title: "Match 99", sources: ["W91", "W92"] },
  { id: 100, stage: "qf", title: "Match 100", sources: ["W95", "W96"] },
  { id: 101, stage: "sf", title: "Match 101", sources: ["W97", "W98"] },
  { id: 102, stage: "sf", title: "Match 102", sources: ["W99", "W100"] },
  { id: 103, stage: "third", title: "Match 103", sources: ["L101", "L102"] },
  { id: 104, stage: "final", title: "Match 104", sources: ["W101", "W102"] },
];

const KNOCKOUT_ROUNDS = [
  { key: "r32", title: "Round of 32", ids: range(73, 88) },
  { key: "r16", title: "Round of 16", ids: range(89, 96) },
  { key: "qf", title: "Quarter-finals", ids: range(97, 100) },
  { key: "sf", title: "Semi-finals", ids: range(101, 102) },
  { key: "final-stage", title: "Final & Third Place", ids: [103, 104] },
];

const BRACKET_BOARD = {
  left: [
    { key: "r32", title: "Round of 32", ids: [74, 77, 73, 75, 83, 84, 81, 82] },
    { key: "r16", title: "Round of 16", ids: [89, 90, 93, 94] },
    { key: "qf", title: "Quarter-finals", ids: [97, 98] },
    { key: "sf", title: "Semi-finals", ids: [101] },
  ],
  right: [
    { key: "sf", title: "Semi-finals", ids: [102] },
    { key: "qf", title: "Quarter-finals", ids: [99, 100] },
    { key: "r16", title: "Round of 16", ids: [91, 92, 95, 96] },
    { key: "r32", title: "Round of 32", ids: [76, 78, 79, 80, 86, 88, 85, 87] },
  ],
};

const ROUND_POINTS = {
  r32: 2,
  r16: 3,
  qf: 4,
  sf: 5,
};

const BONUS_POINTS = {
  finalist: 6,
  champion: 10,
  thirdPlace: 4,
};

const SOURCE_PATTERNS = {
  groupRank: /^[12][A-L]$/,
  bestThird: /^3[A-L]+$/,
  winner: /^W\d+$/,
  loser: /^L\d+$/,
};

const BEST_THIRD_SOURCES = unique(
  KNOCKOUT_MATCHES.flatMap((match) => match.sources).filter(isBestThirdSource)
);

const GROUP_ORDER = Object.keys(GROUPS);
const GROUP_FIXTURE_DEFS = GROUP_ORDER.map((groupKey) => ({
  groupKey,
  teams: GROUPS[groupKey],
  matches: FIXTURES[groupKey].map(([homeTeam, awayTeam], index) => ({
    id: `${groupKey}-${index + 1}`,
    groupKey,
    order: index + 1,
    homeTeam,
    awayTeam,
  })),
}));
const ALL_GROUP_MATCHES = GROUP_FIXTURE_DEFS.flatMap((group) => group.matches);
const TOTAL_GROUP_MATCHES = ALL_GROUP_MATCHES.length;
const TOTAL_KNOCKOUT_MATCHES = KNOCKOUT_MATCHES.length;

let state = loadState();
let submissions = [];
let officialResults = createOfficialResultsState();
let officialDraft = createOfficialResultsState();
let syncState = {
  ready: false,
  loading: false,
  submitting: false,
  error: "",
  lastSyncedAt: "",
};
let remoteRefreshPromise = null;
let adminState = {
  enabled: ADMIN_MODE,
  session: loadAdminSession(),
  loggingIn: false,
  saving: false,
  deletingEntryId: "",
  error: "",
  officialDirty: false,
};

const dom = {
  entryForm: document.querySelector("#entry-form"),
  fullNameInput: document.querySelector("#full-name"),
  confirmButton: document.querySelector("#confirm-btn"),
  clearButton: document.querySelector("#clear-btn"),
  groupProgress: document.querySelector("#group-progress"),
  knockoutProgress: document.querySelector("#knockout-progress"),
  lockState: document.querySelector("#lock-state"),
  championPreview: document.querySelector("#champion-preview"),
  lockNote: document.querySelector("#lock-note"),
  syncNote: document.querySelector("#sync-note"),
  fixturesRoot: document.querySelector("#fixtures-root"),
  standingsRoot: document.querySelector("#standings-root"),
  bracketRoot: document.querySelector("#bracket-root"),
  leaderboardRoot: document.querySelector("#leaderboard-root"),
  adminSection: document.querySelector("#admin-section"),
  adminRoot: document.querySelector("#admin-root"),
  previewOverlay: document.querySelector("#preview-overlay"),
  previewTitle: document.querySelector("#preview-title"),
  previewMeta: document.querySelector("#preview-meta"),
  previewBody: document.querySelector("#preview-body"),
};

hydrateAdminSession();
renderAll();
bindEvents();
bootstrap();

function bindEvents() {
  dom.entryForm.addEventListener("submit", handleConfirm);
  dom.fullNameInput.addEventListener("input", handleNameInput);
  dom.fixturesRoot.addEventListener("input", handleFixtureInput);
  dom.bracketRoot.addEventListener("change", handleKnockoutChange);
  dom.clearButton.addEventListener("click", handleClear);
  dom.leaderboardRoot.addEventListener("click", handleLeaderboardClick);
  dom.adminRoot.addEventListener("submit", handleAdminSubmit);
  dom.adminRoot.addEventListener("input", handleAdminInput);
  dom.adminRoot.addEventListener("change", handleAdminChange);
  dom.adminRoot.addEventListener("click", handleAdminClick);
  dom.previewOverlay.addEventListener("click", handlePreviewClose);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePreview();
    }
  });
  document.addEventListener("visibilitychange", handleVisibilityRefresh);
}

async function bootstrap() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    syncState.error = "Supabase ayarlari eksik.";
    renderAll();
    return;
  }

  await refreshRemoteData();
  window.setInterval(() => {
    if (!document.hidden) {
      refreshRemoteData({ silent: true });
    }
  }, SYNC_INTERVAL_MS);
}

function handleVisibilityRefresh() {
  if (!document.hidden) {
    refreshRemoteData({ silent: true });
  }
}

function handleNameInput(event) {
  if (state.locked) {
    return;
  }

  state.fullName = event.target.value.slice(0, 80);
  saveState();
  renderHeader(stabilizeStateAndGetModel());
}

function handleFixtureInput(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || state.locked) {
    return;
  }

  const matchId = target.dataset.matchId;
  const side = target.dataset.side;

  if (!matchId || !side || !state.groupScores[matchId]) {
    return;
  }

  state.groupScores[matchId][side] = sanitizeScoreValue(target.value);
  saveState();
  renderAll({ preserveFocus: true });
}

function handleKnockoutChange(event) {
  const target = event.target;

  if (!(target instanceof HTMLSelectElement) || state.locked) {
    return;
  }

  const matchId = target.dataset.knockoutId;

  if (!matchId) {
    return;
  }

  state.knockoutWinners[matchId] = target.value;
  saveState();
  renderAll({ preserveFocus: true });
}

async function handleConfirm(event) {
  event.preventDefault();

  if (state.locked || syncState.submitting) {
    return;
  }

  const cleanName = state.fullName.trim();
  const completion = getCompletionState(state);

  if (!cleanName) {
    window.alert("Lutfen once ad soyad girin.");
    dom.fullNameInput.focus();
    return;
  }

  if (!completion.complete) {
    window.alert(
      `Onaydan once tum alanlari doldurun.\nGrup maclari: ${completion.groupFilled}/${TOTAL_GROUP_MATCHES}\nEleme secimleri: ${completion.knockoutFilled}/${TOTAL_KNOCKOUT_MATCHES}`
    );
    return;
  }

  if (!syncState.ready) {
    window.alert(
      "Supabase baglantisi hazir degil. Once sayfanin ortak leaderboard ile baglandigini teyit edelim."
    );
    return;
  }

  const lockedAt = new Date().toISOString();
  const submission = normalizeEntry({
    ...state,
    fullName: cleanName,
    locked: true,
    lockedAt,
  });

  syncState.submitting = true;
  renderAll();

  try {
    const remoteEntry = await createPrediction(submission);

    state = normalizeEntry({
      ...submission,
      remoteSyncedAt: remoteEntry.remoteSyncedAt || lockedAt,
    });
    submissions = mergeSubmissionIntoList(submissions, remoteEntry);
    saveState();
    syncState.lastSyncedAt = new Date().toISOString();

    try {
      await refreshRemoteData({ silent: true });
    } catch (error) {
      syncState.error = error.message || "Ortak tablo yenilenemedi.";
    }
  } catch (error) {
    window.alert(error.message || "Tahmin kaydedilemedi.");
  } finally {
    syncState.submitting = false;
    renderAll();
  }
}

function handleClear() {
  const sharedWarning =
    state.locked && state.remoteSyncedAt
      ? "\nNot: Ortak leaderboard kaydi silinmez, sadece bu cihazdaki taslak sifirlanir."
      : "";
  const confirmed = window.confirm(
    `Bu tarayicidaki aktif tahmini ve local veriyi sifirlamak istiyor musunuz?${sharedWarning}`
  );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(APP_STORAGE_KEY);
  state = createDefaultState();
  closePreview();
  renderAll();
}

async function handleLeaderboardClick(event) {
  const deleteTrigger = event.target.closest("[data-delete-entry]");

  if (deleteTrigger) {
    await handleDeleteSubmission(deleteTrigger.dataset.deleteEntry || "");
    return;
  }

  const trigger = event.target.closest("[data-preview-id]");

  if (!trigger) {
    return;
  }

  const entry = submissions.find((item) => item.entryId === trigger.dataset.previewId);

  if (!entry) {
    return;
  }

  openPreview(entry);
}

async function handleDeleteSubmission(entryId) {
  const session = getActiveAdminSession();

  if (!session || !entryId) {
    return;
  }

  const entry = submissions.find((item) => item.entryId === entryId);
  const confirmed = window.confirm(
    `${entry?.fullName || "Bu kaydi"} leaderboard'dan silmek istiyor musunuz?`
  );

  if (!confirmed) {
    return;
  }

  adminState.deletingEntryId = entryId;
  adminState.error = "";
  renderAll();

  try {
    await deletePrediction(entryId, session.accessToken);
    submissions = submissions.filter((item) => item.entryId !== entryId);

    if (state.entryId === entryId && state.locked) {
      state.remoteSyncedAt = "";
      saveState();
    }

    await refreshRemoteData({ silent: true });
  } catch (error) {
    adminState.error = error.message || "Kayit silinemedi.";
  } finally {
    adminState.deletingEntryId = "";
    renderAll();
  }
}

function handlePreviewClose(event) {
  if (
    event.target === dom.previewOverlay ||
    event.target.closest("[data-close-preview='true']")
  ) {
    closePreview();
  }
}

async function handleAdminSubmit(event) {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || !form.matches("[data-admin-login-form]")) {
    return;
  }

  event.preventDefault();

  if (adminState.loggingIn) {
    return;
  }

  const formData = new FormData(form);
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") || "");

  if (!password) {
    adminState.error = "Lutfen admin sifresini girin.";
    renderAll();
    return;
  }

  if (email !== SUPABASE_ADMIN_EMAIL.toLowerCase()) {
    adminState.error = "Bu admin paneli sadece belirlenen e-posta ile acilir.";
    renderAll();
    return;
  }

  adminState.loggingIn = true;
  adminState.error = "";
  renderAll();

  try {
    adminState.session = await loginAdmin(email, password);
    adminState.officialDirty = false;
    saveAdminSession(adminState.session);
    await refreshRemoteData({ silent: true });
  } catch (error) {
    adminState.error = error.message || "Admin girisi basarisiz.";
  } finally {
    adminState.loggingIn = false;
    renderAll();
  }
}

function handleAdminInput(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const matchId = target.dataset.adminMatchId;
  const side = target.dataset.side;

  if (!matchId || !side || !officialDraft.groupScores[matchId] || !getActiveAdminSession()) {
    return;
  }

  officialDraft.groupScores[matchId][side] = sanitizeScoreValue(target.value);
  adminState.officialDirty = true;
  renderAll({ preserveFocus: true });
}

function handleAdminChange(event) {
  const target = event.target;

  if (!(target instanceof HTMLSelectElement) || !getActiveAdminSession()) {
    return;
  }

  const matchId = target.dataset.adminKnockoutId;

  if (!matchId) {
    return;
  }

  officialDraft.knockoutWinners[matchId] = target.value;
  adminState.officialDirty = true;
  renderAll({ preserveFocus: true });
}

async function handleAdminClick(event) {
  const saveTrigger = event.target.closest("[data-admin-save]");
  const refreshTrigger = event.target.closest("[data-admin-refresh]");
  const logoutTrigger = event.target.closest("[data-admin-logout]");

  if (saveTrigger) {
    await handleAdminSave();
    return;
  }

  if (refreshTrigger) {
    await refreshRemoteData();
    return;
  }

  if (logoutTrigger) {
    adminState.session = null;
    adminState.error = "";
    adminState.officialDirty = false;
    clearAdminSession();
    officialDraft = createOfficialResultsState(officialResults);
    renderAll();
  }
}

async function handleAdminSave() {
  const session = getActiveAdminSession();

  if (!session || adminState.saving) {
    return;
  }

  adminState.saving = true;
  adminState.error = "";
  renderAll();

  try {
    const draftToSave = createOfficialResultsState({
      groupScores: officialDraft.groupScores,
      knockoutWinners: officialDraft.knockoutWinners,
      updatedAt: new Date().toISOString(),
    });
    const savedOfficialResults = await upsertOfficialResults(draftToSave, session.accessToken);

    officialResults = createOfficialResultsState(savedOfficialResults);
    officialDraft = createOfficialResultsState(savedOfficialResults);
    adminState.officialDirty = false;
    await refreshRemoteData({ silent: true });
  } catch (error) {
    adminState.error = error.message || "Resmi sonuclar kaydedilemedi.";
  } finally {
    adminState.saving = false;
    renderAll();
  }
}

function renderAll(options = {}) {
  const focusState = options.preserveFocus ? captureFocus() : null;
  const model = stabilizeStateAndGetModel();

  renderHeader(model);
  renderFixtures();
  renderStandings(model);
  renderBracket(model);
  renderLeaderboard();
  renderAdmin();

  if (focusState) {
    restoreFocus(focusState);
  }
}

function renderHeader(model) {
  const completion = getCompletionState(state);
  const lockedLabel = state.locked ? "Kilitli" : "Acik";
  const championLabel = model.champion || "Secilmedi";

  if (dom.fullNameInput.value !== state.fullName) {
    dom.fullNameInput.value = state.fullName;
  }

  dom.fullNameInput.disabled = state.locked;
  dom.confirmButton.disabled = state.locked || syncState.submitting;
  dom.confirmButton.textContent = syncState.submitting
    ? "Kaydediliyor..."
    : state.locked
      ? "Tahmin Kilitlendi"
      : "Tahmini Onayla";

  dom.groupProgress.textContent = `${completion.groupFilled} / ${TOTAL_GROUP_MATCHES}`;
  dom.knockoutProgress.textContent = `${completion.knockoutFilled} / ${TOTAL_KNOCKOUT_MATCHES}`;
  dom.lockState.textContent = lockedLabel;
  dom.championPreview.textContent = championLabel;

  dom.lockNote.textContent = state.locked
    ? state.remoteSyncedAt
      ? `Tahmininiz ${formatDateTime(state.lockedAt)} tarihinde kilitlendi. Artik puan tablosunda yer almaya hazir.`
      : `Tahmininiz ${formatDateTime(state.lockedAt)} tarihinde kilitlendi.`
    : "Tahmininizi tamamlayip onayladiginizda kaydiniz turnuva boyunca sabit kalir.";

  dom.syncNote.classList.toggle("sync-note--warning", Boolean(syncState.error));
  dom.syncNote.textContent = getSyncNote();
}

function renderFixtures() {
  dom.fixturesRoot.innerHTML = GROUP_FIXTURE_DEFS.map((group) =>
    renderFixtureGroupCard(group, state.groupScores, {
      matchAttribute: "data-match-id",
      disabled: state.locked,
    })
  ).join("");
}

function renderStandings(model) {
  dom.standingsRoot.innerHTML = `
    <div class="standings-map">
      ${GROUP_ORDER.map((groupKey) => {
        const rows = model.standings[groupKey];
        const rowMarkup = rows
          .map((row, index) => {
            const rowClasses = ["mini-group-row"];

            if (index < 2) {
              rowClasses.push("row-qualifier");
            } else if (index === 2 && model.qualification.bestThirdGroups.has(groupKey)) {
              rowClasses.push("row-best-third");
            }

            return `
              <div class="${rowClasses.join(" ")}">
                <strong class="mini-group-team" title="${escapeAttribute(row.team)}">${escapeHtml(row.team)}</strong>
                <span class="mini-group-value">${row.played}</span>
                <span class="mini-group-value">${row.goalsFor}:${row.goalsAgainst}</span>
                <span class="mini-group-value">${row.goalDifference >= 0 ? "+" : ""}${row.goalDifference}</span>
                <span class="mini-group-value">${row.points}</span>
              </div>
            `;
          })
          .join("");

        return `
          <article class="mini-group-card">
            <div class="mini-group-card__head">
              <div>
                <p class="section-kicker">Group ${groupKey}</p>
                <h3>${groupKey} Grubu</h3>
              </div>
            </div>
            <div class="mini-group-card__body">
              <div class="mini-group-legend">
                <span>Takim</span>
                <span>O</span>
                <span>Gol</span>
                <span>Av</span>
                <span>P</span>
              </div>
              ${rowMarkup}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderBracket(model) {
  const finalMatch = model.byId[104];
  const thirdPlaceMatch = model.byId[103];
  const finalTeams = finalMatch.participants.filter(Boolean);
  const finalLabel =
    finalTeams.length === 2
      ? `${finalTeams[0]} vs ${finalTeams[1]}`
      : "Final eslesmesi secimlerle dolacak";

  dom.bracketRoot.innerHTML = `
    <div class="bracket-scroll">
      <div class="bracket-board">
        ${renderBracketLane("left", BRACKET_BOARD.left, model)}
        <div class="bracket-center">
          <div class="bracket-center__section">
            <p class="bracket-column__label">Final</p>
            ${renderBracketBoardMatch(finalMatch, "center")}
          </div>

          <article class="bracket-crown">
            <span>Sampiyon</span>
            <strong>${escapeHtml(model.champion || "Secilmedi")}</strong>
            <p>${escapeHtml(finalLabel)}</p>
            <small>Ucunculuk: ${escapeHtml(model.thirdPlaceWinner || "Secilmedi")}</small>
          </article>

          <div class="bracket-center__section">
            <p class="bracket-column__label">Third Place</p>
            ${renderBracketBoardMatch(thirdPlaceMatch, "center")}
          </div>
        </div>
        ${renderBracketLane("right", BRACKET_BOARD.right, model)}
      </div>
    </div>
  `;
}

function renderBracketLane(side, columns, model) {
  return `
    <div class="bracket-side bracket-side--${side}">
      ${columns
        .map(
          (column) => `
            <div class="bracket-column bracket-column--${column.key}">
              <p class="bracket-column__label">${escapeHtml(column.title)}</p>
              <div class="bracket-column__stack">
                ${createBracketGroups(column.ids)
                  .map(
                    (group) => `
                      <div class="bracket-group bracket-group--${side} bracket-group--size-${group.length}">
                        ${group
                          .map(
                            (matchId) => `
                              <div class="bracket-lane">
                                ${renderBracketBoardMatch(model.byId[matchId], side)}
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function createBracketGroups(ids) {
  const groups = [];

  for (let index = 0; index < ids.length; index += 2) {
    groups.push(ids.slice(index, index + 2));
  }

  return groups;
}

function renderBracketBoardMatch(match, side) {
  const selectDisabled = state.locked || match.options.length < 2;
  const placeholderLabel = match.options.length < 2 ? "Eslesme bekleniyor" : "Kazanan sec";
  const optionsMarkup = renderWinnerSelectOptions(match.options, match.winner, placeholderLabel);

  return `
    <article class="bracket-match bracket-match--${side}">
      <div class="bracket-slot-stack">
        ${match.sources
          .map((source, index) => {
            const teamLabel = getBracketSlotLabel(match.participants[index], source);

            return `
              <div class="bracket-slot">
                <strong class="bracket-slot__team" title="${escapeAttribute(teamLabel)}">${escapeHtml(teamLabel)}</strong>
              </div>
            `;
          })
          .join("")}
      </div>

      <select class="bracket-select" data-knockout-id="${match.id}" ${selectDisabled ? "disabled" : ""}>
        ${optionsMarkup}
      </select>
    </article>
  `;
}

function getBracketSlotLabel(participant, source) {
  if (!participant) {
    return "";
  }

  if (participant === source && (isWinnerSource(source) || isLoserSource(source))) {
    return "";
  }

  return participant;
}

function renderLeaderboard() {
  const rows = getLeaderboardRows();
  const isAdmin = Boolean(getActiveAdminSession());

  if (!rows.length) {
    dom.leaderboardRoot.innerHTML = `
      <article class="leaderboard-card">
        <p class="leaderboard-note">
          ${escapeHtml(getLeaderboardNote())}
        </p>
        <div class="empty-state">${escapeHtml(getEmptyLeaderboardCopy())}</div>
      </article>
    `;
    return;
  }

  const bodyMarkup = rows
    .map(
      (row) => `
        <tr>
          <td>${row.rank}</td>
          <td>
            <button class="link-button" type="button" data-preview-id="${row.entryId}">
              ${escapeHtml(row.fullName)}
            </button>
          </td>
          <td>${row.totalPoints}</td>
          <td>${row.correctResults}</td>
          <td>${row.exactScores}</td>
          <td>${row.eliminationPoints}</td>
          ${
            isAdmin
              ? `
                <td class="leaderboard-actions">
                  <button
                    class="button button--ghost button--small"
                    type="button"
                    data-delete-entry="${escapeAttribute(row.entryId)}"
                    ${adminState.deletingEntryId === row.entryId ? "disabled" : ""}
                  >
                    ${adminState.deletingEntryId === row.entryId ? "Siliniyor..." : "Sil"}
                  </button>
                </td>
              `
              : ""
          }
        </tr>
      `
    )
    .join("");

  dom.leaderboardRoot.innerHTML = `
    <article class="leaderboard-card">
      <div class="table-note">
        <p class="leaderboard-note">${escapeHtml(getLeaderboardNote())}</p>
        <p class="helper-copy">
          ${escapeHtml(
            syncState.lastSyncedAt
              ? `Son senkron: ${formatDateTime(syncState.lastSyncedAt)}`
              : "Canli leaderboard baglantisi acik"
          )}
        </p>
      </div>
      <div class="leaderboard-shell">
        <table>
          <thead>
            <tr>
              <th>Sira</th>
              <th>Ad Soyad</th>
              <th>Toplam Puan</th>
              <th>Dogru Sonuc</th>
              <th>Tam Skor</th>
              <th>Eleme Puani</th>
              ${isAdmin ? "<th></th>" : ""}
            </tr>
          </thead>
          <tbody>${bodyMarkup}</tbody>
        </table>
      </div>
    </article>
  `;
}

function renderAdmin() {
  if (!dom.adminSection || !dom.adminRoot) {
    return;
  }

  dom.adminSection.classList.toggle("hidden", !adminState.enabled);

  if (!adminState.enabled) {
    return;
  }

  const session = getActiveAdminSession();

  if (!session) {
    dom.adminRoot.innerHTML = `
      <article class="leaderboard-card">
        <form class="admin-login" data-admin-login-form="true" autocomplete="off">
          <p class="admin-note">
            Bu panel sadece <strong>${escapeHtml(SUPABASE_ADMIN_EMAIL)}</strong> icindir.
            Supabase Auth icinde ayni e-posta ile sifreli bir admin kullanicisi
            olusturup burada giris yapabilirsiniz.
          </p>

          <label class="field-label">
            Admin e-posta
            <input type="text" name="email" value="${escapeAttribute(SUPABASE_ADMIN_EMAIL)}" readonly />
          </label>

          <label class="field-label">
            Admin sifresi
            <input type="password" name="password" placeholder="Supabase Auth sifresi" />
          </label>

          ${
            adminState.error
              ? `<p class="sync-note sync-note--warning">${escapeHtml(adminState.error)}</p>`
              : ""
          }

          <div class="button-row">
            <button class="button button--primary" type="submit" ${adminState.loggingIn ? "disabled" : ""}>
              ${adminState.loggingIn ? "Giris yapiliyor..." : "Admin Girisi"}
            </button>
          </div>
        </form>
      </article>
    `;
    return;
  }

  const officialModel = stabilizeOfficialDraftAndGetModel();

  dom.adminRoot.innerHTML = `
    <div class="admin-shell">
      <article class="leaderboard-card">
        <div class="admin-toolbar">
          <div class="admin-toolbar__meta">
            <span class="admin-badge">Admin aktif</span>
            <strong>${escapeHtml(session.email)}</strong>
            <p class="helper-copy">
              ${
                officialResults.updatedAt
                  ? `Kayitli resmi skor seti: ${formatDateTime(officialResults.updatedAt)}`
                  : "Resmi skor seti henuz kaydedilmedi."
              }
            </p>
            <p class="helper-copy">
              ${
                adminState.officialDirty
                  ? "Kaydedilmemis admin degisikligi var."
                  : "Admin editoru kayit ile senkron."
              }
            </p>
            ${
              adminState.error
                ? `<p class="sync-note sync-note--warning">${escapeHtml(adminState.error)}</p>`
                : ""
            }
          </div>

          <div class="button-row">
            <button class="button button--primary" type="button" data-admin-save ${adminState.saving ? "disabled" : ""}>
              ${adminState.saving ? "Kaydediliyor..." : "Resmi Sonuclari Kaydet"}
            </button>
            <button class="button button--ghost" type="button" data-admin-refresh ${syncState.loading ? "disabled" : ""}>
              Yeniden Senkronla
            </button>
            <button class="button button--danger" type="button" data-admin-logout>
              Cikis Yap
            </button>
          </div>
        </div>
        <p class="admin-note">
          Leaderboard'daki Sil butonlari bu oturum acikken gorunur. Public linkte admin alani sadece <strong>?admin=1</strong> ile acilir.
        </p>
      </article>

      <article class="leaderboard-card">
        <div class="group-card__head">
          <div>
            <p class="section-kicker">Admin</p>
            <h3>Resmi Grup Sonuclari</h3>
          </div>
          <p class="group-card__teams">
            Bu skorlar girildikce leaderboard puanlari otomatik hesaplanir.
          </p>
        </div>
        <div class="admin-editor-grid">
          ${GROUP_FIXTURE_DEFS.map((group) => renderAdminGroupCard(group)).join("")}
        </div>
      </article>

      <article class="leaderboard-card">
        <div class="group-card__head">
          <div>
            <p class="section-kicker">Admin</p>
            <h3>Resmi Eleme Sonuclari</h3>
          </div>
          <p class="group-card__teams">
            Grup skorlarina ve bir onceki tur secimlerine gore dropdownlar otomatik dolar.
          </p>
        </div>
        <div class="admin-rounds">
          ${KNOCKOUT_ROUNDS.map((round) => renderAdminRoundBlock(round, officialModel)).join("")}
        </div>
      </article>

      <article class="leaderboard-card">
        <div class="admin-footer">
          <p class="admin-note">
            Kaydettiginiz resmi sonuclar herkeste ayni leaderboard'u gunceller.
          </p>
          <div class="button-row">
            <button class="button button--primary" type="button" data-admin-save ${adminState.saving ? "disabled" : ""}>
              ${adminState.saving ? "Kaydediliyor..." : "Resmi Sonuclari Kaydet"}
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderAdminGroupCard(group) {
  return renderFixtureGroupCard(group, officialDraft.groupScores, {
    matchAttribute: "data-admin-match-id",
    disabled: adminState.saving,
  });
}

function renderAdminRoundBlock(round, officialModel) {
  return `
    <section class="admin-round-block">
      <div class="group-card__head">
        <div>
          <p class="section-kicker">${escapeHtml(round.title)}</p>
          <h3>${escapeHtml(round.title)}</h3>
        </div>
      </div>
      <div class="admin-round-grid">
        ${round.ids.map((id) => renderAdminMatchCard(officialModel.byId[id])).join("")}
      </div>
    </section>
  `;
}

function renderAdminMatchCard(match) {
  const selectDisabled = adminState.saving || !match.options.length;
  const optionMarkup = renderWinnerSelectOptions(match.options, match.winner, "Kazanan sec");

  return `
    <article class="match-card">
      <div class="match-card__top">
        <div>
          <p class="section-kicker">${escapeHtml(match.title)}</p>
          <h4>${escapeHtml(match.sources.join(" / "))}</h4>
        </div>
      </div>

      <div class="participant-stack">
        ${match.sources
          .map((source, index) => {
            const label = match.participants[index] || source;

            return `
              <div class="participant-row">
                <strong>${escapeHtml(label)}</strong>
                <span>${escapeHtml(source)}</span>
              </div>
            `;
          })
          .join("")}
      </div>

      <select data-admin-knockout-id="${match.id}" ${selectDisabled ? "disabled" : ""}>
        ${optionMarkup}
      </select>
    </article>
  `;
}

function renderFixtureGroupCard(group, scoreLookup, options = {}) {
  const matchesMarkup = group.matches
    .map((match) =>
      renderFixtureRow(match, scoreLookup[match.id] || { home: "", away: "" }, options)
    )
    .join("");

  return `
    <article class="group-card">
      <div class="group-card__head">
        <div>
          <p class="section-kicker">Group ${group.groupKey}</p>
          <h3>${group.groupKey} Grubu</h3>
        </div>
        <p class="group-card__teams">${escapeHtml(group.teams.join(" | "))}</p>
      </div>
      <div class="fixture-list">${matchesMarkup}</div>
    </article>
  `;
}

function renderFixtureRow(match, values, options = {}) {
  const matchAttribute = options.matchAttribute || "data-match-id";
  const disabledMarkup = options.disabled ? "disabled" : "";

  return `
    <div class="fixture-row">
      <span class="fixture-team fixture-team--home">${escapeHtml(match.homeTeam)}</span>
      <input
        class="score-input"
        type="number"
        min="0"
        inputmode="numeric"
        ${matchAttribute}="${match.id}"
        data-side="home"
        value="${values.home}"
        ${disabledMarkup}
      />
      <span class="score-separator">:</span>
      <input
        class="score-input"
        type="number"
        min="0"
        inputmode="numeric"
        ${matchAttribute}="${match.id}"
        data-side="away"
        value="${values.away}"
        ${disabledMarkup}
      />
      <span class="fixture-team fixture-team--away">${escapeHtml(match.awayTeam)}</span>
    </div>
  `;
}

function renderWinnerSelectOptions(options, selectedValue, placeholderLabel) {
  return [
    `<option value="">${escapeHtml(placeholderLabel)}</option>`,
    ...options.map(
      (option) => `
        <option value="${escapeAttribute(option)}" ${option === selectedValue ? "selected" : ""}>
          ${escapeHtml(option)}
        </option>
      `
    ),
  ].join("");
}

function openPreview(entry) {
  const model = computeBracketModel(entry.groupScores, entry.knockoutWinners);
  const score = calculateEntryScore(entry, getOfficialModel());

  dom.previewTitle.textContent = entry.fullName;
  dom.previewMeta.textContent = `Toplam puan: ${score.totalPoints} | Dogru sonuc: ${score.correctResults} | Tam skor: ${score.exactScores} | Eleme puani: ${score.eliminationPoints}`;

  const fixtureMarkup = GROUP_FIXTURE_DEFS.map((group) => {
    const rows = group.matches
      .map((match) => {
        const value = entry.groupScores[match.id] || { home: "", away: "" };
        return `
          <div class="preview-fixture-row">
            <span>${escapeHtml(match.homeTeam)} vs ${escapeHtml(match.awayTeam)}</span>
            <strong class="preview-score">${value.home || "-"} : ${value.away || "-"}</strong>
          </div>
        `;
      })
      .join("");

    return `
      <article class="preview-group">
        <p class="section-kicker">Group ${group.groupKey}</p>
        <h4>${group.groupKey} Grubu</h4>
        <div class="preview-fixtures">${rows}</div>
      </article>
    `;
  }).join("");

  const knockoutMarkup = KNOCKOUT_ROUNDS.map((round) => {
    const winnersMarkup = round.ids
      .map((id) => {
        const match = model.byId[id];
        return `
          <div class="preview-winner-row">
            <span>${escapeHtml(match.title)}</span>
            <strong>${escapeHtml(match.winner || "Secilmedi")}</strong>
          </div>
        `;
      })
      .join("");

    return `
      <article class="preview-round">
        <p class="section-kicker">${escapeHtml(round.title)}</p>
        <h4>${escapeHtml(round.title)}</h4>
        ${winnersMarkup}
      </article>
    `;
  }).join("");

  dom.previewBody.innerHTML = `
    <section class="preview-section">
      <article class="preview-round">
        <p class="section-kicker">Ozet</p>
        <h4>Sampiyon Tahmini</h4>
        <p><strong>${escapeHtml(model.champion || "Secilmedi")}</strong></p>
      </article>
    </section>

    <section class="preview-section">
      <h4>Grup Mac Tahminleri</h4>
      ${fixtureMarkup}
    </section>

    <section class="preview-section">
      <h4>Bracket Secimleri</h4>
      ${knockoutMarkup}
    </section>
  `;

  dom.previewOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closePreview() {
  dom.previewOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function getLeaderboardRows() {
  const officialModel = getOfficialModel();
  const rows = submissions.map((entry) => {
    const score = calculateEntryScore(entry, officialModel);

    return {
      entryId: entry.entryId,
      fullName: entry.fullName,
      ...score,
    };
  });

  rows.sort((left, right) => {
    return (
      right.totalPoints - left.totalPoints ||
      right.exactScores - left.exactScores ||
      right.correctResults - left.correctResults ||
      left.fullName.localeCompare(right.fullName, LOCALE)
    );
  });

  return rows.map((row, index) => ({
    ...row,
    rank: index + 1,
  }));
}

function calculateEntryScore(entry, officialModel) {
  const predictedModel = computeBracketModel(entry.groupScores, entry.knockoutWinners);
  const groupScore = calculateGroupStageScore(entry.groupScores, officialModel.groupScores);
  const eliminationPoints =
    calculateKnockoutRoundPoints(predictedModel, officialModel) +
    calculateKnockoutBonusPoints(predictedModel, officialModel);

  return {
    groupPoints: groupScore.groupPoints,
    eliminationPoints,
    totalPoints: groupScore.groupPoints + eliminationPoints,
    correctResults: groupScore.correctResults,
    exactScores: groupScore.exactScores,
  };
}

function calculateGroupStageScore(predictedScores, officialScores) {
  let groupPoints = 0;
  let correctResults = 0;
  let exactScores = 0;

  ALL_GROUP_MATCHES.forEach((match) => {
    const predicted = predictedScores[match.id];
    const official = officialScores[match.id];

    if (!isScoreComplete(predicted) || !isScoreComplete(official)) {
      return;
    }

    const predictedPair = getNumericScorePair(predicted);
    const officialPair = getNumericScorePair(official);

    if (getMatchOutcome(predictedPair) === getMatchOutcome(officialPair)) {
      groupPoints += 2;
      correctResults += 1;
    }

    if (
      predictedPair.home === officialPair.home &&
      predictedPair.away === officialPair.away
    ) {
      groupPoints += 2;
      exactScores += 1;
    }
  });

  return {
    groupPoints,
    correctResults,
    exactScores,
  };
}

function calculateKnockoutRoundPoints(predictedModel, officialModel) {
  let total = 0;

  KNOCKOUT_MATCHES.forEach((match) => {
    const roundPoints = ROUND_POINTS[match.stage];
    const predictedWinner = predictedModel.byId[match.id].winner;
    const officialWinner = officialModel.byId[match.id].winner;

    if (!roundPoints || !predictedWinner || !officialWinner) {
      return;
    }

    if (predictedWinner === officialWinner) {
      total += roundPoints;
    }
  });

  return total;
}

function calculateKnockoutBonusPoints(predictedModel, officialModel) {
  let total = 0;
  const predictedFinalists = getFinalists(predictedModel);
  const officialFinalists = getFinalists(officialModel);

  if (officialFinalists.length === 2) {
    officialFinalists.forEach((team) => {
      if (predictedFinalists.includes(team)) {
        total += BONUS_POINTS.finalist;
      }
    });
  }

  if (predictedModel.byId[104]?.winner === officialModel.byId[104]?.winner) {
    total += predictedModel.byId[104]?.winner ? BONUS_POINTS.champion : 0;
  }

  if (predictedModel.byId[103]?.winner === officialModel.byId[103]?.winner) {
    total += predictedModel.byId[103]?.winner ? BONUS_POINTS.thirdPlace : 0;
  }

  return total;
}

function getOfficialModel() {
  const groupScores = copyGroupScores(officialResults.groupScores);
  const knockoutWinners = copyKnockoutWinners(officialResults.knockoutWinners);
  const model = computeBracketModel(groupScores, knockoutWinners);

  return {
    ...model,
    groupScores,
  };
}

function stabilizeStateAndGetModel() {
  return stabilizeEntryAndGetModel(state, saveState);
}

function stabilizeOfficialDraftAndGetModel() {
  return stabilizeEntryAndGetModel(officialDraft, () => {
    adminState.officialDirty = true;
  });
}

function stabilizeEntryAndGetModel(entry, onChange) {
  let model = computeBracketModel(entry.groupScores, entry.knockoutWinners);
  let changed = false;
  let attempts = 0;

  while (attempts < 8) {
    const invalidSelections = KNOCKOUT_MATCHES.filter((match) => {
      const savedWinner = entry.knockoutWinners[String(match.id)];
      const resolvedWinner = model.byId[match.id].winner;
      return savedWinner && savedWinner !== resolvedWinner;
    });

    if (!invalidSelections.length) {
      break;
    }

    invalidSelections.forEach((match) => {
      entry.knockoutWinners[String(match.id)] = "";
    });

    changed = true;
    attempts += 1;
    model = computeBracketModel(entry.groupScores, entry.knockoutWinners);
  }

  if (changed && typeof onChange === "function") {
    onChange();
  }

  return model;
}

function computeBracketModel(groupScores, knockoutWinners) {
  const standings = buildAllStandings(groupScores);
  const qualification = getQualificationSummary(standings);
  const bestThirdAssignments = resolveBestThirdAssignments(qualification.bestThirds);
  const byId = {};

  KNOCKOUT_MATCHES.forEach((match) => {
    const participants = match.sources.map((source) =>
      resolveKnockoutSource(source, standings, byId, bestThirdAssignments)
    );
    const options = unique(participants.filter(isSelectableParticipant));
    const savedWinner = knockoutWinners[String(match.id)] || "";
    const matchReady = options.length === 2;
    const winner = matchReady && options.includes(savedWinner) ? savedWinner : "";
    let loser = "";

    if (matchReady && winner && participants.length === 2) {
      loser = participants[0] === winner ? participants[1] : participants[0];
    }

    byId[match.id] = {
      ...match,
      participants,
      options,
      matchReady,
      winner,
      loser,
    };
  });

  return {
    standings,
    qualification,
    bestThirdAssignments,
    byId,
    champion: byId[104]?.winner || "",
    thirdPlaceWinner: byId[103]?.winner || "",
  };
}

function resolveKnockoutSource(source, standings, resolvedMatches, bestThirdAssignments = {}) {
  if (isGroupRankSource(source)) {
    const rankIndex = Number(source.charAt(0)) - 1;
    const groupKey = source.slice(1);
    return standings[groupKey]?.[rankIndex]?.team || source;
  }

  if (isBestThirdSource(source)) {
    return bestThirdAssignments[source]?.team || source;
  }

  if (isWinnerSource(source)) {
    const matchId = Number(source.slice(1));
    return resolvedMatches[matchId]?.winner || "";
  }

  if (isLoserSource(source)) {
    const matchId = Number(source.slice(1));
    return resolvedMatches[matchId]?.loser || "";
  }

  return source;
}

function buildAllStandings(groupScores) {
  return GROUP_ORDER.reduce((accumulator, groupKey) => {
    accumulator[groupKey] = buildGroupStandings(groupKey, groupScores);
    return accumulator;
  }, {});
}

function buildGroupStandings(groupKey, groupScores) {
  const rows = GROUPS[groupKey].map((team) => ({
    team,
    group: groupKey,
    played: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  }));

  const lookup = Object.fromEntries(rows.map((row) => [row.team, row]));

  FIXTURES[groupKey].forEach(([homeTeam, awayTeam], index) => {
    const score = groupScores[`${groupKey}-${index + 1}`];

    if (!isScoreComplete(score)) {
      return;
    }

    const homeGoals = Number(score.home);
    const awayGoals = Number(score.away);
    const home = lookup[homeTeam];
    const away = lookup[awayTeam];

    home.played += 1;
    away.played += 1;
    home.goalsFor += homeGoals;
    home.goalsAgainst += awayGoals;
    away.goalsFor += awayGoals;
    away.goalsAgainst += homeGoals;

    if (homeGoals > awayGoals) {
      home.points += 3;
    } else if (homeGoals < awayGoals) {
      away.points += 3;
    } else {
      home.points += 1;
      away.points += 1;
    }
  });

  rows.forEach((row) => {
    row.goalDifference = row.goalsFor - row.goalsAgainst;
  });

  rows.sort(compareStandingRows);

  return rows.map((row, index) => ({
    ...row,
    rank: index + 1,
  }));
}

function getQualificationSummary(standings) {
  const topTwo = [];
  const thirdPlaced = [];

  GROUP_ORDER.forEach((groupKey) => {
    const rows = standings[groupKey];

    if (rows[0]) {
      topTwo.push({
        slot: `1${groupKey}`,
        ...rows[0],
      });
    }

    if (rows[1]) {
      topTwo.push({
        slot: `2${groupKey}`,
        ...rows[1],
      });
    }

    if (rows[2]) {
      thirdPlaced.push({
        slot: `3${groupKey}`,
        ...rows[2],
      });
    }
  });

  const bestThirds = [...thirdPlaced]
    .sort(compareStandingRows)
    .slice(0, 8)
    .map((row, index) => ({
      ...row,
      rank: index + 1,
    }));

  return {
    topTwo,
    bestThirds,
    bestThirdGroups: new Set(bestThirds.map((team) => team.group)),
  };
}

function resolveBestThirdAssignments(bestThirds) {
  const teamPool = bestThirds.map((team) => ({
    ...team,
    slot: `3${team.group}`,
  }));
  const teamBySlot = Object.fromEntries(teamPool.map((team) => [team.slot, team]));
  const candidateSlotsBySource = Object.fromEntries(
    BEST_THIRD_SOURCES.map((source) => [
      source,
      teamPool
        .filter((team) => source.includes(team.group))
        .map((team) => team.slot),
    ])
  );
  const orderedSources = [...BEST_THIRD_SOURCES].sort((left, right) => {
    return (
      candidateSlotsBySource[left].length - candidateSlotsBySource[right].length ||
      left.localeCompare(right, LOCALE)
    );
  });
  const assignments = {};
  const usedTeamSlots = new Set();

  function backtrack(index) {
    if (index >= orderedSources.length) {
      return true;
    }

    const source = orderedSources[index];
    const candidates = candidateSlotsBySource[source].filter((slot) => !usedTeamSlots.has(slot));

    for (const slot of candidates) {
      assignments[source] = teamBySlot[slot];
      usedTeamSlots.add(slot);

      if (backtrack(index + 1)) {
        return true;
      }

      usedTeamSlots.delete(slot);
      delete assignments[source];
    }

    return false;
  }

  return backtrack(0) ? assignments : {};
}

function compareStandingRows(left, right) {
  return (
    right.points - left.points ||
    right.goalDifference - left.goalDifference ||
    right.goalsFor - left.goalsFor ||
    left.goalsAgainst - right.goalsAgainst ||
    left.team.localeCompare(right.team, LOCALE)
  );
}

function getCompletionState(entry) {
  const groupFilled = ALL_GROUP_MATCHES.filter((match) =>
    isScoreComplete(entry.groupScores[match.id])
  ).length;
  const knockoutFilled = KNOCKOUT_MATCHES.filter(
    (match) => Boolean(entry.knockoutWinners[String(match.id)])
  ).length;

  return {
    groupFilled,
    knockoutFilled,
    complete:
      groupFilled === TOTAL_GROUP_MATCHES &&
      knockoutFilled === TOTAL_KNOCKOUT_MATCHES &&
      Boolean(entry.fullName.trim()),
  };
}

async function refreshRemoteData(options = {}) {
  const focusState = options.silent ? captureFocus() : null;

  if (remoteRefreshPromise) {
    if (!options.silent && !syncState.loading) {
      syncState.loading = true;
      renderAll();
    }

    await remoteRefreshPromise;

    if (focusState) {
      restoreFocus(focusState);
    }

    return;
  }

  if (!options.silent) {
    syncState.loading = true;
    renderAll();
  }

  remoteRefreshPromise = (async () => {
    try {
      const [remoteSubmissions, remoteOfficialResults] = await Promise.all([
        fetchPredictions(),
        fetchOfficialResults(),
      ]);

      applyRemoteSnapshot(remoteSubmissions, remoteOfficialResults);
      syncState.ready = true;
      syncState.error = "";
      syncState.lastSyncedAt = new Date().toISOString();
    } catch (error) {
      syncState.error = error.message || "Supabase baglantisi kurulamadigi icin ortak tablo guncellenemedi.";
    } finally {
      syncState.loading = false;
      renderAll();
      remoteRefreshPromise = null;

      if (focusState) {
        restoreFocus(focusState);
      }
    }
  })();

  await remoteRefreshPromise;
}

function applyRemoteSnapshot(remoteSubmissions, remoteOfficialResults) {
  submissions = ensureLocalSubmissionPresence(remoteSubmissions);
  officialResults = createOfficialResultsState(remoteOfficialResults);

  if (!adminState.officialDirty) {
    officialDraft = createOfficialResultsState(officialResults);
  }
}

async function fetchPredictions() {
  const rows = await supabaseRequest(
    "/rest/v1/predictions?select=entry_id,full_name,locked_at,group_scores,knockout_winners,created_at&order=created_at.asc"
  );

  if (!Array.isArray(rows)) {
    return [];
  }

  return rows
    .map((row) => normalizeRemoteSubmission(row))
    .filter((entry) => entry.locked && entry.fullName.trim());
}

async function fetchOfficialResults() {
  const rows = await supabaseRequest(
    `/rest/v1/official_results?slug=eq.${OFFICIAL_RESULTS_SLUG}&select=slug,group_scores,knockout_winners,updated_at&limit=1`
  );

  if (!Array.isArray(rows) || !rows[0]) {
    return createOfficialResultsState();
  }

  return createOfficialResultsState({
    groupScores: rows[0].group_scores,
    knockoutWinners: rows[0].knockout_winners,
    updatedAt: rows[0].updated_at,
  });
}

async function createPrediction(entry) {
  const rows = await supabaseRequest("/rest/v1/predictions", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      entry_id: entry.entryId,
      full_name: entry.fullName,
      locked_at: entry.lockedAt,
      group_scores: copyGroupScores(entry.groupScores),
      knockout_winners: copyKnockoutWinners(entry.knockoutWinners),
    }),
  });

  const savedRow = Array.isArray(rows) && rows[0] ? rows[0] : null;

  if (!savedRow) {
    return normalizeEntry({
      ...entry,
      remoteSyncedAt: entry.lockedAt,
    });
  }

  return normalizeRemoteSubmission(savedRow);
}

async function upsertOfficialResults(results, accessToken) {
  const rows = await supabaseRequest(
    `/rest/v1/official_results?on_conflict=slug`,
    {
      method: "POST",
      token: accessToken,
      headers: {
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify({
        slug: OFFICIAL_RESULTS_SLUG,
        group_scores: copyGroupScores(results.groupScores),
        knockout_winners: copyKnockoutWinners(results.knockoutWinners),
        updated_at: new Date().toISOString(),
      }),
    }
  );

  const row = Array.isArray(rows) && rows[0] ? rows[0] : null;

  return createOfficialResultsState({
    groupScores: row?.group_scores || results.groupScores,
    knockoutWinners: row?.knockout_winners || results.knockoutWinners,
    updatedAt: row?.updated_at || results.updatedAt || new Date().toISOString(),
  });
}

async function deletePrediction(entryId, accessToken) {
  await supabaseRequest(`/rest/v1/predictions?entry_id=eq.${encodeURIComponent(entryId)}`, {
    method: "DELETE",
    token: accessToken,
    headers: {
      Prefer: "return=minimal",
    },
  });
}

async function loginAdmin(email, password) {
  const payload = await supabaseRequest("/auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!payload?.access_token) {
    throw new Error("Admin oturumu acilamadi.");
  }

  return {
    email: payload.user?.email || email,
    accessToken: payload.access_token,
    expiresAt: Date.now() + Number(payload.expires_in || 0) * 1000,
  };
}

async function supabaseRequest(path, options = {}) {
  const headers = {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${options.token || SUPABASE_ANON_KEY}`,
    ...options.headers,
  };

  if (typeof options.body !== "undefined") {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${SUPABASE_URL}${path}`, {
    method: options.method || "GET",
    headers,
    body: options.body,
  });

  if (!response.ok) {
    const errorText = await parseSupabaseError(response);
    throw new Error(errorText);
  }

  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  return response.json();
}

async function parseSupabaseError(response) {
  let fallback = `Supabase hatasi (${response.status})`;

  try {
    const payload = await response.json();
    return (
      payload.message ||
      payload.error_description ||
      payload.error ||
      payload.hint ||
      fallback
    );
  } catch (error) {
    return fallback;
  }
}

function createDefaultState() {
  return {
    entryId: createEntryId(),
    fullName: "",
    locked: false,
    lockedAt: "",
    remoteSyncedAt: "",
    groupScores: buildEmptyGroupScores(),
    knockoutWinners: buildEmptyKnockoutWinners(),
  };
}

function createOfficialResultsState(source = {}) {
  return {
    groupScores: copyGroupScores(source.groupScores),
    knockoutWinners: copyKnockoutWinners(source.knockoutWinners),
    updatedAt: typeof source.updatedAt === "string" ? source.updatedAt : "",
  };
}

function buildEmptyGroupScores() {
  return ALL_GROUP_MATCHES.reduce((accumulator, match) => {
    accumulator[match.id] = { home: "", away: "" };
    return accumulator;
  }, {});
}

function buildEmptyKnockoutWinners() {
  return KNOCKOUT_MATCHES.reduce((accumulator, match) => {
    accumulator[String(match.id)] = "";
    return accumulator;
  }, {});
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || "null");
    return normalizeEntry(raw);
  } catch (error) {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(state));
}

function normalizeEntry(raw) {
  const fallback = createDefaultState();

  if (!raw || typeof raw !== "object") {
    return fallback;
  }

  const entryId =
    typeof raw.entryId === "string" && raw.entryId
      ? raw.entryId
      : typeof raw.entry_id === "string" && raw.entry_id
        ? raw.entry_id
        : fallback.entryId;
  const fullName =
    typeof raw.fullName === "string"
      ? raw.fullName.slice(0, 80)
      : typeof raw.full_name === "string"
        ? raw.full_name.slice(0, 80)
        : "";

  return {
    entryId,
    fullName,
    locked: Boolean(raw.locked || raw.locked_at),
    lockedAt:
      typeof raw.lockedAt === "string"
        ? raw.lockedAt
        : typeof raw.locked_at === "string"
          ? raw.locked_at
          : "",
    remoteSyncedAt:
      typeof raw.remoteSyncedAt === "string"
        ? raw.remoteSyncedAt
        : typeof raw.created_at === "string"
          ? raw.created_at
          : "",
    groupScores: copyGroupScores(raw.groupScores || raw.group_scores),
    knockoutWinners: copyKnockoutWinners(raw.knockoutWinners || raw.knockout_winners),
  };
}

function normalizeRemoteSubmission(raw) {
  return normalizeEntry({
    entryId: raw.entry_id,
    fullName: raw.full_name,
    locked: true,
    lockedAt: raw.locked_at,
    remoteSyncedAt: raw.created_at,
    groupScores: raw.group_scores,
    knockoutWinners: raw.knockout_winners,
  });
}

function copyGroupScores(source = {}) {
  const target = buildEmptyGroupScores();

  Object.keys(target).forEach((matchId) => {
    const score = source?.[matchId] || {};
    target[matchId] = {
      home: sanitizeScoreValue(score.home),
      away: sanitizeScoreValue(score.away),
    };
  });

  return target;
}

function copyKnockoutWinners(source = {}) {
  const target = buildEmptyKnockoutWinners();

  Object.keys(target).forEach((matchId) => {
    const winner =
      typeof source?.[matchId] !== "undefined" ? source[matchId] : source?.[Number(matchId)];
    target[matchId] = typeof winner === "string" ? winner : "";
  });

  return target;
}

function sanitizeScoreValue(value) {
  if (value === "" || value === null || typeof value === "undefined") {
    return "";
  }

  const numberValue = Number(value);

  if (!Number.isFinite(numberValue) || numberValue < 0) {
    return "";
  }

  return String(Math.trunc(numberValue));
}

function isScoreComplete(score) {
  return Boolean(score) && score.home !== "" && score.away !== "";
}

function isSelectableParticipant(label) {
  return Boolean(label) && !/^Winner \d+$/.test(label) && !/^Loser \d+$/.test(label);
}

function ensureLocalSubmissionPresence(remoteEntries) {
  if (
    state.locked &&
    state.remoteSyncedAt &&
    !remoteEntries.some((entry) => entry.entryId === state.entryId)
  ) {
    return uniqueByEntryId([normalizeEntry(state), ...remoteEntries]);
  }

  return remoteEntries;
}

function mergeSubmissionIntoList(list, entry) {
  return uniqueByEntryId([entry, ...list]);
}

function uniqueByEntryId(entries) {
  const seen = new Set();

  return entries.filter((entry) => {
    if (!entry?.entryId || seen.has(entry.entryId)) {
      return false;
    }

    seen.add(entry.entryId);
    return true;
  });
}

function hydrateAdminSession() {
  const session = getActiveAdminSession();

  if (!session) {
    adminState.session = null;
  }
}

function loadAdminSession() {
  try {
    const raw = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || "null");

    if (!raw || typeof raw !== "object") {
      return null;
    }

    return {
      email: typeof raw.email === "string" ? raw.email : SUPABASE_ADMIN_EMAIL,
      accessToken: typeof raw.accessToken === "string" ? raw.accessToken : "",
      expiresAt: Number.isFinite(Number(raw.expiresAt)) ? Number(raw.expiresAt) : 0,
    };
  } catch (error) {
    return null;
  }
}

function saveAdminSession(session) {
  sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
}

function clearAdminSession() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

function getActiveAdminSession() {
  if (!adminState.session?.accessToken) {
    return null;
  }

  if (adminState.session.expiresAt && Date.now() >= adminState.session.expiresAt) {
    adminState.session = null;
    adminState.error = "Admin oturumu sona erdi. Lutfen yeniden giris yapin.";
    clearAdminSession();
    return null;
  }

  return adminState.session;
}

function captureFocus() {
  const active = document.activeElement;

  if (!active) {
    return null;
  }

  if (active.id === "full-name") {
    return { type: "name" };
  }

  if (active instanceof HTMLInputElement && active.dataset.matchId && active.dataset.side) {
    return {
      type: "score",
      matchId: active.dataset.matchId,
      side: active.dataset.side,
    };
  }

  if (active instanceof HTMLSelectElement && active.dataset.knockoutId) {
    return {
      type: "winner",
      matchId: active.dataset.knockoutId,
    };
  }

  if (active instanceof HTMLInputElement && active.dataset.adminMatchId && active.dataset.side) {
    return {
      type: "admin-score",
      matchId: active.dataset.adminMatchId,
      side: active.dataset.side,
    };
  }

  if (active instanceof HTMLSelectElement && active.dataset.adminKnockoutId) {
    return {
      type: "admin-winner",
      matchId: active.dataset.adminKnockoutId,
    };
  }

  return null;
}

function restoreFocus(focusState) {
  let target = null;

  if (focusState.type === "name") {
    target = dom.fullNameInput;
  } else if (focusState.type === "score") {
    target = dom.fixturesRoot.querySelector(
      `[data-match-id="${focusState.matchId}"][data-side="${focusState.side}"]`
    );
  } else if (focusState.type === "winner") {
    target = dom.bracketRoot.querySelector(`[data-knockout-id="${focusState.matchId}"]`);
  } else if (focusState.type === "admin-score") {
    target = dom.adminRoot.querySelector(
      `[data-admin-match-id="${focusState.matchId}"][data-side="${focusState.side}"]`
    );
  } else if (focusState.type === "admin-winner") {
    target = dom.adminRoot.querySelector(
      `[data-admin-knockout-id="${focusState.matchId}"]`
    );
  }

  if (target) {
    target.focus({ preventScroll: true });
  }
}

function getSyncNote() {
  if (syncState.error) {
    return `Supabase baglantisi sorunlu: ${syncState.error}`;
  }

  if (syncState.submitting) {
    return "Tahmin Supabase'e kaydediliyor...";
  }

  if (syncState.loading && !syncState.ready) {
    return "Canli puan tablosu baglaniyor...";
  }

  if (syncState.lastSyncedAt) {
    return `Canli puan tablosu guncel. Son yenileme: ${formatDateTime(syncState.lastSyncedAt)}.`;
  }

  return "Canli puan tablosu hazir.";
}

function getLeaderboardNote() {
  if (syncState.error) {
    return "Baglanti duzelince puan tablosu yeniden guncellenecek.";
  }

  return "Puan tablosu resmi mac sonuclari girildikce otomatik guncellenir. Isme tiklayinca tahmin detayi acilir.";
}

function getEmptyLeaderboardCopy() {
  if (syncState.loading && !syncState.ready) {
    return "Canli puan tablosu olusturuluyor...";
  }

  if (syncState.error) {
    return "Baglanti hazir oldugunda ilk kayitlar burada gorunecek.";
  }

  return "Henuz puan tablosunda kayitli tahmin yok.";
}

function formatDateTime(value) {
  if (!value) {
    return "belirsiz";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "belirsiz";
  }

  return new Intl.DateTimeFormat(LOCALE, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getNumericScorePair(score) {
  return {
    home: Number(score.home),
    away: Number(score.away),
  };
}

function getMatchOutcome(score) {
  return Math.sign(score.home - score.away);
}

function getFinalists(model) {
  return (model.byId[104]?.participants || []).filter(Boolean);
}

function isGroupRankSource(source) {
  return SOURCE_PATTERNS.groupRank.test(source);
}

function isBestThirdSource(source) {
  return SOURCE_PATTERNS.bestThird.test(source);
}

function isWinnerSource(source) {
  return SOURCE_PATTERNS.winner.test(source);
}

function isLoserSource(source) {
  return SOURCE_PATTERNS.loser.test(source);
}

function createEntryId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `entry-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function unique(values) {
  return [...new Set(values)];
}

function range(start, end) {
  const values = [];

  for (let current = start; current <= end; current += 1) {
    values.push(current);
  }

  return values;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
