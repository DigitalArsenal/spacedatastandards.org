import fs from "fs";
import { join } from "path";
import readline from "readline-sync";

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
let _manifest;
if (fs.statSync(mpath)) {
  _manifest = JSON.parse(fs.readFileSync(mpath, { encoding: 'utf8' }));
}
let _files = {};
_manifest.files.map(x => _files[x.filename] = x.title);

walk(schemaPath).then((manifest) => {
  manifest = {
    root: schemaPath.replace(serverRoot, ""),
    files: manifest
      .flat()
      .filter((f) => f.indexOf(mpath) === -1)
      .map((f) => {
        let _f = f.replace(schemaPath, "");
        return { filename: _f, title: _files[_f] || "" };
      }),
  };
  const CCSDS_DOCTYPES = [
    "Blue: Recommended Standards",
    "Magenta: Recommended Practices",
    "Green: Informational Reports",
    "Orange: Experimental",
    "Yellow: Record",
    "Silver: Historical",
    "Pre-Proposal: Non-CCSDS"
  ];
  const CCSDS_COLORS = [
    "#0066FF",
    "#FF3399",
    "#008000",
    "#FF6600",
    "#FFFF66",
    "#808080",
    "#EEEEE"
  ];

  manifest.files.forEach((file, i) => {
    let title = readline.question(`\nInput title for ${file.filename}, or [ENTER] to keep "${file.title}": `);
    let type = readline.keyInSelect(CCSDS_DOCTYPES, 'Which CCSDS Book Type?');

    manifest.files[i].title = title || manifest.files[i].title;
    manifest.files[i].type = CCSDS_DOCTYPES[type];
    manifest.files[i].color = CCSDS_COLORS[type];
  });

  fs.writeFileSync(mpath, JSON.stringify(manifest));
  console.log(`Manifest written to: ${mpath}`);
  console.log(manifest);
  process.exit(0);

});

/*
#0066FF - Blue: Recommended Standards
#FF3399 - Magenta: Recommended Practices
#008000 - Green: Informational Reports
#FF6600 - Orange: Experimental
#FFFF66 - Yellow: Record
#808080 - Silver: Historical
#EEEEEE - Pre-Proposal: Non-CCSDS
*/