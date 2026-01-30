/**
 * StandardsExplorer - Core class for browsing and generating code from
 * Space Data Standards schemas.
 *
 * Data is loaded from the spacedatastandards.org npm package manifest.
 * Code generation uses flatc-wasm.
 */

// Data is injected at build time or loaded dynamically
import manifest from "spacedatastandards.org/dist/manifest.json" with { type: "json" };
import jsonSchemas from "spacedatastandards.org/lib/json/index.json" with { type: "json" };
import fbJsonSchemas from "spacedatastandards.org/lib/fbjson/index.json" with { type: "json" };

const SUPPORTED_LANGUAGES = [
  "cpp", "csharp", "dart", "go", "java", "kotlin",
  "php", "python", "rust", "swift", "ts",
];

const LANGUAGE_LABELS = {
  cpp: "C++",
  csharp: "C#",
  dart: "Dart",
  go: "Go",
  java: "Java",
  kotlin: "Kotlin",
  php: "PHP",
  python: "Python",
  rust: "Rust",
  swift: "Swift",
  ts: "TypeScript",
};

/** Standard category definitions matching the main site */
const CATEGORIES = [
  {
    title: "Orbit & Trajectory",
    icon: "orbit",
    iconClass: "icon-blue",
    description: "Orbital state vectors, mean elements, ephemeris, and maneuver data",
    schemas: ["OMM", "OEM", "OCM", "EPM", "HYP", "BOV"],
  },
  {
    title: "Conjunction & Safety",
    icon: "alert",
    iconClass: "icon-red",
    description: "Conjunction data messages and screening volumes for collision avoidance",
    schemas: ["CDM", "CAT", "CSM"],
  },
  {
    title: "Entity & Identity",
    icon: "user",
    iconClass: "icon-green",
    description: "Satellite catalog, entity profiles, site information, and ownership",
    schemas: ["IDM", "EPM", "SIT", "LCC", "PLD"],
  },
  {
    title: "Telemetry & Control",
    icon: "radio",
    iconClass: "icon-purple",
    description: "Tracking data, attitude, RF characteristics, and command sequences",
    schemas: ["TDM", "ATM", "VCM", "RFM", "XTC"],
  },
  {
    title: "Pointing & Observation",
    icon: "rocket",
    iconClass: "icon-orange",
    description: "Pointing requests, electro-optical observations, and sensor data",
    schemas: ["PNM", "EOO", "EOP", "MET", "MPE", "ROC"],
  },
  {
    title: "Marketplace & Licensing",
    icon: "store",
    iconClass: "icon-teal",
    description: "Data marketplace listings, access control, and plugin licensing",
    schemas: ["STF", "ACL", "PLG", "PLK", "PUR", "CRM"],
  },
];

export class StandardsExplorer {
  constructor() {
    this._manifest = null;
    this._jsonSchemas = null;
    this._fbJsonSchemas = null;
    this._flatc = null;
  }

  /**
   * Initialize the explorer. Loads manifest data.
   * Call this before using any other methods.
   */
  async init() {
    this._manifest = manifest;
    this._jsonSchemas = jsonSchemas.STANDARDS || {};
    this._fbJsonSchemas = fbJsonSchemas.STANDARDS || {};
    return this;
  }

  /** Get sorted list of all standard names */
  getStandards() {
    if (!this._manifest) throw new Error("Call init() first");
    return Object.keys(this._manifest.STANDARDS).sort();
  }

  /** Get details for a specific standard */
  getStandard(name) {
    if (!this._manifest) throw new Error("Call init() first");
    const std = this._manifest.STANDARDS[name];
    if (!std) return null;
    return {
      name,
      idl: std.IDL,
      files: std.files,
      jsonSchema: this._jsonSchemas[name] || null,
      fbJsonSchema: this._fbJsonSchemas[name] || null,
    };
  }

  /** Get the category definitions */
  getCategories() {
    return CATEGORIES;
  }

  /** Get JSON Schema for a standard */
  getJsonSchema(name) {
    return this._jsonSchemas[name] || null;
  }

  /** Get FB JSON Schema (with x-flatbuffer extensions) for a standard */
  getFBJsonSchema(name) {
    return this._fbJsonSchemas[name] || null;
  }

  /** Get list of supported code generation languages */
  getLanguages() {
    return SUPPORTED_LANGUAGES;
  }

  /** Get human-readable label for a language */
  getLanguageLabel(lang) {
    return LANGUAGE_LABELS[lang] || lang;
  }

  /** Get the manifest version */
  getVersion() {
    return this._manifest?.version || null;
  }

  /**
   * Resolve all include dependencies for a standard's IDL.
   * Returns a SchemaInput object for flatc-wasm.
   */
  _resolveIncludes(name) {
    const standards = this._manifest.STANDARDS;
    const files = {};
    const visited = new Set();

    const resolve = (stdName) => {
      if (visited.has(stdName)) return;
      visited.add(stdName);
      const std = standards[stdName];
      if (!std || !std.IDL) return;

      // Strip header (hash/version lines)
      let idl = std.IDL;
      const headerEnd = idl.indexOf("END_HEADER");
      if (headerEnd !== -1) {
        idl = idl.substring(idl.indexOf("\n", headerEnd) + 1);
      }

      // Mount at /schemas/{NAME}/main.fbs
      files[`/schemas/${stdName}/main.fbs`] = idl;

      // Find includes and resolve them
      const includeRegex = /include\s+"\.\.\/(\w+)\/main\.fbs"\s*;/g;
      let match;
      while ((match = includeRegex.exec(std.IDL)) !== null) {
        resolve(match[1]);
      }
    };

    resolve(name);
    return {
      entry: `/schemas/${name}/main.fbs`,
      files,
    };
  }

  /**
   * Generate source code for a standard in the given language.
   * Lazily initializes flatc-wasm on first call.
   *
   * @param {string} name - Standard name (e.g. "OMM")
   * @param {string} language - Target language (e.g. "typescript", "python")
   * @returns {Promise<Record<string, string>>} Map of filename to generated code
   */
  async generateCode(name, language) {
    if (!this._manifest) throw new Error("Call init() first");
    if (!this._manifest.STANDARDS[name]) {
      throw new Error(`Unknown standard: ${name}`);
    }

    // Lazy-init flatc-wasm
    if (!this._flatc) {
      const { FlatcRunner } = await import("flatc-wasm");
      this._flatc = await FlatcRunner.init();
    }

    const schemaInput = this._resolveIncludes(name);
    return this._flatc.generateCode(schemaInput, language, {
      genObjectApi: true,
    });
  }
}

export { SUPPORTED_LANGUAGES, LANGUAGE_LABELS, CATEGORIES };
