import * as flatbuffers from 'flatbuffers';
/**
 * One body encounter along a candidate trajectory.
 *
 * Encounter-indexed rather than leg-indexed on purpose. A search implementation
 * typically emits leg-indexed arrays: for nE encounters there are nL = nE - 1
 * legs, the departure v-infinity of leg i is the OUTGOING vector at encounter
 * i, and the arrival v-infinity of leg i is the INCOMING vector at encounter
 * i + 1. Carrying both vectors on the encounter they physically occur at
 * removes that off-by-one from every consumer.
 */
export declare class MDSEncounter implements flatbuffers.IUnpackableObject<MDSEncounterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDSEncounter;
    static getRootAsMDSEncounter(bb: flatbuffers.ByteBuffer, obj?: MDSEncounter): MDSEncounter;
    static getSizePrefixedRootAsMDSEncounter(bb: flatbuffers.ByteBuffer, obj?: MDSEncounter): MDSEncounter;
    /**
     * Zero-based position along the trajectory.
     */
    ENCOUNTER_INDEX(): number;
    /**
     * Body encountered, NAIF integer ID (normative). A barycenter is not the
     * body: 4 is the Mars barycenter, 499 is Mars.
     */
    BODY_NAIF_ID(): number;
    /**
     * Advisory body name.
     */
    BODY_NAME(): string | null;
    BODY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encounter epoch as ephemeris time, seconds past J2000 TDB. This is the
     * form solvers work in and is carried verbatim to avoid a lossy round trip.
     */
    EPOCH_ET_S(): number;
    /**
     * Same epoch in ISO 8601 (UTC), for consumers that do not carry an
     * ephemeris time implementation. Advisory; EPOCH_ET_S is normative.
     */
    EPOCH_UTC(): string | null;
    EPOCH_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Incoming hyperbolic excess velocity vector, km/s. Absent at the first
     * encounter.
     */
    INCOMING_V_INFINITY_X_KM_S(): number;
    INCOMING_V_INFINITY_Y_KM_S(): number;
    INCOMING_V_INFINITY_Z_KM_S(): number;
    /**
     * Outgoing hyperbolic excess velocity vector, km/s. Absent at the final
     * encounter.
     */
    OUTGOING_V_INFINITY_X_KM_S(): number;
    OUTGOING_V_INFINITY_Y_KM_S(): number;
    OUTGOING_V_INFINITY_Z_KM_S(): number;
    /**
     * Turn angle between incoming and outgoing asymptotes, radians.
     */
    TURN_ANGLE_RAD(): number;
    /**
     * Flyby periapsis radius measured from the body's center, km.
     */
    PERIAPSIS_RADIUS_KM(): number;
    /**
     * Delta-V applied at periapsis for a powered flyby, km/s. Zero for an
     * unpowered (ballistic) flyby.
     */
    POWERED_FLYBY_DELTA_V_KM_S(): number;
    /**
     * Index of the Lambert solution selected for the leg DEPARTING this
     * encounter, as reported by the solver.
     */
    LAMBERT_SOLUTION_INDEX(): number;
    /**
     * Index of the flyby solution branch selected at this encounter, as
     * reported by the solver.
     */
    FLYBY_SOLUTION_INDEX(): number;
    static startMDSEncounter(builder: flatbuffers.Builder): void;
    static addEncounterIndex(builder: flatbuffers.Builder, ENCOUNTER_INDEX: number): void;
    static addBodyNaifId(builder: flatbuffers.Builder, BODY_NAIF_ID: number): void;
    static addBodyName(builder: flatbuffers.Builder, BODY_NAMEOffset: flatbuffers.Offset): void;
    static addEpochEtS(builder: flatbuffers.Builder, EPOCH_ET_S: number): void;
    static addEpochUtc(builder: flatbuffers.Builder, EPOCH_UTCOffset: flatbuffers.Offset): void;
    static addIncomingVInfinityXKmS(builder: flatbuffers.Builder, INCOMING_V_INFINITY_X_KM_S: number): void;
    static addIncomingVInfinityYKmS(builder: flatbuffers.Builder, INCOMING_V_INFINITY_Y_KM_S: number): void;
    static addIncomingVInfinityZKmS(builder: flatbuffers.Builder, INCOMING_V_INFINITY_Z_KM_S: number): void;
    static addOutgoingVInfinityXKmS(builder: flatbuffers.Builder, OUTGOING_V_INFINITY_X_KM_S: number): void;
    static addOutgoingVInfinityYKmS(builder: flatbuffers.Builder, OUTGOING_V_INFINITY_Y_KM_S: number): void;
    static addOutgoingVInfinityZKmS(builder: flatbuffers.Builder, OUTGOING_V_INFINITY_Z_KM_S: number): void;
    static addTurnAngleRad(builder: flatbuffers.Builder, TURN_ANGLE_RAD: number): void;
    static addPeriapsisRadiusKm(builder: flatbuffers.Builder, PERIAPSIS_RADIUS_KM: number): void;
    static addPoweredFlybyDeltaVKmS(builder: flatbuffers.Builder, POWERED_FLYBY_DELTA_V_KM_S: number): void;
    static addLambertSolutionIndex(builder: flatbuffers.Builder, LAMBERT_SOLUTION_INDEX: number): void;
    static addFlybySolutionIndex(builder: flatbuffers.Builder, FLYBY_SOLUTION_INDEX: number): void;
    static endMDSEncounter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDSEncounter(builder: flatbuffers.Builder, ENCOUNTER_INDEX: number, BODY_NAIF_ID: number, BODY_NAMEOffset: flatbuffers.Offset, EPOCH_ET_S: number, EPOCH_UTCOffset: flatbuffers.Offset, INCOMING_V_INFINITY_X_KM_S: number, INCOMING_V_INFINITY_Y_KM_S: number, INCOMING_V_INFINITY_Z_KM_S: number, OUTGOING_V_INFINITY_X_KM_S: number, OUTGOING_V_INFINITY_Y_KM_S: number, OUTGOING_V_INFINITY_Z_KM_S: number, TURN_ANGLE_RAD: number, PERIAPSIS_RADIUS_KM: number, POWERED_FLYBY_DELTA_V_KM_S: number, LAMBERT_SOLUTION_INDEX: number, FLYBY_SOLUTION_INDEX: number): flatbuffers.Offset;
    unpack(): MDSEncounterT;
    unpackTo(_o: MDSEncounterT): void;
}
export declare class MDSEncounterT implements flatbuffers.IGeneratedObject {
    ENCOUNTER_INDEX: number;
    BODY_NAIF_ID: number;
    BODY_NAME: string | Uint8Array | null;
    EPOCH_ET_S: number;
    EPOCH_UTC: string | Uint8Array | null;
    INCOMING_V_INFINITY_X_KM_S: number;
    INCOMING_V_INFINITY_Y_KM_S: number;
    INCOMING_V_INFINITY_Z_KM_S: number;
    OUTGOING_V_INFINITY_X_KM_S: number;
    OUTGOING_V_INFINITY_Y_KM_S: number;
    OUTGOING_V_INFINITY_Z_KM_S: number;
    TURN_ANGLE_RAD: number;
    PERIAPSIS_RADIUS_KM: number;
    POWERED_FLYBY_DELTA_V_KM_S: number;
    LAMBERT_SOLUTION_INDEX: number;
    FLYBY_SOLUTION_INDEX: number;
    constructor(ENCOUNTER_INDEX?: number, BODY_NAIF_ID?: number, BODY_NAME?: string | Uint8Array | null, EPOCH_ET_S?: number, EPOCH_UTC?: string | Uint8Array | null, INCOMING_V_INFINITY_X_KM_S?: number, INCOMING_V_INFINITY_Y_KM_S?: number, INCOMING_V_INFINITY_Z_KM_S?: number, OUTGOING_V_INFINITY_X_KM_S?: number, OUTGOING_V_INFINITY_Y_KM_S?: number, OUTGOING_V_INFINITY_Z_KM_S?: number, TURN_ANGLE_RAD?: number, PERIAPSIS_RADIUS_KM?: number, POWERED_FLYBY_DELTA_V_KM_S?: number, LAMBERT_SOLUTION_INDEX?: number, FLYBY_SOLUTION_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDSEncounter.d.ts.map