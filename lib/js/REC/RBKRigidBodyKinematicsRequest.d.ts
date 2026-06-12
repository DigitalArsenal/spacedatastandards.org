import * as flatbuffers from 'flatbuffers';
import { RBKMatrix3, RBKMatrix3T } from './RBKMatrix3.js';
import { RBKQuaternion, RBKQuaternionT } from './RBKQuaternion.js';
import { RBKVector3, RBKVector3T } from './RBKVector3.js';
import { rbkEulerSequenceCode } from './rbkEulerSequenceCode.js';
import { rbkOperationCode } from './rbkOperationCode.js';
/**
 * Request for one rigid-body kinematics utility operation.
 */
export declare class RBKRigidBodyKinematicsRequest implements flatbuffers.IUnpackableObject<RBKRigidBodyKinematicsRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBKRigidBodyKinematicsRequest;
    static getRootAsRBKRigidBodyKinematicsRequest(bb: flatbuffers.ByteBuffer, obj?: RBKRigidBodyKinematicsRequest): RBKRigidBodyKinematicsRequest;
    static getSizePrefixedRootAsRBKRigidBodyKinematicsRequest(bb: flatbuffers.ByteBuffer, obj?: RBKRigidBodyKinematicsRequest): RBKRigidBodyKinematicsRequest;
    OPERATION(): rbkOperationCode;
    VECTOR_A(obj?: RBKVector3): RBKVector3 | null;
    VECTOR_B(obj?: RBKVector3): RBKVector3 | null;
    QUATERNION_A(obj?: RBKQuaternion): RBKQuaternion | null;
    MATRIX_A(obj?: RBKMatrix3): RBKMatrix3 | null;
    SWITCH_THRESHOLD(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VECTOR_C(obj?: RBKVector3): RBKVector3 | null;
    VECTOR_D(obj?: RBKVector3): RBKVector3 | null;
    EULER_SEQUENCE(): rbkEulerSequenceCode;
    ANGLE_RAD(): number;
    static startRBKRigidBodyKinematicsRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: rbkOperationCode): void;
    static addVectorA(builder: flatbuffers.Builder, VECTOR_AOffset: flatbuffers.Offset): void;
    static addVectorB(builder: flatbuffers.Builder, VECTOR_BOffset: flatbuffers.Offset): void;
    static addQuaternionA(builder: flatbuffers.Builder, QUATERNION_AOffset: flatbuffers.Offset): void;
    static addMatrixA(builder: flatbuffers.Builder, MATRIX_AOffset: flatbuffers.Offset): void;
    static addSwitchThreshold(builder: flatbuffers.Builder, SWITCH_THRESHOLD: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addVectorC(builder: flatbuffers.Builder, VECTOR_COffset: flatbuffers.Offset): void;
    static addVectorD(builder: flatbuffers.Builder, VECTOR_DOffset: flatbuffers.Offset): void;
    static addEulerSequence(builder: flatbuffers.Builder, EULER_SEQUENCE: rbkEulerSequenceCode): void;
    static addAngleRad(builder: flatbuffers.Builder, ANGLE_RAD: number): void;
    static endRBKRigidBodyKinematicsRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RBKRigidBodyKinematicsRequestT;
    unpackTo(_o: RBKRigidBodyKinematicsRequestT): void;
}
export declare class RBKRigidBodyKinematicsRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: rbkOperationCode;
    VECTOR_A: RBKVector3T | null;
    VECTOR_B: RBKVector3T | null;
    QUATERNION_A: RBKQuaternionT | null;
    MATRIX_A: RBKMatrix3T | null;
    SWITCH_THRESHOLD: number;
    TRACE_ID: string | Uint8Array | null;
    VECTOR_C: RBKVector3T | null;
    VECTOR_D: RBKVector3T | null;
    EULER_SEQUENCE: rbkEulerSequenceCode;
    ANGLE_RAD: number;
    constructor(OPERATION?: rbkOperationCode, VECTOR_A?: RBKVector3T | null, VECTOR_B?: RBKVector3T | null, QUATERNION_A?: RBKQuaternionT | null, MATRIX_A?: RBKMatrix3T | null, SWITCH_THRESHOLD?: number, TRACE_ID?: string | Uint8Array | null, VECTOR_C?: RBKVector3T | null, VECTOR_D?: RBKVector3T | null, EULER_SEQUENCE?: rbkEulerSequenceCode, ANGLE_RAD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBKRigidBodyKinematicsRequest.d.ts.map