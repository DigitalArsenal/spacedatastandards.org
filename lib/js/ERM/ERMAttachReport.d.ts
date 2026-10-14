import * as flatbuffers from 'flatbuffers';
import { ERMAttachedObject, ERMAttachedObjectT } from './ERMAttachedObject.js';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMRefusedRecord, ERMRefusedRecordT } from './ERMRefusedRecord.js';
import { PVN, PVNT } from './PVN.js';
/**
 * Report of attaching covariances (or attributing maneuvers).
 */
export declare class ERMAttachReport implements flatbuffers.IUnpackableObject<ERMAttachReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAttachReport;
    static getRootAsERMAttachReport(bb: flatbuffers.ByteBuffer, obj?: ERMAttachReport): ERMAttachReport;
    static getSizePrefixedRootAsERMAttachReport(bb: flatbuffers.ByteBuffer, obj?: ERMAttachReport): ERMAttachReport;
    SOURCE(obj?: PVN): PVN | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    REFUSED_ELEMENT_SETS(index: number, obj?: ERMRefusedRecord): ERMRefusedRecord | null;
    refusedElementSetsLength(): number;
    UNMATCHED_STATES(index: number, obj?: ERMRefusedRecord): ERMRefusedRecord | null;
    unmatchedStatesLength(): number;
    UNMATCHED_OPERATOR(index: number, obj?: ERMRefusedRecord): ERMRefusedRecord | null;
    unmatchedOperatorLength(): number;
    OBJECTS(index: number, obj?: ERMAttachedObject): ERMAttachedObject | null;
    objectsLength(): number;
    static startERMAttachReport(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addRefusedElementSets(builder: flatbuffers.Builder, REFUSED_ELEMENT_SETSOffset: flatbuffers.Offset): void;
    static createRefusedElementSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRefusedElementSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnmatchedStates(builder: flatbuffers.Builder, UNMATCHED_STATESOffset: flatbuffers.Offset): void;
    static createUnmatchedStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnmatchedStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnmatchedOperator(builder: flatbuffers.Builder, UNMATCHED_OPERATOROffset: flatbuffers.Offset): void;
    static createUnmatchedOperatorVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnmatchedOperatorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMAttachReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMAttachReportT;
    unpackTo(_o: ERMAttachReportT): void;
}
export declare class ERMAttachReportT implements flatbuffers.IGeneratedObject {
    SOURCE: PVNT | null;
    COUNTS: ERMCountsT | null;
    REFUSED_ELEMENT_SETS: (ERMRefusedRecordT)[];
    UNMATCHED_STATES: (ERMRefusedRecordT)[];
    UNMATCHED_OPERATOR: (ERMRefusedRecordT)[];
    OBJECTS: (ERMAttachedObjectT)[];
    constructor(SOURCE?: PVNT | null, COUNTS?: ERMCountsT | null, REFUSED_ELEMENT_SETS?: (ERMRefusedRecordT)[], UNMATCHED_STATES?: (ERMRefusedRecordT)[], UNMATCHED_OPERATOR?: (ERMRefusedRecordT)[], OBJECTS?: (ERMAttachedObjectT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAttachReport.d.ts.map