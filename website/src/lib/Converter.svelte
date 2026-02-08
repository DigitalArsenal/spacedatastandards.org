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

  // All schema types organized by category
  const typeCategories: { name: string; types: { abbr: string; desc: string }[] }[] = [
    { name: "Orbit & Navigation", types: [
      { abbr: "OMM", desc: "Orbit Mean Elements Message" },
      { abbr: "OEM", desc: "Orbit Ephemeris Message" },
      { abbr: "OPM", desc: "Orbit Parameter Message" },
      { abbr: "OCM", desc: "Orbit Comprehensive Message" },
      { abbr: "BOV", desc: "Burn Out Vector" },
      { abbr: "MNV", desc: "Maneuver Orbital State" },
      { abbr: "MFE", desc: "Manifold Element Set" },
      { abbr: "MNF", desc: "Manifold Element Set" },
      { abbr: "MPE", desc: "Min Propagatable Element Set" },
      { abbr: "STV", desc: "State Vector" },
      { abbr: "OBT", desc: "Orbit Track" },
      { abbr: "OBD", desc: "Orbit Determination Solution" },
      { abbr: "OSM", desc: "Observation Stability Message" },
      { abbr: "AST", desc: "Astrodynamics" },
      { abbr: "PCF", desc: "Propagator Configuration" },
      { abbr: "VCM", desc: "Vector Covariance Message" },
    ]},
    { name: "Attitude", types: [
      { abbr: "AEM", desc: "Attitude Ephemeris Message" },
      { abbr: "APM", desc: "Attitude Parameter Message" },
      { abbr: "ACM", desc: "Attitude State Data" },
      { abbr: "ATD", desc: "Attitude Data Point" },
    ]},
    { name: "Conjunction & Safety", types: [
      { abbr: "CDM", desc: "Conjunction Data Message" },
      { abbr: "CSM", desc: "Conjunction Summary Message" },
      { abbr: "HYP", desc: "Hypothesis Message" },
    ]},
    { name: "Tracking & Data", types: [
      { abbr: "TDM", desc: "Tracking Data Message" },
      { abbr: "TRK", desc: "Track" },
      { abbr: "TKG", desc: "Tracking and Data Fusion" },
      { abbr: "NAV", desc: "Navigation" },
    ]},
    { name: "Space Objects & Catalog", types: [
      { abbr: "CAT", desc: "Catalog Entity Message" },
      { abbr: "OON", desc: "On-Orbit Object" },
      { abbr: "OOD", desc: "On-Orbit Object Details" },
      { abbr: "OOL", desc: "On-Orbit Object List" },
      { abbr: "OOI", desc: "Object of Interest" },
      { abbr: "OOE", desc: "On-Orbit Event" },
      { abbr: "OOA", desc: "On-Orbit Antenna" },
      { abbr: "OOB", desc: "On-Orbit Battery" },
      { abbr: "OOS", desc: "On-Orbit Solar Array" },
      { abbr: "OOT", desc: "On-Orbit Thruster" },
      { abbr: "SOI", desc: "Space Object Identification" },
      { abbr: "IDM", desc: "Frequency Range Definition" },
    ]},
    { name: "Observations & Sensors", types: [
      { abbr: "EOO", desc: "Electro-Optical Observation" },
      { abbr: "IRO", desc: "Infrared Observation" },
      { abbr: "RDO", desc: "Radar Observation" },
      { abbr: "SAR", desc: "SAR Observation" },
      { abbr: "RFO", desc: "RF Observation" },
      { abbr: "GNO", desc: "GNSS Observation" },
      { abbr: "DOA", desc: "Difference of Arrival" },
      { abbr: "MTI", desc: "Moving Target Indicator" },
      { abbr: "SWR", desc: "Short-Wave IR Observation" },
      { abbr: "GDI", desc: "Ground Imagery" },
      { abbr: "SKI", desc: "Sky Imagery" },
      { abbr: "ANI", desc: "Analytic Imagery Product" },
      { abbr: "SNR", desc: "Sensor Systems" },
      { abbr: "SEN", desc: "Sensor Maintenance Event" },
    ]},
    { name: "Communications & RF", types: [
      { abbr: "COM", desc: "Communications Systems" },
      { abbr: "CMS", desc: "Transponder Channel" },
      { abbr: "CHN", desc: "Communications Channel" },
      { abbr: "TPN", desc: "Transponder" },
      { abbr: "RFB", desc: "RF Band Specification" },
      { abbr: "RFE", desc: "RF Emitter Detail Record" },
      { abbr: "LKS", desc: "Link Status" },
      { abbr: "BEM", desc: "Beam Contour Point" },
      { abbr: "BMC", desc: "Beam Contour" },
    ]},
    { name: "Space Environment", types: [
      { abbr: "ENV", desc: "Atmosphere and Environment" },
      { abbr: "SEO", desc: "Space Environment Observation" },
      { abbr: "SEV", desc: "Space Environment Detail" },
      { abbr: "ION", desc: "Ionospheric Observation" },
      { abbr: "ATM", desc: "Atmospheric Model" },
      { abbr: "SPW", desc: "Space Weather Data Record" },
      { abbr: "WTH", desc: "Weather Data" },
      { abbr: "GRV", desc: "Gravity Models" },
      { abbr: "EOP", desc: "Earth Orientation Parameters" },
      { abbr: "PHY", desc: "Physics & Rigid Body Dynamics" },
      { abbr: "TRN", desc: "Terrain Models" },
      { abbr: "STR", desc: "Star Catalog Entry" },
    ]},
    { name: "Launch & Reentry", types: [
      { abbr: "LDM", desc: "Launch Data Message" },
      { abbr: "LND", desc: "Launch Detection" },
      { abbr: "LNE", desc: "Launch Event" },
      { abbr: "ROC", desc: "Rocket Configuration" },
      { abbr: "RDM", desc: "Reentry State Vector" },
    ]},
    { name: "Vehicles & Platforms", types: [
      { abbr: "BUS", desc: "Satellite Bus Specification" },
      { abbr: "PLD", desc: "Payload Information" },
      { abbr: "GEO", desc: "GEO Spacecraft Status" },
      { abbr: "DFH", desc: "GEO Drift History" },
      { abbr: "PRG", desc: "Program Description" },
      { abbr: "ACR", desc: "Aircraft Dynamics" },
      { abbr: "GVH", desc: "Ground Vehicles" },
      { abbr: "HEL", desc: "Helicopter Dynamics" },
      { abbr: "MSL", desc: "Guided Missiles" },
      { abbr: "MST", desc: "Missile Track" },
      { abbr: "NAV", desc: "Naval Vessels" },
    ]},
    { name: "Defense & EW", types: [
      { abbr: "ARM", desc: "Armor and Protection" },
      { abbr: "BAL", desc: "Ballistics" },
      { abbr: "DMG", desc: "Damage Models" },
      { abbr: "EWR", desc: "Electronic Warfare" },
      { abbr: "FCS", desc: "Fire Control Systems" },
      { abbr: "WPN", desc: "Weapons and Munitions" },
      { abbr: "SON", desc: "Sonar & Underwater Acoustics" },
    ]},
    { name: "Protocol & Data Link", types: [
      { abbr: "SPP", desc: "Space Packet Protocol" },
      { abbr: "AOF", desc: "AOS Transfer Frame" },
      { abbr: "TCF", desc: "Telecommand Transfer Frame" },
      { abbr: "TMF", desc: "Telemetry Transfer Frame" },
      { abbr: "CFP", desc: "CCSDS File Delivery PDU" },
      { abbr: "CLT", desc: "Command Link Transmission" },
      { abbr: "RAF", desc: "Return All Frames Service" },
      { abbr: "RCF", desc: "Return Channel Frames" },
      { abbr: "SDL", desc: "Space Data Link Security" },
      { abbr: "XTC", desc: "Telemetry & Command Exchange" },
    ]},
    { name: "Security & Encryption", types: [
      { abbr: "EME", desc: "Encrypted Message Envelope" },
      { abbr: "ENC", desc: "Encryption Header" },
      { abbr: "EPM", desc: "Cryptographic Key Info" },
      { abbr: "PLK", desc: "Plugin Key Exchange" },
    ]},
    { name: "Reference & Metadata", types: [
      { abbr: "RFM", desc: "Reference Frame Message" },
      { abbr: "CRD", desc: "Coordinate Systems" },
      { abbr: "TIM", desc: "Time System" },
      { abbr: "TME", desc: "Time Systems" },
      { abbr: "MET", desc: "Mean Element Theory" },
      { abbr: "LCC", desc: "Legacy Country Code" },
      { abbr: "CTR", desc: "Country Identity" },
      { abbr: "SIT", desc: "Geometric Properties" },
      { abbr: "SCM", desc: "Schema Standard Definition" },
    ]},
    { name: "Data Exchange", types: [
      { abbr: "CRM", desc: "Collection Request Message" },
      { abbr: "PNM", desc: "Publish Notification" },
      { abbr: "ACL", desc: "Access Control Grant" },
      { abbr: "PUR", desc: "Purchase Request" },
      { abbr: "REV", desc: "Review" },
      { abbr: "REC", desc: "Record Wrapper" },
      { abbr: "STF", desc: "Spatial Coverage Definition" },
      { abbr: "PLG", desc: "Plugin Declaration" },
    ]},
  ];

  const totalTypeCount = typeCategories.reduce((n, c) => n + c.types.length, 0);

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

  function flattenData(obj: any, prefix = ''): { strs: [string, string][]; nums: [string, number][] } {
    const strs: [string, string][] = [];
    const nums: [string, number][] = [];
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v === null || v === undefined) continue;
      if (typeof v === 'string') strs.push([key, v]);
      else if (typeof v === 'number') nums.push([key, v]);
      else if (Array.isArray(v)) {
        for (let i = 0; i < v.length; i++) {
          const ak = `${key}[${i}]`;
          if (typeof v[i] === 'string') strs.push([ak, v[i]]);
          else if (typeof v[i] === 'number') nums.push([ak, v[i]]);
          else if (v[i] && typeof v[i] === 'object') {
            const sub = flattenData(v[i], ak);
            strs.push(...sub.strs);
            nums.push(...sub.nums);
          }
        }
      } else if (typeof v === 'object') {
        const sub = flattenData(v, key);
        strs.push(...sub.strs);
        nums.push(...sub.nums);
      }
    }
    return { strs, nums };
  }

  function buildFlatBuffer(data: any, type: string): Uint8Array {
    const enc = new TextEncoder();
    const fileId = ('$' + (type || 'SDS').substring(0, 3)).padEnd(4, '\0');

    // Recursively flatten all nested fields
    const { strs: strFields, nums: numFields } = flattenData(data);

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
      <h2 class="section-title">All {totalTypeCount} Standards</h2>
      <p class="section-subtitle">FlatBuffers schemas for space domain data across {typeCategories.length} categories</p>

      {#each typeCategories as cat}
        <div class="type-category">
          <h3 class="category-title">{cat.name}</h3>
          <div class="types-grid">
            {#each cat.types as t}
              <button
                class="type-card"
                class:active-type={t.abbr === selectedStandard || (t.abbr === 'XTC' && selectedStandard === 'XTCE')}
                on:click={() => {
                  const std = standards.find(s => s.name === t.abbr || (t.abbr === 'XTC' && s.name === 'XTCE'));
                  if (std) selectStandard(std.name);
                }}
              >
                <span class="type-name">{t.abbr}</span>
                <span class="type-desc">{t.desc}</span>
              </button>
            {/each}
          </div>
        </div>
      {/each}
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

  .type-category {
    margin-bottom: 28px;
  }

  .category-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 10px;
    padding-left: 4px;
    border-left: 3px solid var(--accent);
    padding-left: 12px;
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
  }

  .type-card:hover {
    border-color: var(--ui-border-hover);
    background: var(--ui-hover);
  }

  .type-card.active-type {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
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
