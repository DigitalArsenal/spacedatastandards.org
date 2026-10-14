import * as flatbuffers from 'flatbuffers';
/**
 * A residual sample, km.
 */
export declare class ERMResidualSample implements flatbuffers.IUnpackableObject<ERMResidualSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMResidualSample;
    static getRootAsERMResidualSample(bb: flatbuffers.ByteBuffer, obj?: ERMResidualSample): ERMResidualSample;
    static getSizePrefixedRootAsERMResidualSample(bb: flatbuffers.ByteBuffer, obj?: ERMResidualSample): ERMResidualSample;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    R_KM(): number;
    T_KM(): number;
    N_KM(): number;
    static startERMResidualSample(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRKm(builder: flatbuffers.Builder, R_KM: number): void;
    static addTKm(builder: flatbuffers.Builder, T_KM: number): void;
    static addNKm(builder: flatbuffers.Builder, N_KM: number): void;
    static endERMResidualSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMResidualSample(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, R_KM: number, T_KM: number, N_KM: number): flatbuffers.Offset;
    unpack(): ERMResidualSampleT;
    unpackTo(_o: ERMResidualSampleT): void;
}
export declare class ERMResidualSampleT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    R_KM: number;
    T_KM: number;
    N_KM: number;
    constructor(EPOCH?: string | Uint8Array | null, R_KM?: number, T_KM?: number, N_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMResidualSample.d.ts.map