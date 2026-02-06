import * as flatbuffers from 'flatbuffers';
/**
 * Attitude Maneuver
 */
export declare class attManeuver implements flatbuffers.IUnpackableObject<attManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): attManeuver;
    static getRootAsattManeuver(bb: flatbuffers.ByteBuffer, obj?: attManeuver): attManeuver;
    static getSizePrefixedRootAsattManeuver(bb: flatbuffers.ByteBuffer, obj?: attManeuver): attManeuver;
    /**
     * Maneuver epoch start (ISO 8601)
     */
    MAN_EPOCH_START(): string | null;
    MAN_EPOCH_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration in seconds
     */
    DURATION(): number;
    /**
     * Reference frame
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Torque about body X in N*m
     */
    TOR_1(): number;
    /**
     * Torque about body Y in N*m
     */
    TOR_2(): number;
    /**
     * Torque about body Z in N*m
     */
    TOR_3(): number;
    static startattManeuver(builder: flatbuffers.Builder): void;
    static addManEpochStart(builder: flatbuffers.Builder, MAN_EPOCH_STARTOffset: flatbuffers.Offset): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTor1(builder: flatbuffers.Builder, TOR_1: number): void;
    static addTor2(builder: flatbuffers.Builder, TOR_2: number): void;
    static addTor3(builder: flatbuffers.Builder, TOR_3: number): void;
    static endattManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createattManeuver(builder: flatbuffers.Builder, MAN_EPOCH_STARTOffset: flatbuffers.Offset, DURATION: number, REF_FRAMEOffset: flatbuffers.Offset, TOR_1: number, TOR_2: number, TOR_3: number): flatbuffers.Offset;
    unpack(): attManeuverT;
    unpackTo(_o: attManeuverT): void;
}
export declare class attManeuverT implements flatbuffers.IGeneratedObject {
    MAN_EPOCH_START: string | Uint8Array | null;
    DURATION: number;
    REF_FRAME: string | Uint8Array | null;
    TOR_1: number;
    TOR_2: number;
    TOR_3: number;
    constructor(MAN_EPOCH_START?: string | Uint8Array | null, DURATION?: number, REF_FRAME?: string | Uint8Array | null, TOR_1?: number, TOR_2?: number, TOR_3?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=attManeuver.d.ts.map