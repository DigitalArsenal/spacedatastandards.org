import * as flatbuffers from 'flatbuffers';
/**
 * All numerical fields in metres or square metres in one orthonormal plane.
 * Xi/zeta axes are normal to relative velocity. Rotate displacement and
 * covariance together when changing basis; covariance is finite symmetric
 * positive semidefinite. Probability algorithms requiring an inverse reject
 * singular covariance unless their documented method supports it.
 */
export declare class CQRPlaneGeometry implements flatbuffers.IUnpackableObject<CQRPlaneGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRPlaneGeometry;
    static getRootAsCQRPlaneGeometry(bb: flatbuffers.ByteBuffer, obj?: CQRPlaneGeometry): CQRPlaneGeometry;
    static getSizePrefixedRootAsCQRPlaneGeometry(bb: flatbuffers.ByteBuffer, obj?: CQRPlaneGeometry): CQRPlaneGeometry;
    XI_M(): number;
    ZETA_M(): number;
    VARIANCE_XI_M2(): number;
    COVARIANCE_XI_ZETA_M2(): number;
    VARIANCE_ZETA_M2(): number;
    COMBINED_RADIUS_M(): number;
    static startCQRPlaneGeometry(builder: flatbuffers.Builder): void;
    static addXiM(builder: flatbuffers.Builder, XI_M: number): void;
    static addZetaM(builder: flatbuffers.Builder, ZETA_M: number): void;
    static addVarianceXiM2(builder: flatbuffers.Builder, VARIANCE_XI_M2: number): void;
    static addCovarianceXiZetaM2(builder: flatbuffers.Builder, COVARIANCE_XI_ZETA_M2: number): void;
    static addVarianceZetaM2(builder: flatbuffers.Builder, VARIANCE_ZETA_M2: number): void;
    static addCombinedRadiusM(builder: flatbuffers.Builder, COMBINED_RADIUS_M: number): void;
    static endCQRPlaneGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRPlaneGeometry(builder: flatbuffers.Builder, XI_M: number, ZETA_M: number, VARIANCE_XI_M2: number, COVARIANCE_XI_ZETA_M2: number, VARIANCE_ZETA_M2: number, COMBINED_RADIUS_M: number): flatbuffers.Offset;
    unpack(): CQRPlaneGeometryT;
    unpackTo(_o: CQRPlaneGeometryT): void;
}
export declare class CQRPlaneGeometryT implements flatbuffers.IGeneratedObject {
    XI_M: number;
    ZETA_M: number;
    VARIANCE_XI_M2: number;
    COVARIANCE_XI_ZETA_M2: number;
    VARIANCE_ZETA_M2: number;
    COMBINED_RADIUS_M: number;
    constructor(XI_M?: number, ZETA_M?: number, VARIANCE_XI_M2?: number, COVARIANCE_XI_ZETA_M2?: number, VARIANCE_ZETA_M2?: number, COMBINED_RADIUS_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRPlaneGeometry.d.ts.map