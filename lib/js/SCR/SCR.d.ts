import * as flatbuffers from 'flatbuffers';
import { SCRBlock, SCRBlockT } from './SCRBlock.js';
import { SCRCandidates, SCRCandidatesT } from './SCRCandidates.js';
import { SCRExclusions, SCRExclusionsT } from './SCRExclusions.js';
import { SCRGrid, SCRGridT } from './SCRGrid.js';
import { SCRPossibilityRequest, SCRPossibilityRequestT } from './SCRPossibilityRequest.js';
import { SCRPossibilityResult, SCRPossibilityResultT } from './SCRPossibilityResult.js';
import { SCRRoles, SCRRolesT } from './SCRRoles.js';
import { SCRSearchReport, SCRSearchReportT } from './SCRSearchReport.js';
/**
 * Conjunction Screening - exactly one arm is set.
 */
export declare class SCR implements flatbuffers.IUnpackableObject<SCRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCR;
    static getRootAsSCR(bb: flatbuffers.ByteBuffer, obj?: SCR): SCR;
    static getSizePrefixedRootAsSCR(bb: flatbuffers.ByteBuffer, obj?: SCR): SCR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    BLOCK(obj?: SCRBlock): SCRBlock | null;
    GRID(obj?: SCRGrid): SCRGrid | null;
    ROLES(obj?: SCRRoles): SCRRoles | null;
    CANDIDATES(obj?: SCRCandidates): SCRCandidates | null;
    EXCLUSIONS(obj?: SCRExclusions): SCRExclusions | null;
    SEARCH_REPORT(obj?: SCRSearchReport): SCRSearchReport | null;
    POSSIBILITY_REQUEST(obj?: SCRPossibilityRequest): SCRPossibilityRequest | null;
    POSSIBILITY_RESULT(obj?: SCRPossibilityResult): SCRPossibilityResult | null;
    static startSCR(builder: flatbuffers.Builder): void;
    static addBlock(builder: flatbuffers.Builder, BLOCKOffset: flatbuffers.Offset): void;
    static addGrid(builder: flatbuffers.Builder, GRIDOffset: flatbuffers.Offset): void;
    static addRoles(builder: flatbuffers.Builder, ROLESOffset: flatbuffers.Offset): void;
    static addCandidates(builder: flatbuffers.Builder, CANDIDATESOffset: flatbuffers.Offset): void;
    static addExclusions(builder: flatbuffers.Builder, EXCLUSIONSOffset: flatbuffers.Offset): void;
    static addSearchReport(builder: flatbuffers.Builder, SEARCH_REPORTOffset: flatbuffers.Offset): void;
    static addPossibilityRequest(builder: flatbuffers.Builder, POSSIBILITY_REQUESTOffset: flatbuffers.Offset): void;
    static addPossibilityResult(builder: flatbuffers.Builder, POSSIBILITY_RESULTOffset: flatbuffers.Offset): void;
    static endSCR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SCRT;
    unpackTo(_o: SCRT): void;
}
export declare class SCRT implements flatbuffers.IGeneratedObject {
    BLOCK: SCRBlockT | null;
    GRID: SCRGridT | null;
    ROLES: SCRRolesT | null;
    CANDIDATES: SCRCandidatesT | null;
    EXCLUSIONS: SCRExclusionsT | null;
    SEARCH_REPORT: SCRSearchReportT | null;
    POSSIBILITY_REQUEST: SCRPossibilityRequestT | null;
    POSSIBILITY_RESULT: SCRPossibilityResultT | null;
    constructor(BLOCK?: SCRBlockT | null, GRID?: SCRGridT | null, ROLES?: SCRRolesT | null, CANDIDATES?: SCRCandidatesT | null, EXCLUSIONS?: SCRExclusionsT | null, SEARCH_REPORT?: SCRSearchReportT | null, POSSIBILITY_REQUEST?: SCRPossibilityRequestT | null, POSSIBILITY_RESULT?: SCRPossibilityResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCR.d.ts.map