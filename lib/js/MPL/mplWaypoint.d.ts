import * as flatbuffers from 'flatbuffers';
/**
 * One relative waypoint.
 */
export declare class mplWaypoint implements flatbuffers.IUnpackableObject<mplWaypointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplWaypoint;
    static getRootAsmplWaypoint(bb: flatbuffers.ByteBuffer, obj?: mplWaypoint): mplWaypoint;
    static getSizePrefixedRootAsmplWaypoint(bb: flatbuffers.ByteBuffer, obj?: mplWaypoint): mplWaypoint;
    /**
     * Position relative to the reference orbit, RIC, km, 3 values.
     */
    POSITION_KM(index: number): number | null;
    positionKmLength(): number;
    positionKmArray(): Float64Array | null;
    /**
     * Velocity to arrive with, RIC, km/s, 3 values; empty = free.
     */
    VELOCITY_KM_S(index: number): number | null;
    velocityKmSLength(): number;
    velocityKmSArray(): Float64Array | null;
    /**
     * Time of flight of the leg to this waypoint, s; 0 = the planner chooses.
     */
    TIME_OF_FLIGHT_S(): number;
    static startmplWaypoint(builder: flatbuffers.Builder): void;
    static addPositionKm(builder: flatbuffers.Builder, POSITION_KMOffset: flatbuffers.Offset): void;
    static createPositionKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityKmS(builder: flatbuffers.Builder, VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeOfFlightS(builder: flatbuffers.Builder, TIME_OF_FLIGHT_S: number): void;
    static endmplWaypoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplWaypoint(builder: flatbuffers.Builder, POSITION_KMOffset: flatbuffers.Offset, VELOCITY_KM_SOffset: flatbuffers.Offset, TIME_OF_FLIGHT_S: number): flatbuffers.Offset;
    unpack(): mplWaypointT;
    unpackTo(_o: mplWaypointT): void;
}
export declare class mplWaypointT implements flatbuffers.IGeneratedObject {
    POSITION_KM: (number)[];
    VELOCITY_KM_S: (number)[];
    TIME_OF_FLIGHT_S: number;
    constructor(POSITION_KM?: (number)[], VELOCITY_KM_S?: (number)[], TIME_OF_FLIGHT_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplWaypoint.d.ts.map