import * as flatbuffers from 'flatbuffers';
/**
 * One point on a depth-dose shielding curve.
 */
export declare class RDEShieldCurvePoint implements flatbuffers.IUnpackableObject<RDEShieldCurvePointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDEShieldCurvePoint;
    static getRootAsRDEShieldCurvePoint(bb: flatbuffers.ByteBuffer, obj?: RDEShieldCurvePoint): RDEShieldCurvePoint;
    static getSizePrefixedRootAsRDEShieldCurvePoint(bb: flatbuffers.ByteBuffer, obj?: RDEShieldCurvePoint): RDEShieldCurvePoint;
    /**
     * Shield thickness in millimeters.
     */
    THICKNESS_MM(): number;
    /**
     * Areal mass density in g/cm^2.
     */
    AREAL_DENSITY_G_CM2(): number;
    /**
     * Computed dose rate behind this thickness in mSv/h.
     */
    DOSE_RATE_MSV_H(): number;
    /**
     * Computed total ionizing dose over the window in krad(Si).
     */
    TID_KRAD_SI(): number;
    static startRDEShieldCurvePoint(builder: flatbuffers.Builder): void;
    static addThicknessMm(builder: flatbuffers.Builder, THICKNESS_MM: number): void;
    static addArealDensityGCm2(builder: flatbuffers.Builder, AREAL_DENSITY_G_CM2: number): void;
    static addDoseRateMsvH(builder: flatbuffers.Builder, DOSE_RATE_MSV_H: number): void;
    static addTidKradSi(builder: flatbuffers.Builder, TID_KRAD_SI: number): void;
    static endRDEShieldCurvePoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDEShieldCurvePoint(builder: flatbuffers.Builder, THICKNESS_MM: number, AREAL_DENSITY_G_CM2: number, DOSE_RATE_MSV_H: number, TID_KRAD_SI: number): flatbuffers.Offset;
    unpack(): RDEShieldCurvePointT;
    unpackTo(_o: RDEShieldCurvePointT): void;
}
export declare class RDEShieldCurvePointT implements flatbuffers.IGeneratedObject {
    THICKNESS_MM: number;
    AREAL_DENSITY_G_CM2: number;
    DOSE_RATE_MSV_H: number;
    TID_KRAD_SI: number;
    constructor(THICKNESS_MM?: number, AREAL_DENSITY_G_CM2?: number, DOSE_RATE_MSV_H?: number, TID_KRAD_SI?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDEShieldCurvePoint.d.ts.map