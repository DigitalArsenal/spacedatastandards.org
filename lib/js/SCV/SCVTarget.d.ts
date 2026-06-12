import * as flatbuffers from 'flatbuffers';
import { SCVVec3, SCVVec3T } from './SCVVec3.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
export declare class SCVTarget implements flatbuffers.IUnpackableObject<SCVTargetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVTarget;
    static getRootAsSCVTarget(bb: flatbuffers.ByteBuffer, obj?: SCVTarget): SCVTarget;
    static getSizePrefixedRootAsSCVTarget(bb: flatbuffers.ByteBuffer, obj?: SCVTarget): SCVTarget;
    TARGET_ID(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FRAME(): scvCoordinateFrame;
    POSITION_M(obj?: SCVVec3): SCVVec3 | null;
    VELOCITY_MPS(obj?: SCVVec3): SCVVec3 | null;
    RADIUS_M(): number;
    static startSCVTarget(builder: flatbuffers.Builder): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static addPositionM(builder: flatbuffers.Builder, POSITION_MOffset: flatbuffers.Offset): void;
    static addVelocityMps(builder: flatbuffers.Builder, VELOCITY_MPSOffset: flatbuffers.Offset): void;
    static addRadiusM(builder: flatbuffers.Builder, RADIUS_M: number): void;
    static endSCVTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCVTargetT;
    unpackTo(_o: SCVTargetT): void;
}
export declare class SCVTargetT implements flatbuffers.IGeneratedObject {
    TARGET_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    FRAME: scvCoordinateFrame;
    POSITION_M: SCVVec3T | null;
    VELOCITY_MPS: SCVVec3T | null;
    RADIUS_M: number;
    constructor(TARGET_ID?: number, OBJECT_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, FRAME?: scvCoordinateFrame, POSITION_M?: SCVVec3T | null, VELOCITY_MPS?: SCVVec3T | null, RADIUS_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVTarget.d.ts.map