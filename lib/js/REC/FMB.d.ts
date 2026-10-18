import * as flatbuffers from 'flatbuffers';
import { FMBEntry, FMBEntryT } from './FMBEntry.js';
import { FMBGroup, FMBGroupT } from './FMBGroup.js';
import { FMBIdentity, FMBIdentityT } from './FMBIdentity.js';
import { FMBLarge, FMBLargeT } from './FMBLarge.js';
import { FMBRemove, FMBRemoveT } from './FMBRemove.js';
import { FMBRow, FMBRowT } from './FMBRow.js';
import { FMBSealed, FMBSealedT } from './FMBSealed.js';
import { FMBSignature, FMBSignatureT } from './FMBSignature.js';
import { FMBUrl, FMBUrlT } from './FMBUrl.js';
/**
 * FlatSQL Batch Metadata: one per feed per commit round.
 */
export declare class FMB implements flatbuffers.IUnpackableObject<FMBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMB;
    static getRootAsFMB(bb: flatbuffers.ByteBuffer, obj?: FMB): FMB;
    static getSizePrefixedRootAsFMB(bb: flatbuffers.ByteBuffer, obj?: FMB): FMB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stream offset of this frame's size prefix.
     */
    SELF_OFFSET(): bigint;
    /**
     * Stream offset of the previous non-record frame (the commit chain).
     */
    PREVIOUS(): bigint;
    /**
     * The feed's id in its type.
     */
    FEED_ID(): number;
    /**
     * The round's clock (Unix seconds).
     */
    COMMITTED_AT(): bigint;
    /**
     * The type's highest seq issued so far.
     */
    TYPE_SEQ_HIGH(): bigint;
    /**
     * The rows, in plan order; at most 65,536.
     */
    ROWS(index: number, obj?: FMBRow): FMBRow | null;
    rowsLength(): number;
    /**
     * sha2-256 of the record bytes, 32 bytes per NEW_FRAME row, in row order
     * (for a sealed row, the plaintext's: its record CID).
     */
    DIGESTS(index: number): number | null;
    digestsLength(): number;
    digestsArray(): Uint8Array | null;
    GROUPS(index: number, obj?: FMBGroup): FMBGroup | null;
    groupsLength(): number;
    DICTIONARY(index: number, obj?: FMBEntry): FMBEntry | null;
    dictionaryLength(): number;
    REMOVALS(index: number, obj?: FMBRemove): FMBRemove | null;
    removalsLength(): number;
    URLS(index: number, obj?: FMBUrl): FMBUrl | null;
    urlsLength(): number;
    SIGNATURES(index: number, obj?: FMBSignature): FMBSignature | null;
    signaturesLength(): number;
    SEALED(index: number, obj?: FMBSealed): FMBSealed | null;
    sealedLength(): number;
    IDENTITIES(index: number, obj?: FMBIdentity): FMBIdentity | null;
    identitiesLength(): number;
    LARGE(index: number, obj?: FMBLarge): FMBLarge | null;
    largeLength(): number;
    static startFMB(builder: flatbuffers.Builder): void;
    static addSelfOffset(builder: flatbuffers.Builder, SELF_OFFSET: bigint): void;
    static addPrevious(builder: flatbuffers.Builder, PREVIOUS: bigint): void;
    static addFeedId(builder: flatbuffers.Builder, FEED_ID: number): void;
    static addCommittedAt(builder: flatbuffers.Builder, COMMITTED_AT: bigint): void;
    static addTypeSeqHigh(builder: flatbuffers.Builder, TYPE_SEQ_HIGH: bigint): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDigests(builder: flatbuffers.Builder, DIGESTSOffset: flatbuffers.Offset): void;
    static createDigestsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDigestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroups(builder: flatbuffers.Builder, GROUPSOffset: flatbuffers.Offset): void;
    static startGroupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDictionary(builder: flatbuffers.Builder, DICTIONARYOffset: flatbuffers.Offset): void;
    static createDictionaryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDictionaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRemovals(builder: flatbuffers.Builder, REMOVALSOffset: flatbuffers.Offset): void;
    static startRemovalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUrls(builder: flatbuffers.Builder, URLSOffset: flatbuffers.Offset): void;
    static startUrlsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatures(builder: flatbuffers.Builder, SIGNATURESOffset: flatbuffers.Offset): void;
    static createSignaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSignaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSealed(builder: flatbuffers.Builder, SEALEDOffset: flatbuffers.Offset): void;
    static createSealedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSealedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIdentities(builder: flatbuffers.Builder, IDENTITIESOffset: flatbuffers.Offset): void;
    static createIdentitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIdentitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLarge(builder: flatbuffers.Builder, LARGEOffset: flatbuffers.Offset): void;
    static createLargeVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLargeVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFMBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFMBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFMB(builder: flatbuffers.Builder, SELF_OFFSET: bigint, PREVIOUS: bigint, FEED_ID: number, COMMITTED_AT: bigint, TYPE_SEQ_HIGH: bigint, ROWSOffset: flatbuffers.Offset, DIGESTSOffset: flatbuffers.Offset, GROUPSOffset: flatbuffers.Offset, DICTIONARYOffset: flatbuffers.Offset, REMOVALSOffset: flatbuffers.Offset, URLSOffset: flatbuffers.Offset, SIGNATURESOffset: flatbuffers.Offset, SEALEDOffset: flatbuffers.Offset, IDENTITIESOffset: flatbuffers.Offset, LARGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBT;
    unpackTo(_o: FMBT): void;
}
export declare class FMBT implements flatbuffers.IGeneratedObject {
    SELF_OFFSET: bigint;
    PREVIOUS: bigint;
    FEED_ID: number;
    COMMITTED_AT: bigint;
    TYPE_SEQ_HIGH: bigint;
    ROWS: (FMBRowT)[];
    DIGESTS: (number)[];
    GROUPS: (FMBGroupT)[];
    DICTIONARY: (FMBEntryT)[];
    REMOVALS: (FMBRemoveT)[];
    URLS: (FMBUrlT)[];
    SIGNATURES: (FMBSignatureT)[];
    SEALED: (FMBSealedT)[];
    IDENTITIES: (FMBIdentityT)[];
    LARGE: (FMBLargeT)[];
    constructor(SELF_OFFSET?: bigint, PREVIOUS?: bigint, FEED_ID?: number, COMMITTED_AT?: bigint, TYPE_SEQ_HIGH?: bigint, ROWS?: (FMBRowT)[], DIGESTS?: (number)[], GROUPS?: (FMBGroupT)[], DICTIONARY?: (FMBEntryT)[], REMOVALS?: (FMBRemoveT)[], URLS?: (FMBUrlT)[], SIGNATURES?: (FMBSignatureT)[], SEALED?: (FMBSealedT)[], IDENTITIES?: (FMBIdentityT)[], LARGE?: (FMBLargeT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMB.d.ts.map