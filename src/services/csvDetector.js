export function detectGame(data) {

  if (!data.length) {
    return null;
  }

  const headers = Object.keys(data[0]);

  if (
    headers.includes("楽曲名") &&
    headers.includes("EXスコア")
  ) {
    return "SDVX";
  }

  if (
    headers.includes("タイトル") ||
    headers.includes("ANOTHER スコア")
  ) {
    return "IIDX";
  }

  return "UNKNOWN";
}