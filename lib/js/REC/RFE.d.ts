import * as flatbuffers from 'flatbuffers';
/**
 * RF Emitter
 */
export declare class RFE implements flatbuffers.IUnpackableObject<RFET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFE;
    static getRootAsRFE(bb: flatbuffers.ByteBuffer, obj?: RFE): RFE;
    static getSizePrefixedRootAsRFE(bb: flatbuffers.ByteBuffer, obj?: RFE): RFE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTITY(): string | null;
    ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RF_EMITTER_DETAILS(index: number): string;
    RF_EMITTER_DETAILS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rfEmitterDetailsLength(): number;
    static startRFE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addRfEmitterDetails(builder: flatbuffers.Builder, RF_EMITTER_DETAILSOffset: flatbuffers.Offset): void;
    static createRfEmitterDetailsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRfEmitterDetailsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, ENTITYOffset: flatbuffers.Offset, RF_EMITTER_DETAILSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFET;
    unpackTo(_o: RFET): void;
}
export declare class RFET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    ENTITY: string | Uint8Array | null;
    RF_EMITTER_DETAILS: (string)[];
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, ENTITY?: string | Uint8Array | null, RF_EMITTER_DETAILS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFE.d.ts.map