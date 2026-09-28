import * as flatbuffers from 'flatbuffers';
import { OEM, OEMT } from './OEM.js';
import { lamPassDirection } from './lamPassDirection.js';
/**
 * Orbit a launch is steered to.
 */
export declare class lamTargetOrbit implements flatbuffers.IUnpackableObject<lamTargetOrbitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lamTargetOrbit;
    static getRootAslamTargetOrbit(bb: flatbuffers.ByteBuffer, obj?: lamTargetOrbit): lamTargetOrbit;
    static getSizePrefixedRootAslamTargetOrbit(bb: flatbuffers.ByteBuffer, obj?: lamTargetOrbit): lamTargetOrbit;
    /**
     * Target inclination in degrees.
     */
    INCLINATION_DEG(): number;
    /**
     * Ground-track direction of the ascent.
     */
    PASS_DIRECTION(): lamPassDirection;
    /**
     * Target periapsis altitude above the WGS-84 equatorial radius, in meters.
     */
    PERIAPSIS_ALTITUDE_M(): number;
    /**
     * Target apoapsis altitude above the WGS-84 equatorial radius, in meters.
     */
    APOAPSIS_ALTITUDE_M(): number;
    /**
     * Time from launch of orbit insertion (engine cutoff), in seconds.
     */
    INSERTION_TIME_FROM_LAUNCH_S(): number;
    /**
     * Ephemeris of an object whose orbit plane the launch joins, in the TEME frame.
     */
    PLANE_REFERENCE(obj?: OEM): OEM | null;
    static startlamTargetOrbit(builder: flatbuffers.Builder): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addPassDirection(builder: flatbuffers.Builder, PASS_DIRECTION: lamPassDirection): void;
    static addPeriapsisAltitudeM(builder: flatbuffers.Builder, PERIAPSIS_ALTITUDE_M: number): void;
    static addApoapsisAltitudeM(builder: flatbuffers.Builder, APOAPSIS_ALTITUDE_M: number): void;
    static addInsertionTimeFromLaunchS(builder: flatbuffers.Builder, INSERTION_TIME_FROM_LAUNCH_S: number): void;
    static addPlaneReference(builder: flatbuffers.Builder, PLANE_REFERENCEOffset: flatbuffers.Offset): void;
    static endlamTargetOrbit(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): lamTargetOrbitT;
    unpackTo(_o: lamTargetOrbitT): void;
}
export declare class lamTargetOrbitT implements flatbuffers.IGeneratedObject {
    INCLINATION_DEG: number;
    PASS_DIRECTION: lamPassDirection;
    PERIAPSIS_ALTITUDE_M: number;
    APOAPSIS_ALTITUDE_M: number;
    INSERTION_TIME_FROM_LAUNCH_S: number;
    PLANE_REFERENCE: OEMT | null;
    constructor(INCLINATION_DEG?: number, PASS_DIRECTION?: lamPassDirection, PERIAPSIS_ALTITUDE_M?: number, APOAPSIS_ALTITUDE_M?: number, INSERTION_TIME_FROM_LAUNCH_S?: number, PLANE_REFERENCE?: OEMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lamTargetOrbit.d.ts.map