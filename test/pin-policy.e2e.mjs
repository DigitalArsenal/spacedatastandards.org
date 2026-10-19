// $PIN end to end through lib/js: a node's default policy (only the node $EPM
// and account $EPMs pinned, both locked) and a client's change request (one
// feed rule) round-trip as size-prefixed $PIN frames, through the builder and
// the object API.
import assert from 'node:assert/strict';
import * as flatbuffers from 'flatbuffers';
import { PIN, PINT, PINRuleT, pinClass } from '../lib/js/PIN/main.js';

const classes = ['NODE_EPM', 'ACCOUNT_EPM', 'PUBLICATION', 'SHARE', 'FLOW_ASSET', 'TIP', 'STOREFRONT', 'ASSET_MODEL', 'SITE_ASSET', 'PROFILE_PHOTO'];
classes.forEach((name, ordinal) => assert.equal(pinClass[name], ordinal, `pinClass.${name} = ${ordinal}`));

const frame = (policy) => {
  const b = new flatbuffers.Builder(512);
  PIN.finishSizePrefixedPINBuffer(b, policy.pack(b));
  return b.asUint8Array();
};
const read = (bytes) => {
  const bb = new flatbuffers.ByteBuffer(bytes);
  bb.setPosition(4);
  assert.ok(PIN.bufferHasIdentifier(bb), '$PIN file identifier');
  return PIN.getSizePrefixedRootAsPIN(new flatbuffers.ByteBuffer(bytes)).unpack();
};
const rule = (cls, fields = {}) => Object.assign(new PINRuleT(), { CLASS: cls }, fields);

// 1. The default policy a fresh node answers with.
const defaults = new PINT(classes.map((name) => {
  const always = name === 'NODE_EPM' || name === 'ACCOUNT_EPM';
  return rule(pinClass[name], { ENABLED: always, LOCKED: always, PINNED_ROOTS: always ? 1n : 0n, PINNED_BYTES: always ? 1234n : 0n });
}), 0n);
const answered = read(frame(defaults));
assert.equal(answered.RULES.length, classes.length);
const enabled = answered.RULES.filter((r) => r.ENABLED).map((r) => pinClass[r.CLASS]);
assert.deepEqual(enabled, ['NODE_EPM', 'ACCOUNT_EPM']);
assert.ok(answered.RULES.filter((r) => r.ENABLED).every((r) => r.LOCKED));
assert.equal(answered.RULES[0].PINNED_BYTES, 1234n);
assert.equal(answered.RULES[2].FEED, null, 'a class rule has no FEED');
console.log(`PASS default: ${answered.RULES.length} classes, pinned = ${enabled.join(', ')}`);

// 2. A client turns one publication lane on.
const request = new PINT([rule(pinClass.PUBLICATION, { FEED: 'OMM/celestrak/gp', ENABLED: true })], 0n);
const sent = read(frame(request));
assert.equal(sent.RULES.length, 1);
assert.equal(sent.RULES[0].CLASS, pinClass.PUBLICATION);
assert.equal(sent.RULES[0].FEED, 'OMM/celestrak/gp');
assert.equal(sent.RULES[0].ENABLED, true);
assert.equal(sent.RULES[0].LOCKED, false);
console.log('PASS request: one feed rule round-trips through the object API');
console.log('PIN-POLICY-E2E PASS');
