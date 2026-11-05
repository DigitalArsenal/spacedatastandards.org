// P5, the covariance message in text (requirement baseline 3.5): a reader and a writer over the Record.
//
// Layout (tokens.ts fixes the tag names, their order and their formats; this module decides the rest):
//   one tag per line, `KEY = value` (P5_TAG_SEPARATOR), lines ending in a line feed, the last one too; the value
//   is the token's format with its leading and trailing blanks removed (the width still bounds it: a value that
//   does not fit is refused); header tags first in the tokens.ts order, then the covariance section ELSET,
//   COV_SIZE, COV_PARAMETERS, WTD_RMS and one COV line per lower-triangle row, row k holding k values separated by
//   one blank. A tag whose Record value is absent is not written, and the reader accepts its absence.
// Tags this module adds where tokens.ts has none (the gaps it reports): OUTGASSING (%+.15E, km/s**2, the value of
// OUTGASSING_ACCELERATION; after CM_OFFSET) and COV_PARAMETERS (A128, after COV_SIZE: the solved parameters'
// names, blank-separated, in the fixed order of record.ts PARAMETERS; not written when none is solved). Without
// COV_PARAMETERS a reader could not tell which parameter rows 7..COV_SIZE hold.
// Mapping to the Record:
//   EPOCH, REV            the first epoch's instant and revolution number;
//   J2K_*, ECI_*, EFG_*   the first state, under the triple of the Record's frame only: J2K is EME2000, ECI is
//                         TEME, EFG is ITRF; any other frame is refused (p5-frame:<name>), since the codec does no
//                         frame transformation;
//   GEOPOTENTIAL          PERTURBATIONS.GRAVITY_MODEL; DRAG_MODEL: ATMOSPHERIC_DRAG;
//   LUNISOLAR             Y when N_BODY_PERTURBATIONS names MOON or SUN (read back as MOON and SUN);
//   SRP, TIDES            Y when SOLAR_RAD_PRESSURE, or SOLID_TIDES_MODEL or OCEAN_TIDES_MODEL, is stated; the
//                         flag carries no model name, so the reader states a Y flag's model as UNSPECIFIED;
//   IN_TRACK_THRUST       Y when the Record carries IN_TRACK_ACCELERATION (then THRUST_ACCEL is written);
//   B, BDOT, SRP_COEFF, THRUST_ACCEL, OUTGASSING  the values of the five parameters the Record carries;
//   EDR                   the fit's SEDR, W/kg; CM_OFFSET: no typed home in the Record, never written;
//   F10_OBS, F10_AVG, AP_AVG  FIXED_F10P7, FIXED_F10P7_MEAN, FIXED_GEOMAG_AP when not zero (zero is not stated);
//   TAI_UTC, UT1_UTC      at the epoch; UT1_RATE, POLAR_X, POLAR_Y: no typed home in the Record, never written;
//   NUTATION              PERTURBATIONS.REDUCTION_THEORY; LEAP_SECOND: NEXT_LEAP_TAIMUTC (the epoch of the next
//                         leap second has no tag);
//   INTEGRATOR_MODE, COORD_SYS, PARTIALS, STEP_MODE  the INTEGRATOR enum names, not written when UNSPECIFIED;
//   INITIAL_STEP, ERROR_CONTROL  INTEGRATOR.INITIAL_STEP_SECONDS and ERROR_CONTROL when not NaN;
//   SIGMA_U..SIGMA_WD     the roots of the UVW state-block diagonal at the first epoch (derived; the reader checks
//                         their form and does not store them);
//   ELSET                 EQUINOCTIAL: the covariance state block is in the $OCM EQUINOCTIAL set (a, af, ag,
//                         L deg, chi, psi; D2) at the first state's own elements, parameter rows unchanged;
//   COV_SIZE, WTD_RMS     the covariance dimension and the fit's WEIGHTED_RMS.
// Required: EPOCH, one complete state triple, the covariance section and WTD_RMS; the writer refuses a Record
// without them and the reader a text without them. The reader needs GM (km**3/s**2) as an argument: P5 states no
// GM, and the equinoctial block converts back to the $OCM's cartesian block only through it.
//
// Refusals, as {code, message}: p5-frame:<name>, p5-field:<tag>, p5-line:<n>, p5-unknown-tag:<tag>,
// p5-tag-order:<tag>, p5-missing:<tag>, p5-value:<tag>, p5-elset:<value>, p5-cov-row:<row>, p5-flag:<tag>,
// p5-state, and the Record's own (record-missing:<field>, cov-size, parameter-unknown:<name>, ...) and frames.ts's.
import { OCMT, MetadataT, PerturbationsT, OrbitDeterminationT, OCMDynamicParameterT, OCMIntegratorT, RFMT, covarianceOrdering, trajectoryType, ocmIntegratorMode, ocmIntegrationFrame, ocmPartialsMethod, ocmStepMode, } from '../OCM/main.js';
import { ok, refuse, tokensOf, formatToken, parseCalendar, calendarToUtcMs, P5_TAG_SEPARATOR, P5_COVARIANCE_SECTION, } from './tokens.js';
import { PARAMETERS, STATE_ROWS, covarianceUnits, fromOcm, parameterByName } from './record.js';
import { cartesianToEquinoctial, covarianceFromEquinoctial, covarianceToEquinoctial, covarianceToUvw } from './frames.js';
export const P5_ELSET = 'EQUINOCTIAL';
export const P5_FLAG_MODEL = 'UNSPECIFIED';
export const P5_LUNISOLAR_BODIES = ['MOON', 'SUN'];
/** The state triples and the Record frame each one is. */
export const P5_STATE_FRAMES = [
    { prefix: 'J2K', frame: 'EME2000' }, { prefix: 'ECI', frame: 'TEME' }, { prefix: 'EFG', frame: 'ITRF' },
];
/** Tags this module adds to the tokens.ts P5 set, each placed after the named token. */
export const P5_ADDED_TAGS = [
    { product: 'P5', token: 'OUTGASSING', startColumn: 1, format: '%+.15E', kind: 'KM_S2', after: 'CM_OFFSET' },
    { product: 'P5', token: 'COV_PARAMETERS', startColumn: 1, format: 'A128', kind: 'TEXT', after: 'COV_SIZE' },
];
/** Every P5 tag in written order: tokens.ts's, with the added ones in place. */
export const P5_TAGS = tokensOf('P5').flatMap((token) => [token, ...P5_ADDED_TAGS.filter((a) => a.after === token.token)]);
export const P5_REQUIRED_TAGS = ['EPOCH', ...P5_COVARIANCE_SECTION.filter((t) => t !== 'COV')];
/** The tag carrying each parameter's value, in the order of record.ts PARAMETERS. */
export const P5_PARAMETER_TAGS = ['B', 'BDOT', 'SRP_COEFF', 'THRUST_ACCEL', 'OUTGASSING'];
export const P5_SIGMA_TAGS = ['SIGMA_U', 'SIGMA_V', 'SIGMA_W', 'SIGMA_UD', 'SIGMA_VD', 'SIGMA_WD'];
const AXES = ['POS_X', 'POS_Y', 'POS_Z', 'VEL_X', 'VEL_Y', 'VEL_Z'];
const INTEGRATOR_ENUMS = {
    INTEGRATOR_MODE: ocmIntegratorMode, COORD_SYS: ocmIntegrationFrame, PARTIALS: ocmPartialsMethod, STEP_MODE: ocmStepMode,
};
const tagOf = (name) => P5_TAGS.find((t) => t.token === name);
const triangle = (n) => (n * (n + 1)) / 2;
function line(name, value) {
    const text = formatToken(tagOf(name), value);
    if (text === null)
        return refuse(`p5-field:${name}`, `${name} ${String(value)} does not fit ${tagOf(name).format}`);
    return ok(`${name}${P5_TAG_SEPARATOR}${text.trim()}`);
}
function covLine(values) {
    const out = [];
    for (const v of values) {
        const text = formatToken(tagOf('COV'), v);
        if (text === null)
            return refuse('p5-field:COV', `a covariance value ${v} is not finite`);
        out.push(text);
    }
    return ok(`COV${P5_TAG_SEPARATOR}${out.join(' ')}`);
}
const enumName = (e, v) => { var _a; return (v === 0 ? null : (_a = e[v]) !== null && _a !== void 0 ? _a : null); };
/** P5 of a Record: the first epoch's state and covariance; refuses a Record without the required fields. */
export function writeP5(record) {
    var _a;
    const first = record.epochs[0];
    if (!first)
        return refuse('record-missing:STATE_DATA', 'P5 needs a state');
    const frame = record.meta.frame;
    if (frame === null)
        return refuse('record-missing:TRAJ_REF_FRAME', 'P5 needs the frame of the state');
    const triple = P5_STATE_FRAMES.find((f) => f.frame === frame);
    if (!triple)
        return refuse(`p5-frame:${frame}`, `P5 carries EME2000, TEME or ITRF states, not ${frame}`);
    const cov = record.covariance;
    if (!cov.perEpoch.length)
        return refuse('record-missing:COVARIANCE_DATA', 'P5 needs a covariance');
    const wrms = record.fit.weightedRms;
    if (wrms === null)
        return refuse('record-missing:WEIGHTED_RMS', 'P5 needs the fit weighted RMS');
    const gm = record.meta.gm;
    if (gm === null)
        return refuse('record-missing:GM', 'the equinoctial covariance needs GM');
    const eq = (_a = record.elements.equinoctial) !== null && _a !== void 0 ? _a : null;
    const elements = eq ? ok(eq) : cartesianToEquinoctial(first.state, gm);
    if (!elements.ok)
        return elements;
    const n = cov.size;
    const ltm = cov.perEpoch[0].ltm;
    const eqLtm = covarianceToEquinoctial(ltm, n, elements.value, gm);
    if (!eqLtm.ok)
        return eqLtm;
    const s = first.state;
    const uvw = covarianceToUvw(ltm, n, [s[0], s[1], s[2]], [s[3], s[4], s[5]]);
    if (!uvw.ok)
        return uvw;
    const values = new Map();
    const put = (name, v) => { if (v !== null && v !== undefined)
        values.set(name, v); };
    put('EPOCH', first.epochMs);
    put('REV', first.rev);
    AXES.forEach((axis, i) => put(`${triple.prefix}_${axis}`, s[i]));
    const fm = record.meta.forceModel;
    if (fm) {
        put('GEOPOTENTIAL', fm.gravityModel);
        put('DRAG_MODEL', fm.atmosphericDrag);
        put('LUNISOLAR', fm.nBody.some((b) => P5_LUNISOLAR_BODIES.includes(b)));
        put('SRP', fm.solarRadiationPressure !== null);
        put('TIDES', fm.solidTides !== null || fm.oceanTides !== null);
        const stated = (v) => (Number.isFinite(v) && v !== 0 ? v : null);
        put('F10_OBS', stated(fm.fixedF107));
        put('F10_AVG', stated(fm.fixedF107Mean));
        put('AP_AVG', stated(fm.fixedGeomagneticAp));
    }
    const carried = record.elements.parameters;
    put('IN_TRACK_THRUST', carried.some((p) => p.name === 'IN_TRACK_ACCELERATION'));
    PARAMETERS.forEach((definition, i) => { var _a; return put(P5_PARAMETER_TAGS[i], (_a = carried.find((p) => p.kind === definition.kind)) === null || _a === void 0 ? void 0 : _a.value); });
    put('EDR', record.fit.sedr);
    put('TAI_UTC', record.meta.taiMinusUtc);
    put('UT1_UTC', record.meta.ut1MinusUtc);
    put('UT1_RATE', record.meta.ut1Rate);
    put('POLAR_X', record.meta.polarMotionX);
    put('POLAR_Y', record.meta.polarMotionY);
    put('NUTATION', record.meta.nutationTag);
    put('LEAP_SECOND', record.meta.leapSecondTaiMinusUtc);
    const integ = record.meta.integrator;
    if (integ) {
        put('INTEGRATOR_MODE', enumName(ocmIntegratorMode, integ.mode));
        put('COORD_SYS', enumName(ocmIntegrationFrame, integ.coordinateSystem));
        put('PARTIALS', enumName(ocmPartialsMethod, integ.partials));
        put('STEP_MODE', enumName(ocmStepMode, integ.stepMode));
        put('INITIAL_STEP', Number.isNaN(integ.initialStepSeconds) ? null : integ.initialStepSeconds);
        put('ERROR_CONTROL', Number.isNaN(integ.errorControl) ? null : integ.errorControl);
    }
    P5_SIGMA_TAGS.forEach((name, i) => put(name, Math.sqrt(uvw.value[triangle(i + 1) - 1])));
    put('ELSET', P5_ELSET);
    put('COV_SIZE', n);
    if (cov.parameters.length)
        put('COV_PARAMETERS', cov.parameters.join(' '));
    put('WTD_RMS', wrms);
    const lines = [];
    for (const tag of P5_TAGS) {
        if (tag.token === 'COV') {
            for (let k = 1; k <= n; k++) {
                const row = covLine(eqLtm.value.slice(triangle(k - 1), triangle(k)));
                if (!row.ok)
                    return row;
                lines.push(row.value);
            }
            continue;
        }
        if (!values.has(tag.token))
            continue;
        const l = line(tag.token, values.get(tag.token));
        if (!l.ok)
            return l;
        lines.push(l.value);
    }
    return ok(lines.map((l) => `${l}\n`).join(''));
}
const EXPONENT = /^[+-]\d\.\d+E[+-]\d{2,}$/;
function parseValue(tag, text) {
    const bad = () => refuse(`p5-value:${tag.token}`, `${tag.token} is not ${tag.format}: ${text}`);
    const f = tag.format;
    if (/^%\+\d*\.\d+E$/.test(f)) {
        if (!EXPONENT.test(text))
            return bad();
        return ok(Number(text));
    }
    let m = /^I(\d+)$/.exec(f);
    if (m) {
        if (!/^-?\d+$/.test(text) || text.length > Number(m[1]))
            return bad();
        return ok(Number(text));
    }
    m = /^A(\d+)$/.exec(f);
    if (m) {
        if (text.length === 0 || text.length > Number(m[1]) || text !== text.trim())
            return bad();
        return ok(text);
    }
    if (f === 'L1') {
        if (text !== 'Y' && text !== 'N')
            return bad();
        return ok(text === 'Y');
    }
    if (f === 'S18') {
        const c = parseCalendar(text);
        if (!c.ok)
            return c;
        return calendarToUtcMs(c.value);
    }
    return bad();
}
/** The Record of a P5 text under GM (km**3/s**2); refuses an unknown tag, a tag out of order and a malformed value. */
export function readP5(text, gm) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (!(gm > 0))
        return refuse('record-missing:GM', 'reading P5 needs GM: the equinoctial block converts to the cartesian block through it');
    const rows = text.endsWith('\n') ? text.slice(0, -1).split('\n') : text.split('\n');
    const values = new Map();
    const cov = [];
    let last = -1;
    for (const [i, raw] of rows.entries()) {
        const at = raw.indexOf(P5_TAG_SEPARATOR);
        if (at <= 0)
            return refuse(`p5-line:${i + 1}`, `line ${i + 1} is not KEY${P5_TAG_SEPARATOR}value`);
        const key = raw.slice(0, at), body = raw.slice(at + P5_TAG_SEPARATOR.length);
        const index = P5_TAGS.findIndex((t) => t.token === key);
        if (index < 0)
            return refuse(`p5-unknown-tag:${key}`, `line ${i + 1}: ${key} is not a P5 tag`);
        if (index < last || (index === last && key !== 'COV'))
            return refuse(`p5-tag-order:${key}`, `line ${i + 1}: ${key} is out of order or repeated`);
        last = index;
        if (key === 'COV') {
            const row = [];
            for (const part of body.split(' ')) {
                const v = parseValue(tagOf('COV'), part);
                if (!v.ok)
                    return v;
                row.push(v.value);
            }
            cov.push(row);
            continue;
        }
        const v = parseValue(tagOf(key), body);
        if (!v.ok)
            return v;
        values.set(key, v.value);
    }
    for (const name of P5_REQUIRED_TAGS)
        if (!values.has(name))
            return refuse(`p5-missing:${name}`, `P5 states no ${name}`);
    if (values.get('ELSET') !== P5_ELSET)
        return refuse(`p5-elset:${String(values.get('ELSET'))}`, `the covariance section is ${P5_ELSET}`);
    const triples = P5_STATE_FRAMES.filter((f) => AXES.some((axis) => values.has(`${f.prefix}_${axis}`)));
    if (triples.length !== 1 || AXES.some((axis) => !values.has(`${triples[0].prefix}_${axis}`)))
        return refuse('p5-state', 'P5 carries one complete state triple');
    const state = AXES.map((axis) => values.get(`${triples[0].prefix}_${axis}`));
    const n = values.get('COV_SIZE');
    const names = values.has('COV_PARAMETERS') ? values.get('COV_PARAMETERS').split(' ') : [];
    for (const name of names)
        if (!parameterByName(name))
            return refuse(`parameter-unknown:${name}`, `COV_PARAMETERS names ${name}`);
    if (n !== STATE_ROWS + names.length)
        return refuse('cov-size', `COV_SIZE ${n} is not 6 plus the ${names.length} COV_PARAMETERS`);
    if (cov.length !== n)
        return refuse(`p5-cov-row:${cov.length + 1}`, `COV_SIZE ${n} needs ${n} COV rows, not ${cov.length}`);
    for (const [k, row] of cov.entries())
        if (row.length !== k + 1)
            return refuse(`p5-cov-row:${k + 1}`, `COV row ${k + 1} has ${row.length} values`);
    const carried = PARAMETERS.map((definition, i) => ({ definition, tag: P5_PARAMETER_TAGS[i] })).filter((p) => values.has(p.tag));
    for (const name of names) {
        if (!carried.some((p) => p.definition.name === name))
            return refuse(`p5-missing:${P5_PARAMETER_TAGS[PARAMETERS.findIndex((d) => d.name === name)]}`, `${name} is solved but its value is not stated`);
    }
    const thrust = values.get('IN_TRACK_THRUST') === true;
    if (thrust !== values.has('THRUST_ACCEL'))
        return refuse('p5-flag:IN_TRACK_THRUST', 'IN_TRACK_THRUST is Y exactly when THRUST_ACCEL is stated');
    const elements = cartesianToEquinoctial(state, gm);
    if (!elements.ok)
        return elements;
    const cartesian = covarianceFromEquinoctial(cov.flat(), n, elements.value, gm);
    if (!cartesian.ok)
        return cartesian;
    const num = (name) => values.get(name);
    const str = (name) => (values.has(name) ? values.get(name) : null);
    const epoch = new Date(values.get('EPOCH')).toISOString();
    const frame = new RFMT();
    frame.NAME = triples[0].frame;
    const md = new MetadataT();
    md.EPOCH_TZERO = epoch;
    md.START_TIME = epoch;
    md.TIME_SYSTEM = 'UTC';
    md.TAIMUTC_AT_TZERO = (_a = num('TAI_UTC')) !== null && _a !== void 0 ? _a : 0;
    md.UT1MUTC_AT_TZERO = (_b = num('UT1_UTC')) !== null && _b !== void 0 ? _b : 0;
    md.NEXT_LEAP_TAIMUTC = (_c = num('LEAP_SECOND')) !== null && _c !== void 0 ? _c : 0;
    const pert = new PerturbationsT();
    pert.GM = gm;
    pert.GRAVITY_MODEL = str('GEOPOTENTIAL');
    pert.ATMOSPHERIC_DRAG = str('DRAG_MODEL');
    pert.REDUCTION_THEORY = str('NUTATION');
    pert.N_BODY_PERTURBATIONS = values.get('LUNISOLAR') === true ? [...P5_LUNISOLAR_BODIES] : [];
    pert.SOLAR_RAD_PRESSURE = values.get('SRP') === true ? P5_FLAG_MODEL : null;
    pert.SOLID_TIDES_MODEL = values.get('TIDES') === true ? P5_FLAG_MODEL : null;
    pert.FIXED_F10P7 = (_d = num('F10_OBS')) !== null && _d !== void 0 ? _d : 0;
    pert.FIXED_F10P7_MEAN = (_e = num('F10_AVG')) !== null && _e !== void 0 ? _e : 0;
    pert.FIXED_GEOMAG_AP = (_f = num('AP_AVG')) !== null && _f !== void 0 ? _f : 0;
    const od = new OrbitDeterminationT();
    od.WEIGHTED_RMS = values.get('WTD_RMS');
    od.SEDR = (_g = num('EDR')) !== null && _g !== void 0 ? _g : 0;
    od.OD_DYNAMIC_PARAMETERS = carried.map(({ definition, tag }) => {
        const p = new OCMDynamicParameterT();
        p.NAME = definition.name;
        p.VALUE = values.get(tag);
        p.UNITS = definition.units;
        p.SOLVED_FOR = names.includes(definition.name);
        p.PARAMETER = definition.kind;
        return p;
    });
    let integrator = null;
    if (Object.keys(INTEGRATOR_ENUMS).some((k) => values.has(k)) || values.has('INITIAL_STEP') || values.has('ERROR_CONTROL')) {
        integrator = new OCMIntegratorT();
        const pick = (name) => {
            if (!values.has(name))
                return ok(0);
            const e = INTEGRATOR_ENUMS[name];
            const v = e[values.get(name)];
            return typeof v === 'number' && v !== 0 ? ok(v) : refuse(`p5-value:${name}`, `${name} ${String(values.get(name))} is not a stated value`);
        };
        for (const name of Object.keys(INTEGRATOR_ENUMS)) {
            const v = pick(name);
            if (!v.ok)
                return v;
        }
        integrator.MODE = pick('INTEGRATOR_MODE').value;
        integrator.COORDINATE_SYSTEM = pick('COORD_SYS').value;
        integrator.PARTIALS = pick('PARTIALS').value;
        integrator.STEP_MODE = pick('STEP_MODE').value;
        integrator.INITIAL_STEP_SECONDS = (_h = num('INITIAL_STEP')) !== null && _h !== void 0 ? _h : NaN;
        integrator.ERROR_CONTROL = (_j = num('ERROR_CONTROL')) !== null && _j !== void 0 ? _j : NaN;
    }
    const ocm = new OCMT();
    ocm.METADATA = md;
    ocm.TRAJ_REF_FRAME = frame;
    ocm.COV_REF_FRAME = frame;
    ocm.TRAJ_TYPE = trajectoryType.CARTESIAN_PV;
    ocm.ORB_REVNUM = (_k = num('REV')) !== null && _k !== void 0 ? _k : 0;
    ocm.STATE_VECTOR_SIZE = STATE_ROWS;
    ocm.STATE_DATA = [...state];
    ocm.COV_TYPE = 'CARTPV';
    ocm.COV_ORDERING = covarianceOrdering.LTM;
    ocm.COV_SIZE = n;
    ocm.COV_PARAMETERS = [...names];
    ocm.COV_PARAMETER_KINDS = names.map((name) => parameterByName(name).kind);
    ocm.COV_UNITS = covarianceUnits(names);
    ocm.COVARIANCE_DATA = cartesian.value;
    ocm.PERTURBATIONS = pert;
    ocm.ORBIT_DETERMINATION = od;
    ocm.INTEGRATOR = integrator;
    return fromOcm(ocm);
}
