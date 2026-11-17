# Minimum Orbit Record ($MOR)

One mean element set with only what a propagator needs to fly it. `$MOR` stands to `$OCM` as `$MPE` stands to `$OMM`. The expansion to exactly one `$OCM`, and which `$OCM`s reduce to a MOR, are stated at the top of `main.fbs`; `scripts/e2e/lib/mor-convert.mjs` is the reference conversion and `scripts/e2e/mor-record.mjs` its end-to-end check.

## Name

`$MOR`, Minimum Orbit Record: the term of the request, and no standard, table, struct or enum uses the code (`MORPHOLOGY` and `MORTAR` are unrelated tokens). It is a wide record type, `RecordTypeExtended` 296.

## Form

- The epoch is `EPOCH_UNIX_US`, an int64 count of microseconds on the UNIX scale of `$MPE` `EPOCH`. `$OCM` element epochs carry six fraction digits, so nothing is lost; the range is far beyond any orbit. An instant inside a leap second has no value and its `$OCM` is not reducible. The frame epoch `$OCM` repeats as `TRAJ_FRAME_EPOCH` is not stored: the expansion writes it.
- Texts a reader compares become enums with a stated text each (`morGravityField`, `morRadiationModel`, `morSolidTideModel`). Atmosphere, weather source and density correction are the theory's own (JXX 1970 on the theory's flux model for SGP4XP and AP, none for SGP4) and are not stored: records with daily weather rows, NRLMSISE-00 or a density correction stay `$OCM`.
- The orbit determination is two bit masks over `prwDynamicParameter` ordinals (`OD_PARAMETERS`, `OD_SOLVED_FOR`), the span, and `ECOM2_Y0`; the parameter values are `BTERM` and `AGOM` as the writer states them. The covariance rows follow from the solved parameters.
- Three enums mirror ordinals of standards `$MOR` does not include (`ocmMessageStatus`, `pcfSolidTideModel`, `ppeWindowStatus`): including `$OCM`, `$PCF` or `$PPE` would carry the Lobster generator defect on enum vectors into `$MOR` and pull those standards into every `$MOR` binding. The E2E checks the mirrored ordinals.
- Structs where the group is atomic and closed: `MORCovariancePropagation` (13 doubles, all present whenever the covariance is) and `MORWindow` (one window's times, status and counts). A struct cannot gain a field; a new number is a new table field beside it.

## Derived rows (the preseed)

A compact form, not `$PPE`. One window as `$PPE` inside `$OCM` costs about 1,188 bytes per object (1,690 measured on the catalog below, with the builder statement); the same rows here add 480 bytes (median; 504 at the 95th percentile). The coefficients keep their binary64 heads and binary32 tails in two flat vectors (`WINDOW_COEFF_HEADS`, `WINDOW_COEFF_TAILS`) instead of six widened per-axis vectors; times are numbers relative to the element epoch, with no midpoint text; position and velocity keep their own counts, so nothing is padded. The builder's name, version, artifact digest, environment digest and tolerances are stated once per asset in `$DPM` `DPMAsset.DERIVED_BUILD`. No per-record digest: rows inside the record they derive from are bound to it by the record itself; the expansion computes `RECORD_DIGEST` by the builder's published rule.

## Fallback set

`FALLBACK` embeds an `$MPE`, which now carries `BTERM` and `AGOM` (appended in this release) so an SGP4-XP set fits. Embedded rather than paired in the stream: one object, one record, no join, and the set the publisher chose travels with the record it backs up. It costs 144 bytes per record, about the size of the set as text.

## Provenance and license

Once per asset: `DPMAsset.RECORD_PROVENANCE` (a `$PVN`, appended in this release) for the producer, source identifier and license class every record shares, and `DPM.SOURCES` for source batches, licenses and citations. A record of another provenance belongs to another asset. The catalog composer reads `SOURCE_ID` from the `$OCM` products it composes, before any reduction; it does not read `$MOR`.

## Measured on the AP catalog

16,755 real AP records with one window of rows, reduced with the generated bindings; all 16,755 reduce, expand back to their `$OCM` field for field (descriptive fields aside), and read back from the `$MOR` bytes unchanged. Bytes per record include the 4-byte size prefix. gzip level 6, Brotli quality 5, records compressed one by one for the medians and as one stream for the 100,000 projection (stream bytes x 100,000 / 16,755).

| Record | Raw median / p95 | gzip median | Brotli median | Structure | 100,000 raw / gzip / Brotli MB |
|---|---:|---:|---:|---:|---:|
| Elements, forces, determination | 184 / 184 | 178 | 173 | 46 % | 18.4 / 7.0 / 6.5 |
| With covariance (realism entry as published) | 688 / 688 | 667 | 643 | 24 % | 68.8 / 42.3 / 40.8 |
| With covariance (realism MODEL_ID only) | 640 / 640 | 644 | 614 | 20 % | 64.0 / 42.3 / 41.0 |
| Elements and one window of rows | 664 / 688 | 649 | 616 | 21 % | 64.8 / 46.2 / 44.8 |
| With covariance and one window | 1,160 / 1,184 | 1,133 | 1,082 | 19 % | 114.4 / 82.2 / 79.8 |
| Elements and the fallback set | 328 / 328 | 218 | 222 | 48 % | 32.8 / 8.4 / 7.6 |
| Covariance, one window and the fallback set | 1,280 / 1,304 | 1,177 | 1,133 | 21 % | 126.4 / 83.9 / 81.0 |

The same catalog as `$OCM` is 2,884 bytes per record (288 MB at 100,000), and 4,584 with one window (457 MB). 53 records carry no rows (the builder excluded them). The fallback sets use each record's own elements labeled SGP4-XP, for size only. Structure is everything but numeric payload and text: the four-byte prefix, root offset and identifier (12 bytes), the root table's vtable (4 bytes plus 2 per field up to the last one present: 58 for the elements alone, 76 at most), offsets, vector lengths and alignment. FlatBuffers cannot share a vtable between records of a stream.
