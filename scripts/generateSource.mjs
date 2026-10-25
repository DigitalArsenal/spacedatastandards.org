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
  // C++: main_generated.h, JSON Schema: main.schema.json, Dart:
  // main_generated.dart, Swift: main_generated.swift, Lobster:
  // main_generated.lobster) collide when multiple main.fbs files share one
  // output dir — each compilation unit overwrites the previous, so the LAST
  // include wins and the entry schema's own root type and definitions are lost
  // entirely (this silently published $PMM as $EPM, $OMM as $MET and $OCM as
  // $LCC across every including standard). Pass only the entry schema to
  // those; -I flags above resolve imports for type checking.
  // Per-type-output generators (TS, Python, Java, Go, etc.) still need every
  // transitive include as a compilation unit so sibling-type files (e.g.
  // RecordType.ts's `./STF.js` import) exist in the same output dir.
  const flatOutputExts = new Set(["rs", "cpp", "json", "dart", "sw", "lob"]);
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

// flatc's C++ generator always appends an auto MIN/MAX convenience pair to
// every enum ("<Name>_MIN = <first real member>", "<Name>_MAX = <last real
// member>"). When a schema declares a real member literally named MAX (or
// MIN), its fully-qualified name ("<Name>_MAX") collides byte-for-byte with
// the auto sentinel of the SAME name -> a duplicate enumerator, which every
// C++ compiler rejects. The real member (whatever ordinal it holds) is
// always declared FIRST; the auto sentinel is always redundant with some
// real member's value, so keeping the first occurrence of each identifier
// and dropping later duplicates never loses information. See
// sds-ces-enum-max-collision.
function dedupeCppEnumConstants(source) {
  const enumRe = /^enum (\w+) : \w+ \{\n([\s\S]*?)\n\};\n/gm;
  return source.replace(enumRe, (whole, enumName, body) => {
    const lines = body.split("\n");
    const seen = new Set();
    const kept = [];
    for (const line of lines) {
      const m = line.match(/^(\s*)(\w+)\s*=\s*(.+?),?\s*$/);
      if (!m) {
        kept.push(line);
        continue;
      }
      const [, indent, ident, value] = m;
      if (seen.has(ident)) {
        continue;
      }
      seen.add(ident);
      kept.push({ indent, ident, value });
    }
    const lastEntryIndex = kept.map((e) => typeof e).lastIndexOf("object");
    const rebuilt = kept
      .map((entry, i) => {
        if (typeof entry === "string") {
          return entry;
        }
        const comma = i < lastEntryIndex ? "," : "";
        return `${entry.indent}${entry.ident} = ${entry.value}${comma}`;
      })
      .join("\n");
    return `enum ${enumName} : ${whole.match(/: (\w+) \{/)[1]} {\n${rebuilt}\n};\n`;
  });
}

// Swift's generator emits the same real-member-vs-auto-sentinel collision as
// C++, but as a `case max = N` (real, wire-encoded) vs a `public static var
// max: <Name> { ... }` (auto MIN/MAX convenience, always computable from the
// real cases) — Swift refuses two members named `max` in one type. Drop only
// the auto static var when its name collides with a declared case; the case
// is the one every accessor/default actually references.
function dedupeSwiftEnumStatics(source) {
  const enumRe = /^public enum (\w+): [^{]+\{\n([\s\S]*?)\n\}\n/gm;
  return source.replace(enumRe, (whole, enumName, body) => {
    const caseNames = new Set(
      [...body.matchAll(/^\s*case (\w+)/gm)].map((m) => m[1]),
    );
    const lines = body.split("\n");
    const kept = lines.filter((line) => {
      const m = line.match(/^\s*public static var (\w+): /);
      return !(m && caseNames.has(m[1]));
    });
    return whole.replace(body, kept.join("\n"));
  });
}

// flatc's PHP generator writes a NaN or infinite default as the bare IDL token
// (`: nan;`, `addDoubleX(2, $x, nan)`), but PHP constants are case-sensitive
// and only NAN / INF exist, so every accessor with such a default throws
// "Undefined constant". Rewrite the code-position tokens; comments are left.
function fixPhpFloatConstants(source) {
  return source.replace(
    /([:,(]\s*)(-?)(nan|inf|infinity)(?=\s*[;),])/g,
    (_, lead, sign, token) => `${lead}${sign}${token === "nan" ? "NAN" : "INF"}`,
  );
}

// flatc's PHP generator writes the parameter separator by field position, so a
// DEPRECATED FIRST field (a retired slot 0) leaves an empty parameter in the
// create function: `createX(FlatBufferBuilder $builder, , $A, $B)`, a parse
// error. A deprecated field has no accessor and no parameter, so drop the stray
// separator. Deprecated fields after the first are generated correctly.
function fixPhpDeprecatedFirstField(source) {
  return source
    .replace(/^(\s*public static function create\w+\(FlatBufferBuilder \$builder), , /gm, "$1, ")
    .replace(/^(\s*public static function create\w+\(FlatBufferBuilder \$builder), \)/gm, "$1)");
}

// flatc's PHP generator writes the file identifier in double quotes ("$OMM"),
// and PHP reads $OMM as a variable, so every identifier accessor returned ''
// and every finish*Buffer wrote an empty identifier. Single quotes keep it.
function fixPhpFileIdentifiers(source) {
  return source.replace(/"(\$[A-Za-z0-9_]{3})"/g, "'$1'");
}

// flatc's Java generator declares a ubyte union enum member above 127 as
// `byte X = 227;`, which javac rejects as a lossy conversion.
function fixJavaByteConstants(source) {
  return source.replace(
    /^(\s*public static final byte \w+ = )(1[2-9]\d|2[0-4]\d|25[0-5]);/gm,
    "$1(byte) $2;",
  );
}

// flatc's C# object API reads a union's type through `this.<NAME>Type` while
// the accessor under --preserve-case is `<NAME>_type`.
function fixCsharpUnionTypeAccessor(source) {
  const names = [...source.matchAll(/public \w+ (\w+)_type \{ get/g)].map((m) => m[1]);
  let fixed = source;
  for (const name of new Set(names)) {
    fixed = fixed.replace(new RegExp(`this\\.${name}Type\\b`, "g"), `this.${name}_type`);
  }
  return fixed;
}

// flatc's Swift verifier names the union key `VT.<NAME>Type` while the private
// VT declares `<NAME>_type`.
function fixSwiftUnionTypeKey(source) {
  const names = [...source.matchAll(/static let (\w+)_type: VOffset/g)].map((m) => m[1]);
  let fixed = source;
  for (const name of new Set(names)) {
    fixed = fixed.replace(new RegExp(`VT\\.${name}Type\\b`, "g"), `VT.${name}_type`);
  }
  return fixed;
}

// flatc's Python generator imports FlatbuffersEncryption relatively
// (`from .FlatbuffersEncryption import`), but the generated modules sit in a
// plain directory that users put on sys.path, with no package around them.
function fixPythonSiblingImport(source) {
  return source.replace(/^from \.FlatbuffersEncryption import/gm, "from FlatbuffersEncryption import");
}

// flatc's Kotlin generator: the file identifier "$OMM" is a string template
// (it throws at run time), and it lowers an all-caps field named after a hard
// keyword (OBJECT, CLASS, WHEN) to the bare keyword. Escape the template with
// \$ and the keyword with backticks. A small lexer keeps strings and comments
// out of the rewrite; the keyword statements flatc really emits (`when (kind)`,
// `class Name`, `companion object`) stay as they are.
const KOTLIN_HARD_KEYWORDS = new Set([
  "as", "break", "class", "continue", "do", "else", "false", "for", "fun", "if", "in", "interface", "is",
  "null", "object", "package", "return", "super", "this", "throw", "true", "try", "typealias", "typeof",
  "val", "var", "when", "while",
]);

function* lexKotlin(source) {
  let i = 0;
  const n = source.length;
  while (i < n) {
    const c = source[i];
    const start = i;
    let type = "other";
    if (/\s/.test(c)) {
      while (i < n && /\s/.test(source[i])) i += 1;
      type = "ws";
    } else if (c === "/" && source[i + 1] === "/") {
      while (i < n && source[i] !== "\n") i += 1;
      type = "comment";
    } else if (c === "/" && source[i + 1] === "*") {
      i += 2;
      let depth = 1;
      while (i < n && depth > 0) {
        if (source[i] === "/" && source[i + 1] === "*") { depth += 1; i += 2; }
        else if (source[i] === "*" && source[i + 1] === "/") { depth -= 1; i += 2; }
        else i += 1;
      }
      type = "comment";
    } else if (c === '"') {
      if (source.startsWith('"""', i)) {
        i += 3;
        while (i < n && !source.startsWith('"""', i)) i += 1;
        i += 3;
      } else {
        i += 1;
        while (i < n && source[i] !== '"') { if (source[i] === "\\") i += 1; i += 1; }
        i += 1;
      }
      type = "string";
    } else if (c === "'") {
      i += 1;
      while (i < n && source[i] !== "'") { if (source[i] === "\\") i += 1; i += 1; }
      i += 1;
      type = "char";
    } else if (c === "`") {
      i += 1;
      while (i < n && source[i] !== "`") i += 1;
      i += 1;
      type = "ident";
    } else if (/[A-Za-z_]/.test(c)) {
      while (i < n && /[A-Za-z0-9_]/.test(source[i])) i += 1;
      type = "ident";
    } else {
      i += 1;
    }
    yield { type, text: source.slice(start, i), start, end: i, escaped: c === "`" };
  }
}

function fixKotlin(source) {
  let fixed = source.replace(/"\$([A-Za-z0-9_]{3})"/g, '"\\$$$1"').replaceAll("-9223372036854775808L", "Long.MIN_VALUE");
  // An unsigned 32-bit default above Int.MAX_VALUE passed to addInt.
  fixed = fixed.replace(/(builder\.addInt\(\d+, [^,]+, )(\d{10,})\)/g, (all, lead, value) =>
    Number(value) > 2147483647 ? `${lead}${value}L.toInt())` : all);
  // A scalar field and the vector-length accessor of a vector can lower to the
  // same property name (IV_LENGTH and the length of IV): keep the exact-case field.
  const declared = (name) => new RegExp(`^    val ${name} : (?!Int\\n)`, "m").test(fixed);
  fixed = fixed.replace(
    /^    val (\w+) : Int\n        get\(\) \{\n            val o = __offset\(\d+\); return if \(o != 0\) __vector_len\(o\) else 0\n        \}\n/gm,
    (block, name) => (declared(name) ? "" : block),
  );

  const tokens = [...lexKotlin(fixed)];
  const sig = tokens.map((token, index) => ({ ...token, index })).filter((token) => token.type !== "ws" && token.type !== "comment");
  const used = new Set();
  sig.forEach((token, k) => {
    if (token.type !== "ident" || token.escaped || !KOTLIN_HARD_KEYWORDS.has(token.text)) return;
    const prev = sig[k - 1];
    const next = sig[k + 1];
    if (prev && prev.type === "ident" && ["val", "var", "fun"].includes(prev.text)) used.add(token.text);
    else if (prev && prev.type === "other" && (prev.text === "(" || prev.text === ",") && next && next.type === "other" && next.text === ":") used.add(token.text);
  });
  if (used.size === 0) return fixed;
  const atLineStart = (token) => {
    let p = token.start - 1;
    while (p >= 0 && (fixed[p] === " " || fixed[p] === "\t")) p -= 1;
    return p < 0 || fixed[p] === "\n";
  };
  const escapes = [];
  sig.forEach((token, k) => {
    if (token.type !== "ident" || token.escaped || !used.has(token.text)) return;
    const prev = sig[k - 1];
    const next = sig[k + 1];
    if (token.text === "object" && prev && prev.text === "companion") return;
    if (token.text === "class" && atLineStart(token) && next && next.type === "ident") return;
    if (token.text === "when" && next && next.type === "other" && (next.text === "{" || (next.text === "(" && atLineStart(token)))) return;
    escapes.push(token);
  });
  let out = "";
  let cursor = 0;
  for (const token of escapes) {
    out += `${fixed.slice(cursor, token.start)}\`${token.text}\``;
    cursor = token.end;
  }
  return out + fixed.slice(cursor);
}

// flatc names every included file main_generated.dart, so a Dart file imports
// its own './main_generated.dart' where it needs the standards it includes. It
// also emits an alias getter named like its element type (OEM's
// `ephemerisDataBlock`), which hides the type inside the class, two classes
// whose builders share a name (table CDM and table CDMObject both make
// CDMObjectBuilder), and a required struct member twice, once without
// `required` (a null-safety error).
function fixDart(source, includes) {
  const imports = includes.map((name) => `import '../${name}/main_generated.dart';`).join("\n");
  let fixed = source
    .replace(/^import '\.\/main_generated\.dart';\n/m, imports ? `${imports}\n` : "")
    .replace(/^[ \t]*List<(\w+)>\?? get \1 => [^\n]*\n/gm, "")
    .replace(/^[ \t]*(\w+)\?? get \1 => [^\n]*\n/gm, "");
  const aliasPairs = [];
  fixed = fixed.replace(/^(\s+)(\w+) ([A-Z][A-Z0-9_]*),\n\s+\2\? (\w+),\n/gm, (all, indent, type, upper, alias) => {
    aliasPairs.push([alias, upper]);
    return `${indent}required ${type} ${upper},\n`;
  });
  for (const [alias, upper] of aliasPairs) fixed = fixed.replaceAll(`${alias} ?? ${upper}`, upper);
  // Table CDM's ObjectBuilder and table CDMObject's plain builder are both
  // CDMObjectBuilder: keep the ObjectBuilder (other standards use it as a field
  // type) and rename the plain builder.
  const objectBuilders = new Set([...fixed.matchAll(/^class (\w+) extends fb\.ObjectBuilder \{$/gm)].map((m) => m[1]));
  return fixed.replace(/^class (\w+) \{\n[\s\S]*?\n\}\n/gm, (block, name) =>
    objectBuilders.has(name) ? block.replace(new RegExp(`\\b${name}\\b`, "g"), `${name}_`) : block);
}

// flatc's Lobster generator names the types of the standards a file includes
// without importing them; it spells a float default `1e-9`, which Lobster only
// reads after a decimal point; and it writes the 64-bit minimum as a literal
// Lobster reports as overflow.
function fixLobster(source, includes) {
  const imports = includes.map((name) => `import ${name}.main_generated`).join("\n");
  return source
    .replace(/^import flatbuffers\n/m, `import flatbuffers\n${imports ? `${imports}\n` : ""}`)
    .replaceAll("-9223372036854775808", "(-9223372036854775807 - 1)")
    .split("\n")
    .map((line) => (/^\s*\/\//.test(line) ? line : line.replace(/(?<![\w.])(\d+)e([-+]?\d+)\b/g, "$1.0e$2")))
    .join("\n");
}

// flatc names a C++ include guard after the file, and every standard's file
// is main.fbs, so every header shared FLATBUFFERS_GENERATED_MAIN_H_: a header
// that includes another (SKT -> PHB) skipped the included definitions, and no
// two standards compiled in one unit. Scope the guard by standard (the name
// downstream builds already used); --keep-prefix in datatypes.json keeps the
// include's relative path, so `#include "../PHB/main_generated.h"` resolves
// inside lib/cpp.
function scopeCppIncludeGuard(source, schemaName) {
  return source.replaceAll(
    "FLATBUFFERS_GENERATED_MAIN_H_",
    `FLATBUFFERS_GENERATED_SDS_${schemaName}_MAIN_H_`,
  );
}

async function writeOutputs(baseDir, outputs, datatype, schemaName, includes = []) {
  for (const [relativePath, source] of outputs.entries()) {
    const outputPath = path.join(baseDir, relativePath);
    let normalizedSource = source
      .replace(/[ \t]+$/gm, "")
      .replace(/\n+$/u, "\n");
    if (datatype?.ext === "go" && relativePath.endsWith(".go")) {
      normalizedSource = dedupeGoAccessors(normalizedSource, relativePath);
    }
    if (datatype?.ext === "cpp" && relativePath.endsWith(".h")) {
      normalizedSource = scopeCppIncludeGuard(
        dedupeCppEnumConstants(normalizedSource),
        schemaName,
      );
    }
    if (datatype?.ext === "sw" && relativePath.endsWith(".swift")) {
      normalizedSource = dedupeSwiftEnumStatics(normalizedSource);
    }
    if (datatype?.ext === "php" && relativePath.endsWith(".php")) {
      normalizedSource = fixPhpDeprecatedFirstField(
        fixPhpFloatConstants(normalizedSource),
      );
    }
    if (datatype?.ext === "php" && relativePath.endsWith(".php")) {
      normalizedSource = fixPhpFileIdentifiers(normalizedSource);
    }
    if (datatype?.ext === "java" && relativePath.endsWith(".java")) {
      normalizedSource = fixJavaByteConstants(normalizedSource);
    }
    if (datatype?.ext === "kt" && relativePath.endsWith(".kt")) {
      normalizedSource = fixKotlin(normalizedSource);
    }
    if (datatype?.ext === "cs" && relativePath.endsWith(".cs")) {
      normalizedSource = fixCsharpUnionTypeAccessor(normalizedSource);
    }
    if (datatype?.ext === "sw" && relativePath.endsWith(".swift")) {
      normalizedSource = fixSwiftUnionTypeKey(normalizedSource);
    }
    if (datatype?.ext === "py" && relativePath.endsWith(".py")) {
      normalizedSource = fixPythonSiblingImport(normalizedSource);
    }
    if (datatype?.ext === "dart" && relativePath.endsWith(".dart")) {
      normalizedSource = fixDart(normalizedSource, includes);
    }
    if (datatype?.ext === "lob" && relativePath.endsWith(".lobster")) {
      normalizedSource = fixLobster(normalizedSource, includes);
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
      const includes = (schemaInput.compilationUnits ?? [])
        .map((unit) => unit.split("/")[2])
        .filter((name) => name !== schemaName)
        .sort();
      await writeOutputs(outputDir, outputs, datatype, schemaName, includes);
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
