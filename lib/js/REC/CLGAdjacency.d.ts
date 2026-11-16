import * as flatbuffers from 'flatbuffers';
import { clgSnapshotOrigin } from './clgSnapshotOrigin.js';
export declare class CLGAdjacency implements flatbuffers.IUnpackableObject<CLGAdjacencyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGAdjacency;
    static getRootAsCLGAdjacency(bb: flatbuffers.ByteBuffer, obj?: CLGAdjacency): CLGAdjacency;
    static getSizePrefixedRootAsCLGAdjacency(bb: flatbuffers.ByteBuffer, obj?: CLGAdjacency): CLGAdjacency;
    /**
     * Common emission query in TT; equal-time transitions already applied.
     */
    EPOCH_S(): number;
    ORIGIN(): clgSnapshotOrigin;
    /**
     * Exactly N+1 entries, starting zero and ending at arc count.
     */
    ROW_OFFSETS(index: number): number | null;
    rowOffsetsLength(): number;
    rowOffsetsArray(): Uint32Array;
    /**
     * One outgoing arc per directed ACTIVE link, two per bidirectional link.
     */
    NEIGHBOR_NODE_INDEXES(index: number): number | null;
    neighborNodeIndexesLength(): number;
    neighborNodeIndexesArray(): Uint32Array;
    LINK_INDEXES(index: number): number | null;
    linkIndexesLength(): number;
    linkIndexesArray(): Uint32Array;
    /**
     * Parallel to arcs; computed natively for that directed ray at EPOCH_S.
     * SIMULTANEOUS: same-epoch range and range/c; reception epoch equals EPOCH_S.
     * RETARDED: null-path range, coordinate vacuum flight time, reception TT.
     */
    RANGES_M(index: number): number | null;
    rangesMLength(): number;
    rangesMArray(): Float64Array;
    LIGHT_TIMES_S(index: number): number | null;
    lightTimesSLength(): number;
    lightTimesSArray(): Float64Array;
    RECEPTION_EPOCHS_S(index: number): number | null;
    receptionEpochsSLength(): number;
    receptionEpochsSArray(): Float64Array;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_EPOCH_S(): boolean;
    HAS_ORIGIN(): boolean;
    static startCLGAdjacency(builder: flatbuffers.Builder): void;
    static addEpochS(builder: flatbuffers.Builder, EPOCH_S: number): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGIN: clgSnapshotOrigin): void;
    static addRowOffsets(builder: flatbuffers.Builder, ROW_OFFSETSOffset: flatbuffers.Offset): void;
    static createRowOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRowOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRowOffsetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNeighborNodeIndexes(builder: flatbuffers.Builder, NEIGHBOR_NODE_INDEXESOffset: flatbuffers.Offset): void;
    static createNeighborNodeIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNeighborNodeIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNeighborNodeIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinkIndexes(builder: flatbuffers.Builder, LINK_INDEXESOffset: flatbuffers.Offset): void;
    static createLinkIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLinkIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLinkIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRangesM(builder: flatbuffers.Builder, RANGES_MOffset: flatbuffers.Offset): void;
    static createRangesMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangesMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangesMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLightTimesS(builder: flatbuffers.Builder, LIGHT_TIMES_SOffset: flatbuffers.Offset): void;
    static createLightTimesSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLightTimesSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLightTimesSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceptionEpochsS(builder: flatbuffers.Builder, RECEPTION_EPOCHS_SOffset: flatbuffers.Offset): void;
    static createReceptionEpochsSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReceptionEpochsSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceptionEpochsSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasEpochS(builder: flatbuffers.Builder, HAS_EPOCH_S: boolean): void;
    static addHasOrigin(builder: flatbuffers.Builder, HAS_ORIGIN: boolean): void;
    static endCLGAdjacency(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGAdjacency(builder: flatbuffers.Builder, EPOCH_S: number, ORIGIN: clgSnapshotOrigin, ROW_OFFSETSOffset: flatbuffers.Offset, NEIGHBOR_NODE_INDEXESOffset: flatbuffers.Offset, LINK_INDEXESOffset: flatbuffers.Offset, RANGES_MOffset: flatbuffers.Offset, LIGHT_TIMES_SOffset: flatbuffers.Offset, RECEPTION_EPOCHS_SOffset: flatbuffers.Offset, HAS_EPOCH_S: boolean, HAS_ORIGIN: boolean): flatbuffers.Offset;
    unpack(): CLGAdjacencyT;
    unpackTo(_o: CLGAdjacencyT): void;
}
export declare class CLGAdjacencyT implements flatbuffers.IGeneratedObject {
    EPOCH_S: number;
    ORIGIN: clgSnapshotOrigin;
    ROW_OFFSETS: (number)[];
    NEIGHBOR_NODE_INDEXES: (number)[];
    LINK_INDEXES: (number)[];
    RANGES_M: (number)[];
    LIGHT_TIMES_S: (number)[];
    RECEPTION_EPOCHS_S: (number)[];
    HAS_EPOCH_S: boolean;
    HAS_ORIGIN: boolean;
    constructor(EPOCH_S?: number, ORIGIN?: clgSnapshotOrigin, ROW_OFFSETS?: (number)[], NEIGHBOR_NODE_INDEXES?: (number)[], LINK_INDEXES?: (number)[], RANGES_M?: (number)[], LIGHT_TIMES_S?: (number)[], RECEPTION_EPOCHS_S?: (number)[], HAS_EPOCH_S?: boolean, HAS_ORIGIN?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGAdjacency.d.ts.map