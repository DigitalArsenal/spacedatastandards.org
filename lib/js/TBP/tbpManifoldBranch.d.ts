import * as flatbuffers from 'flatbuffers';
import { tbpState, tbpStateT } from './tbpState.js';
import { tbpTrajectory, tbpTrajectoryT } from './tbpTrajectory.js';
/**
 * One stable or unstable invariant manifold branch emanating from a periodic orbit.
 */
export declare class tbpManifoldBranch implements flatbuffers.IUnpackableObject<tbpManifoldBranchT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpManifoldBranch;
    static getRootAstbpManifoldBranch(bb: flatbuffers.ByteBuffer, obj?: tbpManifoldBranch): tbpManifoldBranch;
    static getSizePrefixedRootAstbpManifoldBranch(bb: flatbuffers.ByteBuffer, obj?: tbpManifoldBranch): tbpManifoldBranch;
    /**
     * True = stable branch (integrated backward), false = unstable branch (forward).
     */
    STABLE(): boolean;
    /**
     * True = exterior (+eigenvector), false = interior (-eigenvector).
     */
    EXTERIOR(): boolean;
    /**
     * Index of the seed point along the periodic orbit.
     */
    SEED_INDEX(): number;
    /**
     * Perturbed initial state on the manifold, non-dimensional.
     */
    INITIAL_STATE(obj?: tbpState): tbpState | null;
    /**
     * Propagated manifold trajectory.
     */
    TRAJECTORY(obj?: tbpTrajectory): tbpTrajectory | null;
    static starttbpManifoldBranch(builder: flatbuffers.Builder): void;
    static addStable(builder: flatbuffers.Builder, STABLE: boolean): void;
    static addExterior(builder: flatbuffers.Builder, EXTERIOR: boolean): void;
    static addSeedIndex(builder: flatbuffers.Builder, SEED_INDEX: number): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static endtbpManifoldBranch(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpManifoldBranchT;
    unpackTo(_o: tbpManifoldBranchT): void;
}
export declare class tbpManifoldBranchT implements flatbuffers.IGeneratedObject {
    STABLE: boolean;
    EXTERIOR: boolean;
    SEED_INDEX: number;
    INITIAL_STATE: tbpStateT | null;
    TRAJECTORY: tbpTrajectoryT | null;
    constructor(STABLE?: boolean, EXTERIOR?: boolean, SEED_INDEX?: number, INITIAL_STATE?: tbpStateT | null, TRAJECTORY?: tbpTrajectoryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpManifoldBranch.d.ts.map