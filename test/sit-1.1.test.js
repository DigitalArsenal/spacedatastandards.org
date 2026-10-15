import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import * as flatbuffers from "flatbuffers";

import {
  PVNT,
  pvnLicenseClass,
  pvnSourceKind,
  SIT,
  SITCitationT,
  siteLifecycleStatus,
  SITPartyT,
  sitPartyRole,
  SITQuantityT,
  sitQuantityKind,
  SITReferenceT,
  sitReferenceRole,
  SITStatusEvidenceT,
  SITT,
} from "../lib/js/SIT/main.js";

/** Frames of a size-prefixed $SIT stream. */
function frames(bytes) {
  const out = [];
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  for (let offset = 0; offset + 4 <= bytes.length; ) {
    const size = view.getUint32(offset, true);
    out.push(bytes.subarray(offset + 4, offset + 4 + size));
    offset += 4 + size;
  }
  return out;
}

const citation = (field, record) =>
  new SITCitationT(
    new PVNT("wikidata", pvnSourceKind.Reference, "Wikidata", "sdn-site-registry", "site-registry 0.1.0", pvnLicenseClass.Reproducible, "CC0-1.0", "wikidata"),
    record,
    `https://www.wikidata.org/wiki/${record}`,
    "2412345678",
    field,
    "2026-10-13T12:00:00Z",
  );

describe("SIT 1.1.0 site lifecycle, citations, references, parties and quantities", () => {
  it("reads every 1.0.1 record of a published lane unchanged, with the new fields at their defaults", () => {
    // The ILRS ground-station lane as published under SIT 1.0.1 (SpaceAware-UI fixture).
    const stream = new Uint8Array(readFileSync(new URL("./fixtures/sit-1.0.1-ilrs-ground-stations.fbseq", import.meta.url)));
    const records = frames(stream);
    assert.equal(records.length, 20);
    for (const bytes of records) {
      const bb = new flatbuffers.ByteBuffer(bytes);
      assert.ok(SIT.bufferHasIdentifier(bb));
      const site = SIT.getRootAsSIT(bb);
      assert.ok(site.ID());
      assert.ok(site.NAME());
      assert.ok(Math.abs(site.LATITUDE()) <= 90 && Math.abs(site.LONGITUDE()) <= 180);
      assert.equal(site.LIFECYCLE_STATUS(), siteLifecycleStatus.UNSPECIFIED);
      assert.equal(site.LIFECYCLE_STATUS_DATE(), null);
      assert.equal(site.statusEvidenceLength(), 0);
      assert.equal(site.externalReferencesLength(), 0);
      assert.equal(site.partiesLength(), 0);
      assert.equal(site.quantitiesLength(), 0);
      assert.equal(site.PROVENANCE(), null);
      // Re-encoding the decoded record keeps every 1.0.1 field.
      const builder = new flatbuffers.Builder(1024);
      builder.finish(site.unpack().pack(builder), "$SIT");
      const again = SIT.getRootAsSIT(new flatbuffers.ByteBuffer(builder.asUint8Array()));
      for (const field of ["ID", "NAME", "NETWORK", "CTR_ID", "DESCRIPTION", "SOURCE", "OPERATIONAL_STATUS"]) {
        assert.equal(again[field](), site[field](), field);
      }
      assert.equal(again.LATITUDE(), site.LATITUDE());
      assert.equal(again.integratedDevicesLength(), site.integratedDevicesLength());
    }
  });

  it("round-trips every appended field", () => {
    const site = new SITT();
    site.ID = "wikidata:Q1438110";
    site.NAME = "AEG Prüfreaktor";
    site.CATCODE = "NUCL";
    site.NETWORK = "Nuclear labs";
    site.LATITUDE = Math.fround(50.0614); // SIT positions are float32
    site.LONGITUDE = Math.fround(9.0028);
    site.CTR_ID = "276";
    site.DESCRIPTION = "ehemaliger Forschungsreaktor";
    site.LIFECYCLE_STATUS = siteLifecycleStatus.DECOMMISSIONED;
    site.LIFECYCLE_STATUS_DATE = "1978-02-22";
    site.STATUS_VERIFIED_AT = "2026-10-13T15:18:40Z";
    site.STATUS_EVIDENCE = [
      new SITStatusEvidenceT(siteLifecycleStatus.PERMANENT_SHUTDOWN, "1976", citation("P576", "Q1438110")),
      new SITStatusEvidenceT(siteLifecycleStatus.DECOMMISSIONED, "1978-02-22", citation("register:reviewed", "de:Forschungsreaktor Karlstein")),
    ];
    site.SITE_KIND = "research reactor";
    site.DESCRIPTION_LANGUAGE = "de";
    site.DESCRIPTION_CITATION = citation("description", "Q1438110");
    site.POSITION_CITATION = citation("P625", "Q1438110");
    site.EXTERNAL_REFERENCES = [
      new SITReferenceT(sitReferenceRole.RECORD, "wikidata", "Q1438110", "https://www.wikidata.org/wiki/Q1438110", "AEG Prüfreaktor", "en"),
      new SITReferenceT(sitReferenceRole.ENCYCLOPEDIA_ARTICLE, "dewiki", "Forschungsreaktor Karlstein", "https://de.wikipedia.org/wiki/Forschungsreaktor_Karlstein", "Forschungsreaktor Karlstein", "de"),
      new SITReferenceT(sitReferenceRole.REGULATORY_DOCKET, "us-nrc", "05000275", "https://www.nrc.gov/info-finder/reactors/diab1.html", "Diablo Canyon 1", "en"),
    ];
    site.PARTIES = [
      new SITPartyT(sitPartyRole.OPERATOR, "AEG", [new SITReferenceT(sitReferenceRole.RECORD, "wikidata", "Q157042", "https://www.wikidata.org/wiki/Q157042", "AEG", "en")], citation("P137", "Q1438110")),
      new SITPartyT(sitPartyRole.REGULATOR, "Bundesamt für die Sicherheit der nuklearen Entsorgung", [], citation("register:regulators", "DE")),
    ];
    site.QUANTITIES = [
      new SITQuantityT(sitQuantityKind.THERMAL_POWER, 0.1, "MW", "", citation("P2109", "Q1438110")),
      new SITQuantityT(sitQuantityKind.REACTOR_UNITS, 2, "", "", citation("units", "G100000100001")),
    ];
    site.PROVENANCE = new PVNT("sdn-site-registry", pvnSourceKind.Reference, "Wikidata", "sdn-site-registry", "site-registry 0.1.0", pvnLicenseClass.Reproducible, "CC0-1.0", "wikidata");

    const builder = new flatbuffers.Builder(1024);
    builder.finish(site.pack(builder), "$SIT");
    const read = SIT.getRootAsSIT(new flatbuffers.ByteBuffer(builder.asUint8Array())).unpack();
    assert.deepEqual(read, site);
    assert.equal(read.STATUS_EVIDENCE[1].CITATION.PROVENANCE.LICENSE_ID, "CC0-1.0");
    assert.equal(read.STATUS_EVIDENCE[1].CITATION.SOURCE_FIELD, "register:reviewed");
  });

  it("keeps every appended enum's ordinals: append only", () => {
    const source = readFileSync(new URL("../schema/SIT/main.fbs", import.meta.url), "utf8");
    const members = (name) =>
      source
        .match(new RegExp(`enum ${name}\\s*:\\s*byte\\s*\\{([\\s\\S]*?)\\}`))[1]
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("///"))
        .map((line) => line.replace(/,$/, ""));
    assert.deepEqual(members("siteLifecycleStatus"), [
      "UNSPECIFIED", "PLANNED", "UNDER_CONSTRUCTION", "CONSTRUCTION_SUSPENDED", "OPERATING", "LONG_TERM_SHUTDOWN",
      "PERMANENT_SHUTDOWN", "DECOMMISSIONING", "DECOMMISSIONED", "CANCELLED", "UNVERIFIED",
    ]);
    assert.deepEqual(members("sitReferenceRole"), ["UNSPECIFIED", "RECORD", "OFFICIAL_WEBSITE", "ENCYCLOPEDIA_ARTICLE", "REGISTRY_RECORD", "REGULATORY_DOCKET"]);
    assert.deepEqual(members("sitPartyRole"), ["UNSPECIFIED", "OPERATOR", "OWNER", "REGULATOR"]);
    assert.deepEqual(members("sitQuantityKind"), ["UNSPECIFIED", "ELECTRICAL_CAPACITY", "THERMAL_POWER", "REACTOR_UNITS", "ELEVATION"]);
    // 1.0.1's fields come first, in their order: the new ones are appended after INTEGRATED_DEVICES.
    const table = source.match(/table SIT \{([\s\S]*?)\n\}/)[1];
    const fields = [...table.matchAll(/^\s*([A-Z_]+)\s*:/gm)].map((m) => m[1]);
    assert.equal(fields.indexOf("INTEGRATED_DEVICES"), 23);
    assert.deepEqual(fields.slice(24), [
      "LIFECYCLE_STATUS", "LIFECYCLE_STATUS_DATE", "STATUS_VERIFIED_AT", "STATUS_EVIDENCE", "SITE_KIND", "DESCRIPTION_LANGUAGE",
      "DESCRIPTION_CITATION", "POSITION_CITATION", "EXTERNAL_REFERENCES", "PARTIES", "QUANTITIES", "PROVENANCE",
    ]);
  });
});
