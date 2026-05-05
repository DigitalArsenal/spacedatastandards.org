import * as flatbuffers from 'flatbuffers';
import { ModuleBundleEntryRole } from './ModuleBundleEntryRole.js';
import { ModulePayloadEncoding } from './ModulePayloadEncoding.js';
/**
 * One payload carried inside the module bundle.
 */
export declare class ModuleBundleEntry implements flatbuffers.IUnpackableObject<ModuleBundleEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ModuleBundleEntry;
    static getRootAsModuleBundleEntry(bb: flatbuffers.ByteBuffer, obj?: ModuleBundleEntry): ModuleBundleEntry;
    static getSizePrefixedRootAsModuleBundleEntry(bb: flatbuffers.ByteBuffer, obj?: ModuleBundleEntry): ModuleBundleEntry;
    /**
     * Stable bundle-local identifier.
     */
    entry_id(): string;
    entry_id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * High-level semantic role of the payload.
     */
    role(): ModuleBundleEntryRole;
    /**
     * Optional logical section name within the bundle, for example
     * `sds.authorization`.
     */
    section_name(): string | null;
    section_name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SDS/shared-module schema identity when the payload is itself a
     * FlatBuffer. Stored as canonical JSON text for portability.
     */
    type_ref(): string | null;
    type_ref(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoding used for `payload`.
     */
    payload_encoding(): ModulePayloadEncoding;
    /**
     * Optional media type for transitional payloads such as JSON envelopes.
     */
    media_type(): string | null;
    media_type(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Implementation-defined bit flags for signed/encrypted/compressed state.
     */
    flags(): number;
    /**
     * SHA-256 of the payload bytes.
     */
    sha256(index: number): number | null;
    sha256Length(): number;
    sha256Array(): Uint8Array | null;
    /**
     * Embedded payload bytes. For single-file deployment this should be
     * populated for every entry.
     */
    payload(index: number): number | null;
    payloadLength(): number;
    payloadArray(): Uint8Array | null;
    /**
     * Human-readable description for tooling and diagnostics.
     */
    description(): string | null;
    description(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startModuleBundleEntry(builder: flatbuffers.Builder): void;
    static addEntryId(builder: flatbuffers.Builder, entry_idOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, role: ModuleBundleEntryRole): void;
    static addSectionName(builder: flatbuffers.Builder, section_nameOffset: flatbuffers.Offset): void;
    static addTypeRef(builder: flatbuffers.Builder, type_refOffset: flatbuffers.Offset): void;
    static addPayloadEncoding(builder: flatbuffers.Builder, payload_encoding: ModulePayloadEncoding): void;
    static addMediaType(builder: flatbuffers.Builder, media_typeOffset: flatbuffers.Offset): void;
    static addFlags(builder: flatbuffers.Builder, flags: number): void;
    static addSha256(builder: flatbuffers.Builder, sha256Offset: flatbuffers.Offset): void;
    static createSha256Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayload(builder: flatbuffers.Builder, payloadOffset: flatbuffers.Offset): void;
    static createPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDescription(builder: flatbuffers.Builder, descriptionOffset: flatbuffers.Offset): void;
    static endModuleBundleEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createModuleBundleEntry(builder: flatbuffers.Builder, entry_idOffset: flatbuffers.Offset, role: ModuleBundleEntryRole, section_nameOffset: flatbuffers.Offset, type_refOffset: flatbuffers.Offset, payload_encoding: ModulePayloadEncoding, media_typeOffset: flatbuffers.Offset, flags: number, sha256Offset: flatbuffers.Offset, payloadOffset: flatbuffers.Offset, descriptionOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ModuleBundleEntryT;
    unpackTo(_o: ModuleBundleEntryT): void;
}
export declare class ModuleBundleEntryT implements flatbuffers.IGeneratedObject {
    entry_id: string | Uint8Array | null;
    role: ModuleBundleEntryRole;
    section_name: string | Uint8Array | null;
    type_ref: string | Uint8Array | null;
    payload_encoding: ModulePayloadEncoding;
    media_type: string | Uint8Array | null;
    flags: number;
    sha256: (number)[];
    payload: (number)[];
    description: string | Uint8Array | null;
    constructor(entry_id?: string | Uint8Array | null, role?: ModuleBundleEntryRole, section_name?: string | Uint8Array | null, type_ref?: string | Uint8Array | null, payload_encoding?: ModulePayloadEncoding, media_type?: string | Uint8Array | null, flags?: number, sha256?: (number)[], payload?: (number)[], description?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ModuleBundleEntry.d.ts.map