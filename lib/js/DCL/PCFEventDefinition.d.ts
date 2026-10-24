import * as flatbuffers from 'flatbuffers';
import { EVLApsidesConfiguration, EVLApsidesConfigurationT } from './EVLApsidesConfiguration.js';
import { EVLContactConfiguration, EVLContactConfigurationT } from './EVLContactConfiguration.js';
import { EVLEclipseConfiguration, EVLEclipseConfigurationT } from './EVLEclipseConfiguration.js';
import { EVLIntrusionConfiguration, EVLIntrusionConfigurationT } from './EVLIntrusionConfiguration.js';
import { EVLNodeCrossingConfiguration, EVLNodeCrossingConfigurationT } from './EVLNodeCrossingConfiguration.js';
import { PCEParameterCondition, PCEParameterConditionT } from './PCEParameterCondition.js';
import { evlLocatorClass } from './evlLocatorClass.js';
import { pcfEventAction } from './pcfEventAction.js';
/**
 * One event a propagator locates while it integrates. The vocabulary is
 * $EVL's: a locator class with its configuration, and $PCE's parameter
 * condition for the generic case (an altitude, radius, speed, radial
 * velocity or mass crossing is a $PCE parameter, not a class of its own).
 */
export declare class PCFEventDefinition implements flatbuffers.IUnpackableObject<PCFEventDefinitionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFEventDefinition;
    static getRootAsPCFEventDefinition(bb: flatbuffers.ByteBuffer, obj?: PCFEventDefinition): PCFEventDefinition;
    static getSizePrefixedRootAsPCFEventDefinition(bb: flatbuffers.ByteBuffer, obj?: PCFEventDefinition): PCFEventDefinition;
    /**
     * The caller's name for the event, echoed in the result. Default empty.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Which locator. Default PARAMETER_CONDITION.
     */
    LOCATOR_CLASS(): evlLocatorClass;
    /**
     * Exactly the one of the next five that matches LOCATOR_CLASS is present
     * (any other combination is refused as MISSING_CONFIGURATION, as in
     * $EVL). The condition carries its own direction, goal value, goal
     * tolerance and occurrence.
     */
    CONDITION(obj?: PCEParameterCondition): PCEParameterCondition | null;
    ECLIPSE(obj?: EVLEclipseConfiguration): EVLEclipseConfiguration | null;
    CONTACT(obj?: EVLContactConfiguration): EVLContactConfiguration | null;
    INTRUSION(obj?: EVLIntrusionConfiguration): EVLIntrusionConfiguration | null;
    APSIDES(obj?: EVLApsidesConfiguration): EVLApsidesConfiguration | null;
    NODE_CROSSING(obj?: EVLNodeCrossingConfiguration): EVLNodeCrossingConfiguration | null;
    /**
     * What the propagator does at the event. Default RECORD.
     */
    ACTION(): pcfEventAction;
    /**
     * Convergence bar on the located epoch, seconds. Default 1e-9.
     */
    EPOCH_TOLERANCE_SECONDS(): number;
    /**
     * Step at which the event function is sampled before refinement, seconds;
     * 0 samples at the integrator's accepted steps. A root is found only when
     * the function changes sign within one sample interval. Default 0.
     */
    SCAN_STEP_SECONDS(): number;
    /**
     * Largest number of occurrences reported; 0 is no bound. Default 0.
     */
    MAXIMUM_EVENTS(): number;
    static startPCFEventDefinition(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addLocatorClass(builder: flatbuffers.Builder, LOCATOR_CLASS: evlLocatorClass): void;
    static addCondition(builder: flatbuffers.Builder, CONDITIONOffset: flatbuffers.Offset): void;
    static addEclipse(builder: flatbuffers.Builder, ECLIPSEOffset: flatbuffers.Offset): void;
    static addContact(builder: flatbuffers.Builder, CONTACTOffset: flatbuffers.Offset): void;
    static addIntrusion(builder: flatbuffers.Builder, INTRUSIONOffset: flatbuffers.Offset): void;
    static addApsides(builder: flatbuffers.Builder, APSIDESOffset: flatbuffers.Offset): void;
    static addNodeCrossing(builder: flatbuffers.Builder, NODE_CROSSINGOffset: flatbuffers.Offset): void;
    static addAction(builder: flatbuffers.Builder, ACTION: pcfEventAction): void;
    static addEpochToleranceSeconds(builder: flatbuffers.Builder, EPOCH_TOLERANCE_SECONDS: number): void;
    static addScanStepSeconds(builder: flatbuffers.Builder, SCAN_STEP_SECONDS: number): void;
    static addMaximumEvents(builder: flatbuffers.Builder, MAXIMUM_EVENTS: number): void;
    static endPCFEventDefinition(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCFEventDefinitionT;
    unpackTo(_o: PCFEventDefinitionT): void;
}
export declare class PCFEventDefinitionT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    LOCATOR_CLASS: evlLocatorClass;
    CONDITION: PCEParameterConditionT | null;
    ECLIPSE: EVLEclipseConfigurationT | null;
    CONTACT: EVLContactConfigurationT | null;
    INTRUSION: EVLIntrusionConfigurationT | null;
    APSIDES: EVLApsidesConfigurationT | null;
    NODE_CROSSING: EVLNodeCrossingConfigurationT | null;
    ACTION: pcfEventAction;
    EPOCH_TOLERANCE_SECONDS: number;
    SCAN_STEP_SECONDS: number;
    MAXIMUM_EVENTS: number;
    constructor(NAME?: string | Uint8Array | null, LOCATOR_CLASS?: evlLocatorClass, CONDITION?: PCEParameterConditionT | null, ECLIPSE?: EVLEclipseConfigurationT | null, CONTACT?: EVLContactConfigurationT | null, INTRUSION?: EVLIntrusionConfigurationT | null, APSIDES?: EVLApsidesConfigurationT | null, NODE_CROSSING?: EVLNodeCrossingConfigurationT | null, ACTION?: pcfEventAction, EPOCH_TOLERANCE_SECONDS?: number, SCAN_STEP_SECONDS?: number, MAXIMUM_EVENTS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFEventDefinition.d.ts.map