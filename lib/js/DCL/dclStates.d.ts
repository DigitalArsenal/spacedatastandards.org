import * as flatbuffers from 'flatbuffers';
import { ephemerisDataBlock, ephemerisDataBlockT } from './ephemerisDataBlock.js';
/**
 * States for energy and drag work: an $OEM ephemeris block (GCRF, km,
 * km/s) and, parallel to its states, the Earth-orientation values used to
 * turn each into Earth-fixed axes, with the results per state.
 */
export declare class dclStates implements flatbuffers.IUnpackableObject<dclStatesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclStates;
    static getRootAsdclStates(bb: flatbuffers.ByteBuffer, obj?: dclStates): dclStates;
    static getSizePrefixedRootAsdclStates(bb: flatbuffers.ByteBuffer, obj?: dclStates): dclStates;
    EPHEMERIS(obj?: ephemerisDataBlock): ephemerisDataBlock | null;
    /**
     * UT1 - UTC, s, and polar motion, arcsec, per state; empty = 0.
     */
    DUT1_S(index: number): number | null;
    dut1SLength(): number;
    dut1SArray(): Float64Array | null;
    POLAR_MOTION_X_ARCSEC(index: number): number | null;
    polarMotionXArcsecLength(): number;
    polarMotionXArcsecArray(): Float64Array | null;
    POLAR_MOTION_Y_ARCSEC(index: number): number | null;
    polarMotionYArcsecLength(): number;
    polarMotionYArcsecArray(): Float64Array | null;
    /**
     * Energy: the Jacobi integral C = |v|^2 / 2 + U(r) - omega . (r x v),
     * J/kg, and its kinetic, potential and rotational parts.
     */
    ENERGY_J_KG(index: number): number | null;
    energyJKgLength(): number;
    energyJKgArray(): Float64Array | null;
    KINETIC_J_KG(index: number): number | null;
    kineticJKgLength(): number;
    kineticJKgArray(): Float64Array | null;
    POTENTIAL_J_KG(index: number): number | null;
    potentialJKgLength(): number;
    potentialJKgArray(): Float64Array | null;
    ROTATIONAL_J_KG(index: number): number | null;
    rotationalJKgLength(): number;
    rotationalJKgArray(): Float64Array | null;
    /**
     * Energy: dC/dr (J/kg/m) and dC/dv (m/s) in GCRF, 6 values per state;
     * empty = not asked for.
     */
    ENERGY_GRADIENT(index: number): number | null;
    energyGradientLength(): number;
    energyGradientArray(): Float64Array | null;
    /**
     * Speed relative to the co-rotating atmosphere, m/s.
     */
    RELATIVE_SPEED_M_S(index: number): number | null;
    relativeSpeedMSLength(): number;
    relativeSpeedMSArray(): Float64Array | null;
    /**
     * WGS84 geodetic point of each state.
     */
    LATITUDE_DEG(index: number): number | null;
    latitudeDegLength(): number;
    latitudeDegArray(): Float64Array | null;
    LONGITUDE_DEG(index: number): number | null;
    longitudeDegLength(): number;
    longitudeDegArray(): Float64Array | null;
    ALTITUDE_KM(index: number): number | null;
    altitudeKmLength(): number;
    altitudeKmArray(): Float64Array | null;
    /**
     * Drag work: density, kg/m^3, and drag power -B density |v_r|^3 / 2,
     * W/kg.
     */
    DENSITY_KG_M3(index: number): number | null;
    densityKgM3Length(): number;
    densityKgM3Array(): Float64Array | null;
    DRAG_POWER_W_KG(index: number): number | null;
    dragPowerWKgLength(): number;
    dragPowerWKgArray(): Float64Array | null;
    /**
     * Drag work between consecutive states (one fewer than the states), and
     * its running sum from the first state (one per state), J/kg.
     */
    DRAG_WORK_J_KG(index: number): number | null;
    dragWorkJKgLength(): number;
    dragWorkJKgArray(): Float64Array | null;
    CUMULATIVE_DRAG_WORK_J_KG(index: number): number | null;
    cumulativeDragWorkJKgLength(): number;
    cumulativeDragWorkJKgArray(): Float64Array | null;
    /**
     * Indices of the states refused.
     */
    REFUSED(index: number): number | null;
    refusedLength(): number;
    refusedArray(): Uint32Array | null;
    static startdclStates(builder: flatbuffers.Builder): void;
    static addEphemeris(builder: flatbuffers.Builder, EPHEMERISOffset: flatbuffers.Offset): void;
    static addDut1S(builder: flatbuffers.Builder, DUT1_SOffset: flatbuffers.Offset): void;
    static createDut1SVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDut1SVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDut1SVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarMotionXArcsec(builder: flatbuffers.Builder, POLAR_MOTION_X_ARCSECOffset: flatbuffers.Offset): void;
    static createPolarMotionXArcsecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolarMotionXArcsecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolarMotionXArcsecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarMotionYArcsec(builder: flatbuffers.Builder, POLAR_MOTION_Y_ARCSECOffset: flatbuffers.Offset): void;
    static createPolarMotionYArcsecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolarMotionYArcsecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolarMotionYArcsecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergyJKg(builder: flatbuffers.Builder, ENERGY_J_KGOffset: flatbuffers.Offset): void;
    static createEnergyJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnergyJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnergyJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKineticJKg(builder: flatbuffers.Builder, KINETIC_J_KGOffset: flatbuffers.Offset): void;
    static createKineticJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKineticJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKineticJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPotentialJKg(builder: flatbuffers.Builder, POTENTIAL_J_KGOffset: flatbuffers.Offset): void;
    static createPotentialJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPotentialJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPotentialJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRotationalJKg(builder: flatbuffers.Builder, ROTATIONAL_J_KGOffset: flatbuffers.Offset): void;
    static createRotationalJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRotationalJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRotationalJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergyGradient(builder: flatbuffers.Builder, ENERGY_GRADIENTOffset: flatbuffers.Offset): void;
    static createEnergyGradientVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnergyGradientVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnergyGradientVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRelativeSpeedMS(builder: flatbuffers.Builder, RELATIVE_SPEED_M_SOffset: flatbuffers.Offset): void;
    static createRelativeSpeedMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRelativeSpeedMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRelativeSpeedMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KMOffset: flatbuffers.Offset): void;
    static createAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAltitudeKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityKgM3(builder: flatbuffers.Builder, DENSITY_KG_M3Offset: flatbuffers.Offset): void;
    static createDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDensityKgM3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addDragPowerWKg(builder: flatbuffers.Builder, DRAG_POWER_W_KGOffset: flatbuffers.Offset): void;
    static createDragPowerWKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDragPowerWKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDragPowerWKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDragWorkJKg(builder: flatbuffers.Builder, DRAG_WORK_J_KGOffset: flatbuffers.Offset): void;
    static createDragWorkJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDragWorkJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDragWorkJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCumulativeDragWorkJKg(builder: flatbuffers.Builder, CUMULATIVE_DRAG_WORK_J_KGOffset: flatbuffers.Offset): void;
    static createCumulativeDragWorkJKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCumulativeDragWorkJKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCumulativeDragWorkJKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefused(builder: flatbuffers.Builder, REFUSEDOffset: flatbuffers.Offset): void;
    static createRefusedVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRefusedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRefusedVector(builder: flatbuffers.Builder, numElems: number): void;
    static enddclStates(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclStates(builder: flatbuffers.Builder, EPHEMERISOffset: flatbuffers.Offset, DUT1_SOffset: flatbuffers.Offset, POLAR_MOTION_X_ARCSECOffset: flatbuffers.Offset, POLAR_MOTION_Y_ARCSECOffset: flatbuffers.Offset, ENERGY_J_KGOffset: flatbuffers.Offset, KINETIC_J_KGOffset: flatbuffers.Offset, POTENTIAL_J_KGOffset: flatbuffers.Offset, ROTATIONAL_J_KGOffset: flatbuffers.Offset, ENERGY_GRADIENTOffset: flatbuffers.Offset, RELATIVE_SPEED_M_SOffset: flatbuffers.Offset, LATITUDE_DEGOffset: flatbuffers.Offset, LONGITUDE_DEGOffset: flatbuffers.Offset, ALTITUDE_KMOffset: flatbuffers.Offset, DENSITY_KG_M3Offset: flatbuffers.Offset, DRAG_POWER_W_KGOffset: flatbuffers.Offset, DRAG_WORK_J_KGOffset: flatbuffers.Offset, CUMULATIVE_DRAG_WORK_J_KGOffset: flatbuffers.Offset, REFUSEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): dclStatesT;
    unpackTo(_o: dclStatesT): void;
}
export declare class dclStatesT implements flatbuffers.IGeneratedObject {
    EPHEMERIS: ephemerisDataBlockT | null;
    DUT1_S: (number)[];
    POLAR_MOTION_X_ARCSEC: (number)[];
    POLAR_MOTION_Y_ARCSEC: (number)[];
    ENERGY_J_KG: (number)[];
    KINETIC_J_KG: (number)[];
    POTENTIAL_J_KG: (number)[];
    ROTATIONAL_J_KG: (number)[];
    ENERGY_GRADIENT: (number)[];
    RELATIVE_SPEED_M_S: (number)[];
    LATITUDE_DEG: (number)[];
    LONGITUDE_DEG: (number)[];
    ALTITUDE_KM: (number)[];
    DENSITY_KG_M3: (number)[];
    DRAG_POWER_W_KG: (number)[];
    DRAG_WORK_J_KG: (number)[];
    CUMULATIVE_DRAG_WORK_J_KG: (number)[];
    REFUSED: (number)[];
    constructor(EPHEMERIS?: ephemerisDataBlockT | null, DUT1_S?: (number)[], POLAR_MOTION_X_ARCSEC?: (number)[], POLAR_MOTION_Y_ARCSEC?: (number)[], ENERGY_J_KG?: (number)[], KINETIC_J_KG?: (number)[], POTENTIAL_J_KG?: (number)[], ROTATIONAL_J_KG?: (number)[], ENERGY_GRADIENT?: (number)[], RELATIVE_SPEED_M_S?: (number)[], LATITUDE_DEG?: (number)[], LONGITUDE_DEG?: (number)[], ALTITUDE_KM?: (number)[], DENSITY_KG_M3?: (number)[], DRAG_POWER_W_KG?: (number)[], DRAG_WORK_J_KG?: (number)[], CUMULATIVE_DRAG_WORK_J_KG?: (number)[], REFUSED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclStates.d.ts.map