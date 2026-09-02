import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as ICNBindings from "../lib/js/ICN/main.js";
import * as TRPBindings from "../lib/js/TRP/main.js";
import * as TRVBindings from "../lib/js/TRV/main.js";

function roundTrip(root, value, finish, read) {
  const builder = new flatbuffers.Builder(4096);
  finish(builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  return read(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("console standards FlatBuffer round trips", () => {
  it("round-trips All{MinValueLocked, Any{AllowedTokens, TrustedConnections}}", () => {
    const nativeAsset = new TRPBindings.TRPAssetT(
      "eip155:1",
      "",
      "NATIVE",
      18,
    );
    const tokenAsset = new TRPBindings.TRPAssetT(
      "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      "token-address-1",
      "TOKEN",
      6,
    );

    const minValue = new TRPBindings.TRPPredicateT(
      "minimum-value",
      TRPBindings.trpPredicateKind.MinValueLocked,
      BigInt("250000000"),
      "USD",
      BigInt(0),
      [nativeAsset],
      0,
      [],
      0.0,
    );
    const allowedTokens = new TRPBindings.TRPPredicateT(
      "allowed-tokens",
      TRPBindings.trpPredicateKind.AllowedTokens,
      BigInt("1000000"),
      "USD",
      BigInt(0),
      [nativeAsset, tokenAsset],
      0,
      [],
      0.0,
    );
    const trustedConnections = new TRPBindings.TRPPredicateT(
      "trusted-connections",
      TRPBindings.trpPredicateKind.TrustedConnections,
      BigInt(0),
      "",
      BigInt(0),
      [],
      2,
      ["peer-truster-a", "peer-truster-b", "peer-truster-c"],
      0.75,
    );
    const anyGroup = new TRPBindings.TRPGroupT(
      "allowed-or-trusted",
      TRPBindings.trpCombinator.Any,
      [allowedTokens, trustedConnections],
      [],
    );
    const rootGroup = new TRPBindings.TRPGroupT(
      "root",
      TRPBindings.trpCombinator.All,
      [minValue],
      [anyGroup],
    );
    const policy = new TRPBindings.TRPT(
      "policy-1",
      "Bonded trust",
      "Compound value and connection requirements",
      rootGroup,
      10000,
      ["trust-edge", "trust-node", "entity-profile", "chain-balance"],
      true,
      BigInt("1788310800000"),
      BigInt("1788310805000"),
      "peer-evaluator-1",
      [1, 3, 5, 7, 9],
    );

    const decoded = roundTrip(
      TRPBindings.TRP,
      policy,
      TRPBindings.TRP.finishSizePrefixedTRPBuffer,
      TRPBindings.TRP.getSizePrefixedRootAsTRP,
    );

    assert.deepEqual(decoded, policy);
  });

  it("round-trips a verdict with two results and one bond evidence entry", () => {
    const evidence = new TRVBindings.TRVBondEvidenceT(
      "eip155:1",
      "subject-address-1",
      "token-address-1",
      BigInt("275000000"),
      6,
      "USD",
      275.0,
      BigInt("1787706000000"),
      BigInt("1788310810000"),
      "block:12345678",
      "balance-history?address=subject-address-1&from=1787706000000",
    );
    const minimumResult = new TRVBindings.TRVPredicateResultT(
      "minimum-value",
      TRVBindings.trpPredicateKind.MinValueLocked,
      true,
      275.0,
      250.0,
      [evidence],
      [],
      "Observed qualifying value",
    );
    const connectionsResult = new TRVBindings.TRVPredicateResultT(
      "trusted-connections",
      TRVBindings.trpPredicateKind.TrustedConnections,
      true,
      2.0,
      2.0,
      [],
      ["peer-truster-a", "peer-truster-c"],
      "Two qualifying trust edges matched",
    );
    const verdict = new TRVBindings.TRVT(
      "verdict-1",
      "policy-1",
      "subject-1",
      true,
      false,
      0.92,
      0.41,
      [minimumResult, connectionsResult],
      "chain-balance",
      BigInt("1788310815000"),
      "peer-evaluator-1",
      [2, 4, 6, 8, 10],
    );

    const decoded = roundTrip(
      TRVBindings.TRV,
      verdict,
      TRVBindings.TRV.finishSizePrefixedTRVBuffer,
      TRVBindings.TRV.getSizePrefixedRootAsTRV,
    );

    assert.deepEqual(decoded, verdict);
  });

  it("round-trips one connector of every KIND with every field populated", () => {
    const kinds = [
      ICNBindings.icnConnectorKind.UploadSession,
      ICNBindings.icnConnectorKind.HttpsPull,
      ICNBindings.icnConnectorKind.FilesystemWatch,
    ];

    for (const [index, kind] of kinds.entries()) {
      const connector = new ICNBindings.ICNT(
        `connector-${index + 1}`,
        kind,
        "OMM.fbs",
        ICNBindings.icnConnectorStatus.Active,
        `active-${index + 1}`,
        `https://ingest.invalid/source-${index + 1}`,
        "GET",
        ICNBindings.icnAuthKind.ApiKeyHeader,
        "X-Ingest-Key",
        `credential/connector-${index + 1}`,
        15000 + index,
        `/var/ingest/source-${index + 1}`,
        "*.json",
        20000 + index,
        5000 + index,
        ICNBindings.icnPostIngestAction.Archive,
        `upload-session-${index + 1}`,
        3 + index,
        BigInt(4096 + index),
        `sha256:connector-${index + 1}`,
        "json",
        12 + index,
        BigInt(1788310820000 + index),
        BigInt(1788310825000 + index),
        `last-error-${index + 1}`,
        BigInt(1788310800000 + index),
        BigInt(1788310830000 + index),
        `peer-provider-${index + 1}`,
        [index + 1, index + 2, index + 3],
      );

      const decoded = roundTrip(
        ICNBindings.ICN,
        connector,
        ICNBindings.ICN.finishSizePrefixedICNBuffer,
        ICNBindings.ICN.getSizePrefixedRootAsICN,
      );

      assert.deepEqual(decoded, connector);
    }
  });
});
