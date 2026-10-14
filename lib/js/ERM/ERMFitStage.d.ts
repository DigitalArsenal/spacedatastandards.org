import * as flatbuffers from 'flatbuffers';
/**
 * One stage of a fit.
 */
export declare class ERMFitStage implements flatbuffers.IUnpackableObject<ERMFitStageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMFitStage;
    static getRootAsERMFitStage(bb: flatbuffers.ByteBuffer, obj?: ERMFitStage): ERMFitStage;
    static getSizePrefixedRootAsERMFitStage(bb: flatbuffers.ByteBuffer, obj?: ERMFitStage): ERMFitStage;
    /**
     * How the stage started, e.g. "osculating-to-mean", "apriori".
     */
    START(): string | null;
    START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Half-width of the stage's span, s; NaN = whole span.
     */
    HALF_WIDTH_S(): number;
    STATES(): number;
    ITERATIONS(): number;
    STOP(): string | null;
    STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REJECTED(): number;
    static startERMFitStage(builder: flatbuffers.Builder): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addHalfWidthS(builder: flatbuffers.Builder, HALF_WIDTH_S: number): void;
    static addStates(builder: flatbuffers.Builder, STATES: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addStop(builder: flatbuffers.Builder, STOPOffset: flatbuffers.Offset): void;
    static addRejected(builder: flatbuffers.Builder, REJECTED: number): void;
    static endERMFitStage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMFitStage(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset, HALF_WIDTH_S: number, STATES: number, ITERATIONS: number, STOPOffset: flatbuffers.Offset, REJECTED: number): flatbuffers.Offset;
    unpack(): ERMFitStageT;
    unpackTo(_o: ERMFitStageT): void;
}
export declare class ERMFitStageT implements flatbuffers.IGeneratedObject {
    START: string | Uint8Array | null;
    HALF_WIDTH_S: number;
    STATES: number;
    ITERATIONS: number;
    STOP: string | Uint8Array | null;
    REJECTED: number;
    constructor(START?: string | Uint8Array | null, HALF_WIDTH_S?: number, STATES?: number, ITERATIONS?: number, STOP?: string | Uint8Array | null, REJECTED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMFitStage.d.ts.map