import * as flatbuffers from 'flatbuffers';
import { tbpManifoldBranch, tbpManifoldBranchT } from './tbpManifoldBranch.js';
import { tbpManifoldBranchKind } from './tbpManifoldBranchKind.js';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
/**
 * Invariant manifold request and computed branches for an unstable periodic orbit.
 */
export declare class tbpManifolds implements flatbuffers.IUnpackableObject<tbpManifoldsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpManifolds;
    static getRootAstbpManifolds(bb: flatbuffers.ByteBuffer, obj?: tbpManifolds): tbpManifolds;
    static getSizePrefixedRootAstbpManifolds(bb: flatbuffers.ByteBuffer, obj?: tbpManifolds): tbpManifolds;
    /**
     * Periodic orbit to perturb (INITIAL_STATE and PERIOD required).
     */
    ORBIT(obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    /**
     * Perturbation distance epsilon (non-dimensional); 0 = default (1e-5).
     */
    PERTURBATION(): number;
    /**
     * Propagation duration per branch, non-dimensional; 0 = one orbit period.
     */
    DURATION(): number;
    /**
     * Number of seed points along the periodic orbit; 0 = default (12).
     */
    SAMPLE_POINTS(): number;
    /**
     * Which manifold branches to generate.
     */
    BRANCH_KIND(): tbpManifoldBranchKind;
    /**
     * Computed manifold branches.
     */
    BRANCHES(index: number, obj?: tbpManifoldBranch): tbpManifoldBranch | null;
    branchesLength(): number;
    static starttbpManifolds(builder: flatbuffers.Builder): void;
    static addOrbit(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset): void;
    static addPerturbation(builder: flatbuffers.Builder, PERTURBATION: number): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addSamplePoints(builder: flatbuffers.Builder, SAMPLE_POINTS: number): void;
    static addBranchKind(builder: flatbuffers.Builder, BRANCH_KIND: tbpManifoldBranchKind): void;
    static addBranches(builder: flatbuffers.Builder, BRANCHESOffset: flatbuffers.Offset): void;
    static createBranchesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBranchesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endtbpManifolds(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpManifolds(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset, PERTURBATION: number, DURATION: number, SAMPLE_POINTS: number, BRANCH_KIND: tbpManifoldBranchKind, BRANCHESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): tbpManifoldsT;
    unpackTo(_o: tbpManifoldsT): void;
}
export declare class tbpManifoldsT implements flatbuffers.IGeneratedObject {
    ORBIT: tbpPeriodicOrbitT | null;
    PERTURBATION: number;
    DURATION: number;
    SAMPLE_POINTS: number;
    BRANCH_KIND: tbpManifoldBranchKind;
    BRANCHES: (tbpManifoldBranchT)[];
    constructor(ORBIT?: tbpPeriodicOrbitT | null, PERTURBATION?: number, DURATION?: number, SAMPLE_POINTS?: number, BRANCH_KIND?: tbpManifoldBranchKind, BRANCHES?: (tbpManifoldBranchT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpManifolds.d.ts.map