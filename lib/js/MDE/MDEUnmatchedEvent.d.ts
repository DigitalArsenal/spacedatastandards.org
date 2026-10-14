import * as flatbuffers from 'flatbuffers';
/**
 * A detection matched to no known maneuver.
 */
export declare class MDEUnmatchedEvent implements flatbuffers.IUnpackableObject<MDEUnmatchedEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEUnmatchedEvent;
    static getRootAsMDEUnmatchedEvent(bb: flatbuffers.ByteBuffer, obj?: MDEUnmatchedEvent): MDEUnmatchedEvent;
    static getSizePrefixedRootAsMDEUnmatchedEvent(bb: flatbuffers.ByteBuffer, obj?: MDEUnmatchedEvent): MDEUnmatchedEvent;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_MS(): bigint;
    DV_M_S(): number;
    IN_TRACK_M_S(): number;
    CROSS_TRACK_M_S(): number;
    /**
     * Inside an explained span.
     */
    EXPLAINED(): boolean;
    /**
     * Inside an assessed span (a false alarm when not explained).
     */
    ASSESSED(): boolean;
    static startMDEUnmatchedEvent(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addDvMS(builder: flatbuffers.Builder, DV_M_S: number): void;
    static addInTrackMS(builder: flatbuffers.Builder, IN_TRACK_M_S: number): void;
    static addCrossTrackMS(builder: flatbuffers.Builder, CROSS_TRACK_M_S: number): void;
    static addExplained(builder: flatbuffers.Builder, EXPLAINED: boolean): void;
    static addAssessed(builder: flatbuffers.Builder, ASSESSED: boolean): void;
    static endMDEUnmatchedEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEUnmatchedEvent(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, IDOffset: flatbuffers.Offset, TIME_MS: bigint, DV_M_S: number, IN_TRACK_M_S: number, CROSS_TRACK_M_S: number, EXPLAINED: boolean, ASSESSED: boolean): flatbuffers.Offset;
    unpack(): MDEUnmatchedEventT;
    unpackTo(_o: MDEUnmatchedEventT): void;
}
export declare class MDEUnmatchedEventT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    ID: string | Uint8Array | null;
    TIME_MS: bigint;
    DV_M_S: number;
    IN_TRACK_M_S: number;
    CROSS_TRACK_M_S: number;
    EXPLAINED: boolean;
    ASSESSED: boolean;
    constructor(OBJECT_KEY?: string | Uint8Array | null, ID?: string | Uint8Array | null, TIME_MS?: bigint, DV_M_S?: number, IN_TRACK_M_S?: number, CROSS_TRACK_M_S?: number, EXPLAINED?: boolean, ASSESSED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEUnmatchedEvent.d.ts.map