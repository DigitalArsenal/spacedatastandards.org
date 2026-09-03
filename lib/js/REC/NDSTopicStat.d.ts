import * as flatbuffers from 'flatbuffers';
/**
 * Live traffic for one publish/subscribe topic.
 */
export declare class NDSTopicStat implements flatbuffers.IUnpackableObject<NDSTopicStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSTopicStat;
    static getRootAsNDSTopicStat(bb: flatbuffers.ByteBuffer, obj?: NDSTopicStat): NDSTopicStat;
    static getSizePrefixedRootAsNDSTopicStat(bb: flatbuffers.ByteBuffer, obj?: NDSTopicStat): NDSTopicStat;
    TOPIC(): string | null;
    TOPIC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RATE_PER_MIN(): number;
    /**
     * Unix seconds; 0 = not observed.
     */
    LAST_SEEN_AT(): bigint;
    SUBSCRIBED(): boolean;
    static startNDSTopicStat(builder: flatbuffers.Builder): void;
    static addTopic(builder: flatbuffers.Builder, TOPICOffset: flatbuffers.Offset): void;
    static addRatePerMin(builder: flatbuffers.Builder, RATE_PER_MIN: number): void;
    static addLastSeenAt(builder: flatbuffers.Builder, LAST_SEEN_AT: bigint): void;
    static addSubscribed(builder: flatbuffers.Builder, SUBSCRIBED: boolean): void;
    static endNDSTopicStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSTopicStat(builder: flatbuffers.Builder, TOPICOffset: flatbuffers.Offset, RATE_PER_MIN: number, LAST_SEEN_AT: bigint, SUBSCRIBED: boolean): flatbuffers.Offset;
    unpack(): NDSTopicStatT;
    unpackTo(_o: NDSTopicStatT): void;
}
export declare class NDSTopicStatT implements flatbuffers.IGeneratedObject {
    TOPIC: string | Uint8Array | null;
    RATE_PER_MIN: number;
    LAST_SEEN_AT: bigint;
    SUBSCRIBED: boolean;
    constructor(TOPIC?: string | Uint8Array | null, RATE_PER_MIN?: number, LAST_SEEN_AT?: bigint, SUBSCRIBED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSTopicStat.d.ts.map