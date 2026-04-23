import * as flatbuffers from 'flatbuffers';
/**
 * Radar sensor configuration.
 */
export declare class SDRRadarConfig implements flatbuffers.IUnpackableObject<SDRRadarConfigT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRRadarConfig;
    static getRootAsSDRRadarConfig(bb: flatbuffers.ByteBuffer, obj?: SDRRadarConfig): SDRRadarConfig;
    static getSizePrefixedRootAsSDRRadarConfig(bb: flatbuffers.ByteBuffer, obj?: SDRRadarConfig): SDRRadarConfig;
    /**
     * Operating frequency (Hz).
     */
    FREQUENCY(): number;
    /**
     * Transmit power (W).
     */
    POWER(): number;
    /**
     * Antenna gain (dB).
     */
    GAIN(): number;
    /**
     * Receiver bandwidth (Hz).
     */
    BANDWIDTH(): number;
    /**
     * Noise figure (dB).
     */
    NOISE_FIGURE(): number;
    /**
     * System losses (dB).
     */
    SYSTEM_LOSS(): number;
    /**
     * Pulse repetition frequency (Hz).
     */
    PRF(): number;
    /**
     * Pulse width (seconds).
     */
    PULSE_WIDTH(): number;
    /**
     * Detection threshold SNR (dB).
     */
    DETECTION_THRESHOLD(): number;
    /**
     * Minimum detection range (meters).
     */
    MIN_RANGE(): number;
    /**
     * Maximum detection range (meters).
     */
    MAX_RANGE(): number;
    static startSDRRadarConfig(builder: flatbuffers.Builder): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addPower(builder: flatbuffers.Builder, POWER: number): void;
    static addGain(builder: flatbuffers.Builder, GAIN: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addNoiseFigure(builder: flatbuffers.Builder, NOISE_FIGURE: number): void;
    static addSystemLoss(builder: flatbuffers.Builder, SYSTEM_LOSS: number): void;
    static addPrf(builder: flatbuffers.Builder, PRF: number): void;
    static addPulseWidth(builder: flatbuffers.Builder, PULSE_WIDTH: number): void;
    static addDetectionThreshold(builder: flatbuffers.Builder, DETECTION_THRESHOLD: number): void;
    static addMinRange(builder: flatbuffers.Builder, MIN_RANGE: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static endSDRRadarConfig(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDRRadarConfig(builder: flatbuffers.Builder, FREQUENCY: number, POWER: number, GAIN: number, BANDWIDTH: number, NOISE_FIGURE: number, SYSTEM_LOSS: number, PRF: number, PULSE_WIDTH: number, DETECTION_THRESHOLD: number, MIN_RANGE: number, MAX_RANGE: number): flatbuffers.Offset;
    unpack(): SDRRadarConfigT;
    unpackTo(_o: SDRRadarConfigT): void;
}
export declare class SDRRadarConfigT implements flatbuffers.IGeneratedObject {
    FREQUENCY: number;
    POWER: number;
    GAIN: number;
    BANDWIDTH: number;
    NOISE_FIGURE: number;
    SYSTEM_LOSS: number;
    PRF: number;
    PULSE_WIDTH: number;
    DETECTION_THRESHOLD: number;
    MIN_RANGE: number;
    MAX_RANGE: number;
    constructor(FREQUENCY?: number, POWER?: number, GAIN?: number, BANDWIDTH?: number, NOISE_FIGURE?: number, SYSTEM_LOSS?: number, PRF?: number, PULSE_WIDTH?: number, DETECTION_THRESHOLD?: number, MIN_RANGE?: number, MAX_RANGE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRRadarConfig.d.ts.map