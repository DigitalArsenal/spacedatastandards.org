# Claude Code Guidelines for spacedatastandards.org

## Package Naming

**ALWAYS** use `spacedatastandards.org` as the package name across all package registries:
- npm: `spacedatastandards.org`
- PyPI: `spacedatastandards.org`
- Other registries: Follow the same convention where possible

## Build & Deploy

- Run `npm run build` to build all artifacts
- Run `npm run deploy` to build, commit, and push
- Create a GitHub release to trigger publishing to package registries

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

- Every input and output port MUST advertise both `FLATBUFFER` and
  `ALIGNED_BINARY` in
  `PLG.PLGPortManifest.ACCEPTED_TYPE_SETS[].ALLOWED_WIRE_FORMATS` for each
  logical type it accepts.
- The paired type refs MUST carry the same schema name, file identifier, root
  type, version, and schema hash when present. The aligned entry additionally
  carries its required layout and alignment metadata.
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

### Provider module manifest lives in SDS ($PMM, 1.171.0)

What a provider node OFFERS is `$PMM`, never a bespoke JSON endpoint. One
`$PMM` per provider domain, signed by that provider's node key, listing each
offered module as a `PMMModuleEntry` (MODULE_ID reverse-DNS, PLUGIN_ID/PLG_CID
back-reference, CONTENT_HASH of the portable pre-AOT WASM, ARTIFACT_SIGNATURE,
TRUST_TIER, DEFAULT_ENABLED, ACCESS_POLICY, ENTRY_STATE, EPOCH).

Client loading convention (anonymous, no session):

    GET https://<provider-domain>/.well-known/sdn/modules.pmm
        Content-Type: application/vnd.sds.pmm            (size-prefixed $PMM)
    GET https://<provider-domain>/.well-known/sdn/modules.pmm.json
        Content-Type: application/json                   (IDL-exact key mirror)

Both MUST answer unauthenticated cross-origin GETs with
`Access-Control-Allow-Origin: *` and no credentials. `PMM.SIGNATURE` covers the
canonical `SDN-MODULE-MANIFEST-V1` statement documented in
`schema/PMM/main.fbs`; the key it verifies against is bound to the domain by
the DNS TXT proof named in `PMMTrustAnchor.DNS_PROOF_RECORD_NAME` and priced by
the Adversarial-Security bond in `PMMTrustAnchor.BOND_ADDRESSES`.

Division of labour: `$PMM` = which modules a provider serves and what an
anonymous client may load; `$PLG` = the full per-module listing; `$STO`/`$STF` =
commerce; `$APP` = which modules one application composes.

Grouping a catalogue by family (1.173.0): read
`PMMModuleEntry.PLUGIN_TYPE: pluginCategory` — the same enum as
`$PLG.PLUGIN_TYPE`, carried on the entry so a storefront can section the
offering at anonymous boot without fetching one `$PLG` per module.

**`MODULE_ID` is not a family carrier.** It is a stable reverse-DNS identity
and nothing more; the minted ids are deliberately inconsistent
(`com.orbpro.sgp4`, `org.sdn.flows.od-supplemental-omm`, bare
`orbit-determination`). Parsing family out of it is unsupported and any such
parser is inventing a convention SDS does not define. A provider that wants
its modules grouped SETS THE FIELD.

`PLUGIN_TYPE` defaults to `Unspecified`, which exists because `Sensor` holds
ordinal 0 and an unset enum would otherwise decode as a Sensor. A consumer
MUST render `Unspecified` as ungrouped — never as a member of any family, and
never by guessing.

### Physical properties live in SDS ($OPP, 1.172.0)

A mass, dimension, area or radar cross-section is published as `$OPP`, never as
a bare number in a sidecar JSON. The record is per OBJECT, joins to `$CAT` by
`NORAD_CAT_ID`/`OBJECT_ID`, to `$BUS` by `BUS_ID`, and to the exact reviewed 3D
asset by `OPPAssetRef` (`VAM_ID` + `VARIANT_ID` + `ASSET_SHA256` copied verbatim
from `$VAM`).

Never-invent-data is enforced by the SHAPE, not by prose: a physical quantity
exists only as an `OPPQuantity`, and

    UNITS:string (required);
    PROVENANCE:OPPProvenance (required);

so there is no encoding for a value that does not name its `SOURCE`, `EPOCH`,
`RETRIEVED_AT` and `METHOD`. Unknown values are ABSENT — never zero, never a
placeholder, never carried across from a sibling object. `OPP.SOURCES` lists
every source consulted, including ones that yielded nothing, so a consumer can
tell "not looked for" from "looked for and not published".

Radar cross-section is band- and aspect-dependent, so `RADAR_CROSS_SECTIONS` is
a LIST of `OPPRadarCrossSection`, never one scalar. ESA DISCOS `xSectMin` /
`xSectAvg` / `xSectMax` become three entries with `ASPECT` MINIMUM / AVERAGE /
MAXIMUM sharing one `OPPProvenance`. `m2` and `dBsm` are never silently
converted. A source that publishes a bucket instead of a number uses
`SIZE_CLASS` verbatim; a bucket is never turned into a number.

Geometry measured off a 3D model is `METHOD: MODEL_DERIVED` and describes the
MODEL, not the flight article. A value borrowed from the bus design is
`METHOD: INFERRED_FROM_FAMILY` and is visibly an approximation.

Division of labour: `$CAT` = catalogue identity, orbit, and the publisher's own
unattributed RCS/SIZE/MASS convenience scalars; `$BUS` = the bus DESIGN shared
by every object built on it; `$VAM` = asset bytes, licence, review, geometry
metrics; `$PNL` = the articulated panel model consumed by SRP propagation;
`$OPP` = per-object physical truth where every value names its own source.
`OPPSurface.PANEL_ID` joins a surface to its `$PNL` panel and
`OPPSurface.GLTF_MATERIAL_NAME`/`GLTF_MATERIAL_INDEX` join it to the exact glTF
material of the variant named in `ASSET`.

### RF captures and network aggregates live in SDS ($IQC / $CNP, 1.177.0)

A raw-IQ recording held in a public archive is `$IQC`; an aggregated
connectivity statistic for a constellation's user network is `$CNP`. Neither
is a sidecar JSON and neither is `$RFO`.

`$IQC` is a POINTER RECORD, normalized onto the SigMF v1 core namespace. It
carries where the samples are (`PAYLOADS[].URL`), how large they are
(`BYTE_LENGTH`), and what they hash to (`BYTE_SHA256` / `BYTE_SHA512` — SigMF
publishes SHA-512, so it is carried in its own field rather than converted
away). It NEVER carries samples. `IQCPayloadRef.CUSTODY` defaults to
`UPSTREAM_ONLY`; `PINNED` is a deliberate per-capture decision for small
high-value recordings, never a bulk mirror.

Units are named in the field. SigMF publishes hertz, so `SAMPLE_RATE_HZ`,
`CENTER_FREQ_HZ` and both `FREQ_*_EDGE_HZ` carry Hz unconverted. `$IQC`
deliberately does NOT adopt `$RFB`'s MHz convention — a consumer joining the
two divides by 1e6 at the join, explicitly. `DATATYPE` is the SigMF token
verbatim (`cf32_le`); a consumer that cannot parse it refuses the samples
rather than assuming a layout. `GEOLOCATION` is a nested table because 0,0 is
a real place: absent means "no position published", which a zero-defaulted
scalar pair could never say. An empty `LICENSE` means UNKNOWN TERMS — never
public domain, never a grant to redistribute; licence is per RECORDING, never
per site.

`$CNP` follows `$OPP`'s never-invent-data shape. A quantity exists only as a
`CNPMetric`, and

    UNITS:string (required);
    PROVENANCE:CNPProvenance (required);

so there is no encoding for a number that does not state its unit and name its
`SOURCE`, `SOURCE_DATASET`, replayable `SOURCE_QUERY`, `RETRIEVED_AT`,
`METHOD`, `MEASUREMENT_SERVER` and `LICENSE`. `CNPMetric` has no scalar
`VALUE`: a metric is a DISTRIBUTION of `CNPStatistic` entries, so a source
publishing only a median can never be read as a mean. Absent means
unpublished, never zero. `SOURCES` lists every provider consulted including
those that returned nothing. `cnpMethod.MODELED` exists so a modelled number
can be refused as a measurement, and `CNPProvenance.NON_COMMERCIAL_ONLY` rides
PER SOURCE because one record may carry a CC0 M-Lab lane beside a CC BY-NC
cross-check.

`rfBandDesignation` (in `$RFB`, shared by `$IQC.BAND`) mixes ITU-R V.431
decade bands with IEEE 521 letter bands and they OVERLAP by construction. A
publisher encodes the designation ITS SOURCE STATES, never a re-derivation
from `CENTER_FREQ`, and never both. ORDINALS ARE WIRE VALUES: members are
APPENDED ONLY, which is why VHF/HF/MF/LF/VLF/SHF sit after `OTHER` and out of
frequency order. Reordering the enum silently re-labels every published $RFB.

Division of labour: `$RFO` = a sensor's astrometric RF observation of a
tracked object; `$RFE` = the parametric emitter description; `$RFB` = that
emitter's band specification in MHz; `$IQC` = the archived baseband recording;
`$LKS` = the instantaneous state and data rate of ONE named link; `$CNP` = the
windowed statistical aggregate across a whole user network; `$DPM` = the
manifest under which THIS network publishes a shard of any of them.
