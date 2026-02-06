# SpaceDataStandards.org

This repository is dedicated to the development and dissemination of space data standards, employing Flatbuffer Interface Definition Language (IDL) schemas as a modern alternative to legacy space data message formats. By embracing Flatbuffers, we aim to provide an efficient, cross-platform serialization solution that is critical for space operations.

Flatbuffers offer several advantages over traditional data serialization methods, particularly in terms of performance and memory efficiency. This makes them highly suitable for space applications where resources are at a premium.

## Example usage in JavaScript using Flatbuffer Serialization

```
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { writeFB, readFB } from 'spacedatastandards.org';
import ipfsHash from 'pure-ipfs-only-hash';
import { standards } from 'spacedatastandards.org';

const { OMMT } = standards.OMM;

const generateOMMData = async () => {
    const dataPath = 'test/output/data';

    const ommDataArray = [
        new OMMT({
            OBJECT_NAME: "VANGUARD 1",
            OBJECT_ID: "1958-002B",
            EPOCH: "2024-06-22T16:56:20.014080",
            // other fields as required
        }),
        new OMMT({
            OBJECT_NAME: "VANGUARD 2",
            OBJECT_ID: "1959-001A",
            EPOCH: "2024-06-23T17:58:04.409760",
            // other fields as required
        })
    ];

    const resultBuffer = writeFB(ommDataArray);
    const CID = await ipfsHash.of(resultBuffer);
    writeFileSync(join(dataPath, `${CID}.omm.fbs`), resultBuffer);

    // Reading the flatbuffer
    const buffer = readFileSync(join(dataPath, `${CID}.omm.fbs`));
    const flatbuffers = readFB(buffer);

    flatbuffers.forEach(obj => {
        console.log({
            OBJECT_NAME: obj.OBJECT_NAME,
            OBJECT_ID: obj.OBJECT_ID,
            EPOCH: obj.EPOCH
        });
    });
}

generateOMMData();
```

## WASM CCSDS Message Parsers

This package includes WebAssembly-based parsers for CCSDS and XTCE standard message formats. The parsers support round-trip conversion between KVN, XML, and FlatBuffers formats.

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

## Website Link

[SpaceDataStandards.org](https://spacedatastandards.org)

## Repository Structure

The repository is structured to facilitate easy access and collaboration:

- **schema/**: FlatBuffers IDL schema definitions for all space data standards
- **dist/**: Generated source code archives from FlatBuffer IDLs for all supported languages
- **lib/**: Generated source code organized by language (ts, js, py, java, go, cpp, cs, kt, rs, dart, php, sw, lob)
- **src/cpp/**: C++ CCSDS/XTCE message parsers (compiled to WASM)
- **wasm/**: WebAssembly module and Node.js wrapper for message parsing

## Purpose

The primary goal of this repository is to establish a set of standardized Flatbuffer IDLs that can replace a variety of legacy space data messages such as SATCAT, TLE, VCM, and others. These legacy formats have served the space industry for decades, but as technology progresses, the need for more advanced data handling becomes apparent.

Transitioning to Flatbuffer IDLs allows us to address the challenges of modern space data communication, ensuring faster, more reliable, and more secure data exchange. These standards are essential for the interoperability between different systems and organizations within the aerospace sector.

## Generated Source Code Files

For the generated Flatbuffer IDL source code files, please refer to the `dist/` folder in this repository. Each subfolder within `dist/` corresponds to a specific Flatbuffer schema related to a space data standard.

[Access the Generated Source Code Files](./dist/)

## Deployment

Space Data Standards supports 13 programming languages, each with its own package manager. For detailed instructions on publishing packages to npm, PyPI, crates.io, Maven Central, NuGet, pub.dev, and more, see the [Deployment Guide](./DEPLOY.md).

## Contributing

Contributions to this repository are welcome. To propose changes or improvements to the existing Flatbuffer IDLs, please submit a pull request or open an issue for discussion.

For more detailed discussions or to request new features, you may reach out to us via email at [spacestandards@digitalarsenal.io](mailto:spacestandards@digitalarsenal.io), or by [opening an issue](https://github.com/DigitalArsenal/spacedatastandards.org/issues) on this repository.

## More Information

For a more comprehensive understanding of the space data standards being developed in this repository, please refer to our [Gitbook documentation](https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/).

For historical context and information about legacy message documentation, please visit the [legacy message documentation section](https://github.com/DigitalArsenal/spacedatastandards.org/tree/main/survey/legacy-messages).

## License

This project is licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Funding

[Interested in supporting this project? Click here.](./FUNDING.md)
