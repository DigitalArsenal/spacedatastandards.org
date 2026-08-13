import * as flatbuffers from 'flatbuffers';
import { trsPropagationModel } from './trsPropagationModel.js';
import { trsSolverTier } from './trsSolverTier.js';
/**
 * One terrain raster solve request.
 *
 * FRAMES. The analysis frame is a local East-North-Up (ENU) frame: local X
 * is east, Y is north, Z is up. Both grids share the same analysis-frame
 * bounds, anchored at (MIN_EAST_M, MIN_NORTH_M). Per-cell geodetic
 * coordinates are carried explicitly in GRID_LONGITUDE_RAD /
 * GRID_LATITUDE_RAD so a solver recomputes exact per-cell Earth-fixed
 * geometry instead of interpolating it.
 */
export declare class TRSRequest implements flatbuffers.IUnpackableObject<TRSRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRSRequest;
    static getRootAsTRSRequest(bb: flatbuffers.ByteBuffer, obj?: TRSRequest): TRSRequest;
    static getSizePrefixedRootAsTRSRequest(bb: flatbuffers.ByteBuffer, obj?: TRSRequest): TRSRequest;
    /**
     * Output raster width, cells.
     */
    GRID_WIDTH(): number;
    /**
     * Output raster height, cells.
     */
    GRID_HEIGHT(): number;
    /**
     * Obstruction profile field width, cells. The profile is a FINER field
     * than the output raster; the line-of-sight march samples it.
     */
    PROFILE_WIDTH(): number;
    /**
     * Obstruction profile field height, cells.
     */
    PROFILE_HEIGHT(): number;
    /**
     * Fidelity tier requested. A solver that does not implement the tier
     * REFUSES; it never silently downgrades.
     */
    SOLVER_TIER(): trsSolverTier;
    /**
     * Propagation model requested for the per-cell loss term. A solver that
     * does not implement the model REFUSES; it never silently substitutes.
     */
    PROPAGATION_MODEL(): trsPropagationModel;
    /**
     * Atmospheric attenuation terms requested, as a bitmask: 0 none,
     * bit 0 (1) gaseous absorption, bit 1 (2) rain attenuation, bit 2 (4)
     * cloud/fog attenuation. A solver that does not implement a requested
     * term REFUSES.
     */
    ATMOSPHERIC_MODEL_MASK(): number;
    /**
     * Parallelism hint. 0 or 1 means sequential. A solver MUST produce
     * byte-identical layers at any value — cells are independent and a thread
     * writes only its own indices; determinism is part of this contract.
     */
    THREAD_COUNT_HINT(): number;
    /**
     * Analysis-frame east coordinate of the shared grid origin, meters.
     */
    MIN_EAST_M(): number;
    /**
     * Analysis-frame north coordinate of the shared grid origin, meters.
     */
    MIN_NORTH_M(): number;
    /**
     * Profile cell width, meters.
     */
    PROFILE_CELL_WIDTH_M(): number;
    /**
     * Profile cell height, meters.
     */
    PROFILE_CELL_HEIGHT_M(): number;
    /**
     * Profile sample spacing, meters; sets the line-of-sight march stride.
     */
    PROFILE_SPACING_M(): number;
    /**
     * Minimum march step, meters. NaN means caller left it unset and the
     * solver applies its own documented default.
     */
    MINIMUM_STEP_M(): number;
    /**
     * Emitter position in the analysis ENU frame, meters (X east, Y north,
     * Z up).
     */
    TX_LOCAL_X_M(): number;
    TX_LOCAL_Y_M(): number;
    TX_LOCAL_Z_M(): number;
    /**
     * Emitter Earth-centered Earth-fixed position, meters — carried so the
     * solver computes exact per-cell range rather than a small-angle
     * approximation.
     */
    TX_ECEF_X_M(): number;
    TX_ECEF_Y_M(): number;
    TX_ECEF_Z_M(): number;
    /**
     * Emitter height above the reference ellipsoid, meters.
     */
    TX_ABSOLUTE_HEIGHT_M(): number;
    /**
     * Terrain surface height under the emitter, meters above the ellipsoid.
     * Emitter height above ground = TX_ABSOLUTE_HEIGHT_M −
     * TX_SURFACE_HEIGHT_M.
     */
    TX_SURFACE_HEIGHT_M(): number;
    /**
     * Column-major 4x4 inverse of the analysis ENU frame transform (the
     * matrix that takes Earth-fixed points INTO the analysis frame). Exactly
     * 16 entries.
     */
    INVERSE_ENU_TRANSFORM(index: number): number | null;
    inverseEnuTransformLength(): number;
    inverseEnuTransformArray(): Float64Array | null;
    /**
     * Receiver height above ground at every cell, meters.
     */
    TARGET_HEIGHT_M(): number;
    /**
     * Carrier frequency, hertz.
     */
    FREQUENCY_HZ(): number;
    /**
     * Noise bandwidth, hertz. NaN means caller left it unset and the solver
     * applies its own documented default.
     */
    BANDWIDTH_HZ(): number;
    /**
     * Transmit power, watts. NaN means unset; solver default applies.
     */
    TX_POWER_W(): number;
    /**
     * Transmit antenna gain, dBi. NaN means unset; solver default applies.
     */
    TX_GAIN_DBI(): number;
    /**
     * Transmit line loss, dB (positive). NaN means unset; solver default
     * applies.
     */
    TX_LINE_LOSS_DB(): number;
    /**
     * Receive antenna gain, dBi. NaN means unset; solver default applies.
     */
    RX_GAIN_DBI(): number;
    /**
     * Receive line loss, dB (positive). NaN means unset; solver default
     * applies.
     */
    RX_LINE_LOSS_DB(): number;
    /**
     * Receiver noise figure, dB. NaN means unset; solver default applies.
     */
    RX_NOISE_FIGURE_DB(): number;
    /**
     * Effective Earth radius factor (k-factor) for curvature correction.
     * NaN means no curvature term is applied — NOT a default of 4/3.
     */
    EFFECTIVE_EARTH_RADIUS_FACTOR(): number;
    /**
     * Geodetic longitude of every output cell, radians, row-major,
     * GRID_WIDTH * GRID_HEIGHT entries.
     */
    GRID_LONGITUDE_RAD(index: number): number | null;
    gridLongitudeRadLength(): number;
    gridLongitudeRadArray(): Float64Array | null;
    /**
     * Geodetic latitude of every output cell, radians, row-major,
     * GRID_WIDTH * GRID_HEIGHT entries.
     */
    GRID_LATITUDE_RAD(index: number): number | null;
    gridLatitudeRadLength(): number;
    gridLatitudeRadArray(): Float64Array | null;
    /**
     * Terrain height at every output cell, meters above the ellipsoid,
     * row-major, GRID_WIDTH * GRID_HEIGHT entries.
     */
    GROUND_HEIGHTS_M(index: number): number | null;
    groundHeightsMLength(): number;
    groundHeightsMArray(): Float32Array | null;
    /**
     * COMPOSITE obstruction surface (terrain plus structures) at every
     * profile cell, meters above the ellipsoid, row-major,
     * PROFILE_WIDTH * PROFILE_HEIGHT entries.
     */
    PROFILE_HEIGHTS_M(index: number): number | null;
    profileHeightsMLength(): number;
    profileHeightsMArray(): Float32Array | null;
    /**
     * The same composite surface expressed as analysis-frame Z, meters —
     * the frame the line-of-sight test runs in. PROFILE_WIDTH *
     * PROFILE_HEIGHT entries.
     */
    PROFILE_SURFACE_Z_M(index: number): number | null;
    profileSurfaceZMLength(): number;
    profileSurfaceZMArray(): Float32Array | null;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRSRequest(builder: flatbuffers.Builder): void;
    static addGridWidth(builder: flatbuffers.Builder, GRID_WIDTH: number): void;
    static addGridHeight(builder: flatbuffers.Builder, GRID_HEIGHT: number): void;
    static addProfileWidth(builder: flatbuffers.Builder, PROFILE_WIDTH: number): void;
    static addProfileHeight(builder: flatbuffers.Builder, PROFILE_HEIGHT: number): void;
    static addSolverTier(builder: flatbuffers.Builder, SOLVER_TIER: trsSolverTier): void;
    static addPropagationModel(builder: flatbuffers.Builder, PROPAGATION_MODEL: trsPropagationModel): void;
    static addAtmosphericModelMask(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL_MASK: number): void;
    static addThreadCountHint(builder: flatbuffers.Builder, THREAD_COUNT_HINT: number): void;
    static addMinEastM(builder: flatbuffers.Builder, MIN_EAST_M: number): void;
    static addMinNorthM(builder: flatbuffers.Builder, MIN_NORTH_M: number): void;
    static addProfileCellWidthM(builder: flatbuffers.Builder, PROFILE_CELL_WIDTH_M: number): void;
    static addProfileCellHeightM(builder: flatbuffers.Builder, PROFILE_CELL_HEIGHT_M: number): void;
    static addProfileSpacingM(builder: flatbuffers.Builder, PROFILE_SPACING_M: number): void;
    static addMinimumStepM(builder: flatbuffers.Builder, MINIMUM_STEP_M: number): void;
    static addTxLocalXM(builder: flatbuffers.Builder, TX_LOCAL_X_M: number): void;
    static addTxLocalYM(builder: flatbuffers.Builder, TX_LOCAL_Y_M: number): void;
    static addTxLocalZM(builder: flatbuffers.Builder, TX_LOCAL_Z_M: number): void;
    static addTxEcefXM(builder: flatbuffers.Builder, TX_ECEF_X_M: number): void;
    static addTxEcefYM(builder: flatbuffers.Builder, TX_ECEF_Y_M: number): void;
    static addTxEcefZM(builder: flatbuffers.Builder, TX_ECEF_Z_M: number): void;
    static addTxAbsoluteHeightM(builder: flatbuffers.Builder, TX_ABSOLUTE_HEIGHT_M: number): void;
    static addTxSurfaceHeightM(builder: flatbuffers.Builder, TX_SURFACE_HEIGHT_M: number): void;
    static addInverseEnuTransform(builder: flatbuffers.Builder, INVERSE_ENU_TRANSFORMOffset: flatbuffers.Offset): void;
    static createInverseEnuTransformVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInverseEnuTransformVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInverseEnuTransformVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetHeightM(builder: flatbuffers.Builder, TARGET_HEIGHT_M: number): void;
    static addFrequencyHz(builder: flatbuffers.Builder, FREQUENCY_HZ: number): void;
    static addBandwidthHz(builder: flatbuffers.Builder, BANDWIDTH_HZ: number): void;
    static addTxPowerW(builder: flatbuffers.Builder, TX_POWER_W: number): void;
    static addTxGainDbi(builder: flatbuffers.Builder, TX_GAIN_DBI: number): void;
    static addTxLineLossDb(builder: flatbuffers.Builder, TX_LINE_LOSS_DB: number): void;
    static addRxGainDbi(builder: flatbuffers.Builder, RX_GAIN_DBI: number): void;
    static addRxLineLossDb(builder: flatbuffers.Builder, RX_LINE_LOSS_DB: number): void;
    static addRxNoiseFigureDb(builder: flatbuffers.Builder, RX_NOISE_FIGURE_DB: number): void;
    static addEffectiveEarthRadiusFactor(builder: flatbuffers.Builder, EFFECTIVE_EARTH_RADIUS_FACTOR: number): void;
    static addGridLongitudeRad(builder: flatbuffers.Builder, GRID_LONGITUDE_RADOffset: flatbuffers.Offset): void;
    static createGridLongitudeRadVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGridLongitudeRadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGridLongitudeRadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGridLatitudeRad(builder: flatbuffers.Builder, GRID_LATITUDE_RADOffset: flatbuffers.Offset): void;
    static createGridLatitudeRadVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGridLatitudeRadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGridLatitudeRadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroundHeightsM(builder: flatbuffers.Builder, GROUND_HEIGHTS_MOffset: flatbuffers.Offset): void;
    static createGroundHeightsMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGroundHeightsMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGroundHeightsMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProfileHeightsM(builder: flatbuffers.Builder, PROFILE_HEIGHTS_MOffset: flatbuffers.Offset): void;
    static createProfileHeightsMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createProfileHeightsMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProfileHeightsMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProfileSurfaceZM(builder: flatbuffers.Builder, PROFILE_SURFACE_Z_MOffset: flatbuffers.Offset): void;
    static createProfileSurfaceZMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createProfileSurfaceZMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProfileSurfaceZMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endTRSRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRSRequest(builder: flatbuffers.Builder, GRID_WIDTH: number, GRID_HEIGHT: number, PROFILE_WIDTH: number, PROFILE_HEIGHT: number, SOLVER_TIER: trsSolverTier, PROPAGATION_MODEL: trsPropagationModel, ATMOSPHERIC_MODEL_MASK: number, THREAD_COUNT_HINT: number, MIN_EAST_M: number, MIN_NORTH_M: number, PROFILE_CELL_WIDTH_M: number, PROFILE_CELL_HEIGHT_M: number, PROFILE_SPACING_M: number, MINIMUM_STEP_M: number, TX_LOCAL_X_M: number, TX_LOCAL_Y_M: number, TX_LOCAL_Z_M: number, TX_ECEF_X_M: number, TX_ECEF_Y_M: number, TX_ECEF_Z_M: number, TX_ABSOLUTE_HEIGHT_M: number, TX_SURFACE_HEIGHT_M: number, INVERSE_ENU_TRANSFORMOffset: flatbuffers.Offset, TARGET_HEIGHT_M: number, FREQUENCY_HZ: number, BANDWIDTH_HZ: number, TX_POWER_W: number, TX_GAIN_DBI: number, TX_LINE_LOSS_DB: number, RX_GAIN_DBI: number, RX_LINE_LOSS_DB: number, RX_NOISE_FIGURE_DB: number, EFFECTIVE_EARTH_RADIUS_FACTOR: number, GRID_LONGITUDE_RADOffset: flatbuffers.Offset, GRID_LATITUDE_RADOffset: flatbuffers.Offset, GROUND_HEIGHTS_MOffset: flatbuffers.Offset, PROFILE_HEIGHTS_MOffset: flatbuffers.Offset, PROFILE_SURFACE_Z_MOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRSRequestT;
    unpackTo(_o: TRSRequestT): void;
}
export declare class TRSRequestT implements flatbuffers.IGeneratedObject {
    GRID_WIDTH: number;
    GRID_HEIGHT: number;
    PROFILE_WIDTH: number;
    PROFILE_HEIGHT: number;
    SOLVER_TIER: trsSolverTier;
    PROPAGATION_MODEL: trsPropagationModel;
    ATMOSPHERIC_MODEL_MASK: number;
    THREAD_COUNT_HINT: number;
    MIN_EAST_M: number;
    MIN_NORTH_M: number;
    PROFILE_CELL_WIDTH_M: number;
    PROFILE_CELL_HEIGHT_M: number;
    PROFILE_SPACING_M: number;
    MINIMUM_STEP_M: number;
    TX_LOCAL_X_M: number;
    TX_LOCAL_Y_M: number;
    TX_LOCAL_Z_M: number;
    TX_ECEF_X_M: number;
    TX_ECEF_Y_M: number;
    TX_ECEF_Z_M: number;
    TX_ABSOLUTE_HEIGHT_M: number;
    TX_SURFACE_HEIGHT_M: number;
    INVERSE_ENU_TRANSFORM: (number)[];
    TARGET_HEIGHT_M: number;
    FREQUENCY_HZ: number;
    BANDWIDTH_HZ: number;
    TX_POWER_W: number;
    TX_GAIN_DBI: number;
    TX_LINE_LOSS_DB: number;
    RX_GAIN_DBI: number;
    RX_LINE_LOSS_DB: number;
    RX_NOISE_FIGURE_DB: number;
    EFFECTIVE_EARTH_RADIUS_FACTOR: number;
    GRID_LONGITUDE_RAD: (number)[];
    GRID_LATITUDE_RAD: (number)[];
    GROUND_HEIGHTS_M: (number)[];
    PROFILE_HEIGHTS_M: (number)[];
    PROFILE_SURFACE_Z_M: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(GRID_WIDTH?: number, GRID_HEIGHT?: number, PROFILE_WIDTH?: number, PROFILE_HEIGHT?: number, SOLVER_TIER?: trsSolverTier, PROPAGATION_MODEL?: trsPropagationModel, ATMOSPHERIC_MODEL_MASK?: number, THREAD_COUNT_HINT?: number, MIN_EAST_M?: number, MIN_NORTH_M?: number, PROFILE_CELL_WIDTH_M?: number, PROFILE_CELL_HEIGHT_M?: number, PROFILE_SPACING_M?: number, MINIMUM_STEP_M?: number, TX_LOCAL_X_M?: number, TX_LOCAL_Y_M?: number, TX_LOCAL_Z_M?: number, TX_ECEF_X_M?: number, TX_ECEF_Y_M?: number, TX_ECEF_Z_M?: number, TX_ABSOLUTE_HEIGHT_M?: number, TX_SURFACE_HEIGHT_M?: number, INVERSE_ENU_TRANSFORM?: (number)[], TARGET_HEIGHT_M?: number, FREQUENCY_HZ?: number, BANDWIDTH_HZ?: number, TX_POWER_W?: number, TX_GAIN_DBI?: number, TX_LINE_LOSS_DB?: number, RX_GAIN_DBI?: number, RX_LINE_LOSS_DB?: number, RX_NOISE_FIGURE_DB?: number, EFFECTIVE_EARTH_RADIUS_FACTOR?: number, GRID_LONGITUDE_RAD?: (number)[], GRID_LATITUDE_RAD?: (number)[], GROUND_HEIGHTS_M?: (number)[], PROFILE_HEIGHTS_M?: (number)[], PROFILE_SURFACE_Z_M?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRSRequest.d.ts.map