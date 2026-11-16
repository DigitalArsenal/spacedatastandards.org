import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
import { clgBoundaryCause } from './clgBoundaryCause.js';
import { clgRayDirection } from './clgRayDirection.js';
/**
 * All co-causes retained, sorted by enum ordinal, ray direction, body index.
 * BODY_INDEX supplied for OCCULTATION, HORIZON_A/B and TERRAIN_A/B only.
 * No ambiguous zero body.
 */
export declare class CLGCause implements flatbuffers.IUnpackableObject<CLGCauseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGCause;
    KIND(): clgBoundaryCause;
    DIRECTION(): clgRayDirection;
    BODY_INDEX(obj?: CLGIndex): CLGIndex | null;
    HAS_KIND(): boolean;
    HAS_DIRECTION(): boolean;
    static sizeOf(): number;
    static createCLGCause(builder: flatbuffers.Builder, KIND: clgBoundaryCause, DIRECTION: clgRayDirection, BODY_INDEX_VALUE: number, BODY_INDEX_HAS_VALUE: boolean, HAS_KIND: boolean, HAS_DIRECTION: boolean): flatbuffers.Offset;
    unpack(): CLGCauseT;
    unpackTo(_o: CLGCauseT): void;
}
export declare class CLGCauseT implements flatbuffers.IGeneratedObject {
    KIND: clgBoundaryCause;
    DIRECTION: clgRayDirection;
    BODY_INDEX: CLGIndexT | null;
    HAS_KIND: boolean;
    HAS_DIRECTION: boolean;
    constructor(KIND?: clgBoundaryCause, DIRECTION?: clgRayDirection, BODY_INDEX?: CLGIndexT | null, HAS_KIND?: boolean, HAS_DIRECTION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGCause.d.ts.map