import * as flatbuffers from 'flatbuffers';
import { rfBandDesignation } from './rfBandDesignation.js';
import { rfPolarization } from './rfPolarization.js';
/**
 * RF Band Specification
 */
export declare class RFB implements flatbuffers.IUnpackableObject<RFBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFB;
    static getRootAsRFB(bb: flatbuffers.ByteBuffer, obj?: RFB): RFB;
    static getSizePrefixedRootAsRFB(bb: flatbuffers.ByteBuffer, obj?: RFB): RFB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent entity identifier
     */
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Band name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RF band designation
     */
    BAND(): rfBandDesignation;
    /**
     * Operating mode
     */
    MODE(): string | null;
    MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Band purpose (e.g., TT&C, PAYLOAD, BEACON)
     */
    PURPOSE(): string | null;
    PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum frequency (MHz)
     */
    FREQ_MIN(): number;
    /**
     * Maximum frequency (MHz)
     */
    FREQ_MAX(): number;
    /**
     * Center frequency (MHz)
     */
    CENTER_FREQ(): number;
    /**
     * Bandwidth (MHz)
     */
    BANDWIDTH(): number;
    /**
     * Peak antenna gain (dBi)
     */
    PEAK_GAIN(): number;
    /**
     * Edge-of-coverage gain (dBi)
     */
    EDGE_GAIN(): number;
    /**
     * Antenna beamwidth (degrees)
     */
    BEAMWIDTH(): number;
    /**
     * Polarization
     */
    POLARIZATION(): rfPolarization;
    /**
     * Effective radiated power (dBW)
     */
    ERP(): number;
    /**
     * Effective isotropic radiated power (dBW)
     */
    EIRP(): number;
    static startRFB(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BAND: rfBandDesignation): void;
    static addMode(builder: flatbuffers.Builder, MODEOffset: flatbuffers.Offset): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSEOffset: flatbuffers.Offset): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addCenterFreq(builder: flatbuffers.Builder, CENTER_FREQ: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addPeakGain(builder: flatbuffers.Builder, PEAK_GAIN: number): void;
    static addEdgeGain(builder: flatbuffers.Builder, EDGE_GAIN: number): void;
    static addBeamwidth(builder: flatbuffers.Builder, BEAMWIDTH: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfPolarization): void;
    static addErp(builder: flatbuffers.Builder, ERP: number): void;
    static addEirp(builder: flatbuffers.Builder, EIRP: number): void;
    static endRFB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFB(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, BAND: rfBandDesignation, MODEOffset: flatbuffers.Offset, PURPOSEOffset: flatbuffers.Offset, FREQ_MIN: number, FREQ_MAX: number, CENTER_FREQ: number, BANDWIDTH: number, PEAK_GAIN: number, EDGE_GAIN: number, BEAMWIDTH: number, POLARIZATION: rfPolarization, ERP: number, EIRP: number): flatbuffers.Offset;
    unpack(): RFBT;
    unpackTo(_o: RFBT): void;
}
export declare class RFBT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    BAND: rfBandDesignation;
    MODE: string | Uint8Array | null;
    PURPOSE: string | Uint8Array | null;
    FREQ_MIN: number;
    FREQ_MAX: number;
    CENTER_FREQ: number;
    BANDWIDTH: number;
    PEAK_GAIN: number;
    EDGE_GAIN: number;
    BEAMWIDTH: number;
    POLARIZATION: rfPolarization;
    ERP: number;
    EIRP: number;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, BAND?: rfBandDesignation, MODE?: string | Uint8Array | null, PURPOSE?: string | Uint8Array | null, FREQ_MIN?: number, FREQ_MAX?: number, CENTER_FREQ?: number, BANDWIDTH?: number, PEAK_GAIN?: number, EDGE_GAIN?: number, BEAMWIDTH?: number, POLARIZATION?: rfPolarization, ERP?: number, EIRP?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFB.d.ts.map