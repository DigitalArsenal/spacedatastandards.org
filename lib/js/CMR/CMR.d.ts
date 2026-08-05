import * as flatbuffers from 'flatbuffers';
import { CMRProvenance, CMRProvenanceT } from './CMRProvenance.js';
import { cmrMembershipState } from './cmrMembershipState.js';
/**
 * Constellation Membership Record.
 *
 * One record asserts that one NORAD-catalogued object belongs (or formerly
 * belonged) to one named constellation. Record sets are therefore directly
 * keyable and queryable by NORAD_CAT_ID in FlatSQL. The record joins to $CAT
 * by NORAD_CAT_ID and OBJECT_ID and may join through $CAT.BUS_ID to $BUS; it
 * does not duplicate catalogue or bus properties.
 *
 * CONSTELLATION_ID and OPERATOR_ID are publisher-stable identifiers. Display
 * names and aliases are carried separately so consumers never use branding as
 * identity. Every emitted record names the independent source assertions used
 * to establish membership, operator, and catalogue joins.
 */
export declare class CMR implements flatbuffers.IUnpackableObject<CMRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMR;
    static getRootAsCMR(bb: flatbuffers.ByteBuffer, obj?: CMR): CMR;
    static getSizePrefixedRootAsCMR(bb: flatbuffers.ByteBuffer, obj?: CMR): CMR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this assertion, unique within its record
     * set. Recommended form: "<constellation-id>:<norad-cat-id>".
     */
    MEMBERSHIP_ID(): string;
    MEMBERSHIP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * NORAD catalogue number. Zero is invalid for a published record.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator copied verbatim from the joined $CAT when known.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publisher-stable, lowercase identifier for the constellation/group.
     */
    CONSTELLATION_ID(): string;
    CONSTELLATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable constellation name as published by the authoritative
     * membership source.
     */
    CONSTELLATION_NAME(): string;
    CONSTELLATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Alternate constellation names, brands, and search terms. Values are
     * verbatim; consumers must not treat aliases as stable identifiers.
     */
    CONSTELLATION_ALIASES(index: number): string;
    CONSTELLATION_ALIASES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    constellationAliasesLength(): number;
    /**
     * Publisher-stable operator/owner identifier. Empty when no source supports
     * one; never synthesized from a display name.
     */
    OPERATOR_ID(): string | null;
    OPERATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator/owner display name verbatim from the cited source.
     */
    OPERATOR_NAME(): string | null;
    OPERATOR_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alternate operator names and brands, verbatim.
     */
    OPERATOR_ALIASES(index: number): string;
    OPERATOR_ALIASES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    operatorAliasesLength(): number;
    STATE(): cmrMembershipState;
    /**
     * RFC 3339 UTC fixed-millisecond instant at which this reconciled assertion
     * was emitted.
     */
    UPDATED_AT(): string;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Independent evidence used to construct this assertion. At least one
     * MEMBERSHIP entry is required by the publishing contract.
     */
    PROVENANCE(index: number, obj?: CMRProvenance): CMRProvenance | null;
    provenanceLength(): number;
    static startCMR(builder: flatbuffers.Builder): void;
    static addMembershipId(builder: flatbuffers.Builder, MEMBERSHIP_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addConstellationId(builder: flatbuffers.Builder, CONSTELLATION_IDOffset: flatbuffers.Offset): void;
    static addConstellationName(builder: flatbuffers.Builder, CONSTELLATION_NAMEOffset: flatbuffers.Offset): void;
    static addConstellationAliases(builder: flatbuffers.Builder, CONSTELLATION_ALIASESOffset: flatbuffers.Offset): void;
    static createConstellationAliasesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConstellationAliasesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOperatorId(builder: flatbuffers.Builder, OPERATOR_IDOffset: flatbuffers.Offset): void;
    static addOperatorName(builder: flatbuffers.Builder, OPERATOR_NAMEOffset: flatbuffers.Offset): void;
    static addOperatorAliases(builder: flatbuffers.Builder, OPERATOR_ALIASESOffset: flatbuffers.Offset): void;
    static createOperatorAliasesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOperatorAliasesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addState(builder: flatbuffers.Builder, STATE: cmrMembershipState): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static createProvenanceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProvenanceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCMR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCMRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCMRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCMR(builder: flatbuffers.Builder, MEMBERSHIP_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, CONSTELLATION_IDOffset: flatbuffers.Offset, CONSTELLATION_NAMEOffset: flatbuffers.Offset, CONSTELLATION_ALIASESOffset: flatbuffers.Offset, OPERATOR_IDOffset: flatbuffers.Offset, OPERATOR_NAMEOffset: flatbuffers.Offset, OPERATOR_ALIASESOffset: flatbuffers.Offset, STATE: cmrMembershipState, UPDATED_ATOffset: flatbuffers.Offset, PROVENANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMRT;
    unpackTo(_o: CMRT): void;
}
export declare class CMRT implements flatbuffers.IGeneratedObject {
    MEMBERSHIP_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    CONSTELLATION_ID: string | Uint8Array | null;
    CONSTELLATION_NAME: string | Uint8Array | null;
    CONSTELLATION_ALIASES: (string)[];
    OPERATOR_ID: string | Uint8Array | null;
    OPERATOR_NAME: string | Uint8Array | null;
    OPERATOR_ALIASES: (string)[];
    STATE: cmrMembershipState;
    UPDATED_AT: string | Uint8Array | null;
    PROVENANCE: (CMRProvenanceT)[];
    constructor(MEMBERSHIP_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, CONSTELLATION_ID?: string | Uint8Array | null, CONSTELLATION_NAME?: string | Uint8Array | null, CONSTELLATION_ALIASES?: (string)[], OPERATOR_ID?: string | Uint8Array | null, OPERATOR_NAME?: string | Uint8Array | null, OPERATOR_ALIASES?: (string)[], STATE?: cmrMembershipState, UPDATED_AT?: string | Uint8Array | null, PROVENANCE?: (CMRProvenanceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMR.d.ts.map