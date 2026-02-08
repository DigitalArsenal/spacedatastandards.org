/**
 * Node.js wrapper for the SDS CCSDS parsers WASM module.
 *
 * Provides functions for parsing and converting CCSDS navigation messages
 * between KVN, XML, and FlatBuffers formats.
 *
 * Supported message types: OMM, OEM, CDM, OPM, AEM, TDM, XTCE, GJN, CZM, KML, GPX, COT
 *
 * Usage:
 *   import { init } from './index.mjs';
 *   const sds = await init();
 *   const xml = sds.convert(kvnString, 'xml');
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamic import of the Emscripten-generated module
let _modulePromise = null;

/**
 * Initialize the WASM module. Returns a promise that resolves to an object
 * with all exported parser functions.
 *
 * The module is cached after the first call, so subsequent calls return
 * the same instance.
 *
 * @returns {Promise<Object>} The initialized WASM module with parser functions
 */
export async function init() {
  if (_modulePromise) return _modulePromise;

  _modulePromise = (async () => {
    // Import the Emscripten-generated ES6 module
    const factory = (await import('./sds_parsers.js')).default;

    // Initialize with locateFile so the .wasm file is found correctly
    const Module = await factory({
      locateFile(path) {
        if (path.endsWith('.wasm')) {
          return join(__dirname, path);
        }
        return path;
      }
    });

    return {
      /**
       * Auto-detect format and message type, then convert to the target format.
       * @param {string} input - The CCSDS message (KVN or XML)
       * @param {string} targetFormat - Target format: 'kvn' or 'xml'
       * @returns {string} The converted message
       */
      convert: (input, targetFormat) => Module.convert(input, targetFormat),

      /**
       * Detect the format of the input ('kvn', 'xml', or 'json').
       * @param {string} input - The CCSDS message
       * @returns {string} The detected format
       */
      detectFormat: (input) => Module.detectFormat(input),

      /**
       * Detect the KVN message type (e.g. 'OMM', 'OEM', 'CDM', 'TDM').
       * @param {string} input - The KVN message
       * @returns {string} The detected message type, or empty string if unknown
       */
      detectKvnType: (input) => Module.detectKvnType(input),

      /**
       * Detect the XML message type (e.g. 'OMM', 'XTCE', 'OPM').
       * @param {string} input - The XML message
       * @returns {string} The detected message type, or empty string if unknown
       */
      detectXmlType: (input) => Module.detectXmlType(input),

      // OMM functions
      ommKvnRoundtrip: (input) => Module.ommKvnRoundtrip(input),
      ommXmlRoundtrip: (input) => Module.ommXmlRoundtrip(input),
      ommKvnToXml: (input) => Module.ommKvnToXml(input),
      ommXmlToKvn: (input) => Module.ommXmlToKvn(input),

      // OEM functions
      oemKvnRoundtrip: (input) => Module.oemKvnRoundtrip(input),
      oemXmlRoundtrip: (input) => Module.oemXmlRoundtrip(input),

      // OPM functions
      opmKvnRoundtrip: (input) => Module.opmKvnRoundtrip(input),
      opmXmlRoundtrip: (input) => Module.opmXmlRoundtrip(input),
      opmKvnToXml: (input) => Module.opmKvnToXml(input),
      opmXmlToKvn: (input) => Module.opmXmlToKvn(input),

      // AEM functions
      aemKvnRoundtrip: (input) => Module.aemKvnRoundtrip(input),

      // CDM functions
      cdmKvnRoundtrip: (input) => Module.cdmKvnRoundtrip(input),

      // TDM functions
      tdmKvnRoundtrip: (input) => Module.tdmKvnRoundtrip(input),
      tdmXmlRoundtrip: (input) => Module.tdmXmlRoundtrip(input),

      // XTCE functions
      xtceXmlRoundtrip: (input) => Module.xtceXmlRoundtrip(input),

      // GeoJSON functions
      gjnJsonRoundtrip: (input) => Module.gjnJsonRoundtrip(input),

      // CZML functions
      czmJsonRoundtrip: (input) => Module.czmJsonRoundtrip(input),

      // KML functions
      kmlXmlRoundtrip: (input) => Module.kmlXmlRoundtrip(input),

      // GPX functions
      gpxXmlRoundtrip: (input) => Module.gpxXmlRoundtrip(input),

      // CoT functions
      cotXmlRoundtrip: (input) => Module.cotXmlRoundtrip(input),

      /**
       * Detect the JSON message type (e.g. 'GJN', 'CZM').
       * @param {string} input - The JSON message
       * @returns {string} The detected message type, or empty string if unknown
       */
      detectJsonType: (input) => Module.detectJsonType(input),

      /** The raw Emscripten Module (for advanced use) */
      _module: Module,
    };
  })();

  return _modulePromise;
}

export default init;
