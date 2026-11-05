import { ok, refuse, P2_LABEL, P2_ROW, endColumn, formatToken, formatWidth, placeFields, tokenOf, } from './tokens.js';
/** One line of a product: the named tokens' values at their columns; refuses a value that does not fit. */
export function formatLine(product, names, values) {
    const fields = [];
    for (const name of names) {
        const token = tokenOf(product, name);
        const text = formatToken(token, values[name]);
        if (text === null)
            return refuse(`field-width:${product}.${name}`, `${product} ${name} does not fit ${token.format}: ${String(values[name])}`);
        fields.push({ startColumn: token.startColumn, text });
    }
    const line = placeFields(fields);
    return line.ok ? ok(line.value.trimEnd()) : line;
}
/** A header line naming each token at its column: text left-justified at the start, numbers right-justified to the end. */
export function headerLine(columns) {
    const fields = columns.map((group) => {
        const name = group.map((x) => x.token).join('/');
        const text = group.every((x) => /^[AS]/.test(x.format));
        const end = Math.max(...group.map((x) => endColumn(x)));
        return { startColumn: text ? group[0].startColumn : end - name.length + 1, text: name };
    });
    const line = placeFields(fields);
    return line.ok ? ok(line.value.trimEnd()) : line;
}
/** Joins product lines: '\n' after every line. */
export function joinLines(lines) {
    return lines.map((l) => `${l}\n`).join('');
}
const STATE_TOKENS = P2_ROW.filter((x) => x !== 'LABEL');
/** The state tokens of one epoch (MSE, POSX..VELZ) as values keyed by token name. */
export function stateValues(row) {
    const [x, y, z, xd, yd, zd] = row.state;
    return { MSE: row.minutes, POSX: x, POSY: y, POSZ: z, VELX: xd, VELY: yd, VELZ: zd };
}
/** The state row of one epoch for a product that carries one (P1 without the label; P2 and P3 with it). */
export function stateLine(product, row, labelled) {
    const names = labelled ? P2_ROW : STATE_TOKENS;
    return formatLine(product, names, Object.assign(Object.assign({}, stateValues(row)), { LABEL: P2_LABEL }));
}
export function epochRows(record) {
    if (!record.epochs.length)
        return refuse('record-missing:STATE_DATA', 'the Record has no states');
    return ok(record.epochs.map((e) => ({ minutes: e.minutes, state: e.state })));
}
/** The P2 header line. */
export function stateRowHeader() {
    return headerLine(P2_ROW.map((name) => [tokenOf('P2', name)]));
}
/** P2 from groups of state rows: header, then each group's rows, a blank line between groups. */
export function writeStateRows(groups) {
    if (!groups.length || groups.some((g) => !g.length))
        return refuse('record-missing:STATE_DATA', 'a P2 group has no states');
    const header = stateRowHeader();
    if (!header.ok)
        return header;
    const lines = [header.value];
    for (const [g, group] of groups.entries()) {
        if (g > 0)
            lines.push('');
        for (const row of group) {
            const line = stateLine('P2', row, true);
            if (!line.ok)
                return line;
            lines.push(line.value);
        }
    }
    return ok(joinLines(lines));
}
/** P2 of one Record (one group) or of several Records (one group each, in order). */
export function writeP2(records) {
    const list = Array.isArray(records) ? records : [records];
    const groups = [];
    for (const record of list) {
        const rows = epochRows(record);
        if (!rows.ok)
            return rows;
        groups.push(rows.value);
    }
    return writeStateRows(groups);
}
/** The text of a token's field on a line (the columns it occupies). */
export function fieldText(line, token) {
    return line.slice(token.startColumn - 1, token.startColumn - 1 + formatWidth(token.format));
}
const NUMBER = /^ *[-+]?\d+(\.\d+)?(E[-+]\d+)?$/;
/** A numeric field read back; null when the columns do not hold a number. */
export function fieldNumber(line, token) {
    const text = fieldText(line, token);
    return NUMBER.test(text) ? Number(text) : null;
}
/** Reads P2 back into its groups of state rows; refuses a header or a row that is not the P2 layout. */
export function readP2(text) {
    if (!text.endsWith('\n'))
        return refuse('p2-empty', 'P2 text does not end with a line break');
    const lines = text.slice(0, -1).split('\n');
    const header = stateRowHeader();
    if (!header.ok)
        return header;
    if (lines[0] !== header.value)
        return refuse('p2-header', 'the first line is not the P2 header');
    const groups = [[]];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line === '') {
            if (!groups[groups.length - 1].length)
                return refuse(`p2-row:${i + 1}`, `line ${i + 1}: an empty group`);
            groups.push([]);
            continue;
        }
        if (fieldText(line, tokenOf('P2', 'LABEL')).trimEnd() !== P2_LABEL || line.length > endColumn(tokenOf('P2', 'VELZ'))) {
            return refuse(`p2-row:${i + 1}`, `line ${i + 1} is not a ${P2_LABEL} row`);
        }
        const v = STATE_TOKENS.map((name) => fieldNumber(line, tokenOf('P2', name)));
        if (v.some((x) => x === null))
            return refuse(`p2-row:${i + 1}`, `line ${i + 1} has a field that is not a number`);
        const n = v;
        groups[groups.length - 1].push({ minutes: n[0], state: [n[1], n[2], n[3], n[4], n[5], n[6]] });
    }
    if (!groups[groups.length - 1].length)
        return refuse('p2-empty', 'P2 has no rows');
    return ok({ groups });
}
