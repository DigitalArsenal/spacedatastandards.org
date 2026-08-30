import * as flatbuffers from 'flatbuffers';
import { FRMMatrix3, FRMMatrix3T } from './FRMMatrix3.js';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
import { frmOperationCode } from './frmOperationCode.js';
import { frmStateRepresentation } from './frmStateRepresentation.js';
export declare class FRMFrameTransformRequest implements flatbuffers.IUnpackableObject<FRMFrameTransformRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMFrameTransformRequest;
    static getRootAsFRMFrameTransformRequest(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformRequest): FRMFrameTransformRequest;
    static getSizePrefixedRootAsFRMFrameTransformRequest(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformRequest): FRMFrameTransformRequest;
    OPERATION(): frmOperationCode;
    POSITION(obj?: FRMVector3): FRMVector3 | null;
    TRANSFORM_DCM(obj?: FRMMatrix3): FRMMatrix3 | null;
    EQUATORIAL_RADIUS_M(): number;
    POLAR_RADIUS_M(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coordinate system the request's state is expressed in.
     */
    SOURCE_COORDINATE_SYSTEM(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    /**
     * Coordinate system the result is required in.
     */
    TARGET_COORDINATE_SYSTEM(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    /**
     * The full input state, carrying velocity as well as position. POSITION
     * above is position-only and remains the input for operations 1-4.
     */
    SOURCE_STATE(obj?: FRMStateVector): FRMStateVector | null;
    /**
     * Element set the result must be expressed in.
     */
    TARGET_REPRESENTATION(): frmStateRepresentation;
    /**
     * Epoch the transform is evaluated at, ISO 8601. Required for every
     * time-dependent axis chain.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of EPOCH, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the Earth-orientation data set the caller requires
     * the provider to use. A provider that cannot honour it returns
     * MISSING_EOP_DATA rather than substituting another table.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFRMFrameTransformRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: frmOperationCode): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addTransformDcm(builder: flatbuffers.Builder, TRANSFORM_DCMOffset: flatbuffers.Offset): void;
    static addEquatorialRadiusM(builder: flatbuffers.Builder, EQUATORIAL_RADIUS_M: number): void;
    static addPolarRadiusM(builder: flatbuffers.Builder, POLAR_RADIUS_M: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addSourceCoordinateSystem(builder: flatbuffers.Builder, SOURCE_COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static addTargetCoordinateSystem(builder: flatbuffers.Builder, TARGET_COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static addSourceState(builder: flatbuffers.Builder, SOURCE_STATEOffset: flatbuffers.Offset): void;
    static addTargetRepresentation(builder: flatbuffers.Builder, TARGET_REPRESENTATION: frmStateRepresentation): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static endFRMFrameTransformRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FRMFrameTransformRequestT;
    unpackTo(_o: FRMFrameTransformRequestT): void;
}
export declare class FRMFrameTransformRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: frmOperationCode;
    POSITION: FRMVector3T | null;
    TRANSFORM_DCM: FRMMatrix3T | null;
    EQUATORIAL_RADIUS_M: number;
    POLAR_RADIUS_M: number;
    TRACE_ID: string | Uint8Array | null;
    SOURCE_COORDINATE_SYSTEM: RFMCoordinateSystemT | null;
    TARGET_COORDINATE_SYSTEM: RFMCoordinateSystemT | null;
    SOURCE_STATE: FRMStateVectorT | null;
    TARGET_REPRESENTATION: frmStateRepresentation;
    EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    EOP_DATA_SET_CID: string | Uint8Array | null;
    constructor(OPERATION?: frmOperationCode, POSITION?: FRMVector3T | null, TRANSFORM_DCM?: FRMMatrix3T | null, EQUATORIAL_RADIUS_M?: number, POLAR_RADIUS_M?: number, TRACE_ID?: string | Uint8Array | null, SOURCE_COORDINATE_SYSTEM?: RFMCoordinateSystemT | null, TARGET_COORDINATE_SYSTEM?: RFMCoordinateSystemT | null, SOURCE_STATE?: FRMStateVectorT | null, TARGET_REPRESENTATION?: frmStateRepresentation, EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, EOP_DATA_SET_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMFrameTransformRequest.d.ts.map