import * as flatbuffers from 'flatbuffers';
/**
 * One signed integer coefficient in an intermodulation product. The product
 * frequency is the exact sum of COEFFICIENT * SOURCE_FREQUENCY_HZ terms.
 */
export declare class EMCIntermodulationTerm implements flatbuffers.IUnpackableObject<EMCIntermodulationTermT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EMCIntermodulationTerm;
    static getRootAsEMCIntermodulationTerm(bb: flatbuffers.ByteBuffer, obj?: EMCIntermodulationTerm): EMCIntermodulationTerm;
    static getSizePrefixedRootAsEMCIntermodulationTerm(bb: flatbuffers.ByteBuffer, obj?: EMCIntermodulationTerm): EMCIntermodulationTerm;
    SOURCE_ENDPOINT_ID(): string | null;
    SOURCE_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_FREQUENCY_HZ(): number;
    COEFFICIENT(): number;
    static startEMCIntermodulationTerm(builder: flatbuffers.Builder): void;
    static addSourceEndpointId(builder: flatbuffers.Builder, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addSourceFrequencyHz(builder: flatbuffers.Builder, SOURCE_FREQUENCY_HZ: number): void;
    static addCoefficient(builder: flatbuffers.Builder, COEFFICIENT: number): void;
    static endEMCIntermodulationTerm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEMCIntermodulationTerm(builder: flatbuffers.Builder, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset, SOURCE_FREQUENCY_HZ: number, COEFFICIENT: number): flatbuffers.Offset;
    unpack(): EMCIntermodulationTermT;
    unpackTo(_o: EMCIntermodulationTermT): void;
}
export declare class EMCIntermodulationTermT implements flatbuffers.IGeneratedObject {
    SOURCE_ENDPOINT_ID: string | Uint8Array | null;
    SOURCE_FREQUENCY_HZ: number;
    COEFFICIENT: number;
    constructor(SOURCE_ENDPOINT_ID?: string | Uint8Array | null, SOURCE_FREQUENCY_HZ?: number, COEFFICIENT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EMCIntermodulationTerm.d.ts.map