import * as flatbuffers from 'flatbuffers';
/**
 * One requested adaptive null and its achieved result.
 */
export declare class PAPNull implements flatbuffers.IUnpackableObject<PAPNullT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PAPNull;
    static getRootAsPAPNull(bb: flatbuffers.ByteBuffer, obj?: PAPNull): PAPNull;
    static getSizePrefixedRootAsPAPNull(bb: flatbuffers.ByteBuffer, obj?: PAPNull): PAPNull;
    NULL_ID(): string;
    NULL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AZIMUTH_DEG(): number;
    ELEVATION_DEG(): number;
    REQUESTED_DEPTH_DB(): number;
    ACHIEVED_DEPTH_DB(): number;
    ANGULAR_ERROR_DEG(): number;
    static startPAPNull(builder: flatbuffers.Builder): void;
    static addNullId(builder: flatbuffers.Builder, NULL_IDOffset: flatbuffers.Offset): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addAzimuthDeg(builder: flatbuffers.Builder, AZIMUTH_DEG: number): void;
    static addElevationDeg(builder: flatbuffers.Builder, ELEVATION_DEG: number): void;
    static addRequestedDepthDb(builder: flatbuffers.Builder, REQUESTED_DEPTH_DB: number): void;
    static addAchievedDepthDb(builder: flatbuffers.Builder, ACHIEVED_DEPTH_DB: number): void;
    static addAngularErrorDeg(builder: flatbuffers.Builder, ANGULAR_ERROR_DEG: number): void;
    static endPAPNull(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPAPNull(builder: flatbuffers.Builder, NULL_IDOffset: flatbuffers.Offset, SOURCE_IDOffset: flatbuffers.Offset, AZIMUTH_DEG: number, ELEVATION_DEG: number, REQUESTED_DEPTH_DB: number, ACHIEVED_DEPTH_DB: number, ANGULAR_ERROR_DEG: number): flatbuffers.Offset;
    unpack(): PAPNullT;
    unpackTo(_o: PAPNullT): void;
}
export declare class PAPNullT implements flatbuffers.IGeneratedObject {
    NULL_ID: string | Uint8Array | null;
    SOURCE_ID: string | Uint8Array | null;
    AZIMUTH_DEG: number;
    ELEVATION_DEG: number;
    REQUESTED_DEPTH_DB: number;
    ACHIEVED_DEPTH_DB: number;
    ANGULAR_ERROR_DEG: number;
    constructor(NULL_ID?: string | Uint8Array | null, SOURCE_ID?: string | Uint8Array | null, AZIMUTH_DEG?: number, ELEVATION_DEG?: number, REQUESTED_DEPTH_DB?: number, ACHIEVED_DEPTH_DB?: number, ANGULAR_ERROR_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PAPNull.d.ts.map