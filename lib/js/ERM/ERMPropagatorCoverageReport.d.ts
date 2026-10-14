import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMGate, ERMGateT } from './ERMGate.js';
import { ERMPropagatorCoverageStratum, ERMPropagatorCoverageStratumT } from './ERMPropagatorCoverageStratum.js';
/**
 * Coverage test of a propagator covariance.
 */
export declare class ERMPropagatorCoverageReport implements flatbuffers.IUnpackableObject<ERMPropagatorCoverageReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPropagatorCoverageReport;
    static getRootAsERMPropagatorCoverageReport(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorCoverageReport): ERMPropagatorCoverageReport;
    static getSizePrefixedRootAsERMPropagatorCoverageReport(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorCoverageReport): ERMPropagatorCoverageReport;
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOW_STOP(): string | null;
    WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GATE(obj?: ERMGate): ERMGate | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    STRATA(index: number, obj?: ERMPropagatorCoverageStratum): ERMPropagatorCoverageStratum | null;
    strataLength(): number;
    static startERMPropagatorCoverageReport(builder: flatbuffers.Builder): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addGate(builder: flatbuffers.Builder, GATEOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMPropagatorCoverageReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMPropagatorCoverageReportT;
    unpackTo(_o: ERMPropagatorCoverageReportT): void;
}
export declare class ERMPropagatorCoverageReportT implements flatbuffers.IGeneratedObject {
    WINDOW_START: string | Uint8Array | null;
    WINDOW_STOP: string | Uint8Array | null;
    GATE: ERMGateT | null;
    COUNTS: ERMCountsT | null;
    STRATA: (ERMPropagatorCoverageStratumT)[];
    constructor(WINDOW_START?: string | Uint8Array | null, WINDOW_STOP?: string | Uint8Array | null, GATE?: ERMGateT | null, COUNTS?: ERMCountsT | null, STRATA?: (ERMPropagatorCoverageStratumT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPropagatorCoverageReport.d.ts.map