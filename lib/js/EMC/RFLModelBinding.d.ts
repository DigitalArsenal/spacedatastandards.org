import * as flatbuffers from 'flatbuffers';
import { RFLModelParameter, RFLModelParameterT } from './RFLModelParameter.js';
import { rflBudgetTerm } from './rflBudgetTerm.js';
/**
 * Which model produced one term of the budget. A loss term without a model
 * binding is an unattributed number: rain attenuation from two different
 * recommendations differs by decibels, and a consumer must be able to tell
 * which one it is holding.
 */
export declare class RFLModelBinding implements flatbuffers.IUnpackableObject<RFLModelBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLModelBinding;
    static getRootAsRFLModelBinding(bb: flatbuffers.ByteBuffer, obj?: RFLModelBinding): RFLModelBinding;
    static getSizePrefixedRootAsRFLModelBinding(bb: flatbuffers.ByteBuffer, obj?: RFLModelBinding): RFLModelBinding;
    /**
     * The budget term this binding produced.
     */
    TERM(): rflBudgetTerm;
    /**
     * Model or recommendation identifier as its publisher states it (e.g. an
     * ITU-R recommendation number with its revision).
     */
    MODEL_NAME(): string;
    MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` of the module that evaluated it.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content hash of the exact artifact that produced the values.
     */
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARAMETERS(index: number, obj?: RFLModelParameter): RFLModelParameter | null;
    parametersLength(): number;
    static startRFLModelBinding(builder: flatbuffers.Builder): void;
    static addTerm(builder: flatbuffers.Builder, TERM: rflBudgetTerm): void;
    static addModelName(builder: flatbuffers.Builder, MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFLModelBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLModelBinding(builder: flatbuffers.Builder, TERM: rflBudgetTerm, MODEL_NAMEOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, PARAMETERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFLModelBindingT;
    unpackTo(_o: RFLModelBindingT): void;
}
export declare class RFLModelBindingT implements flatbuffers.IGeneratedObject {
    TERM: rflBudgetTerm;
    MODEL_NAME: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    PARAMETERS: (RFLModelParameterT)[];
    constructor(TERM?: rflBudgetTerm, MODEL_NAME?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, PARAMETERS?: (RFLModelParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLModelBinding.d.ts.map