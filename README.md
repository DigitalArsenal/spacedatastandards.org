# Space Data Standards

The open-source schema framework for the modern space industry. High-performance FlatBuffers serialization with JSON Schema compatibility, replacing legacy formats like TLE, VCM, and XML-based CCSDS messages.

[![GitHub Pages](https://github.com/DigitalArsenal/spacedatastandards.org/actions/workflows/pages/pages-build-deployment/badge.svg)](https://spacedatastandards.org) [![npm](https://img.shields.io/npm/v/spacedatastandards.org)](https://www.npmjs.com/package/spacedatastandards.org) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## What is Space Data Standards?

An open-source project providing modern, high-performance schemas for space situational awareness and space traffic management data exchange.

- **Built on Google FlatBuffers** with zero-copy serialization
- **Cross-platform support** for 13+ programming languages
- **Based on CCSDS standards** used by NASA, ESA, JAXA, and space agencies worldwide
- **Modernized** for mega-constellations, commercial space, and real-time operations
- **Powers the Space Data Network (SDN)**, a decentralized P2P network for global space data exchange built on IPFS/libp2p

## Why FlatBuffers?

| Feature               | FlatBuffers                   | Protocol Buffers      | JSON / XML          |
| --------------------- | ----------------------------- | --------------------- | ------------------- |
| Access method         | Zero-copy, no parsing         | Requires parsing step | Full parse required |
| Memory allocation     | None on decode                | Allocation on decode  | High memory usage   |
| Schema evolution      | Forward & backward compatible | Good schema evolution | No type safety      |
| Code footprint        | Tiny                          | Larger generated code | N/A                 |
| File size             | Compact binary                | Compact binary        | Large               |
| Human-readable schema | Yes (IDL)                     | Yes (.proto)          | Self-describing     |
| Language support      | 13+ languages                 | 10+ languages         | Universal           |

## Replacing Legacy Formats

Space Data Standards modernizes decades-old formats while maintaining compatibility with CCSDS standards.

| Legacy Format | Description               | SDS Schema |
| ------------- | ------------------------- | ---------- |
| TLE           | Two-Line Element Sets     | OMM        |
| SATCAT        | Satellite Catalog         | CAT        |
| VCM           | Vector Covariance Message | VCM / OEM  |
| CDM (XML)     | Conjunction Data Message  | CDM        |
| OEM (XML)     | Orbit Ephemeris Message   | OEM        |

## Schema Categories

### Orbital Data

**OMM, OEM, OCM, OSM** — Mean elements, ephemerides, and orbit characterization messages

### Conjunction

**CDM, CSM, CAT** — Conjunction data, screening, and catalog messages for collision avoidance

### Entity

**EPM, PNM** — Entity profiles and publish notifications for identity management

### Tracking

**TDM, RFM** — Tracking data and reference frame messages for observation data

### Maneuver

**MET, MPE** — Maneuver planning and execution messages for operations

### Telemetry

**XTC** — XML Telemetry and Command Exchange for spacecraft telemetry data

### Marketplace

**STF, PUR, REV, ACL** — Storefront, purchase, review, and access control for data commerce

### Geospatial

**GJN, CZM, KML, GPX, COT** — GeoJSON, CZML, KML, GPX, and Cursor on Target for geospatial data exchange

For the full schema registry (100+ schemas across 16 categories), visit [spacedatastandards.org](https://spacedatastandards.org).

## Quick Start

### Install

```bash
# npm
npm install spacedatastandards.org

# pip
pip install spacedatastandards.org
```

### FlatBuffers Serialization (JavaScript)

```javascript
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { writeFB, readFB } from 'spacedatastandards.org';
import { standards } from 'spacedatastandards.org';

const { OMMT } = standards.OMM;

const ommDataArray = [
    new OMMT({
        OBJECT_NAME: "VANGUARD 1",
        OBJECT_ID: "1958-002B",
        EPOCH: "2024-06-22T16:56:20.014080",
    }),
    new OMMT({
        OBJECT_NAME: "VANGUARD 2",
        OBJECT_ID: "1959-001A",
        EPOCH: "2024-06-23T17:58:04.409760",
    })
];

// Write to FlatBuffer
const resultBuffer = writeFB(ommDataArray);
writeFileSync('output.omm.fbs', resultBuffer);

// Read from FlatBuffer
const buffer = readFileSync('output.omm.fbs');
const flatbuffers = readFB(buffer);

flatbuffers.forEach(obj => {
    console.log({
        OBJECT_NAME: obj.OBJECT_NAME,
        OBJECT_ID: obj.OBJECT_ID,
        EPOCH: obj.EPOCH
    });
});
```

## WASM CCSDS Message Parsers

WebAssembly-based parsers for CCSDS and XTCE standard message formats with round-trip conversion between KVN, XML, and FlatBuffers formats.

### Supported Message Types

| Type | KVN | XML | Description |
|------|-----|-----|-------------|
| OMM  | Yes | Yes | Orbit Mean-Elements Message |
| OEM  | Yes | Yes | Orbit Ephemeris Message |
| CDM  | Yes | -   | Conjunction Data Message |
| OPM  | Yes | Yes | Orbit Parameters Message |
| AEM  | Yes | -   | Attitude Ephemeris Message |
| TDM  | Yes | Yes | Tracking Data Message |
| XTCE | -   | Yes | XML Telemetric & Command Exchange (1.2) |

### WASM Geospatial Parsers

WebAssembly-based parsers for geospatial and industry-standard formats with round-trip conversion to JSON and FlatBuffers.

| Type | Description                |
| ---- | -------------------------- |
| GJN  | GeoJSON Feature Collection |
| CZM  | CZML (Cesium Language)     |
| KML  | Keyhole Markup Language    |
| GPX  | GPS Exchange Format        |
| COT  | Cursor on Target           |

### Usage

```javascript
import { init } from 'spacedatastandards.org/wasm/node/index.mjs';

const sds = await init();

// Auto-detect format and convert
const xml = sds.convert(kvnString, 'xml');

// Direct round-trip functions
const result = sds.ommKvnRoundtrip(kvnInput);
const xtce = sds.xtceXmlRoundtrip(xtceXml);

// Format detection
sds.detectFormat(input);   // 'kvn', 'xml', or 'json'
sds.detectKvnType(input);  // 'OMM', 'OEM', 'CDM', etc.
sds.detectXmlType(input);  // 'OMM', 'XTCE', etc.
```

### Building WASM

Requires [Emscripten](https://emscripten.org/):

```bash
npm run build:wasm
```

## 13 Language Support

All schemas are defined in FlatBuffers IDL and automatically compiled to all supported languages. JSON Schema with x-flatbuffer annotations is also generated for validation and documentation.

| Language   | Language   | Language |
| ---------- | ---------- | -------- |
| TypeScript | JavaScript | Python   |
| Go         | Rust       | C++      |
| C#         | Java       | Kotlin   |
| Swift      | PHP        | Dart     |
| Lobster    |            |          |

## Space Data Network

The [Space Data Network (SDN)](https://spacedatanetwork.org) is a decentralized P2P network for global space data exchange built on IPFS/libp2p.

- **Decentralized Architecture** — No central server or single point of failure
- **Real-time PubSub** — Subscribe to data streams by schema type (OMM, CDM, etc.)
- **Cryptographic Verification** — Ed25519 signatures on all data
- **Content Addressing** — Tamper-proof data with IPFS CIDs
- **Cross-Platform** — Server, browser, desktop, and edge relay support

## Repository Structure

- **schema/** — FlatBuffers IDL schema definitions for all space data standards
- **dist/** — Generated source code archives from FlatBuffer IDLs for all supported languages
- **lib/** — Generated source code organized by language (ts, js, py, java, go, cpp, cs, kt, rs, dart, php, sw, lob)
- **src/cpp/** — C++ CCSDS/XTCE message parsers (compiled to WASM)
- **wasm/** — WebAssembly module and Node.js wrapper for message parsing
- **website/** — Svelte-based website source

## Deployment

Space Data Standards supports 13 programming languages, each with its own package manager. For detailed instructions on publishing packages to npm, PyPI, crates.io, Maven Central, NuGet, pub.dev, and more, see the [Deployment Guide](./DEPLOY.md).

## Contributing

Contributions are welcome. To propose changes or improvements to the existing FlatBuffer IDLs, please submit a pull request or open an issue for discussion.

For more detailed discussions or to request new features, reach out via email at [spacestandards@digitalarsenal.io](mailto:spacestandards@digitalarsenal.io), or by [opening an issue](https://github.com/DigitalArsenal/spacedatastandards.org/issues) on this repository.

## Documentation

- [Website](https://spacedatastandards.org)
- [Gitbook Documentation](https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/)
- [Legacy Message Documentation](https://github.com/DigitalArsenal/spacedatastandards.org/tree/main/survey/legacy-messages)
- [Generated Source Code Files](./dist/)

## License

This project is licensed under the Apache License, Version 2.0. You may obtain a copy of the License at <http://www.apache.org/licenses/LICENSE-2.0>.
