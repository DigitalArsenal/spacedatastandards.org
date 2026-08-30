import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as flatbuffers from "flatbuffers";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FBS = path.join(repoRoot, "schema", "BPF", "main.fbs");

/**
 * The IDL is the contract. Every capitalization assertion below reads the
 * field names OUT of schema/BPF/main.fbs rather than restating them, so a
 * rename in the IDL cannot pass while the JSON projection keeps the old key.
 */
function idlFieldNames(source, tableName) {
  const block = source.match(
    new RegExp(`\\btable\\s+${tableName}\\s*\\{([\\s\\S]*?)\\n\\}`),
  );
  assert.ok(block, `table ${tableName} not found in ${FBS}`);
  return block[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter((line) => /^[A-Z][A-Z0-9_]*\s*:/.test(line))
    .map((line) => line.split(":")[0].trim());
}

function idlEnumMembers(source, enumName) {
  const block = source.match(
    new RegExp(`\\benum\\s+${enumName}\\s*:[^{]*\\{([\\s\\S]*?)\\n\\}`),
  );
  assert.ok(block, `enum ${enumName} not found in ${FBS}`);
  return block[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter((line) => /^[A-Z][A-Z0-9_]*/.test(line))
    .map((line) => line.replace(/\s*=.*$/, "").replace(/,\s*$/, "").trim())
    .filter(Boolean);
}

function invertEnum(enumObject) {
  const byValue = new Map();
  for (const [name, value] of Object.entries(enumObject)) {
    if (typeof value === "number") byValue.set(value, name);
  }
  return byValue;
}

describe("BPF build profile schema", () => {
  let source;
  let bindings;

  before(async () => {
    source = await fs.readFile(FBS, "utf8");
    bindings = await import(
      pathToFileURL(path.join(repoRoot, "lib", "js", "BPF", "main.js")).href
    );
  });

  it("is rooted, identified, and wire-frozen at its appended ordinal", async () => {
    assert.match(source, /table BPF\s*\{/);
    assert.match(source, /root_type BPF;/);
    assert.match(source, /file_identifier\s+"\$BPF";/);

    const ordinals = JSON.parse(
      await fs.readFile(
        path.join(repoRoot, "schema", "REC", "RECORDTYPE_ORDINALS.json"),
        "utf8",
      ),
    );
    const table = ordinals.ordinals ?? ordinals;
    assert.equal(table.BPF, 227);

    // Appended, never inserted: no member that existed before BPF may share
    // or exceed its ordinal.
    const higher = Object.entries(table).filter(
      ([code, ordinal]) => code !== "BPF" && ordinal >= 227,
    );
    assert.deepEqual(higher, []);

    const rec = await fs.readFile(
      path.join(repoRoot, "schema", "REC", "main.fbs"),
      "utf8",
    );
    const union = rec.match(/union\s+RecordType\s*\{([^}]+)\}/)[1];
    const members = union
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
    assert.equal(members[members.length - 1], "BPF");
    assert.equal(members.indexOf("BPF") + 1, 227);
  });

  it("carries the configuration a build profile is, with the ratified spellings", () => {
    assert.deepEqual(idlFieldNames(source, "BPF"), [
      "PROFILE_ID",
      "NAME",
      "DESCRIPTION",
      "CREATED_AT",
      "UPDATED_AT",
      "TEMPLATE_SHA256",
      "PARTS",
      "MODULES",
      "RUNTIME_LOCK",
      "LICENSE_MODE",
      "ATTESTATION",
    ]);
    assert.deepEqual(idlFieldNames(source, "BPFPart"), [
      "PART_ID",
      "KIND",
      "INCLUDED",
      "CONTENT_SHA256",
      "BYTE_LENGTH",
      "DESCRIPTION",
    ]);
    assert.deepEqual(idlFieldNames(source, "BPFModule"), [
      "MODULE_ID",
      "MODULE_VERSION",
      "INCLUDED",
      "PROTECTION",
      "CONTENT_HASH",
      "MODULE_DESCRIPTOR",
    ]);
    // The lock reuses the $PLK spelling rather than minting a third one.
    assert.deepEqual(idlFieldNames(source, "BPFRuntimeLock"), [
      "ALLOWED_DOMAINS",
      "ALLOWED_TLDS",
      "DEV_DOMAINS",
      "TTL_DAYS",
      "COMPILED_AT_MS",
    ]);
    assert.deepEqual(idlFieldNames(source, "BPFAttestation"), [
      "SIGNING_PUBLIC_KEY",
      "SIGNED_AT",
      "SIGNATURE",
      "CANONICAL_JSON_SIGNATURE",
    ]);

    // An unlocked build must be a STATED configuration, never a missing one.
    assert.match(source, /RUNTIME_LOCK: BPFRuntimeLock \(required\);/);
    assert.match(source, /TEMPLATE_SHA256: string \(required\);/);
    assert.match(source, /NAME: string \(required\);/);
    assert.match(source, /TTL_DAYS: uint32 = 180;/);
    // Optional: presence of the table is the signed/unsigned statement.
    assert.match(source, /\n  ATTESTATION: BPFAttestation;/);
    assert.match(source, /MODULE_DESCRIPTOR: PLG;/);
  });

  it("cannot carry key material, a licensee, or a second source of expiry", () => {
    // A build profile is a CONFIGURATION, not a grant. $PLK owns licensee
    // identity and $LGR owns wrapped content keys; restating either here
    // would let a profile masquerade as an entitlement.
    for (const banned of [
      "EXPIRES_AT",
      "PRIVATE_KEY",
      "RECIPIENT_PRIVATE_KEY",
      "CONTENT_KEY",
      "WRAPPED_CONTENT_KEY_PAYLOAD",
      "LICENSE_KEY",
      "XPUB",
      "KEY_PATH",
      "DERIVATION_PATH",
      "MNEMONIC",
      "SEED",
      "LICENSEE_ORG",
      "LICENSEE_EMAIL",
      "LICENSEE_PEER_ID",
      "MAX_ACTIVATIONS",
      "PRICE",
      "CURRENCY",
      "PAYMENT",
      "CUSTOMER_ID",
      "SIGNED",
      "IS_SIGNED",
      "UNSIGNED",
    ]) {
      assert.equal(
        new RegExp(`\\n\\s*${banned}\\s*:`).test(source),
        false,
        `${banned} must not be a field in ${FBS}`,
      );
    }
  });

  it("projects to JSON under the IDL's own capitalization", async () => {
    const generated = JSON.parse(
      await fs.readFile(
        path.join(repoRoot, "lib", "json", "BPF", "main.schema.json"),
        "utf8",
      ),
    );
    const definitions = generated.definitions ?? generated.$defs ?? {};
    for (const table of [
      "BPF",
      "BPFPart",
      "BPFModule",
      "BPFRuntimeLock",
      "BPFAttestation",
    ]) {
      assert.ok(definitions[table], `${table} missing from the JSON schema`);
      assert.deepEqual(
        Object.keys(definitions[table].properties ?? {}),
        idlFieldNames(source, table),
        `${table} JSON keys must match the IDL capitalization exactly`,
      );
    }
  });

  it("round-trips identically through the FlatBuffer form and the canonical-JSON form", () => {
    const {
      BPF,
      BPFT,
      BPFPartT,
      BPFModuleT,
      BPFRuntimeLockT,
      BPFAttestationT,
      bpfPartKind,
      bpfProtectionTier,
      bpfLicenseMode,
    } = bindings;

    const partKindByValue = invertEnum(bpfPartKind);
    const protectionByValue = invertEnum(bpfProtectionTier);
    const licenseModeByValue = invertEnum(bpfLicenseMode);

    const build = () => {
      const lock = new BPFRuntimeLockT();
      lock.ALLOWED_DOMAINS = ["example.test", "sub.example.test"];
      lock.ALLOWED_TLDS = [".gov", ".mil"];
      lock.DEV_DOMAINS = ["localhost", "127.0.0.1"];
      lock.TTL_DAYS = 365;
      lock.COMPILED_AT_MS = BigInt("1788054269194");

      const part = new BPFPartT();
      part.PART_ID = "engine";
      part.KIND = bpfPartKind.ENGINE_BINARY;
      part.INCLUDED = true;
      part.CONTENT_SHA256 = "a".repeat(64);
      part.BYTE_LENGTH = BigInt(4194304);
      part.DESCRIPTION = "engine payload";

      const mod = new BPFModuleT();
      mod.MODULE_ID = "propagator";
      mod.MODULE_VERSION = "1.2.3";
      mod.INCLUDED = true;
      mod.PROTECTION = bpfProtectionTier.LICENSED;
      mod.CONTENT_HASH = "b".repeat(64);

      const attestation = new BPFAttestationT();
      attestation.SIGNING_PUBLIC_KEY = "c".repeat(64);
      attestation.SIGNED_AT = "2026-08-30T00:00:00.000Z";
      attestation.SIGNATURE = Array.from({ length: 64 }, (_, i) => i % 256);
      attestation.CANONICAL_JSON_SIGNATURE = Array.from(
        { length: 64 },
        (_, i) => (i * 3) % 256,
      );

      const profile = new BPFT();
      profile.PROFILE_ID = "profile-0001";
      profile.NAME = "Locked deployment";
      profile.DESCRIPTION = "suffix-locked, licensed modules";
      profile.CREATED_AT = "2026-08-30T00:00:00.000Z";
      profile.UPDATED_AT = "2026-08-30T00:00:01.000Z";
      profile.TEMPLATE_SHA256 = "d".repeat(64);
      profile.PARTS = [part];
      profile.MODULES = [mod];
      profile.RUNTIME_LOCK = lock;
      profile.LICENSE_MODE = bpfLicenseMode.LICENSE_KEY;
      profile.ATTESTATION = attestation;
      return profile;
    };

    const encode = (profile) => {
      const builder = new flatbuffers.Builder(2048);
      BPF.finishSizePrefixedBPFBuffer(builder, profile.pack(builder));
      return builder.asUint8Array().slice();
    };

    const decode = (bytes) =>
      BPF.getSizePrefixedRootAsBPF(
        new flatbuffers.ByteBuffer(bytes),
      ).unpack();

    // Canonical JSON: IDL field order, IDL capitalization, enums by member
    // name, 64-bit scalars as decimal strings, no insignificant whitespace.
    const canonical = (profile) => ({
      PROFILE_ID: profile.PROFILE_ID,
      NAME: profile.NAME,
      DESCRIPTION: profile.DESCRIPTION,
      CREATED_AT: profile.CREATED_AT,
      UPDATED_AT: profile.UPDATED_AT,
      TEMPLATE_SHA256: profile.TEMPLATE_SHA256,
      PARTS: profile.PARTS.map((entry) => ({
        PART_ID: entry.PART_ID,
        KIND: partKindByValue.get(entry.KIND),
        INCLUDED: entry.INCLUDED,
        CONTENT_SHA256: entry.CONTENT_SHA256,
        BYTE_LENGTH: entry.BYTE_LENGTH.toString(),
        DESCRIPTION: entry.DESCRIPTION,
      })),
      MODULES: profile.MODULES.map((entry) => ({
        MODULE_ID: entry.MODULE_ID,
        MODULE_VERSION: entry.MODULE_VERSION,
        INCLUDED: entry.INCLUDED,
        PROTECTION: protectionByValue.get(entry.PROTECTION),
        CONTENT_HASH: entry.CONTENT_HASH,
        MODULE_DESCRIPTOR: entry.MODULE_DESCRIPTOR,
      })),
      RUNTIME_LOCK: {
        ALLOWED_DOMAINS: profile.RUNTIME_LOCK.ALLOWED_DOMAINS,
        ALLOWED_TLDS: profile.RUNTIME_LOCK.ALLOWED_TLDS,
        DEV_DOMAINS: profile.RUNTIME_LOCK.DEV_DOMAINS,
        TTL_DAYS: profile.RUNTIME_LOCK.TTL_DAYS,
        COMPILED_AT_MS: profile.RUNTIME_LOCK.COMPILED_AT_MS.toString(),
      },
      LICENSE_MODE: licenseModeByValue.get(profile.LICENSE_MODE),
      ATTESTATION:
        profile.ATTESTATION === null
          ? null
          : {
              SIGNING_PUBLIC_KEY: profile.ATTESTATION.SIGNING_PUBLIC_KEY,
              SIGNED_AT: profile.ATTESTATION.SIGNED_AT,
              SIGNATURE: profile.ATTESTATION.SIGNATURE,
              CANONICAL_JSON_SIGNATURE:
                profile.ATTESTATION.CANONICAL_JSON_SIGNATURE,
            },
    });

    const authored = build();
    const bytes = encode(authored);
    const decoded = decode(bytes);

    // FlatBuffer form: the decoded record equals the authored one.
    assert.deepEqual(canonical(decoded), canonical(authored));

    // The canonical-JSON form carries the IDL's keys, in the IDL's order.
    const json = canonical(decoded);
    assert.deepEqual(Object.keys(json), idlFieldNames(source, "BPF"));
    assert.deepEqual(
      Object.keys(json.RUNTIME_LOCK),
      idlFieldNames(source, "BPFRuntimeLock"),
    );
    assert.deepEqual(
      Object.keys(json.ATTESTATION),
      idlFieldNames(source, "BPFAttestation"),
    );
    assert.equal(json.LICENSE_MODE, "LICENSE_KEY");
    assert.equal(json.PARTS[0].KIND, "ENGINE_BINARY");
    assert.equal(json.MODULES[0].PROTECTION, "LICENSED");

    // Both forms are stable under re-serialization: the JSON text produced
    // from the decoded record is byte-identical to the JSON text produced
    // from the record decoded from a re-encode of it.
    const reencoded = canonical(decode(encode(decoded)));
    assert.equal(JSON.stringify(reencoded), JSON.stringify(json));

    // The buffer self-identifies as $BPF.
    const plain = new flatbuffers.Builder(2048);
    BPF.finishBPFBuffer(plain, build().pack(plain));
    assert.equal(
      BPF.bufferHasIdentifier(
        new flatbuffers.ByteBuffer(plain.asUint8Array().slice()),
      ),
      true,
    );
  });

  it("defaults an unstated lifetime to 180 days and states an unlocked build explicitly", () => {
    const { BPF, BPFT, BPFRuntimeLockT, bpfLicenseMode, bpfPartKind, bpfProtectionTier } =
      bindings;

    const profile = new BPFT();
    profile.PROFILE_ID = "profile-unlocked";
    profile.NAME = "Unlocked";
    profile.TEMPLATE_SHA256 = "e".repeat(64);
    profile.RUNTIME_LOCK = new BPFRuntimeLockT();

    const builder = new flatbuffers.Builder(1024);
    BPF.finishSizePrefixedBPFBuffer(builder, profile.pack(builder));
    const decoded = BPF.getSizePrefixedRootAsBPF(
      new flatbuffers.ByteBuffer(builder.asUint8Array().slice()),
    ).unpack();

    // Unstated lifetime is 180 days, not zero.
    assert.equal(decoded.RUNTIME_LOCK.TTL_DAYS, 180);
    // Unlocked is empty-and-present, never absent.
    assert.deepEqual(decoded.RUNTIME_LOCK.ALLOWED_DOMAINS, []);
    assert.deepEqual(decoded.RUNTIME_LOCK.ALLOWED_TLDS, []);
    assert.equal(decoded.RUNTIME_LOCK.COMPILED_AT_MS, BigInt(0));
    // Unstated vocabulary decodes as UNSPECIFIED, never as a real class.
    assert.equal(decoded.LICENSE_MODE, bpfLicenseMode.UNSPECIFIED);
    assert.equal(bpfLicenseMode.UNSPECIFIED, 0);
    assert.equal(bpfPartKind.UNSPECIFIED, 0);
    assert.equal(bpfProtectionTier.UNSPECIFIED, 0);
    // Absent attestation is the unsigned statement.
    assert.equal(decoded.ATTESTATION, null);
  });

  it("keeps every vocabulary append-only and free of vendor or organization names", () => {
    for (const [enumName, expected] of [
      [
        "bpfPartKind",
        [
          "UNSPECIFIED",
          "ENGINE_BINARY",
          "IMAGERY_DATA",
          "URL_DATA",
          "DOCUMENTATION",
          "ISOLATION_LOADER",
          "SOURCE_MAPS",
          "MODULE",
          "OTHER",
        ],
      ],
      ["bpfProtectionTier", ["UNSPECIFIED", "OPEN", "ENCRYPTED", "LICENSED"]],
      ["bpfLicenseMode", ["UNSPECIFIED", "NONE", "BUNDLED_KEY", "LICENSE_KEY"]],
    ]) {
      assert.deepEqual(idlEnumMembers(source, enumName), expected);
      assert.match(source, new RegExp(`enum ${enumName} : byte \\{[\\s\\S]*?UNSPECIFIED = 0`));
    }

    const lowered = source.toLowerCase();
    for (const forbidden of [
      "orbpro",
      "cesium",
      "digitalarsenal",
      "spaceaware",
      "turion",
      "celestrak",
      "basilisk",
    ]) {
      assert.equal(
        lowered.includes(forbidden),
        false,
        `${FBS} must name capability classes, never a vendor or organization`,
      );
    }
  });
});
