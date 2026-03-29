ObjC.import('Foundation');
var app = Application.currentApplication();
app.includeStandardAdditions = true;

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
eval(code);

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
  return {
    entryId: name.toLowerCase().replace(/\s+/g, '-'),
    fullName: name,
    locked: true,
    lockedAt: '2026-03-29T21:30:00.000Z',
    groupScores: groupScores,
    knockoutWinners: knockoutWinners,
  };
}

var allScores = buildEmptyGroupScores();
setFullTournamentScores(allScores);
var allWinners = pickSequentialWinners(allScores);
var partialScores = buildEmptyGroupScores();
partialScores['A-1'] = { home: '2', away: '1' };
partialScores['A-2'] = { home: '0', away: '0' };

eval(
  'officialResults = createOfficialResultsState(' +
    JSON.stringify({
      groupScores: allScores,
      knockoutWinners: allWinners,
      updatedAt: '2026-03-29T21:30:00.000Z',
    }) +
  ');'
);
eval(
  'submissions = [' +
    JSON.stringify(makeEntry('Tam Isabet', allScores, allWinners)) + ',' +
    JSON.stringify(makeEntry('Grup Audit', partialScores, buildEmptyKnockoutWinners())) + ',' +
    JSON.stringify(makeEntry('Bos Tahmin', buildEmptyGroupScores(), buildEmptyKnockoutWinners())) +
  '].map(normalizeEntry);'
);

console.log(JSON.stringify(getLeaderboardRows()));
