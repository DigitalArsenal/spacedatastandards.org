import * as flatbuffers from 'flatbuffers';
import { CmsModulationType } from './CmsModulationType.js';
import { encryptionType } from './encryptionType.js';
/**
 * Transponder Channel
 */
export declare class commsChannel implements flatbuffers.IUnpackableObject<commsChannelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): commsChannel;
    static getRootAscommsChannel(bb: flatbuffers.ByteBuffer, obj?: commsChannel): commsChannel;
    static getSizePrefixedRootAscommsChannel(bb: flatbuffers.ByteBuffer, obj?: commsChannel): commsChannel;
    /**
     * Channel identifier
     */
    CHANNEL_ID(): string | null;
    CHANNEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Channel name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uplink frequency in MHz
     */
    UPLINK_FREQ(): number;
    /**
     * Downlink frequency in MHz
     */
    DOWNLINK_FREQ(): number;
    /**
     * Channel bandwidth in MHz
     */
    BANDWIDTH(): number;
    /**
     * Modulation type
     */
    MODULATION(): CmsModulationType;
    /**
     * Data rate in Mbps
     */
    DATA_RATE(): number;
    /**
     * Encryption method
     */
    ENCRYPTION(): encryptionType;
    /**
     * Forward error correction coding rate (e.g., 0.5, 0.75)
     */
    FEC_RATE(): number;
    /**
     * Channel power in dBW
     */
    POWER(): number;
    static startcommsChannel(builder: flatbuffers.Builder): void;
    static addChannelId(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addUplinkFreq(builder: flatbuffers.Builder, UPLINK_FREQ: number): void;
    static addDownlinkFreq(builder: flatbuffers.Builder, DOWNLINK_FREQ: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addModulation(builder: flatbuffers.Builder, MODULATION: CmsModulationType): void;
    static addDataRate(builder: flatbuffers.Builder, DATA_RATE: number): void;
    static addEncryption(builder: flatbuffers.Builder, ENCRYPTION: encryptionType): void;
    static addFecRate(builder: flatbuffers.Builder, FEC_RATE: number): void;
    static addPower(builder: flatbuffers.Builder, POWER: number): void;
    static endcommsChannel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createcommsChannel(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, UPLINK_FREQ: number, DOWNLINK_FREQ: number, BANDWIDTH: number, MODULATION: CmsModulationType, DATA_RATE: number, ENCRYPTION: encryptionType, FEC_RATE: number, POWER: number): flatbuffers.Offset;
    unpack(): commsChannelT;
    unpackTo(_o: commsChannelT): void;
}
export declare class commsChannelT implements flatbuffers.IGeneratedObject {
    CHANNEL_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    UPLINK_FREQ: number;
    DOWNLINK_FREQ: number;
    BANDWIDTH: number;
    MODULATION: CmsModulationType;
    DATA_RATE: number;
    ENCRYPTION: encryptionType;
    FEC_RATE: number;
    POWER: number;
    constructor(CHANNEL_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, UPLINK_FREQ?: number, DOWNLINK_FREQ?: number, BANDWIDTH?: number, MODULATION?: CmsModulationType, DATA_RATE?: number, ENCRYPTION?: encryptionType, FEC_RATE?: number, POWER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=commsChannel.d.ts.map