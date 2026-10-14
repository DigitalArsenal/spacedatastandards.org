import * as flatbuffers from 'flatbuffers';
/**
 * A count under a name.
 */
export declare class ERMNamedCount implements flatbuffers.IUnpackableObject<ERMNamedCountT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMNamedCount;
    static getRootAsERMNamedCount(bb: flatbuffers.ByteBuffer, obj?: ERMNamedCount): ERMNamedCount;
    static getSizePrefixedRootAsERMNamedCount(bb: flatbuffers.ByteBuffer, obj?: ERMNamedCount): ERMNamedCount;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNT(): number;
    static startERMNamedCount(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static endERMNamedCount(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMNamedCount(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, COUNT: number): flatbuffers.Offset;
    unpack(): ERMNamedCountT;
    unpackTo(_o: ERMNamedCountT): void;
}
export declare class ERMNamedCountT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    COUNT: number;
    constructor(NAME?: string | Uint8Array | null, COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMNamedCount.d.ts.map