import { memMeasurementType } from '../ODR/main.js';
import { ok, refuse, P9_ROW, P9_SIGN_CONVENTION, calendarToUtcMs, endColumn, parseCalendar, tokenOf } from './tokens.js';
import { fieldNumber, fieldText, formatLine, joinLines } from './staterow.js';
/** The P9 rows of a Record; refused when the Record carries no residuals or a row lacks a printed value. */
export function residualRows(record) {
    if (!record.residuals.length)
        return refuse('record-missing:EDITED_OBSERVATIONS', 'the fit carries no per-input residuals (D6)');
    const rows = [];
    for (const [i, r] of record.residuals.entries()) {
        if (r.epochMs === null)
            return refuse(`record-missing:EDITED_OBSERVATIONS[${i}].EPOCH`, `input ${i} states no epoch`);
        if (r.code === null)
            return refuse(`record-missing:EDITED_OBSERVATIONS[${i}].PERTURBATION_MODEL_CODE`, `input ${i} states no perturbation-model code`);
        rows.push({
            id: r.id, epochMs: r.epochMs, type: r.type, typeName: r.typeName, observed: r.observed, computed: r.computed,
            residual: r.residual, weight: r.weight, accepted: r.accepted, code: r.code,
        });
    }
    return ok(rows);
}
/** P9 from rows: the sign-convention header, then one row per input. */
export function writeResidualRows(rows) {
    if (!rows.length)
        return refuse('record-missing:EDITED_OBSERVATIONS', 'the fit carries no per-input residuals (D6)');
    const lines = [P9_SIGN_CONVENTION];
    for (const r of rows) {
        const line = formatLine('P9', P9_ROW, {
            ID: r.id, EPOCH: r.epochMs, TYPE: r.typeName, OBSERVED: r.observed, COMPUTED: r.computed, RESIDUAL: r.residual,
            WEIGHT: r.weight, ACCEPTED: r.accepted, CODE: r.code,
        });
        if (!line.ok)
            return line;
        lines.push(line.value);
    }
    return ok(joinLines(lines));
}
/** P9 of a Record. */
export function writeP9(record) {
    const rows = residualRows(record);
    return rows.ok ? writeResidualRows(rows.value) : rows;
}
/** Reads P9 back into its rows; refuses a header, a row or a type that is not the P9 layout. */
export function readP9(text) {
    if (!text.endsWith('\n'))
        return refuse('p9-empty', 'P9 text does not end with a line break');
    const lines = text.slice(0, -1).split('\n');
    if (lines[0] !== P9_SIGN_CONVENTION)
        return refuse('p9-header', 'the first line is not the P9 sign convention');
    if (lines.length < 2)
        return refuse('p9-empty', 'P9 has no rows');
    const tok = (name) => tokenOf('P9', name);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const bad = (why) => refuse(`p9-row:${i + 1}`, `line ${i + 1}: ${why}`);
        if (line.length > endColumn(tok('CODE')) || line.length < tok('ACCEPTED').startColumn)
            return bad('not a P9 row');
        const calendar = parseCalendar(fieldText(line, tok('EPOCH')));
        if (!calendar.ok)
            return bad(calendar.refusal.message);
        const epochMs = calendarToUtcMs(calendar.value);
        if (!epochMs.ok)
            return bad(epochMs.refusal.message);
        const typeName = fieldText(line, tok('TYPE')).trimEnd();
        const type = memMeasurementType[typeName];
        if (typeof type !== 'number')
            return refuse(`p9-type:${i + 1}`, `line ${i + 1}: ${typeName} is not an observation type`);
        const numbers = ['OBSERVED', 'COMPUTED', 'RESIDUAL', 'WEIGHT'].map((name) => fieldNumber(line, tok(name)));
        if (numbers.some((x) => x === null))
            return bad('a value field is not a number');
        const flag = fieldText(line, tok('ACCEPTED'));
        if (flag !== 'Y' && flag !== 'N')
            return bad('the accepted flag is not Y or N');
        const n = numbers;
        rows.push({
            id: fieldText(line, tok('ID')).trimEnd(), epochMs: epochMs.value, type: type, typeName,
            observed: n[0], computed: n[1], residual: n[2], weight: n[3], accepted: flag === 'Y', code: fieldText(line, tok('CODE')).trimEnd(),
        });
    }
    return ok({ rows });
}
