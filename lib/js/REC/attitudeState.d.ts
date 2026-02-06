import * as flatbuffers from 'flatbuffers';
import { attitudeStateType } from './attitudeStateType.js';
/**
 * Attitude State Data
 */
export declare class attitudeState implements flatbuffers.IUnpackableObject<attitudeStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): attitudeState;
    static getRootAsattitudeState(bb: flatbuffers.ByteBuffer, obj?: attitudeState): attitudeState;
    static getSizePrefixedRootAsattitudeState(bb: flatbuffers.ByteBuffer, obj?: attitudeState): attitudeState;
    /**
     * Attitude state type
     */
    ATT_TYPE(): attitudeStateType;
    /**
     * Reference frame A
     */
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame B
     */
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attitude direction (A2B or B2A)
     */
    ATT_DIR(): string | null;
    ATT_DIR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quaternion scalar component (q0 or qc)
     */
    Q1(): number;
    /**
     * Quaternion vector component i
     */
    Q2(): number;
    /**
     * Quaternion vector component j
     */
    Q3(): number;
    /**
     * Quaternion vector component k
     */
    QC(): number;
    /**
     * Euler angle X in degrees
     */
    ANGLE_1(): number;
    /**
     * Euler angle Y in degrees
     */
    ANGLE_2(): number;
    /**
     * Euler angle Z in degrees
     */
    ANGLE_3(): number;
    /**
     * Euler rotation sequence (e.g., 321, 313)
     */
    EULER_ROT_SEQ(): string | null;
    EULER_ROT_SEQ(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Angular velocity X in deg/s
     */
    ANGVEL_X(): number;
    /**
     * Angular velocity Y in deg/s
     */
    ANGVEL_Y(): number;
    /**
     * Angular velocity Z in deg/s
     */
    ANGVEL_Z(): number;
    /**
     * Spin alpha in degrees
     */
    SPIN_ALPHA(): number;
    /**
     * Spin delta in degrees
     */
    SPIN_DELTA(): number;
    /**
     * Spin angle in degrees
     */
    SPIN_ANGLE(): number;
    /**
     * Spin angle velocity in deg/s
     */
    SPIN_ANGLE_VEL(): number;
    /**
     * Nutation angle in degrees
     */
    NUTATION(): number;
    /**
     * Nutation period in seconds
     */
    NUTATION_PERIOD(): number;
    /**
     * Nutation phase in degrees
     */
    NUTATION_PHASE(): number;
    static startattitudeState(builder: flatbuffers.Builder): void;
    static addAttType(builder: flatbuffers.Builder, ATT_TYPE: attitudeStateType): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addAttDir(builder: flatbuffers.Builder, ATT_DIROffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addAngle1(builder: flatbuffers.Builder, ANGLE_1: number): void;
    static addAngle2(builder: flatbuffers.Builder, ANGLE_2: number): void;
    static addAngle3(builder: flatbuffers.Builder, ANGLE_3: number): void;
    static addEulerRotSeq(builder: flatbuffers.Builder, EULER_ROT_SEQOffset: flatbuffers.Offset): void;
    static addAngvelX(builder: flatbuffers.Builder, ANGVEL_X: number): void;
    static addAngvelY(builder: flatbuffers.Builder, ANGVEL_Y: number): void;
    static addAngvelZ(builder: flatbuffers.Builder, ANGVEL_Z: number): void;
    static addSpinAlpha(builder: flatbuffers.Builder, SPIN_ALPHA: number): void;
    static addSpinDelta(builder: flatbuffers.Builder, SPIN_DELTA: number): void;
    static addSpinAngle(builder: flatbuffers.Builder, SPIN_ANGLE: number): void;
    static addSpinAngleVel(builder: flatbuffers.Builder, SPIN_ANGLE_VEL: number): void;
    static addNutation(builder: flatbuffers.Builder, NUTATION: number): void;
    static addNutationPeriod(builder: flatbuffers.Builder, NUTATION_PERIOD: number): void;
    static addNutationPhase(builder: flatbuffers.Builder, NUTATION_PHASE: number): void;
    static endattitudeState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createattitudeState(builder: flatbuffers.Builder, ATT_TYPE: attitudeStateType, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, ATT_DIROffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number, ANGLE_1: number, ANGLE_2: number, ANGLE_3: number, EULER_ROT_SEQOffset: flatbuffers.Offset, ANGVEL_X: number, ANGVEL_Y: number, ANGVEL_Z: number, SPIN_ALPHA: number, SPIN_DELTA: number, SPIN_ANGLE: number, SPIN_ANGLE_VEL: number, NUTATION: number, NUTATION_PERIOD: number, NUTATION_PHASE: number): flatbuffers.Offset;
    unpack(): attitudeStateT;
    unpackTo(_o: attitudeStateT): void;
}
export declare class attitudeStateT implements flatbuffers.IGeneratedObject {
    ATT_TYPE: attitudeStateType;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    ATT_DIR: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    ANGLE_1: number;
    ANGLE_2: number;
    ANGLE_3: number;
    EULER_ROT_SEQ: string | Uint8Array | null;
    ANGVEL_X: number;
    ANGVEL_Y: number;
    ANGVEL_Z: number;
    SPIN_ALPHA: number;
    SPIN_DELTA: number;
    SPIN_ANGLE: number;
    SPIN_ANGLE_VEL: number;
    NUTATION: number;
    NUTATION_PERIOD: number;
    NUTATION_PHASE: number;
    constructor(ATT_TYPE?: attitudeStateType, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, ATT_DIR?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number, ANGLE_1?: number, ANGLE_2?: number, ANGLE_3?: number, EULER_ROT_SEQ?: string | Uint8Array | null, ANGVEL_X?: number, ANGVEL_Y?: number, ANGVEL_Z?: number, SPIN_ALPHA?: number, SPIN_DELTA?: number, SPIN_ANGLE?: number, SPIN_ANGLE_VEL?: number, NUTATION?: number, NUTATION_PERIOD?: number, NUTATION_PHASE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=attitudeState.d.ts.map