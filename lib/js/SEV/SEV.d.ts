import * as flatbuffers from 'flatbuffers';
/**
 * Space Environment Observation Detail
 */
export declare class SEV implements flatbuffers.IUnpackableObject<SEVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SEV;
    static getRootAsSEV(bb: flatbuffers.ByteBuffer, obj?: SEV): SEV;
    static getSizePrefixedRootAsSEV(bb: flatbuffers.ByteBuffer, obj?: SEV): SEV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    OB_TYPE(): string | null;
    OB_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OB_UO_M(): string | null;
    OB_UO_M(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OB_VALUE(): number;
    OB_STRING(): string | null;
    OB_STRING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OB_ARRAY(index: number): string;
    OB_ARRAY(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    obArrayLength(): number;
    OB_BOOL(): boolean;
    OB_QUALITY(): string | null;
    OB_QUALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OB_DESCRIPTION(): string | null;
    OB_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSEV(builder: flatbuffers.Builder): void;
    static addObType(builder: flatbuffers.Builder, OB_TYPEOffset: flatbuffers.Offset): void;
    static addObUoM(builder: flatbuffers.Builder, OB_UO_MOffset: flatbuffers.Offset): void;
    static addObValue(builder: flatbuffers.Builder, OB_VALUE: number): void;
    static addObString(builder: flatbuffers.Builder, OB_STRINGOffset: flatbuffers.Offset): void;
    static addObArray(builder: flatbuffers.Builder, OB_ARRAYOffset: flatbuffers.Offset): void;
    static createObArrayVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObArrayVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObBool(builder: flatbuffers.Builder, OB_BOOL: boolean): void;
    static addObQuality(builder: flatbuffers.Builder, OB_QUALITYOffset: flatbuffers.Offset): void;
    static addObDescription(builder: flatbuffers.Builder, OB_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endSEV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSEVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSEVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSEV(builder: flatbuffers.Builder, OB_TYPEOffset: flatbuffers.Offset, OB_UO_MOffset: flatbuffers.Offset, OB_VALUE: number, OB_STRINGOffset: flatbuffers.Offset, OB_ARRAYOffset: flatbuffers.Offset, OB_BOOL: boolean, OB_QUALITYOffset: flatbuffers.Offset, OB_DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SEVT;
    unpackTo(_o: SEVT): void;
}
export declare class SEVT implements flatbuffers.IGeneratedObject {
    OB_TYPE: string | Uint8Array | null;
    OB_UO_M: string | Uint8Array | null;
    OB_VALUE: number;
    OB_STRING: string | Uint8Array | null;
    OB_ARRAY: (string)[];
    OB_BOOL: boolean;
    OB_QUALITY: string | Uint8Array | null;
    OB_DESCRIPTION: string | Uint8Array | null;
    constructor(OB_TYPE?: string | Uint8Array | null, OB_UO_M?: string | Uint8Array | null, OB_VALUE?: number, OB_STRING?: string | Uint8Array | null, OB_ARRAY?: (string)[], OB_BOOL?: boolean, OB_QUALITY?: string | Uint8Array | null, OB_DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SEV.d.ts.map