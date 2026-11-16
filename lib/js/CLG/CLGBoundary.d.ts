import * as flatbuffers from 'flatbuffers';
import { CLGCause, CLGCauseT } from './CLGCause.js';
import { CLGIndex, CLGIndexT } from './CLGIndex.js';
import { CLGRayTimes, CLGRayTimesT } from './CLGRayTimes.js';
/**
 * Local to a result chunk. Distinct event clusters never merged by tolerance.
 * Certified root brackets overlap only for a proved common event, otherwise
 * refine to disjoint brackets or fail. A common event retains every cause.
 */
export declare class CLGBoundary implements flatbuffers.IUnpackableObject<CLGBoundaryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGBoundary;
    static getRootAsCLGBoundary(bb: flatbuffers.ByteBuffer, obj?: CLGBoundary): CLGBoundary;
    static getSizePrefixedRootAsCLGBoundary(bb: flatbuffers.ByteBuffer, obj?: CLGBoundary): CLGBoundary;
    PAIR_INDEX(obj?: CLGIndex): CLGIndex | null;
    /**
     * Emission clock for every demanded ray, including both duplex rays.
     */
    OFFSET_S(): number;
    BRACKET_LO_S(): number;
    BRACKET_HI_S(): number;
    CAUSES(index: number, obj?: CLGCause): CLGCause | null;
    causesLength(): number;
    /**
     * Exactly the demanded direction(s), A_TO_B before B_TO_A; no duplicates.
     */
    RAY_TIMES(index: number, obj?: CLGRayTimes): CLGRayTimes | null;
    rayTimesLength(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_OFFSET_S(): boolean;
    HAS_BRACKET_LO_S(): boolean;
    HAS_BRACKET_HI_S(): boolean;
    static startCLGBoundary(builder: flatbuffers.Builder): void;
    static addPairIndex(builder: flatbuffers.Builder, PAIR_INDEXOffset: flatbuffers.Offset): void;
    static addOffsetS(builder: flatbuffers.Builder, OFFSET_S: number): void;
    static addBracketLoS(builder: flatbuffers.Builder, BRACKET_LO_S: number): void;
    static addBracketHiS(builder: flatbuffers.Builder, BRACKET_HI_S: number): void;
    static addCauses(builder: flatbuffers.Builder, CAUSESOffset: flatbuffers.Offset): void;
    static startCausesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRayTimes(builder: flatbuffers.Builder, RAY_TIMESOffset: flatbuffers.Offset): void;
    static startRayTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasOffsetS(builder: flatbuffers.Builder, HAS_OFFSET_S: boolean): void;
    static addHasBracketLoS(builder: flatbuffers.Builder, HAS_BRACKET_LO_S: boolean): void;
    static addHasBracketHiS(builder: flatbuffers.Builder, HAS_BRACKET_HI_S: boolean): void;
    static endCLGBoundary(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGBoundary(builder: flatbuffers.Builder, PAIR_INDEXOffset: flatbuffers.Offset, OFFSET_S: number, BRACKET_LO_S: number, BRACKET_HI_S: number, CAUSESOffset: flatbuffers.Offset, RAY_TIMESOffset: flatbuffers.Offset, HAS_OFFSET_S: boolean, HAS_BRACKET_LO_S: boolean, HAS_BRACKET_HI_S: boolean): flatbuffers.Offset;
    unpack(): CLGBoundaryT;
    unpackTo(_o: CLGBoundaryT): void;
}
export declare class CLGBoundaryT implements flatbuffers.IGeneratedObject {
    PAIR_INDEX: CLGIndexT | null;
    OFFSET_S: number;
    BRACKET_LO_S: number;
    BRACKET_HI_S: number;
    CAUSES: (CLGCauseT)[];
    RAY_TIMES: (CLGRayTimesT)[];
    HAS_OFFSET_S: boolean;
    HAS_BRACKET_LO_S: boolean;
    HAS_BRACKET_HI_S: boolean;
    constructor(PAIR_INDEX?: CLGIndexT | null, OFFSET_S?: number, BRACKET_LO_S?: number, BRACKET_HI_S?: number, CAUSES?: (CLGCauseT)[], RAY_TIMES?: (CLGRayTimesT)[], HAS_OFFSET_S?: boolean, HAS_BRACKET_LO_S?: boolean, HAS_BRACKET_HI_S?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGBoundary.d.ts.map