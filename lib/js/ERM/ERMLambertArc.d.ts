import * as flatbuffers from 'flatbuffers';
/**
 * The Lambert arc of a mapping.
 */
export declare class ERMLambertArc implements flatbuffers.IUnpackableObject<ERMLambertArcT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMLambertArc;
    static getRootAsERMLambertArc(bb: flatbuffers.ByteBuffer, obj?: ERMLambertArc): ERMLambertArc;
    static getSizePrefixedRootAsERMLambertArc(bb: flatbuffers.ByteBuffer, obj?: ERMLambertArc): ERMLambertArc;
    REVOLUTIONS(): number;
    /**
     * "single", "long-period", "short-period" or "short-arc".
     */
    BRANCH(): string | null;
    BRANCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Departure velocity, km/s (3 values).
     */
    V1_KM_S(index: number): number | null;
    v1KmSLength(): number;
    v1KmSArray(): Float64Array | null;
    ENERGY(): number;
    SGP4_ENERGY(): number;
    PERIGEE_RADIUS_KM(): number;
    static startERMLambertArc(builder: flatbuffers.Builder): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addBranch(builder: flatbuffers.Builder, BRANCHOffset: flatbuffers.Offset): void;
    static addV1KmS(builder: flatbuffers.Builder, V1_KM_SOffset: flatbuffers.Offset): void;
    static createV1KmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createV1KmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startV1KmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergy(builder: flatbuffers.Builder, ENERGY: number): void;
    static addSgp4Energy(builder: flatbuffers.Builder, SGP4_ENERGY: number): void;
    static addPerigeeRadiusKm(builder: flatbuffers.Builder, PERIGEE_RADIUS_KM: number): void;
    static endERMLambertArc(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMLambertArc(builder: flatbuffers.Builder, REVOLUTIONS: number, BRANCHOffset: flatbuffers.Offset, V1_KM_SOffset: flatbuffers.Offset, ENERGY: number, SGP4_ENERGY: number, PERIGEE_RADIUS_KM: number): flatbuffers.Offset;
    unpack(): ERMLambertArcT;
    unpackTo(_o: ERMLambertArcT): void;
}
export declare class ERMLambertArcT implements flatbuffers.IGeneratedObject {
    REVOLUTIONS: number;
    BRANCH: string | Uint8Array | null;
    V1_KM_S: (number)[];
    ENERGY: number;
    SGP4_ENERGY: number;
    PERIGEE_RADIUS_KM: number;
    constructor(REVOLUTIONS?: number, BRANCH?: string | Uint8Array | null, V1_KM_S?: (number)[], ENERGY?: number, SGP4_ENERGY?: number, PERIGEE_RADIUS_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMLambertArc.d.ts.map