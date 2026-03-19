#!/usr/bin/env node

/**
 * Pre-computes semantic embeddings for all schema descriptions + keywords.
 * Output: dist/schema-embeddings.json
 * Used by the website for in-browser semantic search.
 */

import { pipeline } from '@huggingface/transformers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Same description overrides and keywords as Schemas.svelte
const descriptionOverrides = {
  "CAT": "Satellite Catalog Entity - object types, ops status, orbit info, NORAD numbers",
  "CDM": "Conjunction Data Message - collision assessment with miss distance and probability",
  "GJN": "GeoJSON geographic data structures - points, lines, polygons, features",
  "KML": "Keyhole Markup Language - geographic annotation and visualization",
  "CMS": "Communications System - transponder channels, modulation, data rates",
  "COM": "Communications Link - RF link analysis, frequency bands, propagation",
  "MNV": "Orbit Maneuver - detected, planned, or executed maneuvers",
  "MNF": "Orbit Manifold - manifold propagation with delta-V and probability weights",
  "RFM": "Reference Frame - CCSDS celestial and terrestrial coordinate frames",
  "ATM": "Atmospheric Model - CCSDS SANA registry of atmosphere density models",
  "LCC": "Legacy Country Code - historical satellite operator country codes",
  "RDM": "Reentry Data Message - reentry predictions, impact zones, breakup analysis",
  "VCM": "Vector Covariance Message - osculating/mean elements with covariance",
  "IDM": "Identification Metadata - instrument and sensor metadata with polarization",
  "ION": "Ionospheric Data - TEC, critical frequencies, electron density profiles",
  "AST": "Astrodynamics - propagator methods, force models, orbital regimes",
  "PHY": "Physics Simulation - integration methods, collision shapes, materials",
  "RFE": "RF Emitter - emitter signatures with PRI, pulse width, modulation",
  "SEN": "Sensor Management - maintenance, tasking plans, calibration, status",
  "TKG": "Tracking Filters - Kalman, IMM, JPDA, MHT with motion models",
  "STF": "Data Storefront - marketplace listings with pricing and access types",
  "PLG": "Plugin System - WASM plugins for sensors, propagators, renderers",
  "REC": "Record Union - universal polymorphic record type for all standards",
  "ACR": "Aircraft - types, flight phases, engines, aerodynamics",
  "ARM": "Armor Penetration - materials, ammunition types, penetration calculations",
  "BAL": "Ballistics - drag models, projectile types, trajectory computation",
  "DMG": "Damage Model - vehicle module damage states, casualties, fire/flooding",
  "EWR": "Electronic Warfare - jamming, threat categories, countermeasures",
  "GNO": "GNSS Observation - GPS/GLONASS/Galileo/BeiDou pseudorange and carrier phase",
  "MSL": "Missile - types, seeker guidance, flight phases",
  "SON": "Sonar - active/passive sonar types, propagation models",
  "ACM": "Attitude Comprehensive Message - quaternions, Euler angles, spin states",
};

const keywordsMap = {
  "OMM": ["orbit", "satellite", "TLE", "two-line element", "keplerian", "mean motion", "SGP4", "NORAD", "propagation", "ephemeris", "inclination", "eccentricity", "BSTAR", "space-track"],
  "OEM": ["orbit", "ephemeris", "trajectory", "position", "velocity", "propagation", "state vector", "CCSDS"],
  "OPM": ["orbit", "parameter", "state vector", "keplerian", "maneuver", "delta-v", "CCSDS"],
  "OCM": ["orbit", "comprehensive", "trajectory", "covariance", "maneuver", "perturbation", "CCSDS"],
  "BOV": ["burn out", "vector", "launch", "trajectory", "EFG", "velocity", "epoch"],
  "MNV": ["maneuver", "orbit change", "delta-v", "station-keeping", "thrust", "burn"],
  "MFE": ["manifold", "element set", "temporary", "satellite number", "TLE"],
  "MNF": ["manifold", "propagation", "delta-v", "probability", "candidate"],
  "MPE": ["minimum", "propagatable", "compact", "mean motion", "BSTAR", "TLE subset"],
  "STV": ["state vector", "position", "velocity", "epoch", "coordinates"],
  "OBT": ["orbit", "track", "lat", "lon", "altitude", "identity", "AOU"],
  "OBD": ["orbit determination", "Kalman", "batch least squares", "residuals", "sensor"],
  "OSM": ["observation", "stability", "pass", "duration", "sensor"],
  "AST": ["astrodynamics", "propagator", "SGP4", "HPOP", "force model", "orbital regime"],
  "PCF": ["propagator", "configuration", "integrator", "RK4", "gravity", "force model"],
  "VCM": ["vector", "covariance", "osculating", "mean elements", "perturbation"],
  "AEM": ["attitude", "ephemeris", "quaternion", "angular rate", "rotation", "CCSDS"],
  "APM": ["attitude", "parameter", "quaternion", "single epoch", "orientation", "CCSDS"],
  "ACM": ["attitude", "comprehensive", "quaternion", "Euler", "spin", "direction cosine"],
  "ATD": ["attitude", "data point", "observation", "stabilized", "spinning", "tumbling"],
  "CDM": ["conjunction", "collision", "close approach", "miss distance", "probability", "screening", "covariance", "TCA", "space debris"],
  "CSM": ["conjunction", "summary", "close approach", "TCA", "range", "collision probability"],
  "HYP": ["hypothesis", "event", "analysis", "matrix", "score", "categorization"],
  "TDM": ["tracking", "data", "observation", "range", "Doppler", "angles", "CCSDS"],
  "TRK": ["track", "space", "air", "surface", "subsurface", "position", "identity"],
  "TKG": ["tracking", "filter", "Kalman", "IMM", "JPDA", "MHT", "motion model"],
  "CAT": ["catalog", "satellite", "object", "payload", "debris", "rocket body", "NORAD", "designator", "operational status", "Celestrak", "COSPAR"],
  "OON": ["on-orbit", "satellite", "constellation", "mission", "antenna", "battery", "thruster"],
  "OOD": ["on-orbit", "details", "visual magnitude", "RCS", "delta-v", "mass", "cross section"],
  "OOL": ["on-orbit", "list", "collection", "object identifiers"],
  "OOI": ["object of interest", "tasking", "collection", "priority", "sensor assignment"],
  "OOE": ["on-orbit", "event", "anomaly", "failure", "breakup", "collision", "retirement"],
  "OOA": ["antenna", "parabolic", "phased array", "gain", "beamwidth", "polarization"],
  "OOB": ["battery", "lithium", "NiCd", "capacity", "cycle life", "state of health"],
  "OOS": ["solar array", "solar cell", "power", "efficiency", "degradation", "BOL", "EOL"],
  "OOT": ["thruster", "propulsion", "chemical", "electric", "ISP", "propellant", "thrust"],
  "SOI": ["space object identification", "photometry", "lightcurve", "calibration"],
  "IDM": ["identification", "metadata", "instrument", "sensor", "polarization", "frequency"],
  "EOO": ["electro-optical", "optical", "telescope", "RA", "DEC", "angles", "tracking"],
  "IRO": ["infrared", "IR", "SWIR", "MWIR", "LWIR", "flux", "magnitude", "temperature"],
  "RDO": ["radar", "observation", "azimuth", "elevation", "range", "Doppler", "tracking"],
  "SAR": ["synthetic aperture radar", "SAR", "stripmap", "spotlight", "GMTI", "polarization"],
  "RFO": ["RF", "radio frequency", "observation", "transponder", "beacon", "telemetry", "emission"],
  "GNO": ["GNSS", "GPS", "GLONASS", "Galileo", "BeiDou", "pseudorange", "carrier phase", "navigation"],
  "DOA": ["difference of arrival", "TDOA", "FDOA", "AOA", "geolocation", "RF"],
  "MTI": ["moving target indicator", "STANAG", "radar", "dwell", "HRR", "ground moving"],
  "SWR": ["short-wave infrared", "SWIR", "spectroscopy", "wavelength", "flux", "temperature"],
  "GDI": ["ground imagery", "FITS", "JPEG", "TIFF", "GEOTIFF", "image", "photography"],
  "SKI": ["sky imagery", "survey", "visible", "IR", "multispectral", "quaternion"],
  "ANI": ["analytic imagery", "spectral", "photometric", "feature extraction", "classification"],
  "SNR": ["sensor systems", "radar", "IR", "EO", "laser", "sonar", "FOV", "range"],
  "SEN": ["sensor", "maintenance", "tasking", "calibration", "operational status"],
  "COM": ["communications", "RF", "link", "modulation", "frequency", "propagation", "ITU"],
  "CMS": ["communications", "system", "transponder", "modulation", "BPSK", "QPSK", "DVB-S2", "data rate"],
  "CHN": ["channel", "transponder", "beam", "RF", "encryption", "compression"],
  "TPN": ["transponder", "symbol rate", "FEC", "modulation", "channel", "satellite"],
  "RFB": ["RF band", "UHF", "L-band", "S-band", "C-band", "X-band", "Ku", "Ka", "frequency", "EIRP"],
  "RFE": ["RF emitter", "radar", "jammer", "PRI", "pulse width", "modulation", "signature"],
  "LKS": ["link status", "crosslink", "satellite-to-satellite", "ISL", "RF", "beam"],
  "BEM": ["beam", "antenna", "spot", "regional", "global", "polarization", "gain", "contour"],
  "BMC": ["beam contour", "iso-gain", "boundary", "GeoJSON", "WKT", "coverage"],
  "ENV": ["atmosphere", "environment", "weather", "terrain", "simulation"],
  "SEO": ["space environment", "radiation", "particles", "magnetic field", "charging", "weather"],
  "SEV": ["space environment", "observation", "measurement", "quality", "weather"],
  "ION": ["ionosphere", "TEC", "electron density", "critical frequency", "propagation"],
  "ATM": ["atmosphere", "model", "density", "CIRA", "DTM", "MSIS", "JB2008", "drag"],
  "SPW": ["space weather", "Kp", "solar flux", "F10.7", "Ap", "sunspot", "geomagnetic"],
  "WTH": ["weather", "radar", "radiosonde", "Doppler", "precipitation", "meteorology"],
  "GRV": ["gravity", "geopotential", "EGM2008", "WGS84", "spherical harmonics", "perturbation"],
  "EOP": ["earth orientation", "pole wander", "UT1", "TAI", "UTC", "length of day", "celestial pole"],
  "PHY": ["physics", "simulation", "integration", "collision", "material", "force"],
  "TRN": ["terrain", "SRTM", "DTED", "NED", "elevation", "land cover", "topography"],
  "STR": ["star", "catalog", "Gaia", "Hipparcos", "RA", "DEC", "proper motion", "parallax", "magnitude"],
  "LDM": ["launch", "data", "site", "azimuth", "rocket", "mission", "agency", "NET"],
  "LND": ["launch", "detection", "IR", "radar", "optical", "alert", "site", "azimuth"],
  "LNE": ["launch", "event", "history", "vehicle", "facility", "outcome", "record"],
  "ROC": ["rocket", "configuration", "stage", "engine", "fuel", "thrust", "burn", "launch vehicle"],
  "RDM": ["reentry", "data", "controlled", "uncontrolled", "impact zone", "breakup", "disposal"],
  "BUS": ["satellite bus", "spacecraft", "mass", "dimensions", "power", "stabilization", "platform"],
  "PLD": ["payload", "mass", "dimensions", "solar array", "lifetime", "instrument"],
  "GEO": ["geostationary", "GEO", "status", "longitude", "drift", "station-keeping"],
  "DFH": ["GEO", "drift", "history", "geostationary", "longitude", "station-keeping", "slot"],
  "PRG": ["program", "description", "HD key path", "permission", "user assignment"],
  "ACR": ["aircraft", "fighter", "bomber", "transport", "UAV", "drone", "flight", "engine", "aerodynamics"],
  "GVH": ["ground vehicle", "tank", "IFV", "APC", "tracked", "wheeled", "armor", "weapons"],
  "HEL": ["helicopter", "rotor", "VRS", "engine", "torque", "rotorcraft", "VTOL"],
  "MSL": ["missile", "AAM", "SAM", "ASM", "ATGM", "seeker", "guidance", "intercept"],
  "MST": ["missile track", "BMD", "ballistic", "booster", "midcourse", "terminal", "impact"],
  "NAV": ["naval", "vessel", "ship", "carrier", "destroyer", "submarine", "propulsion"],
  "ARM": ["armor", "penetration", "RHA", "composite", "ERA", "ammunition", "AP", "HEAT"],
  "BAL": ["ballistics", "drag", "projectile", "trajectory", "G1", "G7", "6DOF"],
  "DMG": ["damage", "module", "casualty", "fire", "flooding", "vehicle", "ship"],
  "EWR": ["electronic warfare", "jamming", "ESM", "countermeasure", "threat", "ECM", "ECCM"],
  "FCS": ["fire control", "CCIP", "CCRP", "lead", "rangefinder", "ballistic solution", "targeting"],
  "WPN": ["weapon", "munition", "gun", "cannon", "bomb", "caliber", "muzzle velocity", "fuze"],
  "SON": ["sonar", "active", "passive", "hull", "towed array", "dipping", "ASW", "submarine"],
  "SPP": ["space packet", "protocol", "APID", "CCSDS", "telemetry", "telecommand"],
  "AOF": ["AOS", "transfer frame", "orbiting systems", "virtual channel", "CCSDS"],
  "TCF": ["telecommand", "transfer frame", "uplink", "spacecraft", "CCSDS"],
  "TMF": ["telemetry", "transfer frame", "downlink", "OCF", "frame count", "CCSDS"],
  "CFP": ["file delivery", "CFDP", "transfer", "checksum", "CCSDS"],
  "CLT": ["command", "CLTU", "link transmission", "commanding", "CCSDS"],
  "RAF": ["return all frames", "SLE", "downlink", "CCSDS"],
  "RCF": ["return channel frames", "SLE", "virtual channel", "CCSDS"],
  "SDL": ["space data link", "security", "SDLS", "encryption", "MAC", "CCSDS"],
  "XTC": ["XTCE", "telemetry", "command", "metadata", "parameter", "calibration", "OMG"],
  "EME": ["encrypted", "message", "envelope", "ephemeral key", "MAC", "nonce", "cipher"],
  "ENC": ["encryption", "header", "ECDH", "X25519", "AES-256", "HKDF", "field-level"],
  "EPM": ["entity", "profile", "person", "organization", "identity", "contact", "email", "telephone", "address", "name", "cryptographic", "key", "DN", "legal name"],
  "PLK": ["plugin", "license", "key", "ECIES", "X25519", "domain", "expiration", "access"],
  "RFM": ["reference frame", "GCRF", "ICRF", "ITRF", "TEME", "coordinate", "celestial", "terrestrial"],
  "CRD": ["coordinate", "system", "ECEF", "ECI", "NED", "ENU", "WGS84", "ellipsoid"],
  "TIM": ["time", "system", "UTC", "TAI", "TT", "GPS", "GMST"],
  "TME": ["time", "conversion", "leap second", "EOP", "solar", "lunar"],
  "MET": ["mean element", "theory", "SGP4", "SGP4-XP", "DSST", "USM", "propagation"],
  "LCC": ["country", "code", "operator", "COSPAR", "owner", "historical"],
  "CTR": ["country", "identity", "ISO 3166", "GENC", "STANAG", "internet", "ccTLD"],
  "SIT": ["site", "launch site", "observatory", "ground station", "lat", "lon", "geometry"],
  "SCM": ["schema", "manifest", "registry", "version", "IDL", "standard"],
  "CRM": ["collection", "request", "sensor tasking", "priority", "dwell", "UCT"],
  "PNM": ["publish", "notification", "IPFS", "multiformat", "CID", "signature"],
  "ACL": ["access control", "grant", "permission", "buyer", "payment", "encryption key"],
  "PUR": ["purchase", "request", "marketplace", "payment", "crypto", "fiat", "transaction"],
  "REV": ["review", "rating", "storefront", "stars", "proof of purchase"],
  "REC": ["record", "union", "polymorphic", "universal", "all standards"],
  "STF": ["storefront", "marketplace", "listing", "pricing", "spatial", "temporal", "access"],
  "PLG": ["plugin", "WASM", "sensor", "propagator", "renderer", "shader"],
  "GJN": ["GeoJSON", "geographic", "point", "line", "polygon", "feature", "RFC 7946", "geometry"],
  "CZM": ["CZML", "Cesium", "3D", "visualization", "time-dynamic", "scene", "CesiumJS"],
  "KML": ["KML", "Keyhole", "Google Earth", "geographic", "placemark", "style", "OGC"],
  "GPX": ["GPX", "GPS", "exchange", "waypoint", "track", "route", "elevation", "hiking"],
  "COT": ["Cursor on Target", "CoT", "tactical", "ATAK", "TAK", "situational awareness", "XML"],
  "PPE": ["polynomial", "ephemeris", "Chebyshev", "trajectory", "interpolation", "position", "velocity", "orbital elements"],
};

const categoryMap = {};
// Build category map from taxonomy-like structure
const categories = [
  { tag: "Orbit", types: ["OMM","OEM","OPM","OCM","BOV","MNV","MFE","MNF","MPE","STV","OBT","OBD","OSM","AST","PCF","VCM","PPE"] },
  { tag: "Attitude", types: ["AEM","APM","ACM","ATD"] },
  { tag: "Conjunction", types: ["CDM","CSM","HYP"] },
  { tag: "Tracking", types: ["TDM","TRK","TKG"] },
  { tag: "Objects", types: ["CAT","OON","OOD","OOL","OOI","OOE","OOA","OOB","OOS","OOT","SOI","IDM"] },
  { tag: "Observation", types: ["EOO","IRO","RDO","SAR","RFO","GNO","DOA","MTI","SWR","GDI","SKI","ANI","SNR","SEN"] },
  { tag: "Comms", types: ["COM","CMS","CHN","TPN","RFB","RFE","LKS","BEM","BMC"] },
  { tag: "Environment", types: ["ENV","SEO","SEV","ION","ATM","SPW","WTH","GRV","EOP","PHY","TRN","STR"] },
  { tag: "Launch", types: ["LDM","LND","LNE","ROC","RDM"] },
  { tag: "Vehicle", types: ["BUS","PLD","GEO","DFH","PRG"] },
  { tag: "Defense", types: ["ACR","GVH","HEL","MSL","MST","NAV","ARM","BAL","DMG","EWR","FCS","WPN","SON"] },
  { tag: "Protocol", types: ["SPP","AOF","TCF","TMF","CFP","CLT","RAF","RCF","SDL","XTC"] },
  { tag: "Security", types: ["EME","ENC","EPM","PLK"] },
  { tag: "Reference", types: ["RFM","CRD","TIM","TME","MET","LCC","CTR","SIT","SCM"] },
  { tag: "Exchange", types: ["CRM","PNM","ACL","PUR","REV","REC","STF","PLG"] },
  { tag: "Geospatial", types: ["GJN","CZM","KML","GPX","COT"] },
];
for (const cat of categories) {
  for (const t of cat.types) {
    categoryMap[t] = cat.tag;
  }
}

function extractDescription(idl, key) {
  const rootTableRegex = new RegExp(`\\/\\/\\/\\s*(.+?)\\n(?:\\/\\/.*\\n)*\\s*table\\s+${key}\\b`);
  const rootMatch = idl.match(rootTableRegex);
  if (rootMatch) return rootMatch[1].trim();
  const tableMatch = idl.match(/\/\/\/\s*(.+?)\n(?:\/\/.*\n)*\s*table\s+\w+/);
  if (tableMatch) return tableMatch[1].trim();
  return key + " Message";
}

async function main() {
  console.log('Loading manifest...');
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'dist/manifest.json'), 'utf-8'));

  // Build text for each schema
  const schemaTexts = [];
  const schemaKeys = [];

  for (const [key, data] of Object.entries(manifest.STANDARDS || {})) {
    const description = descriptionOverrides[key] || extractDescription(data.IDL || '', key);
    const keywords = keywordsMap[key] || [];
    const category = categoryMap[key] || 'Other';

    // Rich text combining all semantic info
    const text = `${key}: ${description}. Category: ${category}. Keywords: ${keywords.join(', ')}`;
    schemaTexts.push(text);
    schemaKeys.push(key);
  }

  console.log(`Generating embeddings for ${schemaTexts.length} schemas...`);

  // Load the embedding model
  const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

  // Generate embeddings in batches
  const embeddings = {};
  for (let i = 0; i < schemaTexts.length; i++) {
    const result = await embedder(schemaTexts[i], { pooling: 'mean', normalize: true });
    embeddings[schemaKeys[i]] = Array.from(result.data);

    if ((i + 1) % 20 === 0) {
      console.log(`  ${i + 1}/${schemaTexts.length} done`);
    }
  }

  console.log(`  ${schemaTexts.length}/${schemaTexts.length} done`);

  const output = {
    model: 'Xenova/all-MiniLM-L6-v2',
    dimensions: 384,
    embeddings
  };

  const outPath = path.join(ROOT, 'dist/schema-embeddings.json');
  fs.writeFileSync(outPath, JSON.stringify(output));
  console.log(`Written ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
}

main().catch(console.error);
