import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
import { slpConstraintRelation } from './slpConstraintRelation.js';
export declare class SLPNonlinearConstraint implements flatbuffers.IUnpackableObject<SLPNonlinearConstraintT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPNonlinearConstraint;
    static getRootAsSLPNonlinearConstraint(bb: flatbuffers.ByteBuffer, obj?: SLPNonlinearConstraint): SLPNonlinearConstraint;
    static getSizePrefixedRootAsSLPNonlinearConstraint(bb: flatbuffers.ByteBuffer, obj?: SLPNonlinearConstraint): SLPNonlinearConstraint;
    CONSTRAINT_ID(): string;
    CONSTRAINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PARAMETER(): pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME(): string | null;
    PROVIDER_DEFINED_PARAMETER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RELATION(): slpConstraintRelation;
    LOWER_BOUND(): number;
    UPPER_BOUND(): number;
    TOLERANCE(): number;
    SCALE(): number;
    static startSLPNonlinearConstraint(builder: flatbuffers.Builder): void;
    static addConstraintId(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedParameterName(builder: flatbuffers.Builder, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset): void;
    static addRelation(builder: flatbuffers.Builder, RELATION: slpConstraintRelation): void;
    static addLowerBound(builder: flatbuffers.Builder, LOWER_BOUND: number): void;
    static addUpperBound(builder: flatbuffers.Builder, UPPER_BOUND: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static endSLPNonlinearConstraint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPNonlinearConstraint(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset, PARAMETER: pceParameter, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset, RELATION: slpConstraintRelation, LOWER_BOUND: number, UPPER_BOUND: number, TOLERANCE: number, SCALE: number): flatbuffers.Offset;
    unpack(): SLPNonlinearConstraintT;
    unpackTo(_o: SLPNonlinearConstraintT): void;
}
export declare class SLPNonlinearConstraintT implements flatbuffers.IGeneratedObject {
    CONSTRAINT_ID: string | Uint8Array | null;
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME: string | Uint8Array | null;
    RELATION: slpConstraintRelation;
    LOWER_BOUND: number;
    UPPER_BOUND: number;
    TOLERANCE: number;
    SCALE: number;
    constructor(CONSTRAINT_ID?: string | Uint8Array | null, PARAMETER?: pceParameter, PROVIDER_DEFINED_PARAMETER_NAME?: string | Uint8Array | null, RELATION?: slpConstraintRelation, LOWER_BOUND?: number, UPPER_BOUND?: number, TOLERANCE?: number, SCALE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPNonlinearConstraint.d.ts.map