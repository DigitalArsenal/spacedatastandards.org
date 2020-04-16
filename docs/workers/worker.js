import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
import WasmFs from "../lib/wasmer/wasmfs.esm.js";

const join = (...args) => {
  return args.join("/").replace(new RegExp("/" + "{1,}", "g"), "/");
};

let fs = new WasmFs().fs;

const walk = async (pdir) => {
  let files = fs.readdirSync(pdir);
  return Promise.all(
    files.map(async (fname) => {
      let cPath = join(pdir, fname);
      let s = fs.statSync(cPath);
      return s.isDirectory() ? walk(cPath) : cPath;
    })
  );
};

const isWorker = typeof WorkerGlobalScope !== "undefined";

fs.mkdirpSync("/root");
const convert = async function (e) {
  let currentDocuments = (await walk("/root/")).flat();
  currentDocuments.forEach((d) => {
    fs.unlinkSync(d);
  });
  let result = {
    files: {},
    loaded: e.data.loaded,
    error: null
  };
  let _schemaDoc = "/root/IDLDocument.fbs";
  let { currentLanguage, IDLDocument, IDLEditorContents } = e.data;
  fs.writeFileSync(_schemaDoc, IDLEditorContents);
  try {
    let fb = new flatc({
      fs: fs,
      rootDir: "/",
    });

    let command = ["./flatc", currentLanguage[0], "-o", "/root", `/root/IDLDocument.fbs`];
    if (IDLEditorContents.match(/root_type \w{1,};/)) command.push("--jsonschema");
    await fb.runCommand(command);
    window.errPipe = fs.createReadStream("/dev/stderr");
    window.outPipe = fs.createReadStream("/dev/stdout");
    window.errPipe.on("data", (data) => {
      console.log(data.toString("utf8"));
    });
    window.outPipe.on("data", (data) => {
      console.log(data.toString("utf8"));
    });

    let manifest = (await walk("/root/")).flat();
    manifest.forEach((f) => {
      if (f.indexOf(_schemaDoc) === -1) {
        result.files[f] = fs.readFileSync(f, {
          encoding: "utf8",
        });
      }
    });
  } catch (e) {
    console.log(e);
    result.error = "Code Generation Failed:  Check Syntax And Try Again.";
  }
  result.loaded = true;
  if (isWorker) {
    this.postMessage(result);
  } else {
    return result;
  }
};
if (isWorker) {
  onmessage = convert;
}

export { convert };
