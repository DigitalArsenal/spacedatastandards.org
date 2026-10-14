import * as flatbuffers from 'flatbuffers';
/**
 * One account's lookup on one chain.
 */
export declare class WHAChain implements flatbuffers.IUnpackableObject<WHAChainT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WHAChain;
    static getRootAsWHAChain(bb: flatbuffers.ByteBuffer, obj?: WHAChain): WHAChain;
    static getSizePrefixedRootAsWHAChain(bb: flatbuffers.ByteBuffer, obj?: WHAChain): WHAChain;
    CHAIN_ID(): string | null;
    CHAIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHAIN_NAME(): string | null;
    CHAIN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Assets with a positive amount at this address.
     */
    TOKEN_COUNT(): number;
    /**
     * True when every balance at this address was read and every holding was
     * priced. When false, VALUE is a partial sum and the chain is named in
     * ERRORS.
     */
    COMPLETE(): boolean;
    /**
     * Sum of the priced holdings' values in CURRENCY (complete only when
     * COMPLETE).
     */
    VALUE(): number;
    /**
     * Chain height the balances were read at; 0 = not reported.
     */
    BLOCK_HEIGHT(): bigint;
    /**
     * Commitment level of the read, e.g. "finalized", "latest", "confirmed".
     */
    COMMITMENT(): string | null;
    COMMITMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why the lookup is incomplete; empty when COMPLETE.
     */
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startWHAChain(builder: flatbuffers.Builder): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset): void;
    static addChainName(builder: flatbuffers.Builder, CHAIN_NAMEOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addTokenCount(builder: flatbuffers.Builder, TOKEN_COUNT: number): void;
    static addComplete(builder: flatbuffers.Builder, COMPLETE: boolean): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addBlockHeight(builder: flatbuffers.Builder, BLOCK_HEIGHT: bigint): void;
    static addCommitment(builder: flatbuffers.Builder, COMMITMENTOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static endWHAChain(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createWHAChain(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset, CHAIN_NAMEOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, TOKEN_COUNT: number, COMPLETE: boolean, VALUE: number, BLOCK_HEIGHT: bigint, COMMITMENTOffset: flatbuffers.Offset, ERROROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WHAChainT;
    unpackTo(_o: WHAChainT): void;
}
export declare class WHAChainT implements flatbuffers.IGeneratedObject {
    CHAIN_ID: string | Uint8Array | null;
    CHAIN_NAME: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    TOKEN_COUNT: number;
    COMPLETE: boolean;
    VALUE: number;
    BLOCK_HEIGHT: bigint;
    COMMITMENT: string | Uint8Array | null;
    ERROR: string | Uint8Array | null;
    constructor(CHAIN_ID?: string | Uint8Array | null, CHAIN_NAME?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, TOKEN_COUNT?: number, COMPLETE?: boolean, VALUE?: number, BLOCK_HEIGHT?: bigint, COMMITMENT?: string | Uint8Array | null, ERROR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WHAChain.d.ts.map