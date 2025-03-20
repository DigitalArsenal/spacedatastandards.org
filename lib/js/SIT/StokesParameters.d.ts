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
    I(): number;
    /**
     * Linear polarization
     */
    Q(): number;
    /**
     * Another linear polarization, orthogonal to Q
     */
    U(): number;
    /**
     * Circular polarization
     */
    V(): number;
    static startStokesParameters(builder: flatbuffers.Builder): void;
    static addI(builder: flatbuffers.Builder, I: number): void;
    static addQ(builder: flatbuffers.Builder, Q: number): void;
    static addU(builder: flatbuffers.Builder, U: number): void;
    static addV(builder: flatbuffers.Builder, V: number): void;
    static endStokesParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStokesParameters(builder: flatbuffers.Builder, I: number, Q: number, U: number, V: number): flatbuffers.Offset;
    unpack(): StokesParametersT;
    unpackTo(_o: StokesParametersT): void;
}
export declare class StokesParametersT implements flatbuffers.IGeneratedObject {
    I: number;
    Q: number;
    U: number;
    V: number;
    constructor(I?: number, Q?: number, U?: number, V?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StokesParameters.d.ts.map