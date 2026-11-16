import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
import { clgBoundaryCause } from './clgBoundaryCause.js';
import { clgTransitionStage } from './clgTransitionStage.js';
export declare class CLGTransition implements flatbuffers.IUnpackableObject<CLGTransitionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGTransition;
    /**
     * Physical scheduling event in TT. ACTIVE/DRAIN bound emission service;
     * retarded RELEASE follows the latest demanded reception, including tails.
     */
    TIME_S(): number;
    LINK_INDEX(obj?: CLGIndex): CLGIndex | null;
    STAGE(): clgTransitionStage;
    CAUSE(): clgBoundaryCause;
    HAS_TIME(): boolean;
    HAS_STAGE(): boolean;
    HAS_CAUSE(): boolean;
    static sizeOf(): number;
    static createCLGTransition(builder: flatbuffers.Builder, TIME_S: number, LINK_INDEX_VALUE: number, LINK_INDEX_HAS_VALUE: boolean, STAGE: clgTransitionStage, CAUSE: clgBoundaryCause, HAS_TIME: boolean, HAS_STAGE: boolean, HAS_CAUSE: boolean): flatbuffers.Offset;
    unpack(): CLGTransitionT;
    unpackTo(_o: CLGTransitionT): void;
}
export declare class CLGTransitionT implements flatbuffers.IGeneratedObject {
    TIME_S: number;
    LINK_INDEX: CLGIndexT | null;
    STAGE: clgTransitionStage;
    CAUSE: clgBoundaryCause;
    HAS_TIME: boolean;
    HAS_STAGE: boolean;
    HAS_CAUSE: boolean;
    constructor(TIME_S?: number, LINK_INDEX?: CLGIndexT | null, STAGE?: clgTransitionStage, CAUSE?: clgBoundaryCause, HAS_TIME?: boolean, HAS_STAGE?: boolean, HAS_CAUSE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGTransition.d.ts.map