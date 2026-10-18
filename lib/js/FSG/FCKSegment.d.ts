import * as flatbuffers from 'flatbuffers';
import { fckSegmentKind } from './fckSegmentKind.js';
/**
 * One live state segment. 48 bytes.
 */
export declare class FCKSegment implements flatbuffers.IUnpackableObject<FCKSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FCKSegment;
    /**
     * Stream offset of the segment frame's size prefix.
     */
    OFFSET(): bigint;
    /**
     * Size of its FlatBuffer.
     */
    LENGTH(): number;
    KIND(): fckSegmentKind;
    /**
     * LSM level (0 = written at a checkpoint).
     */
    LEVEL(): number;
    /**
     * 0.
     */
    RESERVED(): number;
    MIN_SEQ(): bigint;
    MAX_SEQ(): bigint;
    /**
     * End offset of the last FMB the segment folds in.
     */
    COVERS_THROUGH(): bigint;
    ENTRIES(): bigint;
    static sizeOf(): number;
    static createFCKSegment(builder: flatbuffers.Builder, OFFSET: bigint, LENGTH: number, KIND: fckSegmentKind, LEVEL: number, RESERVED: number, MIN_SEQ: bigint, MAX_SEQ: bigint, COVERS_THROUGH: bigint, ENTRIES: bigint): flatbuffers.Offset;
    unpack(): FCKSegmentT;
    unpackTo(_o: FCKSegmentT): void;
}
export declare class FCKSegmentT implements flatbuffers.IGeneratedObject {
    OFFSET: bigint;
    LENGTH: number;
    KIND: fckSegmentKind;
    LEVEL: number;
    RESERVED: number;
    MIN_SEQ: bigint;
    MAX_SEQ: bigint;
    COVERS_THROUGH: bigint;
    ENTRIES: bigint;
    constructor(OFFSET?: bigint, LENGTH?: number, KIND?: fckSegmentKind, LEVEL?: number, RESERVED?: number, MIN_SEQ?: bigint, MAX_SEQ?: bigint, COVERS_THROUGH?: bigint, ENTRIES?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FCKSegment.d.ts.map