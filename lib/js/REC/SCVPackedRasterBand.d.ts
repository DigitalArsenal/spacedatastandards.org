import * as flatbuffers from 'flatbuffers';
import { scvMetricSeriesKind } from './scvMetricSeriesKind.js';
import { scvRasterProductEncoding } from './scvRasterProductEncoding.js';
import { scvRasterProductKind } from './scvRasterProductKind.js';
export declare class SCVPackedRasterBand implements flatbuffers.IUnpackableObject<SCVPackedRasterBandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVPackedRasterBand;
    static getRootAsSCVPackedRasterBand(bb: flatbuffers.ByteBuffer, obj?: SCVPackedRasterBand): SCVPackedRasterBand;
    static getSizePrefixedRootAsSCVPackedRasterBand(bb: flatbuffers.ByteBuffer, obj?: SCVPackedRasterBand): SCVPackedRasterBand;
    PRODUCT_KIND(): scvRasterProductKind;
    METRIC_KIND(): scvMetricSeriesKind;
    ENCODING(): scvRasterProductEncoding;
    COMPONENTS_PER_CELL(): number;
    CELL_COUNT(): number;
    BUCKET_COUNT(): number;
    WORDS_PER_BUCKET(): number;
    MEMORY_REGION_ID(): number;
    MEMORY_RECORD_INDEX(): number;
    FLOAT32_VALUES(index: number): number | null;
    float32ValuesLength(): number;
    float32ValuesArray(): Float32Array | null;
    FLOAT64_VALUES(index: number): number | null;
    float64ValuesLength(): number;
    float64ValuesArray(): Float64Array | null;
    UINT32_VALUES(index: number): number | null;
    uint32ValuesLength(): number;
    uint32ValuesArray(): Uint32Array | null;
    static startSCVPackedRasterBand(builder: flatbuffers.Builder): void;
    static addProductKind(builder: flatbuffers.Builder, PRODUCT_KIND: scvRasterProductKind): void;
    static addMetricKind(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: scvRasterProductEncoding): void;
    static addComponentsPerCell(builder: flatbuffers.Builder, COMPONENTS_PER_CELL: number): void;
    static addCellCount(builder: flatbuffers.Builder, CELL_COUNT: number): void;
    static addBucketCount(builder: flatbuffers.Builder, BUCKET_COUNT: number): void;
    static addWordsPerBucket(builder: flatbuffers.Builder, WORDS_PER_BUCKET: number): void;
    static addMemoryRegionId(builder: flatbuffers.Builder, MEMORY_REGION_ID: number): void;
    static addMemoryRecordIndex(builder: flatbuffers.Builder, MEMORY_RECORD_INDEX: number): void;
    static addFloat32Values(builder: flatbuffers.Builder, FLOAT32_VALUESOffset: flatbuffers.Offset): void;
    static createFloat32ValuesVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFloat32ValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFloat32ValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFloat64Values(builder: flatbuffers.Builder, FLOAT64_VALUESOffset: flatbuffers.Offset): void;
    static createFloat64ValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFloat64ValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFloat64ValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUint32Values(builder: flatbuffers.Builder, UINT32_VALUESOffset: flatbuffers.Offset): void;
    static createUint32ValuesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createUint32ValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUint32ValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCVPackedRasterBand(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVPackedRasterBand(builder: flatbuffers.Builder, PRODUCT_KIND: scvRasterProductKind, METRIC_KIND: scvMetricSeriesKind, ENCODING: scvRasterProductEncoding, COMPONENTS_PER_CELL: number, CELL_COUNT: number, BUCKET_COUNT: number, WORDS_PER_BUCKET: number, MEMORY_REGION_ID: number, MEMORY_RECORD_INDEX: number, FLOAT32_VALUESOffset: flatbuffers.Offset, FLOAT64_VALUESOffset: flatbuffers.Offset, UINT32_VALUESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVPackedRasterBandT;
    unpackTo(_o: SCVPackedRasterBandT): void;
}
export declare class SCVPackedRasterBandT implements flatbuffers.IGeneratedObject {
    PRODUCT_KIND: scvRasterProductKind;
    METRIC_KIND: scvMetricSeriesKind;
    ENCODING: scvRasterProductEncoding;
    COMPONENTS_PER_CELL: number;
    CELL_COUNT: number;
    BUCKET_COUNT: number;
    WORDS_PER_BUCKET: number;
    MEMORY_REGION_ID: number;
    MEMORY_RECORD_INDEX: number;
    FLOAT32_VALUES: (number)[];
    FLOAT64_VALUES: (number)[];
    UINT32_VALUES: (number)[];
    constructor(PRODUCT_KIND?: scvRasterProductKind, METRIC_KIND?: scvMetricSeriesKind, ENCODING?: scvRasterProductEncoding, COMPONENTS_PER_CELL?: number, CELL_COUNT?: number, BUCKET_COUNT?: number, WORDS_PER_BUCKET?: number, MEMORY_REGION_ID?: number, MEMORY_RECORD_INDEX?: number, FLOAT32_VALUES?: (number)[], FLOAT64_VALUES?: (number)[], UINT32_VALUES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVPackedRasterBand.d.ts.map