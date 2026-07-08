import * as flatbuffers from 'flatbuffers';
import { PRRMetadataEntry, PRRMetadataEntryT } from './PRRMetadataEntry.js';
import { peerRegistryTrustCategory } from './peerRegistryTrustCategory.js';
export declare class PRR implements flatbuffers.IUnpackableObject<PRRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRR;
    static getRootAsPRR(bb: flatbuffers.ByteBuffer, obj?: PRR): PRR;
    static getSizePrefixedRootAsPRR(bb: flatbuffers.ByteBuffer, obj?: PRR): PRR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * libp2p peer ID.
     */
    PEER_ID(): string;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Known libp2p/IPFS multiaddresses for this peer.
     */
    MULTIFORMAT_ADDRESS(index: number): string;
    MULTIFORMAT_ADDRESS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    multiformatAddressLength(): number;
    /**
     * Trust level assigned to this peer by the local registry.
     */
    TRUST_LEVEL(): peerRegistryTrustCategory;
    /**
     * Optional display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional organization name.
     */
    ORGANIZATION(): string | null;
    ORGANIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer group names this peer belongs to.
     */
    GROUPS(index: number): string;
    GROUPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    groupsLength(): number;
    /**
     * Operator notes for this peer.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp in milliseconds when this peer was added.
     */
    ADDED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this peer was last observed.
     */
    LAST_SEEN(): bigint;
    /**
     * Unix timestamp in milliseconds when this peer last connected.
     */
    LAST_CONNECTED(): bigint;
    /**
     * Number of successful connections observed by this node.
     */
    CONNECTION_COUNT(): bigint;
    /**
     * Number of messages received from this peer.
     */
    MESSAGES_RECEIVED(): bigint;
    /**
     * Number of messages sent to this peer.
     */
    MESSAGES_SENT(): bigint;
    /**
     * Number of bytes received from this peer.
     */
    BYTES_RECEIVED(): bigint;
    /**
     * Number of bytes sent to this peer.
     */
    BYTES_SENT(): bigint;
    /**
     * Optional EPM.fbs bytes for the peer identity profile.
     */
    EPM_DATA(index: number): number | null;
    epmDataLength(): number;
    epmDataArray(): Uint8Array | null;
    /**
     * Optional vCard projection for compatibility views.
     */
    VCARD_DATA(): string | null;
    VCARD_DATA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional peer metadata as string key/value entries.
     */
    METADATA(index: number, obj?: PRRMetadataEntry): PRRMetadataEntry | null;
    metadataLength(): number;
    /**
     * Unix timestamp in milliseconds when this registry record was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * True when this record tombstones the peer from the current registry.
     */
    DELETED(): boolean;
    /**
     * Peer ID of the node/provider that issued this registry record.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the peer registry record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startPRR(builder: flatbuffers.Builder): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static createMultiformatAddressVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiformatAddressVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrustLevel(builder: flatbuffers.Builder, TRUST_LEVEL: peerRegistryTrustCategory): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addOrganization(builder: flatbuffers.Builder, ORGANIZATIONOffset: flatbuffers.Offset): void;
    static addGroups(builder: flatbuffers.Builder, GROUPSOffset: flatbuffers.Offset): void;
    static createGroupsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static addAddedAt(builder: flatbuffers.Builder, ADDED_AT: bigint): void;
    static addLastSeen(builder: flatbuffers.Builder, LAST_SEEN: bigint): void;
    static addLastConnected(builder: flatbuffers.Builder, LAST_CONNECTED: bigint): void;
    static addConnectionCount(builder: flatbuffers.Builder, CONNECTION_COUNT: bigint): void;
    static addMessagesReceived(builder: flatbuffers.Builder, MESSAGES_RECEIVED: bigint): void;
    static addMessagesSent(builder: flatbuffers.Builder, MESSAGES_SENT: bigint): void;
    static addBytesReceived(builder: flatbuffers.Builder, BYTES_RECEIVED: bigint): void;
    static addBytesSent(builder: flatbuffers.Builder, BYTES_SENT: bigint): void;
    static addEpmData(builder: flatbuffers.Builder, EPM_DATAOffset: flatbuffers.Offset): void;
    static createEpmDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEpmDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVcardData(builder: flatbuffers.Builder, VCARD_DATAOffset: flatbuffers.Offset): void;
    static addMetadata(builder: flatbuffers.Builder, METADATAOffset: flatbuffers.Offset): void;
    static createMetadataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMetadataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPRRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPRRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPRR(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, TRUST_LEVEL: peerRegistryTrustCategory, NAMEOffset: flatbuffers.Offset, ORGANIZATIONOffset: flatbuffers.Offset, GROUPSOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset, ADDED_AT: bigint, LAST_SEEN: bigint, LAST_CONNECTED: bigint, CONNECTION_COUNT: bigint, MESSAGES_RECEIVED: bigint, MESSAGES_SENT: bigint, BYTES_RECEIVED: bigint, BYTES_SENT: bigint, EPM_DATAOffset: flatbuffers.Offset, VCARD_DATAOffset: flatbuffers.Offset, METADATAOffset: flatbuffers.Offset, UPDATED_AT: bigint, DELETED: boolean, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRRT;
    unpackTo(_o: PRRT): void;
}
export declare class PRRT implements flatbuffers.IGeneratedObject {
    PEER_ID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: (string)[];
    TRUST_LEVEL: peerRegistryTrustCategory;
    NAME: string | Uint8Array | null;
    ORGANIZATION: string | Uint8Array | null;
    GROUPS: (string)[];
    NOTES: string | Uint8Array | null;
    ADDED_AT: bigint;
    LAST_SEEN: bigint;
    LAST_CONNECTED: bigint;
    CONNECTION_COUNT: bigint;
    MESSAGES_RECEIVED: bigint;
    MESSAGES_SENT: bigint;
    BYTES_RECEIVED: bigint;
    BYTES_SENT: bigint;
    EPM_DATA: (number)[];
    VCARD_DATA: string | Uint8Array | null;
    METADATA: (PRRMetadataEntryT)[];
    UPDATED_AT: bigint;
    DELETED: boolean;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(PEER_ID?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: (string)[], TRUST_LEVEL?: peerRegistryTrustCategory, NAME?: string | Uint8Array | null, ORGANIZATION?: string | Uint8Array | null, GROUPS?: (string)[], NOTES?: string | Uint8Array | null, ADDED_AT?: bigint, LAST_SEEN?: bigint, LAST_CONNECTED?: bigint, CONNECTION_COUNT?: bigint, MESSAGES_RECEIVED?: bigint, MESSAGES_SENT?: bigint, BYTES_RECEIVED?: bigint, BYTES_SENT?: bigint, EPM_DATA?: (number)[], VCARD_DATA?: string | Uint8Array | null, METADATA?: (PRRMetadataEntryT)[], UPDATED_AT?: bigint, DELETED?: boolean, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRR.d.ts.map