import assert from 'node:assert/strict';

import * as OCM from '../lib/js/OCM/main.js';
import * as PROD from '../lib/js/PROD/main.js';
import { EPOCH, GM, PARAMETERS, odrWith, ocmWith, packOcm, packOdr, stmWith, unpackOcm, unpackOdr } from './fixtures/prod/records.mjs';

const names = (count) => PARAMETERS.slice(0, count).map((p) => p[0]);
const must = (result) => { assert.ok(result.ok, result.ok ? '' : `${result.refusal.code}: ${result.refusal.message}`); return result.value; };
const code = (result) => { assert.ok(!result.ok, 'expected a refusal'); return result.refusal.code; };

describe('PROD record: the canonical Record over the $OCM and $ODR', () => {
  it('fixes the five parameters, their order, symbols, units and typed keys, and the state units (baseline 1.1, 1.2)', () => {
    assert.deepEqual(PROD.PARAMETERS.map((p) => p.name), ['DRAG_AREA_OVER_MASS', 'DRAG_AREA_OVER_MASS_RATE', 'SRP_AREA_OVER_MASS', 'IN_TRACK_ACCELERATION', 'OUTGASSING_ACCELERATION']);
    assert.deepEqual(PROD.PARAMETERS.map((p) => p.symbol), ['B', 'BDOT', 'AGOM', 'T', 'OUTGASSING']);
    assert.deepEqual(PROD.PARAMETERS.map((p) => p.units), ['m**2/kg', 'm**2/kg/s', 'm**2/kg', 'm/s**2', 'km/s**2']);
    assert.deepEqual(PROD.PARAMETERS.map((p) => p.kind), [1, 2, 3, 4, 16]);
    assert.equal(PROD.PARAMETERS[4].kind, OCM.prwDynamicParameter.OUTGASSING_ACCELERATION);
    assert.deepEqual(PROD.STATE_UNITS, ['km', 'km', 'km', 'km/s', 'km/s', 'km/s']);
    assert.equal(PROD.COVARIANCE_ORDERING, OCM.covarianceOrdering.LTM);
  });

  it('fixes the equinoctial order as the $OCM EQUINOCTIAL set, the retrograde factor last (D2)', () => {
    assert.deepEqual(PROD.EQUINOCTIAL_ORDER, ['SEMI_MAJOR_AXIS', 'AF', 'AG', 'MEAN_LONGITUDE', 'CHI', 'PSI', 'RETROGRADE_FACTOR']);
    assert.deepEqual(PROD.EQUINOCTIAL_UNITS, ['km', 'n/a', 'n/a', 'deg', 'n/a', 'n/a', 'n/a']);
  });

  for (const count of [0, 1, 2, 5]) {
    const size = 6 + count;
    it(`round-trips an $OCM of COV_SIZE ${size} byte for byte: bytes -> Record -> bytes`, () => {
      const ocm = ocmWith(names(count));
      const bytes = packOcm(ocm);
      const odrBytes = packOdr(odrWith(4));
      const record = must(PROD.fromOcm(unpackOcm(bytes), unpackOdr(odrBytes)));
      const back = must(PROD.toOcm(record));
      assert.equal(Buffer.compare(Buffer.from(packOcm(back)), Buffer.from(bytes)), 0, 'the $OCM re-encodes to the bytes it came from');
      assert.equal(record.covariance.size, size);
      assert.deepEqual(record.covariance.parameters, names(count));
      assert.equal(record.covariance.parameters.length, size - 6, 'COV_PARAMETERS has COV_SIZE - 6 entries (D10)');
      assert.equal(record.covariance.units.length, size, 'COV_UNITS has COV_SIZE entries (D10)');
      assert.deepEqual(record.covariance.units, PROD.covarianceUnits(names(count)));
      assert.deepEqual(record.covariance.kinds, PARAMETERS.slice(0, count).map((p) => p[1]));
      assert.equal(record.covariance.perEpoch.length, 3);
      const first = record.covariance.perEpoch[0];
      assert.equal(first.ltm.length, (size * (size + 1)) / 2);
      first.sigma.forEach((s, i) => assert.equal(s, Math.sqrt(first.ltm[((i + 1) * (i + 2)) / 2 - 1]), `sigma ${i} is the root of the diagonal`));
      assert.deepEqual(record.fit.solvedFor, names(count));
      assert.deepEqual(record.elements.parameters.map((p) => [p.name, p.solvedFor]), PARAMETERS.map((p) => [p[0], names(count).includes(p[0])]));
    });
  }

  it('derives the epoch axis in minutes from EPOCH_TZERO, the first revolution number and the equinoctial set at GM', () => {
    const record = must(PROD.fromOcm(ocmWith(names(2))));
    assert.deepEqual(record.epochs.map((e) => e.minutes), [0, 1, 2]);
    assert.equal(record.epochs[0].epochMs, Date.parse(EPOCH));
    assert.deepEqual(record.epochs.map((e) => e.rev), [48170, null, null]);
    assert.equal(record.meta.gm, GM);
    assert.ok(record.elements.equinoctial, 'an equinoctial set at the first state');
    assert.ok(Math.abs(record.elements.equinoctial[0] - 6878.137) < 1e-6, 'the semi-major axis of the circular fixture');
    assert.equal(record.elements.equinoctial[6], 1, 'a direct orbit');
    assert.deepEqual([record.meta.theory, record.meta.frame, record.meta.nutationTag, record.meta.taiMinusUtc, record.meta.toolVersion], ['OSCULATING', 'TEME', 'IAU 1980', 37, 'sdn-ap 0.6.0']);
    assert.deepEqual([record.meta.ut1Rate, record.meta.polarMotionX, record.meta.polarMotionY], [null, null, null], 'no typed home: absent, never zero');
    assert.deepEqual([record.fit.observations, record.fit.tracks, record.fit.weightedRms, record.fit.sedr, record.fit.iterations, record.fit.converged, record.fit.rmsKm], [412, 31, 1.09, 2.5e-6, 7, true, 0.41]);
  });

  it('reads the residuals from the $ODR with the residual as OBSERVED_VALUE minus COMPUTED_VALUE (D11)', () => {
    const record = must(PROD.fromOcm(ocmWith(names(1)), odrWith(4)));
    assert.equal(record.residuals.length, 4);
    for (const [i, r] of record.residuals.entries()) {
      assert.ok(Math.abs(r.residual - 0.0021 * (i + 1)) < 1e-9, `residual ${i} is observed minus computed`);
      assert.equal(r.accepted, i % 2 === 0);
      assert.equal(r.typeName, i % 2 ? 'RIGHT_ASCENSION_DECLINATION' : 'LASER_RANGE');
      assert.equal(r.code, '4');
      assert.equal(r.epochMs, Date.parse(EPOCH) + i * 30000);
    }
    assert.deepEqual(must(PROD.fromOcm(ocmWith(names(1)))).residuals, [], 'no $ODR: no residuals (P9 is refused by its writer, D6)');
  });

  it('carries the module\'s STM rows per epoch as sensitivities, and none without them (D12)', () => {
    const without = must(PROD.fromOcm(ocmWith(names(1))));
    assert.equal(without.covariance.sensitivities, null);
    const withStm = must(PROD.fromOcm(ocmWith(names(1)), null, stmWith(3, 7)));
    assert.equal(withStm.covariance.sensitivities.length, 3);
    assert.equal(withStm.covariance.sensitivities[0].length, 7);
    assert.equal(code(PROD.fromOcm(ocmWith(names(1)), null, stmWith(2, 7))), 'stm-shape');
  });

  it('refuses with the typed codes', () => {
    const utm = ocmWith(names(1)); utm.COV_ORDERING = OCM.covarianceOrdering.UTM;
    assert.equal(code(PROD.fromOcm(utm)), 'cov-ordering:UTM');
    const unknown = ocmWith(names(1)); unknown.COV_PARAMETERS = ['BALLISTIC']; unknown.COV_PARAMETER_KINDS = [];
    assert.equal(code(PROD.fromOcm(unknown)), 'parameter-unknown:BALLISTIC');
    const order = ocmWith(names(2)); order.COV_PARAMETERS = [names(3)[2], names(3)[0]]; order.COV_PARAMETER_KINDS = [];
    assert.equal(code(PROD.fromOcm(order)), 'parameter-order');
    const size = ocmWith(names(1)); size.COV_SIZE = 9;
    assert.equal(code(PROD.fromOcm(size)), 'cov-size');
    const units = ocmWith(names(1)); units.COV_UNITS = units.COV_UNITS.slice(0, 6);
    assert.equal(code(PROD.fromOcm(units)), 'units-length');
    const mismatch = ocmWith(names(1)); mismatch.COV_UNITS = [...mismatch.COV_UNITS.slice(0, 6), 'kg/m**2'];
    assert.equal(code(PROD.fromOcm(mismatch)), 'units-mismatch:7');
    const held = ocmWith(names(1), { solved: [] });
    assert.equal(code(PROD.fromOcm(held)), 'parameter-not-solved:DRAG_AREA_OVER_MASS');
    const extra = ocmWith(names(1), { solved: names(2) });
    assert.equal(code(PROD.fromOcm(extra)), 'solved-set-mismatch:DRAG_AREA_OVER_MASS_RATE');
    const epoch = ocmWith(names(1)); epoch.METADATA.EPOCH_TZERO = null;
    assert.equal(code(PROD.fromOcm(epoch)), 'record-missing:METADATA.EPOCH_TZERO');
    const metadata = ocmWith(names(1)); metadata.METADATA = null;
    assert.equal(code(PROD.fromOcm(metadata)), 'record-missing:METADATA');
    const malformed = ocmWith(names(1)); malformed.METADATA.EPOCH_TZERO = 'yesterday';
    assert.equal(code(PROD.fromOcm(malformed)), 'epoch-form:METADATA.EPOCH_TZERO');
    const epochs = ocmWith(names(1)); epochs.STATE_EPOCHS = [EPOCH];
    assert.equal(code(PROD.fromOcm(epochs)), 'state-epochs');
    const traj = ocmWith(names(1)); traj.TRAJ_TYPE = OCM.trajectoryType.KEPLERIAN;
    assert.equal(code(PROD.fromOcm(traj)), 'traj-type:KEPLERIAN');
    const empty = ocmWith(names(0)); empty.STATE_DATA = []; empty.COVARIANCE_DATA = [];
    assert.equal(code(PROD.fromOcm(empty)), 'record-missing:STATE_DATA');
    assert.deepEqual(PROD.REFUSAL_CODES.slice(0, 6), ['record-missing:<field>', 'parameter-unknown:<name>', 'parameter-order', 'cov-size', 'cov-ordering:<ordering>', 'units-length']);
  });
});
