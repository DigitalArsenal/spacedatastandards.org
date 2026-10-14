import * as flatbuffers from 'flatbuffers';
import { PRWPropagationSample, PRWPropagationSampleT } from './PRWPropagationSample.js';
import { prwDensityTreatment } from './prwDensityTreatment.js';
import { prwDerivativeTechnique } from './prwDerivativeTechnique.js';
import { prwDynamicParameter } from './prwDynamicParameter.js';
export declare class PRWExecutionResult implements flatbuffers.IUnpackableObject<PRWExecutionResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWExecutionResult;
    static getRootAsPRWExecutionResult(bb: flatbuffers.ByteBuffer, obj?: PRWExecutionResult): PRWExecutionResult;
    static getSizePrefixedRootAsPRWExecutionResult(bb: flatbuffers.ByteBuffer, obj?: PRWExecutionResult): PRWExecutionResult;
    FINAL_SAMPLE(obj?: PRWPropagationSample): PRWPropagationSample | null;
    SAMPLES(index: number, obj?: PRWPropagationSample): PRWPropagationSample | null;
    samplesLength(): number;
    ELAPSED_SECONDS(): number;
    EPHEMERIS_SOURCE(): string;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    STM_TECHNIQUE(): prwDerivativeTechnique;
    DENSITY_TREATMENT(): prwDensityTreatment;
    /**
     * The parameters the samples' STM and COVARIANCE carry after the state.
     */
    DYNAMIC_PARAMETERS(index: number): prwDynamicParameter | null;
    dynamicParametersLength(): number;
    dynamicParametersArray(): Uint8Array | null;
    static startPRWExecutionResult(builder: flatbuffers.Builder): void;
    static addFinalSample(builder: flatbuffers.Builder, FINAL_SAMPLEOffset: flatbuffers.Offset): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addStmTechnique(builder: flatbuffers.Builder, STM_TECHNIQUE: prwDerivativeTechnique): void;
    static addDensityTreatment(builder: flatbuffers.Builder, DENSITY_TREATMENT: prwDensityTreatment): void;
    static addDynamicParameters(builder: flatbuffers.Builder, DYNAMIC_PARAMETERSOffset: flatbuffers.Offset): void;
    static createDynamicParametersVector(builder: flatbuffers.Builder, data: prwDynamicParameter[]): flatbuffers.Offset;
    static startDynamicParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWExecutionResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWExecutionResult(builder: flatbuffers.Builder, FINAL_SAMPLEOffset: flatbuffers.Offset, SAMPLESOffset: flatbuffers.Offset, ELAPSED_SECONDS: number, EPHEMERIS_SOURCEOffset: flatbuffers.Offset, STM_TECHNIQUE: prwDerivativeTechnique, DENSITY_TREATMENT: prwDensityTreatment, DYNAMIC_PARAMETERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWExecutionResultT;
    unpackTo(_o: PRWExecutionResultT): void;
}
export declare class PRWExecutionResultT implements flatbuffers.IGeneratedObject {
    FINAL_SAMPLE: PRWPropagationSampleT | null;
    SAMPLES: (PRWPropagationSampleT)[];
    ELAPSED_SECONDS: number;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    STM_TECHNIQUE: prwDerivativeTechnique;
    DENSITY_TREATMENT: prwDensityTreatment;
    DYNAMIC_PARAMETERS: (prwDynamicParameter)[];
    constructor(FINAL_SAMPLE?: PRWPropagationSampleT | null, SAMPLES?: (PRWPropagationSampleT)[], ELAPSED_SECONDS?: number, EPHEMERIS_SOURCE?: string | Uint8Array | null, STM_TECHNIQUE?: prwDerivativeTechnique, DENSITY_TREATMENT?: prwDensityTreatment, DYNAMIC_PARAMETERS?: (prwDynamicParameter)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWExecutionResult.d.ts.map