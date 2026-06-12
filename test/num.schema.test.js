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

describe("NUM schema generation", () => {
  it("defines numerical root-solving request and result records", async () => {
    const schemaSource = await readUtf8("schema/NUM/main.fbs");

    for (const token of [
      "enum numOperationCode : byte",
      "NEWTON_RAPHSON",
      "enum numFunctionCode : byte",
      "QUADRATIC_MINUS_CONSTANT",
      "enum numResultStatus : byte",
      "DID_NOT_CONVERGE",
      "table NUMRootSolveRequest",
      "OPERATION:numOperationCode",
      "FUNCTION:numFunctionCode",
      "INITIAL_ESTIMATE:double",
      "TARGET_VALUE:double",
      "ACCURACY:double",
      "MAX_ITERATIONS:uint32",
      "TRACE_ID:string",
      "table NUMRootSolveResult",
      "STATUS:numResultStatus",
      "ROOT:double",
      "RESIDUAL:double",
      "ITERATIONS:uint32",
      "ERROR_MESSAGE:string",
      "ROOT_SOLVE_REQUEST:NUMRootSolveRequest",
      "ROOT_SOLVE_RESULT:NUMRootSolveResult",
      "table NUMVectorSaturateRequest",
      "STATE:[double]",
      "LOWER_BOUNDS:[double]",
      "UPPER_BOUNDS:[double]",
      "table NUMVectorSaturateResult",
      "SATURATED_STATE:[double]",
      "VECTOR_SATURATE_REQUEST:NUMVectorSaturateRequest",
      "VECTOR_SATURATE_RESULT:NUMVectorSaturateResult",
      "enum numDiscretizeRoundDirection : byte",
      "FROM_ZERO",
      "NEAR",
      "table NUMVectorDiscretizeRequest",
      "LSB:[double]",
      "ROUND_DIRECTION:numDiscretizeRoundDirection",
      "CARRY_ERROR:bool",
      "PREVIOUS_ERROR:[double]",
      "table NUMVectorDiscretizeResult",
      "DISCRETIZED_STATE:[double]",
      "DISCRETIZATION_ERROR:[double]",
      "VECTOR_DISCRETIZE_REQUEST:NUMVectorDiscretizeRequest",
      "VECTOR_DISCRETIZE_RESULT:NUMVectorDiscretizeResult",
      "LINEAR_INTERPOLATION",
      "BILINEAR_INTERPOLATION",
      "GAUSS_MARKOV_SEQUENCE",
      "table NUMScalarInterpolationRequest",
      "INTERPOLATION_X:double",
      "INTERPOLATION_Y:double",
      "VALUE1:double",
      "VALUE2:double",
      "Z11:double",
      "Z12:double",
      "Z21:double",
      "Z22:double",
      "table NUMScalarInterpolationResult",
      "VALUE:double",
      "SCALAR_INTERPOLATION_REQUEST:NUMScalarInterpolationRequest",
      "SCALAR_INTERPOLATION_RESULT:NUMScalarInterpolationResult",
      "table NUMGaussMarkovRequest",
      "DIMENSION:uint32",
      "SAMPLE_COUNT:uint32",
      "WARMUP_COUNT:uint32",
      "RNG_SEED:uint32",
      "PROPAGATION_MATRIX:[double]",
      "NOISE_MATRIX:[double]",
      "STATE_BOUNDS:[double]",
      "EMIT_SAMPLES:bool",
      "table NUMGaussMarkovResult",
      "MEAN:[double]",
      "STANDARD_DEVIATION:[double]",
      "MINIMUM:[double]",
      "MAXIMUM:[double]",
      "FINAL_STATE:[double]",
      "SAMPLES:[double]",
      "GAUSS_MARKOV_REQUEST:NUMGaussMarkovRequest",
      "GAUSS_MARKOV_RESULT:NUMGaussMarkovResult",
      "root_type NUM;",
      'file_identifier "$NUM";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("generates NUM bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      tsVectorRequestSource,
      tsVectorResultSource,
      tsDiscretizeRequestSource,
      tsDiscretizeResultSource,
      tsInterpolationRequestSource,
      tsInterpolationResultSource,
      tsGaussMarkovRequestSource,
      tsGaussMarkovResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/NUM/main.ts"),
      readUtf8("lib/ts/NUM/NUMRootSolveRequest.ts"),
      readUtf8("lib/ts/NUM/NUMRootSolveResult.ts"),
      readUtf8("lib/ts/NUM/NUMVectorSaturateRequest.ts"),
      readUtf8("lib/ts/NUM/NUMVectorSaturateResult.ts"),
      readUtf8("lib/ts/NUM/NUMVectorDiscretizeRequest.ts"),
      readUtf8("lib/ts/NUM/NUMVectorDiscretizeResult.ts"),
      readUtf8("lib/ts/NUM/NUMScalarInterpolationRequest.ts"),
      readUtf8("lib/ts/NUM/NUMScalarInterpolationResult.ts"),
      readUtf8("lib/ts/NUM/NUMGaussMarkovRequest.ts"),
      readUtf8("lib/ts/NUM/NUMGaussMarkovResult.ts"),
      readUtf8("lib/cpp/NUM/main_generated.h"),
      readUtf8("lib/json/NUM/main.schema.json"),
      readUtf8("lib/fbjson/NUM/main.fb.schema.json"),
    ]);

    for (const token of [
      "export * from './NUM.js';",
      "export * from './NUMRootSolveRequest.js';",
      "export * from './NUMRootSolveResult.js';",
      "export * from './NUMVectorSaturateRequest.js';",
      "export * from './NUMVectorSaturateResult.js';",
      "export * from './NUMVectorDiscretizeRequest.js';",
      "export * from './NUMVectorDiscretizeResult.js';",
      "export * from './NUMScalarInterpolationRequest.js';",
      "export * from './NUMScalarInterpolationResult.js';",
      "export * from './NUMGaussMarkovRequest.js';",
      "export * from './NUMGaussMarkovResult.js';",
      "export * from './numOperationCode.js';",
      "export * from './numFunctionCode.js';",
      "export * from './numDiscretizeRoundDirection.js';",
      "export * from './numResultStatus.js';",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(token));
    }

    for (const token of [
      "INITIAL_ESTIMATE():number",
      "TARGET_VALUE():number",
      "ACCURACY():number",
      "MAX_ITERATIONS():number",
    ]) {
      assert.match(tsRequestSource, escapedTokenRegex(token));
    }

    for (const token of ["ROOT():number", "RESIDUAL():number", "ITERATIONS():number"]) {
      assert.match(tsResultSource, escapedTokenRegex(token));
    }

    for (const token of ["STATE(index: number):number", "LOWER_BOUNDS(index: number):number", "UPPER_BOUNDS(index: number):number"]) {
      assert.match(tsVectorRequestSource, escapedTokenRegex(token));
    }

    assert.match(tsVectorResultSource, escapedTokenRegex("SATURATED_STATE(index: number):number"));

    for (const token of [
      "STATE(index: number):number",
      "LSB(index: number):number",
      "ROUND_DIRECTION():numDiscretizeRoundDirection",
      "CARRY_ERROR():boolean",
      "PREVIOUS_ERROR(index: number):number",
    ]) {
      assert.match(tsDiscretizeRequestSource, escapedTokenRegex(token));
    }

    for (const token of [
      "DISCRETIZED_STATE(index: number):number",
      "DISCRETIZATION_ERROR(index: number):number",
    ]) {
      assert.match(tsDiscretizeResultSource, escapedTokenRegex(token));
    }

    for (const token of [
      "INTERPOLATION_X():number",
      "INTERPOLATION_Y():number",
      "VALUE1():number",
      "VALUE2():number",
      "Z11():number",
      "Z12():number",
      "Z21():number",
      "Z22():number",
    ]) {
      assert.match(tsInterpolationRequestSource, escapedTokenRegex(token));
    }

    assert.match(tsInterpolationResultSource, escapedTokenRegex("VALUE():number"));

    for (const token of [
      "DIMENSION():number",
      "SAMPLE_COUNT():number",
      "WARMUP_COUNT():number",
      "RNG_SEED():number",
      "PROPAGATION_MATRIX(index: number):number",
      "NOISE_MATRIX(index: number):number",
      "STATE_BOUNDS(index: number):number",
      "EMIT_SAMPLES():boolean",
    ]) {
      assert.match(tsGaussMarkovRequestSource, escapedTokenRegex(token));
    }

    for (const token of [
      "MEAN(index: number):number",
      "STANDARD_DEVIATION(index: number):number",
      "MINIMUM(index: number):number",
      "MAXIMUM(index: number):number",
      "FINAL_STATE(index: number):number",
      "SAMPLES(index: number):number",
    ]) {
      assert.match(tsGaussMarkovResultSource, escapedTokenRegex(token));
    }

    assert.match(cppSource, escapedTokenRegex("struct NUMRootSolveRequest"));
    assert.match(cppSource, escapedTokenRegex("struct NUMRootSolveResult"));
    assert.match(cppSource, escapedTokenRegex("struct NUMVectorSaturateRequest"));
    assert.match(cppSource, escapedTokenRegex("struct NUMVectorSaturateResult"));
    assert.match(cppSource, escapedTokenRegex("struct NUMVectorDiscretizeRequest"));
    assert.match(cppSource, escapedTokenRegex("struct NUMVectorDiscretizeResult"));
    assert.match(cppSource, escapedTokenRegex("struct NUMScalarInterpolationRequest"));
    assert.match(cppSource, escapedTokenRegex("struct NUMScalarInterpolationResult"));
    assert.match(cppSource, escapedTokenRegex("struct NUMGaussMarkovRequest"));
    assert.match(cppSource, escapedTokenRegex("struct NUMGaussMarkovResult"));
    assert.match(cppSource, escapedTokenRegex("enum numDiscretizeRoundDirection"));
    assert.match(cppSource, escapedTokenRegex("enum numOperationCode"));

    const jsonSchema = JSON.parse(jsonSchemaSource);
    assert.ok(jsonSchema.definitions.NUM);
    assert.ok(jsonSchema.definitions.NUMRootSolveRequest);
    assert.ok(jsonSchema.definitions.NUMRootSolveResult);
    assert.ok(jsonSchema.definitions.NUMVectorSaturateRequest);
    assert.ok(jsonSchema.definitions.NUMVectorSaturateResult);
    assert.ok(jsonSchema.definitions.NUMVectorDiscretizeRequest);
    assert.ok(jsonSchema.definitions.NUMVectorDiscretizeResult);
    assert.ok(jsonSchema.definitions.NUMScalarInterpolationRequest);
    assert.ok(jsonSchema.definitions.NUMScalarInterpolationResult);
    assert.ok(jsonSchema.definitions.NUMGaussMarkovRequest);
    assert.ok(jsonSchema.definitions.NUMGaussMarkovResult);

    const fbJsonSchema = JSON.parse(fbJsonSchemaSource);
    assert.equal(fbJsonSchema["x-flatbuffer-root-type"], "NUM");
    assert.ok(fbJsonSchema.definitions.NUM);
  });
});
