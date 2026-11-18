# `$MOR` covariance factor: `ROE_HYPERSPHERICAL_V1`

Normative text of the `$MOR` fields `COV_FACTOR` and `COV_FACTOR_ENCODING` (`morCovFactorFormat`), added in SDS 1.289.0 (`$MOR` 1.285.1). Sections 9 to 11 are informative where they say so. The reference decoder and writer are `scripts/e2e/lib/mor-cov-factor.mjs`; where this text and that code differ, this text governs.

## 1. What it is

A `$MOR` epoch covariance P (N x N) is

    P = F + P_fit,   P_fit = G G^T

- F is the 6 x 6 floor that `COV_PROPAGATION` (`FLOOR_UU_KM2` .. `FLOOR_WW_KM2`) and `COV_FLOOR` state, placed in the upper-left state block of P (zero on parameter rows and columns);
- G (N x r, 1 <= r <= N) is a factor of the fitted part alone. `COV_FACTOR` carries G.

Everything needed to decode G, P_fit and P is in the record. No propagation theory runs: the coordinate frame is built algebraically from the two-body state of the record's own mean elements at `EPOCH_UNIX_US`. Two conforming decoders, in any language, produce the same G and P_fit (and P under `COV_FLOOR` `MEAN_ELEMENTS_TWO_BODY`) to the last bit, or both refuse.

What the encoding costs and saves is in section 10. In short: a reader needs this decoder; a compressed factor is lossy and may drop directions hidden under the floor over 7 days; on the AP catalog a factor is about 87 bytes (policy `strict`) or 117 (`fixed`) in place of the 288 of the N = 8 lower triangle.

## 2. Fields and outcomes

### 2.1 Schema

Appended at the end of `table MOR`, nothing renamed, reordered, re-typed or removed, no NaN default:

    enum morCovFactorFormat : ubyte { NONE = 0, ROE_HYPERSPHERICAL_V1 = 1 }

- `COV_FACTOR: [ubyte];` field 45 (vtable offset 94): the factor bytes (section 7).
- `COV_FACTOR_ENCODING: morCovFactorFormat = NONE;` field 46 (vtable offset 96).

A record without a factor (`COV_FACTOR` absent, `COV_FACTOR_ENCODING` `NONE`) has the same bytes as under SDS 1.288.0.

### 2.2 What a reader takes as the covariance of a `FULL` record

1. `COVARIANCE_DATA` present and non-empty: that is the covariance. `COV_FACTOR` and `COV_FACTOR_ENCODING` are not read.
2. Otherwise, `COV_FACTOR_ENCODING` above 1 (an encoding or version this reader does not know): the record has no covariance.
3. Otherwise, `COV_FACTOR_ENCODING` `NONE` and `COV_FACTOR` absent or empty: the record has no covariance.
4. Otherwise the reader decodes `COV_FACTOR` by section 8, which either returns G (and P_fit, and P under `MEAN_ELEMENTS_TWO_BODY`) or **refuses**. The decoder refuses, among others, `COV_FACTOR` non-empty under `NONE`, `COV_FACTOR` empty under `ROE_HYPERSPHERICAL_V1`, and every record outside the validity domain (section 3).

A refusal has one outcome: the record has no covariance from the factor, and the decoder returns nothing partial (no G, no P). The record's elements, force model, rows and fallback set are read under their own rules; a reader that reports why it holds no covariance names the refusal.

A writer does not write a factor a reader would refuse: a record outside the domain keeps `COVARIANCE_DATA`.

`COV_REALISM_ID`, `COV_REALISM`, `COV_CALIBRATION` and `COV_CALIBRATION_REFERENCE` apply to a decoded factor as to `COVARIANCE_DATA`. A `ROWS_ONLY` record leaves `COV_FACTOR` absent and `COV_FACTOR_ENCODING` at `NONE` (as every field outside its own list, under the `$MOR` rows-only rule).

## 3. Validity domain

A decoder refuses the factor (section 2.2) unless every one of these holds. Every bound is the exact binary64 value written; a comparison with NaN is false, so NaN and every value outside a range is refused.

| Input | Domain |
|---|---|
| `MEAN_MOTION` (rev/day) | 2^-16 (0.0000152587890625) <= n <= 2^8 (256). Semi-major axes from about 1,048 km to 6.9e7 km. |
| `ECCENTRICITY` | 0 <= e < 1 |
| `INCLINATION` (deg) | exactly 0, or 2^-30 (9.313225746154785e-10) <= i <= 180 |
| `RA_OF_ASC_NODE`, `ARG_OF_PERICENTER`, `MEAN_ANOMALY` (deg) | -360 <= x <= 360 |
| `OD_SOLVED_FOR` | no bit set outside {1, 3, 6} (so N is 6, 7 or 8) |
| `COV_FLOOR` | `WRITER_THEORY_STATE` (1) or `MEAN_ELEMENTS_TWO_BODY` (2) |
| `COV_PROPAGATION` | present; each of the six floor scalars f0..f5 = `FLOOR_UU_KM2`, `FLOOR_VU_KM2`, `FLOOR_VV_KM2`, `FLOOR_WU_KM2`, `FLOOR_WV_KM2`, `FLOOR_WW_KM2` is exactly 0 or has magnitude in [2^-500, 2^36] km^2; and the floor is positive semi-definite by this test, evaluated in this order: `f0 >= 0`, `f2 >= 0`, `f5 >= 0`, `(f1*f1) <= (f0*f2)`, `(f3*f3) <= (f0*f5)`, `(f4*f4) <= (f2*f5)`, `((f0*((f2*f5)-(f4*f4))) - (f1*((f1*f5)-(f4*f3)))) + (f3*((f1*f4)-(f2*f3))) >= 0` |
| `COV_FACTOR` length | 2 to 289 bytes; then exactly the length section 7 implies for its mode and rank |
| mode (first 5 bits) | 0 to 20, or 31 |
| `code` (compressed modes) | 0 to 119 |
| escape rank r | 1 to N |
| escape values | each exactly 0 (either sign) or of magnitude in [2^-500, 2^32] |
| padding | at most 7 bits, all 0 |

The noise scalars of `COV_PROPAGATION` are not read by the decoder.

Inside this domain every loop of the decoder ends within the bound section 5 states, and G, P_fit and P are finite. A decoder still checks that every output entry is finite (section 8, step 11) and refuses otherwise; no record inside the domain reaches that refusal.

## 4. Coordinates, units and dimension

Let `mask` be `OD_SOLVED_FOR` (unsigned 32-bit). Only `DRAG_AREA_OVER_MASS` (bit 1, `BTERM`, m^2/kg) and `SRP_AREA_OVER_MASS` (bit 3, `AGOM`, m^2/kg) are covariance rows; bit 6 (`ECOM2_Y0`) is not.

    m = ((mask >> 1) & 1) + ((mask >> 3) & 1)      N = 6 + m      h = 2 + m

Rows and columns 0 .. N-1 of G, P_fit and P are ordered as `COVARIANCE_DATA`: 0, 1, 2 position (km) and 3, 4, 5 velocity (km/s) in the record's trajectory frame (`TEMEOFEPOCH` for AP with a degree cap above 0, `TEMEOFDATE` otherwise); then `DRAG_AREA_OVER_MASS` if bit 1 is set, then `SRP_AREA_OVER_MASS` if bit 3 is set.

## 5. Arithmetic

1. IEEE-754 binary64 throughout, each `+ - * / sqrt` rounded to nearest, ties to even. `floor` is the mathematical floor.
2. No fused multiply-add: `(a * b) + c` rounds the product first (`#pragma STDC FP_CONTRACT OFF`, `-ffp-contract=off`).
3. No library `sin`, `cos`, `cbrt`, `pow`, `exp2` or `remainder`: the procedures of 5.2.
4. Canonical zero: `cz(x)` is +0.0 when x == 0.0 (either sign), else x. Every stored entry of T^-1, L_C, W, G, P_fit, F and P passes through `cz`.
5. Parentheses in this text fix the order of evaluation; a sum written without them is evaluated left to right.

### 5.1 Constants

Each is the binary64 value nearest the decimal written.

| Symbol | Value |
|---|---|
| `K_KE` | 0.074366859954178854 (Earth k_e, ER^1.5/min) |
| `K_RE` | 6378.1363 (km) |
| `K_MU_ER` | `K_KE * K_KE` |
| `K_MU_KM` | `(((K_MU_ER * K_RE) * K_RE) * K_RE) / 3600.0` (= 398600.4415000001 km^3/s^2) |
| `PI` | 3.141592653589793 |
| `INV_PI` | 0.3183098861837907 |
| `LOG2_SIGMA_LO` | -26.0 |
| `LOG2_SIGMA_SPAN` | 44.0 |

sin(pi z), z in [-0.25, 0.25]: `SIN_C1 = 3.141592653589793`, `SIN_C3 = -5.16771278004997`, `SIN_C5 = 2.5501640398773455`, `SIN_C7 = -0.5992645293207921`, `SIN_C9 = 0.08214588661112823`, `SIN_C11 = -0.0073704309457143504`, `SIN_C13 = 0.00046630280576761255`, `SIN_C15 = -2.1915353447830217e-5`, `SIN_C17 = 7.952054001475513e-7`, `SIN_C19 = -2.2948428997269873e-8`, `SIN_C21 = 5.392664662608129e-10`.

cos(pi z) - 1: `COS_C2 = -4.934802200544679`, `COS_C4 = 4.0587121264167685`, `COS_C6 = -1.3352627688545895`, `COS_C8 = 0.2353306303588932`, `COS_C10 = -0.02580689139001406`, `COS_C12 = 0.0019295743094039231`, `COS_C14 = -0.0001046381049248457`, `COS_C16 = 4.303069587032947e-6`, `COS_C18 = -1.3878952462213771e-7`, `COS_C20 = 3.604730797462501e-9`.

2^f - 1, f in [-0.5, 0.5]: `EXP2_C1 = 0.6931471805599453`, `EXP2_C2 = 0.24022650695910072`, `EXP2_C3 = 0.05550410866482158`, `EXP2_C4 = 0.009618129107628477`, `EXP2_C5 = 0.0013333558146428443`, `EXP2_C6 = 0.0001540353039338161`, `EXP2_C7 = 1.5252733804059841e-5`, `EXP2_C8 = 1.321548679014431e-6`, `EXP2_C9 = 1.01780860092397e-7`, `EXP2_C10 = 7.054911620801123e-9`, `EXP2_C11 = 4.4455382718708116e-10`, `EXP2_C12 = 2.5678435993488206e-11`, `EXP2_C13 = 1.3691488853904128e-12`, `EXP2_C14 = 6.778726354822545e-14`, `EXP2_C15 = 3.1324367070884287e-15`.

### 5.2 Procedures

Every loop below runs a stated number of times at most.

1. `sincosPi(x) -> (s, c)` (no loop):
   - `u = 2.0 * x`; `q = floor(u + 0.5)`; `z = 0.5 * (u - q)`; `z2 = z * z`
   - `pSin = SIN_C1 + (z2 * (SIN_C3 + (z2 * (SIN_C5 + (z2 * (SIN_C7 + (z2 * (SIN_C9 + (z2 * (SIN_C11 + (z2 * (SIN_C13 + (z2 * (SIN_C15 + (z2 * (SIN_C17 + (z2 * (SIN_C19 + (z2 * SIN_C21)))))))))))))))))))`; `s0 = z * pSin`
   - `pCos = COS_C2 + (z2 * (COS_C4 + (z2 * (COS_C6 + (z2 * (COS_C8 + (z2 * (COS_C10 + (z2 * (COS_C12 + (z2 * (COS_C14 + (z2 * (COS_C16 + (z2 * (COS_C18 + (z2 * COS_C20)))))))))))))))))`; `c0 = 1.0 + (z2 * pCos)`
   - `quad = q - (4.0 * floor(0.25 * q))` (0, 1, 2 or 3): 0 returns `(cz(s0), cz(c0))`; 1 `(cz(c0), cz(-s0))`; 2 `(cz(-s0), cz(-c0))`; 3 `(cz(-c0), cz(s0))`.
2. `cbrtPos(x)`: refuse unless x is finite and x > 0. `m = x`, `s = 1.0`. At most 16 times, while `m >= 4.0`: `m = m * 0.125`, `s = s * 2.0`. Then at most 16 times, while `m < 0.5`: `m = m * 8.0`, `s = s * 0.5`. Refuse unless `0.5 <= m < 4.0`. `y = 0.55 + (0.3 * m)`; exactly 6 times `y = ((2.0 * y) + (m / (y * y))) / 3.0`. Return `s * y`. Inside the domain the argument lies in [0.0044, 1.25e12]: at most 13 steps down or 3 up, so the refusal is never reached by a record inside the domain.
3. `exp2Det(x)`, x in [-26, 18] (no loop): `k = floor(x + 0.5)`; `f = x - k`; `poly = 1.0 + (f * (EXP2_C1 + (f * (EXP2_C2 + ... + (f * EXP2_C15)...))))` nested as `pSin`; `scale` the exact binary64 2^k; return `scale * poly`.
4. `pow2Int(b)`, integer 0 <= b <= 52: the exact binary64 2^b.

## 6. Coordinate map

### 6.1 Two-body epoch state (r0, v0)

`nRev = MEAN_MOTION`, `e = ECCENTRICITY`, `incDeg = INCLINATION`, `raanDeg = RA_OF_ASC_NODE`, `argpDeg = ARG_OF_PERICENTER`, `maDeg = MEAN_ANOMALY`, all inside the domain.

1. `nMin = (nRev * (2.0 * PI)) / 1440.0`
2. `a = cbrtPos(K_MU_ER / (nMin * nMin)) * K_RE`
3. `xM = maDeg / 180.0`; `uM = xM - (2.0 * floor((0.5 * xM) + 0.5))`; `mRad = PI * uM`; `(sM, _) = sincosPi(uM)`
4. `E = mRad + (0.85 * e)` if `sM >= 0.0`, else `mRad - (0.85 * e)`
5. Exactly 8 times: `(sE, cE) = sincosPi(E * INV_PI)`; `num = (E - (e * sE)) - mRad`; `den = 1.0 - (e * cE)`; `E = E - (num / den)`
6. `(sE, cE) = sincosPi(E * INV_PI)`; `den = 1.0 - (e * cE)`; `oneMinusE2 = 1.0 - (e * e)`
7. `cnu = (cE - e) / den`; `snu = (sqrt(oneMinusE2) * sE) / den`
8. `p = a * oneMinusE2`; `rr = p / (1.0 + (e * cnu))`; `vs = sqrt(K_MU_KM / p)`
9. `xp = rr * cnu`; `yp = rr * snu`; `vxp = -(vs * snu)`; `vyp = vs * (e + cnu)`
10. `(sO, cO) = sincosPi(raanDeg / 180.0)`; `(si, ci) = sincosPi(incDeg / 180.0)`; `(sw, cw) = sincosPi(argpDeg / 180.0)`
11. `P0 = (cO * cw) - ((sO * sw) * ci)`; `P1 = (sO * cw) + ((cO * sw) * ci)`; `P2 = sw * si`; `Q0 = -(cO * sw) - ((sO * cw) * ci)`; `Q1 = -(sO * sw) + ((cO * cw) * ci)`; `Q2 = cw * si`
12. `r0[c] = cz((xp * Pc) + (yp * Qc))`, `v0[c] = cz((vxp * Pc) + (vyp * Qc))`, c = 0, 1, 2. Refuse if any is not finite.

### 6.2 Inverse coordinate matrix T^-1 (`ti`, N x N, row-major)

1. `rSq = ((r0[0] * r0[0]) + (r0[1] * r0[1])) + (r0[2] * r0[2])`; `rNorm = sqrt(rSq)`
2. `h0 = (r0[1] * v0[2]) - (r0[2] * v0[1])`; `h1 = (r0[2] * v0[0]) - (r0[0] * v0[2])`; `h2 = (r0[0] * v0[1]) - (r0[1] * v0[0])`
3. `hSq = ((h0 * h0) + (h1 * h1)) + (h2 * h2)`; `hNorm = sqrt(hSq)`. Refuse unless `rNorm > 0.0` and `hNorm > 0.0`.
4. `u[c] = r0[c] / rNorm`; `w[c] = hc / hNorm`; `ev = [(w[1] * u[2]) - (w[2] * u[1]), (w[2] * u[0]) - (w[0] * u[2]), (w[0] * u[1]) - (w[1] * u[0])]`
5. `n0 = sqrt(K_MU_KM / ((rNorm * rNorm) * rNorm))`; `negHalfN0 = -0.5 * n0`; `negN0 = -n0`
6. `ti` = +0.0 everywhere, then for c = 0, 1, 2:
   - row c: `ti[c,0] = cz(u[c])`, `ti[c,1] = cz(ev[c])`, `ti[c,2] = cz(-u[c])`, `ti[c,3] = cz(2.0 * ev[c])`, `ti[c,4] = cz(w[c])`, `ti[c,5] = +0.0`
   - row 3+c: `ti[3+c,0] = cz(negHalfN0 * ev[c])`, `ti[3+c,1] = cz(negN0 * u[c])`, `ti[3+c,2] = cz(n0 * ev[c])`, `ti[3+c,3] = cz(negN0 * u[c])`, `ti[3+c,4] = +0.0`, `ti[3+c,5] = cz(n0 * w[c])`
7. `ti[6+k, 6+k] = 1.0` for k = 0 .. m-1.

ROE coordinates 0 and 1 are the secular semi-major-axis and mean-longitude combinations (km), 2 to 5 the eccentricity and inclination combinations (km), 6 .. 5+m the solved parameters. The forward map (writers only) is the exact inverse T: for c = 0, 1, 2, row 0 `(2u, (2/n0) ev)`, row 1 `(-ev, -(2/n0) u)`, row 2 `(u, (2/n0) ev)`, row 3 `(ev, (1/n0) u)`, row 4 `(w, 0)`, row 5 `(0, (1/n0) w)`, and 1 on the parameter diagonal.

## 7. Bytes of `COV_FACTOR`

Bits are read most significant first: bit p is in byte `p >> 3` under mask `0x80 >> (p & 7)`. A w-bit unsigned integer is w consecutive bits, the first the most significant. Reading past the last byte refuses.

The sections of a stream follow each other in the order listed, with nothing between them: in a compressed stream, header, column selectors, all flags, all angles, then for each row its sigma selector (if any) directly followed by its sigma value, then padding.

### 7.1 Mode

Bits 0..4: `mode`. 0..20 compressed with step `s = mode`; 21..30 reserved (refused by this version); 31 the escape.

### 7.2 Compressed modes (0 <= mode <= 20)

1. Header: bits 5..11, `code` (refused if 120 or more). `pi = floor(code / 5)` (0..23); `r = (code mod 5) + h` (h..N). `perm` (length N) = `[0, 1]`, then `[6]` (m = 1) or `[6, 7]` (m = 2), then `TAIL_PERMUTATIONS[pi]`, the pi-th permutation of `[2, 3, 4, 5]` in lexicographic order: 0 `[2,3,4,5]`, 1 `[2,3,5,4]`, 2 `[2,4,3,5]`, 3 `[2,4,5,3]`, 4 `[2,5,3,4]`, 5 `[2,5,4,3]`, 6 `[3,2,4,5]`, 7 `[3,2,5,4]`, 8 `[3,4,2,5]`, 9 `[3,4,5,2]`, 10 `[3,5,2,4]`, 11 `[3,5,4,2]`, 12 `[4,2,3,5]`, 13 `[4,2,5,3]`, 14 `[4,3,2,5]`, 15 `[4,3,5,2]`, 16 `[4,5,2,3]`, 17 `[4,5,3,2]`, 18 `[5,2,3,4]`, 19 `[5,2,4,3]`, 20 `[5,3,2,4]`, 21 `[5,3,4,2]`, 22 `[5,4,2,3]`, 23 `[5,4,3,2]`.
2. Palettes: `B(s) = [4+s, 7+s, 11+s, 14+s]` (angle widths); `S(s) = [6+s, 10+s, 13+s, 16+s]` (log-sigma widths); `b_pa = max(22, 14+s)`; `b_ps = max(24, 16+s)`.
3. Column selectors: for j = 0 .. min(r, N-1) - 1: if j < h, `colBits[j] = B[3]` (no bits); else read 2 bits `bi`, `colBits[j] = B[bi]`.
4. Flags: `used[i] = (i < r)`. For i = 1 .. N-1, except the parameter rows 2 <= i < h (no flags): for j = 0 .. min(i, r) - 1 read 1 bit `flag[i,j]`; 0 means the angle is pi/2 (no payload); 1 means an angle follows, and if i >= r it sets `used[i] = true`.
5. Angles: for i = 1 .. N-1, j = 0 .. min(i, r) - 1: parameter rows (2 <= i < h) read `b_pa` bits; other rows read `colBits[j]` bits when `flag[i,j] = 1`, nothing otherwise.
6. Sigmas: for i = 0 .. N-1 with `used[i]`: width `S[3]` if i < 2; `b_ps` if i < h; otherwise read 2 bits `si` and use `S[si]`. Then read that many bits.
7. Padding: the unread bits, at most 7, all 0. More, or a 1, refuses.

### 7.3 Escape (mode 31)

Bits 5..7: `r - 1`, so r = 1..8; refused if r > N. The length is exactly `1 + 8 * (r * (2N - r + 1) / 2)` bytes. From byte 1, little-endian binary64 values G[i, j] for column j = 0 .. r-1 and row i = j .. N-1; each must be in the domain (section 3); `G[i,j] = cz(value)`, and G[i,j] = +0.0 for i < j. The escape stores G in covariance coordinates directly (no T^-1).

## 8. Decoding, in order

For a `FULL` record whose covariance comes from the factor (section 2.2, case 4):

1. `COV_FACTOR_ENCODING` `NONE` with a non-empty `COV_FACTOR`: refuse.
2. Check the domain of section 3 for the record's fields (length 2..289, `COV_FLOOR`, `COV_PROPAGATION` and its floor, `OD_SOLVED_FOR`, the elements). Compute m, N, h.
3. (r0, v0) by 6.1.
4. Read `mode`. 31: read r and G by 7.3 and go to step 10. 21..30: refuse.
5. Read `code`; compute pi, r, perm; build `ti` by 6.2.
6. Read the column selectors and the flags (7.2.3, 7.2.4).
7. L_C (N x r) = +0.0, `L_C[0,0] = 1.0`. For i = 1 .. N-1: `ps = 1.0`; for j = 0 .. min(i, r) - 1:
   - parameter row (2 <= i < h): read `b_pa` bits `u`; `(sT, cT) = sincosPi(u / (pow2Int(b_pa) - 1.0))`;
   - else `flag[i,j] = 0`: `cT = +0.0`, `sT = 1.0`;
   - else read `colBits[j]` bits `u`; `(sT, cT) = sincosPi(u / (pow2Int(colBits[j]) - 1.0))`;
   - `L_C[i,j] = cz(ps * cT)`; `ps = ps * sT`.

   Then if i < r, `L_C[i,i] = cz(ps)`.
8. For i = 0 .. N-1: `sg[i] = +0.0` if not `used[i]`; else read the width and `uSigma` (7.2.6), `logVal = LOG2_SIGMA_LO + ((uSigma / (pow2Int(width) - 1.0)) * LOG2_SIGMA_SPAN)`, `sg[i] = exp2Det(logVal)`. Check the padding (7.2.7).
9. `W[i,j] = cz(L_C[i,j] * sg[i])` for j <= min(i, r-1), +0.0 above. For a = 0 .. N-1, j = 0 .. r-1: `acc = 0.0`; for i = j .. N-1 `acc = acc + (ti[a, perm[i]] * W[i,j])`; `G[a,j] = cz(acc)`.
10. P_fit: for a = 0 .. N-1, b = 0 .. a: `acc = 0.0`; for j = 0 .. r-1 `acc = acc + (G[a,j] * G[b,j])`; `P_fit[a,b] = P_fit[b,a] = cz(acc)`.
11. Under `MEAN_ELEMENTS_TWO_BODY`, P by section 9.1. Refuse if any entry of G, P_fit or P is not finite (no record inside the domain does).

## 9. The floor

### 9.1 P at epoch (`COV_FLOOR` `MEAN_ELEMENTS_TWO_BODY`, 2)

With f0..f5 as in section 3 and (r, v) = (r0, v0):

1. F (6 x 6) = +0.0. If all six f are 0.0, F stays +0.0.
2. Otherwise: `rr = ((r[0] * r[0]) + (r[1] * r[1])) + (r[2] * r[2])`; `invRn = 1.0 / sqrt(rr)`; `U = [r[0] * invRn, r[1] * invRn, r[2] * invRn]`; h0, h1, h2 as in 6.2; `hh = ((h0 * h0) + (h1 * h1)) + (h2 * h2)`; `invWn = 1.0 / sqrt(hh)`; `Wv = [h0 * invWn, h1 * invWn, h2 * invWn]`; `V = [(Wv[1] * U[2]) - (Wv[2] * U[1]), (Wv[2] * U[0]) - (Wv[0] * U[2]), (Wv[0] * U[1]) - (Wv[1] * U[0])]`.
   B is the 3 x 3 matrix whose ROWS are U, V, Wv (B[k][i] is component i of the k-th axis). `M = [[f0, f1, f3], [f1, f2, f4], [f3, f4, f5]]`; `w2 = hh / (rr * rr)`.
   `BM[i][c] = ((B[0][i] * M[0][c]) + (B[1][i] * M[1][c])) + (B[2][i] * M[2][c])` for i, c = 0..2.
   For i = 0..2, j = 0..i: `s = cz(((BM[i][0] * B[0][j]) + (BM[i][1] * B[1][j])) + (BM[i][2] * B[2][j]))`; `ws = cz(w2 * s)`; `F[i][j] = F[j][i] = s`; `F[3+i][3+j] = F[3+j][3+i] = ws`.
3. P = P_fit, then for i = 0..5, j = 0..i: `P[i,j] = P[j,i] = cz(P[i,j] + F[i,j])`.
4. The lower triangle row by row (`P[i,j]`, 0 <= j <= i < N) is the `CARTPV` `LTM` `COVARIANCE_DATA` of the expanded `$OCM`.

Under `WRITER_THEORY_STATE` (1) F sits at the writer's own theory state: G and P_fit decode as above; P needs that theory's state, and a reader of AP sets does not use such a covariance (`morCovarianceFloor`).

### 9.2 Propagating the factor (informative)

Because P - F = G G^T already, a propagator maps the r columns of G to its parameter space (G_p = T G) and forms the state covariance at time t from a thin QR of `[(J(t) G_p)^T; G_noise(t)^T; G_floor(t)^T]`, positive semi-definite by construction, without forming P - F.

## 10. Limits and what a writer's choice costs

1. **Horizon.** The writer chooses the step, the dropped columns (r < N) and the zero angles against the stated floor and process noise over 7 days from `EPOCH_UNIX_US`. The secular head (ROE coordinates 0 and 1) and the solved parameters are never dropped (r >= h). Up to the 4 tail columns may be dropped when their contribution stays under F for 7 days: G G^T is then rank r, and P = F + G G^T is positive definite when F is positive definite on the state block.
2. **Accuracy is the writer's.** A compressed mode is lossy; only the escape (mode 31) carries the writer's factor exactly. The bytes do not say which policy wrote them or what error it allowed.
3. **When a record must carry `COVARIANCE_DATA`.** A consumer that needs horizons beyond 7 days, directions of P - F below the floor (for example, information fusion of raw normal matrices without a floor), or the exact N(N+1)/2 doubles needs `COVARIANCE_DATA` (or an `$OCM`).
4. **Integrity.** The factor has no check of its own: most single-bit changes decode to another valid covariance. Integrity comes from the record's signature or content address.
5. **Measured costs of the two reference writer policies (informative).** One AP catalog of 16,755 records (N = 8), written by the catalog builder's writer, each record decoded and propagated by the module that reads it and compared with the full covariance:

| | `strict` (smallest step that passes the writer's check) | `fixed` (step 12) |
|---|---|---|
| Factor bytes, mean (min, max) | 86.78 (61, 115) | 117.21 (100, 126) |
| `$MOR` without rows, mean bytes (`COVARIANCE_DATA`: 623.99) | 454.28 | 485.71 |
| Records above 0.1 % relative error in a velocity sigma at day 3 or 7 | 47 (0.28 %); worst 0.25 % at day 3, 6.57 % at day 7 | 0 |
| Worst relative error of any state sigma, days 0 to 7 | 6.57 % | 0.00081 % |
| Epoch sigmas above 0.1 %, epoch correlations above 1e-4, position sigmas at days 0, 1, 3, 7 above 0.1 %, \|Δlog10 Pc\| above 0.01 | 0 | 0 |

`fixed` costs 30.43 bytes a record more than `strict` and leaves no record above 0.1 %; `strict` is smaller and leaves 47 records above it in a velocity sigma at day 3 or 7. A catalog chooses between them; a record that must be exact uses the escape or `COVARIANCE_DATA`.

## 11. Test vectors

`scripts/e2e/lib/mor-cov-factor-vectors.mjs` holds six vectors (N = 6, 7, 8; ranks below N; zero-angle flags; the escape below full rank and chosen automatically). For each: `input` (the elements, `OD_SOLVED_FOR`, `COV_FLOOR`, `COV_PROPAGATION`, and the `COVARIANCE_DATA` a writer encoded, which a decoder does not read: decode the factor with `COVARIANCE_DATA` taken as absent), `factorHex` (the `COV_FACTOR` bytes), `mode`, `N`, `rank`, `byteLength`, and the outputs:

- `decodedGHex`: G, N x r, row-major (G[0,0], G[0,1], ..., G[N-1,r-1]), each value 8 bytes little-endian binary64;
- `decodedLtmHex`: the lower triangle of P = F + G G^T row by row (section 9.1 step 4), 8 bytes little-endian each.

A conforming decoder reproduces both byte for byte. `scripts/e2e/mor-cov-factor.mjs` checks the vectors, the outcomes of section 2.2 and the domain refusals; `scripts/e2e/mor-cov-factor-fuzz.mjs` runs 120,000 seeded cases over the domain's edges and outside it (special and random scalars, random, truncated and over-long factors, every single-bit change of the vectors) and requires each to end in a refusal, no covariance, or a finite, symmetric, positive semi-definite G G^T and P.
