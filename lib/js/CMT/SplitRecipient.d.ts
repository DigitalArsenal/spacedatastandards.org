import * as flatbuffers from 'flatbuffers';
/**
 * Recipient of an on-chain revenue split. The identity binds to an `$EPM`
 * via CHAIN_PROOFS so a payout address is provably the recipient's.
 */
export declare class SplitRecipient implements flatbuffers.IUnpackableObject<SplitRecipientT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SplitRecipient;
    static getRootAsSplitRecipient(bb: flatbuffers.ByteBuffer, obj?: SplitRecipient): SplitRecipient;
    static getSizePrefixedRootAsSplitRecipient(bb: flatbuffers.ByteBuffer, obj?: SplitRecipient): SplitRecipient;
    /**
     * IPFS CID of the recipient's Entity Profile Message (`$EPM`)
     */
    EPM_CID(): string | null;
    EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Settlement chain, e.g. "ethereum", "solana", "bitcoin"
     */
    CHAIN(): string | null;
    CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-chain payout address (EVM 0x / SOL base58 / BTC address)
     */
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Account xpub the address derives from
     */
    XPUB(): string | null;
    XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSplitRecipient(builder: flatbuffers.Builder): void;
    static addEpmCid(builder: flatbuffers.Builder, EPM_CIDOffset: flatbuffers.Offset): void;
    static addChain(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addXpub(builder: flatbuffers.Builder, XPUBOffset: flatbuffers.Offset): void;
    static endSplitRecipient(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSplitRecipient(builder: flatbuffers.Builder, EPM_CIDOffset: flatbuffers.Offset, CHAINOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, XPUBOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SplitRecipientT;
    unpackTo(_o: SplitRecipientT): void;
}
export declare class SplitRecipientT implements flatbuffers.IGeneratedObject {
    EPM_CID: string | Uint8Array | null;
    CHAIN: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    XPUB: string | Uint8Array | null;
    constructor(EPM_CID?: string | Uint8Array | null, CHAIN?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, XPUB?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SplitRecipient.d.ts.map