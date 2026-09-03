import * as flatbuffers from 'flatbuffers';
import { icnAuthKind } from './icnAuthKind.js';
import { icnConnectorKind } from './icnConnectorKind.js';
import { icnConnectorStatus } from './icnConnectorStatus.js';
import { icnPostIngestAction } from './icnPostIngestAction.js';
/**
 * Ingest Connector - Configuration and lifecycle of one ingest source.
 */
export declare class ICN implements flatbuffers.IUnpackableObject<ICNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ICN;
    static getRootAsICN(bb: flatbuffers.ByteBuffer, obj?: ICN): ICN;
    static getSizePrefixedRootAsICN(bb: flatbuffers.ByteBuffer, obj?: ICN): ICN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable connector identifier.
     */
    CONNECTOR_ID(): string;
    CONNECTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Transport or source shape used by this connector.
     */
    KIND(): icnConnectorKind;
    /**
     * Target SDS schema filename, e.g. "OMM.fbs".
     */
    TARGET_SCHEMA(): string | null;
    TARGET_SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Connector lifecycle state, independent of any `$STF` listing status.
     */
    STATUS(): icnConnectorStatus;
    /**
     * Human-readable detail about the current status.
     */
    STATUS_MESSAGE(): string | null;
    STATUS_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HTTPS endpoint from which records are pulled.
     */
    ENDPOINT_URL(): string | null;
    ENDPOINT_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HTTP method used for an endpoint request.
     */
    HTTP_METHOD(): string | null;
    HTTP_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Authentication shape used for an endpoint request.
     */
    AUTH_KIND(): icnAuthKind;
    /**
     * Header name used when AUTH_KIND is ApiKeyHeader.
     */
    AUTH_HEADER_NAME(): string | null;
    AUTH_HEADER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Credential-store key resolved only at execution time. A secret never
     * appears in an ICN record.
     */
    CREDENTIAL_REFERENCE(): string | null;
    CREDENTIAL_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interval in milliseconds between endpoint polls.
     */
    POLL_INTERVAL_MS(): number;
    /**
     * Directory scanned by a filesystem-watch connector.
     */
    DIRECTORY_PATH(): string | null;
    DIRECTORY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File-selection pattern applied within DIRECTORY_PATH.
     */
    FILE_PATTERN(): string | null;
    FILE_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interval in milliseconds between directory scans.
     */
    SCAN_INTERVAL_MS(): number;
    /**
     * Minimum unchanged time in milliseconds before a file is ingested.
     */
    SETTLE_DELAY_MS(): number;
    /**
     * Disposition of a source file after verified ingest.
     */
    POST_INGEST_ACTION(): icnPostIngestAction;
    /**
     * Identifier of the bounded upload session.
     */
    UPLOAD_SESSION_ID(): string | null;
    UPLOAD_SESSION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of files accepted into the upload session.
     */
    UPLOAD_FILE_COUNT(): number;
    /**
     * Total uploaded byte count across all session files.
     */
    UPLOAD_TOTAL_BYTES(): bigint;
    /**
     * Content hash covering the uploaded session payload.
     */
    UPLOAD_CONTENT_HASH(): string | null;
    UPLOAD_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detected source serialization or container format.
     */
    DETECTED_FORMAT(): string | null;
    DETECTED_FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of records detected in the validation sample.
     */
    SAMPLE_RECORD_COUNT(): number;
    /**
     * Unix timestamp in milliseconds of the last successful ingest.
     */
    LAST_INGEST_AT(): bigint;
    /**
     * Unix timestamp in milliseconds of the last ingest error.
     */
    LAST_ERROR_AT(): bigint;
    /**
     * Human-readable detail about the last ingest error.
     */
    LAST_ERROR(): string | null;
    LAST_ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp in milliseconds when this connector was created.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this connector was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * Peer identifier of the provider that issued this connector record.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the connector record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    /**
     * Upstream publisher the connector retrieves records from, as a host name
     * or stable identifier.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name of the upstream publisher.
     */
    ORIGIN_NAME(): string | null;
    ORIGIN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable dataset identifier within the origin, e.g. "gp-full-catalog".
     */
    DATASET_ID(): string | null;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider identifier the lane's records are stored under.
     */
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source name the lane's records are stored under.
     */
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licence under which the upstream publisher offers the records.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publisher asks for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum interval between fetches of the same dataset, milliseconds.
     */
    MIN_FETCH_INTERVAL_MS(): bigint;
    /**
     * Unix milliseconds when the next fetch is eligible.
     */
    NEXT_ELIGIBLE_AT(): bigint;
    /**
     * HTTP status of the last fetch.
     */
    LAST_HTTP_STATUS(): number;
    /**
     * Entity tag returned by the last fetch.
     */
    LAST_SOURCE_ETAG(): string | null;
    LAST_SOURCE_ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last-Modified value returned by the last fetch.
     */
    LAST_SOURCE_LAST_MODIFIED(): string | null;
    LAST_SOURCE_LAST_MODIFIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Batch identifier of the last ingest.
     */
    LAST_BATCH_ID(): string | null;
    LAST_BATCH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Records parsed by the last ingest.
     */
    LAST_RECORD_COUNT(): bigint;
    /**
     * Records newly inserted by the last ingest.
     */
    LAST_INSERTED_COUNT(): bigint;
    /**
     * Duration of the last fetch and ingest, milliseconds.
     */
    LAST_DURATION_MS(): bigint;
    /**
     * Fetches attempted over the connector's lifetime.
     */
    FETCH_COUNT(): bigint;
    /**
     * Ingests completed over the connector's lifetime.
     */
    INGEST_COUNT(): bigint;
    /**
     * Content identifier of the last publication manifest emitted.
     */
    LAST_PUBLICATION_CID(): string | null;
    LAST_PUBLICATION_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the last publish notification emitted.
     */
    LAST_PNM_CID(): string | null;
    LAST_PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Feed head the connector last advanced to.
     */
    FEED_HEAD(): string | null;
    FEED_HEAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standard codes the connector emits, e.g. ["OMM", "MPE"].
     */
    EMITS_SCHEMAS(index: number): string;
    EMITS_SCHEMAS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    emitsSchemasLength(): number;
    static startICN(builder: flatbuffers.Builder): void;
    static addConnectorId(builder: flatbuffers.Builder, CONNECTOR_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: icnConnectorKind): void;
    static addTargetSchema(builder: flatbuffers.Builder, TARGET_SCHEMAOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: icnConnectorStatus): void;
    static addStatusMessage(builder: flatbuffers.Builder, STATUS_MESSAGEOffset: flatbuffers.Offset): void;
    static addEndpointUrl(builder: flatbuffers.Builder, ENDPOINT_URLOffset: flatbuffers.Offset): void;
    static addHttpMethod(builder: flatbuffers.Builder, HTTP_METHODOffset: flatbuffers.Offset): void;
    static addAuthKind(builder: flatbuffers.Builder, AUTH_KIND: icnAuthKind): void;
    static addAuthHeaderName(builder: flatbuffers.Builder, AUTH_HEADER_NAMEOffset: flatbuffers.Offset): void;
    static addCredentialReference(builder: flatbuffers.Builder, CREDENTIAL_REFERENCEOffset: flatbuffers.Offset): void;
    static addPollIntervalMs(builder: flatbuffers.Builder, POLL_INTERVAL_MS: number): void;
    static addDirectoryPath(builder: flatbuffers.Builder, DIRECTORY_PATHOffset: flatbuffers.Offset): void;
    static addFilePattern(builder: flatbuffers.Builder, FILE_PATTERNOffset: flatbuffers.Offset): void;
    static addScanIntervalMs(builder: flatbuffers.Builder, SCAN_INTERVAL_MS: number): void;
    static addSettleDelayMs(builder: flatbuffers.Builder, SETTLE_DELAY_MS: number): void;
    static addPostIngestAction(builder: flatbuffers.Builder, POST_INGEST_ACTION: icnPostIngestAction): void;
    static addUploadSessionId(builder: flatbuffers.Builder, UPLOAD_SESSION_IDOffset: flatbuffers.Offset): void;
    static addUploadFileCount(builder: flatbuffers.Builder, UPLOAD_FILE_COUNT: number): void;
    static addUploadTotalBytes(builder: flatbuffers.Builder, UPLOAD_TOTAL_BYTES: bigint): void;
    static addUploadContentHash(builder: flatbuffers.Builder, UPLOAD_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addDetectedFormat(builder: flatbuffers.Builder, DETECTED_FORMATOffset: flatbuffers.Offset): void;
    static addSampleRecordCount(builder: flatbuffers.Builder, SAMPLE_RECORD_COUNT: number): void;
    static addLastIngestAt(builder: flatbuffers.Builder, LAST_INGEST_AT: bigint): void;
    static addLastErrorAt(builder: flatbuffers.Builder, LAST_ERROR_AT: bigint): void;
    static addLastError(builder: flatbuffers.Builder, LAST_ERROROffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addOriginName(builder: flatbuffers.Builder, ORIGIN_NAMEOffset: flatbuffers.Offset): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addMinFetchIntervalMs(builder: flatbuffers.Builder, MIN_FETCH_INTERVAL_MS: bigint): void;
    static addNextEligibleAt(builder: flatbuffers.Builder, NEXT_ELIGIBLE_AT: bigint): void;
    static addLastHttpStatus(builder: flatbuffers.Builder, LAST_HTTP_STATUS: number): void;
    static addLastSourceEtag(builder: flatbuffers.Builder, LAST_SOURCE_ETAGOffset: flatbuffers.Offset): void;
    static addLastSourceLastModified(builder: flatbuffers.Builder, LAST_SOURCE_LAST_MODIFIEDOffset: flatbuffers.Offset): void;
    static addLastBatchId(builder: flatbuffers.Builder, LAST_BATCH_IDOffset: flatbuffers.Offset): void;
    static addLastRecordCount(builder: flatbuffers.Builder, LAST_RECORD_COUNT: bigint): void;
    static addLastInsertedCount(builder: flatbuffers.Builder, LAST_INSERTED_COUNT: bigint): void;
    static addLastDurationMs(builder: flatbuffers.Builder, LAST_DURATION_MS: bigint): void;
    static addFetchCount(builder: flatbuffers.Builder, FETCH_COUNT: bigint): void;
    static addIngestCount(builder: flatbuffers.Builder, INGEST_COUNT: bigint): void;
    static addLastPublicationCid(builder: flatbuffers.Builder, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset): void;
    static addLastPnmCid(builder: flatbuffers.Builder, LAST_PNM_CIDOffset: flatbuffers.Offset): void;
    static addFeedHead(builder: flatbuffers.Builder, FEED_HEADOffset: flatbuffers.Offset): void;
    static addEmitsSchemas(builder: flatbuffers.Builder, EMITS_SCHEMASOffset: flatbuffers.Offset): void;
    static createEmitsSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEmitsSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static endICN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishICNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedICNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createICN(builder: flatbuffers.Builder, CONNECTOR_IDOffset: flatbuffers.Offset, KIND: icnConnectorKind, TARGET_SCHEMAOffset: flatbuffers.Offset, STATUS: icnConnectorStatus, STATUS_MESSAGEOffset: flatbuffers.Offset, ENDPOINT_URLOffset: flatbuffers.Offset, HTTP_METHODOffset: flatbuffers.Offset, AUTH_KIND: icnAuthKind, AUTH_HEADER_NAMEOffset: flatbuffers.Offset, CREDENTIAL_REFERENCEOffset: flatbuffers.Offset, POLL_INTERVAL_MS: number, DIRECTORY_PATHOffset: flatbuffers.Offset, FILE_PATTERNOffset: flatbuffers.Offset, SCAN_INTERVAL_MS: number, SETTLE_DELAY_MS: number, POST_INGEST_ACTION: icnPostIngestAction, UPLOAD_SESSION_IDOffset: flatbuffers.Offset, UPLOAD_FILE_COUNT: number, UPLOAD_TOTAL_BYTES: bigint, UPLOAD_CONTENT_HASHOffset: flatbuffers.Offset, DETECTED_FORMATOffset: flatbuffers.Offset, SAMPLE_RECORD_COUNT: number, LAST_INGEST_AT: bigint, LAST_ERROR_AT: bigint, LAST_ERROROffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset, ORIGIN_IDOffset: flatbuffers.Offset, ORIGIN_NAMEOffset: flatbuffers.Offset, DATASET_IDOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset, MIN_FETCH_INTERVAL_MS: bigint, NEXT_ELIGIBLE_AT: bigint, LAST_HTTP_STATUS: number, LAST_SOURCE_ETAGOffset: flatbuffers.Offset, LAST_SOURCE_LAST_MODIFIEDOffset: flatbuffers.Offset, LAST_BATCH_IDOffset: flatbuffers.Offset, LAST_RECORD_COUNT: bigint, LAST_INSERTED_COUNT: bigint, LAST_DURATION_MS: bigint, FETCH_COUNT: bigint, INGEST_COUNT: bigint, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset, LAST_PNM_CIDOffset: flatbuffers.Offset, FEED_HEADOffset: flatbuffers.Offset, EMITS_SCHEMASOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ICNT;
    unpackTo(_o: ICNT): void;
}
export declare class ICNT implements flatbuffers.IGeneratedObject {
    CONNECTOR_ID: string | Uint8Array | null;
    KIND: icnConnectorKind;
    TARGET_SCHEMA: string | Uint8Array | null;
    STATUS: icnConnectorStatus;
    STATUS_MESSAGE: string | Uint8Array | null;
    ENDPOINT_URL: string | Uint8Array | null;
    HTTP_METHOD: string | Uint8Array | null;
    AUTH_KIND: icnAuthKind;
    AUTH_HEADER_NAME: string | Uint8Array | null;
    CREDENTIAL_REFERENCE: string | Uint8Array | null;
    POLL_INTERVAL_MS: number;
    DIRECTORY_PATH: string | Uint8Array | null;
    FILE_PATTERN: string | Uint8Array | null;
    SCAN_INTERVAL_MS: number;
    SETTLE_DELAY_MS: number;
    POST_INGEST_ACTION: icnPostIngestAction;
    UPLOAD_SESSION_ID: string | Uint8Array | null;
    UPLOAD_FILE_COUNT: number;
    UPLOAD_TOTAL_BYTES: bigint;
    UPLOAD_CONTENT_HASH: string | Uint8Array | null;
    DETECTED_FORMAT: string | Uint8Array | null;
    SAMPLE_RECORD_COUNT: number;
    LAST_INGEST_AT: bigint;
    LAST_ERROR_AT: bigint;
    LAST_ERROR: string | Uint8Array | null;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    ORIGIN_ID: string | Uint8Array | null;
    ORIGIN_NAME: string | Uint8Array | null;
    DATASET_ID: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    MIN_FETCH_INTERVAL_MS: bigint;
    NEXT_ELIGIBLE_AT: bigint;
    LAST_HTTP_STATUS: number;
    LAST_SOURCE_ETAG: string | Uint8Array | null;
    LAST_SOURCE_LAST_MODIFIED: string | Uint8Array | null;
    LAST_BATCH_ID: string | Uint8Array | null;
    LAST_RECORD_COUNT: bigint;
    LAST_INSERTED_COUNT: bigint;
    LAST_DURATION_MS: bigint;
    FETCH_COUNT: bigint;
    INGEST_COUNT: bigint;
    LAST_PUBLICATION_CID: string | Uint8Array | null;
    LAST_PNM_CID: string | Uint8Array | null;
    FEED_HEAD: string | Uint8Array | null;
    EMITS_SCHEMAS: (string)[];
    constructor(CONNECTOR_ID?: string | Uint8Array | null, KIND?: icnConnectorKind, TARGET_SCHEMA?: string | Uint8Array | null, STATUS?: icnConnectorStatus, STATUS_MESSAGE?: string | Uint8Array | null, ENDPOINT_URL?: string | Uint8Array | null, HTTP_METHOD?: string | Uint8Array | null, AUTH_KIND?: icnAuthKind, AUTH_HEADER_NAME?: string | Uint8Array | null, CREDENTIAL_REFERENCE?: string | Uint8Array | null, POLL_INTERVAL_MS?: number, DIRECTORY_PATH?: string | Uint8Array | null, FILE_PATTERN?: string | Uint8Array | null, SCAN_INTERVAL_MS?: number, SETTLE_DELAY_MS?: number, POST_INGEST_ACTION?: icnPostIngestAction, UPLOAD_SESSION_ID?: string | Uint8Array | null, UPLOAD_FILE_COUNT?: number, UPLOAD_TOTAL_BYTES?: bigint, UPLOAD_CONTENT_HASH?: string | Uint8Array | null, DETECTED_FORMAT?: string | Uint8Array | null, SAMPLE_RECORD_COUNT?: number, LAST_INGEST_AT?: bigint, LAST_ERROR_AT?: bigint, LAST_ERROR?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[], ORIGIN_ID?: string | Uint8Array | null, ORIGIN_NAME?: string | Uint8Array | null, DATASET_ID?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, MIN_FETCH_INTERVAL_MS?: bigint, NEXT_ELIGIBLE_AT?: bigint, LAST_HTTP_STATUS?: number, LAST_SOURCE_ETAG?: string | Uint8Array | null, LAST_SOURCE_LAST_MODIFIED?: string | Uint8Array | null, LAST_BATCH_ID?: string | Uint8Array | null, LAST_RECORD_COUNT?: bigint, LAST_INSERTED_COUNT?: bigint, LAST_DURATION_MS?: bigint, FETCH_COUNT?: bigint, INGEST_COUNT?: bigint, LAST_PUBLICATION_CID?: string | Uint8Array | null, LAST_PNM_CID?: string | Uint8Array | null, FEED_HEAD?: string | Uint8Array | null, EMITS_SCHEMAS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ICN.d.ts.map