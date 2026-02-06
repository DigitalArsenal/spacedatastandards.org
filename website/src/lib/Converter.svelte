<script lang="ts">
  import { onMount } from "svelte";
  import { samples } from "./converter/samples";

  // WASM module state
  let wasmModule: any = null;
  let wasmLoading = true;
  let wasmError = "";

  // Group samples by standard type
  const standards = (() => {
    const map = new Map<string, { name: string; desc: string; formats: Map<string, string> }>();
    const descs: Record<string, string> = {
      OMM: "Orbit Mean-Elements Message",
      OEM: "Orbit Ephemeris Message",
      CDM: "Conjunction Data Message",
      OPM: "Orbit Parameters Message",
      AEM: "Attitude Ephemeris Message",
      TDM: "Tracking Data Message",
      XTCE: "Telemetry & Command Exchange",
    };
    for (const s of samples) {
      if (!map.has(s.type)) map.set(s.type, { name: s.type, desc: descs[s.type] || s.type, formats: new Map() });
      map.get(s.type)!.formats.set(s.format, s.content);
    }
    return Array.from(map.values());
  })();

  // All schema types (full catalog)
  const allTypes: { abbr: string; desc: string; hasSample: boolean }[] = [
    { abbr: "ACL", desc: "Access Control Grant", hasSample: false },
    { abbr: "ACM", desc: "Attitude State Data", hasSample: false },
    { abbr: "ACR", desc: "Aircraft Dynamics", hasSample: false },
    { abbr: "AEM", desc: "Attitude Ephemeris Message", hasSample: true },
    { abbr: "ANI", desc: "Analytic Imagery Product", hasSample: false },
    { abbr: "AOF", desc: "AOS Transfer Frame", hasSample: false },
    { abbr: "APM", desc: "Attitude Parameter Message", hasSample: false },
    { abbr: "ARM", desc: "Armor and Protection", hasSample: false },
    { abbr: "AST", desc: "Astrodynamics", hasSample: false },
    { abbr: "ATD", desc: "Attitude Data Point", hasSample: false },
    { abbr: "ATM", desc: "Atmospheric Model Message", hasSample: false },
    { abbr: "BAL", desc: "Ballistics", hasSample: false },
    { abbr: "BEM", desc: "Beam Contour Point", hasSample: false },
    { abbr: "BMC", desc: "Beam Contour", hasSample: false },
    { abbr: "BOV", desc: "Burn Out Vector Message", hasSample: false },
    { abbr: "BUS", desc: "Satellite Bus Specification", hasSample: false },
    { abbr: "CAT", desc: "Catalog Entity Message", hasSample: false },
    { abbr: "CDM", desc: "Conjunction Data Message", hasSample: true },
    { abbr: "CFP", desc: "CCSDS File Delivery Protocol PDU", hasSample: false },
    { abbr: "CHN", desc: "Communications Channel", hasSample: false },
    { abbr: "CLT", desc: "Command Link Transmission Unit", hasSample: false },
    { abbr: "CMS", desc: "Transponder Channel", hasSample: false },
    { abbr: "COM", desc: "Communications Systems", hasSample: false },
    { abbr: "CRD", desc: "Coordinate Systems", hasSample: false },
    { abbr: "CRM", desc: "Collection Request Message", hasSample: false },
    { abbr: "CSM", desc: "Conjunction Summary Message", hasSample: false },
    { abbr: "CTR", desc: "Country Identity Message", hasSample: false },
    { abbr: "DFH", desc: "GEO Drift History Record", hasSample: false },
    { abbr: "DMG", desc: "Damage Models", hasSample: false },
    { abbr: "DOA", desc: "Difference of Arrival Geolocation", hasSample: false },
    { abbr: "EME", desc: "Encrypted Message Envelope", hasSample: false },
    { abbr: "ENC", desc: "Encryption Header", hasSample: false },
    { abbr: "ENV", desc: "Atmosphere and Environment", hasSample: false },
    { abbr: "EOO", desc: "Electro-Optical Observation", hasSample: false },
    { abbr: "EOP", desc: "Earth Orientation Parameters", hasSample: false },
    { abbr: "EPM", desc: "Cryptographic Key Information", hasSample: false },
    { abbr: "EWR", desc: "Electronic Warfare", hasSample: false },
    { abbr: "FCS", desc: "Fire Control Systems", hasSample: false },
    { abbr: "GDI", desc: "Ground Imagery", hasSample: false },
    { abbr: "GEO", desc: "GEO Spacecraft Status", hasSample: false },
    { abbr: "GNO", desc: "GNSS Observation Data Point", hasSample: false },
    { abbr: "GRV", desc: "Gravity Models", hasSample: false },
    { abbr: "GVH", desc: "Ground Vehicles", hasSample: false },
    { abbr: "HEL", desc: "Helicopter Dynamics", hasSample: false },
    { abbr: "HYP", desc: "Hypothesis Message", hasSample: false },
    { abbr: "IDM", desc: "Frequency Range Definition", hasSample: false },
    { abbr: "ION", desc: "Ionospheric Observation", hasSample: false },
    { abbr: "IRO", desc: "Infrared Observation", hasSample: false },
    { abbr: "LCC", desc: "Legacy Country Code", hasSample: false },
    { abbr: "LDM", desc: "Launch Data Message", hasSample: false },
    { abbr: "LKS", desc: "Link Status", hasSample: false },
    { abbr: "LND", desc: "Launch Detection", hasSample: false },
    { abbr: "LNE", desc: "Launch Event", hasSample: false },
    { abbr: "MET", desc: "Mean Element Theory", hasSample: false },
    { abbr: "MFE", desc: "Manifold Element Set", hasSample: false },
    { abbr: "MNF", desc: "Manifold Element Set", hasSample: false },
    { abbr: "MNV", desc: "Maneuver Orbital State", hasSample: false },
    { abbr: "MPE", desc: "Minimum Propagatable Element Set", hasSample: false },
    { abbr: "MSL", desc: "Guided Missiles", hasSample: false },
    { abbr: "MST", desc: "Missile Track", hasSample: false },
    { abbr: "MTI", desc: "Moving Target Indicator", hasSample: false },
    { abbr: "NAV", desc: "Naval Vessels", hasSample: false },
    { abbr: "OBD", desc: "Orbit Determination Solution", hasSample: false },
    { abbr: "OBT", desc: "Orbit Track", hasSample: false },
    { abbr: "OCM", desc: "Orbit Comprehensive Message", hasSample: false },
    { abbr: "OEM", desc: "Orbit Ephemeris Message", hasSample: true },
    { abbr: "OMM", desc: "Orbit Mean Elements Message", hasSample: true },
    { abbr: "OOA", desc: "On-Orbit Antenna", hasSample: false },
    { abbr: "OOB", desc: "On-Orbit Battery", hasSample: false },
    { abbr: "OOD", desc: "On-Orbit Object Details", hasSample: false },
    { abbr: "OOE", desc: "On-Orbit Event", hasSample: false },
    { abbr: "OOI", desc: "Object of Interest", hasSample: false },
    { abbr: "OOL", desc: "On-Orbit Object List", hasSample: false },
    { abbr: "OON", desc: "On-Orbit Object", hasSample: false },
    { abbr: "OOS", desc: "On-Orbit Solar Array", hasSample: false },
    { abbr: "OOT", desc: "On-Orbit Thruster", hasSample: false },
    { abbr: "OPM", desc: "Orbit Parameter Message", hasSample: true },
    { abbr: "OSM", desc: "Observation Stability Message", hasSample: false },
    { abbr: "PCF", desc: "Propagator Configuration", hasSample: false },
    { abbr: "PHY", desc: "Physics and Rigid Body Dynamics", hasSample: false },
    { abbr: "PLD", desc: "Payload Information", hasSample: false },
    { abbr: "PLG", desc: "Plugin Capability Declaration", hasSample: false },
    { abbr: "PLK", desc: "Plugin Key Exchange", hasSample: false },
    { abbr: "PNM", desc: "Publish Notification Message", hasSample: false },
    { abbr: "PRG", desc: "Program Description Message", hasSample: false },
    { abbr: "PUR", desc: "Purchase Request", hasSample: false },
    { abbr: "RAF", desc: "Return All Frames Service", hasSample: false },
    { abbr: "RCF", desc: "Return Channel Frames Service", hasSample: false },
    { abbr: "RDM", desc: "Reentry State Vector", hasSample: false },
    { abbr: "RDO", desc: "Radar Observation", hasSample: false },
    { abbr: "REC", desc: "Record Wrapper", hasSample: false },
    { abbr: "REV", desc: "Review", hasSample: false },
    { abbr: "RFB", desc: "RF Band Specification", hasSample: false },
    { abbr: "RFE", desc: "RF Emitter Detail Record", hasSample: false },
    { abbr: "RFM", desc: "Reference Frame Message", hasSample: false },
    { abbr: "RFO", desc: "RF Observation", hasSample: false },
    { abbr: "ROC", desc: "Rocket Configuration", hasSample: false },
    { abbr: "SAR", desc: "SAR Observation", hasSample: false },
    { abbr: "SCM", desc: "Schema Standard Definition", hasSample: false },
    { abbr: "SDL", desc: "Space Data Link Security", hasSample: false },
    { abbr: "SEN", desc: "Sensor Maintenance Event", hasSample: false },
    { abbr: "SEO", desc: "Space Environment Observation", hasSample: false },
    { abbr: "SEV", desc: "Space Environment Detail", hasSample: false },
    { abbr: "SIT", desc: "Geometric Properties", hasSample: false },
    { abbr: "SKI", desc: "Sky Imagery", hasSample: false },
    { abbr: "SNR", desc: "Sensor Systems", hasSample: false },
    { abbr: "SOI", desc: "Space Object Identification", hasSample: false },
    { abbr: "SON", desc: "Sonar and Underwater Acoustics", hasSample: false },
    { abbr: "SPP", desc: "Space Packet Protocol", hasSample: false },
    { abbr: "SPW", desc: "Space Weather Data Record", hasSample: false },
    { abbr: "STF", desc: "Spatial Coverage Definition", hasSample: false },
    { abbr: "STR", desc: "Star Catalog Entry", hasSample: false },
    { abbr: "STV", desc: "State Vector", hasSample: false },
    { abbr: "SWR", desc: "Short-Wave Infrared Observation", hasSample: false },
    { abbr: "TCF", desc: "Telecommand Transfer Frame", hasSample: false },
    { abbr: "TDM", desc: "Tracking Data Message", hasSample: true },
    { abbr: "TIM", desc: "Time System", hasSample: false },
    { abbr: "TKG", desc: "Tracking and Data Fusion", hasSample: false },
    { abbr: "TME", desc: "Time Systems", hasSample: false },
    { abbr: "TMF", desc: "Telemetry Transfer Frame", hasSample: false },
    { abbr: "TPN", desc: "Transponder", hasSample: false },
    { abbr: "TRK", desc: "Track", hasSample: false },
    { abbr: "TRN", desc: "Terrain Models", hasSample: false },
    { abbr: "VCM", desc: "Vector Covariance Message", hasSample: false },
    { abbr: "WPN", desc: "Weapons and Munitions", hasSample: false },
    { abbr: "WTH", desc: "Weather Data", hasSample: false },
    { abbr: "XTC", desc: "XML Telemetry & Command Exchange", hasSample: true },
  ];

  // Converter state
  let selectedStandard = "";
  let inputFormat: 'kvn' | 'xml' | 'json' | 'hex' = "kvn";
  let outputFormat: 'kvn' | 'xml' | 'json' | 'hex' = "json";
  let inputText = "";
  let outputText = "";
  let intermediate: any = null;
  let convertError = "";
  let copySuccess = false;
  let hexViewMode: 'hex' | 'utf8' = "hex";
  let fbBytesOutput: Uint8Array | null = null;

  // Dropdown state
  let standardDropdownOpen = false;

  // Language showcase
  let selectedLang = "nodejs";

  const allFormats = [
    { key: "kvn" as const, label: "KVN" },
    { key: "xml" as const, label: "XML" },
    { key: "json" as const, label: "JSON" },
    { key: "hex" as const, label: "FlatBuffer" },
  ];

  // ========== Parsers ==========

  function parseKVN(src: string): any {
    const result: any = {};
    const ephLines: string[] = [];
    let inData = false;
    for (const line of src.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('COMMENT')) continue;
      if (t === 'META_STOP') { inData = true; continue; }
      if (t === 'META_START') { inData = false; continue; }
      const eq = t.indexOf('=');
      if (eq >= 0) {
        const key = t.substring(0, eq).trim();
        let val: any = t.substring(eq + 1).trim();
        // Strip units like [rev/day]
        val = val.replace(/\s*\[.*?\]\s*$/, '');
        if (/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(val)) val = Number(val);
        result[key] = val;
      } else if (inData && /^\d{4}-/.test(t)) {
        ephLines.push(t);
      }
    }
    if (ephLines.length) {
      result.EPHEMERIS = ephLines.map(l => {
        const p = l.split(/\s+/);
        const e: any = { EPOCH: p[0] };
        if (p.length >= 4) { e.X = +p[1]; e.Y = +p[2]; e.Z = +p[3]; }
        if (p.length >= 7) { e.X_DOT = +p[4]; e.Y_DOT = +p[5]; e.Z_DOT = +p[6]; }
        return e;
      });
    }
    return result;
  }

  function parseXML(src: string): any {
    const doc = new DOMParser().parseFromString(src, 'text/xml');
    function walk(node: Element): any {
      const kids = Array.from(node.children);
      if (kids.length === 0) {
        let v: any = (node.textContent || '').trim();
        if (/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(v)) v = Number(v);
        return v;
      }
      const obj: any = {};
      for (const c of kids) {
        const k = c.tagName.replace(/^.*:/, '');
        const val = walk(c);
        if (obj[k] !== undefined) {
          if (!Array.isArray(obj[k])) obj[k] = [obj[k]];
          obj[k].push(val);
        } else obj[k] = val;
      }
      return obj;
    }
    return walk(doc.documentElement);
  }

  function parseInput(text: string, fmt: string): any {
    if (!text.trim()) return null;
    if (fmt === 'json') return JSON.parse(text.trim());
    if (fmt === 'xml') return parseXML(text);
    if (fmt === 'kvn') return parseKVN(text);
    if (fmt === 'hex') throw new Error("Cannot parse FlatBuffer hex — switch to a text format to edit");
    throw new Error(`Unknown format: ${fmt}`);
  }

  // ========== Serializers ==========

  function jsonToKVN(data: any): string {
    const lines: string[] = [];
    function emit(obj: any) {
      for (const [key, value] of Object.entries(obj)) {
        if (value !== null && typeof value === 'object') {
          if (Array.isArray(value)) {
            for (const item of value) {
              if (typeof item === 'object' && item !== null) emit(item);
              else lines.push(`${key} = ${item}`);
            }
          } else {
            emit(value);
          }
          continue;
        }
        lines.push(`${key} = ${value}`);
      }
    }
    emit(data);
    return lines.join('\n');
  }

  function jsonToXML(data: any, rootTag: string): string {
    const tag = (rootTag || 'message').toLowerCase();
    function ser(obj: any, lvl: number): string {
      const pad = '  '.repeat(lvl);
      let xml = '';
      for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            if (typeof item === 'object' && item !== null) {
              xml += `${pad}<${key}>\n${ser(item, lvl + 1)}${pad}</${key}>\n`;
            } else xml += `${pad}<${key}>${item}</${key}>\n`;
          }
        } else if (typeof value === 'object' && value !== null) {
          xml += `${pad}<${key}>\n${ser(value, lvl + 1)}${pad}</${key}>\n`;
        } else {
          xml += `${pad}<${key}>${value}</${key}>\n`;
        }
      }
      return xml;
    }
    return `<?xml version="1.0" encoding="UTF-8"?>\n<${tag}>\n${ser(data, 1)}</${tag}>`;
  }

  // ========== FlatBuffer Builder ==========

  function buildFlatBuffer(data: any, type: string): Uint8Array {
    const enc = new TextEncoder();
    const fileId = ('$' + (type || 'SDS').substring(0, 3)).padEnd(4, '\0');

    // Separate fields by type
    const strFields: [string, string][] = [];
    const numFields: [string, number][] = [];
    for (const [k, v] of Object.entries(data)) {
      if (typeof v === 'string') strFields.push([k, v]);
      else if (typeof v === 'number') numFields.push([k, v]);
    }

    const nFields = strFields.length + numFields.length;
    const vtableSize = 4 + nFields * 2; // uint16 vtable_size + uint16 table_size + field offsets
    const vtablePadded = (vtableSize + 3) & ~3;
    const tableInlineSize = 4 + numFields.length * 8 + strFields.length * 4; // soffset + fields
    const tablePadded = (tableInlineSize + 3) & ~3;

    // Calculate total size
    let totalSize = 8 + vtablePadded + tablePadded; // header + vtable + table
    for (const [, v] of strFields) {
      totalSize += 4 + enc.encode(v).length + 1; // len + data + null
      totalSize = (totalSize + 3) & ~3;
    }

    const buf = new ArrayBuffer(totalSize + 256); // padding safety
    const u8 = new Uint8Array(buf);
    const dv = new DataView(buf);

    // --- Header (offset 0) ---
    const tableStart = 8 + vtablePadded;
    dv.setUint32(0, tableStart, true); // root_offset: points to root table
    u8[4] = fileId.charCodeAt(0); // file_identifier
    u8[5] = fileId.charCodeAt(1);
    u8[6] = fileId.charCodeAt(2);
    u8[7] = fileId.charCodeAt(3);

    // --- VTable (offset 8) ---
    const vtableStart = 8;
    dv.setUint16(vtableStart, vtableSize, true);     // vtable byte size
    dv.setUint16(vtableStart + 2, tablePadded, true); // table inline byte size
    let fieldOffset = 4; // first field starts after soffset
    for (let i = 0; i < numFields.length; i++) {
      dv.setUint16(vtableStart + 4 + i * 2, fieldOffset, true);
      fieldOffset += 8; // float64
    }
    for (let i = 0; i < strFields.length; i++) {
      dv.setUint16(vtableStart + 4 + (numFields.length + i) * 2, fieldOffset, true);
      fieldOffset += 4; // string offset (uint32)
    }

    // --- Root Table (offset tableStart) ---
    const soffset = tableStart - vtableStart; // positive distance back to vtable
    dv.setInt32(tableStart, soffset, true);

    let p = tableStart + 4;
    // Numeric fields
    for (const [, v] of numFields) {
      dv.setFloat64(p, v, true);
      p += 8;
    }
    // String offset placeholders
    const strOffsetBase = p;
    p += strFields.length * 4;

    // Align to table end
    p = tableStart + tablePadded;

    // --- String Data ---
    for (let i = 0; i < strFields.length; i++) {
      const bytes = enc.encode(strFields[i][1]);
      // Write offset: relative from the offset field position
      dv.setUint32(strOffsetBase + i * 4, p - (strOffsetBase + i * 4), true);
      // Write string: length + data + null
      dv.setUint32(p, bytes.length, true);
      p += 4;
      u8.set(bytes, p);
      p += bytes.length;
      u8[p++] = 0;
      p = (p + 3) & ~3; // align
    }

    return u8.subarray(0, p);
  }

  function formatHex(bytes: Uint8Array): string {
    const parts: string[] = [];
    for (let i = 0; i < bytes.length; i++) {
      parts.push(bytes[i].toString(16).padStart(2, '0'));
    }
    // Line-wrap every 32 bytes for readability
    const lines: string[] = [];
    for (let i = 0; i < parts.length; i += 32) {
      lines.push(parts.slice(i, i + 32).join(' '));
    }
    return lines.join('\n');
  }

  function formatUtf8(bytes: Uint8Array): string {
    return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  }

  function serialize(data: any, fmt: string, type: string): string {
    if (fmt === 'json') return JSON.stringify(data, null, 2);
    if (fmt === 'kvn') return jsonToKVN(data);
    if (fmt === 'xml') return jsonToXML(data, type || 'message');
    if (fmt === 'hex') {
      const bytes = buildFlatBuffer(data, type);
      fbBytesOutput = bytes;
      return hexViewMode === 'hex' ? formatHex(bytes) : formatUtf8(bytes);
    }
    throw new Error(`Unknown format: ${fmt}`);
  }

  // ========== Actions ==========

  function selectStandard(name: string) {
    selectedStandard = name;
    standardDropdownOpen = false;
    const std = standards.find(s => s.name === name);
    if (!std) return;

    // Load best available native sample
    const kvn = std.formats.get('kvn');
    const xml = std.formats.get('xml');
    if (kvn) {
      inputFormat = 'kvn';
      inputText = kvn;
    } else if (xml) {
      inputFormat = 'xml';
      inputText = xml;
    }

    reparse();
  }

  function setInputFormat(fmt: typeof inputFormat) {
    if (fmt === inputFormat) return;
    convertError = "";

    if (!intermediate) {
      inputFormat = fmt;
      return;
    }

    try {
      // Check if we have a native sample for this format
      const std = standards.find(s => s.name === selectedStandard);
      const nativeSample = std?.formats.get(fmt);

      // For KVN↔XML with WASM, use high-fidelity conversion
      if (wasmModule && (fmt === 'kvn' || fmt === 'xml') && (inputFormat === 'kvn' || inputFormat === 'xml') && inputText.trim()) {
        try {
          inputText = wasmModule.convert(inputText, fmt);
          inputFormat = fmt;
          reparse();
          return;
        } catch { /* fall through */ }
      }

      // Use native sample if available for KVN/XML
      if (nativeSample && (fmt === 'kvn' || fmt === 'xml')) {
        inputText = nativeSample;
      } else if (fmt === 'hex') {
        // Build FlatBuffer directly and set both bytes + display text
        const bytes = buildFlatBuffer(intermediate, selectedStandard);
        fbBytesOutput = bytes;
        inputText = hexViewMode === 'hex' ? formatHex(bytes) : formatUtf8(bytes);
      } else {
        inputText = serialize(intermediate, fmt, selectedStandard);
      }
      inputFormat = fmt;
      // Don't reparse hex — intermediate is already set, just reconvert output
      if (fmt === 'hex') {
        reconvert();
      } else {
        reparse();
      }
    } catch (e: any) {
      convertError = e.message || "Failed to convert input format";
    }
  }

  function setOutputFormat(fmt: typeof outputFormat) {
    if (fmt === outputFormat) return;
    outputFormat = fmt;
    fbBytesOutput = null;
    reconvert();
  }

  function reparse() {
    convertError = "";
    outputText = "";
    fbBytesOutput = null;

    if (!inputText.trim()) return;

    // FlatBuffer input is readonly display — intermediate already set
    if (inputFormat === 'hex') {
      reconvert();
      return;
    }

    intermediate = null;
    try {
      intermediate = parseInput(inputText, inputFormat);
    } catch (e: any) {
      convertError = `Parse error: ${e.message}`;
      return;
    }

    reconvert();
  }

  function reconvert() {
    if (!intermediate) return;
    convertError = "";
    try {
      // For KVN↔XML output, try WASM for high fidelity
      if (wasmModule && (outputFormat === 'kvn' || outputFormat === 'xml') && (inputFormat === 'kvn' || inputFormat === 'xml') && inputText.trim()) {
        try {
          outputText = wasmModule.convert(inputText, outputFormat);
          return;
        } catch { /* fall through to JS */ }
      }
      // Handle hex output directly to ensure fbBytesOutput and outputText are both set
      if (outputFormat === 'hex') {
        const bytes = buildFlatBuffer(intermediate, selectedStandard);
        fbBytesOutput = bytes;
        outputText = hexViewMode === 'hex' ? formatHex(bytes) : formatUtf8(bytes);
      } else {
        outputText = serialize(intermediate, outputFormat, selectedStandard);
      }
    } catch (e: any) {
      convertError = `Output error: ${e.message}`;
      outputText = "";
    }
  }

  function onInputTextChange() {
    reparse();
  }

  function toggleHexView() {
    hexViewMode = hexViewMode === 'hex' ? 'utf8' : 'hex';
    if (fbBytesOutput) {
      const text = hexViewMode === 'hex' ? formatHex(fbBytesOutput) : formatUtf8(fbBytesOutput);
      if (outputFormat === 'hex') outputText = text;
      if (inputFormat === 'hex') inputText = text;
    }
  }

  async function copyOutput() {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      copySuccess = true;
      setTimeout(() => { copySuccess = false; }, 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = outputText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      copySuccess = true;
      setTimeout(() => { copySuccess = false; }, 2000);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") standardDropdownOpen = false;
  }

  async function loadWasmFactory(): Promise<any> {
    const moduleUrl = new URL("/wasm/node/sds_parsers.js", window.location.origin).href;
    const loaderCode = `import Module from "${moduleUrl}"; export default Module;`;
    const blob = new Blob([loaderCode], { type: "text/javascript" });
    const blobUrl = URL.createObjectURL(blob);
    try {
      const mod = await import(/* @vite-ignore */ blobUrl);
      return mod.default;
    } finally {
      URL.revokeObjectURL(blobUrl);
    }
  }

  onMount(async () => {
    try {
      const factory = await loadWasmFactory();
      wasmModule = await factory({
        locateFile(path: string) {
          if (path.endsWith(".wasm")) return "/wasm/node/" + path;
          return path;
        },
      });
      wasmLoading = false;
      // Auto-load first standard
      if (standards.length > 0 && !selectedStandard) {
        selectStandard(standards[0].name);
      }
    } catch (e: any) {
      wasmError = e.message || "Failed to load WASM module";
      wasmLoading = false;
      // Still load first standard with JS-only parsing
      if (standards.length > 0 && !selectedStandard) {
        selectStandard(standards[0].name);
      }
    }
  });

  // Language examples
  const languageExamples: Record<string, { label: string; icon: string; install: string; code: string }> = {
    nodejs: {
      label: "Node.js",
      icon: "JS",
      install: "npm install spacedatastandards.org",
      code: `import { init } from 'spacedatastandards.org/wasm/node/index.mjs';

const sds = await init();

// Auto-detect and convert
const kvnInput = \`CCSDS_OMM_VERS = 2.0 ...\`;
const xml = sds.convert(kvnInput, 'xml');
console.log(xml);

// Or use specific functions
const result = sds.ommKvnToXml(kvnInput);`
    },
    python: {
      label: "Python",
      icon: "PY",
      install: "pip install spacedatastandards.org",
      code: `from spacedatastandards.org import OMM
import flatbuffers

# Read FlatBuffer OMM (zero-copy)
buf = open('omm.bin', 'rb').read()
omm = OMM.OMM.GetRootAs(buf, 0)

print(omm.OBJECT_NAME().decode())  # "ISS (ZARYA)"
print(omm.MEAN_MOTION())           # 15.72125391
print(omm.ECCENTRICITY())          # 0.0006703`
    },
    go: {
      label: "Go",
      icon: "GO",
      install: "go get github.com/DigitalArsenal/spacedatastandards.org/lib/go",
      code: `package main

import (
    flatbuffers "github.com/google/flatbuffers/go"
    "spacedatastandards/OMM"
)

func main() {
    builder := flatbuffers.NewBuilder(1024)
    name := builder.CreateString("ISS")
    OMM.OMMStart(builder)
    OMM.OMMAddOBJECT_NAME(builder, name)
    OMM.OMMAddMEAN_MOTION(builder, 15.72)
    omm := OMM.OMMEnd(builder)
    builder.Finish(omm)
}`
    },
    rust: {
      label: "Rust",
      icon: "RS",
      install: "cargo add flatbuffers",
      code: `use flatbuffers::FlatBufferBuilder;
use omm_generated::omm::{OMM, OMMArgs, root_as_omm};

fn main() {
    let mut builder = FlatBufferBuilder::new();
    let name = builder.create_string("ISS (ZARYA)");

    let omm = OMM::create(&mut builder, &OMMArgs {
        OBJECT_NAME: Some(name),
        MEAN_MOTION: 15.72125391,
        ..Default::default()
    });
    builder.finish(omm, None);
}`
    },
    java: {
      label: "Java",
      icon: "JV",
      install: `<!-- Maven -->
<dependency>
  <groupId>org.spacedatastandards</groupId>
  <artifactId>spacedatastandards</artifactId>
</dependency>`,
      code: `import com.google.flatbuffers.FlatBufferBuilder;
import org.spacedatastandards.OMM;

FlatBufferBuilder builder = new FlatBufferBuilder(1024);
int name = builder.createString("ISS (ZARYA)");

OMM.startOMM(builder);
OMM.addOBJECT_NAME(builder, name);
OMM.addMEAN_MOTION(builder, 15.72125391);
int omm = OMM.endOMM(builder);
builder.finish(omm);`
    },
    kotlin: {
      label: "Kotlin",
      icon: "KT",
      install: `implementation("org.spacedatastandards:spacedatastandards")`,
      code: `import com.google.flatbuffers.FlatBufferBuilder
import org.spacedatastandards.OMM

val builder = FlatBufferBuilder(1024)
val name = builder.createString("ISS (ZARYA)")

OMM.startOMM(builder)
OMM.addOBJECT_NAME(builder, name)
OMM.addMEAN_MOTION(builder, 15.72125391)
val omm = OMM.endOMM(builder)
builder.finish(omm)`
    },
    swift: {
      label: "Swift",
      icon: "SW",
      install: "# Add FlatBuffers Swift package",
      code: `import FlatBuffers

var builder = FlatBufferBuilder(initialSize: 1024)
let name = builder.create(string: "ISS (ZARYA)")

let omm = OMM.createOMM(
    &builder,
    OBJECT_NAMEOffset: name,
    MEAN_MOTION: 15.72125391
)
builder.finish(offset: omm)`
    },
    csharp: {
      label: "C#",
      icon: "C#",
      install: "dotnet add package FlatBuffers",
      code: `using FlatBuffers;
using SpaceDataStandards;

var builder = new FlatBufferBuilder(1024);
var name = builder.CreateString("ISS (ZARYA)");

OMM.StartOMM(builder);
OMM.AddOBJECT_NAME(builder, name);
OMM.AddMEAN_MOTION(builder, 15.72125391);
var omm = OMM.EndOMM(builder);
builder.Finish(omm.Value);`
    },
    typescript: {
      label: "TypeScript",
      icon: "TS",
      install: "npm install spacedatastandards.org flatbuffers",
      code: `import { OMM } from 'spacedatastandards.org/lib/js/OMM/main.js';
import * as flatbuffers from 'flatbuffers';

const builder = new flatbuffers.Builder(1024);
const name = builder.createString("ISS (ZARYA)");

OMM.startOMM(builder);
OMM.addOBJECT_NAME(builder, name);
OMM.addMEAN_MOTION(builder, 15.72125391);
const omm = OMM.endOMM(builder);
builder.finish(omm);`
    },
    cpp: {
      label: "C++",
      icon: "C++",
      install: "# Include FlatBuffers headers + generated code",
      code: `#include "flatbuffers/flatbuffers.h"
#include "OMM_generated.h"

flatbuffers::FlatBufferBuilder builder(1024);
auto name = builder.CreateString("ISS (ZARYA)");

auto omm = CreateOMM(builder, name,
    0, 0, 0, 0, 15.72125391);
builder.Finish(omm);
auto buf = builder.GetBufferPointer();`
    },
    php: {
      label: "PHP",
      icon: "PHP",
      install: "composer require digitalarsenal/spacedatastandards",
      code: `use Google\\FlatBuffers\\FlatbufferBuilder;
use SpaceDataStandards\\OMM;

$builder = new FlatbufferBuilder(1024);
$name = $builder->createString("ISS (ZARYA)");

OMM::startOMM($builder);
OMM::addOBJECT_NAME($builder, $name);
OMM::addMEAN_MOTION($builder, 15.72125391);
$omm = OMM::endOMM($builder);
$builder->finish($omm);`
    },
    dart: {
      label: "Dart",
      icon: "DT",
      install: "# Add flatbuffers dependency to pubspec.yaml",
      code: `import 'package:flat_buffers/flat_buffers.dart';

final builder = Builder(initialSize: 1024);
final name = builder.writeString("ISS (ZARYA)");

final omm = OMMObjectBuilder(
  OBJECT_NAME: name,
  MEAN_MOTION: 15.72125391,
).finish(builder);
builder.finish(omm);`
    },
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="converter-page">
  <div class="bg-grid"></div>

  <div class="container">
    <div class="hero">
      <div class="hero-badge">CCSDS NDM</div>
      <h1 class="title">Format Converter</h1>
      <p class="subtitle">Any format to any format — KVN, XML, JSON, FlatBuffer — powered by C++/WASM in your browser</p>
    </div>

    <!-- Main Converter Card -->
    <div class="converter-card">
      <div class="card-glow"></div>

      {#if wasmLoading}
        <div class="wasm-status loading">
          <div class="spinner"></div>
          <span>Loading WASM module...</span>
        </div>
      {:else if wasmError}
        <div class="wasm-status error">
          <span>WASM load failed: {wasmError}</span>
        </div>
      {:else}
        <div class="wasm-status ready">
          <span class="ready-dot"></span>
          <span>WASM parser ready</span>
        </div>
      {/if}

      <!-- Standard Selector -->
      <div class="selector-section">
        <div class="selector-label">Standard</div>
        <div class="dropdown" class:open={standardDropdownOpen}>
          <button class="dropdown-trigger" on:click={() => { standardDropdownOpen = !standardDropdownOpen; }}>
            <span class="dropdown-text">
              {#if selectedStandard}
                <span class="selected-std-badge">{selectedStandard}</span>
                <span class="selected-std-desc">{standards.find(s => s.name === selectedStandard)?.desc || ''}</span>
              {:else}
                Select a standard...
              {/if}
            </span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {#if standardDropdownOpen}
            <div class="dropdown-menu">
              {#each standards as std}
                <button
                  class="dropdown-item"
                  class:selected={std.name === selectedStandard}
                  on:click={() => selectStandard(std.name)}
                >
                  <span class="std-badge">{std.name}</span>
                  <span class="std-desc">{std.desc}</span>
                  <span class="std-formats">
                    {#each Array.from(std.formats.keys()) as fmt}
                      <span class="mini-fmt" class:kvn={fmt === 'kvn'} class:xml={fmt === 'xml'}>{fmt.toUpperCase()}</span>
                    {/each}
                  </span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- Editor Grid -->
      <div class="editor-grid">
        <!-- Input Pane -->
        <div class="editor-pane">
          <div class="editor-header">
            <span class="editor-title">Input</span>
          </div>
          <div class="format-bar">
            {#each allFormats as fmt}
              <button
                class="fmt-btn"
                class:active={inputFormat === fmt.key}
                on:click={() => setInputFormat(fmt.key)}
              >{fmt.label}</button>
            {/each}
            {#if inputFormat === 'hex'}
              <button class="hex-toggle" on:click={toggleHexView}>
                {hexViewMode === 'hex' ? 'UTF-8' : 'Hex'}
              </button>
            {/if}
          </div>
          <textarea
            class="editor-textarea"
            class:readonly-hex={inputFormat === 'hex'}
            bind:value={inputText}
            on:input={onInputTextChange}
            readonly={inputFormat === 'hex'}
            placeholder="Select a standard above or paste data here..."
            spellcheck="false"
          ></textarea>
        </div>

        <!-- Output Pane -->
        <div class="editor-pane">
          <div class="editor-header">
            <span class="editor-title">Output</span>
            {#if outputText}
              <button class="copy-btn" on:click={copyOutput}>
                {#if copySuccess}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Copied
                {:else}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy
                {/if}
              </button>
            {/if}
          </div>
          <div class="format-bar">
            {#each allFormats as fmt}
              <button
                class="fmt-btn"
                class:active={outputFormat === fmt.key}
                on:click={() => setOutputFormat(fmt.key)}
              >{fmt.label}</button>
            {/each}
            {#if outputFormat === 'hex'}
              <button class="hex-toggle" on:click={toggleHexView}>
                {hexViewMode === 'hex' ? 'UTF-8' : 'Hex'}
              </button>
            {/if}
          </div>
          <textarea
            class="editor-textarea"
            value={outputText}
            readonly
            placeholder="Output will appear here..."
          ></textarea>
        </div>
      </div>

      {#if convertError}
        <div class="error-box">{convertError}</div>
      {/if}
    </div>

    <!-- Supported Types -->
    <div class="types-section">
      <h2 class="section-title">All {allTypes.length} Standards</h2>
      <p class="section-subtitle">FlatBuffers schemas for space domain data — types with converter samples are highlighted</p>
      <div class="types-grid">
        {#each allTypes as t}
          <button
            class="type-card"
            class:active-type={t.abbr === selectedStandard}
            class:has-sample={t.hasSample}
            on:click={() => {
              const std = standards.find(s => s.name === t.abbr || (t.abbr === 'XTC' && s.name === 'XTCE'));
              if (std) selectStandard(std.name);
            }}
          >
            <span class="type-name">{t.abbr}</span>
            <span class="type-desc">{t.desc}</span>
            {#if t.hasSample}<span class="sample-badge">WASM</span>{/if}
          </button>
        {/each}
      </div>
    </div>

    <!-- Language Showcase -->
    <div class="lang-section">
      <h2 class="section-title">Use in Any Language</h2>
      <p class="section-subtitle">Space Data Standards generates code for 13+ languages from FlatBuffers schemas</p>

      <div class="lang-tabs">
        {#each Object.entries(languageExamples) as [key, lang]}
          <button
            class="lang-tab"
            class:active={selectedLang === key}
            on:click={() => { selectedLang = key; }}
          >
            <span class="tab-icon">{lang.icon}</span>
            <span class="tab-label">{lang.label}</span>
          </button>
        {/each}
      </div>

      {#if languageExamples[selectedLang]}
        <div class="lang-example">
          <div class="install-block">
            <div class="code-header">Install</div>
            <pre class="code-block">{languageExamples[selectedLang].install}</pre>
          </div>
          <div class="usage-block">
            <div class="code-header">Usage</div>
            <pre class="code-block">{languageExamples[selectedLang].code}</pre>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .converter-page {
    padding-top: 100px;
    min-height: calc(100vh - 100px);
    padding-bottom: 120px;
    position: relative;
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 119, 182, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 119, 182, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    pointer-events: none;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
  }

  .hero {
    text-align: center;
    margin-bottom: 48px;
  }

  .hero-badge {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(0, 119, 182, 0.1);
    border: 1px solid rgba(0, 119, 182, 0.2);
    border-radius: 20px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    margin-bottom: 20px;
  }

  .title {
    font-size: clamp(32px, 6vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 12px;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 17px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Converter Card */
  .converter-card {
    position: relative;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 24px;
    padding: 32px;
    backdrop-filter: blur(20px);
    margin-bottom: 64px;
  }

  .card-glow {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.6;
  }

  /* WASM Status */
  .wasm-status {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 12px;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .wasm-status.loading {
    background: rgba(0, 119, 182, 0.1);
    color: var(--accent);
  }

  .wasm-status.error {
    background: rgba(245, 87, 108, 0.1);
    color: #f5576c;
  }

  .wasm-status.ready {
    background: rgba(56, 239, 125, 0.1);
    color: #38ef7d;
  }

  .ready-dot {
    width: 8px;
    height: 8px;
    background: #38ef7d;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Standard Selector */
  .selector-section {
    margin-bottom: 20px;
  }

  .selector-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.15s;
    color: var(--text-primary);
    font-size: 14px;
  }

  .dropdown-trigger:hover {
    border-color: var(--ui-border-hover);
    background: var(--ui-hover);
  }

  .dropdown.open .dropdown-trigger {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
  }

  .dropdown-text {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);
  }

  .selected-std-badge {
    display: inline-block;
    padding: 2px 8px;
    background: rgba(0, 119, 182, 0.15);
    color: var(--accent);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 700;
  }

  .selected-std-desc {
    color: var(--text-secondary);
    font-size: 13px;
  }

  .chevron {
    width: 16px;
    height: 16px;
    color: var(--text-muted);
    transition: transform 0.2s;
    flex-shrink: 0;
  }

  .dropdown.open .chevron {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    overflow: hidden;
    z-index: 100;
    max-height: 360px;
    overflow-y: auto;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: var(--text-primary);
    font-size: 14px;
    transition: background 0.15s;
    border-bottom: 1px solid var(--ui-border);
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: var(--ui-hover);
  }

  .dropdown-item.selected {
    background: rgba(0, 119, 182, 0.1);
  }

  .std-badge {
    display: inline-block;
    padding: 2px 8px;
    background: rgba(0, 119, 182, 0.15);
    color: var(--accent);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .std-desc {
    color: var(--text-secondary);
    font-size: 13px;
    flex: 1;
  }

  .std-formats {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .mini-fmt {
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    background: rgba(134, 134, 139, 0.15);
    color: var(--text-muted);
  }

  .mini-fmt.kvn {
    background: rgba(247, 151, 30, 0.15);
    color: #f7971e;
  }

  .mini-fmt.xml {
    background: rgba(23, 234, 217, 0.15);
    color: #17ead9;
  }

  /* Editor Grid */
  .editor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .editor-pane {
    display: flex;
    flex-direction: column;
  }

  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    background: #161b22;
    border: 1px solid #30363d;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }

  .editor-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .format-bar {
    display: flex;
    gap: 4px;
    padding: 8px 12px;
    background: #161b22;
    border: 1px solid #30363d;
    border-top: none;
    border-bottom: none;
  }

  .fmt-btn {
    padding: 4px 12px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 600;
    font-family: var(--font-mono);
    cursor: pointer;
    transition: all 0.15s;
  }

  .fmt-btn:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
  }

  .fmt-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }

  .hex-toggle {
    margin-left: auto;
    padding: 3px 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
  }

  .hex-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
  }

  .copy-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: var(--text-secondary);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .copy-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  .editor-textarea {
    flex: 1;
    min-height: 320px;
    padding: 16px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 0 0 12px 12px;
    color: #c9d1d9;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.5;
    resize: vertical;
    outline: none;
    transition: border-color 0.15s;
  }

  .editor-textarea:focus {
    border-color: var(--accent);
  }

  .editor-textarea::placeholder {
    color: rgba(139, 148, 158, 0.5);
  }

  .editor-textarea.readonly-hex {
    color: #8b949e;
    cursor: default;
  }

  /* Error */
  .error-box {
    margin-top: 16px;
    padding: 12px 16px;
    background: rgba(245, 87, 108, 0.1);
    border: 1px solid rgba(245, 87, 108, 0.2);
    border-radius: 12px;
    color: #f5576c;
    font-size: 14px;
    font-family: var(--font-mono);
  }

  /* Supported Types */
  .types-section {
    margin-bottom: 64px;
  }

  .section-title {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 16px;
  }

  .section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 16px;
    margin-bottom: 32px;
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 8px;
  }

  .type-card {
    position: relative;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 14px 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s;
    opacity: 0.7;
  }

  .type-card.has-sample {
    opacity: 1;
    border-color: rgba(0, 119, 182, 0.3);
  }

  .type-card:hover {
    border-color: var(--ui-border-hover);
    background: var(--ui-hover);
    opacity: 1;
  }

  .type-card.active-type {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
    opacity: 1;
  }

  .type-name {
    display: block;
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
  }

  .type-desc {
    display: block;
    font-size: 11px;
    color: var(--text-secondary);
    line-height: 1.3;
  }

  .sample-badge {
    display: inline-block;
    margin-top: 6px;
    padding: 1px 6px;
    background: rgba(56, 239, 125, 0.12);
    color: #38ef7d;
    border-radius: 4px;
    font-size: 9px;
    font-weight: 700;
    font-family: var(--font-mono);
    letter-spacing: 0.05em;
  }

  /* Language Showcase */
  .lang-section {
    margin-bottom: 64px;
  }

  .lang-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 24px;
    justify-content: center;
  }

  .lang-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }

  .lang-tab:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .lang-tab.active {
    background: rgba(0, 119, 182, 0.15);
    border-color: var(--accent);
    color: var(--accent);
  }

  .tab-icon {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    padding: 2px 5px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
  }

  .lang-tab.active .tab-icon {
    background: rgba(0, 119, 182, 0.2);
  }

  .tab-label {
    display: none;
  }

  .lang-example {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    overflow: hidden;
  }

  .install-block,
  .usage-block {
    border-bottom: 1px solid var(--ui-border);
  }

  .usage-block {
    border-bottom: none;
  }

  .code-header {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    padding: 12px 16px 0;
  }

  .code-block {
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.5;
    color: #c9d1d9;
    padding: 12px 16px 16px;
    margin: 0;
    overflow-x: auto;
    white-space: pre;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .editor-grid {
      grid-template-columns: 1fr;
    }

    .editor-textarea {
      min-height: 200px;
    }

    .types-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .format-bar {
      flex-wrap: wrap;
    }
  }

  @media (min-width: 600px) {
    .tab-label {
      display: inline;
    }
  }
</style>
