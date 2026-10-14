import * as flatbuffers from 'flatbuffers';
/**
 * A known maneuver and the detection matched to it (if any).
 */
export declare class MDETruthMatch implements flatbuffers.IUnpackableObject<MDETruthMatchT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDETruthMatch;
    static getRootAsMDETruthMatch(bb: flatbuffers.ByteBuffer, obj?: MDETruthMatch): MDETruthMatch;
    static getSizePrefixedRootAsMDETruthMatch(bb: flatbuffers.ByteBuffer, obj?: MDETruthMatch): MDETruthMatch;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The known maneuver's ID and time, Unix ms.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_MS(): bigint;
    /**
     * Known delta-v and its in-track part, m/s.
     */
    DV_M_S(): number;
    IN_TRACK_M_S(): number;
    /**
     * The matched detection's ID and time; empty and 0 for a miss.
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EVENT_TIME_MS(): bigint;
    /**
     * Detection minus truth time, s; NaN for a miss.
     */
    TIME_ERROR_S(): number;
    EVENT_DV_M_S(): number;
    EVENT_IN_TRACK_M_S(): number;
    DV_RATIO(): number;
    IN_TRACK_RATIO(): number;
    static startMDETruthMatch(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addDvMS(builder: flatbuffers.Builder, DV_M_S: number): void;
    static addInTrackMS(builder: flatbuffers.Builder, IN_TRACK_M_S: number): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addEventTimeMs(builder: flatbuffers.Builder, EVENT_TIME_MS: bigint): void;
    static addTimeErrorS(builder: flatbuffers.Builder, TIME_ERROR_S: number): void;
    static addEventDvMS(builder: flatbuffers.Builder, EVENT_DV_M_S: number): void;
    static addEventInTrackMS(builder: flatbuffers.Builder, EVENT_IN_TRACK_M_S: number): void;
    static addDvRatio(builder: flatbuffers.Builder, DV_RATIO: number): void;
    static addInTrackRatio(builder: flatbuffers.Builder, IN_TRACK_RATIO: number): void;
    static endMDETruthMatch(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDETruthMatch(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, IDOffset: flatbuffers.Offset, TIME_MS: bigint, DV_M_S: number, IN_TRACK_M_S: number, EVENT_IDOffset: flatbuffers.Offset, EVENT_TIME_MS: bigint, TIME_ERROR_S: number, EVENT_DV_M_S: number, EVENT_IN_TRACK_M_S: number, DV_RATIO: number, IN_TRACK_RATIO: number): flatbuffers.Offset;
    unpack(): MDETruthMatchT;
    unpackTo(_o: MDETruthMatchT): void;
}
export declare class MDETruthMatchT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    ID: string | Uint8Array | null;
    TIME_MS: bigint;
    DV_M_S: number;
    IN_TRACK_M_S: number;
    EVENT_ID: string | Uint8Array | null;
    EVENT_TIME_MS: bigint;
    TIME_ERROR_S: number;
    EVENT_DV_M_S: number;
    EVENT_IN_TRACK_M_S: number;
    DV_RATIO: number;
    IN_TRACK_RATIO: number;
    constructor(OBJECT_KEY?: string | Uint8Array | null, ID?: string | Uint8Array | null, TIME_MS?: bigint, DV_M_S?: number, IN_TRACK_M_S?: number, EVENT_ID?: string | Uint8Array | null, EVENT_TIME_MS?: bigint, TIME_ERROR_S?: number, EVENT_DV_M_S?: number, EVENT_IN_TRACK_M_S?: number, DV_RATIO?: number, IN_TRACK_RATIO?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDETruthMatch.d.ts.map