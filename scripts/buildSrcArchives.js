import flatc from "../src/external/flatc.mjs";
import {
    readFileSync,
    writeFileSync,
    mkdirSync,
    rmSync,
    existsSync,
    readdirSync,
} from "fs";
import path, { basename, resolve } from "path";
import packageJSON from "../package.json" assert { type: "json" };
console.log(version);
import languages from "../src/stores/languages.mjs";
console.log((languages))
/*


const databaseConfig = config.database.config[config.database.config.primary];

let dataTypes = [["--jsonschema"], ["--ts", "--gen-object-api"]];
const { standardsPath } = packageJSON;
export const en = { encoding: "utf8" };
let typeJSON = null;
const getCode = async (_idl, classFolder) => {
    return new Promise((resolve, reject) => {
        flatc({
            noInitialRun: true,
        }).then((m) => {
            _idl = _idl.replace(/\s{0,}=\s{0,}null/g, "");

            //Naming convention for output files, use "main"
            m.FS.writeFile("/main.fbs", _idl);

            const runFile = (xx) => {
                let args = xx;
                if (!Array.isArray(xx)) {
                    args = [xx];
                }
                args = [...args, "/main.fbs"];
                m.main(args);
                let files = m.FS.readdir("/").filter((a) => {
                    return !~[".", "..", "tmp", "home", "dev", "proc"].indexOf(a);
                });
                for (let f = 0; f < files.length; f++) {
                    if (~classFolder.indexOf("TypeGen")) {
                        if (~files[f].indexOf("main.schema.json")) {
                            typeJSON = JSON.parse(m.FS.readFile(files[f], en));
                        }
                    }
                    writeFileSync(
                        `${classFolder}/${files[f].replace("_generated", "")}`,
                        m.FS.readFile(files[f], en)
                    );
                }
            };
            runFile(dataTypes[0]);
            runFile(dataTypes[1]);
            resolve();
        });
    });
};

let standardsPackage = JSON.parse(
    readFileSync(`./packages/spacedatastandards.org/package.json`, en)
);
console.log(
    `Generating SpaceDataStandards version: ${standardsPackage.version}
  `
);
let folders = readdirSync(`./packages/spacedatastandards.org/standards/`);

const typeGenPath = resolve(standardsPath, "..", "TypeGen");

if (existsSync(typeGenPath)) {
    rmSync(typeGenPath, { recursive: true, force: true });
}
mkdirSync(typeGenPath);

let numTypes = [
    "byte",
    "int8",
    "ubyte",
    "uint8",
    "bool", //8 bit
    "short",
    "int16",
    "ushort",
    "uint16", //16 bit
    "int",
    "int32",
    "uint",
    "uint32",
    "float",
    "float32", //32 bit
    "long",
    "int64",
    "ulong",
    "uint64",
    "double",
    "float64",
    "string",
]; //64 bit

let _tIDL = `
table TypeCheck {
${numTypes.map((nT) => `  ${nT}:${nT}`).join(";\n")};
}
root_type TypeCheck;
`;

let generatePromises = [getCode(_tIDL, typeGenPath)];

for (let f = 0; f < folders.length; f++) {
    console.log(`Generating: ${folders[f]}`);
    let folderName = folders[f];
    let _idl = readFileSync(
        `./packages/spacedatastandards.org/standards/${folderName}/main.fbs`,
        en
    );
    let classFolder = `${standardsPath}/${folderName.match(/\((.*)\)/)[1]}`;
    if (existsSync(classFolder)) {
        rmSync(classFolder, { recursive: true, force: true });
    }
    mkdirSync(classFolder);
    generatePromises.push(getCode(_idl, classFolder));
}

Promise.all(generatePromises).then(() => {
    let _src = ``;
    let _schemas = {};
    for (let f = 0; f < folders.length; f++) {
        let folderName = folders[f].match(/\((.*)\)/)[1];
        let mainSchema = JSON.parse(
            readFileSync(
                `${packageJSON.standardsPath}/${folderName}/main.schema.json`,
                en
            )
        );
        _schemas[folderName] = mainSchema;
        let mainExport = mainSchema.$ref.split("/").pop();

        _src += `export * as ${mainExport} from "${packageJSON.standardsPath.replace(
            "./",
            "@/"
        )}/${folderName}/main";\n`;
    }
    writeFileSync(
        "./lib/standards/schemas.json",
        JSON.stringify(_schemas, null, 4)
    );
    writeFileSync("./lib/standards/standards.ts", _src);
});
*/