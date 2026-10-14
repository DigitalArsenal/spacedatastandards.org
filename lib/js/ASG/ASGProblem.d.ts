import * as flatbuffers from 'flatbuffers';
import { ASGCostEntry, ASGCostEntryT } from './ASGCostEntry.js';
import { asgObjective } from './asgObjective.js';
/**
 * A rectangular linear assignment problem.
 */
export declare class ASGProblem implements flatbuffers.IUnpackableObject<ASGProblemT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGProblem;
    static getRootAsASGProblem(bb: flatbuffers.ByteBuffer, obj?: ASGProblem): ASGProblem;
    static getSizePrefixedRootAsASGProblem(bb: flatbuffers.ByteBuffer, obj?: ASGProblem): ASGProblem;
    /**
     * Number of rows.
     */
    ROWS(): number;
    /**
     * Number of columns.
     */
    COLUMNS(): number;
    /**
     * Dense cost matrix, row-major, ROWS * COLUMNS values. NaN or +Infinity
     * marks a forbidden pair. Empty when ENTRIES gives the problem.
     */
    DENSE_COST(index: number): number | null;
    denseCostLength(): number;
    denseCostArray(): Float64Array | null;
    /**
     * Sparse costs; a pair not listed is forbidden. When a pair repeats, the
     * lowest cost stands. Empty when DENSE_COST gives the problem.
     */
    ENTRIES(index: number, obj?: ASGCostEntry): ASGCostEntry | null;
    entriesLength(): number;
    /**
     * Cost of leaving a row unassigned: empty means every row must be assigned
     * (then ROWS <= COLUMNS); one value applies to every row; ROWS values give
     * one per row. In gated association this is the gate.
     */
    UNASSIGNED_COST(index: number): number | null;
    unassignedCostLength(): number;
    unassignedCostArray(): Float64Array | null;
    OBJECTIVE(): asgObjective;
    /**
     * Optional labels of the rows (e.g. observation identifiers), ROWS entries
     * or empty.
     */
    ROW_IDS(index: number): string;
    ROW_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rowIdsLength(): number;
    /**
     * Optional labels of the columns (e.g. object keys), COLUMNS entries or
     * empty.
     */
    COLUMN_IDS(index: number): string;
    COLUMN_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    columnIdsLength(): number;
    static startASGProblem(builder: flatbuffers.Builder): void;
    static addRows(builder: flatbuffers.Builder, ROWS: number): void;
    static addColumns(builder: flatbuffers.Builder, COLUMNS: number): void;
    static addDenseCost(builder: flatbuffers.Builder, DENSE_COSTOffset: flatbuffers.Offset): void;
    static createDenseCostVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDenseCostVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDenseCostVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEntries(builder: flatbuffers.Builder, ENTRIESOffset: flatbuffers.Offset): void;
    static createEntriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnassignedCost(builder: flatbuffers.Builder, UNASSIGNED_COSTOffset: flatbuffers.Offset): void;
    static createUnassignedCostVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createUnassignedCostVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUnassignedCostVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjective(builder: flatbuffers.Builder, OBJECTIVE: asgObjective): void;
    static addRowIds(builder: flatbuffers.Builder, ROW_IDSOffset: flatbuffers.Offset): void;
    static createRowIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColumnIds(builder: flatbuffers.Builder, COLUMN_IDSOffset: flatbuffers.Offset): void;
    static createColumnIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColumnIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endASGProblem(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGProblem(builder: flatbuffers.Builder, ROWS: number, COLUMNS: number, DENSE_COSTOffset: flatbuffers.Offset, ENTRIESOffset: flatbuffers.Offset, UNASSIGNED_COSTOffset: flatbuffers.Offset, OBJECTIVE: asgObjective, ROW_IDSOffset: flatbuffers.Offset, COLUMN_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGProblemT;
    unpackTo(_o: ASGProblemT): void;
}
export declare class ASGProblemT implements flatbuffers.IGeneratedObject {
    ROWS: number;
    COLUMNS: number;
    DENSE_COST: (number)[];
    ENTRIES: (ASGCostEntryT)[];
    UNASSIGNED_COST: (number)[];
    OBJECTIVE: asgObjective;
    ROW_IDS: (string)[];
    COLUMN_IDS: (string)[];
    constructor(ROWS?: number, COLUMNS?: number, DENSE_COST?: (number)[], ENTRIES?: (ASGCostEntryT)[], UNASSIGNED_COST?: (number)[], OBJECTIVE?: asgObjective, ROW_IDS?: (string)[], COLUMN_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGProblem.d.ts.map