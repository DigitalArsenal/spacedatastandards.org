import * as flatbuffers from 'flatbuffers';
import { CVPEmitterRef, CVPEmitterRefT } from './CVPEmitterRef.js';
import { CVPObstacleRef, CVPObstacleRefT } from './CVPObstacleRef.js';
import { CVPProvenance, CVPProvenanceT } from './CVPProvenance.js';
import { CVPReceiverRef, CVPReceiverRefT } from './CVPReceiverRef.js';
import { CVPUncertainty, CVPUncertaintyT } from './CVPUncertainty.js';
import { cvpAltitudeReference } from './cvpAltitudeReference.js';
import { cvpGeometryKind } from './cvpGeometryKind.js';
import { cvpRingRole } from './cvpRingRole.js';
import { rflBudgetTerm } from './rflBudgetTerm.js';
import { rflComparison } from './rflComparison.js';
import { rflConstraint } from './rflConstraint.js';
import { timingStandard } from './timingStandard.js';
/**
 * Coverage Geometry
 */
export declare class CVP implements flatbuffers.IUnpackableObject<CVPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVP;
    static getRootAsCVP(bb: flatbuffers.ByteBuffer, obj?: CVP): CVP;
    static getSizePrefixedRootAsCVP(bb: flatbuffers.ByteBuffer, obj?: CVP): CVP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this geometry product.
     */
    COVERAGE_ID(): string;
    COVERAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Analysis or scenario grouping identifier shared with the `$RFL` samples
     * and `$ACI` intervals of the same study.
     */
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOMETRY_KIND(): cvpGeometryKind;
    /**
     * The metric the rings contour.
     */
    METRIC(): rflBudgetTerm;
    /**
     * Units of the metric and of POLYGON_LEVEL_VALUES.
     */
    METRIC_UNITS(): string | null;
    METRIC_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The threshold the boundary was drawn at, for a THRESHOLD_CONTOUR.
     */
    THRESHOLD_VALUE(): number;
    THRESHOLD_UNITS(): string | null;
    THRESHOLD_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    THRESHOLD_COMPARISON(): rflComparison;
    /**
     * Instantaneous epoch, seconds since 1970-01-01T00:00:00 in TIME_SYSTEM.
     * Set for FOOTPRINT and other instantaneous products; NaN for aggregates.
     */
    EPOCH(): number;
    /**
     * Interval this geometry holds over, same encoding. Set for aggregated
     * products (union over a window, availability contour); NaN for
     * instantaneous ones. A product that states neither EPOCH nor an interval
     * is untethered in time and MUST be refused.
     */
    INTERVAL_START(): number;
    INTERVAL_STOP(): number;
    /**
     * Time scale all epochs in this record are expressed in. Defaults to UTC
     * explicitly: `timingStandard` ordinal 0 is GMST.
     */
    TIME_SYSTEM(): timingStandard;
    /**
     * Monotonic generation of this coverage product within its COVERAGE_ID
     * lineage. A streaming producer increments it per emission; a consumer
     * holding a higher generation MUST NOT be overwritten by a lower one.
     */
    GENERATION(): bigint;
    /**
     * COVERAGE_ID this record replaces, when the lineage was re-identified.
     */
    SUPERSEDES_COVERAGE_ID(): string | null;
    SUPERSEDES_COVERAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vertex longitudes, geodetic degrees in [-180, 180].
     */
    VERTEX_LONGITUDE_DEG(index: number): number | null;
    vertexLongitudeDegLength(): number;
    vertexLongitudeDegArray(): Float64Array;
    /**
     * Vertex latitudes, geodetic degrees in [-90, 90]. Same length as
     * VERTEX_LONGITUDE_DEG.
     */
    VERTEX_LATITUDE_DEG(index: number): number | null;
    vertexLatitudeDegLength(): number;
    vertexLatitudeDegArray(): Float64Array;
    /**
     * Vertex altitudes, metres above ALTITUDE_REFERENCE. Absent when the
     * geometry lies on the reference surface.
     */
    VERTEX_ALTITUDE_M(index: number): number | null;
    vertexAltitudeMLength(): number;
    vertexAltitudeMArray(): Float64Array | null;
    ALTITUDE_REFERENCE(): cvpAltitudeReference;
    /**
     * The constant altitude, metres, when ALTITUDE_REFERENCE is FIXED_ALTITUDE.
     */
    FIXED_ALTITUDE_M(): number;
    /**
     * Ring start indexes; RING_COUNT + 1 entries, last equals the vertex count.
     */
    RING_OFFSETS(index: number): number | null;
    ringOffsetsLength(): number;
    ringOffsetsArray(): Uint32Array;
    /**
     * Polygon each ring belongs to. Same length as RING_COUNT.
     */
    RING_POLYGON_INDEXES(index: number): number | null;
    ringPolygonIndexesLength(): number;
    ringPolygonIndexesArray(): Uint32Array;
    /**
     * Role of each ring. Same length as RING_COUNT.
     */
    RING_ROLES(index: number): cvpRingRole | null;
    ringRolesLength(): number;
    ringRolesArray(): Int8Array;
    /**
     * Number of polygons; equals max(RING_POLYGON_INDEXES) + 1 and is published
     * so an empty coverage field (zero polygons, zero rings) is representable
     * and distinguishable from an unpopulated record.
     */
    POLYGON_COUNT(): number;
    /**
     * Metric value each polygon is drawn at, in METRIC_UNITS. Same length as
     * POLYGON_COUNT. Carried for ISO_METRIC_CONTOUR; for a THRESHOLD_CONTOUR
     * every entry equals THRESHOLD_VALUE.
     */
    POLYGON_LEVEL_VALUES(index: number): number | null;
    polygonLevelValuesLength(): number;
    polygonLevelValuesArray(): Float64Array | null;
    /**
     * 1-sigma uncertainty of each polygon's level, same units and length.
     */
    POLYGON_LEVEL_UNCERTAINTIES(index: number): number | null;
    polygonLevelUncertaintiesLength(): number;
    polygonLevelUncertaintiesArray(): Float64Array | null;
    /**
     * Surface area enclosed by each polygon, square kilometres.
     */
    POLYGON_AREA_KM2(index: number): number | null;
    polygonAreaKm2Length(): number;
    polygonAreaKm2Array(): Float64Array | null;
    /**
     * Per-vertex 1-sigma horizontal uncertainty, metres. Same length as the
     * vertex arrays. Absent means CVPUncertainty.HORIZONTAL_POSITION_M governs
     * the whole boundary.
     */
    VERTEX_POSITION_UNCERTAINTY_M(index: number): number | null;
    vertexPositionUncertaintyMLength(): number;
    vertexPositionUncertaintyMArray(): Float64Array | null;
    /**
     * Grid the field was sampled on before contouring, e.g. "H3" or
     * "GEODETIC_LATLON". A contour is never finer than the grid behind it.
     */
    GRID_SCHEME(): string | null;
    GRID_SCHEME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grid resolution in the scheme's own convention (H3 resolution 0-15).
     */
    GRID_RESOLUTION(): number;
    /**
     * Grid spacing in degrees, for a geodetic lat/lon grid.
     */
    GRID_SPACING_DEG(): number;
    /**
     * Number of grid cells evaluated.
     */
    GRID_CELL_COUNT(): bigint;
    /**
     * `$CVG.COVERAGE_ID` of the figure-of-merit grid this geometry was
     * contoured from, when one was published.
     */
    CVG_COVERAGE_ID(): string | null;
    CVG_COVERAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFL.RFL_ID` of the sample set the field was evaluated from, when one
     * was published.
     */
    RFL_ID(): string | null;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$ACI.ACI_ID` of the interval set an availability or gap product was
     * aggregated from, when one was published.
     */
    ACI_ID(): string | null;
    ACI_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Emitters that contributed. Required: coverage with no stated emitter is
     * an unattributable claim about the sky.
     */
    CONTRIBUTING_EMITTERS(index: number, obj?: CVPEmitterRef): CVPEmitterRef | null;
    contributingEmittersLength(): number;
    /**
     * Identifier of the receiver set this coverage is stated for.
     */
    RECEIVER_SET_ID(): string | null;
    RECEIVER_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The receivers themselves, when the set is enumerable.
     */
    RECEIVERS(index: number, obj?: CVPReceiverRef): CVPReceiverRef | null;
    receiversLength(): number;
    /**
     * 3D obstacles that clipped or shaped the boundary, each naming the `$RFS`
     * material that produced its effect.
     */
    CONTRIBUTING_OBSTACLES(index: number, obj?: CVPObstacleRef): CVPObstacleRef | null;
    contributingObstaclesLength(): number;
    /**
     * Identifier of the obstacle set used, when it is published as a set rather
     * than enumerated here.
     */
    OBSTACLE_SET_ID(): string | null;
    OBSTACLE_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The condition that bounds the boundary — why the contour is where it is.
     */
    LIMITING_CONSTRAINT(): rflConstraint;
    /**
     * Verbatim description, required when LIMITING_CONSTRAINT is OTHER.
     */
    LIMITING_CONSTRAINT_NOTE(): string | null;
    LIMITING_CONSTRAINT_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uncertainty of level and boundary.
     */
    UNCERTAINTY(obj?: CVPUncertainty): CVPUncertainty | null;
    /**
     * Provenance. Required.
     */
    PROVENANCE(obj?: CVPProvenance): CVPProvenance | null;
    /**
     * Unix ms this record was serialized.
     */
    COMPUTED_AT(): bigint;
    /**
     * `$EPM` identifier of the producing node.
     */
    PRODUCER_ID(): string | null;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the producing `$EPM`.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startCVP(builder: flatbuffers.Builder): void;
    static addCoverageId(builder: flatbuffers.Builder, COVERAGE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addGeometryKind(builder: flatbuffers.Builder, GEOMETRY_KIND: cvpGeometryKind): void;
    static addMetric(builder: flatbuffers.Builder, METRIC: rflBudgetTerm): void;
    static addMetricUnits(builder: flatbuffers.Builder, METRIC_UNITSOffset: flatbuffers.Offset): void;
    static addThresholdValue(builder: flatbuffers.Builder, THRESHOLD_VALUE: number): void;
    static addThresholdUnits(builder: flatbuffers.Builder, THRESHOLD_UNITSOffset: flatbuffers.Offset): void;
    static addThresholdComparison(builder: flatbuffers.Builder, THRESHOLD_COMPARISON: rflComparison): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addIntervalStart(builder: flatbuffers.Builder, INTERVAL_START: number): void;
    static addIntervalStop(builder: flatbuffers.Builder, INTERVAL_STOP: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addGeneration(builder: flatbuffers.Builder, GENERATION: bigint): void;
    static addSupersedesCoverageId(builder: flatbuffers.Builder, SUPERSEDES_COVERAGE_IDOffset: flatbuffers.Offset): void;
    static addVertexLongitudeDeg(builder: flatbuffers.Builder, VERTEX_LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createVertexLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVertexLatitudeDeg(builder: flatbuffers.Builder, VERTEX_LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createVertexLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVertexAltitudeM(builder: flatbuffers.Builder, VERTEX_ALTITUDE_MOffset: flatbuffers.Offset): void;
    static createVertexAltitudeMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexAltitudeMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexAltitudeMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeReference(builder: flatbuffers.Builder, ALTITUDE_REFERENCE: cvpAltitudeReference): void;
    static addFixedAltitudeM(builder: flatbuffers.Builder, FIXED_ALTITUDE_M: number): void;
    static addRingOffsets(builder: flatbuffers.Builder, RING_OFFSETSOffset: flatbuffers.Offset): void;
    static createRingOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRingOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRingOffsetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRingPolygonIndexes(builder: flatbuffers.Builder, RING_POLYGON_INDEXESOffset: flatbuffers.Offset): void;
    static createRingPolygonIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRingPolygonIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRingPolygonIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRingRoles(builder: flatbuffers.Builder, RING_ROLESOffset: flatbuffers.Offset): void;
    static createRingRolesVector(builder: flatbuffers.Builder, data: cvpRingRole[]): flatbuffers.Offset;
    static startRingRolesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonCount(builder: flatbuffers.Builder, POLYGON_COUNT: number): void;
    static addPolygonLevelValues(builder: flatbuffers.Builder, POLYGON_LEVEL_VALUESOffset: flatbuffers.Offset): void;
    static createPolygonLevelValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolygonLevelValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolygonLevelValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonLevelUncertainties(builder: flatbuffers.Builder, POLYGON_LEVEL_UNCERTAINTIESOffset: flatbuffers.Offset): void;
    static createPolygonLevelUncertaintiesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolygonLevelUncertaintiesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolygonLevelUncertaintiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonAreaKm2(builder: flatbuffers.Builder, POLYGON_AREA_KM2Offset: flatbuffers.Offset): void;
    static createPolygonAreaKm2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolygonAreaKm2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolygonAreaKm2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addVertexPositionUncertaintyM(builder: flatbuffers.Builder, VERTEX_POSITION_UNCERTAINTY_MOffset: flatbuffers.Offset): void;
    static createVertexPositionUncertaintyMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexPositionUncertaintyMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexPositionUncertaintyMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGridScheme(builder: flatbuffers.Builder, GRID_SCHEMEOffset: flatbuffers.Offset): void;
    static addGridResolution(builder: flatbuffers.Builder, GRID_RESOLUTION: number): void;
    static addGridSpacingDeg(builder: flatbuffers.Builder, GRID_SPACING_DEG: number): void;
    static addGridCellCount(builder: flatbuffers.Builder, GRID_CELL_COUNT: bigint): void;
    static addCvgCoverageId(builder: flatbuffers.Builder, CVG_COVERAGE_IDOffset: flatbuffers.Offset): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addAciId(builder: flatbuffers.Builder, ACI_IDOffset: flatbuffers.Offset): void;
    static addContributingEmitters(builder: flatbuffers.Builder, CONTRIBUTING_EMITTERSOffset: flatbuffers.Offset): void;
    static createContributingEmittersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContributingEmittersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceiverSetId(builder: flatbuffers.Builder, RECEIVER_SET_IDOffset: flatbuffers.Offset): void;
    static addReceivers(builder: flatbuffers.Builder, RECEIVERSOffset: flatbuffers.Offset): void;
    static createReceiversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReceiversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContributingObstacles(builder: flatbuffers.Builder, CONTRIBUTING_OBSTACLESOffset: flatbuffers.Offset): void;
    static createContributingObstaclesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContributingObstaclesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObstacleSetId(builder: flatbuffers.Builder, OBSTACLE_SET_IDOffset: flatbuffers.Offset): void;
    static addLimitingConstraint(builder: flatbuffers.Builder, LIMITING_CONSTRAINT: rflConstraint): void;
    static addLimitingConstraintNote(builder: flatbuffers.Builder, LIMITING_CONSTRAINT_NOTEOffset: flatbuffers.Offset): void;
    static addUncertainty(builder: flatbuffers.Builder, UNCERTAINTYOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCVP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCVPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCVPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CVPT;
    unpackTo(_o: CVPT): void;
}
export declare class CVPT implements flatbuffers.IGeneratedObject {
    COVERAGE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    GEOMETRY_KIND: cvpGeometryKind;
    METRIC: rflBudgetTerm;
    METRIC_UNITS: string | Uint8Array | null;
    THRESHOLD_VALUE: number;
    THRESHOLD_UNITS: string | Uint8Array | null;
    THRESHOLD_COMPARISON: rflComparison;
    EPOCH: number;
    INTERVAL_START: number;
    INTERVAL_STOP: number;
    TIME_SYSTEM: timingStandard;
    GENERATION: bigint;
    SUPERSEDES_COVERAGE_ID: string | Uint8Array | null;
    VERTEX_LONGITUDE_DEG: (number)[];
    VERTEX_LATITUDE_DEG: (number)[];
    VERTEX_ALTITUDE_M: (number)[];
    ALTITUDE_REFERENCE: cvpAltitudeReference;
    FIXED_ALTITUDE_M: number;
    RING_OFFSETS: (number)[];
    RING_POLYGON_INDEXES: (number)[];
    RING_ROLES: (cvpRingRole)[];
    POLYGON_COUNT: number;
    POLYGON_LEVEL_VALUES: (number)[];
    POLYGON_LEVEL_UNCERTAINTIES: (number)[];
    POLYGON_AREA_KM2: (number)[];
    VERTEX_POSITION_UNCERTAINTY_M: (number)[];
    GRID_SCHEME: string | Uint8Array | null;
    GRID_RESOLUTION: number;
    GRID_SPACING_DEG: number;
    GRID_CELL_COUNT: bigint;
    CVG_COVERAGE_ID: string | Uint8Array | null;
    RFL_ID: string | Uint8Array | null;
    ACI_ID: string | Uint8Array | null;
    CONTRIBUTING_EMITTERS: (CVPEmitterRefT)[];
    RECEIVER_SET_ID: string | Uint8Array | null;
    RECEIVERS: (CVPReceiverRefT)[];
    CONTRIBUTING_OBSTACLES: (CVPObstacleRefT)[];
    OBSTACLE_SET_ID: string | Uint8Array | null;
    LIMITING_CONSTRAINT: rflConstraint;
    LIMITING_CONSTRAINT_NOTE: string | Uint8Array | null;
    UNCERTAINTY: CVPUncertaintyT | null;
    PROVENANCE: CVPProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(COVERAGE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, GEOMETRY_KIND?: cvpGeometryKind, METRIC?: rflBudgetTerm, METRIC_UNITS?: string | Uint8Array | null, THRESHOLD_VALUE?: number, THRESHOLD_UNITS?: string | Uint8Array | null, THRESHOLD_COMPARISON?: rflComparison, EPOCH?: number, INTERVAL_START?: number, INTERVAL_STOP?: number, TIME_SYSTEM?: timingStandard, GENERATION?: bigint, SUPERSEDES_COVERAGE_ID?: string | Uint8Array | null, VERTEX_LONGITUDE_DEG?: (number)[], VERTEX_LATITUDE_DEG?: (number)[], VERTEX_ALTITUDE_M?: (number)[], ALTITUDE_REFERENCE?: cvpAltitudeReference, FIXED_ALTITUDE_M?: number, RING_OFFSETS?: (number)[], RING_POLYGON_INDEXES?: (number)[], RING_ROLES?: (cvpRingRole)[], POLYGON_COUNT?: number, POLYGON_LEVEL_VALUES?: (number)[], POLYGON_LEVEL_UNCERTAINTIES?: (number)[], POLYGON_AREA_KM2?: (number)[], VERTEX_POSITION_UNCERTAINTY_M?: (number)[], GRID_SCHEME?: string | Uint8Array | null, GRID_RESOLUTION?: number, GRID_SPACING_DEG?: number, GRID_CELL_COUNT?: bigint, CVG_COVERAGE_ID?: string | Uint8Array | null, RFL_ID?: string | Uint8Array | null, ACI_ID?: string | Uint8Array | null, CONTRIBUTING_EMITTERS?: (CVPEmitterRefT)[], RECEIVER_SET_ID?: string | Uint8Array | null, RECEIVERS?: (CVPReceiverRefT)[], CONTRIBUTING_OBSTACLES?: (CVPObstacleRefT)[], OBSTACLE_SET_ID?: string | Uint8Array | null, LIMITING_CONSTRAINT?: rflConstraint, LIMITING_CONSTRAINT_NOTE?: string | Uint8Array | null, UNCERTAINTY?: CVPUncertaintyT | null, PROVENANCE?: CVPProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVP.d.ts.map