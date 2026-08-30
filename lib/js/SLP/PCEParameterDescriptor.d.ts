import * as flatbuffers from 'flatbuffers';
import { frmStateRepresentation } from './frmStateRepresentation.js';
import { pceAvailability } from './pceAvailability.js';
import { pceDataType } from './pceDataType.js';
import { pceFrameDependency } from './pceFrameDependency.js';
import { pceOwnerClass } from './pceOwnerClass.js';
import { pceParameter } from './pceParameter.js';
import { pceUnit } from './pceUnit.js';
import { rfmAxisType } from './rfmAxisType.js';
import { rfmOriginKind } from './rfmOriginKind.js';
/**
 * One roster entry as a named publisher implements it. The catalog is the
 * authority a consumer resolves a name through BEFORE it asks for a value.
 */
export declare class PCEParameterDescriptor implements flatbuffers.IUnpackableObject<PCEParameterDescriptorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterDescriptor;
    static getRootAsPCEParameterDescriptor(bb: flatbuffers.ByteBuffer, obj?: PCEParameterDescriptor): PCEParameterDescriptor;
    static getSizePrefixedRootAsPCEParameterDescriptor(bb: flatbuffers.ByteBuffer, obj?: PCEParameterDescriptor): PCEParameterDescriptor;
    PARAMETER(): pceParameter;
    /**
     * REQUIRED when PARAMETER is PROVIDER_DEFINED, absent otherwise.
     */
    PROVIDER_DEFINED_NAME(): string | null;
    PROVIDER_DEFINED_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OWNER_CLASS(): pceOwnerClass;
    DATA_TYPE(): pceDataType;
    UNIT(): pceUnit;
    /**
     * REQUIRED when UNIT is PROVIDER_DEFINED, absent otherwise.
     */
    PROVIDER_DEFINED_UNIT_SYMBOL(): string | null;
    PROVIDER_DEFINED_UNIT_SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of values for REAL_VECTOR, and rows times columns for
     * REAL_MATRIX. Absent or 1 for a scalar.
     */
    ELEMENT_COUNT(): number;
    /**
     * Matrix shape, REQUIRED when DATA_TYPE is REAL_MATRIX.
     */
    ROW_COUNT(): number;
    COLUMN_COUNT(): number;
    FRAME_DEPENDENCY(): pceFrameDependency;
    /**
     * The one axis set this parameter is defined for, when it is defined for
     * only one: planetodetic quantities require BODY_FIXED. UNSPECIFIED means
     * any axis set the request names.
     */
    REQUIRED_AXIS_TYPE(): rfmAxisType;
    /**
     * The one origin kind this parameter is defined for, when it is defined
     * for only one. UNSPECIFIED means any origin the request names.
     */
    REQUIRED_ORIGIN_KIND(): rfmOriginKind;
    /**
     * The value changes with the time system it is asked for, independently of
     * the frame.
     */
    TIME_SYSTEM_DEPENDENT(): boolean;
    /**
     * The element set this parameter is a member of, when it is a member of
     * one; UNSPECIFIED for a derived scalar that belongs to no set.
     */
    STATE_REPRESENTATION(): frmStateRepresentation;
    AVAILABILITY(): pceAvailability;
    /**
     * REQUIRED when AVAILABILITY is DECLARED_UNAVAILABLE: what is missing,
     * stated as a capability, so a consumer can report the refusal.
     */
    UNAVAILABLE_REASON(): string | null;
    UNAVAILABLE_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REQUIRED when AVAILABILITY is DEPRECATED: the parameter to migrate to.
     */
    SUPERSEDED_BY(): pceParameter;
    /**
     * The publisher can bracket and refine a root of this parameter, so it may
     * be used as a stopping condition or a generic event function. A parameter
     * that is not continuous in time MUST declare false.
     */
    SUPPORTS_STOPPING_CONDITION(): boolean;
    /**
     * The parameter can be written as well as read, so it may be a targeting
     * variable.
     */
    IS_SETTABLE(): boolean;
    /**
     * The value wraps: a goal crossing must be tested modulo the cycle.
     */
    IS_CYCLIC(): boolean;
    /**
     * Inclusive lower and exclusive upper bound of the cycle, REQUIRED when
     * IS_CYCLIC is true.
     */
    CYCLE_LOWER_BOUND(): number;
    CYCLE_UPPER_BOUND(): number;
    /**
     * One sentence, capability language, no product or organization names.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEParameterDescriptor(builder: flatbuffers.Builder): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedName(builder: flatbuffers.Builder, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset): void;
    static addOwnerClass(builder: flatbuffers.Builder, OWNER_CLASS: pceOwnerClass): void;
    static addDataType(builder: flatbuffers.Builder, DATA_TYPE: pceDataType): void;
    static addUnit(builder: flatbuffers.Builder, UNIT: pceUnit): void;
    static addProviderDefinedUnitSymbol(builder: flatbuffers.Builder, PROVIDER_DEFINED_UNIT_SYMBOLOffset: flatbuffers.Offset): void;
    static addElementCount(builder: flatbuffers.Builder, ELEMENT_COUNT: number): void;
    static addRowCount(builder: flatbuffers.Builder, ROW_COUNT: number): void;
    static addColumnCount(builder: flatbuffers.Builder, COLUMN_COUNT: number): void;
    static addFrameDependency(builder: flatbuffers.Builder, FRAME_DEPENDENCY: pceFrameDependency): void;
    static addRequiredAxisType(builder: flatbuffers.Builder, REQUIRED_AXIS_TYPE: rfmAxisType): void;
    static addRequiredOriginKind(builder: flatbuffers.Builder, REQUIRED_ORIGIN_KIND: rfmOriginKind): void;
    static addTimeSystemDependent(builder: flatbuffers.Builder, TIME_SYSTEM_DEPENDENT: boolean): void;
    static addStateRepresentation(builder: flatbuffers.Builder, STATE_REPRESENTATION: frmStateRepresentation): void;
    static addAvailability(builder: flatbuffers.Builder, AVAILABILITY: pceAvailability): void;
    static addUnavailableReason(builder: flatbuffers.Builder, UNAVAILABLE_REASONOffset: flatbuffers.Offset): void;
    static addSupersededBy(builder: flatbuffers.Builder, SUPERSEDED_BY: pceParameter): void;
    static addSupportsStoppingCondition(builder: flatbuffers.Builder, SUPPORTS_STOPPING_CONDITION: boolean): void;
    static addIsSettable(builder: flatbuffers.Builder, IS_SETTABLE: boolean): void;
    static addIsCyclic(builder: flatbuffers.Builder, IS_CYCLIC: boolean): void;
    static addCycleLowerBound(builder: flatbuffers.Builder, CYCLE_LOWER_BOUND: number): void;
    static addCycleUpperBound(builder: flatbuffers.Builder, CYCLE_UPPER_BOUND: number): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPCEParameterDescriptor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterDescriptor(builder: flatbuffers.Builder, PARAMETER: pceParameter, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset, OWNER_CLASS: pceOwnerClass, DATA_TYPE: pceDataType, UNIT: pceUnit, PROVIDER_DEFINED_UNIT_SYMBOLOffset: flatbuffers.Offset, ELEMENT_COUNT: number, ROW_COUNT: number, COLUMN_COUNT: number, FRAME_DEPENDENCY: pceFrameDependency, REQUIRED_AXIS_TYPE: rfmAxisType, REQUIRED_ORIGIN_KIND: rfmOriginKind, TIME_SYSTEM_DEPENDENT: boolean, STATE_REPRESENTATION: frmStateRepresentation, AVAILABILITY: pceAvailability, UNAVAILABLE_REASONOffset: flatbuffers.Offset, SUPERSEDED_BY: pceParameter, SUPPORTS_STOPPING_CONDITION: boolean, IS_SETTABLE: boolean, IS_CYCLIC: boolean, CYCLE_LOWER_BOUND: number, CYCLE_UPPER_BOUND: number, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEParameterDescriptorT;
    unpackTo(_o: PCEParameterDescriptorT): void;
}
export declare class PCEParameterDescriptorT implements flatbuffers.IGeneratedObject {
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_NAME: string | Uint8Array | null;
    OWNER_CLASS: pceOwnerClass;
    DATA_TYPE: pceDataType;
    UNIT: pceUnit;
    PROVIDER_DEFINED_UNIT_SYMBOL: string | Uint8Array | null;
    ELEMENT_COUNT: number;
    ROW_COUNT: number;
    COLUMN_COUNT: number;
    FRAME_DEPENDENCY: pceFrameDependency;
    REQUIRED_AXIS_TYPE: rfmAxisType;
    REQUIRED_ORIGIN_KIND: rfmOriginKind;
    TIME_SYSTEM_DEPENDENT: boolean;
    STATE_REPRESENTATION: frmStateRepresentation;
    AVAILABILITY: pceAvailability;
    UNAVAILABLE_REASON: string | Uint8Array | null;
    SUPERSEDED_BY: pceParameter;
    SUPPORTS_STOPPING_CONDITION: boolean;
    IS_SETTABLE: boolean;
    IS_CYCLIC: boolean;
    CYCLE_LOWER_BOUND: number;
    CYCLE_UPPER_BOUND: number;
    DESCRIPTION: string | Uint8Array | null;
    constructor(PARAMETER?: pceParameter, PROVIDER_DEFINED_NAME?: string | Uint8Array | null, OWNER_CLASS?: pceOwnerClass, DATA_TYPE?: pceDataType, UNIT?: pceUnit, PROVIDER_DEFINED_UNIT_SYMBOL?: string | Uint8Array | null, ELEMENT_COUNT?: number, ROW_COUNT?: number, COLUMN_COUNT?: number, FRAME_DEPENDENCY?: pceFrameDependency, REQUIRED_AXIS_TYPE?: rfmAxisType, REQUIRED_ORIGIN_KIND?: rfmOriginKind, TIME_SYSTEM_DEPENDENT?: boolean, STATE_REPRESENTATION?: frmStateRepresentation, AVAILABILITY?: pceAvailability, UNAVAILABLE_REASON?: string | Uint8Array | null, SUPERSEDED_BY?: pceParameter, SUPPORTS_STOPPING_CONDITION?: boolean, IS_SETTABLE?: boolean, IS_CYCLIC?: boolean, CYCLE_LOWER_BOUND?: number, CYCLE_UPPER_BOUND?: number, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterDescriptor.d.ts.map