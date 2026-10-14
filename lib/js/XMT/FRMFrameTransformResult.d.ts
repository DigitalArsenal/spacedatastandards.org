import * as flatbuffers from 'flatbuffers';
import { FRMMatrix3, FRMMatrix3T } from './FRMMatrix3.js';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { frmResultStatus } from './frmResultStatus.js';
export declare class FRMFrameTransformResult implements flatbuffers.IUnpackableObject<FRMFrameTransformResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRMFrameTransformResult;
    static getRootAsFRMFrameTransformResult(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformResult): FRMFrameTransformResult;
    static getSizePrefixedRootAsFRMFrameTransformResult(bb: flatbuffers.ByteBuffer, obj?: FRMFrameTransformResult): FRMFrameTransformResult;
    STATUS(): frmResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION(obj?: FRMVector3): FRMVector3 | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The transformed state, with velocity, in TARGET_COORDINATE_SYSTEM and
     * TARGET_REPRESENTATION.
     */
    TARGET_STATE(obj?: FRMStateVector): FRMStateVector | null;
    /**
     * Rotation from the source axes to the target axes at EPOCH.
     */
    ROTATION_DCM(obj?: FRMMatrix3): FRMMatrix3 | null;
    /**
     * Time derivative of ROTATION_DCM, per second. Required for a velocity
     * transform between relatively rotating axis sets.
     */
    ROTATION_DCM_RATE(obj?: FRMMatrix3): FRMMatrix3 | null;
    /**
     * Angular velocity of the target axes with respect to the source axes,
     * radians per second, expressed in the source axes.
     */
    ANGULAR_VELOCITY_RAD_S(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Epoch of the Earth-orientation data set actually used, ISO 8601.
     */
    EOP_DATA_SET_EPOCH(): string | null;
    EOP_DATA_SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the Earth-orientation data set actually used.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startFRMFrameTransformResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: frmResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addTargetState(builder: flatbuffers.Builder, TARGET_STATEOffset: flatbuffers.Offset): void;
    static addRotationDcm(builder: flatbuffers.Builder, ROTATION_DCMOffset: flatbuffers.Offset): void;
    static addRotationDcmRate(builder: flatbuffers.Builder, ROTATION_DCM_RATEOffset: flatbuffers.Offset): void;
    static addAngularVelocityRadS(builder: flatbuffers.Builder, ANGULAR_VELOCITY_RAD_SOffset: flatbuffers.Offset): void;
    static addEopDataSetEpoch(builder: flatbuffers.Builder, EOP_DATA_SET_EPOCHOffset: flatbuffers.Offset): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static endFRMFrameTransformResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FRMFrameTransformResultT;
    unpackTo(_o: FRMFrameTransformResultT): void;
}
export declare class FRMFrameTransformResultT implements flatbuffers.IGeneratedObject {
    STATUS: frmResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    POSITION: FRMVector3T | null;
    TRACE_ID: string | Uint8Array | null;
    TARGET_STATE: FRMStateVectorT | null;
    ROTATION_DCM: FRMMatrix3T | null;
    ROTATION_DCM_RATE: FRMMatrix3T | null;
    ANGULAR_VELOCITY_RAD_S: FRMVector3T | null;
    EOP_DATA_SET_EPOCH: string | Uint8Array | null;
    EOP_DATA_SET_CID: string | Uint8Array | null;
    constructor(STATUS?: frmResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, POSITION?: FRMVector3T | null, TRACE_ID?: string | Uint8Array | null, TARGET_STATE?: FRMStateVectorT | null, ROTATION_DCM?: FRMMatrix3T | null, ROTATION_DCM_RATE?: FRMMatrix3T | null, ANGULAR_VELOCITY_RAD_S?: FRMVector3T | null, EOP_DATA_SET_EPOCH?: string | Uint8Array | null, EOP_DATA_SET_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMFrameTransformResult.d.ts.map