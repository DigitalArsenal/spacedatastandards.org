import * as flatbuffers from 'flatbuffers';
import { EVLEventSample, EVLEventSampleT } from './EVLEventSample.js';
import { evlEventType } from './evlEventType.js';
import { pceParameter } from './pceParameter.js';
/**
 * One located event. An instantaneous event has STOP_EPOCH equal to
 * START_EPOCH and DURATION_SECONDS equal to 0.
 */
export declare class EVLEvent implements flatbuffers.IUnpackableObject<EVLEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLEvent;
    static getRootAsEVLEvent(bb: flatbuffers.ByteBuffer, obj?: EVLEvent): EVLEvent;
    static getSizePrefixedRootAsEVLEvent(bb: flatbuffers.ByteBuffer, obj?: EVLEvent): EVLEvent;
    EVENT_TYPE(): evlEventType;
    /**
     * Entry epoch, ISO 8601.
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Exit epoch, ISO 8601.
     */
    STOP_EPOCH(): string | null;
    STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of the epochs, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * STOP_EPOCH minus START_EPOCH in seconds. Carried because it is the
     * reported quantity of an event report and MUST agree with the epochs.
     */
    DURATION_SECONDS(): number;
    /**
     * The object the event happened to.
     */
    TARGET_OBJECT_ID(): string | null;
    TARGET_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body code of the body that occulted or intruded, when one did.
     */
    OCCULTING_BODY_ID(): number;
    /**
     * Identifier of the observing site or sensor, when the class has one.
     */
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the observed body or object, when the class has one.
     */
    OBSERVED_OBJECT_ID(): string | null;
    OBSERVED_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the event's extremum, ISO 8601: deepest obscuration, peak
     * elevation, closest approach. Absent when the class has no extremum.
     */
    EXTREMUM_EPOCH(): string | null;
    EXTREMUM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value at EXTREMUM_EPOCH, in the unit of EXTREMUM_PARAMETER.
     */
    EXTREMUM_VALUE(): number;
    /**
     * Which catalog parameter EXTREMUM_VALUE is a value of.
     */
    EXTREMUM_PARAMETER(): pceParameter;
    /**
     * Index into EVLEventLocationRequest.PARAMETER_CONDITION_CONFIGURATION's
     * CONDITIONS for a generic event; negative for every other class.
     */
    CONDITION_INDEX(): number;
    /**
     * Requested parameters, evaluated at the instants of this event.
     */
    SAMPLES(index: number, obj?: EVLEventSample): EVLEventSample | null;
    samplesLength(): number;
    static startEVLEvent(builder: flatbuffers.Builder): void;
    static addEventType(builder: flatbuffers.Builder, EVENT_TYPE: evlEventType): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addDurationSeconds(builder: flatbuffers.Builder, DURATION_SECONDS: number): void;
    static addTargetObjectId(builder: flatbuffers.Builder, TARGET_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOccultingBodyId(builder: flatbuffers.Builder, OCCULTING_BODY_ID: number): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addObservedObjectId(builder: flatbuffers.Builder, OBSERVED_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addExtremumEpoch(builder: flatbuffers.Builder, EXTREMUM_EPOCHOffset: flatbuffers.Offset): void;
    static addExtremumValue(builder: flatbuffers.Builder, EXTREMUM_VALUE: number): void;
    static addExtremumParameter(builder: flatbuffers.Builder, EXTREMUM_PARAMETER: pceParameter): void;
    static addConditionIndex(builder: flatbuffers.Builder, CONDITION_INDEX: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEVLEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLEvent(builder: flatbuffers.Builder, EVENT_TYPE: evlEventType, START_EPOCHOffset: flatbuffers.Offset, STOP_EPOCHOffset: flatbuffers.Offset, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset, DURATION_SECONDS: number, TARGET_OBJECT_IDOffset: flatbuffers.Offset, OCCULTING_BODY_ID: number, OBSERVER_IDOffset: flatbuffers.Offset, OBSERVED_OBJECT_IDOffset: flatbuffers.Offset, EXTREMUM_EPOCHOffset: flatbuffers.Offset, EXTREMUM_VALUE: number, EXTREMUM_PARAMETER: pceParameter, CONDITION_INDEX: number, SAMPLESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EVLEventT;
    unpackTo(_o: EVLEventT): void;
}
export declare class EVLEventT implements flatbuffers.IGeneratedObject {
    EVENT_TYPE: evlEventType;
    START_EPOCH: string | Uint8Array | null;
    STOP_EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    DURATION_SECONDS: number;
    TARGET_OBJECT_ID: string | Uint8Array | null;
    OCCULTING_BODY_ID: number;
    OBSERVER_ID: string | Uint8Array | null;
    OBSERVED_OBJECT_ID: string | Uint8Array | null;
    EXTREMUM_EPOCH: string | Uint8Array | null;
    EXTREMUM_VALUE: number;
    EXTREMUM_PARAMETER: pceParameter;
    CONDITION_INDEX: number;
    SAMPLES: (EVLEventSampleT)[];
    constructor(EVENT_TYPE?: evlEventType, START_EPOCH?: string | Uint8Array | null, STOP_EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, DURATION_SECONDS?: number, TARGET_OBJECT_ID?: string | Uint8Array | null, OCCULTING_BODY_ID?: number, OBSERVER_ID?: string | Uint8Array | null, OBSERVED_OBJECT_ID?: string | Uint8Array | null, EXTREMUM_EPOCH?: string | Uint8Array | null, EXTREMUM_VALUE?: number, EXTREMUM_PARAMETER?: pceParameter, CONDITION_INDEX?: number, SAMPLES?: (EVLEventSampleT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLEvent.d.ts.map