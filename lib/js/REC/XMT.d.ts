import * as flatbuffers from 'flatbuffers';
import { XMTComposeRecipe, XMTComposeRecipeT } from './XMTComposeRecipe.js';
import { XMTComposeReport, XMTComposeReportT } from './XMTComposeReport.js';
import { XMTEpochFitPolicy, XMTEpochFitPolicyT } from './XMTEpochFitPolicy.js';
import { XMTEpochFitReport, XMTEpochFitReportT } from './XMTEpochFitReport.js';
import { XMTIntegrateRecipe, XMTIntegrateRecipeT } from './XMTIntegrateRecipe.js';
import { XMTIntegrateReport, XMTIntegrateReportT } from './XMTIntegrateReport.js';
import { XMTMatchReport, XMTMatchReportT } from './XMTMatchReport.js';
import { XMTMatchRequest, XMTMatchRequestT } from './XMTMatchRequest.js';
/**
 * Catalog Cross-Match - exactly one arm is set.
 */
export declare class XMT implements flatbuffers.IUnpackableObject<XMTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMT;
    static getRootAsXMT(bb: flatbuffers.ByteBuffer, obj?: XMT): XMT;
    static getSizePrefixedRootAsXMT(bb: flatbuffers.ByteBuffer, obj?: XMT): XMT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    MATCH_REQUEST(obj?: XMTMatchRequest): XMTMatchRequest | null;
    MATCH_REPORT(obj?: XMTMatchReport): XMTMatchReport | null;
    COMPOSE_RECIPE(obj?: XMTComposeRecipe): XMTComposeRecipe | null;
    COMPOSE_REPORT(obj?: XMTComposeReport): XMTComposeReport | null;
    INTEGRATE_RECIPE(obj?: XMTIntegrateRecipe): XMTIntegrateRecipe | null;
    INTEGRATE_REPORT(obj?: XMTIntegrateReport): XMTIntegrateReport | null;
    EPOCH_FIT_POLICY(obj?: XMTEpochFitPolicy): XMTEpochFitPolicy | null;
    EPOCH_FIT_REPORT(obj?: XMTEpochFitReport): XMTEpochFitReport | null;
    static startXMT(builder: flatbuffers.Builder): void;
    static addMatchRequest(builder: flatbuffers.Builder, MATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addMatchReport(builder: flatbuffers.Builder, MATCH_REPORTOffset: flatbuffers.Offset): void;
    static addComposeRecipe(builder: flatbuffers.Builder, COMPOSE_RECIPEOffset: flatbuffers.Offset): void;
    static addComposeReport(builder: flatbuffers.Builder, COMPOSE_REPORTOffset: flatbuffers.Offset): void;
    static addIntegrateRecipe(builder: flatbuffers.Builder, INTEGRATE_RECIPEOffset: flatbuffers.Offset): void;
    static addIntegrateReport(builder: flatbuffers.Builder, INTEGRATE_REPORTOffset: flatbuffers.Offset): void;
    static addEpochFitPolicy(builder: flatbuffers.Builder, EPOCH_FIT_POLICYOffset: flatbuffers.Offset): void;
    static addEpochFitReport(builder: flatbuffers.Builder, EPOCH_FIT_REPORTOffset: flatbuffers.Offset): void;
    static endXMT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishXMTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedXMTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): XMTT;
    unpackTo(_o: XMTT): void;
}
export declare class XMTT implements flatbuffers.IGeneratedObject {
    MATCH_REQUEST: XMTMatchRequestT | null;
    MATCH_REPORT: XMTMatchReportT | null;
    COMPOSE_RECIPE: XMTComposeRecipeT | null;
    COMPOSE_REPORT: XMTComposeReportT | null;
    INTEGRATE_RECIPE: XMTIntegrateRecipeT | null;
    INTEGRATE_REPORT: XMTIntegrateReportT | null;
    EPOCH_FIT_POLICY: XMTEpochFitPolicyT | null;
    EPOCH_FIT_REPORT: XMTEpochFitReportT | null;
    constructor(MATCH_REQUEST?: XMTMatchRequestT | null, MATCH_REPORT?: XMTMatchReportT | null, COMPOSE_RECIPE?: XMTComposeRecipeT | null, COMPOSE_REPORT?: XMTComposeReportT | null, INTEGRATE_RECIPE?: XMTIntegrateRecipeT | null, INTEGRATE_REPORT?: XMTIntegrateReportT | null, EPOCH_FIT_POLICY?: XMTEpochFitPolicyT | null, EPOCH_FIT_REPORT?: XMTEpochFitReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMT.d.ts.map