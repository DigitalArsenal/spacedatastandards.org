import * as flatbuffers from 'flatbuffers';
import { commsChannel, commsChannelT } from './commsChannel.js';
/**
 * Transponder
 */
export declare class commsTransponder implements flatbuffers.IUnpackableObject<commsTransponderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): commsTransponder;
    static getRootAscommsTransponder(bb: flatbuffers.ByteBuffer, obj?: commsTransponder): commsTransponder;
    static getSizePrefixedRootAscommsTransponder(bb: flatbuffers.ByteBuffer, obj?: commsTransponder): commsTransponder;
    /**
     * Transponder identifier
     */
    TRANSPONDER_ID(): string | null;
    TRANSPONDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transponder name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transponder type (e.g., BENT_PIPE, REGENERATIVE, OBP)
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating band (e.g., C, Ku, Ka, L, S, X)
     */
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uplink frequency range minimum in MHz
     */
    UPLINK_FREQ_MIN(): number;
    /**
     * Uplink frequency range maximum in MHz
     */
    UPLINK_FREQ_MAX(): number;
    /**
     * Downlink frequency range minimum in MHz
     */
    DOWNLINK_FREQ_MIN(): number;
    /**
     * Downlink frequency range maximum in MHz
     */
    DOWNLINK_FREQ_MAX(): number;
    /**
     * Saturated EIRP in dBW
     */
    EIRP(): number;
    /**
     * G/T in dB/K
     */
    G_OVER_T(): number;
    /**
     * Total bandwidth in MHz
     */
    BANDWIDTH(): number;
    /**
     * Number of channels
     */
    NUM_CHANNELS(): number;
    /**
     * Channels on this transponder
     */
    CHANNELS(index: number, obj?: commsChannel): commsChannel | null;
    channelsLength(): number;
    /**
     * Polarization (e.g., RHCP, LHCP, LINEAR_H, LINEAR_V)
     */
    POLARIZATION(): string | null;
    POLARIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startcommsTransponder(builder: flatbuffers.Builder): void;
    static addTransponderId(builder: flatbuffers.Builder, TRANSPONDER_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addUplinkFreqMin(builder: flatbuffers.Builder, UPLINK_FREQ_MIN: number): void;
    static addUplinkFreqMax(builder: flatbuffers.Builder, UPLINK_FREQ_MAX: number): void;
    static addDownlinkFreqMin(builder: flatbuffers.Builder, DOWNLINK_FREQ_MIN: number): void;
    static addDownlinkFreqMax(builder: flatbuffers.Builder, DOWNLINK_FREQ_MAX: number): void;
    static addEirp(builder: flatbuffers.Builder, EIRP: number): void;
    static addGOverT(builder: flatbuffers.Builder, G_OVER_T: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addNumChannels(builder: flatbuffers.Builder, NUM_CHANNELS: number): void;
    static addChannels(builder: flatbuffers.Builder, CHANNELSOffset: flatbuffers.Offset): void;
    static createChannelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChannelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATIONOffset: flatbuffers.Offset): void;
    static endcommsTransponder(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createcommsTransponder(builder: flatbuffers.Builder, TRANSPONDER_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, BANDOffset: flatbuffers.Offset, UPLINK_FREQ_MIN: number, UPLINK_FREQ_MAX: number, DOWNLINK_FREQ_MIN: number, DOWNLINK_FREQ_MAX: number, EIRP: number, G_OVER_T: number, BANDWIDTH: number, NUM_CHANNELS: number, CHANNELSOffset: flatbuffers.Offset, POLARIZATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): commsTransponderT;
    unpackTo(_o: commsTransponderT): void;
}
export declare class commsTransponderT implements flatbuffers.IGeneratedObject {
    TRANSPONDER_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    BAND: string | Uint8Array | null;
    UPLINK_FREQ_MIN: number;
    UPLINK_FREQ_MAX: number;
    DOWNLINK_FREQ_MIN: number;
    DOWNLINK_FREQ_MAX: number;
    EIRP: number;
    G_OVER_T: number;
    BANDWIDTH: number;
    NUM_CHANNELS: number;
    CHANNELS: (commsChannelT)[];
    POLARIZATION: string | Uint8Array | null;
    constructor(TRANSPONDER_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, BAND?: string | Uint8Array | null, UPLINK_FREQ_MIN?: number, UPLINK_FREQ_MAX?: number, DOWNLINK_FREQ_MIN?: number, DOWNLINK_FREQ_MAX?: number, EIRP?: number, G_OVER_T?: number, BANDWIDTH?: number, NUM_CHANNELS?: number, CHANNELS?: (commsChannelT)[], POLARIZATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=commsTransponder.d.ts.map