export function parseSdvx(data) {

  return data.map(row => ({

    game: "SDVX",

    title: row["楽曲名"],

    diff: row["難易度"],

    level: Number(row["楽曲レベル"] || 0),

    score: Number(row["ハイスコア"] || 0),

    exScore: Number(row["EXスコア"] || 0),

    rank: row["スコアグレード"] || "",

    clear: row["クリアランク"] || "",

    playCount: Number(row["プレー回数"] || 0)

  }));

}