import freqs from "../raw/json/freqs.json" assert { type: "json" };
import { writeFileSync } from "fs";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {
  EMTT as EMT,
  EMTCOLLECTIONT as EMTCOLLECTION,
  FrequencyRangeT as FrequencyRange,
  PolarizationType,
  SimplePolarization,
  StokesParametersT as StokesParameters,
  BandT as Band,
} from "../dist/EMT/main.js";

console.log(new EMT(), new Band());
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(freqs.length);

let results = [];
for (let f = 0; f < freqs.length; f++) {
  const row = freqs[f];
  delete row.orbit;

  const DFREQ = row["DOWNLINK FREQ"];
  if (typeof DFREQ === "string") {
    // console.log(DFREQ, DFREQ.split(/[^0-9.]+/).filter(Boolean));
    /*
     DFREQ.split(/[^0-9.]+/)
      .filter(Boolean)
      .map(parseFloat);*/
  }
  results.push(row);
}

writeFileSync(
  join(__dirname, "../data/freqs.json"),
  JSON.stringify(results, null, 4)
);
