import * as flatbuffers from 'flatbuffers';
/**
 * Explicit georeferencing parameters. Which members are meaningful is fixed
 * by AGF.PROJECTION. Members that do not apply to the stated projection are
 * written NaN, never 0 — a zero standard parallel is a real parallel.
 *
 * THIS TABLE IS AUTHORITATIVE. PROJ4_STRING and WKT2_STRING never override it.
 */
export declare class AGFProjectionParameters implements flatbuffers.IUnpackableObject<AGFProjectionParametersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGFProjectionParameters;
    static getRootAsAGFProjectionParameters(bb: flatbuffers.ByteBuffer, obj?: AGFProjectionParameters): AGFProjectionParameters;
    static getSizePrefixedRootAsAGFProjectionParameters(bb: flatbuffers.ByteBuffer, obj?: AGFProjectionParameters): AGFProjectionParameters;
    /**
     * Semi-major axis of the reference ellipsoid, metres.
     */
    SEMI_MAJOR_AXIS_M(): number;
    /**
     * Semi-minor axis of the reference ellipsoid, metres. Equal to the
     * semi-major axis for a spherical Earth.
     */
    SEMI_MINOR_AXIS_M(): number;
    /**
     * Inverse flattening, when the figure is stated that way. NaN if the
     * semi-axes are the stated form.
     */
    INVERSE_FLATTENING(): number;
    /**
     * Cell spacing along the X and Y axes, in the units named by
     * GRID_SPACING_UNITS.
     */
    DX(): number;
    DY(): number;
    /**
     * UDUNITS units of DX, DY, X_ORIGIN and Y_ORIGIN. Metres for the projected
     * forms; radians for GEOSTATIONARY scan angles; degrees for
     * LATLON_REGULAR.
     */
    GRID_SPACING_UNITS(): string | null;
    GRID_SPACING_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Projection coordinate of the CENTRE of cell (0, 0), in
     * GRID_SPACING_UNITS. The centre, not a corner: a half-cell offset is the
     * classic silent georeferencing error.
     */
    X_ORIGIN(): number;
    Y_ORIGIN(): number;
    /**
     * Longitude of the projection origin or central meridian, degrees east.
     */
    CENTRAL_MERIDIAN_DEG(): number;
    /**
     * Latitude of the projection origin, degrees north.
     */
    ORIGIN_LATITUDE_DEG(): number;
    /**
     * Latitude at which the projection is true to scale.
     */
    STANDARD_PARALLEL_1_DEG(): number;
    /**
     * Second standard parallel, LAMBERT_CONFORMAL only.
     */
    STANDARD_PARALLEL_2_DEG(): number;
    /**
     * Scale factor at the origin or central meridian.
     */
    SCALE_FACTOR_AT_ORIGIN(): number;
    /**
     * False easting and northing applied to projected coordinates, metres.
     */
    FALSE_EASTING_M(): number;
    FALSE_NORTHING_M(): number;
    /**
     * Longitude of the sub-satellite point, degrees east.
     */
    SUB_SATELLITE_LON_DEG(): number;
    /**
     * Height of the perspective point above the ellipsoid, metres.
     */
    PERSPECTIVE_HEIGHT_M(): number;
    /**
     * True when the scan angles are swept along the Earth's sweep axis rather
     * than the instrument's. The two conventions differ by a rotation and
     * mis-georeference the whole disc.
     */
    SWEEP_ANGLE_AXIS_IS_X(): boolean;
    /**
     * Convenience rendering of this projection. ADVISORY, NEVER AUTHORITATIVE:
     * where it disagrees with the explicit parameters above, the explicit
     * parameters win.
     */
    PROJ4_STRING(): string | null;
    PROJ4_STRING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Convenience WKT2 rendering. ADVISORY, NEVER AUTHORITATIVE, same rule.
     */
    WKT2_STRING(): string | null;
    WKT2_STRING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAGFProjectionParameters(builder: flatbuffers.Builder): void;
    static addSemiMajorAxisM(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_M: number): void;
    static addSemiMinorAxisM(builder: flatbuffers.Builder, SEMI_MINOR_AXIS_M: number): void;
    static addInverseFlattening(builder: flatbuffers.Builder, INVERSE_FLATTENING: number): void;
    static addDx(builder: flatbuffers.Builder, DX: number): void;
    static addDy(builder: flatbuffers.Builder, DY: number): void;
    static addGridSpacingUnits(builder: flatbuffers.Builder, GRID_SPACING_UNITSOffset: flatbuffers.Offset): void;
    static addXOrigin(builder: flatbuffers.Builder, X_ORIGIN: number): void;
    static addYOrigin(builder: flatbuffers.Builder, Y_ORIGIN: number): void;
    static addCentralMeridianDeg(builder: flatbuffers.Builder, CENTRAL_MERIDIAN_DEG: number): void;
    static addOriginLatitudeDeg(builder: flatbuffers.Builder, ORIGIN_LATITUDE_DEG: number): void;
    static addStandardParallel1Deg(builder: flatbuffers.Builder, STANDARD_PARALLEL_1_DEG: number): void;
    static addStandardParallel2Deg(builder: flatbuffers.Builder, STANDARD_PARALLEL_2_DEG: number): void;
    static addScaleFactorAtOrigin(builder: flatbuffers.Builder, SCALE_FACTOR_AT_ORIGIN: number): void;
    static addFalseEastingM(builder: flatbuffers.Builder, FALSE_EASTING_M: number): void;
    static addFalseNorthingM(builder: flatbuffers.Builder, FALSE_NORTHING_M: number): void;
    static addSubSatelliteLonDeg(builder: flatbuffers.Builder, SUB_SATELLITE_LON_DEG: number): void;
    static addPerspectiveHeightM(builder: flatbuffers.Builder, PERSPECTIVE_HEIGHT_M: number): void;
    static addSweepAngleAxisIsX(builder: flatbuffers.Builder, SWEEP_ANGLE_AXIS_IS_X: boolean): void;
    static addProj4String(builder: flatbuffers.Builder, PROJ4_STRINGOffset: flatbuffers.Offset): void;
    static addWkt2String(builder: flatbuffers.Builder, WKT2_STRINGOffset: flatbuffers.Offset): void;
    static endAGFProjectionParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGFProjectionParameters(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_M: number, SEMI_MINOR_AXIS_M: number, INVERSE_FLATTENING: number, DX: number, DY: number, GRID_SPACING_UNITSOffset: flatbuffers.Offset, X_ORIGIN: number, Y_ORIGIN: number, CENTRAL_MERIDIAN_DEG: number, ORIGIN_LATITUDE_DEG: number, STANDARD_PARALLEL_1_DEG: number, STANDARD_PARALLEL_2_DEG: number, SCALE_FACTOR_AT_ORIGIN: number, FALSE_EASTING_M: number, FALSE_NORTHING_M: number, SUB_SATELLITE_LON_DEG: number, PERSPECTIVE_HEIGHT_M: number, SWEEP_ANGLE_AXIS_IS_X: boolean, PROJ4_STRINGOffset: flatbuffers.Offset, WKT2_STRINGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AGFProjectionParametersT;
    unpackTo(_o: AGFProjectionParametersT): void;
}
export declare class AGFProjectionParametersT implements flatbuffers.IGeneratedObject {
    SEMI_MAJOR_AXIS_M: number;
    SEMI_MINOR_AXIS_M: number;
    INVERSE_FLATTENING: number;
    DX: number;
    DY: number;
    GRID_SPACING_UNITS: string | Uint8Array | null;
    X_ORIGIN: number;
    Y_ORIGIN: number;
    CENTRAL_MERIDIAN_DEG: number;
    ORIGIN_LATITUDE_DEG: number;
    STANDARD_PARALLEL_1_DEG: number;
    STANDARD_PARALLEL_2_DEG: number;
    SCALE_FACTOR_AT_ORIGIN: number;
    FALSE_EASTING_M: number;
    FALSE_NORTHING_M: number;
    SUB_SATELLITE_LON_DEG: number;
    PERSPECTIVE_HEIGHT_M: number;
    SWEEP_ANGLE_AXIS_IS_X: boolean;
    PROJ4_STRING: string | Uint8Array | null;
    WKT2_STRING: string | Uint8Array | null;
    constructor(SEMI_MAJOR_AXIS_M?: number, SEMI_MINOR_AXIS_M?: number, INVERSE_FLATTENING?: number, DX?: number, DY?: number, GRID_SPACING_UNITS?: string | Uint8Array | null, X_ORIGIN?: number, Y_ORIGIN?: number, CENTRAL_MERIDIAN_DEG?: number, ORIGIN_LATITUDE_DEG?: number, STANDARD_PARALLEL_1_DEG?: number, STANDARD_PARALLEL_2_DEG?: number, SCALE_FACTOR_AT_ORIGIN?: number, FALSE_EASTING_M?: number, FALSE_NORTHING_M?: number, SUB_SATELLITE_LON_DEG?: number, PERSPECTIVE_HEIGHT_M?: number, SWEEP_ANGLE_AXIS_IS_X?: boolean, PROJ4_STRING?: string | Uint8Array | null, WKT2_STRING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGFProjectionParameters.d.ts.map