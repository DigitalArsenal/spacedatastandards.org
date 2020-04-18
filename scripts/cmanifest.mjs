import fs from "fs";
import { join } from "path";
import readline from "readline";

let { readdirSync, statSync } = fs;
let schemaPath = "docs/schemas";
let serverRoot = "docs/";

const walk = async (pdir) => {
  let files = readdirSync(pdir);
  return Promise.all(
    files.map(async (fname) => {
      let cPath = join(pdir, fname);
      let s = statSync(cPath);
      return s.isDirectory() ? walk(cPath) : cPath;
    })
  );
};

let mpath = join(schemaPath, "manifest.json");
walk(schemaPath).then((manifest) => {
  manifest = {
    root: schemaPath.replace(serverRoot, ""),
    files: manifest
      .flat()
      .filter((f) => f.indexOf(mpath) === -1)
      .map((f) => {
        return { filename: f.replace(schemaPath, ""), title: "" };
      }),
  };

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  manifest.files.forEach((file, i) => {
    rl.question(`\nInput title for ${file.filename}: `, (title) => {
      manifest.files[i].title = title;
      if (i === manifest.files.length - 1) {
        rl.close();
      }
    });
  });
  rl.on("close", function () {
    fs.writeFileSync(mpath, JSON.stringify(manifest));
    console.log(`Manifest written to: ${mpath}`);
    console.log(manifest);
    process.exit(0);
  });
});
