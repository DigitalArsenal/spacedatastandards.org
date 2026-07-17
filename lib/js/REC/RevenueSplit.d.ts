import * as flatbuffers from 'flatbuffers';
import { SplitRecipient, SplitRecipientT } from './SplitRecipient.js';
import { splitRole } from './splitRole.js';
/**
 * One recipient's share of a sale, expressed in basis points.
 */
export declare class RevenueSplit implements flatbuffers.IUnpackableObject<RevenueSplitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RevenueSplit;
    static getRootAsRevenueSplit(bb: flatbuffers.ByteBuffer, obj?: RevenueSplit): RevenueSplit;
    static getSizePrefixedRootAsRevenueSplit(bb: flatbuffers.ByteBuffer, obj?: RevenueSplit): RevenueSplit;
    /**
     * The payout recipient
     */
    RECIPIENT(obj?: SplitRecipient): SplitRecipient | null;
    /**
     * Share in basis points (1/100 of a percent); all splits plus the platform
     * commission sum to 10000
     */
    BPS(): number;
    /**
     * The role this recipient plays
     */
    ROLE(): splitRole;
    static startRevenueSplit(builder: flatbuffers.Builder): void;
    static addRecipient(builder: flatbuffers.Builder, RECIPIENTOffset: flatbuffers.Offset): void;
    static addBps(builder: flatbuffers.Builder, BPS: number): void;
    static addRole(builder: flatbuffers.Builder, ROLE: splitRole): void;
    static endRevenueSplit(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRevenueSplit(builder: flatbuffers.Builder, RECIPIENTOffset: flatbuffers.Offset, BPS: number, ROLE: splitRole): flatbuffers.Offset;
    unpack(): RevenueSplitT;
    unpackTo(_o: RevenueSplitT): void;
}
export declare class RevenueSplitT implements flatbuffers.IGeneratedObject {
    RECIPIENT: SplitRecipientT | null;
    BPS: number;
    ROLE: splitRole;
    constructor(RECIPIENT?: SplitRecipientT | null, BPS?: number, ROLE?: splitRole);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RevenueSplit.d.ts.map