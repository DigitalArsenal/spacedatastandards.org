import * as flatbuffers from 'flatbuffers';
/**
 * One instance's counters. 88 bytes.
 */
export declare class FSGInstance implements flatbuffers.IUnpackableObject<FSGInstanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSGInstance;
    BATCH_ID(): number;
    CONTENT_KEY_ID(): number;
    RECORDS(): bigint;
    BYTES(): bigint;
    MIN_W(): bigint;
    MAX_W(): bigint;
    MIN_SEQ(): bigint;
    MAX_SEQ(): bigint;
    FIRST(): bigint;
    UPDATED(): bigint;
    MAX_AT(): bigint;
    MAX_TS(): bigint;
    static sizeOf(): number;
    static createFSGInstance(builder: flatbuffers.Builder, BATCH_ID: number, CONTENT_KEY_ID: number, RECORDS: bigint, BYTES: bigint, MIN_W: bigint, MAX_W: bigint, MIN_SEQ: bigint, MAX_SEQ: bigint, FIRST: bigint, UPDATED: bigint, MAX_AT: bigint, MAX_TS: bigint): flatbuffers.Offset;
    unpack(): FSGInstanceT;
    unpackTo(_o: FSGInstanceT): void;
}
export declare class FSGInstanceT implements flatbuffers.IGeneratedObject {
    BATCH_ID: number;
    CONTENT_KEY_ID: number;
    RECORDS: bigint;
    BYTES: bigint;
    MIN_W: bigint;
    MAX_W: bigint;
    MIN_SEQ: bigint;
    MAX_SEQ: bigint;
    FIRST: bigint;
    UPDATED: bigint;
    MAX_AT: bigint;
    MAX_TS: bigint;
    constructor(BATCH_ID?: number, CONTENT_KEY_ID?: number, RECORDS?: bigint, BYTES?: bigint, MIN_W?: bigint, MAX_W?: bigint, MIN_SEQ?: bigint, MAX_SEQ?: bigint, FIRST?: bigint, UPDATED?: bigint, MAX_AT?: bigint, MAX_TS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSGInstance.d.ts.map