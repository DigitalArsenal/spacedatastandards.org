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
  // C++: main_generated.h, JSON Schema: main.schema.json) collide when multiple
  // main.fbs files share one output dir — each compilation unit overwrites the
  // previous, so the LAST include wins and the entry schema's own root type and
  // definitions are lost entirely (this silently published $PMM as $EPM, $OMM
  // as $MET and $OCM as $LCC across every including standard). Pass only the
  // entry schema to those; -I flags above resolve imports for type checking.
  // Per-type-output generators (TS, Python, Java, Go, etc.) still need every
  // transitive include as a compilation unit so sibling-type files (e.g.
  // RecordType.ts's `./STF.js` import) exist in the same output dir.
  const flatOutputExts = new Set(["rs", "cpp", "json"]);
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

// flatc's Go generator can emit two DIFFERENT methods with the SAME name on
// the same receiver: a scalar field's PascalCase alias (e.g. IV_LENGTH's
// `IvLength() byte`) collides with the auto vector-length alias for a
// differently-cased vector field (e.g. IV's `IvLength() int`), or a field
// literally named INIT collides with the mandatory `Init(buf, i)` binding
// method. Both are pure `return rcv.<EXACT_CASE_NAME>(...)` passthroughs —
// the exact-case (UPPER_SNAKE_CASE) accessor is untouched and always unique,
// so dropping the colliding alias changes no wire format, no field name, no
// JSON key. See sds-go-bindings-duplicate-methods.
function splitGoFuncBlocks(source) {
  const blocks = [];
  const re = /^func \(rcv \*(\w+)\) (\w+)\(([^)\n]*)\)[^\n{]*\{\n[\s\S]*?\n\}\n/gm;
  let m;
  while ((m = re.exec(source))) {
    blocks.push({
      type: m[1],
      name: m[2],
      params: m[3],
      text: m[0],
      start: m.index,
      end: m.index + m[0].length,
    });
  }
  return blocks;
}

function dedupeGoAccessors(source, relativePath) {
  const blocks = splitGoFuncBlocks(source);
  if (blocks.length === 0) {
    return source;
  }
  const groups = new Map();
  for (const block of blocks) {
    const key = `${block.type}.${block.name}`;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(block);
  }
  const findBlock = (type, name) =>
    blocks.find((b) => b.type === type && b.name === name);

  const toRemove = [];
  for (const [key, group] of groups) {
    if (group.length < 2) {
      continue;
    }
    // The mandatory flatbuffers table-binding method is unambiguous by
    // signature — always keep it, drop every same-named field alias.
    const mandatoryInit = group.find((b) =>
      /^\s*buf \[\]byte,\s*i flatbuffers\.UOffsetT\s*$/.test(b.params),
    );
    if (mandatoryInit) {
      for (const b of group) {
        if (b !== mandatoryInit) {
          toRemove.push(b);
        }
      }
      continue;
    }
    if (group.length === 2) {
      const kinds = group.map((b) => {
        const passthrough = b.text.match(/return rcv\.(\w+)\([^)]*\)\n\}\n$/);
        const target = passthrough && findBlock(b.type, passthrough[1]);
        if (target && /rcv\._tab\.VectorLen\(/.test(target.text)) {
          return "vectorLengthAlias";
        }
        if (target && /rcv\._tab\.Get\w+\(/.test(target.text)) {
          return "scalarFieldAlias";
        }
        return "unknown";
      });
      if (kinds.includes("vectorLengthAlias") && kinds.includes("scalarFieldAlias")) {
        toRemove.push(group[kinds.indexOf("scalarFieldAlias")]);
        continue;
      }
    }
    console.warn(
      `[go-dedupe] ${relativePath}: unrecognized duplicate accessor group ${key} (${group.length} occurrences) — keeping the first, review manually.`,
    );
    for (let i = 1; i < group.length; i += 1) {
      toRemove.push(group[i]);
    }
  }
  if (toRemove.length === 0) {
    return source;
  }
  toRemove.sort((a, b) => b.start - a.start);
  let out = source;
  for (const block of toRemove) {
    out = out.slice(0, block.start) + out.slice(block.end);
  }
  return out;
}

async function writeOutputs(baseDir, outputs, datatype) {
  for (const [relativePath, source] of outputs.entries()) {
    const outputPath = path.join(baseDir, relativePath);
    let normalizedSource = source
      .replace(/[ \t]+$/gm, "")
      .replace(/\n+$/u, "\n");
    if (datatype?.ext === "go" && relativePath.endsWith(".go")) {
      normalizedSource = dedupeGoAccessors(normalizedSource, relativePath);
    }
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, normalizedSource, "utf8");
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
      await writeOutputs(outputDir, outputs, datatype);
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
