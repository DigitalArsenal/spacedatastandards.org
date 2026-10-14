import * as flatbuffers from 'flatbuffers';
/**
 * Sensitivity of one epoch to the density error.
 */
export declare class ERMConsiderEpoch implements flatbuffers.IUnpackableObject<ERMConsiderEpochT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMConsiderEpoch;
    static getRootAsERMConsiderEpoch(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderEpoch): ERMConsiderEpoch;
    static getSizePrefixedRootAsERMConsiderEpoch(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderEpoch): ERMConsiderEpoch;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * dx/d ln B from the start, SI (6 values); empty when STM and S are given.
     */
    SENSITIVITY(index: number): number | null;
    sensitivityLength(): number;
    sensitivityArray(): Float64Array | null;
    /**
     * STM from the start (36 values) and dx/dB (6 values).
     */
    STM(index: number): number | null;
    stmLength(): number;
    stmArray(): Float64Array | null;
    S(index: number): number | null;
    sLength(): number;
    sArray(): Float64Array | null;
    /**
     * Base covariance, 21 or 36 values, SI; empty = none.
     */
    BASE(index: number): number | null;
    baseLength(): number;
    baseArray(): Float64Array | null;
    static startERMConsiderEpoch(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSensitivity(builder: flatbuffers.Builder, SENSITIVITYOffset: flatbuffers.Offset): void;
    static createSensitivityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensitivityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensitivityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStm(builder: flatbuffers.Builder, STMOffset: flatbuffers.Offset): void;
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addS(builder: flatbuffers.Builder, SOffset: flatbuffers.Offset): void;
    static createSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBase(builder: flatbuffers.Builder, BASEOffset: flatbuffers.Offset): void;
    static createBaseVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBaseVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBaseVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMConsiderEpoch(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMConsiderEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, SENSITIVITYOffset: flatbuffers.Offset, STMOffset: flatbuffers.Offset, SOffset: flatbuffers.Offset, BASEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMConsiderEpochT;
    unpackTo(_o: ERMConsiderEpochT): void;
}
export declare class ERMConsiderEpochT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    SENSITIVITY: (number)[];
    STM: (number)[];
    S: (number)[];
    BASE: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, SENSITIVITY?: (number)[], STM?: (number)[], S?: (number)[], BASE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMConsiderEpoch.d.ts.map