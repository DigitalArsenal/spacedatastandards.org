import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { cqrProbabilityAlgorithm } from './cqrProbabilityAlgorithm.js';
/**
 * Explicit UTC search window and positive resolution, SI seconds/metres.
 */
export declare class CQRScreeningControls implements flatbuffers.IUnpackableObject<CQRScreeningControlsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRScreeningControls;
    static getRootAsCQRScreeningControls(bb: flatbuffers.ByteBuffer, obj?: CQRScreeningControls): CQRScreeningControls;
    static getSizePrefixedRootAsCQRScreeningControls(bb: flatbuffers.ByteBuffer, obj?: CQRScreeningControls): CQRScreeningControls;
    START_EPOCH(obj?: TIMInstant): TIMInstant | null;
    DURATION_SECONDS(): number;
    THRESHOLD_M(): number;
    REQUESTED_WORKERS(): number;
    COARSE_STEP_SECONDS(): number;
    REFINEMENT_TOLERANCE_SECONDS(): number;
    COMBINED_RADIUS_M(): number;
    USE_KD_TREE(): boolean;
    USE_DYNAMIC_WINDOW(): boolean;
    USE_PERIGEE_FILTER(): boolean;
    /**
     * Optional progress cadence; PIV carries backpressure, not scientific data.
     */
    PROGRESS_INTERVAL_SECONDS(): number;
    /**
     * True when PROGRESS_INTERVAL_SECONDS carries a value; false means absent.
     */
    HAS_PROGRESS_INTERVAL_SECONDS(): boolean;
    ALGORITHM(): cqrProbabilityAlgorithm;
    static startCQRScreeningControls(builder: flatbuffers.Builder): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addDurationSeconds(builder: flatbuffers.Builder, DURATION_SECONDS: number): void;
    static addThresholdM(builder: flatbuffers.Builder, THRESHOLD_M: number): void;
    static addRequestedWorkers(builder: flatbuffers.Builder, REQUESTED_WORKERS: number): void;
    static addCoarseStepSeconds(builder: flatbuffers.Builder, COARSE_STEP_SECONDS: number): void;
    static addRefinementToleranceSeconds(builder: flatbuffers.Builder, REFINEMENT_TOLERANCE_SECONDS: number): void;
    static addCombinedRadiusM(builder: flatbuffers.Builder, COMBINED_RADIUS_M: number): void;
    static addUseKdTree(builder: flatbuffers.Builder, USE_KD_TREE: boolean): void;
    static addUseDynamicWindow(builder: flatbuffers.Builder, USE_DYNAMIC_WINDOW: boolean): void;
    static addUsePerigeeFilter(builder: flatbuffers.Builder, USE_PERIGEE_FILTER: boolean): void;
    static addProgressIntervalSeconds(builder: flatbuffers.Builder, PROGRESS_INTERVAL_SECONDS: number): void;
    static addHasProgressIntervalSeconds(builder: flatbuffers.Builder, HAS_PROGRESS_INTERVAL_SECONDS: boolean): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: cqrProbabilityAlgorithm): void;
    static endCQRScreeningControls(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRScreeningControls(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset, DURATION_SECONDS: number, THRESHOLD_M: number, REQUESTED_WORKERS: number, COARSE_STEP_SECONDS: number, REFINEMENT_TOLERANCE_SECONDS: number, COMBINED_RADIUS_M: number, USE_KD_TREE: boolean, USE_DYNAMIC_WINDOW: boolean, USE_PERIGEE_FILTER: boolean, PROGRESS_INTERVAL_SECONDS: number, HAS_PROGRESS_INTERVAL_SECONDS: boolean, ALGORITHM: cqrProbabilityAlgorithm): flatbuffers.Offset;
    unpack(): CQRScreeningControlsT;
    unpackTo(_o: CQRScreeningControlsT): void;
}
export declare class CQRScreeningControlsT implements flatbuffers.IGeneratedObject {
    START_EPOCH: TIMInstantT | null;
    DURATION_SECONDS: number;
    THRESHOLD_M: number;
    REQUESTED_WORKERS: number;
    COARSE_STEP_SECONDS: number;
    REFINEMENT_TOLERANCE_SECONDS: number;
    COMBINED_RADIUS_M: number;
    USE_KD_TREE: boolean;
    USE_DYNAMIC_WINDOW: boolean;
    USE_PERIGEE_FILTER: boolean;
    PROGRESS_INTERVAL_SECONDS: number;
    HAS_PROGRESS_INTERVAL_SECONDS: boolean;
    ALGORITHM: cqrProbabilityAlgorithm;
    constructor(START_EPOCH?: TIMInstantT | null, DURATION_SECONDS?: number, THRESHOLD_M?: number, REQUESTED_WORKERS?: number, COARSE_STEP_SECONDS?: number, REFINEMENT_TOLERANCE_SECONDS?: number, COMBINED_RADIUS_M?: number, USE_KD_TREE?: boolean, USE_DYNAMIC_WINDOW?: boolean, USE_PERIGEE_FILTER?: boolean, PROGRESS_INTERVAL_SECONDS?: number, HAS_PROGRESS_INTERVAL_SECONDS?: boolean, ALGORITHM?: cqrProbabilityAlgorithm);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRScreeningControls.d.ts.map