import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
import { clgLinkDirection } from './clgLinkDirection.js';
/**
 * A is the endpoint with the lexicographically smaller (NODE_ID,TERMINAL_ID)
 * exact UTF-8 byte tuple, B the larger; distinct nodes, canonical A<B indexes.
 * Reversed fields or noncanonical dictionaries fail, never reverse direction.
 * Sorted by (A,B,DIRECTION); requested direction only.
 */
export declare class CLGPair implements flatbuffers.IUnpackableObject<CLGPairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGPair;
    TERMINAL_A(obj?: CLGIndex): CLGIndex | null;
    TERMINAL_B(obj?: CLGIndex): CLGIndex | null;
    DIRECTION(): clgLinkDirection;
    HAS_DIRECTION(): boolean;
    static sizeOf(): number;
    static createCLGPair(builder: flatbuffers.Builder, TERMINAL_A_VALUE: number, TERMINAL_A_HAS_VALUE: boolean, TERMINAL_B_VALUE: number, TERMINAL_B_HAS_VALUE: boolean, DIRECTION: clgLinkDirection, HAS_DIRECTION: boolean): flatbuffers.Offset;
    unpack(): CLGPairT;
    unpackTo(_o: CLGPairT): void;
}
export declare class CLGPairT implements flatbuffers.IGeneratedObject {
    TERMINAL_A: CLGIndexT | null;
    TERMINAL_B: CLGIndexT | null;
    DIRECTION: clgLinkDirection;
    HAS_DIRECTION: boolean;
    constructor(TERMINAL_A?: CLGIndexT | null, TERMINAL_B?: CLGIndexT | null, DIRECTION?: clgLinkDirection, HAS_DIRECTION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGPair.d.ts.map