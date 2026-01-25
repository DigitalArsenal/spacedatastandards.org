import * as flatbuffers from 'flatbuffers';
import { AggregateMember, AggregateMemberT } from './AggregateMember.js';
/**
 * Aggregate argument type
 */
export declare class AggregateArgumentType implements flatbuffers.IUnpackableObject<AggregateArgumentTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AggregateArgumentType;
    static getRootAsAggregateArgumentType(bb: flatbuffers.ByteBuffer, obj?: AggregateArgumentType): AggregateArgumentType;
    static getSizePrefixedRootAsAggregateArgumentType(bb: flatbuffers.ByteBuffer, obj?: AggregateArgumentType): AggregateArgumentType;
    /**
     * Type name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Member list
     */
    MEMBERS(index: number, obj?: AggregateMember): AggregateMember | null;
    membersLength(): number;
    static startAggregateArgumentType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addMembers(builder: flatbuffers.Builder, MEMBERSOffset: flatbuffers.Offset): void;
    static createMembersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMembersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAggregateArgumentType(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAggregateArgumentType(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, LONG_DESCRIPTIONOffset: flatbuffers.Offset, MEMBERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AggregateArgumentTypeT;
    unpackTo(_o: AggregateArgumentTypeT): void;
}
export declare class AggregateArgumentTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    MEMBERS: (AggregateMemberT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, MEMBERS?: (AggregateMemberT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AggregateArgumentType.d.ts.map