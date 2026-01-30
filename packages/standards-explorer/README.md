# @spacedatastandards/standards-explorer

Interactive standards explorer for [Space Data Standards](https://spacedatastandards.org). Browse all 40+ space data schemas, view FlatBuffers IDL and JSON Schema definitions, and generate source code in 11+ languages using [flatc-wasm](https://github.com/nicktrav/flatc-wasm).

Available as a **JavaScript library** and a **Web Component**.

## Install

```bash
npm install @spacedatastandards/standards-explorer
```

## Web Component

Drop `<standards-explorer>` into any HTML page for a fully interactive standards browser:

```html
<script type="module">
  import '@spacedatastandards/standards-explorer';
</script>

<standards-explorer></standards-explorer>
```

Features:
- Category-based grid view with icons
- Search and filter across all standards
- View FlatBuffers IDL, JSON Schema, and FB JSON Schema
- Generate source code in any supported language via flatc-wasm
- Copy and download generated code
- Dark theme, responsive layout

## JavaScript Library API

```js
import { StandardsExplorer } from '@spacedatastandards/standards-explorer';

const explorer = new StandardsExplorer();
await explorer.init();
```

### `getStandards()`

Returns a sorted array of all standard names.

```js
explorer.getStandards();
// → ["ACL", "ATM", "BOV", "CAT", "CDM", "CRM", ...]
```

### `getStandard(name)`

Returns details for a specific standard including IDL, JSON Schema, and FB JSON Schema.

```js
const omm = explorer.getStandard("OMM");
// → {
//   name: "OMM",
//   idl: "table OMM { EPOCH: string; ... }",
//   files: ["./dist/OMM/OMM.ts.tar.gz", ...],
//   jsonSchema: { "$schema": "...", definitions: { ... } },
//   fbJsonSchema: { "x-flatbuffer-root-type": "OMM", ... }
// }
```

### `generateCode(name, language)`

Generates source code for a standard using flatc-wasm. Returns a map of filenames to code content.

```js
const tsCode = await explorer.generateCode("OMM", "ts");
// → { "OMM.ts": "export class OMM { ... }", ... }

const pyCode = await explorer.generateCode("CDM", "python");
// → { "CDM.py": "class CDM: ...", ... }
```

Include dependencies are automatically resolved from the manifest.

### `getJsonSchema(name)` / `getFBJsonSchema(name)`

```js
const schema = explorer.getJsonSchema("OMM");
const fbSchema = explorer.getFBJsonSchema("OMM");
// fbSchema includes x-flatbuffer-type, x-flatbuffer-enum-type, etc.
```

### `getLanguages()` / `getLanguageLabel(lang)`

```js
explorer.getLanguages();
// → ["cpp", "csharp", "dart", "go", "java", "kotlin", "php", "python", "rust", "swift", "ts"]

explorer.getLanguageLabel("ts");
// → "TypeScript"
```

### `getCategories()`

Returns the category definitions used by the web component UI.

```js
explorer.getCategories();
// → [{ title: "Orbit & Trajectory", schemas: ["OMM", "OEM", ...], ... }, ...]
```

### `getVersion()`

Returns the standards package version string.

## Supported Languages

| Language | Code | File Extension |
|---|---|---|
| C++ | `cpp` | `.h` |
| C# | `csharp` | `.cs` |
| Dart | `dart` | `.dart` |
| Go | `go` | `.go` |
| Java | `java` | `.java` |
| Kotlin | `kotlin` | `.kt` |
| PHP | `php` | `.php` |
| Python | `python` | `.py` |
| Rust | `rust` | `.rs` |
| Swift | `swift` | `.swift` |
| TypeScript | `ts` | `.ts` |

## License

Apache-2.0
