import * as flatbuffers from 'flatbuffers';
import { SCVVec3, SCVVec3T } from './SCVVec3.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
export declare class SCVStateSample implements flatbuffers.IUnpackableObject<SCVStateSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVStateSample;
    static getRootAsSCVStateSample(bb: flatbuffers.ByteBuffer, obj?: SCVStateSample): SCVStateSample;
    static getSizePrefixedRootAsSCVStateSample(bb: flatbuffers.ByteBuffer, obj?: SCVStateSample): SCVStateSample;
    SENSOR_ID(): number;
    TIME_OFFSET_SEC(): number;
    POSITION_M(obj?: SCVVec3): SCVVec3 | null;
    VELOCITY_MPS(obj?: SCVVec3): SCVVec3 | null;
    QUATERNION_X(): number;
    QUATERNION_Y(): number;
    QUATERNION_Z(): number;
    QUATERNION_W(): number;
    FRAME(): scvCoordinateFrame;
    static startSCVStateSample(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addTimeOffsetSec(builder: flatbuffers.Builder, TIME_OFFSET_SEC: number): void;
    static addPositionM(builder: flatbuffers.Builder, POSITION_MOffset: flatbuffers.Offset): void;
    static addVelocityMps(builder: flatbuffers.Builder, VELOCITY_MPSOffset: flatbuffers.Offset): void;
    static addQuaternionX(builder: flatbuffers.Builder, QUATERNION_X: number): void;
    static addQuaternionY(builder: flatbuffers.Builder, QUATERNION_Y: number): void;
    static addQuaternionZ(builder: flatbuffers.Builder, QUATERNION_Z: number): void;
    static addQuaternionW(builder: flatbuffers.Builder, QUATERNION_W: number): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static endSCVStateSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCVStateSampleT;
    unpackTo(_o: SCVStateSampleT): void;
}
export declare class SCVStateSampleT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: number;
    TIME_OFFSET_SEC: number;
    POSITION_M: SCVVec3T | null;
    VELOCITY_MPS: SCVVec3T | null;
    QUATERNION_X: number;
    QUATERNION_Y: number;
    QUATERNION_Z: number;
    QUATERNION_W: number;
    FRAME: scvCoordinateFrame;
    constructor(SENSOR_ID?: number, TIME_OFFSET_SEC?: number, POSITION_M?: SCVVec3T | null, VELOCITY_MPS?: SCVVec3T | null, QUATERNION_X?: number, QUATERNION_Y?: number, QUATERNION_Z?: number, QUATERNION_W?: number, FRAME?: scvCoordinateFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVStateSample.d.ts.map