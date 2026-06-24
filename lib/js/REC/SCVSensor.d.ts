import * as flatbuffers from 'flatbuffers';
import { SCVSensorShapeContract, SCVSensorShapeContractT } from './SCVSensorShapeContract.js';
import { SCVVec3, SCVVec3T } from './SCVVec3.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
export declare class SCVSensor implements flatbuffers.IUnpackableObject<SCVSensorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVSensor;
    static getRootAsSCVSensor(bb: flatbuffers.ByteBuffer, obj?: SCVSensor): SCVSensor;
    static getSizePrefixedRootAsSCVSensor(bb: flatbuffers.ByteBuffer, obj?: SCVSensor): SCVSensor;
    SENSOR_ID(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FRAME(): scvCoordinateFrame;
    POSITION_M(obj?: SCVVec3): SCVVec3 | null;
    VELOCITY_MPS(obj?: SCVVec3): SCVVec3 | null;
    BORESIGHT_UNIT(obj?: SCVVec3): SCVVec3 | null;
    UP_UNIT(obj?: SCVVec3): SCVVec3 | null;
    SHAPE_CONTRACT(obj?: SCVSensorShapeContract): SCVSensorShapeContract | null;
    static startSCVSensor(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static addPositionM(builder: flatbuffers.Builder, POSITION_MOffset: flatbuffers.Offset): void;
    static addVelocityMps(builder: flatbuffers.Builder, VELOCITY_MPSOffset: flatbuffers.Offset): void;
    static addBoresightUnit(builder: flatbuffers.Builder, BORESIGHT_UNITOffset: flatbuffers.Offset): void;
    static addUpUnit(builder: flatbuffers.Builder, UP_UNITOffset: flatbuffers.Offset): void;
    static addShapeContract(builder: flatbuffers.Builder, SHAPE_CONTRACTOffset: flatbuffers.Offset): void;
    static endSCVSensor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCVSensorT;
    unpackTo(_o: SCVSensorT): void;
}
export declare class SCVSensorT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    FRAME: scvCoordinateFrame;
    POSITION_M: SCVVec3T | null;
    VELOCITY_MPS: SCVVec3T | null;
    BORESIGHT_UNIT: SCVVec3T | null;
    UP_UNIT: SCVVec3T | null;
    SHAPE_CONTRACT: SCVSensorShapeContractT | null;
    constructor(SENSOR_ID?: number, OBJECT_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, FRAME?: scvCoordinateFrame, POSITION_M?: SCVVec3T | null, VELOCITY_MPS?: SCVVec3T | null, BORESIGHT_UNIT?: SCVVec3T | null, UP_UNIT?: SCVVec3T | null, SHAPE_CONTRACT?: SCVSensorShapeContractT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVSensor.d.ts.map