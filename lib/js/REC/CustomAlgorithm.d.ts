import * as flatbuffers from 'flatbuffers';
import { AlgorithmInput, AlgorithmInputT } from './AlgorithmInput.js';
import { AlgorithmOutput, AlgorithmOutputT } from './AlgorithmOutput.js';
import { AlgorithmTrigger, AlgorithmTriggerT } from './AlgorithmTrigger.js';
/**
 * Custom algorithm definition
 */
export declare class CustomAlgorithm implements flatbuffers.IUnpackableObject<CustomAlgorithmT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CustomAlgorithm;
    static getRootAsCustomAlgorithm(bb: flatbuffers.ByteBuffer, obj?: CustomAlgorithm): CustomAlgorithm;
    static getSizePrefixedRootAsCustomAlgorithm(bb: flatbuffers.ByteBuffer, obj?: CustomAlgorithm): CustomAlgorithm;
    /**
     * Algorithm name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Programming language
     */
    LANGUAGE(): string | null;
    LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm text/code
     */
    ALGORITHM_TEXT(): string | null;
    ALGORITHM_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * External algorithm reference
     */
    EXTERNAL_ALGORITHM_REF(): string | null;
    EXTERNAL_ALGORITHM_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Input bindings
     */
    INPUTS(index: number, obj?: AlgorithmInput): AlgorithmInput | null;
    inputsLength(): number;
    /**
     * Output bindings
     */
    OUTPUTS(index: number, obj?: AlgorithmOutput): AlgorithmOutput | null;
    outputsLength(): number;
    /**
     * Trigger conditions
     */
    TRIGGERS(index: number, obj?: AlgorithmTrigger): AlgorithmTrigger | null;
    triggersLength(): number;
    static startCustomAlgorithm(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLanguage(builder: flatbuffers.Builder, LANGUAGEOffset: flatbuffers.Offset): void;
    static addAlgorithmText(builder: flatbuffers.Builder, ALGORITHM_TEXTOffset: flatbuffers.Offset): void;
    static addExternalAlgorithmRef(builder: flatbuffers.Builder, EXTERNAL_ALGORITHM_REFOffset: flatbuffers.Offset): void;
    static addInputs(builder: flatbuffers.Builder, INPUTSOffset: flatbuffers.Offset): void;
    static createInputsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInputsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutputs(builder: flatbuffers.Builder, OUTPUTSOffset: flatbuffers.Offset): void;
    static createOutputsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOutputsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTriggers(builder: flatbuffers.Builder, TRIGGERSOffset: flatbuffers.Offset): void;
    static createTriggersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTriggersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCustomAlgorithm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCustomAlgorithm(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, LONG_DESCRIPTIONOffset: flatbuffers.Offset, LANGUAGEOffset: flatbuffers.Offset, ALGORITHM_TEXTOffset: flatbuffers.Offset, EXTERNAL_ALGORITHM_REFOffset: flatbuffers.Offset, INPUTSOffset: flatbuffers.Offset, OUTPUTSOffset: flatbuffers.Offset, TRIGGERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CustomAlgorithmT;
    unpackTo(_o: CustomAlgorithmT): void;
}
export declare class CustomAlgorithmT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    LANGUAGE: string | Uint8Array | null;
    ALGORITHM_TEXT: string | Uint8Array | null;
    EXTERNAL_ALGORITHM_REF: string | Uint8Array | null;
    INPUTS: (AlgorithmInputT)[];
    OUTPUTS: (AlgorithmOutputT)[];
    TRIGGERS: (AlgorithmTriggerT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, LANGUAGE?: string | Uint8Array | null, ALGORITHM_TEXT?: string | Uint8Array | null, EXTERNAL_ALGORITHM_REF?: string | Uint8Array | null, INPUTS?: (AlgorithmInputT)[], OUTPUTS?: (AlgorithmOutputT)[], TRIGGERS?: (AlgorithmTriggerT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CustomAlgorithm.d.ts.map