import * as flatbuffers from 'flatbuffers';
import { fmbRemoveReason } from './fmbRemoveReason.js';
/**
 * Rows that leave the feed. ROW_J 0xFFFFFFFF removes every row of SEQ.
 */
export declare class FMBRemove implements flatbuffers.IUnpackableObject<FMBRemoveT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBRemove;
    SEQ(): bigint;
    ROW_J(): number;
    REASON(): fmbRemoveReason;
    static sizeOf(): number;
    static createFMBRemove(builder: flatbuffers.Builder, SEQ: bigint, ROW_J: number, REASON: fmbRemoveReason): flatbuffers.Offset;
    unpack(): FMBRemoveT;
    unpackTo(_o: FMBRemoveT): void;
}
export declare class FMBRemoveT implements flatbuffers.IGeneratedObject {
    SEQ: bigint;
    ROW_J: number;
    REASON: fmbRemoveReason;
    constructor(SEQ?: bigint, ROW_J?: number, REASON?: fmbRemoveReason);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBRemove.d.ts.map