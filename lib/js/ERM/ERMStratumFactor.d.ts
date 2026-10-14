import * as flatbuffers from 'flatbuffers';
/**
 * A factor applied to one stratum (or a status for it).
 */
export declare class ERMStratumFactor implements flatbuffers.IUnpackableObject<ERMStratumFactorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStratumFactor;
    static getRootAsERMStratumFactor(bb: flatbuffers.ByteBuffer, obj?: ERMStratumFactor): ERMStratumFactor;
    static getSizePrefixedRootAsERMStratumFactor(bb: flatbuffers.ByteBuffer, obj?: ERMStratumFactor): ERMStratumFactor;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    /**
     * Variance factor, > 0; NaN = none.
     */
    FACTOR(): number;
    /**
     * Status string of the stratum, e.g. "CALIBRATED"; empty = none.
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMStratumFactor(builder: flatbuffers.Builder): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addFactor(builder: flatbuffers.Builder, FACTOR: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static endERMStratumFactor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMStratumFactor(builder: flatbuffers.Builder, REGIME_INDEX: number, AGE_INDEX: number, FACTOR: number, STATUSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMStratumFactorT;
    unpackTo(_o: ERMStratumFactorT): void;
}
export declare class ERMStratumFactorT implements flatbuffers.IGeneratedObject {
    REGIME_INDEX: number;
    AGE_INDEX: number;
    FACTOR: number;
    STATUS: string | Uint8Array | null;
    constructor(REGIME_INDEX?: number, AGE_INDEX?: number, FACTOR?: number, STATUS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStratumFactor.d.ts.map