import * as flatbuffers from 'flatbuffers';
/**
 * One encounter stage of the body sequence: the set of bodies admissible at
 * this position in the sequence, and the epoch grid searched for it.
 *
 * Bodies are named by NAIF integer ID, which is normative. SDS carries no
 * body enum and $GRV.CentralBody is gravity-model-scoped and incomplete, so it
 * must not be repurposed here. Note that a barycenter and a body center are
 * different objects (4 is the Mars barycenter, 499 is Mars) and the
 * distinction is operationally load-bearing.
 */
export declare class MDPEncounterStage implements flatbuffers.IUnpackableObject<MDPEncounterStageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDPEncounterStage;
    static getRootAsMDPEncounterStage(bb: flatbuffers.ByteBuffer, obj?: MDPEncounterStage): MDPEncounterStage;
    static getSizePrefixedRootAsMDPEncounterStage(bb: flatbuffers.ByteBuffer, obj?: MDPEncounterStage): MDPEncounterStage;
    /**
     * Zero-based position in the ordered sequence.
     */
    STAGE_INDEX(): number;
    /**
     * NAIF integer IDs admissible at this stage. A single entry pins the body.
     */
    ALLOWED_BODY_NAIF_IDS(index: number): number | null;
    allowedBodyNaifIdsLength(): number;
    allowedBodyNaifIdsArray(): Int32Array | null;
    /**
     * Advisory names, parallel to ALLOWED_BODY_NAIF_IDS when present.
     */
    ALLOWED_BODY_NAMES(index: number): string;
    ALLOWED_BODY_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedBodyNamesLength(): number;
    /**
     * Earliest and latest epoch searched at this stage, ISO 8601.
     */
    EPOCH_WINDOW_START(): string | null;
    EPOCH_WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_WINDOW_END(): string | null;
    EPOCH_WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch grid step searched within the window, days.
     */
    EPOCH_GRID_STEP_DAYS(): number;
    /**
     * Bounds on hyperbolic excess speed at this encounter, km/s.
     */
    V_INFINITY_MIN_KM_S(): number;
    V_INFINITY_MAX_KM_S(): number;
    /**
     * Minimum admissible flyby altitude above the body's reference surface, km.
     */
    MIN_FLYBY_ALTITUDE_KM(): number;
    /**
     * Cap on powered-flyby delta-V applied at this encounter, km/s.
     */
    MAX_POWERED_FLYBY_DELTA_V_KM_S(): number;
    static startMDPEncounterStage(builder: flatbuffers.Builder): void;
    static addStageIndex(builder: flatbuffers.Builder, STAGE_INDEX: number): void;
    static addAllowedBodyNaifIds(builder: flatbuffers.Builder, ALLOWED_BODY_NAIF_IDSOffset: flatbuffers.Offset): void;
    static createAllowedBodyNaifIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAllowedBodyNaifIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAllowedBodyNaifIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAllowedBodyNames(builder: flatbuffers.Builder, ALLOWED_BODY_NAMESOffset: flatbuffers.Offset): void;
    static createAllowedBodyNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedBodyNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochWindowStart(builder: flatbuffers.Builder, EPOCH_WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addEpochWindowEnd(builder: flatbuffers.Builder, EPOCH_WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addEpochGridStepDays(builder: flatbuffers.Builder, EPOCH_GRID_STEP_DAYS: number): void;
    static addVInfinityMinKmS(builder: flatbuffers.Builder, V_INFINITY_MIN_KM_S: number): void;
    static addVInfinityMaxKmS(builder: flatbuffers.Builder, V_INFINITY_MAX_KM_S: number): void;
    static addMinFlybyAltitudeKm(builder: flatbuffers.Builder, MIN_FLYBY_ALTITUDE_KM: number): void;
    static addMaxPoweredFlybyDeltaVKmS(builder: flatbuffers.Builder, MAX_POWERED_FLYBY_DELTA_V_KM_S: number): void;
    static endMDPEncounterStage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDPEncounterStage(builder: flatbuffers.Builder, STAGE_INDEX: number, ALLOWED_BODY_NAIF_IDSOffset: flatbuffers.Offset, ALLOWED_BODY_NAMESOffset: flatbuffers.Offset, EPOCH_WINDOW_STARTOffset: flatbuffers.Offset, EPOCH_WINDOW_ENDOffset: flatbuffers.Offset, EPOCH_GRID_STEP_DAYS: number, V_INFINITY_MIN_KM_S: number, V_INFINITY_MAX_KM_S: number, MIN_FLYBY_ALTITUDE_KM: number, MAX_POWERED_FLYBY_DELTA_V_KM_S: number): flatbuffers.Offset;
    unpack(): MDPEncounterStageT;
    unpackTo(_o: MDPEncounterStageT): void;
}
export declare class MDPEncounterStageT implements flatbuffers.IGeneratedObject {
    STAGE_INDEX: number;
    ALLOWED_BODY_NAIF_IDS: (number)[];
    ALLOWED_BODY_NAMES: (string)[];
    EPOCH_WINDOW_START: string | Uint8Array | null;
    EPOCH_WINDOW_END: string | Uint8Array | null;
    EPOCH_GRID_STEP_DAYS: number;
    V_INFINITY_MIN_KM_S: number;
    V_INFINITY_MAX_KM_S: number;
    MIN_FLYBY_ALTITUDE_KM: number;
    MAX_POWERED_FLYBY_DELTA_V_KM_S: number;
    constructor(STAGE_INDEX?: number, ALLOWED_BODY_NAIF_IDS?: (number)[], ALLOWED_BODY_NAMES?: (string)[], EPOCH_WINDOW_START?: string | Uint8Array | null, EPOCH_WINDOW_END?: string | Uint8Array | null, EPOCH_GRID_STEP_DAYS?: number, V_INFINITY_MIN_KM_S?: number, V_INFINITY_MAX_KM_S?: number, MIN_FLYBY_ALTITUDE_KM?: number, MAX_POWERED_FLYBY_DELTA_V_KM_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDPEncounterStage.d.ts.map