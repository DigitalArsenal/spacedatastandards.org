import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
export declare class SLPVariable implements flatbuffers.IUnpackableObject<SLPVariableT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPVariable;
    static getRootAsSLPVariable(bb: flatbuffers.ByteBuffer, obj?: SLPVariable): SLPVariable;
    static getSizePrefixedRootAsSLPVariable(bb: flatbuffers.ByteBuffer, obj?: SLPVariable): SLPVariable;
    VARIABLE_ID(): string;
    VARIABLE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PARAMETER(): pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME(): string | null;
    PROVIDER_DEFINED_PARAMETER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INITIAL_VALUE(): number;
    LOWER_BOUND(): number;
    UPPER_BOUND(): number;
    PERTURBATION(): number;
    SCALE(): number;
    static startSLPVariable(builder: flatbuffers.Builder): void;
    static addVariableId(builder: flatbuffers.Builder, VARIABLE_IDOffset: flatbuffers.Offset): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedParameterName(builder: flatbuffers.Builder, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: number): void;
    static addLowerBound(builder: flatbuffers.Builder, LOWER_BOUND: number): void;
    static addUpperBound(builder: flatbuffers.Builder, UPPER_BOUND: number): void;
    static addPerturbation(builder: flatbuffers.Builder, PERTURBATION: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static endSLPVariable(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPVariable(builder: flatbuffers.Builder, VARIABLE_IDOffset: flatbuffers.Offset, PARAMETER: pceParameter, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset, INITIAL_VALUE: number, LOWER_BOUND: number, UPPER_BOUND: number, PERTURBATION: number, SCALE: number): flatbuffers.Offset;
    unpack(): SLPVariableT;
    unpackTo(_o: SLPVariableT): void;
}
export declare class SLPVariableT implements flatbuffers.IGeneratedObject {
    VARIABLE_ID: string | Uint8Array | null;
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME: string | Uint8Array | null;
    INITIAL_VALUE: number;
    LOWER_BOUND: number;
    UPPER_BOUND: number;
    PERTURBATION: number;
    SCALE: number;
    constructor(VARIABLE_ID?: string | Uint8Array | null, PARAMETER?: pceParameter, PROVIDER_DEFINED_PARAMETER_NAME?: string | Uint8Array | null, INITIAL_VALUE?: number, LOWER_BOUND?: number, UPPER_BOUND?: number, PERTURBATION?: number, SCALE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPVariable.d.ts.map