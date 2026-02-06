import * as flatbuffers from 'flatbuffers';
import { signalModulation } from './signalModulation.js';
/**
 * RF Emitter Detail Record
 */
export declare class rfEmitterDetail implements flatbuffers.IUnpackableObject<rfEmitterDetailT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): rfEmitterDetail;
    static getRootAsrfEmitterDetail(bb: flatbuffers.ByteBuffer, obj?: rfEmitterDetail): rfEmitterDetail;
    static getSizePrefixedRootAsrfEmitterDetail(bb: flatbuffers.ByteBuffer, obj?: rfEmitterDetail): rfEmitterDetail;
    /**
     * Mode name or identifier
     */
    MODE_NAME(): string | null;
    MODE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Center frequency in MHz
     */
    FREQUENCY(): number;
    /**
     * Frequency minimum in MHz
     */
    FREQ_MIN(): number;
    /**
     * Frequency maximum in MHz
     */
    FREQ_MAX(): number;
    /**
     * Pulse repetition interval in microseconds
     */
    PRI(): number;
    /**
     * PRI minimum in microseconds
     */
    PRI_MIN(): number;
    /**
     * PRI maximum in microseconds
     */
    PRI_MAX(): number;
    /**
     * Pulse width in microseconds
     */
    PULSE_WIDTH(): number;
    /**
     * Pulse width minimum in microseconds
     */
    PW_MIN(): number;
    /**
     * Pulse width maximum in microseconds
     */
    PW_MAX(): number;
    /**
     * Scan period in seconds
     */
    SCAN_PERIOD(): number;
    /**
     * Effective radiated power in dBW
     */
    ERP(): number;
    /**
     * Signal modulation
     */
    MODULATION(): signalModulation;
    /**
     * Antenna pattern type
     */
    ANTENNA_PATTERN(): string | null;
    ANTENNA_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 3dB beamwidth in degrees
     */
    BEAMWIDTH(): number;
    static startrfEmitterDetail(builder: flatbuffers.Builder): void;
    static addModeName(builder: flatbuffers.Builder, MODE_NAMEOffset: flatbuffers.Offset): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addPri(builder: flatbuffers.Builder, PRI: number): void;
    static addPriMin(builder: flatbuffers.Builder, PRI_MIN: number): void;
    static addPriMax(builder: flatbuffers.Builder, PRI_MAX: number): void;
    static addPulseWidth(builder: flatbuffers.Builder, PULSE_WIDTH: number): void;
    static addPwMin(builder: flatbuffers.Builder, PW_MIN: number): void;
    static addPwMax(builder: flatbuffers.Builder, PW_MAX: number): void;
    static addScanPeriod(builder: flatbuffers.Builder, SCAN_PERIOD: number): void;
    static addErp(builder: flatbuffers.Builder, ERP: number): void;
    static addModulation(builder: flatbuffers.Builder, MODULATION: signalModulation): void;
    static addAntennaPattern(builder: flatbuffers.Builder, ANTENNA_PATTERNOffset: flatbuffers.Offset): void;
    static addBeamwidth(builder: flatbuffers.Builder, BEAMWIDTH: number): void;
    static endrfEmitterDetail(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createrfEmitterDetail(builder: flatbuffers.Builder, MODE_NAMEOffset: flatbuffers.Offset, FREQUENCY: number, FREQ_MIN: number, FREQ_MAX: number, PRI: number, PRI_MIN: number, PRI_MAX: number, PULSE_WIDTH: number, PW_MIN: number, PW_MAX: number, SCAN_PERIOD: number, ERP: number, MODULATION: signalModulation, ANTENNA_PATTERNOffset: flatbuffers.Offset, BEAMWIDTH: number): flatbuffers.Offset;
    unpack(): rfEmitterDetailT;
    unpackTo(_o: rfEmitterDetailT): void;
}
export declare class rfEmitterDetailT implements flatbuffers.IGeneratedObject {
    MODE_NAME: string | Uint8Array | null;
    FREQUENCY: number;
    FREQ_MIN: number;
    FREQ_MAX: number;
    PRI: number;
    PRI_MIN: number;
    PRI_MAX: number;
    PULSE_WIDTH: number;
    PW_MIN: number;
    PW_MAX: number;
    SCAN_PERIOD: number;
    ERP: number;
    MODULATION: signalModulation;
    ANTENNA_PATTERN: string | Uint8Array | null;
    BEAMWIDTH: number;
    constructor(MODE_NAME?: string | Uint8Array | null, FREQUENCY?: number, FREQ_MIN?: number, FREQ_MAX?: number, PRI?: number, PRI_MIN?: number, PRI_MAX?: number, PULSE_WIDTH?: number, PW_MIN?: number, PW_MAX?: number, SCAN_PERIOD?: number, ERP?: number, MODULATION?: signalModulation, ANTENNA_PATTERN?: string | Uint8Array | null, BEAMWIDTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=rfEmitterDetail.d.ts.map