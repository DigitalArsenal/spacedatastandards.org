import * as flatbuffers from 'flatbuffers';
/**
 * Latest record of one object. 32 bytes.
 */
export declare class FSGLatest implements flatbuffers.IUnpackableObject<FSGLatestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSGLatest;
    OBJECT_KEY_ID(): number;
    RESERVED(): number;
    EPOCH(): bigint;
    RID(): bigint;
    ROW_REF(): bigint;
    static sizeOf(): number;
    static createFSGLatest(builder: flatbuffers.Builder, OBJECT_KEY_ID: number, RESERVED: number, EPOCH: bigint, RID: bigint, ROW_REF: bigint): flatbuffers.Offset;
    unpack(): FSGLatestT;
    unpackTo(_o: FSGLatestT): void;
}
export declare class FSGLatestT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY_ID: number;
    RESERVED: number;
    EPOCH: bigint;
    RID: bigint;
    ROW_REF: bigint;
    constructor(OBJECT_KEY_ID?: number, RESERVED?: number, EPOCH?: bigint, RID?: bigint, ROW_REF?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSGLatest.d.ts.map