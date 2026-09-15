import * as flatbuffers from 'flatbuffers';
import { CQRAlfanoRequest, CQRAlfanoRequestT } from './CQRAlfanoRequest.js';
import { CQRAlfanoResult, CQRAlfanoResultT } from './CQRAlfanoResult.js';
import { CQRCatalogRequest, CQRCatalogRequestT } from './CQRCatalogRequest.js';
import { CQRCatalogResult, CQRCatalogResultT } from './CQRCatalogResult.js';
import { CQRDestroyRequest, CQRDestroyRequestT } from './CQRDestroyRequest.js';
import { CQREvent, CQREventT } from './CQREvent.js';
import { CQRIndexRequest, CQRIndexRequestT } from './CQRIndexRequest.js';
import { CQRIndexResult, CQRIndexResultT } from './CQRIndexResult.js';
import { CQRNativeDocument, CQRNativeDocumentT } from './CQRNativeDocument.js';
import { CQRPairRequest, CQRPairRequestT } from './CQRPairRequest.js';
import { CQRProbabilityRequest, CQRProbabilityRequestT } from './CQRProbabilityRequest.js';
import { CQRProbabilityResult, CQRProbabilityResultT } from './CQRProbabilityResult.js';
import { CQRVersionResult, CQRVersionResultT } from './CQRVersionResult.js';
import { CQRWindowRequest, CQRWindowRequestT } from './CQRWindowRequest.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Conjunction Query and Result — pair/catalog screening, encounter-plane
 * probability, typed native documents and resident screening-index control.
 * Exactly one arm per PIV payload, selected by the declared METHOD_ID.
 */
export declare class CQR implements flatbuffers.IUnpackableObject<CQRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQR;
    static getRootAsCQR(bb: flatbuffers.ByteBuffer, obj?: CQR): CQR;
    static getSizePrefixedRootAsCQR(bb: flatbuffers.ByteBuffer, obj?: CQR): CQR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    PAIR_REQUEST(obj?: CQRPairRequest): CQRPairRequest | null;
    CATALOG_REQUEST(obj?: CQRCatalogRequest): CQRCatalogRequest | null;
    PROBABILITY_REQUEST(obj?: CQRProbabilityRequest): CQRProbabilityRequest | null;
    PROBABILITY_RESULT(obj?: CQRProbabilityResult): CQRProbabilityResult | null;
    ALFANO_REQUEST(obj?: CQRAlfanoRequest): CQRAlfanoRequest | null;
    ALFANO_RESULT(obj?: CQRAlfanoResult): CQRAlfanoResult | null;
    EVENT_RESULT(obj?: CQREvent): CQREvent | null;
    TCA_RESULT(obj?: TIMInstant): TIMInstant | null;
    CATALOG_RESULT(obj?: CQRCatalogResult): CQRCatalogResult | null;
    NATIVE_DOCUMENT(obj?: CQRNativeDocument): CQRNativeDocument | null;
    INDEX_REQUEST(obj?: CQRIndexRequest): CQRIndexRequest | null;
    INDEX_RESULT(obj?: CQRIndexResult): CQRIndexResult | null;
    WINDOW_REQUEST(obj?: CQRWindowRequest): CQRWindowRequest | null;
    DESTROY_REQUEST(obj?: CQRDestroyRequest): CQRDestroyRequest | null;
    VERSION_QUERY(): boolean;
    VERSION_RESULT(obj?: CQRVersionResult): CQRVersionResult | null;
    static startCQR(builder: flatbuffers.Builder): void;
    static addPairRequest(builder: flatbuffers.Builder, PAIR_REQUESTOffset: flatbuffers.Offset): void;
    static addCatalogRequest(builder: flatbuffers.Builder, CATALOG_REQUESTOffset: flatbuffers.Offset): void;
    static addProbabilityRequest(builder: flatbuffers.Builder, PROBABILITY_REQUESTOffset: flatbuffers.Offset): void;
    static addProbabilityResult(builder: flatbuffers.Builder, PROBABILITY_RESULTOffset: flatbuffers.Offset): void;
    static addAlfanoRequest(builder: flatbuffers.Builder, ALFANO_REQUESTOffset: flatbuffers.Offset): void;
    static addAlfanoResult(builder: flatbuffers.Builder, ALFANO_RESULTOffset: flatbuffers.Offset): void;
    static addEventResult(builder: flatbuffers.Builder, EVENT_RESULTOffset: flatbuffers.Offset): void;
    static addTcaResult(builder: flatbuffers.Builder, TCA_RESULTOffset: flatbuffers.Offset): void;
    static addCatalogResult(builder: flatbuffers.Builder, CATALOG_RESULTOffset: flatbuffers.Offset): void;
    static addNativeDocument(builder: flatbuffers.Builder, NATIVE_DOCUMENTOffset: flatbuffers.Offset): void;
    static addIndexRequest(builder: flatbuffers.Builder, INDEX_REQUESTOffset: flatbuffers.Offset): void;
    static addIndexResult(builder: flatbuffers.Builder, INDEX_RESULTOffset: flatbuffers.Offset): void;
    static addWindowRequest(builder: flatbuffers.Builder, WINDOW_REQUESTOffset: flatbuffers.Offset): void;
    static addDestroyRequest(builder: flatbuffers.Builder, DESTROY_REQUESTOffset: flatbuffers.Offset): void;
    static addVersionQuery(builder: flatbuffers.Builder, VERSION_QUERY: boolean): void;
    static addVersionResult(builder: flatbuffers.Builder, VERSION_RESULTOffset: flatbuffers.Offset): void;
    static endCQR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCQRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCQRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CQRT;
    unpackTo(_o: CQRT): void;
}
export declare class CQRT implements flatbuffers.IGeneratedObject {
    PAIR_REQUEST: CQRPairRequestT | null;
    CATALOG_REQUEST: CQRCatalogRequestT | null;
    PROBABILITY_REQUEST: CQRProbabilityRequestT | null;
    PROBABILITY_RESULT: CQRProbabilityResultT | null;
    ALFANO_REQUEST: CQRAlfanoRequestT | null;
    ALFANO_RESULT: CQRAlfanoResultT | null;
    EVENT_RESULT: CQREventT | null;
    TCA_RESULT: TIMInstantT | null;
    CATALOG_RESULT: CQRCatalogResultT | null;
    NATIVE_DOCUMENT: CQRNativeDocumentT | null;
    INDEX_REQUEST: CQRIndexRequestT | null;
    INDEX_RESULT: CQRIndexResultT | null;
    WINDOW_REQUEST: CQRWindowRequestT | null;
    DESTROY_REQUEST: CQRDestroyRequestT | null;
    VERSION_QUERY: boolean;
    VERSION_RESULT: CQRVersionResultT | null;
    constructor(PAIR_REQUEST?: CQRPairRequestT | null, CATALOG_REQUEST?: CQRCatalogRequestT | null, PROBABILITY_REQUEST?: CQRProbabilityRequestT | null, PROBABILITY_RESULT?: CQRProbabilityResultT | null, ALFANO_REQUEST?: CQRAlfanoRequestT | null, ALFANO_RESULT?: CQRAlfanoResultT | null, EVENT_RESULT?: CQREventT | null, TCA_RESULT?: TIMInstantT | null, CATALOG_RESULT?: CQRCatalogResultT | null, NATIVE_DOCUMENT?: CQRNativeDocumentT | null, INDEX_REQUEST?: CQRIndexRequestT | null, INDEX_RESULT?: CQRIndexResultT | null, WINDOW_REQUEST?: CQRWindowRequestT | null, DESTROY_REQUEST?: CQRDestroyRequestT | null, VERSION_QUERY?: boolean, VERSION_RESULT?: CQRVersionResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQR.d.ts.map