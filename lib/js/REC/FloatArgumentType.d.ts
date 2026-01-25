import * as flatbuffers from 'flatbuffers';
import { FloatDataEncoding, FloatDataEncodingT } from './FloatDataEncoding.js';
import { Unit, UnitT } from './Unit.js';
/**
 * Float argument type
 */
export declare class FloatArgumentType implements flatbuffers.IUnpackableObject<FloatArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FloatArgumentType;
    static getRootAsFloatArgumentType(bb: flatbuffers.ByteBuffer, obj?: FloatArgumentType): FloatArgumentType;
    static getSizePrefixedRootAsFloatArgumentType(bb: flatbuffers.ByteBuffer, obj?: FloatArgumentType): FloatArgumentType;
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
     * Units
     */
    UNITS(index: number, obj?: Unit): Unit | null;
    unitsLength(): number;
    /**
     * Data encoding
     */
    DATA_ENCODING(obj?: FloatDataEncoding): FloatDataEncoding | null;
    /**
     * Minimum valid value
     */
    VALID_MIN(): number;
    /**
     * Maximum valid value
     */
    VALID_MAX(): number;
    /**
     * Size in bits
     */
    SIZE_IN_BITS(): number;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): number;
    static startFloatArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static createUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addValidMin(builder: flatbuffers.Builder, VALID_MIN: number): void;
    static addValidMax(builder: flatbuffers.Builder, VALID_MAX: number): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: number): void;
    static endFloatArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FloatArgumentTypeT;
    unpackTo(_o: FloatArgumentTypeT): void;
}
export declare class FloatArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    UNITS: (UnitT)[];
    DATA_ENCODING: FloatDataEncodingT | null;
    VALID_MIN: number;
    VALID_MAX: number;
    SIZE_IN_BITS: number;
    INITIAL_VALUE: number;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, UNITS?: (UnitT)[], DATA_ENCODING?: FloatDataEncodingT | null, VALID_MIN?: number, VALID_MAX?: number, SIZE_IN_BITS?: number, INITIAL_VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FloatArgumentType.d.ts.map