import * as flatbuffers from 'flatbuffers';
export declare class USR implements flatbuffers.IUnpackableObject<USRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): USR;
    static getRootAsUSR(bb: flatbuffers.ByteBuffer, obj?: USR): USR;
    static getSizePrefixedRootAsUSR(bb: flatbuffers.ByteBuffer, obj?: USR): USR;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MESSAGE_TYPES(index: number): string;
    MESSAGE_TYPES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    messageTypesLength(): number;
    static startUSR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addMessageTypes(builder: flatbuffers.Builder, MESSAGE_TYPESOffset: flatbuffers.Offset): void;
    static createMessageTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessageTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endUSR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUSR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, MESSAGE_TYPESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): USRT;
    unpackTo(_o: USRT): void;
}
export declare class USRT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    MESSAGE_TYPES: (string)[];
    constructor(ID?: string | Uint8Array | null, MESSAGE_TYPES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=USR.d.ts.map