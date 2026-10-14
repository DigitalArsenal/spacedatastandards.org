import * as flatbuffers from 'flatbuffers';
import { ERMScreeningGeometry, ERMScreeningGeometryT } from './ERMScreeningGeometry.js';
/**
 * Screening scores of one stratum.
 */
export declare class ERMScreeningStratum implements flatbuffers.IUnpackableObject<ERMScreeningStratumT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningStratum;
    static getRootAsERMScreeningStratum(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningStratum): ERMScreeningStratum;
    static getSizePrefixedRootAsERMScreeningStratum(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningStratum): ERMScreeningStratum;
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    AGE_MIN_DAYS(): number;
    AGE_MAX_DAYS(): number;
    OBJECTS(): number;
    SAMPLES(): bigint;
    PAIRS(): number;
    /**
     * RTN position sigmas, km (3 values).
     */
    SIGMA_RTN_KM(index: number): number | null;
    sigmaRtnKmLength(): number;
    sigmaRtnKmArray(): Float64Array | null;
    GEOMETRIES(index: number, obj?: ERMScreeningGeometry): ERMScreeningGeometry | null;
    geometriesLength(): number;
    static startERMScreeningStratum(builder: flatbuffers.Builder): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addAgeMinDays(builder: flatbuffers.Builder, AGE_MIN_DAYS: number): void;
    static addAgeMaxDays(builder: flatbuffers.Builder, AGE_MAX_DAYS: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: bigint): void;
    static addPairs(builder: flatbuffers.Builder, PAIRS: number): void;
    static addSigmaRtnKm(builder: flatbuffers.Builder, SIGMA_RTN_KMOffset: flatbuffers.Offset): void;
    static createSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeometries(builder: flatbuffers.Builder, GEOMETRIESOffset: flatbuffers.Offset): void;
    static createGeometriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGeometriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMScreeningStratum(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningStratum(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset, REGIME_INDEX: number, AGE_INDEX: number, AGE_MIN_DAYS: number, AGE_MAX_DAYS: number, OBJECTS: number, SAMPLES: bigint, PAIRS: number, SIGMA_RTN_KMOffset: flatbuffers.Offset, GEOMETRIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMScreeningStratumT;
    unpackTo(_o: ERMScreeningStratumT): void;
}
export declare class ERMScreeningStratumT implements flatbuffers.IGeneratedObject {
    REGIME: string | Uint8Array | null;
    REGIME_INDEX: number;
    AGE_INDEX: number;
    AGE_MIN_DAYS: number;
    AGE_MAX_DAYS: number;
    OBJECTS: number;
    SAMPLES: bigint;
    PAIRS: number;
    SIGMA_RTN_KM: (number)[];
    GEOMETRIES: (ERMScreeningGeometryT)[];
    constructor(REGIME?: string | Uint8Array | null, REGIME_INDEX?: number, AGE_INDEX?: number, AGE_MIN_DAYS?: number, AGE_MAX_DAYS?: number, OBJECTS?: number, SAMPLES?: bigint, PAIRS?: number, SIGMA_RTN_KM?: (number)[], GEOMETRIES?: (ERMScreeningGeometryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningStratum.d.ts.map