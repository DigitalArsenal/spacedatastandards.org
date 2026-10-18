import * as flatbuffers from 'flatbuffers';
import { FMBEntry, FMBEntryT } from './FMBEntry.js';
import { FSGInstance, FSGInstanceT } from './FSGInstance.js';
import { FSGLatest, FSGLatestT } from './FSGLatest.js';
import { FSGPair, FSGPairT } from './FSGPair.js';
import { fckSegmentKind } from './fckSegmentKind.js';
/**
 * FlatSQL Segment.
 */
export declare class FSG implements flatbuffers.IUnpackableObject<FSGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSG;
    static getRootAsFSG(bb: flatbuffers.ByteBuffer, obj?: FSG): FSG;
    static getSizePrefixedRootAsFSG(bb: flatbuffers.ByteBuffer, obj?: FSG): FSG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stream offset of this frame's size prefix.
     */
    SELF_OFFSET(): bigint;
    /**
     * Stream offset of the previous non-record frame.
     */
    PREVIOUS(): bigint;
    FEED_ID(): number;
    KIND(): fckSegmentKind;
    LEVEL(): number;
    MIN_SEQ(): bigint;
    MAX_SEQ(): bigint;
    /**
     * End offset of the last FMB the segment folds in.
     */
    COVERS_THROUGH(): bigint;
    /**
     * Stream offsets of the segments an LSM merge replaced.
     */
    REPLACES(index: number): bigint | null;
    replacesLength(): number;
    /**
     * DICTIONARY: sorted by (KIND, ID).
     */
    ENTRIES(index: number, obj?: FMBEntry): FMBEntry | null;
    entriesLength(): number;
    /**
     * LATEST: sorted by OBJECT_KEY_ID.
     */
    LATEST(index: number, obj?: FSGLatest): FSGLatest | null;
    latestLength(): number;
    /**
     * INSTANCES: sorted by (BATCH_ID, CONTENT_KEY_ID).
     */
    INSTANCES(index: number, obj?: FSGInstance): FSGInstance | null;
    instancesLength(): number;
    /**
     * TOKENS: TEXT [token, records, bytes, min ts, max ts, max seq].
     */
    TOKENS(index: number, obj?: FMBEntry): FMBEntry | null;
    tokensLength(): number;
    /**
     * TOMBSTONES and ROWS_BY_*: sorted by (KEY_HI, KEY_LO, RID).
     */
    PAIRS(index: number, obj?: FSGPair): FSGPair | null;
    pairsLength(): number;
    /**
     * Reserved for analytics column segments.
     */
    COLUMN(index: number): number | null;
    columnLength(): number;
    columnArray(): Uint8Array | null;
    static startFSG(builder: flatbuffers.Builder): void;
    static addSelfOffset(builder: flatbuffers.Builder, SELF_OFFSET: bigint): void;
    static addPrevious(builder: flatbuffers.Builder, PREVIOUS: bigint): void;
    static addFeedId(builder: flatbuffers.Builder, FEED_ID: number): void;
    static addKind(builder: flatbuffers.Builder, KIND: fckSegmentKind): void;
    static addLevel(builder: flatbuffers.Builder, LEVEL: number): void;
    static addMinSeq(builder: flatbuffers.Builder, MIN_SEQ: bigint): void;
    static addMaxSeq(builder: flatbuffers.Builder, MAX_SEQ: bigint): void;
    static addCoversThrough(builder: flatbuffers.Builder, COVERS_THROUGH: bigint): void;
    static addReplaces(builder: flatbuffers.Builder, REPLACESOffset: flatbuffers.Offset): void;
    static createReplacesVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startReplacesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEntries(builder: flatbuffers.Builder, ENTRIESOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatest(builder: flatbuffers.Builder, LATESTOffset: flatbuffers.Offset): void;
    static startLatestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInstances(builder: flatbuffers.Builder, INSTANCESOffset: flatbuffers.Offset): void;
    static startInstancesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTokens(builder: flatbuffers.Builder, TOKENSOffset: flatbuffers.Offset): void;
    static createTokensVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTokensVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColumn(builder: flatbuffers.Builder, COLUMNOffset: flatbuffers.Offset): void;
    static createColumnVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startColumnVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFSG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFSGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFSGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFSG(builder: flatbuffers.Builder, SELF_OFFSET: bigint, PREVIOUS: bigint, FEED_ID: number, KIND: fckSegmentKind, LEVEL: number, MIN_SEQ: bigint, MAX_SEQ: bigint, COVERS_THROUGH: bigint, REPLACESOffset: flatbuffers.Offset, ENTRIESOffset: flatbuffers.Offset, LATESTOffset: flatbuffers.Offset, INSTANCESOffset: flatbuffers.Offset, TOKENSOffset: flatbuffers.Offset, PAIRSOffset: flatbuffers.Offset, COLUMNOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FSGT;
    unpackTo(_o: FSGT): void;
}
export declare class FSGT implements flatbuffers.IGeneratedObject {
    SELF_OFFSET: bigint;
    PREVIOUS: bigint;
    FEED_ID: number;
    KIND: fckSegmentKind;
    LEVEL: number;
    MIN_SEQ: bigint;
    MAX_SEQ: bigint;
    COVERS_THROUGH: bigint;
    REPLACES: (bigint)[];
    ENTRIES: (FMBEntryT)[];
    LATEST: (FSGLatestT)[];
    INSTANCES: (FSGInstanceT)[];
    TOKENS: (FMBEntryT)[];
    PAIRS: (FSGPairT)[];
    COLUMN: (number)[];
    constructor(SELF_OFFSET?: bigint, PREVIOUS?: bigint, FEED_ID?: number, KIND?: fckSegmentKind, LEVEL?: number, MIN_SEQ?: bigint, MAX_SEQ?: bigint, COVERS_THROUGH?: bigint, REPLACES?: (bigint)[], ENTRIES?: (FMBEntryT)[], LATEST?: (FSGLatestT)[], INSTANCES?: (FSGInstanceT)[], TOKENS?: (FMBEntryT)[], PAIRS?: (FSGPairT)[], COLUMN?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSG.d.ts.map