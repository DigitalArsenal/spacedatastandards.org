import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
export declare class CLGBlackout implements flatbuffers.IUnpackableObject<CLGBlackoutT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGBlackout;
    TERMINAL_INDEX(obj?: CLGIndex): CLGIndex | null;
    START_S(): number;
    STOP_S(): number;
    HAS_TIMES(): boolean;
    static sizeOf(): number;
    static createCLGBlackout(builder: flatbuffers.Builder, TERMINAL_INDEX_VALUE: number, TERMINAL_INDEX_HAS_VALUE: boolean, START_S: number, STOP_S: number, HAS_TIMES: boolean): flatbuffers.Offset;
    unpack(): CLGBlackoutT;
    unpackTo(_o: CLGBlackoutT): void;
}
export declare class CLGBlackoutT implements flatbuffers.IGeneratedObject {
    TERMINAL_INDEX: CLGIndexT | null;
    START_S: number;
    STOP_S: number;
    HAS_TIMES: boolean;
    constructor(TERMINAL_INDEX?: CLGIndexT | null, START_S?: number, STOP_S?: number, HAS_TIMES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGBlackout.d.ts.map