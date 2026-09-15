import * as flatbuffers from 'flatbuffers';
import { PRWPropagationSample, PRWPropagationSampleT } from './PRWPropagationSample.js';
import { prwDensityTreatment } from './prwDensityTreatment.js';
import { prwDerivativeTechnique } from './prwDerivativeTechnique.js';
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
    static startPRWExecutionResult(builder: flatbuffers.Builder): void;
    static addFinalSample(builder: flatbuffers.Builder, FINAL_SAMPLEOffset: flatbuffers.Offset): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addStmTechnique(builder: flatbuffers.Builder, STM_TECHNIQUE: prwDerivativeTechnique): void;
    static addDensityTreatment(builder: flatbuffers.Builder, DENSITY_TREATMENT: prwDensityTreatment): void;
    static endPRWExecutionResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWExecutionResult(builder: flatbuffers.Builder, FINAL_SAMPLEOffset: flatbuffers.Offset, SAMPLESOffset: flatbuffers.Offset, ELAPSED_SECONDS: number, EPHEMERIS_SOURCEOffset: flatbuffers.Offset, STM_TECHNIQUE: prwDerivativeTechnique, DENSITY_TREATMENT: prwDensityTreatment): flatbuffers.Offset;
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
    constructor(FINAL_SAMPLE?: PRWPropagationSampleT | null, SAMPLES?: (PRWPropagationSampleT)[], ELAPSED_SECONDS?: number, EPHEMERIS_SOURCE?: string | Uint8Array | null, STM_TECHNIQUE?: prwDerivativeTechnique, DENSITY_TREATMENT?: prwDensityTreatment);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWExecutionResult.d.ts.map