import * as flatbuffers from 'flatbuffers';
/**
 * One wallet or account to read.
 */
export declare class WHAAccount implements flatbuffers.IUnpackableObject<WHAAccountT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WHAAccount;
    static getRootAsWHAAccount(bb: flatbuffers.ByteBuffer, obj?: WHAAccount): WHAAccount;
    static getSizePrefixedRootAsWHAAccount(bb: flatbuffers.ByteBuffer, obj?: WHAAccount): WHAAccount;
    /**
     * Chain, as a CAIP-2 chain identifier, e.g. "eip155:1",
     * "bip122:000000000019d6689c085ae165831e93",
     * "solana:5eykt4UsFv8P8NJdTREpY1vzQKqZKvdp".
     */
    CHAIN_ID(): string | null;
    CHAIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short chain label for display, e.g. "BTC", "ETH", "SOL".
     */
    CHAIN_NAME(): string | null;
    CHAIN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Address on that chain, as the chain writes it.
     */
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the account record that links this wallet (an $ACT
     * ACCOUNT_ID), when there is one.
     */
    ACCOUNT_ID(): string | null;
    ACCOUNT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startWHAAccount(builder: flatbuffers.Builder): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset): void;
    static addChainName(builder: flatbuffers.Builder, CHAIN_NAMEOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addAccountId(builder: flatbuffers.Builder, ACCOUNT_IDOffset: flatbuffers.Offset): void;
    static endWHAAccount(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createWHAAccount(builder: flatbuffers.Builder, CHAIN_IDOffset: flatbuffers.Offset, CHAIN_NAMEOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, ACCOUNT_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WHAAccountT;
    unpackTo(_o: WHAAccountT): void;
}
export declare class WHAAccountT implements flatbuffers.IGeneratedObject {
    CHAIN_ID: string | Uint8Array | null;
    CHAIN_NAME: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    ACCOUNT_ID: string | Uint8Array | null;
    constructor(CHAIN_ID?: string | Uint8Array | null, CHAIN_NAME?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, ACCOUNT_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WHAAccount.d.ts.map