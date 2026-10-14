import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
/**
 * The covariance of one row of a product.
 */
export declare class ERMRowLabel implements flatbuffers.IUnpackableObject<ERMRowLabelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRowLabel;
    static getRootAsERMRowLabel(bb: flatbuffers.ByteBuffer, obj?: ERMRowLabel): ERMRowLabel;
    static getSizePrefixedRootAsERMRowLabel(bb: flatbuffers.ByteBuffer, obj?: ERMRowLabel): ERMRowLabel;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The label (rule, model, regime, age, horizon, verdict numbers).
     */
    REALISM(obj?: CVR): CVR | null;
    /**
     * Method, e.g. "operator-supplied", "fit-formal-scaled", "e14-s3-kc".
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BASIS(): string | null;
    BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AGE_INDEX(): number;
    /**
     * The cell's decision or "formal covariance, before scaling".
     */
    VERDICT(): string | null;
    VERDICT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMRowLabel(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRealism(builder: flatbuffers.Builder, REALISMOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addBasis(builder: flatbuffers.Builder, BASISOffset: flatbuffers.Offset): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addVerdict(builder: flatbuffers.Builder, VERDICTOffset: flatbuffers.Offset): void;
    static endERMRowLabel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMRowLabelT;
    unpackTo(_o: ERMRowLabelT): void;
}
export declare class ERMRowLabelT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    REALISM: CVRT | null;
    METHOD: string | Uint8Array | null;
    BASIS: string | Uint8Array | null;
    AGE_INDEX: number;
    VERDICT: string | Uint8Array | null;
    constructor(EPOCH?: string | Uint8Array | null, REALISM?: CVRT | null, METHOD?: string | Uint8Array | null, BASIS?: string | Uint8Array | null, AGE_INDEX?: number, VERDICT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRowLabel.d.ts.map