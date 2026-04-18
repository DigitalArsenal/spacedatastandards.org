import * as flatbuffers from 'flatbuffers';
/**
 * Canonicalization rule applied before hashing or signature verification.
 */
export declare class CanonicalizationRule implements flatbuffers.IUnpackableObject<CanonicalizationRuleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CanonicalizationRule;
    static getRootAsCanonicalizationRule(bb: flatbuffers.ByteBuffer, obj?: CanonicalizationRule): CanonicalizationRule;
    static getSizePrefixedRootAsCanonicalizationRule(bb: flatbuffers.ByteBuffer, obj?: CanonicalizationRule): CanonicalizationRule;
    /**
     * Schema version for the canonicalization contract.
     */
    version(): number;
    /**
     * Strip any custom section whose name starts with this prefix before
     * hashing the module for signature verification.
     */
    stripped_custom_section_prefix(): string | null;
    stripped_custom_section_prefix(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Logical container name used for the module bundle record within the
     * delivery artifact.
     */
    bundle_section_name(): string | null;
    bundle_section_name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hash function identifier, for example `sha256`.
     */
    hash_algorithm(): string | null;
    hash_algorithm(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCanonicalizationRule(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, version: number): void;
    static addStrippedCustomSectionPrefix(builder: flatbuffers.Builder, stripped_custom_section_prefixOffset: flatbuffers.Offset): void;
    static addBundleSectionName(builder: flatbuffers.Builder, bundle_section_nameOffset: flatbuffers.Offset): void;
    static addHashAlgorithm(builder: flatbuffers.Builder, hash_algorithmOffset: flatbuffers.Offset): void;
    static endCanonicalizationRule(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCanonicalizationRule(builder: flatbuffers.Builder, version: number, stripped_custom_section_prefixOffset: flatbuffers.Offset, bundle_section_nameOffset: flatbuffers.Offset, hash_algorithmOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CanonicalizationRuleT;
    unpackTo(_o: CanonicalizationRuleT): void;
}
export declare class CanonicalizationRuleT implements flatbuffers.IGeneratedObject {
    version: number;
    stripped_custom_section_prefix: string | Uint8Array | null;
    bundle_section_name: string | Uint8Array | null;
    hash_algorithm: string | Uint8Array | null;
    constructor(version?: number, stripped_custom_section_prefix?: string | Uint8Array | null, bundle_section_name?: string | Uint8Array | null, hash_algorithm?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CanonicalizationRule.d.ts.map