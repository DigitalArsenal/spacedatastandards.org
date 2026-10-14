import * as flatbuffers from 'flatbuffers';
import { ASGAssociationOptions, ASGAssociationOptionsT } from './ASGAssociationOptions.js';
import { ASGAssociationReport, ASGAssociationReportT } from './ASGAssociationReport.js';
import { ASGProblem, ASGProblemT } from './ASGProblem.js';
import { ASGSolution, ASGSolutionT } from './ASGSolution.js';
/**
 * Assignment - exactly one of the arms is set.
 */
export declare class ASG implements flatbuffers.IUnpackableObject<ASGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASG;
    static getRootAsASG(bb: flatbuffers.ByteBuffer, obj?: ASG): ASG;
    static getSizePrefixedRootAsASG(bb: flatbuffers.ByteBuffer, obj?: ASG): ASG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    PROBLEM(obj?: ASGProblem): ASGProblem | null;
    SOLUTION(obj?: ASGSolution): ASGSolution | null;
    ASSOCIATION_OPTIONS(obj?: ASGAssociationOptions): ASGAssociationOptions | null;
    ASSOCIATION_REPORT(obj?: ASGAssociationReport): ASGAssociationReport | null;
    static startASG(builder: flatbuffers.Builder): void;
    static addProblem(builder: flatbuffers.Builder, PROBLEMOffset: flatbuffers.Offset): void;
    static addSolution(builder: flatbuffers.Builder, SOLUTIONOffset: flatbuffers.Offset): void;
    static addAssociationOptions(builder: flatbuffers.Builder, ASSOCIATION_OPTIONSOffset: flatbuffers.Offset): void;
    static addAssociationReport(builder: flatbuffers.Builder, ASSOCIATION_REPORTOffset: flatbuffers.Offset): void;
    static endASG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishASGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedASGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ASGT;
    unpackTo(_o: ASGT): void;
}
export declare class ASGT implements flatbuffers.IGeneratedObject {
    PROBLEM: ASGProblemT | null;
    SOLUTION: ASGSolutionT | null;
    ASSOCIATION_OPTIONS: ASGAssociationOptionsT | null;
    ASSOCIATION_REPORT: ASGAssociationReportT | null;
    constructor(PROBLEM?: ASGProblemT | null, SOLUTION?: ASGSolutionT | null, ASSOCIATION_OPTIONS?: ASGAssociationOptionsT | null, ASSOCIATION_REPORT?: ASGAssociationReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASG.d.ts.map