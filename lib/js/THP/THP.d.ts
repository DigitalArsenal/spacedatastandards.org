import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { THPParameter, THPParameterT } from './THPParameter.js';
import { THPReference, THPReferenceT } from './THPReference.js';
import { thpAccessTier } from './thpAccessTier.js';
import { thpThreatCategory } from './thpThreatCategory.js';
/**
 * Threat Profile
 */
export declare class THP implements flatbuffers.IUnpackableObject<THPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): THP;
    static getRootAsTHP(bb: flatbuffers.ByteBuffer, obj?: THP): THP;
    static getSizePrefixedRootAsTHP(bb: flatbuffers.ByteBuffer, obj?: THP): THP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this threat profile.
     */
    THP_ID(): string;
    THP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable display name of the threat profile.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Summary description of the threat profile and scope.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Threat phenomenology category.
     */
    CATEGORY(): thpThreatCategory;
    /**
     * Minimum access tier required to consume this threat profile.
     */
    ACCESS_TIER(): thpAccessTier;
    /**
     * True when the threat profile is active for screening runs.
     */
    ACTIVE(): boolean;
    /**
     * Four-character SDS file identifier including "$" of the primary linked record.
     */
    LINKED_SCHEMA(): string | null;
    LINKED_SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Canonical record identifier of the primary linked SDS record.
     */
    LINKED_RECORD_ID(): string | null;
    LINKED_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional NORAD catalog number of the primary linked space object.
     */
    LINKED_NORAD_CAT_ID(): number;
    /**
     * Additional linked SDS records referenced by ($SCHEMA_FILE_ID, RECORD_ID).
     */
    ADDITIONAL_REFS(index: number, obj?: THPReference): THPReference | null;
    additionalRefsLength(): number;
    /**
     * Typed capability and threshold parameters with per-parameter provenance.
     */
    PARAMETERS(index: number, obj?: THPParameter): THPParameter | null;
    parametersLength(): number;
    /**
     * Record-level source and build provenance.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    /**
     * Creation timestamp, RFC 3339 UTC.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last update timestamp, RFC 3339 UTC.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional Ed25519 signature bytes over the canonical threat lane payload.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startTHP(builder: flatbuffers.Builder): void;
    static addThpId(builder: flatbuffers.Builder, THP_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: thpThreatCategory): void;
    static addAccessTier(builder: flatbuffers.Builder, ACCESS_TIER: thpAccessTier): void;
    static addActive(builder: flatbuffers.Builder, ACTIVE: boolean): void;
    static addLinkedSchema(builder: flatbuffers.Builder, LINKED_SCHEMAOffset: flatbuffers.Offset): void;
    static addLinkedRecordId(builder: flatbuffers.Builder, LINKED_RECORD_IDOffset: flatbuffers.Offset): void;
    static addLinkedNoradCatId(builder: flatbuffers.Builder, LINKED_NORAD_CAT_ID: number): void;
    static addAdditionalRefs(builder: flatbuffers.Builder, ADDITIONAL_REFSOffset: flatbuffers.Offset): void;
    static createAdditionalRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAdditionalRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTHP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTHPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTHPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): THPT;
    unpackTo(_o: THPT): void;
}
export declare class THPT implements flatbuffers.IGeneratedObject {
    THP_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    CATEGORY: thpThreatCategory;
    ACCESS_TIER: thpAccessTier;
    ACTIVE: boolean;
    LINKED_SCHEMA: string | Uint8Array | null;
    LINKED_RECORD_ID: string | Uint8Array | null;
    LINKED_NORAD_CAT_ID: number;
    ADDITIONAL_REFS: (THPReferenceT)[];
    PARAMETERS: (THPParameterT)[];
    PROVENANCE: PVNT | null;
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(THP_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, CATEGORY?: thpThreatCategory, ACCESS_TIER?: thpAccessTier, ACTIVE?: boolean, LINKED_SCHEMA?: string | Uint8Array | null, LINKED_RECORD_ID?: string | Uint8Array | null, LINKED_NORAD_CAT_ID?: number, ADDITIONAL_REFS?: (THPReferenceT)[], PARAMETERS?: (THPParameterT)[], PROVENANCE?: PVNT | null, CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=THP.d.ts.map