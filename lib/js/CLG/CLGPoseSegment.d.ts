import * as flatbuffers from 'flatbuffers';
import { clgOwnerCategory } from './clgOwnerCategory.js';
/**
 * u=(t-START_S)/(STOP_S-START_S), ascending power coefficients axis-major.
 * Position length=3*(DEGREE+1), SI. Quaternion length=4*(DEGREE+1), xyzw,
 * required for bodies and SUPPLIED_SERIES nodes; absent for evaluated laws.
 * Q/||Q|| defines rotation. Sign-continuous representative, normalized C2
 * rotation and angular derivatives checked using explicit join tolerances.
 */
export declare class CLGPoseSegment implements flatbuffers.IUnpackableObject<CLGPoseSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGPoseSegment;
    static getRootAsCLGPoseSegment(bb: flatbuffers.ByteBuffer, obj?: CLGPoseSegment): CLGPoseSegment;
    static getSizePrefixedRootAsCLGPoseSegment(bb: flatbuffers.ByteBuffer, obj?: CLGPoseSegment): CLGPoseSegment;
    OWNER(): clgOwnerCategory;
    OWNER_INDEX(): number;
    START_S(): number;
    STOP_S(): number;
    DEGREE(): number;
    POSITION_COEFFICIENTS(index: number): number | null;
    positionCoefficientsLength(): number;
    positionCoefficientsArray(): Float64Array;
    QUATERNION_COEFFICIENTS(index: number): number | null;
    quaternionCoefficientsLength(): number;
    quaternionCoefficientsArray(): Float64Array | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_OWNER(): boolean;
    HAS_OWNER_INDEX(): boolean;
    HAS_START_S(): boolean;
    HAS_STOP_S(): boolean;
    HAS_DEGREE(): boolean;
    static startCLGPoseSegment(builder: flatbuffers.Builder): void;
    static addOwner(builder: flatbuffers.Builder, OWNER: clgOwnerCategory): void;
    static addOwnerIndex(builder: flatbuffers.Builder, OWNER_INDEX: number): void;
    static addStartS(builder: flatbuffers.Builder, START_S: number): void;
    static addStopS(builder: flatbuffers.Builder, STOP_S: number): void;
    static addDegree(builder: flatbuffers.Builder, DEGREE: number): void;
    static addPositionCoefficients(builder: flatbuffers.Builder, POSITION_COEFFICIENTSOffset: flatbuffers.Offset): void;
    static createPositionCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCoefficientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuaternionCoefficients(builder: flatbuffers.Builder, QUATERNION_COEFFICIENTSOffset: flatbuffers.Offset): void;
    static createQuaternionCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createQuaternionCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQuaternionCoefficientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasOwner(builder: flatbuffers.Builder, HAS_OWNER: boolean): void;
    static addHasOwnerIndex(builder: flatbuffers.Builder, HAS_OWNER_INDEX: boolean): void;
    static addHasStartS(builder: flatbuffers.Builder, HAS_START_S: boolean): void;
    static addHasStopS(builder: flatbuffers.Builder, HAS_STOP_S: boolean): void;
    static addHasDegree(builder: flatbuffers.Builder, HAS_DEGREE: boolean): void;
    static endCLGPoseSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGPoseSegment(builder: flatbuffers.Builder, OWNER: clgOwnerCategory, OWNER_INDEX: number, START_S: number, STOP_S: number, DEGREE: number, POSITION_COEFFICIENTSOffset: flatbuffers.Offset, QUATERNION_COEFFICIENTSOffset: flatbuffers.Offset, HAS_OWNER: boolean, HAS_OWNER_INDEX: boolean, HAS_START_S: boolean, HAS_STOP_S: boolean, HAS_DEGREE: boolean): flatbuffers.Offset;
    unpack(): CLGPoseSegmentT;
    unpackTo(_o: CLGPoseSegmentT): void;
}
export declare class CLGPoseSegmentT implements flatbuffers.IGeneratedObject {
    OWNER: clgOwnerCategory;
    OWNER_INDEX: number;
    START_S: number;
    STOP_S: number;
    DEGREE: number;
    POSITION_COEFFICIENTS: (number)[];
    QUATERNION_COEFFICIENTS: (number)[];
    HAS_OWNER: boolean;
    HAS_OWNER_INDEX: boolean;
    HAS_START_S: boolean;
    HAS_STOP_S: boolean;
    HAS_DEGREE: boolean;
    constructor(OWNER?: clgOwnerCategory, OWNER_INDEX?: number, START_S?: number, STOP_S?: number, DEGREE?: number, POSITION_COEFFICIENTS?: (number)[], QUATERNION_COEFFICIENTS?: (number)[], HAS_OWNER?: boolean, HAS_OWNER_INDEX?: boolean, HAS_START_S?: boolean, HAS_STOP_S?: boolean, HAS_DEGREE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGPoseSegment.d.ts.map