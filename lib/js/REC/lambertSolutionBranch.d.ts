import * as flatbuffers from 'flatbuffers';
import { lambertBranchKind } from './lambertBranchKind.js';
import { lambertVector3, lambertVector3T } from './lambertVector3.js';
/**
 * One returned Lambert solution branch.
 */
export declare class lambertSolutionBranch implements flatbuffers.IUnpackableObject<lambertSolutionBranchT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lambertSolutionBranch;
    static getRootAslambertSolutionBranch(bb: flatbuffers.ByteBuffer, obj?: lambertSolutionBranch): lambertSolutionBranch;
    static getSizePrefixedRootAslambertSolutionBranch(bb: flatbuffers.ByteBuffer, obj?: lambertSolutionBranch): lambertSolutionBranch;
    /**
     * Branch kind.
     */
    BRANCH_KIND(): lambertBranchKind;
    /**
     * Complete revolution count for this branch. Zero for single-revolution.
     */
    N_REVS(): number;
    /**
     * Departure velocity at r1 (km/s).
     */
    V1(obj?: lambertVector3): lambertVector3 | null;
    /**
     * Arrival velocity at r2 (km/s).
     */
    V2(obj?: lambertVector3): lambertVector3 | null;
    /**
     * Householder iteration count used to converge this branch.
     */
    ITERATIONS(): number;
    static startlambertSolutionBranch(builder: flatbuffers.Builder): void;
    static addBranchKind(builder: flatbuffers.Builder, BRANCH_KIND: lambertBranchKind): void;
    static addNRevs(builder: flatbuffers.Builder, N_REVS: number): void;
    static addV1(builder: flatbuffers.Builder, V1Offset: flatbuffers.Offset): void;
    static addV2(builder: flatbuffers.Builder, V2Offset: flatbuffers.Offset): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static endlambertSolutionBranch(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): lambertSolutionBranchT;
    unpackTo(_o: lambertSolutionBranchT): void;
}
export declare class lambertSolutionBranchT implements flatbuffers.IGeneratedObject {
    BRANCH_KIND: lambertBranchKind;
    N_REVS: number;
    V1: lambertVector3T | null;
    V2: lambertVector3T | null;
    ITERATIONS: number;
    constructor(BRANCH_KIND?: lambertBranchKind, N_REVS?: number, V1?: lambertVector3T | null, V2?: lambertVector3T | null, ITERATIONS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lambertSolutionBranch.d.ts.map