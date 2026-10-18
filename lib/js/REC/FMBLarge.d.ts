import * as flatbuffers from 'flatbuffers';
/**
 * A record over 1 MiB: a UnixFS file DAG of 1 MiB raw leaves over its range.
 */
export declare class FMBLarge implements flatbuffers.IUnpackableObject<FMBLargeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBLarge;
    static getRootAsFMBLarge(bb: flatbuffers.ByteBuffer, obj?: FMBLarge): FMBLarge;
    static getSizePrefixedRootAsFMBLarge(bb: flatbuffers.ByteBuffer, obj?: FMBLarge): FMBLarge;
    /**
     * Index into FMB.ROWS.
     */
    ROW(): number;
    /**
     * Binary CID of the dag-pb UnixFS root.
     */
    ROOT_CID(index: number): number | null;
    rootCidLength(): number;
    rootCidArray(): Uint8Array | null;
    /**
     * The root node's dag-pb bytes.
     */
    ROOT_NODE(index: number): number | null;
    rootNodeLength(): number;
    rootNodeArray(): Uint8Array | null;
    /**
     * sha2-256 of each leaf, 32 bytes each, in order.
     */
    LEAF_DIGESTS(index: number): number | null;
    leafDigestsLength(): number;
    leafDigestsArray(): Uint8Array | null;
    static startFMBLarge(builder: flatbuffers.Builder): void;
    static addRow(builder: flatbuffers.Builder, ROW: number): void;
    static addRootCid(builder: flatbuffers.Builder, ROOT_CIDOffset: flatbuffers.Offset): void;
    static createRootCidVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRootCidVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRootNode(builder: flatbuffers.Builder, ROOT_NODEOffset: flatbuffers.Offset): void;
    static createRootNodeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRootNodeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLeafDigests(builder: flatbuffers.Builder, LEAF_DIGESTSOffset: flatbuffers.Offset): void;
    static createLeafDigestsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLeafDigestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMBLarge(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFMBLarge(builder: flatbuffers.Builder, ROW: number, ROOT_CIDOffset: flatbuffers.Offset, ROOT_NODEOffset: flatbuffers.Offset, LEAF_DIGESTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBLargeT;
    unpackTo(_o: FMBLargeT): void;
}
export declare class FMBLargeT implements flatbuffers.IGeneratedObject {
    ROW: number;
    ROOT_CID: (number)[];
    ROOT_NODE: (number)[];
    LEAF_DIGESTS: (number)[];
    constructor(ROW?: number, ROOT_CID?: (number)[], ROOT_NODE?: (number)[], LEAF_DIGESTS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBLarge.d.ts.map