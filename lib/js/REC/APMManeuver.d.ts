import * as flatbuffers from 'flatbuffers';
/**
 * An attitude maneuver of an APM (MAN_START block).
 */
export declare class APMManeuver implements flatbuffers.IUnpackableObject<APMManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMManeuver;
    static getRootAsAPMManeuver(bb: flatbuffers.ByteBuffer, obj?: APMManeuver): APMManeuver;
    static getSizePrefixedRootAsAPMManeuver(bb: flatbuffers.ByteBuffer, obj?: APMManeuver): APMManeuver;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_EPOCH_START: epoch of the start of the maneuver.
     */
    MAN_EPOCH_START(): string | null;
    MAN_EPOCH_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_DURATION in seconds.
     */
    MAN_DURATION(): number;
    /**
     * MAN_REF_FRAME: the frame the torque is in.
     */
    MAN_REF_FRAME(): string | null;
    MAN_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_TOR_X in N*m.
     */
    MAN_TOR_X(): number;
    /**
     * MAN_TOR_Y in N*m.
     */
    MAN_TOR_Y(): number;
    /**
     * MAN_TOR_Z in N*m.
     */
    MAN_TOR_Z(): number;
    /**
     * MAN_DELTA_MASS in kg (negative or zero), NaN when not stated.
     */
    MAN_DELTA_MASS(): number;
    static startAPMManeuver(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addManEpochStart(builder: flatbuffers.Builder, MAN_EPOCH_STARTOffset: flatbuffers.Offset): void;
    static addManDuration(builder: flatbuffers.Builder, MAN_DURATION: number): void;
    static addManRefFrame(builder: flatbuffers.Builder, MAN_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addManTorX(builder: flatbuffers.Builder, MAN_TOR_X: number): void;
    static addManTorY(builder: flatbuffers.Builder, MAN_TOR_Y: number): void;
    static addManTorZ(builder: flatbuffers.Builder, MAN_TOR_Z: number): void;
    static addManDeltaMass(builder: flatbuffers.Builder, MAN_DELTA_MASS: number): void;
    static endAPMManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMManeuver(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, MAN_EPOCH_STARTOffset: flatbuffers.Offset, MAN_DURATION: number, MAN_REF_FRAMEOffset: flatbuffers.Offset, MAN_TOR_X: number, MAN_TOR_Y: number, MAN_TOR_Z: number, MAN_DELTA_MASS: number): flatbuffers.Offset;
    unpack(): APMManeuverT;
    unpackTo(_o: APMManeuverT): void;
}
export declare class APMManeuverT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    MAN_EPOCH_START: string | Uint8Array | null;
    MAN_DURATION: number;
    MAN_REF_FRAME: string | Uint8Array | null;
    MAN_TOR_X: number;
    MAN_TOR_Y: number;
    MAN_TOR_Z: number;
    MAN_DELTA_MASS: number;
    constructor(COMMENT?: string | Uint8Array | null, MAN_EPOCH_START?: string | Uint8Array | null, MAN_DURATION?: number, MAN_REF_FRAME?: string | Uint8Array | null, MAN_TOR_X?: number, MAN_TOR_Y?: number, MAN_TOR_Z?: number, MAN_DELTA_MASS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMManeuver.d.ts.map