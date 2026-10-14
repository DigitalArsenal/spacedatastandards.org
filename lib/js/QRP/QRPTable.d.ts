import * as flatbuffers from 'flatbuffers';
import { QRPColumn, QRPColumnT } from './QRPColumn.js';
/**
 * One queryable table of the serving node (the query surface).
 */
export declare class QRPTable implements flatbuffers.IUnpackableObject<QRPTableT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRPTable;
    static getRootAsQRPTable(bb: flatbuffers.ByteBuffer, obj?: QRPTable): QRPTable;
    static getSizePrefixedRootAsQRPTable(bb: flatbuffers.ByteBuffer, obj?: QRPTable): QRPTable;
    /**
     * Table name as a query names it, e.g. "OMM".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the table is, e.g. "standard" (records of one standard), "view",
     * "lane" (an ingest lane), "system".
     */
    KIND(): string | null;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where the table's rows come from: a standard code, provider or source.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rows the table holds; -1 = unknown.
     */
    RECORDS(): bigint;
    /**
     * Columns of the table.
     */
    COLUMNS(index: number, obj?: QRPColumn): QRPColumn | null;
    columnsLength(): number;
    static startQRPTable(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addRecords(builder: flatbuffers.Builder, RECORDS: bigint): void;
    static addColumns(builder: flatbuffers.Builder, COLUMNSOffset: flatbuffers.Offset): void;
    static createColumnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColumnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endQRPTable(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQRPTable(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, KINDOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, RECORDS: bigint, COLUMNSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QRPTableT;
    unpackTo(_o: QRPTableT): void;
}
export declare class QRPTableT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    RECORDS: bigint;
    COLUMNS: (QRPColumnT)[];
    constructor(NAME?: string | Uint8Array | null, KIND?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, RECORDS?: bigint, COLUMNS?: (QRPColumnT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRPTable.d.ts.map