#!/usr/bin/env node
// E2E: the released sdn-stack-nav accepts same-origin vendored assets at a
// domain root or under exactly one site segment (GitHub project sites such as
// /flatsql/ and /OrbPro/), and refuses every other form. Pages load in the
// Chromium headless shell (graph/e2e/headless.mjs in the stack checkout).
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stackRoot = process.env.GAUNTLET_STACK_ROOT;
if (!stackRoot) throw new Error("GAUNTLET_STACK_ROOT must name the stack checkout (the gauntlet sets it)");
const { withHeadlessShell, loadPage } = await import(pathToFileURL(join(stackRoot, "graph/e2e/headless.mjs")).href);

const fragment = JSON.parse(readFileSync(join(repositoryRoot, "dist/static-assets/sdn-stack-nav.release-fragment.v1.json"), "utf8"));
const navVersion = fragment.navVersion;
const sources = {
  [`sdn-stack-nav/${navVersion}`]: join(repositoryRoot, `dist/static-assets/assets/sdn-stack-nav/${navVersion}`),
  "hd-wallet-ui/2.1.0": join(repositoryRoot, "assets/vendor/hd-wallet-ui/2.1.0"),
};
const wallet = {
  script: ["sdn-wallet-public-client.f611e7e151a3b5c38384272f8894a4c6634f0a29bf925b0e02e0e27f8db0bfff.js", "sha384-R+QqsKoWJIS7iWrtPmgJ49DVnb1hSGjZokupbLInJd1PLp8RwQhtF/hnaerc33ci"],
  style: ["sdn-wallet-public-client.c3f68d1cfd88478f10d836a5e829d1dfc6a10157972cf0f7d4d319d0636f2cc4.css", "sha384-fICuhN4I9xqOK1F5vGGzl26opuO+xQIvTZXMSV76lWTBiQ6AfzztMGLLDw8yRT8i"],
};

// The released files are the bytes their names and SRI claim.
for (const [key, extension] of [["navScript", "js"], ["navStyle", "css"]]) {
  const record = fragment.assets[key];
  const bytes = readFileSync(join(sources[`sdn-stack-nav/${navVersion}`], `sdn-stack-nav.${record.sha256}.${extension}`));
  const sri = `sha384-${createHash("sha384").update(bytes).digest("base64")}`;
  if (createHash("sha256").update(bytes).digest("hex") !== record.sha256 || sri !== record.sha384) {
    throw new Error(`${key}: bytes do not match the release fragment`);
  }
}

const navFile = (record) => record.url.slice(record.url.lastIndexOf("/") + 1);
const navDir = `assets/vendor/sdn-stack-nav/${navVersion}`;
const walletDir = "assets/vendor/hd-wallet-ui/2.1.0";

// One page: the nav script always loads from the page's own valid location, so
// a refusal comes from the asset URLs the page hands the nav (prefix).
// Each site's registered wallet client id and callback (hd-wallet-ui 2.1.0).
const sites = {
  "": ["sdn-standards-web-v1", "https://spacedatastandards.org/wallet-callback.html"],
  "/flatsql": ["sdn-flatsql-pages-v1", "https://digitalarsenal.github.io/flatsql/wallet-callback.html"],
  "/flatbuffers": ["sdn-flatbuffers-pages-v1", "https://digitalarsenal.github.io/flatbuffers/wallet-callback.html"],
  "/space-data-module-sdk": ["sdn-module-sdk-pages-v1", "https://digitalarsenal.github.io/space-data-module-sdk/wallet-callback.html"],
  "/OrbPro": ["orbpro-pages-v1", "https://digitalarsenal.github.io/OrbPro/wallet-callback.html"],
};

function page(scriptPrefix, prefix) {
  const [clientId, callback] = sites[scriptPrefix];
  const style = `${prefix}/${walletDir}/${wallet.style[0]}`;
  const client = `${prefix}/${walletDir}/${wallet.script[0]}`;
  const navStyle = `${prefix}/${navDir}/${navFile(fragment.assets.navStyle)}`;
  const navScript = `${scriptPrefix}/${navDir}/${navFile(fragment.assets.navScript)}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="icon" href="data:,"><title>nav e2e</title>
<link rel="stylesheet" href="${style}" integrity="${wallet.style[1]}" crossorigin="anonymous">
<script defer src="${client}" integrity="${wallet.script[1]}" crossorigin="anonymous" data-sdn-wallet-public-client="v1"></script>
<script defer src="${navScript}" integrity="${fragment.assets.navScript.sha384}" crossorigin="anonymous" data-nav-style-url="${navStyle}" data-nav-style-integrity="${fragment.assets.navStyle.sha384}" data-wallet-client-url="${client}" data-wallet-client-integrity="${wallet.script[1]}" data-wallet-style-url="${style}" data-wallet-style-integrity="${wallet.style[1]}" data-wallet-client-id="${clientId}" data-wallet-callback-uri="${callback}" data-wallet-registry-sha256="${"e".repeat(64)}"></script>
</head><body><sdn-stack-nav active="flatsql"></sdn-stack-nav></body></html>`;
}

const pages = new Map();
const server = createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  if (pages.has(url.search)) {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(pages.get(url.search));
    return;
  }
  const match = url.pathname.match(/\/assets\/vendor\/([a-z0-9.-]+\/[0-9.]+)\/([A-Za-z0-9.-]+)$/u);
  const root = match && sources[match[1]];
  if (!root) { response.writeHead(404); response.end(); return; }
  try {
    const bytes = readFileSync(join(root, match[2]));
    response.writeHead(200, {
      "access-control-allow-origin": "*",
      "content-type": match[2].endsWith(".css") ? "text/css" : "text/javascript",
    });
    response.end(bytes);
  } catch {
    response.writeHead(404); response.end();
  }
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const port = server.address().port;
const crossOrigin = `http://localhost:${port}`;

// [page path, nav script prefix, asset prefix handed to the nav, expected]
const cases = [
  ["/", "", "", "accepted"],
  ["/flatsql/", "/flatsql", "/flatsql", "accepted"],
  ["/flatbuffers/", "/flatbuffers", "/flatbuffers", "accepted"],
  ["/space-data-module-sdk/", "/space-data-module-sdk", "/space-data-module-sdk", "accepted"],
  ["/OrbPro/", "/OrbPro", "/OrbPro", "accepted"],
  ["/OrbPro/sandcastle/", "/OrbPro", "/OrbPro", "accepted"],
  ["/flatsql/", "/flatsql", "/.", "refused"],
  ["/flatsql/", "/flatsql", "/..", "refused"],
  ["/flatsql/", "/flatsql", "/flatsql/..", "refused"],
  ["/OrbPro/sandcastle/", "/OrbPro", "/OrbPro/sandcastle", "refused"],
  ["/flatsql/", "/flatsql", `${crossOrigin}/flatsql`, "refused"],
  ["/flatsql/", "/flatsql", `//localhost:${port}/flatsql`, "refused"],
];

const inspect = `(async () => {
  await customElements.whenDefined("sdn-stack-nav");
  const root = document.querySelector("sdn-stack-nav").shadowRoot;
  return {
    links: root.querySelectorAll(".sdn-stack-links a").length,
    style: root.querySelector('link[rel="stylesheet"]')?.getAttribute("href") ?? null,
    button: root.querySelector("button.sdn-stack-wallet")?.textContent ?? null,
  };
})()`;

const failures = [];
try {
  await withHeadlessShell(async (browser) => {
    for (const [index, [path, scriptPrefix, prefix, expected]] of cases.entries()) {
      const search = `?case=${index}`;
      pages.set(search, page(scriptPrefix, prefix));
      const result = await loadPage(browser, `http://127.0.0.1:${port}${path}${search}`, { evaluate: inspect });
      const seen = result.evaluated || {};
      const accepted = seen.links === 6 && seen.style !== null && seen.button === "Login";
      const refused = seen.links === 6 && seen.style === null && seen.button === null;
      const clean = expected === "refused" || (result.bad.length === 0 && result.failed.length === 0 && result.errors.length === 0);
      const pass = result.status === 200 && clean && (expected === "accepted" ? accepted : refused);
      process.stdout.write(`${pass ? "PASS" : "FAIL"} ${path} assets ${prefix || "(root)"}/assets/vendor -> ${accepted ? "accepted" : refused ? "refused" : JSON.stringify(seen)} (expected ${expected})\n`);
      if (!pass) failures.push({ path, prefix, expected, seen, bad: result.bad, failed: result.failed, errors: result.errors });
    }
  });
} finally {
  server.close();
}

if (failures.length) {
  process.stderr.write(`${JSON.stringify(failures, null, 2)}\n`);
  process.stderr.write(`SDN-STACK-NAV SUBPATH E2E FAIL: ${failures.length} of ${cases.length}\n`);
  process.exit(1);
}
process.stdout.write(`SDN-STACK-NAV SUBPATH E2E PASS: sdn-stack-nav ${navVersion}, ${cases.length} cases\n`);
