#!/usr/bin/env node
// License check for Space Data Standards.
//
//   node scripts/license-check.mjs             the repository must pass; registry gaps are listed
//   node scripts/license-check.mjs --strict    registry and lib/ gaps fail the run too
//   node scripts/license-check.mjs --offline   skip the registry audit
//
// Repository checks (a FAIL exits 1):
//   LICENSE     the canonical Apache License 2.0 text, byte for byte (the text GitHub detects)
//   NOTICE      opens with the copyright line, names no retired holder, and every third-party
//               row points at files that exist; every vendored directory, license file and
//               foreign license header in the tree has a row
//   manifests   license and author in package.json, composer.json, and in the generators of the
//               Cargo, Dart and Python manifests; the publish workflow ships the canonical LICENSE
//   website     the footer in the source and in the build reads Apache-2.0 and Edgesource Corporation
//
// Audit (network; a GAP exits 1 only with --strict): GitHub, the live site, npm, crates.io,
// pub.dev, Go, PyPI, Packagist, NuGet and Maven Central, plus the license metadata inside lib/.
// Published registry versions are immutable, so a gap that the sources above already fix closes
// at the next publish.

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gunzipSync } from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
const STRICT = args.has("--strict");
const OFFLINE = args.has("--offline");

const APACHE_SHA256 = "cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30";
const APACHE_BYTES = 11358;
const COPYRIGHT_LINE = "Copyright 2026 Edgesource Corporation";
const RETIRED_HOLDER = /digital\s*arsenal|digitalarsenal\.io/i;
const UA = "spacedatanetwork-stack-ci (+https://github.com/DigitalArsenal)";
const GITHUB_REPO = "DigitalArsenal/spacedatastandards.org";
const GO_MODULE = "github.com/DigitalArsenal/spacedatastandards.org/lib/go";
const LIB_OWNER = "sds-binding-codegen-fixes-20261025";

const failures = [];
const gaps = [];
const pass = (message) => console.log(`PASS  ${message}`);
const note = (message) => console.log(`NOTE  ${message}`);
const fail = (message) => {
  failures.push(message);
  console.log(`FAIL  ${message}`);
};
const gap = (message, owner = "") => {
  gaps.push(message);
  console.log(`GAP   ${owner ? `[${owner}] ` : ""}${message}`);
};
const check = (condition, passMessage, failMessage) => (condition ? pass(passMessage) : fail(failMessage));

const read = (relative) => readFileSync(path.join(root, relative), "utf8");
const readJson = (relative) => JSON.parse(read(relative));
const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");

function git(...gitArgs) {
  return execFileSync("git", ["-C", root, ...gitArgs], { encoding: "utf8", maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] });
}
const tracked = git("ls-files", "-z").split("\0").filter(Boolean);
const trackedSet = new Set(tracked);
const isTracked = (relative) => trackedSet.has(relative);
const under = (relative, directory) => relative.startsWith(directory);
const generated = (relative) => under(relative, "lib/") || under(relative, "dist/");

// ---------------------------------------------------------------- LICENSE
const licenseBytes = existsSync(path.join(root, "LICENSE")) ? readFileSync(path.join(root, "LICENSE")) : null;
const licenseCanonical = licenseBytes !== null && sha256(licenseBytes) === APACHE_SHA256 && licenseBytes.length === APACHE_BYTES;
check(licenseBytes !== null && isTracked("LICENSE"), "LICENSE is tracked at the repository root", "LICENSE is missing from the repository root");
if (licenseBytes) {
  check(
    licenseCanonical,
    `LICENSE is the canonical Apache License 2.0 text (${APACHE_BYTES} bytes, sha256 ${APACHE_SHA256.slice(0, 8)}...)`,
    "LICENSE is not the canonical Apache License 2.0 text; GitHub detects the license from the unmodified text",
  );
}

// ----------------------------------------------------------------- NOTICE
const noticeText = existsSync(path.join(root, "NOTICE")) ? read("NOTICE") : null;
check(noticeText !== null && isTracked("NOTICE"), "NOTICE is tracked at the repository root", "NOTICE is missing from the repository root");

const rows = [];
const licenseRefs = new Set();
const rowCovers = (row, file) => row.paths.some((entry) => (entry.endsWith("/") ? under(file, entry) : file === entry));
const covered = (file) => rows.some((row) => rowCovers(row, file));

if (noticeText) {
  const lines = noticeText.split("\n");
  check(lines[0].includes(COPYRIGHT_LINE), `NOTICE line 1 carries "${COPYRIGHT_LINE}"`, `NOTICE line 1 must carry "${COPYRIGHT_LINE}"`);
  check(!RETIRED_HOLDER.test(noticeText), "NOTICE names no retired holder", "NOTICE names a retired holder (Digital Arsenal)");
  for (const heading of ["THIRD-PARTY COMPONENTS", "LicenseRef identifiers", "NOTICES REPRODUCED HERE"]) {
    check(lines.includes(heading), `NOTICE has the "${heading}" section`, `NOTICE is missing the "${heading}" section`);
  }
  check(
    /Licensed under the Apache License, Version 2\.0/.test(noticeText) && /LICENSE-2\.0/.test(noticeText),
    "NOTICE states the Apache License 2.0 grant",
    "NOTICE does not state the Apache License 2.0 grant",
  );

  for (const match of noticeText.matchAll(/^- (LicenseRef-[A-Za-z0-9.-]+):/gm)) licenseRefs.add(match[1]);

  const header = lines.findIndex((line) => line.startsWith("| Path | Component | License | License text |"));
  if (header < 0) fail("NOTICE has no third-party table");
  else {
    for (let index = header + 2; index < lines.length && lines[index].startsWith("|"); index += 1) {
      const cells = lines[index].slice(1, -1).split("|").map((cell) => cell.trim());
      if (cells.length !== 4) fail(`NOTICE table row ${index + 1} has ${cells.length} cells, not 4`);
      else rows.push({ line: index + 1, paths: cells[0].split(", "), component: cells[1], license: cells[2], texts: cells[3].split(", ") });
    }
    check(rows.length > 0, `NOTICE lists ${rows.length} third-party rows`, "NOTICE third-party table has no rows");
  }

  // The terms a row's license needs inside the notices reproduced at the end of NOTICE.
  const reproduced = noticeText.slice(noticeText.indexOf("NOTICES REPRODUCED HERE"));
  const reproducedTerms = [
    ["MIT", /Permission is hereby granted, free of charge/],
    ["Zlib", /This software is provided 'as-is'/],
    ["LLVM-exception", /LLVM Exception/],
  ];

  for (const row of rows) {
    const where = `NOTICE row ${row.line} (${row.paths[0]}${row.paths.length > 1 ? ` and ${row.paths.length - 1} more` : ""})`;
    const problems = [];
    for (const entry of row.paths) {
      const present = entry.endsWith("/") ? tracked.some((file) => under(file, entry)) : isTracked(entry);
      if (!present) problems.push(`${entry} is not a tracked file or directory`);
    }
    for (const ref of row.license.match(/LicenseRef-[A-Za-z0-9.-]+/g) ?? []) {
      if (!licenseRefs.has(ref)) problems.push(`${ref} is not defined in "LicenseRef identifiers"`);
    }
    const hasRef = /LicenseRef-/.test(row.license);
    if (!hasRef && !/\b(Apache-2\.0|MIT|Zlib|BSD-[0-9]-Clause|ISC)\b/.test(row.license)) {
      problems.push(`license "${row.license}" is neither an SPDX identifier nor a LicenseRef`);
    }
    for (const text of row.texts) {
      if (text === "none in tree") {
        if (!hasRef) problems.push('"none in tree" requires a LicenseRef-* license');
      } else if (text === "NOTICE") {
        for (const [id, terms] of reproducedTerms) {
          if (row.license.includes(id) && !terms.test(reproduced)) problems.push(`NOTICE reproduces no ${id} terms`);
        }
      } else if (text === "LICENSE") {
        if (!licenseCanonical) problems.push("LICENSE is not canonical");
      } else if (!isTracked(text)) {
        problems.push(`license text ${text} is not a tracked file`);
      } else {
        const body = read(text).slice(0, 20000);
        const carries = /Apache-2\.0/.test(row.license) ? /Apache License|apache\.org\/licenses/ : /MIT/.test(row.license) ? /Permission is hereby granted/ : /./;
        if (!carries.test(body)) problems.push(`${text} does not carry the ${row.license} terms`);
      }
    }
    if (problems.length === 0) pass(`${where}: ${row.license}`);
    else for (const problem of problems) fail(`${where}: ${problem}`);
  }

  // Everything vendored has a row: vendor-like directories, license files, foreign license headers.
  const vendorLike = tracked.filter((file) => !generated(file) && file.split("/").some((part) => ["vendor", "third_party", "third-party", "deps", "external"].includes(part)));
  const uncoveredVendor = vendorLike.filter((file) => !covered(file));
  check(uncoveredVendor.length === 0, `every vendor-like directory has a NOTICE row (${vendorLike.length} files)`, `vendored files without a NOTICE row: ${uncoveredVendor.slice(0, 5).join(", ")}`);

  const licenseFiles = tracked.filter((file) => !generated(file) && /(^|\/)(licen[sc]e|copying|notice)(\.(md|txt|markdown|rst)|-[A-Za-z0-9._-]+\.(md|txt))?$/i.test(file) && file !== "LICENSE" && file !== "NOTICE");
  const uncoveredLicenseFiles = licenseFiles.filter((file) => !covered(file));
  check(uncoveredLicenseFiles.length === 0, `every other license file has a NOTICE row (${licenseFiles.length} files)`, `license files without a NOTICE row: ${uncoveredLicenseFiles.join(", ")}`);

  // A file that carries a license or copyright header of someone else needs a row. Lines naming
  // Edgesource Corporation are this project's own headers.
  let headerLines = [];
  try {
    headerLines = git(
      "grep", "-n", "-I", "-i", "-E",
      "licensed under the apache license|permission is hereby granted|spdx-license-identifier|copyright (\\(c\\) |©)?[0-9]{4} [a-z]",
      "--", ".", ":(exclude)*package-lock.json",
    ).split("\n").filter(Boolean);
  } catch (error) {
    if (error.status !== 1) throw error; // git grep exits 1 when nothing matches
  }
  const documentation = new Set(["LICENSE", "lib/go/LICENSE", "NOTICE", "README.md", "CONTRIBUTING.md", "DEPLOY.md", ".github/workflows/publish.yml", "scripts/license-check.mjs"]);
  const headerFiles = new Set(headerLines.filter((line) => !/Edgesource Corporation/.test(line)).map((line) => line.split(":")[0]));
  const foreign = [...headerFiles].filter((file) => !documentation.has(file) && !covered(file));
  check(foreign.length === 0, `every file with a foreign license header has a NOTICE row (${headerFiles.size} files carry one)`, `files with a license header and no NOTICE row: ${foreign.slice(0, 6).join(", ")}`);
}

// -------------------------------------------------------------- manifests
const manifests = tracked.filter((file) => !generated(file) && /(^|\/)package\.json$/.test(file));
for (const file of manifests) {
  const manifest = readJson(file);
  if (/UNLICENSED|SEE LICENSE IN/i.test(String(manifest.license ?? ""))) fail(`${file}: license "${manifest.license}" is not an SPDX identifier`);
  else if (manifest.license === "Apache-2.0") pass(`${file}: license Apache-2.0`);
  else if (covered(file)) pass(`${file}: license ${manifest.license} is listed in NOTICE`);
  else if (manifest.private === true && manifest.license === undefined) note(`${file}: private package without a license field`);
  else fail(`${file}: license ${JSON.stringify(manifest.license)} is neither Apache-2.0 nor listed in NOTICE`);
}

const rootPackage = readJson("package.json");
const retiredIn = (value) => RETIRED_HOLDER.test(typeof value === "string" ? value : JSON.stringify(value ?? ""));
check(/Edgesource Corporation/.test(String(rootPackage.author)) && !retiredIn(rootPackage.author), "package.json: author is Edgesource Corporation", `package.json: author ${JSON.stringify(rootPackage.author)} must be Edgesource Corporation`);
check(["LICENSE", "NOTICE"].every((name) => (rootPackage.files ?? []).includes(name)), "package.json: files ships LICENSE and NOTICE", "package.json: files must list LICENSE and NOTICE");

const composer = readJson("composer.json");
check(composer.license === "Apache-2.0", "composer.json: license Apache-2.0", `composer.json: license is ${JSON.stringify(composer.license)}`);
check(
  (composer.authors ?? []).length > 0 && composer.authors.every((author) => /Edgesource Corporation/.test(author.name ?? "") && !retiredIn(author)),
  "composer.json: authors are Edgesource Corporation",
  "composer.json: every author must be Edgesource Corporation",
);

const explorer = readJson("packages/standards-explorer/package.json");
check(/Edgesource Corporation/.test(String(explorer.author)) && !retiredIn(explorer.author), "packages/standards-explorer/package.json: author is Edgesource Corporation", `packages/standards-explorer/package.json: author ${JSON.stringify(explorer.author)} must be Edgesource Corporation`);

const cargoGenerator = read("scripts/generateCargoPackage.js");
check(/license = "Apache-2\.0"/.test(cargoGenerator), "generateCargoPackage.js: crate license Apache-2.0", "generateCargoPackage.js: the crate license must be Apache-2.0");
const cargoAuthors = cargoGenerator.match(/^authors = \[(.*)\]$/m)?.[1] ?? "";
check(/Edgesource Corporation/.test(cargoAuthors) && !retiredIn(cargoAuthors), "generateCargoPackage.js: crate authors name Edgesource Corporation", "generateCargoPackage.js: crate authors must name Edgesource Corporation and not the retired address");
check(/copyFileSync\([^)]*"LICENSE"/.test(cargoGenerator) && /copyFileSync\([^)]*"NOTICE"/.test(cargoGenerator), "generateCargoPackage.js: the crate ships LICENSE and NOTICE", "generateCargoPackage.js: the crate must ship LICENSE and NOTICE");

const workflow = read(".github/workflows/publish.yml");
check(/license = \{text = "Apache-2\.0"\}/.test(workflow), "publish.yml: Python license Apache-2.0", "publish.yml: the Python license must be Apache-2.0");
const pyAuthors = workflow.match(/authors = \[\s*([^\]]*)\]/)?.[1] ?? "";
check(/Edgesource Corporation/.test(pyAuthors) && !retiredIn(pyAuthors), "publish.yml: Python authors name Edgesource Corporation", "publish.yml: Python authors must name Edgesource Corporation and not the retired address");
check(/cp LICENSE NOTICE lib\/py\//.test(workflow), "publish.yml: the Python package ships LICENSE and NOTICE", "publish.yml: the Python package must ship LICENSE and NOTICE");
check(/cp LICENSE NOTICE lib\/dart\//.test(workflow) && !/cat > lib\/dart\/LICENSE/.test(workflow), "publish.yml: the Dart package ships the canonical LICENSE and NOTICE", "publish.yml: the Dart package must copy the canonical LICENSE and NOTICE, not an inline text");
check(/<name>Apache License, Version 2\.0<\/name>/.test(workflow), "publish.yml: Maven pom declares Apache License 2.0", "publish.yml: the Maven pom must declare Apache License 2.0");

// ---------------------------------------------------------------- website
check(/Apache-2\.0 License &middot; &copy; Edgesource Corporation/.test(read("website/src/App.svelte")), "website/src/App.svelte: footer reads Apache-2.0 License and Edgesource Corporation", "website/src/App.svelte: the footer must read Apache-2.0 License and Edgesource Corporation");
check(read("index.html").includes("Apache-2.0 License · © Edgesource Corporation"), "index.html: built footer reads Apache-2.0 License and Edgesource Corporation", "index.html: the built footer must read Apache-2.0 License and Edgesource Corporation");
const readme = read("README.md");
check(/Apache License, Version 2\.0/.test(readme) && /\bLICENSE\b/.test(readme) && /\bNOTICE\b/.test(readme), "README.md: license section points to LICENSE and NOTICE", "README.md: the license section must point to LICENSE and NOTICE");

// -------------------------------------------------- lib/ license metadata
// lib/ is generated by the binding build; the binding-codegen task owns it.
if (isTracked("lib/go/go.mod")) {
  if (isTracked("lib/go/LICENSE")) {
    check(sha256(readFileSync(path.join(root, "lib/go/LICENSE"))) === APACHE_SHA256, "lib/go/LICENSE is committed and canonical (the Go module ships its own license file)", "lib/go/LICENSE is not the canonical Apache License 2.0 text");
  }
  else gap("lib/go has no LICENSE; the Go module is served from lib/go, so pkg.go.dev shows no redistributable license", LIB_OWNER);
}
if (isTracked("lib/js/package.json")) {
  const libJs = readJson("lib/js/package.json");
  if (libJs.license === "Apache-2.0") pass("lib/js/package.json: license Apache-2.0");
  else gap(`lib/js/package.json (${libJs.name}) declares license ${JSON.stringify(libJs.license)}, not Apache-2.0`, LIB_OWNER);
}

// -------------------------------------------------------- registry audit
async function request(url, { range, headers = {}, binary = false } = {}) {
  const init = { redirect: "follow", signal: AbortSignal.timeout(90000), headers: { "User-Agent": UA, ...headers } };
  if (range) init.headers.Range = range;
  const response = await fetch(url, init);
  const body = response.status === 404 ? null : binary ? Buffer.from(await response.arrayBuffer()) : await response.text();
  return { status: response.status, headers: response.headers, body };
}
async function getJson(url, options) {
  const result = await request(url, options);
  if (result.status === 404) return { status: 404 };
  if (result.status >= 400) throw new Error(`HTTP ${result.status} from ${new URL(url).host}`);
  return { status: result.status, json: JSON.parse(result.body) };
}

function cString(buffer, start, length) {
  const slice = buffer.subarray(start, start + length);
  const end = slice.indexOf(0);
  return slice.subarray(0, end < 0 ? slice.length : end).toString("utf8");
}
function tarEntries(buffer) {
  const entries = [];
  let offset = 0;
  let pendingName = null;
  while (offset + 512 <= buffer.length) {
    const header = buffer.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) break;
    const type = String.fromCharCode(header[156] || 48);
    const size = parseInt(cString(header, 124, 12).trim() || "0", 8);
    const body = buffer.subarray(offset + 512, offset + 512 + size);
    let name = cString(header, 0, 100);
    const prefix = cString(header, 345, 155);
    if (prefix) name = `${prefix}/${name}`;
    if (type === "L") pendingName = body.toString("utf8").replace(/\0.*$/, "");
    else if (type === "x") {
      const pax = body.toString("utf8").match(/ path=([^\n]*)\n/);
      if (pax) pendingName = pax[1];
    } else {
      entries.push({ name: pendingName ?? name, type, body });
      pendingName = null;
    }
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  return entries;
}

// File names of a zip served over HTTP, read from its central directory with range requests.
async function zipNames(url) {
  const tail = await request(url, { range: "bytes=-1048576", binary: true });
  if (tail.status !== 206 && tail.status !== 200) throw new Error(`zip tail answered HTTP ${tail.status}`);
  const buffer = tail.body;
  const total = tail.status === 206 ? Number(tail.headers.get("content-range").split("/")[1]) : buffer.length;
  let eocd = -1;
  for (let index = buffer.length - 22; index >= 0; index -= 1) {
    if (buffer.readUInt32LE(index) === 0x06054b50) {
      eocd = index;
      break;
    }
  }
  if (eocd < 0) throw new Error("zip end of central directory not found");
  const directorySize = buffer.readUInt32LE(eocd + 12);
  const directoryOffset = buffer.readUInt32LE(eocd + 16);
  if (directoryOffset === 0xffffffff) throw new Error("zip64 archives are not supported");
  const tailStart = total - buffer.length;
  let directory;
  if (directoryOffset >= tailStart) directory = buffer.subarray(directoryOffset - tailStart, directoryOffset - tailStart + directorySize);
  else directory = (await request(url, { range: `bytes=${directoryOffset}-${directoryOffset + directorySize - 1}`, binary: true })).body;
  const names = [];
  for (let offset = 0; offset + 46 <= directory.length && directory.readUInt32LE(offset) === 0x02014b50; ) {
    const nameLength = directory.readUInt16LE(offset + 28);
    const extraLength = directory.readUInt16LE(offset + 30);
    const commentLength = directory.readUInt16LE(offset + 32);
    names.push(directory.subarray(offset + 46, offset + 46 + nameLength).toString("utf8"));
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return names;
}

async function audit(label, run) {
  try {
    await run();
  } catch (error) {
    gap(`${label}: could not be read (${error.message})`);
  }
}

async function registryAudit() {
  console.log("\nAUDIT registries and site (network)");

  await audit("GitHub", async () => {
    const headers = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const { json } = await getJson(`https://api.github.com/repos/${GITHUB_REPO}`, { headers });
    if (json.license?.spdx_id === "Apache-2.0") pass("GitHub: detects Apache-2.0");
    else gap(`GitHub: detects license ${JSON.stringify(json.license?.spdx_id ?? null)}; the canonical LICENSE must be on the default branch (detection follows a push within minutes)`);
  });

  await audit("site", async () => {
    const { body } = await request("https://spacedatastandards.org/");
    if (body.includes("Apache-2.0 License") && body.includes("Edgesource Corporation")) pass("site: the live spacedatastandards.org footer reads Apache-2.0 License and Edgesource Corporation");
    else gap("site: the live footer does not read Apache-2.0 License and Edgesource Corporation");
  });

  await audit("npm", async () => {
    const { json } = await getJson("https://registry.npmjs.org/spacedatastandards.org/latest");
    const id = `spacedatastandards.org@${json.version}`;
    if (json.license === "Apache-2.0") pass(`npm: ${id} license Apache-2.0`);
    else gap(`npm: ${id} license ${JSON.stringify(json.license)}`);
    if (retiredIn(json.author)) gap(`npm: ${id} author names the retired Digital Arsenal address; closes at the next publish`);
    else pass(`npm: ${id} author is not the retired address`);
    if (json.gitHead) {
      let commit = true;
      try {
        git("cat-file", "-e", `${json.gitHead}^{commit}`);
      } catch {
        commit = false;
      }
      if (!commit) note(`npm: ${id} was packed from ${json.gitHead.slice(0, 10)}, which this clone does not have; LICENSE inclusion is not checked`);
      else {
        let hasLicense = true;
        try {
          git("cat-file", "-e", `${json.gitHead}:LICENSE`);
        } catch {
          hasLicense = false;
        }
        if (hasLicense) pass(`npm: ${id} was packed from ${json.gitHead.slice(0, 10)}, which has LICENSE (npm always packs it)`);
        else gap(`npm: ${id} was packed from ${json.gitHead.slice(0, 10)}, a commit without LICENSE, so the tarball carries no license file; closes at the next publish`);
      }
    } else note(`npm: ${id} records no gitHead; its tarball (about 160 MB) is not downloaded`);
    note("GitHub Packages (@digitalarsenal/spacedatastandards): reading it needs credentials; it is packed from the same tree as the npm tarball");
  });

  await audit("crates.io", async () => {
    const { json } = await getJson("https://crates.io/api/v1/crates/spacedatastandards-org");
    const latest = json.versions.find((version) => !version.yanked);
    const id = `spacedatastandards-org@${latest.num}`;
    if (latest.license === "Apache-2.0") pass(`crates.io: ${id} license Apache-2.0`);
    else gap(`crates.io: ${id} license ${JSON.stringify(latest.license)}`);
    const crate = await request(`https://crates.io${latest.dl_path}`, { binary: true });
    const entries = tarEntries(gunzipSync(crate.body));
    const names = entries.map((entry) => entry.name.split("/").slice(1).join("/"));
    const shipped = ["LICENSE", "NOTICE"].filter((name) => names.includes(name));
    if (shipped.length === 2) pass(`crates.io: ${id} ships LICENSE and NOTICE`);
    else gap(`crates.io: ${id} ships ${shipped.join(" and ") || "no license file"}; the Cargo generator copies LICENSE and NOTICE from the next publish on`);
    const manifest = entries.find((entry) => /^[^/]+\/Cargo\.toml$/.test(entry.name));
    const authors = manifest?.body.toString("utf8").match(/^authors = \[(.*?)\]/ms)?.[1] ?? "";
    if (retiredIn(authors)) gap(`crates.io: ${id} authors name the retired Digital Arsenal address; closes at the next publish`);
    else pass(`crates.io: ${id} authors are not the retired address`);
  });

  await audit("pub.dev", async () => {
    const { json } = await getJson("https://pub.dev/api/packages/spacedatastandards/score");
    const tags = (json.tags ?? []).filter((tag) => tag.startsWith("license:"));
    if (tags.length > 0 && !tags.includes("license:unknown")) pass(`pub.dev: spacedatastandards license tags ${tags.join(", ")}`);
    else gap(`pub.dev: spacedatastandards license tags ${tags.join(", ") || "none"}; pub.dev does not recognize the LICENSE of the published version; the Dart job copies the canonical LICENSE from the next publish on`);
  });

  await audit("Go", async () => {
    const proxy = GO_MODULE.replace(/[A-Z]/g, (letter) => `!${letter.toLowerCase()}`);
    const { json } = await getJson(`https://proxy.golang.org/${proxy}/@latest`);
    const names = await zipNames(`https://proxy.golang.org/${proxy}/@v/${json.Version}.zip`);
    if (names.includes(`${GO_MODULE}@${json.Version}/LICENSE`)) pass(`Go: ${GO_MODULE}@${json.Version} ships LICENSE`);
    else gap(`Go: ${GO_MODULE}@${json.Version} ships no LICENSE (${names.length} files), so pkg.go.dev shows no redistributable license; lib/go/LICENSE must be committed`, LIB_OWNER);
  });

  await audit("PyPI", async () => {
    const { status, json } = await getJson("https://pypi.org/pypi/spacedatastandards.org/json");
    if (status === 404) return note("PyPI: spacedatastandards.org is not published");
    const info = json.info;
    const classified = (info.classifiers ?? []).some((classifier) => /Apache Software License/.test(classifier));
    if (String(info.license).includes("Apache-2.0") && classified) pass(`PyPI: spacedatastandards.org@${info.version} license Apache-2.0 with the Apache classifier`);
    else gap(`PyPI: spacedatastandards.org@${info.version} license ${JSON.stringify(info.license)}, Apache classifier ${classified}`);
    return note(`PyPI: publishing is disabled (PYPI_ENABLED is unset); ${info.version} is the last release and keeps its author, because published versions are immutable`);
  });

  await audit("Packagist", async () => {
    const { status, json } = await getJson("https://repo.packagist.org/p2/digitalarsenal/spacedatastandards.json");
    if (status === 404) return note("Packagist: digitalarsenal/spacedatastandards is not published (no credentials are configured)");
    const latest = json.packages["digitalarsenal/spacedatastandards"][0];
    if ((latest.license ?? []).includes("Apache-2.0")) return pass(`Packagist: ${latest.version} license Apache-2.0`);
    return gap(`Packagist: ${latest.version} license ${JSON.stringify(latest.license)}`);
  });

  await audit("NuGet", async () => {
    const { status } = await getJson("https://api.nuget.org/v3-flatcontainer/spacedatastandards/index.json");
    if (status === 404) note("NuGet: spacedatastandards is not published (the publish workflow has no NuGet job)");
    else gap("NuGet: spacedatastandards is published but this audit does not read its nuspec; add the check before relying on that registry");
  });

  await audit("Maven Central", async () => {
    const { json } = await getJson("https://search.maven.org/solrsearch/select?q=a:spacedatastandards&rows=3&wt=json");
    if (json.response.numFound === 0) note("Maven Central: spacedatastandards is not published (no credentials are configured)");
    else gap("Maven Central: spacedatastandards is published but this audit does not read its pom; add the check before relying on that registry");
  });
}

if (OFFLINE) note("registry audit skipped (--offline)");
else await registryAudit();

// ---------------------------------------------------------------- verdict
console.log("");
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;
if (failures.length > 0) {
  console.log(`license-check: ${plural(failures.length, "failure")}${gaps.length ? `, ${plural(gaps.length, "gap")}` : ""}`);
  process.exit(1);
}
if (gaps.length > 0) {
  console.log(`license-check: the repository passes; ${plural(gaps.length, "registry or lib/ gap")} listed${STRICT ? "" : " (--strict makes them fail)"}`);
  process.exit(STRICT ? 1 : 0);
}
console.log("license-check: the repository and every audited registry pass");
