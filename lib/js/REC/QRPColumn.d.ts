import * as flatbuffers from 'flatbuffers';
/**
 * One column descriptor of a page, in record field order.
 */
export declare class QRPColumn implements flatbuffers.IUnpackableObject<QRPColumnT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRPColumn;
    static getRootAsQRPColumn(bb: flatbuffers.ByteBuffer, obj?: QRPColumn): QRPColumn;
    static getSizePrefixedRootAsQRPColumn(bb: flatbuffers.ByteBuffer, obj?: QRPColumn): QRPColumn;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scalar type of the field as declared in the standard, e.g. "string",
     * "double", "int64", "bool", "enum".
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unit of the field when the standard declares one, else empty.
     */
    UNIT(): string | null;
    UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the serving node can order the page by this column.
     */
    SORTABLE(): boolean;
    /**
     * True when the serving node holds an index on this column.
     */
    INDEXED(): boolean;
    static startQRPColumn(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addUnit(builder: flatbuffers.Builder, UNITOffset: flatbuffers.Offset): void;
    static addSortable(builder: flatbuffers.Builder, SORTABLE: boolean): void;
    static addIndexed(builder: flatbuffers.Builder, INDEXED: boolean): void;
    static endQRPColumn(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQRPColumn(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, UNITOffset: flatbuffers.Offset, SORTABLE: boolean, INDEXED: boolean): flatbuffers.Offset;
    unpack(): QRPColumnT;
    unpackTo(_o: QRPColumnT): void;
}
export declare class QRPColumnT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    UNIT: string | Uint8Array | null;
    SORTABLE: boolean;
    INDEXED: boolean;
    constructor(NAME?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, UNIT?: string | Uint8Array | null, SORTABLE?: boolean, INDEXED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRPColumn.d.ts.map