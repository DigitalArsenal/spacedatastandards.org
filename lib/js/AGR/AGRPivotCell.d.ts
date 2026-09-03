import * as flatbuffers from 'flatbuffers';
/**
 * One pivot cell.
 */
export declare class AGRPivotCell implements flatbuffers.IUnpackableObject<AGRPivotCellT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGRPivotCell;
    static getRootAsAGRPivotCell(bb: flatbuffers.ByteBuffer, obj?: AGRPivotCell): AGRPivotCell;
    static getSizePrefixedRootAsAGRPivotCell(bb: flatbuffers.ByteBuffer, obj?: AGRPivotCell): AGRPivotCell;
    ROW_KEY(): string | null;
    ROW_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COL_KEY(): string | null;
    COL_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNT(): bigint;
    SUM(): number;
    static startAGRPivotCell(builder: flatbuffers.Builder): void;
    static addRowKey(builder: flatbuffers.Builder, ROW_KEYOffset: flatbuffers.Offset): void;
    static addColKey(builder: flatbuffers.Builder, COL_KEYOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: bigint): void;
    static addSum(builder: flatbuffers.Builder, SUM: number): void;
    static endAGRPivotCell(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGRPivotCell(builder: flatbuffers.Builder, ROW_KEYOffset: flatbuffers.Offset, COL_KEYOffset: flatbuffers.Offset, COUNT: bigint, SUM: number): flatbuffers.Offset;
    unpack(): AGRPivotCellT;
    unpackTo(_o: AGRPivotCellT): void;
}
export declare class AGRPivotCellT implements flatbuffers.IGeneratedObject {
    ROW_KEY: string | Uint8Array | null;
    COL_KEY: string | Uint8Array | null;
    COUNT: bigint;
    SUM: number;
    constructor(ROW_KEY?: string | Uint8Array | null, COL_KEY?: string | Uint8Array | null, COUNT?: bigint, SUM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGRPivotCell.d.ts.map