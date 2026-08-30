import * as flatbuffers from 'flatbuffers';
import { EVLEventLocationRequest, EVLEventLocationRequestT } from './EVLEventLocationRequest.js';
import { EVLEventReport, EVLEventReportT } from './EVLEventReport.js';
/**
 * Event Locator
 *
 * One request and one report for every class of located event: shadow
 * passage, site visibility, sensor-field-of-view intrusion, apsis passage,
 * node crossing, and the generic condition on any $PCE catalog parameter.
 * Every class is the same pair of an event function and a refined root, so a
 * new class is a configuration table and a vocabulary member, never a new
 * record. Entry and exit epochs, duration, the occulting or observed body and
 * the parameter values captured at each event's instants are reported in one
 * shape, and the predicate of the generic class is $PCE's
 * PCEParameterCondition rather than a second spelling of the same idea.
 *
 * Angles are radians, durations seconds, epochs ISO 8601 in a named time
 * system.
 */
export declare class EVL implements flatbuffers.IUnpackableObject<EVLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVL;
    static getRootAsEVL(bb: flatbuffers.ByteBuffer, obj?: EVL): EVL;
    static getSizePrefixedRootAsEVL(bb: flatbuffers.ByteBuffer, obj?: EVL): EVL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    LOCATION_REQUEST(obj?: EVLEventLocationRequest): EVLEventLocationRequest | null;
    EVENT_REPORT(obj?: EVLEventReport): EVLEventReport | null;
    static startEVL(builder: flatbuffers.Builder): void;
    static addLocationRequest(builder: flatbuffers.Builder, LOCATION_REQUESTOffset: flatbuffers.Offset): void;
    static addEventReport(builder: flatbuffers.Builder, EVENT_REPORTOffset: flatbuffers.Offset): void;
    static endEVL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEVLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEVLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EVLT;
    unpackTo(_o: EVLT): void;
}
export declare class EVLT implements flatbuffers.IGeneratedObject {
    LOCATION_REQUEST: EVLEventLocationRequestT | null;
    EVENT_REPORT: EVLEventReportT | null;
    constructor(LOCATION_REQUEST?: EVLEventLocationRequestT | null, EVENT_REPORT?: EVLEventReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVL.d.ts.map