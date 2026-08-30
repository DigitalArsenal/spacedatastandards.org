import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
export declare class SLPGoal implements flatbuffers.IUnpackableObject<SLPGoalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPGoal;
    static getRootAsSLPGoal(bb: flatbuffers.ByteBuffer, obj?: SLPGoal): SLPGoal;
    static getSizePrefixedRootAsSLPGoal(bb: flatbuffers.ByteBuffer, obj?: SLPGoal): SLPGoal;
    GOAL_ID(): string;
    GOAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PARAMETER(): pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME(): string | null;
    PROVIDER_DEFINED_PARAMETER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_VALUE(): number;
    TOLERANCE(): number;
    SCALE(): number;
    static startSLPGoal(builder: flatbuffers.Builder): void;
    static addGoalId(builder: flatbuffers.Builder, GOAL_IDOffset: flatbuffers.Offset): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedParameterName(builder: flatbuffers.Builder, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset): void;
    static addTargetValue(builder: flatbuffers.Builder, TARGET_VALUE: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static endSLPGoal(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPGoal(builder: flatbuffers.Builder, GOAL_IDOffset: flatbuffers.Offset, PARAMETER: pceParameter, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset, TARGET_VALUE: number, TOLERANCE: number, SCALE: number): flatbuffers.Offset;
    unpack(): SLPGoalT;
    unpackTo(_o: SLPGoalT): void;
}
export declare class SLPGoalT implements flatbuffers.IGeneratedObject {
    GOAL_ID: string | Uint8Array | null;
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME: string | Uint8Array | null;
    TARGET_VALUE: number;
    TOLERANCE: number;
    SCALE: number;
    constructor(GOAL_ID?: string | Uint8Array | null, PARAMETER?: pceParameter, PROVIDER_DEFINED_PARAMETER_NAME?: string | Uint8Array | null, TARGET_VALUE?: number, TOLERANCE?: number, SCALE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPGoal.d.ts.map