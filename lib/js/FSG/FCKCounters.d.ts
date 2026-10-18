import * as flatbuffers from 'flatbuffers';
/**
 * The feed's counters.
 */
export declare class FCKCounters implements flatbuffers.IUnpackableObject<FCKCountersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FCKCounters;
    ROWS(): bigint;
    RECORDS(): bigint;
    BYTES(): bigint;
    RECORDS_NO_EPOCH(): bigint;
    COPIES(): bigint;
    COPY_BYTES(): bigint;
    LIVE_FRAME_BYTES(): bigint;
    MIN_SEQ(): bigint;
    MAX_SEQ(): bigint;
    MIN_EPOCH(): bigint;
    MAX_EPOCH(): bigint;
    MIN_TS(): bigint;
    MAX_TS(): bigint;
    MIN_AT(): bigint;
    MAX_AT(): bigint;
    static sizeOf(): number;
    static createFCKCounters(builder: flatbuffers.Builder, ROWS: bigint, RECORDS: bigint, BYTES: bigint, RECORDS_NO_EPOCH: bigint, COPIES: bigint, COPY_BYTES: bigint, LIVE_FRAME_BYTES: bigint, MIN_SEQ: bigint, MAX_SEQ: bigint, MIN_EPOCH: bigint, MAX_EPOCH: bigint, MIN_TS: bigint, MAX_TS: bigint, MIN_AT: bigint, MAX_AT: bigint): flatbuffers.Offset;
    unpack(): FCKCountersT;
    unpackTo(_o: FCKCountersT): void;
}
export declare class FCKCountersT implements flatbuffers.IGeneratedObject {
    ROWS: bigint;
    RECORDS: bigint;
    BYTES: bigint;
    RECORDS_NO_EPOCH: bigint;
    COPIES: bigint;
    COPY_BYTES: bigint;
    LIVE_FRAME_BYTES: bigint;
    MIN_SEQ: bigint;
    MAX_SEQ: bigint;
    MIN_EPOCH: bigint;
    MAX_EPOCH: bigint;
    MIN_TS: bigint;
    MAX_TS: bigint;
    MIN_AT: bigint;
    MAX_AT: bigint;
    constructor(ROWS?: bigint, RECORDS?: bigint, BYTES?: bigint, RECORDS_NO_EPOCH?: bigint, COPIES?: bigint, COPY_BYTES?: bigint, LIVE_FRAME_BYTES?: bigint, MIN_SEQ?: bigint, MAX_SEQ?: bigint, MIN_EPOCH?: bigint, MAX_EPOCH?: bigint, MIN_TS?: bigint, MAX_TS?: bigint, MIN_AT?: bigint, MAX_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FCKCounters.d.ts.map