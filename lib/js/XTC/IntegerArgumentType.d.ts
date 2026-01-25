import * as flatbuffers from 'flatbuffers';
import { IntegerDataEncoding, IntegerDataEncodingT } from './IntegerDataEncoding.js';
import { Unit, UnitT } from './Unit.js';
/**
 * Integer argument type
 */
export declare class IntegerArgumentType implements flatbuffers.IUnpackableObject<IntegerArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IntegerArgumentType;
    static getRootAsIntegerArgumentType(bb: flatbuffers.ByteBuffer, obj?: IntegerArgumentType): IntegerArgumentType;
    static getSizePrefixedRootAsIntegerArgumentType(bb: flatbuffers.ByteBuffer, obj?: IntegerArgumentType): IntegerArgumentType;
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
    DATA_ENCODING(obj?: IntegerDataEncoding): IntegerDataEncoding | null;
    /**
     * Minimum valid value
     */
    VALID_MIN(): bigint;
    /**
     * Maximum valid value
     */
    VALID_MAX(): bigint;
    /**
     * Signed integer (true) or unsigned (false)
     */
    SIGNED(): boolean;
    /**
     * Size in bits
     */
    SIZE_IN_BITS(): number;
    /**
     * Initial/default value
     */
    INITIAL_VALUE(): bigint;
    static startIntegerArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static createUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataEncoding(builder: flatbuffers.Builder, DATA_ENCODINGOffset: flatbuffers.Offset): void;
    static addValidMin(builder: flatbuffers.Builder, VALID_MIN: bigint): void;
    static addValidMax(builder: flatbuffers.Builder, VALID_MAX: bigint): void;
    static addSigned(builder: flatbuffers.Builder, SIGNED: boolean): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addInitialValue(builder: flatbuffers.Builder, INITIAL_VALUE: bigint): void;
    static endIntegerArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): IntegerArgumentTypeT;
    unpackTo(_o: IntegerArgumentTypeT): void;
}
export declare class IntegerArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    UNITS: (UnitT)[];
    DATA_ENCODING: IntegerDataEncodingT | null;
    VALID_MIN: bigint;
    VALID_MAX: bigint;
    SIGNED: boolean;
    SIZE_IN_BITS: number;
    INITIAL_VALUE: bigint;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, UNITS?: (UnitT)[], DATA_ENCODING?: IntegerDataEncodingT | null, VALID_MIN?: bigint, VALID_MAX?: bigint, SIGNED?: boolean, SIZE_IN_BITS?: number, INITIAL_VALUE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IntegerArgumentType.d.ts.map