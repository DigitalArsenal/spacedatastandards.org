#!/usr/bin/env node
/**
 * Updates the schema count in index.html from the manifest.json
 * Run this script before committing to ensure the webpage displays the correct count.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT_DIR, 'dist', 'manifest.json');
const INDEX_PATH = path.join(ROOT_DIR, 'index.html');

function main() {
  // Read manifest
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.log('Manifest not found at', MANIFEST_PATH);
    console.log('Skipping schema count update.');
    process.exit(0);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  const schemaCount = Object.keys(manifest.STANDARDS || {}).length;

  if (schemaCount === 0) {
    console.log('No standards found in manifest. Skipping update.');
    process.exit(0);
  }

  // Read index.html
  if (!fs.existsSync(INDEX_PATH)) {
    console.error('index.html not found at', INDEX_PATH);
    process.exit(1);
  }

  let indexHtml = fs.readFileSync(INDEX_PATH, 'utf-8');

  // Update the schema count pattern: X(0,Y=NUMBER) where X and Y are minified variable names
  // This appears in the Svelte catch block as a fallback count
  const pattern = /([a-z])\(0,([a-z])=(\d{2,3})\)/g;

  // Find the right match (it's inside a catch block near STANDARDS)
  let replaced = false;
  const updatedHtml = indexHtml.replace(pattern, (match, fn, varName, currentCount) => {
    const num = parseInt(currentCount);
    // Only replace if it's a plausible schema count (between 50 and 300)
    if (num >= 50 && num <= 300) {
      // Verify this is near STANDARDS keyword
      const idx = indexHtml.indexOf(match);
      const context = indexHtml.substring(Math.max(0, idx - 100), idx);
      if (context.includes('STANDARDS')) {
        replaced = true;
        return `${fn}(0,${varName}=${schemaCount})`;
      }
    }
    return match;
  });

  if (!replaced) {
    console.error('Could not find schema count pattern in index.html');
    // Exit gracefully - the count is loaded dynamically from manifest.json
    process.exit(0);
  }

  if (updatedHtml === indexHtml) {
    console.log(`Schema count already set to ${schemaCount}. No changes needed.`);
    process.exit(0);
  }

  fs.writeFileSync(INDEX_PATH, updatedHtml);
  console.log(`Updated schema count to ${schemaCount} in index.html`);
}

main();
