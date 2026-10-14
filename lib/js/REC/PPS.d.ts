import * as flatbuffers from 'flatbuffers';
import { ppsProduct } from './ppsProduct.js';
import { ppsScenario, ppsScenarioT } from './ppsScenario.js';
import { ppsStatus } from './ppsStatus.js';
import { ppsTelemetry, ppsTelemetryT } from './ppsTelemetry.js';
/**
 * Pointing and Power Scenario - a scenario, and the telemetry a run of it
 * produced.
 */
export declare class PPS implements flatbuffers.IUnpackableObject<PPST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PPS;
    static getRootAsPPS(bb: flatbuffers.ByteBuffer, obj?: PPS): PPS;
    static getSizePrefixedRootAsPPS(bb: flatbuffers.ByteBuffer, obj?: PPS): PPS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the run; empty = not assigned.
     */
    RUN_ID(): string | null;
    RUN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds the run was made.
     */
    CREATED_AT_MS(): bigint;
    /**
     * Identifier of the simulator that ran it.
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO(obj?: ppsScenario): ppsScenario | null;
    STATUS(): ppsStatus;
    /**
     * Stable machine-readable reason for InvalidRequest or Failed.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Products the telemetry carries.
     */
    PRODUCTS(index: number): ppsProduct | null;
    productsLength(): number;
    productsArray(): Uint8Array | null;
    /**
     * Modelling assumptions and simplifications of the run, as text.
     */
    ASSUMPTIONS(index: number): string;
    ASSUMPTIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    assumptionsLength(): number;
    TELEMETRY(obj?: ppsTelemetry): ppsTelemetry | null;
    static startPPS(builder: flatbuffers.Builder): void;
    static addRunId(builder: flatbuffers.Builder, RUN_IDOffset: flatbuffers.Offset): void;
    static addCreatedAtMs(builder: flatbuffers.Builder, CREATED_AT_MS: bigint): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addScenario(builder: flatbuffers.Builder, SCENARIOOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: ppsStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addProducts(builder: flatbuffers.Builder, PRODUCTSOffset: flatbuffers.Offset): void;
    static createProductsVector(builder: flatbuffers.Builder, data: ppsProduct[]): flatbuffers.Offset;
    static startProductsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTelemetry(builder: flatbuffers.Builder, TELEMETRYOffset: flatbuffers.Offset): void;
    static endPPS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPPSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPPSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PPST;
    unpackTo(_o: PPST): void;
}
export declare class PPST implements flatbuffers.IGeneratedObject {
    RUN_ID: string | Uint8Array | null;
    CREATED_AT_MS: bigint;
    PROVIDER: string | Uint8Array | null;
    SCENARIO: ppsScenarioT | null;
    STATUS: ppsStatus;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    PRODUCTS: (ppsProduct)[];
    ASSUMPTIONS: (string)[];
    TELEMETRY: ppsTelemetryT | null;
    constructor(RUN_ID?: string | Uint8Array | null, CREATED_AT_MS?: bigint, PROVIDER?: string | Uint8Array | null, SCENARIO?: ppsScenarioT | null, STATUS?: ppsStatus, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, PRODUCTS?: (ppsProduct)[], ASSUMPTIONS?: (string)[], TELEMETRY?: ppsTelemetryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PPS.d.ts.map