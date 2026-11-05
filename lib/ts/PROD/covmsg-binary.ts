// P6, the covariance message in binary (requirement baseline 3.6). Program decision D1: the layout below is
// frozen in this module, with its reader, before a writer exists.
//
// Byte order: little-endian for every field.
// Framing: the message is a sequence of records and nothing else. A record is a 4-byte unsigned byte count N,
// N payload bytes, and the same 4-byte count again. No byte precedes the first record or follows the last.
// Record 1, the header, P6_HEADER_BYTES = 20 payload bytes (28 framed):
//   offset  0  float64  EPOCH: UTC milliseconds since 1970-01-01T00:00:00Z, leap seconds not counted (the
//                       Record's epoch axis); the epoch of the Record's first state
//   offset  8  int32    COV_SIZE: 6 plus the number of solved parameters, 6..11
//   offset 12  float64  WTD_RMS: the fit's weighted RMS ($OCM WEIGHTED_RMS)
// Record 2, the state block: the 21 lower-triangle values of rows 1-6, row by row (row k holds k values), as
//   float64, 168 payload bytes.
// Records 3 onward: one record per parameter row k = 7..COV_SIZE, holding that row's k lower-triangle values as
//   float64 (8k payload bytes). Row 7 is the first solved parameter in the fixed order of record.ts PARAMETERS
//   (DRAG_AREA_OVER_MASS, DRAG_AREA_OVER_MASS_RATE, SRP_AREA_OVER_MASS, IN_TRACK_ACCELERATION,
//   OUTGASSING_ACCELERATION), row 8 the second, and so on as far as solved: the rows are positional and the
//   message does not name them (its header is the baseline's epoch, COV_SIZE and WTD RMS only).
// Values: the covariance of the Record's first epoch with the state block in UVW at that epoch's own position
// and velocity (frames.ts covarianceToUvw), parameter rows carried unchanged; units km, km/s and the parameter
// units of record.ts. A message of COV_SIZE n is 28 + 176 + sum over k = 7..n of (8 + 8k) bytes long.
//
// Reader refusals, as {code, message}: p6-framing (a count that is short, missing or unequal to its trailing
// copy), p6-header-width, p6-cov-size, p6-row-width:<row>, p6-trailing, p6-not-finite:<field>.
import { ok, refuse, type Result } from './tokens.js';

export const P6_LITTLE_ENDIAN = true;
export const P6_MARKER_BYTES = 4;
export const P6_HEADER_BYTES = 20;
export const P6_VALUE_BYTES = 8;
export const P6_HEADER_FIELDS: readonly { readonly name: 'EPOCH' | 'COV_SIZE' | 'WTD_RMS'; readonly offset: number; readonly type: 'float64' | 'int32' }[] = [
  { name: 'EPOCH', offset: 0, type: 'float64' },
  { name: 'COV_SIZE', offset: 8, type: 'int32' },
  { name: 'WTD_RMS', offset: 12, type: 'float64' },
];
export const P6_STATE_BLOCK_VALUES = 21;
export const P6_MIN_COV_SIZE = 6;
export const P6_MAX_COV_SIZE = 11;
export const P6_REFUSAL_CODES: readonly string[] = ['p6-framing', 'p6-header-width', 'p6-cov-size', 'p6-row-width:<row>', 'p6-trailing', 'p6-not-finite:<field>'];

/** The value count of each record after the header for a covariance of dimension covSize: 21, then 7, 8, ... covSize. */
export function p6RowWidths(covSize: number): number[] {
  const widths = [P6_STATE_BLOCK_VALUES];
  for (let k = 7; k <= covSize; k++) widths.push(k);
  return widths;
}
/** The byte length of a P6 message of dimension covSize. */
export function p6Length(covSize: number): number {
  return [P6_HEADER_BYTES, ...p6RowWidths(covSize).map((w) => w * P6_VALUE_BYTES)].reduce((sum, n) => sum + n + 2 * P6_MARKER_BYTES, 0);
}

export interface P6Message {
  readonly epochMs: number;
  readonly covSize: number;
  readonly weightedRms: number;
  /** The lower triangle of dimension covSize, row by row: the state block in UVW, then the parameter rows. */
  readonly ltm: readonly number[];
}

/** Reads one framed record at `at`; returns its payload view and the offset after it. */
function framed(bytes: Uint8Array, at: number): Result<{ payload: DataView; next: number }> {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (at + P6_MARKER_BYTES > bytes.byteLength) return refuse('p6-framing', `no record count at byte ${at}`);
  const n = view.getUint32(at, P6_LITTLE_ENDIAN);
  const end = at + P6_MARKER_BYTES + n;
  if (end + P6_MARKER_BYTES > bytes.byteLength) return refuse('p6-framing', `a record of ${n} bytes at byte ${at} runs past the end of the message`);
  const trailing = view.getUint32(end, P6_LITTLE_ENDIAN);
  if (trailing !== n) return refuse('p6-framing', `the record at byte ${at} opens with ${n} and closes with ${trailing}`);
  return ok({ payload: new DataView(bytes.buffer, bytes.byteOffset + at + P6_MARKER_BYTES, n), next: end + P6_MARKER_BYTES });
}

/** Reads a P6 message; refuses any deviation from the frozen layout. */
export function readP6(bytes: Uint8Array): Result<P6Message> {
  const header = framed(bytes, 0);
  if (!header.ok) return header;
  if (header.value.payload.byteLength !== P6_HEADER_BYTES) return refuse('p6-header-width', `the header record has ${header.value.payload.byteLength} bytes, not ${P6_HEADER_BYTES}`);
  const h = header.value.payload;
  const epochMs = h.getFloat64(P6_HEADER_FIELDS[0].offset, P6_LITTLE_ENDIAN);
  const covSize = h.getInt32(P6_HEADER_FIELDS[1].offset, P6_LITTLE_ENDIAN);
  const weightedRms = h.getFloat64(P6_HEADER_FIELDS[2].offset, P6_LITTLE_ENDIAN);
  if (!Number.isFinite(epochMs)) return refuse('p6-not-finite:EPOCH', 'the header epoch is not finite');
  if (!Number.isFinite(weightedRms)) return refuse('p6-not-finite:WTD_RMS', 'the header WTD RMS is not finite');
  if (covSize < P6_MIN_COV_SIZE || covSize > P6_MAX_COV_SIZE) return refuse('p6-cov-size', `COV_SIZE ${covSize} is outside ${P6_MIN_COV_SIZE}..${P6_MAX_COV_SIZE}`);
  const ltm: number[] = [];
  let at = header.value.next;
  for (const [i, width] of p6RowWidths(covSize).entries()) {
    const row = i === 0 ? 'STATE' : String(width);
    if (at >= bytes.byteLength) return refuse(`p6-row-width:${row}`, `COV_SIZE ${covSize} needs a record for row ${row}; the message ends at byte ${at}`);
    const rec = framed(bytes, at);
    if (!rec.ok) return rec;
    const p = rec.value.payload;
    if (p.byteLength !== width * P6_VALUE_BYTES) return refuse(`p6-row-width:${row}`, `row ${row} has ${p.byteLength} bytes, not ${width * P6_VALUE_BYTES}`);
    for (let j = 0; j < width; j++) {
      const v = p.getFloat64(j * P6_VALUE_BYTES, P6_LITTLE_ENDIAN);
      if (!Number.isFinite(v)) return refuse(`p6-not-finite:${row}`, `row ${row} value ${j + 1} is not finite`);
      ltm.push(v);
    }
    at = rec.value.next;
  }
  if (at !== bytes.byteLength) return refuse('p6-trailing', `${bytes.byteLength - at} bytes follow the last row`);
  return ok({ epochMs, covSize, weightedRms, ltm });
}
