import * as flatbuffers from 'flatbuffers';
import { LFVRankProbability, LFVRankProbabilityT } from './LFVRankProbability.js';
/**
 * Results for the real rows of one class.
 */
export declare class LFVClassResult implements flatbuffers.IUnpackableObject<LFVClassResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVClassResult;
    static getRootAsLFVClassResult(bb: flatbuffers.ByteBuffer, obj?: LFVClassResult): LFVClassResult;
    static getSizePrefixedRootAsLFVClassResult(bb: flatbuffers.ByteBuffer, obj?: LFVClassResult): LFVClassResult;
    CLASS_LABEL(): string | null;
    CLASS_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Real rows of this class.
     */
    REAL_COUNT(): number;
    /**
     * AUC of this class's real rows against all decoy rows, 0..1.
     */
    AUC(): number;
    RANK_PROBABILITIES(index: number, obj?: LFVRankProbability): LFVRankProbability | null;
    rankProbabilitiesLength(): number;
    static startLFVClassResult(builder: flatbuffers.Builder): void;
    static addClassLabel(builder: flatbuffers.Builder, CLASS_LABELOffset: flatbuffers.Offset): void;
    static addRealCount(builder: flatbuffers.Builder, REAL_COUNT: number): void;
    static addAuc(builder: flatbuffers.Builder, AUC: number): void;
    static addRankProbabilities(builder: flatbuffers.Builder, RANK_PROBABILITIESOffset: flatbuffers.Offset): void;
    static createRankProbabilitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRankProbabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLFVClassResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVClassResult(builder: flatbuffers.Builder, CLASS_LABELOffset: flatbuffers.Offset, REAL_COUNT: number, AUC: number, RANK_PROBABILITIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LFVClassResultT;
    unpackTo(_o: LFVClassResultT): void;
}
export declare class LFVClassResultT implements flatbuffers.IGeneratedObject {
    CLASS_LABEL: string | Uint8Array | null;
    REAL_COUNT: number;
    AUC: number;
    RANK_PROBABILITIES: (LFVRankProbabilityT)[];
    constructor(CLASS_LABEL?: string | Uint8Array | null, REAL_COUNT?: number, AUC?: number, RANK_PROBABILITIES?: (LFVRankProbabilityT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVClassResult.d.ts.map