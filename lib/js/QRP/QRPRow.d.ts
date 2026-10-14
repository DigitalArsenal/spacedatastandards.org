import * as flatbuffers from 'flatbuffers';
import { QRPValue, QRPValueT } from './QRPValue.js';
/**
 * One row of a projection, its cells in COLUMNS order.
 */
export declare class QRPRow implements flatbuffers.IUnpackableObject<QRPRowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRPRow;
    static getRootAsQRPRow(bb: flatbuffers.ByteBuffer, obj?: QRPRow): QRPRow;
    static getSizePrefixedRootAsQRPRow(bb: flatbuffers.ByteBuffer, obj?: QRPRow): QRPRow;
    CELLS(index: number, obj?: QRPValue): QRPValue | null;
    cellsLength(): number;
    static startQRPRow(builder: flatbuffers.Builder): void;
    static addCells(builder: flatbuffers.Builder, CELLSOffset: flatbuffers.Offset): void;
    static createCellsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCellsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endQRPRow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQRPRow(builder: flatbuffers.Builder, CELLSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QRPRowT;
    unpackTo(_o: QRPRowT): void;
}
export declare class QRPRowT implements flatbuffers.IGeneratedObject {
    CELLS: (QRPValueT)[];
    constructor(CELLS?: (QRPValueT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRPRow.d.ts.map