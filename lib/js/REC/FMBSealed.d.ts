import * as flatbuffers from 'flatbuffers';
/**
 * What a sealed (encrypted) row needs beyond FMBRow: its ciphertext cannot be
 * re-extracted.
 */
export declare class FMBSealed implements flatbuffers.IUnpackableObject<FMBSealedT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBSealed;
    static getRootAsFMBSealed(bb: flatbuffers.ByteBuffer, obj?: FMBSealed): FMBSealed;
    static getSizePrefixedRootAsFMBSealed(bb: flatbuffers.ByteBuffer, obj?: FMBSealed): FMBSealed;
    /**
     * Index into FMB.ROWS.
     */
    ROW(): number;
    /**
     * The plaintext's epoch (Unix seconds); INT64_MIN when none.
     */
    EPOCH(): bigint;
    /**
     * OBJECT_KEY dictionary id; 0 none.
     */
    OBJECT_KEY_ID(): number;
    /**
     * sha2-256 of the ciphertext range (32 bytes): its IPFS leaf.
     */
    LEAF_DIGEST(index: number): number | null;
    leafDigestLength(): number;
    leafDigestArray(): Uint8Array | null;
    /**
     * The sealed record's extracted column values.
     */
    COLUMNS(index: number): number | null;
    columnsLength(): number;
    columnsArray(): Uint8Array | null;
    static startFMBSealed(builder: flatbuffers.Builder): void;
    static addRow(builder: flatbuffers.Builder, ROW: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: bigint): void;
    static addObjectKeyId(builder: flatbuffers.Builder, OBJECT_KEY_ID: number): void;
    static addLeafDigest(builder: flatbuffers.Builder, LEAF_DIGESTOffset: flatbuffers.Offset): void;
    static createLeafDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLeafDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColumns(builder: flatbuffers.Builder, COLUMNSOffset: flatbuffers.Offset): void;
    static createColumnsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startColumnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMBSealed(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFMBSealed(builder: flatbuffers.Builder, ROW: number, EPOCH: bigint, OBJECT_KEY_ID: number, LEAF_DIGESTOffset: flatbuffers.Offset, COLUMNSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBSealedT;
    unpackTo(_o: FMBSealedT): void;
}
export declare class FMBSealedT implements flatbuffers.IGeneratedObject {
    ROW: number;
    EPOCH: bigint;
    OBJECT_KEY_ID: number;
    LEAF_DIGEST: (number)[];
    COLUMNS: (number)[];
    constructor(ROW?: number, EPOCH?: bigint, OBJECT_KEY_ID?: number, LEAF_DIGEST?: (number)[], COLUMNS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBSealed.d.ts.map