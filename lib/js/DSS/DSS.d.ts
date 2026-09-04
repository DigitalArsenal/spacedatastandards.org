import * as flatbuffers from 'flatbuffers';
import { dssAction } from './dssAction.js';
import { dssPinPolicy } from './dssPinPolicy.js';
import { dssRetention } from './dssRetention.js';
import { dssSyncState } from './dssSyncState.js';
export declare class DSS implements flatbuffers.IUnpackableObject<DSST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DSS;
    static getRootAsDSS(bb: flatbuffers.ByteBuffer, obj?: DSS): DSS;
    static getSizePrefixedRootAsDSS(bb: flatbuffers.ByteBuffer, obj?: DSS): DSS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    STATUS(): dssSyncState;
    SYNCED_ROWS(): bigint;
    TOTAL_ROWS(): bigint;
    LOCAL_ROWS(): bigint;
    PINNED_ROWS(): bigint;
    MISSING_ROWS(): bigint;
    CACHED_BYTES(): bigint;
    PINNED_BYTES(): bigint;
    DOWNLOADED_BYTES(): bigint;
    DOWNLOAD_SPEED_BYTES_PER_SECOND(): bigint;
    MEASURED_WIRE_SPEED_BYTES_PER_SECOND(): bigint;
    HAS_WIRE_SPEED_UTILIZATION(): boolean;
    WIRE_SPEED_UTILIZATION(): number;
    WIRE_SPEED_TARGET(): number;
    HAS_WIRE_SPEED_TARGET_MET(): boolean;
    WIRE_SPEED_TARGET_MET(): boolean;
    MANIFEST_DISCOVERY_MS(): bigint;
    NETWORK_TRANSFER_MS(): bigint;
    VERIFICATION_MS(): bigint;
    FLATSQL_MATERIALIZATION_MS(): bigint;
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_PUBLIC_KEY(): string | null;
    PROVIDER_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SNAPSHOT_ID(): string | null;
    SNAPSHOT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    HEAD(): string | null;
    HEAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CURSOR(): string | null;
    CURSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NEXT_CURSOR(): string | null;
    NEXT_CURSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    HIGH_WATER_MARK(): string | null;
    HIGH_WATER_MARK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    QUERY_PROFILE(): string | null;
    QUERY_PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHUNK_HASH(): string | null;
    CHUNK_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SYNC_PROTOCOL(): string | null;
    SYNC_PROTOCOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SYNC_FILTER(): string | null;
    SYNC_FILTER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VERIFIED_CHUNKS(index: number): string;
    VERIFIED_CHUNKS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    verifiedChunksLength(): number;
    LAST_SYNCED_AT(): string | null;
    LAST_SYNCED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standard code of the lane, e.g. "OMM".
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable dataset identifier within the origin.
     */
    DATASET_ID(): string | null;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ingest connector that produces the lane, when known.
     */
    CONNECTOR_ID(): string | null;
    CONNECTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Channel identifier the lane is announced on.
     */
    CHANNEL_ID(): string | null;
    CHANNEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publish/subscribe topic of the lane.
     */
    TOPIC(): string | null;
    TOPIC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when this node subscribes to the lane.
     */
    SUBSCRIBED(): boolean;
    PIN_POLICY(): dssPinPolicy;
    /**
     * Visibility of the lane, e.g. "public", "private".
     */
    VISIBILITY(): string | null;
    VISIBILITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encryption state of the lane's publications, e.g. "plain", "encrypted".
     */
    ENCRYPTION_STATE(): string | null;
    ENCRYPTION_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grant state for an encrypted lane, e.g. "granted", "pending", "none".
     */
    GRANT_STATE(): string | null;
    GRANT_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Feed head this node has materialised up to.
     */
    FEED_HEAD(): string | null;
    FEED_HEAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the newest publication manifest known.
     */
    LAST_PUBLICATION_CID(): string | null;
    LAST_PUBLICATION_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the newest publish notification known.
     */
    LAST_PNM_CID(): string | null;
    LAST_PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rows materialised since the previous SYNCED state.
     */
    DELTA_ROWS(): bigint;
    /**
     * Unix milliseconds the current or last sync pass started; 0 = never.
     */
    LAST_SYNC_STARTED_AT(): bigint;
    /**
     * Action a client requests when sending this record to a node.
     */
    REQUESTED_ACTION(): dssAction;
    /**
     * Upstream publisher of the lane's records.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How this node keeps a lane's publications. ReplaceCurrent supersedes the
     * previous batch of the lane with each new publication so the lane holds
     * one current set; ArchiveAll keeps and pins every publication so history
     * stays retrievable by content identifier.
     */
    RETENTION(): dssRetention;
    static startDSS(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: dssSyncState): void;
    static addSyncedRows(builder: flatbuffers.Builder, SYNCED_ROWS: bigint): void;
    static addTotalRows(builder: flatbuffers.Builder, TOTAL_ROWS: bigint): void;
    static addLocalRows(builder: flatbuffers.Builder, LOCAL_ROWS: bigint): void;
    static addPinnedRows(builder: flatbuffers.Builder, PINNED_ROWS: bigint): void;
    static addMissingRows(builder: flatbuffers.Builder, MISSING_ROWS: bigint): void;
    static addCachedBytes(builder: flatbuffers.Builder, CACHED_BYTES: bigint): void;
    static addPinnedBytes(builder: flatbuffers.Builder, PINNED_BYTES: bigint): void;
    static addDownloadedBytes(builder: flatbuffers.Builder, DOWNLOADED_BYTES: bigint): void;
    static addDownloadSpeedBytesPerSecond(builder: flatbuffers.Builder, DOWNLOAD_SPEED_BYTES_PER_SECOND: bigint): void;
    static addMeasuredWireSpeedBytesPerSecond(builder: flatbuffers.Builder, MEASURED_WIRE_SPEED_BYTES_PER_SECOND: bigint): void;
    static addHasWireSpeedUtilization(builder: flatbuffers.Builder, HAS_WIRE_SPEED_UTILIZATION: boolean): void;
    static addWireSpeedUtilization(builder: flatbuffers.Builder, WIRE_SPEED_UTILIZATION: number): void;
    static addWireSpeedTarget(builder: flatbuffers.Builder, WIRE_SPEED_TARGET: number): void;
    static addHasWireSpeedTargetMet(builder: flatbuffers.Builder, HAS_WIRE_SPEED_TARGET_MET: boolean): void;
    static addWireSpeedTargetMet(builder: flatbuffers.Builder, WIRE_SPEED_TARGET_MET: boolean): void;
    static addManifestDiscoveryMs(builder: flatbuffers.Builder, MANIFEST_DISCOVERY_MS: bigint): void;
    static addNetworkTransferMs(builder: flatbuffers.Builder, NETWORK_TRANSFER_MS: bigint): void;
    static addVerificationMs(builder: flatbuffers.Builder, VERIFICATION_MS: bigint): void;
    static addFlatsqlMaterializationMs(builder: flatbuffers.Builder, FLATSQL_MATERIALIZATION_MS: bigint): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderPublicKey(builder: flatbuffers.Builder, PROVIDER_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSnapshotId(builder: flatbuffers.Builder, SNAPSHOT_IDOffset: flatbuffers.Offset): void;
    static addHead(builder: flatbuffers.Builder, HEADOffset: flatbuffers.Offset): void;
    static addCursor(builder: flatbuffers.Builder, CURSOROffset: flatbuffers.Offset): void;
    static addNextCursor(builder: flatbuffers.Builder, NEXT_CURSOROffset: flatbuffers.Offset): void;
    static addHighWaterMark(builder: flatbuffers.Builder, HIGH_WATER_MARKOffset: flatbuffers.Offset): void;
    static addQueryProfile(builder: flatbuffers.Builder, QUERY_PROFILEOffset: flatbuffers.Offset): void;
    static addChunkHash(builder: flatbuffers.Builder, CHUNK_HASHOffset: flatbuffers.Offset): void;
    static addSyncProtocol(builder: flatbuffers.Builder, SYNC_PROTOCOLOffset: flatbuffers.Offset): void;
    static addSyncFilter(builder: flatbuffers.Builder, SYNC_FILTEROffset: flatbuffers.Offset): void;
    static addVerifiedChunks(builder: flatbuffers.Builder, VERIFIED_CHUNKSOffset: flatbuffers.Offset): void;
    static createVerifiedChunksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVerifiedChunksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLastSyncedAt(builder: flatbuffers.Builder, LAST_SYNCED_ATOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addConnectorId(builder: flatbuffers.Builder, CONNECTOR_IDOffset: flatbuffers.Offset): void;
    static addChannelId(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset): void;
    static addTopic(builder: flatbuffers.Builder, TOPICOffset: flatbuffers.Offset): void;
    static addSubscribed(builder: flatbuffers.Builder, SUBSCRIBED: boolean): void;
    static addPinPolicy(builder: flatbuffers.Builder, PIN_POLICY: dssPinPolicy): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITYOffset: flatbuffers.Offset): void;
    static addEncryptionState(builder: flatbuffers.Builder, ENCRYPTION_STATEOffset: flatbuffers.Offset): void;
    static addGrantState(builder: flatbuffers.Builder, GRANT_STATEOffset: flatbuffers.Offset): void;
    static addFeedHead(builder: flatbuffers.Builder, FEED_HEADOffset: flatbuffers.Offset): void;
    static addLastPublicationCid(builder: flatbuffers.Builder, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset): void;
    static addLastPnmCid(builder: flatbuffers.Builder, LAST_PNM_CIDOffset: flatbuffers.Offset): void;
    static addDeltaRows(builder: flatbuffers.Builder, DELTA_ROWS: bigint): void;
    static addLastSyncStartedAt(builder: flatbuffers.Builder, LAST_SYNC_STARTED_AT: bigint): void;
    static addRequestedAction(builder: flatbuffers.Builder, REQUESTED_ACTION: dssAction): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addRetention(builder: flatbuffers.Builder, RETENTION: dssRetention): void;
    static endDSS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDSSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDSSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDSS(builder: flatbuffers.Builder, STATUS: dssSyncState, SYNCED_ROWS: bigint, TOTAL_ROWS: bigint, LOCAL_ROWS: bigint, PINNED_ROWS: bigint, MISSING_ROWS: bigint, CACHED_BYTES: bigint, PINNED_BYTES: bigint, DOWNLOADED_BYTES: bigint, DOWNLOAD_SPEED_BYTES_PER_SECOND: bigint, MEASURED_WIRE_SPEED_BYTES_PER_SECOND: bigint, HAS_WIRE_SPEED_UTILIZATION: boolean, WIRE_SPEED_UTILIZATION: number, WIRE_SPEED_TARGET: number, HAS_WIRE_SPEED_TARGET_MET: boolean, WIRE_SPEED_TARGET_MET: boolean, MANIFEST_DISCOVERY_MS: bigint, NETWORK_TRANSFER_MS: bigint, VERIFICATION_MS: bigint, FLATSQL_MATERIALIZATION_MS: bigint, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_PUBLIC_KEYOffset: flatbuffers.Offset, SNAPSHOT_IDOffset: flatbuffers.Offset, HEADOffset: flatbuffers.Offset, CURSOROffset: flatbuffers.Offset, NEXT_CURSOROffset: flatbuffers.Offset, HIGH_WATER_MARKOffset: flatbuffers.Offset, QUERY_PROFILEOffset: flatbuffers.Offset, CHUNK_HASHOffset: flatbuffers.Offset, SYNC_PROTOCOLOffset: flatbuffers.Offset, SYNC_FILTEROffset: flatbuffers.Offset, VERIFIED_CHUNKSOffset: flatbuffers.Offset, LAST_SYNCED_ATOffset: flatbuffers.Offset, ERROROffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, DATASET_IDOffset: flatbuffers.Offset, CONNECTOR_IDOffset: flatbuffers.Offset, CHANNEL_IDOffset: flatbuffers.Offset, TOPICOffset: flatbuffers.Offset, SUBSCRIBED: boolean, PIN_POLICY: dssPinPolicy, VISIBILITYOffset: flatbuffers.Offset, ENCRYPTION_STATEOffset: flatbuffers.Offset, GRANT_STATEOffset: flatbuffers.Offset, FEED_HEADOffset: flatbuffers.Offset, LAST_PUBLICATION_CIDOffset: flatbuffers.Offset, LAST_PNM_CIDOffset: flatbuffers.Offset, DELTA_ROWS: bigint, LAST_SYNC_STARTED_AT: bigint, REQUESTED_ACTION: dssAction, ORIGIN_IDOffset: flatbuffers.Offset, RETENTION: dssRetention): flatbuffers.Offset;
    unpack(): DSST;
    unpackTo(_o: DSST): void;
}
export declare class DSST implements flatbuffers.IGeneratedObject {
    STATUS: dssSyncState;
    SYNCED_ROWS: bigint;
    TOTAL_ROWS: bigint;
    LOCAL_ROWS: bigint;
    PINNED_ROWS: bigint;
    MISSING_ROWS: bigint;
    CACHED_BYTES: bigint;
    PINNED_BYTES: bigint;
    DOWNLOADED_BYTES: bigint;
    DOWNLOAD_SPEED_BYTES_PER_SECOND: bigint;
    MEASURED_WIRE_SPEED_BYTES_PER_SECOND: bigint;
    HAS_WIRE_SPEED_UTILIZATION: boolean;
    WIRE_SPEED_UTILIZATION: number;
    WIRE_SPEED_TARGET: number;
    HAS_WIRE_SPEED_TARGET_MET: boolean;
    WIRE_SPEED_TARGET_MET: boolean;
    MANIFEST_DISCOVERY_MS: bigint;
    NETWORK_TRANSFER_MS: bigint;
    VERIFICATION_MS: bigint;
    FLATSQL_MATERIALIZATION_MS: bigint;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_PUBLIC_KEY: string | Uint8Array | null;
    SNAPSHOT_ID: string | Uint8Array | null;
    HEAD: string | Uint8Array | null;
    CURSOR: string | Uint8Array | null;
    NEXT_CURSOR: string | Uint8Array | null;
    HIGH_WATER_MARK: string | Uint8Array | null;
    QUERY_PROFILE: string | Uint8Array | null;
    CHUNK_HASH: string | Uint8Array | null;
    SYNC_PROTOCOL: string | Uint8Array | null;
    SYNC_FILTER: string | Uint8Array | null;
    VERIFIED_CHUNKS: (string)[];
    LAST_SYNCED_AT: string | Uint8Array | null;
    ERROR: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    DATASET_ID: string | Uint8Array | null;
    CONNECTOR_ID: string | Uint8Array | null;
    CHANNEL_ID: string | Uint8Array | null;
    TOPIC: string | Uint8Array | null;
    SUBSCRIBED: boolean;
    PIN_POLICY: dssPinPolicy;
    VISIBILITY: string | Uint8Array | null;
    ENCRYPTION_STATE: string | Uint8Array | null;
    GRANT_STATE: string | Uint8Array | null;
    FEED_HEAD: string | Uint8Array | null;
    LAST_PUBLICATION_CID: string | Uint8Array | null;
    LAST_PNM_CID: string | Uint8Array | null;
    DELTA_ROWS: bigint;
    LAST_SYNC_STARTED_AT: bigint;
    REQUESTED_ACTION: dssAction;
    ORIGIN_ID: string | Uint8Array | null;
    RETENTION: dssRetention;
    constructor(STATUS?: dssSyncState, SYNCED_ROWS?: bigint, TOTAL_ROWS?: bigint, LOCAL_ROWS?: bigint, PINNED_ROWS?: bigint, MISSING_ROWS?: bigint, CACHED_BYTES?: bigint, PINNED_BYTES?: bigint, DOWNLOADED_BYTES?: bigint, DOWNLOAD_SPEED_BYTES_PER_SECOND?: bigint, MEASURED_WIRE_SPEED_BYTES_PER_SECOND?: bigint, HAS_WIRE_SPEED_UTILIZATION?: boolean, WIRE_SPEED_UTILIZATION?: number, WIRE_SPEED_TARGET?: number, HAS_WIRE_SPEED_TARGET_MET?: boolean, WIRE_SPEED_TARGET_MET?: boolean, MANIFEST_DISCOVERY_MS?: bigint, NETWORK_TRANSFER_MS?: bigint, VERIFICATION_MS?: bigint, FLATSQL_MATERIALIZATION_MS?: bigint, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_PUBLIC_KEY?: string | Uint8Array | null, SNAPSHOT_ID?: string | Uint8Array | null, HEAD?: string | Uint8Array | null, CURSOR?: string | Uint8Array | null, NEXT_CURSOR?: string | Uint8Array | null, HIGH_WATER_MARK?: string | Uint8Array | null, QUERY_PROFILE?: string | Uint8Array | null, CHUNK_HASH?: string | Uint8Array | null, SYNC_PROTOCOL?: string | Uint8Array | null, SYNC_FILTER?: string | Uint8Array | null, VERIFIED_CHUNKS?: (string)[], LAST_SYNCED_AT?: string | Uint8Array | null, ERROR?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, DATASET_ID?: string | Uint8Array | null, CONNECTOR_ID?: string | Uint8Array | null, CHANNEL_ID?: string | Uint8Array | null, TOPIC?: string | Uint8Array | null, SUBSCRIBED?: boolean, PIN_POLICY?: dssPinPolicy, VISIBILITY?: string | Uint8Array | null, ENCRYPTION_STATE?: string | Uint8Array | null, GRANT_STATE?: string | Uint8Array | null, FEED_HEAD?: string | Uint8Array | null, LAST_PUBLICATION_CID?: string | Uint8Array | null, LAST_PNM_CID?: string | Uint8Array | null, DELTA_ROWS?: bigint, LAST_SYNC_STARTED_AT?: bigint, REQUESTED_ACTION?: dssAction, ORIGIN_ID?: string | Uint8Array | null, RETENTION?: dssRetention);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DSS.d.ts.map