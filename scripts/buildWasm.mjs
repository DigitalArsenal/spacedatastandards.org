import { promises as fs } from "node:fs";
import path from "node:path";

import { runWithEmceptionLock } from "./emceptionNode.mjs";

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const CPP_ROOT = path.join(REPO_ROOT, "src", "cpp");
const DIST_DIR = path.join(REPO_ROOT, "dist");
const NODE_WASM_DIR = path.join(REPO_ROOT, "wasm", "node");

const SOURCE_FILES = [
  "src/kvn_parser.cpp",
  "src/kvn_writer.cpp",
  "src/xml_sax_parser.cpp",
  "src/xml_writer.cpp",
  "src/json_parser.cpp",
  "src/json_writer.cpp",
  "src/navigation/omm_parser.cpp",
  "src/navigation/oem_parser.cpp",
  "src/navigation/cdm_parser.cpp",
  "src/navigation/opm_parser.cpp",
  "src/navigation/aem_parser.cpp",
  "src/navigation/tdm_parser.cpp",
  "src/navigation/xtce_parser.cpp",
  "src/navigation/gjn_parser.cpp",
  "src/navigation/czm_parser.cpp",
  "src/navigation/kml_parser.cpp",
  "src/navigation/gpx_parser.cpp",
  "src/navigation/cot_parser.cpp",
  "wasm_api.cpp",
];

function createNodeEsmPrelude() {
  return [
    'import { createRequire as __sdsCreateRequire } from "module";',
    'import { fileURLToPath as __sdsFileURLToPath } from "url";',
    'import { dirname as __sdsDirname } from "path";',
    "const require = __sdsCreateRequire(import.meta.url);",
    "const __filename = __sdsFileURLToPath(import.meta.url);",
    "const __dirname = __sdsDirname(__filename);",
    "",
  ].join("\n");
}

function removeDirectory(emception, directoryPath) {
  if (!emception.FS.analyzePath(directoryPath).exists) {
    return;
  }
  for (const entry of emception.FS.readdir(directoryPath)) {
    if (entry === "." || entry === "..") {
      continue;
    }
    const fullPath = path.posix.join(directoryPath, entry);
    const stat = emception.FS.stat(fullPath);
    if (emception.FS.isDir(stat.mode)) {
      removeDirectory(emception, fullPath);
      emception.FS.rmdir(fullPath);
    } else {
      emception.FS.unlink(fullPath);
    }
  }
  emception.FS.rmdir(directoryPath);
}

async function writeTreeToEmception(emception, hostRoot, virtualRoot) {
  const entries = await fs.readdir(hostRoot, { withFileTypes: true });
  emception.FS.mkdirTree(virtualRoot);
  for (const entry of entries) {
    const hostPath = path.join(hostRoot, entry.name);
    const virtualPath = path.posix.join(virtualRoot, entry.name);
    if (entry.isDirectory()) {
      await writeTreeToEmception(emception, hostPath, virtualPath);
    } else {
      emception.writeFile(virtualPath, await fs.readFile(hostPath));
    }
  }
}

async function main() {
  await fs.mkdir(DIST_DIR, { recursive: true });
  await fs.mkdir(NODE_WASM_DIR, { recursive: true });

  await runWithEmceptionLock(async (emception) => {
    const workDir = "/working/spacedatastandards";
    const includeDir = path.posix.join(workDir, "include");
    const sourceRoot = path.posix.join(workDir, "src");
    const outputJsPath = path.posix.join(workDir, "sds_parsers.js");
    const outputWasmPath = path.posix.join(workDir, "sds_parsers.wasm");

    try {
      await writeTreeToEmception(
        emception,
        path.join(CPP_ROOT, "include"),
        includeDir,
      );
      await writeTreeToEmception(
        emception,
        path.join(CPP_ROOT, "src"),
        sourceRoot,
      );
      emception.writeFile(
        path.posix.join(workDir, "wasm_api.cpp"),
        await fs.readFile(path.join(CPP_ROOT, "wasm_api.cpp")),
      );

      const compileCommand = [
        "em++",
        ...SOURCE_FILES.map((sourceFile) => path.posix.join(workDir, sourceFile)),
        "-std=c++17",
        "-O0",
        `-I${includeDir}`,
        "-s",
        "WASM=1",
        "-s",
        "MODULARIZE=1",
        "-s",
        "EXPORT_ES6=1",
        "-s",
        "ALLOW_MEMORY_GROWTH=1",
        "-s",
        "NO_EXIT_RUNTIME=1",
        "-s",
        "ENVIRONMENT=web,node",
        "-s",
        "DISABLE_EXCEPTION_CATCHING=0",
        "-s",
        "EXPORTED_RUNTIME_METHODS=['ccall','cwrap','UTF8ToString','stringToUTF8','lengthBytesUTF8']",
        "-s",
        "EXPORTED_FUNCTIONS=['_malloc','_free']",
        "--bind",
        "-o",
        outputJsPath,
      ];

      const result = emception.run(compileCommand.join(" "));
      if (result.returncode !== 0) {
        throw new Error(result.stderr || result.stdout || "sdn-emception build failed");
      }

      const outputJsBytes = new Uint8Array(emception.readFile(outputJsPath));
      const outputJsText = new TextDecoder().decode(outputJsBytes);
      await fs.writeFile(path.join(DIST_DIR, "sds_parsers.js"), outputJsBytes);
      await fs.writeFile(
        path.join(NODE_WASM_DIR, "sds_parsers.js"),
        `${createNodeEsmPrelude()}${outputJsText}`,
      );
      await fs.writeFile(
        path.join(DIST_DIR, "sds_parsers.wasm"),
        new Uint8Array(emception.readFile(outputWasmPath)),
      );
      await fs.writeFile(
        path.join(NODE_WASM_DIR, "sds_parsers.wasm"),
        new Uint8Array(emception.readFile(outputWasmPath)),
      );

      console.log("Built dist/sds_parsers.js and dist/sds_parsers.wasm with sdn-emception.");
    } finally {
      try {
        removeDirectory(emception, workDir);
      } catch {
        // Emception can leave transient handles behind; cleanup is best-effort only.
      }
    }
  });
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error.stack || error.message);
    process.exit(1);
  });
