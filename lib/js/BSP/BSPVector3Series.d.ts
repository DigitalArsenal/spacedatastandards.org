import * as flatbuffers from 'flatbuffers';
/**
 * Three coordinate arrays sharing one time vector.
 */
export declare class BSPVector3Series implements flatbuffers.IUnpackableObject<BSPVector3SeriesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BSPVector3Series;
    static getRootAsBSPVector3Series(bb: flatbuffers.ByteBuffer, obj?: BSPVector3Series): BSPVector3Series;
    static getSizePrefixedRootAsBSPVector3Series(bb: flatbuffers.ByteBuffer, obj?: BSPVector3Series): BSPVector3Series;
    /**
     * Sample or waypoint time tags in seconds.
     */
    T(index: number): number | null;
    tLength(): number;
    tArray(): Float64Array | null;
    /**
     * Coordinate 1 samples.
     */
    X1(index: number): number | null;
    x1Length(): number;
    x1Array(): Float64Array | null;
    /**
     * Coordinate 2 samples.
     */
    X2(index: number): number | null;
    x2Length(): number;
    x2Array(): Float64Array | null;
    /**
     * Coordinate 3 samples.
     */
    X3(index: number): number | null;
    x3Length(): number;
    x3Array(): Float64Array | null;
    static startBSPVector3Series(builder: flatbuffers.Builder): void;
    static addT(builder: flatbuffers.Builder, TOffset: flatbuffers.Offset): void;
    static createTVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTVector(builder: flatbuffers.Builder, numElems: number): void;
    static addX1(builder: flatbuffers.Builder, X1Offset: flatbuffers.Offset): void;
    static createX1Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createX1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startX1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addX2(builder: flatbuffers.Builder, X2Offset: flatbuffers.Offset): void;
    static createX2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createX2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startX2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addX3(builder: flatbuffers.Builder, X3Offset: flatbuffers.Offset): void;
    static createX3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createX3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startX3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endBSPVector3Series(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBSPVector3Series(builder: flatbuffers.Builder, TOffset: flatbuffers.Offset, X1Offset: flatbuffers.Offset, X2Offset: flatbuffers.Offset, X3Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BSPVector3SeriesT;
    unpackTo(_o: BSPVector3SeriesT): void;
}
export declare class BSPVector3SeriesT implements flatbuffers.IGeneratedObject {
    T: (number)[];
    X1: (number)[];
    X2: (number)[];
    X3: (number)[];
    constructor(T?: (number)[], X1?: (number)[], X2?: (number)[], X3?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BSPVector3Series.d.ts.map