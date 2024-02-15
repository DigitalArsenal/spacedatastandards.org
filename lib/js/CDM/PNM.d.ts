import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message
 * This table includes a comprehensive set of cryptographic hashes and a digital signature for file publication.
 */
export declare class PNM implements flatbuffers.IUnpackableObject<PNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM;
    static getRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static getSizePrefixedRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    /**
     * IPFS Content Identifier (CID)
     * The hash of a file stored on the InterPlanetary File System (IPFS).
     * Refer to the section on IPFS integration for details.
     */
    IPFS_CID(): string | null;
    IPFS_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier generated from the data provider's public key
     */
    KEY_ADDRESS(): string | null;
    KEY_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ethereum Digital Signature
     * Digital signature of the IPFS file hash using Ethereum's signing mechanism.
     * Refer to the Ethereum Blockchain integration section for details.
     */
    ETH_DIGITAL_SIGNATURE(): string | null;
    ETH_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bitcoin Digital Signature
     * Digital signature of the IPFS file hash using Bitcoin's signing mechanism.
     * Refer to the Bitcoin Blockchain integration section for details.
     */
    BTC_DIGITAL_SIGNATURE(): string | null;
    BTC_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Litecoin Digital Signature
     * Digital signature of the IPFS file hash using Litecoin's signing mechanism.
     * Refer to the Litecoin Blockchain integration section for details.
     */
    LTC_DIGITAL_SIGNATURE(): string | null;
    LTC_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ripple Digital Signature
     * Digital signature of the IPFS file hash using Ripple's signing mechanism.
     * Refer to the Ripple Blockchain integration section for details.
     */
    XRP_DIGITAL_SIGNATURE(): string | null;
    XRP_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cardano Digital Signature
     * Digital signature of the IPFS file hash using Cardano's signing mechanism.
     * Refer to the Cardano Blockchain integration section for details.
     */
    ADA_DIGITAL_SIGNATURE(): string | null;
    ADA_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stellar Digital Signature
     * Digital signature of the IPFS file hash using Stellar's signing mechanism.
     * Refer to the Stellar Blockchain integration section for details.
     */
    XLM_DIGITAL_SIGNATURE(): string | null;
    XLM_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dogecoin Digital Signature
     * Digital signature of the IPFS file hash using Dogecoin's signing mechanism.
     * Refer to the Dogecoin Blockchain integration section for details.
     */
    DOGE_DIGITAL_SIGNATURE(): string | null;
    DOGE_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Monero Digital Signature
     * Digital signature of the IPFS file hash using Monero's signing mechanism.
     * Refer to the Monero Blockchain integration section for details.
     */
    XMR_DIGITAL_SIGNATURE(): string | null;
    XMR_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polkadot Digital Signature
     * Digital signature of the IPFS file hash using Polkadot's signing mechanism.
     * Refer to the Polkadot Blockchain integration section for details.
     */
    DOT_DIGITAL_SIGNATURE(): string | null;
    DOT_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Filecoin Digital Signature
     * Digital signature of the IPFS file hash using Filecoin's signing mechanism.
     * Refer to the Filecoin Blockchain integration section for details.
     */
    FIL_DIGITAL_SIGNATURE(): string | null;
    FIL_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tezos Digital Signature
     * Digital signature of the IPFS file hash using Tezos's signing mechanism.
     * Refer to the Tezos Blockchain integration section for details.
     */
    XTZ_DIGITAL_SIGNATURE(): string | null;
    XTZ_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cosmos Digital Signature
     * Digital signature of the IPFS file hash using Cosmos's signing mechanism.
     * Refer to the Cosmos Blockchain integration section for details.
     */
    ATOM_DIGITAL_SIGNATURE(): string | null;
    ATOM_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tron Digital Signature
     * Digital signature of the IPFS file hash using Tron's signing mechanism.
     * Refer to the Tron Blockchain integration section for details.
     */
    TRX_DIGITAL_SIGNATURE(): string | null;
    TRX_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Binance Coin Digital Signature
     * Digital signature of the IPFS file hash using Binance Coin's signing mechanism.
     * Refer to the Binance Coin Blockchain integration section for details.
     */
    BNB_DIGITAL_SIGNATURE(): string | null;
    BNB_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Avalanche Digital Signature
     * Digital signature of the IPFS file hash using Avalanche's signing mechanism.
     * Refer to the Avalanche Blockchain integration section for details.
     */
    AVAX_DIGITAL_SIGNATURE(): string | null;
    AVAX_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solana Digital Signature
     * Digital signature of the IPFS file hash using Solana's signing mechanism.
     * Refer to the Solana Blockchain integration section for details.
     */
    SOL_DIGITAL_SIGNATURE(): string | null;
    SOL_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addIpfsCid(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, KEY_ADDRESSOffset: flatbuffers.Offset): void;
    static addEthDigitalSignature(builder: flatbuffers.Builder, ETH_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addBtcDigitalSignature(builder: flatbuffers.Builder, BTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addLtcDigitalSignature(builder: flatbuffers.Builder, LTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addXrpDigitalSignature(builder: flatbuffers.Builder, XRP_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addAdaDigitalSignature(builder: flatbuffers.Builder, ADA_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addXlmDigitalSignature(builder: flatbuffers.Builder, XLM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addDogeDigitalSignature(builder: flatbuffers.Builder, DOGE_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addXmrDigitalSignature(builder: flatbuffers.Builder, XMR_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addDotDigitalSignature(builder: flatbuffers.Builder, DOT_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addFilDigitalSignature(builder: flatbuffers.Builder, FIL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addXtzDigitalSignature(builder: flatbuffers.Builder, XTZ_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addAtomDigitalSignature(builder: flatbuffers.Builder, ATOM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addTrxDigitalSignature(builder: flatbuffers.Builder, TRX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addBnbDigitalSignature(builder: flatbuffers.Builder, BNB_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addAvaxDigitalSignature(builder: flatbuffers.Builder, AVAX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static addSolDigitalSignature(builder: flatbuffers.Builder, SOL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNM(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset, KEY_ADDRESSOffset: flatbuffers.Offset, ETH_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, BTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, LTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XRP_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, ADA_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XLM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, DOGE_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XMR_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, DOT_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, FIL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XTZ_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, ATOM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, TRX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, BNB_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, AVAX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, SOL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    IPFS_CID: string | Uint8Array | null;
    KEY_ADDRESS: string | Uint8Array | null;
    ETH_DIGITAL_SIGNATURE: string | Uint8Array | null;
    BTC_DIGITAL_SIGNATURE: string | Uint8Array | null;
    LTC_DIGITAL_SIGNATURE: string | Uint8Array | null;
    XRP_DIGITAL_SIGNATURE: string | Uint8Array | null;
    ADA_DIGITAL_SIGNATURE: string | Uint8Array | null;
    XLM_DIGITAL_SIGNATURE: string | Uint8Array | null;
    DOGE_DIGITAL_SIGNATURE: string | Uint8Array | null;
    XMR_DIGITAL_SIGNATURE: string | Uint8Array | null;
    DOT_DIGITAL_SIGNATURE: string | Uint8Array | null;
    FIL_DIGITAL_SIGNATURE: string | Uint8Array | null;
    XTZ_DIGITAL_SIGNATURE: string | Uint8Array | null;
    ATOM_DIGITAL_SIGNATURE: string | Uint8Array | null;
    TRX_DIGITAL_SIGNATURE: string | Uint8Array | null;
    BNB_DIGITAL_SIGNATURE: string | Uint8Array | null;
    AVAX_DIGITAL_SIGNATURE: string | Uint8Array | null;
    SOL_DIGITAL_SIGNATURE: string | Uint8Array | null;
    constructor(IPFS_CID?: string | Uint8Array | null, KEY_ADDRESS?: string | Uint8Array | null, ETH_DIGITAL_SIGNATURE?: string | Uint8Array | null, BTC_DIGITAL_SIGNATURE?: string | Uint8Array | null, LTC_DIGITAL_SIGNATURE?: string | Uint8Array | null, XRP_DIGITAL_SIGNATURE?: string | Uint8Array | null, ADA_DIGITAL_SIGNATURE?: string | Uint8Array | null, XLM_DIGITAL_SIGNATURE?: string | Uint8Array | null, DOGE_DIGITAL_SIGNATURE?: string | Uint8Array | null, XMR_DIGITAL_SIGNATURE?: string | Uint8Array | null, DOT_DIGITAL_SIGNATURE?: string | Uint8Array | null, FIL_DIGITAL_SIGNATURE?: string | Uint8Array | null, XTZ_DIGITAL_SIGNATURE?: string | Uint8Array | null, ATOM_DIGITAL_SIGNATURE?: string | Uint8Array | null, TRX_DIGITAL_SIGNATURE?: string | Uint8Array | null, BNB_DIGITAL_SIGNATURE?: string | Uint8Array | null, AVAX_DIGITAL_SIGNATURE?: string | Uint8Array | null, SOL_DIGITAL_SIGNATURE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map