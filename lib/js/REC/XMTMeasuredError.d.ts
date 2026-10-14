import * as flatbuffers from 'flatbuffers';
/**
 * Measured error of one source's product kind in one regime and horizon.
 */
export declare class XMTMeasuredError implements flatbuffers.IUnpackableObject<XMTMeasuredErrorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTMeasuredError;
    static getRootAsXMTMeasuredError(bb: flatbuffers.ByteBuffer, obj?: XMTMeasuredError): XMTMeasuredError;
    static getSizePrefixedRootAsXMTMeasuredError(bb: flatbuffers.ByteBuffer, obj?: XMTMeasuredError): XMTMeasuredError;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Product kind, e.g. "sgp4", "sgp4xp" (the mean element theory).
     */
    PRODUCT(): string | null;
    PRODUCT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit regime as the error model names it.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Prediction horizon, days.
     */
    HORIZON_DAYS(): number;
    /**
     * Median 3-D position error, km.
     */
    MEDIAN_3D_KM(): number;
    /**
     * Samples behind the median.
     */
    SAMPLES(): number;
    static startXMTMeasuredError(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addProduct(builder: flatbuffers.Builder, PRODUCTOffset: flatbuffers.Offset): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addHorizonDays(builder: flatbuffers.Builder, HORIZON_DAYS: number): void;
    static addMedian3DKm(builder: flatbuffers.Builder, MEDIAN_3D_KM: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static endXMTMeasuredError(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTMeasuredError(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, PRODUCTOffset: flatbuffers.Offset, REGIMEOffset: flatbuffers.Offset, HORIZON_DAYS: number, MEDIAN_3D_KM: number, SAMPLES: number): flatbuffers.Offset;
    unpack(): XMTMeasuredErrorT;
    unpackTo(_o: XMTMeasuredErrorT): void;
}
export declare class XMTMeasuredErrorT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    PRODUCT: string | Uint8Array | null;
    REGIME: string | Uint8Array | null;
    HORIZON_DAYS: number;
    MEDIAN_3D_KM: number;
    SAMPLES: number;
    constructor(SOURCE_ID?: string | Uint8Array | null, PRODUCT?: string | Uint8Array | null, REGIME?: string | Uint8Array | null, HORIZON_DAYS?: number, MEDIAN_3D_KM?: number, SAMPLES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTMeasuredError.d.ts.map