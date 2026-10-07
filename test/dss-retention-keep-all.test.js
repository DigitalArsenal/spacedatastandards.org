import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { FlatcRunner } from 'flatc-wasm';
import * as flatbuffers from 'flatbuffers';
import { DSS, dssAction, dssRetention } from '../lib/js/DSS/main.js';
import { stfRetentionPolicy } from '../lib/js/STF/main.js';

// Owner 2026-10-06: CAT is a full replacement on every pull, OMM keeps every
// pull, and full replacement is a rule anyone can choose. SDS 1.236.0 appends
// KeepAll (keep every pull, pin nothing) and SetRetention (set a rule without
// subscribing); the earlier ordinals stay where they were.
describe('DSS KeepAll and SetRetention', function () {
  this.timeout(30000);
  let flatc;
  before(async () => { flatc = await FlatcRunner.init(); });

  it('appends the new values after the existing ordinals', () => {
    assert.deepEqual([dssRetention.ReplaceCurrent, dssRetention.ArchiveAll, dssRetention.KeepAll], [0, 1, 2]);
    assert.deepEqual([dssAction.Hydrate, dssAction.SetRetention], [6, 7]);
    assert.deepEqual([stfRetentionPolicy.ReplaceCurrent, stfRetentionPolicy.ArchiveAll, stfRetentionPolicy.KeepAll], [0, 1, 2]);
  });

  it('carries a standard default and a cleared lane rule through the generated bindings and flatc', () => {
    const builder = new flatbuffers.Builder(256);
    const code = builder.createString('CAT');
    DSS.startDSS(builder);
    DSS.addSchemaName(builder, code);
    DSS.addRequestedAction(builder, dssAction.SetRetention);
    DSS.addRetention(builder, dssRetention.KeepAll);
    DSS.finishSizePrefixedDSSBuffer(builder, DSS.endDSS(builder));
    const read = DSS.getSizePrefixedRootAsDSS(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    assert.equal(read.SCHEMA_NAME(), 'CAT');
    assert.equal(read.REQUESTED_ACTION(), dssAction.SetRetention);
    assert.equal(read.RETENTION(), dssRetention.KeepAll);
    assert.equal(read.PROVIDER_ID(), null);

    const schema = { entry: '/schema/DSS/main.fbs', files: { '/schema/DSS/main.fbs': readFileSync(new URL('../schema/DSS/main.fbs', import.meta.url), 'utf8') } };
    const bytes = flatc.generateBinary(schema, JSON.stringify({ SCHEMA_NAME: 'OMM', PROVIDER_ID: 'space-data-network-02', REQUESTED_ACTION: 'SetRetention' }));
    const back = JSON.parse(flatc.generateJSON(schema, { path: '/record.bin', data: bytes }, { strictJson: true, defaultsJson: true }));
    assert.equal(back.REQUESTED_ACTION, 'SetRetention');
    assert.equal(back.RETENTION, 'ReplaceCurrent', 'a frame without RETENTION reads as the default, which SetRetention treats as clearing the choice');
  });
});
