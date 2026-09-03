import * as flatbuffers from 'flatbuffers';
import { WXFGrid, WXFGridT } from './WXFGrid.js';
import { wxfLevelKind } from './wxfLevelKind.js';
import { wxfLicenseClass } from './wxfLicenseClass.js';
import { wxfMemberKind } from './wxfMemberKind.js';
import { wxfModelClass } from './wxfModelClass.js';
import { wxfTemporalKind } from './wxfTemporalKind.js';
import { wxfValuesEncoding } from './wxfValuesEncoding.js';
import { wxfVariable } from './wxfVariable.js';
/**
 * Weather Forecast Field - One variable, level, member and valid time on a
 * regular grid.
 */
export declare class WXF implements flatbuffers.IUnpackableObject<WXFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WXF;
    static getRootAsWXF(bb: flatbuffers.ByteBuffer, obj?: WXF): WXF;
    static getSizePrefixedRootAsWXF(bb: flatbuffers.ByteBuffer, obj?: WXF): WXF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of the whole field this record belongs to; equal
     * across all tiles of one (producer, init, member, variable, level, lead).
     */
    FIELD_ID(): string;
    FIELD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Class of the producing model.
     */
    MODEL_CLASS(): wxfModelClass;
    /**
     * Producer-defined model identifier.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer-defined model version.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initialisation (analysis) time of the run, Unix milliseconds UTC.
     */
    INIT_TIME_MS(): bigint;
    /**
     * Forecast lead from INIT_TIME_MS, hours.
     */
    LEAD_HOURS(): number;
    /**
     * Time the field is valid at, Unix milliseconds UTC
     * (INIT_TIME_MS + LEAD_HOURS * 3.6e6).
     */
    VALID_TIME_MS(): bigint;
    /**
     * Maximum lead the run was integrated to, hours (e.g. 360 for a synoptic
     * cycle, 48 for an interim cycle).
     */
    HORIZON_HOURS(): number;
    /**
     * Ensemble realisation or statistic the field represents.
     */
    MEMBER_KIND(): wxfMemberKind;
    /**
     * Zero-based member index when MEMBER_KIND is Member.
     */
    MEMBER_INDEX(): number;
    /**
     * Number of members in the ensemble the run produced.
     */
    ENSEMBLE_SIZE(): number;
    /**
     * Percentile rank in [0, 100] when MEMBER_KIND is Percentile.
     */
    PERCENTILE(): number;
    /**
     * Threshold in UNITS when MEMBER_KIND is a probability kind.
     */
    THRESHOLD_VALUE(): number;
    /**
     * Variable carried by the field.
     */
    VARIABLE(): wxfVariable;
    /**
     * Producer's native variable name (always set; authoritative when
     * VARIABLE is Unspecified).
     */
    VARIABLE_NAME(): string | null;
    VARIABLE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of every cell value, UCUM or CF style (e.g. "K", "m s-1", "Pa",
     * "1").
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vertical coordinate kind.
     */
    LEVEL_KIND(): wxfLevelKind;
    /**
     * Vertical coordinate value in the unit fixed by LEVEL_KIND.
     */
    LEVEL_VALUE(): number;
    /**
     * Temporal character of each cell value.
     */
    TEMPORAL_KIND(): wxfTemporalKind;
    /**
     * Accumulation or averaging window ending at VALID_TIME_MS, hours; 0 for
     * Instantaneous.
     */
    ACCUMULATION_HOURS(): number;
    /**
     * Grid geometry of this record's samples (of this tile when tiled).
     */
    GRID(obj?: WXFGrid): WXFGrid | null;
    /**
     * Zero-based tile index within FIELD_ID; 0 for an untiled field.
     */
    TILE_INDEX(): number;
    /**
     * Number of tiles FIELD_ID was split into; 1 for an untiled field.
     */
    TILE_COUNT(): number;
    /**
     * Where the samples live.
     */
    VALUES_ENCODING(): wxfValuesEncoding;
    /**
     * Inline samples, GRID.NLAT * GRID.NLON float32 cells in row-major order;
     * NaN marks a missing cell. Present only when VALUES_ENCODING is
     * InlineFloat32 and the cell count is at most 1,048,576.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float32Array | null;
    /**
     * Content identifier of the sample chunk when VALUES_ENCODING is
     * ContentAddressedChunk.
     */
    CHUNK_CID(): string | null;
    CHUNK_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Element type of the chunk (e.g. "float32", "float16").
     */
    CHUNK_DTYPE(): string | null;
    CHUNK_DTYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Codec chain applied to the chunk, outermost last (e.g. "bytes",
     * "zstd").
     */
    CHUNK_CODECS(index: number): string;
    CHUNK_CODECS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    chunkCodecsLength(): number;
    /**
     * Encoded chunk length in bytes.
     */
    CHUNK_BYTE_LENGTH(): bigint;
    /**
     * Minimum sample over the field (after decoding); statistics for display
     * scaling without touching the chunk.
     */
    VALUE_MIN(): number;
    /**
     * Maximum sample over the field (after decoding).
     */
    VALUE_MAX(): number;
    /**
     * Number of cells with a missing value.
     */
    MISSING_COUNT(): number;
    /**
     * Upstream publisher the field was retrieved from, as a host name or
     * stable identifier.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable dataset identifier within the origin (e.g. a bucket, collection
     * or table name).
     */
    DATASET_ID(): string | null;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Upstream URL or object path the field was retrieved from.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds UTC when the field was retrieved from the origin.
     */
    RETRIEVED_AT(): bigint;
    /**
     * Licence class applicable at RETRIEVED_AT.
     */
    LICENSE_CLASS(): wxfLicenseClass;
    /**
     * URL of the licence or terms the field is offered under.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publisher asks for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer identifier of the node that ingested and published this record.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startWXF(builder: flatbuffers.Builder): void;
    static addFieldId(builder: flatbuffers.Builder, FIELD_IDOffset: flatbuffers.Offset): void;
    static addModelClass(builder: flatbuffers.Builder, MODEL_CLASS: wxfModelClass): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addInitTimeMs(builder: flatbuffers.Builder, INIT_TIME_MS: bigint): void;
    static addLeadHours(builder: flatbuffers.Builder, LEAD_HOURS: number): void;
    static addValidTimeMs(builder: flatbuffers.Builder, VALID_TIME_MS: bigint): void;
    static addHorizonHours(builder: flatbuffers.Builder, HORIZON_HOURS: number): void;
    static addMemberKind(builder: flatbuffers.Builder, MEMBER_KIND: wxfMemberKind): void;
    static addMemberIndex(builder: flatbuffers.Builder, MEMBER_INDEX: number): void;
    static addEnsembleSize(builder: flatbuffers.Builder, ENSEMBLE_SIZE: number): void;
    static addPercentile(builder: flatbuffers.Builder, PERCENTILE: number): void;
    static addThresholdValue(builder: flatbuffers.Builder, THRESHOLD_VALUE: number): void;
    static addVariable(builder: flatbuffers.Builder, VARIABLE: wxfVariable): void;
    static addVariableName(builder: flatbuffers.Builder, VARIABLE_NAMEOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addLevelKind(builder: flatbuffers.Builder, LEVEL_KIND: wxfLevelKind): void;
    static addLevelValue(builder: flatbuffers.Builder, LEVEL_VALUE: number): void;
    static addTemporalKind(builder: flatbuffers.Builder, TEMPORAL_KIND: wxfTemporalKind): void;
    static addAccumulationHours(builder: flatbuffers.Builder, ACCUMULATION_HOURS: number): void;
    static addGrid(builder: flatbuffers.Builder, GRIDOffset: flatbuffers.Offset): void;
    static addTileIndex(builder: flatbuffers.Builder, TILE_INDEX: number): void;
    static addTileCount(builder: flatbuffers.Builder, TILE_COUNT: number): void;
    static addValuesEncoding(builder: flatbuffers.Builder, VALUES_ENCODING: wxfValuesEncoding): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChunkCid(builder: flatbuffers.Builder, CHUNK_CIDOffset: flatbuffers.Offset): void;
    static addChunkDtype(builder: flatbuffers.Builder, CHUNK_DTYPEOffset: flatbuffers.Offset): void;
    static addChunkCodecs(builder: flatbuffers.Builder, CHUNK_CODECSOffset: flatbuffers.Offset): void;
    static createChunkCodecsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChunkCodecsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChunkByteLength(builder: flatbuffers.Builder, CHUNK_BYTE_LENGTH: bigint): void;
    static addValueMin(builder: flatbuffers.Builder, VALUE_MIN: number): void;
    static addValueMax(builder: flatbuffers.Builder, VALUE_MAX: number): void;
    static addMissingCount(builder: flatbuffers.Builder, MISSING_COUNT: number): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: wxfLicenseClass): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static endWXF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishWXFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedWXFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): WXFT;
    unpackTo(_o: WXFT): void;
}
export declare class WXFT implements flatbuffers.IGeneratedObject {
    FIELD_ID: string | Uint8Array | null;
    MODEL_CLASS: wxfModelClass;
    MODEL_ID: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    INIT_TIME_MS: bigint;
    LEAD_HOURS: number;
    VALID_TIME_MS: bigint;
    HORIZON_HOURS: number;
    MEMBER_KIND: wxfMemberKind;
    MEMBER_INDEX: number;
    ENSEMBLE_SIZE: number;
    PERCENTILE: number;
    THRESHOLD_VALUE: number;
    VARIABLE: wxfVariable;
    VARIABLE_NAME: string | Uint8Array | null;
    UNITS: string | Uint8Array | null;
    LEVEL_KIND: wxfLevelKind;
    LEVEL_VALUE: number;
    TEMPORAL_KIND: wxfTemporalKind;
    ACCUMULATION_HOURS: number;
    GRID: WXFGridT | null;
    TILE_INDEX: number;
    TILE_COUNT: number;
    VALUES_ENCODING: wxfValuesEncoding;
    VALUES: (number)[];
    CHUNK_CID: string | Uint8Array | null;
    CHUNK_DTYPE: string | Uint8Array | null;
    CHUNK_CODECS: (string)[];
    CHUNK_BYTE_LENGTH: bigint;
    VALUE_MIN: number;
    VALUE_MAX: number;
    MISSING_COUNT: number;
    ORIGIN_ID: string | Uint8Array | null;
    DATASET_ID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    RETRIEVED_AT: bigint;
    LICENSE_CLASS: wxfLicenseClass;
    LICENSE_URL: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    PRODUCER_PEER_ID: string | Uint8Array | null;
    constructor(FIELD_ID?: string | Uint8Array | null, MODEL_CLASS?: wxfModelClass, MODEL_ID?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, INIT_TIME_MS?: bigint, LEAD_HOURS?: number, VALID_TIME_MS?: bigint, HORIZON_HOURS?: number, MEMBER_KIND?: wxfMemberKind, MEMBER_INDEX?: number, ENSEMBLE_SIZE?: number, PERCENTILE?: number, THRESHOLD_VALUE?: number, VARIABLE?: wxfVariable, VARIABLE_NAME?: string | Uint8Array | null, UNITS?: string | Uint8Array | null, LEVEL_KIND?: wxfLevelKind, LEVEL_VALUE?: number, TEMPORAL_KIND?: wxfTemporalKind, ACCUMULATION_HOURS?: number, GRID?: WXFGridT | null, TILE_INDEX?: number, TILE_COUNT?: number, VALUES_ENCODING?: wxfValuesEncoding, VALUES?: (number)[], CHUNK_CID?: string | Uint8Array | null, CHUNK_DTYPE?: string | Uint8Array | null, CHUNK_CODECS?: (string)[], CHUNK_BYTE_LENGTH?: bigint, VALUE_MIN?: number, VALUE_MAX?: number, MISSING_COUNT?: number, ORIGIN_ID?: string | Uint8Array | null, DATASET_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, RETRIEVED_AT?: bigint, LICENSE_CLASS?: wxfLicenseClass, LICENSE_URL?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, PRODUCER_PEER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WXF.d.ts.map