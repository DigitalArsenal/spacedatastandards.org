import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
export declare class CQRIndexResult implements flatbuffers.IUnpackableObject<CQRIndexResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRIndexResult;
    static getRootAsCQRIndexResult(bb: flatbuffers.ByteBuffer, obj?: CQRIndexResult): CQRIndexResult;
    static getSizePrefixedRootAsCQRIndexResult(bb: flatbuffers.ByteBuffer, obj?: CQRIndexResult): CQRIndexResult;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SCREENING_INDEX_HANDLE(): number;
    SOURCE_COUNT(): bigint;
    CANDIDATE_PAIR_COUNT(): bigint;
    static startCQRIndexResult(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addScreeningIndexHandle(builder: flatbuffers.Builder, SCREENING_INDEX_HANDLE: number): void;
    static addSourceCount(builder: flatbuffers.Builder, SOURCE_COUNT: bigint): void;
    static addCandidatePairCount(builder: flatbuffers.Builder, CANDIDATE_PAIR_COUNT: bigint): void;
    static endCQRIndexResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRIndexResult(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset, SCREENING_INDEX_HANDLE: number, SOURCE_COUNT: bigint, CANDIDATE_PAIR_COUNT: bigint): flatbuffers.Offset;
    unpack(): CQRIndexResultT;
    unpackTo(_o: CQRIndexResultT): void;
}
export declare class CQRIndexResultT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SCREENING_INDEX_HANDLE: number;
    SOURCE_COUNT: bigint;
    CANDIDATE_PAIR_COUNT: bigint;
    constructor(INSTANCE?: PRWInstanceT | null, SCREENING_INDEX_HANDLE?: number, SOURCE_COUNT?: bigint, CANDIDATE_PAIR_COUNT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRIndexResult.d.ts.map