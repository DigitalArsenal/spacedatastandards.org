import * as flatbuffers from 'flatbuffers';
/**
 * Communications Payload
 */
export declare class CMS implements flatbuffers.IUnpackableObject<CMST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMS;
    static getRootAsCMS(bb: flatbuffers.ByteBuffer, obj?: CMS): CMS;
    static getSizePrefixedRootAsCMS(bb: flatbuffers.ByteBuffer, obj?: CMS): CMS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTITY(): string | null;
    ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRANSPONDERS(index: number): string;
    TRANSPONDERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    transpondersLength(): number;
    static startCMS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addTransponders(builder: flatbuffers.Builder, TRANSPONDERSOffset: flatbuffers.Offset): void;
    static createTranspondersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTranspondersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCMS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCMS(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ENTITYOffset: flatbuffers.Offset, TRANSPONDERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMST;
    unpackTo(_o: CMST): void;
}
export declare class CMST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ENTITY: string | Uint8Array | null;
    TRANSPONDERS: (string)[];
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ENTITY?: string | Uint8Array | null, TRANSPONDERS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMS.d.ts.map