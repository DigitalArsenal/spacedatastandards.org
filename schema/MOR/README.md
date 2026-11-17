# Minimum Orbit Record ($MOR)

One mean element set with only what a propagator needs to fly it. `$MOR` stands to `$OCM` as `$MPE` stands to `$OMM`. The expansion to exactly one `$OCM`, and which `$OCM`s reduce to a MOR, are stated at the top of `main.fbs`; `scripts/e2e/lib/mor-convert.mjs` is the reference conversion and `scripts/e2e/mor-record.mjs` its end-to-end check.

## Name

`$MOR`, Minimum Orbit Record: the term of the request, and no standard, table, struct or enum uses the code (`MORPHOLOGY` and `MORTAR` are unrelated tokens). It is a wide record type, `RecordTypeExtended` 296.

## Form

- The epoch is `EPOCH_UNIX_US`, an int64 count of microseconds on the UNIX scale of `$MPE` `EPOCH`. `$OCM` element epochs carry six fraction digits, so nothing is lost; the range is far beyond any orbit. An instant inside a leap second has no value and its `$OCM` is not reducible. The frame epoch `$OCM` repeats as `TRAJ_FRAME_EPOCH` is not stored: the expansion writes it.
- Texts a reader compares become enums with a stated text each (`morGravityField`, `morRadiationModel`, `morSolidTideModel`). Atmosphere, weather source and density correction are the theory's own (JXX 1970 on the theory's flux model for SGP4XP and AP, none for SGP4) and are not stored: records with daily weather rows, NRLMSISE-00 or a density correction stay `$OCM`.
- The orbit determination is two bit masks over `prwDynamicParameter` ordinals (`OD_PARAMETERS`, `OD_SOLVED_FOR`), the span, and `ECOM2_Y0`; the parameter values are `BTERM` and `AGOM` as the writer states them. The covariance rows follow from the solved parameters.
- Three enums mirror ordinals of standards `$MOR` does not include (`ocmMessageStatus`, `pcfSolidTideModel`, `ppeWindowStatus`): including `$OCM`, `$PCF` or `$PPE` would carry the Lobster generator defect on enum vectors into `$MOR` and pull those standards into every `$MOR` binding. The E2E checks the mirrored ordinals.
- The covariance carries its own floor semantics, `COV_FLOOR` (`morCovarianceFloor`): the fact `$OCM` states only through the text of `PROVENANCE.PRODUCER` (the sdn-ap producer text at 0.6.39 or later means the floor sits at the two-body state of the mean elements; any other text means the writer's theory state, whose AP covariance a reader does not use). A record read without its manifest flies the same states and the same covariance.
- The five orbit-determination values a conjunction assessment copies into a CDM are optional scalars: `OD_OBSERVATIONS_USED`, `OD_TRACKS_USED` (-1 not stated), `WEIGHTED_RMS`, `DAYS_SINCE_LAST_OBS` (NaN not stated) and `OD_EPOCH_UNIX_US` (the least int64 not stated). They cost 32 bytes on this catalog (three are stated).
- Structs where the group is atomic and closed: `MORCovariancePropagation` (13 doubles, all present whenever the covariance is) and `MORWindow` (one window's times, status and counts). A struct cannot gain a field; a new number is a new table field beside it.

## Derived rows (the preseed)

A compact form, not `$PPE`. One window as `$PPE` inside `$OCM` costs about 1,188 bytes per object (1,690 measured on the catalog below, with the builder statement); the same rows here add 480 bytes (median; 504 at the 95th percentile). The coefficients keep their binary64 heads and binary32 tails in two flat vectors (`WINDOW_COEFF_HEADS`, `WINDOW_COEFF_TAILS`) instead of six widened per-axis vectors; times are numbers relative to the element epoch, with no midpoint text; position and velocity keep their own counts, so nothing is padded. The builder's name, version, artifact digest, environment digest and tolerances are stated once per asset in `$DPM` `DPMAsset.DERIVED_BUILD`; without it a reader must not use the rows. Each record keeps `WINDOW_RECORD_CHECK`, the first 8 bytes of the builder's record digest over the record's decoded inputs: a step that rewrites the elements and keeps the rows leaves a mismatch, and a mismatch voids the rows.

## Rows only

A preseed holds for one start time and the next window, so it is rebuilt on a schedule. `ROWS_ONLY` records carry only new rows for a set the receiver already holds: its identity (`NORAD_CAT_ID`, `INTERNATIONAL_DESIGNATOR`, `ORIGINATOR`), `MEAN_ELEMENT_THEORY`, `EPOCH_UNIX_US`, the windows, their coefficients and `WINDOW_RECORD_CHECK`; every other field stays at its default, and the record has no `$OCM` expansion. The receiver matches identity, theory and epoch to exactly one held set, recomputes that set's record check, and requires the asset's `DERIVED_BUILD` to match its own; then the update replaces all of the set's windows at once, but only when its last window ends later than the held rows' last window. A repeated or older update changes nothing; any mismatch changes nothing and the set takes its normal build path. Elements and covariance never change. Replacing, not merging, keeps one rule: the newest complete bundle wins, and no mixture of two builds is ever served.

## Reading rules

- `COV_FLOOR` governs the covariance's numbers. If the asset's `RECORD_PROVENANCE.PRODUCER` would state another floor, the record wins; the reference expansion refuses to write such a record as an `$OCM` rather than restate the floor, and publishers keep such records out of that asset.
- Realism model IDs in an asset are 1 or more and unique. A record carries `COV_REALISM_ID` or an inline `COV_REALISM`, never both. An ID the asset does not list leaves the figures unresolved, reported as such.
- `WINDOWS` are in time order, do not overlap, and every half-span is above 0. The reference reducer sorts each window together with its own coefficient runs.
- An embedded `FALLBACK` has no `ENTITY_ID` and no `TARGETER`. Expanded on its own, its `ENTITY_ID` is the parent's decimal `NORAD_CAT_ID` (its `INTERNATIONAL_DESIGNATOR` when the number is 0), and it joins its object by that identifier with no originator, never by name.
- Of the covariance parameter kinds, only `DRAG_AREA_OVER_MASS` and `SRP_AREA_OVER_MASS` can occur: the orbit-determination mask carries no other. Rate, in-track and outgassing rows are outside the reducible profile.
- `DERIVED_BUILD` holds for its asset only: a reader sets it aside between assets and judges compatibility by every field, never by a version string alone.
- `MORCovariancePropagation` is closed: a later quantity comes as a new appended field of `MOR`.

## Fallback set

`FALLBACK` embeds an `$MPE`, which now carries `BTERM` and `AGOM` (appended in this release) so an SGP4-XP set fits. Embedded rather than paired in the stream: one object, one record, no join, and the set the publisher chose travels with the record it backs up. It costs 144 bytes per record, about the size of the set as text.

## Realism models

The realism entry of a covariance is a population figure: 2 distinct entries in 16,755 records. `DPMAsset.COV_REALISM_MODELS` states each once with an `ID`; the record keeps `COV_REALISM_ID` (2 bytes). A realism entry that differs from record to record stays in the record's own `COV_REALISM`.

## Provenance and license

Once per asset: `DPMAsset.RECORD_PROVENANCE` (a `$PVN`, appended in this release) for the producer, source identifier and license class every record shares, and `DPM.SOURCES` for source batches, licenses and citations. A record of another provenance belongs to another asset. The catalog composer reads `SOURCE_ID` from the `$OCM` products it composes, before any reduction; it does not read `$MOR`.

## Measured on the AP catalog

16,755 real AP records with one window of rows, reduced with the generated bindings; all 16,755 reduce, expand back to their `$OCM` field for field (descriptive fields aside), and read back from the `$MOR` bytes unchanged. Bytes per record include the 4-byte size prefix. gzip level 6, Brotli quality 5, records compressed one by one for the medians and as one stream for the 100,000 projection (stream bytes x 100,000 / 16,755). Every row but the first carries the orbit-determination values the catalog states (three of the five).

| Record | Raw median / p95 | gzip median | Brotli median | Structure | 100,000 raw / gzip / Brotli MB |
|---|---:|---:|---:|---:|---:|
| Minimum, without the five orbit-determination values | 184 / 184 | 178 | 173 | 46 % | 18.4 / 7.0 / 6.5 |
| Minimum | 216 / 216 | 199 | 192 | 45 % | 21.6 / 8.1 / 7.4 |
| With covariance (realism model by ID) | 632 / 632 | 635 | 605 | 19 % | 63.2 / 43.2 / 41.7 |
| With covariance (realism entry in the record) | 728 / 728 | 691 | 663 | 26 % | 72.8 / 43.3 / 41.7 |
| With covariance and one window | 1,112 / 1,136 | 1,107 | 1,063 | 15 % | 109.6 / 84.0 / 81.5 |
| With the fallback set | 360 / 360 | 249 | 239 | 47 % | 36.0 / 9.5 / 8.6 |
| Display: no covariance, one window, the fallback set | 832 / 856 | 728 | 694 | 25 % | 81.6 / 50.0 / 47.7 |
| Covariance, one window and the fallback set | 1,240 / 1,264 | 1,156 | 1,117 | 18 % | 122.4 / 85.6 / 82.7 |

The same catalog as `$OCM` is 2,884 bytes per record (288 MB at 100,000), and 4,584 with one window (457 MB). 53 records carry no rows (the builder excluded them). The fallback sets use each record's own elements labeled SGP4-XP, for size only. Structure is everything but numeric payload and text: the four-byte prefix, root offset and identifier (12 bytes), the root table's vtable (4 bytes plus 2 per field up to the last one present), offsets, vector lengths and alignment. FlatBuffers cannot share a vtable between records of a stream.
