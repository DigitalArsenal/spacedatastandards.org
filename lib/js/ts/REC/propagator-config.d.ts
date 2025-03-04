import * as flatbuffers from 'flatbuffers';
import { propagatorType } from './propagator-type.js';
import { zonalHarmonic } from './zonal-harmonic.js';
/**
 * Propagator configuration structure to describe propagation settings
 */
export declare class propagatorConfig implements flatbuffers.IUnpackableObject<propagatorConfigT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): propagatorConfig;
    static getRootAspropagatorConfig(bb: flatbuffers.ByteBuffer, obj?: propagatorConfig): propagatorConfig;
    static getSizePrefixedRootAspropagatorConfig(bb: flatbuffers.ByteBuffer, obj?: propagatorConfig): propagatorConfig;
    propagatorName(): string | null;
    propagatorName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    propagatorType(): propagatorType;
    forceModels(index: number): string;
    forceModels(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    forceModelsLength(): number;
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    timeStep(): number;
    zonalHarmonicTerms(index: number): zonalHarmonic | null;
    zonalHarmonicTermsLength(): number;
    zonalHarmonicTermsArray(): Int8Array | null;
    static startpropagatorConfig(builder: flatbuffers.Builder): void;
    static addPropagatorName(builder: flatbuffers.Builder, propagatorNameOffset: flatbuffers.Offset): void;
    static addPropagatorType(builder: flatbuffers.Builder, propagatorType: propagatorType): void;
    static addForceModels(builder: flatbuffers.Builder, forceModelsOffset: flatbuffers.Offset): void;
    static createForceModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startForceModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addTimeStep(builder: flatbuffers.Builder, timeStep: number): void;
    static addZonalHarmonicTerms(builder: flatbuffers.Builder, zonalHarmonicTermsOffset: flatbuffers.Offset): void;
    static createZonalHarmonicTermsVector(builder: flatbuffers.Builder, data: zonalHarmonic[]): flatbuffers.Offset;
    static startZonalHarmonicTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endpropagatorConfig(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createpropagatorConfig(builder: flatbuffers.Builder, propagatorNameOffset: flatbuffers.Offset, propagatorType: propagatorType, forceModelsOffset: flatbuffers.Offset, epochOffset: flatbuffers.Offset, timeStep: number, zonalHarmonicTermsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): propagatorConfigT;
    unpackTo(_o: propagatorConfigT): void;
}
export declare class propagatorConfigT implements flatbuffers.IGeneratedObject {
    propagatorName: string | Uint8Array | null;
    propagatorType: propagatorType;
    forceModels: (string)[];
    epoch: string | Uint8Array | null;
    timeStep: number;
    zonalHarmonicTerms: (zonalHarmonic)[];
    constructor(propagatorName?: string | Uint8Array | null, propagatorType?: propagatorType, forceModels?: (string)[], epoch?: string | Uint8Array | null, timeStep?: number, zonalHarmonicTerms?: (zonalHarmonic)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=propagator-config.d.ts.map