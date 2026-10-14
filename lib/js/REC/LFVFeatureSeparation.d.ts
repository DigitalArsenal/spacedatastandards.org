import * as flatbuffers from 'flatbuffers';
/**
 * How well one feature separates the roles on its own, and how much the
 * classifier used it.
 */
export declare class LFVFeatureSeparation implements flatbuffers.IUnpackableObject<LFVFeatureSeparationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVFeatureSeparation;
    static getRootAsLFVFeatureSeparation(bb: flatbuffers.ByteBuffer, obj?: LFVFeatureSeparation): LFVFeatureSeparation;
    static getSizePrefixedRootAsLFVFeatureSeparation(bb: flatbuffers.ByteBuffer, obj?: LFVFeatureSeparation): LFVFeatureSeparation;
    /**
     * Feature name, one of FEATURE_NAMES.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Area under the ROC curve of the feature alone (real vs decoy), 0..1;
     * NaN = not computable.
     */
    AUC(): number;
    /**
     * max(AUC, 1 - AUC), 0.5..1.
     */
    SEPARATION(): number;
    /**
     * Share of the classifier's total split gain from this feature, 0..1.
     */
    GAIN_SHARE(): number;
    static startLFVFeatureSeparation(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAuc(builder: flatbuffers.Builder, AUC: number): void;
    static addSeparation(builder: flatbuffers.Builder, SEPARATION: number): void;
    static addGainShare(builder: flatbuffers.Builder, GAIN_SHARE: number): void;
    static endLFVFeatureSeparation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVFeatureSeparation(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, AUC: number, SEPARATION: number, GAIN_SHARE: number): flatbuffers.Offset;
    unpack(): LFVFeatureSeparationT;
    unpackTo(_o: LFVFeatureSeparationT): void;
}
export declare class LFVFeatureSeparationT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    AUC: number;
    SEPARATION: number;
    GAIN_SHARE: number;
    constructor(NAME?: string | Uint8Array | null, AUC?: number, SEPARATION?: number, GAIN_SHARE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVFeatureSeparation.d.ts.map