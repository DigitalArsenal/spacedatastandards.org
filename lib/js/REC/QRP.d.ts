import * as flatbuffers from 'flatbuffers';
import { QRPColumn, QRPColumnT } from './QRPColumn.js';
import { QRPFilter, QRPFilterT } from './QRPFilter.js';
import { QRPRow, QRPRowT } from './QRPRow.js';
import { QRPTable, QRPTableT } from './QRPTable.js';
import { QRPValue, QRPValueT } from './QRPValue.js';
import { qrpKind } from './qrpKind.js';
import { qrpRepresentation } from './qrpRepresentation.js';
import { qrpStatus } from './qrpStatus.js';
import { qrpTimeProfile } from './qrpTimeProfile.js';
/**
 * Query Page - request, page header or error frame.
 */
export declare class QRP implements flatbuffers.IUnpackableObject<QRPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRP;
    static getRootAsQRP(bb: flatbuffers.ByteBuffer, obj?: QRP): QRP;
    static getSizePrefixedRootAsQRP(bb: flatbuffers.ByteBuffer, obj?: QRP): QRP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    KIND(): qrpKind;
    STATUS(): qrpStatus;
    /**
     * Stable error code when STATUS is Error, Busy or Cold.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable detail for an error, warning or partial page.
     */
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Milliseconds a client should wait before retrying; 0 = no advice.
     */
    RETRY_AFTER_MS(): number;
    /**
     * Standard code of the records selected, e.g. "OMM".
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File identifier of the record frames that follow a page header.
     */
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SQL selection over the standard's table, when the lane accepts SQL.
     */
    SQL(): string | null;
    SQL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text search over the standard's indexed text fields.
     */
    SEARCH(): string | null;
    SEARCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FILTERS(index: number, obj?: QRPFilter): QRPFilter | null;
    filtersLength(): number;
    SORT_FIELD(): string | null;
    SORT_FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SORT_DESC(): boolean;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BATCH_ID(): string | null;
    BATCH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Restrict to records whose producer is this peer.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Restrict to records retrieved from this upstream origin.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch window, Unix milliseconds; 0 = unbounded.
     */
    FROM_EPOCH_MS(): bigint;
    TO_EPOCH_MS(): bigint;
    /**
     * 1-based page number requested or served.
     */
    PAGE(): number;
    /**
     * Page size requested or served.
     */
    LIMIT(): number;
    /**
     * Opaque cursor of this page.
     */
    CURSOR(): string | null;
    CURSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Opaque cursor of the next page; empty when this is the last page.
     */
    NEXT_CURSOR(): string | null;
    NEXT_CURSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Record frames that follow this page header.
     */
    RECORD_COUNT(): number;
    /**
     * Records matching the selection when known; 0 = unknown.
     */
    TOTAL_COUNT(): bigint;
    /**
     * Records the serving node scanned to build this page.
     */
    SCANNED(): bigint;
    /**
     * Records the serving node holds for the standard.
     */
    STORED(): bigint;
    /**
     * True when a bounded scan returned before covering every stored record.
     */
    PARTIAL(): boolean;
    /**
     * True when the page was cut at a byte or row budget.
     */
    TRUNCATED(): boolean;
    /**
     * Unix milliseconds the serving numbers were last true.
     */
    AS_OF_MS(): bigint;
    /**
     * True when the page was served from a stale snapshot.
     */
    STALE(): boolean;
    /**
     * Milliseconds the serving node spent producing the page.
     */
    ELAPSED_MS(): number;
    /**
     * Unix milliseconds when the page was generated.
     */
    GENERATED_AT_MS(): bigint;
    /**
     * Entity tag of the page for conditional requests.
     */
    ETAG(): string | null;
    ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier named by a request or a reply (record, manifest,
     * archive).
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Archive identifier named by a request or a reply.
     */
    ARCHIVE_ID(): string | null;
    ARCHIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLUMNS(index: number, obj?: QRPColumn): QRPColumn | null;
    columnsLength(): number;
    /**
     * How the request selects records in time.
     */
    TIME_PROFILE(): qrpTimeProfile;
    /**
     * Reference instant of TIME_PROFILE, Unix milliseconds; 0 = now.
     */
    PROFILE_EPOCH_MS(): bigint;
    /**
     * Representation the client asks the page in.
     */
    REPRESENTATION(): qrpRepresentation;
    /**
     * Values bound to the placeholders of SQL, in order.
     */
    PARAMETERS(index: number, obj?: QRPValue): QRPValue | null;
    parametersLength(): number;
    /**
     * Rows of a projection (a query that selects columns rather than whole
     * records), in COLUMNS order. Whole-record pages carry their records as
     * frames after the header instead, and leave ROWS empty.
     */
    ROWS(index: number, obj?: QRPRow): QRPRow | null;
    rowsLength(): number;
    /**
     * The serving node's queryable tables, answered to a request for the query
     * surface.
     */
    TABLES(index: number, obj?: QRPTable): QRPTable | null;
    tablesLength(): number;
    /**
     * Wall-clock budget the serving node applies to a query, milliseconds; 0 =
     * none stated.
     */
    MAX_ELAPSED_MS(): number;
    /**
     * Most rows a page returns; 0 = none stated.
     */
    MAX_ROWS(): bigint;
    /**
     * Most bytes a page returns; 0 = none stated.
     */
    MAX_BYTES(): bigint;
    /**
     * Transport status the answer carries, HTTP semantics (200, 304, 400,
     * 406, 503 ...); 0 = derive it from STATUS and ERROR_CODE.
     */
    HTTP_STATUS(): number;
    /**
     * When the page's record frames are not inline but held by the serving
     * node for delivery out of band: the reference token the node resolves
     * (single use), and the byte size of what it refers to. 0 = inline.
     */
    BODY_REF_TOKEN(): bigint;
    BODY_REF_SIZE(): bigint;
    static startQRP(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: qrpKind): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: qrpStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addRetryAfterMs(builder: flatbuffers.Builder, RETRY_AFTER_MS: number): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addSql(builder: flatbuffers.Builder, SQLOffset: flatbuffers.Offset): void;
    static addSearch(builder: flatbuffers.Builder, SEARCHOffset: flatbuffers.Offset): void;
    static addFilters(builder: flatbuffers.Builder, FILTERSOffset: flatbuffers.Offset): void;
    static createFiltersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFiltersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSortField(builder: flatbuffers.Builder, SORT_FIELDOffset: flatbuffers.Offset): void;
    static addSortDesc(builder: flatbuffers.Builder, SORT_DESC: boolean): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addBatchId(builder: flatbuffers.Builder, BATCH_IDOffset: flatbuffers.Offset): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addFromEpochMs(builder: flatbuffers.Builder, FROM_EPOCH_MS: bigint): void;
    static addToEpochMs(builder: flatbuffers.Builder, TO_EPOCH_MS: bigint): void;
    static addPage(builder: flatbuffers.Builder, PAGE: number): void;
    static addLimit(builder: flatbuffers.Builder, LIMIT: number): void;
    static addCursor(builder: flatbuffers.Builder, CURSOROffset: flatbuffers.Offset): void;
    static addNextCursor(builder: flatbuffers.Builder, NEXT_CURSOROffset: flatbuffers.Offset): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: number): void;
    static addTotalCount(builder: flatbuffers.Builder, TOTAL_COUNT: bigint): void;
    static addScanned(builder: flatbuffers.Builder, SCANNED: bigint): void;
    static addStored(builder: flatbuffers.Builder, STORED: bigint): void;
    static addPartial(builder: flatbuffers.Builder, PARTIAL: boolean): void;
    static addTruncated(builder: flatbuffers.Builder, TRUNCATED: boolean): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addStale(builder: flatbuffers.Builder, STALE: boolean): void;
    static addElapsedMs(builder: flatbuffers.Builder, ELAPSED_MS: number): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addEtag(builder: flatbuffers.Builder, ETAGOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addArchiveId(builder: flatbuffers.Builder, ARCHIVE_IDOffset: flatbuffers.Offset): void;
    static addColumns(builder: flatbuffers.Builder, COLUMNSOffset: flatbuffers.Offset): void;
    static createColumnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColumnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeProfile(builder: flatbuffers.Builder, TIME_PROFILE: qrpTimeProfile): void;
    static addProfileEpochMs(builder: flatbuffers.Builder, PROFILE_EPOCH_MS: bigint): void;
    static addRepresentation(builder: flatbuffers.Builder, REPRESENTATION: qrpRepresentation): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTables(builder: flatbuffers.Builder, TABLESOffset: flatbuffers.Offset): void;
    static createTablesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTablesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxElapsedMs(builder: flatbuffers.Builder, MAX_ELAPSED_MS: number): void;
    static addMaxRows(builder: flatbuffers.Builder, MAX_ROWS: bigint): void;
    static addMaxBytes(builder: flatbuffers.Builder, MAX_BYTES: bigint): void;
    static addHttpStatus(builder: flatbuffers.Builder, HTTP_STATUS: number): void;
    static addBodyRefToken(builder: flatbuffers.Builder, BODY_REF_TOKEN: bigint): void;
    static addBodyRefSize(builder: flatbuffers.Builder, BODY_REF_SIZE: bigint): void;
    static endQRP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishQRPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedQRPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createQRP(builder: flatbuffers.Builder, KIND: qrpKind, STATUS: qrpStatus, ERROR_CODEOffset: flatbuffers.Offset, MESSAGEOffset: flatbuffers.Offset, RETRY_AFTER_MS: number, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, SQLOffset: flatbuffers.Offset, SEARCHOffset: flatbuffers.Offset, FILTERSOffset: flatbuffers.Offset, SORT_FIELDOffset: flatbuffers.Offset, SORT_DESC: boolean, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, BATCH_IDOffset: flatbuffers.Offset, PRODUCER_PEER_IDOffset: flatbuffers.Offset, ORIGIN_IDOffset: flatbuffers.Offset, FROM_EPOCH_MS: bigint, TO_EPOCH_MS: bigint, PAGE: number, LIMIT: number, CURSOROffset: flatbuffers.Offset, NEXT_CURSOROffset: flatbuffers.Offset, RECORD_COUNT: number, TOTAL_COUNT: bigint, SCANNED: bigint, STORED: bigint, PARTIAL: boolean, TRUNCATED: boolean, AS_OF_MS: bigint, STALE: boolean, ELAPSED_MS: number, GENERATED_AT_MS: bigint, ETAGOffset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, ARCHIVE_IDOffset: flatbuffers.Offset, COLUMNSOffset: flatbuffers.Offset, TIME_PROFILE: qrpTimeProfile, PROFILE_EPOCH_MS: bigint, REPRESENTATION: qrpRepresentation, PARAMETERSOffset: flatbuffers.Offset, ROWSOffset: flatbuffers.Offset, TABLESOffset: flatbuffers.Offset, MAX_ELAPSED_MS: number, MAX_ROWS: bigint, MAX_BYTES: bigint, HTTP_STATUS: number, BODY_REF_TOKEN: bigint, BODY_REF_SIZE: bigint): flatbuffers.Offset;
    unpack(): QRPT;
    unpackTo(_o: QRPT): void;
}
export declare class QRPT implements flatbuffers.IGeneratedObject {
    KIND: qrpKind;
    STATUS: qrpStatus;
    ERROR_CODE: string | Uint8Array | null;
    MESSAGE: string | Uint8Array | null;
    RETRY_AFTER_MS: number;
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    SQL: string | Uint8Array | null;
    SEARCH: string | Uint8Array | null;
    FILTERS: (QRPFilterT)[];
    SORT_FIELD: string | Uint8Array | null;
    SORT_DESC: boolean;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    BATCH_ID: string | Uint8Array | null;
    PRODUCER_PEER_ID: string | Uint8Array | null;
    ORIGIN_ID: string | Uint8Array | null;
    FROM_EPOCH_MS: bigint;
    TO_EPOCH_MS: bigint;
    PAGE: number;
    LIMIT: number;
    CURSOR: string | Uint8Array | null;
    NEXT_CURSOR: string | Uint8Array | null;
    RECORD_COUNT: number;
    TOTAL_COUNT: bigint;
    SCANNED: bigint;
    STORED: bigint;
    PARTIAL: boolean;
    TRUNCATED: boolean;
    AS_OF_MS: bigint;
    STALE: boolean;
    ELAPSED_MS: number;
    GENERATED_AT_MS: bigint;
    ETAG: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    ARCHIVE_ID: string | Uint8Array | null;
    COLUMNS: (QRPColumnT)[];
    TIME_PROFILE: qrpTimeProfile;
    PROFILE_EPOCH_MS: bigint;
    REPRESENTATION: qrpRepresentation;
    PARAMETERS: (QRPValueT)[];
    ROWS: (QRPRowT)[];
    TABLES: (QRPTableT)[];
    MAX_ELAPSED_MS: number;
    MAX_ROWS: bigint;
    MAX_BYTES: bigint;
    HTTP_STATUS: number;
    BODY_REF_TOKEN: bigint;
    BODY_REF_SIZE: bigint;
    constructor(KIND?: qrpKind, STATUS?: qrpStatus, ERROR_CODE?: string | Uint8Array | null, MESSAGE?: string | Uint8Array | null, RETRY_AFTER_MS?: number, SCHEMA_NAME?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, SQL?: string | Uint8Array | null, SEARCH?: string | Uint8Array | null, FILTERS?: (QRPFilterT)[], SORT_FIELD?: string | Uint8Array | null, SORT_DESC?: boolean, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, BATCH_ID?: string | Uint8Array | null, PRODUCER_PEER_ID?: string | Uint8Array | null, ORIGIN_ID?: string | Uint8Array | null, FROM_EPOCH_MS?: bigint, TO_EPOCH_MS?: bigint, PAGE?: number, LIMIT?: number, CURSOR?: string | Uint8Array | null, NEXT_CURSOR?: string | Uint8Array | null, RECORD_COUNT?: number, TOTAL_COUNT?: bigint, SCANNED?: bigint, STORED?: bigint, PARTIAL?: boolean, TRUNCATED?: boolean, AS_OF_MS?: bigint, STALE?: boolean, ELAPSED_MS?: number, GENERATED_AT_MS?: bigint, ETAG?: string | Uint8Array | null, CID?: string | Uint8Array | null, ARCHIVE_ID?: string | Uint8Array | null, COLUMNS?: (QRPColumnT)[], TIME_PROFILE?: qrpTimeProfile, PROFILE_EPOCH_MS?: bigint, REPRESENTATION?: qrpRepresentation, PARAMETERS?: (QRPValueT)[], ROWS?: (QRPRowT)[], TABLES?: (QRPTableT)[], MAX_ELAPSED_MS?: number, MAX_ROWS?: bigint, MAX_BYTES?: bigint, HTTP_STATUS?: number, BODY_REF_TOKEN?: bigint, BODY_REF_SIZE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRP.d.ts.map