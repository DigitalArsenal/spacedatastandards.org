import { ok, refuse, MINUTES_FORMAT, P1_EPOCH_BLOCK, P1_HEADER_LINES, P1_TRAILER, tokenOf, } from './tokens.js';
import { formatLine, headerLine, joinLines, stateLine } from './staterow.js';
import { sigmaLine, uvwStateBlocks } from './covtext.js';
const MINUTES_RESOLUTION = 5e-7; // half the last printed digit of MINUTES_FORMAT
const required = (value, field, what) => value === null ? refuse(`record-missing:${field}`, `the Record states no ${what}`) : ok(value);
function interval(epochs) {
    if (epochs.length < 2)
        return ok(0);
    const step = epochs[1].minutes - epochs[0].minutes;
    for (let i = 2; i < epochs.length; i++) {
        if (Math.abs(epochs[i].minutes - epochs[i - 1].minutes - step) > MINUTES_RESOLUTION) {
            return refuse('epoch-grid', `epoch ${i} breaks the ${step.toFixed(6)} minute grid (${MINUTES_FORMAT})`);
        }
    }
    return ok(step);
}
function headerValues(record) {
    const m = record.meta;
    const fields = [
        ['TITLE', m.messageId, 'HEADER.MESSAGE_ID', 'message id'],
        ['VERSION', m.toolVersion, 'PROVENANCE.PRODUCER', 'tool version'],
        ['GRAVITY_PATH', m.forceModel ? m.forceModel.gravityModel : null, 'PERTURBATIONS.GRAVITY_MODEL', 'gravity model'],
        ['RUN_MODE', m.theory, 'ORB_AVERAGING', 'theory'],
        ['COMPATIBILITY_FLAGS', m.timeSystem, 'METADATA.TIME_SYSTEM', 'time system'],
        ['OUTPUT_COORDINATE_SYSTEM', m.frame, 'TRAJ_REF_FRAME', 'trajectory frame'],
        ['OBJECT_DESIGNATOR', m.objectDesignator, 'METADATA.OBJECT_DESIGNATOR', 'object designator'],
        ['OBJECT_NAME', m.objectName, 'METADATA.OBJECT_NAME', 'object name'],
    ];
    const values = {};
    for (const [token, value, field, what] of fields) {
        const v = required(value, field, what);
        if (!v.ok)
            return v;
        values[token] = v.value;
    }
    if (!record.epochs.length)
        return refuse('record-missing:STATE_DATA', 'the Record has no states');
    const step = interval(record.epochs);
    if (!step.ok)
        return step;
    for (const line of P1_HEADER_LINES)
        for (const token of line)
            if (token.endsWith('_KEY'))
                values[token] = token.slice(0, -'_KEY'.length);
    Object.assign(values, {
        BUFFER_SIZE: record.epochs.length,
        PARTIALS_FLAG: record.covariance.sensitivities !== null,
        START: record.epochs[0].epochMs,
        STOP: record.epochs[record.epochs.length - 1].epochMs,
        INTERVAL: step.value,
        OBJECT: `${values.OBJECT_DESIGNATOR} ${values.OBJECT_NAME}`,
    });
    return ok(values);
}
function epochValues(epoch, i) {
    const g = required(epoch.geodetic, `epochs[${i}].geodetic`, `geodetic coordinates at epoch ${i}`);
    if (!g.ok)
        return g;
    const rev = required(epoch.rev, `epochs[${i}].rev`, `revolution number at epoch ${i}`);
    if (!rev.ok)
        return rev;
    const me = required(epoch.meanElements, `epochs[${i}].meanElements`, `mean elements at epoch ${i}`);
    if (!me.ok)
        return me;
    return ok({
        DATE: epoch.epochMs, LAT: g.value.latitude, LON: g.value.longitude, HEIGHT: g.value.height, REV: rev.value,
        N: me.value.meanMotion, E: me.value.eccentricity, I: me.value.inclination, NODE: me.value.raan, OMEGA: me.value.argOfPericenter, M: me.value.meanAnomaly,
    });
}
/** The two P1 header rows: state labels, then the geodetic and mean-element labels. */
export function trackingHeaderRows() {
    var _a;
    const state = headerLine(P1_EPOCH_BLOCK[0].map((name) => [tokenOf('P1', name)]));
    if (!state.ok)
        return state;
    const byColumn = new Map();
    for (const name of [...P1_EPOCH_BLOCK[1], ...P1_EPOCH_BLOCK[2]]) {
        const token = tokenOf('P1', name);
        byColumn.set(token.startColumn, [...((_a = byColumn.get(token.startColumn)) !== null && _a !== void 0 ? _a : []), token]);
    }
    const labels = headerLine([...byColumn.keys()].sort((a, b) => a - b).map((c) => byColumn.get(c)));
    if (!labels.ok)
        return labels;
    return ok([state.value, labels.value]);
}
/** P1 of a Record; refused, with no partial output, when any value it prints is absent. */
export function writeP1(record) {
    const header = headerValues(record);
    if (!header.ok)
        return header;
    const lines = [];
    for (const names of P1_HEADER_LINES) {
        const line = formatLine('P1', names, header.value);
        if (!line.ok)
            return line;
        lines.push(line.value);
    }
    const rows = trackingHeaderRows();
    if (!rows.ok)
        return rows;
    lines.push(...rows.value);
    const blocks = uvwStateBlocks(record);
    if (!blocks.ok)
        return blocks;
    for (const [i, epoch] of record.epochs.entries()) {
        const state = stateLine('P1', { minutes: epoch.minutes, state: epoch.state }, false);
        if (!state.ok)
            return state;
        const values = epochValues(epoch, i);
        if (!values.ok)
            return values;
        const line2 = formatLine('P1', P1_EPOCH_BLOCK[1], values.value);
        if (!line2.ok)
            return line2;
        const line3 = formatLine('P1', P1_EPOCH_BLOCK[2], values.value);
        if (!line3.ok)
            return line3;
        const sigma = sigmaLine('P1', blocks.value[i]);
        if (!sigma.ok)
            return sigma;
        lines.push(state.value, line2.value, line3.value, sigma.value);
    }
    const trailer = formatLine('P1', ['TRAILER'], { TRAILER: P1_TRAILER });
    if (!trailer.ok)
        return trailer;
    lines.push(trailer.value);
    return ok(joinLines(lines));
}
