import * as flatbuffers from 'flatbuffers';
import { cmeArrivalKind } from './cmeArrivalKind.js';
/**
 * One arrival at one place.
 */
export declare class CMEArrival implements flatbuffers.IUnpackableObject<CMEArrivalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMEArrival;
    static getRootAsCMEArrival(bb: flatbuffers.ByteBuffer, obj?: CMEArrival): CMEArrival;
    static getSizePrefixedRootAsCMEArrival(bb: flatbuffers.ByteBuffer, obj?: CMEArrival): CMEArrival;
    /**
     * Target, verbatim (e.g. Earth, STEREO A, Mars).
     */
    TARGET(): string;
    TARGET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    KIND(): cmeArrivalKind;
    /**
     * Model, verbatim (e.g. WSA-ENLIL+Cone); empty for an observation.
     */
    MODEL(): string | null;
    MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Model run or observed-event identity, verbatim.
     */
    SOURCE_EVENT_ID(): string | null;
    SOURCE_EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ISSUED_AT(): string | null;
    ISSUED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ARRIVAL_TIME(): string | null;
    ARRIVAL_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stated plus-or-minus uncertainty, hours.
     */
    ARRIVAL_UNCERTAINTY_H(): number;
    DURATION_H(): number;
    /**
     * True when the source states a glancing blow; meaningful only when HAS_GLANCING_BLOW.
     */
    GLANCING_BLOW(): boolean;
    HAS_GLANCING_BLOW(): boolean;
    /**
     * Predicted Kp per assumed IMF clock angle (DONKI kp_18 .. kp_180).
     */
    KP_PREDICTED(index: number): number | null;
    kpPredictedLength(): number;
    kpPredictedArray(): Float64Array | null;
    KP_CLOCK_ANGLES_DEG(index: number): number | null;
    kpClockAnglesDegLength(): number;
    kpClockAnglesDegArray(): Float64Array | null;
    static startCMEArrival(builder: flatbuffers.Builder): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: cmeArrivalKind): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addSourceEventId(builder: flatbuffers.Builder, SOURCE_EVENT_IDOffset: flatbuffers.Offset): void;
    static addIssuedAt(builder: flatbuffers.Builder, ISSUED_ATOffset: flatbuffers.Offset): void;
    static addArrivalTime(builder: flatbuffers.Builder, ARRIVAL_TIMEOffset: flatbuffers.Offset): void;
    static addArrivalUncertaintyH(builder: flatbuffers.Builder, ARRIVAL_UNCERTAINTY_H: number): void;
    static addDurationH(builder: flatbuffers.Builder, DURATION_H: number): void;
    static addGlancingBlow(builder: flatbuffers.Builder, GLANCING_BLOW: boolean): void;
    static addHasGlancingBlow(builder: flatbuffers.Builder, HAS_GLANCING_BLOW: boolean): void;
    static addKpPredicted(builder: flatbuffers.Builder, KP_PREDICTEDOffset: flatbuffers.Offset): void;
    static createKpPredictedVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKpPredictedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKpPredictedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKpClockAnglesDeg(builder: flatbuffers.Builder, KP_CLOCK_ANGLES_DEGOffset: flatbuffers.Offset): void;
    static createKpClockAnglesDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKpClockAnglesDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKpClockAnglesDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCMEArrival(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCMEArrival(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset, KIND: cmeArrivalKind, MODELOffset: flatbuffers.Offset, SOURCE_EVENT_IDOffset: flatbuffers.Offset, ISSUED_ATOffset: flatbuffers.Offset, ARRIVAL_TIMEOffset: flatbuffers.Offset, ARRIVAL_UNCERTAINTY_H: number, DURATION_H: number, GLANCING_BLOW: boolean, HAS_GLANCING_BLOW: boolean, KP_PREDICTEDOffset: flatbuffers.Offset, KP_CLOCK_ANGLES_DEGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMEArrivalT;
    unpackTo(_o: CMEArrivalT): void;
}
export declare class CMEArrivalT implements flatbuffers.IGeneratedObject {
    TARGET: string | Uint8Array | null;
    KIND: cmeArrivalKind;
    MODEL: string | Uint8Array | null;
    SOURCE_EVENT_ID: string | Uint8Array | null;
    ISSUED_AT: string | Uint8Array | null;
    ARRIVAL_TIME: string | Uint8Array | null;
    ARRIVAL_UNCERTAINTY_H: number;
    DURATION_H: number;
    GLANCING_BLOW: boolean;
    HAS_GLANCING_BLOW: boolean;
    KP_PREDICTED: (number)[];
    KP_CLOCK_ANGLES_DEG: (number)[];
    constructor(TARGET?: string | Uint8Array | null, KIND?: cmeArrivalKind, MODEL?: string | Uint8Array | null, SOURCE_EVENT_ID?: string | Uint8Array | null, ISSUED_AT?: string | Uint8Array | null, ARRIVAL_TIME?: string | Uint8Array | null, ARRIVAL_UNCERTAINTY_H?: number, DURATION_H?: number, GLANCING_BLOW?: boolean, HAS_GLANCING_BLOW?: boolean, KP_PREDICTED?: (number)[], KP_CLOCK_ANGLES_DEG?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMEArrival.d.ts.map