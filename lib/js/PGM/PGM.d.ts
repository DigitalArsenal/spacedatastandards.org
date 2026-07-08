import * as flatbuffers from 'flatbuffers';
import { PGMMetadataEntry, PGMMetadataEntryT } from './PGMMetadataEntry.js';
import { peerGroupTrustCategory } from './peerGroupTrustCategory.js';
export declare class PGM implements flatbuffers.IUnpackableObject<PGMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PGM;
    static getRootAsPGM(bb: flatbuffers.ByteBuffer, obj?: PGM): PGM;
    static getSizePrefixedRootAsPGM(bb: flatbuffers.ByteBuffer, obj?: PGM): PGM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique peer group name.
     */
    GROUP_NAME(): string;
    GROUP_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional group description.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default trust level for peers in this group.
     */
    DEFAULT_TRUST_LEVEL(): peerGroupTrustCategory;
    /**
     * libp2p peer IDs that belong to this group.
     */
    MEMBERS(index: number): string;
    MEMBERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    membersLength(): number;
    /**
     * Unix timestamp in milliseconds when this group was created.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this group record was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * Additional group metadata as string key/value entries.
     */
    METADATA(index: number, obj?: PGMMetadataEntry): PGMMetadataEntry | null;
    metadataLength(): number;
    /**
     * True when this record tombstones the group from the current registry.
     */
    DELETED(): boolean;
    /**
     * Peer ID of the node/provider that issued this group record.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the peer group record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startPGM(builder: flatbuffers.Builder): void;
    static addGroupName(builder: flatbuffers.Builder, GROUP_NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDefaultTrustLevel(builder: flatbuffers.Builder, DEFAULT_TRUST_LEVEL: peerGroupTrustCategory): void;
    static addMembers(builder: flatbuffers.Builder, MEMBERSOffset: flatbuffers.Offset): void;
    static createMembersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMembersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addMetadata(builder: flatbuffers.Builder, METADATAOffset: flatbuffers.Offset): void;
    static createMetadataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMetadataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPGM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPGMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPGMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPGM(builder: flatbuffers.Builder, GROUP_NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, DEFAULT_TRUST_LEVEL: peerGroupTrustCategory, MEMBERSOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, METADATAOffset: flatbuffers.Offset, DELETED: boolean, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PGMT;
    unpackTo(_o: PGMT): void;
}
export declare class PGMT implements flatbuffers.IGeneratedObject {
    GROUP_NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    DEFAULT_TRUST_LEVEL: peerGroupTrustCategory;
    MEMBERS: (string)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    METADATA: (PGMMetadataEntryT)[];
    DELETED: boolean;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(GROUP_NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, DEFAULT_TRUST_LEVEL?: peerGroupTrustCategory, MEMBERS?: (string)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, METADATA?: (PGMMetadataEntryT)[], DELETED?: boolean, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PGM.d.ts.map