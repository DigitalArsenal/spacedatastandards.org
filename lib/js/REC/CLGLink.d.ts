import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
/**
 * Deduplicated tuple (PAIR_INDEX,SLOT_A,SLOT_B), reused across acquisitions.
 */
export declare class CLGLink implements flatbuffers.IUnpackableObject<CLGLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGLink;
    PAIR_INDEX(obj?: CLGIndex): CLGIndex | null;
    SLOT_A(obj?: CLGIndex): CLGIndex | null;
    SLOT_B(obj?: CLGIndex): CLGIndex | null;
    static sizeOf(): number;
    static createCLGLink(builder: flatbuffers.Builder, PAIR_INDEX_VALUE: number, PAIR_INDEX_HAS_VALUE: boolean, SLOT_A_VALUE: number, SLOT_A_HAS_VALUE: boolean, SLOT_B_VALUE: number, SLOT_B_HAS_VALUE: boolean): flatbuffers.Offset;
    unpack(): CLGLinkT;
    unpackTo(_o: CLGLinkT): void;
}
export declare class CLGLinkT implements flatbuffers.IGeneratedObject {
    PAIR_INDEX: CLGIndexT | null;
    SLOT_A: CLGIndexT | null;
    SLOT_B: CLGIndexT | null;
    constructor(PAIR_INDEX?: CLGIndexT | null, SLOT_A?: CLGIndexT | null, SLOT_B?: CLGIndexT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGLink.d.ts.map