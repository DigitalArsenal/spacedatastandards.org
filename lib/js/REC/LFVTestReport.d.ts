import * as flatbuffers from 'flatbuffers';
import { LFVClassResult, LFVClassResultT } from './LFVClassResult.js';
import { LFVClassifier, LFVClassifierT } from './LFVClassifier.js';
import { LFVFeatureSeparation, LFVFeatureSeparationT } from './LFVFeatureSeparation.js';
import { LFVRankProbability, LFVRankProbabilityT } from './LFVRankProbability.js';
import { LFVThresholdTest, LFVThresholdTestT } from './LFVThresholdTest.js';
import { LFVWithinGroup, LFVWithinGroupT } from './LFVWithinGroup.js';
/**
 * Report of a test that distinguishes the labelled classes.
 */
export declare class LFVTestReport implements flatbuffers.IUnpackableObject<LFVTestReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVTestReport;
    static getRootAsLFVTestReport(bb: flatbuffers.ByteBuffer, obj?: LFVTestReport): LFVTestReport;
    static getSizePrefixedRootAsLFVTestReport(bb: flatbuffers.ByteBuffer, obj?: LFVTestReport): LFVTestReport;
    /**
     * Name of the test, e.g. "cross-validated classifier",
     * "two-sample Kolmogorov-Smirnov".
     */
    TEST_NAME(): string | null;
    TEST_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The test's statistic and its name, and its p-value; NaN = not computed.
     */
    STATISTIC_NAME(): string | null;
    STATISTIC_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATISTIC(): number;
    P_VALUE(): number;
    /**
     * Rows of each role tested.
     */
    REAL_COUNT(): number;
    DECOY_COUNT(): number;
    /**
     * Features left out of the test.
     */
    EXCLUDED_FEATURES(index: number): string;
    EXCLUDED_FEATURES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    excludedFeaturesLength(): number;
    /**
     * True when each feature was taken relative to its group (minus the
     * group's median) before testing.
     */
    RELATIVE(): boolean;
    CLASSIFIER(obj?: LFVClassifier): LFVClassifier | null;
    /**
     * Area under the ROC curve of the scores (real vs decoy), 0..1; 0.5 =
     * indistinguishable.
     */
    AUC(): number;
    /**
     * Mean of the real and decoy recall at score 0, 0..1.
     */
    BALANCED_ACCURACY(): number;
    /**
     * Threshold tests (decision region, confusion counts, epsilon bound).
     */
    THRESHOLDS(index: number, obj?: LFVThresholdTest): LFVThresholdTest | null;
    thresholdsLength(): number;
    /**
     * P(real first of N) for each N asked, over all classes.
     */
    RANK_PROBABILITIES(index: number, obj?: LFVRankProbability): LFVRankProbability | null;
    rankProbabilitiesLength(): number;
    CLASS_RESULTS(index: number, obj?: LFVClassResult): LFVClassResult | null;
    classResultsLength(): number;
    /**
     * Per-feature separation, highest GAIN_SHARE first.
     */
    FEATURES(index: number, obj?: LFVFeatureSeparation): LFVFeatureSeparation | null;
    featuresLength(): number;
    /**
     * Absent when groups are too few or too small to rank within.
     */
    WITHIN_GROUP(obj?: LFVWithinGroup): LFVWithinGroup | null;
    static startLFVTestReport(builder: flatbuffers.Builder): void;
    static addTestName(builder: flatbuffers.Builder, TEST_NAMEOffset: flatbuffers.Offset): void;
    static addStatisticName(builder: flatbuffers.Builder, STATISTIC_NAMEOffset: flatbuffers.Offset): void;
    static addStatistic(builder: flatbuffers.Builder, STATISTIC: number): void;
    static addPValue(builder: flatbuffers.Builder, P_VALUE: number): void;
    static addRealCount(builder: flatbuffers.Builder, REAL_COUNT: number): void;
    static addDecoyCount(builder: flatbuffers.Builder, DECOY_COUNT: number): void;
    static addExcludedFeatures(builder: flatbuffers.Builder, EXCLUDED_FEATURESOffset: flatbuffers.Offset): void;
    static createExcludedFeaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExcludedFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRelative(builder: flatbuffers.Builder, RELATIVE: boolean): void;
    static addClassifier(builder: flatbuffers.Builder, CLASSIFIEROffset: flatbuffers.Offset): void;
    static addAuc(builder: flatbuffers.Builder, AUC: number): void;
    static addBalancedAccuracy(builder: flatbuffers.Builder, BALANCED_ACCURACY: number): void;
    static addThresholds(builder: flatbuffers.Builder, THRESHOLDSOffset: flatbuffers.Offset): void;
    static createThresholdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThresholdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRankProbabilities(builder: flatbuffers.Builder, RANK_PROBABILITIESOffset: flatbuffers.Offset): void;
    static createRankProbabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRankProbabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassResults(builder: flatbuffers.Builder, CLASS_RESULTSOffset: flatbuffers.Offset): void;
    static createClassResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startClassResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFeatures(builder: flatbuffers.Builder, FEATURESOffset: flatbuffers.Offset): void;
    static createFeaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWithinGroup(builder: flatbuffers.Builder, WITHIN_GROUPOffset: flatbuffers.Offset): void;
    static endLFVTestReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): LFVTestReportT;
    unpackTo(_o: LFVTestReportT): void;
}
export declare class LFVTestReportT implements flatbuffers.IGeneratedObject {
    TEST_NAME: string | Uint8Array | null;
    STATISTIC_NAME: string | Uint8Array | null;
    STATISTIC: number;
    P_VALUE: number;
    REAL_COUNT: number;
    DECOY_COUNT: number;
    EXCLUDED_FEATURES: (string)[];
    RELATIVE: boolean;
    CLASSIFIER: LFVClassifierT | null;
    AUC: number;
    BALANCED_ACCURACY: number;
    THRESHOLDS: (LFVThresholdTestT)[];
    RANK_PROBABILITIES: (LFVRankProbabilityT)[];
    CLASS_RESULTS: (LFVClassResultT)[];
    FEATURES: (LFVFeatureSeparationT)[];
    WITHIN_GROUP: LFVWithinGroupT | null;
    constructor(TEST_NAME?: string | Uint8Array | null, STATISTIC_NAME?: string | Uint8Array | null, STATISTIC?: number, P_VALUE?: number, REAL_COUNT?: number, DECOY_COUNT?: number, EXCLUDED_FEATURES?: (string)[], RELATIVE?: boolean, CLASSIFIER?: LFVClassifierT | null, AUC?: number, BALANCED_ACCURACY?: number, THRESHOLDS?: (LFVThresholdTestT)[], RANK_PROBABILITIES?: (LFVRankProbabilityT)[], CLASS_RESULTS?: (LFVClassResultT)[], FEATURES?: (LFVFeatureSeparationT)[], WITHIN_GROUP?: LFVWithinGroupT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVTestReport.d.ts.map