import * as flatbuffers from 'flatbuffers';
export declare class TRHTransmitter implements flatbuffers.IUnpackableObject<TRHTransmitterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHTransmitter;
    static getRootAsTRHTransmitter(bb: flatbuffers.ByteBuffer, obj?: TRHTransmitter): TRHTransmitter;
    static getSizePrefixedRootAsTRHTransmitter(bb: flatbuffers.ByteBuffer, obj?: TRHTransmitter): TRHTransmitter;
    HARDWARE_ID(): string;
    HARDWARE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    FREQUENCY_HZ(): number;
    POWER_WATTS(): number;
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    HARDWARE_DELAY_SECONDS(): number;
    ANTENNA_ID(): string | null;
    ANTENNA_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRHTransmitter(builder: flatbuffers.Builder): void;
    static addHardwareId(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset): void;
    static addFrequencyHz(builder: flatbuffers.Builder, FREQUENCY_HZ: number): void;
    static addPowerWatts(builder: flatbuffers.Builder, POWER_WATTS: number): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addHardwareDelaySeconds(builder: flatbuffers.Builder, HARDWARE_DELAY_SECONDS: number): void;
    static addAntennaId(builder: flatbuffers.Builder, ANTENNA_IDOffset: flatbuffers.Offset): void;
    static endTRHTransmitter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHTransmitter(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset, FREQUENCY_HZ: number, POWER_WATTS: number, MODULATIONOffset: flatbuffers.Offset, HARDWARE_DELAY_SECONDS: number, ANTENNA_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRHTransmitterT;
    unpackTo(_o: TRHTransmitterT): void;
}
export declare class TRHTransmitterT implements flatbuffers.IGeneratedObject {
    HARDWARE_ID: string | Uint8Array | null;
    FREQUENCY_HZ: number;
    POWER_WATTS: number;
    MODULATION: string | Uint8Array | null;
    HARDWARE_DELAY_SECONDS: number;
    ANTENNA_ID: string | Uint8Array | null;
    constructor(HARDWARE_ID?: string | Uint8Array | null, FREQUENCY_HZ?: number, POWER_WATTS?: number, MODULATION?: string | Uint8Array | null, HARDWARE_DELAY_SECONDS?: number, ANTENNA_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHTransmitter.d.ts.map