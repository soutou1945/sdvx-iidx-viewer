const STORAGE_KEY = "musicScores";

export function loadScores() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveScores(scores) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(scores)
  );
}

export function clearScores() {
  localStorage.removeItem(STORAGE_KEY);
}