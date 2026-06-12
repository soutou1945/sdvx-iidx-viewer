import Papa from "papaparse";

import { saveScores } from "../services/storage";
import { saveSnapshot } from "../services/snapshots";

import { parseSdvx } from "../parsers/sdvxParser";

export default function ImportButton() {
  const handleFile = (e) => {
    const file = e.target.files[0];

Papa.parse(file, {
  header: true,
  complete: (result) => {
    const rows = result.data;

    const scores = parseSdvx(rows);

    console.log(scores);

    saveScores(scores);
    saveSnapshot(scores);
    alert(`${scores.length}件保存しました`);

    window.location.reload();
  }
});
  };

  return (
    <input
      type="file"
      accept=".csv"
      onChange={handleFile}
    />
  );
}