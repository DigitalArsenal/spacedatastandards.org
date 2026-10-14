import * as flatbuffers from 'flatbuffers';
import { attitudeState, attitudeStateT } from './attitudeState.js';
import { ppsAttitudeMode } from './ppsAttitudeMode.js';
/**
 * One pointing-mode interval.
 */
export declare class ppsPointingSegment implements flatbuffers.IUnpackableObject<ppsPointingSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ppsPointingSegment;
    static getRootAsppsPointingSegment(bb: flatbuffers.ByteBuffer, obj?: ppsPointingSegment): ppsPointingSegment;
    static getSizePrefixedRootAsppsPointingSegment(bb: flatbuffers.ByteBuffer, obj?: ppsPointingSegment): ppsPointingSegment;
    MODE(): ppsAttitudeMode;
    /**
     * Seconds from the start of the scenario when the mode begins; it lasts
     * until the next segment or the end.
     */
    START_S(): number;
    /**
     * Target of TargetTracking: a space object or site identifier; empty = none.
     */
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Body axis to point, unit vector in body axes, 3 values; empty = the
     * mode's default.
     */
    BODY_AXIS(index: number): number | null;
    bodyAxisLength(): number;
    bodyAxisArray(): Float64Array | null;
    /**
     * InertialHold: target attitude; empty = hold the attitude at entry.
     */
    ATTITUDE(obj?: attitudeState): attitudeState | null;
    static startppsPointingSegment(builder: flatbuffers.Builder): void;
    static addMode(builder: flatbuffers.Builder, MODE: ppsAttitudeMode): void;
    static addStartS(builder: flatbuffers.Builder, START_S: number): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addBodyAxis(builder: flatbuffers.Builder, BODY_AXISOffset: flatbuffers.Offset): void;
    static createBodyAxisVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBodyAxisVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBodyAxisVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAttitude(builder: flatbuffers.Builder, ATTITUDEOffset: flatbuffers.Offset): void;
    static endppsPointingSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ppsPointingSegmentT;
    unpackTo(_o: ppsPointingSegmentT): void;
}
export declare class ppsPointingSegmentT implements flatbuffers.IGeneratedObject {
    MODE: ppsAttitudeMode;
    START_S: number;
    TARGET_ID: string | Uint8Array | null;
    BODY_AXIS: (number)[];
    ATTITUDE: attitudeStateT | null;
    constructor(MODE?: ppsAttitudeMode, START_S?: number, TARGET_ID?: string | Uint8Array | null, BODY_AXIS?: (number)[], ATTITUDE?: attitudeStateT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ppsPointingSegment.d.ts.map