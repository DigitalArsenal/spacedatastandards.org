import * as flatbuffers from 'flatbuffers';
import { maneuverCharacterization } from './maneuverCharacterization.js';
import { mplAxes } from './mplAxes.js';
import { mplElements, mplElementsT } from './mplElements.js';
/**
 * One impulsive (or short finite) burn of a plan.
 */
export declare class mplBurn implements flatbuffers.IUnpackableObject<mplBurnT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplBurn;
    static getRootAsmplBurn(bb: flatbuffers.ByteBuffer, obj?: mplBurn): mplBurn;
    static getSizePrefixedRootAsmplBurn(bb: flatbuffers.ByteBuffer, obj?: mplBurn): mplBurn;
    /**
     * Label of the burn within the plan, e.g. "departure", "circularize".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the burn does.
     */
    PURPOSE(): maneuverCharacterization;
    /**
     * Unix milliseconds of the burn (its start for a finite burn); 0 = not
     * anchored to an absolute time (use OFFSET_S).
     */
    EPOCH_MS(): bigint;
    /**
     * Seconds from the plan's start (PLAN_EPOCH_MS) to the burn.
     */
    OFFSET_S(): number;
    /**
     * True anomaly on the orbit being left at which to burn, deg; NaN = not
     * stated.
     */
    TRUE_ANOMALY_DEG(): number;
    /**
     * Axes DELTA_V is expressed in.
     */
    AXES(): mplAxes;
    /**
     * Delta-v vector, km/s, 3 values in AXES order. Components are signed (a
     * retrograde in-track burn has a negative I component).
     */
    DELTA_V(index: number): number | null;
    deltaVLength(): number;
    deltaVArray(): Float64Array | null;
    /**
     * Delta-v magnitude, km/s (always >= 0).
     */
    MAGNITUDE_KM_S(): number;
    /**
     * Burn duration, s; 0 = impulsive.
     */
    DURATION_S(): number;
    /**
     * Propellant consumed, kg; 0 = not computed.
     */
    DELTA_MASS_KG(): number;
    /**
     * The orbit the burn's axes are built from (the chaser's for an absolute
     * burn, the reference orbit at the burn for a relative-motion leg); empty
     * = the plan's initial orbit.
     */
    REFERENCE_ORBIT(obj?: mplElements): mplElements | null;
    /**
     * Index into ARCS of the arc this burn starts; -1 = none (the final burn).
     */
    ARC_INDEX(): number;
    /**
     * Identifier of the $MNV this burn became once committed; empty until
     * then.
     */
    MANEUVER_ID(): string | null;
    MANEUVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startmplBurn(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSE: maneuverCharacterization): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addOffsetS(builder: flatbuffers.Builder, OFFSET_S: number): void;
    static addTrueAnomalyDeg(builder: flatbuffers.Builder, TRUE_ANOMALY_DEG: number): void;
    static addAxes(builder: flatbuffers.Builder, AXES: mplAxes): void;
    static addDeltaV(builder: flatbuffers.Builder, DELTA_VOffset: flatbuffers.Offset): void;
    static createDeltaVVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDeltaVVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeltaVVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMagnitudeKmS(builder: flatbuffers.Builder, MAGNITUDE_KM_S: number): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addDeltaMassKg(builder: flatbuffers.Builder, DELTA_MASS_KG: number): void;
    static addReferenceOrbit(builder: flatbuffers.Builder, REFERENCE_ORBITOffset: flatbuffers.Offset): void;
    static addArcIndex(builder: flatbuffers.Builder, ARC_INDEX: number): void;
    static addManeuverId(builder: flatbuffers.Builder, MANEUVER_IDOffset: flatbuffers.Offset): void;
    static endmplBurn(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplBurnT;
    unpackTo(_o: mplBurnT): void;
}
export declare class mplBurnT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    PURPOSE: maneuverCharacterization;
    EPOCH_MS: bigint;
    OFFSET_S: number;
    TRUE_ANOMALY_DEG: number;
    AXES: mplAxes;
    DELTA_V: (number)[];
    MAGNITUDE_KM_S: number;
    DURATION_S: number;
    DELTA_MASS_KG: number;
    REFERENCE_ORBIT: mplElementsT | null;
    ARC_INDEX: number;
    MANEUVER_ID: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, PURPOSE?: maneuverCharacterization, EPOCH_MS?: bigint, OFFSET_S?: number, TRUE_ANOMALY_DEG?: number, AXES?: mplAxes, DELTA_V?: (number)[], MAGNITUDE_KM_S?: number, DURATION_S?: number, DELTA_MASS_KG?: number, REFERENCE_ORBIT?: mplElementsT | null, ARC_INDEX?: number, MANEUVER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplBurn.d.ts.map