import showdown from "showdown";
import { globby } from "globby";
import { readFileSync, writeFileSync } from "fs";

let converter = new showdown.Converter();
converter.setOption('tables', true);

const paths = await globby([`${process.cwd()}/docs/standards/**/*.md`]);
paths.forEach(p => {
    let fileMD = readFileSync(p, "utf-8");
    let resultHTML = converter.makeHtml(fileMD);
    writeFileSync(p, fileMD);
    writeFileSync(p.replace(".md", ".html"), resultHTML);
});

console.log(paths);