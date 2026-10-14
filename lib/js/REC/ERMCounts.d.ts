import * as flatbuffers from 'flatbuffers';
import { ERMNamedCount, ERMNamedCountT } from './ERMNamedCount.js';
/**
 * Counters of a run. A counter a run does not keep is 0.
 */
export declare class ERMCounts implements flatbuffers.IUnpackableObject<ERMCountsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCounts;
    static getRootAsERMCounts(bb: flatbuffers.ByteBuffer, obj?: ERMCounts): ERMCounts;
    static getSizePrefixedRootAsERMCounts(bb: flatbuffers.ByteBuffer, obj?: ERMCounts): ERMCounts;
    ELEMENT_SETS(): number;
    REFUSED(): number;
    DUPLICATE_EPOCHS(): number;
    UNCLASSIFIED(): number;
    OBJECTS(): number;
    SAMPLES(): number;
    PROPAGATION_FAILURES(): number;
    REFERENCE_EPOCHS(): number;
    REFERENCE_OBJECTS_WITHOUT_ELEMENTS(): number;
    ARCS(): number;
    TARGETS(): number;
    SETS_WITHOUT_REFERENCE(): number;
    SETS_WITHOUT_TARGETS(): number;
    ARCS_WITHOUT_MODEL_REGIME(): number;
    TARGETS_OUTSIDE_WINDOW(): number;
    TARGETS_WITHOUT_PREDICTION(): number;
    OUTSIDE_AGE_BINS(): number;
    WITHOUT_COVARIANCE(): number;
    NOT_POSITIVE_DEFINITE(): number;
    MISSING_TARGETS(): number;
    MISSING_SETS(): number;
    DIFFERENCES(): number;
    MAPPED(): number;
    FAILED(): number;
    PAIRS(): number;
    WITHOUT_TRUTH_COVARIANCE(): number;
    OUTSIDE_REGIMES(): number;
    STATES(): number;
    STREAMS(): number;
    BLOCKS(): number;
    COVARIANCES(): number;
    APRIORI_SETS(): number;
    FITTED(): number;
    /**
     * States by frame name, e.g. "TEME", "GCRF", "unsupported".
     */
    FRAME_COUNTS(index: number, obj?: ERMNamedCount): ERMNamedCount | null;
    frameCountsLength(): number;
    /**
     * Products whose covariance came from each rule, 1 to 4 (4 values).
     */
    RULE_COUNTS(index: number): number | null;
    ruleCountsLength(): number;
    ruleCountsArray(): Uint32Array | null;
    CALIBRATED_ROWS(): number;
    UNCALIBRATED_ROWS(): number;
    STATES_OF_OLDER_SETS(): number;
    MANEUVERS(): number;
    static startERMCounts(builder: flatbuffers.Builder): void;
    static addElementSets(builder: flatbuffers.Builder, ELEMENT_SETS: number): void;
    static addRefused(builder: flatbuffers.Builder, REFUSED: number): void;
    static addDuplicateEpochs(builder: flatbuffers.Builder, DUPLICATE_EPOCHS: number): void;
    static addUnclassified(builder: flatbuffers.Builder, UNCLASSIFIED: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static addPropagationFailures(builder: flatbuffers.Builder, PROPAGATION_FAILURES: number): void;
    static addReferenceEpochs(builder: flatbuffers.Builder, REFERENCE_EPOCHS: number): void;
    static addReferenceObjectsWithoutElements(builder: flatbuffers.Builder, REFERENCE_OBJECTS_WITHOUT_ELEMENTS: number): void;
    static addArcs(builder: flatbuffers.Builder, ARCS: number): void;
    static addTargets(builder: flatbuffers.Builder, TARGETS: number): void;
    static addSetsWithoutReference(builder: flatbuffers.Builder, SETS_WITHOUT_REFERENCE: number): void;
    static addSetsWithoutTargets(builder: flatbuffers.Builder, SETS_WITHOUT_TARGETS: number): void;
    static addArcsWithoutModelRegime(builder: flatbuffers.Builder, ARCS_WITHOUT_MODEL_REGIME: number): void;
    static addTargetsOutsideWindow(builder: flatbuffers.Builder, TARGETS_OUTSIDE_WINDOW: number): void;
    static addTargetsWithoutPrediction(builder: flatbuffers.Builder, TARGETS_WITHOUT_PREDICTION: number): void;
    static addOutsideAgeBins(builder: flatbuffers.Builder, OUTSIDE_AGE_BINS: number): void;
    static addWithoutCovariance(builder: flatbuffers.Builder, WITHOUT_COVARIANCE: number): void;
    static addNotPositiveDefinite(builder: flatbuffers.Builder, NOT_POSITIVE_DEFINITE: number): void;
    static addMissingTargets(builder: flatbuffers.Builder, MISSING_TARGETS: number): void;
    static addMissingSets(builder: flatbuffers.Builder, MISSING_SETS: number): void;
    static addDifferences(builder: flatbuffers.Builder, DIFFERENCES: number): void;
    static addMapped(builder: flatbuffers.Builder, MAPPED: number): void;
    static addFailed(builder: flatbuffers.Builder, FAILED: number): void;
    static addPairs(builder: flatbuffers.Builder, PAIRS: number): void;
    static addWithoutTruthCovariance(builder: flatbuffers.Builder, WITHOUT_TRUTH_COVARIANCE: number): void;
    static addOutsideRegimes(builder: flatbuffers.Builder, OUTSIDE_REGIMES: number): void;
    static addStates(builder: flatbuffers.Builder, STATES: number): void;
    static addStreams(builder: flatbuffers.Builder, STREAMS: number): void;
    static addBlocks(builder: flatbuffers.Builder, BLOCKS: number): void;
    static addCovariances(builder: flatbuffers.Builder, COVARIANCES: number): void;
    static addAprioriSets(builder: flatbuffers.Builder, APRIORI_SETS: number): void;
    static addFitted(builder: flatbuffers.Builder, FITTED: number): void;
    static addFrameCounts(builder: flatbuffers.Builder, FRAME_COUNTSOffset: flatbuffers.Offset): void;
    static createFrameCountsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFrameCountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRuleCounts(builder: flatbuffers.Builder, RULE_COUNTSOffset: flatbuffers.Offset): void;
    static createRuleCountsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRuleCountsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRuleCountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCalibratedRows(builder: flatbuffers.Builder, CALIBRATED_ROWS: number): void;
    static addUncalibratedRows(builder: flatbuffers.Builder, UNCALIBRATED_ROWS: number): void;
    static addStatesOfOlderSets(builder: flatbuffers.Builder, STATES_OF_OLDER_SETS: number): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERS: number): void;
    static endERMCounts(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCounts(builder: flatbuffers.Builder, ELEMENT_SETS: number, REFUSED: number, DUPLICATE_EPOCHS: number, UNCLASSIFIED: number, OBJECTS: number, SAMPLES: number, PROPAGATION_FAILURES: number, REFERENCE_EPOCHS: number, REFERENCE_OBJECTS_WITHOUT_ELEMENTS: number, ARCS: number, TARGETS: number, SETS_WITHOUT_REFERENCE: number, SETS_WITHOUT_TARGETS: number, ARCS_WITHOUT_MODEL_REGIME: number, TARGETS_OUTSIDE_WINDOW: number, TARGETS_WITHOUT_PREDICTION: number, OUTSIDE_AGE_BINS: number, WITHOUT_COVARIANCE: number, NOT_POSITIVE_DEFINITE: number, MISSING_TARGETS: number, MISSING_SETS: number, DIFFERENCES: number, MAPPED: number, FAILED: number, PAIRS: number, WITHOUT_TRUTH_COVARIANCE: number, OUTSIDE_REGIMES: number, STATES: number, STREAMS: number, BLOCKS: number, COVARIANCES: number, APRIORI_SETS: number, FITTED: number, FRAME_COUNTSOffset: flatbuffers.Offset, RULE_COUNTSOffset: flatbuffers.Offset, CALIBRATED_ROWS: number, UNCALIBRATED_ROWS: number, STATES_OF_OLDER_SETS: number, MANEUVERS: number): flatbuffers.Offset;
    unpack(): ERMCountsT;
    unpackTo(_o: ERMCountsT): void;
}
export declare class ERMCountsT implements flatbuffers.IGeneratedObject {
    ELEMENT_SETS: number;
    REFUSED: number;
    DUPLICATE_EPOCHS: number;
    UNCLASSIFIED: number;
    OBJECTS: number;
    SAMPLES: number;
    PROPAGATION_FAILURES: number;
    REFERENCE_EPOCHS: number;
    REFERENCE_OBJECTS_WITHOUT_ELEMENTS: number;
    ARCS: number;
    TARGETS: number;
    SETS_WITHOUT_REFERENCE: number;
    SETS_WITHOUT_TARGETS: number;
    ARCS_WITHOUT_MODEL_REGIME: number;
    TARGETS_OUTSIDE_WINDOW: number;
    TARGETS_WITHOUT_PREDICTION: number;
    OUTSIDE_AGE_BINS: number;
    WITHOUT_COVARIANCE: number;
    NOT_POSITIVE_DEFINITE: number;
    MISSING_TARGETS: number;
    MISSING_SETS: number;
    DIFFERENCES: number;
    MAPPED: number;
    FAILED: number;
    PAIRS: number;
    WITHOUT_TRUTH_COVARIANCE: number;
    OUTSIDE_REGIMES: number;
    STATES: number;
    STREAMS: number;
    BLOCKS: number;
    COVARIANCES: number;
    APRIORI_SETS: number;
    FITTED: number;
    FRAME_COUNTS: (ERMNamedCountT)[];
    RULE_COUNTS: (number)[];
    CALIBRATED_ROWS: number;
    UNCALIBRATED_ROWS: number;
    STATES_OF_OLDER_SETS: number;
    MANEUVERS: number;
    constructor(ELEMENT_SETS?: number, REFUSED?: number, DUPLICATE_EPOCHS?: number, UNCLASSIFIED?: number, OBJECTS?: number, SAMPLES?: number, PROPAGATION_FAILURES?: number, REFERENCE_EPOCHS?: number, REFERENCE_OBJECTS_WITHOUT_ELEMENTS?: number, ARCS?: number, TARGETS?: number, SETS_WITHOUT_REFERENCE?: number, SETS_WITHOUT_TARGETS?: number, ARCS_WITHOUT_MODEL_REGIME?: number, TARGETS_OUTSIDE_WINDOW?: number, TARGETS_WITHOUT_PREDICTION?: number, OUTSIDE_AGE_BINS?: number, WITHOUT_COVARIANCE?: number, NOT_POSITIVE_DEFINITE?: number, MISSING_TARGETS?: number, MISSING_SETS?: number, DIFFERENCES?: number, MAPPED?: number, FAILED?: number, PAIRS?: number, WITHOUT_TRUTH_COVARIANCE?: number, OUTSIDE_REGIMES?: number, STATES?: number, STREAMS?: number, BLOCKS?: number, COVARIANCES?: number, APRIORI_SETS?: number, FITTED?: number, FRAME_COUNTS?: (ERMNamedCountT)[], RULE_COUNTS?: (number)[], CALIBRATED_ROWS?: number, UNCALIBRATED_ROWS?: number, STATES_OF_OLDER_SETS?: number, MANEUVERS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCounts.d.ts.map