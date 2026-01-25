import * as flatbuffers from 'flatbuffers';
import { RateBasisType } from './RateBasisType.js';
/**
 * Rate specification for container in stream
 */
export declare class RateInStream implements flatbuffers.IUnpackableObject<RateInStreamT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RateInStream;
    static getRootAsRateInStream(bb: flatbuffers.ByteBuffer, obj?: RateInStream): RateInStream;
    static getSizePrefixedRootAsRateInStream(bb: flatbuffers.ByteBuffer, obj?: RateInStream): RateInStream;
    /**
     * Stream reference
     */
    STREAM_REF(): string | null;
    STREAM_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rate value
     */
    RATE(): number;
    /**
     * Rate basis
     */
    BASIS(): RateBasisType;
    static startRateInStream(builder: flatbuffers.Builder): void;
    static addStreamRef(builder: flatbuffers.Builder, STREAM_REFOffset: flatbuffers.Offset): void;
    static addRate(builder: flatbuffers.Builder, RATE: number): void;
    static addBasis(builder: flatbuffers.Builder, BASIS: RateBasisType): void;
    static endRateInStream(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRateInStream(builder: flatbuffers.Builder, STREAM_REFOffset: flatbuffers.Offset, RATE: number, BASIS: RateBasisType): flatbuffers.Offset;
    unpack(): RateInStreamT;
    unpackTo(_o: RateInStreamT): void;
}
export declare class RateInStreamT implements flatbuffers.IGeneratedObject {
    STREAM_REF: string | Uint8Array | null;
    RATE: number;
    BASIS: RateBasisType;
    constructor(STREAM_REF?: string | Uint8Array | null, RATE?: number, BASIS?: RateBasisType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RateInStream.d.ts.map