import * as flatbuffers from 'flatbuffers';
import { FlatBufferTypeRef, FlatBufferTypeRefT } from './FlatBufferTypeRef.js';
import { bufferMutability } from './bufferMutability.js';
import { bufferOwnership } from './bufferOwnership.js';
import { payloadWireFormat } from './payloadWireFormat.js';
/**
 * Typed Arena Buffer — one descriptor for a payload slot in a shared arena.
 */
export declare class TAB implements flatbuffers.IUnpackableObject<TABT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TAB;
    static getRootAsTAB(bb: flatbuffers.ByteBuffer, obj?: TAB): TAB;
    static getSizePrefixedRootAsTAB(bb: flatbuffers.ByteBuffer, obj?: TAB): TAB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Byte offset of the payload body within the arena.
     */
    OFFSET(): number;
    /**
     * Byte length of the payload body.
     */
    SIZE(): number;
    /**
     * Required start alignment of the payload body (in bytes).
     */
    ALIGNMENT(): number;
    /**
     * Wire format for the body.
     */
    WIRE_FORMAT(): payloadWireFormat;
    /**
     * Optional payload schema identity.
     */
    TYPE_REF(obj?: FlatBufferTypeRef): FlatBufferTypeRef | null;
    /**
     * Mutability contract for the slot.
     */
    MUTABILITY(): bufferMutability;
    /**
     * Ownership contract for the slot.
     */
    OWNERSHIP(): bufferOwnership;
    /**
     * Optional opaque frame identifier for stream bookkeeping.
     */
    FRAME_ID(): bigint;
    static startTAB(builder: flatbuffers.Builder): void;
    static addOffset(builder: flatbuffers.Builder, OFFSET: number): void;
    static addSize(builder: flatbuffers.Builder, SIZE: number): void;
    static addAlignment(builder: flatbuffers.Builder, ALIGNMENT: number): void;
    static addWireFormat(builder: flatbuffers.Builder, WIRE_FORMAT: payloadWireFormat): void;
    static addTypeRef(builder: flatbuffers.Builder, TYPE_REFOffset: flatbuffers.Offset): void;
    static addMutability(builder: flatbuffers.Builder, MUTABILITY: bufferMutability): void;
    static addOwnership(builder: flatbuffers.Builder, OWNERSHIP: bufferOwnership): void;
    static addFrameId(builder: flatbuffers.Builder, FRAME_ID: bigint): void;
    static endTAB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTABBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTABBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TABT;
    unpackTo(_o: TABT): void;
}
export declare class TABT implements flatbuffers.IGeneratedObject {
    OFFSET: number;
    SIZE: number;
    ALIGNMENT: number;
    WIRE_FORMAT: payloadWireFormat;
    TYPE_REF: FlatBufferTypeRefT | null;
    MUTABILITY: bufferMutability;
    OWNERSHIP: bufferOwnership;
    FRAME_ID: bigint;
    constructor(OFFSET?: number, SIZE?: number, ALIGNMENT?: number, WIRE_FORMAT?: payloadWireFormat, TYPE_REF?: FlatBufferTypeRefT | null, MUTABILITY?: bufferMutability, OWNERSHIP?: bufferOwnership, FRAME_ID?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TAB.d.ts.map