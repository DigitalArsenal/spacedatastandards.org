import * as flatbuffers from 'flatbuffers';
/**
 * One canonical SDS file-identifier to FlatSQL table binding. A configured
 * node rebuilds these bindings before replaying durable record bytes.
 */
export declare class FSOTableBinding implements flatbuffers.IUnpackableObject<FSOTableBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSOTableBinding;
    static getRootAsFSOTableBinding(bb: flatbuffers.ByteBuffer, obj?: FSOTableBinding): FSOTableBinding;
    static getSizePrefixedRootAsFSOTableBinding(bb: flatbuffers.ByteBuffer, obj?: FSOTableBinding): FSOTableBinding;
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TABLE_NAME(): string | null;
    TABLE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFSOTableBinding(builder: flatbuffers.Builder): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addTableName(builder: flatbuffers.Builder, TABLE_NAMEOffset: flatbuffers.Offset): void;
    static endFSOTableBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFSOTableBinding(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset, TABLE_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FSOTableBindingT;
    unpackTo(_o: FSOTableBindingT): void;
}
export declare class FSOTableBindingT implements flatbuffers.IGeneratedObject {
    FILE_IDENTIFIER: string | Uint8Array | null;
    TABLE_NAME: string | Uint8Array | null;
    constructor(FILE_IDENTIFIER?: string | Uint8Array | null, TABLE_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSOTableBinding.d.ts.map