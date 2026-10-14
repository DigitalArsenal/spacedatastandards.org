import * as flatbuffers from 'flatbuffers';
import { ermFitStatus } from './ermFitStatus.js';
/**
 * Fitted calibration of one stratum.
 */
export declare class ERMCalibrationStratum implements flatbuffers.IUnpackableObject<ERMCalibrationStratumT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibrationStratum;
    static getRootAsERMCalibrationStratum(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationStratum): ERMCalibrationStratum;
    static getSizePrefixedRootAsERMCalibrationStratum(bb: flatbuffers.ByteBuffer, obj?: ERMCalibrationStratum): ERMCalibrationStratum;
    STRATUM(): string | null;
    STRATUM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    N(): bigint;
    OBJECTS(): number;
    NOT_POSITIVE_DEFINITE(): number;
    STATUS(): ermFitStatus;
    BEFORE_MEAN_D2_OVER_3(): number;
    BEFORE_COVERAGE_95(): number;
    /**
     * Variance factor; NaN when per axis.
     */
    FACTOR(): number;
    /**
     * Per-axis variance factors (3 values); empty when scalar.
     */
    AXES_FACTORS(index: number): number | null;
    axesFactorsLength(): number;
    axesFactorsArray(): Float64Array | null;
    AFTER_MEAN_D2_OVER_3(): number;
    AFTER_COVERAGE_95(): number;
    static startERMCalibrationStratum(builder: flatbuffers.Builder): void;
    static addStratum(builder: flatbuffers.Builder, STRATUMOffset: flatbuffers.Offset): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addNotPositiveDefinite(builder: flatbuffers.Builder, NOT_POSITIVE_DEFINITE: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: ermFitStatus): void;
    static addBeforeMeanD2Over3(builder: flatbuffers.Builder, BEFORE_MEAN_D2_OVER_3: number): void;
    static addBeforeCoverage95(builder: flatbuffers.Builder, BEFORE_COVERAGE_95: number): void;
    static addFactor(builder: flatbuffers.Builder, FACTOR: number): void;
    static addAxesFactors(builder: flatbuffers.Builder, AXES_FACTORSOffset: flatbuffers.Offset): void;
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAxesFactorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAxesFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAfterMeanD2Over3(builder: flatbuffers.Builder, AFTER_MEAN_D2_OVER_3: number): void;
    static addAfterCoverage95(builder: flatbuffers.Builder, AFTER_COVERAGE_95: number): void;
    static endERMCalibrationStratum(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCalibrationStratum(builder: flatbuffers.Builder, STRATUMOffset: flatbuffers.Offset, N: bigint, OBJECTS: number, NOT_POSITIVE_DEFINITE: number, STATUS: ermFitStatus, BEFORE_MEAN_D2_OVER_3: number, BEFORE_COVERAGE_95: number, FACTOR: number, AXES_FACTORSOffset: flatbuffers.Offset, AFTER_MEAN_D2_OVER_3: number, AFTER_COVERAGE_95: number): flatbuffers.Offset;
    unpack(): ERMCalibrationStratumT;
    unpackTo(_o: ERMCalibrationStratumT): void;
}
export declare class ERMCalibrationStratumT implements flatbuffers.IGeneratedObject {
    STRATUM: string | Uint8Array | null;
    N: bigint;
    OBJECTS: number;
    NOT_POSITIVE_DEFINITE: number;
    STATUS: ermFitStatus;
    BEFORE_MEAN_D2_OVER_3: number;
    BEFORE_COVERAGE_95: number;
    FACTOR: number;
    AXES_FACTORS: (number)[];
    AFTER_MEAN_D2_OVER_3: number;
    AFTER_COVERAGE_95: number;
    constructor(STRATUM?: string | Uint8Array | null, N?: bigint, OBJECTS?: number, NOT_POSITIVE_DEFINITE?: number, STATUS?: ermFitStatus, BEFORE_MEAN_D2_OVER_3?: number, BEFORE_COVERAGE_95?: number, FACTOR?: number, AXES_FACTORS?: (number)[], AFTER_MEAN_D2_OVER_3?: number, AFTER_COVERAGE_95?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibrationStratum.d.ts.map