# Changelog

## next

Worse first:
- Appending `COV_FACTOR` and `COV_FACTOR_ENCODING` (`morCovFactorFormat`, slots 39 and 40) to `$MOR` adds 4 bytes of vtable slots (rounded to 8-byte alignment where padding does not absorb them) on records that populate `COV_FACTOR`; records with `COV_FACTOR_ENCODING` at `NONE` (`0`) and empty `COV_FACTOR` emit unchanged bytes.
- `ROE_HYPERSPHERICAL_V1` (`1`) drops tail directions masked beneath the stated floor `F` (`COV_PROPAGATION` and `COV_FLOOR`) over a 7-day horizon from `EPOCH_UNIX_US`; consumers requiring sub-floor directions or horizons beyond 7 days require `COVARIANCE_DATA`.
- Readers from releases prior to this amendment ignore `COV_FACTOR` and see no covariance on factor-only `$MOR` records while reading elements, rows, and fallback sets unchanged.

Added:
- `$MOR` (`1.285.1`): `enum morCovFactorFormat : ubyte` (`NONE = 0`, `ROE_HYPERSPHERICAL_V1 = 1`), `COV_FACTOR: [ubyte]`, and `COV_FACTOR_ENCODING: morCovFactorFormat = NONE` appended at the end of `table MOR` (no field renamed, reordered, retyped, or given a `NaN` default). `COVARIANCE_DATA` is authoritative when both `COVARIANCE_DATA` and `COV_FACTOR` are present; an unknown `COV_FACTOR_ENCODING` ordinal is ignored without refusing the record; `ROWS_ONLY` forbids both fields.
- Zero-dependency JavaScript reference codec `scripts/e2e/lib/mor-cov-factor.mjs`, synthetic test vectors `scripts/e2e/lib/mor-cov-factor-vectors.mjs` (covering adaptive strict and fixed step-12 policies, rank below eight, zero-angle flags, rank-deficient and automatic lossless escape, and dimensions 6, 7, and 8), converter integration in `scripts/e2e/lib/mor-convert.mjs`, and end-to-end verification `scripts/e2e/mor-cov-factor.mjs`.
