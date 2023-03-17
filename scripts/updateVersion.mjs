import { readFileSync, writeFileSync } from "fs";
import packageJSON from "../package.json" assert { "type": "json" }
import packageJSONFB from "../packages/flatbuffers_wasm/package.json" assert { "type": "json" }

let newVersion = Date.now();
packageJSON.version = `${packageJSONFB.version}-${packageJSON.version.split(/[\-|\+]/g)[1]}+${newVersion}`;
writeFileSync("./package.json", JSON.stringify(packageJSON, null, 4));