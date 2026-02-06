import * as flatbuffers from 'flatbuffers';
/**
 * Reentry Ground Impact Prediction
 */
export declare class reentryImpact implements flatbuffers.IUnpackableObject<reentryImpactT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): reentryImpact;
    static getRootAsreentryImpact(bb: flatbuffers.ByteBuffer, obj?: reentryImpact): reentryImpact;
    static getSizePrefixedRootAsreentryImpact(bb: flatbuffers.ByteBuffer, obj?: reentryImpact): reentryImpact;
    /**
     * Predicted impact epoch (ISO 8601)
     */
    IMPACT_EPOCH(): string | null;
    IMPACT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch uncertainty window in seconds
     */
    EPOCH_UNCERTAINTY(): number;
    /**
     * Impact latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Impact longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Along-track uncertainty in km
     */
    ALONG_TRACK_UNC(): number;
    /**
     * Cross-track uncertainty in km
     */
    CROSS_TRACK_UNC(): number;
    /**
     * Impact probability (0.0-1.0)
     */
    IMPACT_PROBABILITY(): number;
    static startreentryImpact(builder: flatbuffers.Builder): void;
    static addImpactEpoch(builder: flatbuffers.Builder, IMPACT_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochUncertainty(builder: flatbuffers.Builder, EPOCH_UNCERTAINTY: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAlongTrackUnc(builder: flatbuffers.Builder, ALONG_TRACK_UNC: number): void;
    static addCrossTrackUnc(builder: flatbuffers.Builder, CROSS_TRACK_UNC: number): void;
    static addImpactProbability(builder: flatbuffers.Builder, IMPACT_PROBABILITY: number): void;
    static endreentryImpact(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createreentryImpact(builder: flatbuffers.Builder, IMPACT_EPOCHOffset: flatbuffers.Offset, EPOCH_UNCERTAINTY: number, LATITUDE: number, LONGITUDE: number, ALONG_TRACK_UNC: number, CROSS_TRACK_UNC: number, IMPACT_PROBABILITY: number): flatbuffers.Offset;
    unpack(): reentryImpactT;
    unpackTo(_o: reentryImpactT): void;
}
export declare class reentryImpactT implements flatbuffers.IGeneratedObject {
    IMPACT_EPOCH: string | Uint8Array | null;
    EPOCH_UNCERTAINTY: number;
    LATITUDE: number;
    LONGITUDE: number;
    ALONG_TRACK_UNC: number;
    CROSS_TRACK_UNC: number;
    IMPACT_PROBABILITY: number;
    constructor(IMPACT_EPOCH?: string | Uint8Array | null, EPOCH_UNCERTAINTY?: number, LATITUDE?: number, LONGITUDE?: number, ALONG_TRACK_UNC?: number, CROSS_TRACK_UNC?: number, IMPACT_PROBABILITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=reentryImpact.d.ts.map