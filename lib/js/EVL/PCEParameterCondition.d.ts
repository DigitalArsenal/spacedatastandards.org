import * as flatbuffers from 'flatbuffers';
import { PCEParameterRef, PCEParameterRefT } from './PCEParameterRef.js';
import { pceConditionDirection } from './pceConditionDirection.js';
/**
 * A predicate on a named parameter: the parameter attains GOAL_VALUE, in
 * DIRECTION, for the OCCURRENCE-th time. This is the ONE spelling of a
 * stopping condition and of a generic event function; $EVL references it
 * rather than minting a second one.
 */
export declare class PCEParameterCondition implements flatbuffers.IUnpackableObject<PCEParameterConditionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterCondition;
    static getRootAsPCEParameterCondition(bb: flatbuffers.ByteBuffer, obj?: PCEParameterCondition): PCEParameterCondition;
    static getSizePrefixedRootAsPCEParameterCondition(bb: flatbuffers.ByteBuffer, obj?: PCEParameterCondition): PCEParameterCondition;
    PARAMETER(obj?: PCEParameterRef): PCEParameterRef | null;
    /**
     * Value the parameter must attain, in the parameter's own SI unit.
     */
    GOAL_VALUE(): number;
    DIRECTION(): pceConditionDirection;
    /**
     * Convergence bar on the parameter value at the reported epoch, in the
     * parameter's own unit. A provider that cannot meet it returns
     * ROOT_REFINEMENT_FAILED rather than reporting an unconverged root.
     */
    GOAL_TOLERANCE(): number;
    /**
     * Which attainment satisfies the condition, one-based. 0 and 1 both mean
     * the first.
     */
    OCCURRENCE(): number;
    static startPCEParameterCondition(builder: flatbuffers.Builder): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETEROffset: flatbuffers.Offset): void;
    static addGoalValue(builder: flatbuffers.Builder, GOAL_VALUE: number): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: pceConditionDirection): void;
    static addGoalTolerance(builder: flatbuffers.Builder, GOAL_TOLERANCE: number): void;
    static addOccurrence(builder: flatbuffers.Builder, OCCURRENCE: number): void;
    static endPCEParameterCondition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterCondition(builder: flatbuffers.Builder, PARAMETEROffset: flatbuffers.Offset, GOAL_VALUE: number, DIRECTION: pceConditionDirection, GOAL_TOLERANCE: number, OCCURRENCE: number): flatbuffers.Offset;
    unpack(): PCEParameterConditionT;
    unpackTo(_o: PCEParameterConditionT): void;
}
export declare class PCEParameterConditionT implements flatbuffers.IGeneratedObject {
    PARAMETER: PCEParameterRefT | null;
    GOAL_VALUE: number;
    DIRECTION: pceConditionDirection;
    GOAL_TOLERANCE: number;
    OCCURRENCE: number;
    constructor(PARAMETER?: PCEParameterRefT | null, GOAL_VALUE?: number, DIRECTION?: pceConditionDirection, GOAL_TOLERANCE?: number, OCCURRENCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterCondition.d.ts.map