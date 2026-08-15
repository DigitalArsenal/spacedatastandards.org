import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

/// The gridded atmosphere pair ratified 2026-08-15: $AGF two-dimensional
/// imager-derived fields, $AGV three-dimensional model volumes. These tests
/// enforce only the rulings with a computable outcome — the dual-payload
/// invariant fields, the authoritative projection block, the level-major
/// volume shape, and the JSON-key capitalization law. They do not test prose.

const CODES = ["AGF", "AGV"];

const readSchema = (code) => readFile(`schema/${code}/main.fbs`, "utf8");

/** Body of a named table, excluding comment lines. */
const tableBody = (source, name) => {
  const match = source.match(
    new RegExp(`\\ntable\\s+${name}\\s*\\{([\\s\\S]*?)\\n\\}`)
  );
  assert.ok(match, `table ${name} must exist`);
  return match[1];
};

/** Field declarations of a table as [NAME, type] pairs. */
const fieldsOf = (body) =>
  [...body.matchAll(/^\s{2}([A-Za-z_][A-Za-z0-9_]*)\s*:\s*([^;]+);/gm)].map(
    (m) => [m[1], m[2].trim()]
  );

describe("gridded atmosphere family — envelopes", () => {
  for (const code of CODES) {
    it(`${code} declares its root type and file identifier`, async () => {
      const source = await readSchema(code);
      assert.match(source, new RegExp(`root_type ${code};`));
      assert.match(source, new RegExp(`file_identifier "\\$${code}";`));
    });

    it(`${code} carries the shared spine`, async () => {
      const body = tableBody(await readSchema(code), code);
      const names = fieldsOf(body).map(([name]) => name);
      for (const field of [
        "ID",
        "EPOCH",
        "VALID_START",
        "VALID_END",
        "FORECAST_REFERENCE_TIME",
        "FORECAST_LEAD_S",
        "VARIABLE",
        "UNITS",
        "DTYPE",
        "FILL_VALUE",
        "SCALE_FACTOR",
        "ADD_OFFSET",
        "NX",
        "NY",
      ]) {
        assert.ok(names.includes(field), `${code}.${field} must exist`);
      }
    });

    it(`${code} requires ID, EPOCH, UNITS and PROVENANCE`, async () => {
      const source = await readSchema(code);
      for (const field of ["ID", "EPOCH", "UNITS", "PROVENANCE"]) {
        assert.match(
          source,
          new RegExp(`\\n  ${field}:\\s*\\[?[A-Za-z0-9_]+\\]?\\s*\\(required\\)`),
          `${code}.${field} must be (required)`
        );
      }
    });

    it(`${code} states UNITS separately from VARIABLE — units are never implied`, async () => {
      const body = tableBody(await readSchema(code), code);
      const fields = new Map(fieldsOf(body));
      assert.match(fields.get("VARIABLE"), /^agfVariable/);
      assert.match(fields.get("UNITS"), /^string \(required\)$/);
    });

    it(`${code} keeps the identity packing as the default`, async () => {
      const body = tableBody(await readSchema(code), code);
      const fields = new Map(fieldsOf(body));
      assert.equal(fields.get("SCALE_FACTOR"), "double = 1.0");
      assert.equal(fields.get("ADD_OFFSET"), "double = 0.0");
    });
  }
});

describe("gridded atmosphere family — dual payload invariant", () => {
  for (const code of CODES) {
    it(`${code} declares both payload modes and both descriptors`, async () => {
      const body = tableBody(await readSchema(code), code);
      const fields = new Map(fieldsOf(body));
      assert.equal(fields.get("PAYLOAD"), "[ubyte]");
      assert.equal(fields.get("PAYLOAD_CID"), "string");
      assert.match(fields.get("PAYLOAD_CODEC"), /^agfPayloadCodec/);
      // Required in BOTH modes: the hash proves inline and fetched bytes are
      // the same object, the size makes the inline limit checkable.
      assert.equal(fields.get("PAYLOAD_SHA256"), "string (required)");
      assert.equal(fields.get("PAYLOAD_SIZE_BYTES"), "uint64");
    });

    it(`${code} never declares PAYLOAD_BYTES — it collides with flatc's PayloadBytes() accessor`, async () => {
      const source = await readSchema(code);
      assert.doesNotMatch(
        source,
        /^\s{2}PAYLOAD_BYTES\s*:/m,
        `${code}.PAYLOAD_BYTES would generate the same Go accessor as the ` +
          `PAYLOAD vector's synthesised PayloadBytes(); use PAYLOAD_SIZE_BYTES`
      );
    });

    it(`${code} states the 1 MiB inline limit as an exact byte count`, async () => {
      const source = await readSchema(code);
      assert.match(source, /1048576/);
    });
  }
});

describe("gridded atmosphere family — geometry", () => {
  it("AGF declares every projection with an authoritative parameter block", async () => {
    const source = await readSchema("AGF");
    const projection = source.match(
      /enum\s+agfProjection\s*:\s*byte\s*\{([\s\S]*?)\n\}/
    );
    assert.ok(projection, "agfProjection must exist");
    for (const member of [
      "UNSPECIFIED = 0",
      "GEOSTATIONARY",
      "LATLON_REGULAR",
      "LAMBERT_CONFORMAL",
      "POLAR_STEREOGRAPHIC",
      "MERCATOR",
    ]) {
      assert.ok(
        projection[1].includes(member),
        `agfProjection must declare ${member}`
      );
    }

    const params = new Map(
      fieldsOf(tableBody(source, "AGFProjectionParameters"))
    );
    for (const field of [
      "SEMI_MAJOR_AXIS_M",
      "SEMI_MINOR_AXIS_M",
      "DX",
      "DY",
      "X_ORIGIN",
      "Y_ORIGIN",
      "CENTRAL_MERIDIAN_DEG",
      "ORIGIN_LATITUDE_DEG",
      "STANDARD_PARALLEL_1_DEG",
      "STANDARD_PARALLEL_2_DEG",
      "SUB_SATELLITE_LON_DEG",
      "PERSPECTIVE_HEIGHT_M",
    ]) {
      assert.ok(params.has(field), `AGFProjectionParameters.${field} must exist`);
    }
  });

  it("PROJ4/WKT strings are advisory — never (required), never the only geometry", async () => {
    const source = await readSchema("AGF");
    const params = new Map(
      fieldsOf(tableBody(source, "AGFProjectionParameters"))
    );
    assert.equal(params.get("PROJ4_STRING"), "string");
    assert.equal(params.get("WKT2_STRING"), "string");
  });

  for (const code of CODES) {
    it(`${code} binds the authoritative projection block, not a string`, async () => {
      const body = tableBody(await readSchema(code), code);
      const fields = new Map(fieldsOf(body));
      assert.equal(
        fields.get("PROJECTION_PARAMETERS"),
        "AGFProjectionParameters (required)"
      );
    });
  }
});

describe("$AGV — level-major volume shape", () => {
  it("carries NZ, an explicit vertical coordinate and explicit LEVELS", async () => {
    const source = await readSchema("AGV");
    const fields = new Map(fieldsOf(tableBody(source, "AGV")));
    assert.equal(fields.get("NZ"), "uint32");
    assert.match(fields.get("VERTICAL_COORDINATE"), /^agvVerticalCoordinate/);
    // Explicit level values, never a start-and-step or a formula.
    assert.equal(fields.get("LEVELS"), "[double] (required)");
    assert.match(fields.get("LEVEL_ORDER"), /^agvLevelOrder/);
    for (const field of [
      "HYBRID_A_COEFFICIENTS",
      "HYBRID_B_COEFFICIENTS",
      "SURFACE_PRESSURE_REFERENCE_PA",
    ]) {
      assert.ok(fields.has(field), `AGV.${field} must exist`);
    }
  });

  it("declares the full vertical coordinate vocabulary with ordinal 0 reserved", async () => {
    const source = await readSchema("AGV");
    const vertical = source.match(
      /enum\s+agvVerticalCoordinate\s*:\s*byte\s*\{([\s\S]*?)\n\}/
    );
    assert.ok(vertical, "agvVerticalCoordinate must exist");
    for (const member of [
      "UNSPECIFIED = 0",
      "PRESSURE_PA",
      "GEOMETRIC_HEIGHT_M",
      "GEOPOTENTIAL_HEIGHT_M",
      "HYBRID_SIGMA",
      "MODEL_LEVEL",
    ]) {
      assert.ok(vertical[1].includes(member), `must declare ${member}`);
    }
  });

  it("LEVEL_MAJOR is the only layout, and the index formula is stated", async () => {
    const source = await readSchema("AGV");
    const layout = source.match(
      /enum\s+agvArrayLayout\s*:\s*byte\s*\{([\s\S]*?)\n\}/
    );
    assert.ok(layout, "agvArrayLayout must exist");
    const members = [...layout[1].matchAll(/^\s*([A-Z][A-Z0-9_]*)/gm)].map(
      (m) => m[1]
    );
    assert.deepEqual(members, ["UNSPECIFIED", "LEVEL_MAJOR"]);
    assert.match(source, /k \* \(NX \* NY\) \+ j \* NX \+ i/);
    // One record per (variable, valid time): the volume is not split by level.
    assert.match(source, /NEVER PER-LEVEL/);
  });

  it("reuses the $AGF vocabulary rather than redeclaring it", async () => {
    const source = await readSchema("AGV");
    assert.match(source, /include "\.\.\/AGF\/main\.fbs";/);
    for (const shared of [
      "agfVariable",
      "agfDType",
      "agfPayloadCodec",
      "agfProjection",
      "agfRowOrder",
      "agfSourceClass",
    ]) {
      assert.doesNotMatch(
        source,
        new RegExp(`enum\\s+${shared}\\s*:`),
        `AGV must not redeclare ${shared} — one vocabulary across the pair`
      );
      assert.match(source, new RegExp(`\\b${shared}\\b`));
    }
  });
});

describe("gridded atmosphere family — provenance is data, not vocabulary", () => {
  it("SOURCE_CLASS enumerates capability classes only", async () => {
    const source = await readSchema("AGF");
    const sourceClass = source.match(
      /enum\s+agfSourceClass\s*:\s*byte\s*\{([\s\S]*?)\n\}/
    );
    assert.ok(sourceClass, "agfSourceClass must exist");
    const members = [...sourceClass[1].matchAll(/^\s*([A-Z][A-Z0-9_]*)\s*(?:=|,)/gm)].map(
      (m) => m[1]
    );
    assert.deepEqual(members, [
      "UNSPECIFIED",
      "GEO_IMAGER",
      "LEO_IMAGER",
      "NWP_MODEL",
      "REANALYSIS",
      "GROUND_RADAR",
    ]);
  });

  for (const code of CODES) {
    it(`${code} carries identity as data in its provenance table`, async () => {
      const source = await readSchema(code);
      const provenance = new Map(fieldsOf(tableBody(source, `${code}Provenance`)));
      assert.match(provenance.get("SOURCE_CLASS"), /^agfSourceClass/);
      assert.equal(provenance.get("SOURCE_ID"), "string (required)");
      for (const field of ["PRODUCT_ID", "PRODUCER", "SOURCE_URI"]) {
        assert.equal(provenance.get(field), "string", `${code}.${field}`);
      }
    });
  }
});

describe("gridded atmosphere family — JSON keys mirror the IDL", () => {
  for (const code of CODES) {
    it(`${code} declares UPPER_SNAKE_CASE field names only`, async () => {
      const source = await readSchema(code);
      const names = [...source.matchAll(/^\s{2}([A-Za-z_][A-Za-z0-9_]*)\s*:/gm)].map(
        (m) => m[1]
      );
      assert.ok(names.length > 20, `${code} should declare fields`);
      for (const name of names) {
        assert.match(
          name,
          /^[A-Z][A-Z0-9_]*$/,
          `${code} field ${name} must be UPPER_SNAKE_CASE — JSON keys are byte-identical to IDL identifiers`
        );
      }
    });

    it(`${code} reserves ordinal 0 in every enum it declares`, async () => {
      const source = await readSchema(code);
      const enums = [...source.matchAll(/enum\s+(\w+)\s*:\s*\w+\s*\{([\s\S]*?)\n\}/g)];
      assert.ok(enums.length > 0, `${code} should declare enums`);
      for (const [, name, body] of enums) {
        assert.match(
          body,
          /UNSPECIFIED = 0/,
          `${code} enum ${name} must reserve ordinal 0 for a non-committal member`
        );
      }
    });
  }
});

describe("gridded atmosphere family — additive only", () => {
  it("appends both codes to the wire-frozen union without disturbing WTH/ENV/ATM", async () => {
    const baseline = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    assert.equal(baseline.ordinals.AGF, 209);
    assert.equal(baseline.ordinals.AGV, 210);
    // The records $AGF/$AGV were ruled a LACK against these three; their
    // ordinals are untouched.
    assert.equal(baseline.ordinals.WTH, 168);
    assert.equal(baseline.ordinals.ENV, 40);
    assert.equal(baseline.ordinals.ATM, 12);
  });
});
