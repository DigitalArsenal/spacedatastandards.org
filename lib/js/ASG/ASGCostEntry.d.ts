import * as flatbuffers from 'flatbuffers';
/**
 * One sparse cost: assigning ROW to COLUMN costs COST.
 */
export declare class ASGCostEntry implements flatbuffers.IUnpackableObject<ASGCostEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGCostEntry;
    static getRootAsASGCostEntry(bb: flatbuffers.ByteBuffer, obj?: ASGCostEntry): ASGCostEntry;
    static getSizePrefixedRootAsASGCostEntry(bb: flatbuffers.ByteBuffer, obj?: ASGCostEntry): ASGCostEntry;
    /**
     * Row index, 0-based.
     */
    ROW(): number;
    /**
     * Column index, 0-based.
     */
    COLUMN(): number;
    /**
     * Cost of the pair, finite.
     */
    COST(): number;
    static startASGCostEntry(builder: flatbuffers.Builder): void;
    static addRow(builder: flatbuffers.Builder, ROW: number): void;
    static addColumn(builder: flatbuffers.Builder, COLUMN: number): void;
    static addCost(builder: flatbuffers.Builder, COST: number): void;
    static endASGCostEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGCostEntry(builder: flatbuffers.Builder, ROW: number, COLUMN: number, COST: number): flatbuffers.Offset;
    unpack(): ASGCostEntryT;
    unpackTo(_o: ASGCostEntryT): void;
}
export declare class ASGCostEntryT implements flatbuffers.IGeneratedObject {
    ROW: number;
    COLUMN: number;
    COST: number;
    constructor(ROW?: number, COLUMN?: number, COST?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGCostEntry.d.ts.map