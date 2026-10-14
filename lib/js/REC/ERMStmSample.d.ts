import * as flatbuffers from 'flatbuffers';
/**
 * An STM sample of a propagation.
 */
export declare class ERMStmSample implements flatbuffers.IUnpackableObject<ERMStmSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStmSample;
    static getRootAsERMStmSample(bb: flatbuffers.ByteBuffer, obj?: ERMStmSample): ERMStmSample;
    static getSizePrefixedRootAsERMStmSample(bb: flatbuffers.ByteBuffer, obj?: ERMStmSample): ERMStmSample;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SI (6 values).
     */
    STATE(index: number): number | null;
    stateLength(): number;
    stateArray(): Float64Array | null;
    /**
     * Row-major n x n, 6 <= n <= 36 (top-left 6x6 used).
     */
    STM(index: number): number | null;
    stmLength(): number;
    stmArray(): Float64Array | null;
    static startERMStmSample(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStm(builder: flatbuffers.Builder, STMOffset: flatbuffers.Offset): void;
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStmVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMStmSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMStmSample(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, STATEOffset: flatbuffers.Offset, STMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMStmSampleT;
    unpackTo(_o: ERMStmSampleT): void;
}
export declare class ERMStmSampleT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    STATE: (number)[];
    STM: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, STATE?: (number)[], STM?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStmSample.d.ts.map