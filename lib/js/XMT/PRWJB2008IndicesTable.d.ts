import * as flatbuffers from 'flatbuffers';
import { PRWJB2008Indices, PRWJB2008IndicesT } from './PRWJB2008Indices.js';
/**
 * JB2008 drivers for a propagation: daily rows with strictly increasing
 * DATE covering the arc plus the days the model's lags read before it.
 */
export declare class PRWJB2008IndicesTable implements flatbuffers.IUnpackableObject<PRWJB2008IndicesTableT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWJB2008IndicesTable;
    static getRootAsPRWJB2008IndicesTable(bb: flatbuffers.ByteBuffer, obj?: PRWJB2008IndicesTable): PRWJB2008IndicesTable;
    static getSizePrefixedRootAsPRWJB2008IndicesTable(bb: flatbuffers.ByteBuffer, obj?: PRWJB2008IndicesTable): PRWJB2008IndicesTable;
    ROWS(index: number, obj?: PRWJB2008Indices): PRWJB2008Indices | null;
    rowsLength(): number;
    static startPRWJB2008IndicesTable(builder: flatbuffers.Builder): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWJB2008IndicesTable(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWJB2008IndicesTable(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWJB2008IndicesTableT;
    unpackTo(_o: PRWJB2008IndicesTableT): void;
}
export declare class PRWJB2008IndicesTableT implements flatbuffers.IGeneratedObject {
    ROWS: (PRWJB2008IndicesT)[];
    constructor(ROWS?: (PRWJB2008IndicesT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWJB2008IndicesTable.d.ts.map