import os from "node:os";
import path from "node:path";
import { cp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const PATCH_VERSION = "spacedatastandards-emception-node-v1";
const PATCH_MARKER_FILENAME = ".spacedatastandards-emception-patch";
const EMCEPTION_PATCH_ROOT = path.join(
  os.tmpdir(),
  `spacedatastandards-emception-node-${process.pid}`,
);
const FILE_URL_FETCH_PATCH_FLAG = "__spacedatastandardsFileUrlFetchPatched";

let patchedEmceptionRootPromise = null;

function installNodeRuntimeShims() {
  if (typeof globalThis.require !== "function") {
    globalThis.require = require;
  }

  if (!globalThis.XMLHttpRequest) {
    class FileUrlXMLHttpRequest {
      open(method, url, async = true) {
        this.method = method;
        this.url = url;
        this.async = async;
        this.status = 0;
        this.response = null;
      }

      overrideMimeType() {}

      send() {
        if (this.async) {
          throw new Error("Async file XMLHttpRequest is not supported.");
        }
        const target =
          typeof this.url === "string" && this.url.startsWith("file:")
            ? new URL(this.url)
            : this.url;
        const data = readFileSync(target);
        this.status = 200;
        this.response = data.buffer.slice(
          data.byteOffset,
          data.byteOffset + data.byteLength,
        );
      }
    }

    globalThis.XMLHttpRequest = FileUrlXMLHttpRequest;
  }

  if (!globalThis[FILE_URL_FETCH_PATCH_FLAG]) {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (input, init) => {
      const url =
        typeof input === "string"
          ? input
          : input?.url ?? String(input);
      if (!url.startsWith("file:")) {
        if (typeof originalFetch !== "function") {
          throw new Error("fetch is not available for non-file URLs.");
        }
        return originalFetch(input, init);
      }
      const bytes = await readFile(new URL(url));
      return {
        ok: true,
        status: 200,
        url,
        async arrayBuffer() {
          return bytes.buffer.slice(
            bytes.byteOffset,
            bytes.byteOffset + bytes.byteLength,
          );
        },
      };
    };
    globalThis[FILE_URL_FETCH_PATCH_FLAG] = true;
  }
}

async function patchEmceptionModuleTree(rootDir) {
  const entries = await readdir(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      await patchEmceptionModuleTree(fullPath);
      continue;
    }
    if (!entry.name.endsWith(".mjs")) {
      continue;
    }

    let source = await readFile(fullPath, "utf8");
    source = source.replaceAll(
      'scriptDirectory=__dirname+"/"',
      'scriptDirectory=(new URL(".", import.meta.url)).pathname',
    );

    if (entry.name === "emception.mjs") {
      source = source.replace(
        "this.#fs = await new FileSystem();",
        [
          "this.#fs = await new FileSystem({",
          "      locateFile: (file, scriptDirectory) => scriptDirectory + file,",
          '      cache: "/tmp/emception-cache",',
          "    });",
        ].join("\n"),
      );
      source = source.replace(
        "const config = {",
        [
          "const config = {",
          "      locateFile: (file, scriptDirectory) => scriptDirectory + file,",
        ].join("\n"),
      );
    }

    if (entry.name === "FileSystem.mjs") {
      source = source.replace(
        [
          "        if (!this.exists(cache)) {",
          "            this.persist(cache);",
          "        }",
          "        await this.pull();",
        ].join("\n"),
        [
          '        if (typeof indexedDB !== "undefined") {',
          "            if (!this.exists(cache)) {",
          "                this.persist(cache);",
          "            }",
          "            await this.pull();",
          "        }",
        ].join("\n"),
      );
    }

    await writeFile(fullPath, source, "utf8");
  }
}

async function preparePatchedEmceptionRoot() {
  if (!patchedEmceptionRootPromise) {
    patchedEmceptionRootPromise = (async () => {
      const sourceRoot = path.dirname(require.resolve("sdn-emception"));
      const markerPath = path.join(EMCEPTION_PATCH_ROOT, PATCH_MARKER_FILENAME);
      let marker = null;
      try {
        marker = await readFile(markerPath, "utf8");
      } catch {
        marker = null;
      }

      if (marker?.trim() !== PATCH_VERSION) {
        await rm(EMCEPTION_PATCH_ROOT, { recursive: true, force: true });
        await cp(sourceRoot, EMCEPTION_PATCH_ROOT, { recursive: true });
        await patchEmceptionModuleTree(EMCEPTION_PATCH_ROOT);
        await writeFile(markerPath, `${PATCH_VERSION}\n`, "utf8");
      }

      return EMCEPTION_PATCH_ROOT;
    })().catch((error) => {
      patchedEmceptionRootPromise = null;
      throw error;
    });
  }

  return patchedEmceptionRootPromise;
}

class EmceptionController {
  #instancePromise = null;

  #executionQueue = Promise.resolve();

  async load() {
    if (!this.#instancePromise) {
      this.#instancePromise = (async () => {
        installNodeRuntimeShims();
        const patchedRoot = await preparePatchedEmceptionRoot();
        const moduleUrl = pathToFileURL(path.join(patchedRoot, "emception.mjs")).href;
        const { default: Emception } = await import(moduleUrl);
        const emception = new Emception({
          baseUrl: pathToFileURL(`${patchedRoot}${path.sep}`).href,
        });
        await emception.init();
        return emception;
      })().catch((error) => {
        this.#instancePromise = null;
        throw error;
      });
    }

    return this.#instancePromise;
  }

  async withLock(task) {
    const previous = this.#executionQueue;
    let release = () => {};
    this.#executionQueue = new Promise((resolve) => {
      release = resolve;
    });
    await previous.catch(() => {});
    try {
      return await task(await this.load());
    } finally {
      release();
    }
  }
}

const sharedController = new EmceptionController();

export async function runWithEmceptionLock(task) {
  return sharedController.withLock(task);
}

