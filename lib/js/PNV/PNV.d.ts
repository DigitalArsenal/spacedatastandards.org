import * as flatbuffers from 'flatbuffers';
import { PNVEntry, PNVEntryT } from './PNVEntry.js';
/**
 * Publication Verification - one node's verdicts on received notices.
 */
export declare class PNV implements flatbuffers.IUnpackableObject<PNVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNV;
    static getRootAsPNV(bb: flatbuffers.ByteBuffer, obj?: PNV): PNV;
    static getSizePrefixedRootAsPNV(bb: flatbuffers.ByteBuffer, obj?: PNV): PNV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the node that verified.
     */
    VERIFIER_PEER_ID(): string | null;
    VERIFIER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds when this set was generated.
     */
    GENERATED_AT_MS(): bigint;
    ENTRIES(index: number, obj?: PNVEntry): PNVEntry | null;
    entriesLength(): number;
    /**
     * Entity tag of this set, for conditional requests.
     */
    ETAG(): string | null;
    ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNV(builder: flatbuffers.Builder): void;
    static addVerifierPeerId(builder: flatbuffers.Builder, VERIFIER_PEER_IDOffset: flatbuffers.Offset): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addEntries(builder: flatbuffers.Builder, ENTRIESOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEtag(builder: flatbuffers.Builder, ETAGOffset: flatbuffers.Offset): void;
    static endPNV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPNVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPNVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPNV(builder: flatbuffers.Builder, VERIFIER_PEER_IDOffset: flatbuffers.Offset, GENERATED_AT_MS: bigint, ENTRIESOffset: flatbuffers.Offset, ETAGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNVT;
    unpackTo(_o: PNVT): void;
}
export declare class PNVT implements flatbuffers.IGeneratedObject {
    VERIFIER_PEER_ID: string | Uint8Array | null;
    GENERATED_AT_MS: bigint;
    ENTRIES: (PNVEntryT)[];
    ETAG: string | Uint8Array | null;
    constructor(VERIFIER_PEER_ID?: string | Uint8Array | null, GENERATED_AT_MS?: bigint, ENTRIES?: (PNVEntryT)[], ETAG?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNV.d.ts.map