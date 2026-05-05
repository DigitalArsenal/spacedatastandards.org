import * as flatbuffers from 'flatbuffers';
import { FlatBufferTypeRef, FlatBufferTypeRefT } from './FlatBufferTypeRef.js';
import { payloadWireFormat } from './payloadWireFormat.js';
/**
 * Accepted schema family for a port. When a port accepts multiple wire
 * formats (canonical FlatBuffer + aligned-binary), each ALLOWED_TYPE
 * entry carries its own TAB.FlatBufferTypeRef with the schema identity,
 * and the enclosing PLGPortManifest advertises both wire formats via
 * ALLOWED_WIRE_FORMATS. Per SDK contract: a port that advertises
 * aligned-binary MUST also advertise the canonical flatbuffer fallback
 * for the same schema and file identifier in the same set.
 */
export declare class PLGAcceptedTypeSet implements flatbuffers.IUnpackableObject<PLGAcceptedTypeSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGAcceptedTypeSet;
    static getRootAsPLGAcceptedTypeSet(bb: flatbuffers.ByteBuffer, obj?: PLGAcceptedTypeSet): PLGAcceptedTypeSet;
    static getSizePrefixedRootAsPLGAcceptedTypeSet(bb: flatbuffers.ByteBuffer, obj?: PLGAcceptedTypeSet): PLGAcceptedTypeSet;
    /**
     * Stable type-set identifier within the port.
     */
    SET_ID(): string;
    SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Specific FlatBuffer types accepted by the set.
     */
    ALLOWED_TYPES(index: number, obj?: FlatBufferTypeRef): FlatBufferTypeRef | null;
    allowedTypesLength(): number;
    /**
     * Wire formats this set accepts. If ALIGNED_BINARY is present,
     * FLATBUFFER MUST also be present for the same schemas.
     */
    ALLOWED_WIRE_FORMATS(index: number): payloadWireFormat | null;
    allowedWireFormatsLength(): number;
    allowedWireFormatsArray(): Uint8Array | null;
    /**
     * Human-readable explanation of the accepted schema family.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGAcceptedTypeSet(builder: flatbuffers.Builder): void;
    static addSetId(builder: flatbuffers.Builder, SET_IDOffset: flatbuffers.Offset): void;
    static addAllowedTypes(builder: flatbuffers.Builder, ALLOWED_TYPESOffset: flatbuffers.Offset): void;
    static createAllowedTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAllowedWireFormats(builder: flatbuffers.Builder, ALLOWED_WIRE_FORMATSOffset: flatbuffers.Offset): void;
    static createAllowedWireFormatsVector(builder: flatbuffers.Builder, data: payloadWireFormat[]): flatbuffers.Offset;
    static startAllowedWireFormatsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPLGAcceptedTypeSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGAcceptedTypeSet(builder: flatbuffers.Builder, SET_IDOffset: flatbuffers.Offset, ALLOWED_TYPESOffset: flatbuffers.Offset, ALLOWED_WIRE_FORMATSOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGAcceptedTypeSetT;
    unpackTo(_o: PLGAcceptedTypeSetT): void;
}
export declare class PLGAcceptedTypeSetT implements flatbuffers.IGeneratedObject {
    SET_ID: string | Uint8Array | null;
    ALLOWED_TYPES: (FlatBufferTypeRefT)[];
    ALLOWED_WIRE_FORMATS: (payloadWireFormat)[];
    DESCRIPTION: string | Uint8Array | null;
    constructor(SET_ID?: string | Uint8Array | null, ALLOWED_TYPES?: (FlatBufferTypeRefT)[], ALLOWED_WIRE_FORMATS?: (payloadWireFormat)[], DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGAcceptedTypeSet.d.ts.map