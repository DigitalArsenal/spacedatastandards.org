import * as flatbuffers from 'flatbuffers';
import { Parameter, ParameterT } from './Parameter.js';
/**
 * Collection of parameters
 */
export declare class ParameterSet implements flatbuffers.IUnpackableObject<ParameterSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ParameterSet;
    static getRootAsParameterSet(bb: flatbuffers.ByteBuffer, obj?: ParameterSet): ParameterSet;
    static getSizePrefixedRootAsParameterSet(bb: flatbuffers.ByteBuffer, obj?: ParameterSet): ParameterSet;
    /**
     * Parameters
     */
    PARAMETERS(index: number, obj?: Parameter): Parameter | null;
    parametersLength(): number;
    static startParameterSet(builder: flatbuffers.Builder): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endParameterSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createParameterSet(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ParameterSetT;
    unpackTo(_o: ParameterSetT): void;
}
export declare class ParameterSetT implements flatbuffers.IGeneratedObject {
    PARAMETERS: (ParameterT)[];
    constructor(PARAMETERS?: (ParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ParameterSet.d.ts.map