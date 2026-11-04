import * as flatbuffers from 'flatbuffers';
/**
 * Relative-motion geometry of a chaser about a target on the time grid of the
 * message (SDS addition: CCSDS 502.0-B-3 has no curvilinear or
 * relative-orbital-element trajectory type). Every vector holds one entry per
 * time, in order: entry i is at STATE_EPOCHS[i], or at Metadata.START_TIME +
 * i * STATE_STEP_SIZE. The target is CENTER_NAME and TRAJ_REF_FRAME its RTN
 * axes. NaN where a quantity is not defined at a time. The first fourteen
 * vectors are derived from the two element sets (SEED_SETS); the seven SIGMA_*
 * and BAND3_* vectors are the projection's, NaN in a history segment.
 */
export declare class OCMRelativeGeometry implements flatbuffers.IUnpackableObject<OCMRelativeGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMRelativeGeometry;
    static getRootAsOCMRelativeGeometry(bb: flatbuffers.ByteBuffer, obj?: OCMRelativeGeometry): OCMRelativeGeometry;
    static getSizePrefixedRootAsOCMRelativeGeometry(bb: flatbuffers.ByteBuffer, obj?: OCMRelativeGeometry): OCMRelativeGeometry;
    /**
     * Curvilinear radial offset R = |p| - r0, km: p the chaser's geocentric
     * position, r0 = |r_target|.
     */
    R_KM(index: number): number | null;
    rKmLength(): number;
    rKmArray(): Float64Array | null;
    /**
     * Curvilinear in-track offset I = r0 atan2(y, r0 + x), km, wrapped to
     * +-pi r0; (x, y, z) the chaser's rectilinear RTN offset from the target.
     */
    I_KM(index: number): number | null;
    iKmLength(): number;
    iKmArray(): Float64Array | null;
    /**
     * Curvilinear cross-track offset C = r0 atan2(z, hypot(r0 + x, y)), km.
     */
    C_KM(index: number): number | null;
    cKmLength(): number;
    cKmArray(): Float64Array | null;
    /**
     * I_KM continuous within the message (unwrapped), km.
     */
    I_UNWRAPPED_KM(index: number): number | null;
    iUnwrappedKmLength(): number;
    iUnwrappedKmArray(): Float64Array | null;
    /**
     * Chaser-target distance, km.
     */
    SEPARATION_KM(index: number): number | null;
    separationKmLength(): number;
    separationKmArray(): Float64Array | null;
    /**
     * Rate of the separation, km/s.
     */
    RANGE_RATE_KM_S(index: number): number | null;
    rangeRateKmSLength(): number;
    rangeRateKmSArray(): Float64Array | null;
    /**
     * Angle between the orbit normals (osculating angular momenta) of the chaser
     * and the target, deg.
     */
    PLANE_ANGLE_DEG(index: number): number | null;
    planeAngleDegLength(): number;
    planeAngleDegArray(): Float64Array | null;
    /**
     * Semi-major axis of the chief (the target), from its osculating two-body
     * elements, km.
     */
    A_CHIEF_KM(index: number): number | null;
    aChiefKmLength(): number;
    aChiefKmArray(): Float64Array | null;
    /**
     * Quasi-nonsingular relative orbital elements after D'Amico (2010), chief =
     * target, from osculating two-body elements: DA = (a_d - a_c) / a_c,
     * dimensionless.
     */
    DA(index: number): number | null;
    daLength(): number;
    daArray(): Float64Array | null;
    /**
     * DLAMBDA = du + dRAAN cos i_c, rad.
     */
    DLAMBDA(index: number): number | null;
    dlambdaLength(): number;
    dlambdaArray(): Float64Array | null;
    /**
     * DEX: difference of e cos(w), dimensionless.
     */
    DEX(index: number): number | null;
    dexLength(): number;
    dexArray(): Float64Array | null;
    /**
     * DEY: difference of e sin(w), dimensionless.
     */
    DEY(index: number): number | null;
    deyLength(): number;
    deyArray(): Float64Array | null;
    /**
     * DIX = di, rad.
     */
    DIX(index: number): number | null;
    dixLength(): number;
    dixArray(): Float64Array | null;
    /**
     * DIY = dRAAN sin i_c, rad.
     */
    DIY(index: number): number | null;
    diyLength(): number;
    diyArray(): Float64Array | null;
    /**
     * 1-sigma of R_KM, I_KM and C_KM: the GP error model's sigma times a
     * per-axis factor, the 68.27 % quantile of |error| / model sigma over the
     * pair's own relative samples (predictions against the next element sets) in
     * the trailing calibration window; km.
     */
    SIGMA_R_KM(index: number): number | null;
    sigmaRKmLength(): number;
    sigmaRKmArray(): Float64Array | null;
    SIGMA_I_KM(index: number): number | null;
    sigmaIKmLength(): number;
    sigmaIKmArray(): Float64Array | null;
    SIGMA_C_KM(index: number): number | null;
    sigmaCKmLength(): number;
    sigmaCKmArray(): Float64Array | null;
    /**
     * 1-sigma of SEPARATION_KM, km.
     */
    SIGMA_SEPARATION_KM(index: number): number | null;
    sigmaSeparationKmLength(): number;
    sigmaSeparationKmArray(): Float64Array | null;
    /**
     * 3-sigma band half-width of R_KM, I_KM and C_KM from the 99.73 % quantile of
     * the same ratio (not 3 SIGMA_* when the errors are not Gaussian), km.
     */
    BAND3_R_KM(index: number): number | null;
    band3RKmLength(): number;
    band3RKmArray(): Float64Array | null;
    BAND3_I_KM(index: number): number | null;
    band3IKmLength(): number;
    band3IKmArray(): Float64Array | null;
    BAND3_C_KM(index: number): number | null;
    band3CKmLength(): number;
    band3CKmArray(): Float64Array | null;
    static startOCMRelativeGeometry(builder: flatbuffers.Builder): void;
    static addRKm(builder: flatbuffers.Builder, R_KMOffset: flatbuffers.Offset): void;
    static createRKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIKm(builder: flatbuffers.Builder, I_KMOffset: flatbuffers.Offset): void;
    static createIKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCKm(builder: flatbuffers.Builder, C_KMOffset: flatbuffers.Offset): void;
    static createCKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIUnwrappedKm(builder: flatbuffers.Builder, I_UNWRAPPED_KMOffset: flatbuffers.Offset): void;
    static createIUnwrappedKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIUnwrappedKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIUnwrappedKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSeparationKm(builder: flatbuffers.Builder, SEPARATION_KMOffset: flatbuffers.Offset): void;
    static createSeparationKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSeparationKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSeparationKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRangeRateKmS(builder: flatbuffers.Builder, RANGE_RATE_KM_SOffset: flatbuffers.Offset): void;
    static createRangeRateKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangeRateKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangeRateKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlaneAngleDeg(builder: flatbuffers.Builder, PLANE_ANGLE_DEGOffset: flatbuffers.Offset): void;
    static createPlaneAngleDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPlaneAngleDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPlaneAngleDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAChiefKm(builder: flatbuffers.Builder, A_CHIEF_KMOffset: flatbuffers.Offset): void;
    static createAChiefKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAChiefKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAChiefKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDa(builder: flatbuffers.Builder, DAOffset: flatbuffers.Offset): void;
    static createDaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDlambda(builder: flatbuffers.Builder, DLAMBDAOffset: flatbuffers.Offset): void;
    static createDlambdaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDlambdaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDlambdaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDex(builder: flatbuffers.Builder, DEXOffset: flatbuffers.Offset): void;
    static createDexVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDexVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDexVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDey(builder: flatbuffers.Builder, DEYOffset: flatbuffers.Offset): void;
    static createDeyVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDix(builder: flatbuffers.Builder, DIXOffset: flatbuffers.Offset): void;
    static createDixVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDixVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiy(builder: flatbuffers.Builder, DIYOffset: flatbuffers.Offset): void;
    static createDiyVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDiyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDiyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmaRKm(builder: flatbuffers.Builder, SIGMA_R_KMOffset: flatbuffers.Offset): void;
    static createSigmaRKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaRKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaRKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmaIKm(builder: flatbuffers.Builder, SIGMA_I_KMOffset: flatbuffers.Offset): void;
    static createSigmaIKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaIKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaIKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmaCKm(builder: flatbuffers.Builder, SIGMA_C_KMOffset: flatbuffers.Offset): void;
    static createSigmaCKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaCKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaCKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmaSeparationKm(builder: flatbuffers.Builder, SIGMA_SEPARATION_KMOffset: flatbuffers.Offset): void;
    static createSigmaSeparationKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaSeparationKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaSeparationKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBand3RKm(builder: flatbuffers.Builder, BAND3_R_KMOffset: flatbuffers.Offset): void;
    static createBand3RKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBand3RKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBand3RKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBand3IKm(builder: flatbuffers.Builder, BAND3_I_KMOffset: flatbuffers.Offset): void;
    static createBand3IKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBand3IKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBand3IKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBand3CKm(builder: flatbuffers.Builder, BAND3_C_KMOffset: flatbuffers.Offset): void;
    static createBand3CKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBand3CKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBand3CKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCMRelativeGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMRelativeGeometry(builder: flatbuffers.Builder, R_KMOffset: flatbuffers.Offset, I_KMOffset: flatbuffers.Offset, C_KMOffset: flatbuffers.Offset, I_UNWRAPPED_KMOffset: flatbuffers.Offset, SEPARATION_KMOffset: flatbuffers.Offset, RANGE_RATE_KM_SOffset: flatbuffers.Offset, PLANE_ANGLE_DEGOffset: flatbuffers.Offset, A_CHIEF_KMOffset: flatbuffers.Offset, DAOffset: flatbuffers.Offset, DLAMBDAOffset: flatbuffers.Offset, DEXOffset: flatbuffers.Offset, DEYOffset: flatbuffers.Offset, DIXOffset: flatbuffers.Offset, DIYOffset: flatbuffers.Offset, SIGMA_R_KMOffset: flatbuffers.Offset, SIGMA_I_KMOffset: flatbuffers.Offset, SIGMA_C_KMOffset: flatbuffers.Offset, SIGMA_SEPARATION_KMOffset: flatbuffers.Offset, BAND3_R_KMOffset: flatbuffers.Offset, BAND3_I_KMOffset: flatbuffers.Offset, BAND3_C_KMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMRelativeGeometryT;
    unpackTo(_o: OCMRelativeGeometryT): void;
}
export declare class OCMRelativeGeometryT implements flatbuffers.IGeneratedObject {
    R_KM: (number)[];
    I_KM: (number)[];
    C_KM: (number)[];
    I_UNWRAPPED_KM: (number)[];
    SEPARATION_KM: (number)[];
    RANGE_RATE_KM_S: (number)[];
    PLANE_ANGLE_DEG: (number)[];
    A_CHIEF_KM: (number)[];
    DA: (number)[];
    DLAMBDA: (number)[];
    DEX: (number)[];
    DEY: (number)[];
    DIX: (number)[];
    DIY: (number)[];
    SIGMA_R_KM: (number)[];
    SIGMA_I_KM: (number)[];
    SIGMA_C_KM: (number)[];
    SIGMA_SEPARATION_KM: (number)[];
    BAND3_R_KM: (number)[];
    BAND3_I_KM: (number)[];
    BAND3_C_KM: (number)[];
    constructor(R_KM?: (number)[], I_KM?: (number)[], C_KM?: (number)[], I_UNWRAPPED_KM?: (number)[], SEPARATION_KM?: (number)[], RANGE_RATE_KM_S?: (number)[], PLANE_ANGLE_DEG?: (number)[], A_CHIEF_KM?: (number)[], DA?: (number)[], DLAMBDA?: (number)[], DEX?: (number)[], DEY?: (number)[], DIX?: (number)[], DIY?: (number)[], SIGMA_R_KM?: (number)[], SIGMA_I_KM?: (number)[], SIGMA_C_KM?: (number)[], SIGMA_SEPARATION_KM?: (number)[], BAND3_R_KM?: (number)[], BAND3_I_KM?: (number)[], BAND3_C_KM?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMRelativeGeometry.d.ts.map