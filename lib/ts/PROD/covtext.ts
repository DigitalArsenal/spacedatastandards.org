// P3, covariance text, and P4, sigma text (requirement baseline, sections 3.3 and 3.4): writers, pure functions
// on the Record; every column and numeric format comes from tokens.ts.
//
// The covariance is the Record's per-epoch posterior (the $OCM's CARTPV LTM), projected into UVW by frames.ts
// at that epoch's own position and velocity; P3 prints the 6 x 6 state block of epoch 0 (the first 21 LTM
// values: parameter rows are not part of P3), P4 one sigma row per epoch. A sigma is the square root of the UVW
// diagonal, km then km/s, no scale factor.
//
// Layout this module decides where the baseline and tokens.ts leave one open (recorded for docs/products):
//   The version line (P3 and P4) is the Record's tool version (PROVENANCE.PRODUCER).
//   P3's state row is the P2 row of epoch 0 (label and columns), so P3 line 2 equals P2's first row.
//   P3's triangle row k is the indent, then k values joined by the separator: value j of a row starts at the COV
//     token's column plus j times (field width plus separator).
//   Lines end in '\n', the last one too; trailing blanks are trimmed.
//
// Refusals {code, message}: record-missing:STATE_DATA, record-missing:COVARIANCE_DATA,
// record-missing:PROVENANCE.PRODUCER, field-width:<product>.<token>, field-overlap, and frames.ts's
// frame-degenerate and cov-size.
import { type Record as ProductRecord } from './record.js';
import { covarianceToUvw, type Vec3 } from './frames.js';
import {
  ok, refuse, type Product, type Result, COVARIANCE_FORMAT, P3_ROW_INDENT, P3_TITLE, P3_TRIANGLE_TITLE, P3_VALUE_SEPARATOR,
  formatToken, tokenOf,
} from './tokens.js';
import { epochRows, formatLine, joinLines, stateLine } from './staterow.js';

export const SIGMA_TOKENS: readonly string[] = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
const STATE_BLOCK = 6;
const triangle = (n: number) => (n * (n + 1)) / 2;

/** The 6 x 6 UVW state block (21 LTM values) of each epoch's covariance. */
export function uvwStateBlocks(record: ProductRecord): Result<number[][]> {
  const rows = epochRows(record);
  if (!rows.ok) return rows;
  const cov = record.covariance;
  if (!cov.perEpoch.length) return refuse('record-missing:COVARIANCE_DATA', 'the Record carries no covariance');
  const out: number[][] = [];
  for (const [i, epoch] of record.epochs.entries()) {
    const s = epoch.state;
    const r: Vec3 = [s[0], s[1], s[2]], v: Vec3 = [s[3], s[4], s[5]];
    const uvw = covarianceToUvw(cov.perEpoch[i].ltm, cov.size, r, v);
    if (!uvw.ok) return uvw;
    out.push(uvw.value.slice(0, triangle(STATE_BLOCK)));
  }
  return ok(out);
}

/** The six UVW sigmas of a 6 x 6 LTM block: the square roots of its diagonal. */
export function sigmasOf(block: readonly number[]): number[] {
  return Array.from({ length: STATE_BLOCK }, (_, i) => Math.sqrt(block[triangle(i + 1) - 1]));
}

/** The sigma row (P1 line 4, P3's sigma row, a P4 row) of a 6 x 6 UVW block. */
export function sigmaLine(product: Product, block: readonly number[]): Result<string> {
  const values: { [token: string]: number } = {};
  sigmasOf(block).forEach((s, i) => { values[SIGMA_TOKENS[i]] = s; });
  return formatLine(product, SIGMA_TOKENS, values);
}

export function versionLine(product: Product, record: ProductRecord): Result<string> {
  const version = record.meta.toolVersion;
  if (version === null) return refuse('record-missing:PROVENANCE.PRODUCER', 'the Record states no tool version');
  return formatLine(product, ['VERSION'], { VERSION: version });
}

/** P3 triangle row k (1..6) of a 6 x 6 LTM block. */
function triangleRow(block: readonly number[], k: number): Result<string> {
  const token = tokenOf('P3', 'COV');
  const values: string[] = [];
  for (let j = 0; j < k; j++) {
    const text = formatToken(token, block[triangle(k - 1) + j]);
    if (text === null) return refuse('field-width:P3.COV', `a covariance value does not fit ${COVARIANCE_FORMAT}`);
    values.push(text);
  }
  return ok(P3_ROW_INDENT + values.join(P3_VALUE_SEPARATOR));
}

/** P3: version, the state row of epoch 0, the two title lines, six triangle rows and the sigma row (UVW). */
export function writeP3(record: ProductRecord): Result<string> {
  const version = versionLine('P3', record);
  if (!version.ok) return version;
  const blocks = uvwStateBlocks(record);
  if (!blocks.ok) return blocks;
  const first = record.epochs[0];
  const state = stateLine('P3', { minutes: first.minutes, state: first.state }, true);
  if (!state.ok) return state;
  const block = blocks.value[0];
  const lines = [version.value, state.value, P3_TITLE, P3_TRIANGLE_TITLE];
  for (let k = 1; k <= STATE_BLOCK; k++) {
    const row = triangleRow(block, k);
    if (!row.ok) return row;
    lines.push(row.value);
  }
  const sigma = sigmaLine('P3', block);
  if (!sigma.ok) return sigma;
  lines.push(sigma.value);
  return ok(joinLines(lines));
}

/** P4: version, then one UVW sigma row per epoch. */
export function writeP4(record: ProductRecord): Result<string> {
  const version = versionLine('P4', record);
  if (!version.ok) return version;
  const blocks = uvwStateBlocks(record);
  if (!blocks.ok) return blocks;
  const lines = [version.value];
  for (const block of blocks.value) {
    const sigma = sigmaLine('P4', block);
    if (!sigma.ok) return sigma;
    lines.push(sigma.value);
  }
  return ok(joinLines(lines));
}
