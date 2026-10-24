import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
/**
 * A reference to one parameter, with the dependencies that make it evaluable.
 * This is what a request, a stopping condition and a report column all name.
 */
export declare class PCEParameterRef implements flatbuffers.IUnpackableObject<PCEParameterRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterRef;
    static getRootAsPCEParameterRef(bb: flatbuffers.ByteBuffer, obj?: PCEParameterRef): PCEParameterRef;
    static getSizePrefixedRootAsPCEParameterRef(bb: flatbuffers.ByteBuffer, obj?: PCEParameterRef): PCEParameterRef;
    /**
     * Roster member, or PROVIDER_DEFINED.
     */
    PARAMETER(): pceParameter;
    /**
     * REQUIRED when PARAMETER is PROVIDER_DEFINED, absent otherwise.
     */
    PROVIDER_DEFINED_NAME(): string | null;
    PROVIDER_DEFINED_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Component of a vector or matrix parameter, zero-based and row-major.
     * Negative selects the whole value.
     */
    ELEMENT_INDEX(): number;
    /**
     * Coordinate system this evaluation is expressed in; resolves against
     * RFMCoordinateSystem.NAME in PCEEvaluationContext.COORDINATE_SYSTEMS.
     * Absent means the context default.
     */
    COORDINATE_SYSTEM_NAME(): string | null;
    COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body code of the central body, when the parameter is
     * CENTRAL_BODY_DEPENDENT and the context default is not wanted.
     */
    CENTRAL_BODY_ID(): number;
    /**
     * Site the parameter is evaluated from, when it is SURFACE_SITE_DEPENDENT.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second object, when the parameter is SECOND_OBJECT_DEPENDENT.
     */
    SECOND_OBJECT_ID(): string | null;
    SECOND_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Owning object, when the request evaluates more than one.
     */
    OWNER_OBJECT_ID(): string | null;
    OWNER_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Owning hardware item, when the owner class is THRUSTER, FUEL_TANK or a
     * burn.
     */
    OWNER_HARDWARE_NAME(): string | null;
    OWNER_HARDWARE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system for an EPOCH-typed parameter, named by the $TIM
     * timingStandard member name. Absent means the context default.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEParameterRef(builder: flatbuffers.Builder): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedName(builder: flatbuffers.Builder, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset): void;
    static addElementIndex(builder: flatbuffers.Builder, ELEMENT_INDEX: number): void;
    static addCoordinateSystemName(builder: flatbuffers.Builder, COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addCentralBodyId(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addSecondObjectId(builder: flatbuffers.Builder, SECOND_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOwnerObjectId(builder: flatbuffers.Builder, OWNER_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOwnerHardwareName(builder: flatbuffers.Builder, OWNER_HARDWARE_NAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static endPCEParameterRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterRef(builder: flatbuffers.Builder, PARAMETER: pceParameter, PROVIDER_DEFINED_NAMEOffset: flatbuffers.Offset, ELEMENT_INDEX: number, COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset, CENTRAL_BODY_ID: number, SITE_IDOffset: flatbuffers.Offset, SECOND_OBJECT_IDOffset: flatbuffers.Offset, OWNER_OBJECT_IDOffset: flatbuffers.Offset, OWNER_HARDWARE_NAMEOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEParameterRefT;
    unpackTo(_o: PCEParameterRefT): void;
}
export declare class PCEParameterRefT implements flatbuffers.IGeneratedObject {
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_NAME: string | Uint8Array | null;
    ELEMENT_INDEX: number;
    COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    CENTRAL_BODY_ID: number;
    SITE_ID: string | Uint8Array | null;
    SECOND_OBJECT_ID: string | Uint8Array | null;
    OWNER_OBJECT_ID: string | Uint8Array | null;
    OWNER_HARDWARE_NAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    constructor(PARAMETER?: pceParameter, PROVIDER_DEFINED_NAME?: string | Uint8Array | null, ELEMENT_INDEX?: number, COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, CENTRAL_BODY_ID?: number, SITE_ID?: string | Uint8Array | null, SECOND_OBJECT_ID?: string | Uint8Array | null, OWNER_OBJECT_ID?: string | Uint8Array | null, OWNER_HARDWARE_NAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterRef.d.ts.map