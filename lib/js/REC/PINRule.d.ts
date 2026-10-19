import * as flatbuffers from 'flatbuffers';
import { pinClass } from './pinClass.js';
/**
 * One rule of the policy.
 */
export declare class PINRule implements flatbuffers.IUnpackableObject<PINRuleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PINRule;
    static getRootAsPINRule(bb: flatbuffers.ByteBuffer, obj?: PINRule): PINRule;
    static getSizePrefixedRootAsPINRule(bb: flatbuffers.ByteBuffer, obj?: PINRule): PINRule;
    CLASS(): pinClass;
    /**
     * Feed within the class; absent for the whole class.
     */
    FEED(): string | null;
    FEED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the node pins the content the rule covers.
     */
    ENABLED(): boolean;
    /**
     * True for a rule a client cannot change (NODE_EPM and ACCOUNT_EPM).
     */
    LOCKED(): boolean;
    /**
     * Root CIDs the node holds pinned under the rule.
     */
    PINNED_ROOTS(): bigint;
    /**
     * Bytes the node holds pinned under the rule.
     */
    PINNED_BYTES(): bigint;
    static startPINRule(builder: flatbuffers.Builder): void;
    static addClass(builder: flatbuffers.Builder, CLASS: pinClass): void;
    static addFeed(builder: flatbuffers.Builder, FEEDOffset: flatbuffers.Offset): void;
    static addEnabled(builder: flatbuffers.Builder, ENABLED: boolean): void;
    static addLocked(builder: flatbuffers.Builder, LOCKED: boolean): void;
    static addPinnedRoots(builder: flatbuffers.Builder, PINNED_ROOTS: bigint): void;
    static addPinnedBytes(builder: flatbuffers.Builder, PINNED_BYTES: bigint): void;
    static endPINRule(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPINRule(builder: flatbuffers.Builder, CLASS: pinClass, FEEDOffset: flatbuffers.Offset, ENABLED: boolean, LOCKED: boolean, PINNED_ROOTS: bigint, PINNED_BYTES: bigint): flatbuffers.Offset;
    unpack(): PINRuleT;
    unpackTo(_o: PINRuleT): void;
}
export declare class PINRuleT implements flatbuffers.IGeneratedObject {
    CLASS: pinClass;
    FEED: string | Uint8Array | null;
    ENABLED: boolean;
    LOCKED: boolean;
    PINNED_ROOTS: bigint;
    PINNED_BYTES: bigint;
    constructor(CLASS?: pinClass, FEED?: string | Uint8Array | null, ENABLED?: boolean, LOCKED?: boolean, PINNED_ROOTS?: bigint, PINNED_BYTES?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PINRule.d.ts.map