import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

/// The RF analysis family ratified 2026-08-13: $RFL link samples, $ACI access
/// intervals, $CVP coverage geometry, $RFS surface materials. These tests
/// enforce the rulings that make the family safe on the wire — ordinal-0
/// hazards, required provenance, unit-bearing names, the packed-ring contract,
/// and the material join that stops an obstacle being a boolean.

const readSchema = (code) => readFile(`schema/${code}/main.fbs`, "utf8");

const commentsOf = (source) =>
  source
    .split("\n")
    .filter((line) => line.trim().startsWith("///") || line.trim().startsWith("//"))
    .join("\n");

describe("RF analysis family — envelopes", () => {
  const expected = {
    RFL: ["RFL_ID", "LINKS", "SAMPLE_LINK_INDEXES", "SAMPLE_EPOCHS", "PROVENANCE"],
    ACI: ["ACI_ID", "INTERVALS", "PROVENANCE"],
    CVP: [
      "COVERAGE_ID",
      "VERTEX_LONGITUDE_DEG",
      "VERTEX_LATITUDE_DEG",
      "RING_OFFSETS",
      "RING_POLYGON_INDEXES",
      "RING_ROLES",
      "CONTRIBUTING_EMITTERS",
      "PROVENANCE",
    ],
    RFS: ["MATERIAL_ID", "PROVENANCE"],
  };

  for (const [code, requiredFields] of Object.entries(expected)) {
    it(`${code} declares its root type, file identifier and required fields`, async () => {
      const source = await readSchema(code);
      assert.match(source, new RegExp(`root_type ${code};`));
      assert.match(source, new RegExp(`file_identifier "\\$${code}";`));
      for (const field of requiredFields) {
        assert.match(
          source,
          new RegExp(`${field}:\\s*\\[?[A-Za-z0-9_]+\\]?\\s*\\(required\\)`),
          `${code}.${field} must be (required)`
        );
      }
    });

    it(`${code} uses UPPER_SNAKE_CASE field names only`, async () => {
      const source = await readSchema(code);
      const fields = [...source.matchAll(/^\s{2}([A-Za-z_][A-Za-z0-9_]*):/gm)].map(
        (m) => m[1]
      );
      assert.ok(fields.length > 10, `${code} should declare fields`);
      for (const field of fields) {
        assert.match(
          field,
          /^[A-Z][A-Z0-9_]*$/,
          `${code} field ${field} must be UPPER_SNAKE_CASE — JSON keys mirror the IDL exactly`
        );
      }
    });
  }
});

describe("RF analysis family — ordinal-0 hazards are ruled at the IDL", () => {
  it("every family enum reserves ordinal 0 for a non-committal member", async () => {
    for (const code of ["RFL", "ACI", "CVP", "RFS"]) {
      const source = await readSchema(code);
      const enums = [...source.matchAll(/enum\s+(\w+)\s*:\s*\w+\s*\{([\s\S]*?)\n\}/g)];
      assert.ok(enums.length > 0, `${code} should declare enums`);
      for (const [, name, body] of enums) {
        const first = body
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line && !line.startsWith("///"))[0]
          .split(",")[0]
          .split("=")[0]
          .trim();
        assert.ok(
          ["UNSPECIFIED", "NOT_EVALUATED"].includes(first),
          `${code}.${name} ordinal 0 is ${first}; an unset field must never decode as a real claim`
        );
      }
    }
  });

  it("borrowed enums are defaulted away from their unsafe ordinal 0", async () => {
    for (const code of ["RFL", "CVP"]) {
      const source = await readSchema(code);
      const polarizations = [...source.matchAll(/POLARIZATION:\s*rfPolarization([^;]*);/g)];
      assert.ok(polarizations.length > 0, `${code} should carry a polarization`);
      for (const [, tail] of polarizations) {
        assert.match(
          tail,
          /=\s*UNKNOWN/,
          `${code} polarization must default to UNKNOWN — rfPolarization ordinal 0 is LHCP`
        );
      }
    }

    for (const code of ["RFL", "ACI", "CVP"]) {
      const source = await readSchema(code);
      assert.match(
        source,
        /TIME_SYSTEM:\s*timingStandard\s*=\s*UTC/,
        `${code} must default TIME_SYSTEM to UTC — timingStandard ordinal 0 is GMST`
      );
    }
  });

  it("RFL declares its own link-kind enum rather than inheriting the UPLINK-at-zero hazard", async () => {
    const source = await readSchema("RFL");
    assert.match(source, /enum rflLinkKind : byte \{\s*\n\s*UNSPECIFIED = 0,/);
    assert.ok(
      !/LINK_KIND:\s*linkCategory/.test(source),
      "RFL must not bind a link kind to linkCategory, whose ordinal 0 is UPLINK"
    );
  });
});

describe("RF analysis family — never-invent-data shape", () => {
  it("states the NaN-not-zero rule in every record", async () => {
    for (const code of ["RFL", "ACI", "CVP", "RFS"]) {
      const comments = commentsOf(await readSchema(code));
      assert.match(
        comments,
        /NaN/,
        `${code} must state how an unknown numeric is encoded`
      );
      assert.match(
        comments,
        /ABSENT IS NOT ZERO|ABSENT/,
        `${code} must state that absent is not zero`
      );
    }
  });

  it("names the unit in the field, not in prose", async () => {
    const rfl = await readSchema("RFL");
    for (const field of [
      "RANGE_M",
      "RANGE_RATE_M_S",
      "AZIMUTH_DEG",
      "ELEVATION_DEG",
      "DOPPLER_SHIFT_HZ",
      "EIRP_DBW",
      "FREE_SPACE_PATH_LOSS_DB",
      "RAIN_LOSS_DB",
      "CLOUD_FOG_LOSS_DB",
      "TERRAIN_DIFFRACTION_LOSS_DB",
      "POLARIZATION_LOSS_DB",
      "OBSTRUCTION_LOSS_DB",
      "RECEIVED_POWER_DBW",
      "SYSTEM_NOISE_TEMPERATURE_K",
      "GAIN_TO_NOISE_TEMPERATURE_DB_PER_K",
      "CARRIER_TO_NOISE_DENSITY_DBHZ",
      "CARRIER_TO_NOISE_DB",
      "ENERGY_PER_BIT_TO_NOISE_DENSITY_DB",
      "BIT_ERROR_RATE",
      "LINK_MARGIN_DB",
      "CHANNEL_CAPACITY_BPS",
      "INTERFERENCE_POWER_DBW",
      "CARRIER_TO_NOISE_PLUS_INTERFERENCE_DB",
      "SIGNAL_TO_INTERFERENCE_PLUS_NOISE_DB",
    ]) {
      assert.match(
        rfl,
        new RegExp(`\\n\\s{2}${field}:\\s*\\[double\\];`),
        `RFL must carry the ${field} sample column`
      );
    }
  });

  it("ACI states boundary honesty and best-server auditability", async () => {
    const aci = await readSchema("ACI");
    assert.match(aci, /BOUNDARY_TOLERANCE_S: double;/);
    assert.match(aci, /BOUNDARY_REFINEMENT: string;/);
    assert.match(aci, /SAMPLING_STEP_S: double;/);
    assert.match(aci, /MARGIN_MINIMUM_DB: double;/);
    assert.match(aci, /MARGIN_MEAN_DB: double;/);
    assert.match(aci, /MARGIN_MAXIMUM_DB: double;/);
    assert.match(aci, /DATA_VOLUME_BITS: double;/);
    assert.match(aci, /RUNNER_UP_ENDPOINT_ID: string;/);
    assert.match(aci, /LIMITING_CONSTRAINT: rflConstraint = UNSPECIFIED;/);
  });

  it("a propagator is named, never assumed", async () => {
    for (const code of ["RFL", "ACI", "CVP"]) {
      const source = await readSchema(code);
      assert.match(
        source,
        /PROPAGATOR_ID: string;/,
        `${code} provenance must name the propagator that produced its geometry`
      );
    }
  });
});

describe("CVP — the packed-ring contract", () => {
  it("documents offsets, closure, winding and the antimeridian", async () => {
    const comments = commentsOf(await readSchema("CVP"));
    assert.match(comments, /RING_COUNT \+ 1/);
    assert.match(comments, /IMPLICITLY CLOSED/);
    assert.match(comments, /counter-clockwise/);
    assert.match(comments, /±180/);
  });

  it("keeps ring role explicit rather than defaulting to OUTER", async () => {
    const cvp = await readSchema("CVP");
    assert.match(cvp, /enum cvpRingRole : byte \{\s*\n\s*UNSPECIFIED = 0,\s*\n\s*OUTER,\s*\n\s*INNER\s*\n\}/);
    assert.match(cvp, /RING_ROLES: \[cvpRingRole\] \(required\)/);
  });

  it("carries metric, threshold, epoch or interval, generation, grid and uncertainty", async () => {
    const cvp = await readSchema("CVP");
    assert.match(cvp, /METRIC: rflBudgetTerm = UNSPECIFIED;/);
    assert.match(cvp, /THRESHOLD_VALUE: double;/);
    assert.match(cvp, /THRESHOLD_COMPARISON: rflComparison = UNSPECIFIED;/);
    assert.match(cvp, /EPOCH: double;/);
    assert.match(cvp, /INTERVAL_START: double;/);
    assert.match(cvp, /INTERVAL_STOP: double;/);
    assert.match(cvp, /GENERATION: uint64;/);
    assert.match(cvp, /GRID_RESOLUTION: uint8;/);
    assert.match(cvp, /UNCERTAINTY: CVPUncertainty;/);
    assert.match(cvp, /CONTRIBUTING_EMITTERS: \[CVPEmitterRef\] \(required\)/);
  });
});

describe("RFS — obstacles are materials, not booleans", () => {
  it("carries the constitutive parameters an RF solver needs", async () => {
    const rfs = await readSchema("RFS");
    for (const field of [
      "RELATIVE_PERMITTIVITY_REAL",
      "RELATIVE_PERMITTIVITY_IMAGINARY",
      "CONDUCTIVITY_S_PER_M",
      "LOSS_TANGENT",
      "RELATIVE_PERMEABILITY_REAL",
      "REFLECTIVITY",
      "REFLECTION_LOSS_DB",
      "TRANSMISSION_LOSS_DB",
      "ATTENUATION_DB_PER_M",
      "ABSORPTION_COEFFICIENT",
      "SURFACE_ROUGHNESS_RMS_M",
      "ROUGHNESS_CORRELATION_LENGTH_M",
      "THICKNESS_M",
    ]) {
      assert.match(
        rfs,
        new RegExp(`\\n\\s{2}${field}: double;`),
        `RFS must carry ${field}`
      );
    }
    assert.match(rfs, /SCATTERING_CLASS: rfsScatteringClass = UNSPECIFIED;/);
  });

  it("bounds its frequency validity and forbids extrapolation", async () => {
    const rfs = await readSchema("RFS");
    assert.match(rfs, /FREQUENCY_MIN_MHZ: double;/);
    assert.match(rfs, /FREQUENCY_MAX_MHZ: double;/);
    assert.match(rfs, /REFERENCE_FREQUENCY_MHZ: double;/);
    assert.match(commentsOf(rfs), /EXTRAPOLATION IS FORBIDDEN/);
  });

  it("carries both the power-law fit and a per-frequency table", async () => {
    const rfs = await readSchema("RFS");
    assert.match(rfs, /PERMITTIVITY_COEFFICIENT_A: double;/);
    assert.match(rfs, /PERMITTIVITY_EXPONENT_B: double;/);
    assert.match(rfs, /CONDUCTIVITY_COEFFICIENT_C: double;/);
    assert.match(rfs, /CONDUCTIVITY_EXPONENT_D: double;/);
    assert.match(rfs, /FREQUENCY_SAMPLES: \[RFSFrequencySample\];/);
    assert.match(rfs, /REFLECTION_TABLE: \[RFSReflectionEntry\];/);
  });

  it("attaches to arbitrary geometry and to catalogued objects", async () => {
    const rfs = await readSchema("RFS");
    assert.match(rfs, /GEOMETRY: \[RFSGeometryRef\];/);
    for (const join of [
      "VAM_ID",
      "ASSET_SHA256",
      "GLTF_MATERIAL_NAME",
      "OPP_SURFACE_ID",
      "PANEL_ID",
      "NORAD_CAT_ID",
      "TBS_SITE_ID",
      "FACE_INDEXES",
      "ANALYTIC_SHAPE",
    ]) {
      assert.match(rfs, new RegExp(`${join}:`), `RFSGeometryRef must join ${join}`);
    }
  });

  it("is joined from the link samples and the coverage geometry", async () => {
    const rfl = await readSchema("RFL");
    assert.match(rfl, /table RFLObstruction \{/);
    assert.match(rfl, /MATERIAL_ID: string;/);
    assert.match(rfl, /PATH_LENGTH_IN_MATERIAL_M: double;/);
    assert.match(rfl, /INTERACTION: rflObstacleInteraction = UNSPECIFIED;/);
    assert.match(rfl, /OBSTRUCTIONS: \[RFLObstruction\];/);

    const cvp = await readSchema("CVP");
    assert.match(cvp, /table CVPObstacleRef \{/);
    assert.match(cvp, /CONTRIBUTING_OBSTACLES: \[CVPObstacleRef\];/);
  });
});

describe("RF analysis family — owner law 2026-08-06 (no vendor names)", () => {
  it("names no vendor, product or operator in any description", async () => {
    const banned = [
      "Starlink",
      "SpaceX",
      "Iridium",
      "OneWeb",
      "Kuiper",
      "Viasat",
      "Inmarsat",
      "Intelsat",
      "SES",
      "Kratos",
      "Ansys",
      "STK",
      "AGI",
      "MATLAB",
      "Google",
      "Amazon",
      "Microsoft",
      "Ericsson",
      "Nokia",
      "Huawei",
      "Qualcomm",
      "Keysight",
      "Rohde",
      "Remcom",
      "Wireless InSite",
    ];
    for (const code of ["RFL", "ACI", "CVP", "RFS"]) {
      const comments = commentsOf(await readSchema(code));
      for (const name of banned) {
        assert.ok(
          !new RegExp(`\\b${name}\\b`, "i").test(comments),
          `${code} descriptions must name no vendor (found ${name})`
        );
      }
    }
  });
});

describe("RF analysis family — wire freeze and generated bindings", () => {
  it("holds RecordType ordinals 205-208 in the frozen contract", async () => {
    const ordinals = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    const frozen = ordinals.ordinals ?? ordinals;
    assert.equal(frozen.CCT, 204);
    assert.equal(frozen.ACI, 205);
    assert.equal(frozen.CVP, 206);
    assert.equal(frozen.RFL, 207);
    assert.equal(frozen.RFS, 208);
  });

  it("generates bindings and IDL-exact JSON schema keys", async () => {
    for (const code of ["RFL", "ACI", "CVP", "RFS"]) {
      const [ts, go, cpp, jsonSchema] = await Promise.all([
        readFile(`lib/ts/${code}/${code}.ts`, "utf8"),
        readFile(`lib/go/${code}/${code}.go`, "utf8"),
        readFile(`lib/cpp/${code}/main_generated.h`, "utf8"),
        readFile(`lib/fbjson/${code}/main.fb.schema.json`, "utf8"),
      ]);

      assert.match(ts, new RegExp(`class ${code}\\b`));
      assert.match(go, new RegExp(`type ${code} struct`));
      assert.match(cpp, new RegExp(`struct ${code} FLATBUFFERS_FINAL_CLASS`));

      const schema = JSON.parse(jsonSchema);
      assert.equal(schema["x-flatbuffer-root-type"], code);
      const properties = schema.definitions[code].properties;
      for (const key of Object.keys(properties)) {
        assert.match(
          key,
          /^[A-Z][A-Z0-9_]*$/,
          `${code} JSON key ${key} must match the IDL capitalization exactly`
        );
      }
    }
  });
});
