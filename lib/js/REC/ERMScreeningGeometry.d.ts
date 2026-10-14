import * as flatbuffers from 'flatbuffers';
import { ERMScreeningRow, ERMScreeningRowT } from './ERMScreeningRow.js';
/**
 * Scores for one encounter geometry.
 */
export declare class ERMScreeningGeometry implements flatbuffers.IUnpackableObject<ERMScreeningGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningGeometry;
    static getRootAsERMScreeningGeometry(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningGeometry): ERMScreeningGeometry;
    static getSizePrefixedRootAsERMScreeningGeometry(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningGeometry): ERMScreeningGeometry;
    /**
     * "head-on" or "crossing-90".
     */
    GEOMETRY(): string | null;
    GEOMETRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROWS(index: number, obj?: ERMScreeningRow): ERMScreeningRow | null;
    rowsLength(): number;
    static startERMScreeningGeometry(builder: flatbuffers.Builder): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMScreeningGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset, ROWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMScreeningGeometryT;
    unpackTo(_o: ERMScreeningGeometryT): void;
}
export declare class ERMScreeningGeometryT implements flatbuffers.IGeneratedObject {
    GEOMETRY: string | Uint8Array | null;
    ROWS: (ERMScreeningRowT)[];
    constructor(GEOMETRY?: string | Uint8Array | null, ROWS?: (ERMScreeningRowT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningGeometry.d.ts.map