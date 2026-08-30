import * as flatbuffers from 'flatbuffers';
/**
 * A single attitude data line with an EXPLICIT epoch (non-uniform steps).
 *
 * CCSDS 504.0-B-2 4.2.4 puts an epoch on EVERY AEM data line, and real AEMs
 * are not on a uniform grid: the published example (504.0-B-2 figure G-4)
 * steps 1996-11-28T21:29:07.2555 -> 22:08:03.5555 -> 22:08:04.5555, i.e.
 * 2339 s then 1 s. Such a segment CANNOT be expressed by the compact
 * ATTITUDE_DATA array, whose epochs are reconstructed as
 * START_TIME + i * STEP_SIZE. Scenario-epoch attitude text containers have
 * the same irregular shape.
 *
 * The populated columns are selected by the segment's ATTITUDE_TYPE exactly
 * as in CCSDS 504.0-B-2 table 4-4:
 *   QUATERNION              Q1 Q2 Q3 QC
 *   QUATERNION/DERIVATIVE   Q1 Q2 Q3 QC Q1_DOT Q2_DOT Q3_DOT QC_DOT
 *   QUATERNION/ANGVEL       Q1 Q2 Q3 QC ANGVEL_X ANGVEL_Y ANGVEL_Z
 *   EULER_ANGLE             ANGLE_1 ANGLE_2 ANGLE_3
 *   EULER_ANGLE/DERIVATIVE  ANGLE_1..3 ANGLE_1_DOT ANGLE_2_DOT ANGLE_3_DOT
 *   EULER_ANGLE/ANGVEL      ANGLE_1..3 ANGVEL_X ANGVEL_Y ANGVEL_Z
 *   SPIN                    SPIN_ALPHA SPIN_DELTA SPIN_ANGLE SPIN_ANGLE_VEL
 *   SPIN/NUTATION           + NUTATION NUTATION_PER NUTATION_PHASE
 *   SPIN/NUTATION_MOM       + MOMENTUM_ALPHA MOMENTUM_DELTA NUTATION_VEL
 *
 * Quaternion component order is fixed by CCSDS 504.0-B-2 (Q1, Q2, Q3, QC,
 * vector part first). The B-1 keyword QUATERNION_TYPE was REMOVED by B-2
 * (annex, change 7) and is deliberately NOT carried here.
 *
 * Units per 504.0-B-2 4.2.4.6: quaternion components dimensionless;
 * Q*_DOT 1/s; ANGLE_*, SPIN_*, NUTATION, NUTATION_PHASE, MOMENTUM_* deg;
 * ANGLE_*_DOT, ANGVEL_*, SPIN_ANGLE_VEL, NUTATION_VEL deg/s;
 * NUTATION_PER s.
 */
export declare class attitudeDataLine implements flatbuffers.IUnpackableObject<attitudeDataLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): attitudeDataLine;
    static getRootAsattitudeDataLine(bb: flatbuffers.ByteBuffer, obj?: attitudeDataLine): attitudeDataLine;
    static getSizePrefixedRootAsattitudeDataLine(bb: flatbuffers.ByteBuffer, obj?: attitudeDataLine): attitudeDataLine;
    /**
     * Epoch of this attitude state (required for non-uniform steps).
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quaternion vector component 1 (dimensionless).
     */
    Q1(): number;
    /**
     * Quaternion vector component 2 (dimensionless).
     */
    Q2(): number;
    /**
     * Quaternion vector component 3 (dimensionless).
     */
    Q3(): number;
    /**
     * Quaternion scalar component (dimensionless).
     */
    QC(): number;
    /**
     * Time derivative of Q1, 1/s.
     */
    Q1_DOT(): number;
    /**
     * Time derivative of Q2, 1/s.
     */
    Q2_DOT(): number;
    /**
     * Time derivative of Q3, 1/s.
     */
    Q3_DOT(): number;
    /**
     * Time derivative of QC, 1/s.
     */
    QC_DOT(): number;
    /**
     * Euler angle 1, deg. Sequence given by EULER_ROT_SEQ.
     */
    ANGLE_1(): number;
    /**
     * Euler angle 2, deg.
     */
    ANGLE_2(): number;
    /**
     * Euler angle 3, deg.
     */
    ANGLE_3(): number;
    /**
     * Time derivative of ANGLE_1, deg/s.
     */
    ANGLE_1_DOT(): number;
    /**
     * Time derivative of ANGLE_2, deg/s.
     */
    ANGLE_2_DOT(): number;
    /**
     * Time derivative of ANGLE_3, deg/s.
     */
    ANGLE_3_DOT(): number;
    /**
     * Angular velocity X component, deg/s, expressed in ANGVEL_FRAME.
     */
    ANGVEL_X(): number;
    /**
     * Angular velocity Y component, deg/s, expressed in ANGVEL_FRAME.
     */
    ANGVEL_Y(): number;
    /**
     * Angular velocity Z component, deg/s, expressed in ANGVEL_FRAME.
     */
    ANGVEL_Z(): number;
    /**
     * Right ascension of the spin axis, deg.
     */
    SPIN_ALPHA(): number;
    /**
     * Declination of the spin axis, deg.
     */
    SPIN_DELTA(): number;
    /**
     * Phase of the satellite about the spin axis, deg.
     */
    SPIN_ANGLE(): number;
    /**
     * Angular velocity about the spin axis, deg/s.
     */
    SPIN_ANGLE_VEL(): number;
    /**
     * Nutation angle, deg.
     */
    NUTATION(): number;
    /**
     * Nutation period, s.
     */
    NUTATION_PER(): number;
    /**
     * Nutation phase, deg.
     */
    NUTATION_PHASE(): number;
    /**
     * Right ascension of the angular momentum vector, deg.
     */
    MOMENTUM_ALPHA(): number;
    /**
     * Declination of the angular momentum vector, deg.
     */
    MOMENTUM_DELTA(): number;
    /**
     * Angular velocity of the nutation, deg/s.
     */
    NUTATION_VEL(): number;
    static startattitudeDataLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addQ1Dot(builder: flatbuffers.Builder, Q1_DOT: number): void;
    static addQ2Dot(builder: flatbuffers.Builder, Q2_DOT: number): void;
    static addQ3Dot(builder: flatbuffers.Builder, Q3_DOT: number): void;
    static addQcDot(builder: flatbuffers.Builder, QC_DOT: number): void;
    static addAngle1(builder: flatbuffers.Builder, ANGLE_1: number): void;
    static addAngle2(builder: flatbuffers.Builder, ANGLE_2: number): void;
    static addAngle3(builder: flatbuffers.Builder, ANGLE_3: number): void;
    static addAngle1Dot(builder: flatbuffers.Builder, ANGLE_1_DOT: number): void;
    static addAngle2Dot(builder: flatbuffers.Builder, ANGLE_2_DOT: number): void;
    static addAngle3Dot(builder: flatbuffers.Builder, ANGLE_3_DOT: number): void;
    static addAngvelX(builder: flatbuffers.Builder, ANGVEL_X: number): void;
    static addAngvelY(builder: flatbuffers.Builder, ANGVEL_Y: number): void;
    static addAngvelZ(builder: flatbuffers.Builder, ANGVEL_Z: number): void;
    static addSpinAlpha(builder: flatbuffers.Builder, SPIN_ALPHA: number): void;
    static addSpinDelta(builder: flatbuffers.Builder, SPIN_DELTA: number): void;
    static addSpinAngle(builder: flatbuffers.Builder, SPIN_ANGLE: number): void;
    static addSpinAngleVel(builder: flatbuffers.Builder, SPIN_ANGLE_VEL: number): void;
    static addNutation(builder: flatbuffers.Builder, NUTATION: number): void;
    static addNutationPer(builder: flatbuffers.Builder, NUTATION_PER: number): void;
    static addNutationPhase(builder: flatbuffers.Builder, NUTATION_PHASE: number): void;
    static addMomentumAlpha(builder: flatbuffers.Builder, MOMENTUM_ALPHA: number): void;
    static addMomentumDelta(builder: flatbuffers.Builder, MOMENTUM_DELTA: number): void;
    static addNutationVel(builder: flatbuffers.Builder, NUTATION_VEL: number): void;
    static endattitudeDataLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createattitudeDataLine(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number, Q1_DOT: number, Q2_DOT: number, Q3_DOT: number, QC_DOT: number, ANGLE_1: number, ANGLE_2: number, ANGLE_3: number, ANGLE_1_DOT: number, ANGLE_2_DOT: number, ANGLE_3_DOT: number, ANGVEL_X: number, ANGVEL_Y: number, ANGVEL_Z: number, SPIN_ALPHA: number, SPIN_DELTA: number, SPIN_ANGLE: number, SPIN_ANGLE_VEL: number, NUTATION: number, NUTATION_PER: number, NUTATION_PHASE: number, MOMENTUM_ALPHA: number, MOMENTUM_DELTA: number, NUTATION_VEL: number): flatbuffers.Offset;
    unpack(): attitudeDataLineT;
    unpackTo(_o: attitudeDataLineT): void;
}
export declare class attitudeDataLineT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    Q1_DOT: number;
    Q2_DOT: number;
    Q3_DOT: number;
    QC_DOT: number;
    ANGLE_1: number;
    ANGLE_2: number;
    ANGLE_3: number;
    ANGLE_1_DOT: number;
    ANGLE_2_DOT: number;
    ANGLE_3_DOT: number;
    ANGVEL_X: number;
    ANGVEL_Y: number;
    ANGVEL_Z: number;
    SPIN_ALPHA: number;
    SPIN_DELTA: number;
    SPIN_ANGLE: number;
    SPIN_ANGLE_VEL: number;
    NUTATION: number;
    NUTATION_PER: number;
    NUTATION_PHASE: number;
    MOMENTUM_ALPHA: number;
    MOMENTUM_DELTA: number;
    NUTATION_VEL: number;
    constructor(EPOCH?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number, Q1_DOT?: number, Q2_DOT?: number, Q3_DOT?: number, QC_DOT?: number, ANGLE_1?: number, ANGLE_2?: number, ANGLE_3?: number, ANGLE_1_DOT?: number, ANGLE_2_DOT?: number, ANGLE_3_DOT?: number, ANGVEL_X?: number, ANGVEL_Y?: number, ANGVEL_Z?: number, SPIN_ALPHA?: number, SPIN_DELTA?: number, SPIN_ANGLE?: number, SPIN_ANGLE_VEL?: number, NUTATION?: number, NUTATION_PER?: number, NUTATION_PHASE?: number, MOMENTUM_ALPHA?: number, MOMENTUM_DELTA?: number, NUTATION_VEL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=attitudeDataLine.d.ts.map