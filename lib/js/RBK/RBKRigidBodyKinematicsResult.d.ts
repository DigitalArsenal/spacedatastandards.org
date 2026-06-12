import * as flatbuffers from 'flatbuffers';
import { RBKMatrix3, RBKMatrix3T } from './RBKMatrix3.js';
import { RBKQuaternion, RBKQuaternionT } from './RBKQuaternion.js';
import { RBKVector3, RBKVector3T } from './RBKVector3.js';
import { rbkResultStatus } from './rbkResultStatus.js';
/**
 * Result for one rigid-body kinematics utility operation.
 */
export declare class RBKRigidBodyKinematicsResult implements flatbuffers.IUnpackableObject<RBKRigidBodyKinematicsResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBKRigidBodyKinematicsResult;
    static getRootAsRBKRigidBodyKinematicsResult(bb: flatbuffers.ByteBuffer, obj?: RBKRigidBodyKinematicsResult): RBKRigidBodyKinematicsResult;
    static getSizePrefixedRootAsRBKRigidBodyKinematicsResult(bb: flatbuffers.ByteBuffer, obj?: RBKRigidBodyKinematicsResult): RBKRigidBodyKinematicsResult;
    STATUS(): rbkResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VECTOR(obj?: RBKVector3): RBKVector3 | null;
    QUATERNION(obj?: RBKQuaternion): RBKQuaternion | null;
    MATRIX(obj?: RBKMatrix3): RBKMatrix3 | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRBKRigidBodyKinematicsResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: rbkResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addVector(builder: flatbuffers.Builder, VECTOROffset: flatbuffers.Offset): void;
    static addQuaternion(builder: flatbuffers.Builder, QUATERNIONOffset: flatbuffers.Offset): void;
    static addMatrix(builder: flatbuffers.Builder, MATRIXOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endRBKRigidBodyKinematicsResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RBKRigidBodyKinematicsResultT;
    unpackTo(_o: RBKRigidBodyKinematicsResultT): void;
}
export declare class RBKRigidBodyKinematicsResultT implements flatbuffers.IGeneratedObject {
    STATUS: rbkResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    VECTOR: RBKVector3T | null;
    QUATERNION: RBKQuaternionT | null;
    MATRIX: RBKMatrix3T | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: rbkResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, VECTOR?: RBKVector3T | null, QUATERNION?: RBKQuaternionT | null, MATRIX?: RBKMatrix3T | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBKRigidBodyKinematicsResult.d.ts.map