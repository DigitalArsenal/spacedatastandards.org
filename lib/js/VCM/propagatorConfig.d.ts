import * as flatbuffers from 'flatbuffers';
import { propagatorType } from './propagatorType.js';
import { zonalHarmonic } from './zonalHarmonic.js';
/**
 * Propagator configuration structure to describe propagation settings
 */
export declare class propagatorConfig implements flatbuffers.IUnpackableObject<propagatorConfigT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): propagatorConfig;
    static getRootAspropagatorConfig(bb: flatbuffers.ByteBuffer, obj?: propagatorConfig): propagatorConfig;
    static getSizePrefixedRootAspropagatorConfig(bb: flatbuffers.ByteBuffer, obj?: propagatorConfig): propagatorConfig;
    PROPAGATOR_NAME(): string | null;
    PROPAGATOR_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_TYPE(): propagatorType;
    FORCE_MODELS(index: number): string;
    FORCE_MODELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    forceModelsLength(): number;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_STEP(): number;
    ZONAL_HARMONIC_TERMS(index: number): zonalHarmonic | null;
    zonalHarmonicTermsLength(): number;
    zonalHarmonicTermsArray(): Int8Array | null;
    static startpropagatorConfig(builder: flatbuffers.Builder): void;
    static addPropagatorName(builder: flatbuffers.Builder, PROPAGATOR_NAMEOffset: flatbuffers.Offset): void;
    static addPropagatorType(builder: flatbuffers.Builder, PROPAGATOR_TYPE: propagatorType): void;
    static addForceModels(builder: flatbuffers.Builder, FORCE_MODELSOffset: flatbuffers.Offset): void;
    static createForceModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startForceModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeStep(builder: flatbuffers.Builder, TIME_STEP: number): void;
    static addZonalHarmonicTerms(builder: flatbuffers.Builder, ZONAL_HARMONIC_TERMSOffset: flatbuffers.Offset): void;
    static createZonalHarmonicTermsVector(builder: flatbuffers.Builder, data: zonalHarmonic[]): flatbuffers.Offset;
    static startZonalHarmonicTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endpropagatorConfig(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createpropagatorConfig(builder: flatbuffers.Builder, PROPAGATOR_NAMEOffset: flatbuffers.Offset, PROPAGATOR_TYPE: propagatorType, FORCE_MODELSOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, TIME_STEP: number, ZONAL_HARMONIC_TERMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): propagatorConfigT;
    unpackTo(_o: propagatorConfigT): void;
}
export declare class propagatorConfigT implements flatbuffers.IGeneratedObject {
    PROPAGATOR_NAME: string | Uint8Array | null;
    PROPAGATOR_TYPE: propagatorType;
    FORCE_MODELS: (string)[];
    EPOCH: string | Uint8Array | null;
    TIME_STEP: number;
    ZONAL_HARMONIC_TERMS: (zonalHarmonic)[];
    constructor(PROPAGATOR_NAME?: string | Uint8Array | null, PROPAGATOR_TYPE?: propagatorType, FORCE_MODELS?: (string)[], EPOCH?: string | Uint8Array | null, TIME_STEP?: number, ZONAL_HARMONIC_TERMS?: (zonalHarmonic)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=propagatorConfig.d.ts.map