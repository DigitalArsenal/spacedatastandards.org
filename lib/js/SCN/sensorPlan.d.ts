import * as flatbuffers from 'flatbuffers';
/**
 * Sensor Tasking Plan
 */
export declare class sensorPlan implements flatbuffers.IUnpackableObject<sensorPlanT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sensorPlan;
    static getRootAssensorPlan(bb: flatbuffers.ByteBuffer, obj?: sensorPlan): sensorPlan;
    static getSizePrefixedRootAssensorPlan(bb: flatbuffers.ByteBuffer, obj?: sensorPlan): sensorPlan;
    /**
     * Plan start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Plan end time (ISO 8601)
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target satellite number or designator
     */
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Priority level (1=highest)
     */
    PRIORITY(): number;
    /**
     * Requested observation mode
     */
    MODE(): string | null;
    MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum elevation in degrees
     */
    MIN_ELEVATION(): number;
    /**
     * Maximum range in km
     */
    MAX_RANGE(): number;
    static startsensorPlan(builder: flatbuffers.Builder): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addPriority(builder: flatbuffers.Builder, PRIORITY: number): void;
    static addMode(builder: flatbuffers.Builder, MODEOffset: flatbuffers.Offset): void;
    static addMinElevation(builder: flatbuffers.Builder, MIN_ELEVATION: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static endsensorPlan(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createsensorPlan(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, TARGET_IDOffset: flatbuffers.Offset, PRIORITY: number, MODEOffset: flatbuffers.Offset, MIN_ELEVATION: number, MAX_RANGE: number): flatbuffers.Offset;
    unpack(): sensorPlanT;
    unpackTo(_o: sensorPlanT): void;
}
export declare class sensorPlanT implements flatbuffers.IGeneratedObject {
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    TARGET_ID: string | Uint8Array | null;
    PRIORITY: number;
    MODE: string | Uint8Array | null;
    MIN_ELEVATION: number;
    MAX_RANGE: number;
    constructor(START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, TARGET_ID?: string | Uint8Array | null, PRIORITY?: number, MODE?: string | Uint8Array | null, MIN_ELEVATION?: number, MAX_RANGE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sensorPlan.d.ts.map