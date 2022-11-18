import { readFileSync, writeFileSync } from "fs";
let packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

let newVersion = Date.now();
packageJson.version = `${packageJson.version.split("+")[0]}+${newVersion}`;
writeFileSync("./package.json", JSON.stringify(packageJson, null, 4));