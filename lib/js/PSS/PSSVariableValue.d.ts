import * as flatbuffers from 'flatbuffers';
export declare class PSSVariableValue implements flatbuffers.IUnpackableObject<PSSVariableValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSVariableValue;
    static getRootAsPSSVariableValue(bb: flatbuffers.ByteBuffer, obj?: PSSVariableValue): PSSVariableValue;
    static getSizePrefixedRootAsPSSVariableValue(bb: flatbuffers.ByteBuffer, obj?: PSSVariableValue): PSSVariableValue;
    VARIABLE_ID(): string;
    VARIABLE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VALUE(): number;
    static startPSSVariableValue(builder: flatbuffers.Builder): void;
    static addVariableId(builder: flatbuffers.Builder, VARIABLE_IDOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static endPSSVariableValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPSSVariableValue(builder: flatbuffers.Builder, VARIABLE_IDOffset: flatbuffers.Offset, VALUE: number): flatbuffers.Offset;
    unpack(): PSSVariableValueT;
    unpackTo(_o: PSSVariableValueT): void;
}
export declare class PSSVariableValueT implements flatbuffers.IGeneratedObject {
    VARIABLE_ID: string | Uint8Array | null;
    VALUE: number;
    constructor(VARIABLE_ID?: string | Uint8Array | null, VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSVariableValue.d.ts.map