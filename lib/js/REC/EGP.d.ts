import * as flatbuffers from 'flatbuffers';
import { EGPMember, EGPMemberT } from './EGPMember.js';
import { EGPProvenance, EGPProvenanceT } from './EGPProvenance.js';
import { EGPQuery, EGPQueryT } from './EGPQuery.js';
import { egpMembershipMode } from './egpMembershipMode.js';
/**
 * Entity Group
 */
export declare class EGP implements flatbuffers.IUnpackableObject<EGPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EGP;
    static getRootAsEGP(bb: flatbuffers.ByteBuffer, obj?: EGP): EGP;
    static getSizePrefixedRootAsEGP(bb: flatbuffers.ByteBuffer, obj?: EGP): EGP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of the group. Together with the publishing
     * key it is the group's identity across versions.
     */
    GROUP_ID(): string;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable group name.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable description of what the group collects.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `namespace:value` facets, sorted and deduplicated. See TAG GRAMMAR above.
     * This is the ONLY classification surface: there are no folders.
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * How membership was established.
     */
    MEMBERSHIP_MODE(): egpMembershipMode;
    /**
     * The membership assertions.
     */
    MEMBERS(index: number, obj?: EGPMember): EGPMember | null;
    membersLength(): number;
    /**
     * The generating query, when the group was saved from a search.
     */
    QUERY(obj?: EGPQuery): EGPQuery | null;
    /**
     * RFC 3339 UTC fixed-millisecond creation timestamp.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond update timestamp. With GROUP_ID and the
     * publishing key this is the version key: latest-wins per publisher.
     */
    UPDATED_AT(): string;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Dataset lineage and licence for the assertions in this group.
     */
    PROVENANCE(index: number, obj?: EGPProvenance): EGPProvenance | null;
    provenanceLength(): number;
    /**
     * Optional content identifier of the dataset the group was drawn from.
     */
    DATASET_CID(): string | null;
    DATASET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEGP(builder: flatbuffers.Builder): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMembershipMode(builder: flatbuffers.Builder, MEMBERSHIP_MODE: egpMembershipMode): void;
    static addMembers(builder: flatbuffers.Builder, MEMBERSOffset: flatbuffers.Offset): void;
    static createMembersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMembersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuery(builder: flatbuffers.Builder, QUERYOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static createProvenanceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProvenanceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDatasetCid(builder: flatbuffers.Builder, DATASET_CIDOffset: flatbuffers.Offset): void;
    static endEGP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEGPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEGPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EGPT;
    unpackTo(_o: EGPT): void;
}
export declare class EGPT implements flatbuffers.IGeneratedObject {
    GROUP_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    TAGS: (string)[];
    MEMBERSHIP_MODE: egpMembershipMode;
    MEMBERS: (EGPMemberT)[];
    QUERY: EGPQueryT | null;
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    PROVENANCE: (EGPProvenanceT)[];
    DATASET_CID: string | Uint8Array | null;
    constructor(GROUP_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, TAGS?: (string)[], MEMBERSHIP_MODE?: egpMembershipMode, MEMBERS?: (EGPMemberT)[], QUERY?: EGPQueryT | null, CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, PROVENANCE?: (EGPProvenanceT)[], DATASET_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EGP.d.ts.map