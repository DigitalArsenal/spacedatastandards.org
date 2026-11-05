// P7, the element set (requirement baseline, section 3.7), in two forms, produced on demand from the Record
// only: nothing here is stored, and no second representation of the elements exists (program decision D5).
// Pure functions on the Record; a refusal {code, message} and never partial output.
//
// Two-line form: two lines of TLE_LINE_LENGTH characters at the P7 TLE1_ and TLE2_ columns of tokens.ts.
// It carries the Record's mean element set only when that set's MEAN_ELEMENT_THEORY is SGP4: mean motion
// in rev/day (Kozai, as the set defines it), B* in 1/Earth radii, the mean motion's first and second
// derivatives as the set carries them. Any other theory, or a Record without a mean element set, is refused
// theory-not-exportable:<THEORY> (the set's theory name, else the Record's theory, else UNSPECIFIED); no
// element of another theory is converted. Field encodings decided here (tokens.ts leaves them to this file):
//   line number   '1' or '2';
//   catalog       NORAD_CAT_ID, five digits with leading zeros; refused above 99999, refused when absent;
//   class         HEADER.CLASSIFICATION when it is one character, U when absent, refused when longer;
//   designator    INTERNATIONAL_DESIGNATOR YYYY-NNNP[PP] as YYNNNP[PP], left-justified; blank when absent;
//   epoch         two-digit year (the tokens.ts pivot, 1957..2056) and day of year with eight decimals,
//                 DDD.DDDDDDDD, rounded once on a 1e-8 day grid (a carry rolls into the next year);
//   n-dot         sign (blank or '-') then .DDDDDDDD; refused at |value| >= 1 after rounding;
//   n-ddot, B*    sign (blank or '-'), five mantissa digits with an assumed leading decimal point, the
//                 exponent's sign and one digit (0.DDDDD x 10^e, e in -9..9); zero prints 00000+0; a value
//                 below 0.000005e-9 prints zero; refused above 0.99999e9;
//   ephemeris     0;
//   set number    blank (the Record has no typed home for it);
//   angles        F8.4 deg: inclination in [0, 180], node, argument of pericenter and mean anomaly in
//                 [0, 360); refused field-range:<token> outside;
//   eccentricity  seven digits, assumed leading decimal point; refused at or above 1 after rounding;
//   mean motion   F11.8 rev/day;
//   rev at epoch  ORB_REVNUM when stated and the set's epoch is EPOCH_TZERO, five digits right-justified
//                 (modulo 100000); blank otherwise;
//   checksum      the sum of the digits of columns 1-68, each '-' counting one, modulo 10.
//
// Element-file form: one line at the P7 ELF_ columns: the epoch of the Record's first state (S18), the
// $OCM EQUINOCTIAL set of that state under the Record's GM (frames.ts; a F15.6 km, af, ag, chi and psi
// F15.10, L F15.8 deg, fr I3), then B, BDOT, AGOM, T and OUTGASSING (%+14.6E, the parameter's own unit) for
// each parameter OD_DYNAMIC_PARAMETERS carries, solved for or held; an absent parameter leaves its columns
// blank. Every line of either form ends with one line feed.
//
// Refusal codes: theory-not-exportable:<THEORY>, record-missing:NORAD_CAT_ID, record-missing:STATE_DATA,
// record-missing:GM, epoch-form:MEAN_ELEMENTS.EPOCH, field-form:<token>, field-range:<token>,
// field-overflow:<token>, field-overlap, and the frames.ts codes of the equinoctial conversion (frame-*).
import { meanElementSource } from '../OCM/main.js';
import {
  ok, refuse, type Result, type Token, tokenOf, formatToken, formatText, formatFixed, placeFields, isLeapYear,
  CALENDAR_FIRST_YEAR, CALENDAR_LAST_YEAR, TLE_LINE_LENGTH, P7_LINES,
} from './tokens.js';
import { type Record, PARAMETERS } from './record.js';
import { cartesianToEquinoctial } from './frames.js';

export const ELSET_REFUSAL_CODES: readonly string[] = [
  'theory-not-exportable:<THEORY>', 'record-missing:NORAD_CAT_ID', 'record-missing:STATE_DATA', 'record-missing:GM',
  'epoch-form:MEAN_ELEMENTS.EPOCH', 'field-form:<token>', 'field-range:<token>', 'field-overflow:<token>', 'field-overlap',
];
/** The only theory whose mean element set the two-line form carries. */
export const TWO_LINE_THEORY = meanElementSource.SGP4;

type Field = { readonly startColumn: number; readonly text: string };
const DAY_MS = 86400000;
const DAY_GRID = 1e8;

/** The modulo-10 checksum of a two-line element line's first 68 columns. */
export function twoLineChecksum(line: string): number {
  let sum = 0;
  for (const c of line.slice(0, TLE_LINE_LENGTH - 1)) {
    if (c >= '0' && c <= '9') sum += c.charCodeAt(0) - 48;
    else if (c === '-') sum += 1;
  }
  return sum % 10;
}

/** A text field at its P7 token; refused field-overflow when longer than the token's width. */
function textField(token: string, value: string, rightJustify = false): Result<Field> {
  const t = tokenOf('P7', token);
  const width = Number(/^A(\d+)$/.exec(t.format)?.[1] ?? 0);
  if (value.length > width) return refuse(`field-overflow:${token}`, `${token} does not fit ${t.format}: ${value}`);
  const text = rightJustify ? ' '.repeat(width - value.length) + value : formatText(value, width);
  return ok({ startColumn: t.startColumn, text: text as string });
}

/** sign then .DDDDDDDD (the first-derivative field). */
function decimalField(token: string, value: number): Result<Field> {
  const fixed = Number.isFinite(value) ? Math.abs(value).toFixed(8) : '';
  if (!/^0\.\d{8}$/.test(fixed)) return refuse(`field-overflow:${token}`, `${token} is not below one in magnitude: ${value}`);
  const negative = value < 0 && fixed !== '0.00000000';
  return textField(token, `${negative ? '-' : ' '}${fixed.slice(1)}`);
}

/** sign, five digits with an assumed leading point, exponent sign and digit (the n-ddot and B* fields). */
function exponentField(token: string, value: number): Result<Field> {
  if (!Number.isFinite(value)) return refuse(`field-overflow:${token}`, `${token} is not finite: ${value}`);
  let digits = 0, exponent = 0;
  if (value !== 0) {
    const m = /^(\d)\.(\d{4})e([+-]\d+)$/.exec(Math.abs(value).toExponential(4));
    if (!m) return refuse(`field-overflow:${token}`, `${token} does not print: ${value}`);
    digits = Number(m[1] + m[2]);
    exponent = Number(m[3]) + 1;
    if (exponent > 9) return refuse(`field-overflow:${token}`, `${token} exceeds 0.99999e9: ${value}`);
    if (exponent < -9) {
      digits = Math.round(Math.abs(value) * 1e14);
      exponent = -9;
      if (digits === 0) exponent = 0;
    }
  }
  const sign = value < 0 && digits !== 0 ? '-' : ' ';
  return textField(token, `${sign}${String(digits).padStart(5, '0')}${exponent < 0 ? '-' : '+'}${Math.abs(exponent)}`);
}

/** An angle F8.4 within [low, high] (high included when closed). */
function angleField(token: string, value: number, low: number, high: number, closed: boolean): Result<Field> {
  if (!(value >= low && (closed ? value <= high : value < high))) return refuse(`field-range:${token}`, `${token} ${value} is outside [${low}, ${high}${closed ? ']' : ')'}`);
  const text = formatFixed(value, 8, 4);
  if (text === null) return refuse(`field-overflow:${token}`, `${token} does not fit F8.4: ${value}`);
  return textField(token, text);
}

function designator(value: string | null): Result<string> {
  if (value === null) return ok('');
  const m = /^(\d{4})-(\d{3})([A-Z]{1,3})$/.exec(value);
  if (!m) return refuse('field-form:TLE1_INTERNATIONAL_DESIGNATOR', `INTERNATIONAL_DESIGNATOR is not YYYY-NNNP[PP]: ${value}`);
  return ok(`${m[1].slice(2)}${m[2]}${m[3]}`);
}

/** The two-digit year and DDD.DDDDDDDD of a UTC instant. */
function epochFields(epochMs: number): Result<{ year: string; day: string }> {
  let year = new Date(epochMs).getUTCFullYear();
  let units = Math.round(((epochMs - Date.UTC(year, 0, 1)) / DAY_MS) * DAY_GRID);
  const yearUnits = (isLeapYear(year) ? 366 : 365) * DAY_GRID;
  if (units >= yearUnits) { units -= yearUnits; year += 1; }
  if (year < CALENDAR_FIRST_YEAR || year > CALENDAR_LAST_YEAR) return refuse('field-overflow:TLE1_EPOCH_YEAR', `the epoch year ${year} is outside ${CALENDAR_FIRST_YEAR}..${CALENDAR_LAST_YEAR}`);
  const day = Math.floor(units / DAY_GRID) + 1;
  const fraction = units - (day - 1) * DAY_GRID;
  return ok({ year: String(year % 100).padStart(2, '0'), day: `${String(day).padStart(3, '0')}.${String(fraction).padStart(8, '0')}` });
}

function line(checksumToken: string, fields: readonly Result<Field>[]): Result<string> {
  const placed: Field[] = [];
  for (const f of fields) { if (!f.ok) return f; placed.push(f.value); }
  const body = placeFields(placed);
  if (!body.ok) return body;
  const padded = body.value + ' '.repeat(Math.max(0, TLE_LINE_LENGTH - 1 - body.value.length));
  const checksum = tokenOf('P7', checksumToken);
  if (padded.length !== checksum.startColumn - 1) return refuse('field-overlap', `a two-line element line runs past column ${checksum.startColumn - 1}`);
  return ok(padded + String(twoLineChecksum(padded)));
}

/** P7, two-line form: the Record's SGP4 mean element set as two 69-character lines. */
export function elsetTwoLine(record: Record): Result<string> {
  const me = record.elements.meanElements;
  if (!me || me.theory !== TWO_LINE_THEORY) {
    const theory = me ? meanElementSource[me.theory] ?? String(me.theory) : record.meta.theory ?? 'UNSPECIFIED';
    return refuse(`theory-not-exportable:${theory}`, `the two-line form carries ${meanElementSource[TWO_LINE_THEORY]} mean elements only; the Record's theory is ${theory}`);
  }
  const catalog = record.meta.noradCatId;
  if (!(catalog > 0)) return refuse('record-missing:NORAD_CAT_ID', 'the two-line form needs the catalog number');
  if (catalog > 99999) return refuse('field-overflow:TLE1_CATALOG_NUMBER', `catalog number ${catalog} exceeds five digits`);
  const epochMs = Date.parse(me.epoch);
  if (!Number.isFinite(epochMs)) return refuse('epoch-form:MEAN_ELEMENTS.EPOCH', `MEAN_ELEMENTS.EPOCH is not an ISO 8601 instant: ${me.epoch}`);
  const epoch = epochFields(epochMs);
  if (!epoch.ok) return epoch;
  const intl = designator(record.meta.internationalDesignator);
  if (!intl.ok) return intl;
  const header = record.ocm.HEADER;
  const rawClass = header && header.CLASSIFICATION !== null ? (typeof header.CLASSIFICATION === 'string' ? header.CLASSIFICATION : new TextDecoder().decode(header.CLASSIFICATION)) : '';
  const classification = rawClass === '' ? 'U' : rawClass;
  const catalogText = String(catalog).padStart(5, '0');
  const eccentricity = Math.round(me.eccentricity * 1e7);
  if (!(me.eccentricity >= 0) || eccentricity >= 1e7) return refuse('field-range:TLE2_ECCENTRICITY', `eccentricity ${me.eccentricity} is outside [0, 1)`);
  const meanMotion = formatFixed(me.meanMotion, 11, 8);
  if (meanMotion === null || !(me.meanMotion > 0)) return refuse('field-overflow:TLE2_MEAN_MOTION', `mean motion ${me.meanMotion} does not fit F11.8 rev/day`);
  const revnum = record.ocm.ORB_REVNUM;
  const rev = Number.isFinite(revnum) && revnum > 0 && Number.isInteger(revnum) && epochMs === record.meta.epochMs ? String(revnum % 100000) : '';
  const first = line('TLE1_CHECKSUM', [
    textField('TLE1_LINE_NUMBER', '1'), textField('TLE1_CATALOG_NUMBER', catalogText), textField('TLE1_CLASSIFICATION', classification),
    textField('TLE1_INTERNATIONAL_DESIGNATOR', intl.value), textField('TLE1_EPOCH_YEAR', epoch.value.year), textField('TLE1_EPOCH_DAY', epoch.value.day),
    decimalField('TLE1_MEAN_MOTION_DOT', me.meanMotionDot), exponentField('TLE1_MEAN_MOTION_DDOT', me.meanMotionDdot), exponentField('TLE1_BSTAR', me.bstar),
    textField('TLE1_EPHEMERIS_TYPE', '0'), textField('TLE1_ELEMENT_SET_NUMBER', '', true),
  ]);
  if (!first.ok) return first;
  const second = line('TLE2_CHECKSUM', [
    textField('TLE2_LINE_NUMBER', '2'), textField('TLE2_CATALOG_NUMBER', catalogText),
    angleField('TLE2_INCLINATION', me.inclination, 0, 180, true), angleField('TLE2_RA_OF_ASC_NODE', me.raan, 0, 360, false),
    textField('TLE2_ECCENTRICITY', String(eccentricity).padStart(7, '0')),
    angleField('TLE2_ARG_OF_PERICENTER', me.argOfPericenter, 0, 360, false), angleField('TLE2_MEAN_ANOMALY', me.meanAnomaly, 0, 360, false),
    textField('TLE2_MEAN_MOTION', meanMotion), textField('TLE2_REV_AT_EPOCH', rev, true),
  ]);
  if (!second.ok) return second;
  return ok(`${first.value}\n${second.value}\n`);
}

const ELF_PARAMETER_TOKENS: readonly string[] = PARAMETERS.map((p) => `ELF_${p.symbol}`);

function numericField(t: Token, value: number): Result<Field> {
  const text = formatToken(t, value);
  if (text === null) return refuse(`field-overflow:${t.token}`, `${t.token} does not fit ${t.format}: ${value}`);
  return ok({ startColumn: t.startColumn, text });
}

/** P7, element-file form: the equinoctial set at the Record's first state and the parameters it carries, one line. */
export function elsetElementFile(record: Record): Result<string> {
  const first = record.epochs[0];
  if (!first) return refuse('record-missing:STATE_DATA', 'the element-file form needs a state');
  if (record.meta.gm === null) return refuse('record-missing:GM', 'the element-file form needs PERTURBATIONS.GM');
  const eq = cartesianToEquinoctial(first.state, record.meta.gm);
  if (!eq.ok) return eq;
  const [a, af, ag, l, chi, psi, fr] = eq.value;
  const values: readonly [string, number][] = [
    ['ELF_EPOCH', first.epochMs], ['ELF_SEMI_MAJOR_AXIS', a], ['ELF_AF', af], ['ELF_AG', ag], ['ELF_MEAN_LONGITUDE', l],
    ['ELF_CHI', chi], ['ELF_PSI', psi], ['ELF_RETROGRADE_FACTOR', fr],
    ...record.elements.parameters.map((p): [string, number] => [ELF_PARAMETER_TOKENS[PARAMETERS.findIndex((d) => d.kind === p.kind)], p.value]),
  ];
  const fields: Field[] = [];
  for (const [token, value] of values) {
    if (!P7_LINES.ELF.includes(token)) return refuse(`field-form:${token}`, `${token} is not an element-file column`);
    const f = numericField(tokenOf('P7', token), value);
    if (!f.ok) return f;
    fields.push(f.value);
  }
  const placed = placeFields(fields);
  if (!placed.ok) return placed;
  return ok(`${placed.value}\n`);
}
