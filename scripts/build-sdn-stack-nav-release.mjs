#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const NAV_VERSION = "1.0.0";
const STATIC_BASE = `https://static.spacedatanetwork.org/assets/sdn-stack-nav/${NAV_VERSION}`;

function assetRecord(bytes, extension) {
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const filename = `sdn-stack-nav.${sha256}.${extension}`;
  return {
    filename,
    record: {
      bytes: bytes.byteLength,
      sha256,
      sha384: `sha384-${createHash("sha384").update(bytes).digest("base64")}`,
      url: `${STATIC_BASE}/${filename}`,
    },
  };
}

export async function buildSdnStackNavRelease({
  sourceRoot = resolve(dirname(fileURLToPath(import.meta.url)), ".."),
  outputRoot = resolve(sourceRoot, "dist/static-assets"),
} = {}) {
  const [scriptBytes, styleBytes, linksBytes] = await Promise.all([
    readFile(resolve(sourceRoot, "sdn-stack-nav.js")),
    readFile(resolve(sourceRoot, "sdn-stack-nav.css")),
    readFile(resolve(sourceRoot, "sdn-stack-nav.links.json")),
  ]);
  const navScript = assetRecord(scriptBytes, "js");
  const navStyle = assetRecord(styleBytes, "css");
  const versionRoot = resolve(outputRoot, `assets/sdn-stack-nav/${NAV_VERSION}`);
  await mkdir(versionRoot, { recursive: true });
  await Promise.all([
    writeFile(join(versionRoot, navScript.filename), scriptBytes),
    writeFile(join(versionRoot, navStyle.filename), styleBytes),
  ]);
  const fragment = {
    schemaVersion: 1,
    navVersion: NAV_VERSION,
    assets: {
      navScript: navScript.record,
      navStyle: navStyle.record,
    },
    linksSha256: createHash("sha256").update(linksBytes).digest("hex"),
  };
  const fragmentPath = resolve(outputRoot, "sdn-stack-nav.release-fragment.v1.json");
  await mkdir(dirname(fragmentPath), { recursive: true });
  await writeFile(fragmentPath, `${JSON.stringify(fragment, null, 2)}\n`);
  return fragment;
}

async function main() {
  const fragment = await buildSdnStackNavRelease();
  process.stdout.write(
    `SDN Stack nav ${fragment.navVersion} built as ${fragment.assets.navScript.sha256} / ${fragment.assets.navStyle.sha256}\n`,
  );
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
