import * as flatbuffers from 'flatbuffers';
import { PCEParameterCondition, PCEParameterConditionT } from './PCEParameterCondition.js';
/**
 * Scheduled time gates an optional condition. At least one must be present.
 */
export declare class PRWBurnBoundary implements flatbuffers.IUnpackableObject<PRWBurnBoundaryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWBurnBoundary;
    static getRootAsPRWBurnBoundary(bb: flatbuffers.ByteBuffer, obj?: PRWBurnBoundary): PRWBurnBoundary;
    static getSizePrefixedRootAsPRWBurnBoundary(bb: flatbuffers.ByteBuffer, obj?: PRWBurnBoundary): PRWBurnBoundary;
    ELAPSED_SECONDS(): number;
    /**
     * True when ELAPSED_SECONDS carries a value; false means absent.
     */
    HAS_ELAPSED_SECONDS(): boolean;
    /**
     * SI PCE predicate; direction and goal tolerance explicitly populated.
     */
    CONDITION(obj?: PCEParameterCondition): PCEParameterCondition | null;
    static startPRWBurnBoundary(builder: flatbuffers.Builder): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addHasElapsedSeconds(builder: flatbuffers.Builder, HAS_ELAPSED_SECONDS: boolean): void;
    static addCondition(builder: flatbuffers.Builder, CONDITIONOffset: flatbuffers.Offset): void;
    static endPRWBurnBoundary(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWBurnBoundaryT;
    unpackTo(_o: PRWBurnBoundaryT): void;
}
export declare class PRWBurnBoundaryT implements flatbuffers.IGeneratedObject {
    ELAPSED_SECONDS: number;
    HAS_ELAPSED_SECONDS: boolean;
    CONDITION: PCEParameterConditionT | null;
    constructor(ELAPSED_SECONDS?: number, HAS_ELAPSED_SECONDS?: boolean, CONDITION?: PCEParameterConditionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWBurnBoundary.d.ts.map