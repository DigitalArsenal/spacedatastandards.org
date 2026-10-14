import * as flatbuffers from 'flatbuffers';
import { OILConflict, OILConflictT } from './OILConflict.js';
import { OILLink, OILLinkT } from './OILLink.js';
/**
 * Object Identity Link - one crosswalk of candidate links.
 */
export declare class OIL implements flatbuffers.IUnpackableObject<OILT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OIL;
    static getRootAsOIL(bb: flatbuffers.ByteBuffer, obj?: OIL): OIL;
    static getSizePrefixedRootAsOIL(bb: flatbuffers.ByteBuffer, obj?: OIL): OIL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Provider of the crosswalk, e.g. "vimpel".
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Kind of crosswalk, e.g. "datefirst".
     */
    KIND(): string | null;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Namespace of every LEFT identifier, when uniform.
     */
    LEFT_NAMESPACE(): string | null;
    LEFT_NAMESPACE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Namespace of every RIGHT identifier, when uniform.
     */
    RIGHT_NAMESPACE(): string | null;
    RIGHT_NAMESPACE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Header line of the source file as printed, e.g.
     * "Nvym t_det_v Nnor t_det_n".
     */
    HEADER(): string | null;
    HEADER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 hex digest of the source edition (the RECORD_ID of its links).
     */
    SHA256(): string | null;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size of the source edition, bytes.
     */
    BYTES(): bigint;
    /**
     * Data rows read (header excluded).
     */
    ROWS(): number;
    /**
     * Rows that repeated an earlier pair.
     */
    DUPLICATE_LINES(): number;
    /**
     * Distinct links (LINKS length).
     */
    LINK_COUNT(): number;
    /**
     * Links in one-to-one groups.
     */
    CLEAN_COUNT(): number;
    /**
     * Links in groups that are not one-to-one.
     */
    AMBIGUOUS_COUNT(): number;
    /**
     * Distinct left identifiers.
     */
    LEFT_ID_COUNT(): number;
    /**
     * Distinct right identifiers.
     */
    RIGHT_ID_COUNT(): number;
    /**
     * Links whose repeated declarations give different dates.
     */
    DATES_DIFFER_COUNT(): number;
    /**
     * Links with a first-detection date that is not a valid date.
     */
    UNREADABLE_DATE_COUNT(): number;
    LINKS(index: number, obj?: OILLink): OILLink | null;
    linksLength(): number;
    CONFLICTS(index: number, obj?: OILConflict): OILConflict | null;
    conflictsLength(): number;
    /**
     * Unix milliseconds when the crosswalk was generated; 0 = unknown.
     */
    GENERATED_AT_MS(): bigint;
    static startOIL(builder: flatbuffers.Builder): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addLeftNamespace(builder: flatbuffers.Builder, LEFT_NAMESPACEOffset: flatbuffers.Offset): void;
    static addRightNamespace(builder: flatbuffers.Builder, RIGHT_NAMESPACEOffset: flatbuffers.Offset): void;
    static addHeader(builder: flatbuffers.Builder, HEADEROffset: flatbuffers.Offset): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addBytes(builder: flatbuffers.Builder, BYTES: bigint): void;
    static addRows(builder: flatbuffers.Builder, ROWS: number): void;
    static addDuplicateLines(builder: flatbuffers.Builder, DUPLICATE_LINES: number): void;
    static addLinkCount(builder: flatbuffers.Builder, LINK_COUNT: number): void;
    static addCleanCount(builder: flatbuffers.Builder, CLEAN_COUNT: number): void;
    static addAmbiguousCount(builder: flatbuffers.Builder, AMBIGUOUS_COUNT: number): void;
    static addLeftIdCount(builder: flatbuffers.Builder, LEFT_ID_COUNT: number): void;
    static addRightIdCount(builder: flatbuffers.Builder, RIGHT_ID_COUNT: number): void;
    static addDatesDifferCount(builder: flatbuffers.Builder, DATES_DIFFER_COUNT: number): void;
    static addUnreadableDateCount(builder: flatbuffers.Builder, UNREADABLE_DATE_COUNT: number): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConflicts(builder: flatbuffers.Builder, CONFLICTSOffset: flatbuffers.Offset): void;
    static createConflictsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConflictsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static endOIL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOILBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOILBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOIL(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset, KINDOffset: flatbuffers.Offset, LEFT_NAMESPACEOffset: flatbuffers.Offset, RIGHT_NAMESPACEOffset: flatbuffers.Offset, HEADEROffset: flatbuffers.Offset, SHA256Offset: flatbuffers.Offset, BYTES: bigint, ROWS: number, DUPLICATE_LINES: number, LINK_COUNT: number, CLEAN_COUNT: number, AMBIGUOUS_COUNT: number, LEFT_ID_COUNT: number, RIGHT_ID_COUNT: number, DATES_DIFFER_COUNT: number, UNREADABLE_DATE_COUNT: number, LINKSOffset: flatbuffers.Offset, CONFLICTSOffset: flatbuffers.Offset, GENERATED_AT_MS: bigint): flatbuffers.Offset;
    unpack(): OILT;
    unpackTo(_o: OILT): void;
}
export declare class OILT implements flatbuffers.IGeneratedObject {
    PROVIDER: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    LEFT_NAMESPACE: string | Uint8Array | null;
    RIGHT_NAMESPACE: string | Uint8Array | null;
    HEADER: string | Uint8Array | null;
    SHA256: string | Uint8Array | null;
    BYTES: bigint;
    ROWS: number;
    DUPLICATE_LINES: number;
    LINK_COUNT: number;
    CLEAN_COUNT: number;
    AMBIGUOUS_COUNT: number;
    LEFT_ID_COUNT: number;
    RIGHT_ID_COUNT: number;
    DATES_DIFFER_COUNT: number;
    UNREADABLE_DATE_COUNT: number;
    LINKS: (OILLinkT)[];
    CONFLICTS: (OILConflictT)[];
    GENERATED_AT_MS: bigint;
    constructor(PROVIDER?: string | Uint8Array | null, KIND?: string | Uint8Array | null, LEFT_NAMESPACE?: string | Uint8Array | null, RIGHT_NAMESPACE?: string | Uint8Array | null, HEADER?: string | Uint8Array | null, SHA256?: string | Uint8Array | null, BYTES?: bigint, ROWS?: number, DUPLICATE_LINES?: number, LINK_COUNT?: number, CLEAN_COUNT?: number, AMBIGUOUS_COUNT?: number, LEFT_ID_COUNT?: number, RIGHT_ID_COUNT?: number, DATES_DIFFER_COUNT?: number, UNREADABLE_DATE_COUNT?: number, LINKS?: (OILLinkT)[], CONFLICTS?: (OILConflictT)[], GENERATED_AT_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OIL.d.ts.map