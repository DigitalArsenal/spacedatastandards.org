import * as flatbuffers from 'flatbuffers';
import { legacyCountryCode } from './legacyCountryCode.js';
/**
 * Legacy Country Code
 */
export declare class LCC implements flatbuffers.IUnpackableObject<LCCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LCC;
    static getRootAsLCC(bb: flatbuffers.ByteBuffer, obj?: LCC): LCC;
    static getSizePrefixedRootAsLCC(bb: flatbuffers.ByteBuffer, obj?: LCC): LCC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    OWNER(): legacyCountryCode;
    /**
     * Display name of the owner or source the code stands for.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Longer description of the owner or source.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True while the code is in current use by the publishing catalogue.
     */
    ACTIVE(): boolean;
    /**
     * URL of the reference table the row was retrieved from.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC time the reference table was retrieved.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLCC(builder: flatbuffers.Builder): void;
    static addOwner(builder: flatbuffers.Builder, OWNER: legacyCountryCode): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addActive(builder: flatbuffers.Builder, ACTIVE: boolean): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endLCC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLCC(builder: flatbuffers.Builder, OWNER: legacyCountryCode, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ACTIVE: boolean, SOURCE_URLOffset: flatbuffers.Offset, RETRIEVED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LCCT;
    unpackTo(_o: LCCT): void;
}
export declare class LCCT implements flatbuffers.IGeneratedObject {
    OWNER: legacyCountryCode;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ACTIVE: boolean;
    SOURCE_URL: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(OWNER?: legacyCountryCode, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ACTIVE?: boolean, SOURCE_URL?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LCC.d.ts.map