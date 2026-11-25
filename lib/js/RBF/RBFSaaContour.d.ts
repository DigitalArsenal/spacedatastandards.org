import * as flatbuffers from 'flatbuffers';
/**
 * Computed South Atlantic Anomaly (or planetary magnetic anomaly) iso-flux contour.
 */
export declare class RBFSaaContour implements flatbuffers.IUnpackableObject<RBFSaaContourT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBFSaaContour;
    static getRootAsRBFSaaContour(bb: flatbuffers.ByteBuffer, obj?: RBFSaaContour): RBFSaaContour;
    static getSizePrefixedRootAsRBFSaaContour(bb: flatbuffers.ByteBuffer, obj?: RBFSaaContour): RBFSaaContour;
    /**
     * Stable contour identifier.
     */
    CONTOUR_ID(): string;
    CONTOUR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Reference geodetic/planetodetic altitude in km.
     */
    ALTITUDE_KM(): number;
    /**
     * Flux threshold defining this contour boundary.
     */
    FLUX_THRESHOLD(): number;
    /**
     * Physical units of FLUX_THRESHOLD and PEAK_FLUX.
     */
    FLUX_UNITS(): string | null;
    FLUX_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ordered polygon vertex latitudes in degrees.
     */
    LATITUDES_DEG(index: number): number | null;
    latitudesDegLength(): number;
    latitudesDegArray(): Float64Array | null;
    /**
     * Ordered polygon vertex longitudes in degrees.
     */
    LONGITUDES_DEG(index: number): number | null;
    longitudesDegLength(): number;
    longitudesDegArray(): Float64Array | null;
    /**
     * Peak flux inside the anomaly contour.
     */
    PEAK_FLUX(): number;
    /**
     * Latitude of peak anomaly flux in degrees.
     */
    PEAK_LAT_DEG(): number;
    /**
     * Longitude of peak anomaly flux in degrees.
     */
    PEAK_LON_DEG(): number;
    static startRBFSaaContour(builder: flatbuffers.Builder): void;
    static addContourId(builder: flatbuffers.Builder, CONTOUR_IDOffset: flatbuffers.Offset): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KM: number): void;
    static addFluxThreshold(builder: flatbuffers.Builder, FLUX_THRESHOLD: number): void;
    static addFluxUnits(builder: flatbuffers.Builder, FLUX_UNITSOffset: flatbuffers.Offset): void;
    static addLatitudesDeg(builder: flatbuffers.Builder, LATITUDES_DEGOffset: flatbuffers.Offset): void;
    static createLatitudesDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLatitudesDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLatitudesDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLongitudesDeg(builder: flatbuffers.Builder, LONGITUDES_DEGOffset: flatbuffers.Offset): void;
    static createLongitudesDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLongitudesDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLongitudesDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPeakFlux(builder: flatbuffers.Builder, PEAK_FLUX: number): void;
    static addPeakLatDeg(builder: flatbuffers.Builder, PEAK_LAT_DEG: number): void;
    static addPeakLonDeg(builder: flatbuffers.Builder, PEAK_LON_DEG: number): void;
    static endRBFSaaContour(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRBFSaaContour(builder: flatbuffers.Builder, CONTOUR_IDOffset: flatbuffers.Offset, ALTITUDE_KM: number, FLUX_THRESHOLD: number, FLUX_UNITSOffset: flatbuffers.Offset, LATITUDES_DEGOffset: flatbuffers.Offset, LONGITUDES_DEGOffset: flatbuffers.Offset, PEAK_FLUX: number, PEAK_LAT_DEG: number, PEAK_LON_DEG: number): flatbuffers.Offset;
    unpack(): RBFSaaContourT;
    unpackTo(_o: RBFSaaContourT): void;
}
export declare class RBFSaaContourT implements flatbuffers.IGeneratedObject {
    CONTOUR_ID: string | Uint8Array | null;
    ALTITUDE_KM: number;
    FLUX_THRESHOLD: number;
    FLUX_UNITS: string | Uint8Array | null;
    LATITUDES_DEG: (number)[];
    LONGITUDES_DEG: (number)[];
    PEAK_FLUX: number;
    PEAK_LAT_DEG: number;
    PEAK_LON_DEG: number;
    constructor(CONTOUR_ID?: string | Uint8Array | null, ALTITUDE_KM?: number, FLUX_THRESHOLD?: number, FLUX_UNITS?: string | Uint8Array | null, LATITUDES_DEG?: (number)[], LONGITUDES_DEG?: (number)[], PEAK_FLUX?: number, PEAK_LAT_DEG?: number, PEAK_LON_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBFSaaContour.d.ts.map