import * as flatbuffers from 'flatbuffers';
/**
 * Process noise of a numerical propagation: white acceleration.
 */
export declare class ERMProcessNoise implements flatbuffers.IUnpackableObject<ERMProcessNoiseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMProcessNoise;
    static getRootAsERMProcessNoise(bb: flatbuffers.ByteBuffer, obj?: ERMProcessNoise): ERMProcessNoise;
    static getSizePrefixedRootAsERMProcessNoise(bb: flatbuffers.ByteBuffer, obj?: ERMProcessNoise): ERMProcessNoise;
    /**
     * Model, e.g. "WHITE_ACCELERATION".
     */
    MODEL(): string | null;
    MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Axes of the densities, e.g. "RADIAL_TRANSVERSE_NORMAL".
     */
    AXES(): string | null;
    AXES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Spectral densities, m**2/s**3 (3 values).
     */
    SPECTRAL_DENSITY_M2_S3(index: number): number | null;
    spectralDensityM2S3Length(): number;
    spectralDensityM2S3Array(): Float64Array | null;
    /**
     * Discretization interval, s.
     */
    DISCRETIZATION_S(): number;
    static startERMProcessNoise(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addAxes(builder: flatbuffers.Builder, AXESOffset: flatbuffers.Offset): void;
    static addSpectralDensityM2S3(builder: flatbuffers.Builder, SPECTRAL_DENSITY_M2_S3Offset: flatbuffers.Offset): void;
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpectralDensityM2S3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpectralDensityM2S3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiscretizationS(builder: flatbuffers.Builder, DISCRETIZATION_S: number): void;
    static endERMProcessNoise(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMProcessNoise(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset, AXESOffset: flatbuffers.Offset, SPECTRAL_DENSITY_M2_S3Offset: flatbuffers.Offset, DISCRETIZATION_S: number): flatbuffers.Offset;
    unpack(): ERMProcessNoiseT;
    unpackTo(_o: ERMProcessNoiseT): void;
}
export declare class ERMProcessNoiseT implements flatbuffers.IGeneratedObject {
    MODEL: string | Uint8Array | null;
    AXES: string | Uint8Array | null;
    SPECTRAL_DENSITY_M2_S3: (number)[];
    DISCRETIZATION_S: number;
    constructor(MODEL?: string | Uint8Array | null, AXES?: string | Uint8Array | null, SPECTRAL_DENSITY_M2_S3?: (number)[], DISCRETIZATION_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMProcessNoise.d.ts.map