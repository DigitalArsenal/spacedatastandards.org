// P9, residual listing (requirement baseline, section 3.9; program decision D6): writer and reader, pure
// functions on the Record; every column and numeric format comes from tokens.ts (P9_ROW).
//
// One row per input the fit used (the $ODR's EDITED_OBSERVATIONS, in order): identifier, epoch, observation type,
// observed value, computed value, residual, weight, accepted flag, perturbation-model code. The residual is the
// Record's, OBSERVED_VALUE minus COMPUTED_VALUE (record.ts); the header states that convention.
//
// Layout this module decides where the baseline and tokens.ts leave one open (recorded for docs/products):
//   The header is one line, the sign convention text P9_SIGN_CONVENTION; no column-name line.
//   TYPE prints the observation type's enum name (memMeasurementType); a name longer than the A12 field is
//     refused (field-width:P9.TYPE), never cut: 15 of the 22 names, RIGHT_ASCENSION_DECLINATION among them, do not fit.
//   Lines end in '\n', the last one too; trailing blanks are trimmed.
//
// Refusals {code, message}: record-missing:EDITED_OBSERVATIONS (no residuals, D6),
// record-missing:EDITED_OBSERVATIONS[<i>].EPOCH, record-missing:EDITED_OBSERVATIONS[<i>].PERTURBATION_MODEL_CODE,
// field-width:P9.<token>, field-overlap, and the reader's p9-empty, p9-header, p9-row:<line>, p9-type:<line>.
import { type Record as ProductRecord } from './record.js';
import { memMeasurementType } from '../ODR/main.js';
import { ok, refuse, type Result, P9_ROW, P9_SIGN_CONVENTION, calendarToUtcMs, endColumn, parseCalendar, tokenOf } from './tokens.js';
import { fieldNumber, fieldText, formatLine, joinLines } from './staterow.js';

/** One P9 row, as written and as read back. */
export interface ResidualRow {
  readonly id: string; readonly epochMs: number; readonly type: memMeasurementType; readonly typeName: string;
  readonly observed: number; readonly computed: number; readonly residual: number; readonly weight: number;
  readonly accepted: boolean; readonly code: string;
}

/** The P9 rows of a Record; refused when the Record carries no residuals or a row lacks a printed value. */
export function residualRows(record: ProductRecord): Result<ResidualRow[]> {
  if (!record.residuals.length) return refuse('record-missing:EDITED_OBSERVATIONS', 'the fit carries no per-input residuals (D6)');
  const rows: ResidualRow[] = [];
  for (const [i, r] of record.residuals.entries()) {
    if (r.epochMs === null) return refuse(`record-missing:EDITED_OBSERVATIONS[${i}].EPOCH`, `input ${i} states no epoch`);
    if (r.code === null) return refuse(`record-missing:EDITED_OBSERVATIONS[${i}].PERTURBATION_MODEL_CODE`, `input ${i} states no perturbation-model code`);
    rows.push({
      id: r.id, epochMs: r.epochMs, type: r.type, typeName: r.typeName, observed: r.observed, computed: r.computed,
      residual: r.residual, weight: r.weight, accepted: r.accepted, code: r.code,
    });
  }
  return ok(rows);
}

/** P9 from rows: the sign-convention header, then one row per input. */
export function writeResidualRows(rows: readonly ResidualRow[]): Result<string> {
  if (!rows.length) return refuse('record-missing:EDITED_OBSERVATIONS', 'the fit carries no per-input residuals (D6)');
  const lines = [P9_SIGN_CONVENTION];
  for (const r of rows) {
    const line = formatLine('P9', P9_ROW, {
      ID: r.id, EPOCH: r.epochMs, TYPE: r.typeName, OBSERVED: r.observed, COMPUTED: r.computed, RESIDUAL: r.residual,
      WEIGHT: r.weight, ACCEPTED: r.accepted, CODE: r.code,
    });
    if (!line.ok) return line;
    lines.push(line.value);
  }
  return ok(joinLines(lines));
}

/** P9 of a Record. */
export function writeP9(record: ProductRecord): Result<string> {
  const rows = residualRows(record);
  return rows.ok ? writeResidualRows(rows.value) : rows;
}

/** Reads P9 back into its rows; refuses a header, a row or a type that is not the P9 layout. */
export function readP9(text: string): Result<{ rows: ResidualRow[] }> {
  if (!text.endsWith('\n')) return refuse('p9-empty', 'P9 text does not end with a line break');
  const lines = text.slice(0, -1).split('\n');
  if (lines[0] !== P9_SIGN_CONVENTION) return refuse('p9-header', 'the first line is not the P9 sign convention');
  if (lines.length < 2) return refuse('p9-empty', 'P9 has no rows');
  const tok = (name: string) => tokenOf('P9', name);
  const rows: ResidualRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const bad = (why: string) => refuse<{ rows: ResidualRow[] }>(`p9-row:${i + 1}`, `line ${i + 1}: ${why}`);
    if (line.length > endColumn(tok('CODE')) || line.length < tok('ACCEPTED').startColumn) return bad('not a P9 row');
    const calendar = parseCalendar(fieldText(line, tok('EPOCH')));
    if (!calendar.ok) return bad(calendar.refusal.message);
    const epochMs = calendarToUtcMs(calendar.value);
    if (!epochMs.ok) return bad(epochMs.refusal.message);
    const typeName = fieldText(line, tok('TYPE')).trimEnd();
    const type = (memMeasurementType as unknown as { [name: string]: number | string })[typeName];
    if (typeof type !== 'number') return refuse(`p9-type:${i + 1}`, `line ${i + 1}: ${typeName} is not an observation type`);
    const numbers = ['OBSERVED', 'COMPUTED', 'RESIDUAL', 'WEIGHT'].map((name) => fieldNumber(line, tok(name)));
    if (numbers.some((x) => x === null)) return bad('a value field is not a number');
    const flag = fieldText(line, tok('ACCEPTED'));
    if (flag !== 'Y' && flag !== 'N') return bad('the accepted flag is not Y or N');
    const n = numbers as number[];
    rows.push({
      id: fieldText(line, tok('ID')).trimEnd(), epochMs: epochMs.value, type: type as memMeasurementType, typeName,
      observed: n[0], computed: n[1], residual: n[2], weight: n[3], accepted: flag === 'Y', code: fieldText(line, tok('CODE')).trimEnd(),
    });
  }
  return ok({ rows });
}
