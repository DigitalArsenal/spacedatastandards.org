# Claude Code Guidelines for spacedatastandards.org

## Package Naming

**ALWAYS** use `spacedatastandards.org` as the package name across all package registries:
- npm: `spacedatastandards.org`
- PyPI: `spacedatastandards.org`
- Other registries: Follow the same convention where possible

## Build & Deploy

- Run `npm run build` to build all artifacts.
- Run `npm run deploy` only when its automated commit/push/publish behavior is
  exactly what the release needs; otherwise run the steps manually and keep the
  same gates.
- Create a GitHub release to trigger publishing to package registries.
- Every SDS publish must be treated as a full supply-chain release. Agents must
  monitor CI, verify every configured registry/proxy, and update downstream SDN
  from the externally published Go and TypeScript artifacts before reporting
  completion.
- SDS releases may partially publish before one target fails. That is still a
  failed release. If any intended registry is blocked by a rate limit,
  authentication failure, package validation problem, delayed indexing, or
  missing public consumer endpoint, agents must leave the release incomplete,
  retry or fix only the missing target when appropriate, and must not update SDN
  to the new SDS version.
- When publishing SDS, do not report the release complete or tell downstream
  repos to install the latest version until the release workflow has finished
  and the intended package artifacts are externally visible from their
  registries/module proxies. Publishing SDS is not done when the tag is pushed,
  and it is not done just because GitHub Actions is green. It is done only
  after package artifacts are visible from the registries consumers use and the
  first downstream consumer has been refreshed and verified.
  The release flow is:
  1. Build and test SDS locally.
  2. Commit and push the SDS schema/generated-artifact change.
  3. Create the GitHub release or dispatch the publish workflow for all package
     targets.
  4. Monitor GitHub Actions until the publish workflow is complete.
  5. Verify each intended publication target directly from its public registry,
     not just from workflow status. At minimum:
     `npm view spacedatastandards.org version`,
     `npm view @digitalarsenal/spacedatastandards version --registry=https://npm.pkg.github.com`,
     `curl https://pypi.org/pypi/spacedatastandards.org/json`,
     `curl https://crates.io/api/v1/crates/spacedatastandards-org`,
     `curl https://pub.dev/api/packages/spacedatastandards`,
     Maven Central lookup for the configured Maven coordinate,
     Packagist lookup for the configured PHP package name,
     and
     `GONOSUMDB=github.com/DigitalArsenal/spacedatastandards.org go list -m -versions github.com/DigitalArsenal/spacedatastandards.org/lib/go`
     must show the new release.
     Java/Maven Central is not an intended target unless the `MAVEN_GROUP_ID`
     repository variable is configured to a Central-verified namespace; if it
     is absent, the workflow must say Maven is not configured instead of
     uploading under guessed coordinates. When configured, Maven Central must be
     verified from the public repository path formed from `MAVEN_GROUP_ID`, e.g.
     `https://repo1.maven.org/maven2/<group/path>/spacedatastandards/<version>/`.
     Packagist must resolve
     `https://repo.packagist.org/p2/digitalarsenal/spacedatastandards.json`
     and include the new version. A workflow job that only uploads or validates
     metadata is not enough; the public consumer registry must see the version.
     PHP/Packagist is not an intended target unless both
     `PACKAGIST_USERNAME` and `PACKAGIST_TOKEN` repository secrets are
     configured; if they are absent, the workflow must say Packagist is not
     configured instead of marking metadata validation as a publish.
     A pub.dev rate-limit response, GitHub Packages auth-only local query,
     Packagist 404, or Maven Central 404 is not acceptable evidence of
     publication; either prove the target is not configured/consumer-facing for
     the release or keep the release open.
     If a configured target is not externally visible, leave the release
     incomplete, record the failing registry and evidence, and fix the publish
     path before downstream installation except when the target is explicitly
     documented as not consumer-facing for that release.
  6. Only after all intended package targets are visible, download/install the
     newly published JavaScript/TypeScript SDS package and Go SDS module in SDN,
     update lockfiles, run the SDN checks that cover the touched consumers,
     commit, push, and update the stack submodule pin.
  7. Do not report back, declare the SDS release done, or tell any downstream
     repo to install the latest SDS until publication visibility, downstream
     SDN refresh, SDN verification, and stack pinning are complete.
  8. After SDN is complete, continue the dependency chain for other consumers
     such as SDK, modules, OrbPro, and demos when the schema change affects
     them.

## Schema Authoring Rules

Schemas live at `schema/*/main.fbs` (FlatBuffers IDL). Changes trigger codegen
for every supported language binding (TS, JS, C++, Go, Swift, Python, etc.).

### Enum naming

An enum and a field MUST NEVER share a name in ANY case form. Pick an enum name
that cannot collide with the camelCase form of ANY field that references it.

`flatc`'s TypeScript generator emits `addX(builder, x: enumType)` where the
parameter name `x` is derived from the field name (`FOO_BAR` → `fooBar`). If
the enum is also called `fooBar`, the parameter shadows the enum type and the
generated `.ts` fails to compile.

**Do NOT** fix this by switching enum casing (e.g. `fooBar` → `FooBar`) — the
underlying problem is semantic overlap, not casing. **Rename the enum to
something semantically distinct.**

```fbs
// WRONG — enum name matches the field's camelCase form
enum pluginType : byte { ... }
table PLG {
  PLUGIN_TYPE: pluginType;   // generated param `pluginType: pluginType` → shadow
}

// ALSO WRONG — still overlaps on "pluginType"
enum PluginType : byte { ... }

// RIGHT — enum renamed to a semantically distinct concept
enum pluginCategory : byte { ... }
table PLG {
  PLUGIN_TYPE: pluginCategory;   // generated param `pluginType: pluginCategory` → no shadow
}
```

If you can't think of a distinct name, rename the FIELD as well so field-param
and enum-type are unambiguously different tokens at every casing.

### Other rules

- Field names are `UPPER_SNAKE_CASE`.
- Table names are 3-letter codes (`ETM`, `PLG`, `OMM`, …).
- Each schema file must carry a `file_identifier "$XXX";` line matching its
  3-letter code.
- Root type is the 3-letter table.
- Version + SHA-256 hash headers at the top are managed by
  `scripts/generateVersion.py` — do not hand-edit them.

### Dual-accept wire-format rule (PIV / TAB / PLG)

Plugin invoke frames carry `TAB.WIRE_FORMAT` which selects FLATBUFFER or
ALIGNED_BINARY per-frame. Per SDK contract:

- An input or output port that advertises `ALIGNED_BINARY` in
  `PLG.PLGPortManifest.ACCEPTED_TYPE_SETS[].ALLOWED_WIRE_FORMATS` MUST
  also advertise `FLATBUFFER` for the same schema and file identifier
  in the same set.
- Callers can send either format; the plugin MUST accept both.
- This keeps aligned-binary as an invoke-ABI optimization, not a
  replacement for the canonical FlatBuffer schema.

### Plugin invoke surface lives in SDS

Host↔plugin invoke is the `PIV` standard, not an SDK-local wire:
- `PIVRequest` { METHOD_ID, INPUTS:[TAB], PAYLOAD_ARENA, TRACE_ID, OUTPUT_STREAM_CAP }
- `PIVResponse` { STATUS_CODE, STATUS:pivStatus, YIELDED, BACKLOG_REMAINING,
                  OUTPUTS:[TAB], PAYLOAD_ARENA, ERROR_CODE, ERROR_MESSAGE, TRACE_ID }
- Envelope `PIV` carries either REQUEST or RESPONSE.

The SDK SHOULD NOT author its own plugin-invoke schemas (no PluginInvokeRequest /
PluginInvokeResponse vendored in `space-data-module-sdk/schemas/`). If a new
invoke-layer primitive is needed, add it to SDS.

### Plugin manifest lives in SDS

`PLG` carries the full plugin manifest: identity (PLUGIN_ID, NAME, VERSION,
PLUGIN_TYPE), storefront metadata (PUBLISHER_*, TAGS, FEATURES, SCREENSHOT_URLS,
PAYMENT_MODEL, LISTING_STATUS), protected-delivery fields (WASM_HASH, WASM_CID,
ENCRYPTED_WASM_HASH), capability declarations, and — as of 1.90.0 — the full
invoke-surface detail (INVOKE_SURFACES, METHODS with PLGPortManifest +
PLGAcceptedTypeSet, HOST_CAPABILITIES, TIMERS, PROTOCOLS, BUILD_ARTIFACTS,
RUNTIME_TARGETS). The SDK should not author a parallel PluginManifest schema.
