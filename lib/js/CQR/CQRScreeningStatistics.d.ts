import * as flatbuffers from 'flatbuffers';
export declare class CQRScreeningStatistics implements flatbuffers.IUnpackableObject<CQRScreeningStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRScreeningStatistics;
    static getRootAsCQRScreeningStatistics(bb: flatbuffers.ByteBuffer, obj?: CQRScreeningStatistics): CQRScreeningStatistics;
    static getSizePrefixedRootAsCQRScreeningStatistics(bb: flatbuffers.ByteBuffer, obj?: CQRScreeningStatistics): CQRScreeningStatistics;
    TOTAL_OBJECTS(): bigint;
    PAIRS_SCREENED(): bigint;
    PAIRS_PREFILTERED(): bigint;
    KD_TREE_CANDIDATES(): bigint;
    TCA_REFINED(): bigint;
    CONJUNCTIONS_FOUND(): bigint;
    PROPAGATIONS(): bigint;
    FAILED_PAIRS(): bigint;
    static startCQRScreeningStatistics(builder: flatbuffers.Builder): void;
    static addTotalObjects(builder: flatbuffers.Builder, TOTAL_OBJECTS: bigint): void;
    static addPairsScreened(builder: flatbuffers.Builder, PAIRS_SCREENED: bigint): void;
    static addPairsPrefiltered(builder: flatbuffers.Builder, PAIRS_PREFILTERED: bigint): void;
    static addKdTreeCandidates(builder: flatbuffers.Builder, KD_TREE_CANDIDATES: bigint): void;
    static addTcaRefined(builder: flatbuffers.Builder, TCA_REFINED: bigint): void;
    static addConjunctionsFound(builder: flatbuffers.Builder, CONJUNCTIONS_FOUND: bigint): void;
    static addPropagations(builder: flatbuffers.Builder, PROPAGATIONS: bigint): void;
    static addFailedPairs(builder: flatbuffers.Builder, FAILED_PAIRS: bigint): void;
    static endCQRScreeningStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRScreeningStatistics(builder: flatbuffers.Builder, TOTAL_OBJECTS: bigint, PAIRS_SCREENED: bigint, PAIRS_PREFILTERED: bigint, KD_TREE_CANDIDATES: bigint, TCA_REFINED: bigint, CONJUNCTIONS_FOUND: bigint, PROPAGATIONS: bigint, FAILED_PAIRS: bigint): flatbuffers.Offset;
    unpack(): CQRScreeningStatisticsT;
    unpackTo(_o: CQRScreeningStatisticsT): void;
}
export declare class CQRScreeningStatisticsT implements flatbuffers.IGeneratedObject {
    TOTAL_OBJECTS: bigint;
    PAIRS_SCREENED: bigint;
    PAIRS_PREFILTERED: bigint;
    KD_TREE_CANDIDATES: bigint;
    TCA_REFINED: bigint;
    CONJUNCTIONS_FOUND: bigint;
    PROPAGATIONS: bigint;
    FAILED_PAIRS: bigint;
    constructor(TOTAL_OBJECTS?: bigint, PAIRS_SCREENED?: bigint, PAIRS_PREFILTERED?: bigint, KD_TREE_CANDIDATES?: bigint, TCA_REFINED?: bigint, CONJUNCTIONS_FOUND?: bigint, PROPAGATIONS?: bigint, FAILED_PAIRS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRScreeningStatistics.d.ts.map