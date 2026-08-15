import * as flatbuffers from 'flatbuffers';
import { AGFProjectionParameters, AGFProjectionParametersT } from './AGFProjectionParameters.js';
import { AGVProvenance, AGVProvenanceT } from './AGVProvenance.js';
import { agfDType } from './agfDType.js';
import { agfPayloadCodec } from './agfPayloadCodec.js';
import { agfProjection } from './agfProjection.js';
import { agfRowOrder } from './agfRowOrder.js';
import { agfVariable } from './agfVariable.js';
import { agvArrayLayout } from './agvArrayLayout.js';
import { agvLevelOrder } from './agvLevelOrder.js';
import { agvVerticalCoordinate } from './agvVerticalCoordinate.js';
/**
 * Atmospheric Gridded Volume
 */
export declare class AGV implements flatbuffers.IUnpackableObject<AGVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGV;
    static getRootAsAGV(bb: flatbuffers.ByteBuffer, obj?: AGV): AGV;
    static getSizePrefixedRootAsAGV(bb: flatbuffers.ByteBuffer, obj?: AGV): AGV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this volume record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Nominal time the volume represents, ISO 8601 UTC. For a forecast this is
     * the validity time.
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Half-open validity window [VALID_START, VALID_END), ISO 8601 UTC.
     */
    VALID_START(): string | null;
    VALID_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_END(): string | null;
    VALID_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Model initialisation time, ISO 8601 UTC. ABSENT for an analysis or an
     * observation-derived volume.
     */
    FORECAST_REFERENCE_TIME(): string | null;
    FORECAST_REFERENCE_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds from FORECAST_REFERENCE_TIME to EPOCH. Meaningful ONLY when
     * FORECAST_REFERENCE_TIME is present; NaN otherwise.
     */
    FORECAST_LEAD_S(): number;
    /**
     * The physical quantity, from the `$AGF` vocabulary. It does NOT imply
     * units.
     */
    VARIABLE(): agfVariable;
    /**
     * UDUNITS-compatible units of the SCALED physical value. Required.
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Category meanings for a categorical VARIABLE, indexed by raw value.
     */
    CATEGORY_LABELS(index: number): string;
    CATEGORY_LABELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    categoryLabelsLength(): number;
    /**
     * Element type of the packed array, from the `$AGF` vocabulary.
     */
    DTYPE(): agfDType;
    /**
     * Sentinel marking a cell with no data, in RAW units, before scaling.
     */
    FILL_VALUE(): number;
    /**
     * physical = raw * SCALE_FACTOR + ADD_OFFSET, applied only to non-fill
     * cells.
     */
    SCALE_FACTOR(): number;
    ADD_OFFSET(): number;
    /**
     * Number of columns and rows per level.
     */
    NX(): number;
    NY(): number;
    /**
     * Order of the NY rows within each z-slab.
     */
    ROW_ORDER(): agfRowOrder;
    /**
     * Projection family of the horizontal grid.
     */
    PROJECTION(): agfProjection;
    /**
     * Explicit, authoritative georeferencing parameters. PROJ4 and WKT2
     * strings within remain advisory only.
     */
    PROJECTION_PARAMETERS(obj?: AGFProjectionParameters): AGFProjectionParameters | null;
    /**
     * Number of levels. The payload holds exactly NX * NY * NZ elements.
     */
    NZ(): number;
    /**
     * Kind of vertical level, which fixes the units of LEVELS.
     */
    VERTICAL_COORDINATE(): agvVerticalCoordinate;
    /**
     * The NZ level values themselves, in payload slab order. Required and
     * explicit: never a start-and-step, never a formula. Length MUST equal NZ.
     */
    LEVELS(index: number): number | null;
    levelsLength(): number;
    levelsArray(): Float64Array;
    /**
     * Direction of the LEVELS sequence.
     */
    LEVEL_ORDER(): agvLevelOrder;
    /**
     * Hybrid sigma-pressure A coefficients, pascals, one per level (or per
     * level interface, when INTERFACE_COEFFICIENTS is true). REQUIRED for
     * HYBRID_SIGMA and MODEL_LEVEL; without them a level is not a pressure.
     */
    HYBRID_A_COEFFICIENTS(index: number): number | null;
    hybridACoefficientsLength(): number;
    hybridACoefficientsArray(): Float64Array | null;
    /**
     * Hybrid sigma-pressure B coefficients, dimensionless, same length rule.
     */
    HYBRID_B_COEFFICIENTS(index: number): number | null;
    hybridBCoefficientsLength(): number;
    hybridBCoefficientsArray(): Float64Array | null;
    /**
     * True when the hybrid coefficients are stated at level INTERFACES
     * (NZ + 1 values) rather than at level centres (NZ values).
     */
    INTERFACE_COEFFICIENTS(): boolean;
    /**
     * Reference surface pressure used with the hybrid coefficients, pascals.
     * NaN when not applicable.
     */
    SURFACE_PRESSURE_REFERENCE_PA(): number;
    /**
     * Memory layout of the packed volume. LEVEL_MAJOR is the only legal value.
     */
    ARRAY_LAYOUT(): agvArrayLayout;
    /**
     * Codec applied to the packed array, from the `$AGF` vocabulary.
     */
    PAYLOAD_CODEC(): agfPayloadCodec;
    /**
     * Inline post-codec bytes. LEGAL ONLY when PAYLOAD_SIZE_BYTES is at most
     * 1048576. MUST be absent when PAYLOAD_CID is present.
     */
    PAYLOAD(index: number): number | null;
    payloadLength(): number;
    payloadArray(): Uint8Array | null;
    /**
     * Content-addressed reference to the identical post-codec byte string.
     * MUST be absent when PAYLOAD is present, and MUST be used above 1048576
     * post-codec bytes — which is the normal case for a volume.
     */
    PAYLOAD_CID(): string | null;
    PAYLOAD_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 of the post-codec byte string. REQUIRED in BOTH
     * payload modes.
     */
    PAYLOAD_SHA256(): string;
    PAYLOAD_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Length of the post-codec byte string, bytes. REQUIRED in BOTH payload
     * modes.
     */
    PAYLOAD_SIZE_BYTES(): bigint;
    /**
     * Where the volume came from. Required.
     */
    PROVENANCE(obj?: AGVProvenance): AGVProvenance | null;
    /**
     * Free-text description of the volume, not of its vendor.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAGV(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addValidStart(builder: flatbuffers.Builder, VALID_STARTOffset: flatbuffers.Offset): void;
    static addValidEnd(builder: flatbuffers.Builder, VALID_ENDOffset: flatbuffers.Offset): void;
    static addForecastReferenceTime(builder: flatbuffers.Builder, FORECAST_REFERENCE_TIMEOffset: flatbuffers.Offset): void;
    static addForecastLeadS(builder: flatbuffers.Builder, FORECAST_LEAD_S: number): void;
    static addVariable(builder: flatbuffers.Builder, VARIABLE: agfVariable): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addCategoryLabels(builder: flatbuffers.Builder, CATEGORY_LABELSOffset: flatbuffers.Offset): void;
    static createCategoryLabelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCategoryLabelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDtype(builder: flatbuffers.Builder, DTYPE: agfDType): void;
    static addFillValue(builder: flatbuffers.Builder, FILL_VALUE: number): void;
    static addScaleFactor(builder: flatbuffers.Builder, SCALE_FACTOR: number): void;
    static addAddOffset(builder: flatbuffers.Builder, ADD_OFFSET: number): void;
    static addNx(builder: flatbuffers.Builder, NX: number): void;
    static addNy(builder: flatbuffers.Builder, NY: number): void;
    static addRowOrder(builder: flatbuffers.Builder, ROW_ORDER: agfRowOrder): void;
    static addProjection(builder: flatbuffers.Builder, PROJECTION: agfProjection): void;
    static addProjectionParameters(builder: flatbuffers.Builder, PROJECTION_PARAMETERSOffset: flatbuffers.Offset): void;
    static addNz(builder: flatbuffers.Builder, NZ: number): void;
    static addVerticalCoordinate(builder: flatbuffers.Builder, VERTICAL_COORDINATE: agvVerticalCoordinate): void;
    static addLevels(builder: flatbuffers.Builder, LEVELSOffset: flatbuffers.Offset): void;
    static createLevelsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLevelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLevelOrder(builder: flatbuffers.Builder, LEVEL_ORDER: agvLevelOrder): void;
    static addHybridACoefficients(builder: flatbuffers.Builder, HYBRID_A_COEFFICIENTSOffset: flatbuffers.Offset): void;
    static createHybridACoefficientsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHybridACoefficientsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHybridACoefficientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHybridBCoefficients(builder: flatbuffers.Builder, HYBRID_B_COEFFICIENTSOffset: flatbuffers.Offset): void;
    static createHybridBCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHybridBCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHybridBCoefficientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterfaceCoefficients(builder: flatbuffers.Builder, INTERFACE_COEFFICIENTS: boolean): void;
    static addSurfacePressureReferencePa(builder: flatbuffers.Builder, SURFACE_PRESSURE_REFERENCE_PA: number): void;
    static addArrayLayout(builder: flatbuffers.Builder, ARRAY_LAYOUT: agvArrayLayout): void;
    static addPayloadCodec(builder: flatbuffers.Builder, PAYLOAD_CODEC: agfPayloadCodec): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static createPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayloadCid(builder: flatbuffers.Builder, PAYLOAD_CIDOffset: flatbuffers.Offset): void;
    static addPayloadSha256(builder: flatbuffers.Builder, PAYLOAD_SHA256Offset: flatbuffers.Offset): void;
    static addPayloadSizeBytes(builder: flatbuffers.Builder, PAYLOAD_SIZE_BYTES: bigint): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAGV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAGVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAGVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): AGVT;
    unpackTo(_o: AGVT): void;
}
export declare class AGVT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    VALID_START: string | Uint8Array | null;
    VALID_END: string | Uint8Array | null;
    FORECAST_REFERENCE_TIME: string | Uint8Array | null;
    FORECAST_LEAD_S: number;
    VARIABLE: agfVariable;
    UNITS: string | Uint8Array | null;
    CATEGORY_LABELS: (string)[];
    DTYPE: agfDType;
    FILL_VALUE: number;
    SCALE_FACTOR: number;
    ADD_OFFSET: number;
    NX: number;
    NY: number;
    ROW_ORDER: agfRowOrder;
    PROJECTION: agfProjection;
    PROJECTION_PARAMETERS: AGFProjectionParametersT | null;
    NZ: number;
    VERTICAL_COORDINATE: agvVerticalCoordinate;
    LEVELS: (number)[];
    LEVEL_ORDER: agvLevelOrder;
    HYBRID_A_COEFFICIENTS: (number)[];
    HYBRID_B_COEFFICIENTS: (number)[];
    INTERFACE_COEFFICIENTS: boolean;
    SURFACE_PRESSURE_REFERENCE_PA: number;
    ARRAY_LAYOUT: agvArrayLayout;
    PAYLOAD_CODEC: agfPayloadCodec;
    PAYLOAD: (number)[];
    PAYLOAD_CID: string | Uint8Array | null;
    PAYLOAD_SHA256: string | Uint8Array | null;
    PAYLOAD_SIZE_BYTES: bigint;
    PROVENANCE: AGVProvenanceT | null;
    DESCRIPTION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, VALID_START?: string | Uint8Array | null, VALID_END?: string | Uint8Array | null, FORECAST_REFERENCE_TIME?: string | Uint8Array | null, FORECAST_LEAD_S?: number, VARIABLE?: agfVariable, UNITS?: string | Uint8Array | null, CATEGORY_LABELS?: (string)[], DTYPE?: agfDType, FILL_VALUE?: number, SCALE_FACTOR?: number, ADD_OFFSET?: number, NX?: number, NY?: number, ROW_ORDER?: agfRowOrder, PROJECTION?: agfProjection, PROJECTION_PARAMETERS?: AGFProjectionParametersT | null, NZ?: number, VERTICAL_COORDINATE?: agvVerticalCoordinate, LEVELS?: (number)[], LEVEL_ORDER?: agvLevelOrder, HYBRID_A_COEFFICIENTS?: (number)[], HYBRID_B_COEFFICIENTS?: (number)[], INTERFACE_COEFFICIENTS?: boolean, SURFACE_PRESSURE_REFERENCE_PA?: number, ARRAY_LAYOUT?: agvArrayLayout, PAYLOAD_CODEC?: agfPayloadCodec, PAYLOAD?: (number)[], PAYLOAD_CID?: string | Uint8Array | null, PAYLOAD_SHA256?: string | Uint8Array | null, PAYLOAD_SIZE_BYTES?: bigint, PROVENANCE?: AGVProvenanceT | null, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGV.d.ts.map