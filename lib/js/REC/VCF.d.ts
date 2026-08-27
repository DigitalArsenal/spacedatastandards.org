import * as flatbuffers from 'flatbuffers';
import { VCFAlias, VCFAliasT } from './VCFAlias.js';
import { VCFConformance, VCFConformanceT } from './VCFConformance.js';
import { VCFProperty, VCFPropertyT } from './VCFProperty.js';
import { VCFSubject, VCFSubjectT } from './VCFSubject.js';
import { vcfCardForm } from './vcfCardForm.js';
import { vcfPhotoPolicy } from './vcfPhotoPolicy.js';
/**
 * vCard Projection Card
 */
export declare class VCF implements flatbuffers.IUnpackableObject<VCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCF;
    static getRootAsVCF(bb: flatbuffers.ByteBuffer, obj?: VCF): VCF;
    static getSizePrefixedRootAsVCF(bb: flatbuffers.ByteBuffer, obj?: VCF): VCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of this card. Together with the publishing key
     * it is the card's identity across every republication.
     */
    CARD_ID(): string | null;
    CARD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Which canonical emission form this record carries.
     */
    FORM(): vcfCardForm;
    /**
     * The emitted card text VERBATIM: every octet an importer will read,
     * including folding and line terminators. Authoritative over PROPERTIES and
     * ALIASES in every disagreement.
     */
    CARD(): string;
    CARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Media type the card is served as, verbatim, including its charset
     * parameter.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The profile this card projects and the provenance binding them.
     */
    SUBJECT(obj?: VCFSubject): VCFSubject | null;
    /**
     * The publisher's parse of `CARD`, in canonical emission order.
     */
    PROPERTIES(index: number, obj?: VCFProperty): VCFProperty | null;
    propertiesLength(): number;
    /**
     * The identity address rows carried by `CARD`, in canonical emission order.
     */
    ALIASES(index: number, obj?: VCFAlias): VCFAlias | null;
    aliasesLength(): number;
    /**
     * How the card carries a portrait, if at all.
     */
    PHOTO_POLICY(): vcfPhotoPolicy;
    /**
     * Locator of the portrait content under URI_REFERENCE, verbatim as emitted.
     * Empty under every other policy.
     */
    PHOTO_URI(): string | null;
    PHOTO_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media type of the portrait content verbatim, when one is carried.
     */
    PHOTO_MEDIA_TYPE(): string | null;
    PHOTO_MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Emission facts and the digest two implementations compare.
     */
    CONFORMANCE(obj?: VCFConformance): VCFConformance | null;
    /**
     * Reverse-DNS identifier of the component that produced the card, so two
     * projectors are distinguishable when their bytes differ.
     */
    PRODUCER_ID(): string | null;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Build or release identifier of that component verbatim.
     */
    PRODUCER_VERSION(): string | null;
    PRODUCER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which the card was projected.
     */
    GENERATED_AT(): string | null;
    GENERATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp after which a consumer re-projects
     * from the profile rather than serving this card. Empty means no expiry.
     */
    EXPIRES_AT(): string | null;
    EXPIRES_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `namespace:value` facets, sorted and deduplicated. See TAG GRAMMAR above.
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Publisher note about this card; never a substitute for a field.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVCF(builder: flatbuffers.Builder): void;
    static addCardId(builder: flatbuffers.Builder, CARD_IDOffset: flatbuffers.Offset): void;
    static addForm(builder: flatbuffers.Builder, FORM: vcfCardForm): void;
    static addCard(builder: flatbuffers.Builder, CARDOffset: flatbuffers.Offset): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addSubject(builder: flatbuffers.Builder, SUBJECTOffset: flatbuffers.Offset): void;
    static addProperties(builder: flatbuffers.Builder, PROPERTIESOffset: flatbuffers.Offset): void;
    static createPropertiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPropertiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAliases(builder: flatbuffers.Builder, ALIASESOffset: flatbuffers.Offset): void;
    static createAliasesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAliasesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhotoPolicy(builder: flatbuffers.Builder, PHOTO_POLICY: vcfPhotoPolicy): void;
    static addPhotoUri(builder: flatbuffers.Builder, PHOTO_URIOffset: flatbuffers.Offset): void;
    static addPhotoMediaType(builder: flatbuffers.Builder, PHOTO_MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addConformance(builder: flatbuffers.Builder, CONFORMANCEOffset: flatbuffers.Offset): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addProducerVersion(builder: flatbuffers.Builder, PRODUCER_VERSIONOffset: flatbuffers.Offset): void;
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_ATOffset: flatbuffers.Offset): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_ATOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endVCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishVCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedVCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): VCFT;
    unpackTo(_o: VCFT): void;
}
export declare class VCFT implements flatbuffers.IGeneratedObject {
    CARD_ID: string | Uint8Array | null;
    FORM: vcfCardForm;
    CARD: string | Uint8Array | null;
    MEDIA_TYPE: string | Uint8Array | null;
    SUBJECT: VCFSubjectT | null;
    PROPERTIES: (VCFPropertyT)[];
    ALIASES: (VCFAliasT)[];
    PHOTO_POLICY: vcfPhotoPolicy;
    PHOTO_URI: string | Uint8Array | null;
    PHOTO_MEDIA_TYPE: string | Uint8Array | null;
    CONFORMANCE: VCFConformanceT | null;
    PRODUCER_ID: string | Uint8Array | null;
    PRODUCER_VERSION: string | Uint8Array | null;
    GENERATED_AT: string | Uint8Array | null;
    EXPIRES_AT: string | Uint8Array | null;
    TAGS: (string)[];
    NOTES: string | Uint8Array | null;
    constructor(CARD_ID?: string | Uint8Array | null, FORM?: vcfCardForm, CARD?: string | Uint8Array | null, MEDIA_TYPE?: string | Uint8Array | null, SUBJECT?: VCFSubjectT | null, PROPERTIES?: (VCFPropertyT)[], ALIASES?: (VCFAliasT)[], PHOTO_POLICY?: vcfPhotoPolicy, PHOTO_URI?: string | Uint8Array | null, PHOTO_MEDIA_TYPE?: string | Uint8Array | null, CONFORMANCE?: VCFConformanceT | null, PRODUCER_ID?: string | Uint8Array | null, PRODUCER_VERSION?: string | Uint8Array | null, GENERATED_AT?: string | Uint8Array | null, EXPIRES_AT?: string | Uint8Array | null, TAGS?: (string)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCF.d.ts.map