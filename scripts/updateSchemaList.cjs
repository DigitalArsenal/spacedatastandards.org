#!/usr/bin/env node
/**
 * Updates the schema list in index.html from manifest.json
 * Extracts descriptions from /// comments in IDL
 * Assigns categories based on schema type
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT_DIR, 'dist', 'manifest.json');
const INDEX_PATH = path.join(ROOT_DIR, 'index.html');

// Category mappings based on schema purpose
const CATEGORY_MAP = {
  // Orbital
  'OMM': 'Orbital', 'OEM': 'Orbital', 'OCM': 'Orbital', 'OSM': 'Orbital', 'OPM': 'Orbital',
  'MET': 'Orbital', 'MPE': 'Orbital', 'OOD': 'Orbital', 'OOE': 'Orbital', 'OOI': 'Orbital',
  'OOL': 'Orbital', 'OON': 'Orbital', 'OBD': 'Orbital', 'OBT': 'Orbital',

  // Conjunction/SSA
  'CDM': 'Conjunction', 'CSM': 'Conjunction', 'CAT': 'Conjunction', 'HYP': 'Conjunction',

  // Entity/Identity
  'EPM': 'Entity', 'PNM': 'Entity', 'CRM': 'Entity',

  // Tracking
  'TDM': 'Tracking', 'RFM': 'Tracking', 'EOO': 'Tracking', 'TRK': 'Tracking',
  'DOA': 'Tracking', 'RFO': 'Tracking', 'RFB': 'Tracking', 'RFE': 'Tracking',

  // Telemetry
  'XTC': 'Telemetry', 'TIM': 'Telemetry', 'TME': 'Telemetry', 'TMF': 'Telemetry',

  // Maneuver
  'MNV': 'Maneuver', 'MNF': 'Maneuver',

  // Propagation
  'EME': 'Propagation', 'EOP': 'Propagation', 'PCF': 'Propagation', 'GRV': 'Propagation',
  'ATM': 'Propagation', 'VCM': 'Propagation',

  // Reference/Launch
  'LCC': 'Reference', 'LDM': 'Reference', 'CTR': 'Reference', 'CRD': 'Reference',
  'LND': 'Reference', 'LNE': 'Reference', 'LKS': 'Reference',

  // Marketplace
  'STF': 'Marketplace', 'PUR': 'Marketplace', 'REV': 'Marketplace', 'ACL': 'Marketplace',
  'ACM': 'Marketplace',

  // Spacecraft/Payload
  'BOV': 'Spacecraft', 'PLD': 'Spacecraft', 'ROC': 'Spacecraft', 'SIT': 'Spacecraft',
  'SCM': 'Spacecraft', 'PRG': 'Spacecraft', 'MFE': 'Spacecraft',
  'BUS': 'Spacecraft', 'OOA': 'Spacecraft', 'OOB': 'Spacecraft',
  'OOS': 'Spacecraft', 'OOT': 'Spacecraft',

  // Communications
  'COM': 'Communications', 'CHN': 'Communications', 'SPP': 'Communications',
  'CFP': 'Communications', 'CLT': 'Communications', 'CMS': 'Communications',
  'TPN': 'Communications', 'DFH': 'Communications',

  // Sensors/Devices
  'IDM': 'Sensors', 'SNR': 'Sensors', 'SEO': 'Sensors', 'SEV': 'Sensors',
  'ANI': 'Sensors', 'SEN': 'Sensors',

  // Attitude
  'AEM': 'Attitude', 'APM': 'Attitude', 'ACR': 'Attitude', 'ATD': 'Attitude',
  'AOF': 'Attitude',

  // Records/Data
  'REC': 'Data', 'RDM': 'Data', 'RDO': 'Data', 'MTI': 'Data', 'MST': 'Data',

  // Physical/Environment
  'PHY': 'Physical', 'ENV': 'Physical', 'GEO': 'Physical', 'GNO': 'Physical',
  'SPW': 'Physical', 'WTH': 'Physical', 'IRO': 'Physical', 'ION': 'Physical',

  // Military/Weapons
  'ARM': 'Military', 'BAL': 'Military', 'BEM': 'Military', 'BMC': 'Military',
  'DMG': 'Military', 'EWR': 'Military', 'FCS': 'Military', 'GDI': 'Military',
  'GVH': 'Military', 'HEL': 'Military', 'MSL': 'Military', 'NAV': 'Military',
  'RAF': 'Military', 'RCF': 'Military', 'SAR': 'Military', 'SKI': 'Military',
  'SON': 'Military', 'SOI': 'Military', 'SDL': 'Military', 'STV': 'Military',
  'STR': 'Military', 'SWR': 'Military', 'TCF': 'Military', 'WPN': 'Military',

  // Plugins
  'PLK': 'Plugins', 'PLG': 'Plugins'
};

/**
 * Extract description from IDL's /// comment for the main table
 */
function extractDescription(idl, schemaName) {
  if (!idl) return null;

  // Look for /// comment directly before "table SchemaName {"
  const tablePattern = new RegExp(`///\\s*([^\\n]+)\\s*\\ntable\\s+${schemaName}\\s*\\{`, 'i');
  const match = idl.match(tablePattern);
  if (match) {
    return match[1].trim();
  }

  // Fallback: look for any /// comment that might be the main description
  const lines = idl.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('/// ') && !line.includes(':')) {
      const nextLine = lines[i + 1]?.trim() || '';
      if (nextLine.startsWith(`table ${schemaName}`) || nextLine.startsWith('table ')) {
        return line.substring(4).trim();
      }
    }
  }

  return null;
}

/**
 * Get category for a schema
 */
function getCategory(schemaName) {
  return CATEGORY_MAP[schemaName] || 'Other';
}

function main() {
  // Check if manifest exists
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.log('Manifest not found at', MANIFEST_PATH);
    process.exit(0);
  }

  // Read manifest
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  const standards = manifest.STANDARDS || {};

  if (Object.keys(standards).length === 0) {
    console.log('No standards found in manifest');
    process.exit(0);
  }

  // Build schema list object
  const schemaList = {};
  for (const [name, data] of Object.entries(standards)) {
    const description = extractDescription(data.IDL, name) || `${name} Standard`;
    const category = getCategory(name);
    schemaList[name] = { description, category };
  }

  // Sort by name
  const sortedKeys = Object.keys(schemaList).sort();
  const sortedSchemaList = {};
  for (const key of sortedKeys) {
    sortedSchemaList[key] = schemaList[key];
  }

  // Generate the category map string
  // Format matches the Svelte component: {OMM:"Orbital",OEM:"Orbital",...}
  const entries = Object.entries(sortedSchemaList).map(([key, value]) => {
    return `${key}:"${value.category}"`;
  });
  const newCategoryMapStr = `{${entries.join(',')}}`;

  // Read index.html
  let indexHtml = fs.readFileSync(INDEX_PATH, 'utf-8');

  // Find and replace the category map pattern in the Svelte component
  // The pattern looks like: const a={OMM:"Orbital",OEM:"Orbital",...}
  const categoryMapPattern = /const\s+([a-z])=\{([A-Z]{2,5}:"[A-Za-z]+",?)+\}/g;

  let replaced = false;
  let matchCount = 0;

  const updatedHtml = indexHtml.replace(categoryMapPattern, (match) => {
    matchCount++;
    // Only replace if it looks like our category map (has OMM:"Orbital")
    if (match.includes('OMM:"Orbital"')) {
      const varMatch = match.match(/const\s+([a-z])=/);
      if (varMatch) {
        replaced = true;
        return `const ${varMatch[1]}=${newCategoryMapStr}`;
      }
    }
    return match;
  });

  if (!replaced) {
    console.log('Could not find category map pattern in index.html');
    console.log(`Found ${matchCount} potential matches but none matched expected format`);
    // Exit gracefully - schemas are loaded dynamically from manifest.json
    process.exit(0);
  }

  // Write updated index.html
  fs.writeFileSync(INDEX_PATH, updatedHtml);
  console.log(`Updated category map with ${Object.keys(sortedSchemaList).length} schemas in index.html`);
}

main();
