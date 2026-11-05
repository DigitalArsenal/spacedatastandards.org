import assert from 'node:assert/strict';

import * as PROD from '../lib/js/PROD/main.js';

const { TOKENS, PRODUCTS, tokensOf, tokenOf, endColumn, formatWidth } = PROD;
const lineTokens = (product, tokenNames) => tokenNames.map((name) => tokenOf(product, name));
const assertLine = (product, tokenNames) => {
  const line = lineTokens(product, tokenNames);
  for (const [i, token] of line.entries()) {
    assert.ok(token.startColumn >= 1, `${product}.${token.token} starts at or after column 1`);
    assert.ok(Number.isInteger(formatWidth(token.format)), `${product}.${token.token} has a known format`);
    if (i > 0) assert.ok(token.startColumn > endColumn(line[i - 1]), `${product}.${token.token} starts after ${line[i - 1].token} ends`);
  }
};

describe('PROD tokens: the one place a column or a numeric format exists', () => {
  it('names a token once per product and gives every token an explicit format', () => {
    for (const product of PRODUCTS) {
      const names = tokensOf(product).map((t) => t.token);
      assert.equal(new Set(names).size, names.length, `${product} token names are unique`);
      assert.ok(names.length > 0, `${product} has tokens`);
    }
    for (const token of TOKENS) assert.doesNotThrow(() => formatWidth(token.format), `${token.product}.${token.token} ${token.format}`);
    assert.deepEqual(Object.keys(TOKENS[0]).sort(), ['format', 'kind', 'product', 'startColumn', 'token'], 'the table shape of baseline 2.3');
  });

  it('lays every line out without overlaps, columns ascending', () => {
    for (const line of PROD.P1_HEADER_LINES) assertLine('P1', line);
    for (const line of PROD.P1_EPOCH_BLOCK) assertLine('P1', line);
    assertLine('P2', PROD.P2_ROW);
    assertLine('P3', PROD.P1_EPOCH_BLOCK[3]);
    assertLine('P4', PROD.P1_EPOCH_BLOCK[3]);
    for (const line of Object.values(PROD.P7_LINES)) assertLine('P7', line);
    assert.ok(Object.values(PROD.P7_LINES).slice(0, 2).every((line) => endColumn(tokenOf('P7', line[line.length - 1])) === PROD.TLE_LINE_LENGTH), 'both two-line rows end at the line length');
    assertLine('P8', PROD.P8_HEADER_LINE);
    assertLine('P8', PROD.P8_EPOCH_ROW);
    assertLine('P9', PROD.P9_ROW);
  });

  it('gives P2 rows the state tokens of P1 line 1 and P3/P4 the sigma tokens of P1 line 4, so cross-product rows agree (6.3)', () => {
    const strip = (t) => [t.token, t.startColumn, t.format, t.kind];
    assert.deepEqual(lineTokens('P2', PROD.P2_ROW.slice(1)).map(strip), lineTokens('P1', PROD.P1_EPOCH_BLOCK[0]).map(strip));
    assert.deepEqual(lineTokens('P3', PROD.P2_ROW.slice(1)).map(strip), lineTokens('P1', PROD.P1_EPOCH_BLOCK[0]).map(strip));
    for (const product of ['P3', 'P4']) assert.deepEqual(lineTokens(product, PROD.P1_EPOCH_BLOCK[3]).map(strip), lineTokens('P1', PROD.P1_EPOCH_BLOCK[3]).map(strip));
    assert.equal(tokenOf('P1', 'MSE').format, PROD.MINUTES_FORMAT);
    assert.ok(PROD.P1_EPOCH_BLOCK[3].every((name) => tokenOf('P1', name).format === PROD.COVARIANCE_FORMAT));
    assert.equal(tokenOf('P3', 'COV').format, PROD.COVARIANCE_FORMAT);
    assert.deepEqual([PROD.P3_ROW_INDENT, PROD.P3_VALUE_SEPARATOR], ['\t', ' ']);
  });

  it('lists the P5 tags in the baseline order and every continuous one at round-trip precision', () => {
    const tags = tokensOf('P5').map((t) => t.token);
    const order = ['EPOCH', 'REV', 'J2K_POS_X', 'J2K_VEL_Z', 'ECI_POS_X', 'EFG_VEL_Z', 'GEOPOTENTIAL', 'DRAG_MODEL', 'LUNISOLAR', 'SRP', 'TIDES', 'IN_TRACK_THRUST', 'B', 'BDOT', 'SRP_COEFF', 'EDR',
      'THRUST_ACCEL', 'CM_OFFSET', 'OUTGASSING', 'F10_OBS', 'F10_AVG', 'AP_AVG', 'TAI_UTC', 'UT1_UTC', 'UT1_RATE', 'POLAR_X', 'POLAR_Y', 'NUTATION', 'LEAP_SECOND', 'INTEGRATOR_MODE', 'COORD_SYS',
      'PARTIALS', 'STEP_MODE', 'INITIAL_STEP', 'ERROR_CONTROL', 'SIGMA_U', 'SIGMA_WD', 'ELSET', 'COV_SIZE', 'COV_PARAMETERS', 'WTD_RMS', 'COV'];
    assert.deepEqual(order.map((n) => tags.indexOf(n)), [...order.map((n) => tags.indexOf(n))].sort((a, b) => a - b), 'the baseline 3.5 order');
    for (const t of tokensOf('P5')) if (t.format.startsWith('%')) assert.equal(t.format, PROD.TAG_VALUE_FORMAT, `${t.token} prints at round-trip precision`);
    assert.deepEqual(PROD.P5_COVARIANCE_SECTION, ['ELSET', 'COV_SIZE', 'COV_PARAMETERS', 'WTD_RMS', 'COV']);
  });

  it('prints numbers explicitly: fixed, exponent, integer, text, flag; a value that does not fit is refused as null', () => {
    assert.equal(PROD.formatFixed(12.5, 12, 6), '   12.500000');
    assert.equal(PROD.formatFixed(-0.0000004, 12, 6), '   -0.000000');
    assert.equal(PROD.formatFixed(1e7, 12, 6), null, 'F12.6 cannot hold 1e7');
    assert.equal(PROD.formatExponent(12345.678, 14, 6), ' +1.234568E+04');
    assert.equal(PROD.formatExponent(0, 14, 6), ' +0.000000E+00');
    assert.equal(PROD.formatExponent(-0, 14, 6), ' +0.000000E+00');
    assert.equal(PROD.formatExponent(-1e-7, 14, 6), ' -1.000000E-07');
    assert.equal(PROD.formatExponent(1e100, 14, 6), '+1.000000E+100');
    assert.equal(PROD.formatExponent(1e-123, 14, 6), '+1.000000E-123');
    assert.equal(PROD.formatExponent(NaN, 14, 6), null);
    assert.equal(PROD.formatExponent(0.1 + 0.2, 0, 15), '+3.000000000000000E-01', 'a tag value at round-trip precision');
    assert.equal(PROD.formatInteger(48170, 8), '   48170');
    assert.equal(PROD.formatInteger(1.5, 8), null);
    assert.equal(PROD.formatText('NLEXYZ', 6), 'NLEXYZ');
    assert.equal(PROD.formatText('TOO LONG', 6), null);
    assert.equal(PROD.formatToken(tokenOf('P9', 'ACCEPTED'), true), 'Y');
    assert.equal(PROD.formatToken(tokenOf('P1', 'MSE'), 90.25), '   90.250000');
    assert.equal(PROD.formatToken(tokenOf('P1', 'MSE'), 'text'), null);
    const row = PROD.placeFields([{ startColumn: tokenOf('P2', 'LABEL').startColumn, text: PROD.P2_LABEL }, { startColumn: tokenOf('P2', 'MSE').startColumn, text: PROD.formatFixed(1.5, 12, 6) }]);
    assert.ok(row.ok);
    assert.equal(row.value.indexOf(PROD.P2_LABEL), tokenOf('P2', 'LABEL').startColumn - 1);
    assert.equal(row.value.length, endColumn(tokenOf('P2', 'MSE')));
    const overlap = PROD.placeFields([{ startColumn: 1, text: 'ABCDEF' }, { startColumn: 3, text: 'X' }]);
    assert.equal(overlap.ok ? '' : overlap.refusal.code, 'field-overlap');
  });

  it('freezes the calendar form YY/DDD HHMM SS.SSS, the year pivot, the leap day and day 366 (D7)', () => {
    assert.equal(PROD.YEAR_PIVOT, 57);
    assert.deepEqual([PROD.fullYear(57), PROD.fullYear(56), PROD.fullYear(99), PROD.fullYear(0)], [1957, 2056, 1999, 2000]);
    assert.equal(PROD.formatCalendar(Date.UTC(2024, 1, 29, 12, 34, 56, 789)), '24/060 1234 56.789');
    assert.equal(PROD.formatCalendar(Date.UTC(2024, 11, 31, 23, 59, 59, 999)), '24/366 2359 59.999');
    assert.equal(PROD.formatCalendar(Date.UTC(2023, 11, 31, 0, 0, 0, 0)), '23/365 0000 00.000');
    assert.equal(PROD.formatCalendar(Date.UTC(1957, 0, 1)), '57/001 0000 00.000');
    assert.equal(PROD.formatCalendar(Date.UTC(2056, 0, 1)), '56/001 0000 00.000');
    assert.equal(PROD.formatCalendar(Date.UTC(2057, 0, 1)), null, 'past the pivot window');
    assert.equal(PROD.formatCalendar(Date.UTC(1956, 11, 31)), null, 'before the pivot window');
    assert.deepEqual(PROD.monthDay(2024, 60), { month: 2, day: 29 });
    assert.deepEqual(PROD.monthDay(2023, 60), { month: 3, day: 1 });
    assert.deepEqual(PROD.monthDay(2024, 366), { month: 12, day: 31 });
    assert.equal(PROD.monthDay(2023, 366), null);
    const leapDay = PROD.parseCalendar('24/060 1234 56.789');
    assert.ok(leapDay.ok);
    assert.deepEqual(leapDay.value, { year: 2024, dayOfYear: 60, hour: 12, minute: 34, second: 56.789 });
    assert.equal(PROD.calendarToUtcMs(leapDay.value).value, Date.UTC(2024, 1, 29, 12, 34, 56, 789));
    assert.equal(PROD.parseCalendar('23/366 0000 00.000').refusal.code, 'calendar-day-366');
    assert.equal(PROD.parseCalendar('23/000 0000 00.000').refusal.code, 'calendar-day-of-year');
    assert.equal(PROD.parseCalendar('23/367 0000 00.000').refusal.code, 'calendar-day-of-year');
    assert.equal(PROD.parseCalendar('23/001 2400 00.000').refusal.code, 'calendar-time-range');
    assert.equal(PROD.parseCalendar('2023/001 0000 00.000').refusal.code, 'calendar-form');
    const leapSecond = PROD.parseCalendar('24/366 2359 60.500');
    assert.ok(leapSecond.ok, 'a leap second parses');
    assert.equal(PROD.calendarToUtcMs(leapSecond.value).refusal.code, 'calendar-leap-second');
    for (const ms of [Date.UTC(1957, 0, 1), Date.UTC(1999, 11, 31, 23, 59, 59, 999), Date.UTC(2000, 0, 1), Date.UTC(2026, 10, 1, 7, 8, 9, 10), Date.UTC(2056, 11, 31, 23, 59, 59, 999)]) {
      const text = PROD.formatCalendar(ms);
      assert.equal(text.length, formatWidth(PROD.CALENDAR_FORMAT));
      assert.equal(PROD.calendarToUtcMs(PROD.parseCalendar(text).value).value, ms, `${text} round-trips`);
    }
  });
});
