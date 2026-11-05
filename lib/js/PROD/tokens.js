// Token tables of the fixed-format products P1-P9: the one place a column position or a numeric format
// exists (requirement baseline, section 2.3). Every writer and reader of lib/ts/PROD reads these tables;
// no test and no writer carries a literal column.
//
// Table shape: { product, token, startColumn, format, kind }. startColumn counts from 1. A format is
//   Fw.d    fixed point, w characters, d decimals, right-justified, '-' for a negative value;
//   %+w.dE  exponent form with an explicit sign, d decimals and a two-digit (or wider) signed exponent,
//           right-justified in w characters; %+.dE the same with no fixed width (a tag value);
//   Iw      integer, right-justified in w characters;
//   Aw      text, left-justified in w characters, refused when longer;
//   L1      a flag, Y or N;
//   S18     the calendar form YY/DDD HHMM SS.SSS.
// Layout decisions this table makes where the baseline leaves one open (recorded for docs/products):
//   P1/P2 state values: positions F15.8 (km), velocities F16.9 (km/s); angles F15.8 (deg); height F15.6;
//     mean motion F15.9; eccentricity F15.10; REV I8; sigmas %+14.6E; header and control lines A24 key
//     at column 1 and the value at column 25; the trailer is the word END.
//   P3 triangle rows: one leading tab, then %+14.6E values separated by one blank; the sigma row uses the
//     P1 line-4 sigma columns, so P3's sigma row equals P4's.
//   P5 tags: KEY = value lines; every continuous value %+.15E (reader/writer round trip to 1e-12).
//   P7 two-line form: the public two-line element columns, carried as text fields (the encodings belong
//     to elset.ts); element-file form: EPOCH S18, a F15.6, af/ag/chi/psi F15.10, L F15.8, fr I3, then
//     B, BDOT, AGOM, T and OUTGASSING %+14.6E, 16 columns apart.
//   P8: header EPOCH S18 and WTD_RMS; covariance rows as P3; per epoch MSE F12.6 then six %+14.6E
//     sensitivity columns 16 apart from column 32.
//   P9: ID A24, EPOCH S18, TYPE A12, OBSERVED/COMPUTED/RESIDUAL/WEIGHT %+14.6E, ACCEPTED L1, CODE A8.
//   P6 (binary) has no text tokens: its header, framing and endianness are frozen in covmsg-binary.ts (D1).
// Calendar form (D7, frozen here): YY/DDD HHMM SS.SSS; two-digit years 57..99 are 1957..1999 and 00..56
// are 2000..2056 (YEAR_PIVOT = 57, the two-line element set's rule); DDD counts from 001; day 060 of a leap
// year is February 29 and day 366 exists only in a leap year; seconds 00.000..59.999, a leap second
// (60.xxx) is refused. All numeric printing is explicit (toFixed/toExponential are specified exactly by
// ECMAScript), so the same value prints the same bytes on every platform.
export const ok = (value) => ({ ok: true, value });
export const refuse = (code, message) => ({ ok: false, refusal: { code, message } });
export const MINUTES_FORMAT = 'F12.6';
export const CALENDAR_FORMAT = 'S18';
export const COVARIANCE_FORMAT = '%+14.6E';
export const TAG_VALUE_FORMAT = '%+.15E';
export const P3_ROW_INDENT = '\t';
export const P3_VALUE_SEPARATOR = ' ';
export const P3_TITLE = 'UVW COVARIANCE MATRIX';
export const P3_TRIANGLE_TITLE = 'LOWER TRIANG 6x6 by row:';
export const P2_LABEL = 'NLEXYZ';
export const P1_TRAILER = 'END';
export const P9_SIGN_CONVENTION = 'RESIDUAL = OBSERVED - COMPUTED';
const t = (product, token, startColumn, format, kind) => ({ product, token, startColumn, format, kind });
// P1 and P2 share the state row (baseline 3.1.1 line 1 and 3.2): P2 row i equals P1 epoch i's state tokens.
const STATE_ROW = (product) => [
    t(product, 'MSE', 16, MINUTES_FORMAT, 'MINUTES'),
    t(product, 'POSX', 32, 'F15.8', 'KM'),
    t(product, 'POSY', 50, 'F15.8', 'KM'),
    t(product, 'POSZ', 65, 'F15.8', 'KM'),
    t(product, 'VELX', 81, 'F16.9', 'KM_S'),
    t(product, 'VELY', 97, 'F16.9', 'KM_S'),
    t(product, 'VELZ', 113, 'F16.9', 'KM_S'),
];
// The sigma row (P1 line 4, P3's sigma row, every P4 row): UVW sigmas, km then km/s.
const SIGMA_ROW = (product) => [
    t(product, 'S1', 21, COVARIANCE_FORMAT, 'SIGMA_KM'),
    t(product, 'S2', 37, COVARIANCE_FORMAT, 'SIGMA_KM'),
    t(product, 'S3', 53, COVARIANCE_FORMAT, 'SIGMA_KM'),
    t(product, 'S4', 69, COVARIANCE_FORMAT, 'SIGMA_KM_S'),
    t(product, 'S5', 85, COVARIANCE_FORMAT, 'SIGMA_KM_S'),
    t(product, 'S6', 101, COVARIANCE_FORMAT, 'SIGMA_KM_S'),
];
const HEADER_LINE = (product, token, format, kind) => [
    t(product, `${token}_KEY`, 1, 'A24', 'TEXT'),
    t(product, token, 25, format, kind),
];
const P1 = [
    t('P1', 'TITLE', 1, 'A80', 'TEXT'),
    t('P1', 'VERSION', 1, 'A80', 'TEXT'),
    ...HEADER_LINE('P1', 'GRAVITY_PATH', 'A56', 'TEXT'),
    ...HEADER_LINE('P1', 'BUFFER_SIZE', 'I8', 'INTEGER'),
    ...HEADER_LINE('P1', 'RUN_MODE', 'A16', 'TEXT'),
    ...HEADER_LINE('P1', 'COMPATIBILITY_FLAGS', 'A16', 'TEXT'),
    ...HEADER_LINE('P1', 'OUTPUT_COORDINATE_SYSTEM', 'A16', 'TEXT'),
    ...HEADER_LINE('P1', 'PARTIALS_FLAG', 'L1', 'FLAG'),
    ...HEADER_LINE('P1', 'START', CALENDAR_FORMAT, 'CALENDAR'),
    ...HEADER_LINE('P1', 'STOP', CALENDAR_FORMAT, 'CALENDAR'),
    ...HEADER_LINE('P1', 'INTERVAL', MINUTES_FORMAT, 'MINUTES'),
    t('P1', 'OBJECT', 1, 'A80', 'TEXT'),
    ...STATE_ROW('P1'),
    t('P1', 'DATE', 2, CALENDAR_FORMAT, 'CALENDAR'),
    t('P1', 'LAT', 21, 'F15.8', 'DEG'),
    t('P1', 'LON', 37, 'F15.8', 'DEG'),
    t('P1', 'HEIGHT', 53, 'F15.6', 'KM'),
    t('P1', 'REV', 69, 'I8', 'INTEGER'),
    t('P1', 'N', 21, 'F15.9', 'REV_PER_DAY'),
    t('P1', 'E', 37, 'F15.10', 'UNITLESS'),
    t('P1', 'I', 53, 'F15.8', 'DEG'),
    t('P1', 'NODE', 69, 'F15.8', 'DEG'),
    t('P1', 'OMEGA', 85, 'F15.8', 'DEG'),
    t('P1', 'M', 101, 'F15.8', 'DEG'),
    ...SIGMA_ROW('P1'),
    t('P1', 'TRAILER', 1, 'A3', 'TEXT'),
];
// The lines of a P1 file and of its per-epoch block, by token name.
export const P1_HEADER_LINES = [
    ['TITLE'], ['VERSION'],
    ['GRAVITY_PATH_KEY', 'GRAVITY_PATH'], ['BUFFER_SIZE_KEY', 'BUFFER_SIZE'], ['RUN_MODE_KEY', 'RUN_MODE'],
    ['COMPATIBILITY_FLAGS_KEY', 'COMPATIBILITY_FLAGS'], ['OUTPUT_COORDINATE_SYSTEM_KEY', 'OUTPUT_COORDINATE_SYSTEM'],
    ['PARTIALS_FLAG_KEY', 'PARTIALS_FLAG'],
    ['START_KEY', 'START'], ['STOP_KEY', 'STOP'], ['INTERVAL_KEY', 'INTERVAL'],
    ['OBJECT'],
];
export const P1_EPOCH_BLOCK = [
    ['MSE', 'POSX', 'POSY', 'POSZ', 'VELX', 'VELY', 'VELZ'],
    ['DATE', 'LAT', 'LON', 'HEIGHT', 'REV'],
    ['N', 'E', 'I', 'NODE', 'OMEGA', 'M'],
    ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
];
const P2 = [t('P2', 'LABEL', 3, 'A6', 'TEXT'), ...STATE_ROW('P2')];
export const P2_ROW = ['LABEL', 'MSE', 'POSX', 'POSY', 'POSZ', 'VELX', 'VELY', 'VELZ'];
const P3 = [
    t('P3', 'VERSION', 1, 'A80', 'TEXT'),
    t('P3', 'LABEL', 3, 'A6', 'TEXT'),
    ...STATE_ROW('P3'),
    t('P3', 'COV', 2, COVARIANCE_FORMAT, 'COVARIANCE'),
    ...SIGMA_ROW('P3'),
];
export const P3_LINES = ['VERSION', 'STATE_ROW', 'TITLE', 'TRIANGLE_TITLE', 'ROW1', 'ROW2', 'ROW3', 'ROW4', 'ROW5', 'ROW6', 'SIGMA_ROW'];
const P4 = [t('P4', 'VERSION', 1, 'A80', 'TEXT'), ...SIGMA_ROW('P4')];
// P5 header tags, in the order of baseline 3.5, then the covariance section.
const tag = (token, format, kind) => t('P5', token, 1, format, kind);
const triple = (name, kind) => ['X', 'Y', 'Z'].map((c) => tag(`${name}_${c}`, TAG_VALUE_FORMAT, kind));
const P5 = [
    tag('EPOCH', CALENDAR_FORMAT, 'CALENDAR'), tag('REV', 'I8', 'INTEGER'),
    ...triple('J2K_POS', 'KM'), ...triple('J2K_VEL', 'KM_S'),
    ...triple('ECI_POS', 'KM'), ...triple('ECI_VEL', 'KM_S'),
    ...triple('EFG_POS', 'KM'), ...triple('EFG_VEL', 'KM_S'),
    tag('GEOPOTENTIAL', 'A16', 'TEXT'), tag('DRAG_MODEL', 'A16', 'TEXT'),
    tag('LUNISOLAR', 'L1', 'FLAG'), tag('SRP', 'L1', 'FLAG'), tag('TIDES', 'L1', 'FLAG'), tag('IN_TRACK_THRUST', 'L1', 'FLAG'),
    tag('B', TAG_VALUE_FORMAT, 'M2_KG'), tag('BDOT', TAG_VALUE_FORMAT, 'M2_KG_S'), tag('SRP_COEFF', TAG_VALUE_FORMAT, 'M2_KG'),
    tag('EDR', TAG_VALUE_FORMAT, 'W_KG'), tag('THRUST_ACCEL', TAG_VALUE_FORMAT, 'M_S2'), tag('CM_OFFSET', TAG_VALUE_FORMAT, 'KM'),
    tag('F10_OBS', TAG_VALUE_FORMAT, 'UNITLESS'), tag('F10_AVG', TAG_VALUE_FORMAT, 'UNITLESS'), tag('AP_AVG', TAG_VALUE_FORMAT, 'UNITLESS'),
    tag('TAI_UTC', TAG_VALUE_FORMAT, 'SECONDS'), tag('UT1_UTC', TAG_VALUE_FORMAT, 'SECONDS'), tag('UT1_RATE', TAG_VALUE_FORMAT, 'S_PER_DAY'),
    tag('POLAR_X', TAG_VALUE_FORMAT, 'ARCSEC'), tag('POLAR_Y', TAG_VALUE_FORMAT, 'ARCSEC'),
    tag('NUTATION', 'A16', 'TEXT'), tag('LEAP_SECOND', 'I4', 'INTEGER'),
    tag('INTEGRATOR_MODE', 'A16', 'TEXT'), tag('COORD_SYS', 'A16', 'TEXT'), tag('PARTIALS', 'A16', 'TEXT'), tag('STEP_MODE', 'A16', 'TEXT'),
    tag('INITIAL_STEP', TAG_VALUE_FORMAT, 'SECONDS'), tag('ERROR_CONTROL', TAG_VALUE_FORMAT, 'UNITLESS'),
    tag('SIGMA_U', TAG_VALUE_FORMAT, 'SIGMA_KM'), tag('SIGMA_V', TAG_VALUE_FORMAT, 'SIGMA_KM'), tag('SIGMA_W', TAG_VALUE_FORMAT, 'SIGMA_KM'),
    tag('SIGMA_UD', TAG_VALUE_FORMAT, 'SIGMA_KM_S'), tag('SIGMA_VD', TAG_VALUE_FORMAT, 'SIGMA_KM_S'), tag('SIGMA_WD', TAG_VALUE_FORMAT, 'SIGMA_KM_S'),
    tag('ELSET', 'A16', 'TEXT'), tag('COV_SIZE', 'I3', 'INTEGER'), tag('WTD_RMS', TAG_VALUE_FORMAT, 'UNITLESS'),
    tag('COV', TAG_VALUE_FORMAT, 'COVARIANCE'),
];
export const P5_TAG_SEPARATOR = ' = ';
export const P5_COVARIANCE_SECTION = ['ELSET', 'COV_SIZE', 'WTD_RMS', 'COV'];
// P7: the two-line form's public columns (text fields; elset.ts owns the encodings) and the element-file form.
const P7 = [
    t('P7', 'TLE1_LINE_NUMBER', 1, 'A1', 'TEXT'), t('P7', 'TLE1_CATALOG_NUMBER', 3, 'A5', 'TEXT'), t('P7', 'TLE1_CLASSIFICATION', 8, 'A1', 'TEXT'),
    t('P7', 'TLE1_INTERNATIONAL_DESIGNATOR', 10, 'A8', 'TEXT'), t('P7', 'TLE1_EPOCH_YEAR', 19, 'A2', 'TEXT'), t('P7', 'TLE1_EPOCH_DAY', 21, 'A12', 'TEXT'),
    t('P7', 'TLE1_MEAN_MOTION_DOT', 34, 'A10', 'TEXT'), t('P7', 'TLE1_MEAN_MOTION_DDOT', 45, 'A8', 'TEXT'), t('P7', 'TLE1_BSTAR', 54, 'A8', 'TEXT'),
    t('P7', 'TLE1_EPHEMERIS_TYPE', 63, 'A1', 'TEXT'), t('P7', 'TLE1_ELEMENT_SET_NUMBER', 65, 'A4', 'TEXT'), t('P7', 'TLE1_CHECKSUM', 69, 'A1', 'TEXT'),
    t('P7', 'TLE2_LINE_NUMBER', 1, 'A1', 'TEXT'), t('P7', 'TLE2_CATALOG_NUMBER', 3, 'A5', 'TEXT'), t('P7', 'TLE2_INCLINATION', 9, 'A8', 'TEXT'),
    t('P7', 'TLE2_RA_OF_ASC_NODE', 18, 'A8', 'TEXT'), t('P7', 'TLE2_ECCENTRICITY', 27, 'A7', 'TEXT'), t('P7', 'TLE2_ARG_OF_PERICENTER', 35, 'A8', 'TEXT'),
    t('P7', 'TLE2_MEAN_ANOMALY', 44, 'A8', 'TEXT'), t('P7', 'TLE2_MEAN_MOTION', 53, 'A11', 'TEXT'), t('P7', 'TLE2_REV_AT_EPOCH', 64, 'A5', 'TEXT'),
    t('P7', 'TLE2_CHECKSUM', 69, 'A1', 'TEXT'),
    t('P7', 'ELF_EPOCH', 2, CALENDAR_FORMAT, 'CALENDAR'), t('P7', 'ELF_SEMI_MAJOR_AXIS', 21, 'F15.6', 'KM'),
    t('P7', 'ELF_AF', 37, 'F15.10', 'UNITLESS'), t('P7', 'ELF_AG', 53, 'F15.10', 'UNITLESS'), t('P7', 'ELF_MEAN_LONGITUDE', 69, 'F15.8', 'DEG'),
    t('P7', 'ELF_CHI', 85, 'F15.10', 'UNITLESS'), t('P7', 'ELF_PSI', 101, 'F15.10', 'UNITLESS'), t('P7', 'ELF_RETROGRADE_FACTOR', 117, 'I3', 'INTEGER'),
    t('P7', 'ELF_B', 121, COVARIANCE_FORMAT, 'M2_KG'), t('P7', 'ELF_BDOT', 137, COVARIANCE_FORMAT, 'M2_KG_S'), t('P7', 'ELF_AGOM', 153, COVARIANCE_FORMAT, 'M2_KG'),
    t('P7', 'ELF_T', 169, COVARIANCE_FORMAT, 'M_S2'), t('P7', 'ELF_OUTGASSING', 185, COVARIANCE_FORMAT, 'KM_S2'),
];
export const P7_LINES = {
    TLE1: P7.filter((x) => x.token.startsWith('TLE1_')).map((x) => x.token),
    TLE2: P7.filter((x) => x.token.startsWith('TLE2_')).map((x) => x.token),
    ELF: P7.filter((x) => x.token.startsWith('ELF_')).map((x) => x.token),
};
export const TLE_LINE_LENGTH = 69;
const P8 = [
    t('P8', 'EPOCH', 2, CALENDAR_FORMAT, 'CALENDAR'), t('P8', 'WTD_RMS', 21, COVARIANCE_FORMAT, 'UNITLESS'),
    t('P8', 'COV', 2, COVARIANCE_FORMAT, 'COVARIANCE'),
    t('P8', 'MSE', 16, MINUTES_FORMAT, 'MINUTES'),
    ...[32, 48, 64, 80, 96, 112].map((c, i) => t('P8', `SENS${i + 1}`, c, COVARIANCE_FORMAT, 'SENSITIVITY')),
];
export const P8_HEADER_LINE = ['EPOCH', 'WTD_RMS'];
export const P8_EPOCH_ROW = ['MSE', 'SENS1', 'SENS2', 'SENS3', 'SENS4', 'SENS5', 'SENS6'];
const P9 = [
    t('P9', 'ID', 2, 'A24', 'TEXT'), t('P9', 'EPOCH', 27, CALENDAR_FORMAT, 'CALENDAR'), t('P9', 'TYPE', 46, 'A12', 'TEXT'),
    t('P9', 'OBSERVED', 59, COVARIANCE_FORMAT, 'MEASUREMENT'), t('P9', 'COMPUTED', 74, COVARIANCE_FORMAT, 'MEASUREMENT'),
    t('P9', 'RESIDUAL', 89, COVARIANCE_FORMAT, 'MEASUREMENT'), t('P9', 'WEIGHT', 104, COVARIANCE_FORMAT, 'UNITLESS'),
    t('P9', 'ACCEPTED', 119, 'L1', 'FLAG'), t('P9', 'CODE', 121, 'A8', 'TEXT'),
];
export const P9_ROW = P9.map((x) => x.token);
export const TOKENS = [...P1, ...P2, ...P3, ...P4, ...P5, ...P7, ...P8, ...P9];
export const PRODUCTS = ['P1', 'P2', 'P3', 'P4', 'P5', 'P7', 'P8', 'P9'];
export function tokensOf(product) {
    return TOKENS.filter((x) => x.product === product);
}
export function tokenOf(product, token) {
    const hit = TOKENS.find((x) => x.product === product && x.token === token);
    if (!hit)
        throw new Error(`tokens: ${product} has no token ${token}`);
    return hit;
}
/** The width a format occupies, 0 for a free-width tag value. */
export function formatWidth(format) {
    let m = /^F(\d+)\.(\d+)$/.exec(format);
    if (m)
        return Number(m[1]);
    m = /^%\+(\d*)\.(\d+)E$/.exec(format);
    if (m)
        return m[1] === '' ? 0 : Number(m[1]);
    m = /^[IA](\d+)$/.exec(format);
    if (m)
        return Number(m[1]);
    if (format === 'L1')
        return 1;
    if (format === 'S18')
        return 18;
    throw new Error(`tokens: unknown format ${format}`);
}
/** The last column a token occupies. */
export function endColumn(token) {
    return token.startColumn + Math.max(formatWidth(token.format), 1) - 1;
}
// ---- numeric formatting -----------------------------------------------------------------------------------
function pad(text, width) {
    if (width === 0)
        return text;
    if (text.length > width)
        return null;
    return ' '.repeat(width - text.length) + text;
}
/** Fw.d: fixed point; null when the value does not fit or is not finite. */
export function formatFixed(value, width, decimals) {
    if (!Number.isFinite(value) || Math.abs(value) >= 1e21)
        return null;
    return pad(value.toFixed(decimals), width);
}
/** %+w.dE: an explicit sign, d decimals, E, a signed exponent of at least two digits; null when it does not fit. */
export function formatExponent(value, width, decimals) {
    if (!Number.isFinite(value))
        return null;
    const raw = (value === 0 ? 0 : value).toExponential(decimals); // -0 prints as +0.000000E+00
    const m = /^(-?)(\d\.\d+|\d)e([+-])(\d+)$/.exec(raw);
    if (!m)
        return null;
    const exponent = m[4].length < 2 ? `0${m[4]}` : m[4];
    return pad(`${m[1] === '-' ? '-' : '+'}${m[2]}E${m[3]}${exponent}`, width);
}
/** Iw: an integer; null for a non-integer or one that does not fit. */
export function formatInteger(value, width) {
    if (!Number.isInteger(value))
        return null;
    return pad(String(value), width);
}
/** Aw: text, left-justified; null when longer than the field. */
export function formatText(value, width) {
    if (value.length > width)
        return null;
    return value + ' '.repeat(width - value.length);
}
/** Formats a value for a token; null means the value does not fit the field (the writer refuses). */
export function formatToken(token, value) {
    const f = token.format;
    let m = /^F(\d+)\.(\d+)$/.exec(f);
    if (m)
        return typeof value === 'number' ? formatFixed(value, Number(m[1]), Number(m[2])) : null;
    m = /^%\+(\d*)\.(\d+)E$/.exec(f);
    if (m)
        return typeof value === 'number' ? formatExponent(value, m[1] === '' ? 0 : Number(m[1]), Number(m[2])) : null;
    m = /^I(\d+)$/.exec(f);
    if (m)
        return typeof value === 'number' ? formatInteger(value, Number(m[1])) : null;
    m = /^A(\d+)$/.exec(f);
    if (m)
        return typeof value === 'string' ? formatText(value, Number(m[1])) : null;
    if (f === 'L1')
        return typeof value === 'boolean' ? (value ? 'Y' : 'N') : null;
    if (f === 'S18')
        return typeof value === 'number' ? formatCalendar(value) : null;
    throw new Error(`tokens: unknown format ${f}`);
}
/** Places formatted fields on one line at their start columns (1-based); refuses an overlap. */
export function placeFields(fields) {
    let line = '';
    const sorted = [...fields].sort((a, b) => a.startColumn - b.startColumn);
    for (const field of sorted) {
        const at = field.startColumn - 1;
        if (at < line.length)
            return refuse('field-overlap', `a field at column ${field.startColumn} overlaps the one before it`);
        line = line + ' '.repeat(at - line.length) + field.text;
    }
    return ok(line);
}
// ---- the calendar form (D7) ---------------------------------------------------------------------------------
export const YEAR_PIVOT = 57;
export const CALENDAR_FIRST_YEAR = 1957;
export const CALENDAR_LAST_YEAR = 2056;
export function fullYear(twoDigitYear) {
    return twoDigitYear >= YEAR_PIVOT ? 1900 + twoDigitYear : 2000 + twoDigitYear;
}
export function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
export function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
/** YY/DDD HHMM SS.SSS for a UTC instant in milliseconds; null outside 1957..2056. */
export function formatCalendar(utcMs) {
    if (!Number.isFinite(utcMs))
        return null;
    const ms = Math.round(utcMs);
    const d = new Date(ms);
    const year = d.getUTCFullYear();
    if (year < CALENDAR_FIRST_YEAR || year > CALENDAR_LAST_YEAR)
        return null;
    const dayOfYear = Math.floor((ms - Date.UTC(year, 0, 1)) / 86400000) + 1;
    const two = (n) => String(n).padStart(2, '0');
    const seconds = d.getUTCSeconds() + d.getUTCMilliseconds() / 1000;
    return `${two(year % 100)}/${String(dayOfYear).padStart(3, '0')} ${two(d.getUTCHours())}${two(d.getUTCMinutes())} ${seconds.toFixed(3).padStart(6, '0')}`;
}
/** Parses YY/DDD HHMM SS.SSS; refuses a malformed text, a day outside the year or an out-of-range time. */
export function parseCalendar(text) {
    const m = /^(\d{2})\/(\d{3}) (\d{2})(\d{2}) (\d{2}\.\d{3})$/.exec(text);
    if (!m)
        return refuse('calendar-form', `not YY/DDD HHMM SS.SSS: ${JSON.stringify(text)}`);
    const year = fullYear(Number(m[1]));
    const dayOfYear = Number(m[2]);
    if (dayOfYear < 1 || dayOfYear > daysInYear(year)) {
        return refuse(dayOfYear === 366 ? 'calendar-day-366' : 'calendar-day-of-year', `day ${m[2]} does not exist in ${year}`);
    }
    const hour = Number(m[3]), minute = Number(m[4]), second = Number(m[5]);
    if (hour > 23 || minute > 59 || second >= 61)
        return refuse('calendar-time-range', `time ${m[3]}${m[4]} ${m[5]} is out of range`);
    return ok({ year, dayOfYear, hour, minute, second });
}
/** The UTC instant of a parsed calendar form, milliseconds; refuses a leap second (60.xxx), which UTC-as-milliseconds cannot hold. */
export function calendarToUtcMs(c) {
    if (c.second >= 60)
        return refuse('calendar-leap-second', `${c.year}/${c.dayOfYear} ${c.hour}:${c.minute}:${c.second.toFixed(3)} is a leap second`);
    return ok(Date.UTC(c.year, 0, 1) + (c.dayOfYear - 1) * 86400000 + c.hour * 3600000 + c.minute * 60000 + Math.round(c.second * 1000));
}
/** Month (1-12) and day of month of a day of the year; null when the day does not exist in the year. */
export function monthDay(year, dayOfYear) {
    if (dayOfYear < 1 || dayOfYear > daysInYear(year))
        return null;
    const d = new Date(Date.UTC(year, 0, 1) + (dayOfYear - 1) * 86400000);
    return { month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}
