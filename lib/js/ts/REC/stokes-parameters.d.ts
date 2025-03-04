import * as flatbuffers from 'flatbuffers';
/**
 * Stokes parameters, representing different aspects of polarization
 */
export declare class StokesParameters implements flatbuffers.IUnpackableObject<StokesParametersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StokesParameters;
    static getRootAsStokesParameters(bb: flatbuffers.ByteBuffer, obj?: StokesParameters): StokesParameters;
    static getSizePrefixedRootAsStokesParameters(bb: flatbuffers.ByteBuffer, obj?: StokesParameters): StokesParameters;
    /**
     * Intensity
     */
    i(): number;
    /**
     * Linear polarization
     */
    q(): number;
    /**
     * Another linear polarization, orthogonal to Q
     */
    u(): number;
    /**
     * Circular polarization
     */
    v(): number;
    static startStokesParameters(builder: flatbuffers.Builder): void;
    static addI(builder: flatbuffers.Builder, i: number): void;
    static addQ(builder: flatbuffers.Builder, q: number): void;
    static addU(builder: flatbuffers.Builder, u: number): void;
    static addV(builder: flatbuffers.Builder, v: number): void;
    static endStokesParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStokesParameters(builder: flatbuffers.Builder, i: number, q: number, u: number, v: number): flatbuffers.Offset;
    unpack(): StokesParametersT;
    unpackTo(_o: StokesParametersT): void;
}
export declare class StokesParametersT implements flatbuffers.IGeneratedObject {
    i: number;
    q: number;
    u: number;
    v: number;
    constructor(i?: number, q?: number, u?: number, v?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=stokes-parameters.d.ts.map