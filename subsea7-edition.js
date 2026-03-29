window.WC2026_EDITION = {
  title: "2026 World Cup Prediction League | Subsea 7 Edition",
  locale: "en-GB",
  storageKey: "wc2026-subsea7-predictor-state",
  adminSessionKey: "wc2026-subsea7-admin-session",
  officialResultsSlug: "subsea7",
  entryIdPrefix: "subsea7--",
  copy: {
    statusOpen: "Open",
    statusLocked: "Locked",
    championUnselected: "Not selected",
    confirmSubmitting: "Saving...",
    confirmLocked: "Prediction Locked",
    confirmReady: "Confirm Prediction",
    alertEnterName: "Please enter your full name first.",
    alertCompleteAll: (groupFilled, knockoutFilled) =>
      `Complete every field before confirming.\nGroup matches: ${groupFilled}/72\nKnockout picks: ${knockoutFilled}/32`,
    alertSyncNotReady:
      "The shared leaderboard is not connected yet. Please wait until the page finishes syncing.",
    alertPredictionSaveFailed: "Prediction could not be saved.",
    clearConfirm: (sharedWarning) =>
      `Do you want to reset the current prediction on this browser?${sharedWarning}`,
    clearSharedWarning:
      "\nNote: This only clears the local draft on this device. It does not delete the shared leaderboard entry.",
    deleteConfirm: (name) =>
      `Do you want to remove ${name || "this entry"} from the leaderboard?`,
    deleteError: "The entry could not be deleted.",
    adminPasswordRequired: "Please enter the admin password.",
    adminEmailRestricted: "This admin panel is restricted to the configured email address.",
    adminLoginFailed: "Admin sign-in failed.",
    adminSaveFailed: "Official results could not be saved.",
    adminSessionExpired: "The admin session expired. Please sign in again.",
    championSummary: (thirdPlaceWinner) =>
      `Third place: ${thirdPlaceWinner || "Not selected"}`,
    finalPending: "Final matchup will appear after the earlier picks are filled in",
    matchPending: "Waiting for matchup",
    pickWinner: "Pick winner",
    standingsGroupTitle: (groupKey) => `Group ${groupKey}`,
    standingsTeam: "Team",
    standingsPlayed: "P",
    standingsGoals: "Goals",
    standingsDiff: "GD",
    standingsPoints: "Pts",
    leaderboardDeleting: "Deleting...",
    leaderboardDelete: "Delete",
    leaderboardHeaders: {
      rank: "Rank",
      name: "Name",
      total: "Total Points",
      correct: "Correct Results",
      exact: "Exact Scores",
      knockout: "Knockout Points",
    },
    leaderboardSyncedAt: (value) => `Last sync: ${value}`,
    leaderboardLiveReady: "Live leaderboard connection is active",
    leaderboardNoteReady:
      "The leaderboard updates automatically whenever the official match results are entered. Click a name to open that saved prediction.",
    leaderboardNoteError:
      "The leaderboard will refresh automatically once the connection is back.",
    leaderboardEmptyLoading: "Building the live leaderboard...",
    leaderboardEmptyError:
      "Entries will appear here once the connection is restored.",
    leaderboardEmptyDefault: "No predictions have been submitted yet.",
    lockNoteReady:
      "Once you complete and confirm your picks, that entry stays locked for the whole tournament.",
    lockNoteLockedSynced: (value) =>
      `Your prediction was locked on ${value}. It is now ready for the shared leaderboard.`,
    lockNoteLocked: (value) => `Your prediction was locked on ${value}.`,
    bracketChampion: "Champion",
    bracketThirdPlace: "Third Place",
    previewMeta: (score) =>
      `Total points: ${score.totalPoints} | Correct results: ${score.correctResults} | Exact scores: ${score.exactScores} | Knockout points: ${score.eliminationPoints}`,
    previewSummary: "Summary",
    previewChampionTitle: "Champion Pick",
    previewGroupPredictions: "Group Match Predictions",
    previewBracket: "Bracket Picks",
    syncErrorPrefix: "Supabase connection issue: ",
    syncSubmitting: "Saving prediction to Supabase...",
    syncLoading: "Connecting live leaderboard...",
    syncReady: (value) => `Live leaderboard is up to date. Last refresh: ${value}.`,
    syncInitial: "Live leaderboard is ready.",
    adminLoginIntro: (email) =>
      `This panel is only for ${email}. Create an admin user with the same email inside Supabase Auth and sign in here.`,
    adminEmailLabel: "Admin email",
    adminPasswordLabel: "Admin password",
    adminPasswordPlaceholder: "Supabase Auth password",
    adminLoggingIn: "Signing in...",
    adminLogin: "Admin Sign In",
    adminOfficialSavedAt: (value) => `Saved official results: ${value}`,
    adminOfficialEmpty: "No official result set has been saved yet.",
    adminDirty: "You have unsaved admin changes.",
    adminSynced: "Admin editor is synced with the saved data.",
    adminActive: "Admin active",
    adminSaving: "Saving...",
    adminSave: "Save Official Results",
    adminRefresh: "Refresh Sync",
    adminLogout: "Sign Out",
    adminDeleteInfo:
      "Delete buttons are visible only while this admin session is active. On the public site the admin panel is only available through ?admin=1.",
    adminOfficialGroupTitle: "Official Group Results",
    adminOfficialGroupCopy:
      "As these scores are entered, leaderboard points are recalculated automatically.",
    adminOfficialKnockoutTitle: "Official Knockout Results",
    adminOfficialKnockoutCopy:
      "Dropdown options fill automatically based on group scores and the previous knockout round.",
    adminFooterCopy:
      "Once saved, these official results update the same leaderboard for everyone in this edition.",
    previewUnselected: "Not selected",
    unknownValue: "unknown",
    syncConnectionFailed:
      "The shared leaderboard could not be refreshed because the Supabase connection failed.",
  },
};
