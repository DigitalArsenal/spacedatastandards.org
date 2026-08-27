import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

const FBS = "schema/VCF/main.fbs";
const ANNEX = "schema/VCF/CANONICAL_SERIALIZATION.md";

describe("VCF vCard projection card schema", () => {
  it("cannot encode a card without the emitted octets it claims to carry", async () => {
    const source = await readFile(FBS, "utf8");

    assert.match(source, /table VCF\s*\{/);
    assert.match(source, /root_type VCF;/);
    assert.match(source, /file_identifier\s+"\$VCF";/);

    // The card text is the artifact. A record without it cannot be diffed,
    // served, or parity-checked, so it is the one required field on VCF.
    assert.match(source, /CARD:string \(required\);/);
    assert.match(source, /FORM:vcfCardForm = UNSPECIFIED;/);
    assert.match(source, /PHOTO_POLICY:vcfPhotoPolicy = UNSPECIFIED;/);
    assert.match(source, /PROPERTIES:\[VCFProperty\];/);
    assert.match(source, /ALIASES:\[VCFAlias\];/);

    assert.match(source, /table VCFAlias\s*\{/);
    assert.match(source, /KIND:vcfAliasKind = UNSPECIFIED;/);
    assert.match(source, /KIND_TOKEN:string \(required\);/);
    assert.match(source, /LOCAL_PART:string \(required\);/);
    assert.match(source, /DOMAIN:string \(required\);/);
    assert.match(source, /ADDRESS:string \(required\);/);
    assert.match(source, /ON_COMPACT_CARD:bool = false;/);

    assert.match(source, /table VCFSubject\s*\{/);
    assert.match(source, /SIGNING_PUBLIC_KEY:string;/);
    assert.match(source, /ENCRYPTION_PUBLIC_KEY:string;/);

    assert.match(source, /table VCFConformance\s*\{/);
    assert.match(source, /VERSION:string \(required\);/);
    assert.match(source, /LINE_ENDING:vcfLineEnding = UNSPECIFIED;/);
    assert.match(source, /FOLD_OCTET_WIDTH:uint;/);
    assert.match(source, /BYTE_LENGTH:uint;/);
    assert.match(source, /BYTE_BUDGET:uint;/);
    assert.match(source, /WITHIN_BYTE_BUDGET:bool = false;/);
    assert.match(source, /CARD_SHA256:string;/);
    assert.match(source, /CARRIES_VERIFICATION_CHAIN:bool = false;/);

    assert.match(source, /table VCFProperty\s*\{/);
    assert.match(source, /NAME:string \(required\);/);
    assert.match(source, /ORDER:uint;/);
    assert.match(source, /OCTET_LENGTH:uint;/);
  });

  it("cannot publish a derivation ancestor: no xpub, no key path, no private key", async () => {
    // Owner ruling 2026-08-19 (§21): published identity is LITERAL public keys.
    // An extended public key or a derivation path on a contact card lets any
    // holder of one child key walk the entity's whole key tree. The refusal has
    // to be structural — a field that does not exist cannot be populated.
    const source = await readFile(FBS, "utf8");

    for (const banned of [
      "XPUB",
      "XPRIV",
      "KEY_PATH",
      "PRIVATE_KEY",
      "DERIVATION_PATH",
      "MNEMONIC",
      "SEED",
    ]) {
      assert.equal(
        new RegExp(`\\n\\s*${banned}\\s*:`).test(source),
        false,
        `${banned} must not be a field in ${FBS}`
      );
    }

    // ...and no alias kind may name one either.
    const aliasEnum = source.match(/enum vcfAliasKind : byte \{([\s\S]*?)\n\}/)[1];
    assert.equal(/XPUB|EXTENDED_PUBLIC|KEY_PATH|DERIVATION/i.test(aliasEnum), false);
  });

  it("keeps every enum's ordinal-0 member a non-claim", async () => {
    const source = await readFile(FBS, "utf8");
    const first = (name) => {
      const body = source.match(
        new RegExp(`enum ${name} : byte \\{([\\s\\S]*?)\\n\\}`)
      )[1];
      return body
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("///"))
        .map((line) => line.replace(/,$/, "").trim())[0];
    };

    assert.equal(first("vcfCardForm"), "UNSPECIFIED = 0");
    assert.equal(first("vcfAliasKind"), "UNSPECIFIED = 0");
    assert.equal(first("vcfLineEnding"), "UNSPECIFIED = 0");
    assert.equal(first("vcfPhotoPolicy"), "UNSPECIFIED = 0");
  });

  it("names no vendor, product, or organisation in its descriptions", async () => {
    const source = await readFile(FBS, "utf8");
    const prose = source
      .split("\n")
      .filter((line) => line.trim().startsWith("//"))
      .join("\n");

    for (const banned of [
      "iPhone",
      "iOS",
      "Android",
      "Apple",
      "Google",
      "Microsoft",
      "Outlook",
      "go-vcard",
      "Gmail",
      "Thunderbird",
    ]) {
      assert.equal(
        new RegExp(banned, "i").test(prose),
        false,
        `${FBS} descriptions must name capability classes, not "${banned}"`
      );
    }
  });

  it("references the normative emission annex that makes CARD reproducible", async () => {
    const source = await readFile(FBS, "utf8");
    assert.match(source, /schema\/VCF\/CANONICAL_SERIALIZATION\.md/);

    const annex = await readFile(ANNEX, "utf8");
    assert.match(annex, /Status: \*\*NORMATIVE\*\*/);
    // The annex is the emission contract for the IDL, not a standard of its own.
    assert.match(annex, /schema\/VCF\/main\.fbs/);
    // Both card forms and the density ceiling the compact form is refused on.
    assert.match(annex, /FORM = FULL/);
    assert.match(annex, /FORM = COMPACT/);
    assert.match(annex, /1200 octets/);
    // The retired derivation-ancestor row must stay retired in prose too.
    assert.match(annex, /RETIRED and not representable/);
  });

  it("holds RecordType ordinal 224, appended and never reused", async () => {
    const frozen = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    assert.equal(frozen.ordinals.VCF, 224);

    // Appended at the end: no other member may share or exceed its ordinal.
    const ordinals = Object.values(frozen.ordinals);
    assert.equal(Math.max(...ordinals), 224);
    assert.equal(new Set(ordinals).size, ordinals.length);

    // ...and the union really carries it, in that position.
    const rec = await readFile("schema/REC/main.fbs", "utf8");
    const members = rec
      .match(/union RecordType \{([\s\S]*?)\n\}/)[1]
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
    assert.equal(members.indexOf("VCF") + 1, 224);
    assert.equal(members.length, 224);
  });

  it("emits JSON keys with the IDL's exact capitalization", async () => {
    // SDS law: a JSON key IS the IDL field name. A lower-cased mirror is a
    // different key and a consumer reading it reads nothing.
    const schema = JSON.parse(
      await readFile("lib/json/VCF/main.schema.json", "utf8")
    );
    const definitions = schema.definitions ?? schema.$defs ?? {};
    const source = await readFile(FBS, "utf8");

    for (const [table, definition] of Object.entries(definitions)) {
      const properties = definition.properties;
      if (!properties) continue;
      const body = source.match(
        new RegExp(`table ${table}\\s*\\{([\\s\\S]*?)\\n\\}`)
      );
      if (!body) continue;
      const declared = [...body[1].matchAll(/\n\s{2}([A-Z][A-Z0-9_]*):/g)].map(
        (match) => match[1]
      );
      assert.deepEqual(
        Object.keys(properties).sort(),
        declared.sort(),
        `${table} JSON keys must match schema/VCF/main.fbs exactly`
      );
    }
  });
});
