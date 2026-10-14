import * as flatbuffers from 'flatbuffers';
import { ERMCalibratedCovariance, ERMCalibratedCovarianceT } from './ERMCalibratedCovariance.js';
import { ERMCalibrationObject, ERMCalibrationObjectT } from './ERMCalibrationObject.js';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ermModelForm } from './ermModelForm.js';
/**
 * Calibrated covariances: the objects and the result.
 */
export declare class ERMCalibratedCovariances implements flatbuffers.IUnpackableObject<ERMCalibratedCovariancesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCalibratedCovariances;
    static getRootAsERMCalibratedCovariances(bb: flatbuffers.ByteBuffer, obj?: ERMCalibratedCovariances): ERMCalibratedCovariances;
    static getSizePrefixedRootAsERMCalibratedCovariances(bb: flatbuffers.ByteBuffer, obj?: ERMCalibratedCovariances): ERMCalibratedCovariances;
    CALIBRATION_VERSION(): string | null;
    CALIBRATION_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODEL_FORM(): ermModelForm;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    OBJECTS(index: number, obj?: ERMCalibrationObject): ERMCalibrationObject | null;
    objectsLength(): number;
    RESULTS(index: number, obj?: ERMCalibratedCovariance): ERMCalibratedCovariance | null;
    resultsLength(): number;
    static startERMCalibratedCovariances(builder: flatbuffers.Builder): void;
    static addCalibrationVersion(builder: flatbuffers.Builder, CALIBRATION_VERSIONOffset: flatbuffers.Offset): void;
    static addModelForm(builder: flatbuffers.Builder, MODEL_FORM: ermModelForm): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCalibratedCovariances(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMCalibratedCovariancesT;
    unpackTo(_o: ERMCalibratedCovariancesT): void;
}
export declare class ERMCalibratedCovariancesT implements flatbuffers.IGeneratedObject {
    CALIBRATION_VERSION: string | Uint8Array | null;
    MODEL_FORM: ermModelForm;
    UNITS: string | Uint8Array | null;
    RULE: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    OBJECTS: (ERMCalibrationObjectT)[];
    RESULTS: (ERMCalibratedCovarianceT)[];
    constructor(CALIBRATION_VERSION?: string | Uint8Array | null, MODEL_FORM?: ermModelForm, UNITS?: string | Uint8Array | null, RULE?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, OBJECTS?: (ERMCalibrationObjectT)[], RESULTS?: (ERMCalibratedCovarianceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCalibratedCovariances.d.ts.map