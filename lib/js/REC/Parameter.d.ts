import * as flatbuffers from 'flatbuffers';
import { ParameterProperties, ParameterPropertiesT } from './ParameterProperties.js';
/**
 * Parameter definition
 */
export declare class Parameter implements flatbuffers.IUnpackableObject<ParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Parameter;
    static getRootAsParameter(bb: flatbuffers.ByteBuffer, obj?: Parameter): Parameter;
    static getSizePrefixedRootAsParameter(bb: flatbuffers.ByteBuffer, obj?: Parameter): Parameter;
    /**
     * Parameter name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parameter type
     */
    PARAMETER_TYPE_REF(): string | null;
    PARAMETER_TYPE_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameter properties
     */
    PROPERTIES(obj?: ParameterProperties): ParameterProperties | null;
    /**
     * Physical address mapping
     */
    PHYSICAL_ADDRESS(): string | null;
    PHYSICAL_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startParameter(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addParameterTypeRef(builder: flatbuffers.Builder, PARAMETER_TYPE_REFOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addProperties(builder: flatbuffers.Builder, PROPERTIESOffset: flatbuffers.Offset): void;
    static addPhysicalAddress(builder: flatbuffers.Builder, PHYSICAL_ADDRESSOffset: flatbuffers.Offset): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static endParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ParameterT;
    unpackTo(_o: ParameterT): void;
}
export declare class ParameterT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    PARAMETER_TYPE_REF: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    PROPERTIES: ParameterPropertiesT | null;
    PHYSICAL_ADDRESS: string | Uint8Array | null;
    INITIAL_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, PARAMETER_TYPE_REF?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, PROPERTIES?: ParameterPropertiesT | null, PHYSICAL_ADDRESS?: string | Uint8Array | null, INITIAL_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Parameter.d.ts.map