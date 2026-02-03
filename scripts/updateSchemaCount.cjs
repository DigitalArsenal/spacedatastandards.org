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

  // Update the schema count pattern: n(0,a=NUMBER)
  const pattern = /n\(0,a=\d+\)/g;
  const replacement = `n(0,a=${schemaCount})`;

  if (!pattern.test(indexHtml)) {
    console.error('Could not find schema count pattern in index.html');
    process.exit(1);
  }

  // Reset lastIndex after test
  pattern.lastIndex = 0;

  const updatedHtml = indexHtml.replace(pattern, replacement);

  if (updatedHtml === indexHtml) {
    console.log(`Schema count already set to ${schemaCount}. No changes needed.`);
    process.exit(0);
  }

  fs.writeFileSync(INDEX_PATH, updatedHtml);
  console.log(`Updated schema count to ${schemaCount} in index.html`);
}

main();
