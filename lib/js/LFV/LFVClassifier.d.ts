import * as flatbuffers from 'flatbuffers';
/**
 * The classifier and how it was validated. In a request, the settings to
 * use; 0 or empty = the method's default.
 */
export declare class LFVClassifier implements flatbuffers.IUnpackableObject<LFVClassifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVClassifier;
    static getRootAsLFVClassifier(bb: flatbuffers.ByteBuffer, obj?: LFVClassifier): LFVClassifier;
    static getSizePrefixedRootAsLFVClassifier(bb: flatbuffers.ByteBuffer, obj?: LFVClassifier): LFVClassifier;
    /**
     * Method, e.g. "gradient-boosted trees, logistic loss".
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tree depth, boosting rounds, learning rate, L2 regularization (lambda),
     * minimum child hessian and histogram bins, for tree ensembles.
     */
    DEPTH(): number;
    ROUNDS(): number;
    LEARNING_RATE(): number;
    L2_REGULARIZATION(): number;
    MIN_CHILD_HESSIAN(): number;
    BINS(): number;
    /**
     * Cross-validation folds.
     */
    FOLDS(): number;
    /**
     * How rows were split into folds, e.g. "by target".
     */
    SPLIT(): string | null;
    SPLIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seed of the split and any randomness; 0 = not stated.
     */
    SEED(): bigint;
    static startLFVClassifier(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addDepth(builder: flatbuffers.Builder, DEPTH: number): void;
    static addRounds(builder: flatbuffers.Builder, ROUNDS: number): void;
    static addLearningRate(builder: flatbuffers.Builder, LEARNING_RATE: number): void;
    static addL2Regularization(builder: flatbuffers.Builder, L2_REGULARIZATION: number): void;
    static addMinChildHessian(builder: flatbuffers.Builder, MIN_CHILD_HESSIAN: number): void;
    static addBins(builder: flatbuffers.Builder, BINS: number): void;
    static addFolds(builder: flatbuffers.Builder, FOLDS: number): void;
    static addSplit(builder: flatbuffers.Builder, SPLITOffset: flatbuffers.Offset): void;
    static addSeed(builder: flatbuffers.Builder, SEED: bigint): void;
    static endLFVClassifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVClassifier(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset, DEPTH: number, ROUNDS: number, LEARNING_RATE: number, L2_REGULARIZATION: number, MIN_CHILD_HESSIAN: number, BINS: number, FOLDS: number, SPLITOffset: flatbuffers.Offset, SEED: bigint): flatbuffers.Offset;
    unpack(): LFVClassifierT;
    unpackTo(_o: LFVClassifierT): void;
}
export declare class LFVClassifierT implements flatbuffers.IGeneratedObject {
    METHOD: string | Uint8Array | null;
    DEPTH: number;
    ROUNDS: number;
    LEARNING_RATE: number;
    L2_REGULARIZATION: number;
    MIN_CHILD_HESSIAN: number;
    BINS: number;
    FOLDS: number;
    SPLIT: string | Uint8Array | null;
    SEED: bigint;
    constructor(METHOD?: string | Uint8Array | null, DEPTH?: number, ROUNDS?: number, LEARNING_RATE?: number, L2_REGULARIZATION?: number, MIN_CHILD_HESSIAN?: number, BINS?: number, FOLDS?: number, SPLIT?: string | Uint8Array | null, SEED?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVClassifier.d.ts.map