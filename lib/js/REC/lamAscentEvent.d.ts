import * as flatbuffers from 'flatbuffers';
import { lamMissionPhase } from './lamMissionPhase.js';
/**
 * Launch-ascent event.
 */
export declare class lamAscentEvent implements flatbuffers.IUnpackableObject<lamAscentEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lamAscentEvent;
    static getRootAslamAscentEvent(bb: flatbuffers.ByteBuffer, obj?: lamAscentEvent): lamAscentEvent;
    static getSizePrefixedRootAslamAscentEvent(bb: flatbuffers.ByteBuffer, obj?: lamAscentEvent): lamAscentEvent;
    /**
     * Event identifier.
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event type or name.
     */
    EVENT_TYPE(): string | null;
    EVENT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event epoch in ISO 8601 UTC format.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time from launch in seconds.
     */
    TIME_FROM_LAUNCH_S(): number;
    /**
     * Mission phase at the event.
     */
    PHASE(): lamMissionPhase;
    /**
     * Altitude in meters.
     */
    ALTITUDE_M(): number;
    /**
     * Speed in meters per second.
     */
    SPEED_M_PER_S(): number;
    /**
     * Vehicle mass in kilograms.
     */
    MASS_KG(): number;
    /**
     * Free-form event description.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startlamAscentEvent(builder: flatbuffers.Builder): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addEventType(builder: flatbuffers.Builder, EVENT_TYPEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeFromLaunchS(builder: flatbuffers.Builder, TIME_FROM_LAUNCH_S: number): void;
    static addPhase(builder: flatbuffers.Builder, PHASE: lamMissionPhase): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addSpeedMPerS(builder: flatbuffers.Builder, SPEED_M_PER_S: number): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KG: number): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endlamAscentEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createlamAscentEvent(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset, EVENT_TYPEOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, TIME_FROM_LAUNCH_S: number, PHASE: lamMissionPhase, ALTITUDE_M: number, SPEED_M_PER_S: number, MASS_KG: number, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): lamAscentEventT;
    unpackTo(_o: lamAscentEventT): void;
}
export declare class lamAscentEventT implements flatbuffers.IGeneratedObject {
    EVENT_ID: string | Uint8Array | null;
    EVENT_TYPE: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    TIME_FROM_LAUNCH_S: number;
    PHASE: lamMissionPhase;
    ALTITUDE_M: number;
    SPEED_M_PER_S: number;
    MASS_KG: number;
    DESCRIPTION: string | Uint8Array | null;
    constructor(EVENT_ID?: string | Uint8Array | null, EVENT_TYPE?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, TIME_FROM_LAUNCH_S?: number, PHASE?: lamMissionPhase, ALTITUDE_M?: number, SPEED_M_PER_S?: number, MASS_KG?: number, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lamAscentEvent.d.ts.map