import * as flatbuffers from 'flatbuffers';
/**
 * A factor by regime and horizon.
 */
export declare class ERMHorizonFactor implements flatbuffers.IUnpackableObject<ERMHorizonFactorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMHorizonFactor;
    static getRootAsERMHorizonFactor(bb: flatbuffers.ByteBuffer, obj?: ERMHorizonFactor): ERMHorizonFactor;
    static getSizePrefixedRootAsERMHorizonFactor(bb: flatbuffers.ByteBuffer, obj?: ERMHorizonFactor): ERMHorizonFactor;
    /**
     * Regime ID; empty = any regime.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Horizon range, days, half-open.
     */
    HORIZON_MIN_DAYS(): number;
    HORIZON_MAX_DAYS(): number;
    /**
     * Variance factor; NaN when AXES_FACTORS is given.
     */
    FACTOR(): number;
    /**
     * Per-axis factors R, T, N (3 values); empty when FACTOR is given.
     */
    AXES_FACTORS(index: number): number | null;
    axesFactorsLength(): number;
    axesFactorsArray(): Float64Array | null;
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMHorizonFactor(builder: flatbuffers.Builder): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addHorizonMinDays(builder: flatbuffers.Builder, HORIZON_MIN_DAYS: number): void;
    static addHorizonMaxDays(builder: flatbuffers.Builder, HORIZON_MAX_DAYS: number): void;
    static addFactor(builder: flatbuffers.Builder, FACTOR: number): void;
    static addAxesFactors(builder: flatbuffers.Builder, AXES_FACTORSOffset: flatbuffers.Offset): void;
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAxesFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static endERMHorizonFactor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMHorizonFactor(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset, HORIZON_MIN_DAYS: number, HORIZON_MAX_DAYS: number, FACTOR: number, AXES_FACTORSOffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMHorizonFactorT;
    unpackTo(_o: ERMHorizonFactorT): void;
}
export declare class ERMHorizonFactorT implements flatbuffers.IGeneratedObject {
    REGIME: string | Uint8Array | null;
    HORIZON_MIN_DAYS: number;
    HORIZON_MAX_DAYS: number;
    FACTOR: number;
    AXES_FACTORS: (number)[];
    STATUS: string | Uint8Array | null;
    constructor(REGIME?: string | Uint8Array | null, HORIZON_MIN_DAYS?: number, HORIZON_MAX_DAYS?: number, FACTOR?: number, AXES_FACTORS?: (number)[], STATUS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMHorizonFactor.d.ts.map