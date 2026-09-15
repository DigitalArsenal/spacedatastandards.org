import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
import { pceResultStatus } from './pceResultStatus.js';
import { pceUnit } from './pceUnit.js';
/**
 * One parameter's value at one state. STATUS is per value: a request never
 * fails as a whole because one name is unavailable.
 */
export declare class PCEParameterValue implements flatbuffers.IUnpackableObject<PCEParameterValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterValue;
    static getRootAsPCEParameterValue(bb: flatbuffers.ByteBuffer, obj?: PCEParameterValue): PCEParameterValue;
    static getSizePrefixedRootAsPCEParameterValue(bb: flatbuffers.ByteBuffer, obj?: PCEParameterValue): PCEParameterValue;
    PARAMETER(): pceParameter;
    /**
     * REQUIRED when PARAMETER is PROVIDER_DEFINED.
     */
    PROVIDER_DEFINED_NAME(): string | null;
    PROVIDER_DEFINED_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): pceResultStatus;
    /**
     * Scalar, integer or boolean value. Absent for vector and matrix types.
     */
    VALUE(): number;
    /**
     * Vector or matrix values, row-major. Absent for scalar types; a scalar is
     * NEVER also written here.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    /**
     * Matrix shape, REQUIRED when the descriptor's DATA_TYPE is REAL_MATRIX.
     */
    ROW_COUNT(): number;
    COLUMN_COUNT(): number;
    /**
     * Text or ISO 8601 epoch value.
     */
    STRING_VALUE(): string | null;
    STRING_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unit the value is expressed in, restating the descriptor so a value is
     * self-describing when it travels without its catalog.
     */
    UNIT(): pceUnit;
    /**
     * Why STATUS is not OK, in capability language.
     */
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEParameterValue(builder: flatbuffers.Builder): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedName(builder: flatbuffers.Builder, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: pceResultStatus): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRowCount(builder: flatbuffers.Builder, ROW_COUNT: number): void;
    static addColumnCount(builder: flatbuffers.Builder, COLUMN_COUNT: number): void;
    static addStringValue(builder: flatbuffers.Builder, STRING_VALUEOffset: flatbuffers.Offset): void;
    static addUnit(builder: flatbuffers.Builder, UNIT: pceUnit): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static endPCEParameterValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterValue(builder: flatbuffers.Builder, PARAMETER: pceParameter, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset, STATUS: pceResultStatus, VALUE: number, VALUESOffset: flatbuffers.Offset, ROW_COUNT: number, COLUMN_COUNT: number, STRING_VALUEOffset: flatbuffers.Offset, UNIT: pceUnit, MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEParameterValueT;
    unpackTo(_o: PCEParameterValueT): void;
}
export declare class PCEParameterValueT implements flatbuffers.IGeneratedObject {
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_NAME: string | Uint8Array | null;
    STATUS: pceResultStatus;
    VALUE: number;
    VALUES: (number)[];
    ROW_COUNT: number;
    COLUMN_COUNT: number;
    STRING_VALUE: string | Uint8Array | null;
    UNIT: pceUnit;
    MESSAGE: string | Uint8Array | null;
    constructor(PARAMETER?: pceParameter, PROVIDER_DEFINED_NAME?: string | Uint8Array | null, STATUS?: pceResultStatus, VALUE?: number, VALUES?: (number)[], ROW_COUNT?: number, COLUMN_COUNT?: number, STRING_VALUE?: string | Uint8Array | null, UNIT?: pceUnit, MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterValue.d.ts.map