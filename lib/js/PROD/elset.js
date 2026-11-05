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
// Fragments. Each form has a Record fragment, the values it prints in the Record's names and units:
// twoLineElements(record) -> TwoLineElements -> writeTwoLine, elementFileSet(record) -> ElementFileSet ->
// writeElementFile; elsetTwoLine and elsetElementFile are the two compositions. The readers readTwoLine and
// readElementFile return the same fragments, so writeTwoLine(readTwoLine(text)) and
// writeElementFile(readElementFile(text)) return a text either writer wrote byte for byte. The values read are
// the printed ones: the Record's values to the precision of their fields.
// Record gaps (record.ts unchanged): the element set number and the revolution number at the set's epoch have
// no typed home in the Record; the fragment carries them (elementSetNumber, revAtEpoch), null when blank, and
// a Record-built set prints the first blank and the second from ORB_REVNUM as above. The two-line epoch is
// carried as epochYear and epochDay (the 1e-8 day grid is finer than the millisecond of MEAN_ELEMENTS.EPOCH,
// which the fragment also carries); BTERM and AGOM are not in the two-line form and not in its fragment; the
// element-file form does not print whether a parameter is solved for, so its fragment has no solvedFor.
// Reader decisions: the two-line reader takes digits or leading blanks in the catalog fields (equal on both
// lines), a blank or a digit string in the element set number and revolution fields, a sign of blank, '+' or
// '-' in the n-dot and exponent fields, and a designator YYNNNP[PP] (the year through the tokens.ts pivot) or
// blank; the element-file reader takes each numeric field in its tokens.ts format, a blank parameter field as
// absent, fr +1 or -1, and no trailing blank. Columns between fields are blank on both forms.
//
// Refusal codes: theory-not-exportable:<THEORY>, record-missing:NORAD_CAT_ID, record-missing:STATE_DATA,
// record-missing:GM, epoch-form:MEAN_ELEMENTS.EPOCH, field-form:<token>, field-range:<token>,
// field-overflow:<token>, field-overlap, and the frames.ts codes of the equinoctial conversion (frame-*); the
// readers': p7-empty (no closing line feed), p7-line-count, p7-line:<n> (a non-blank column between fields, a
// trailing blank), field-form:<token>, field-range:<token>, field-overflow:<token> (a line past its last
// column), checksum-mismatch:<token>.
import { meanElementSource } from '../OCM/main.js';
import { ok, refuse, tokenOf, formatToken, formatText, formatFixed, placeFields, isLeapYear, daysInYear, fullYear, endColumn, formatWidth, parseCalendar, calendarToUtcMs, CALENDAR_FIRST_YEAR, CALENDAR_LAST_YEAR, TLE_LINE_LENGTH, P7_LINES, } from './tokens.js';
import { PARAMETERS } from './record.js';
import { cartesianToEquinoctial } from './frames.js';
export const ELSET_REFUSAL_CODES = [
    'theory-not-exportable:<THEORY>', 'record-missing:NORAD_CAT_ID', 'record-missing:STATE_DATA', 'record-missing:GM',
    'epoch-form:MEAN_ELEMENTS.EPOCH', 'field-form:<token>', 'field-range:<token>', 'field-overflow:<token>', 'field-overlap',
    'p7-empty', 'p7-line-count', 'p7-line:<n>', 'checksum-mismatch:<token>',
];
/** The only theory whose mean element set the two-line form carries. */
export const TWO_LINE_THEORY = meanElementSource.SGP4;
const DAY_MS = 86400000;
const DAY_GRID = 1e8;
/** The modulo-10 checksum of a two-line element line's first 68 columns. */
export function twoLineChecksum(line) {
    let sum = 0;
    for (const c of line.slice(0, TLE_LINE_LENGTH - 1)) {
        if (c >= '0' && c <= '9')
            sum += c.charCodeAt(0) - 48;
        else if (c === '-')
            sum += 1;
    }
    return sum % 10;
}
/** A text field at its P7 token; refused field-overflow when longer than the token's width. */
function textField(token, value, rightJustify = false) {
    var _a, _b;
    const t = tokenOf('P7', token);
    const width = Number((_b = (_a = /^A(\d+)$/.exec(t.format)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : 0);
    if (value.length > width)
        return refuse(`field-overflow:${token}`, `${token} does not fit ${t.format}: ${value}`);
    const text = rightJustify ? ' '.repeat(width - value.length) + value : formatText(value, width);
    return ok({ startColumn: t.startColumn, text: text });
}
/** sign then .DDDDDDDD (the first-derivative field). */
function decimalField(token, value) {
    const fixed = Number.isFinite(value) ? Math.abs(value).toFixed(8) : '';
    if (!/^0\.\d{8}$/.test(fixed))
        return refuse(`field-overflow:${token}`, `${token} is not below one in magnitude: ${value}`);
    const negative = value < 0 && fixed !== '0.00000000';
    return textField(token, `${negative ? '-' : ' '}${fixed.slice(1)}`);
}
/** sign, five digits with an assumed leading point, exponent sign and digit (the n-ddot and B* fields). */
function exponentField(token, value) {
    if (!Number.isFinite(value))
        return refuse(`field-overflow:${token}`, `${token} is not finite: ${value}`);
    let digits = 0, exponent = 0;
    if (value !== 0) {
        const m = /^(\d)\.(\d{4})e([+-]\d+)$/.exec(Math.abs(value).toExponential(4));
        if (!m)
            return refuse(`field-overflow:${token}`, `${token} does not print: ${value}`);
        digits = Number(m[1] + m[2]);
        exponent = Number(m[3]) + 1;
        if (exponent > 9)
            return refuse(`field-overflow:${token}`, `${token} exceeds 0.99999e9: ${value}`);
        if (exponent < -9) {
            digits = Math.round(Math.abs(value) * 1e14);
            exponent = -9;
            if (digits === 0)
                exponent = 0;
        }
    }
    const sign = value < 0 && digits !== 0 ? '-' : ' ';
    return textField(token, `${sign}${String(digits).padStart(5, '0')}${exponent < 0 ? '-' : '+'}${Math.abs(exponent)}`);
}
/** An angle F8.4 within [low, high] (high included when closed). */
function angleField(token, value, low, high, closed) {
    if (!(value >= low && (closed ? value <= high : value < high)))
        return refuse(`field-range:${token}`, `${token} ${value} is outside [${low}, ${high}${closed ? ']' : ')'}`);
    const text = formatFixed(value, 8, 4);
    if (text === null)
        return refuse(`field-overflow:${token}`, `${token} does not fit F8.4: ${value}`);
    return textField(token, text);
}
function designator(value) {
    if (value === null)
        return ok('');
    const m = /^(\d{4})-(\d{3})([A-Z]{1,3})$/.exec(value);
    if (!m)
        return refuse('field-form:TLE1_INTERNATIONAL_DESIGNATOR', `INTERNATIONAL_DESIGNATOR is not YYYY-NNNP[PP]: ${value}`);
    return ok(`${m[1].slice(2)}${m[2]}${m[3]}`);
}
/** The year and the day of the year (from 1.0) of a UTC instant, on the 1e-8 day grid (a carry rolls into the next year). */
function epochOf(epochMs) {
    let year = new Date(epochMs).getUTCFullYear();
    let units = Math.round(((epochMs - Date.UTC(year, 0, 1)) / DAY_MS) * DAY_GRID);
    const yearUnits = (isLeapYear(year) ? 366 : 365) * DAY_GRID;
    if (units >= yearUnits) {
        units -= yearUnits;
        year += 1;
    }
    if (year < CALENDAR_FIRST_YEAR || year > CALENDAR_LAST_YEAR)
        return refuse('field-overflow:TLE1_EPOCH_YEAR', `the epoch year ${year} is outside ${CALENDAR_FIRST_YEAR}..${CALENDAR_LAST_YEAR}`);
    return ok({ year, day: 1 + units / DAY_GRID });
}
/** The two-digit year and DDD.DDDDDDDD of a set's epoch. */
function epochFields(year, dayOfYear) {
    if (!Number.isInteger(year) || year < CALENDAR_FIRST_YEAR || year > CALENDAR_LAST_YEAR)
        return refuse('field-overflow:TLE1_EPOCH_YEAR', `the epoch year ${year} is outside ${CALENDAR_FIRST_YEAR}..${CALENDAR_LAST_YEAR}`);
    const units = Math.round((dayOfYear - 1) * DAY_GRID);
    if (!(units >= 0 && units < daysInYear(year) * DAY_GRID))
        return refuse('field-range:TLE1_EPOCH_DAY', `day ${dayOfYear} is outside year ${year}`);
    const day = Math.floor(units / DAY_GRID) + 1;
    const fraction = units - (day - 1) * DAY_GRID;
    return ok({ year: String(year % 100).padStart(2, '0'), day: `${String(day).padStart(3, '0')}.${String(fraction).padStart(8, '0')}` });
}
function line(checksumToken, fields) {
    const placed = [];
    for (const f of fields) {
        if (!f.ok)
            return f;
        placed.push(f.value);
    }
    const body = placeFields(placed);
    if (!body.ok)
        return body;
    const padded = body.value + ' '.repeat(Math.max(0, TLE_LINE_LENGTH - 1 - body.value.length));
    const checksum = tokenOf('P7', checksumToken);
    if (padded.length !== checksum.startColumn - 1)
        return refuse('field-overlap', `a two-line element line runs past column ${checksum.startColumn - 1}`);
    return ok(padded + String(twoLineChecksum(padded)));
}
/** The two-line form's fragment of a Record: its SGP4 mean element set and the identifiers the lines carry. */
export function twoLineElements(record) {
    var _a, _b;
    const me = record.elements.meanElements;
    if (!me || me.theory !== TWO_LINE_THEORY) {
        const theory = me ? (_a = meanElementSource[me.theory]) !== null && _a !== void 0 ? _a : String(me.theory) : (_b = record.meta.theory) !== null && _b !== void 0 ? _b : 'UNSPECIFIED';
        return refuse(`theory-not-exportable:${theory}`, `the two-line form carries ${meanElementSource[TWO_LINE_THEORY]} mean elements only; the Record's theory is ${theory}`);
    }
    const catalog = record.meta.noradCatId;
    if (!(catalog > 0))
        return refuse('record-missing:NORAD_CAT_ID', 'the two-line form needs the catalog number');
    const epochMs = Date.parse(me.epoch);
    if (!Number.isFinite(epochMs))
        return refuse('epoch-form:MEAN_ELEMENTS.EPOCH', `MEAN_ELEMENTS.EPOCH is not an ISO 8601 instant: ${me.epoch}`);
    const epoch = epochOf(epochMs);
    if (!epoch.ok)
        return epoch;
    const header = record.ocm.HEADER;
    const rawClass = header && header.CLASSIFICATION !== null ? (typeof header.CLASSIFICATION === 'string' ? header.CLASSIFICATION : new TextDecoder().decode(header.CLASSIFICATION)) : '';
    const revnum = record.ocm.ORB_REVNUM;
    const rev = Number.isFinite(revnum) && revnum > 0 && Number.isInteger(revnum) && epochMs === record.meta.epochMs ? revnum % 100000 : null;
    return ok({
        noradCatId: catalog, classification: rawClass === '' ? 'U' : rawClass, internationalDesignator: record.meta.internationalDesignator,
        epochYear: epoch.value.year, epochDay: epoch.value.day,
        meanElements: {
            theory: me.theory, epoch: me.epoch, meanMotion: me.meanMotion, eccentricity: me.eccentricity, inclination: me.inclination,
            raan: me.raan, argOfPericenter: me.argOfPericenter, meanAnomaly: me.meanAnomaly,
            bstar: me.bstar, meanMotionDot: me.meanMotionDot, meanMotionDdot: me.meanMotionDdot,
        },
        ephemerisType: 0, elementSetNumber: null, revAtEpoch: rev,
    });
}
/** Two 69-character lines of a two-line fragment. */
export function writeTwoLine(set) {
    const me = set.meanElements;
    const catalog = set.noradCatId;
    if (!(catalog > 0) || !Number.isInteger(catalog))
        return refuse('field-range:TLE1_CATALOG_NUMBER', `catalog number ${catalog} is not a positive integer`);
    if (catalog > 99999)
        return refuse('field-overflow:TLE1_CATALOG_NUMBER', `catalog number ${catalog} exceeds five digits`);
    const epoch = epochFields(set.epochYear, set.epochDay);
    if (!epoch.ok)
        return epoch;
    const intl = designator(set.internationalDesignator);
    if (!intl.ok)
        return intl;
    const catalogText = String(catalog).padStart(5, '0');
    const eccentricity = Math.round(me.eccentricity * 1e7);
    if (!(me.eccentricity >= 0) || eccentricity >= 1e7)
        return refuse('field-range:TLE2_ECCENTRICITY', `eccentricity ${me.eccentricity} is outside [0, 1)`);
    const meanMotion = formatFixed(me.meanMotion, 11, 8);
    if (meanMotion === null || !(me.meanMotion > 0))
        return refuse('field-overflow:TLE2_MEAN_MOTION', `mean motion ${me.meanMotion} does not fit F11.8 rev/day`);
    const integerText = (token, value) => {
        if (value === null)
            return textField(token, '', true);
        if (!Number.isInteger(value) || value < 0)
            return refuse(`field-range:${token}`, `${token} ${value} is not a non-negative integer`);
        return textField(token, String(value), true);
    };
    const first = line('TLE1_CHECKSUM', [
        textField('TLE1_LINE_NUMBER', '1'), textField('TLE1_CATALOG_NUMBER', catalogText), textField('TLE1_CLASSIFICATION', set.classification),
        textField('TLE1_INTERNATIONAL_DESIGNATOR', intl.value), textField('TLE1_EPOCH_YEAR', epoch.value.year), textField('TLE1_EPOCH_DAY', epoch.value.day),
        decimalField('TLE1_MEAN_MOTION_DOT', me.meanMotionDot), exponentField('TLE1_MEAN_MOTION_DDOT', me.meanMotionDdot), exponentField('TLE1_BSTAR', me.bstar),
        integerText('TLE1_EPHEMERIS_TYPE', set.ephemerisType), integerText('TLE1_ELEMENT_SET_NUMBER', set.elementSetNumber),
    ]);
    if (!first.ok)
        return first;
    const second = line('TLE2_CHECKSUM', [
        textField('TLE2_LINE_NUMBER', '2'), textField('TLE2_CATALOG_NUMBER', catalogText),
        angleField('TLE2_INCLINATION', me.inclination, 0, 180, true), angleField('TLE2_RA_OF_ASC_NODE', me.raan, 0, 360, false),
        textField('TLE2_ECCENTRICITY', String(eccentricity).padStart(7, '0')),
        angleField('TLE2_ARG_OF_PERICENTER', me.argOfPericenter, 0, 360, false), angleField('TLE2_MEAN_ANOMALY', me.meanAnomaly, 0, 360, false),
        textField('TLE2_MEAN_MOTION', meanMotion), integerText('TLE2_REV_AT_EPOCH', set.revAtEpoch),
    ]);
    if (!second.ok)
        return second;
    return ok(`${first.value}\n${second.value}\n`);
}
/** P7, two-line form: the Record's SGP4 mean element set as two 69-character lines. */
export function elsetTwoLine(record) {
    const set = twoLineElements(record);
    return set.ok ? writeTwoLine(set.value) : set;
}
const ELF_PARAMETER_TOKENS = PARAMETERS.map((p) => `ELF_${p.symbol}`);
const ELF_ELEMENT_TOKENS = ['ELF_SEMI_MAJOR_AXIS', 'ELF_AF', 'ELF_AG', 'ELF_MEAN_LONGITUDE', 'ELF_CHI', 'ELF_PSI', 'ELF_RETROGRADE_FACTOR'];
function numericField(t, value) {
    const text = formatToken(t, value);
    if (text === null)
        return refuse(`field-overflow:${t.token}`, `${t.token} does not fit ${t.format}: ${value}`);
    return ok({ startColumn: t.startColumn, text });
}
/** The element-file form's fragment of a Record: the equinoctial set of its first state and the parameters it carries. */
export function elementFileSet(record) {
    const first = record.epochs[0];
    if (!first)
        return refuse('record-missing:STATE_DATA', 'the element-file form needs a state');
    if (record.meta.gm === null)
        return refuse('record-missing:GM', 'the element-file form needs PERTURBATIONS.GM');
    const eq = cartesianToEquinoctial(first.state, record.meta.gm);
    if (!eq.ok)
        return eq;
    return ok({
        epochMs: first.epochMs, equinoctial: eq.value,
        parameters: record.elements.parameters.map(({ name, symbol, kind, units, value }) => ({ name, symbol, kind, units, value })),
    });
}
/** One element-file line of a fragment. */
export function writeElementFile(set) {
    const values = [['ELF_EPOCH', set.epochMs], ...ELF_ELEMENT_TOKENS.map((token, i) => [token, set.equinoctial[i]])];
    for (const p of set.parameters) {
        const at = PARAMETERS.findIndex((d) => d.kind === p.kind);
        if (at < 0)
            return refuse(`field-form:ELF_${p.symbol}`, `${p.name} is not one of the five parameters`);
        values.push([ELF_PARAMETER_TOKENS[at], p.value]);
    }
    const fields = [];
    for (const [token, value] of values) {
        if (!P7_LINES.ELF.includes(token))
            return refuse(`field-form:${token}`, `${token} is not an element-file column`);
        const f = numericField(tokenOf('P7', token), value);
        if (!f.ok)
            return f;
        fields.push(f.value);
    }
    const placed = placeFields(fields);
    if (!placed.ok)
        return placed;
    return ok(`${placed.value}\n`);
}
/** P7, element-file form: the equinoctial set at the Record's first state and the parameters it carries, one line. */
export function elsetElementFile(record) {
    const set = elementFileSet(record);
    return set.ok ? writeElementFile(set.value) : set;
}
// ---- readers ------------------------------------------------------------------------------------------------
/** The lines of a P7 text: refused p7-empty without the closing line feed, p7-line-count for another count. */
function linesOf(text, count) {
    if (!text.endsWith('\n') || text === '\n')
        return refuse('p7-empty', 'P7 text does not end with a line feed');
    const lines = text.slice(0, -1).split('\n');
    if (lines.length !== count)
        return refuse('p7-line-count', `the form has ${count} line${count === 1 ? '' : 's'}, not ${lines.length}`);
    return ok(lines);
}
/** The columns of a line no token of the form covers must be blank; the line may not run past its last token. */
function layout(line, n, tokens) {
    const last = tokens[tokens.length - 1];
    if (line.length > endColumn(last))
        return refuse(`field-overflow:${last.token}`, `line ${n} runs past column ${endColumn(last)}`);
    for (let c = 1; c <= line.length; c++) {
        if (line[c - 1] !== ' ' && !tokens.some((t) => c >= t.startColumn && c <= endColumn(t)))
            return refuse(`p7-line:${n}`, `line ${n} column ${c} lies between fields and is not blank`);
    }
    return ok(true);
}
const columns = (line, t) => line.slice(t.startColumn - 1, t.startColumn - 1 + formatWidth(t.format));
/** Reads the two-line form back into its fragment; refuses a malformed line, field or checksum. */
export function readTwoLine(text) {
    const lines = linesOf(text, 2);
    if (!lines.ok)
        return lines;
    const tok = (name) => tokenOf('P7', name);
    for (const [k, prefix] of ['TLE1', 'TLE2'].entries()) {
        const l = lines.value[k];
        const tokens = P7_LINES[prefix].map(tok);
        const shape = layout(l, k + 1, tokens);
        if (!shape.ok)
            return shape;
        if (l.length < TLE_LINE_LENGTH)
            return refuse(`field-form:${prefix}_CHECKSUM`, `line ${k + 1} is ${l.length} characters, not ${TLE_LINE_LENGTH}`);
        if (columns(l, tok(`${prefix}_LINE_NUMBER`)) !== String(k + 1))
            return refuse(`field-form:${prefix}_LINE_NUMBER`, `line ${k + 1} does not start with ${k + 1}`);
        const checksum = columns(l, tok(`${prefix}_CHECKSUM`));
        if (!/^\d$/.test(checksum))
            return refuse(`field-form:${prefix}_CHECKSUM`, `line ${k + 1}'s checksum is not a digit`);
        if (Number(checksum) !== twoLineChecksum(l))
            return refuse(`checksum-mismatch:${prefix}_CHECKSUM`, `line ${k + 1}'s checksum ${checksum} is not ${twoLineChecksum(l)}`);
    }
    const [one, two] = lines.value;
    const f1 = (name) => columns(one, tok(name));
    const f2 = (name) => columns(two, tok(name));
    const form = (token, value, re) => {
        const m = re.exec(value);
        return m ? ok(m) : refuse(`field-form:${token}`, `${token} is not in its form: "${value}"`);
    };
    const catalog = form('TLE1_CATALOG_NUMBER', f1('TLE1_CATALOG_NUMBER'), /^ *(\d+)$/);
    if (!catalog.ok)
        return catalog;
    const noradCatId = Number(catalog.value[1]);
    if (noradCatId === 0)
        return refuse('field-range:TLE1_CATALOG_NUMBER', 'catalog number 0');
    const catalog2 = form('TLE2_CATALOG_NUMBER', f2('TLE2_CATALOG_NUMBER'), /^ *(\d+)$/);
    if (!catalog2.ok)
        return catalog2;
    if (Number(catalog2.value[1]) !== noradCatId)
        return refuse('field-form:TLE2_CATALOG_NUMBER', `line 2's catalog number ${catalog2.value[1]} is not line 1's ${noradCatId}`);
    const classification = form('TLE1_CLASSIFICATION', f1('TLE1_CLASSIFICATION'), /^([A-Z])$/);
    if (!classification.ok)
        return classification;
    const intl = form('TLE1_INTERNATIONAL_DESIGNATOR', f1('TLE1_INTERNATIONAL_DESIGNATOR'), /^(?:(\d{2})(\d{3})([A-Z]{1,3}) *| {8})$/);
    if (!intl.ok)
        return intl;
    const internationalDesignator = intl.value[1] === undefined ? null : `${fullYear(Number(intl.value[1]))}-${intl.value[2]}${intl.value[3]}`;
    const year = form('TLE1_EPOCH_YEAR', f1('TLE1_EPOCH_YEAR'), /^(\d{2})$/);
    if (!year.ok)
        return year;
    const epochYear = fullYear(Number(year.value[1]));
    const day = form('TLE1_EPOCH_DAY', f1('TLE1_EPOCH_DAY'), /^ *(\d{1,3})\.(\d{8})$/);
    if (!day.ok)
        return day;
    const dayNumber = Number(day.value[1]);
    if (dayNumber < 1 || dayNumber > daysInYear(epochYear))
        return refuse('field-range:TLE1_EPOCH_DAY', `day ${dayNumber} does not exist in ${epochYear}`);
    const units = (dayNumber - 1) * DAY_GRID + Number(day.value[2]);
    const epochMs = Date.UTC(epochYear, 0, 1) + (units * DAY_MS) / DAY_GRID;
    const ndot = form('TLE1_MEAN_MOTION_DOT', f1('TLE1_MEAN_MOTION_DOT'), /^([ +-])\.(\d{8})$/);
    if (!ndot.ok)
        return ndot;
    const exponent = (token) => {
        const m = form(token, f1(token), /^([ +-])(\d{5})([+-])(\d)$/);
        return m.ok ? ok(Number(`${m.value[1] === '-' ? '-' : ''}0.${m.value[2]}e${m.value[3]}${m.value[4]}`)) : m;
    };
    const nddot = exponent('TLE1_MEAN_MOTION_DDOT');
    if (!nddot.ok)
        return nddot;
    const bstar = exponent('TLE1_BSTAR');
    if (!bstar.ok)
        return bstar;
    const ephemerisType = form('TLE1_EPHEMERIS_TYPE', f1('TLE1_EPHEMERIS_TYPE'), /^(\d)$/);
    if (!ephemerisType.ok)
        return ephemerisType;
    const setNumber = form('TLE1_ELEMENT_SET_NUMBER', f1('TLE1_ELEMENT_SET_NUMBER'), /^ *(\d*)$/);
    if (!setNumber.ok)
        return setNumber;
    const angle = (token, high, closed) => {
        const m = form(token, f2(token), /^ *(\d+\.\d{4})$/);
        if (!m.ok)
            return m;
        const v = Number(m.value[1]);
        return (closed ? v <= high : v < high) ? ok(v) : refuse(`field-range:${token}`, `${token} ${v} is outside [0, ${high}${closed ? ']' : ')'}`);
    };
    const inclination = angle('TLE2_INCLINATION', 180, true);
    if (!inclination.ok)
        return inclination;
    const raan = angle('TLE2_RA_OF_ASC_NODE', 360, false);
    if (!raan.ok)
        return raan;
    const eccentricity = form('TLE2_ECCENTRICITY', f2('TLE2_ECCENTRICITY'), /^(\d{7})$/);
    if (!eccentricity.ok)
        return eccentricity;
    const argp = angle('TLE2_ARG_OF_PERICENTER', 360, false);
    if (!argp.ok)
        return argp;
    const meanAnomaly = angle('TLE2_MEAN_ANOMALY', 360, false);
    if (!meanAnomaly.ok)
        return meanAnomaly;
    const meanMotion = form('TLE2_MEAN_MOTION', f2('TLE2_MEAN_MOTION'), /^ *(\d+\.\d{8})$/);
    if (!meanMotion.ok)
        return meanMotion;
    if (!(Number(meanMotion.value[1]) > 0))
        return refuse('field-range:TLE2_MEAN_MOTION', 'mean motion 0');
    const rev = form('TLE2_REV_AT_EPOCH', f2('TLE2_REV_AT_EPOCH'), /^ *(\d*)$/);
    if (!rev.ok)
        return rev;
    return ok({
        noradCatId, classification: classification.value[1], internationalDesignator, epochYear, epochDay: 1 + units / DAY_GRID,
        meanElements: {
            theory: TWO_LINE_THEORY, epoch: new Date(Math.round(epochMs)).toISOString(), meanMotion: Number(meanMotion.value[1]),
            eccentricity: Number(`0.${eccentricity.value[1]}`), inclination: inclination.value, raan: raan.value,
            argOfPericenter: argp.value, meanAnomaly: meanAnomaly.value, bstar: bstar.value,
            meanMotionDot: Number(`${ndot.value[1] === '-' ? '-' : ''}0.${ndot.value[2]}`), meanMotionDdot: nddot.value,
        },
        ephemerisType: Number(ephemerisType.value[1]),
        elementSetNumber: setNumber.value[1] === '' ? null : Number(setNumber.value[1]),
        revAtEpoch: rev.value[1] === '' ? null : Number(rev.value[1]),
    });
}
const FIXED = /^ *-?\d+\.\d+$/;
const EXPONENT = /^ *[+-]\d\.\d+E[+-]\d{2,}$/;
const INTEGER = /^ *[+-]?\d+$/;
/** Reads the element-file form back into its fragment; refuses a malformed line or field. */
export function readElementFile(text) {
    const lines = linesOf(text, 1);
    if (!lines.ok)
        return lines;
    const l = lines.value[0];
    const tokens = P7_LINES.ELF.map((name) => tokenOf('P7', name));
    const shape = layout(l, 1, tokens);
    if (!shape.ok)
        return shape;
    if (l !== l.trimEnd())
        return refuse('p7-line:1', 'line 1 ends in a blank');
    const number = (t) => {
        const value = columns(l, t);
        const re = t.format.startsWith('F') ? FIXED : t.format.startsWith('I') ? INTEGER : EXPONENT;
        if (value.length !== formatWidth(t.format) || !re.test(value))
            return refuse(`field-form:${t.token}`, `${t.token} is not ${t.format}: "${value}"`);
        return ok(Number(value));
    };
    const epochText = columns(l, tokenOf('P7', 'ELF_EPOCH'));
    const calendar = parseCalendar(epochText);
    if (!calendar.ok)
        return refuse('field-form:ELF_EPOCH', calendar.refusal.message);
    const epochMs = calendarToUtcMs(calendar.value);
    if (!epochMs.ok)
        return refuse('field-form:ELF_EPOCH', epochMs.refusal.message);
    const elements = [];
    for (const name of ELF_ELEMENT_TOKENS) {
        const v = number(tokenOf('P7', name));
        if (!v.ok)
            return v;
        elements.push(v.value);
    }
    if (Math.abs(elements[6]) !== 1)
        return refuse('field-range:ELF_RETROGRADE_FACTOR', `the retrograde factor ${elements[6]} is not +1 or -1`);
    const parameters = [];
    for (const [i, definition] of PARAMETERS.entries()) {
        const t = tokenOf('P7', ELF_PARAMETER_TOKENS[i]);
        if (columns(l, t).trim() === '')
            continue;
        const v = number(t);
        if (!v.ok)
            return v;
        parameters.push(Object.assign(Object.assign({}, definition), { value: v.value }));
    }
    return ok({ epochMs: epochMs.value, equinoctial: elements, parameters });
}
