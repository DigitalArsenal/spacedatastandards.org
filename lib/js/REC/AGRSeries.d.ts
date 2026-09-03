import * as flatbuffers from 'flatbuffers';
/**
 * One named series with parallel X and Y vectors.
 */
export declare class AGRSeries implements flatbuffers.IUnpackableObject<AGRSeriesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGRSeries;
    static getRootAsAGRSeries(bb: flatbuffers.ByteBuffer, obj?: AGRSeries): AGRSeries;
    static getSizePrefixedRootAsAGRSeries(bb: flatbuffers.ByteBuffer, obj?: AGRSeries): AGRSeries;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    X(index: number): number | null;
    xLength(): number;
    xArray(): Float64Array | null;
    Y(index: number): number | null;
    yLength(): number;
    yArray(): Float64Array | null;
    static startAGRSeries(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, XOffset: flatbuffers.Offset): void;
    static createXVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXVector(builder: flatbuffers.Builder, numElems: number): void;
    static addY(builder: flatbuffers.Builder, YOffset: flatbuffers.Offset): void;
    static createYVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createYVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startYVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAGRSeries(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGRSeries(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, XOffset: flatbuffers.Offset, YOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AGRSeriesT;
    unpackTo(_o: AGRSeriesT): void;
}
export declare class AGRSeriesT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    X: (number)[];
    Y: (number)[];
    constructor(NAME?: string | Uint8Array | null, X?: (number)[], Y?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGRSeries.d.ts.map