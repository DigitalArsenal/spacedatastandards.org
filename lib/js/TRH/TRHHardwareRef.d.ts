import * as flatbuffers from 'flatbuffers';
import { trhHardwareKind } from './trhHardwareKind.js';
export declare class TRHHardwareRef implements flatbuffers.IUnpackableObject<TRHHardwareRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRHHardwareRef;
    static getRootAsTRHHardwareRef(bb: flatbuffers.ByteBuffer, obj?: TRHHardwareRef): TRHHardwareRef;
    static getSizePrefixedRootAsTRHHardwareRef(bb: flatbuffers.ByteBuffer, obj?: TRHHardwareRef): TRHHardwareRef;
    HARDWARE_KIND(): trhHardwareKind;
    HARDWARE_ID(): string;
    HARDWARE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startTRHHardwareRef(builder: flatbuffers.Builder): void;
    static addHardwareKind(builder: flatbuffers.Builder, HARDWARE_KIND: trhHardwareKind): void;
    static addHardwareId(builder: flatbuffers.Builder, HARDWARE_IDOffset: flatbuffers.Offset): void;
    static endTRHHardwareRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRHHardwareRef(builder: flatbuffers.Builder, HARDWARE_KIND: trhHardwareKind, HARDWARE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRHHardwareRefT;
    unpackTo(_o: TRHHardwareRefT): void;
}
export declare class TRHHardwareRefT implements flatbuffers.IGeneratedObject {
    HARDWARE_KIND: trhHardwareKind;
    HARDWARE_ID: string | Uint8Array | null;
    constructor(HARDWARE_KIND?: trhHardwareKind, HARDWARE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRHHardwareRef.d.ts.map