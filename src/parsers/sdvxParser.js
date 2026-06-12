export function parseSdvx(rows) {
  return rows
    .filter(row => row["楽曲名"])
    .map(row => ({
      game: "SDVX",

      title: row["楽曲名"],
      diff: row["難易度"],

      level: Number(row["楽曲レベル"]) || 0,

      score: Number(row["ハイスコア"]) || 0,
      exScore: Number(row["EXスコア"]) || 0,

      clear: row["クリアランク"] || "",
      grade: row["スコアグレード"] || "",

      playCount: Number(row["プレー回数"]) || 0,
      clearCount: Number(row["クリア回数"]) || 0,

      importedAt: new Date().toISOString()
    }));
}