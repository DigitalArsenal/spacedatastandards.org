import * as flatbuffers from 'flatbuffers';
import { XMTMatchPolicy, XMTMatchPolicyT } from './XMTMatchPolicy.js';
import { XMTPairResult, XMTPairResultT } from './XMTPairResult.js';
import { XMTTrajectory, XMTTrajectoryT } from './XMTTrajectory.js';
/**
 * The comparison of a set of proposed pairs.
 */
export declare class XMTMatchReport implements flatbuffers.IUnpackableObject<XMTMatchReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTMatchReport;
    static getRootAsXMTMatchReport(bb: flatbuffers.ByteBuffer, obj?: XMTMatchReport): XMTMatchReport;
    static getSizePrefixedRootAsXMTMatchReport(bb: flatbuffers.ByteBuffer, obj?: XMTMatchReport): XMTMatchReport;
    POLICY(obj?: XMTMatchPolicy): XMTMatchPolicy | null;
    TRAJECTORIES(index: number, obj?: XMTTrajectory): XMTTrajectory | null;
    trajectoriesLength(): number;
    PAIRS(index: number, obj?: XMTPairResult): XMTPairResult | null;
    pairsLength(): number;
    static startXMTMatchReport(builder: flatbuffers.Builder): void;
    static addPolicy(builder: flatbuffers.Builder, POLICYOffset: flatbuffers.Offset): void;
    static addTrajectories(builder: flatbuffers.Builder, TRAJECTORIESOffset: flatbuffers.Offset): void;
    static createTrajectoriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrajectoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static createPairsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTMatchReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTMatchReport(builder: flatbuffers.Builder, POLICYOffset: flatbuffers.Offset, TRAJECTORIESOffset: flatbuffers.Offset, PAIRSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTMatchReportT;
    unpackTo(_o: XMTMatchReportT): void;
}
export declare class XMTMatchReportT implements flatbuffers.IGeneratedObject {
    POLICY: XMTMatchPolicyT | null;
    TRAJECTORIES: (XMTTrajectoryT)[];
    PAIRS: (XMTPairResultT)[];
    constructor(POLICY?: XMTMatchPolicyT | null, TRAJECTORIES?: (XMTTrajectoryT)[], PAIRS?: (XMTPairResultT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTMatchReport.d.ts.map