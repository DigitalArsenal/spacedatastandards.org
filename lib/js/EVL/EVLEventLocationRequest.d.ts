import * as flatbuffers from 'flatbuffers';
import { EVLApsidesConfiguration, EVLApsidesConfigurationT } from './EVLApsidesConfiguration.js';
import { EVLContactConfiguration, EVLContactConfigurationT } from './EVLContactConfiguration.js';
import { EVLEclipseConfiguration, EVLEclipseConfigurationT } from './EVLEclipseConfiguration.js';
import { EVLIntrusionConfiguration, EVLIntrusionConfigurationT } from './EVLIntrusionConfiguration.js';
import { EVLNodeCrossingConfiguration, EVLNodeCrossingConfigurationT } from './EVLNodeCrossingConfiguration.js';
import { EVLParameterConditionConfiguration, EVLParameterConditionConfigurationT } from './EVLParameterConditionConfiguration.js';
import { PCEEvaluationContext, PCEEvaluationContextT } from './PCEEvaluationContext.js';
import { PCEParameterRef, PCEParameterRefT } from './PCEParameterRef.js';
import { evlLocatorClass } from './evlLocatorClass.js';
/**
 * Locate events of one class over one interval.
 */
export declare class EVLEventLocationRequest implements flatbuffers.IUnpackableObject<EVLEventLocationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLEventLocationRequest;
    static getRootAsEVLEventLocationRequest(bb: flatbuffers.ByteBuffer, obj?: EVLEventLocationRequest): EVLEventLocationRequest;
    static getSizePrefixedRootAsEVLEventLocationRequest(bb: flatbuffers.ByteBuffer, obj?: EVLEventLocationRequest): EVLEventLocationRequest;
    LOCATOR_CLASS(): evlLocatorClass;
    /**
     * Object the events are located for.
     */
    TARGET_OBJECT_ID(): string | null;
    TARGET_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bodies, coordinate systems, epoch reference and Earth-orientation data
     * set the geometry is evaluated in. The state source itself is a port the
     * caller supplies and is NOT named here.
     */
    CONTEXT(obj?: PCEEvaluationContext): PCEEvaluationContext | null;
    /**
     * Interval to search, ISO 8601.
     */
    SCAN_START_EPOCH(): string | null;
    SCAN_START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCAN_STOP_EPOCH(): string | null;
    SCAN_STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of the interval, named by the $TIM timingStandard member
     * name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coarse step the event function is sampled at before refinement. A
     * provider MAY choose its own step when this is absent, and the located
     * epochs MUST NOT depend on it beyond REFINEMENT_TOLERANCE_SECONDS.
     */
    SCAN_STEP_SECONDS(): number;
    /**
     * Convergence bar on a located epoch. A provider that cannot meet it
     * returns ROOT_REFINEMENT_FAILED.
     */
    REFINEMENT_TOLERANCE_SECONDS(): number;
    /**
     * Upper bound on reported events. 0 means no bound.
     */
    MAXIMUM_EVENTS(): number;
    /**
     * Parameters to evaluate at each event's instants.
     */
    REPORT_PARAMETERS(index: number, obj?: PCEParameterRef): PCEParameterRef | null;
    reportParametersLength(): number;
    /**
     * Exactly the configuration matching LOCATOR_CLASS is present; any other
     * combination is MISSING_CONFIGURATION.
     */
    ECLIPSE_CONFIGURATION(obj?: EVLEclipseConfiguration): EVLEclipseConfiguration | null;
    CONTACT_CONFIGURATION(obj?: EVLContactConfiguration): EVLContactConfiguration | null;
    INTRUSION_CONFIGURATION(obj?: EVLIntrusionConfiguration): EVLIntrusionConfiguration | null;
    APSIDES_CONFIGURATION(obj?: EVLApsidesConfiguration): EVLApsidesConfiguration | null;
    NODE_CROSSING_CONFIGURATION(obj?: EVLNodeCrossingConfiguration): EVLNodeCrossingConfiguration | null;
    PARAMETER_CONDITION_CONFIGURATION(obj?: EVLParameterConditionConfiguration): EVLParameterConditionConfiguration | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEVLEventLocationRequest(builder: flatbuffers.Builder): void;
    static addLocatorClass(builder: flatbuffers.Builder, LOCATOR_CLASS: evlLocatorClass): void;
    static addTargetObjectId(builder: flatbuffers.Builder, TARGET_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addContext(builder: flatbuffers.Builder, CONTEXTOffset: flatbuffers.Offset): void;
    static addScanStartEpoch(builder: flatbuffers.Builder, SCAN_START_EPOCHOffset: flatbuffers.Offset): void;
    static addScanStopEpoch(builder: flatbuffers.Builder, SCAN_STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addScanStepSeconds(builder: flatbuffers.Builder, SCAN_STEP_SECONDS: number): void;
    static addRefinementToleranceSeconds(builder: flatbuffers.Builder, REFINEMENT_TOLERANCE_SECONDS: number): void;
    static addMaximumEvents(builder: flatbuffers.Builder, MAXIMUM_EVENTS: number): void;
    static addReportParameters(builder: flatbuffers.Builder, REPORT_PARAMETERSOffset: flatbuffers.Offset): void;
    static createReportParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReportParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEclipseConfiguration(builder: flatbuffers.Builder, ECLIPSE_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addContactConfiguration(builder: flatbuffers.Builder, CONTACT_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addIntrusionConfiguration(builder: flatbuffers.Builder, INTRUSION_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addApsidesConfiguration(builder: flatbuffers.Builder, APSIDES_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addNodeCrossingConfiguration(builder: flatbuffers.Builder, NODE_CROSSING_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addParameterConditionConfiguration(builder: flatbuffers.Builder, PARAMETER_CONDITION_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endEVLEventLocationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EVLEventLocationRequestT;
    unpackTo(_o: EVLEventLocationRequestT): void;
}
export declare class EVLEventLocationRequestT implements flatbuffers.IGeneratedObject {
    LOCATOR_CLASS: evlLocatorClass;
    TARGET_OBJECT_ID: string | Uint8Array | null;
    CONTEXT: PCEEvaluationContextT | null;
    SCAN_START_EPOCH: string | Uint8Array | null;
    SCAN_STOP_EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    SCAN_STEP_SECONDS: number;
    REFINEMENT_TOLERANCE_SECONDS: number;
    MAXIMUM_EVENTS: number;
    REPORT_PARAMETERS: (PCEParameterRefT)[];
    ECLIPSE_CONFIGURATION: EVLEclipseConfigurationT | null;
    CONTACT_CONFIGURATION: EVLContactConfigurationT | null;
    INTRUSION_CONFIGURATION: EVLIntrusionConfigurationT | null;
    APSIDES_CONFIGURATION: EVLApsidesConfigurationT | null;
    NODE_CROSSING_CONFIGURATION: EVLNodeCrossingConfigurationT | null;
    PARAMETER_CONDITION_CONFIGURATION: EVLParameterConditionConfigurationT | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(LOCATOR_CLASS?: evlLocatorClass, TARGET_OBJECT_ID?: string | Uint8Array | null, CONTEXT?: PCEEvaluationContextT | null, SCAN_START_EPOCH?: string | Uint8Array | null, SCAN_STOP_EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, SCAN_STEP_SECONDS?: number, REFINEMENT_TOLERANCE_SECONDS?: number, MAXIMUM_EVENTS?: number, REPORT_PARAMETERS?: (PCEParameterRefT)[], ECLIPSE_CONFIGURATION?: EVLEclipseConfigurationT | null, CONTACT_CONFIGURATION?: EVLContactConfigurationT | null, INTRUSION_CONFIGURATION?: EVLIntrusionConfigurationT | null, APSIDES_CONFIGURATION?: EVLApsidesConfigurationT | null, NODE_CROSSING_CONFIGURATION?: EVLNodeCrossingConfigurationT | null, PARAMETER_CONDITION_CONFIGURATION?: EVLParameterConditionConfigurationT | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLEventLocationRequest.d.ts.map