import * as flatbuffers from 'flatbuffers';
/**
 * Aggregate member definition
 */
export declare class AggregateMember implements flatbuffers.IUnpackableObject<AggregateMemberT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AggregateMember;
    static getRootAsAggregateMember(bb: flatbuffers.ByteBuffer, obj?: AggregateMember): AggregateMember;
    static getSizePrefixedRootAsAggregateMember(bb: flatbuffers.ByteBuffer, obj?: AggregateMember): AggregateMember;
    /**
     * Member name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parameter type
     */
    TYPE_REF(): string | null;
    TYPE_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAggregateMember(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addTypeRef(builder: flatbuffers.Builder, TYPE_REFOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAggregateMember(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAggregateMember(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, TYPE_REFOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AggregateMemberT;
    unpackTo(_o: AggregateMemberT): void;
}
export declare class AggregateMemberT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    TYPE_REF: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, TYPE_REF?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AggregateMember.d.ts.map