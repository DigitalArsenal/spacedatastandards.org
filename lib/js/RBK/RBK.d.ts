import * as flatbuffers from 'flatbuffers';
import { RBKRigidBodyKinematicsRequest, RBKRigidBodyKinematicsRequestT } from './RBKRigidBodyKinematicsRequest.js';
import { RBKRigidBodyKinematicsResult, RBKRigidBodyKinematicsResultT } from './RBKRigidBodyKinematicsResult.js';
/**
 * Rigid-body kinematics utility envelope.
 */
export declare class RBK implements flatbuffers.IUnpackableObject<RBKT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBK;
    static getRootAsRBK(bb: flatbuffers.ByteBuffer, obj?: RBK): RBK;
    static getSizePrefixedRootAsRBK(bb: flatbuffers.ByteBuffer, obj?: RBK): RBK;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RIGID_BODY_REQUEST(obj?: RBKRigidBodyKinematicsRequest): RBKRigidBodyKinematicsRequest | null;
    RIGID_BODY_RESULT(obj?: RBKRigidBodyKinematicsResult): RBKRigidBodyKinematicsResult | null;
    static startRBK(builder: flatbuffers.Builder): void;
    static addRigidBodyRequest(builder: flatbuffers.Builder, RIGID_BODY_REQUESTOffset: flatbuffers.Offset): void;
    static addRigidBodyResult(builder: flatbuffers.Builder, RIGID_BODY_RESULTOffset: flatbuffers.Offset): void;
    static endRBK(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRBKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRBKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RBKT;
    unpackTo(_o: RBKT): void;
}
export declare class RBKT implements flatbuffers.IGeneratedObject {
    RIGID_BODY_REQUEST: RBKRigidBodyKinematicsRequestT | null;
    RIGID_BODY_RESULT: RBKRigidBodyKinematicsResultT | null;
    constructor(RIGID_BODY_REQUEST?: RBKRigidBodyKinematicsRequestT | null, RIGID_BODY_RESULT?: RBKRigidBodyKinematicsResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBK.d.ts.map