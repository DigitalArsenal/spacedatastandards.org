/**
 * Fix TypeScript casing conflicts in flatc-generated REC code.
 *
 * Problem: When flatc generates TypeScript for the REC union (which includes
 * all schemas), it sometimes PascalCases enum names (e.g., modulationType ->
 * ModulationType) in the enum definition file, but other files still reference
 * the original camelCase name. On macOS (case-insensitive FS), filenames
 * like modulationType.ts and ModulationType.ts also collide.
 *
 * Solution:
 * 1. Scan all .ts files in lib/ts/REC/ to find actual exported enum names
 * 2. Build a correction map (wrong casing -> correct casing)
 * 3. Fix imports, exports, and type references across all files
 * 4. Remove duplicate exports from main.ts
 */
import fs from 'fs';
import path from 'path';

const recDir = path.join('lib', 'ts', 'REC');

if (!fs.existsSync(recDir)) {
  console.log('No REC directory found, skipping casing fix.');
  process.exit(0);
}

// Phase 1: Build map of actual exports per file
// On case-insensitive FS, multiple filenames may resolve to the same file.
// We read the actual content to determine the canonical export name.
const exportsByLowerFile = new Map(); // lowercase filename -> { actualFile, exports: Map<lower, actual> }
const casingFixes = new Map(); // wrong name (string) -> correct name (string)

for (const file of fs.readdirSync(recDir)) {
  if (!file.endsWith('.ts')) continue;

  const content = fs.readFileSync(path.join(recDir, file), 'utf-8');
  const exports = new Map();

  const exportRegex = /export\s+(?:enum|class|function|const|type|interface)\s+(\w+)/g;
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    const name = match[1];
    exports.set(name.toLowerCase(), name);

    // If the file name doesn't match the export name casing, record both variants
    const baseName = file.replace('.ts', '');
    if (baseName !== name && baseName.toLowerCase() === name.toLowerCase()) {
      // File is named differently from the export - record the fix
      casingFixes.set(baseName, name);
    }
  }

  const key = file.toLowerCase();
  if (!exportsByLowerFile.has(key)) {
    exportsByLowerFile.set(key, { actualFile: file, exports });
  }
}

// Phase 2: Fix all .ts files
let totalFixed = 0;
let totalDuplicatesRemoved = 0;

for (const file of fs.readdirSync(recDir)) {
  if (!file.endsWith('.ts')) continue;

  const filePath = path.join(recDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix import/export lines
  const lines = content.split('\n');
  const fixedLines = [];
  const seenExports = new Set();

  for (const line of lines) {
    let fixedLine = line;

    // Fix import/export from statements
    const importMatch = line.match(/^((?:import|export)\s*\{)\s*(\w+)\s*(\}\s*from\s*'\.\/)(\w+)(\.js'\s*;?\s*)$/);
    if (importMatch) {
      const [, prefix, symbolName, mid, moduleName, suffix] = importMatch;
      const lookupKey = (moduleName + '.ts').toLowerCase();
      const fileInfo = exportsByLowerFile.get(lookupKey);

      if (fileInfo) {
        // Deduplicate exports in main.ts
        if (file === 'main.ts' && line.startsWith('export')) {
          if (seenExports.has(lookupKey)) {
            totalDuplicatesRemoved++;
            modified = true;
            continue;
          }
          seenExports.add(lookupKey);
        }

        const correctSymbol = fileInfo.exports.get(symbolName.toLowerCase()) || symbolName;
        const correctModule = fileInfo.actualFile.replace('.ts', '');
        fixedLine = `${prefix} ${correctSymbol} ${mid}${correctModule}${suffix}`;
      }
    }

    fixedLines.push(fixedLine);
  }

  content = fixedLines.join('\n');

  // Phase 3: Fix type references throughout the file
  // Replace wrong-cased enum/type references with correct casing
  for (const [wrongName, correctName] of casingFixes) {
    if (wrongName === correctName) continue;

    // Use word-boundary matching to avoid partial replacements
    const regex = new RegExp(`\\b${wrongName}\\b`, 'g');
    const before = content;
    content = content.replace(regex, correctName);
    if (content !== before) {
      modified = true;
      totalFixed++;
    }
  }

  // Also check the reverse direction
  for (const [wrongName, correctName] of casingFixes) {
    // The "wrongName" is the file-based name, "correctName" is the exported name
    // But some files might reference the file-based name instead of the export
    // We already handled this above. Let's also check if any file uses a
    // PascalCase variant that should be camelCase.
  }

  if (modified || content !== fs.readFileSync(filePath, 'utf-8')) {
    fs.writeFileSync(filePath, content);
  }
}

console.log(`Fixed REC TypeScript: ${totalFixed} references corrected, ${totalDuplicatesRemoved} duplicates removed, ${casingFixes.size} casing mappings found.`);
if (casingFixes.size > 0) {
  for (const [from, to] of casingFixes) {
    console.log(`  ${from} -> ${to}`);
  }
}
