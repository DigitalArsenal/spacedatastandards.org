import * as flatbuffers from 'flatbuffers';
import { CanonicalizationRule, CanonicalizationRuleT } from './CanonicalizationRule.js';
import { ModuleBundleEntry, ModuleBundleEntryT } from './ModuleBundleEntry.js';
/**
 * Metadata stored in the REC trailer for one module delivery artifact.
 */
export declare class MBL implements flatbuffers.IUnpackableObject<MBLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MBL;
    static getRootAsMBL(bb: flatbuffers.ByteBuffer, obj?: MBL): MBL;
    static getSizePrefixedRootAsMBL(bb: flatbuffers.ByteBuffer, obj?: MBL): MBL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Bundle schema version.
     */
    bundle_version(): number;
    /**
     * Human-readable package format label.
     */
    module_format(): string | null;
    module_format(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Canonicalization rule used to compute module hashes.
     */
    canonicalization(obj?: CanonicalizationRule): CanonicalizationRule | null;
    /**
     * SHA-256 of the wasm module after stripping SDS-owned custom sections.
     */
    canonical_module_hash(index: number): number | null;
    canonicalModuleHashLength(): number;
    canonicalModuleHashArray(): Uint8Array | null;
    /**
     * SHA-256 of the canonical plugin manifest bytes.
     */
    manifest_hash(index: number): number | null;
    manifestHashLength(): number;
    manifestHashArray(): Uint8Array | null;
    /**
     * Legacy ABI export retained for backward compatibility.
     */
    manifest_export_symbol(): string | null;
    manifest_export_symbol(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Legacy ABI export retained for backward compatibility.
     */
    manifest_size_symbol(): string | null;
    manifest_size_symbol(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Payloads embedded in the bundle.
     */
    entries(index: number, obj?: ModuleBundleEntry): ModuleBundleEntry | null;
    entriesLength(): number;
    static startMBL(builder: flatbuffers.Builder): void;
    static addBundleVersion(builder: flatbuffers.Builder, bundle_version: number): void;
    static addModuleFormat(builder: flatbuffers.Builder, module_formatOffset: flatbuffers.Offset): void;
    static addCanonicalization(builder: flatbuffers.Builder, canonicalizationOffset: flatbuffers.Offset): void;
    static addCanonicalModuleHash(builder: flatbuffers.Builder, canonical_module_hashOffset: flatbuffers.Offset): void;
    static createCanonicalModuleHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalModuleHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManifestHash(builder: flatbuffers.Builder, manifest_hashOffset: flatbuffers.Offset): void;
    static createManifestHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startManifestHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManifestExportSymbol(builder: flatbuffers.Builder, manifest_export_symbolOffset: flatbuffers.Offset): void;
    static addManifestSizeSymbol(builder: flatbuffers.Builder, manifest_size_symbolOffset: flatbuffers.Offset): void;
    static addEntries(builder: flatbuffers.Builder, entriesOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMBL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMBLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMBLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MBLT;
    unpackTo(_o: MBLT): void;
}
export declare class MBLT implements flatbuffers.IGeneratedObject {
    bundle_version: number;
    module_format: string | Uint8Array | null;
    canonicalization: CanonicalizationRuleT | null;
    canonical_module_hash: (number)[];
    manifest_hash: (number)[];
    manifest_export_symbol: string | Uint8Array | null;
    manifest_size_symbol: string | Uint8Array | null;
    entries: (ModuleBundleEntryT)[];
    constructor(bundle_version?: number, module_format?: string | Uint8Array | null, canonicalization?: CanonicalizationRuleT | null, canonical_module_hash?: (number)[], manifest_hash?: (number)[], manifest_export_symbol?: string | Uint8Array | null, manifest_size_symbol?: string | Uint8Array | null, entries?: (ModuleBundleEntryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MBL.d.ts.map