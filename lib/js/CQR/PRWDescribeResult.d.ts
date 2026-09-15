import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { PRWTrajectorySource, PRWTrajectorySourceT } from './PRWTrajectorySource.js';
export declare class PRWDescribeResult implements flatbuffers.IUnpackableObject<PRWDescribeResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWDescribeResult;
    static getRootAsPRWDescribeResult(bb: flatbuffers.ByteBuffer, obj?: PRWDescribeResult): PRWDescribeResult;
    static getSizePrefixedRootAsPRWDescribeResult(bb: flatbuffers.ByteBuffer, obj?: PRWDescribeResult): PRWDescribeResult;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SEGMENT_SET_HANDLE(): number;
    SOURCES(index: number, obj?: PRWTrajectorySource): PRWTrajectorySource | null;
    sourcesLength(): number;
    /**
     * Chunking indexes SOURCES; no partial polynomial coefficient vector.
     */
    SOURCE_OFFSET(): bigint;
    FINAL_CHUNK(): boolean;
    static startPRWDescribeResult(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addSegmentSetHandle(builder: flatbuffers.Builder, SEGMENT_SET_HANDLE: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourceOffset(builder: flatbuffers.Builder, SOURCE_OFFSET: bigint): void;
    static addFinalChunk(builder: flatbuffers.Builder, FINAL_CHUNK: boolean): void;
    static endPRWDescribeResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWDescribeResult(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset, SEGMENT_SET_HANDLE: number, SOURCESOffset: flatbuffers.Offset, SOURCE_OFFSET: bigint, FINAL_CHUNK: boolean): flatbuffers.Offset;
    unpack(): PRWDescribeResultT;
    unpackTo(_o: PRWDescribeResultT): void;
}
export declare class PRWDescribeResultT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SEGMENT_SET_HANDLE: number;
    SOURCES: (PRWTrajectorySourceT)[];
    SOURCE_OFFSET: bigint;
    FINAL_CHUNK: boolean;
    constructor(INSTANCE?: PRWInstanceT | null, SEGMENT_SET_HANDLE?: number, SOURCES?: (PRWTrajectorySourceT)[], SOURCE_OFFSET?: bigint, FINAL_CHUNK?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWDescribeResult.d.ts.map