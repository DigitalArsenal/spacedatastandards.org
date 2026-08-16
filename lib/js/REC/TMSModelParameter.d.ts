import * as flatbuffers from 'flatbuffers';
/**
 * One parameter of the propagation model, stated by name so a model
 * registry can evolve without schema change.
 */
export declare class TMSModelParameter implements flatbuffers.IUnpackableObject<TMSModelParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMSModelParameter;
    static getRootAsTMSModelParameter(bb: flatbuffers.ByteBuffer, obj?: TMSModelParameter): TMSModelParameter;
    static getSizePrefixedRootAsTMSModelParameter(bb: flatbuffers.ByteBuffer, obj?: TMSModelParameter): TMSModelParameter;
    /**
     * Parameter name within the MODEL_ID model's own registry, verbatim.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Parameter value.
     */
    VALUE(): number;
    /**
     * Units of VALUE, verbatim. Required: a unitless parameter states so
     * explicitly (e.g. "1").
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startTMSModelParameter(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static endTMSModelParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMSModelParameter(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUE: number, UNITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMSModelParameterT;
    unpackTo(_o: TMSModelParameterT): void;
}
export declare class TMSModelParameterT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: number;
    UNITS: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, VALUE?: number, UNITS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMSModelParameter.d.ts.map