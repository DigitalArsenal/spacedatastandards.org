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
    uSigma(): number;
    vSigma(): number;
    wSigma(): number;
    udSigma(): number;
    vdSigma(): number;
    wdSigma(): number;
    static startuvwSigmas(builder: flatbuffers.Builder): void;
    static addUSigma(builder: flatbuffers.Builder, uSigma: number): void;
    static addVSigma(builder: flatbuffers.Builder, vSigma: number): void;
    static addWSigma(builder: flatbuffers.Builder, wSigma: number): void;
    static addUdSigma(builder: flatbuffers.Builder, udSigma: number): void;
    static addVdSigma(builder: flatbuffers.Builder, vdSigma: number): void;
    static addWdSigma(builder: flatbuffers.Builder, wdSigma: number): void;
    static enduvwSigmas(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createuvwSigmas(builder: flatbuffers.Builder, uSigma: number, vSigma: number, wSigma: number, udSigma: number, vdSigma: number, wdSigma: number): flatbuffers.Offset;
    unpack(): uvwSigmasT;
    unpackTo(_o: uvwSigmasT): void;
}
export declare class uvwSigmasT implements flatbuffers.IGeneratedObject {
    uSigma: number;
    vSigma: number;
    wSigma: number;
    udSigma: number;
    vdSigma: number;
    wdSigma: number;
    constructor(uSigma?: number, vSigma?: number, wSigma?: number, udSigma?: number, vdSigma?: number, wdSigma?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=uvw-sigmas.d.ts.map