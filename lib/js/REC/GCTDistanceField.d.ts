import * as flatbuffers from 'flatbuffers';
/**
 * A signed distance field of a variant's surface (the isosurface of the
 * mixture at DENSITY_THRESHOLD), on a cube of N^3 voxels over the variant's
 * bounds, stored as bytes: distance / DISTANCE_SCALE_M, negative inside,
 * clamped to [-128, 127]. Optional; a consumer without it sphere-traces
 * nothing and lights the variant from an atlas instead.
 */
export declare class GCTDistanceField implements flatbuffers.IUnpackableObject<GCTDistanceFieldT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTDistanceField;
    static getRootAsGCTDistanceField(bb: flatbuffers.ByteBuffer, obj?: GCTDistanceField): GCTDistanceField;
    static getSizePrefixedRootAsGCTDistanceField(bb: flatbuffers.ByteBuffer, obj?: GCTDistanceField): GCTDistanceField;
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
     * Metres per byte step of DATA.
     */
    DISTANCE_SCALE_M(): number;
    /**
     * Density threshold, in AMPLITUDE_UNITS, that defines the surface.
     */
    DENSITY_THRESHOLD(): number;
    /**
     * Mean amplitude over the occupied volume, AMPLITUDE_UNITS.
     */
    MEAN_AMPLITUDE(): number;
    /**
     * N^3 signed bytes, x fastest, then y, then z. Absent when the field
     * travels as the chunk named by CHUNK_CID.
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Int8Array | null;
    /**
     * Content identifier of the field when DATA is absent.
     */
    CHUNK_CID(): string | null;
    CHUNK_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGCTDistanceField(builder: flatbuffers.Builder): void;
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
    static addDistanceScaleM(builder: flatbuffers.Builder, DISTANCE_SCALE_M: number): void;
    static addDensityThreshold(builder: flatbuffers.Builder, DENSITY_THRESHOLD: number): void;
    static addMeanAmplitude(builder: flatbuffers.Builder, MEAN_AMPLITUDE: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Int8Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChunkCid(builder: flatbuffers.Builder, CHUNK_CIDOffset: flatbuffers.Offset): void;
    static endGCTDistanceField(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGCTDistanceField(builder: flatbuffers.Builder, N: number, ORIGIN_MOffset: flatbuffers.Offset, SPAN_MOffset: flatbuffers.Offset, DISTANCE_SCALE_M: number, DENSITY_THRESHOLD: number, MEAN_AMPLITUDE: number, DATAOffset: flatbuffers.Offset, CHUNK_CIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GCTDistanceFieldT;
    unpackTo(_o: GCTDistanceFieldT): void;
}
export declare class GCTDistanceFieldT implements flatbuffers.IGeneratedObject {
    N: number;
    ORIGIN_M: (number)[];
    SPAN_M: (number)[];
    DISTANCE_SCALE_M: number;
    DENSITY_THRESHOLD: number;
    MEAN_AMPLITUDE: number;
    DATA: (number)[];
    CHUNK_CID: string | Uint8Array | null;
    constructor(N?: number, ORIGIN_M?: (number)[], SPAN_M?: (number)[], DISTANCE_SCALE_M?: number, DENSITY_THRESHOLD?: number, MEAN_AMPLITUDE?: number, DATA?: (number)[], CHUNK_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTDistanceField.d.ts.map