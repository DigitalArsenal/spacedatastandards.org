import * as flatbuffers from 'flatbuffers';
import { TRPPredicate, TRPPredicateT } from './TRPPredicate.js';
import { trpCombinator } from './trpCombinator.js';
/**
 * The rules of a trust rule policy.
 */
export declare class TRPGroup implements flatbuffers.IUnpackableObject<TRPGroupT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRPGroup;
    static getRootAsTRPGroup(bb: flatbuffers.ByteBuffer, obj?: TRPGroup): TRPGroup;
    static getSizePrefixedRootAsTRPGroup(bb: flatbuffers.ByteBuffer, obj?: TRPGroup): TRPGroup;
    /**
     * Stable identifier unique within the policy.
     */
    GROUP_ID(): string | null;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Always All: every rule must pass.
     */
    COMBINATOR(): trpCombinator;
    /**
     * The policy's rules, all of which must pass.
     */
    PREDICATES(index: number, obj?: TRPPredicate): TRPPredicate | null;
    predicatesLength(): number;
    /**
     * Retired: rules do not nest. Evaluators refuse a policy with child groups.
     */
    GROUPS(index: number, obj?: TRPGroup): TRPGroup | null;
    groupsLength(): number;
    static startTRPGroup(builder: flatbuffers.Builder): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addCombinator(builder: flatbuffers.Builder, COMBINATOR: trpCombinator): void;
    static addPredicates(builder: flatbuffers.Builder, PREDICATESOffset: flatbuffers.Offset): void;
    static createPredicatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPredicatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroups(builder: flatbuffers.Builder, GROUPSOffset: flatbuffers.Offset): void;
    static createGroupsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTRPGroup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTRPGroup(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset, COMBINATOR: trpCombinator, PREDICATESOffset: flatbuffers.Offset, GROUPSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRPGroupT;
    unpackTo(_o: TRPGroupT): void;
}
export declare class TRPGroupT implements flatbuffers.IGeneratedObject {
    GROUP_ID: string | Uint8Array | null;
    COMBINATOR: trpCombinator;
    PREDICATES: (TRPPredicateT)[];
    GROUPS: (TRPGroupT)[];
    constructor(GROUP_ID?: string | Uint8Array | null, COMBINATOR?: trpCombinator, PREDICATES?: (TRPPredicateT)[], GROUPS?: (TRPGroupT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRPGroup.d.ts.map