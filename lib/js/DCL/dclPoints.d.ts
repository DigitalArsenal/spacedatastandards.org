import * as flatbuffers from 'flatbuffers';
/**
 * Points, column-major and parallel (one entry per point; vectors as
 * stated).
 */
export declare class dclPoints implements flatbuffers.IUnpackableObject<dclPointsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclPoints;
    static getRootAsdclPoints(bb: flatbuffers.ByteBuffer, obj?: dclPoints): dclPoints;
    static getSizePrefixedRootAsdclPoints(bb: flatbuffers.ByteBuffer, obj?: dclPoints): dclPoints;
    /**
     * Instant of each point.
     */
    TIME_MS(index: number): bigint | null;
    timeMsLength(): number;
    /**
     * WGS84 geodetic latitude and longitude, deg, and height, km.
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
     * Calibration: observed density, kg/m^3, and its relative weight (empty
     * = 1 each; 0 = excluded).
     */
    OBSERVED_DENSITY_KG_M3(index: number): number | null;
    observedDensityKgM3Length(): number;
    observedDensityKgM3Array(): Float64Array | null;
    WEIGHT(index: number): number | null;
    weightLength(): number;
    weightArray(): Float64Array | null;
    /**
     * Validation input: the Sun's right ascension and declination, deg, and
     * the model subroutine's own nine driver values per point (F10, F10 81-day
     * mean, S10, S10 mean, M10, M10 mean, Y10, Y10 mean, DSTDTC K). When
     * present they replace the driver lookup and the Sun computation.
     */
    SUN_RIGHT_ASCENSION_DEG(index: number): number | null;
    sunRightAscensionDegLength(): number;
    sunRightAscensionDegArray(): Float64Array | null;
    SUN_DECLINATION_DEG(index: number): number | null;
    sunDeclinationDegLength(): number;
    sunDeclinationDegArray(): Float64Array | null;
    MODEL_DRIVERS(index: number): number | null;
    modelDriversLength(): number;
    modelDriversArray(): Float64Array | null;
    /**
     * Result: density, kg/m^3 (NaN = refused).
     */
    DENSITY_KG_M3(index: number): number | null;
    densityKgM3Length(): number;
    densityKgM3Array(): Float64Array | null;
    /**
     * Result: the correction applied, K.
     */
    DELTA_T_K(index: number): number | null;
    deltaTKLength(): number;
    deltaTKArray(): Float64Array | null;
    /**
     * Result: local solar time, h.
     */
    LOCAL_SOLAR_TIME_H(index: number): number | null;
    localSolarTimeHLength(): number;
    localSolarTimeHArray(): Float64Array | null;
    /**
     * Result: d ln(density) / dT, 1/K; empty = not asked for.
     */
    DLN_DENSITY_DT_PER_K(index: number): number | null;
    dlnDensityDtPerKLength(): number;
    dlnDensityDtPerKArray(): Float64Array | null;
    /**
     * Result: the Sun's Earth-fixed longitude and geocentric latitude, deg;
     * empty = not asked for.
     */
    SUN_LONGITUDE_DEG(index: number): number | null;
    sunLongitudeDegLength(): number;
    sunLongitudeDegArray(): Float64Array | null;
    SUN_LATITUDE_DEG(index: number): number | null;
    sunLatitudeDegLength(): number;
    sunLatitudeDegArray(): Float64Array | null;
    /**
     * Result: indices of the points refused (outside the drivers, outside the
     * model's altitude range, or malformed).
     */
    REFUSED(index: number): number | null;
    refusedLength(): number;
    refusedArray(): Uint32Array | null;
    static startdclPoints(builder: flatbuffers.Builder): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MSOffset: flatbuffers.Offset): void;
    static createTimeMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startTimeMsVector(builder: flatbuffers.Builder, numElems: number): void;
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
    static addObservedDensityKgM3(builder: flatbuffers.Builder, OBSERVED_DENSITY_KG_M3Offset: flatbuffers.Offset): void;
    static createObservedDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createObservedDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startObservedDensityKgM3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHTOffset: flatbuffers.Offset): void;
    static createWeightVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWeightVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWeightVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSunRightAscensionDeg(builder: flatbuffers.Builder, SUN_RIGHT_ASCENSION_DEGOffset: flatbuffers.Offset): void;
    static createSunRightAscensionDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunRightAscensionDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunRightAscensionDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSunDeclinationDeg(builder: flatbuffers.Builder, SUN_DECLINATION_DEGOffset: flatbuffers.Offset): void;
    static createSunDeclinationDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunDeclinationDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunDeclinationDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModelDrivers(builder: flatbuffers.Builder, MODEL_DRIVERSOffset: flatbuffers.Offset): void;
    static createModelDriversVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createModelDriversVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startModelDriversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityKgM3(builder: flatbuffers.Builder, DENSITY_KG_M3Offset: flatbuffers.Offset): void;
    static createDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDensityKgM3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addDeltaTK(builder: flatbuffers.Builder, DELTA_T_KOffset: flatbuffers.Offset): void;
    static createDeltaTKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDeltaTKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeltaTKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLocalSolarTimeH(builder: flatbuffers.Builder, LOCAL_SOLAR_TIME_HOffset: flatbuffers.Offset): void;
    static createLocalSolarTimeHVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLocalSolarTimeHVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLocalSolarTimeHVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDlnDensityDtPerK(builder: flatbuffers.Builder, DLN_DENSITY_DT_PER_KOffset: flatbuffers.Offset): void;
    static createDlnDensityDtPerKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDlnDensityDtPerKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDlnDensityDtPerKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSunLongitudeDeg(builder: flatbuffers.Builder, SUN_LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createSunLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSunLatitudeDeg(builder: flatbuffers.Builder, SUN_LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createSunLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefused(builder: flatbuffers.Builder, REFUSEDOffset: flatbuffers.Offset): void;
    static createRefusedVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRefusedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRefusedVector(builder: flatbuffers.Builder, numElems: number): void;
    static enddclPoints(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclPoints(builder: flatbuffers.Builder, TIME_MSOffset: flatbuffers.Offset, LATITUDE_DEGOffset: flatbuffers.Offset, LONGITUDE_DEGOffset: flatbuffers.Offset, ALTITUDE_KMOffset: flatbuffers.Offset, OBSERVED_DENSITY_KG_M3Offset: flatbuffers.Offset, WEIGHTOffset: flatbuffers.Offset, SUN_RIGHT_ASCENSION_DEGOffset: flatbuffers.Offset, SUN_DECLINATION_DEGOffset: flatbuffers.Offset, MODEL_DRIVERSOffset: flatbuffers.Offset, DENSITY_KG_M3Offset: flatbuffers.Offset, DELTA_T_KOffset: flatbuffers.Offset, LOCAL_SOLAR_TIME_HOffset: flatbuffers.Offset, DLN_DENSITY_DT_PER_KOffset: flatbuffers.Offset, SUN_LONGITUDE_DEGOffset: flatbuffers.Offset, SUN_LATITUDE_DEGOffset: flatbuffers.Offset, REFUSEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): dclPointsT;
    unpackTo(_o: dclPointsT): void;
}
export declare class dclPointsT implements flatbuffers.IGeneratedObject {
    TIME_MS: (bigint)[];
    LATITUDE_DEG: (number)[];
    LONGITUDE_DEG: (number)[];
    ALTITUDE_KM: (number)[];
    OBSERVED_DENSITY_KG_M3: (number)[];
    WEIGHT: (number)[];
    SUN_RIGHT_ASCENSION_DEG: (number)[];
    SUN_DECLINATION_DEG: (number)[];
    MODEL_DRIVERS: (number)[];
    DENSITY_KG_M3: (number)[];
    DELTA_T_K: (number)[];
    LOCAL_SOLAR_TIME_H: (number)[];
    DLN_DENSITY_DT_PER_K: (number)[];
    SUN_LONGITUDE_DEG: (number)[];
    SUN_LATITUDE_DEG: (number)[];
    REFUSED: (number)[];
    constructor(TIME_MS?: (bigint)[], LATITUDE_DEG?: (number)[], LONGITUDE_DEG?: (number)[], ALTITUDE_KM?: (number)[], OBSERVED_DENSITY_KG_M3?: (number)[], WEIGHT?: (number)[], SUN_RIGHT_ASCENSION_DEG?: (number)[], SUN_DECLINATION_DEG?: (number)[], MODEL_DRIVERS?: (number)[], DENSITY_KG_M3?: (number)[], DELTA_T_K?: (number)[], LOCAL_SOLAR_TIME_H?: (number)[], DLN_DENSITY_DT_PER_K?: (number)[], SUN_LONGITUDE_DEG?: (number)[], SUN_LATITUDE_DEG?: (number)[], REFUSED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclPoints.d.ts.map