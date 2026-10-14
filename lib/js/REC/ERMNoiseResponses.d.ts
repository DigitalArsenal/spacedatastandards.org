import * as flatbuffers from 'flatbuffers';
import { ERMNoiseResponse, ERMNoiseResponseT } from './ERMNoiseResponse.js';
import { ERMStmSample, ERMStmSampleT } from './ERMStmSample.js';
/**
 * Process-noise responses: request and result.
 */
export declare class ERMNoiseResponses implements flatbuffers.IUnpackableObject<ERMNoiseResponsesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMNoiseResponses;
    static getRootAsERMNoiseResponses(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseResponses): ERMNoiseResponses;
    static getSizePrefixedRootAsERMNoiseResponses(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseResponses): ERMNoiseResponses;
    START(): string | null;
    START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DISCRETIZATION_S(): number;
    SAMPLES(index: number, obj?: ERMStmSample): ERMStmSample | null;
    samplesLength(): number;
    /**
     * Target epochs.
     */
    TARGET_EPOCHS(index: number): string;
    TARGET_EPOCHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    targetEpochsLength(): number;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RESULTS(index: number, obj?: ERMNoiseResponse): ERMNoiseResponse | null;
    resultsLength(): number;
    static startERMNoiseResponses(builder: flatbuffers.Builder): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addDiscretizationS(builder: flatbuffers.Builder, DISCRETIZATION_S: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetEpochs(builder: flatbuffers.Builder, TARGET_EPOCHSOffset: flatbuffers.Offset): void;
    static createTargetEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTargetEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMNoiseResponses(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMNoiseResponses(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset, DISCRETIZATION_S: number, SAMPLESOffset: flatbuffers.Offset, TARGET_EPOCHSOffset: flatbuffers.Offset, UNITSOffset: flatbuffers.Offset, RESULTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMNoiseResponsesT;
    unpackTo(_o: ERMNoiseResponsesT): void;
}
export declare class ERMNoiseResponsesT implements flatbuffers.IGeneratedObject {
    START: string | Uint8Array | null;
    DISCRETIZATION_S: number;
    SAMPLES: (ERMStmSampleT)[];
    TARGET_EPOCHS: (string)[];
    UNITS: string | Uint8Array | null;
    RESULTS: (ERMNoiseResponseT)[];
    constructor(START?: string | Uint8Array | null, DISCRETIZATION_S?: number, SAMPLES?: (ERMStmSampleT)[], TARGET_EPOCHS?: (string)[], UNITS?: string | Uint8Array | null, RESULTS?: (ERMNoiseResponseT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMNoiseResponses.d.ts.map