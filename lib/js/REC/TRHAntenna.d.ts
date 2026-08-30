import * as flatbuffers from 'flatbuffers';
export declare class TRHAntenna implements flatbuffers.IUnpackableObject<TRHAntennaT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHAntenna;
    static getRootAsTRHAntenna(bb: flatbuffers.ByteBuffer, obj?: TRHAntenna): TRHAntenna;
    static getSizePrefixedRootAsTRHAntenna(bb: flatbuffers.ByteBuffer, obj?: TRHAntenna): TRHAntenna;
    HARDWARE_ID(): string;
    HARDWARE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    FREQUENCY_HZ(): number;
    BANDWIDTH_HZ(): number;
    GAIN_DBI(): number;
    PHASE_CENTER_DELAY_SECONDS(): number;
    static startTRHAntenna(builder: flatbuffers.Builder): void;
    static addHardwareId(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset): void;
    static addFrequencyHz(builder: flatbuffers.Builder, FREQUENCY_HZ: number): void;
    static addBandwidthHz(builder: flatbuffers.Builder, BANDWIDTH_HZ: number): void;
    static addGainDbi(builder: flatbuffers.Builder, GAIN_DBI: number): void;
    static addPhaseCenterDelaySeconds(builder: flatbuffers.Builder, PHASE_CENTER_DELAY_SECONDS: number): void;
    static endTRHAntenna(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHAntenna(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset, FREQUENCY_HZ: number, BANDWIDTH_HZ: number, GAIN_DBI: number, PHASE_CENTER_DELAY_SECONDS: number): flatbuffers.Offset;
    unpack(): TRHAntennaT;
    unpackTo(_o: TRHAntennaT): void;
}
export declare class TRHAntennaT implements flatbuffers.IGeneratedObject {
    HARDWARE_ID: string | Uint8Array | null;
    FREQUENCY_HZ: number;
    BANDWIDTH_HZ: number;
    GAIN_DBI: number;
    PHASE_CENTER_DELAY_SECONDS: number;
    constructor(HARDWARE_ID?: string | Uint8Array | null, FREQUENCY_HZ?: number, BANDWIDTH_HZ?: number, GAIN_DBI?: number, PHASE_CENTER_DELAY_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHAntenna.d.ts.map