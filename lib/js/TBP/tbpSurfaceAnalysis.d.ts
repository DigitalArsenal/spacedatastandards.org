import * as flatbuffers from 'flatbuffers';
/**
 * Surface coverage gap, elevation angle, occultation, and DOP analysis on a primary body.
 */
export declare class tbpSurfaceAnalysis implements flatbuffers.IUnpackableObject<tbpSurfaceAnalysisT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpSurfaceAnalysis;
    static getRootAstbpSurfaceAnalysis(bb: flatbuffers.ByteBuffer, obj?: tbpSurfaceAnalysis): tbpSurfaceAnalysis;
    static getSizePrefixedRootAstbpSurfaceAnalysis(bb: flatbuffers.ByteBuffer, obj?: tbpSurfaceAnalysis): tbpSurfaceAnalysis;
    /**
     * Target primary body: 0 or 2 = smaller primary (Moon), 1 = larger primary (Earth).
     */
    REFERENCE_PRIMARY(): number;
    /**
     * Radius of target primary body, km; 0 = default body radius.
     */
    PRIMARY_RADIUS_KM(): number;
    /**
     * Minimum elevation mask angle above local horizon, deg; 0 = horizon (0 deg).
     */
    MIN_ELEVATION_DEG(): number;
    /**
     * Minimum simultaneous satellites in view for coverage; 0 = 1.
     */
    MIN_SATELLITES(): number;
    /**
     * Surface observer positions in synodic frame (P * 3 non-dimensional values); empty = auto Fibonacci sphere.
     */
    SURFACE_POINTS_SYNODIC(index: number): number | null;
    surfacePointsSynodicLength(): number;
    surfacePointsSynodicArray(): Float64Array | null;
    /**
     * Surface observer lat/lon pairs [lat0, lon0, ...] in deg (P * 2 values).
     */
    SURFACE_LAT_LON_DEG(index: number): number | null;
    surfaceLatLonDegLength(): number;
    surfaceLatLonDegArray(): Float64Array | null;
    /**
     * Number of Fibonacci surface grid points when SURFACE_POINTS_SYNODIC is empty; 0 = default.
     */
    GRID_POINT_COUNT(): number;
    /**
     * Result: non-dimensional sample times (T values).
     */
    SAMPLE_TIMES(index: number): number | null;
    sampleTimesLength(): number;
    sampleTimesArray(): Float64Array | null;
    /**
     * Result: maximum uncovered gap duration per surface point, s (P values).
     */
    MAX_GAP_S(index: number): number | null;
    maxGapSLength(): number;
    maxGapSArray(): Float64Array | null;
    /**
     * Result: geometric dilution of precision (T * P values, NaN/0 when <4 sats visible).
     */
    GDOP(index: number): number | null;
    gdopLength(): number;
    gdopArray(): Float64Array | null;
    /**
     * Result: position dilution of precision (T * P values).
     */
    PDOP(index: number): number | null;
    pdopLength(): number;
    pdopArray(): Float64Array | null;
    /**
     * Result: time dilution of precision (T * P values).
     */
    TDOP(index: number): number | null;
    tdopLength(): number;
    tdopArray(): Float64Array | null;
    /**
     * Result: maximum elevation angle per sample and surface point, deg (T * P values).
     */
    ELEVATION_DEG(index: number): number | null;
    elevationDegLength(): number;
    elevationDegArray(): Float64Array | null;
    /**
     * Result: occultation interval start times, s (M values).
     */
    OCCULTATION_START_S(index: number): number | null;
    occultationStartSLength(): number;
    occultationStartSArray(): Float64Array | null;
    /**
     * Result: occultation interval end times, s (M values).
     */
    OCCULTATION_END_S(index: number): number | null;
    occultationEndSLength(): number;
    occultationEndSArray(): Float64Array | null;
    /**
     * Result: occulting body index per interval (1 = P1, 2 = P2; M values).
     */
    OCCULTING_PRIMARY(index: number): number | null;
    occultingPrimaryLength(): number;
    occultingPrimaryArray(): Uint8Array | null;
    static starttbpSurfaceAnalysis(builder: flatbuffers.Builder): void;
    static addReferencePrimary(builder: flatbuffers.Builder, REFERENCE_PRIMARY: number): void;
    static addPrimaryRadiusKm(builder: flatbuffers.Builder, PRIMARY_RADIUS_KM: number): void;
    static addMinElevationDeg(builder: flatbuffers.Builder, MIN_ELEVATION_DEG: number): void;
    static addMinSatellites(builder: flatbuffers.Builder, MIN_SATELLITES: number): void;
    static addSurfacePointsSynodic(builder: flatbuffers.Builder, SURFACE_POINTS_SYNODICOffset: flatbuffers.Offset): void;
    static createSurfacePointsSynodicVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSurfacePointsSynodicVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSurfacePointsSynodicVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSurfaceLatLonDeg(builder: flatbuffers.Builder, SURFACE_LAT_LON_DEGOffset: flatbuffers.Offset): void;
    static createSurfaceLatLonDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSurfaceLatLonDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSurfaceLatLonDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGridPointCount(builder: flatbuffers.Builder, GRID_POINT_COUNT: number): void;
    static addSampleTimes(builder: flatbuffers.Builder, SAMPLE_TIMESOffset: flatbuffers.Offset): void;
    static createSampleTimesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleTimesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxGapS(builder: flatbuffers.Builder, MAX_GAP_SOffset: flatbuffers.Offset): void;
    static createMaxGapSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMaxGapSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaxGapSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGdop(builder: flatbuffers.Builder, GDOPOffset: flatbuffers.Offset): void;
    static createGdopVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGdopVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGdopVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPdop(builder: flatbuffers.Builder, PDOPOffset: flatbuffers.Offset): void;
    static createPdopVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPdopVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPdopVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTdop(builder: flatbuffers.Builder, TDOPOffset: flatbuffers.Offset): void;
    static createTdopVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTdopVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTdopVector(builder: flatbuffers.Builder, numElems: number): void;
    static addElevationDeg(builder: flatbuffers.Builder, ELEVATION_DEGOffset: flatbuffers.Offset): void;
    static createElevationDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createElevationDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startElevationDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccultationStartS(builder: flatbuffers.Builder, OCCULTATION_START_SOffset: flatbuffers.Offset): void;
    static createOccultationStartSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOccultationStartSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccultationStartSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccultationEndS(builder: flatbuffers.Builder, OCCULTATION_END_SOffset: flatbuffers.Offset): void;
    static createOccultationEndSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOccultationEndSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccultationEndSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccultingPrimary(builder: flatbuffers.Builder, OCCULTING_PRIMARYOffset: flatbuffers.Offset): void;
    static createOccultingPrimaryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccultingPrimaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static endtbpSurfaceAnalysis(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpSurfaceAnalysis(builder: flatbuffers.Builder, REFERENCE_PRIMARY: number, PRIMARY_RADIUS_KM: number, MIN_ELEVATION_DEG: number, MIN_SATELLITES: number, SURFACE_POINTS_SYNODICOffset: flatbuffers.Offset, SURFACE_LAT_LON_DEGOffset: flatbuffers.Offset, GRID_POINT_COUNT: number, SAMPLE_TIMESOffset: flatbuffers.Offset, MAX_GAP_SOffset: flatbuffers.Offset, GDOPOffset: flatbuffers.Offset, PDOPOffset: flatbuffers.Offset, TDOPOffset: flatbuffers.Offset, ELEVATION_DEGOffset: flatbuffers.Offset, OCCULTATION_START_SOffset: flatbuffers.Offset, OCCULTATION_END_SOffset: flatbuffers.Offset, OCCULTING_PRIMARYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): tbpSurfaceAnalysisT;
    unpackTo(_o: tbpSurfaceAnalysisT): void;
}
export declare class tbpSurfaceAnalysisT implements flatbuffers.IGeneratedObject {
    REFERENCE_PRIMARY: number;
    PRIMARY_RADIUS_KM: number;
    MIN_ELEVATION_DEG: number;
    MIN_SATELLITES: number;
    SURFACE_POINTS_SYNODIC: (number)[];
    SURFACE_LAT_LON_DEG: (number)[];
    GRID_POINT_COUNT: number;
    SAMPLE_TIMES: (number)[];
    MAX_GAP_S: (number)[];
    GDOP: (number)[];
    PDOP: (number)[];
    TDOP: (number)[];
    ELEVATION_DEG: (number)[];
    OCCULTATION_START_S: (number)[];
    OCCULTATION_END_S: (number)[];
    OCCULTING_PRIMARY: (number)[];
    constructor(REFERENCE_PRIMARY?: number, PRIMARY_RADIUS_KM?: number, MIN_ELEVATION_DEG?: number, MIN_SATELLITES?: number, SURFACE_POINTS_SYNODIC?: (number)[], SURFACE_LAT_LON_DEG?: (number)[], GRID_POINT_COUNT?: number, SAMPLE_TIMES?: (number)[], MAX_GAP_S?: (number)[], GDOP?: (number)[], PDOP?: (number)[], TDOP?: (number)[], ELEVATION_DEG?: (number)[], OCCULTATION_START_S?: (number)[], OCCULTATION_END_S?: (number)[], OCCULTING_PRIMARY?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpSurfaceAnalysis.d.ts.map