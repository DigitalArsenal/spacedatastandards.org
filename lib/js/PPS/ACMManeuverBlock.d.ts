import * as flatbuffers from 'flatbuffers';
/**
 * One maneuver specification of an ACM (Table 5-7).
 */
export declare class ACMManeuverBlock implements flatbuffers.IUnpackableObject<ACMManeuverBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMManeuverBlock;
    static getRootAsACMManeuverBlock(bb: flatbuffers.ByteBuffer, obj?: ACMManeuverBlock): ACMManeuverBlock;
    static getSizePrefixedRootAsACMManeuverBlock(bb: flatbuffers.ByteBuffer, obj?: ACMManeuverBlock): ACMManeuverBlock;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_ID.
     */
    MAN_ID(): string | null;
    MAN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_PREV_ID.
     */
    MAN_PREV_ID(): string | null;
    MAN_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_PURPOSE: for example MOM_DESAT.
     */
    MAN_PURPOSE(): string | null;
    MAN_PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_BEGIN_TIME in seconds from EPOCH_TZERO.
     */
    MAN_BEGIN_TIME(): number;
    /**
     * MAN_END_TIME in seconds from EPOCH_TZERO; NaN when the message states
     * MAN_DURATION instead (a message states one of the two).
     */
    MAN_END_TIME(): number;
    /**
     * MAN_DURATION in seconds; NaN when the message states MAN_END_TIME instead.
     */
    MAN_DURATION(): number;
    /**
     * ACTUATOR_USED.
     */
    ACTUATOR_USED(): string | null;
    ACTUATOR_USED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TARGET_MOMENTUM: three components in N*m*s; empty when not stated.
     */
    TARGET_MOMENTUM(index: number): number | null;
    targetMomentumLength(): number;
    targetMomentumArray(): Float64Array | null;
    /**
     * TARGET_MOM_FRAME.
     */
    TARGET_MOM_FRAME(): string | null;
    TARGET_MOM_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TARGET_ATTITUDE: the target attitude components; empty when not stated.
     */
    TARGET_ATTITUDE(index: number): number | null;
    targetAttitudeLength(): number;
    targetAttitudeArray(): Float64Array | null;
    /**
     * TARGET_SPINRATE in deg/s, NaN when not stated.
     */
    TARGET_SPINRATE(): number;
    static startACMManeuverBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addManId(builder: flatbuffers.Builder, MAN_IDOffset: flatbuffers.Offset): void;
    static addManPrevId(builder: flatbuffers.Builder, MAN_PREV_IDOffset: flatbuffers.Offset): void;
    static addManPurpose(builder: flatbuffers.Builder, MAN_PURPOSEOffset: flatbuffers.Offset): void;
    static addManBeginTime(builder: flatbuffers.Builder, MAN_BEGIN_TIME: number): void;
    static addManEndTime(builder: flatbuffers.Builder, MAN_END_TIME: number): void;
    static addManDuration(builder: flatbuffers.Builder, MAN_DURATION: number): void;
    static addActuatorUsed(builder: flatbuffers.Builder, ACTUATOR_USEDOffset: flatbuffers.Offset): void;
    static addTargetMomentum(builder: flatbuffers.Builder, TARGET_MOMENTUMOffset: flatbuffers.Offset): void;
    static createTargetMomentumVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetMomentumVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetMomentumVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetMomFrame(builder: flatbuffers.Builder, TARGET_MOM_FRAMEOffset: flatbuffers.Offset): void;
    static addTargetAttitude(builder: flatbuffers.Builder, TARGET_ATTITUDEOffset: flatbuffers.Offset): void;
    static createTargetAttitudeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetAttitudeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetAttitudeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetSpinrate(builder: flatbuffers.Builder, TARGET_SPINRATE: number): void;
    static endACMManeuverBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMManeuverBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, MAN_IDOffset: flatbuffers.Offset, MAN_PREV_IDOffset: flatbuffers.Offset, MAN_PURPOSEOffset: flatbuffers.Offset, MAN_BEGIN_TIME: number, MAN_END_TIME: number, MAN_DURATION: number, ACTUATOR_USEDOffset: flatbuffers.Offset, TARGET_MOMENTUMOffset: flatbuffers.Offset, TARGET_MOM_FRAMEOffset: flatbuffers.Offset, TARGET_ATTITUDEOffset: flatbuffers.Offset, TARGET_SPINRATE: number): flatbuffers.Offset;
    unpack(): ACMManeuverBlockT;
    unpackTo(_o: ACMManeuverBlockT): void;
}
export declare class ACMManeuverBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    MAN_ID: string | Uint8Array | null;
    MAN_PREV_ID: string | Uint8Array | null;
    MAN_PURPOSE: string | Uint8Array | null;
    MAN_BEGIN_TIME: number;
    MAN_END_TIME: number;
    MAN_DURATION: number;
    ACTUATOR_USED: string | Uint8Array | null;
    TARGET_MOMENTUM: (number)[];
    TARGET_MOM_FRAME: string | Uint8Array | null;
    TARGET_ATTITUDE: (number)[];
    TARGET_SPINRATE: number;
    constructor(COMMENT?: string | Uint8Array | null, MAN_ID?: string | Uint8Array | null, MAN_PREV_ID?: string | Uint8Array | null, MAN_PURPOSE?: string | Uint8Array | null, MAN_BEGIN_TIME?: number, MAN_END_TIME?: number, MAN_DURATION?: number, ACTUATOR_USED?: string | Uint8Array | null, TARGET_MOMENTUM?: (number)[], TARGET_MOM_FRAME?: string | Uint8Array | null, TARGET_ATTITUDE?: (number)[], TARGET_SPINRATE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMManeuverBlock.d.ts.map