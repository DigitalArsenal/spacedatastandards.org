import * as flatbuffers from 'flatbuffers';
import { PCEParameterValue, PCEParameterValueT } from './PCEParameterValue.js';
/**
 * The evaluated parameters at ONE epoch.
 */
export declare class PCEParameterSample implements flatbuffers.IUnpackableObject<PCEParameterSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEParameterSample;
    static getRootAsPCEParameterSample(bb: flatbuffers.ByteBuffer, obj?: PCEParameterSample): PCEParameterSample;
    static getSizePrefixedRootAsPCEParameterSample(bb: flatbuffers.ByteBuffer, obj?: PCEParameterSample): PCEParameterSample;
    /**
     * Epoch of this sample, ISO 8601.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of EPOCH, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PARAMETER_VALUES(index: number, obj?: PCEParameterValue): PCEParameterValue | null;
    parameterValuesLength(): number;
    static startPCEParameterSample(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addParameterValues(builder: flatbuffers.Builder, PARAMETER_VALUESOffset: flatbuffers.Offset): void;
    static createParameterValuesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParameterValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPCEParameterSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEParameterSample(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset, PARAMETER_VALUESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEParameterSampleT;
    unpackTo(_o: PCEParameterSampleT): void;
}
export declare class PCEParameterSampleT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    PARAMETER_VALUES: (PCEParameterValueT)[];
    constructor(EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, PARAMETER_VALUES?: (PCEParameterValueT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEParameterSample.d.ts.map