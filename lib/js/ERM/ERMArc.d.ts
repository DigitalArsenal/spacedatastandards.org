import * as flatbuffers from 'flatbuffers';
import { ERMArcTarget, ERMArcTargetT } from './ERMArcTarget.js';
import { ERMProcessNoise, ERMProcessNoiseT } from './ERMProcessNoise.js';
/**
 * One propagation arc from an element set.
 */
export declare class ERMArc implements flatbuffers.IUnpackableObject<ERMArcT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArc;
    static getRootAsERMArc(bb: flatbuffers.ByteBuffer, obj?: ERMArc): ERMArc;
    static getSizePrefixedRootAsERMArc(bb: flatbuffers.ByteBuffer, obj?: ERMArc): ERMArc;
    ARC(): number;
    NORAD_CAT_ID(): number;
    /**
     * Element-set epoch, as the record gives it.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REGIME_INDEX(): number;
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGETS(index: number, obj?: ERMArcTarget): ERMArcTarget | null;
    targetsLength(): number;
    /**
     * Initial covariance, 6x6 row-major GCRF, SI (36 values); empty = none.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    PROCESS_NOISE(obj?: ERMProcessNoise): ERMProcessNoise | null;
    static startERMArc(builder: flatbuffers.Builder): void;
    static addArc(builder: flatbuffers.Builder, ARC: number): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addTargets(builder: flatbuffers.Builder, TARGETSOffset: flatbuffers.Offset): void;
    static createTargetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTargetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProcessNoise(builder: flatbuffers.Builder, PROCESS_NOISEOffset: flatbuffers.Offset): void;
    static endERMArc(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMArcT;
    unpackTo(_o: ERMArcT): void;
}
export declare class ERMArcT implements flatbuffers.IGeneratedObject {
    ARC: number;
    NORAD_CAT_ID: number;
    EPOCH: string | Uint8Array | null;
    REGIME_INDEX: number;
    REGIME: string | Uint8Array | null;
    TARGETS: (ERMArcTargetT)[];
    COVARIANCE: (number)[];
    PROCESS_NOISE: ERMProcessNoiseT | null;
    constructor(ARC?: number, NORAD_CAT_ID?: number, EPOCH?: string | Uint8Array | null, REGIME_INDEX?: number, REGIME?: string | Uint8Array | null, TARGETS?: (ERMArcTargetT)[], COVARIANCE?: (number)[], PROCESS_NOISE?: ERMProcessNoiseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArc.d.ts.map