import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { FlatcRunner } from 'flatc-wasm';
import * as flatbuffers from 'flatbuffers';
import { TRP, TRPGroup, TRPPredicate, trpCombinator, trpPredicateKind } from '../lib/js/TRP/main.js';

// Owner 2026-10-07: trust rules are one table. Each row is a named rule, and
// a subject meets the policy only when every row passes; there is no OR.
// SDS 1.237.0 appends TRPPredicate.NAME; every earlier field and ordinal
// stays where it was.
describe('TRP named rules', function () {
  this.timeout(30000);
  let flatc;
  before(async () => { flatc = await FlatcRunner.init(); });
  const schema = () => ({ entry: '/schema/TRP/main.fbs', files: { '/schema/TRP/main.fbs': readFileSync(new URL('../schema/TRP/main.fbs', import.meta.url), 'utf8') } });

  it('keeps the existing ordinals', () => {
    assert.deepEqual([trpCombinator.All, trpCombinator.Any], [0, 1]);
    assert.deepEqual([trpPredicateKind.MinValueLocked, trpPredicateKind.ValueForDuration, trpPredicateKind.AllowedTokens, trpPredicateKind.TrustedConnections], [0, 1, 2, 3]);
  });

  it('carries each rule name through the generated bindings', () => {
    const builder = new flatbuffers.Builder(512);
    const rule = (id, name, kind, minValue) => {
      const idOffset = builder.createString(id);
      const nameOffset = builder.createString(name);
      const currency = builder.createString('USD');
      TRPPredicate.startTRPPredicate(builder);
      TRPPredicate.addPredicateId(builder, idOffset);
      TRPPredicate.addKind(builder, kind);
      TRPPredicate.addMinValue(builder, minValue);
      TRPPredicate.addValueCurrency(builder, currency);
      TRPPredicate.addName(builder, nameOffset);
      return TRPPredicate.endTRPPredicate(builder);
    };
    const rows = [rule('r1', 'Bond of $100', trpPredicateKind.MinValueLocked, 10000n), rule('r2', 'Held for a week', trpPredicateKind.ValueForDuration, 5000n)];
    const predicates = TRPGroup.createPredicatesVector(builder, rows);
    TRPGroup.startTRPGroup(builder);
    TRPGroup.addCombinator(builder, trpCombinator.All);
    TRPGroup.addPredicates(builder, predicates);
    const root = TRPGroup.endTRPGroup(builder);
    const policyId = builder.createString('trust-rules');
    TRP.startTRP(builder);
    TRP.addPolicyId(builder, policyId);
    TRP.addRoot(builder, root);
    TRP.finishSizePrefixedTRPBuffer(builder, TRP.endTRP(builder));

    const read = TRP.getSizePrefixedRootAsTRP(new flatbuffers.ByteBuffer(builder.asUint8Array()));
    const group = read.ROOT();
    assert.equal(group.COMBINATOR(), trpCombinator.All);
    assert.equal(group.predicatesLength(), 2);
    assert.deepEqual([group.PREDICATES(0).NAME(), group.PREDICATES(1).NAME()], ['Bond of $100', 'Held for a week']);
    assert.equal(group.PREDICATES(0).MIN_VALUE(), 10000n);
    assert.equal(group.groupsLength(), 0);
  });

  it('reads NAME through flatc, and a rule written without one still reads', () => {
    const named = flatc.generateBinary(schema(), JSON.stringify({ POLICY_ID: 'trust-rules', ROOT: { COMBINATOR: 'All', PREDICATES: [{ PREDICATE_ID: 'r1', KIND: 'MinValueLocked', MIN_VALUE: 10000, VALUE_CURRENCY: 'USD', NAME: 'Bond of $100' }] } }));
    const back = JSON.parse(flatc.generateJSON(schema(), { path: '/named.bin', data: named }, { strictJson: true }));
    assert.equal(back.ROOT.PREDICATES[0].NAME, 'Bond of $100');
    assert.equal(back.ROOT.PREDICATES[0].MIN_VALUE, 10000);

    const unnamed = flatc.generateBinary(schema(), JSON.stringify({ POLICY_ID: 'legacy', ROOT: { PREDICATES: [{ PREDICATE_ID: 'r1', KIND: 'TrustedConnections', REQUIRED_COUNT: 2 }] } }));
    const legacy = JSON.parse(flatc.generateJSON(schema(), { path: '/legacy.bin', data: unnamed }, { strictJson: true }));
    assert.equal(legacy.ROOT.PREDICATES[0].NAME, undefined);
    assert.equal(legacy.ROOT.PREDICATES[0].REQUIRED_COUNT, 2);
  });
});
