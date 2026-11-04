import * as flatbuffers from 'flatbuffers';
import { prwQualityEvidence } from './prwQualityEvidence.js';
export declare class PRWFitQuality implements flatbuffers.IUnpackableObject<PRWFitQualityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWFitQuality;
    static getRootAsPRWFitQuality(bb: flatbuffers.ByteBuffer, obj?: PRWFitQuality): PRWFitQuality;
    static getSizePrefixedRootAsPRWFitQuality(bb: flatbuffers.ByteBuffer, obj?: PRWFitQuality): PRWFitQuality;
    EVIDENCE_KIND(): prwQualityEvidence;
    /**
     * SI metres and metres/second; absent when UNMEASURED.
     */
    MAXIMUM_POSITION_ERROR_M(): number;
    /**
     * True when MAXIMUM_POSITION_ERROR_M carries a value; false means absent.
     */
    HAS_MAXIMUM_POSITION_ERROR_M(): boolean;
    MAXIMUM_VELOCITY_ERROR_M_S(): number;
    /**
     * True when MAXIMUM_VELOCITY_ERROR_M_S carries a value; false means absent.
     */
    HAS_MAXIMUM_VELOCITY_ERROR_M_S(): boolean;
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REFERENCE_CONTENT_ID(): string | null;
    REFERENCE_CONTENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWFitQuality(builder: flatbuffers.Builder): void;
    static addEvidenceKind(builder: flatbuffers.Builder, EVIDENCE_KIND: prwQualityEvidence): void;
    static addMaximumPositionErrorM(builder: flatbuffers.Builder, MAXIMUM_POSITION_ERROR_M: number): void;
    static addHasMaximumPositionErrorM(builder: flatbuffers.Builder, HAS_MAXIMUM_POSITION_ERROR_M: boolean): void;
    static addMaximumVelocityErrorMS(builder: flatbuffers.Builder, MAXIMUM_VELOCITY_ERROR_M_S: number): void;
    static addHasMaximumVelocityErrorMS(builder: flatbuffers.Builder, HAS_MAXIMUM_VELOCITY_ERROR_M_S: boolean): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addReferenceContentId(builder: flatbuffers.Builder, REFERENCE_CONTENT_IDOffset: flatbuffers.Offset): void;
    static endPRWFitQuality(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWFitQuality(builder: flatbuffers.Builder, EVIDENCE_KIND: prwQualityEvidence, MAXIMUM_POSITION_ERROR_M: number, HAS_MAXIMUM_POSITION_ERROR_M: boolean, MAXIMUM_VELOCITY_ERROR_M_S: number, HAS_MAXIMUM_VELOCITY_ERROR_M_S: boolean, METHODOffset: flatbuffers.Offset, REFERENCE_CONTENT_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWFitQualityT;
    unpackTo(_o: PRWFitQualityT): void;
}
export declare class PRWFitQualityT implements flatbuffers.IGeneratedObject {
    EVIDENCE_KIND: prwQualityEvidence;
    MAXIMUM_POSITION_ERROR_M: number;
    HAS_MAXIMUM_POSITION_ERROR_M: boolean;
    MAXIMUM_VELOCITY_ERROR_M_S: number;
    HAS_MAXIMUM_VELOCITY_ERROR_M_S: boolean;
    METHOD: string | Uint8Array | null;
    REFERENCE_CONTENT_ID: string | Uint8Array | null;
    constructor(EVIDENCE_KIND?: prwQualityEvidence, MAXIMUM_POSITION_ERROR_M?: number, HAS_MAXIMUM_POSITION_ERROR_M?: boolean, MAXIMUM_VELOCITY_ERROR_M_S?: number, HAS_MAXIMUM_VELOCITY_ERROR_M_S?: boolean, METHOD?: string | Uint8Array | null, REFERENCE_CONTENT_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWFitQuality.d.ts.map