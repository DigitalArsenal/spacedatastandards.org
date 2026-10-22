# Space weather and open density calibration

SPW.PROVENANCE and DCL.PROVENANCE carry the existing PVN table: source,
originator, publishing provider, producing software, license and lineage.
The provenance belongs to each record. Embedded DCL.SPACE_WEATHER rows can
therefore retain different source terms. Unknown terms grant no redistribution.

DCL.CORRECTION.FORM = LogDensityNodes (wire value 3) selects
NODE_LOG_DENSITY_SCALE_DIMENSIONLESS: [double]. Each value is the fleet's
common-mode s = ln(rho_drag / rho_NRLMSISE00), with unit 1 (dimensionless).
DCL.ATMOSPHERE identifies NRLMSIS00E, year 2000. There is one finite value
for each strictly increasing NODE_TIMES_MS UTC Unix-millisecond timestamp.
The drag density is NRLMSISE-00 density multiplied by exp(s(t)). Interpolate
s linearly between nodes and hold the endpoint values outside the node span.

For this form, SETTINGS.TO_MS identifies the last solve epoch. Publishers
include forecast decay nodes through at least that epoch plus 172800000 ms
(48 hours). The producer supplies the decay values; consumers neither infer
unpublished nodes nor apply a second decay. The final node is held afterward.
NODE_ALTITUDES_KM, NODE_VALUES_K, NODE_SIGMAS_K and SEGMENTS must be empty.
The Nodes form (wire value 2) retains its temperature meaning: NODE_VALUES_K
and NODE_SIGMAS_K are kelvin and the dimensionless vector is empty. No
conversion between the forms is implied.

Run `node scripts/e2e/spw-dcl-provenance.mjs` after generation. The single
E2E serializes provenance-bearing SPW, log-density DCL and kelvin DCL records
in generated JavaScript, reads and rebuilds them through generated C++ and
Go, and compares every field back in JavaScript. After Actions publication,
`node scripts/e2e/spw-dcl-provenance.mjs --published VERSION` repeats the flow
with public npm JavaScript/C++ archives and the released Go module. Set
FLATBUFFERS_INCLUDE_DIR to the pinned FlatBuffers C++ runtime include path
when running outside the stack's standard checkout location.
