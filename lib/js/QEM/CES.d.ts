import * as flatbuffers from 'flatbuffers';
import { CESObjectVector, CESObjectVectorT } from './CESObjectVector.js';
import { cesNormalizationKind } from './cesNormalizationKind.js';
import { cesPoolingKind } from './cesPoolingKind.js';
import { cesSimilarityKind } from './cesSimilarityKind.js';
import { cesVectorEncoding } from './cesVectorEncoding.js';
/**
 * Catalog Embedding Shard.
 *
 * One CES publishes the dense semantic-search vector table for one dataset
 * update: one row per catalog object, alongside that update's $OMM shard and
 * $DPM manifest (DPMAsset.ASSET_KIND = EMBEDDING_SHARD). Vectors are
 * L2-normalised at the encoder's output; similarity between two rows, or
 * between a row and a query vector produced by a paired $QEM, is dot
 * product (equivalent to cosine similarity for unit-norm vectors).
 *
 * A consumer MUST compare MODEL_ID, MODEL_VERSION, MODEL_WEIGHTS_SHA256,
 * POOLING_METHOD and TEMPLATE_VERSION against a QEM record before trusting
 * cross-encoding similarity between a query vector and CES rows; a mismatch
 * on any one field means the two vector spaces are not comparable.
 */
export declare class CES implements flatbuffers.IUnpackableObject<CEST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CES;
    static getRootAsCES(bb: flatbuffers.ByteBuffer, obj?: CES): CES;
    static getSizePrefixedRootAsCES(bb: flatbuffers.ByteBuffer, obj?: CES): CES;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Joins to DPM.DATASET_ID for the publication this shard belongs to.
     */
    DATASET_ID(): string | null;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Joins to DPM.UPDATE_ID for the specific update this shard was computed
     * against.
     */
    UPDATE_ID(): string | null;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fixed embedding dimensionality shared by every row (e.g. 384).
     */
    DIMENSIONS(): number;
    /**
     * Row element encoding used across ROWS.
     */
    ENCODING(): cesVectorEncoding;
    /**
     * Row-vector normalization applied before quantization.
     */
    NORMALIZATION(): cesNormalizationKind;
    /**
     * Similarity function rows are intended to be compared with.
     */
    SIMILARITY(): cesSimilarityKind;
    /**
     * Encoder model identifier/name.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoder model version.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the encoder weights, lowercase hex. Same convention as
     * DPMAsset.BYTE_SHA256.
     */
    MODEL_WEIGHTS_SHA256(): string | null;
    MODEL_WEIGHTS_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sentence/document pooling method the encoder used.
     */
    POOLING_METHOD(): cesPoolingKind;
    /**
     * Version of the text template documents were rendered from before
     * encoding. Must match a QEM's TEMPLATE_VERSION for compatible retrieval.
     */
    TEMPLATE_VERSION(): string | null;
    TEMPLATE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * One row per catalog object.
     */
    ROWS(index: number, obj?: CESObjectVector): CESObjectVector | null;
    rowsLength(): number;
    static startCES(builder: flatbuffers.Builder): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addDimensions(builder: flatbuffers.Builder, DIMENSIONS: number): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: cesVectorEncoding): void;
    static addNormalization(builder: flatbuffers.Builder, NORMALIZATION: cesNormalizationKind): void;
    static addSimilarity(builder: flatbuffers.Builder, SIMILARITY: cesSimilarityKind): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addModelWeightsSha256(builder: flatbuffers.Builder, MODEL_WEIGHTS_SHA256Offset: flatbuffers.Offset): void;
    static addPoolingMethod(builder: flatbuffers.Builder, POOLING_METHOD: cesPoolingKind): void;
    static addTemplateVersion(builder: flatbuffers.Builder, TEMPLATE_VERSIONOffset: flatbuffers.Offset): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCES(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCESBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCESBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCES(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset, UPDATE_IDOffset: flatbuffers.Offset, DIMENSIONS: number, ENCODING: cesVectorEncoding, NORMALIZATION: cesNormalizationKind, SIMILARITY: cesSimilarityKind, MODEL_IDOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, MODEL_WEIGHTS_SHA256Offset: flatbuffers.Offset, POOLING_METHOD: cesPoolingKind, TEMPLATE_VERSIONOffset: flatbuffers.Offset, ROWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CEST;
    unpackTo(_o: CEST): void;
}
export declare class CEST implements flatbuffers.IGeneratedObject {
    DATASET_ID: string | Uint8Array | null;
    UPDATE_ID: string | Uint8Array | null;
    DIMENSIONS: number;
    ENCODING: cesVectorEncoding;
    NORMALIZATION: cesNormalizationKind;
    SIMILARITY: cesSimilarityKind;
    MODEL_ID: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    MODEL_WEIGHTS_SHA256: string | Uint8Array | null;
    POOLING_METHOD: cesPoolingKind;
    TEMPLATE_VERSION: string | Uint8Array | null;
    ROWS: (CESObjectVectorT)[];
    constructor(DATASET_ID?: string | Uint8Array | null, UPDATE_ID?: string | Uint8Array | null, DIMENSIONS?: number, ENCODING?: cesVectorEncoding, NORMALIZATION?: cesNormalizationKind, SIMILARITY?: cesSimilarityKind, MODEL_ID?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, MODEL_WEIGHTS_SHA256?: string | Uint8Array | null, POOLING_METHOD?: cesPoolingKind, TEMPLATE_VERSION?: string | Uint8Array | null, ROWS?: (CESObjectVectorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CES.d.ts.map