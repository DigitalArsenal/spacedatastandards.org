#!/usr/bin/env node
/**
 * verify-live-site.mjs — post-deploy gate: prove the deployed site actually works.
 *
 * The 2026-08-27 outage was invisible to every pre-deploy check we had: the push
 * succeeded, GitHub Pages built green, and the site served a dist/manifest.json
 * that was not JSON, so the Schema Registry rendered nothing for four hours. A
 * deploy is not done when the push succeeds; it is done when the deployed bytes
 * render.
 *
 * Assertions:
 *   A1 manifest-served   GET <base>/dist/manifest.json is 200 and parses as JSON
 *   A2 manifest-version  .version === the expected version
 *   A3 manifest-count    Object.keys(.STANDARDS).length === the expected count
 *   A4 manifest-fresh    last-modified >= --since (only when --since is given)
 *   A5 embeddings-served GET <base>/dist/schema-embeddings.json is 200 + JSON
 *   A6 entry-assets      <base>/ is 200 text/html and every asset it references
 *                        is 200 and is NOT html (a 404 SPA fallback is the
 *                        classic silent break)
 *   A7 registry-renders  headless Chromium, fresh profile, cache-busted, loads
 *                        <base>/#/schemas and shows "Showing N of N schemas"
 *                        with N === the expected count
 *   A8 registry-cards    at least N schema cards are in the DOM
 *   A9 registry-clean    no "Failed to load" text and no console errors
 *
 * Expectations default to the repo's own dist/manifest.json — i.e. "the site is
 * serving exactly what this checkout just deployed".
 *
 * Exit 0 = the deploy is verified live. Exit 1 = a named assertion failed; the
 * deploy is FAILED and must be rolled back (see DEPLOY.md, "Rollback"). Exit 2 =
 * the gate could not run (never treat this as a pass).
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_BASE = "https://spacedatastandards.org";

function parseArgs(argv) {
  const options = {
    base: process.env.SDS_VERIFY_BASE || DEFAULT_BASE,
    expectVersion: null,
    expectCount: null,
    since: null,
    waitSeconds: 600,
    pollSeconds: 15,
    artifactDir: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--base") options.base = argv[++i];
    else if (arg === "--expect-version") options.expectVersion = argv[++i];
    else if (arg === "--expect-count") options.expectCount = Number(argv[++i]);
    else if (arg === "--since") options.since = argv[++i];
    else if (arg === "--wait") options.waitSeconds = Number(argv[++i]);
    else if (arg === "--poll") options.pollSeconds = Number(argv[++i]);
    else if (arg === "--artifact-dir") options.artifactDir = argv[++i];
    else if (arg === "--help" || arg === "-h") options.help = true;
    else {
      console.error(`verify-live-site: unknown argument ${arg}`);
      process.exit(2);
    }
  }
  options.base = options.base.replace(/\/+$/, "");
  return options;
}

function localManifest() {
  const path = resolve(process.cwd(), "dist/manifest.json");
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    console.error(`verify-live-site: local dist/manifest.json does not parse (${error.message})`);
    console.error("  Run `npm run check:integrity` — this checkout must not have been deployed.");
    process.exit(2);
  }
}

const bust = (url) => `${url}${url.includes("?") ? "&" : "?"}__cb=${Date.now()}`;

async function getText(url) {
  const response = await fetch(bust(url), {
    cache: "no-store",
    redirect: "follow",
    headers: { "cache-control": "no-cache", pragma: "no-cache" },
  });
  return {
    status: response.status,
    contentType: response.headers.get("content-type") || "",
    lastModified: response.headers.get("last-modified"),
    body: await response.text(),
  };
}

function parseSince(value) {
  if (!value) return null;
  const asNumber = Number(value);
  const date = Number.isFinite(asNumber) && value.trim() !== "" ? new Date(asNumber) : new Date(value);
  if (Number.isNaN(date.getTime())) {
    console.error(`verify-live-site: --since ${value} is not a date or epoch-ms`);
    process.exit(2);
  }
  return date;
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

/**
 * A1–A4. Pages caches for 600 s and builds asynchronously, so this polls until
 * the freshly deployed manifest is the one being served, or the wait expires.
 */
async function awaitManifest(options, expected, failures) {
  const deadline = Date.now() + options.waitSeconds * 1000;
  const since = parseSince(options.since);
  let attempt = 0;
  let last = null;

  for (;;) {
    attempt += 1;
    let problem = null;
    try {
      const response = await getText(`${options.base}/dist/manifest.json`);
      last = response;
      if (response.status !== 200) {
        problem = `A1 manifest-served: HTTP ${response.status}`;
      } else {
        let manifest;
        try {
          manifest = JSON.parse(response.body);
        } catch (error) {
          problem = `A1 manifest-served: response is not JSON — ${error.message}`;
        }
        if (!problem) {
          const count = Object.keys(manifest.STANDARDS || {}).length;
          if (manifest.version !== expected.version) {
            problem = `A2 manifest-version: served ${manifest.version}, expected ${expected.version}`;
          } else if (count !== expected.count) {
            problem = `A3 manifest-count: served ${count} standards, expected ${expected.count}`;
          } else if (since) {
            const served = response.lastModified ? new Date(response.lastModified) : null;
            if (!served || served.getTime() < since.getTime()) {
              problem = `A4 manifest-fresh: last-modified ${response.lastModified} is older than ${since.toISOString()}`;
            }
          }
        }
      }
    } catch (error) {
      problem = `A1 manifest-served: request failed — ${error.message}`;
    }

    if (!problem) {
      console.log(
        `  ok   A1-A4 manifest served: version=${expected.version} standards=${expected.count}` +
          `${last?.lastModified ? ` last-modified=${last.lastModified}` : ""} (attempt ${attempt})`,
      );
      return true;
    }

    if (Date.now() + options.pollSeconds * 1000 >= deadline) {
      failures.push(`${problem} (after ${attempt} attempt(s), ${options.waitSeconds}s)`);
      return false;
    }
    console.log(`  ...  ${problem} — retrying in ${options.pollSeconds}s`);
    await sleep(options.pollSeconds * 1000);
  }
}

/** A5–A6. */
async function checkAssets(options, failures) {
  const embeddings = await getText(`${options.base}/dist/schema-embeddings.json`);
  if (embeddings.status !== 200) {
    failures.push(`A5 embeddings-served: HTTP ${embeddings.status}`);
  } else {
    try {
      JSON.parse(embeddings.body);
      console.log("  ok   A5 embeddings-served: dist/schema-embeddings.json is 200 and parses");
    } catch (error) {
      failures.push(`A5 embeddings-served: response is not JSON — ${error.message}`);
    }
  }

  const index = await getText(`${options.base}/`);
  if (index.status !== 200 || !/text\/html/i.test(index.contentType)) {
    failures.push(`A6 entry-assets: / returned HTTP ${index.status} (${index.contentType})`);
    return;
  }

  const referenced = new Set();
  const scriptSrc = /<script[^>]+src=["']([^"']+)["']/gi;
  const styleHref = /<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi;
  for (const pattern of [scriptSrc, styleHref]) {
    let match;
    while ((match = pattern.exec(index.body)) !== null) {
      const href = match[1];
      if (/^(data:|https?:|\/\/)/i.test(href)) continue; // external origins are not this gate's business
      referenced.add(href.startsWith("/") ? href : `/${href}`);
    }
  }

  for (const path of referenced) {
    const asset = await getText(`${options.base}${path}`);
    if (asset.status !== 200) {
      failures.push(`A6 entry-assets: ${path} returned HTTP ${asset.status}`);
    } else if (/\.m?js$/i.test(path) && /text\/html/i.test(asset.contentType)) {
      failures.push(`A6 entry-assets: ${path} is served as HTML — that is a 404 fallback, not a script`);
    }
  }
  console.log(
    `  ok   A6 entry-assets: / is 200 html; ${referenced.size} referenced asset(s) served correctly`,
  );
}

async function loadChromium() {
  // Explicit override for checkouts without their own node_modules (sparse task
  // worktrees, one-off audits): point at any installed playwright package dir.
  const override = process.env.PLAYWRIGHT_MODULE_PATH;
  if (override) {
    const entry = override.endsWith(".js") ? override : join(override, "index.js");
    const mod = await import(pathToFileURL(entry).href);
    return mod.chromium ?? mod.default?.chromium;
  }
  for (const specifier of ["playwright", "playwright-core"]) {
    try {
      const mod = await import(specifier);
      const chromium = mod.chromium ?? mod.default?.chromium;
      if (chromium) return chromium;
    } catch {
      /* try the next resolution */
    }
  }
  try {
    const globalRoot = execFileSync("npm", ["root", "-g"], { encoding: "utf8" }).trim();
    const mod = await import(pathToFileURL(join(globalRoot, "playwright", "index.js")).href);
    return mod.chromium ?? mod.default?.chromium;
  } catch {
    return null;
  }
}

/** A7–A9. */
async function checkRegistryRenders(options, expected, failures) {
  const chromium = await loadChromium();
  if (!chromium) {
    console.error(
      "verify-live-site: playwright is not installed — run `npm install` then `npx playwright install chromium` " +
        "(or set PLAYWRIGHT_MODULE_PATH to an installed playwright package directory)",
    );
    process.exit(2);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ bypassCSP: false });
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(`pageerror: ${error.message}`));
  // A bare "Failed to load resource" console line names nothing. Capture the
  // URL and the network error so the verdict is actionable.
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} (${request.failure()?.errorText ?? "request failed"})`);
  });

  try {
    const url = `${options.base}/?__cb=${Date.now()}#/schemas`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    const pattern = /Showing\s+(\d+)\s+of\s+(\d+)\s+schemas/;
    let text = null;
    try {
      await page.waitForFunction(
        () => /Showing\s+\d+\s+of\s+\d+\s+schemas/.test(document.body.innerText),
        undefined,
        { timeout: 60000 },
      );
      text = (await page.innerText("body")).match(pattern)?.[0] ?? null;
    } catch {
      const body = await page.innerText("body").catch(() => "");
      failures.push(
        `A7 registry-renders: never rendered "Showing N of N schemas" within 60s — body began: ${JSON.stringify(body.slice(0, 200))}`,
      );
    }

    if (text) {
      const [, shown, total] = text.match(pattern);
      if (Number(total) !== expected.count) {
        failures.push(
          `A7 registry-renders: page says "${text}" but the manifest has ${expected.count} standards`,
        );
      } else if (Number(shown) !== expected.count) {
        failures.push(
          `A7 registry-renders: page says "${text}" — the unfiltered view must show all ${expected.count}`,
        );
      } else {
        console.log(`  ok   A7 registry-renders: "${text}"`);
      }

      const cards = await page.locator(".schema-grid > *").count();
      if (cards < expected.count) {
        failures.push(`A8 registry-cards: ${cards} card(s) in the DOM, expected at least ${expected.count}`);
      } else {
        console.log(`  ok   A8 registry-cards: ${cards} schema cards rendered`);
      }
    }

    const body = await page.innerText("body").catch(() => "");
    if (/Failed to load/i.test(body)) {
      failures.push('A9 registry-clean: the page renders "Failed to load"');
    }
    if (failedRequests.length > 0) {
      failures.push(
        `A9 registry-clean: ${failedRequests.length} request(s) the page could not load:\n         ` +
          failedRequests.slice(0, 10).join("\n         "),
      );
    } else if (consoleErrors.length > 0) {
      failures.push(
        `A9 registry-clean: ${consoleErrors.length} console error(s): ${consoleErrors.slice(0, 5).join(" | ")}`,
      );
    }
    if (!/Failed to load/i.test(body) && consoleErrors.length === 0 && failedRequests.length === 0) {
      console.log("  ok   A9 registry-clean: no load failure text, no console errors, no failed requests");
    }

    if (options.artifactDir && failures.length > 0) {
      mkdirSync(options.artifactDir, { recursive: true });
      const shot = join(options.artifactDir, "verify-live-site-failure.png");
      await page.screenshot({ path: shot, fullPage: false });
      console.error(`  evidence: ${shot}`);
    }
  } finally {
    await context.close();
    await browser.close();
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log(
      "usage: verify-live-site.mjs [--base URL] [--expect-version V] [--expect-count N] " +
        "[--since ISO|epoch-ms] [--wait SEC] [--poll SEC] [--artifact-dir DIR]",
    );
    process.exit(0);
  }

  const expected = { version: options.expectVersion, count: options.expectCount };
  if (expected.version === null || !Number.isFinite(expected.count)) {
    const manifest = localManifest();
    if (!manifest) {
      console.error(
        "verify-live-site: no --expect-version/--expect-count and no local dist/manifest.json to read them from",
      );
      process.exit(2);
    }
    if (expected.version === null) expected.version = manifest.version;
    if (!Number.isFinite(expected.count)) expected.count = Object.keys(manifest.STANDARDS || {}).length;
  }

  console.log(
    `verify-live-site: base=${options.base} expect version=${expected.version} standards=${expected.count}` +
      `${options.since ? ` since=${options.since}` : ""}`,
  );

  const failures = [];
  const manifestOk = await awaitManifest(options, expected, failures);
  if (manifestOk) {
    await checkAssets(options, failures);
    await checkRegistryRenders(options, expected, failures);
  } else {
    console.error("  skipped A5-A9: the served manifest never became the deployed one");
  }

  if (failures.length === 0) {
    console.log(`verify-live-site: PASS — ${options.base} serves and renders ${expected.count} standards`);
    process.exit(0);
  }

  console.error(`verify-live-site: FAIL (${failures.length} assertion(s))`);
  for (const failure of failures) console.error(`  FAIL ${failure}`);
  console.error("");
  console.error("  THE DEPLOY IS FAILED. Roll back now — see DEPLOY.md, section \"Rollback a bad deploy\".");
  process.exit(1);
}

main().catch((error) => {
  console.error(`verify-live-site: the gate itself could not run — ${error.stack || error.message}`);
  process.exit(2);
});
