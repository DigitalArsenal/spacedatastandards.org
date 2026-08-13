import * as flatbuffers from 'flatbuffers';
import { linkCategory } from './linkCategory.js';
import { rfBandDesignation } from './rfBandDesignation.js';
import { rfPolarization } from './rfPolarization.js';
import { rfTransmitterState } from './rfTransmitterState.js';
/**
 * RF Band Specification
 *
 * UNITS ARE NORMATIVE. Every frequency field in this table is MHz. Sources
 * that publish Hz (as open transmitter databases commonly do) MUST divide by
 * 1e6 before encoding; sources
 * that publish kHz MUST divide by 1e3. BAUD is baud (symbols per second),
 * never kilobaud. Encoding a Hz value into a MHz field is a defect, not a
 * convention.
 *
 * One RFB record carries exactly one LINK_DIRECTION. A transceiver or
 * transponder is therefore represented as TWO RFB records — one UPLINK and
 * one DOWNLINK — sharing ID_TRANSMITTER, each carrying its own MODE,
 * FREQ_MIN, FREQ_MAX and CENTER_FREQ.
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
    /**
     * NORAD catalog number of the spacecraft carrying this emitter. Joins to
     * CAT.NORAD_CAT_ID. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * Identifier of the physical transmitter, transceiver or transponder this
     * record describes (e.g. an upstream transmitter database's UUID). Uplink
     * and downlink
     * records of the same device share this value.
     */
    ID_TRANSMITTER(): string | null;
    ID_TRANSMITTER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Direction of this emission relative to the spacecraft.
     */
    LINK_DIRECTION(): linkCategory;
    /**
     * Symbol rate in baud (symbols per second), NOT kilobaud.
     */
    BAUD(): number;
    /**
     * Regulatory/ITU service designation (e.g. Amateur, Earth Exploration).
     */
    SERVICE(): string | null;
    SERVICE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operational state of this emitter.
     */
    XMT_STATUS(): rfTransmitterState;
    /**
     * True when the modulation sideband is inverted.
     */
    INVERT(): boolean;
    /**
     * IARU frequency-coordination state (e.g. IARU Coordinated, Uncoordinated).
     */
    IARU_COORDINATION(): string | null;
    IARU_COORDINATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution/citation string the source license requires this record to
     * carry downstream.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addIdTransmitter(builder: flatbuffers.Builder, ID_TRANSMITTEROffset: flatbuffers.Offset): void;
    static addLinkDirection(builder: flatbuffers.Builder, LINK_DIRECTION: linkCategory): void;
    static addBaud(builder: flatbuffers.Builder, BAUD: number): void;
    static addService(builder: flatbuffers.Builder, SERVICEOffset: flatbuffers.Offset): void;
    static addXmtStatus(builder: flatbuffers.Builder, XMT_STATUS: rfTransmitterState): void;
    static addInvert(builder: flatbuffers.Builder, INVERT: boolean): void;
    static addIaruCoordination(builder: flatbuffers.Builder, IARU_COORDINATIONOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endRFB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFB(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, BAND: rfBandDesignation, MODEOffset: flatbuffers.Offset, PURPOSEOffset: flatbuffers.Offset, FREQ_MIN: number, FREQ_MAX: number, CENTER_FREQ: number, BANDWIDTH: number, PEAK_GAIN: number, EDGE_GAIN: number, BEAMWIDTH: number, POLARIZATION: rfPolarization, ERP: number, EIRP: number, NORAD_CAT_ID: number, ID_TRANSMITTEROffset: flatbuffers.Offset, LINK_DIRECTION: linkCategory, BAUD: number, SERVICEOffset: flatbuffers.Offset, XMT_STATUS: rfTransmitterState, INVERT: boolean, IARU_COORDINATIONOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    NORAD_CAT_ID: number;
    ID_TRANSMITTER: string | Uint8Array | null;
    LINK_DIRECTION: linkCategory;
    BAUD: number;
    SERVICE: string | Uint8Array | null;
    XMT_STATUS: rfTransmitterState;
    INVERT: boolean;
    IARU_COORDINATION: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, BAND?: rfBandDesignation, MODE?: string | Uint8Array | null, PURPOSE?: string | Uint8Array | null, FREQ_MIN?: number, FREQ_MAX?: number, CENTER_FREQ?: number, BANDWIDTH?: number, PEAK_GAIN?: number, EDGE_GAIN?: number, BEAMWIDTH?: number, POLARIZATION?: rfPolarization, ERP?: number, EIRP?: number, NORAD_CAT_ID?: number, ID_TRANSMITTER?: string | Uint8Array | null, LINK_DIRECTION?: linkCategory, BAUD?: number, SERVICE?: string | Uint8Array | null, XMT_STATUS?: rfTransmitterState, INVERT?: boolean, IARU_COORDINATION?: string | Uint8Array | null, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFB.d.ts.map