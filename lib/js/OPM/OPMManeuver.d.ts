import * as flatbuffers from 'flatbuffers';
/**
 * One maneuver of an OPM (CCSDS 502.0-B-3 Table 3-7).
 */
export declare class OPMManeuver implements flatbuffers.IUnpackableObject<OPMManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPMManeuver;
    static getRootAsOPMManeuver(bb: flatbuffers.ByteBuffer, obj?: OPMManeuver): OPMManeuver;
    static getSizePrefixedRootAsOPMManeuver(bb: flatbuffers.ByteBuffer, obj?: OPMManeuver): OPMManeuver;
    /**
     * COMMENT lines of this maneuver, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_EPOCH_IGNITION: epoch of ignition.
     */
    MAN_EPOCH_IGNITION(): string | null;
    MAN_EPOCH_IGNITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_DURATION: duration of the burn in seconds; zero for an impulsive maneuver.
     */
    MAN_DURATION(): number;
    /**
     * MAN_DELTA_MASS: mass change during the maneuver in kg, negative or zero.
     */
    MAN_DELTA_MASS(): number;
    /**
     * MAN_REF_FRAME: frame of MAN_DV_1..3 (for example RTN, TNW, or REF_FRAME's).
     */
    MAN_REF_FRAME(): string | null;
    MAN_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MAN_DV_1: first component of the velocity increment in km/s.
     */
    MAN_DV_1(): number;
    /**
     * MAN_DV_2: second component of the velocity increment in km/s.
     */
    MAN_DV_2(): number;
    /**
     * MAN_DV_3: third component of the velocity increment in km/s.
     */
    MAN_DV_3(): number;
    static startOPMManeuver(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addManEpochIgnition(builder: flatbuffers.Builder, MAN_EPOCH_IGNITIONOffset: flatbuffers.Offset): void;
    static addManDuration(builder: flatbuffers.Builder, MAN_DURATION: number): void;
    static addManDeltaMass(builder: flatbuffers.Builder, MAN_DELTA_MASS: number): void;
    static addManRefFrame(builder: flatbuffers.Builder, MAN_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addManDv1(builder: flatbuffers.Builder, MAN_DV_1: number): void;
    static addManDv2(builder: flatbuffers.Builder, MAN_DV_2: number): void;
    static addManDv3(builder: flatbuffers.Builder, MAN_DV_3: number): void;
    static endOPMManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOPMManeuver(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, MAN_EPOCH_IGNITIONOffset: flatbuffers.Offset, MAN_DURATION: number, MAN_DELTA_MASS: number, MAN_REF_FRAMEOffset: flatbuffers.Offset, MAN_DV_1: number, MAN_DV_2: number, MAN_DV_3: number): flatbuffers.Offset;
    unpack(): OPMManeuverT;
    unpackTo(_o: OPMManeuverT): void;
}
export declare class OPMManeuverT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    MAN_EPOCH_IGNITION: string | Uint8Array | null;
    MAN_DURATION: number;
    MAN_DELTA_MASS: number;
    MAN_REF_FRAME: string | Uint8Array | null;
    MAN_DV_1: number;
    MAN_DV_2: number;
    MAN_DV_3: number;
    constructor(COMMENT?: string | Uint8Array | null, MAN_EPOCH_IGNITION?: string | Uint8Array | null, MAN_DURATION?: number, MAN_DELTA_MASS?: number, MAN_REF_FRAME?: string | Uint8Array | null, MAN_DV_1?: number, MAN_DV_2?: number, MAN_DV_3?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPMManeuver.d.ts.map