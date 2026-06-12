const SNAPSHOT_KEY = "snapshots";

export function loadSnapshots() {
  const data = localStorage.getItem(SNAPSHOT_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveSnapshot(scores) {
  const snapshots = loadSnapshots();

  snapshots.push({
    importedAt: new Date().toISOString(),
    scores: scores
  });

  localStorage.setItem(
    SNAPSHOT_KEY,
    JSON.stringify(snapshots)
  );
}

export function clearSnapshots() {
  localStorage.removeItem(SNAPSHOT_KEY);
}