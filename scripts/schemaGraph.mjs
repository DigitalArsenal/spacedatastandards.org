import { promises as fs } from "node:fs";
import path from "node:path";

export const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
export const SCHEMA_DIR = path.join(REPO_ROOT, "schema");
export const LIB_DIR = path.join(REPO_ROOT, "lib");
export const DATATYPES_PATH = path.join(path.dirname(new URL(import.meta.url).pathname), "datatypes.json");

function normalizeEntry(entry) {
  if (!Array.isArray(entry) || entry.length < 4) {
    throw new Error(`Invalid datatypes.json entry: ${JSON.stringify(entry)}`);
  }
  const [args, label, ext, mediaType] = entry;
  return {
    flatcArgs: Array.isArray(args) ? args : [args],
    label,
    ext,
    mediaType,
  };
}

export async function loadDatatypeConfigs() {
  const contents = await fs.readFile(DATATYPES_PATH, "utf8");
  const parsed = JSON.parse(contents);
  return parsed.map(normalizeEntry);
}

export async function listSchemaDirectories({ skip = [] } = {}) {
  const skipSet = new Set(skip.map((value) => String(value).toUpperCase()));
  const entries = await fs.readdir(SCHEMA_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !skipSet.has(name.toUpperCase()))
    .sort((left, right) => left.localeCompare(right));
}

export async function readSchemaFile(schemaName) {
  return fs.readFile(path.join(SCHEMA_DIR, schemaName, "main.fbs"), "utf8");
}

export function parseIncludeTargets(schemaSource) {
  return Array.from(
    String(schemaSource).matchAll(/include\s+"((?:\.\.\/)?[^"]+)";/g),
    (match) => match[1],
  );
}

function resolveIncludeTarget(fromSchemaName, includePath) {
  const normalized = String(includePath).replaceAll("\\", "/");
  if (normalized.startsWith("../")) {
    const parts = normalized.split("/");
    if (parts.length >= 2) {
      return parts[1];
    }
  }
  if (normalized.endsWith("/main.fbs")) {
    return normalized.split("/").at(-2) ?? fromSchemaName;
  }
  return fromSchemaName;
}

export async function loadSchemaInput(schemaName) {
  const files = {};
  const visited = new Set();
  const compilationUnits = [];

  async function visit(currentSchemaName) {
    if (visited.has(currentSchemaName)) {
      return;
    }
    visited.add(currentSchemaName);
    const source = await readSchemaFile(currentSchemaName);
    const filePath = `/schemas/${currentSchemaName}/main.fbs`;
    files[filePath] = source;
    compilationUnits.push(filePath);
    for (const includePath of parseIncludeTargets(source)) {
      await visit(resolveIncludeTarget(currentSchemaName, includePath));
    }
  }

  await visit(schemaName);
  return {
    entry: `/schemas/${schemaName}/main.fbs`,
    files,
    compilationUnits,
  };
}
