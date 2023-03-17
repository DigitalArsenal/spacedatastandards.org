import flatc from "../src/external/flatc.mjs";
import {
    readFileSync,
    writeFileSync,
    mkdirSync,
    rmSync,
    existsSync,
    readdirSync,
    createWriteStream,
} from "fs";
import path, { basename, resolve } from "path";
import packageJSON from "../package.json" assert { type: "json" };
import languages from "../src/stores/languages.mjs";
import JSZip from "jszip";
import packageJSONFB from "../packages/flatbuffers_wasm/package.json" assert { type: "json" };

let folderObj = {};

const getCode = async (_idl, languageArguments, langName, standard) => {
    folderObj[langName][standard] = [];
    return new Promise((resolve, reject) => {
        flatc({
            noInitialRun: true,
        }).then((m) => {
            _idl = _idl.replace(/\s{0,}=\s{0,}null/g, "");

            //Naming convention for output files, use "main"
            m.FS.writeFile("/main.fbs", _idl);

            const runFile = (xx) => {
                let args = xx.slice(0, 1);

                args = [...args.flat(), "/main.fbs"];
                m.main(args);
                let files = m.FS.readdir("/").filter((a) => {
                    return !~[".", "..", "tmp", "home", "dev", "proc"].indexOf(a);
                });
                for (let f = 0; f < files.length; f++) {
                    let fileName = files[f].replace("_generated", "");
                    folderObj[langName][standard][fileName] = m.FS.readFile(files[f], { encoding: "utf8" });
                }
            };
            runFile(languageArguments);
            resolve();
        });
    });
};


let standards = readdirSync("./standards");

for (let s = 0; s < standards.length; s++) {
    let standard = standards[s];

    let _idl = readFileSync(
        `./standards/${standard}/main.fbs`,
        "utf8"
    );

    for (let l = 0; l < languages.length; l++) {
        const langName = languages[l][1].toLowerCase().replaceAll(" ", "_");
        folderObj[langName] = folderObj[langName] || {};
        await getCode(_idl, languages[l], langName, standard);
    }
}

for (let x in folderObj) {

    const zip = new JSZip();

    zip.file("version.txt", `SDS VERSION: ${packageJSON.version}
FLATBUFFERS VERSION: ${packageJSONFB.version}`);

    let folders = folderObj[x];
    for (let folder in folders) {
        let zipFolder = zip.folder(folder);
        for (let file in folders[folder]) {
            zipFolder.file(file, folders[folder][file])
        }
    }

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(createWriteStream(`./code/${x.replace("_header", "")}.zip`))
        .on('finish', function () {
            console.log(`Generated ${x}/.zip`);
            resolve();
        });
}
