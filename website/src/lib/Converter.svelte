<script lang="ts">
  import { onMount } from "svelte";
  import { samples } from "./converter/samples";

  // WASM module state
  let wasmModule: any = null;
  let wasmLoading = true;
  let wasmError = "";

  // Converter state
  let input = "";
  let output = "";
  let detectedType = "";
  let detectedFormat = "";
  let targetFormat = "json";
  let converting = false;
  let convertError = "";
  let copySuccess = false;

  // Dropdown state
  let sampleDropdownOpen = false;
  let selectedSampleIndex = -1;

  // Language showcase
  let selectedLang = "nodejs";

  // --- Parsers & Serializers ---
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

  function toHexDump(data: any, type: string): string {
    const enc = new TextEncoder();
    const fileId = ('$' + (type || 'SDS').substring(0, 3)).padEnd(4, '\0');
    const strFields: [string, string][] = [];
    const numFields: [string, number][] = [];
    for (const [k, v] of Object.entries(data)) {
      if (typeof v === 'string') strFields.push([k, v]);
      else if (typeof v === 'number') numFields.push([k, v]);
    }
    const nFields = strFields.length + numFields.length;
    const vtableBytes = 4 + nFields * 2;
    const vtablePad = (vtableBytes + 3) & ~3;
    const tablePad = (4 + numFields.length * 8 + strFields.length * 4 + 3) & ~3;
    const buf = new ArrayBuffer(4096);
    const u8 = new Uint8Array(buf);
    const dv = new DataView(buf);
    let p = 0;
    // Root offset + file id
    dv.setUint32(p, 8 + vtablePad, true); p += 4;
    for (let i = 0; i < 4; i++) u8[p++] = fileId.charCodeAt(i);
    // VTable
    dv.setUint16(p, vtableBytes, true); p += 2;
    dv.setUint16(p, tablePad, true); p += 2;
    let fOff = 4;
    for (const _ of numFields) { dv.setUint16(p, fOff, true); p += 2; fOff += 8; }
    for (const _ of strFields) { dv.setUint16(p, fOff, true); p += 2; fOff += 4; }
    p = 8 + vtablePad;
    // Table
    const tStart = p;
    dv.setInt32(p, tStart - 8, true); p += 4;
    for (const [, v] of numFields) { dv.setFloat64(p, v, true); p += 8; }
    const sOffBase = p;
    p += strFields.length * 4;
    p = tStart + tablePad;
    // Strings
    for (let i = 0; i < strFields.length; i++) {
      const bytes = enc.encode(strFields[i][1]);
      dv.setUint32(sOffBase + i * 4, p - (sOffBase + i * 4), true);
      dv.setUint32(p, bytes.length, true); p += 4;
      u8.set(bytes, p); p += bytes.length;
      u8[p++] = 0;
      p = (p + 3) & ~3;
    }
    return formatHex(u8.subarray(0, p));
  }

  function formatHex(bytes: Uint8Array): string {
    const lines: string[] = [];
    for (let i = 0; i < bytes.length; i += 16) {
      const addr = i.toString(16).padStart(8, '0');
      const hex: string[] = [];
      const asc: string[] = [];
      for (let j = 0; j < 16; j++) {
        if (i + j < bytes.length) {
          hex.push(bytes[i + j].toString(16).padStart(2, '0'));
          const c = bytes[i + j];
          asc.push(c >= 0x20 && c < 0x7f ? String.fromCharCode(c) : '.');
        } else { hex.push('  '); asc.push(' '); }
      }
      lines.push(`${addr}  ${hex.slice(0, 8).join(' ')}  ${hex.slice(8).join(' ')}  |${asc.join('')}|`);
    }
    return lines.join('\n');
  }

  const supportedTypes = [
    { name: "OMM", desc: "Orbit Mean-Elements Message" },
    { name: "OEM", desc: "Orbit Ephemeris Message" },
    { name: "CDM", desc: "Conjunction Data Message" },
    { name: "OPM", desc: "Orbit Parameters Message" },
    { name: "AEM", desc: "Attitude Ephemeris Message" },
    { name: "TDM", desc: "Tracking Data Message" },
    { name: "XTCE", desc: "Telemetry & Command Exchange" },
  ];

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

  function detectInput() {
    if (!input.trim()) return;
    convertError = "";
    try {
      // Try JSON first
      const trimmed = input.trim();
      if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        try {
          JSON.parse(trimmed);
          detectedFormat = "json";
          // Try to detect type from JSON keys
          const obj = JSON.parse(trimmed);
          const keys = Object.keys(obj);
          if (keys.some(k => /MEAN_MOTION|NORAD_CAT_ID|EPHEMERIS_TYPE/.test(k))) detectedType = "OMM";
          else if (keys.some(k => /MISS_DISTANCE|TCA/.test(k))) detectedType = "CDM";
          else if (keys.some(k => /X_DOT|Y_DOT|Z_DOT|EPHEMERIS/.test(k)) && !keys.some(k => /EULER|QUATERNION/.test(k))) detectedType = "OEM";
          else if (keys.some(k => /QUATERNION|EULER/.test(k))) detectedType = "AEM";
          else if (keys.some(k => /SEMI_MAJOR_AXIS|STATE_VECTOR/.test(k))) detectedType = "OPM";
          else detectedType = "";
          if (!targetFormat || targetFormat === "json") targetFormat = "kvn";
          return;
        } catch { /* not JSON */ }
      }
      // Use WASM detection for KVN/XML
      if (wasmModule) {
        detectedFormat = wasmModule.detectFormat(input);
        if (detectedFormat === "kvn") {
          detectedType = wasmModule.detectKvnType(input);
          if (!targetFormat || targetFormat === "kvn") targetFormat = "json";
        } else if (detectedFormat === "xml") {
          detectedType = wasmModule.detectXmlType(input);
          if (!targetFormat || targetFormat === "xml") targetFormat = "json";
        } else {
          detectedType = "";
        }
      } else {
        // Fallback detection without WASM
        if (trimmed.startsWith('<?xml') || trimmed.startsWith('<')) {
          detectedFormat = "xml";
          detectedType = "";
          if (!targetFormat || targetFormat === "xml") targetFormat = "json";
        } else if (/^CCSDS_\w+_VERS/.test(trimmed)) {
          detectedFormat = "kvn";
          detectedType = "";
          if (!targetFormat || targetFormat === "kvn") targetFormat = "json";
        }
      }
    } catch {
      detectedType = "";
      detectedFormat = "";
    }
  }

  function loadSample(index: number) {
    selectedSampleIndex = index;
    sampleDropdownOpen = false;
    const sample = samples[index];
    input = sample.content;
    output = "";
    convertError = "";
    detectInput();
  }

  async function convert() {
    if (!input.trim()) return;
    converting = true;
    convertError = "";
    output = "";
    try {
      const src = detectedFormat;
      const tgt = targetFormat;

      if (src === tgt) {
        output = input;
        converting = false;
        return;
      }

      // KVN <-> XML via WASM (high fidelity)
      if (wasmModule && ((src === "kvn" && tgt === "xml") || (src === "xml" && tgt === "kvn"))) {
        output = wasmModule.convert(input, tgt);
        converting = false;
        return;
      }

      // Parse input to intermediate JSON object
      let intermediate: any;
      if (src === "json") {
        intermediate = JSON.parse(input.trim());
      } else if (src === "kvn") {
        // Try WASM KVN->XML->JSON path for better fidelity, fallback to JS parser
        if (wasmModule && tgt !== "xml") {
          try {
            const xmlStr = wasmModule.convert(input, "xml");
            intermediate = parseXML(xmlStr);
          } catch {
            intermediate = parseKVN(input);
          }
        } else {
          intermediate = parseKVN(input);
        }
      } else if (src === "xml") {
        intermediate = parseXML(input);
      } else {
        throw new Error(`Cannot parse input format: ${src || 'unknown'}`);
      }

      // Serialize to target format
      if (tgt === "json") {
        output = JSON.stringify(intermediate, null, 2);
      } else if (tgt === "kvn") {
        output = jsonToKVN(intermediate);
      } else if (tgt === "xml") {
        output = jsonToXML(intermediate, detectedType || "message");
      } else if (tgt === "hex") {
        output = toHexDump(intermediate, detectedType || "SDS");
      }
    } catch (e: any) {
      convertError = e.message || "Conversion failed";
    }
    converting = false;
  }

  async function copyOutput() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      copySuccess = true;
      setTimeout(() => { copySuccess = false; }, 2000);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = output;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      copySuccess = true;
      setTimeout(() => { copySuccess = false; }, 2000);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      sampleDropdownOpen = false;
    }
  }

  async function loadWasmFactory(): Promise<any> {
    // Use a blob-based module import to bypass Vite's static import analysis.
    // The sds_parsers.js is an ES module (Emscripten output) served from /wasm/node/.
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
          if (path.endsWith(".wasm")) {
            return "/wasm/node/" + path;
          }
          return path;
        },
      });
      wasmLoading = false;
    } catch (e: any) {
      wasmError = e.message || "Failed to load WASM module";
      wasmLoading = false;
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="converter-page">
  <div class="bg-grid"></div>

  <div class="container">
    <div class="hero">
      <div class="hero-badge">CCSDS NDM</div>
      <h1 class="title">Format Converter</h1>
      <p class="subtitle">Convert between KVN, XML, JSON, and FlatBuffer hex — everything to everything — using C++/WASM parsers in your browser</p>
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

      <!-- Sample Selector -->
      <div class="selector-section">
        <label class="selector-label">Load Example</label>
        <div class="dropdown" class:open={sampleDropdownOpen}>
          <button class="dropdown-trigger" on:click={() => { sampleDropdownOpen = !sampleDropdownOpen; }}>
            <span class="dropdown-text">
              {selectedSampleIndex >= 0 ? samples[selectedSampleIndex].label : "Select a sample..."}
            </span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {#if sampleDropdownOpen}
            <div class="dropdown-menu">
              {#each samples as sample, i}
                <button
                  class="dropdown-item"
                  class:selected={i === selectedSampleIndex}
                  on:click={() => loadSample(i)}
                >
                  <span class="sample-type-badge">{sample.type}</span>
                  <span class="sample-format-badge" class:kvn={sample.format === 'kvn'} class:xml={sample.format === 'xml'}>{sample.format.toUpperCase()}</span>
                  <span class="sample-label">{sample.label}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- Detection Badges & Target -->
      <div class="detection-row">
        <div class="badges">
          {#if detectedType}
            <span class="badge type-badge">{detectedType}</span>
          {/if}
          {#if detectedFormat}
            <span class="badge det-format-badge">{detectedFormat.toUpperCase()}</span>
          {/if}
          {#if !detectedType && !detectedFormat && input.trim()}
            <span class="badge unknown-badge">Unknown format</span>
          {/if}
        </div>
        {#if detectedFormat}
          <div class="target-selector">
            <span class="target-label">Target:</span>
            <button
              class="target-btn"
              class:active={targetFormat === 'kvn'}
              on:click={() => { targetFormat = 'kvn'; }}
            >KVN</button>
            <button
              class="target-btn"
              class:active={targetFormat === 'xml'}
              on:click={() => { targetFormat = 'xml'; }}
            >XML</button>
            <button
              class="target-btn"
              class:active={targetFormat === 'json'}
              on:click={() => { targetFormat = 'json'; }}
            >JSON</button>
            <button
              class="target-btn"
              class:active={targetFormat === 'hex'}
              on:click={() => { targetFormat = 'hex'; }}
            >FlatBuffer</button>
          </div>
        {/if}
      </div>

      <!-- Input / Output Areas -->
      <div class="editor-grid">
        <div class="editor-pane">
          <div class="editor-header">
            <span class="editor-title">Input</span>
          </div>
          <textarea
            class="editor-textarea"
            bind:value={input}
            on:input={detectInput}
            placeholder="Paste KVN, XML, or JSON here, or select a sample above..."
            spellcheck="false"
          ></textarea>
        </div>

        <div class="editor-pane">
          <div class="editor-header">
            <span class="editor-title">Output</span>
            {#if output}
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
          <textarea
            class="editor-textarea"
            value={output}
            readonly
            placeholder="Converted output will appear here..."
          ></textarea>
        </div>
      </div>

      <!-- Convert Button -->
      <div class="convert-row">
        <button
          class="convert-btn"
          on:click={convert}
          disabled={!input.trim() || !detectedFormat || converting}
        >
          {#if converting}
            <div class="spinner small"></div>
            Converting...
          {:else}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <polyline points="16 3 21 3 21 8"></polyline>
              <line x1="4" y1="20" x2="21" y2="3"></line>
              <polyline points="21 16 21 21 16 21"></polyline>
              <line x1="15" y1="15" x2="21" y2="21"></line>
              <line x1="4" y1="4" x2="9" y2="9"></line>
            </svg>
            Convert to {targetFormat === 'hex' ? 'FlatBuffer Hex' : targetFormat.toUpperCase()}
          {/if}
        </button>
      </div>

      {#if convertError}
        <div class="error-box">{convertError}</div>
      {/if}
    </div>

    <!-- Supported Types -->
    <div class="types-section">
      <h2 class="section-title">Supported CCSDS Types</h2>
      <div class="types-grid">
        {#each supportedTypes as t}
          <div class="type-card">
            <span class="type-name">{t.name}</span>
            <span class="type-desc">{t.desc}</span>
          </div>
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

  .spinner.small {
    width: 16px;
    height: 16px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Selector / Dropdown */
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
    color: var(--text-secondary);
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
    max-height: 320px;
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

  .sample-type-badge {
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

  .sample-format-badge {
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .sample-format-badge.kvn {
    background: rgba(247, 151, 30, 0.15);
    color: #f7971e;
  }

  .sample-format-badge.xml {
    background: rgba(23, 234, 217, 0.15);
    color: #17ead9;
  }

  .sample-label {
    color: var(--text-secondary);
    font-size: 13px;
  }

  /* Detection Row */
  .detection-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    min-height: 36px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .badges {
    display: flex;
    gap: 8px;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    font-family: var(--font-mono);
  }

  .type-badge {
    background: rgba(0, 119, 182, 0.15);
    color: var(--accent);
  }

  .det-format-badge {
    background: rgba(23, 234, 217, 0.15);
    color: #17ead9;
  }

  .unknown-badge {
    background: rgba(134, 134, 139, 0.15);
    color: var(--text-muted);
  }

  .target-selector {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .target-label {
    font-size: 13px;
    color: var(--text-muted);
  }

  .target-btn {
    padding: 6px 14px;
    background: var(--code-bg);
    border: 1px solid var(--ui-border);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
    font-family: var(--font-mono);
    cursor: pointer;
    transition: all 0.15s;
  }

  .target-btn:hover {
    border-color: var(--ui-border-hover);
  }

  .target-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }

  /* Editor Grid */
  .editor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
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
    min-height: 280px;
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

  /* Convert Button */
  .convert-row {
    display: flex;
    justify-content: center;
  }

  .convert-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 36px;
    background: var(--accent);
    border: none;
    border-radius: 28px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }

  .convert-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 119, 182, 0.3);
  }

  .convert-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
  }

  .type-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(20px);
  }

  .type-name {
    display: block;
    font-family: var(--font-mono);
    font-size: 20px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 6px;
  }

  .type-desc {
    display: block;
    font-size: 13px;
    color: var(--text-secondary);
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

    .detection-row {
      flex-direction: column;
      align-items: flex-start;
    }

    .types-grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
  }

  @media (min-width: 600px) {
    .tab-label {
      display: inline;
    }
  }
</style>
