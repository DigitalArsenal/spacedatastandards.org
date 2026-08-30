import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { frmStateRepresentation } from './frmStateRepresentation.js';
/**
 * A state in a named element set at a named epoch. ELEMENTS is the element
 * set's own 6 values in the order documented on frmStateRepresentation.
 * POSITION and VELOCITY are the Cartesian projection of the same state and
 * are populated when REPRESENTATION is CARTESIAN or when the provider can
 * supply them; a consumer MUST NOT infer velocity from POSITION alone.
 */
export declare class FRMStateVector implements flatbuffers.IUnpackableObject<FRMStateVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMStateVector;
    static getRootAsFRMStateVector(bb: flatbuffers.ByteBuffer, obj?: FRMStateVector): FRMStateVector;
    static getSizePrefixedRootAsFRMStateVector(bb: flatbuffers.ByteBuffer, obj?: FRMStateVector): FRMStateVector;
    REPRESENTATION(): frmStateRepresentation;
    /**
     * The 6 element values of REPRESENTATION, SI units and radians.
     */
    ELEMENTS(index: number): number | null;
    elementsLength(): number;
    elementsArray(): Float64Array | null;
    /**
     * Cartesian position, metres.
     */
    POSITION(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Cartesian velocity, metres per second.
     */
    VELOCITY(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Name of the coordinate system these elements are expressed in; resolves
     * against RFMCoordinateSystem.NAME.
     */
    COORDINATE_SYSTEM_NAME(): string | null;
    COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of this state, ISO 8601.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of EPOCH, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gravitational parameter, m^3/s^2, of the origin body when the element
     * set requires one. Absent means the provider's default for the origin.
     */
    GRAVITATIONAL_PARAMETER(): number;
    static startFRMStateVector(builder: flatbuffers.Builder): void;
    static addRepresentation(builder: flatbuffers.Builder, REPRESENTATION: frmStateRepresentation): void;
    static addElements(builder: flatbuffers.Builder, ELEMENTSOffset: flatbuffers.Offset): void;
    static createElementsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createElementsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, VELOCITYOffset: flatbuffers.Offset): void;
    static addCoordinateSystemName(builder: flatbuffers.Builder, COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addGravitationalParameter(builder: flatbuffers.Builder, GRAVITATIONAL_PARAMETER: number): void;
    static endFRMStateVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FRMStateVectorT;
    unpackTo(_o: FRMStateVectorT): void;
}
export declare class FRMStateVectorT implements flatbuffers.IGeneratedObject {
    REPRESENTATION: frmStateRepresentation;
    ELEMENTS: (number)[];
    POSITION: FRMVector3T | null;
    VELOCITY: FRMVector3T | null;
    COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    GRAVITATIONAL_PARAMETER: number;
    constructor(REPRESENTATION?: frmStateRepresentation, ELEMENTS?: (number)[], POSITION?: FRMVector3T | null, VELOCITY?: FRMVector3T | null, COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, GRAVITATIONAL_PARAMETER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMStateVector.d.ts.map