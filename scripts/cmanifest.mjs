import fs from "fs";
import { join } from "path";
let { readdir, stat } = fs.promises;
let schemaPath = "./docs/schemas";

const walk = async (pdir) => {
  let files = await readdir(pdir);
  return Promise.all(
    files
      .map(async (fname) => {
        let cPath = join(pdir, fname);
        let s = await stat(cPath);
        return s.isDirectory() ? walk(cPath) : fname;
      })
      .concat({ dirname: pdir })
  );
};

let mpath = join(schemaPath, "manifest.json");
walk(schemaPath).then((manifest) => {
  fs.writeFileSync(mpath, JSON.stringify(manifest));
  console.log(`Manifest written to: ${mpath}`);
});
