// $UST end to end: a failed-update status written with the published JS binding, read
// back field by field, size-prefixed with the "$UST" identifier, under the node's 2 KiB
// bound; and a pending status without the optional update id. Run: node scripts/e2e/update-status.mjs
import assert from 'node:assert/strict';
import * as flatbuffers from 'flatbuffers';
import { UST } from '../../lib/js/UST/UST.js';
import { USTFailure } from '../../lib/js/UST/USTFailure.js';
import { USTPendingUpdate } from '../../lib/js/UST/USTPendingUpdate.js';
import { USTAcknowledgement } from '../../lib/js/UST/USTAcknowledgement.js';

function encode(status) {
  const b = new flatbuffers.Builder(512);
  let pending = 0, failed = 0, ack = 0;
  if (status.pending) {
    const id = b.createString(status.pending.updateId), version = b.createString(status.pending.version), due = b.createString(status.pending.dueAt);
    USTPendingUpdate.startUSTPendingUpdate(b);
    USTPendingUpdate.addUpdateId(b, id); USTPendingUpdate.addVersion(b, version);
    USTPendingUpdate.addSequence(b, BigInt(status.pending.sequence)); USTPendingUpdate.addDueAt(b, due);
    pending = USTPendingUpdate.endUSTPendingUpdate(b);
  }
  if (status.failed) {
    const f = status.failed;
    const id = b.createString(f.updateId), version = b.createString(f.version), at = b.createString(f.at), reason = b.createString(f.reasonCode);
    USTFailure.startUSTFailure(b);
    USTFailure.addUpdateId(b, id); USTFailure.addVersion(b, version); USTFailure.addSequence(b, BigInt(f.sequence));
    USTFailure.addAt(b, at); USTFailure.addReasonCode(b, reason); USTFailure.addRolledBack(b, f.rolledBack);
    failed = USTFailure.endUSTFailure(b);
  }
  if (status.ack) {
    const id = b.createString(status.ack.updateId);
    USTAcknowledgement.startUSTAcknowledgement(b);
    USTAcknowledgement.addUpdateId(b, id); USTAcknowledgement.addSequence(b, BigInt(status.ack.sequence));
    ack = USTAcknowledgement.endUSTAcknowledgement(b);
  }
  const peer = b.createString(status.peerId), version = b.createString(status.version), state = b.createString(status.state), at = b.createString(status.at);
  const updateId = status.updateId ? b.createString(status.updateId) : 0;
  UST.startUST(b);
  UST.addPeerId(b, peer); UST.addVersion(b, version); UST.addSequence(b, BigInt(status.sequence));
  if (updateId) UST.addUpdateId(b, updateId);
  UST.addState(b, state);
  if (pending) UST.addPending(b, pending);
  if (failed) UST.addFailed(b, failed);
  if (ack) UST.addAcknowledged(b, ack);
  UST.addAt(b, at);
  UST.finishSizePrefixedUSTBuffer(b, UST.endUST(b));
  return b.asUint8Array();
}

const failedStatus = {
  peerId: '16Uiu2HAm5uSFevsYBvAcQ3Lpeu3V7DXSVBtWgYUgpBuRJtsrPhmC', version: '1.2.0', sequence: 7, updateId: 'cli-bundle-release-1.2.1',
  state: 'failed', at: '2026-11-21T00:00:00Z',
  failed: { updateId: 'cli-bundle-release-1.2.1', version: '1.2.1', sequence: 41, at: '2026-11-20T23:59:00Z', reasonCode: 'health-failed', rolledBack: true },
  ack: { updateId: 'cli-bundle-release-1.2.1', sequence: 41 },
};
const bytes = encode(failedStatus);
assert.ok(bytes.length < 2048, `a status is under the node's 2 KiB bound (${bytes.length} B)`);
assert.equal(new DataView(bytes.buffer, bytes.byteOffset).getUint32(0, true), bytes.length - 4, 'size prefix');
assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), '$UST', 'file identifier');
const read = UST.getSizePrefixedRootAsUST(new flatbuffers.ByteBuffer(bytes));
assert.equal(read.PEER_ID(), failedStatus.peerId);
assert.equal(read.VERSION(), '1.2.0');
assert.equal(read.SEQUENCE(), 7n);
assert.equal(read.UPDATE_ID(), 'cli-bundle-release-1.2.1');
assert.equal(read.STATE(), 'failed');
assert.equal(read.AT(), '2026-11-21T00:00:00Z');
assert.equal(read.PENDING(), null);
const f = read.FAILED();
assert.deepEqual([f.UPDATE_ID(), f.VERSION(), f.SEQUENCE(), f.AT(), f.REASON_CODE(), f.ROLLED_BACK()],
  ['cli-bundle-release-1.2.1', '1.2.1', 41n, '2026-11-20T23:59:00Z', 'health-failed', true]);
assert.deepEqual([read.ACKNOWLEDGED().UPDATE_ID(), read.ACKNOWLEDGED().SEQUENCE()], ['cli-bundle-release-1.2.1', 41n]);

const pendingBytes = encode({ peerId: failedStatus.peerId, version: '1.2.0', sequence: 8, state: 'pending', at: '2026-11-21T00:01:00Z',
  pending: { updateId: 'cli-bundle-release-1.2.2', version: '1.2.2', sequence: 42, dueAt: '2026-11-21T01:00:00Z' } });
const pending = UST.getSizePrefixedRootAsUST(new flatbuffers.ByteBuffer(pendingBytes));
assert.equal(pending.UPDATE_ID(), null, 'the optional update id is absent');
assert.deepEqual([pending.PENDING().UPDATE_ID(), pending.PENDING().DUE_AT()], ['cli-bundle-release-1.2.2', '2026-11-21T01:00:00Z']);
assert.equal(pending.FAILED(), null);
console.log(`PASS: $UST failed status (${bytes.length} B) and pending status (${pendingBytes.length} B) read back field by field`);
