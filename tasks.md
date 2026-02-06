# CCSDS XML/KVN Parser WASM Add-on

## Overview

Create a C++ WASM add-on that parses all CCSDS XML and KVN (Keyword-Value Notation) message formats with round-trip capability. The parser will be compiled to WebAssembly using Emscripten and integrated into all 13 supported language runtimes.

## CCSDS Message Formats to Support

Based on the 119 schemas in this repository, the following CCSDS navigation data messages need XML and KVN parsers:

### Core Navigation Messages
- [ ] **OPM** - Orbit Parameter Message (XML + KVN)
- [ ] **OMM** - Orbit Mean-Elements Message (XML + KVN)
- [ ] **OEM** - Orbit Ephemeris Message (XML + KVN)
- [ ] **AEM** - Attitude Ephemeris Message (XML + KVN)
- [ ] **APM** - Attitude Parameter Message (XML + KVN)
- [ ] **TDM** - Tracking Data Message (XML + KVN)
- [ ] **CDM** - Conjunction Data Message (XML + KVN)
- [ ] **RDM** - Re-entry Data Message (XML + KVN)

### Extended Messages (CCSDS 502.0/503.0 series)
- [ ] **OCM** - Orbit Comprehensive Message (XML only)
- [ ] **MPE** - Multiple Pointing Element Set
- [ ] Additional schema types as defined in `/schema/`

## Architecture

```
packages/
└── ccsds-parser/
    ├── CMakeLists.txt           # Main CMake config with emsdk auto-download
    ├── conanfile.py             # Conan package recipe
    ├── cmake/
    │   ├── FetchEmscripten.cmake # CMake module to fetch emsdk
    │   └── ccsds-parser-config.cmake.in # CMake package config template
    ├── include/
    │   └── ccsds/
    │       ├── parser.h          # Main parser interface
    │       ├── xml/              # XML parsing headers
    │       ├── kvn/              # KVN parsing headers
    │       └── types/            # Generated type headers from FlatBuffers
    ├── src/
    │   ├── parser.cpp            # Main parser implementation
    │   ├── xml/
    │   │   ├── xml_parser.cpp    # XML parsing implementation
    │   │   ├── opm_xml.cpp       # OPM XML handler
    │   │   ├── omm_xml.cpp       # OMM XML handler
    │   │   └── ...               # Other message XML handlers
    │   ├── kvn/
    │   │   ├── kvn_parser.cpp    # KVN parsing implementation
    │   │   ├── opm_kvn.cpp       # OPM KVN handler
    │   │   ├── omm_kvn.cpp       # OMM KVN handler
    │   │   └── ...               # Other message KVN handlers
    │   └── bindings/
    │       └── wasm_bindings.cpp # Emscripten bindings
    ├── deps/
    │   └── pugixml/              # Lightweight XML parser (header-only)
    ├── test/
    │   ├── data/                 # Test vectors (CCSDS example files)
    │   │   ├── xml/
    │   │   └── kvn/
    │   ├── roundtrip_test.cpp    # C++ round-trip tests
    │   └── CMakeLists.txt
    └── wasm/
        └── (build output)
```

## Tasks

### Phase 1: Infrastructure Setup

- [ ] **1.1** Create `packages/ccsds-parser/` directory structure
- [ ] **1.2** Create `CMakeLists.txt` with Emscripten detection and auto-download
- [ ] **1.3** Create `cmake/FetchEmscripten.cmake` module
  - Download emsdk to `packages/emsdk/` if not present
  - Configure emsdk environment
  - Set up cross-compilation toolchain
- [ ] **1.4** Add `packages/emsdk/` to `.gitignore`
- [ ] **1.5** Add pugixml as a dependency (header-only XML parser)
- [ ] **1.6** Create basic WASM build pipeline
- [ ] **1.7** Add npm scripts for building the WASM module

### Phase 2: Core Parser Framework

- [ ] **2.1** Define C++ parser interface (`include/ccsds/parser.h`)
  - `parse_xml(const std::string& xml) -> Result<Message>`
  - `parse_kvn(const std::string& kvn) -> Result<Message>`
  - `to_xml(const Message& msg) -> std::string`
  - `to_kvn(const Message& msg) -> std::string`
  - `to_flatbuffer(const Message& msg) -> std::vector<uint8_t>`
  - `from_flatbuffer(const std::vector<uint8_t>& fb) -> Message`
- [ ] **2.2** Implement XML parser base class
- [ ] **2.3** Implement KVN parser base class
- [ ] **2.4** Create message type registry and factory

### Phase 3: Message Parsers (XML)

- [ ] **3.1** OPM XML parser
- [ ] **3.2** OMM XML parser
- [ ] **3.3** OEM XML parser
- [ ] **3.4** AEM XML parser
- [ ] **3.5** APM XML parser
- [ ] **3.6** TDM XML parser
- [ ] **3.7** CDM XML parser
- [ ] **3.8** RDM XML parser
- [ ] **3.9** OCM XML parser

### Phase 4: Message Parsers (KVN)

- [ ] **4.1** OPM KVN parser
- [ ] **4.2** OMM KVN parser
- [ ] **4.3** OEM KVN parser
- [ ] **4.4** AEM KVN parser
- [ ] **4.5** APM KVN parser
- [ ] **4.6** TDM KVN parser
- [ ] **4.7** CDM KVN parser
- [ ] **4.8** RDM KVN parser

### Phase 5: WASM Bindings

- [ ] **5.1** Create Emscripten bindings (`EMSCRIPTEN_BINDINGS`)
- [ ] **5.2** Expose JavaScript API
  ```javascript
  // Expected API
  import { CCSDSParser } from 'spacedatastandards.org/wasm';

  const parser = new CCSDSParser();
  const msg = parser.parseXML(xmlString);
  const kvn = parser.toKVN(msg);
  const fb = parser.toFlatBuffer(msg);
  ```
- [ ] **5.3** Configure memory management for large messages
- [ ] **5.4** Add async streaming support for OEM/AEM (large ephemeris)

### Phase 6: Language Runtime Integration

- [ ] **6.1** JavaScript/TypeScript integration
  - ES module wrapper
  - TypeScript definitions
- [ ] **6.2** Python integration (via wasmtime or pyodide)
- [ ] **6.3** Rust integration (via wasm-bindgen or wasmtime)
- [ ] **6.4** Go integration (via wazero)
- [ ] **6.5** Java integration (via GraalWasm or wasmer-java)
- [ ] **6.6** C# integration (via wasmtime-dotnet)
- [ ] **6.7** Other languages as feasible

### Phase 7: Testing

- [ ] **7.1** Obtain CCSDS reference test vectors
  - Download from CCSDS public test data
  - Create additional edge case tests
- [ ] **7.2** Implement C++ unit tests
- [ ] **7.3** Implement round-trip tests
  - XML → Message → XML (canonical comparison)
  - KVN → Message → KVN (canonical comparison)
  - XML → Message → KVN (cross-format)
  - KVN → Message → XML (cross-format)
  - XML/KVN → Message → FlatBuffer → Message → XML/KVN
- [ ] **7.4** Implement JavaScript round-trip tests
- [ ] **7.5** Implement Python round-trip tests
- [ ] **7.6** Add CI integration for WASM tests

### Phase 8: C++ Package Publishing (Conan)

- [ ] **8.1** Create `conanfile.py` recipe
  - Package name: `spacedatastandards.org`
  - Define options: shared/static, with_wasm
  - Configure dependencies (pugixml, flatbuffers)
  - Export headers and libraries
- [ ] **8.2** Create CMake package config (`ccsds-parser-config.cmake.in`)
  - Enable `find_package(ccsds-parser)` support
  - Export targets for consumers
- [ ] **8.3** Test Conan package locally
  - `conan create . --build=missing`
  - Verify in test_package consumer
- [ ] **8.4** Set up Conan Center Index submission
  - Fork conan-center-index
  - Add recipe following CCI guidelines
  - Submit PR for review
- [ ] **8.5** Add Conan publishing to CI/CD
  - Build for multiple platforms (Linux, macOS, Windows)
  - Build for multiple compilers (GCC, Clang, MSVC)
  - Upload to Conan Center on release

### Phase 9: Documentation & Integration

- [ ] **9.1** Update main `package.json` with WASM build scripts
- [ ] **9.2** Add WASM module to npm package exports
- [ ] **9.3** Create usage documentation
- [ ] **9.4** Add examples for each supported language
- [ ] **9.5** Document Conan installation: `conan install --requires=spacedatastandards.org/1.0@`

## Technical Decisions

### XML Parser Choice
**pugixml** - Lightweight, fast, header-only C++ XML parser
- Small footprint ideal for WASM
- MIT licensed
- Well-tested and widely used

### KVN Parser
Custom implementation following CCSDS 504.0-B-2 specification
- Line-based format
- Key = Value pairs
- Section headers with COMMENT support

### WASM Runtime Considerations

| Language | WASM Runtime | Notes |
| ---------- | ------------------------ | ------------------- |
| JavaScript | Native V8/SpiderMonkey | Direct support |
| TypeScript | Native | Via JavaScript |
| Python | wasmtime-py / pyodide | pyodide for browser |
| Rust | wasmtime / wasmer | Native performance |
| Go | wazero | Pure Go, no CGO |
| Java | GraalWasm / wasmer-java | JVM integration |
| C# | wasmtime-dotnet | .NET Core 3.1+ |
| Swift | WasmKit | Native Swift |
| Dart | wasm package | For Flutter web |
| **C++** | **Native (via Conan)** | **No WASM needed** |

### Build Configuration

```cmake
# Emscripten compile flags for optimal WASM
set(EMSCRIPTEN_FLAGS
    -O3
    -s WASM=1
    -s MODULARIZE=1
    -s EXPORT_ES6=1
    -s ALLOW_MEMORY_GROWTH=1
    -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap','UTF8ToString']
    --bind
)
```

## Dependencies

### Build-time

- CMake 3.20+
- Emscripten SDK (auto-downloaded to `packages/emsdk/`)
- Python 3.8+ (for emsdk)
- Node.js 18+ (for testing)
- Conan 2.x (for C++ package management and publishing)

### Runtime (C++)

- pugixml (vendored, header-only, or via Conan)
- FlatBuffers runtime headers

### Conan Package Dependencies

```ini
[requires]
pugixml/1.14
flatbuffers/24.3.25

[generators]
CMakeDeps
CMakeToolchain
```

## Success Criteria

1. **Correctness**: All CCSDS reference test vectors parse correctly
2. **Round-trip fidelity**: XML→KVN→XML produces semantically identical output
3. **Cross-language consistency**: Same input produces identical output across all languages
4. **Performance**: Parse 10MB OEM file in <1 second in WASM
5. **Size**: WASM module <500KB gzipped

## Open Questions

1. Should we support CCSDS XML 2.0 (NDM combined messages)?
2. Priority order for language runtime integrations?
3. Should the parser validate against XML Schema or just parse?
4. Include covariance matrix parsing for CDM/OMM?

## References

- [CCSDS 502.0-B-3](https://public.ccsds.org/Pubs/502x0b3e1.pdf) - Orbit Data Messages
- [CCSDS 503.0-B-2](https://public.ccsds.org/Pubs/503x0b2.pdf) - Tracking Data Message
- [CCSDS 504.0-B-2](https://public.ccsds.org/Pubs/504x0b2.pdf) - Navigation Data - Definitions and Conventions
- [CCSDS 508.0-B-1](https://public.ccsds.org/Pubs/508x0b1.pdf) - Conjunction Data Message
- [pugixml Documentation](https://pugixml.org/docs/manual.html)
- [Emscripten Documentation](https://emscripten.org/docs/)
- [Conan 2.0 Documentation](https://docs.conan.io/2/)
- [Conan Center Index Contributing Guide](https://github.com/conan-io/conan-center-index/blob/master/docs/adding_packages/README.md)
