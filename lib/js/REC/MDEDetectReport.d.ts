import * as flatbuffers from 'flatbuffers';
import { MDEDetectOptions, MDEDetectOptionsT } from './MDEDetectOptions.js';
import { MDEDuplicateEpoch, MDEDuplicateEpochT } from './MDEDuplicateEpoch.js';
import { MDEObjectDetection, MDEObjectDetectionT } from './MDEObjectDetection.js';
import { MDERefusedSet, MDERefusedSetT } from './MDERefusedSet.js';
import { mdeRunStatus } from './mdeRunStatus.js';
/**
 * Result of a detection run.
 */
export declare class MDEDetectReport implements flatbuffers.IUnpackableObject<MDEDetectReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEDetectReport;
    static getRootAsMDEDetectReport(bb: flatbuffers.ByteBuffer, obj?: MDEDetectReport): MDEDetectReport;
    static getSizePrefixedRootAsMDEDetectReport(bb: flatbuffers.ByteBuffer, obj?: MDEDetectReport): MDEDetectReport;
    STATUS(): mdeRunStatus;
    /**
     * Window requests emitted (NeedsPropagation).
     */
    QUERIES(): number;
    DUPLICATE_EPOCHS(index: number, obj?: MDEDuplicateEpoch): MDEDuplicateEpoch | null;
    duplicateEpochsLength(): number;
    /**
     * The options used, defaults filled in.
     */
    OPTIONS(obj?: MDEDetectOptions): MDEDetectOptions | null;
    OBJECTS(index: number, obj?: MDEObjectDetection): MDEObjectDetection | null;
    objectsLength(): number;
    OBJECTS_SCREENED(): number;
    REFUSED_SETS(index: number, obj?: MDERefusedSet): MDERefusedSet | null;
    refusedSetsLength(): number;
    /**
     * Events emitted over all objects.
     */
    DETECTIONS(): number;
    static startMDEDetectReport(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: mdeRunStatus): void;
    static addQueries(builder: flatbuffers.Builder, QUERIES: number): void;
    static addDuplicateEpochs(builder: flatbuffers.Builder, DUPLICATE_EPOCHSOffset: flatbuffers.Offset): void;
    static createDuplicateEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDuplicateEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectsScreened(builder: flatbuffers.Builder, OBJECTS_SCREENED: number): void;
    static addRefusedSets(builder: flatbuffers.Builder, REFUSED_SETSOffset: flatbuffers.Offset): void;
    static createRefusedSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRefusedSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDetections(builder: flatbuffers.Builder, DETECTIONS: number): void;
    static endMDEDetectReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MDEDetectReportT;
    unpackTo(_o: MDEDetectReportT): void;
}
export declare class MDEDetectReportT implements flatbuffers.IGeneratedObject {
    STATUS: mdeRunStatus;
    QUERIES: number;
    DUPLICATE_EPOCHS: (MDEDuplicateEpochT)[];
    OPTIONS: MDEDetectOptionsT | null;
    OBJECTS: (MDEObjectDetectionT)[];
    OBJECTS_SCREENED: number;
    REFUSED_SETS: (MDERefusedSetT)[];
    DETECTIONS: number;
    constructor(STATUS?: mdeRunStatus, QUERIES?: number, DUPLICATE_EPOCHS?: (MDEDuplicateEpochT)[], OPTIONS?: MDEDetectOptionsT | null, OBJECTS?: (MDEObjectDetectionT)[], OBJECTS_SCREENED?: number, REFUSED_SETS?: (MDERefusedSetT)[], DETECTIONS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEDetectReport.d.ts.map