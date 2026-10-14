import * as flatbuffers from 'flatbuffers';
/**
 * One element set's difference from the origin.
 */
export declare class ERMSetDifference implements flatbuffers.IUnpackableObject<ERMSetDifferenceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMSetDifference;
    static getRootAsERMSetDifference(bb: flatbuffers.ByteBuffer, obj?: ERMSetDifference): ERMSetDifference;
    static getSizePrefixedRootAsERMSetDifference(bb: flatbuffers.ByteBuffer, obj?: ERMSetDifference): ERMSetDifference;
    /**
     * Set epoch.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target minus set epoch, days.
     */
    AGE_DAYS(): number;
    /**
     * Prediction minus origin in the origin's RTN axes (6 values).
     */
    RTN(index: number): number | null;
    rtnLength(): number;
    rtnArray(): Float64Array | null;
    static startERMSetDifference(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addRtn(builder: flatbuffers.Builder, RTNOffset: flatbuffers.Offset): void;
    static createRtnVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRtnVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRtnVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMSetDifference(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMSetDifference(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, AGE_DAYS: number, RTNOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMSetDifferenceT;
    unpackTo(_o: ERMSetDifferenceT): void;
}
export declare class ERMSetDifferenceT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    AGE_DAYS: number;
    RTN: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, AGE_DAYS?: number, RTN?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMSetDifference.d.ts.map