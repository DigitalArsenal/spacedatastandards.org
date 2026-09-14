import * as flatbuffers from 'flatbuffers';
/**
 * A baked density volume of a variant on the same cube as its distance
 * field, for ray marching: N^3 samples of amplitude in AMPLITUDE_UNITS,
 * float16, x fastest. Optional.
 */
export declare class GCTDensityVolume implements flatbuffers.IUnpackableObject<GCTDensityVolumeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTDensityVolume;
    static getRootAsGCTDensityVolume(bb: flatbuffers.ByteBuffer, obj?: GCTDensityVolume): GCTDensityVolume;
    static getSizePrefixedRootAsGCTDensityVolume(bb: flatbuffers.ByteBuffer, obj?: GCTDensityVolume): GCTDensityVolume;
    /**
     * Voxels per axis.
     */
    N(): number;
    /**
     * Origin of voxel (0, 0, 0) in the variant frame, metres (3 values).
     */
    ORIGIN_M(index: number): number | null;
    originMLength(): number;
    originMArray(): Float32Array | null;
    /**
     * Extent of the cube along each axis, metres (3 values).
     */
    SPAN_M(index: number): number | null;
    spanMLength(): number;
    spanMArray(): Float32Array | null;
    /**
     * N^3 IEEE 754 half-precision samples as their 16-bit patterns, x
     * fastest, then y, then z. Absent when the volume travels as the chunk
     * named by CHUNK_CID.
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint16Array | null;
    /**
     * Content identifier of the volume when DATA is absent.
     */
    CHUNK_CID(): string | null;
    CHUNK_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGCTDensityVolume(builder: flatbuffers.Builder): void;
    static addN(builder: flatbuffers.Builder, N: number): void;
    static addOriginM(builder: flatbuffers.Builder, ORIGIN_MOffset: flatbuffers.Offset): void;
    static createOriginMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOriginMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOriginMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpanM(builder: flatbuffers.Builder, SPAN_MOffset: flatbuffers.Offset): void;
    static createSpanMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpanMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpanMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint16Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChunkCid(builder: flatbuffers.Builder, CHUNK_CIDOffset: flatbuffers.Offset): void;
    static endGCTDensityVolume(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGCTDensityVolume(builder: flatbuffers.Builder, N: number, ORIGIN_MOffset: flatbuffers.Offset, SPAN_MOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, CHUNK_CIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GCTDensityVolumeT;
    unpackTo(_o: GCTDensityVolumeT): void;
}
export declare class GCTDensityVolumeT implements flatbuffers.IGeneratedObject {
    N: number;
    ORIGIN_M: (number)[];
    SPAN_M: (number)[];
    DATA: (number)[];
    CHUNK_CID: string | Uint8Array | null;
    constructor(N?: number, ORIGIN_M?: (number)[], SPAN_M?: (number)[], DATA?: (number)[], CHUNK_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTDensityVolume.d.ts.map