import * as flatbuffers from 'flatbuffers';
/**
 * A spin state of an APM (SPIN_START block). The nutation terms come as either of
 * two groups, nutation angle, period and phase or the momentum direction and the
 * velocity around it; those not stated are NaN.
 */
export declare class APMSpinState implements flatbuffers.IUnpackableObject<APMSpinStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMSpinState;
    static getRootAsAPMSpinState(bb: flatbuffers.ByteBuffer, obj?: APMSpinState): APMSpinState;
    static getSizePrefixedRootAsAPMSpinState(bb: flatbuffers.ByteBuffer, obj?: APMSpinState): APMSpinState;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_A: the frame the rotation starts from.
     */
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_B: the frame the rotation ends in.
     */
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SPIN_ALPHA: right ascension of the spin axis in degrees.
     */
    SPIN_ALPHA(): number;
    /**
     * SPIN_DELTA: declination of the spin axis in degrees.
     */
    SPIN_DELTA(): number;
    /**
     * SPIN_ANGLE: phase in degrees.
     */
    SPIN_ANGLE(): number;
    /**
     * SPIN_ANGLE_VEL: angular velocity in deg/s.
     */
    SPIN_ANGLE_VEL(): number;
    /**
     * NUTATION: nutation angle in degrees, NaN when not stated.
     */
    NUTATION(): number;
    /**
     * NUTATION_PER: nutation period in seconds, NaN when not stated.
     */
    NUTATION_PER(): number;
    /**
     * NUTATION_PHASE: nutation phase in degrees, NaN when not stated.
     */
    NUTATION_PHASE(): number;
    /**
     * MOMENTUM_ALPHA: right ascension of the angular momentum vector in degrees,
     * NaN when not stated.
     */
    MOMENTUM_ALPHA(): number;
    /**
     * MOMENTUM_DELTA: declination of the angular momentum vector in degrees, NaN
     * when not stated.
     */
    MOMENTUM_DELTA(): number;
    /**
     * NUTATION_VEL: angular velocity around the momentum vector in deg/s, NaN when
     * not stated.
     */
    NUTATION_VEL(): number;
    static startAPMSpinState(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
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
    static endAPMSpinState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMSpinState(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, SPIN_ALPHA: number, SPIN_DELTA: number, SPIN_ANGLE: number, SPIN_ANGLE_VEL: number, NUTATION: number, NUTATION_PER: number, NUTATION_PHASE: number, MOMENTUM_ALPHA: number, MOMENTUM_DELTA: number, NUTATION_VEL: number): flatbuffers.Offset;
    unpack(): APMSpinStateT;
    unpackTo(_o: APMSpinStateT): void;
}
export declare class APMSpinStateT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
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
    constructor(COMMENT?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, SPIN_ALPHA?: number, SPIN_DELTA?: number, SPIN_ANGLE?: number, SPIN_ANGLE_VEL?: number, NUTATION?: number, NUTATION_PER?: number, NUTATION_PHASE?: number, MOMENTUM_ALPHA?: number, MOMENTUM_DELTA?: number, NUTATION_VEL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMSpinState.d.ts.map