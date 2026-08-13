import * as flatbuffers from 'flatbuffers';
/**
 * A named parameter of a model binding, with its unit stated. There is no
 * encoding for a parameter value without a unit.
 */
export declare class RFLModelParameter implements flatbuffers.IUnpackableObject<RFLModelParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLModelParameter;
    static getRootAsRFLModelParameter(bb: flatbuffers.ByteBuffer, obj?: RFLModelParameter): RFLModelParameter;
    static getSizePrefixedRootAsRFLModelParameter(bb: flatbuffers.ByteBuffer, obj?: RFLModelParameter): RFLModelParameter;
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VALUE(): number;
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Non-numeric parameter value, when the parameter is categorical.
     */
    TEXT_VALUE(): string | null;
    TEXT_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFLModelParameter(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addTextValue(builder: flatbuffers.Builder, TEXT_VALUEOffset: flatbuffers.Offset): void;
    static endRFLModelParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLModelParameter(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUE: number, UNITSOffset: flatbuffers.Offset, TEXT_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFLModelParameterT;
    unpackTo(_o: RFLModelParameterT): void;
}
export declare class RFLModelParameterT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: number;
    UNITS: string | Uint8Array | null;
    TEXT_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, VALUE?: number, UNITS?: string | Uint8Array | null, TEXT_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLModelParameter.d.ts.map