import { readFileSync, writeFileSync } from "fs";
import packageJSON from "../package.json" assert { "type": "json" }
import packageJSONFB from "../packages/flatbuffers_wasm/package.json" assert { "type": "json" }
import { execSync } from "child_process";

let newVersion = Date.now();
let mVersion = `${packageJSONFB.version}-${packageJSON.version.split(/[\-|\+]/g)[1]}`;

packageJSON.version = `${mVersion}+${newVersion}`;

writeFileSync("./package.json", JSON.stringify(packageJSON, null, 4));

if (!~execSync("git tag").toString().split("\n").indexOf("v" + mVersion)) {
    console.log(execSync(`git tag -a v${mVersion} -m "${mVersion}"`).toString());
}
