# Runtimes the generated bindings need

SDS generates with flatc 25.12.19, shipped as flatc-wasm 26.1.38, which is
`DigitalArsenal/flatbuffers` at tag `wasm-v26.1.38` (commit
`0e85c78b039f694032d1e8db837f101779b332fd`): FlatBuffers 25.12.19 plus the
fork's changes. The generated code checks that version, so the runtime must
match. `scripts/e2e/bindings-compile.mjs` builds every binding against these.

| Language | Runtime | Where it comes from |
|---|---|---|
| C++ | `include/` of the fork | the fork tag; not on a registry |
| Java, Kotlin | `java/src/main/java` of the fork (25.12.19) | the fork tag. Maven Central stops at `flatbuffers-java` 25.2.10, whose version check rejects these bindings |
| C# | `net/FlatBuffers` of the fork | the fork tag. NuGet `Google.FlatBuffers` stops at 25.2.10 |
| PHP | `php/` of the fork | the fork tag; Packagist `google/flatbuffers` v25.12.19 also works for PHP |
| Swift | `swift/Sources` of the fork (`Common`, `FlatBuffers`) | the fork tag. Upstream v25.12.19 does not build these bindings |
| Lobster | `lobster/flatbuffers.lobster` of the fork | the fork tag |
| Go | `github.com/google/flatbuffers/go` v25.12.19+incompatible | the Go module proxy |
| Python | `flatbuffers` 25.12.19 | PyPI |
| Rust | `flatbuffers` 25.12.19 | crates.io |
| Dart | `flat_buffers` | pub.dev (latest 25.9.23) |
| TypeScript, JavaScript | `flatbuffers` | npm (latest 25.9.23) |

Known runtime limits: Swift's `getCheckedRoot` crashes in the fork's verifier on
a vector of doubles (read with `getRoot`); the Dart and Lobster generators write
no file identifier.

Dart is published with the standards under `lib/`, so
`import 'package:spacedatastandards/OMM/main_generated.dart';` works.
