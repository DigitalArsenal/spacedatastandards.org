import * as flatbuffers from 'flatbuffers';
import { ERMNoiseFit, ERMNoiseFitT } from './ERMNoiseFit.js';
import { ERMProcessNoise, ERMProcessNoiseT } from './ERMProcessNoise.js';
/**
 * Initial covariance and process noise of one regime.
 */
export declare class ERMPropagatorRegime implements flatbuffers.IUnpackableObject<ERMPropagatorRegimeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPropagatorRegime;
    static getRootAsERMPropagatorRegime(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorRegime): ERMPropagatorRegime;
    static getSizePrefixedRootAsERMPropagatorRegime(bb: flatbuffers.ByteBuffer, obj?: ERMPropagatorRegime): ERMPropagatorRegime;
    REGIME_INDEX(): number;
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Samples and those kept after clipping.
     */
    N(): bigint;
    KEPT(): bigint;
    OBJECTS(): number;
    CLIP_K(): number;
    /**
     * Covariance at the element-set epoch, Lower21 RTN (km, km/s); empty =
     * none.
     */
    P0(index: number): number | null;
    p0Length(): number;
    p0Array(): Float64Array | null;
    PROCESS_NOISE(obj?: ERMProcessNoise): ERMProcessNoise | null;
    FIT(obj?: ERMNoiseFit): ERMNoiseFit | null;
    static startERMPropagatorRegime(builder: flatbuffers.Builder): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addKept(builder: flatbuffers.Builder, KEPT: bigint): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addClipK(builder: flatbuffers.Builder, CLIP_K: number): void;
    static addP0(builder: flatbuffers.Builder, P0Offset: flatbuffers.Offset): void;
    static createP0Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createP0Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startP0Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addProcessNoise(builder: flatbuffers.Builder, PROCESS_NOISEOffset: flatbuffers.Offset): void;
    static addFit(builder: flatbuffers.Builder, FITOffset: flatbuffers.Offset): void;
    static endERMPropagatorRegime(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMPropagatorRegimeT;
    unpackTo(_o: ERMPropagatorRegimeT): void;
}
export declare class ERMPropagatorRegimeT implements flatbuffers.IGeneratedObject {
    REGIME_INDEX: number;
    REGIME: string | Uint8Array | null;
    N: bigint;
    KEPT: bigint;
    OBJECTS: number;
    CLIP_K: number;
    P0: (number)[];
    PROCESS_NOISE: ERMProcessNoiseT | null;
    FIT: ERMNoiseFitT | null;
    constructor(REGIME_INDEX?: number, REGIME?: string | Uint8Array | null, N?: bigint, KEPT?: bigint, OBJECTS?: number, CLIP_K?: number, P0?: (number)[], PROCESS_NOISE?: ERMProcessNoiseT | null, FIT?: ERMNoiseFitT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPropagatorRegime.d.ts.map