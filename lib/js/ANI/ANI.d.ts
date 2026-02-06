import * as flatbuffers from 'flatbuffers';
import { analyticType } from './analyticType.js';
/**
 * Analytic Imagery Product
 */
export declare class ANI implements flatbuffers.IUnpackableObject<ANIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ANI;
    static getRootAsANI(bb: flatbuffers.ByteBuffer, obj?: ANI): ANI;
    static getSizePrefixedRootAsANI(bb: flatbuffers.ByteBuffer, obj?: ANI): ANI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to source imagery (e.g., SKI, GDI, EOO)
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source imagery type
     */
    SOURCE_TYPE(): string | null;
    SOURCE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Analytic product type
     */
    ANALYTIC_TYPE(): analyticType;
    /**
     * Processing algorithm or pipeline name
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm version
     */
    ALGORITHM_VERSION(): string | null;
    ALGORITHM_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Processing epoch (ISO 8601)
     */
    PROCESSING_TIME(): string | null;
    PROCESSING_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original observation epoch (ISO 8601)
     */
    OBS_TIME(): string | null;
    OBS_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target satellite number (if applicable)
     */
    SAT_NO(): number;
    /**
     * Target object designator
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Center right ascension in degrees
     */
    RA(): number;
    /**
     * Center declination in degrees
     */
    DEC(): number;
    /**
     * Field of view in degrees
     */
    FOV(): number;
    /**
     * Visual magnitude estimate
     */
    VISUAL_MAG(): number;
    /**
     * Magnitude uncertainty
     */
    MAG_UNCERTAINTY(): number;
    /**
     * Detected object count
     */
    OBJECT_COUNT(): number;
    /**
     * Classification labels
     */
    LABELS(index: number): string;
    LABELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    labelsLength(): number;
    /**
     * Classification confidence scores (0.0-1.0)
     */
    CONFIDENCE(index: number): number | null;
    confidenceLength(): number;
    confidenceArray(): Float64Array | null;
    /**
     * Feature vector or extracted parameters
     */
    FEATURES(index: number): number | null;
    featuresLength(): number;
    featuresArray(): Float64Array | null;
    /**
     * Quality score (0.0-1.0)
     */
    QUALITY(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startANI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addSourceType(builder: flatbuffers.Builder, SOURCE_TYPEOffset: flatbuffers.Offset): void;
    static addAnalyticType(builder: flatbuffers.Builder, ANALYTIC_TYPE: analyticType): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addAlgorithmVersion(builder: flatbuffers.Builder, ALGORITHM_VERSIONOffset: flatbuffers.Offset): void;
    static addProcessingTime(builder: flatbuffers.Builder, PROCESSING_TIMEOffset: flatbuffers.Offset): void;
    static addObsTime(builder: flatbuffers.Builder, OBS_TIMEOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDec(builder: flatbuffers.Builder, DEC: number): void;
    static addFov(builder: flatbuffers.Builder, FOV: number): void;
    static addVisualMag(builder: flatbuffers.Builder, VISUAL_MAG: number): void;
    static addMagUncertainty(builder: flatbuffers.Builder, MAG_UNCERTAINTY: number): void;
    static addObjectCount(builder: flatbuffers.Builder, OBJECT_COUNT: number): void;
    static addLabels(builder: flatbuffers.Builder, LABELSOffset: flatbuffers.Offset): void;
    static createLabelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLabelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCEOffset: flatbuffers.Offset): void;
    static createConfidenceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConfidenceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConfidenceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFeatures(builder: flatbuffers.Builder, FEATURESOffset: flatbuffers.Offset): void;
    static createFeaturesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFeaturesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endANI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishANIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedANIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createANI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SOURCE_IDOffset: flatbuffers.Offset, SOURCE_TYPEOffset: flatbuffers.Offset, ANALYTIC_TYPE: analyticType, ALGORITHMOffset: flatbuffers.Offset, ALGORITHM_VERSIONOffset: flatbuffers.Offset, PROCESSING_TIMEOffset: flatbuffers.Offset, OBS_TIMEOffset: flatbuffers.Offset, SAT_NO: number, OBJECT_DESIGNATOROffset: flatbuffers.Offset, RA: number, DEC: number, FOV: number, VISUAL_MAG: number, MAG_UNCERTAINTY: number, OBJECT_COUNT: number, LABELSOffset: flatbuffers.Offset, CONFIDENCEOffset: flatbuffers.Offset, FEATURESOffset: flatbuffers.Offset, QUALITY: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ANIT;
    unpackTo(_o: ANIT): void;
}
export declare class ANIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SOURCE_ID: string | Uint8Array | null;
    SOURCE_TYPE: string | Uint8Array | null;
    ANALYTIC_TYPE: analyticType;
    ALGORITHM: string | Uint8Array | null;
    ALGORITHM_VERSION: string | Uint8Array | null;
    PROCESSING_TIME: string | Uint8Array | null;
    OBS_TIME: string | Uint8Array | null;
    SAT_NO: number;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    RA: number;
    DEC: number;
    FOV: number;
    VISUAL_MAG: number;
    MAG_UNCERTAINTY: number;
    OBJECT_COUNT: number;
    LABELS: (string)[];
    CONFIDENCE: (number)[];
    FEATURES: (number)[];
    QUALITY: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SOURCE_ID?: string | Uint8Array | null, SOURCE_TYPE?: string | Uint8Array | null, ANALYTIC_TYPE?: analyticType, ALGORITHM?: string | Uint8Array | null, ALGORITHM_VERSION?: string | Uint8Array | null, PROCESSING_TIME?: string | Uint8Array | null, OBS_TIME?: string | Uint8Array | null, SAT_NO?: number, OBJECT_DESIGNATOR?: string | Uint8Array | null, RA?: number, DEC?: number, FOV?: number, VISUAL_MAG?: number, MAG_UNCERTAINTY?: number, OBJECT_COUNT?: number, LABELS?: (string)[], CONFIDENCE?: (number)[], FEATURES?: (number)[], QUALITY?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ANI.d.ts.map