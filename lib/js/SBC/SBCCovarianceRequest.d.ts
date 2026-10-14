import * as flatbuffers from 'flatbuffers';
import { OCM, OCMT } from './OCM.js';
import { OMM, OMMT } from './OMM.js';
import { SBCBiasTerm, SBCBiasTermT } from './SBCBiasTerm.js';
/**
 * The contributors to combine into one object's covariance.
 */
export declare class SBCCovarianceRequest implements flatbuffers.IUnpackableObject<SBCCovarianceRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBCCovarianceRequest;
    static getRootAsSBCCovarianceRequest(bb: flatbuffers.ByteBuffer, obj?: SBCCovarianceRequest): SBCCovarianceRequest;
    static getSizePrefixedRootAsSBCCovarianceRequest(bb: flatbuffers.ByteBuffer, obj?: SBCCovarianceRequest): SBCCovarianceRequest;
    /**
     * Object identifier.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the covariance, ISO 8601 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A covariance supplied directly, as an $OCM with COVARIANCE_DATA (21
     * values, km**2 family) and COV_REF_FRAME (RTN or RSW for orbit axes). A
     * covariance known only as per-axis one-sigma values is a diagonal one:
     * write sigma**2 on the diagonal and zeros elsewhere. Absent = none.
     */
    DIRECT_COVARIANCE(obj?: OCM): OCM | null;
    /**
     * A series of element sets of the object whose scatter about their mean
     * is a covariance contributor (at least two sets); empty = none.
     */
    ELEMENT_SET_SERIES(index: number, obj?: OMM): OMM | null;
    elementSetSeriesLength(): number;
    /**
     * Sensor biases; empty = none.
     */
    SENSOR_BIASES(index: number, obj?: SBCBiasTerm): SBCBiasTerm | null;
    sensorBiasesLength(): number;
    static startSBCCovarianceRequest(builder: flatbuffers.Builder): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addDirectCovariance(builder: flatbuffers.Builder, DIRECT_COVARIANCEOffset: flatbuffers.Offset): void;
    static addElementSetSeries(builder: flatbuffers.Builder, ELEMENT_SET_SERIESOffset: flatbuffers.Offset): void;
    static createElementSetSeriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElementSetSeriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSensorBiases(builder: flatbuffers.Builder, SENSOR_BIASESOffset: flatbuffers.Offset): void;
    static createSensorBiasesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSensorBiasesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSBCCovarianceRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SBCCovarianceRequestT;
    unpackTo(_o: SBCCovarianceRequestT): void;
}
export declare class SBCCovarianceRequestT implements flatbuffers.IGeneratedObject {
    OBJECT_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    DIRECT_COVARIANCE: OCMT | null;
    ELEMENT_SET_SERIES: (OMMT)[];
    SENSOR_BIASES: (SBCBiasTermT)[];
    constructor(OBJECT_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, DIRECT_COVARIANCE?: OCMT | null, ELEMENT_SET_SERIES?: (OMMT)[], SENSOR_BIASES?: (SBCBiasTermT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBCCovarianceRequest.d.ts.map