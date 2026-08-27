#!/usr/bin/env node
/**
 * check-release-integrity.mjs — refuse to commit, push, or release a poisoned tree.
 *
 * Written after the 2026-08-27 Schema Registry outage: a merge committed
 * unresolved stash-pop conflict markers into 55 tracked files, including
 * dist/manifest.json and package.json. GitHub Pages served a manifest that was
 * not JSON, so the registry rendered nothing, and `npm ci` / `npm run build`
 * could not even parse package.json.
 *
 * Rules (all computable, all falsifiable):
 *   R1 conflict-markers  no candidate file contains an unresolved merge
 *                        conflict block (open line, then a bare divider line,
 *                        then a close line, in that order)
 *   R2 json-parse        every candidate *.json file parses as JSON
 *   R3 manifest-standards dist/manifest.json STANDARDS keys === the set of
 *                        schema/<CODE>/main.fbs directories, exactly
 *   R4 version-parity    dist/manifest.json .version === package.json .version
 *                        (generateArchives.py copies it verbatim, so this is
 *                        exact string equality, not a semver range)
 *
 * Modes (which files are candidates):
 *   --all            every tracked file          (release / deploy / CI gate)
 *   --staged         files staged for commit     (pre-commit hook)
 *   --range A..B     files touched by A..B       (pre-push hook)
 *   --rev COMMIT     every file in that commit's tree (judge without checkout)
 *   --pre-push       reads the git pre-push stdin protocol and derives ranges
 *
 * R3/R4 run whenever the candidate set can affect them (always under --all).
 *
 * Exit code 0 = clean, 1 = at least one rule failed, 2 = the check itself
 * could not run. Never "skip" a rule silently.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Built at runtime so this file never contains a literal marker line and can
// never flag itself.
const OPEN = "<".repeat(7);
const DIVIDER = "=".repeat(7);
const CLOSE = ">".repeat(7);
const OPEN_LINE = new RegExp(`^${OPEN} `);
const DIVIDER_LINE = new RegExp(`^${DIVIDER}$`);
const CLOSE_LINE = new RegExp(`^${CLOSE} `);

let repoRoot = process.cwd();

function git(args, { allowFail = false } = {}) {
  try {
    return execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 512 * 1024 * 1024,
    });
  } catch (error) {
    if (allowFail) return typeof error.stdout === "string" ? error.stdout : "";
    throw error;
  }
}

const splitZ = (out) => out.split("\0").filter(Boolean);
const splitLines = (out) => out.split("\n").filter(Boolean);

/**
 * When set, every read resolves against that commit's tree instead of the
 * working tree, so any commit can be judged without checking it out (this repo
 * is ~43k tracked files; a checkout costs minutes).
 */
let reviewRev = null;

/** Read a candidate path: working tree first, then index, then HEAD. */
function readCandidate(path) {
  if (reviewRev) {
    try {
      return execFileSync("git", ["show", `${reviewRev}:${path}`], {
        cwd: repoRoot,
        encoding: "utf8",
        maxBuffer: 256 * 1024 * 1024,
      });
    } catch {
      return null;
    }
  }
  const absolute = resolve(repoRoot, path);
  if (existsSync(absolute)) {
    try {
      return readFileSync(absolute, "utf8");
    } catch {
      /* fall through to git object read */
    }
  }
  for (const spec of [`:${path}`, `HEAD:${path}`]) {
    try {
      return execFileSync("git", ["show", spec], {
        cwd: repoRoot,
        encoding: "utf8",
        maxBuffer: 256 * 1024 * 1024,
      });
    } catch {
      /* try the next source */
    }
  }
  return null;
}

function parseArgs(argv) {
  const options = { mode: "all", range: null, rev: null, json: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--all") options.mode = "all";
    else if (arg === "--staged") options.mode = "staged";
    else if (arg === "--pre-push") options.mode = "pre-push";
    else if (arg === "--rev") {
      options.mode = "rev";
      options.rev = argv[++i];
    } else if (arg === "--range") {
      options.mode = "range";
      options.range = argv[++i];
    } else if (arg === "--json") options.json = true;
    else if (arg === "--help" || arg === "-h") options.help = true;
    else {
      console.error(`check-release-integrity: unknown argument ${arg}`);
      process.exit(2);
    }
  }
  return options;
}

function readStdinSync() {
  try {
    return readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

const ZERO = "0".repeat(40);

/**
 * git pre-push stdin: "<local ref> <local sha> <remote ref> <remote sha>".
 * Returns the files touched by everything being pushed. A brand-new branch
 * (remote sha all zeros) is diffed against the remote default tip when one is
 * known, so a first push cannot smuggle a poisoned file in.
 */
function prePushCandidates() {
  const lines = splitLines(readStdinSync());
  if (lines.length === 0) return { files: [], describedAs: "nothing to push" };
  const files = new Set();
  const described = [];
  for (const line of lines) {
    const [, localSha, , remoteSha] = line.trim().split(/\s+/);
    if (!localSha || localSha === ZERO) continue; // branch deletion
    let base = remoteSha && remoteSha !== ZERO ? remoteSha : null;
    if (!base) {
      for (const candidate of ["origin/main", "origin/HEAD", "main"]) {
        const merged = git(["merge-base", candidate, localSha], { allowFail: true }).trim();
        if (merged) {
          base = merged;
          break;
        }
      }
    }
    const range = base ? `${base}..${localSha}` : null;
    described.push(range ?? `${localSha} (no base — full tree)`);
    if (!range) return { files: null, describedAs: described.join(", ") };
    for (const file of diffFiles(range)) files.add(file);
  }
  return { files: [...files], describedAs: described.join(", ") };
}

function diffFiles(range) {
  return splitZ(git(["diff", "--name-only", "--diff-filter=ACMR", "-z", range], { allowFail: true }));
}

function collectCandidates(options) {
  if (options.mode === "rev") {
    if (!options.rev) {
      console.error("check-release-integrity: --rev needs a commit-ish");
      process.exit(2);
    }
    return {
      files: splitZ(git(["ls-tree", "-r", "--name-only", "-z", options.rev])),
      scope: `tree of ${options.rev}`,
    };
  }
  if (options.mode === "all") {
    return { files: splitZ(git(["ls-files", "-z"])), scope: "every tracked file" };
  }
  if (options.mode === "staged") {
    return {
      files: splitZ(git(["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"])),
      scope: "staged for commit",
    };
  }
  if (options.mode === "range") {
    if (!options.range) {
      console.error("check-release-integrity: --range needs A..B");
      process.exit(2);
    }
    return { files: diffFiles(options.range), scope: `range ${options.range}` };
  }
  const { files, describedAs } = prePushCandidates();
  if (files === null) {
    return { files: splitZ(git(["ls-files", "-z"])), scope: `pre-push ${describedAs}` };
  }
  return { files, scope: `pre-push ${describedAs}` };
}

/**
 * Cheap prefilter: one git grep over the working tree and one over the index,
 * so a sparse checkout (files present only as index blobs) is still covered.
 * Only the handful of hits are read and line-order verified.
 */
function markerSuspects() {
  const suspects = new Set();
  if (reviewRev) {
    const out = git(["grep", "-I", "-l", "-E", "-e", `^${OPEN} `, reviewRev], { allowFail: true });
    const prefix = `${reviewRev}:`;
    for (const line of splitLines(out)) {
      suspects.add(line.startsWith(prefix) ? line.slice(prefix.length) : line);
    }
    return suspects;
  }
  for (const extra of [[], ["--cached"]]) {
    const out = git(["grep", "-I", "-l", "-E", ...extra, "-e", `^${OPEN} `], { allowFail: true });
    for (const file of splitLines(out)) suspects.add(file);
  }
  return suspects;
}

function findConflictBlock(content) {
  const lines = content.split("\n");
  let openAt = -1;
  let dividerAt = -1;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (OPEN_LINE.test(line)) {
      openAt = i;
      dividerAt = -1;
    } else if (openAt >= 0 && DIVIDER_LINE.test(line)) {
      dividerAt = i;
    } else if (openAt >= 0 && dividerAt >= 0 && CLOSE_LINE.test(line)) {
      return { openLine: openAt + 1, dividerLine: dividerAt + 1, closeLine: i + 1 };
    }
  }
  return null;
}

function checkConflictMarkers(candidates, failures) {
  const suspects = markerSuspects();
  const hits = [];
  for (const file of candidates) {
    if (!suspects.has(file)) continue;
    const content = readCandidate(file);
    if (content === null) continue;
    const block = findConflictBlock(content);
    if (block) hits.push({ file, ...block });
  }
  if (hits.length > 0) {
    failures.push({
      rule: "conflict-markers",
      detail: `${hits.length} tracked file(s) carry an unresolved merge conflict block`,
      offenders: hits.map((hit) => `${hit.file}:${hit.openLine}`),
    });
  }
  return hits;
}

// tsconfig/jsconfig are JSONC by TypeScript's own spec (comments are legal), so
// they are not strict-JSON candidates. Everything else tracked as .json is.
const JSONC_BASENAME = /^[tj]sconfig(\..+)?\.json$/;

function isStrictJson(file) {
  if (!file.endsWith(".json")) return false;
  if (file.includes("node_modules/")) return false;
  return !JSONC_BASENAME.test(file.split("/").pop());
}

function checkJsonParse(candidates, failures) {
  const bad = [];
  for (const file of candidates) {
    if (!isStrictJson(file)) continue;
    const content = readCandidate(file);
    if (content === null) continue;
    try {
      JSON.parse(content);
    } catch (error) {
      bad.push(`${file} — ${error.message}`);
    }
  }
  if (bad.length > 0) {
    failures.push({
      rule: "json-parse",
      detail: `${bad.length} JSON file(s) do not parse — a served file that is not JSON is an outage`,
      offenders: bad,
    });
  }
  return bad;
}

function readJsonCandidate(file) {
  const content = readCandidate(file);
  if (content === null) return { ok: false, reason: `${file} is missing` };
  try {
    return { ok: true, value: JSON.parse(content) };
  } catch (error) {
    return { ok: false, reason: `${file} does not parse: ${error.message}` };
  }
}

const SCHEMA_MAIN = /^schema\/([^/]+)\/main\.fbs$/;

function schemaStandardCodes() {
  // ls-tree pathspecs do not glob the way ls-files does, so in --rev mode the
  // whole tree is listed and filtered here.
  const tracked = reviewRev
    ? splitZ(git(["ls-tree", "-r", "--name-only", "-z", reviewRev]))
    : splitZ(git(["ls-files", "-z", "schema/*/main.fbs"]));
  const codes = new Set();
  for (const path of tracked) {
    const match = SCHEMA_MAIN.exec(path);
    if (match) codes.add(match[1]);
  }
  return codes;
}

function checkManifest(failures, notes) {
  const manifest = readJsonCandidate("dist/manifest.json");
  const pkg = readJsonCandidate("package.json");
  if (!manifest.ok) {
    failures.push({ rule: "manifest-standards", detail: manifest.reason, offenders: [] });
    if (!pkg.ok) failures.push({ rule: "version-parity", detail: pkg.reason, offenders: [] });
    return;
  }

  const standards = manifest.value.STANDARDS ?? {};
  const manifestCodes = new Set(Object.keys(standards));
  const schemaCodes = schemaStandardCodes();
  const missing = [...schemaCodes].filter((code) => !manifestCodes.has(code)).sort();
  const extra = [...manifestCodes].filter((code) => !schemaCodes.has(code)).sort();
  if (missing.length > 0 || extra.length > 0) {
    failures.push({
      rule: "manifest-standards",
      detail: `dist/manifest.json STANDARDS=${manifestCodes.size} vs schema/*/main.fbs=${schemaCodes.size}`,
      offenders: [
        ...missing.map((code) => `missing from manifest: ${code}`),
        ...extra.map((code) => `in manifest but has no schema/${code}/main.fbs: ${code}`),
      ],
    });
  } else {
    notes.push(`manifest-standards OK: ${manifestCodes.size} standards, key sets identical`);
  }

  if (!pkg.ok) {
    failures.push({ rule: "version-parity", detail: pkg.reason, offenders: [] });
    return;
  }
  const manifestVersion = manifest.value.version;
  const packageVersion = pkg.value.version;
  if (manifestVersion !== packageVersion) {
    failures.push({
      rule: "version-parity",
      detail: "dist/manifest.json is not the manifest this package version builds",
      offenders: [
        `package.json      ${packageVersion}`,
        `dist/manifest.json ${manifestVersion}`,
        "generateArchives.py copies package.json .version verbatim — rerun the build before deploying",
      ],
    });
  } else {
    notes.push(`version-parity OK: ${packageVersion}`);
  }
}

function manifestIsRelevant(mode, candidates) {
  if (mode === "all" || mode === "rev") return true;
  return candidates.some(
    (file) =>
      file === "dist/manifest.json" ||
      file === "package.json" ||
      SCHEMA_MAIN.test(file),
  );
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log(
      "usage: check-release-integrity.mjs [--all | --staged | --range A..B | --rev COMMIT | --pre-push] [--json]",
    );
    process.exit(0);
  }

  try {
    repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
  } catch {
    console.error("check-release-integrity: not inside a git checkout");
    process.exit(2);
  }

  if (options.mode === "rev") reviewRev = options.rev;

  const { files: candidates, scope } = collectCandidates(options);
  const failures = [];
  const notes = [];

  checkConflictMarkers(candidates, failures);
  checkJsonParse(candidates, failures);
  if (manifestIsRelevant(options.mode, candidates)) checkManifest(failures, notes);

  const report = {
    mode: options.mode,
    scope,
    candidates: candidates.length,
    ok: failures.length === 0,
    failures,
    notes,
  };

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`check-release-integrity: mode=${options.mode} (${scope}) candidates=${candidates.length}`);
    for (const note of notes) console.log(`  ok   ${note}`);
    for (const failure of failures) {
      console.error(`  FAIL ${failure.rule}: ${failure.detail}`);
      for (const offender of failure.offenders.slice(0, 60)) console.error(`         ${offender}`);
      if (failure.offenders.length > 60) {
        console.error(`         ... and ${failure.offenders.length - 60} more`);
      }
    }
    if (failures.length === 0) {
      console.log("check-release-integrity: PASS");
    } else {
      console.error(
        `check-release-integrity: FAIL (${failures.length} rule(s): ${failures.map((f) => f.rule).join(", ")})`,
      );
      console.error(
        "  This tree must not be committed, pushed, or deployed. Resolve the conflict, rerun the build, then rerun this check.",
      );
    }
  }

  process.exit(failures.length === 0 ? 0 : 1);
}

main();
