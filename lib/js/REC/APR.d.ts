import * as flatbuffers from 'flatbuffers';
import { APRParameter, APRParameterT } from './APRParameter.js';
import { aprMethod } from './aprMethod.js';
import { aprRepresentation } from './aprRepresentation.js';
/**
 * API Request - one normalized request and its serving decision.
 */
export declare class APR implements flatbuffers.IUnpackableObject<APRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APR;
    static getRootAsAPR(bb: flatbuffers.ByteBuffer, obj?: APR): APR;
    static getSizePrefixedRootAsAPR(bb: flatbuffers.ByteBuffer, obj?: APR): APR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the request, unique within the gateway (for correlating
     * logs and answers); empty when the gateway does not assign one.
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds when the gateway received the request; 0 = unknown.
     */
    RECEIVED_AT_MS(): bigint;
    METHOD(): aprMethod;
    /**
     * Path of the request as received, without the query string, e.g.
     * "/api/v1/data/omm/bulk".
     */
    PATH(): string | null;
    PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The gateway's routing decision: the stable name of the operation that
     * serves the request, e.g. "bulk", "query", "status", "activity",
     * "peer_get". Empty when no route matched (STATUS then says why).
     */
    ROUTE(): string | null;
    ROUTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standard the request selects, as its schema file name, e.g. "OMM.fbs";
     * empty when the route is not about one standard.
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request parameters, in the order received. A parameter the service
     * defaults is absent rather than empty.
     */
    PARAMETERS(index: number, obj?: APRParameter): APRParameter | null;
    parametersLength(): number;
    /**
     * Selection text the request carries in its body, when the route takes
     * one: an SQL statement, a search expression or a command line.
     */
    SELECTION(): string | null;
    SELECTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entity tag the client already holds (HTTP If-None-Match), verbatim; the
     * service answers "not modified" when its current tag equals it.
     */
    IF_NONE_MATCH(): string | null;
    IF_NONE_MATCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds of the client's copy (HTTP If-Modified-Since); 0 =
     * none.
     */
    IF_MODIFIED_SINCE_MS(): bigint;
    /**
     * Representation the client accepts.
     */
    ACCEPT(): aprRepresentation;
    /**
     * Media type of BODY as the client declared it, e.g. "application/sql".
     */
    CONTENT_TYPE(): string | null;
    CONTENT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request body verbatim, when the route uses it and it is not already
     * expressed as SELECTION.
     */
    BODY(index: number): number | null;
    bodyLength(): number;
    bodyArray(): Uint8Array | null;
    /**
     * Outcome to answer with when the request is refused or failed, as an HTTP
     * status (400 bad request, 404 no route, 405 method not allowed, 503
     * unavailable, ...); 0 while the request is being served normally.
     */
    STATUS(): number;
    /**
     * Stable machine-readable reason for STATUS, e.g. "missing-sql",
     * "method-not-allowed"; empty when STATUS is 0.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable detail for STATUS.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identity of the authenticated caller (a peer identifier or account),
     * when the gateway authenticated one.
     */
    CALLER_ID(): string | null;
    CALLER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Headers a serving stage asks the answer to carry, e.g. "cache-control",
     * "last-modified", "content-disposition" (name lower-case).
     */
    RESPONSE_HEADERS(index: number, obj?: APRParameter): APRParameter | null;
    responseHeadersLength(): number;
    static startAPR(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addReceivedAtMs(builder: flatbuffers.Builder, RECEIVED_AT_MS: bigint): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: aprMethod): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static addRoute(builder: flatbuffers.Builder, ROUTEOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSelection(builder: flatbuffers.Builder, SELECTIONOffset: flatbuffers.Offset): void;
    static addIfNoneMatch(builder: flatbuffers.Builder, IF_NONE_MATCHOffset: flatbuffers.Offset): void;
    static addIfModifiedSinceMs(builder: flatbuffers.Builder, IF_MODIFIED_SINCE_MS: bigint): void;
    static addAccept(builder: flatbuffers.Builder, ACCEPT: aprRepresentation): void;
    static addContentType(builder: flatbuffers.Builder, CONTENT_TYPEOffset: flatbuffers.Offset): void;
    static addBody(builder: flatbuffers.Builder, BODYOffset: flatbuffers.Offset): void;
    static createBodyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBodyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: number): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addCallerId(builder: flatbuffers.Builder, CALLER_IDOffset: flatbuffers.Offset): void;
    static addResponseHeaders(builder: flatbuffers.Builder, RESPONSE_HEADERSOffset: flatbuffers.Offset): void;
    static createResponseHeadersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResponseHeadersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAPR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAPRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAPRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAPR(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, RECEIVED_AT_MS: bigint, METHOD: aprMethod, PATHOffset: flatbuffers.Offset, ROUTEOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, PARAMETERSOffset: flatbuffers.Offset, SELECTIONOffset: flatbuffers.Offset, IF_NONE_MATCHOffset: flatbuffers.Offset, IF_MODIFIED_SINCE_MS: bigint, ACCEPT: aprRepresentation, CONTENT_TYPEOffset: flatbuffers.Offset, BODYOffset: flatbuffers.Offset, STATUS: number, ERROR_CODEOffset: flatbuffers.Offset, ERROR_MESSAGEOffset: flatbuffers.Offset, CALLER_IDOffset: flatbuffers.Offset, RESPONSE_HEADERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APRT;
    unpackTo(_o: APRT): void;
}
export declare class APRT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    RECEIVED_AT_MS: bigint;
    METHOD: aprMethod;
    PATH: string | Uint8Array | null;
    ROUTE: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    PARAMETERS: (APRParameterT)[];
    SELECTION: string | Uint8Array | null;
    IF_NONE_MATCH: string | Uint8Array | null;
    IF_MODIFIED_SINCE_MS: bigint;
    ACCEPT: aprRepresentation;
    CONTENT_TYPE: string | Uint8Array | null;
    BODY: (number)[];
    STATUS: number;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    CALLER_ID: string | Uint8Array | null;
    RESPONSE_HEADERS: (APRParameterT)[];
    constructor(REQUEST_ID?: string | Uint8Array | null, RECEIVED_AT_MS?: bigint, METHOD?: aprMethod, PATH?: string | Uint8Array | null, ROUTE?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, PARAMETERS?: (APRParameterT)[], SELECTION?: string | Uint8Array | null, IF_NONE_MATCH?: string | Uint8Array | null, IF_MODIFIED_SINCE_MS?: bigint, ACCEPT?: aprRepresentation, CONTENT_TYPE?: string | Uint8Array | null, BODY?: (number)[], STATUS?: number, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, CALLER_ID?: string | Uint8Array | null, RESPONSE_HEADERS?: (APRParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APR.d.ts.map