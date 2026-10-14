import * as flatbuffers from 'flatbuffers';
import { rndSource } from './rndSource.js';
/**
 * Random Data - a request for random bytes, or the bytes.
 */
export declare class RND implements flatbuffers.IUnpackableObject<RNDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RND;
    static getRootAsRND(bb: flatbuffers.ByteBuffer, obj?: RND): RND;
    static getSizePrefixedRootAsRND(bb: flatbuffers.ByteBuffer, obj?: RND): RND;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Number of bytes requested or delivered.
     */
    LENGTH(): number;
    /**
     * The random bytes; empty in a request.
     */
    BYTES(index: number): number | null;
    bytesLength(): number;
    bytesArray(): Uint8Array | null;
    SOURCE(): rndSource;
    /**
     * Unix milliseconds when the bytes were generated; 0 in a request.
     */
    GENERATED_AT_MS(): bigint;
    /**
     * Identifier of the generator or beacon (a device serial, a beacon URL).
     */
    GENERATOR_ID(): string | null;
    GENERATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position of this block in the generator's output, for beacons and
     * deterministic generators; 0 = not sequenced.
     */
    SEQUENCE(): bigint;
    /**
     * Seed of a Deterministic generator, so the block can be reproduced.
     */
    SEED(index: number): number | null;
    seedLength(): number;
    seedArray(): Uint8Array | null;
    static startRND(builder: flatbuffers.Builder): void;
    static addLength(builder: flatbuffers.Builder, LENGTH: number): void;
    static addBytes(builder: flatbuffers.Builder, BYTESOffset: flatbuffers.Offset): void;
    static createBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCE: rndSource): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addGeneratorId(builder: flatbuffers.Builder, GENERATOR_IDOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static addSeed(builder: flatbuffers.Builder, SEEDOffset: flatbuffers.Offset): void;
    static createSeedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSeedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRND(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRNDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRNDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRND(builder: flatbuffers.Builder, LENGTH: number, BYTESOffset: flatbuffers.Offset, SOURCE: rndSource, GENERATED_AT_MS: bigint, GENERATOR_IDOffset: flatbuffers.Offset, SEQUENCE: bigint, SEEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RNDT;
    unpackTo(_o: RNDT): void;
}
export declare class RNDT implements flatbuffers.IGeneratedObject {
    LENGTH: number;
    BYTES: (number)[];
    SOURCE: rndSource;
    GENERATED_AT_MS: bigint;
    GENERATOR_ID: string | Uint8Array | null;
    SEQUENCE: bigint;
    SEED: (number)[];
    constructor(LENGTH?: number, BYTES?: (number)[], SOURCE?: rndSource, GENERATED_AT_MS?: bigint, GENERATOR_ID?: string | Uint8Array | null, SEQUENCE?: bigint, SEED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RND.d.ts.map