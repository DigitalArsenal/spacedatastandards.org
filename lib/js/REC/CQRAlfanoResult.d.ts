import * as flatbuffers from 'flatbuffers';
export declare class CQRAlfanoResult implements flatbuffers.IUnpackableObject<CQRAlfanoResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRAlfanoResult;
    static getRootAsCQRAlfanoResult(bb: flatbuffers.ByteBuffer, obj?: CQRAlfanoResult): CQRAlfanoResult;
    static getSizePrefixedRootAsCQRAlfanoResult(bb: flatbuffers.ByteBuffer, obj?: CQRAlfanoResult): CQRAlfanoResult;
    MAXIMUM_PROBABILITY(): number;
    DILUTION_THRESHOLD_M(): number;
    SIGMA_STAR_M(): number;
    static startCQRAlfanoResult(builder: flatbuffers.Builder): void;
    static addMaximumProbability(builder: flatbuffers.Builder, MAXIMUM_PROBABILITY: number): void;
    static addDilutionThresholdM(builder: flatbuffers.Builder, DILUTION_THRESHOLD_M: number): void;
    static addSigmaStarM(builder: flatbuffers.Builder, SIGMA_STAR_M: number): void;
    static endCQRAlfanoResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRAlfanoResult(builder: flatbuffers.Builder, MAXIMUM_PROBABILITY: number, DILUTION_THRESHOLD_M: number, SIGMA_STAR_M: number): flatbuffers.Offset;
    unpack(): CQRAlfanoResultT;
    unpackTo(_o: CQRAlfanoResultT): void;
}
export declare class CQRAlfanoResultT implements flatbuffers.IGeneratedObject {
    MAXIMUM_PROBABILITY: number;
    DILUTION_THRESHOLD_M: number;
    SIGMA_STAR_M: number;
    constructor(MAXIMUM_PROBABILITY?: number, DILUTION_THRESHOLD_M?: number, SIGMA_STAR_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRAlfanoResult.d.ts.map