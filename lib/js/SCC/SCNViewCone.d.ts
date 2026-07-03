import * as flatbuffers from 'flatbuffers';
/**
 * Sensor or site view-cone overlay used by scenario tools.
 */
export declare class SCNViewCone implements flatbuffers.IUnpackableObject<SCNViewConeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNViewCone;
    static getRootAsSCNViewCone(bb: flatbuffers.ByteBuffer, obj?: SCNViewCone): SCNViewCone;
    static getSizePrefixedRootAsSCNViewCone(bb: flatbuffers.ByteBuffer, obj?: SCNViewCone): SCNViewCone;
    /**
     * Minimum elevation angle in degrees.
     */
    MIN_ELEVATION(): number;
    /**
     * Maximum elevation angle in degrees.
     */
    MAX_ELEVATION(): number;
    /**
     * Minimum azimuth angle in degrees.
     */
    MIN_AZIMUTH(): number;
    /**
     * Maximum azimuth angle in degrees.
     */
    MAX_AZIMUTH(): number;
    /**
     * Maximum view-cone range in kilometers.
     */
    MAX_RANGE(): number;
    /**
     * Half angle in degrees for cone-style overlays.
     */
    HALF_ANGLE(): number;
    /**
     * Dynamic range mode or expression used by the viewer.
     */
    DYNAMIC_RANGE(): string | null;
    DYNAMIC_RANGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNViewCone(builder: flatbuffers.Builder): void;
    static addMinElevation(builder: flatbuffers.Builder, MIN_ELEVATION: number): void;
    static addMaxElevation(builder: flatbuffers.Builder, MAX_ELEVATION: number): void;
    static addMinAzimuth(builder: flatbuffers.Builder, MIN_AZIMUTH: number): void;
    static addMaxAzimuth(builder: flatbuffers.Builder, MAX_AZIMUTH: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static addHalfAngle(builder: flatbuffers.Builder, HALF_ANGLE: number): void;
    static addDynamicRange(builder: flatbuffers.Builder, DYNAMIC_RANGEOffset: flatbuffers.Offset): void;
    static endSCNViewCone(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNViewCone(builder: flatbuffers.Builder, MIN_ELEVATION: number, MAX_ELEVATION: number, MIN_AZIMUTH: number, MAX_AZIMUTH: number, MAX_RANGE: number, HALF_ANGLE: number, DYNAMIC_RANGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNViewConeT;
    unpackTo(_o: SCNViewConeT): void;
}
export declare class SCNViewConeT implements flatbuffers.IGeneratedObject {
    MIN_ELEVATION: number;
    MAX_ELEVATION: number;
    MIN_AZIMUTH: number;
    MAX_AZIMUTH: number;
    MAX_RANGE: number;
    HALF_ANGLE: number;
    DYNAMIC_RANGE: string | Uint8Array | null;
    constructor(MIN_ELEVATION?: number, MAX_ELEVATION?: number, MIN_AZIMUTH?: number, MAX_AZIMUTH?: number, MAX_RANGE?: number, HALF_ANGLE?: number, DYNAMIC_RANGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNViewCone.d.ts.map