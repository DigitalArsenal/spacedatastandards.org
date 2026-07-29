import * as flatbuffers from 'flatbuffers';
import { QEMTokenVector, QEMTokenVectorT } from './QEMTokenVector.js';
import { cesNormalizationKind } from './cesNormalizationKind.js';
import { cesPoolingKind } from './cesPoolingKind.js';
import { cesVectorEncoding } from './cesVectorEncoding.js';
/**
 * Query Encoder Model.
 *
 * One QEM publishes the pruned static token-embedding table a lightweight
 * client (e.g. a browser) loads to encode a search query into the same
 * vector space a paired $CES shard's rows live in, without shipping a full
 * transformer. A consumer pools the rows of the query's tokens (per
 * POOLING_METHOD) into a query vector, then dot-products it against
 * CES.ROWS.
 *
 * A QEM is compatible with a CES only when MODEL_ID, MODEL_VERSION,
 * MODEL_WEIGHTS_SHA256, POOLING_METHOD and TEMPLATE_VERSION all match; a
 * mismatch on any one means the two vector spaces are not comparable.
 */
export declare class QEM implements flatbuffers.IUnpackableObject<QEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QEM;
    static getRootAsQEM(bb: flatbuffers.ByteBuffer, obj?: QEM): QEM;
    static getSizePrefixedRootAsQEM(bb: flatbuffers.ByteBuffer, obj?: QEM): QEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Encoder model identifier/name. Compared verbatim against CES.MODEL_ID.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoder model version. Compared verbatim against CES.MODEL_VERSION.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the encoder weights, lowercase hex. Same convention as
     * DPMAsset.BYTE_SHA256. Compared verbatim against CES.MODEL_WEIGHTS_SHA256.
     */
    MODEL_WEIGHTS_SHA256(): string | null;
    MODEL_WEIGHTS_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sentence/document pooling method the encoder uses. Compared verbatim
     * against CES.POOLING_METHOD.
     */
    POOLING_METHOD(): cesPoolingKind;
    /**
     * Version of the text template documents were rendered from before
     * encoding. Compared verbatim against CES.TEMPLATE_VERSION.
     */
    TEMPLATE_VERSION(): string | null;
    TEMPLATE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fixed embedding dimensionality; must equal the paired CES.DIMENSIONS.
     */
    DIMENSIONS(): number;
    /**
     * Row element encoding used across TOKENS.
     */
    ENCODING(): cesVectorEncoding;
    /**
     * Row-vector normalization applied before quantization.
     */
    NORMALIZATION(): cesNormalizationKind;
    /**
     * Number of tokens in the pruned vocabulary.
     */
    VOCAB_SIZE(): number;
    /**
     * One row per pruned vocabulary token.
     */
    TOKENS(index: number, obj?: QEMTokenVector): QEMTokenVector | null;
    tokensLength(): number;
    static startQEM(builder: flatbuffers.Builder): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addModelWeightsSha256(builder: flatbuffers.Builder, MODEL_WEIGHTS_SHA256Offset: flatbuffers.Offset): void;
    static addPoolingMethod(builder: flatbuffers.Builder, POOLING_METHOD: cesPoolingKind): void;
    static addTemplateVersion(builder: flatbuffers.Builder, TEMPLATE_VERSIONOffset: flatbuffers.Offset): void;
    static addDimensions(builder: flatbuffers.Builder, DIMENSIONS: number): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: cesVectorEncoding): void;
    static addNormalization(builder: flatbuffers.Builder, NORMALIZATION: cesNormalizationKind): void;
    static addVocabSize(builder: flatbuffers.Builder, VOCAB_SIZE: number): void;
    static addTokens(builder: flatbuffers.Builder, TOKENSOffset: flatbuffers.Offset): void;
    static createTokensVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTokensVector(builder: flatbuffers.Builder, numElems: number): void;
    static endQEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishQEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedQEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createQEM(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, MODEL_WEIGHTS_SHA256Offset: flatbuffers.Offset, POOLING_METHOD: cesPoolingKind, TEMPLATE_VERSIONOffset: flatbuffers.Offset, DIMENSIONS: number, ENCODING: cesVectorEncoding, NORMALIZATION: cesNormalizationKind, VOCAB_SIZE: number, TOKENSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QEMT;
    unpackTo(_o: QEMT): void;
}
export declare class QEMT implements flatbuffers.IGeneratedObject {
    MODEL_ID: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    MODEL_WEIGHTS_SHA256: string | Uint8Array | null;
    POOLING_METHOD: cesPoolingKind;
    TEMPLATE_VERSION: string | Uint8Array | null;
    DIMENSIONS: number;
    ENCODING: cesVectorEncoding;
    NORMALIZATION: cesNormalizationKind;
    VOCAB_SIZE: number;
    TOKENS: (QEMTokenVectorT)[];
    constructor(MODEL_ID?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, MODEL_WEIGHTS_SHA256?: string | Uint8Array | null, POOLING_METHOD?: cesPoolingKind, TEMPLATE_VERSION?: string | Uint8Array | null, DIMENSIONS?: number, ENCODING?: cesVectorEncoding, NORMALIZATION?: cesNormalizationKind, VOCAB_SIZE?: number, TOKENS?: (QEMTokenVectorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QEM.d.ts.map