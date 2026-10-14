import * as flatbuffers from 'flatbuffers';
import { PRWFitQuality, PRWFitQualityT } from './PRWFitQuality.js';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
export declare class PRWPrepareResult implements flatbuffers.IUnpackableObject<PRWPrepareResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWPrepareResult;
    static getRootAsPRWPrepareResult(bb: flatbuffers.ByteBuffer, obj?: PRWPrepareResult): PRWPrepareResult;
    static getSizePrefixedRootAsPRWPrepareResult(bb: flatbuffers.ByteBuffer, obj?: PRWPrepareResult): PRWPrepareResult;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SEGMENT_SET_HANDLE(): number;
    COVERAGE_COMPLETE(): boolean;
    QUALITY(obj?: PRWFitQuality): PRWFitQuality | null;
    static startPRWPrepareResult(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addSegmentSetHandle(builder: flatbuffers.Builder, SEGMENT_SET_HANDLE: number): void;
    static addCoverageComplete(builder: flatbuffers.Builder, COVERAGE_COMPLETE: boolean): void;
    static addQuality(builder: flatbuffers.Builder, QUALITYOffset: flatbuffers.Offset): void;
    static endPRWPrepareResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWPrepareResultT;
    unpackTo(_o: PRWPrepareResultT): void;
}
export declare class PRWPrepareResultT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SEGMENT_SET_HANDLE: number;
    COVERAGE_COMPLETE: boolean;
    QUALITY: PRWFitQualityT | null;
    constructor(INSTANCE?: PRWInstanceT | null, SEGMENT_SET_HANDLE?: number, COVERAGE_COMPLETE?: boolean, QUALITY?: PRWFitQualityT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWPrepareResult.d.ts.map