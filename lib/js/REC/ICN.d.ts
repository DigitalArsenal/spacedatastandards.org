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
    static endICN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishICNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedICNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createICN(builder: flatbuffers.Builder, CONNECTOR_IDOffset: flatbuffers.Offset, KIND: icnConnectorKind, TARGET_SCHEMAOffset: flatbuffers.Offset, STATUS: icnConnectorStatus, STATUS_MESSAGEOffset: flatbuffers.Offset, ENDPOINT_URLOffset: flatbuffers.Offset, HTTP_METHODOffset: flatbuffers.Offset, AUTH_KIND: icnAuthKind, AUTH_HEADER_NAMEOffset: flatbuffers.Offset, CREDENTIAL_REFERENCEOffset: flatbuffers.Offset, POLL_INTERVAL_MS: number, DIRECTORY_PATHOffset: flatbuffers.Offset, FILE_PATTERNOffset: flatbuffers.Offset, SCAN_INTERVAL_MS: number, SETTLE_DELAY_MS: number, POST_INGEST_ACTION: icnPostIngestAction, UPLOAD_SESSION_IDOffset: flatbuffers.Offset, UPLOAD_FILE_COUNT: number, UPLOAD_TOTAL_BYTES: bigint, UPLOAD_CONTENT_HASHOffset: flatbuffers.Offset, DETECTED_FORMATOffset: flatbuffers.Offset, SAMPLE_RECORD_COUNT: number, LAST_INGEST_AT: bigint, LAST_ERROR_AT: bigint, LAST_ERROROffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    constructor(CONNECTOR_ID?: string | Uint8Array | null, KIND?: icnConnectorKind, TARGET_SCHEMA?: string | Uint8Array | null, STATUS?: icnConnectorStatus, STATUS_MESSAGE?: string | Uint8Array | null, ENDPOINT_URL?: string | Uint8Array | null, HTTP_METHOD?: string | Uint8Array | null, AUTH_KIND?: icnAuthKind, AUTH_HEADER_NAME?: string | Uint8Array | null, CREDENTIAL_REFERENCE?: string | Uint8Array | null, POLL_INTERVAL_MS?: number, DIRECTORY_PATH?: string | Uint8Array | null, FILE_PATTERN?: string | Uint8Array | null, SCAN_INTERVAL_MS?: number, SETTLE_DELAY_MS?: number, POST_INGEST_ACTION?: icnPostIngestAction, UPLOAD_SESSION_ID?: string | Uint8Array | null, UPLOAD_FILE_COUNT?: number, UPLOAD_TOTAL_BYTES?: bigint, UPLOAD_CONTENT_HASH?: string | Uint8Array | null, DETECTED_FORMAT?: string | Uint8Array | null, SAMPLE_RECORD_COUNT?: number, LAST_INGEST_AT?: bigint, LAST_ERROR_AT?: bigint, LAST_ERROR?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ICN.d.ts.map