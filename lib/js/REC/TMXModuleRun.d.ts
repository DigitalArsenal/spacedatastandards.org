import * as flatbuffers from 'flatbuffers';
import { tmxModuleRunStatus } from './tmxModuleRunStatus.js';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
/**
 * Execution telemetry and attribution for one phenomenology analyzer in this run.
 */
export declare class TMXModuleRun implements flatbuffers.IUnpackableObject<TMXModuleRunT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXModuleRun;
    static getRootAsTMXModuleRun(bb: flatbuffers.ByteBuffer, obj?: TMXModuleRun): TMXModuleRun;
    static getSizePrefixedRootAsTMXModuleRun(bb: flatbuffers.ByteBuffer, obj?: TMXModuleRun): TMXModuleRun;
    /**
     * Phenomenology axis produced by this module.
     */
    PHENOMENOLOGY(): tmxPhenomenologyKind;
    /**
     * Canonical module identifier (e.g. "analysis/asat-reach").
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Module semantic version string.
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 of the executed portable WASM artifact.
     */
    WASM_SHA256(): string | null;
    WASM_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Outcome status of this module invocation.
     */
    STATUS(): tmxModuleRunStatus;
    /**
     * Measured execution wall time in milliseconds.
     */
    WALL_TIME_MS(): number;
    /**
     * Explicit refusal or degradation reason when STATUS is not OK.
     */
    REFUSAL_REASON(): string | null;
    REFUSAL_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTMXModuleRun(builder: flatbuffers.Builder): void;
    static addPhenomenology(builder: flatbuffers.Builder, PHENOMENOLOGY: tmxPhenomenologyKind): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addWasmSha256(builder: flatbuffers.Builder, WASM_SHA256Offset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: tmxModuleRunStatus): void;
    static addWallTimeMs(builder: flatbuffers.Builder, WALL_TIME_MS: number): void;
    static addRefusalReason(builder: flatbuffers.Builder, REFUSAL_REASONOffset: flatbuffers.Offset): void;
    static endTMXModuleRun(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXModuleRun(builder: flatbuffers.Builder, PHENOMENOLOGY: tmxPhenomenologyKind, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, WASM_SHA256Offset: flatbuffers.Offset, STATUS: tmxModuleRunStatus, WALL_TIME_MS: number, REFUSAL_REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMXModuleRunT;
    unpackTo(_o: TMXModuleRunT): void;
}
export declare class TMXModuleRunT implements flatbuffers.IGeneratedObject {
    PHENOMENOLOGY: tmxPhenomenologyKind;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    WASM_SHA256: string | Uint8Array | null;
    STATUS: tmxModuleRunStatus;
    WALL_TIME_MS: number;
    REFUSAL_REASON: string | Uint8Array | null;
    constructor(PHENOMENOLOGY?: tmxPhenomenologyKind, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, WASM_SHA256?: string | Uint8Array | null, STATUS?: tmxModuleRunStatus, WALL_TIME_MS?: number, REFUSAL_REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXModuleRun.d.ts.map