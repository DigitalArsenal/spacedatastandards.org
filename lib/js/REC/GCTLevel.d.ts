import * as flatbuffers from 'flatbuffers';
import { gctLevelDerivation } from './gctLevelDerivation.js';
import { gctSampleEncoding } from './gctSampleEncoding.js';
/**
 * One level of detail of one variant: a Gaussian mixture in the variant's
 * own frame (metres, origin at the variant's reference point, Z up, base of
 * the cloud near Z = 0). Levels are ordered finest first. Every per-Gaussian
 * vector holds exactly 4 * GAUSSIAN_COUNT float32 values — one RGBA texel
 * per Gaussian — in the same Gaussian order.
 */
export declare class GCTLevel implements flatbuffers.IUnpackableObject<GCTLevelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTLevel;
    static getRootAsGCTLevel(bb: flatbuffers.ByteBuffer, obj?: GCTLevel): GCTLevel;
    static getSizePrefixedRootAsGCTLevel(bb: flatbuffers.ByteBuffer, obj?: GCTLevel): GCTLevel;
    /**
     * Number of Gaussians in this level.
     */
    GAUSSIAN_COUNT(): number;
    /**
     * The cell this level was merged on, metres: the level's geometric error
     * in the variant frame. Multiply by the instance scale in use.
     */
    MERGE_CELL_M(): number;
    /**
     * How this level was produced.
     */
    DERIVATION(): gctLevelDerivation;
    /**
     * Where the samples live.
     */
    ENCODING(): gctSampleEncoding;
    /**
     * Content identifier of the chunk when ENCODING is
     * CONTENT_ADDRESSED_CHUNK.
     */
    CHUNK_CID(): string | null;
    CHUNK_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoded chunk length in bytes when ENCODING is CONTENT_ADDRESSED_CHUNK.
     */
    CHUNK_BYTE_LENGTH(): bigint;
    /**
     * Per Gaussian: x, y, z of the centre, metres in the variant frame; w =
     * amplitude in AMPLITUDE_UNITS at the centre.
     */
    CENTERS(index: number): number | null;
    centersLength(): number;
    centersArray(): Float32Array | null;
    /**
     * Per Gaussian: standard deviation along the variant frame's x, y, z
     * axes, metres (axis-aligned; the instance yaw rotates the frame); w = a
     * per-Gaussian seed in [0, 1) for stochastic shading, 0 when unused.
     */
    SIGMAS(index: number): number | null;
    sigmasLength(): number;
    sigmasArray(): Float32Array | null;
    /**
     * OPTIONAL. Per Gaussian: x, y, z of the field's boundary normal at the
     * centre (unit vector scaled by a boundary weight in [0, 1]: 0 deep
     * inside, 1 at a crisp condensation interface); w = the local coarse
     * density in [0, 1]. Absent when not computed.
     */
    BOUNDARY(index: number): number | null;
    boundaryLength(): number;
    boundaryArray(): Float32Array | null;
    /**
     * OPTIONAL. Per Gaussian: x, y, z of a finer-scale surface normal that
     * adds relief to BOUNDARY; w unused (0). Absent when not computed.
     */
    FINE_NORMAL(index: number): number | null;
    fineNormalLength(): number;
    fineNormalArray(): Float32Array | null;
    /**
     * OPTIONAL. Per Gaussian: optical depth of the field from the centre
     * outward along +x, +y, +z (dimensionless); w unused (0). Absent when
     * not computed.
     */
    OPTICAL_DEPTH_POS(index: number): number | null;
    opticalDepthPosLength(): number;
    opticalDepthPosArray(): Float32Array | null;
    /**
     * OPTIONAL. Per Gaussian: optical depth along -x, -y, -z; w unused (0).
     * Absent when not computed.
     */
    OPTICAL_DEPTH_NEG(index: number): number | null;
    opticalDepthNegLength(): number;
    opticalDepthNegArray(): Float32Array | null;
    static startGCTLevel(builder: flatbuffers.Builder): void;
    static addGaussianCount(builder: flatbuffers.Builder, GAUSSIAN_COUNT: number): void;
    static addMergeCellM(builder: flatbuffers.Builder, MERGE_CELL_M: number): void;
    static addDerivation(builder: flatbuffers.Builder, DERIVATION: gctLevelDerivation): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: gctSampleEncoding): void;
    static addChunkCid(builder: flatbuffers.Builder, CHUNK_CIDOffset: flatbuffers.Offset): void;
    static addChunkByteLength(builder: flatbuffers.Builder, CHUNK_BYTE_LENGTH: bigint): void;
    static addCenters(builder: flatbuffers.Builder, CENTERSOffset: flatbuffers.Offset): void;
    static createCentersVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCentersVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCentersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmas(builder: flatbuffers.Builder, SIGMASOffset: flatbuffers.Offset): void;
    static createSigmasVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmasVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoundary(builder: flatbuffers.Builder, BOUNDARYOffset: flatbuffers.Offset): void;
    static createBoundaryVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBoundaryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBoundaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFineNormal(builder: flatbuffers.Builder, FINE_NORMALOffset: flatbuffers.Offset): void;
    static createFineNormalVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFineNormalVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFineNormalVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOpticalDepthPos(builder: flatbuffers.Builder, OPTICAL_DEPTH_POSOffset: flatbuffers.Offset): void;
    static createOpticalDepthPosVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOpticalDepthPosVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOpticalDepthPosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOpticalDepthNeg(builder: flatbuffers.Builder, OPTICAL_DEPTH_NEGOffset: flatbuffers.Offset): void;
    static createOpticalDepthNegVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOpticalDepthNegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOpticalDepthNegVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGCTLevel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGCTLevel(builder: flatbuffers.Builder, GAUSSIAN_COUNT: number, MERGE_CELL_M: number, DERIVATION: gctLevelDerivation, ENCODING: gctSampleEncoding, CHUNK_CIDOffset: flatbuffers.Offset, CHUNK_BYTE_LENGTH: bigint, CENTERSOffset: flatbuffers.Offset, SIGMASOffset: flatbuffers.Offset, BOUNDARYOffset: flatbuffers.Offset, FINE_NORMALOffset: flatbuffers.Offset, OPTICAL_DEPTH_POSOffset: flatbuffers.Offset, OPTICAL_DEPTH_NEGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GCTLevelT;
    unpackTo(_o: GCTLevelT): void;
}
export declare class GCTLevelT implements flatbuffers.IGeneratedObject {
    GAUSSIAN_COUNT: number;
    MERGE_CELL_M: number;
    DERIVATION: gctLevelDerivation;
    ENCODING: gctSampleEncoding;
    CHUNK_CID: string | Uint8Array | null;
    CHUNK_BYTE_LENGTH: bigint;
    CENTERS: (number)[];
    SIGMAS: (number)[];
    BOUNDARY: (number)[];
    FINE_NORMAL: (number)[];
    OPTICAL_DEPTH_POS: (number)[];
    OPTICAL_DEPTH_NEG: (number)[];
    constructor(GAUSSIAN_COUNT?: number, MERGE_CELL_M?: number, DERIVATION?: gctLevelDerivation, ENCODING?: gctSampleEncoding, CHUNK_CID?: string | Uint8Array | null, CHUNK_BYTE_LENGTH?: bigint, CENTERS?: (number)[], SIGMAS?: (number)[], BOUNDARY?: (number)[], FINE_NORMAL?: (number)[], OPTICAL_DEPTH_POS?: (number)[], OPTICAL_DEPTH_NEG?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTLevel.d.ts.map