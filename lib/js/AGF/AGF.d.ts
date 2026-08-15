import * as flatbuffers from 'flatbuffers';
import { AGFProjectionParameters, AGFProjectionParametersT } from './AGFProjectionParameters.js';
import { AGFProvenance, AGFProvenanceT } from './AGFProvenance.js';
import { agfDType } from './agfDType.js';
import { agfPayloadCodec } from './agfPayloadCodec.js';
import { agfProjection } from './agfProjection.js';
import { agfRowOrder } from './agfRowOrder.js';
import { agfVariable } from './agfVariable.js';
/**
 * Atmospheric Gridded Field
 */
export declare class AGF implements flatbuffers.IUnpackableObject<AGFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGF;
    static getRootAsAGF(bb: flatbuffers.ByteBuffer, obj?: AGF): AGF;
    static getSizePrefixedRootAsAGF(bb: flatbuffers.ByteBuffer, obj?: AGF): AGF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this field record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Nominal time the field represents, ISO 8601 UTC. For an observation this
     * is the observation time; for a forecast it is the validity time.
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Half-open validity window [VALID_START, VALID_END), ISO 8601 UTC. A
     * field is a sample of a continuous atmosphere and is not valid forever.
     */
    VALID_START(): string | null;
    VALID_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_END(): string | null;
    VALID_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Model initialisation time, ISO 8601 UTC. ABSENT for an observation — an
     * observation has no forecast reference time, and an empty string here is
     * what distinguishes the two cases.
     */
    FORECAST_REFERENCE_TIME(): string | null;
    FORECAST_REFERENCE_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds from FORECAST_REFERENCE_TIME to EPOCH. Meaningful ONLY when
     * FORECAST_REFERENCE_TIME is present; NaN otherwise. It is never inferred
     * to be zero for an observation.
     */
    FORECAST_LEAD_S(): number;
    /**
     * The physical quantity. It does NOT imply units.
     */
    VARIABLE(): agfVariable;
    /**
     * UDUNITS-compatible units of the SCALED physical value. Required: the
     * enum names a quantity, this names its scale, and a field without it is
     * uninterpretable.
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Category meanings for a categorical VARIABLE such as CLOUD_MASK, indexed
     * by raw value. Empty for continuous variables.
     */
    CATEGORY_LABELS(index: number): string;
    CATEGORY_LABELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    categoryLabelsLength(): number;
    /**
     * Element type of the packed array.
     */
    DTYPE(): agfDType;
    /**
     * Sentinel marking a cell with no data, in RAW units, before scaling.
     */
    FILL_VALUE(): number;
    /**
     * physical = raw * SCALE_FACTOR + ADD_OFFSET, applied only to non-fill
     * cells. Defaults are the identity packing.
     */
    SCALE_FACTOR(): number;
    ADD_OFFSET(): number;
    /**
     * Number of columns and rows. The payload holds exactly NX * NY elements.
     */
    NX(): number;
    NY(): number;
    /**
     * Order of the NY rows within the payload.
     */
    ROW_ORDER(): agfRowOrder;
    /**
     * Projection family of the grid.
     */
    PROJECTION(): agfProjection;
    /**
     * Explicit, authoritative georeferencing parameters.
     */
    PROJECTION_PARAMETERS(obj?: AGFProjectionParameters): AGFProjectionParameters | null;
    /**
     * Codec applied to the packed array.
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
     * MUST be absent when PAYLOAD is present, and MUST be used when the
     * post-codec size exceeds 1048576 bytes.
     */
    PAYLOAD_CID(): string | null;
    PAYLOAD_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 of the post-codec byte string. REQUIRED in BOTH
     * payload modes — it is what proves an inline and a fetched payload are
     * the same object.
     */
    PAYLOAD_SHA256(): string;
    PAYLOAD_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Length of the post-codec byte string, bytes. REQUIRED in BOTH payload
     * modes; it is what makes the 1 MiB inline rule checkable without
     * decoding. Zero is never valid for a populated field.
     */
    PAYLOAD_SIZE_BYTES(): bigint;
    /**
     * Where the field came from. Required.
     */
    PROVENANCE(obj?: AGFProvenance): AGFProvenance | null;
    /**
     * Free-text description of the field, not of its vendor.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAGF(builder: flatbuffers.Builder): void;
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
    static addPayloadCodec(builder: flatbuffers.Builder, PAYLOAD_CODEC: agfPayloadCodec): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static createPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayloadCid(builder: flatbuffers.Builder, PAYLOAD_CIDOffset: flatbuffers.Offset): void;
    static addPayloadSha256(builder: flatbuffers.Builder, PAYLOAD_SHA256Offset: flatbuffers.Offset): void;
    static addPayloadSizeBytes(builder: flatbuffers.Builder, PAYLOAD_SIZE_BYTES: bigint): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAGF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAGFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAGFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): AGFT;
    unpackTo(_o: AGFT): void;
}
export declare class AGFT implements flatbuffers.IGeneratedObject {
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
    PAYLOAD_CODEC: agfPayloadCodec;
    PAYLOAD: (number)[];
    PAYLOAD_CID: string | Uint8Array | null;
    PAYLOAD_SHA256: string | Uint8Array | null;
    PAYLOAD_SIZE_BYTES: bigint;
    PROVENANCE: AGFProvenanceT | null;
    DESCRIPTION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, VALID_START?: string | Uint8Array | null, VALID_END?: string | Uint8Array | null, FORECAST_REFERENCE_TIME?: string | Uint8Array | null, FORECAST_LEAD_S?: number, VARIABLE?: agfVariable, UNITS?: string | Uint8Array | null, CATEGORY_LABELS?: (string)[], DTYPE?: agfDType, FILL_VALUE?: number, SCALE_FACTOR?: number, ADD_OFFSET?: number, NX?: number, NY?: number, ROW_ORDER?: agfRowOrder, PROJECTION?: agfProjection, PROJECTION_PARAMETERS?: AGFProjectionParametersT | null, PAYLOAD_CODEC?: agfPayloadCodec, PAYLOAD?: (number)[], PAYLOAD_CID?: string | Uint8Array | null, PAYLOAD_SHA256?: string | Uint8Array | null, PAYLOAD_SIZE_BYTES?: bigint, PROVENANCE?: AGFProvenanceT | null, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGF.d.ts.map