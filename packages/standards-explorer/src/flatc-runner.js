import createFlatcModule from "flatc-wasm/module";

const MAX_SCHEMA_TOTAL_SIZE = 10 * 1024 * 1024;
const MAX_SCHEMA_FILES = 1000;
const MAX_INCLUDE_DEPTH = 50;

const textEncoder = new TextEncoder();

function validatePath(path, context = "path") {
  if (typeof path !== "string") {
    throw new Error(`Invalid ${context}: must be a string`);
  }
  if (path.length === 0) {
    throw new Error(`Invalid ${context}: cannot be empty`);
  }

  const normalized = path.replace(/\\/g, "/");
  if (
    normalized.includes("/../") ||
    normalized.startsWith("../") ||
    normalized.endsWith("/..") ||
    normalized === ".." ||
    normalized.includes("/./") ||
    normalized.startsWith("./")
  ) {
    throw new Error(`Invalid ${context}: path traversal detected in "${path}"`);
  }

  if (path.includes("\0")) {
    throw new Error(`Invalid ${context}: null byte detected`);
  }

  return path;
}

function resolveIncludePath(currentFile, includePath) {
  if (includePath.startsWith("/")) {
    return includePath;
  }

  const lastSlash = currentFile.lastIndexOf("/");
  const dir = lastSlash > 0 ? currentFile.slice(0, lastSlash) : "";
  let resolved = dir ? `${dir}/${includePath}` : includePath;

  while (resolved.includes("/./") || /\/[^/]+\/\.\.\//.test(resolved)) {
    resolved = resolved
      .replace(/\/\.\//g, "/")
      .replace(/\/[^/]+\/\.\.\//g, "/");
  }

  return resolved;
}

function validateIncludeDepth(schemaInput) {
  const { entry, files } = schemaInput;

  const extractIncludes = (content) => {
    const includes = [];
    const regex = /include\s+["']([^"']+)["']\s*;/g;
    const contentText = typeof content === "string" ? content : new TextDecoder().decode(content);
    let match;

    while ((match = regex.exec(contentText)) !== null) {
      includes.push(match[1]);
    }

    return includes;
  };

  const checkIncludes = (file, visited, depth) => {
    if (depth > MAX_INCLUDE_DEPTH) {
      throw new Error(
        `Schema include depth exceeds maximum (${MAX_INCLUDE_DEPTH}). This may indicate circular includes or overly complex schema structure.`,
      );
    }

    if (visited.has(file)) {
      throw new Error(`Circular include detected: "${file}" is included in a cycle.`);
    }

    const content = files[file];
    if (!content) {
      return;
    }

    visited.add(file);

    for (const includePath of extractIncludes(content)) {
      checkIncludes(resolveIncludePath(file, includePath), new Set(visited), depth + 1);
    }
  };

  checkIncludes(entry, new Set(), 0);
}

function validateSchemaInput(schemaInput) {
  if (!schemaInput || typeof schemaInput !== "object") {
    throw new Error("Schema input must be an object with entry and files properties");
  }
  if (typeof schemaInput.entry !== "string" || schemaInput.entry.length === 0) {
    throw new Error("Schema input must have a non-empty entry path");
  }
  if (!schemaInput.files || typeof schemaInput.files !== "object") {
    throw new Error("Schema input must have a files object");
  }

  validatePath(schemaInput.entry, "schema entry");

  if (!(schemaInput.entry in schemaInput.files)) {
    throw new Error(`Schema entry "${schemaInput.entry}" not found in files.`);
  }

  const filePaths = Object.keys(schemaInput.files);
  if (filePaths.length > MAX_SCHEMA_FILES) {
    throw new Error(`Schema input exceeds maximum file count (${MAX_SCHEMA_FILES})`);
  }

  let totalSize = 0;
  for (const filePath of filePaths) {
    validatePath(filePath, "schema file path");
    const content = schemaInput.files[filePath];
    totalSize += typeof content === "string" ? content.length : content.byteLength;
    if (totalSize > MAX_SCHEMA_TOTAL_SIZE) {
      throw new Error(`Schema input exceeds maximum total size (${MAX_SCHEMA_TOTAL_SIZE} bytes)`);
    }
  }

  validateIncludeDepth(schemaInput);
}

function getIncludeDirs(schemaInput) {
  const dirs = new Set();
  for (const filePath of Object.keys(schemaInput.files)) {
    const lastSlash = filePath.lastIndexOf("/");
    dirs.add(lastSlash > 0 ? filePath.slice(0, lastSlash) : "/");
  }
  return Array.from(dirs);
}

export class FlatcRunner {
  constructor(Module) {
    this.Module = Module;
    this._stdout = "";
    this._stderr = "";
    this._cachedSchema = null;
    this._cachedIncludeDirs = [];
  }

  static async init(options = {}) {
    const runner = new FlatcRunner(null);
    const Module = await createFlatcModule({
      noExitRuntime: true,
      noInitialRun: true,
      print: (text) => {
        runner._stdout += `${text}\n`;
      },
      printErr: (text) => {
        runner._stderr += `${text}\n`;
      },
      ...options,
    });

    runner.Module = Module;
    return runner;
  }

  runCommand(args) {
    this._stdout = "";
    this._stderr = "";
    let code = 0;

    try {
      const returnValue = this.Module.callMain(args);
      if (typeof returnValue === "number" && returnValue !== 0) {
        code = returnValue;
      }
    } catch (error) {
      if (typeof error === "number") {
        code = error;
      } else if (error && typeof error === "object" && "status" in error) {
        code = error.status;
      } else {
        throw error;
      }
    }

    return {
      code,
      stdout: this._stdout.trim(),
      stderr: this._stderr.trim(),
    };
  }

  mountFile(path, data) {
    const { FS } = this.Module;
    const dir = path.substring(0, path.lastIndexOf("/")) || "/";
    const parts = dir.split("/").filter(Boolean);
    let current = "";

    for (const part of parts) {
      current += `/${part}`;
      try {
        FS.mkdir(current);
      } catch (error) {
        if (error.errno !== 20) {
          throw error;
        }
      }
    }

    FS.writeFile(path, typeof data === "string" ? textEncoder.encode(data) : data);
  }

  mountFiles(files) {
    for (const file of files) {
      this.mountFile(file.path, file.data);
    }
  }

  unlink(path, ignoreNotFound = true) {
    try {
      this.Module.FS.unlink(path);
    } catch (error) {
      if (ignoreNotFound && error.errno === 44) {
        return;
      }
      throw error;
    }
  }

  rmdir(path, ignoreNotFound = true) {
    try {
      this.Module.FS.rmdir(path);
    } catch (error) {
      if (ignoreNotFound && error.errno === 44) {
        return;
      }
      throw error;
    }
  }

  generateCode(schemaInput, language, options = {}) {
    const outDir = `/out_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    this.Module.FS.mkdirTree(outDir);

    const cleanupDir = (dir) => {
      try {
        const entries = this.Module.FS.readdir(dir).filter((entry) => entry !== "." && entry !== "..");
        for (const entry of entries) {
          const fullPath = `${dir}/${entry}`;
          const stat = this.Module.FS.stat(fullPath);
          if (this.Module.FS.isDir(stat.mode)) {
            cleanupDir(fullPath);
          } else {
            this.unlink(fullPath);
          }
        }
        this.rmdir(dir);
      } catch {
        // Ignore cleanup failures.
      }
    };

    try {
      this._mountSchemaIfNeeded(schemaInput);

      const args = [`--${language}`, "-o", outDir];
      for (const dir of this._cachedIncludeDirs) {
        args.push("-I", dir);
      }

      if (options.genObjectApi) args.push("--gen-object-api");
      if (options.genOnefile) args.push("--gen-onefile");
      if (options.genMutable) args.push("--gen-mutable");
      if (options.genCompare) args.push("--gen-compare");
      if (options.genNameStrings) args.push("--gen-name-strings");
      if (options.reflectNames) args.push("--reflect-names");
      if (options.reflectTypes) args.push("--reflect-types");
      if (options.genJsonEmit) args.push("--gen-json-emit");
      if (options.noIncludes) args.push("--no-includes");
      if (options.keepPrefix) args.push("--keep-prefix");
      if (options.noWarnings) args.push("--no-warnings");
      if (options.genAll) args.push("--gen-all");
      if (options.pythonTyping) args.push("--python-typing");
      if (options.tsFlexBuffers) args.push("--ts-flexbuffers");
      if (options.tsNoImportExt) args.push("--ts-no-import-ext");
      if (options.goModule) args.push("--go-module", options.goModule);
      if (options.goPackagePrefix) args.push("--go-package-prefix", options.goPackagePrefix);

      args.push(schemaInput.entry);

      const result = this.runCommand(args);
      if (result.code !== 0 || result.stderr.includes("error:")) {
        throw new Error(
          `flatc code generation failed (exit ${result.code}):\n${result.stderr || result.stdout}`,
        );
      }

      const output = {};
      const walk = (dir, base = "") => {
        const entries = this.Module.FS.readdir(dir).filter((entry) => entry !== "." && entry !== "..");
        for (const entry of entries) {
          const fullPath = `${dir}/${entry}`;
          const relPath = base ? `${base}/${entry}` : entry;
          const stat = this.Module.FS.stat(fullPath);
          if (this.Module.FS.isDir(stat.mode)) {
            walk(fullPath, relPath);
          } else {
            output[relPath] = this.Module.FS.readFile(fullPath, { encoding: "utf8" });
          }
        }
      };

      walk(outDir);
      return output;
    } finally {
      cleanupDir(outDir);
    }
  }

  _mountSchemaIfNeeded(schemaInput) {
    validateSchemaInput(schemaInput);

    const schemaUnchanged =
      this._cachedSchema &&
      this._cachedSchema.entry === schemaInput.entry &&
      Object.keys(this._cachedSchema.files).length === Object.keys(schemaInput.files).length &&
      Object.keys(this._cachedSchema.files).every(
        (key) => schemaInput.files[key] && this._cachedSchema.files[key] === schemaInput.files[key],
      );

    if (!schemaUnchanged) {
      this.mountFiles(
        Object.entries(schemaInput.files).map(([path, data]) => ({
          path,
          data: typeof data === "string" ? data : new Uint8Array(data),
        })),
      );
      this._cachedSchema = schemaInput;
      this._cachedIncludeDirs = getIncludeDirs(schemaInput);
    }
  }
}

export default FlatcRunner;
