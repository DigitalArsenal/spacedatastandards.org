import * as flatbuffers from 'flatbuffers';
import { AggregateArgumentType, AggregateArgumentTypeT } from './AggregateArgumentType.js';
import { BinaryArgumentType, BinaryArgumentTypeT } from './BinaryArgumentType.js';
import { BooleanArgumentType, BooleanArgumentTypeT } from './BooleanArgumentType.js';
import { EnumeratedArgumentType, EnumeratedArgumentTypeT } from './EnumeratedArgumentType.js';
import { FloatArgumentType, FloatArgumentTypeT } from './FloatArgumentType.js';
import { IntegerArgumentType, IntegerArgumentTypeT } from './IntegerArgumentType.js';
import { StringArgumentType, StringArgumentTypeT } from './StringArgumentType.js';
/**
 * Collection of argument types
 */
export declare class ArgumentTypeSet implements flatbuffers.IUnpackableObject<ArgumentTypeSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArgumentTypeSet;
    static getRootAsArgumentTypeSet(bb: flatbuffers.ByteBuffer, obj?: ArgumentTypeSet): ArgumentTypeSet;
    static getSizePrefixedRootAsArgumentTypeSet(bb: flatbuffers.ByteBuffer, obj?: ArgumentTypeSet): ArgumentTypeSet;
    /**
     * Integer argument types
     */
    INTEGER_TYPES(index: number, obj?: IntegerArgumentType): IntegerArgumentType | null;
    integerTypesLength(): number;
    /**
     * Float argument types
     */
    FLOAT_TYPES(index: number, obj?: FloatArgumentType): FloatArgumentType | null;
    floatTypesLength(): number;
    /**
     * String argument types
     */
    STRING_TYPES(index: number, obj?: StringArgumentType): StringArgumentType | null;
    stringTypesLength(): number;
    /**
     * Boolean argument types
     */
    BOOLEAN_TYPES(index: number, obj?: BooleanArgumentType): BooleanArgumentType | null;
    booleanTypesLength(): number;
    /**
     * Enumerated argument types
     */
    ENUMERATED_TYPES(index: number, obj?: EnumeratedArgumentType): EnumeratedArgumentType | null;
    enumeratedTypesLength(): number;
    /**
     * Binary argument types
     */
    BINARY_TYPES(index: number, obj?: BinaryArgumentType): BinaryArgumentType | null;
    binaryTypesLength(): number;
    /**
     * Aggregate argument types
     */
    AGGREGATE_TYPES(index: number, obj?: AggregateArgumentType): AggregateArgumentType | null;
    aggregateTypesLength(): number;
    static startArgumentTypeSet(builder: flatbuffers.Builder): void;
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
    static addAggregateTypes(builder: flatbuffers.Builder, AGGREGATE_TYPESOffset: flatbuffers.Offset): void;
    static createAggregateTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAggregateTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endArgumentTypeSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createArgumentTypeSet(builder: flatbuffers.Builder, INTEGER_TYPESOffset: flatbuffers.Offset, FLOAT_TYPESOffset: flatbuffers.Offset, STRING_TYPESOffset: flatbuffers.Offset, BOOLEAN_TYPESOffset: flatbuffers.Offset, ENUMERATED_TYPESOffset: flatbuffers.Offset, BINARY_TYPESOffset: flatbuffers.Offset, AGGREGATE_TYPESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ArgumentTypeSetT;
    unpackTo(_o: ArgumentTypeSetT): void;
}
export declare class ArgumentTypeSetT implements flatbuffers.IGeneratedObject {
    INTEGER_TYPES: (IntegerArgumentTypeT)[];
    FLOAT_TYPES: (FloatArgumentTypeT)[];
    STRING_TYPES: (StringArgumentTypeT)[];
    BOOLEAN_TYPES: (BooleanArgumentTypeT)[];
    ENUMERATED_TYPES: (EnumeratedArgumentTypeT)[];
    BINARY_TYPES: (BinaryArgumentTypeT)[];
    AGGREGATE_TYPES: (AggregateArgumentTypeT)[];
    constructor(INTEGER_TYPES?: (IntegerArgumentTypeT)[], FLOAT_TYPES?: (FloatArgumentTypeT)[], STRING_TYPES?: (StringArgumentTypeT)[], BOOLEAN_TYPES?: (BooleanArgumentTypeT)[], ENUMERATED_TYPES?: (EnumeratedArgumentTypeT)[], BINARY_TYPES?: (BinaryArgumentTypeT)[], AGGREGATE_TYPES?: (AggregateArgumentTypeT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArgumentTypeSet.d.ts.map