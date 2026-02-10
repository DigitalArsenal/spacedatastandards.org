// Detect case-insensitive name collisions across FlatBuffer schemas.
// Scans all schema/<name>/main.fbs files for enum, table, and struct declarations,
// then flags any names that collide when compared case-insensitively.
// Exits with code 1 if collisions are found.
import fs from 'fs';
import path from 'path';

const schemaDir = 'schema';
const declRegex = /^(?:enum|table|struct)\s+(\w+)/gm;

// Collect all declarations: Map<lowerName, Array<{name, schema, type}>>
const byLower = new Map();

for (const dir of fs.readdirSync(schemaDir)) {
  const fbsPath = path.join(schemaDir, dir, 'main.fbs');
  if (!fs.existsSync(fbsPath)) continue;

  const content = fs.readFileSync(fbsPath, 'utf-8');
  let match;
  while ((match = declRegex.exec(content)) !== null) {
    const name = match[0].split(/\s+/)[1];
    const type = match[0].split(/\s+/)[0];
    const key = name.toLowerCase();
    if (!byLower.has(key)) byLower.set(key, []);
    byLower.get(key).push({ name, schema: dir, type });
  }
}

// Report collisions
let found = 0;
for (const [key, entries] of byLower) {
  if (entries.length <= 1) continue;
  // Only flag if the names differ (same name reused across schemas is a different issue)
  const names = new Set(entries.map(e => e.name));
  if (names.size <= 1) continue;

  found++;
  const details = entries.map(e => `  ${e.schema}: ${e.type} ${e.name}`).join('\n');
  console.error(`Case-insensitive collision on "${key}":\n${details}`);
}

if (found > 0) {
  console.error(`\n${found} case-insensitive name collision(s) found in schemas.`);
  console.error('Rename the conflicting types to have distinct names (e.g., prefix with schema abbreviation).');
  process.exit(1);
}
