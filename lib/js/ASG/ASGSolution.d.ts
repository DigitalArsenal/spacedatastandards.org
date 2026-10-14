import * as flatbuffers from 'flatbuffers';
/**
 * The optimal assignment of a problem.
 */
export declare class ASGSolution implements flatbuffers.IUnpackableObject<ASGSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGSolution;
    static getRootAsASGSolution(bb: flatbuffers.ByteBuffer, obj?: ASGSolution): ASGSolution;
    static getSizePrefixedRootAsASGSolution(bb: flatbuffers.ByteBuffer, obj?: ASGSolution): ASGSolution;
    /**
     * Number of rows of the problem.
     */
    ROWS(): number;
    /**
     * Number of columns of the problem.
     */
    COLUMNS(): number;
    /**
     * Column assigned to each row, ROWS entries; -1 = unassigned.
     */
    ASSIGNMENT(index: number): number | null;
    assignmentLength(): number;
    assignmentArray(): Int32Array | null;
    /**
     * Sum of the assigned costs plus the unassigned costs paid.
     */
    TOTAL_COST(): number;
    /**
     * Number of rows assigned to a real column.
     */
    ASSIGNED(): number;
    /**
     * Algorithm, e.g. "Hungarian (shortest augmenting path with potentials)",
     * "auction", "JVC".
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startASGSolution(builder: flatbuffers.Builder): void;
    static addRows(builder: flatbuffers.Builder, ROWS: number): void;
    static addColumns(builder: flatbuffers.Builder, COLUMNS: number): void;
    static addAssignment(builder: flatbuffers.Builder, ASSIGNMENTOffset: flatbuffers.Offset): void;
    static createAssignmentVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAssignmentVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAssignmentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalCost(builder: flatbuffers.Builder, TOTAL_COST: number): void;
    static addAssigned(builder: flatbuffers.Builder, ASSIGNED: number): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static endASGSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGSolution(builder: flatbuffers.Builder, ROWS: number, COLUMNS: number, ASSIGNMENTOffset: flatbuffers.Offset, TOTAL_COST: number, ASSIGNED: number, METHODOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGSolutionT;
    unpackTo(_o: ASGSolutionT): void;
}
export declare class ASGSolutionT implements flatbuffers.IGeneratedObject {
    ROWS: number;
    COLUMNS: number;
    ASSIGNMENT: (number)[];
    TOTAL_COST: number;
    ASSIGNED: number;
    METHOD: string | Uint8Array | null;
    constructor(ROWS?: number, COLUMNS?: number, ASSIGNMENT?: (number)[], TOTAL_COST?: number, ASSIGNED?: number, METHOD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGSolution.d.ts.map