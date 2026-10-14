import * as flatbuffers from 'flatbuffers';
import { SCRExclusion, SCRExclusionT } from './SCRExclusion.js';
/**
 * What one coarse-filter stage did.
 */
export declare class SCRSearchReport implements flatbuffers.IUnpackableObject<SCRSearchReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRSearchReport;
    static getRootAsSCRSearchReport(bb: flatbuffers.ByteBuffer, obj?: SCRSearchReport): SCRSearchReport;
    static getSizePrefixedRootAsSCRSearchReport(bb: flatbuffers.ByteBuffer, obj?: SCRSearchReport): SCRSearchReport;
    FIRST_STEP(): number;
    STEP_COUNT(): number;
    /**
     * Last coarse step of the window, inclusive.
     */
    LAST_STEP(): number;
    /**
     * Objects in the grid.
     */
    OBJECTS(): number;
    /**
     * Objects that could not be propagated in this block.
     */
    EXCLUDED(index: number, obj?: SCRExclusion): SCRExclusion | null;
    excludedLength(): number;
    /**
     * Objects by role (all primaries when no roles were given).
     */
    PRIMARIES(): number;
    SECONDARIES(): number;
    SKIPPED(): number;
    /**
     * Candidate cells found.
     */
    CANDIDATE_COUNT(): number;
    static startSCRSearchReport(builder: flatbuffers.Builder): void;
    static addFirstStep(builder: flatbuffers.Builder, FIRST_STEP: number): void;
    static addStepCount(builder: flatbuffers.Builder, STEP_COUNT: number): void;
    static addLastStep(builder: flatbuffers.Builder, LAST_STEP: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addExcluded(builder: flatbuffers.Builder, EXCLUDEDOffset: flatbuffers.Offset): void;
    static createExcludedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExcludedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPrimaries(builder: flatbuffers.Builder, PRIMARIES: number): void;
    static addSecondaries(builder: flatbuffers.Builder, SECONDARIES: number): void;
    static addSkipped(builder: flatbuffers.Builder, SKIPPED: number): void;
    static addCandidateCount(builder: flatbuffers.Builder, CANDIDATE_COUNT: number): void;
    static endSCRSearchReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRSearchReport(builder: flatbuffers.Builder, FIRST_STEP: number, STEP_COUNT: number, LAST_STEP: number, OBJECTS: number, EXCLUDEDOffset: flatbuffers.Offset, PRIMARIES: number, SECONDARIES: number, SKIPPED: number, CANDIDATE_COUNT: number): flatbuffers.Offset;
    unpack(): SCRSearchReportT;
    unpackTo(_o: SCRSearchReportT): void;
}
export declare class SCRSearchReportT implements flatbuffers.IGeneratedObject {
    FIRST_STEP: number;
    STEP_COUNT: number;
    LAST_STEP: number;
    OBJECTS: number;
    EXCLUDED: (SCRExclusionT)[];
    PRIMARIES: number;
    SECONDARIES: number;
    SKIPPED: number;
    CANDIDATE_COUNT: number;
    constructor(FIRST_STEP?: number, STEP_COUNT?: number, LAST_STEP?: number, OBJECTS?: number, EXCLUDED?: (SCRExclusionT)[], PRIMARIES?: number, SECONDARIES?: number, SKIPPED?: number, CANDIDATE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRSearchReport.d.ts.map