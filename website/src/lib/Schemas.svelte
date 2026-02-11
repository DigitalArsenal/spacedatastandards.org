<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { writable, derived } from "svelte/store";

  interface SchemaInfo {
    key: string;
    name: string;
    description: string;
    category: string;
  }

  // Category mapping for all schemas
  const categoryMap: Record<string, string> = {
    // Orbit & Navigation
    "OMM": "Orbit", "OEM": "Orbit", "OPM": "Orbit", "OCM": "Orbit",
    "BOV": "Orbit", "MNV": "Orbit", "MFE": "Orbit", "MNF": "Orbit",
    "MPE": "Orbit", "STV": "Orbit", "OBT": "Orbit", "OBD": "Orbit",
    "OSM": "Orbit", "AST": "Orbit", "PCF": "Orbit", "VCM": "Orbit",
    // Attitude
    "AEM": "Attitude", "APM": "Attitude", "ACM": "Attitude", "ATD": "Attitude",
    // Conjunction & Safety
    "CDM": "Conjunction", "CSM": "Conjunction", "HYP": "Conjunction",
    // Tracking
    "TDM": "Tracking", "TRK": "Tracking", "TKG": "Tracking",
    // Space Objects & Catalog
    "CAT": "Objects", "OON": "Objects", "OOD": "Objects", "OOL": "Objects",
    "OOI": "Objects", "OOE": "Objects", "OOA": "Objects", "OOB": "Objects",
    "OOS": "Objects", "OOT": "Objects", "SOI": "Objects", "IDM": "Objects",
    // Observations & Sensors
    "EOO": "Observation", "IRO": "Observation", "RDO": "Observation", "SAR": "Observation",
    "RFO": "Observation", "GNO": "Observation", "DOA": "Observation", "MTI": "Observation",
    "SWR": "Observation", "GDI": "Observation", "SKI": "Observation", "ANI": "Observation",
    "SNR": "Observation", "SEN": "Observation",
    // Communications & RF
    "COM": "Comms", "CMS": "Comms", "CHN": "Comms", "TPN": "Comms",
    "RFB": "Comms", "RFE": "Comms", "LKS": "Comms", "BEM": "Comms", "BMC": "Comms",
    // Space Environment
    "ENV": "Environment", "SEO": "Environment", "SEV": "Environment", "ION": "Environment",
    "ATM": "Environment", "SPW": "Environment", "WTH": "Environment", "GRV": "Environment",
    "EOP": "Environment", "PHY": "Environment", "TRN": "Environment", "STR": "Environment",
    // Launch & Reentry
    "LDM": "Launch", "LND": "Launch", "LNE": "Launch", "ROC": "Launch", "RDM": "Launch",
    // Vehicles & Platforms
    "BUS": "Vehicle", "PLD": "Vehicle", "GEO": "Vehicle", "DFH": "Vehicle", "PRG": "Vehicle",
    // Defense & EW
    "ACR": "Defense", "GVH": "Defense", "HEL": "Defense", "MSL": "Defense",
    "MST": "Defense", "NAV": "Defense", "ARM": "Defense", "BAL": "Defense",
    "DMG": "Defense", "EWR": "Defense", "FCS": "Defense", "WPN": "Defense", "SON": "Defense",
    // Protocol & Data Link
    "SPP": "Protocol", "AOF": "Protocol", "TCF": "Protocol", "TMF": "Protocol",
    "CFP": "Protocol", "CLT": "Protocol", "RAF": "Protocol", "RCF": "Protocol",
    "SDL": "Protocol", "XTC": "Protocol",
    // Security & Encryption
    "EME": "Security", "ENC": "Security", "EPM": "Security", "PLK": "Security",
    // Reference & Metadata
    "RFM": "Reference", "CRD": "Reference", "TIM": "Reference", "TME": "Reference",
    "MET": "Reference", "LCC": "Reference", "CTR": "Reference", "SIT": "Reference",
    "SCM": "Reference",
    // Data Exchange
    "CRM": "Exchange", "PNM": "Exchange", "ACL": "Exchange", "PUR": "Exchange",
    "REV": "Exchange", "REC": "Exchange", "STF": "Exchange", "PLG": "Exchange",
    // Geospatial & Industry
    "GJN": "Geospatial", "CZM": "Geospatial", "KML": "Geospatial", "GPX": "Geospatial",
    "COT": "Geospatial",
  };

  const categories = ["All", "Orbit", "Attitude", "Conjunction", "Tracking", "Objects", "Observation", "Comms", "Environment", "Launch", "Vehicle", "Defense", "Protocol", "Security", "Reference", "Exchange", "Geospatial"];

  // Manual description overrides for schemas where IDL root table has no/bad /// comment
  const descriptionOverrides: Record<string, string> = {
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

  // Keywords for search discoverability
  const keywordsMap: Record<string, string[]> = {
    // Orbit & Navigation
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
    // Attitude
    "AEM": ["attitude", "ephemeris", "quaternion", "angular rate", "rotation", "CCSDS"],
    "APM": ["attitude", "parameter", "quaternion", "single epoch", "orientation", "CCSDS"],
    "ACM": ["attitude", "comprehensive", "quaternion", "Euler", "spin", "direction cosine"],
    "ATD": ["attitude", "data point", "observation", "stabilized", "spinning", "tumbling"],
    // Conjunction & Safety
    "CDM": ["conjunction", "collision", "close approach", "miss distance", "probability", "screening", "covariance", "TCA", "space debris"],
    "CSM": ["conjunction", "summary", "close approach", "TCA", "range", "collision probability"],
    "HYP": ["hypothesis", "event", "analysis", "matrix", "score", "categorization"],
    // Tracking
    "TDM": ["tracking", "data", "observation", "range", "Doppler", "angles", "CCSDS"],
    "TRK": ["track", "space", "air", "surface", "subsurface", "position", "identity"],
    "TKG": ["tracking", "filter", "Kalman", "IMM", "JPDA", "MHT", "motion model"],
    // Space Objects & Catalog
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
    // Observations & Sensors
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
    // Communications & RF
    "COM": ["communications", "RF", "link", "modulation", "frequency", "propagation", "ITU"],
    "CMS": ["communications", "system", "transponder", "modulation", "BPSK", "QPSK", "DVB-S2", "data rate"],
    "CHN": ["channel", "transponder", "beam", "RF", "encryption", "compression"],
    "TPN": ["transponder", "symbol rate", "FEC", "modulation", "channel", "satellite"],
    "RFB": ["RF band", "UHF", "L-band", "S-band", "C-band", "X-band", "Ku", "Ka", "frequency", "EIRP"],
    "RFE": ["RF emitter", "radar", "jammer", "PRI", "pulse width", "modulation", "signature"],
    "LKS": ["link status", "crosslink", "satellite-to-satellite", "ISL", "RF", "beam"],
    "BEM": ["beam", "antenna", "spot", "regional", "global", "polarization", "gain", "contour"],
    "BMC": ["beam contour", "iso-gain", "boundary", "GeoJSON", "WKT", "coverage"],
    // Space Environment
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
    // Launch & Reentry
    "LDM": ["launch", "data", "site", "azimuth", "rocket", "mission", "agency", "NET"],
    "LND": ["launch", "detection", "IR", "radar", "optical", "alert", "site", "azimuth"],
    "LNE": ["launch", "event", "history", "vehicle", "facility", "outcome", "record"],
    "ROC": ["rocket", "configuration", "stage", "engine", "fuel", "thrust", "burn", "launch vehicle"],
    "RDM": ["reentry", "data", "controlled", "uncontrolled", "impact zone", "breakup", "disposal"],
    // Vehicles & Platforms
    "BUS": ["satellite bus", "spacecraft", "mass", "dimensions", "power", "stabilization", "platform"],
    "PLD": ["payload", "mass", "dimensions", "solar array", "lifetime", "instrument"],
    "GEO": ["geostationary", "GEO", "status", "longitude", "drift", "station-keeping"],
    "DFH": ["GEO", "drift", "history", "geostationary", "longitude", "station-keeping", "slot"],
    "PRG": ["program", "description", "HD key path", "permission", "user assignment"],
    // Defense & EW
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
    // Protocol & Data Link
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
    // Security & Encryption
    "EME": ["encrypted", "message", "envelope", "ephemeral key", "MAC", "nonce", "cipher"],
    "ENC": ["encryption", "header", "ECDH", "X25519", "AES-256", "HKDF", "field-level"],
    "EPM": ["entity", "profile", "person", "organization", "identity", "contact", "email", "telephone", "address", "name", "cryptographic", "key", "DN", "legal name"],
    "PLK": ["plugin", "license", "key", "ECIES", "X25519", "domain", "expiration", "access"],
    // Reference & Metadata
    "RFM": ["reference frame", "GCRF", "ICRF", "ITRF", "TEME", "coordinate", "celestial", "terrestrial"],
    "CRD": ["coordinate", "system", "ECEF", "ECI", "NED", "ENU", "WGS84", "ellipsoid"],
    "TIM": ["time", "system", "UTC", "TAI", "TT", "GPS", "GMST"],
    "TME": ["time", "conversion", "leap second", "EOP", "solar", "lunar"],
    "MET": ["mean element", "theory", "SGP4", "SGP4-XP", "DSST", "USM", "propagation"],
    "LCC": ["country", "code", "operator", "COSPAR", "owner", "historical"],
    "CTR": ["country", "identity", "ISO 3166", "GENC", "STANAG", "internet", "ccTLD"],
    "SIT": ["site", "launch site", "observatory", "ground station", "lat", "lon", "geometry"],
    "SCM": ["schema", "manifest", "registry", "version", "IDL", "standard"],
    // Data Exchange
    "CRM": ["collection", "request", "sensor tasking", "priority", "dwell", "UCT"],
    "PNM": ["publish", "notification", "IPFS", "multiformat", "CID", "signature"],
    "ACL": ["access control", "grant", "permission", "buyer", "payment", "encryption key"],
    "PUR": ["purchase", "request", "marketplace", "payment", "crypto", "fiat", "transaction"],
    "REV": ["review", "rating", "storefront", "stars", "proof of purchase"],
    "REC": ["record", "union", "polymorphic", "universal", "all standards"],
    "STF": ["storefront", "marketplace", "listing", "pricing", "spatial", "temporal", "access"],
    "PLG": ["plugin", "WASM", "sensor", "propagator", "renderer", "shader"],
    // Geospatial & Industry
    "GJN": ["GeoJSON", "geographic", "point", "line", "polygon", "feature", "RFC 7946", "geometry"],
    "CZM": ["CZML", "Cesium", "3D", "visualization", "time-dynamic", "scene", "CesiumJS"],
    "KML": ["KML", "Keyhole", "Google Earth", "geographic", "placemark", "style", "OGC"],
    "GPX": ["GPX", "GPS", "exchange", "waypoint", "track", "route", "elevation", "hiking"],
    "COT": ["Cursor on Target", "CoT", "tactical", "ATAK", "TAK", "situational awareness", "XML"],
  };

  let schemas = writable<SchemaInfo[]>([]);
  let searchQuery = writable("");
  let activeCategory = writable("All");
  let isLoading = true;

  const filteredSchemas = derived(
    [schemas, searchQuery, activeCategory],
    ([$schemas, $searchQuery, $activeCategory]) => {
      return $schemas.filter((schema) => {
        const query = $searchQuery.toLowerCase();
        const matchesSearch = !query ||
          schema.key.toLowerCase().includes(query) ||
          schema.description.toLowerCase().includes(query) ||
          (keywordsMap[schema.key] || []).some(kw => kw.toLowerCase().includes(query));
        const matchesCategory =
          $activeCategory === "All" || schema.category === $activeCategory;
        return matchesSearch && matchesCategory;
      });
    }
  );

  // Extract description from IDL comment before the root_type table
  function extractDescription(idl: string, key: string): string {
    // Look for /// comment specifically before the root_type table (matching schema key)
    const rootTableRegex = new RegExp(`\\/\\/\\/\\s*(.+?)\\n(?:\\/\\/.*\\n)*\\s*table\\s+${key}\\b`);
    const rootMatch = idl.match(rootTableRegex);
    if (rootMatch) {
      return rootMatch[1].trim();
    }
    // Fallback: first /// before any table
    const tableMatch = idl.match(/\/\/\/\s*(.+?)\n(?:\/\/.*\n)*\s*table\s+\w+/);
    if (tableMatch) {
      return tableMatch[1].trim();
    }
    return key + " Message";
  }

  onMount(async () => {
    try {
      const response = await fetch('/dist/manifest.json');
      const manifest = await response.json();

      const schemaList: SchemaInfo[] = Object.entries(manifest.STANDARDS || {}).map(([key, data]: [string, any]) => {
        const description = descriptionOverrides[key] || extractDescription(data.IDL || '', key);
        const category = categoryMap[key] || "Other";

        return {
          key,
          name: key,
          description,
          category
        };
      }).sort((a, b) => a.key.localeCompare(b.key));

      schemas.set(schemaList);
    } catch (e) {
      console.error('Failed to load schemas:', e);
    } finally {
      isLoading = false;
    }
  });

  function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      "Orbit": "rgba(102, 126, 234, 0.2)",
      "Attitude": "rgba(142, 45, 226, 0.2)",
      "Conjunction": "rgba(245, 87, 108, 0.2)",
      "Tracking": "rgba(23, 234, 217, 0.2)",
      "Objects": "rgba(56, 239, 125, 0.2)",
      "Observation": "rgba(0, 200, 170, 0.2)",
      "Comms": "rgba(240, 147, 251, 0.2)",
      "Environment": "rgba(72, 202, 228, 0.2)",
      "Launch": "rgba(255, 159, 67, 0.2)",
      "Vehicle": "rgba(247, 151, 30, 0.2)",
      "Defense": "rgba(220, 80, 80, 0.2)",
      "Protocol": "rgba(162, 155, 254, 0.2)",
      "Security": "rgba(255, 107, 107, 0.2)",
      "Reference": "rgba(255, 210, 0, 0.2)",
      "Exchange": "rgba(38, 222, 129, 0.2)",
      "Geospatial": "rgba(52, 152, 219, 0.2)",
    };
    return colors[category] || "rgba(134, 134, 139, 0.2)";
  }

  function getCategoryTextColor(category: string): string {
    const colors: Record<string, string> = {
      "Orbit": "#667eea",
      "Attitude": "#8E2DE2",
      "Conjunction": "#f5576c",
      "Tracking": "#17ead9",
      "Objects": "#38ef7d",
      "Observation": "#00c8aa",
      "Comms": "#f093fb",
      "Environment": "#48cae4",
      "Launch": "#ff9f43",
      "Vehicle": "#f7971e",
      "Defense": "#dc5050",
      "Protocol": "#a29bfe",
      "Security": "#ff6b6b",
      "Reference": "#ffd200",
      "Exchange": "#26de81",
      "Geospatial": "#3498db",
    };
    return colors[category] || "#86868b";
  }
</script>

<section class="schemas-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Schema Registry</h1>
      <p class="page-subtitle">
        Browse all Space Data Standards schemas. Click a schema to view its structure and download options.
      </p>
    </div>

    <div class="schema-controls">
      <input
        type="search"
        class="search-box"
        placeholder="Search schemas..."
        bind:value={$searchQuery}
      />
      <div class="filter-pills">
        {#each categories as category}
          <button
            class="filter-pill"
            class:active={$activeCategory === category}
            on:click={() => activeCategory.set(category)}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>

    <div class="results-info">
      {#if isLoading}
        Loading schemas...
      {:else}
        Showing {$filteredSchemas.length} of {$schemas.length} schemas
      {/if}
    </div>

    <div class="schema-grid">
      {#each $filteredSchemas as schema}
        <a href="/schemas/{schema.key}" use:link class="schema-card">
          <div class="schema-card-header">
            <span class="schema-name">{schema.key}</span>
            <span
              class="schema-category"
              style="background: {getCategoryColor(schema.category)}; color: {getCategoryTextColor(schema.category)};"
            >
              {schema.category}
            </span>
          </div>
          <p class="schema-desc">{schema.description}</p>
          <div class="schema-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              JSON Schema
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              FlatBuffers
            </span>
          </div>
        </a>
      {/each}
    </div>

    {#if $filteredSchemas.length === 0}
      <div class="no-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p>No schemas found matching your search.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .schemas-page {
    padding-top: 100px;
    min-height: 100vh;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .page-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .page-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .page-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .schema-controls {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .search-box {
    flex: 1;
    min-width: 250px;
    padding: 12px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 15px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    backdrop-filter: blur(10px);
    transition: all 0.2s;
  }

  .search-box:focus {
    outline: none;
    border-color: var(--accent);
  }

  .search-box::placeholder {
    color: var(--text-muted);
  }

  .filter-pills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-pill {
    padding: 10px 18px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .filter-pill:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    color: var(--text-primary);
  }

  .filter-pill.active {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-color: transparent;
    color: white;
  }

  .results-info {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 24px;
  }

  .schema-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  .schema-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(20px);
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .schema-card:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    transform: translateY(-2px);
  }

  .schema-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .schema-name {
    font-size: 18px;
    font-weight: 600;
    font-family: var(--font-mono);
    color: var(--text-primary);
  }

  .schema-category {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 500;
  }

  .schema-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .schema-meta {
    display: flex;
    gap: 16px;
    font-size: 13px;
    color: var(--text-muted);
  }

  .schema-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .no-results {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-muted);
  }

  .no-results svg {
    margin-bottom: 16px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    .schema-controls {
      flex-direction: column;
    }

    .search-box {
      width: 100%;
    }

    .schema-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
