import * as flatbuffers from 'flatbuffers';
export declare class USR implements flatbuffers.IUnpackableObject<USRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): USR;
    static getRootAsUSR(bb: flatbuffers.ByteBuffer, obj?: USR): USR;
    static getSizePrefixedRootAsUSR(bb: flatbuffers.ByteBuffer, obj?: USR): USR;
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    messageTypes(index: number): string;
    messageTypes(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    messageTypesLength(): number;
    static startUSR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addMessageTypes(builder: flatbuffers.Builder, messageTypesOffset: flatbuffers.Offset): void;
    static createMessageTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessageTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endUSR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUSR(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset, messageTypesOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): USRT;
    unpackTo(_o: USRT): void;
}
export declare class USRT implements flatbuffers.IGeneratedObject {
    id: string | Uint8Array | null;
    messageTypes: (string)[];
    constructor(id?: string | Uint8Array | null, messageTypes?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=usr.d.ts.map