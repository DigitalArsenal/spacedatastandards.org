import * as flatbuffers from 'flatbuffers';
import { FRMMatrix3, FRMMatrix3T } from './FRMMatrix3.js';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { frmOperationCode } from './frmOperationCode.js';
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
    static startFRMFrameTransformRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: frmOperationCode): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addTransformDcm(builder: flatbuffers.Builder, TRANSFORM_DCMOffset: flatbuffers.Offset): void;
    static addEquatorialRadiusM(builder: flatbuffers.Builder, EQUATORIAL_RADIUS_M: number): void;
    static addPolarRadiusM(builder: flatbuffers.Builder, POLAR_RADIUS_M: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
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
    constructor(OPERATION?: frmOperationCode, POSITION?: FRMVector3T | null, TRANSFORM_DCM?: FRMMatrix3T | null, EQUATORIAL_RADIUS_M?: number, POLAR_RADIUS_M?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRMFrameTransformRequest.d.ts.map