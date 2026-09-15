#!/usr/bin/env node
// Prove that the PRW extension preserves every pre-existing wire declaration.
// Usage: node scripts/checkPrwAppendOnly.mjs [base-ref]
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_BASE = 'f95c2cf8b1b1357e7e4a1fc4617682bcecc992af';
const SCHEMA_PATH = 'schema/PRW/main.fbs';
const DECLARATION_KINDS = new Set(['table', 'struct', 'enum', 'union']);

function requireInvariant(condition, message) {
  assert.ok(condition, `PRW append-only violation: ${message}`);
}

// Recognize quoted strings before comments, so URLs and comment-like string
// defaults remain intact. Joining tokens normalizes whitespace only.
function tokenize(source) {
  return [...source.matchAll(/"(?:\\.|[^"\\])*"|\/\/[^\n]*|\/\*[\s\S]*?\*\/|[A-Za-z_][A-Za-z_0-9]*|0[xX][0-9a-fA-F]+|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|[^\s]/g)]
    .map(([token]) => token)
    .filter(token => !token.startsWith('//') && !token.startsWith('/*'));
}

function splitMembers(tokens, delimiter, label) {
  const members = [];
  let current = [];
  let depth = 0;
  for (const token of tokens) {
    if ('([{'.includes(token)) depth += 1;
    if (')]}'.includes(token)) depth -= 1;
    requireInvariant(depth >= 0, `unbalanced ${label}`);
    if (token === delimiter && depth === 0) {
      if (current.length) members.push(current.join(' '));
      current = [];
    } else {
      current.push(token);
    }
  }
  requireInvariant(depth === 0, `unbalanced ${label}`);
  if (current.length) {
    requireInvariant(delimiter === ',', `${label} is missing a field terminator`);
    members.push(current.join(' '));
  }
  return members;
}

function parseSchema(source) {
  const tokens = tokenize(source);
  const declarations = [];
  const names = new Set();
  const directives = new Map();
  for (let cursor = 0; cursor < tokens.length;) {
    const kind = tokens[cursor++];
    if (DECLARATION_KINDS.has(kind)) {
      const name = tokens[cursor++];
      requireInvariant(!names.has(name), `duplicate declaration ${name}`);
      names.add(name);
      const header = [];
      while (cursor < tokens.length && tokens[cursor] !== '{') header.push(tokens[cursor++]);
      requireInvariant(tokens[cursor++] === '{', `${name} has no body`);
      const body = [];
      let depth = 1;
      while (cursor < tokens.length && depth) {
        const token = tokens[cursor++];
        if (token === '{') depth += 1;
        if (token === '}') depth -= 1;
        if (depth) body.push(token);
      }
      requireInvariant(depth === 0, `${name} has an unterminated body`);
      declarations.push({
        kind,
        name,
        header: header.join(' '),
        members: splitMembers(body, kind === 'enum' || kind === 'union' ? ',' : ';', name),
      });
      if (tokens[cursor] === ';') cursor += 1;
    } else {
      const value = [];
      while (cursor < tokens.length && tokens[cursor] !== ';') value.push(tokens[cursor++]);
      requireInvariant(tokens[cursor++] === ';', `unterminated ${kind} directive`);
      if (kind === 'root_type' || kind === 'file_identifier' || kind === 'namespace') {
        requireInvariant(!directives.has(kind), `duplicate ${kind} directive`);
        directives.set(kind, value.join(' '));
      }
    }
  }
  return { declarations, directives };
}

/** Compare parsed IDL without depending on generated bindings or flatc. */
export function assertPrwAppendOnly(oldSource, newSource) {
  const before = parseSchema(oldSource);
  const after = parseSchema(newSource);
  for (const directive of ['root_type', 'file_identifier', 'namespace']) {
    requireInvariant(before.directives.get(directive) === after.directives.get(directive), `${directive} changed`);
  }
  requireInvariant(before.directives.has('root_type'), 'base schema has no root_type');
  requireInvariant(before.directives.has('file_identifier'), 'base schema has no file_identifier');

  const oldNames = new Set(before.declarations.map(declaration => declaration.name));
  const retained = after.declarations.filter(declaration => oldNames.has(declaration.name));
  requireInvariant(
    retained.map(declaration => declaration.name).join(',') === before.declarations.map(declaration => declaration.name).join(','),
    'existing declarations were removed or reordered',
  );
  const additions = [];
  for (const [index, previous] of before.declarations.entries()) {
    const next = retained[index];
    requireInvariant(previous.kind === next.kind, `${previous.name} declaration kind changed`);
    requireInvariant(previous.header === next.header, `${previous.name} attributes or underlying type changed`);
    requireInvariant(next.members.length >= previous.members.length, `${previous.name} members were removed`);
    for (const [slot, member] of previous.members.entries()) {
      // Keeping explicit values AND the complete implicit member prefix means
      // enum values (including bit_flags positions) cannot shift silently.
      requireInvariant(member === next.members[slot], `${previous.name} member ${slot} changed: ${member} -> ${next.members[slot]}`);
    }
    const appended = next.members.slice(previous.members.length);
    if (appended.length) {
      requireInvariant(previous.kind !== 'struct', `${previous.name} fixed-layout struct grew`);
      additions.push({ name: previous.name, kind: previous.kind, startSlot: previous.members.length, members: appended });
    }
  }

  const oldTables = before.declarations.filter(declaration => declaration.kind === 'table');
  const oldEnums = before.declarations.filter(declaration => declaration.kind === 'enum');
  return {
    tableCount: oldTables.length,
    fieldCount: oldTables.reduce((count, declaration) => count + declaration.members.length, 0),
    enumCount: oldEnums.length,
    enumMemberCount: oldEnums.reduce((count, declaration) => count + declaration.members.length, 0),
    rootType: before.directives.get('root_type'),
    fileIdentifier: before.directives.get('file_identifier'),
    additions,
    newDeclarations: after.declarations.filter(declaration => !oldNames.has(declaration.name)).map(({ kind, name }) => ({ kind, name })),
  };
}

function main() {
  requireInvariant(process.argv.length <= 3, 'usage: node scripts/checkPrwAppendOnly.mjs [base-ref]');
  const base = process.argv[2] || DEFAULT_BASE;
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const oldSource = execFileSync('git', ['show', `${base}:${SCHEMA_PATH}`], { cwd: repoRoot, encoding: 'utf8' });
  const newSource = readFileSync(path.join(repoRoot, SCHEMA_PATH), 'utf8');
  const proof = assertPrwAppendOnly(oldSource, newSource);
  console.log(`PASS PRW append-only against ${base}`);
  console.log(`Preserved ${proof.tableCount} tables / ${proof.fieldCount} fields and ${proof.enumCount} enums / ${proof.enumMemberCount} members.`);
  console.log(`Unchanged root_type ${proof.rootType}; file_identifier ${proof.fileIdentifier}.`);
  for (const addition of proof.additions) {
    console.log(`Appended ${addition.name} ${addition.kind === 'table' ? 'field slots' : 'members'} ${addition.startSlot}..${addition.startSlot + addition.members.length - 1}: ${addition.members.join('; ')}`);
  }
  console.log(`New declarations (${proof.newDeclarations.length}): ${proof.newDeclarations.map(({ kind, name }) => `${kind} ${name}`).join(', ') || 'none'}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
