ObjC.import('Foundation');
var app = Application.currentApplication();
app.includeStandardAdditions = true;

function out(message) {
  console.log(String(message));
}

function makeClassList() {
  return {
    add: function () {},
    remove: function () {},
    toggle: function () {},
    contains: function () { return false; },
  };
}

var elements = {};

function makeElement(name) {
  return {
    _name: name,
    value: '',
    disabled: false,
    textContent: '',
    innerHTML: '',
    dataset: {},
    style: {},
    classList: makeClassList(),
    addEventListener: function () {},
    removeEventListener: function () {},
    querySelector: function (selector) {
      if (!elements[selector]) {
        elements[selector] = makeElement(selector);
      }
      return elements[selector];
    },
    querySelectorAll: function () { return []; },
    closest: function () { return null; },
    matches: function () { return false; },
    focus: function () {},
  };
}

function Storage() {
  this.store = {};
}
Storage.prototype.getItem = function (key) {
  return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
};
Storage.prototype.setItem = function (key, value) {
  this.store[key] = String(value);
};
Storage.prototype.removeItem = function (key) {
  delete this.store[key];
};

var document = {
  hidden: false,
  activeElement: null,
  body: makeElement('body'),
  querySelector: function (selector) {
    if (!elements[selector]) {
      elements[selector] = makeElement(selector);
    }
    return elements[selector];
  },
  addEventListener: function () {},
  removeEventListener: function () {},
};
document.body.classList = makeClassList();

var window = {
  location: { search: '' },
  setInterval: function () {},
  clearInterval: function () {},
  alert: function () {},
  confirm: function () { return true; },
  crypto: {
    randomUUID: function () { return 'test-entry-id'; },
  },
};
window.document = document;

this.window = window;
this.document = document;
this.localStorage = new Storage();
this.sessionStorage = new Storage();
this.fetch = function () {
  return Promise.resolve({
    ok: true,
    status: 200,
    headers: {
      get: function () { return 'application/json'; },
    },
    json: function () {
      return Promise.resolve([]);
    },
  });
};
this.URLSearchParams = function () {
  this.get = function () { return null; };
};
this.FormData = function () {
  this.get = function () { return ''; };
};
this.HTMLInputElement = function () {};
this.HTMLSelectElement = function () {};
this.HTMLFormElement = function () {};

var code = app.doShellScript('cat /Users/meltemonder/Documents/wc2026-office-league/app.js');
code += '\nthis.__codexSetLeaderboardState = function(nextSubmissions, nextOfficialResults) { submissions = nextSubmissions; officialResults = nextOfficialResults; };';
eval(code);

function assert(condition, label) {
  if (!condition) {
    throw new Error(label);
  }
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(label + ' beklenen=' + expected + ' gercek=' + actual);
  }
}

function buildOfficialModel(groupScores, knockoutWinners) {
  var model = computeBracketModel(groupScores, knockoutWinners);
  model.groupScores = copyGroupScores(groupScores);
  return model;
}

function setFullTournamentScores(target) {
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(function (groupKey) {
    [
      { home: '1', away: '0' },
      { home: '1', away: '0' },
      { home: '0', away: '2' },
      { home: '2', away: '0' },
      { home: '1', away: '0' },
      { home: '0', away: '1' },
    ].forEach(function (score, index) {
      target[groupKey + '-' + (index + 1)] = score;
    });
  });
}

function pickSequentialWinners(groupScores) {
  var winners = buildEmptyKnockoutWinners();
  Object.keys(winners)
    .map(function (id) { return Number(id); })
    .sort(function (a, b) { return a - b; })
    .forEach(function (matchId) {
      var model = computeBracketModel(groupScores, winners);
      winners[String(matchId)] = model.byId[matchId].options[0] || '';
    });
  return winners;
}

function makeEntry(name, groupScores, knockoutWinners) {
  return normalizeEntry({
    entryId: name.toLowerCase().replace(/\s+/g, '-'),
    fullName: name,
    locked: true,
    lockedAt: '2026-03-29T21:30:00.000Z',
    groupScores: groupScores,
    knockoutWinners: knockoutWinners,
  });
}

(function run() {
  var officialGroupOnly = buildEmptyGroupScores();
  officialGroupOnly['A-1'] = { home: '2', away: '1' };
  officialGroupOnly['A-2'] = { home: '1', away: '1' };
  var predictedGroupOnly = buildEmptyGroupScores();
  predictedGroupOnly['A-1'] = { home: '2', away: '1' };
  predictedGroupOnly['A-2'] = { home: '0', away: '0' };
  var groupOnlyEntry = makeEntry('Grup Audit', predictedGroupOnly, buildEmptyKnockoutWinners());
  var groupOnlyScore = calculateEntryScore(
    groupOnlyEntry,
    buildOfficialModel(officialGroupOnly, buildEmptyKnockoutWinners())
  );

  assertEqual(groupOnlyScore.groupPoints, 6, 'Grup puani');
  assertEqual(groupOnlyScore.correctResults, 2, 'Dogru sonuc sayisi');
  assertEqual(groupOnlyScore.exactScores, 1, 'Tam skor sayisi');
  out('AUDIT_GROUP ' + JSON.stringify({
    exactMatch: 4,
    correctOutcome: 2,
    total: groupOnlyScore.groupPoints,
  }));

  var allScores = buildEmptyGroupScores();
  setFullTournamentScores(allScores);
  var allWinners = pickSequentialWinners(allScores);
  var perfectEntry = makeEntry('Tam Isabet', allScores, allWinners);
  var perfectScore = calculateEntryScore(perfectEntry, buildOfficialModel(allScores, allWinners));
  var leaderboardMidScores = buildEmptyGroupScores();
  leaderboardMidScores['A-1'] = { home: '1', away: '0' };
  leaderboardMidScores['A-2'] = { home: '2', away: '1' };
  var leaderboardMidEntry = makeEntry('Grup Audit', leaderboardMidScores, buildEmptyKnockoutWinners());
  var expectedEliminationBreakdown = {
    round32: 16 * 2,
    round16: 8 * 3,
    quarterFinals: 4 * 4,
    semiFinals: 2 * 5,
    finalists: 2 * 6,
    champion: 10,
    thirdPlace: 4,
  };
  var expectedEliminationTotal =
    expectedEliminationBreakdown.round32 +
    expectedEliminationBreakdown.round16 +
    expectedEliminationBreakdown.quarterFinals +
    expectedEliminationBreakdown.semiFinals +
    expectedEliminationBreakdown.finalists +
    expectedEliminationBreakdown.champion +
    expectedEliminationBreakdown.thirdPlace;

  assertEqual(perfectScore.groupPoints, 288, 'Perfect grup puani');
  assertEqual(perfectScore.eliminationPoints, expectedEliminationTotal, 'Perfect eleme puani');
  assertEqual(perfectScore.totalPoints, 288 + expectedEliminationTotal, 'Perfect toplam puan');
  out('AUDIT_KNOCKOUT ' + JSON.stringify(expectedEliminationBreakdown));

  var bestThirdModel = computeBracketModel(allScores, buildEmptyKnockoutWinners());
  [74, 77, 79, 80, 81, 82, 85, 87].forEach(function (matchId) {
    var bestThirdParticipant = bestThirdModel.byId[matchId].participants[1];
    assert(bestThirdParticipant, 'Best third bos geldi m' + matchId);
    assert(bestThirdParticipant.charAt(0) !== '3', 'Best third kod olarak kaldi m' + matchId);
  });
  out('AUDIT_BEST_THIRDS_OK');

  var leaderboardEntries = [
    perfectEntry,
    leaderboardMidEntry,
    makeEntry('Bos Tahmin', buildEmptyGroupScores(), buildEmptyKnockoutWinners()),
  ].map(normalizeEntry);
  var leaderboardOfficialResults = createOfficialResultsState({
    groupScores: allScores,
    knockoutWinners: allWinners,
    updatedAt: '2026-03-29T21:30:00.000Z',
  });
  __codexSetLeaderboardState(leaderboardEntries, leaderboardOfficialResults);
  out('AUDIT_INJECTION ' + JSON.stringify({
    official: 1,
    submissions: leaderboardEntries.length,
  }));

  var leaderboardRows = getLeaderboardRows();
  assertEqual(leaderboardRows.length, 3, 'Leaderboard satir sayisi');
  assertEqual(leaderboardRows[0].fullName, 'Tam Isabet', 'Leaderboard 1');
  assertEqual(leaderboardRows[0].totalPoints, 396, 'Leaderboard 1 puan');
  assertEqual(leaderboardRows[1].fullName, 'Grup Audit', 'Leaderboard 2');
  assertEqual(leaderboardRows[1].totalPoints, 6, 'Leaderboard 2 puan');
  assertEqual(leaderboardRows[2].fullName, 'Bos Tahmin', 'Leaderboard 3');
  assertEqual(leaderboardRows[2].totalPoints, 0, 'Leaderboard 3 puan');
  out('AUDIT_LEADERBOARD ' + JSON.stringify(
    leaderboardRows.map(function (row) {
      return {
        rank: row.rank,
        name: row.fullName,
        total: row.totalPoints,
        exact: row.exactScores,
        correct: row.correctResults,
        knockout: row.eliminationPoints,
      };
    })
  ));

  out('AUDIT_PASS');
})();
