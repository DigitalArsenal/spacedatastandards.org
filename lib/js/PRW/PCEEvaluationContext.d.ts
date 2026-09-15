import * as flatbuffers from 'flatbuffers';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
import { pceOwnerClass } from './pceOwnerClass.js';
/**
 * Everything an evaluation needs besides the state itself.
 */
export declare class PCEEvaluationContext implements flatbuffers.IUnpackableObject<PCEEvaluationContextT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEEvaluationContext;
    static getRootAsPCEEvaluationContext(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationContext): PCEEvaluationContext;
    static getSizePrefixedRootAsPCEEvaluationContext(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationContext): PCEEvaluationContext;
    OWNER_CLASS(): pceOwnerClass;
    /**
     * Identifier of the object the parameters are evaluated on.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hardware item, when the owner class names one.
     */
    HARDWARE_NAME(): string | null;
    HARDWARE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body code of the default central body.
     */
    CENTRAL_BODY_ID(): number;
    /**
     * Gravitational parameter of the central body, m^3/s^2. Absent means the
     * provider's own value for CENTRAL_BODY_ID.
     */
    GRAVITATIONAL_PARAMETER(): number;
    /**
     * Shape of the central body, REQUIRED for planetodetic parameters.
     */
    EQUATORIAL_RADIUS_M(): number;
    FLATTENING(): number;
    /**
     * Fully specified coordinate systems, each named through
     * RFMCoordinateSystem.NAME.
     */
    COORDINATE_SYSTEMS(index: number, obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    coordinateSystemsLength(): number;
    /**
     * Which of COORDINATE_SYSTEMS a parameter reference falls back to.
     */
    DEFAULT_COORDINATE_SYSTEM_NAME(): string | null;
    DEFAULT_COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system a parameter reference falls back to, named by the $TIM
     * timingStandard member name.
     */
    DEFAULT_TIME_SYSTEM(): string | null;
    DEFAULT_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero of ELAPSED_DAYS and ELAPSED_SECONDS, ISO 8601.
     */
    REFERENCE_EPOCH(): string | null;
    REFERENCE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the Earth-orientation data set the caller requires.
     * A provider that cannot honour it returns MISSING_EOP_DATA rather than
     * substituting another table.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body code of the illuminating body for lighting parameters.
     */
    ILLUMINATING_BODY_ID(): number;
    static startPCEEvaluationContext(builder: flatbuffers.Builder): void;
    static addOwnerClass(builder: flatbuffers.Builder, OWNER_CLASS: pceOwnerClass): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addHardwareName(builder: flatbuffers.Builder, HARDWARE_NAMEOffset: flatbuffers.Offset): void;
    static addCentralBodyId(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number): void;
    static addGravitationalParameter(builder: flatbuffers.Builder, GRAVITATIONAL_PARAMETER: number): void;
    static addEquatorialRadiusM(builder: flatbuffers.Builder, EQUATORIAL_RADIUS_M: number): void;
    static addFlattening(builder: flatbuffers.Builder, FLATTENING: number): void;
    static addCoordinateSystems(builder: flatbuffers.Builder, COORDINATE_SYSTEMSOffset: flatbuffers.Offset): void;
    static createCoordinateSystemsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordinateSystemsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDefaultCoordinateSystemName(builder: flatbuffers.Builder, DEFAULT_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addDefaultTimeSystem(builder: flatbuffers.Builder, DEFAULT_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addReferenceEpoch(builder: flatbuffers.Builder, REFERENCE_EPOCHOffset: flatbuffers.Offset): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static addIlluminatingBodyId(builder: flatbuffers.Builder, ILLUMINATING_BODY_ID: number): void;
    static endPCEEvaluationContext(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEEvaluationContext(builder: flatbuffers.Builder, OWNER_CLASS: pceOwnerClass, OBJECT_IDOffset: flatbuffers.Offset, HARDWARE_NAMEOffset: flatbuffers.Offset, CENTRAL_BODY_ID: number, GRAVITATIONAL_PARAMETER: number, EQUATORIAL_RADIUS_M: number, FLATTENING: number, COORDINATE_SYSTEMSOffset: flatbuffers.Offset, DEFAULT_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset, DEFAULT_TIME_SYSTEMOffset: flatbuffers.Offset, REFERENCE_EPOCHOffset: flatbuffers.Offset, EOP_DATA_SET_CIDOffset: flatbuffers.Offset, ILLUMINATING_BODY_ID: number): flatbuffers.Offset;
    unpack(): PCEEvaluationContextT;
    unpackTo(_o: PCEEvaluationContextT): void;
}
export declare class PCEEvaluationContextT implements flatbuffers.IGeneratedObject {
    OWNER_CLASS: pceOwnerClass;
    OBJECT_ID: string | Uint8Array | null;
    HARDWARE_NAME: string | Uint8Array | null;
    CENTRAL_BODY_ID: number;
    GRAVITATIONAL_PARAMETER: number;
    EQUATORIAL_RADIUS_M: number;
    FLATTENING: number;
    COORDINATE_SYSTEMS: (RFMCoordinateSystemT)[];
    DEFAULT_COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    DEFAULT_TIME_SYSTEM: string | Uint8Array | null;
    REFERENCE_EPOCH: string | Uint8Array | null;
    EOP_DATA_SET_CID: string | Uint8Array | null;
    ILLUMINATING_BODY_ID: number;
    constructor(OWNER_CLASS?: pceOwnerClass, OBJECT_ID?: string | Uint8Array | null, HARDWARE_NAME?: string | Uint8Array | null, CENTRAL_BODY_ID?: number, GRAVITATIONAL_PARAMETER?: number, EQUATORIAL_RADIUS_M?: number, FLATTENING?: number, COORDINATE_SYSTEMS?: (RFMCoordinateSystemT)[], DEFAULT_COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, DEFAULT_TIME_SYSTEM?: string | Uint8Array | null, REFERENCE_EPOCH?: string | Uint8Array | null, EOP_DATA_SET_CID?: string | Uint8Array | null, ILLUMINATING_BODY_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEEvaluationContext.d.ts.map