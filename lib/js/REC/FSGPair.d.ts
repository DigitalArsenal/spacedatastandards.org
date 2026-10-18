import * as flatbuffers from 'flatbuffers';
/**
 * FlatSQL Segment.
 *
 * An immutable, sorted state segment in a FlatSQL feed stream (store format 5),
 * listed by a checkpoint ($FCK). Segments are written at checkpoints and merged
 * LSM-style (REPLACES names the inputs); retention by arrival drops whole
 * segments. KIND says which vector is filled. Spec: flatsql cpp/src/p4/FORMAT.md
 * section 3.3.
 * The one sorted entry shape of row orders and tombstones. 32 bytes.
 */
export declare class FSGPair implements flatbuffers.IUnpackableObject<FSGPairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSGPair;
    KEY_HI(): bigint;
    KEY_LO(): bigint;
    /**
     * SEQ << 16 | ROW_J.
     */
    RID(): bigint;
    /**
     * (stream offset of the FMB holding the row) << 16 | the row's index in it.
     */
    ROW_REF(): bigint;
    static sizeOf(): number;
    static createFSGPair(builder: flatbuffers.Builder, KEY_HI: bigint, KEY_LO: bigint, RID: bigint, ROW_REF: bigint): flatbuffers.Offset;
    unpack(): FSGPairT;
    unpackTo(_o: FSGPairT): void;
}
export declare class FSGPairT implements flatbuffers.IGeneratedObject {
    KEY_HI: bigint;
    KEY_LO: bigint;
    RID: bigint;
    ROW_REF: bigint;
    constructor(KEY_HI?: bigint, KEY_LO?: bigint, RID?: bigint, ROW_REF?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSGPair.d.ts.map