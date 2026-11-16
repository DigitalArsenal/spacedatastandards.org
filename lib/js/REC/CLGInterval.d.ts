import * as flatbuffers from 'flatbuffers';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
/**
 * START/STOP/READY_FROM are emission TT offsets (docs/clg-contract.md section 3a).
 * Packed scalars are present iff HAS_VALUES=true, otherwise invalid.
 * READY_FROM_S is present iff HAS_READY_FROM=true (no silent zero readiness).
 */
export declare class CLGInterval implements flatbuffers.IUnpackableObject<CLGIntervalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGInterval;
    START_S(): number;
    STOP_S(): number;
    MIN_RANGE_M(): number;
    MAX_RANGE_M(): number;
    READY_FROM_S(): number;
    PAIR_INDEX(obj?: CLGIndex): CLGIndex | null;
    START_BOUNDARY_INDEX(obj?: CLGIndex): CLGIndex | null;
    STOP_BOUNDARY_INDEX(obj?: CLGIndex): CLGIndex | null;
    HAS_VALUES(): boolean;
    HAS_READY_FROM(): boolean;
    static sizeOf(): number;
    static createCLGInterval(builder: flatbuffers.Builder, START_S: number, STOP_S: number, MIN_RANGE_M: number, MAX_RANGE_M: number, READY_FROM_S: number, PAIR_INDEX_VALUE: number, PAIR_INDEX_HAS_VALUE: boolean, START_BOUNDARY_INDEX_VALUE: number, START_BOUNDARY_INDEX_HAS_VALUE: boolean, STOP_BOUNDARY_INDEX_VALUE: number, STOP_BOUNDARY_INDEX_HAS_VALUE: boolean, HAS_VALUES: boolean, HAS_READY_FROM: boolean): flatbuffers.Offset;
    unpack(): CLGIntervalT;
    unpackTo(_o: CLGIntervalT): void;
}
export declare class CLGIntervalT implements flatbuffers.IGeneratedObject {
    START_S: number;
    STOP_S: number;
    MIN_RANGE_M: number;
    MAX_RANGE_M: number;
    READY_FROM_S: number;
    PAIR_INDEX: CLGIndexT | null;
    START_BOUNDARY_INDEX: CLGIndexT | null;
    STOP_BOUNDARY_INDEX: CLGIndexT | null;
    HAS_VALUES: boolean;
    HAS_READY_FROM: boolean;
    constructor(START_S?: number, STOP_S?: number, MIN_RANGE_M?: number, MAX_RANGE_M?: number, READY_FROM_S?: number, PAIR_INDEX?: CLGIndexT | null, START_BOUNDARY_INDEX?: CLGIndexT | null, STOP_BOUNDARY_INDEX?: CLGIndexT | null, HAS_VALUES?: boolean, HAS_READY_FROM?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGInterval.d.ts.map