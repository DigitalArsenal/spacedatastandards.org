// P1, tracking ephemeris (requirement baseline, sections 3.1 and 3.1.1): writer, a pure function on the Record;
// every column and numeric format comes from tokens.ts (P1_HEADER_LINES, P1_EPOCH_BLOCK). No propagation and no
// orbit determination: every printed value is one the Record carries.
//
// Structure: title, version, the control-options block, the prediction block, the object line, two header rows,
// one four-line block per epoch (state; calendar epoch, geodetic coordinates and revolution; mean elements; UVW
// sigmas), the trailer.
//
// Where each value comes from (the layout decisions this module makes, recorded for docs/products):
//   TITLE                    HEADER.MESSAGE_ID
//   VERSION                  PROVENANCE.PRODUCER (the same line P3 and P4 print)
//   GRAVITY_PATH             PERTURBATIONS.GRAVITY_MODEL
//   BUFFER_SIZE              the number of epochs in the file
//   RUN_MODE                 the Record's theory (ORB_AVERAGING, else the mean element set's theory)
//   COMPATIBILITY_FLAGS      METADATA.TIME_SYSTEM
//   OUTPUT_COORDINATE_SYSTEM TRAJ_REF_FRAME
//   PARTIALS_FLAG            Y when the Record carries per-epoch sensitivities, else N
//   START, STOP              the first and the last epoch, calendar form
//   INTERVAL                 the grid step in minutes; 0 for one epoch; a grid that is not uniform is refused
//   OBJECT                   METADATA.OBJECT_DESIGNATOR, one blank, METADATA.OBJECT_NAME
//   header rows              row 1 names the state tokens, row 2 the line-2 and line-3 tokens, the names of two
//                            tokens sharing a start column joined by '/'; text names left-justified at the start
//                            column, numeric names right-justified to the widest token's end column
//   line 2, line 3           epoch i's geodetic coordinates (TrackingGeodetic) and mean elements
//                            (TrackingMeanElements), the revolution number epoch i's rev
//   line 4                   the UVW sigmas of epoch i (covtext.ts), byte-equal to P4 row i
//   lines end in '\n', the last one too; trailing blanks are trimmed.
//
// Record gap: record.ts has no typed home for the per-epoch geodetic coordinates and mean elements (RecordEpoch
// types both as null) nor for the revolution number past the first state; this writer reads them when a Record
// carries them and otherwise refuses by the record.ts code, never printing a blank: record-missing:epochs[i].geodetic,
// record-missing:epochs[i].rev, record-missing:epochs[i].meanElements. A Record from fromOcm is therefore refused
// until a schema record gives those values a home.
//
// Refusals {code, message}: record-missing:HEADER.MESSAGE_ID, record-missing:PROVENANCE.PRODUCER,
// record-missing:PERTURBATIONS.GRAVITY_MODEL, record-missing:ORB_AVERAGING, record-missing:METADATA.TIME_SYSTEM,
// record-missing:TRAJ_REF_FRAME, record-missing:METADATA.OBJECT_DESIGNATOR, record-missing:METADATA.OBJECT_NAME,
// record-missing:STATE_DATA, record-missing:COVARIANCE_DATA, the three per-epoch codes above, epoch-grid,
// field-width:P1.<token>, field-overlap, and frames.ts's frame-degenerate and cov-size.
import { type Record as ProductRecord, type RecordEpoch } from './record.js';
import {
  ok, refuse, type Result, MINUTES_FORMAT, P1_EPOCH_BLOCK, P1_HEADER_LINES, P1_TRAILER, tokenOf,
} from './tokens.js';
import { type FieldValue, formatLine, headerLine, joinLines, stateLine } from './staterow.js';
import { sigmaLine, uvwStateBlocks } from './covtext.js';

/** Geodetic coordinates of one epoch: deg, deg, km. */
export interface TrackingGeodetic { readonly latitude: number; readonly longitude: number; readonly height: number }
/** Mean elements of one epoch: rev/day, unitless, deg. */
export interface TrackingMeanElements {
  readonly meanMotion: number; readonly eccentricity: number; readonly inclination: number;
  readonly raan: number; readonly argOfPericenter: number; readonly meanAnomaly: number;
}
export type TrackingEpoch = Omit<RecordEpoch, 'geodetic' | 'meanElements'> & {
  readonly geodetic: TrackingGeodetic | null; readonly meanElements: TrackingMeanElements | null;
};
/** A Record as P1 reads it: every Record is one; the per-epoch views are read where present. */
export type TrackingRecord = Omit<ProductRecord, 'epochs'> & { readonly epochs: readonly TrackingEpoch[] };

const MINUTES_RESOLUTION = 5e-7; // half the last printed digit of MINUTES_FORMAT
const required = <T>(value: T | null, field: string, what: string): Result<T> =>
  value === null ? refuse(`record-missing:${field}`, `the Record states no ${what}`) : ok(value);

function interval(epochs: readonly TrackingEpoch[]): Result<number> {
  if (epochs.length < 2) return ok(0);
  const step = epochs[1].minutes - epochs[0].minutes;
  for (let i = 2; i < epochs.length; i++) {
    if (Math.abs(epochs[i].minutes - epochs[i - 1].minutes - step) > MINUTES_RESOLUTION) {
      return refuse('epoch-grid', `epoch ${i} breaks the ${step.toFixed(6)} minute grid (${MINUTES_FORMAT})`);
    }
  }
  return ok(step);
}

function headerValues(record: TrackingRecord): Result<{ [token: string]: FieldValue }> {
  const m = record.meta;
  const fields: [string, string | null, string, string][] = [
    ['TITLE', m.messageId, 'HEADER.MESSAGE_ID', 'message id'],
    ['VERSION', m.toolVersion, 'PROVENANCE.PRODUCER', 'tool version'],
    ['GRAVITY_PATH', m.forceModel ? m.forceModel.gravityModel : null, 'PERTURBATIONS.GRAVITY_MODEL', 'gravity model'],
    ['RUN_MODE', m.theory, 'ORB_AVERAGING', 'theory'],
    ['COMPATIBILITY_FLAGS', m.timeSystem, 'METADATA.TIME_SYSTEM', 'time system'],
    ['OUTPUT_COORDINATE_SYSTEM', m.frame, 'TRAJ_REF_FRAME', 'trajectory frame'],
    ['OBJECT_DESIGNATOR', m.objectDesignator, 'METADATA.OBJECT_DESIGNATOR', 'object designator'],
    ['OBJECT_NAME', m.objectName, 'METADATA.OBJECT_NAME', 'object name'],
  ];
  const values: { [token: string]: FieldValue } = {};
  for (const [token, value, field, what] of fields) {
    const v = required(value, field, what);
    if (!v.ok) return v;
    values[token] = v.value;
  }
  if (!record.epochs.length) return refuse('record-missing:STATE_DATA', 'the Record has no states');
  const step = interval(record.epochs);
  if (!step.ok) return step;
  for (const line of P1_HEADER_LINES) for (const token of line) if (token.endsWith('_KEY')) values[token] = token.slice(0, -'_KEY'.length);
  Object.assign(values, {
    BUFFER_SIZE: record.epochs.length,
    PARTIALS_FLAG: record.covariance.sensitivities !== null,
    START: record.epochs[0].epochMs,
    STOP: record.epochs[record.epochs.length - 1].epochMs,
    INTERVAL: step.value,
    OBJECT: `${values.OBJECT_DESIGNATOR} ${values.OBJECT_NAME}`,
  });
  return ok(values);
}

function epochValues(epoch: TrackingEpoch, i: number): Result<{ [token: string]: FieldValue }> {
  const g = required(epoch.geodetic, `epochs[${i}].geodetic`, `geodetic coordinates at epoch ${i}`);
  if (!g.ok) return g;
  const rev = required(epoch.rev, `epochs[${i}].rev`, `revolution number at epoch ${i}`);
  if (!rev.ok) return rev;
  const me = required(epoch.meanElements, `epochs[${i}].meanElements`, `mean elements at epoch ${i}`);
  if (!me.ok) return me;
  return ok({
    DATE: epoch.epochMs, LAT: g.value.latitude, LON: g.value.longitude, HEIGHT: g.value.height, REV: rev.value,
    N: me.value.meanMotion, E: me.value.eccentricity, I: me.value.inclination, NODE: me.value.raan, OMEGA: me.value.argOfPericenter, M: me.value.meanAnomaly,
  });
}

/** The two P1 header rows: state labels, then the geodetic and mean-element labels. */
export function trackingHeaderRows(): Result<string[]> {
  const state = headerLine(P1_EPOCH_BLOCK[0].map((name) => [tokenOf('P1', name)]));
  if (!state.ok) return state;
  const byColumn = new Map<number, ReturnType<typeof tokenOf>[]>();
  for (const name of [...P1_EPOCH_BLOCK[1], ...P1_EPOCH_BLOCK[2]]) {
    const token = tokenOf('P1', name);
    byColumn.set(token.startColumn, [...(byColumn.get(token.startColumn) ?? []), token]);
  }
  const labels = headerLine([...byColumn.keys()].sort((a, b) => a - b).map((c) => byColumn.get(c) as ReturnType<typeof tokenOf>[]));
  if (!labels.ok) return labels;
  return ok([state.value, labels.value]);
}

/** P1 of a Record; refused, with no partial output, when any value it prints is absent. */
export function writeP1(record: TrackingRecord): Result<string> {
  const header = headerValues(record);
  if (!header.ok) return header;
  const lines: string[] = [];
  for (const names of P1_HEADER_LINES) {
    const line = formatLine('P1', names, header.value);
    if (!line.ok) return line;
    lines.push(line.value);
  }
  const rows = trackingHeaderRows();
  if (!rows.ok) return rows;
  lines.push(...rows.value);
  const blocks = uvwStateBlocks(record as ProductRecord);
  if (!blocks.ok) return blocks;
  for (const [i, epoch] of record.epochs.entries()) {
    const state = stateLine('P1', { minutes: epoch.minutes, state: epoch.state }, false);
    if (!state.ok) return state;
    const values = epochValues(epoch, i);
    if (!values.ok) return values;
    const line2 = formatLine('P1', P1_EPOCH_BLOCK[1], values.value);
    if (!line2.ok) return line2;
    const line3 = formatLine('P1', P1_EPOCH_BLOCK[2], values.value);
    if (!line3.ok) return line3;
    const sigma = sigmaLine('P1', blocks.value[i]);
    if (!sigma.ok) return sigma;
    lines.push(state.value, line2.value, line3.value, sigma.value);
  }
  const trailer = formatLine('P1', ['TRAILER'], { TRAILER: P1_TRAILER });
  if (!trailer.ok) return trailer;
  lines.push(trailer.value);
  return ok(joinLines(lines));
}
