import * as flatbuffers from 'flatbuffers';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { mplLambertBranch } from './mplLambertBranch.js';
/**
 * Lambert problem (Lambert, LambertMinimumDeltaV). DEPARTURE and ARRIVAL
 * give the two positions; their velocities, when given, are the velocities
 * of the orbits being left and joined, and make the result's burns real
 * delta-v (LambertMinimumDeltaV requires them, since ranking needs a cost).
 */
export declare class mplLambertRequest implements flatbuffers.IUnpackableObject<mplLambertRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplLambertRequest;
    static getRootAsmplLambertRequest(bb: flatbuffers.ByteBuffer, obj?: mplLambertRequest): mplLambertRequest;
    static getSizePrefixedRootAsmplLambertRequest(bb: flatbuffers.ByteBuffer, obj?: mplLambertRequest): mplLambertRequest;
    /**
     * Departure position (and the departing orbit's velocity), inertial.
     */
    DEPARTURE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * Arrival position (and the arrival orbit's velocity), inertial.
     */
    ARRIVAL(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * True when DEPARTURE and ARRIVAL carry orbit velocities; false = position
     * only (the result then gives the transfer velocities, not delta-v).
     */
    ENDPOINT_VELOCITIES(): boolean;
    /**
     * Time of flight, s.
     */
    TIME_OF_FLIGHT_S(): number;
    /**
     * True for a prograde (short-way in the direction of motion) transfer.
     */
    PROGRADE(): boolean;
    /**
     * Revolution count of a Lambert problem; the largest count ranked by
     * LambertMinimumDeltaV.
     */
    REVOLUTIONS(): number;
    /**
     * Lambert: the arc to return when REVOLUTIONS >= 1 (Unspecified = Low).
     * LambertMinimumDeltaV: narrows the ranking to one branch (Unspecified =
     * rank both).
     */
    BRANCH(): mplLambertBranch;
    static startmplLambertRequest(builder: flatbuffers.Builder): void;
    static addDeparture(builder: flatbuffers.Builder, DEPARTUREOffset: flatbuffers.Offset): void;
    static addArrival(builder: flatbuffers.Builder, ARRIVALOffset: flatbuffers.Offset): void;
    static addEndpointVelocities(builder: flatbuffers.Builder, ENDPOINT_VELOCITIES: boolean): void;
    static addTimeOfFlightS(builder: flatbuffers.Builder, TIME_OF_FLIGHT_S: number): void;
    static addPrograde(builder: flatbuffers.Builder, PROGRADE: boolean): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addBranch(builder: flatbuffers.Builder, BRANCH: mplLambertBranch): void;
    static endmplLambertRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplLambertRequestT;
    unpackTo(_o: mplLambertRequestT): void;
}
export declare class mplLambertRequestT implements flatbuffers.IGeneratedObject {
    DEPARTURE: ephemerisDataLineT | null;
    ARRIVAL: ephemerisDataLineT | null;
    ENDPOINT_VELOCITIES: boolean;
    TIME_OF_FLIGHT_S: number;
    PROGRADE: boolean;
    REVOLUTIONS: number;
    BRANCH: mplLambertBranch;
    constructor(DEPARTURE?: ephemerisDataLineT | null, ARRIVAL?: ephemerisDataLineT | null, ENDPOINT_VELOCITIES?: boolean, TIME_OF_FLIGHT_S?: number, PROGRADE?: boolean, REVOLUTIONS?: number, BRANCH?: mplLambertBranch);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplLambertRequest.d.ts.map