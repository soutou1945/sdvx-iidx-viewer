import './style.css';

import { readCsv } from './services/csvReader';
import { saveData, loadData } from "./services/storage";
import { detectGame } from "./services/csvDetector";
import { parseSdvx } from "./services/sdvxParser";

document.querySelector('#app').innerHTML = `
<div class="container">

  <h1>SDVX / IIDX Viewer</h1>

  <input
    type="file"
    id="csvFile"
    accept=".csv"
  >

  <div id="result"></div>

</div>
`;

const fileInput = document.querySelector('#csvFile');

fileInput.addEventListener('change', async e => {

  const file = e.target.files[0];

  if (!file) return;

  const data = await readCsv(file);

  console.log(data);

  saveData("rawCsv", data);

  const game = detectGame(data);

  document.querySelector('#result').innerHTML = `
    <p>読込成功</p>
    <p>${game}</p>
    <p>${data.length}件</p>
  `;
 
  if (game === "SDVX") {

  const parsed = parseSdvx(data);

  saveData("sdvxData", parsed);

  console.log(parsed);

  }
});

const saved = loadData("sdvxData");

if (saved) {
  console.log("保存済データ", saved.length);
}