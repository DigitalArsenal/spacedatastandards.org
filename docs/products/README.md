# Products P1-P9

The product codec family writes fixed-format products from one Record. Sources are `lib/ts/PROD`; the package
ships them compiled as `lib/js/PROD`. `lib/js/PROD/main.js` (the package index exports it as `PROD`) re-exports
`frames`, `record` and `tokens`; each product's writer and reader is imported from its own module,
`lib/js/PROD/<module>.js`.

## Conformance

Product structure is the only conformance claim: lines, columns, numeric formats, ordering, units, frames, epoch
conventions and refusal codes, as stated on these pages. Values are those of the SDN estimators that produced the
Record.

## Products

| Product | Content | Form | Module | Writer | Reader |
| --- | --- | --- | --- | --- | --- |
| [P1](P1.md) | tracking ephemeris | text | `ephtrk.js` | `writeP1(record)` | none |
| [P2](P2.md) | state rows | text | `staterow.js` | `writeP2(record \| records)` | `readP2(text)` |
| [P3](P3.md) | covariance text | text | `covtext.js` | `writeP3(record)` | none |
| [P4](P4.md) | sigma text | text | `covtext.js` | `writeP4(record)` | none |
| [P5](P5.md) | covariance message | text | `covmsg-text.js` | `writeP5(record)` | `readP5(text, gm)` |
| [P6](P6.md) | covariance message | binary | `covmsg-binary.js` | `writeP6(record)` | `readP6(bytes)` |
| [P7](P7.md) | element set, two-line form and element-file form | text | `elset.js` | `elsetTwoLine(record)`, `elsetElementFile(record)` | none (writer only) |
| [P8](P8.md) | state-transition-matrix ephemeris | text | `stmephemeris.js` | `stmEphemerisText(record)` | none (writer only) |
| [P9](P9.md) | residual listing | text | `residual.js` | `writeP9(record)` | `readP9(text)` |

Every writer and reader is a pure function. It returns `{ ok: true, value }` or `{ ok: false, refusal: { code,
message } }`. A product is produced only when every value it prints is present; otherwise it is refused and no
partial output is returned. P7 is produced on demand from the Record; nothing of it is stored.

## The Record

`fromOcm(ocm, odr = null, sensitivities?)` (module `record`) validates an `$OCM` and returns the Record;
`toOcm(record)` returns the `$OCM` it was built from, so `$OCM` to Record to `$OCM` is byte-identical.

| Argument | Type | Carries |
| --- | --- | --- |
| `ocm` | `$OCM` (`OCMT`) | header, metadata, states, mean element set, covariance, force model, integrator, fit |
| `odr` | `$ODR` (`ODRT`) or null | the fit's per-input residuals (`EDITED_OBSERVATIONS`) |
| `sensitivities` | `$PRW` state matrices (`PRWStateMatrixT[]`), one per epoch | the state transition matrices P8 prints |

The Record's views are read-only projections of the `$OCM`:

| View | Fields |
| --- | --- |
| `meta` | object name, designators and catalog number, originator, creation date, message id, theory (`ORB_AVERAGING`, else the mean element set's theory), trajectory and covariance frames, center, time system, epoch (`EPOCH_TZERO`), TAI-UTC, UT1-UTC, next leap second epoch and TAI-UTC, nutation tag (`REDUCTION_THEORY`), EOP source, GM, force model, integrator, tool version (`PROVENANCE.PRODUCER`) |
| `elements` | the mean element set, the equinoctial set of the first state (with GM), the parameters `OD_DYNAMIC_PARAMETERS` carries with value and solved-for flag, in the fixed order |
| `fit` | observations, tracks, iterations, converged, RMS km, `WEIGHTED_RMS`, `SEDR`, solved-for names, method, arc start and stop |
| `epochs` | per state: minutes from the epoch, UTC milliseconds, cartesian position and velocity in the trajectory frame, revolution number |
| `covariance` | frame, type, ordering, size, parameter names and kinds, units, per-epoch LTM and sigmas, per-epoch sensitivities |
| `residuals` | per input: identifier, epoch, type, observed, computed, residual (observed minus computed), weight, accepted, perturbation-model code, iteration, pre-fit and normalized residual, reason |

States are the `STATE_DATA` rows of a `CARTESIAN_PV` or `CARTESIAN_PVA` trajectory. The epoch axis is
`STATE_EPOCHS` when stated, else `START_TIME` plus `i * STATE_STEP_SIZE`. Absent data is absent (null), never
zero-filled.

Fields the Record states as absent for every `$OCM`: the UT1 rate, polar motion X and Y, the per-epoch geodetic
coordinates, the per-epoch mean elements, and the revolution number of every state after the first.

## Conventions

### Units

| Quantity | Unit |
| --- | --- |
| position, length | km |
| velocity | km/s |
| angle | deg |
| B (`DRAG_AREA_OVER_MASS`) | m\*\*2/kg |
| BDOT (`DRAG_AREA_OVER_MASS_RATE`) | m\*\*2/kg/s |
| AGOM (`SRP_AREA_OVER_MASS`) | m\*\*2/kg |
| T (`IN_TRACK_ACCELERATION`) | m/s\*\*2 |
| OUTGASSING (`OUTGASSING_ACCELERATION`) | km/s\*\*2 |
| specific energy dissipation rate (`SEDR`) | W/kg |

A sigma is the square root of the covariance diagonal: km, km/s, and each parameter's own unit. No scale factor
is applied.

### Covariance order

State rows 1 to 6 (position, velocity), then the solved parameters in this order: `DRAG_AREA_OVER_MASS`,
`DRAG_AREA_OVER_MASS_RATE`, `SRP_AREA_OVER_MASS`, `IN_TRACK_ACCELERATION`, `OUTGASSING_ACCELERATION`. A parameter
that is not solved has no row. `COV_SIZE` is 6 plus the number of solved parameters; `COV_PARAMETERS` has
`COV_SIZE - 6` entries; `COV_UNITS` has `COV_SIZE` entries. `COV_ORDERING` is `LTM`: the lower triangle row by
row, `N(N+1)/2` values. Parameters are keyed on their typed `PARAMETER` kind, never on their name.

### Frames

| Block | Frame |
| --- | --- |
| state rows in P1, P2, P3, P5 | the Record's trajectory frame (`TRAJ_REF_FRAME`), cartesian |
| covariance in the `$OCM` | cartesian position and velocity (`CARTPV`) |
| covariance state block in P1 line 4, P3, P4, P5 sigmas, P6 | UVW |
| covariance state block in P5 and P8 | equinoctial |

UVW: U is the unit position, W the unit orbit normal (r x v), V = W x U, at each epoch's own position and
velocity. A state block rotates by blockdiag(M, M) with M the rows U, V, W; velocity rows rotate by the same
matrix, unscaled; parameter rows are unchanged.

Equinoctial: the `$OCM` `EQUINOCTIAL` set, in the order a (km), af = e cos(w + fr RAAN), ag = e sin(w + fr RAAN),
L = M + w + fr RAAN (deg), chi = tan(i/2)^fr sin RAAN, psi = tan(i/2)^fr cos RAAN, and the retrograde factor fr
(+1 or -1). The Jacobian d(cartesian)/d(a, af, ag, L, chi, psi) is analytic at the Record's own elements under
the Record's GM; the element covariance is J^-1 P J^-T.

### Time

| Form | Format | Convention |
| --- | --- | --- |
| minutes from the epoch | `F12.6` | minutes from `EPOCH_TZERO` |
| calendar | `S18` | `YY/DDD HHMM SS.SSS`, UTC |

Calendar form: two-digit years 57 to 99 are 1957 to 1999, 00 to 56 are 2000 to 2056; `DDD` counts from 001; day 060
of a leap year is February 29; day 366 exists only in a leap year; seconds run 00.000 to 59.999, and a leap second
(60.xxx) is refused. Instants outside 1957 to 2056 do not print.

### Numeric formats

| Format | Field |
| --- | --- |
| `Fw.d` | fixed point, w characters, d decimals, right-justified, `-` for a negative value |
| `%+w.dE` | sign, one digit, point, d digits, `E`, exponent sign, two or more exponent digits; right-justified in w characters |
| `%+.dE` | the same with no fixed width |
| `Iw` | integer, right-justified in w characters |
| `Aw` | text, left-justified in w characters; a longer text is refused |
| `L1` | `Y` or `N` |
| `S18` | the calendar form |

Column numbers count from 1. Every column and format comes from the token tables in `tokens`
(`{ product, token, startColumn, format, kind }`). Text lines end with a line feed, the last line too.

### Determinism

The same Record gives a byte-identical product on every run and platform: every number prints through explicit
fixed-point and exponent formatting, with no locale.

## Shared refusal codes

Codes the Record (`record`), the token tables (`tokens`) and the frame transforms (`frames`) return. A product
page lists the shared codes its product returns.

| Code | Module | Condition |
| --- | --- | --- |
| `record-missing:METADATA` | record | the `$OCM` has no metadata |
| `record-missing:METADATA.EPOCH_TZERO` | record | no `EPOCH_TZERO` |
| `record-missing:METADATA.START_TIME` | record | states on a grid without `START_TIME` |
| `record-missing:STATE_EPOCHS[<i>]` | record | an empty `STATE_EPOCHS` entry |
| `record-missing:STATE_DATA` | record | neither states nor a mean element set |
| `record-missing:STATE_STEP_SIZE` | record | more than one state on a grid without `STATE_STEP_SIZE` |
| `record-missing:GM` | frames | an equinoctial conversion without GM |
| `epoch-form:<field>` | record | an epoch field (`METADATA.EPOCH_TZERO`, `METADATA.START_TIME`, `STATE_EPOCHS[<i>]`) is not an ISO 8601 instant |
| `parameter-unknown:<name>` | record | a parameter that is not one of the five, or `COV_PARAMETER_KINDS` that do not key `COV_PARAMETERS` |
| `parameter-order` | record | parameters out of the fixed order, or one stated twice |
| `units-mismatch:<row>` | record | a parameter unit or a `COV_UNITS` row that is not the fixed unit |
| `cov-ordering:<ordering>` | record | `COV_ORDERING` other than `LTM` |
| `cov-size` | record, frames | `COV_SIZE` is not 6 plus the parameter rows, or a value count does not fit it |
| `units-length` | record | `COV_UNITS` does not have `COV_SIZE` entries |
| `parameter-not-solved:<name>` | record | a covariance row whose parameter is not solved for |
| `solved-set-mismatch:<name>` | record | a solved parameter without a covariance row |
| `traj-type:<type>` | record | states that are not cartesian position and velocity |
| `state-epochs` | record | `STATE_EPOCHS` count differs from the state count |
| `stm-shape` | record | sensitivities whose count or dimension does not fit the states |
| `field-overlap` | tokens | two fields of a line overlap |
| `calendar-form` | tokens | a calendar text is not `YY/DDD HHMM SS.SSS` |
| `calendar-day-of-year` | tokens | a day of year outside the year |
| `calendar-day-366` | tokens | day 366 of a year that is not a leap year |
| `calendar-time-range` | tokens | hour, minute or second out of range |
| `calendar-leap-second` | tokens | seconds 60.000 or more |
| `frame-degenerate` | frames | a zero position, or position and velocity that define no orbit plane |
| `frame-singular` | frames | a singular matrix |
| `frame-retrograde-factor` | frames | a retrograde factor other than +1 or -1 |
| `frame-unbound` | frames | a state that is not an ellipse |
| `frame-eccentricity` | frames | eccentricity not below one |
