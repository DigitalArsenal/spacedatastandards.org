import * as flatbuffers from 'flatbuffers';
import { ermCoverageVerdict } from './ermCoverageVerdict.js';
/**
 * Result of a realism test of one stratum.
 */
export declare class ERMCoverage implements flatbuffers.IUnpackableObject<ERMCoverageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCoverage;
    static getRootAsERMCoverage(bb: flatbuffers.ByteBuffer, obj?: ERMCoverage): ERMCoverage;
    static getSizePrefixedRootAsERMCoverage(bb: flatbuffers.ByteBuffer, obj?: ERMCoverage): ERMCoverage;
    N(): bigint;
    OBJECTS(): number;
    VERDICT(): ermCoverageVerdict;
    /**
     * Mean d2 (3 for a realistic covariance); NaN when N is 0.
     */
    MEAN_D2(): number;
    /**
     * Fractions inside the 1, 2, 3 sigma regions (3 values).
     */
    INSIDE(index: number): number | null;
    insideLength(): number;
    insideArray(): Float64Array | null;
    /**
     * PIT histogram fractions (20 values).
     */
    PIT(index: number): number | null;
    pitLength(): number;
    pitArray(): Float64Array | null;
    /**
     * Largest gap of the PIT cumulative distribution from uniform.
     */
    PIT_MAX_CDF_GAP(): number;
    /**
     * Samples without a model covariance.
     */
    MISSING_MODEL(): bigint;
    static startERMCoverage(builder: flatbuffers.Builder): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addVerdict(builder: flatbuffers.Builder, VERDICT: ermCoverageVerdict): void;
    static addMeanD2(builder: flatbuffers.Builder, MEAN_D2: number): void;
    static addInside(builder: flatbuffers.Builder, INSIDEOffset: flatbuffers.Offset): void;
    static createInsideVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInsideVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInsideVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPit(builder: flatbuffers.Builder, PITOffset: flatbuffers.Offset): void;
    static createPitVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPitVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPitVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPitMaxCdfGap(builder: flatbuffers.Builder, PIT_MAX_CDF_GAP: number): void;
    static addMissingModel(builder: flatbuffers.Builder, MISSING_MODEL: bigint): void;
    static endERMCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCoverage(builder: flatbuffers.Builder, N: bigint, OBJECTS: number, VERDICT: ermCoverageVerdict, MEAN_D2: number, INSIDEOffset: flatbuffers.Offset, PITOffset: flatbuffers.Offset, PIT_MAX_CDF_GAP: number, MISSING_MODEL: bigint): flatbuffers.Offset;
    unpack(): ERMCoverageT;
    unpackTo(_o: ERMCoverageT): void;
}
export declare class ERMCoverageT implements flatbuffers.IGeneratedObject {
    N: bigint;
    OBJECTS: number;
    VERDICT: ermCoverageVerdict;
    MEAN_D2: number;
    INSIDE: (number)[];
    PIT: (number)[];
    PIT_MAX_CDF_GAP: number;
    MISSING_MODEL: bigint;
    constructor(N?: bigint, OBJECTS?: number, VERDICT?: ermCoverageVerdict, MEAN_D2?: number, INSIDE?: (number)[], PIT?: (number)[], PIT_MAX_CDF_GAP?: number, MISSING_MODEL?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCoverage.d.ts.map