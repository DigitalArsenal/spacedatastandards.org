import * as flatbuffers from 'flatbuffers';
import { EnumerationValue, EnumerationValueT } from './EnumerationValue.js';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
/**
 * Enumerated argument type
 */
export declare class EnumeratedArgumentType implements flatbuffers.IUnpackableObject<EnumeratedArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EnumeratedArgumentType;
    static getRootAsEnumeratedArgumentType(bb: flatbuffers.ByteBuffer, obj?: EnumeratedArgumentType): EnumeratedArgumentType;
    static getSizePrefixedRootAsEnumeratedArgumentType(bb: flatbuffers.ByteBuffer, obj?: EnumeratedArgumentType): EnumeratedArgumentType;
    /**
     * Type name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Data encoding
     */
    DATA_ENCODING(obj?: IntegerDataEncoding): IntegerDataEncoding | null;
    /**
     * Enumeration values list
     */
    ENUMERATION_LIST(index: number, obj?: EnumerationValue): EnumerationValue | null;
    enumerationListLength(): number;
    /**
     * Initial/default value label
     */
    INITIAL_VALUE(): string | null;
    INITIAL_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEnumeratedArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addEnumerationList(builder: flatbuffers.Builder, ENUMERATION_LISTOffset: flatbuffers.Offset): void;
    static createEnumerationListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnumerationListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUEOffset: flatbuffers.Offset): void;
    static endEnumeratedArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EnumeratedArgumentTypeT;
    unpackTo(_o: EnumeratedArgumentTypeT): void;
}
export declare class EnumeratedArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    DATA_ENCODING: IntegerDataEncodingT | null;
    ENUMERATION_LIST: (EnumerationValueT)[];
    INITIAL_VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, DATA_ENCODING?: IntegerDataEncodingT | null, ENUMERATION_LIST?: (EnumerationValueT)[], INITIAL_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EnumeratedArgumentType.d.ts.map