import * as flatbuffers from 'flatbuffers';
/**
 * UVW Sigmas (Covariance matrix in UVW frame)
 */
export declare class uvwSigmas implements flatbuffers.IUnpackableObject<uvwSigmasT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): uvwSigmas;
    static getRootAsuvwSigmas(bb: flatbuffers.ByteBuffer, obj?: uvwSigmas): uvwSigmas;
    static getSizePrefixedRootAsuvwSigmas(bb: flatbuffers.ByteBuffer, obj?: uvwSigmas): uvwSigmas;
    U_SIGMA(): number;
    V_SIGMA(): number;
    W_SIGMA(): number;
    UD_SIGMA(): number;
    VD_SIGMA(): number;
    WD_SIGMA(): number;
    static startuvwSigmas(builder: flatbuffers.Builder): void;
    static addUSigma(builder: flatbuffers.Builder, U_SIGMA: number): void;
    static addVSigma(builder: flatbuffers.Builder, V_SIGMA: number): void;
    static addWSigma(builder: flatbuffers.Builder, W_SIGMA: number): void;
    static addUdSigma(builder: flatbuffers.Builder, UD_SIGMA: number): void;
    static addVdSigma(builder: flatbuffers.Builder, VD_SIGMA: number): void;
    static addWdSigma(builder: flatbuffers.Builder, WD_SIGMA: number): void;
    static enduvwSigmas(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createuvwSigmas(builder: flatbuffers.Builder, U_SIGMA: number, V_SIGMA: number, W_SIGMA: number, UD_SIGMA: number, VD_SIGMA: number, WD_SIGMA: number): flatbuffers.Offset;
    unpack(): uvwSigmasT;
    unpackTo(_o: uvwSigmasT): void;
}
export declare class uvwSigmasT implements flatbuffers.IGeneratedObject {
    U_SIGMA: number;
    V_SIGMA: number;
    W_SIGMA: number;
    UD_SIGMA: number;
    VD_SIGMA: number;
    WD_SIGMA: number;
    constructor(U_SIGMA?: number, V_SIGMA?: number, W_SIGMA?: number, UD_SIGMA?: number, VD_SIGMA?: number, WD_SIGMA?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=uvwSigmas.d.ts.map