import * as flatbuffers from 'flatbuffers';
import { AbsoluteTimeParameterType, AbsoluteTimeParameterTypeT } from './AbsoluteTimeParameterType.js';
import { AggregateParameterType, AggregateParameterTypeT } from './AggregateParameterType.js';
import { ArrayParameterType, ArrayParameterTypeT } from './ArrayParameterType.js';
import { BinaryParameterType, BinaryParameterTypeT } from './BinaryParameterType.js';
import { BooleanParameterType, BooleanParameterTypeT } from './BooleanParameterType.js';
import { EnumeratedParameterType, EnumeratedParameterTypeT } from './EnumeratedParameterType.js';
import { FloatParameterType, FloatParameterTypeT } from './FloatParameterType.js';
import { IntegerParameterType, IntegerParameterTypeT } from './IntegerParameterType.js';
import { RelativeTimeParameterType, RelativeTimeParameterTypeT } from './RelativeTimeParameterType.js';
import { StringParameterType, StringParameterTypeT } from './StringParameterType.js';
/**
 * Collection of all parameter types
 */
export declare class ParameterTypeSet implements flatbuffers.IUnpackableObject<ParameterTypeSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ParameterTypeSet;
    static getRootAsParameterTypeSet(bb: flatbuffers.ByteBuffer, obj?: ParameterTypeSet): ParameterTypeSet;
    static getSizePrefixedRootAsParameterTypeSet(bb: flatbuffers.ByteBuffer, obj?: ParameterTypeSet): ParameterTypeSet;
    /**
     * Integer parameter types
     */
    INTEGER_TYPES(index: number, obj?: IntegerParameterType): IntegerParameterType | null;
    integerTypesLength(): number;
    /**
     * Float parameter types
     */
    FLOAT_TYPES(index: number, obj?: FloatParameterType): FloatParameterType | null;
    floatTypesLength(): number;
    /**
     * String parameter types
     */
    STRING_TYPES(index: number, obj?: StringParameterType): StringParameterType | null;
    stringTypesLength(): number;
    /**
     * Boolean parameter types
     */
    BOOLEAN_TYPES(index: number, obj?: BooleanParameterType): BooleanParameterType | null;
    booleanTypesLength(): number;
    /**
     * Enumerated parameter types
     */
    ENUMERATED_TYPES(index: number, obj?: EnumeratedParameterType): EnumeratedParameterType | null;
    enumeratedTypesLength(): number;
    /**
     * Binary parameter types
     */
    BINARY_TYPES(index: number, obj?: BinaryParameterType): BinaryParameterType | null;
    binaryTypesLength(): number;
    /**
     * Absolute time parameter types
     */
    ABSOLUTE_TIME_TYPES(index: number, obj?: AbsoluteTimeParameterType): AbsoluteTimeParameterType | null;
    absoluteTimeTypesLength(): number;
    /**
     * Relative time parameter types
     */
    RELATIVE_TIME_TYPES(index: number, obj?: RelativeTimeParameterType): RelativeTimeParameterType | null;
    relativeTimeTypesLength(): number;
    /**
     * Array parameter types
     */
    ARRAY_TYPES(index: number, obj?: ArrayParameterType): ArrayParameterType | null;
    arrayTypesLength(): number;
    /**
     * Aggregate parameter types
     */
    AGGREGATE_TYPES(index: number, obj?: AggregateParameterType): AggregateParameterType | null;
    aggregateTypesLength(): number;
    static startParameterTypeSet(builder: flatbuffers.Builder): void;
    static addIntegerTypes(builder: flatbuffers.Builder, INTEGER_TYPESOffset: flatbuffers.Offset): void;
    static createIntegerTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntegerTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFloatTypes(builder: flatbuffers.Builder, FLOAT_TYPESOffset: flatbuffers.Offset): void;
    static createFloatTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFloatTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStringTypes(builder: flatbuffers.Builder, STRING_TYPESOffset: flatbuffers.Offset): void;
    static createStringTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStringTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBooleanTypes(builder: flatbuffers.Builder, BOOLEAN_TYPESOffset: flatbuffers.Offset): void;
    static createBooleanTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBooleanTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnumeratedTypes(builder: flatbuffers.Builder, ENUMERATED_TYPESOffset: flatbuffers.Offset): void;
    static createEnumeratedTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnumeratedTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBinaryTypes(builder: flatbuffers.Builder, BINARY_TYPESOffset: flatbuffers.Offset): void;
    static createBinaryTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBinaryTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAbsoluteTimeTypes(builder: flatbuffers.Builder, ABSOLUTE_TIME_TYPESOffset: flatbuffers.Offset): void;
    static createAbsoluteTimeTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAbsoluteTimeTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRelativeTimeTypes(builder: flatbuffers.Builder, RELATIVE_TIME_TYPESOffset: flatbuffers.Offset): void;
    static createRelativeTimeTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRelativeTimeTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addArrayTypes(builder: flatbuffers.Builder, ARRAY_TYPESOffset: flatbuffers.Offset): void;
    static createArrayTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArrayTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAggregateTypes(builder: flatbuffers.Builder, AGGREGATE_TYPESOffset: flatbuffers.Offset): void;
    static createAggregateTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAggregateTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endParameterTypeSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createParameterTypeSet(builder: flatbuffers.Builder, INTEGER_TYPESOffset: flatbuffers.Offset, FLOAT_TYPESOffset: flatbuffers.Offset, STRING_TYPESOffset: flatbuffers.Offset, BOOLEAN_TYPESOffset: flatbuffers.Offset, ENUMERATED_TYPESOffset: flatbuffers.Offset, BINARY_TYPESOffset: flatbuffers.Offset, ABSOLUTE_TIME_TYPESOffset: flatbuffers.Offset, RELATIVE_TIME_TYPESOffset: flatbuffers.Offset, ARRAY_TYPESOffset: flatbuffers.Offset, AGGREGATE_TYPESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ParameterTypeSetT;
    unpackTo(_o: ParameterTypeSetT): void;
}
export declare class ParameterTypeSetT implements flatbuffers.IGeneratedObject {
    INTEGER_TYPES: (IntegerParameterTypeT)[];
    FLOAT_TYPES: (FloatParameterTypeT)[];
    STRING_TYPES: (StringParameterTypeT)[];
    BOOLEAN_TYPES: (BooleanParameterTypeT)[];
    ENUMERATED_TYPES: (EnumeratedParameterTypeT)[];
    BINARY_TYPES: (BinaryParameterTypeT)[];
    ABSOLUTE_TIME_TYPES: (AbsoluteTimeParameterTypeT)[];
    RELATIVE_TIME_TYPES: (RelativeTimeParameterTypeT)[];
    ARRAY_TYPES: (ArrayParameterTypeT)[];
    AGGREGATE_TYPES: (AggregateParameterTypeT)[];
    constructor(INTEGER_TYPES?: (IntegerParameterTypeT)[], FLOAT_TYPES?: (FloatParameterTypeT)[], STRING_TYPES?: (StringParameterTypeT)[], BOOLEAN_TYPES?: (BooleanParameterTypeT)[], ENUMERATED_TYPES?: (EnumeratedParameterTypeT)[], BINARY_TYPES?: (BinaryParameterTypeT)[], ABSOLUTE_TIME_TYPES?: (AbsoluteTimeParameterTypeT)[], RELATIVE_TIME_TYPES?: (RelativeTimeParameterTypeT)[], ARRAY_TYPES?: (ArrayParameterTypeT)[], AGGREGATE_TYPES?: (AggregateParameterTypeT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ParameterTypeSet.d.ts.map