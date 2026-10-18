import * as flatbuffers from 'flatbuffers';
/**
 * One delivery of one record to the feed; its rid is SEQ << 16 | ROW_J.
 * 40 bytes. Epoch and object key are not stored: they are re-extracted from
 * the record bytes (sealed rows carry theirs in FMBSealed).
 */
export declare class FMBRow implements flatbuffers.IUnpackableObject<FMBRowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBRow;
    /**
     * Stream offset of the record frame's size prefix (this round's frame, or
     * an earlier frame with the same bytes).
     */
    OFFSET(): bigint;
    /**
     * The record's arrival number in the type's seq space.
     */
    SEQ(): bigint;
    /**
     * The copy's source timestamp, as supplied with the write.
     */
    SOURCE_TS(): bigint;
    /**
     * Size of the record frame's FlatBuffer (size prefix excluded).
     */
    LENGTH(): number;
    /**
     * Index into FMB.GROUPS.
     */
    GROUP(): number;
    /**
     * The row's j within the record's rows.
     */
    ROW_J(): number;
    /**
     * bit0 NEW_FRAME (the frame was written by this round), bit1 SEALED,
     * bit2 LARGE (over 1 MiB: see FMB.LARGE), bit3 MOVED_IN (seq kept from
     * local), bit4 COMPACTED (re-emitted by a compaction), bit5 COPY,
     * bit6 RETAG; other bits 0.
     */
    FLAGS(): number;
    /**
     * 0.
     */
    RESERVED(): number;
    static sizeOf(): number;
    static createFMBRow(builder: flatbuffers.Builder, OFFSET: bigint, SEQ: bigint, SOURCE_TS: bigint, LENGTH: number, GROUP: number, ROW_J: number, FLAGS: number, RESERVED: number): flatbuffers.Offset;
    unpack(): FMBRowT;
    unpackTo(_o: FMBRowT): void;
}
export declare class FMBRowT implements flatbuffers.IGeneratedObject {
    OFFSET: bigint;
    SEQ: bigint;
    SOURCE_TS: bigint;
    LENGTH: number;
    GROUP: number;
    ROW_J: number;
    FLAGS: number;
    RESERVED: number;
    constructor(OFFSET?: bigint, SEQ?: bigint, SOURCE_TS?: bigint, LENGTH?: number, GROUP?: number, ROW_J?: number, FLAGS?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBRow.d.ts.map