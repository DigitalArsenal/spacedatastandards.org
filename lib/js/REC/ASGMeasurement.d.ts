import * as flatbuffers from 'flatbuffers';
import { asgMeasurementKind } from './asgMeasurementKind.js';
/**
 * One measured quantity of an observation.
 */
export declare class ASGMeasurement implements flatbuffers.IUnpackableObject<ASGMeasurementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGMeasurement;
    static getRootAsASGMeasurement(bb: flatbuffers.ByteBuffer, obj?: ASGMeasurement): ASGMeasurement;
    static getSizePrefixedRootAsASGMeasurement(bb: flatbuffers.ByteBuffer, obj?: ASGMeasurement): ASGMeasurement;
    KIND(): asgMeasurementKind;
    /**
     * Measured value: km, km/s or degrees by KIND.
     */
    VALUE(): number;
    /**
     * One-sigma uncertainty, same unit as VALUE; positive.
     */
    SIGMA(): number;
    /**
     * The field of the source record the value came from, e.g. "RANGE",
     * "RANGE_RATE", "DOPPLER", "RA", "DECLINATION", "AZIMUTH", "ELEVATION".
     */
    SOURCE_FIELD(): string | null;
    SOURCE_FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startASGMeasurement(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: asgMeasurementKind): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addSigma(builder: flatbuffers.Builder, SIGMA: number): void;
    static addSourceField(builder: flatbuffers.Builder, SOURCE_FIELDOffset: flatbuffers.Offset): void;
    static endASGMeasurement(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGMeasurement(builder: flatbuffers.Builder, KIND: asgMeasurementKind, VALUE: number, SIGMA: number, SOURCE_FIELDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGMeasurementT;
    unpackTo(_o: ASGMeasurementT): void;
}
export declare class ASGMeasurementT implements flatbuffers.IGeneratedObject {
    KIND: asgMeasurementKind;
    VALUE: number;
    SIGMA: number;
    SOURCE_FIELD: string | Uint8Array | null;
    constructor(KIND?: asgMeasurementKind, VALUE?: number, SIGMA?: number, SOURCE_FIELD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGMeasurement.d.ts.map