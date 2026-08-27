import { strict as assert } from "node:assert";
import { execFileSync, spawnSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const checker = join(repoRoot, "scripts", "check-release-integrity.mjs");

// Assembled at runtime: a test that contained literal marker lines would be
// caught by the very guard it tests.
const OPEN = "<".repeat(7);
const DIVIDER = "=".repeat(7);
const CLOSE = ">".repeat(7);

const conflicted = (ours, theirs) =>
  [`${OPEN} Updated upstream`, ours, DIVIDER, theirs, `${CLOSE} Stashed changes`].join("\n");

/** A throwaway git repo shaped like this one: schema/<CODE>/main.fbs + dist/manifest.json. */
function makeSandbox(codes = ["OMM", "CDM"], version = "1.0.0+1") {
  const root = mkdtempSync(join(tmpdir(), "sds-integrity-"));
  const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" });
  git("init", "--quiet", "--initial-branch=main");
  git("config", "user.email", "test@example.invalid");
  git("config", "user.name", "integrity test");
  git("config", "commit.gpgsign", "false");

  mkdirSync(join(root, "scripts"), { recursive: true });
  cpSync(checker, join(root, "scripts", "check-release-integrity.mjs"));

  const standards = {};
  for (const code of codes) {
    mkdirSync(join(root, "schema", code), { recursive: true });
    writeFileSync(
      join(root, "schema", code, "main.fbs"),
      `table ${code} { A:string; }\nroot_type ${code};\nfile_identifier "$${code}";\n`,
    );
    standards[code] = { IDL: `table ${code} {}`, files: [] };
  }

  mkdirSync(join(root, "dist"), { recursive: true });
  writeFileSync(join(root, "dist", "manifest.json"), JSON.stringify({ version, STANDARDS: standards }, null, 2));
  writeFileSync(join(root, "package.json"), JSON.stringify({ name: "sandbox", version }, null, 2));

  const commitAll = (message = "state") => {
    git("add", "-A");
    git("commit", "--quiet", "--no-verify", "-m", message);
  };
  commitAll("baseline");

  return { root, git, commitAll, write: (rel, body) => writeFileSync(join(root, rel), body) };
}

function runChecker(root, args) {
  const result = spawnSync(process.execPath, [join(root, "scripts", "check-release-integrity.mjs"), ...args], {
    cwd: root,
    encoding: "utf8",
    input: "",
  });
  return { status: result.status, out: `${result.stdout}${result.stderr}` };
}

describe("check-release-integrity", () => {
  const sandboxes = [];
  const sandbox = (...args) => {
    const made = makeSandbox(...args);
    sandboxes.push(made.root);
    return made;
  };
  after(function cleanup() {
    this.timeout(60000); // 11 throwaway git repos
    for (const root of sandboxes) rmSync(root, { recursive: true, force: true });
  });

  it("passes on a tree with no conflict blocks, valid JSON, and matching counts", () => {
    const { root } = sandbox();
    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 0, out);
    assert.match(out, /check-release-integrity: PASS/);
  });

  it("fails and names the file when a tracked file carries a conflict block", () => {
    const { root, write, commitAll } = sandbox();
    write("schema/OMM/main.fbs", `table OMM {\n${conflicted("  A:string;", "  A:int;")}\n}\n`);
    commitAll("poisoned");

    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 1, out);
    assert.match(out, /FAIL conflict-markers/);
    assert.match(out, /schema\/OMM\/main\.fbs:2/);
  });

  it("fails when a served JSON file does not parse — the 2026-08-27 outage signature", () => {
    const { root, write, commitAll } = sandbox();
    const manifest = JSON.stringify({ version: "1.0.0+1", STANDARDS: {} }, null, 2);
    write("dist/manifest.json", `{\n${conflicted('  "version": "a",', '  "version": "b",')}\n${manifest.slice(1)}`);
    commitAll("poisoned manifest");

    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 1, out);
    assert.match(out, /FAIL json-parse/);
    assert.match(out, /dist\/manifest\.json/);
  });

  it("fails when the manifest's STANDARDS keys are not exactly the schema/ codes", () => {
    const { root, write, commitAll } = sandbox(["OMM", "CDM"]);
    write(
      "dist/manifest.json",
      JSON.stringify({ version: "1.0.0+1", STANDARDS: { OMM: {}, GHOST: {} } }, null, 2),
    );
    commitAll("manifest drift");

    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 1, out);
    assert.match(out, /FAIL manifest-standards/);
    assert.match(out, /missing from manifest: CDM/);
    assert.match(out, /has no schema\/GHOST\/main\.fbs: GHOST/);
  });

  it("fails when dist/manifest.json version does not equal package.json version", () => {
    const { root, write, commitAll } = sandbox(["OMM"], "1.2.0+9");
    write("package.json", JSON.stringify({ name: "sandbox", version: "1.3.0+10" }, null, 2));
    commitAll("version drift");

    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 1, out);
    assert.match(out, /FAIL version-parity/);
    assert.match(out, /1\.3\.0\+10/);
    assert.match(out, /1\.2\.0\+9/);
  });

  it("does not treat tsconfig.json comments as invalid JSON", () => {
    const { root, write, commitAll } = sandbox();
    write("tsconfig.json", '{\n  // JSONC by the TypeScript spec\n  "compilerOptions": {}\n}\n');
    commitAll("tsconfig");

    const { status, out } = runChecker(root, ["--all"]);
    assert.equal(status, 0, out);
  });

  it("--staged judges only what is staged", () => {
    const { root, git, write } = sandbox();
    write("schema/OMM/main.fbs", `table OMM {\n${conflicted("  A:string;", "  A:int;")}\n}\n`);

    const unstaged = runChecker(root, ["--staged"]);
    assert.equal(unstaged.status, 0, unstaged.out);

    git("add", "schema/OMM/main.fbs");
    const staged = runChecker(root, ["--staged"]);
    assert.equal(staged.status, 1, staged.out);
    assert.match(staged.out, /FAIL conflict-markers/);
  });

  it("--range judges only the commits in that range", () => {
    const { root, git, write, commitAll } = sandbox();
    const base = git("rev-parse", "HEAD").trim();
    write("schema/CDM/main.fbs", `table CDM {\n${conflicted("  A:string;", "  A:int;")}\n}\n`);
    commitAll("poison");
    const head = git("rev-parse", "HEAD").trim();

    const dirty = runChecker(root, ["--range", `${base}..${head}`]);
    assert.equal(dirty.status, 1, dirty.out);

    const empty = runChecker(root, ["--range", `${head}..${head}`]);
    assert.equal(empty.status, 0, empty.out);
  });

  it("--rev judges a commit's tree without checking it out", () => {
    const { root, git, write, commitAll } = sandbox();
    const clean = git("rev-parse", "HEAD").trim();
    write("schema/OMM/main.fbs", `table OMM {\n${conflicted("  A:string;", "  A:int;")}\n}\n`);
    commitAll("poison");
    const poisoned = git("rev-parse", "HEAD").trim();

    assert.equal(runChecker(root, ["--rev", clean]).status, 0);
    const bad = runChecker(root, ["--rev", poisoned]);
    assert.equal(bad.status, 1, bad.out);
    assert.match(bad.out, /schema\/OMM\/main\.fbs/);
  });

  it("emits a machine-readable report for the gauntlet lane", () => {
    const { root } = sandbox();
    const { status, out } = runChecker(root, ["--all", "--json"]);
    assert.equal(status, 0, out);
    const report = JSON.parse(out);
    assert.equal(report.ok, true);
    assert.equal(report.mode, "all");
    assert.deepEqual(report.failures, []);
  });

  it("never flags itself: the guard source carries no literal marker line", () => {
    const { root } = sandbox();
    const clean = runChecker(root, ["--all"]);
    assert.equal(clean.status, 0, clean.out);
    assert.doesNotMatch(clean.out, /check-release-integrity\.mjs/);
  });
});
