import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMDynValueType } from './CZMDynValueType.js';
/**
 * A single interval in a time-varying property
 */
export declare class CZMDynInterval implements flatbuffers.IUnpackableObject<CZMDynIntervalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMDynInterval;
    static getRootAsCZMDynInterval(bb: flatbuffers.ByteBuffer, obj?: CZMDynInterval): CZMDynInterval;
    static getSizePrefixedRootAsCZMDynInterval(bb: flatbuffers.ByteBuffer, obj?: CZMDynInterval): CZMDynInterval;
    /**
     * ISO 8601 interval string
     */
    INTERVAL(): string | null;
    INTERVAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value type
     */
    VALUE_TYPE(): CZMDynValueType;
    /**
     * Numeric value (when VALUE_TYPE is NUMBER)
     */
    NUMBER_VALUE(): number;
    /**
     * Boolean value (when VALUE_TYPE is BOOLEAN)
     */
    BOOLEAN_VALUE(): boolean;
    /**
     * String value (when VALUE_TYPE is STRING)
     */
    STRING_VALUE(): string | null;
    STRING_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color value (when VALUE_TYPE is COLOR)
     */
    COLOR_VALUE(obj?: CZMColor): CZMColor | null;
    /**
     * Array value for cartesian/nearFarScalar types
     */
    ARRAY_VALUE(index: number): number | null;
    arrayValueLength(): number;
    arrayValueArray(): Float64Array | null;
    static startCZMDynInterval(builder: flatbuffers.Builder): void;
    static addInterval(builder: flatbuffers.Builder, INTERVALOffset: flatbuffers.Offset): void;
    static addValueType(builder: flatbuffers.Builder, VALUE_TYPE: CZMDynValueType): void;
    static addNumberValue(builder: flatbuffers.Builder, NUMBER_VALUE: number): void;
    static addBooleanValue(builder: flatbuffers.Builder, BOOLEAN_VALUE: boolean): void;
    static addStringValue(builder: flatbuffers.Builder, STRING_VALUEOffset: flatbuffers.Offset): void;
    static addColorValue(builder: flatbuffers.Builder, COLOR_VALUEOffset: flatbuffers.Offset): void;
    static addArrayValue(builder: flatbuffers.Builder, ARRAY_VALUEOffset: flatbuffers.Offset): void;
    static createArrayValueVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createArrayValueVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startArrayValueVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCZMDynInterval(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMDynIntervalT;
    unpackTo(_o: CZMDynIntervalT): void;
}
export declare class CZMDynIntervalT implements flatbuffers.IGeneratedObject {
    INTERVAL: string | Uint8Array | null;
    VALUE_TYPE: CZMDynValueType;
    NUMBER_VALUE: number;
    BOOLEAN_VALUE: boolean;
    STRING_VALUE: string | Uint8Array | null;
    COLOR_VALUE: CZMColorT | null;
    ARRAY_VALUE: (number)[];
    constructor(INTERVAL?: string | Uint8Array | null, VALUE_TYPE?: CZMDynValueType, NUMBER_VALUE?: number, BOOLEAN_VALUE?: boolean, STRING_VALUE?: string | Uint8Array | null, COLOR_VALUE?: CZMColorT | null, ARRAY_VALUE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMDynInterval.d.ts.map