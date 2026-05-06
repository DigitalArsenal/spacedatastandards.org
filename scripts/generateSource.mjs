import { promises as fs } from "node:fs";
import path from "node:path";

import { FlatcRunner } from "flatc-wasm";

import {
  LIB_DIR,
  loadDatatypeConfigs,
  loadSchemaInput,
  listSchemaDirectories,
} from "./schemaGraph.mjs";

function randomSuffix() {
  return `${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function cleanupRunnerDirectory(flatc, directoryPath) {
  if (!flatc.Module.FS.analyzePath(directoryPath).exists) {
    return;
  }
  for (const entry of flatc.Module.FS.readdir(directoryPath)) {
    if (entry === "." || entry === "..") {
      continue;
    }
    const fullPath = `${directoryPath}/${entry}`;
    const stat = flatc.Module.FS.stat(fullPath);
    if (flatc.Module.FS.isDir(stat.mode)) {
      cleanupRunnerDirectory(flatc, fullPath);
      flatc.rmdir(fullPath);
    } else {
      flatc.unlink(fullPath);
    }
  }
  flatc.rmdir(directoryPath);
}

function collectOutputs(flatc, directoryPath) {
  const outputs = new Map();
  const walk = (currentPath, relativeBase = "") => {
    for (const entry of flatc.Module.FS.readdir(currentPath)) {
      if (entry === "." || entry === "..") {
        continue;
      }
      const fullPath = `${currentPath}/${entry}`;
      const relativePath = relativeBase ? `${relativeBase}/${entry}` : entry;
      const stat = flatc.Module.FS.stat(fullPath);
      if (flatc.Module.FS.isDir(stat.mode)) {
        walk(fullPath, relativePath);
      } else {
        outputs.set(
          relativePath,
          flatc.Module.FS.readFile(fullPath, { encoding: "utf8" }),
        );
      }
    }
  };
  walk(directoryPath);
  return outputs;
}

function runCodeGeneration(flatc, schemaInput, datatype) {
  flatc._mountSchemaIfNeeded(schemaInput);
  const outputDir = `/out_${randomSuffix()}`;
  flatc.Module.FS.mkdirTree(outputDir);

  const args = [
    "--preserve-case",
    ...datatype.flatcArgs,
    "-o",
    outputDir,
  ];
  for (const includeDir of flatc._cachedIncludeDirs) {
    args.push("-I", includeDir);
  }
  // Generators that emit a single filename per input (Rust: main_generated.rs,
  // C++: main_generated.h) collide when multiple main.fbs files share one
  // output dir — each compilation unit overwrites the previous. Pass only the
  // entry schema to those; -I flags above resolve imports for type checking.
  // Per-type-output generators (TS, Python, Java, Go, etc.) still need every
  // transitive include as a compilation unit so sibling-type files (e.g.
  // RecordType.ts's `./STF.js` import) exist in the same output dir.
  const flatOutputExts = new Set(["rs", "cpp"]);
  const compilationUnits = flatOutputExts.has(datatype.ext)
    ? [schemaInput.entry]
    : (schemaInput.compilationUnits ?? [schemaInput.entry]);
  for (const compilationUnit of compilationUnits) {
    args.push(compilationUnit);
  }

  const result = flatc.runCommand(args);
  if (result.code !== 0 || result.stderr.includes("error:")) {
    cleanupRunnerDirectory(flatc, outputDir);
    throw new Error(
      `flatc code generation failed for ${datatype.label} (${schemaInput.entry})\n${result.stderr || result.stdout}`,
    );
  }

  const outputs = collectOutputs(flatc, outputDir);
  cleanupRunnerDirectory(flatc, outputDir);
  return outputs;
}

async function writeOutputs(baseDir, outputs) {
  for (const [relativePath, source] of outputs.entries()) {
    const outputPath = path.join(baseDir, relativePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, source.replace(/[ \t]+$/gm, ""), "utf8");
  }
}

async function main() {
  const schemaNames = await listSchemaDirectories();
  const datatypes = await loadDatatypeConfigs();
  await fs.rm(LIB_DIR, { recursive: true, force: true });
  await fs.mkdir(LIB_DIR, { recursive: true });

  const flatc = await FlatcRunner.init();
  for (const schemaName of schemaNames) {
    const schemaInput = await loadSchemaInput(schemaName);
    for (const datatype of datatypes) {
      const outputs = runCodeGeneration(flatc, schemaInput, datatype);
      const outputDir = path.join(LIB_DIR, datatype.ext, schemaName);
      await writeOutputs(outputDir, outputs);
    }
  }

  console.log(
    `Code generation complete for ${schemaNames.length} schemas across ${datatypes.length} targets.`,
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
