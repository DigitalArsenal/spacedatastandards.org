import * as flatbuffers from 'flatbuffers';
/**
 * What one call's rows share. 24 bytes.
 */
export declare class FMBGroup implements flatbuffers.IUnpackableObject<FMBGroupT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBGroup;
    /**
     * When this feed delivered the rows (Unix seconds).
     */
    DELIVERED_AT(): bigint;
    /**
     * NODE dictionary id; 0 none.
     */
    NODE_ID(): number;
    /**
     * BATCH dictionary id; 0 none.
     */
    BATCH_ID(): number;
    /**
     * CONTENT_KEY dictionary id; 0 none.
     */
    CONTENT_KEY_ID(): number;
    /**
     * URL dictionary id; 0 none.
     */
    URL_ID(): number;
    static sizeOf(): number;
    static createFMBGroup(builder: flatbuffers.Builder, DELIVERED_AT: bigint, NODE_ID: number, BATCH_ID: number, CONTENT_KEY_ID: number, URL_ID: number): flatbuffers.Offset;
    unpack(): FMBGroupT;
    unpackTo(_o: FMBGroupT): void;
}
export declare class FMBGroupT implements flatbuffers.IGeneratedObject {
    DELIVERED_AT: bigint;
    NODE_ID: number;
    BATCH_ID: number;
    CONTENT_KEY_ID: number;
    URL_ID: number;
    constructor(DELIVERED_AT?: bigint, NODE_ID?: number, BATCH_ID?: number, CONTENT_KEY_ID?: number, URL_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBGroup.d.ts.map