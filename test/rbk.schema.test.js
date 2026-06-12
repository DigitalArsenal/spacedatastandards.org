import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readUtf8(relativePath) {
  return fs.readFile(path.join(repoRoot, relativePath), "utf8");
}

function escapedTokenRegex(token) {
  return new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

describe("RBK schema generation", () => {
  it("defines rigid-body kinematics request and result records", async () => {
    const schemaSource = await readUtf8("schema/RBK/main.fbs");

    for (const token of [
      "enum rbkOperationCode : byte",
      "ADD_MRP",
      "SUB_MRP",
      "DCM_TO_EP",
      "EP_TO_DCM",
      "DCM_TO_MRP",
      "MRP_TO_DCM",
      "B_MATRIX_MRP",
      "B_INV_MATRIX_MRP",
      "D_MRP",
      "D_MRP_TO_OMEGA",
      "B_DOT_MATRIX_MRP",
      "DD_MRP",
      "DD_MRP_TO_D_OMEGA",
      "ADD_GIBBS",
      "SUB_GIBBS",
      "EP_TO_GIBBS",
      "GIBBS_TO_EP",
      "DCM_TO_GIBBS",
      "GIBBS_TO_DCM",
      "MRP_TO_GIBBS",
      "GIBBS_TO_MRP",
      "B_MATRIX_GIBBS",
      "B_INV_MATRIX_GIBBS",
      "D_GIBBS",
      "ADD_PRV",
      "SUB_PRV",
      "EP_TO_PRV",
      "PRV_TO_EP",
      "DCM_TO_PRV",
      "PRV_TO_DCM",
      "MRP_TO_PRV",
      "PRV_TO_MRP",
      "GIBBS_TO_PRV",
      "PRV_TO_GIBBS",
      "B_MATRIX_PRV",
      "B_INV_MATRIX_PRV",
      "D_PRV",
      "ADD_EULER",
      "SUB_EULER",
      "EULER_TO_DCM",
      "DCM_TO_EULER",
      "EULER_TO_EP",
      "EP_TO_EULER",
      "EULER_TO_MRP",
      "MRP_TO_EULER",
      "EULER_TO_GIBBS",
      "GIBBS_TO_EULER",
      "EULER_TO_PRV",
      "PRV_TO_EULER",
      "B_MATRIX_EULER",
      "B_INV_MATRIX_EULER",
      "D_EULER",
      "TILDE_MATRIX",
      "M1_ROTATION_MATRIX",
      "M2_ROTATION_MATRIX",
      "M3_ROTATION_MATRIX",
      "enum rbkEulerSequenceCode : byte",
      "EULER_121",
      "EULER_123",
      "EULER_131",
      "EULER_132",
      "EULER_212",
      "EULER_213",
      "EULER_231",
      "EULER_232",
      "EULER_312",
      "EULER_313",
      "EULER_321",
      "EULER_323",
      "enum rbkResultStatus : byte",
      "table RBKVector3",
      "X:double",
      "Y:double",
      "Z:double",
      "table RBKQuaternion",
      "Q0:double",
      "Q1:double",
      "Q2:double",
      "Q3:double",
      "table RBKMatrix3",
      "M11:double",
      "M12:double",
      "M13:double",
      "M21:double",
      "M22:double",
      "M23:double",
      "M31:double",
      "M32:double",
      "M33:double",
      "table RBKRigidBodyKinematicsRequest",
      "OPERATION:rbkOperationCode",
      "VECTOR_A:RBKVector3",
      "VECTOR_B:RBKVector3",
      "VECTOR_C:RBKVector3",
      "VECTOR_D:RBKVector3",
      "EULER_SEQUENCE:rbkEulerSequenceCode",
      "ANGLE_RAD:double",
      "QUATERNION_A:RBKQuaternion",
      "MATRIX_A:RBKMatrix3",
      "SWITCH_THRESHOLD:double",
      "table RBKRigidBodyKinematicsResult",
      "STATUS:rbkResultStatus",
      "VECTOR:RBKVector3",
      "QUATERNION:RBKQuaternion",
      "MATRIX:RBKMatrix3",
      "RIGID_BODY_REQUEST:RBKRigidBodyKinematicsRequest",
      "RIGID_BODY_RESULT:RBKRigidBodyKinematicsResult",
      "root_type RBK;",
      'file_identifier "$RBK";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates RBK bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/RBK/main.ts"),
      readUtf8("lib/ts/RBK/RBKRigidBodyKinematicsRequest.ts"),
      readUtf8("lib/ts/RBK/RBKRigidBodyKinematicsResult.ts"),
      readUtf8("lib/cpp/RBK/main_generated.h"),
      readUtf8("lib/json/RBK/main.schema.json"),
      readUtf8("lib/fbjson/RBK/main.fb.schema.json"),
    ]);

    for (const exportPath of [
      "./RBKVector3.js",
      "./RBKQuaternion.js",
      "./RBKMatrix3.js",
      "./RBKRigidBodyKinematicsRequest.js",
      "./RBKRigidBodyKinematicsResult.js",
      "./rbkEulerSequenceCode.js",
      "./rbkOperationCode.js",
      "./rbkResultStatus.js",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(exportPath));
    }

    assert.match(tsRequestSource, /class RBKRigidBodyKinematicsRequest\b/);
    assert.match(tsResultSource, /class RBKRigidBodyKinematicsResult\b/);
    assert.match(cppSource, /struct RBKVector3\b/);
    assert.match(cppSource, /struct RBKQuaternion\b/);
    assert.match(cppSource, /struct RBKMatrix3\b/);
    assert.match(cppSource, /struct RBKRigidBodyKinematicsRequest\b/);
    assert.match(cppSource, /struct RBKRigidBodyKinematicsResult\b/);

    const jsonSchema = JSON.parse(jsonSchemaSource);
    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);

    for (const definition of [
      "RBKVector3",
      "RBKQuaternion",
      "RBKMatrix3",
      "RBKRigidBodyKinematicsRequest",
      "RBKRigidBodyKinematicsResult",
      "rbkEulerSequenceCode",
      "rbkOperationCode",
      "rbkResultStatus",
    ]) {
      assert.ok(jsonSchema.definitions[definition], `JSON schema should define ${definition}`);
      assert.ok(fbJsonSchema.definitions[definition], `augmented fbjson should define ${definition}`);
    }

    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "RBK");
    assert.equal(fbJsonSchema["x-flatbuffer-file-identifier"], "$RBK");
  });
});
