import * as flatbuffers from 'flatbuffers';
/**
 * One target of an arc.
 */
export declare class ERMArcTarget implements flatbuffers.IUnpackableObject<ERMArcTargetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArcTarget;
    static getRootAsERMArcTarget(bb: flatbuffers.ByteBuffer, obj?: ERMArcTarget): ERMArcTarget;
    static getSizePrefixedRootAsERMArcTarget(bb: flatbuffers.ByteBuffer, obj?: ERMArcTarget): ERMArcTarget;
    NOMINAL_DAYS(): number;
    AGE_DAYS(): number;
    /**
     * Reference epoch, ISO 8601.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference state, GCRF, km and km/s (6 values).
     */
    TRUTH(index: number): number | null;
    truthLength(): number;
    truthArray(): Float64Array | null;
    static startERMArcTarget(builder: flatbuffers.Builder): void;
    static addNominalDays(builder: flatbuffers.Builder, NOMINAL_DAYS: number): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTruth(builder: flatbuffers.Builder, TRUTHOffset: flatbuffers.Offset): void;
    static createTruthVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTruthVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTruthVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMArcTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMArcTarget(builder: flatbuffers.Builder, NOMINAL_DAYS: number, AGE_DAYS: number, EPOCHOffset: flatbuffers.Offset, TRUTHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMArcTargetT;
    unpackTo(_o: ERMArcTargetT): void;
}
export declare class ERMArcTargetT implements flatbuffers.IGeneratedObject {
    NOMINAL_DAYS: number;
    AGE_DAYS: number;
    EPOCH: string | Uint8Array | null;
    TRUTH: (number)[];
    constructor(NOMINAL_DAYS?: number, AGE_DAYS?: number, EPOCH?: string | Uint8Array | null, TRUTH?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArcTarget.d.ts.map