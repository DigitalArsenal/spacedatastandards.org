import * as flatbuffers from 'flatbuffers';
import { TRHHardwareRef, TRHHardwareRefT } from './TRHHardwareRef.js';
export declare class TRHInstallation implements flatbuffers.IUnpackableObject<TRHInstallationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHInstallation;
    static getRootAsTRHInstallation(bb: flatbuffers.ByteBuffer, obj?: TRHInstallation): TRHInstallation;
    static getSizePrefixedRootAsTRHInstallation(bb: flatbuffers.ByteBuffer, obj?: TRHInstallation): TRHInstallation;
    OWNER_OBJECT_ID(): string;
    OWNER_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    HARDWARE(index: number, obj?: TRHHardwareRef): TRHHardwareRef | null;
    hardwareLength(): number;
    CLOCK_BIAS_SECONDS(): number;
    CLOCK_DRIFT_SECONDS_PER_SECOND(): number;
    static startTRHInstallation(builder: flatbuffers.Builder): void;
    static addOwnerObjectId(builder: flatbuffers.Builder, OWNER_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addHardware(builder: flatbuffers.Builder, HARDWAREOffset: flatbuffers.Offset): void;
    static createHardwareVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHardwareVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockBiasSeconds(builder: flatbuffers.Builder, CLOCK_BIAS_SECONDS: number): void;
    static addClockDriftSecondsPerSecond(builder: flatbuffers.Builder, CLOCK_DRIFT_SECONDS_PER_SECOND: number): void;
    static endTRHInstallation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHInstallation(builder: flatbuffers.Builder, OWNER_OBJECT_IDOffset: flatbuffers.Offset, HARDWAREOffset: flatbuffers.Offset, CLOCK_BIAS_SECONDS: number, CLOCK_DRIFT_SECONDS_PER_SECOND: number): flatbuffers.Offset;
    unpack(): TRHInstallationT;
    unpackTo(_o: TRHInstallationT): void;
}
export declare class TRHInstallationT implements flatbuffers.IGeneratedObject {
    OWNER_OBJECT_ID: string | Uint8Array | null;
    HARDWARE: (TRHHardwareRefT)[];
    CLOCK_BIAS_SECONDS: number;
    CLOCK_DRIFT_SECONDS_PER_SECOND: number;
    constructor(OWNER_OBJECT_ID?: string | Uint8Array | null, HARDWARE?: (TRHHardwareRefT)[], CLOCK_BIAS_SECONDS?: number, CLOCK_DRIFT_SECONDS_PER_SECOND?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHInstallation.d.ts.map