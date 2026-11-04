import * as flatbuffers from 'flatbuffers';
import { PCEEvaluationRequest, PCEEvaluationRequestT } from './PCEEvaluationRequest.js';
import { PCEEvaluationResult, PCEEvaluationResultT } from './PCEEvaluationResult.js';
import { PCEParameterCatalog, PCEParameterCatalogT } from './PCEParameterCatalog.js';
import { PCEStopReport, PCEStopReportT } from './PCEStopReport.js';
import { PCEStopRequest, PCEStopRequestT } from './PCEStopRequest.js';
/**
 * Parameter Catalog and Evaluation
 *
 * The named calculation parameters an analysis resolves through: their owner
 * class, unit, data type, frame dependency and per-publisher availability
 * (CATALOG), a request and result for evaluating named parameters on states
 * at epochs in a stated coordinate system (EVALUATION_REQUEST /
 * EVALUATION_RESULT), and propagate-to-condition, which is a predicate on one
 * of those same names rather than a vocabulary of its own (STOP_REQUEST /
 * STOP_REPORT). Stopping conditions, targeting goals, report columns and plot
 * series all resolve names here, so a name means one thing everywhere.
 *
 * Angles are radians, lengths metres, durations seconds, masses kilograms.
 * A buffer carries the members its exchange needs; a catalog publication and
 * an evaluation exchange are both complete $PCE records.
 */
export declare class PCE implements flatbuffers.IUnpackableObject<PCET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCE;
    static getRootAsPCE(bb: flatbuffers.ByteBuffer, obj?: PCE): PCE;
    static getSizePrefixedRootAsPCE(bb: flatbuffers.ByteBuffer, obj?: PCE): PCE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CATALOG(obj?: PCEParameterCatalog): PCEParameterCatalog | null;
    EVALUATION_REQUEST(obj?: PCEEvaluationRequest): PCEEvaluationRequest | null;
    EVALUATION_RESULT(obj?: PCEEvaluationResult): PCEEvaluationResult | null;
    STOP_REQUEST(obj?: PCEStopRequest): PCEStopRequest | null;
    STOP_REPORT(obj?: PCEStopReport): PCEStopReport | null;
    static startPCE(builder: flatbuffers.Builder): void;
    static addCatalog(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset): void;
    static addEvaluationRequest(builder: flatbuffers.Builder, EVALUATION_REQUESTOffset: flatbuffers.Offset): void;
    static addEvaluationResult(builder: flatbuffers.Builder, EVALUATION_RESULTOffset: flatbuffers.Offset): void;
    static addStopRequest(builder: flatbuffers.Builder, STOP_REQUESTOffset: flatbuffers.Offset): void;
    static addStopReport(builder: flatbuffers.Builder, STOP_REPORTOffset: flatbuffers.Offset): void;
    static endPCE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPCEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPCEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PCET;
    unpackTo(_o: PCET): void;
}
export declare class PCET implements flatbuffers.IGeneratedObject {
    CATALOG: PCEParameterCatalogT | null;
    EVALUATION_REQUEST: PCEEvaluationRequestT | null;
    EVALUATION_RESULT: PCEEvaluationResultT | null;
    STOP_REQUEST: PCEStopRequestT | null;
    STOP_REPORT: PCEStopReportT | null;
    constructor(CATALOG?: PCEParameterCatalogT | null, EVALUATION_REQUEST?: PCEEvaluationRequestT | null, EVALUATION_RESULT?: PCEEvaluationResultT | null, STOP_REQUEST?: PCEStopRequestT | null, STOP_REPORT?: PCEStopReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCE.d.ts.map