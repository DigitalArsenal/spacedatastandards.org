// P8, the state-transition-matrix ephemeris (requirement baseline, section 3.8): pure functions on the Record;
// no propagation and no orbit determination; a refusal {code, message} and never partial output.
//
// Content. The Record's sensitivities (program decision D12) are the module's state transition matrices
// Phi(t, t0), one per epoch, row-major, d(row quantity at t) / d(column quantity at t0) with t0 the first
// state, over the six cartesian state rows and then the covariance's solved parameters in COV_PARAMETERS
// order (DIMENSION equals COV_SIZE; the parameter rows are the identity, the parameters being constant).
// P8 states them against the equinoctial set of the first state (frames.ts, the $OCM EQUINOCTIAL order,
// D2): J(t) = Phi_ss(t, t0) J_eq | Phi_sp(t, t0), a 6 x COV_SIZE matrix with J_eq = d(cartesian)/d(a, af,
// ag, L, chi, psi) analytic at the first state. The header carries the first state's covariance projected
// to those elements, P_eq = T^-1 P(t0) T^-T with T = blockdiag(J_eq, I), so the cartesian covariance at
// every epoch is J_full(t) P_eq J_full(t)^T with J_full = [J(t); 0 I].
//
// Layout (tokens.ts P8 columns; decided here where tokens.ts leaves it open):
//   line 1          EPOCH (S18, the Record epoch EPOCH_TZERO, which is the first state's) and WTD_RMS;
//   COV_SIZE lines  the equinoctial covariance's lower triangle, row i carrying i values, as P3's rows: one
//                   leading tab, then COV values separated by one blank;
//   per epoch       six lines, one per state row x, y, z, vx, vy, vz at t: MSE (minutes from the epoch) and
//                   SENS1..SENS6 = d(row)/d(a, af, ag, L, chi, psi); then, when parameters are solved, six
//                   more lines in the same row order: MSE and d(row)/d(parameter) in SENS1.. for each solved
//                   parameter, in COV_PARAMETERS order.
// Units: km, km/s, deg (L), the parameters' units; the sensitivities in row units per column unit. Every
// line ends with one line feed.
//
// Refusal codes: sensitivities-missing, record-missing:STATE_DATA, record-missing:COVARIANCE_DATA,
// record-missing:GM, record-missing:WEIGHTED_RMS, cov-type:<type>, cov-frame:<frame>, epoch-origin,
// stm-shape, field-overflow:<token>, field-overlap, and the frames.ts codes of the equinoctial projection.
import {
  ok, refuse, type Result, tokenOf, formatToken, placeFields, P3_ROW_INDENT, P3_VALUE_SEPARATOR, P8_HEADER_LINE, P8_EPOCH_ROW,
} from './tokens.js';
import { type Record, STATE_ROWS } from './record.js';
import { cartesianToEquinoctial, covarianceToEquinoctial, equinoctialJacobian, type Equinoctial } from './frames.js';

export const STM_EPHEMERIS_REFUSAL_CODES: readonly string[] = [
  'sensitivities-missing', 'record-missing:STATE_DATA', 'record-missing:COVARIANCE_DATA', 'record-missing:GM', 'record-missing:WEIGHTED_RMS',
  'cov-type:<type>', 'cov-frame:<frame>', 'epoch-origin', 'stm-shape', 'field-overflow:<token>', 'field-overlap',
];

export interface StmEphemerisEpoch {
  readonly minutes: number;
  readonly epochMs: number;
  /** 6 x COV_SIZE: d(state at t) / d(equinoctial set at t0, then the solved parameters). */
  readonly sensitivities: readonly (readonly number[])[];
}
export interface StmEphemeris {
  readonly epochMs: number;
  readonly weightedRms: number;
  readonly size: number;
  readonly parameters: readonly string[];
  /** The equinoctial set of the first state, the point the projection is taken at. */
  readonly elements: Equinoctial;
  /** The first state's covariance over the equinoctial set and the solved parameters, LTM. */
  readonly ltm: readonly number[];
  readonly epochs: readonly StmEphemerisEpoch[];
}

/** The P8 content of a Record, before printing. */
export function stmEphemeris(record: Record): Result<StmEphemeris> {
  const cov = record.covariance;
  if (!cov.sensitivities) return refuse('sensitivities-missing', 'the Record carries no state transition matrices');
  const first = record.epochs[0];
  if (!first) return refuse('record-missing:STATE_DATA', 'P8 needs the Record\'s states');
  if (!cov.perEpoch.length) return refuse('record-missing:COVARIANCE_DATA', 'P8 needs the Record\'s covariance');
  if (cov.type !== 'CARTPV') return refuse(`cov-type:${cov.type}`, 'P8 projects a CARTPV covariance');
  if (cov.frame !== null && cov.frame !== record.meta.frame) return refuse(`cov-frame:${cov.frame}`, `the covariance frame ${cov.frame} is not the state frame ${record.meta.frame}`);
  const gm = record.meta.gm;
  if (gm === null) return refuse('record-missing:GM', 'P8 needs PERTURBATIONS.GM for the equinoctial set');
  const wrms = record.fit.weightedRms;
  if (wrms === null) return refuse('record-missing:WEIGHTED_RMS', 'P8\'s header needs WEIGHTED_RMS');
  if (first.minutes !== 0) return refuse('epoch-origin', `the first state is ${first.minutes} min from EPOCH_TZERO, not at it`);
  const n = cov.size;
  if (cov.sensitivities.some((m) => m.length !== n || m.some((row) => row.length !== n))) {
    return refuse('stm-shape', `a state transition matrix is not ${n} x ${n} (COV_SIZE)`);
  }
  const eq = cartesianToEquinoctial(first.state, gm);
  if (!eq.ok) return eq;
  const jeq = equinoctialJacobian(eq.value, gm);
  if (!jeq.ok) return jeq;
  const ltm = covarianceToEquinoctial(cov.perEpoch[0].ltm, n, eq.value, gm);
  if (!ltm.ok) return ltm;
  const epochs: StmEphemerisEpoch[] = record.epochs.map((e, k) => {
    const phi = (cov.sensitivities as number[][][])[k];
    const sensitivities = Array.from({ length: STATE_ROWS }, (_, i) => Array.from({ length: n }, (_, c) => {
      if (c >= STATE_ROWS) return phi[i][c];
      let sum = 0;
      for (let j = 0; j < STATE_ROWS; j++) sum += phi[i][j] * jeq.value[j][c];
      return sum;
    }));
    return { minutes: e.minutes, epochMs: e.epochMs, sensitivities };
  });
  return ok({ epochMs: record.meta.epochMs, weightedRms: wrms, size: n, parameters: cov.parameters, elements: eq.value, ltm: ltm.value, epochs });
}

function fieldText(token: string, value: number): Result<{ startColumn: number; text: string }> {
  const t = tokenOf('P8', token);
  const text = formatToken(t, value);
  if (text === null) return refuse(`field-overflow:${token}`, `${token} does not fit ${t.format}: ${value}`);
  return ok({ startColumn: t.startColumn, text });
}
function placed(pairs: readonly (readonly [string, number])[]): Result<string> {
  const fields: { startColumn: number; text: string }[] = [];
  for (const [token, value] of pairs) {
    const f = fieldText(token, value);
    if (!f.ok) return f;
    fields.push(f.value);
  }
  return placeFields(fields);
}

/** P8 text: the header, the equinoctial covariance rows and the sensitivity rows per epoch. */
export function stmEphemerisText(record: Record): Result<string> {
  const content = stmEphemeris(record);
  if (!content.ok) return content;
  const e = content.value;
  const lines: string[] = [];
  const header = placed([[P8_HEADER_LINE[0], e.epochMs], [P8_HEADER_LINE[1], e.weightedRms]]);
  if (!header.ok) return header;
  lines.push(header.value);
  let at = 0;
  for (let i = 0; i < e.size; i++) {
    const values: string[] = [];
    for (let j = 0; j <= i; j++) {
      const f = fieldText('COV', e.ltm[at++]);
      if (!f.ok) return f;
      values.push(f.value.text);
    }
    lines.push(P3_ROW_INDENT + values.join(P3_VALUE_SEPARATOR));
  }
  const [mse, ...columns] = P8_EPOCH_ROW;
  for (const epoch of e.epochs) {
    const blocks = e.size > STATE_ROWS ? [[0, STATE_ROWS], [STATE_ROWS, e.size]] : [[0, STATE_ROWS]];
    for (const [from, to] of blocks) {
      for (const row of epoch.sensitivities) {
        const text = placed([[mse, epoch.minutes], ...row.slice(from, to).map((v, c): [string, number] => [columns[c], v])]);
        if (!text.ok) return text;
        lines.push(text.value);
      }
    }
  }
  return ok(lines.map((l) => `${l}\n`).join(''));
}
