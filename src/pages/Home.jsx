import { useEffect, useState } from "react";
import { loadScores } from "../services/storage";
import { loadSnapshots } from "../services/snapshots";
import ImportButton from "../components/ImportButton";

export default function Home() {
  const [scores, setScores] = useState([]);
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    setScores(loadScores());
    setSnapshots(loadSnapshots());
  }, []);

const latest =
  snapshots.length > 0
    ? snapshots[snapshots.length - 1]
    : null;

const previous =
  snapshots.length > 1
    ? snapshots[snapshots.length - 2]
    : null;
function getImprovedCount() {
  if (!latest || !previous) {
    return 0;
  }

  const prevMap = {};

  previous.scores.forEach(score => {
    prevMap[
      score.title + "_" + score.diff
    ] = score.score;
  });

  let improved = 0;

  latest.scores.forEach(score => {
    const key =
      score.title + "_" + score.diff;

    const oldScore = prevMap[key] || 0;

    if (score.score > oldScore) {
      improved++;
    }
  });

  return improved;
}


  return (
    <div>
      <h1>Score Viewer</h1>

      <ImportButton />

<p>保存譜面数: {scores.length}</p>
<p>取込履歴数: {snapshots.length}</p>

<h2>取込履歴</h2>

{latest && (
  <div>
    <h2>最新取込</h2>

    <p>
      {new Date(
        latestSnapshot.importedAt
      ).toLocaleString()}
    </p>

    <p>
      譜面数:
      {latestSnapshot.scores.length}
    </p>
  </div>
)}
    </div>
  );
}