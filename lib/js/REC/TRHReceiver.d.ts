import * as flatbuffers from 'flatbuffers';
export declare class TRHReceiver implements flatbuffers.IUnpackableObject<TRHReceiverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHReceiver;
    static getRootAsTRHReceiver(bb: flatbuffers.ByteBuffer, obj?: TRHReceiver): TRHReceiver;
    static getSizePrefixedRootAsTRHReceiver(bb: flatbuffers.ByteBuffer, obj?: TRHReceiver): TRHReceiver;
    HARDWARE_ID(): string;
    HARDWARE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    CENTER_FREQUENCY_HZ(): number;
    BANDWIDTH_HZ(): number;
    SYSTEM_NOISE_TEMPERATURE_KELVIN(): number;
    HARDWARE_DELAY_SECONDS(): number;
    ANTENNA_ID(): string | null;
    ANTENNA_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRHReceiver(builder: flatbuffers.Builder): void;
    static addHardwareId(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset): void;
    static addCenterFrequencyHz(builder: flatbuffers.Builder, CENTER_FREQUENCY_HZ: number): void;
    static addBandwidthHz(builder: flatbuffers.Builder, BANDWIDTH_HZ: number): void;
    static addSystemNoiseTemperatureKelvin(builder: flatbuffers.Builder, SYSTEM_NOISE_TEMPERATURE_KELVIN: number): void;
    static addHardwareDelaySeconds(builder: flatbuffers.Builder, HARDWARE_DELAY_SECONDS: number): void;
    static addAntennaId(builder: flatbuffers.Builder, ANTENNA_IDOffset: flatbuffers.Offset): void;
    static endTRHReceiver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHReceiver(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset, CENTER_FREQUENCY_HZ: number, BANDWIDTH_HZ: number, SYSTEM_NOISE_TEMPERATURE_KELVIN: number, HARDWARE_DELAY_SECONDS: number, ANTENNA_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRHReceiverT;
    unpackTo(_o: TRHReceiverT): void;
}
export declare class TRHReceiverT implements flatbuffers.IGeneratedObject {
    HARDWARE_ID: string | Uint8Array | null;
    CENTER_FREQUENCY_HZ: number;
    BANDWIDTH_HZ: number;
    SYSTEM_NOISE_TEMPERATURE_KELVIN: number;
    HARDWARE_DELAY_SECONDS: number;
    ANTENNA_ID: string | Uint8Array | null;
    constructor(HARDWARE_ID?: string | Uint8Array | null, CENTER_FREQUENCY_HZ?: number, BANDWIDTH_HZ?: number, SYSTEM_NOISE_TEMPERATURE_KELVIN?: number, HARDWARE_DELAY_SECONDS?: number, ANTENNA_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHReceiver.d.ts.map