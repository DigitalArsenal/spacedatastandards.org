import * as flatbuffers from 'flatbuffers';
import { ERMCalibrationSample, ERMCalibrationSampleT } from './ERMCalibrationSample.js';
import { ERMCalibrationStratum, ERMCalibrationStratumT } from './ERMCalibrationStratum.js';
import { ermCalibrationFit } from './ermCalibrationFit.js';
/**
 * Calibration factor fit: samples, settings and result.
 */
export declare class ERMCalibration implements flatbuffers.IUnpackableObject<ERMCalibrationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibration;
    static getRootAsERMCalibration(bb: flatbuffers.ByteBuffer, obj?: ERMCalibration): ERMCalibration;
    static getSizePrefixedRootAsERMCalibration(bb: flatbuffers.ByteBuffer, obj?: ERMCalibration): ERMCalibration;
    METHOD(): ermCalibrationFit;
    /**
     * Target coverage, (0, 1).
     */
    COVERAGE(): number;
    MINIMUM_SAMPLES(): number;
    MINIMUM_OBJECTS(): number;
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SAMPLES(index: number, obj?: ERMCalibrationSample): ERMCalibrationSample | null;
    samplesLength(): number;
    STRATA(index: number, obj?: ERMCalibrationStratum): ERMCalibrationStratum | null;
    strataLength(): number;
    static startERMCalibration(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: ermCalibrationFit): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGE: number): void;
    static addMinimumSamples(builder: flatbuffers.Builder, MINIMUM_SAMPLES: number): void;
    static addMinimumObjects(builder: flatbuffers.Builder, MINIMUM_OBJECTS: number): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCalibration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCalibration(builder: flatbuffers.Builder, METHOD: ermCalibrationFit, COVERAGE: number, MINIMUM_SAMPLES: number, MINIMUM_OBJECTS: number, RULEOffset: flatbuffers.Offset, SAMPLESOffset: flatbuffers.Offset, STRATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCalibrationT;
    unpackTo(_o: ERMCalibrationT): void;
}
export declare class ERMCalibrationT implements flatbuffers.IGeneratedObject {
    METHOD: ermCalibrationFit;
    COVERAGE: number;
    MINIMUM_SAMPLES: number;
    MINIMUM_OBJECTS: number;
    RULE: string | Uint8Array | null;
    SAMPLES: (ERMCalibrationSampleT)[];
    STRATA: (ERMCalibrationStratumT)[];
    constructor(METHOD?: ermCalibrationFit, COVERAGE?: number, MINIMUM_SAMPLES?: number, MINIMUM_OBJECTS?: number, RULE?: string | Uint8Array | null, SAMPLES?: (ERMCalibrationSampleT)[], STRATA?: (ERMCalibrationStratumT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibration.d.ts.map