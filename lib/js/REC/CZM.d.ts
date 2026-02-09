import * as flatbuffers from 'flatbuffers';
import { CZMPacket, CZMPacketT } from './CZMPacket.js';
/**
 * CZML Document
 */
export declare class CZM implements flatbuffers.IUnpackableObject<CZMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZM;
    static getRootAsCZM(bb: flatbuffers.ByteBuffer, obj?: CZM): CZM;
    static getSizePrefixedRootAsCZM(bb: flatbuffers.ByteBuffer, obj?: CZM): CZM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Document-level name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Document-level version
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Clock settings - current time (ISO 8601)
     */
    CLOCK_CURRENT_TIME(): string | null;
    CLOCK_CURRENT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Clock settings - interval (ISO 8601 interval)
     */
    CLOCK_INTERVAL(): string | null;
    CLOCK_INTERVAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Clock settings - multiplier
     */
    CLOCK_MULTIPLIER(): number;
    /**
     * Clock range
     */
    CLOCK_RANGE(): string | null;
    CLOCK_RANGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Clock step
     */
    CLOCK_STEP(): string | null;
    CLOCK_STEP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * All packets in the document
     */
    PACKETS(index: number, obj?: CZMPacket): CZMPacket | null;
    packetsLength(): number;
    static startCZM(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addClockCurrentTime(builder: flatbuffers.Builder, CLOCK_CURRENT_TIMEOffset: flatbuffers.Offset): void;
    static addClockInterval(builder: flatbuffers.Builder, CLOCK_INTERVALOffset: flatbuffers.Offset): void;
    static addClockMultiplier(builder: flatbuffers.Builder, CLOCK_MULTIPLIER: number): void;
    static addClockRange(builder: flatbuffers.Builder, CLOCK_RANGEOffset: flatbuffers.Offset): void;
    static addClockStep(builder: flatbuffers.Builder, CLOCK_STEPOffset: flatbuffers.Offset): void;
    static addPackets(builder: flatbuffers.Builder, PACKETSOffset: flatbuffers.Offset): void;
    static createPacketsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPacketsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCZM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCZMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCZMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCZM(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, CLOCK_CURRENT_TIMEOffset: flatbuffers.Offset, CLOCK_INTERVALOffset: flatbuffers.Offset, CLOCK_MULTIPLIER: number, CLOCK_RANGEOffset: flatbuffers.Offset, CLOCK_STEPOffset: flatbuffers.Offset, PACKETSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CZMT;
    unpackTo(_o: CZMT): void;
}
export declare class CZMT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    CLOCK_CURRENT_TIME: string | Uint8Array | null;
    CLOCK_INTERVAL: string | Uint8Array | null;
    CLOCK_MULTIPLIER: number;
    CLOCK_RANGE: string | Uint8Array | null;
    CLOCK_STEP: string | Uint8Array | null;
    PACKETS: (CZMPacketT)[];
    constructor(NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, CLOCK_CURRENT_TIME?: string | Uint8Array | null, CLOCK_INTERVAL?: string | Uint8Array | null, CLOCK_MULTIPLIER?: number, CLOCK_RANGE?: string | Uint8Array | null, CLOCK_STEP?: string | Uint8Array | null, PACKETS?: (CZMPacketT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZM.d.ts.map