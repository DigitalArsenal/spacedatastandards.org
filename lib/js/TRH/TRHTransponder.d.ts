import * as flatbuffers from 'flatbuffers';
import { trhTurnaroundMode } from './trhTurnaroundMode.js';
export declare class TRHTransponder implements flatbuffers.IUnpackableObject<TRHTransponderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHTransponder;
    static getRootAsTRHTransponder(bb: flatbuffers.ByteBuffer, obj?: TRHTransponder): TRHTransponder;
    static getSizePrefixedRootAsTRHTransponder(bb: flatbuffers.ByteBuffer, obj?: TRHTransponder): TRHTransponder;
    HARDWARE_ID(): string;
    HARDWARE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    TURNAROUND_MODE(): trhTurnaroundMode;
    TURNAROUND_NUMERATOR(): number;
    TURNAROUND_DENOMINATOR(): number;
    GROUP_DELAY_SECONDS(): number;
    RECEIVER_ID(): string | null;
    RECEIVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRANSMITTER_ID(): string | null;
    TRANSMITTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTRHTransponder(builder: flatbuffers.Builder): void;
    static addHardwareId(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset): void;
    static addTurnaroundMode(builder: flatbuffers.Builder, TURNAROUND_MODE: trhTurnaroundMode): void;
    static addTurnaroundNumerator(builder: flatbuffers.Builder, TURNAROUND_NUMERATOR: number): void;
    static addTurnaroundDenominator(builder: flatbuffers.Builder, TURNAROUND_DENOMINATOR: number): void;
    static addGroupDelaySeconds(builder: flatbuffers.Builder, GROUP_DELAY_SECONDS: number): void;
    static addReceiverId(builder: flatbuffers.Builder, RECEIVER_IDOffset: flatbuffers.Offset): void;
    static addTransmitterId(builder: flatbuffers.Builder, TRANSMITTER_IDOffset: flatbuffers.Offset): void;
    static endTRHTransponder(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHTransponder(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset, TURNAROUND_MODE: trhTurnaroundMode, TURNAROUND_NUMERATOR: number, TURNAROUND_DENOMINATOR: number, GROUP_DELAY_SECONDS: number, RECEIVER_IDOffset: flatbuffers.Offset, TRANSMITTER_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRHTransponderT;
    unpackTo(_o: TRHTransponderT): void;
}
export declare class TRHTransponderT implements flatbuffers.IGeneratedObject {
    HARDWARE_ID: string | Uint8Array | null;
    TURNAROUND_MODE: trhTurnaroundMode;
    TURNAROUND_NUMERATOR: number;
    TURNAROUND_DENOMINATOR: number;
    GROUP_DELAY_SECONDS: number;
    RECEIVER_ID: string | Uint8Array | null;
    TRANSMITTER_ID: string | Uint8Array | null;
    constructor(HARDWARE_ID?: string | Uint8Array | null, TURNAROUND_MODE?: trhTurnaroundMode, TURNAROUND_NUMERATOR?: number, TURNAROUND_DENOMINATOR?: number, GROUP_DELAY_SECONDS?: number, RECEIVER_ID?: string | Uint8Array | null, TRANSMITTER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHTransponder.d.ts.map