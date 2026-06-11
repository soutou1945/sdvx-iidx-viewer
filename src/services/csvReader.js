import Papa from "papaparse";

export function readCsv(file) {
  return new Promise((resolve, reject) => {

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      encoding: "Shift_JIS",

      complete: results => {
        resolve(results.data);
      },

      error: err => {
        reject(err);
      }
    });

  });
}