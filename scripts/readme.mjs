
import { readFileSync, writeFileSync } from 'fs';
let e = { encoding: "utf8" };

let background = readFileSync("docs/src/components/Main/background.html.txt", e);
let README = readFileSync("README.md", e);

writeFileSync("README.md", README.replace(README.match(/<h2>[\s\S]*/gm)[0], background));
