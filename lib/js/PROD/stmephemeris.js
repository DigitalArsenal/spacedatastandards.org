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
// Fragment. StmEphemerisText is the Record fragment P8 prints (StmEphemeris without the equinoctial set and the
// parameter names, which the text does not carry): writeStmEphemeris prints it, readStmEphemeris returns it, so
// writeStmEphemeris(readStmEphemeris(text)) returns a text the writer wrote byte for byte. Values read are the
// printed ones; an epoch's epochMs is EPOCH plus its MSE minutes. The reader takes COV_SIZE from the count of
// covariance rows (6 to 11, the state and up to the five parameters), the epoch block from it (six lines, then
// six more when COV_SIZE exceeds 6), and requires the first epoch at MSE 0, one MSE per block, each numeric
// field in its tokens.ts format, blank columns between fields and no trailing blank.
//
// Refusal codes: sensitivities-missing, record-missing:STATE_DATA, record-missing:COVARIANCE_DATA,
// record-missing:GM, record-missing:WEIGHTED_RMS, cov-type:<type>, cov-frame:<frame>, epoch-origin,
// stm-shape, field-overflow:<token>, field-overlap, and the frames.ts codes of the equinoctial projection;
// the reader's: p8-empty (no closing line feed), p8-header, p8-cov-row:<row>, p8-line:<n>, field-form:<token>,
// epoch-origin, stm-shape (epoch lines that are not whole blocks).
import { ok, refuse, tokenOf, formatToken, formatWidth, endColumn, placeFields, parseCalendar, calendarToUtcMs, P3_ROW_INDENT, P3_VALUE_SEPARATOR, P8_HEADER_LINE, P8_EPOCH_ROW, } from './tokens.js';
import { STATE_ROWS, PARAMETERS } from './record.js';
import { cartesianToEquinoctial, covarianceToEquinoctial, equinoctialJacobian } from './frames.js';
export const STM_EPHEMERIS_REFUSAL_CODES = [
    'sensitivities-missing', 'record-missing:STATE_DATA', 'record-missing:COVARIANCE_DATA', 'record-missing:GM', 'record-missing:WEIGHTED_RMS',
    'cov-type:<type>', 'cov-frame:<frame>', 'epoch-origin', 'stm-shape', 'field-overflow:<token>', 'field-overlap',
    'p8-empty', 'p8-header', 'p8-cov-row:<row>', 'p8-line:<n>', 'field-form:<token>',
];
/** The P8 content of a Record, before printing. */
export function stmEphemeris(record) {
    const cov = record.covariance;
    if (!cov.sensitivities)
        return refuse('sensitivities-missing', 'the Record carries no state transition matrices');
    const first = record.epochs[0];
    if (!first)
        return refuse('record-missing:STATE_DATA', 'P8 needs the Record\'s states');
    if (!cov.perEpoch.length)
        return refuse('record-missing:COVARIANCE_DATA', 'P8 needs the Record\'s covariance');
    if (cov.type !== 'CARTPV')
        return refuse(`cov-type:${cov.type}`, 'P8 projects a CARTPV covariance');
    if (cov.frame !== null && cov.frame !== record.meta.frame)
        return refuse(`cov-frame:${cov.frame}`, `the covariance frame ${cov.frame} is not the state frame ${record.meta.frame}`);
    const gm = record.meta.gm;
    if (gm === null)
        return refuse('record-missing:GM', 'P8 needs PERTURBATIONS.GM for the equinoctial set');
    const wrms = record.fit.weightedRms;
    if (wrms === null)
        return refuse('record-missing:WEIGHTED_RMS', 'P8\'s header needs WEIGHTED_RMS');
    if (first.minutes !== 0)
        return refuse('epoch-origin', `the first state is ${first.minutes} min from EPOCH_TZERO, not at it`);
    const n = cov.size;
    if (cov.sensitivities.some((m) => m.length !== n || m.some((row) => row.length !== n))) {
        return refuse('stm-shape', `a state transition matrix is not ${n} x ${n} (COV_SIZE)`);
    }
    const eq = cartesianToEquinoctial(first.state, gm);
    if (!eq.ok)
        return eq;
    const jeq = equinoctialJacobian(eq.value, gm);
    if (!jeq.ok)
        return jeq;
    const ltm = covarianceToEquinoctial(cov.perEpoch[0].ltm, n, eq.value, gm);
    if (!ltm.ok)
        return ltm;
    const epochs = record.epochs.map((e, k) => {
        const phi = cov.sensitivities[k];
        const sensitivities = Array.from({ length: STATE_ROWS }, (_, i) => Array.from({ length: n }, (_, c) => {
            if (c >= STATE_ROWS)
                return phi[i][c];
            let sum = 0;
            for (let j = 0; j < STATE_ROWS; j++)
                sum += phi[i][j] * jeq.value[j][c];
            return sum;
        }));
        return { minutes: e.minutes, epochMs: e.epochMs, sensitivities };
    });
    return ok({ epochMs: record.meta.epochMs, weightedRms: wrms, size: n, parameters: cov.parameters, elements: eq.value, ltm: ltm.value, epochs });
}
function fieldText(token, value) {
    const t = tokenOf('P8', token);
    const text = formatToken(t, value);
    if (text === null)
        return refuse(`field-overflow:${token}`, `${token} does not fit ${t.format}: ${value}`);
    return ok({ startColumn: t.startColumn, text });
}
function placed(pairs) {
    const fields = [];
    for (const [token, value] of pairs) {
        const f = fieldText(token, value);
        if (!f.ok)
            return f;
        fields.push(f.value);
    }
    return placeFields(fields);
}
/** P8 text of a fragment: the header, the equinoctial covariance rows and the sensitivity rows per epoch. */
export function writeStmEphemeris(e) {
    if (e.ltm.length !== (e.size * (e.size + 1)) / 2 || e.epochs.some((k) => k.sensitivities.length !== STATE_ROWS || k.sensitivities.some((row) => row.length !== e.size))) {
        return refuse('stm-shape', `the content is not COV_SIZE ${e.size} wide`);
    }
    const lines = [];
    const header = placed([[P8_HEADER_LINE[0], e.epochMs], [P8_HEADER_LINE[1], e.weightedRms]]);
    if (!header.ok)
        return header;
    lines.push(header.value);
    let at = 0;
    for (let i = 0; i < e.size; i++) {
        const values = [];
        for (let j = 0; j <= i; j++) {
            const f = fieldText('COV', e.ltm[at++]);
            if (!f.ok)
                return f;
            values.push(f.value.text);
        }
        lines.push(P3_ROW_INDENT + values.join(P3_VALUE_SEPARATOR));
    }
    const [mse, ...columns] = P8_EPOCH_ROW;
    for (const epoch of e.epochs) {
        const blocks = e.size > STATE_ROWS ? [[0, STATE_ROWS], [STATE_ROWS, e.size]] : [[0, STATE_ROWS]];
        for (const [from, to] of blocks) {
            for (const row of epoch.sensitivities) {
                const text = placed([[mse, epoch.minutes], ...row.slice(from, to).map((v, c) => [columns[c], v])]);
                if (!text.ok)
                    return text;
                lines.push(text.value);
            }
        }
    }
    return ok(lines.map((l) => `${l}\n`).join(''));
}
/** P8 text: the header, the equinoctial covariance rows and the sensitivity rows per epoch. */
export function stmEphemerisText(record) {
    const content = stmEphemeris(record);
    return content.ok ? writeStmEphemeris(content.value) : content;
}
// ---- reader -------------------------------------------------------------------------------------------------
const FIXED = /^ *-?\d+\.\d+$/;
const EXPONENT = /^ *[+-]\d\.\d+E[+-]\d{2,}$/;
const MAX_SIZE = STATE_ROWS + PARAMETERS.length;
function columnsOf(line, t) {
    return line.slice(t.startColumn - 1, t.startColumn - 1 + formatWidth(t.format));
}
function numberOf(text, t) {
    const re = t.format.startsWith('F') ? FIXED : EXPONENT;
    if (text.length !== formatWidth(t.format) || !re.test(text))
        return refuse(`field-form:${t.token}`, `${t.token} is not ${t.format}: "${text}"`);
    return ok(Number(text));
}
/** A line of the named tokens: no column between fields set, nothing past the last one, every field a number. */
function fieldsOf(line, n, names) {
    const tokens = names.map((name) => tokenOf('P8', name));
    const last = tokens[tokens.length - 1];
    if (line.length !== endColumn(last))
        return refuse(`p8-line:${n}`, `line ${n} is ${line.length} characters, not ${endColumn(last)}`);
    for (let c = 1; c <= line.length; c++) {
        if (line[c - 1] !== ' ' && !tokens.some((t) => c >= t.startColumn && c <= endColumn(t)))
            return refuse(`p8-line:${n}`, `line ${n} column ${c} lies between fields and is not blank`);
    }
    const out = [];
    for (const t of tokens) {
        if (t.format === 'S18')
            continue;
        const v = numberOf(columnsOf(line, t), t);
        if (!v.ok)
            return v;
        out.push(v.value);
    }
    return ok(out);
}
/** Reads P8 back into its fragment; refuses a malformed header, covariance row, epoch line or block. */
export function readStmEphemeris(text) {
    if (!text.endsWith('\n') || text === '\n')
        return refuse('p8-empty', 'P8 text does not end with a line feed');
    const lines = text.slice(0, -1).split('\n');
    const header = fieldsOf(lines[0], 1, P8_HEADER_LINE);
    if (!header.ok)
        return header.refusal.code.startsWith('p8-line') ? refuse('p8-header', header.refusal.message) : header;
    const calendar = parseCalendar(columnsOf(lines[0], tokenOf('P8', P8_HEADER_LINE[0])));
    if (!calendar.ok)
        return refuse(`field-form:${P8_HEADER_LINE[0]}`, calendar.refusal.message);
    const epochMs = calendarToUtcMs(calendar.value);
    if (!epochMs.ok)
        return refuse(`field-form:${P8_HEADER_LINE[0]}`, epochMs.refusal.message);
    const cov = tokenOf('P8', 'COV');
    const width = formatWidth(cov.format);
    const ltm = [];
    let size = 0;
    while (1 + size < lines.length && lines[1 + size].startsWith(P3_ROW_INDENT)) {
        const row = size + 1;
        const body = lines[1 + size].slice(P3_ROW_INDENT.length);
        if (row > MAX_SIZE || body.length !== row * width + (row - 1) * P3_VALUE_SEPARATOR.length)
            return refuse(`p8-cov-row:${row}`, `covariance row ${row} does not carry ${row} values`);
        for (let j = 0; j < row; j++) {
            const at = j * (width + P3_VALUE_SEPARATOR.length);
            if (j > 0 && body.slice(at - P3_VALUE_SEPARATOR.length, at) !== P3_VALUE_SEPARATOR)
                return refuse(`p8-cov-row:${row}`, `covariance row ${row}: values are not separated by the separator`);
            const v = numberOf(body.slice(at, at + width), cov);
            if (!v.ok)
                return v;
            ltm.push(v.value);
        }
        size++;
    }
    if (size < STATE_ROWS)
        return refuse(`p8-cov-row:${size + 1}`, `P8 carries ${size} covariance rows, not 6 or more`);
    const [mse, ...sens] = P8_EPOCH_ROW;
    const block = size > STATE_ROWS ? 2 * STATE_ROWS : STATE_ROWS;
    const body = lines.slice(1 + size);
    if (!body.length || body.length % block !== 0)
        return refuse('stm-shape', `${body.length} epoch lines are not whole blocks of ${block}`);
    const epochs = [];
    for (let k = 0; k < body.length / block; k++) {
        let minutes = null;
        const rows = Array.from({ length: STATE_ROWS }, () => []);
        for (let r = 0; r < block; r++) {
            const n = 2 + size + k * block + r;
            const count = r < STATE_ROWS ? STATE_ROWS : size - STATE_ROWS;
            const values = fieldsOf(body[k * block + r], n, [mse, ...sens.slice(0, count)]);
            if (!values.ok)
                return values;
            const [m, ...row] = values.value;
            if (minutes === null)
                minutes = m;
            else if (m !== minutes)
                return refuse(`p8-line:${n}`, `line ${n}: MSE ${m} is not its block's ${minutes}`);
            rows[r % STATE_ROWS].push(...row);
        }
        if (k === 0 && minutes !== 0)
            return refuse('epoch-origin', `the first epoch is ${minutes} min from EPOCH, not at it`);
        epochs.push({ minutes: minutes, epochMs: epochMs.value + minutes * 60000, sensitivities: rows });
    }
    return ok({ epochMs: epochMs.value, weightedRms: header.value[0], size, ltm, epochs });
}
