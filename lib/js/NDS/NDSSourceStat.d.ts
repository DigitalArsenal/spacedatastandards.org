import * as flatbuffers from 'flatbuffers';
import { ndsPublisherRung } from './ndsPublisherRung.js';
/**
 * One (standard, provider, source, batch) ingest lane's live progress and
 * provenance.
 */
export declare class NDSSourceStat implements flatbuffers.IUnpackableObject<NDSSourceStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSSourceStat;
    static getRootAsNDSSourceStat(bb: flatbuffers.ByteBuffer, obj?: NDSSourceStat): NDSSourceStat;
    static getSizePrefixedRootAsNDSSourceStat(bb: flatbuffers.ByteBuffer, obj?: NDSSourceStat): NDSSourceStat;
    SCHEMA(): string | null;
    SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BATCH_ID(): string | null;
    BATCH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RECORD_COUNT(): bigint;
    TOTAL_BYTES(): bigint;
    /**
     * Unix seconds; 0 = unknown.
     */
    FIRST_INGEST_AT(): bigint;
    /**
     * Unix seconds; 0 = unknown.
     */
    LAST_INGEST_AT(): bigint;
    /**
     * Unix seconds; 0 = unknown.
     */
    UPDATED_AT(): bigint;
    /**
     * Records observed in the current rolling window.
     */
    WINDOW_RECORDS(): bigint;
    /**
     * Records observed in the immediately preceding rolling window.
     */
    PRIOR_WINDOW_RECORDS(): bigint;
    /**
     * Rolling-window width in milliseconds.
     */
    WINDOW_MS(): bigint;
    /**
     * Peer identifier of the producer whose signed identity covers this lane's
     * publications.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the producer's identity record.
     */
    PRODUCER_EPM_CID(): string | null;
    PRODUCER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Upstream publisher the producer retrieved the records from, as a host
     * name or stable identifier.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name of the upstream publisher.
     */
    ORIGIN_NAME(): string | null;
    ORIGIN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Upstream URL the records were retrieved from.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licence under which the upstream publisher offers the records.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ingest connector that produced this lane (`$ICN` CONNECTOR_ID).
     */
    CONNECTOR_ID(): string | null;
    CONNECTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Verification rung of the producer claim.
     */
    PUBLISHER_RUNG(): ndsPublisherRung;
    /**
     * Evidence references supporting PUBLISHER_RUNG (record CIDs, proof ids).
     */
    EVIDENCE(index: number): string;
    EVIDENCE(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    evidenceLength(): number;
    /**
     * Content identifier of the lane's newest publication manifest.
     */
    LAST_PUBLICATION_CID(): string | null;
    LAST_PUBLICATION_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the lane's newest publish notification.
     */
    LAST_PNM_CID(): string | null;
    LAST_PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNDSSourceStat(builder: flatbuffers.Builder): void;
    static addSchema(builder: flatbuffers.Builder, SCHEMAOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addBatchId(builder: flatbuffers.Builder, BATCH_IDOffset: flatbuffers.Offset): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: bigint): void;
    static addTotalBytes(builder: flatbuffers.Builder, TOTAL_BYTES: bigint): void;
    static addFirstIngestAt(builder: flatbuffers.Builder, FIRST_INGEST_AT: bigint): void;
    static addLastIngestAt(builder: flatbuffers.Builder, LAST_INGEST_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addWindowRecords(builder: flatbuffers.Builder, WINDOW_RECORDS: bigint): void;
    static addPriorWindowRecords(builder: flatbuffers.Builder, PRIOR_WINDOW_RECORDS: bigint): void;
    static addWindowMs(builder: flatbuffers.Builder, WINDOW_MS: bigint): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProducerEpmCid(builder: flatbuffers.Builder, PRODUCER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addOriginName(builder: flatbuffers.Builder, ORIGIN_NAMEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addConnectorId(builder: flatbuffers.Builder, CONNECTOR_IDOffset: flatbuffers.Offset): void;
    static addPublisherRung(builder: flatbuffers.Builder, PUBLISHER_RUNG: ndsPublisherRung): void;
    static addEvidence(builder: flatbuffers.Builder, EVIDENCEOffset: flatbuffers.Offset): void;
    static createEvidenceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEvidenceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLastPublicationCid(builder: flatbuffers.Builder, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset): void;
    static addLastPnmCid(builder: flatbuffers.Builder, LAST_PNM_CIDOffset: flatbuffers.Offset): void;
    static endNDSSourceStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSSourceStat(builder: flatbuffers.Builder, SCHEMAOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, BATCH_IDOffset: flatbuffers.Offset, RECORD_COUNT: bigint, TOTAL_BYTES: bigint, FIRST_INGEST_AT: bigint, LAST_INGEST_AT: bigint, UPDATED_AT: bigint, WINDOW_RECORDS: bigint, PRIOR_WINDOW_RECORDS: bigint, WINDOW_MS: bigint, PRODUCER_PEER_IDOffset: flatbuffers.Offset, PRODUCER_EPM_CIDOffset: flatbuffers.Offset, ORIGIN_IDOffset: flatbuffers.Offset, ORIGIN_NAMEOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, CONNECTOR_IDOffset: flatbuffers.Offset, PUBLISHER_RUNG: ndsPublisherRung, EVIDENCEOffset: flatbuffers.Offset, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset, LAST_PNM_CIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NDSSourceStatT;
    unpackTo(_o: NDSSourceStatT): void;
}
export declare class NDSSourceStatT implements flatbuffers.IGeneratedObject {
    SCHEMA: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    BATCH_ID: string | Uint8Array | null;
    RECORD_COUNT: bigint;
    TOTAL_BYTES: bigint;
    FIRST_INGEST_AT: bigint;
    LAST_INGEST_AT: bigint;
    UPDATED_AT: bigint;
    WINDOW_RECORDS: bigint;
    PRIOR_WINDOW_RECORDS: bigint;
    WINDOW_MS: bigint;
    PRODUCER_PEER_ID: string | Uint8Array | null;
    PRODUCER_EPM_CID: string | Uint8Array | null;
    ORIGIN_ID: string | Uint8Array | null;
    ORIGIN_NAME: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    CONNECTOR_ID: string | Uint8Array | null;
    PUBLISHER_RUNG: ndsPublisherRung;
    EVIDENCE: (string)[];
    LAST_PUBLICATION_CID: string | Uint8Array | null;
    LAST_PNM_CID: string | Uint8Array | null;
    constructor(SCHEMA?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, BATCH_ID?: string | Uint8Array | null, RECORD_COUNT?: bigint, TOTAL_BYTES?: bigint, FIRST_INGEST_AT?: bigint, LAST_INGEST_AT?: bigint, UPDATED_AT?: bigint, WINDOW_RECORDS?: bigint, PRIOR_WINDOW_RECORDS?: bigint, WINDOW_MS?: bigint, PRODUCER_PEER_ID?: string | Uint8Array | null, PRODUCER_EPM_CID?: string | Uint8Array | null, ORIGIN_ID?: string | Uint8Array | null, ORIGIN_NAME?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, CONNECTOR_ID?: string | Uint8Array | null, PUBLISHER_RUNG?: ndsPublisherRung, EVIDENCE?: (string)[], LAST_PUBLICATION_CID?: string | Uint8Array | null, LAST_PNM_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSSourceStat.d.ts.map