import * as flatbuffers from 'flatbuffers';
import { covarianceOrdering } from './covarianceOrdering.js';
/**
 * One covariance time history of an OCM (Table 6-6): the block's keywords and its
 * data lines as written (a time tag, then the covariance in COV_ORDERING). The
 * single-covariance fields of the OCM above state the first block when it is one
 * line.
 */
export declare class OCMCovarianceBlock implements flatbuffers.IUnpackableObject<OCMCovarianceBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMCovarianceBlock;
    static getRootAsOCMCovarianceBlock(bb: flatbuffers.ByteBuffer, obj?: OCMCovarianceBlock): OCMCovarianceBlock;
    static getSizePrefixedRootAsOCMCovarianceBlock(bb: flatbuffers.ByteBuffer, obj?: OCMCovarianceBlock): OCMCovarianceBlock;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_ID.
     */
    COV_ID(): string | null;
    COV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_PREV_ID.
     */
    COV_PREV_ID(): string | null;
    COV_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_NEXT_ID.
     */
    COV_NEXT_ID(): string | null;
    COV_NEXT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_BASIS: PREDICTED, DETERMINED, EMPIRICAL, SIMULATED or OTHER.
     */
    COV_BASIS(): string | null;
    COV_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_BASIS_ID.
     */
    COV_BASIS_ID(): string | null;
    COV_BASIS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_REF_FRAME.
     */
    COV_REF_FRAME(): string | null;
    COV_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_FRAME_EPOCH.
     */
    COV_FRAME_EPOCH(): string | null;
    COV_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_SCALE_MIN, NaN when not stated.
     */
    COV_SCALE_MIN(): number;
    /**
     * COV_SCALE_MAX, NaN when not stated.
     */
    COV_SCALE_MAX(): number;
    /**
     * COV_CONFIDENCE in percent, NaN when not stated.
     */
    COV_CONFIDENCE(): number;
    /**
     * COV_TYPE as written, for example CARTPV.
     */
    COV_TYPE(): string | null;
    COV_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_ORDERING.
     */
    COV_ORDERING(): covarianceOrdering;
    /**
     * COV_UNITS.
     */
    COV_UNITS(): string | null;
    COV_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The data lines, as written.
     */
    LINES(index: number): string;
    LINES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    linesLength(): number;
    static startOCMCovarianceBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addCovId(builder: flatbuffers.Builder, COV_IDOffset: flatbuffers.Offset): void;
    static addCovPrevId(builder: flatbuffers.Builder, COV_PREV_IDOffset: flatbuffers.Offset): void;
    static addCovNextId(builder: flatbuffers.Builder, COV_NEXT_IDOffset: flatbuffers.Offset): void;
    static addCovBasis(builder: flatbuffers.Builder, COV_BASISOffset: flatbuffers.Offset): void;
    static addCovBasisId(builder: flatbuffers.Builder, COV_BASIS_IDOffset: flatbuffers.Offset): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addCovFrameEpoch(builder: flatbuffers.Builder, COV_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addCovScaleMin(builder: flatbuffers.Builder, COV_SCALE_MIN: number): void;
    static addCovScaleMax(builder: flatbuffers.Builder, COV_SCALE_MAX: number): void;
    static addCovConfidence(builder: flatbuffers.Builder, COV_CONFIDENCE: number): void;
    static addCovType(builder: flatbuffers.Builder, COV_TYPEOffset: flatbuffers.Offset): void;
    static addCovOrdering(builder: flatbuffers.Builder, COV_ORDERING: covarianceOrdering): void;
    static addCovUnits(builder: flatbuffers.Builder, COV_UNITSOffset: flatbuffers.Offset): void;
    static addLines(builder: flatbuffers.Builder, LINESOffset: flatbuffers.Offset): void;
    static createLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCMCovarianceBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMCovarianceBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, COV_IDOffset: flatbuffers.Offset, COV_PREV_IDOffset: flatbuffers.Offset, COV_NEXT_IDOffset: flatbuffers.Offset, COV_BASISOffset: flatbuffers.Offset, COV_BASIS_IDOffset: flatbuffers.Offset, COV_REF_FRAMEOffset: flatbuffers.Offset, COV_FRAME_EPOCHOffset: flatbuffers.Offset, COV_SCALE_MIN: number, COV_SCALE_MAX: number, COV_CONFIDENCE: number, COV_TYPEOffset: flatbuffers.Offset, COV_ORDERING: covarianceOrdering, COV_UNITSOffset: flatbuffers.Offset, LINESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMCovarianceBlockT;
    unpackTo(_o: OCMCovarianceBlockT): void;
}
export declare class OCMCovarianceBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    COV_ID: string | Uint8Array | null;
    COV_PREV_ID: string | Uint8Array | null;
    COV_NEXT_ID: string | Uint8Array | null;
    COV_BASIS: string | Uint8Array | null;
    COV_BASIS_ID: string | Uint8Array | null;
    COV_REF_FRAME: string | Uint8Array | null;
    COV_FRAME_EPOCH: string | Uint8Array | null;
    COV_SCALE_MIN: number;
    COV_SCALE_MAX: number;
    COV_CONFIDENCE: number;
    COV_TYPE: string | Uint8Array | null;
    COV_ORDERING: covarianceOrdering;
    COV_UNITS: string | Uint8Array | null;
    LINES: (string)[];
    constructor(COMMENT?: string | Uint8Array | null, COV_ID?: string | Uint8Array | null, COV_PREV_ID?: string | Uint8Array | null, COV_NEXT_ID?: string | Uint8Array | null, COV_BASIS?: string | Uint8Array | null, COV_BASIS_ID?: string | Uint8Array | null, COV_REF_FRAME?: string | Uint8Array | null, COV_FRAME_EPOCH?: string | Uint8Array | null, COV_SCALE_MIN?: number, COV_SCALE_MAX?: number, COV_CONFIDENCE?: number, COV_TYPE?: string | Uint8Array | null, COV_ORDERING?: covarianceOrdering, COV_UNITS?: string | Uint8Array | null, LINES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMCovarianceBlock.d.ts.map