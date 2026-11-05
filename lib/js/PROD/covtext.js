import { covarianceToUvw } from './frames.js';
import { ok, refuse, COVARIANCE_FORMAT, P3_ROW_INDENT, P3_TITLE, P3_TRIANGLE_TITLE, P3_VALUE_SEPARATOR, formatToken, tokenOf, } from './tokens.js';
import { epochRows, formatLine, joinLines, stateLine } from './staterow.js';
export const SIGMA_TOKENS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
const STATE_BLOCK = 6;
const triangle = (n) => (n * (n + 1)) / 2;
/** The 6 x 6 UVW state block (21 LTM values) of each epoch's covariance. */
export function uvwStateBlocks(record) {
    const rows = epochRows(record);
    if (!rows.ok)
        return rows;
    const cov = record.covariance;
    if (!cov.perEpoch.length)
        return refuse('record-missing:COVARIANCE_DATA', 'the Record carries no covariance');
    const out = [];
    for (const [i, epoch] of record.epochs.entries()) {
        const s = epoch.state;
        const r = [s[0], s[1], s[2]], v = [s[3], s[4], s[5]];
        const uvw = covarianceToUvw(cov.perEpoch[i].ltm, cov.size, r, v);
        if (!uvw.ok)
            return uvw;
        out.push(uvw.value.slice(0, triangle(STATE_BLOCK)));
    }
    return ok(out);
}
/** The six UVW sigmas of a 6 x 6 LTM block: the square roots of its diagonal. */
export function sigmasOf(block) {
    return Array.from({ length: STATE_BLOCK }, (_, i) => Math.sqrt(block[triangle(i + 1) - 1]));
}
/** The sigma row (P1 line 4, P3's sigma row, a P4 row) of a 6 x 6 UVW block. */
export function sigmaLine(product, block) {
    const values = {};
    sigmasOf(block).forEach((s, i) => { values[SIGMA_TOKENS[i]] = s; });
    return formatLine(product, SIGMA_TOKENS, values);
}
export function versionLine(product, record) {
    const version = record.meta.toolVersion;
    if (version === null)
        return refuse('record-missing:PROVENANCE.PRODUCER', 'the Record states no tool version');
    return formatLine(product, ['VERSION'], { VERSION: version });
}
/** P3 triangle row k (1..6) of a 6 x 6 LTM block. */
function triangleRow(block, k) {
    const token = tokenOf('P3', 'COV');
    const values = [];
    for (let j = 0; j < k; j++) {
        const text = formatToken(token, block[triangle(k - 1) + j]);
        if (text === null)
            return refuse('field-width:P3.COV', `a covariance value does not fit ${COVARIANCE_FORMAT}`);
        values.push(text);
    }
    return ok(P3_ROW_INDENT + values.join(P3_VALUE_SEPARATOR));
}
/** P3: version, the state row of epoch 0, the two title lines, six triangle rows and the sigma row (UVW). */
export function writeP3(record) {
    const version = versionLine('P3', record);
    if (!version.ok)
        return version;
    const blocks = uvwStateBlocks(record);
    if (!blocks.ok)
        return blocks;
    const first = record.epochs[0];
    const state = stateLine('P3', { minutes: first.minutes, state: first.state }, true);
    if (!state.ok)
        return state;
    const block = blocks.value[0];
    const lines = [version.value, state.value, P3_TITLE, P3_TRIANGLE_TITLE];
    for (let k = 1; k <= STATE_BLOCK; k++) {
        const row = triangleRow(block, k);
        if (!row.ok)
            return row;
        lines.push(row.value);
    }
    const sigma = sigmaLine('P3', block);
    if (!sigma.ok)
        return sigma;
    lines.push(sigma.value);
    return ok(joinLines(lines));
}
/** P4: version, then one UVW sigma row per epoch. */
export function writeP4(record) {
    const version = versionLine('P4', record);
    if (!version.ok)
        return version;
    const blocks = uvwStateBlocks(record);
    if (!blocks.ok)
        return blocks;
    const lines = [version.value];
    for (const block of blocks.value) {
        const sigma = sigmaLine('P4', block);
        if (!sigma.ok)
            return sigma;
        lines.push(sigma.value);
    }
    return ok(joinLines(lines));
}
