import * as flatbuffers from 'flatbuffers';
import { PCEParameterCondition, PCEParameterConditionT } from './PCEParameterCondition.js';
/**
 * Configuration for PARAMETER_CONDITION, the generic locator.
 */
export declare class EVLParameterConditionConfiguration implements flatbuffers.IUnpackableObject<EVLParameterConditionConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLParameterConditionConfiguration;
    static getRootAsEVLParameterConditionConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLParameterConditionConfiguration): EVLParameterConditionConfiguration;
    static getSizePrefixedRootAsEVLParameterConditionConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLParameterConditionConfiguration): EVLParameterConditionConfiguration;
    /**
     * Conditions on $PCE catalog parameters. The predicate vocabulary is
     * PCEParameterCondition and is NOT restated here.
     */
    CONDITIONS(index: number, obj?: PCEParameterCondition): PCEParameterCondition | null;
    conditionsLength(): number;
    /**
     * True reports the interval BETWEEN a satisfying crossing and the next
     * unsatisfying one; false reports each crossing as an instantaneous event
     * with equal start and stop epochs.
     */
    REPORT_AS_INTERVAL(): boolean;
    MINIMUM_DURATION_SECONDS(): number;
    static startEVLParameterConditionConfiguration(builder: flatbuffers.Builder): void;
    static addConditions(builder: flatbuffers.Builder, CONDITIONSOffset: flatbuffers.Offset): void;
    static createConditionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConditionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReportAsInterval(builder: flatbuffers.Builder, REPORT_AS_INTERVAL: boolean): void;
    static addMinimumDurationSeconds(builder: flatbuffers.Builder, MINIMUM_DURATION_SECONDS: number): void;
    static endEVLParameterConditionConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLParameterConditionConfiguration(builder: flatbuffers.Builder, CONDITIONSOffset: flatbuffers.Offset, REPORT_AS_INTERVAL: boolean, MINIMUM_DURATION_SECONDS: number): flatbuffers.Offset;
    unpack(): EVLParameterConditionConfigurationT;
    unpackTo(_o: EVLParameterConditionConfigurationT): void;
}
export declare class EVLParameterConditionConfigurationT implements flatbuffers.IGeneratedObject {
    CONDITIONS: (PCEParameterConditionT)[];
    REPORT_AS_INTERVAL: boolean;
    MINIMUM_DURATION_SECONDS: number;
    constructor(CONDITIONS?: (PCEParameterConditionT)[], REPORT_AS_INTERVAL?: boolean, MINIMUM_DURATION_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLParameterConditionConfiguration.d.ts.map