import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message
 */
export declare class PNM implements flatbuffers.IUnpackableObject<PNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM;
    static getRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static getSizePrefixedRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    /**
     * Multiformat Address
     * https://multiformats.io/multiaddr/
     * A universal address format for representing multiple network protocols. Examples include:
     * - /ip4/192.168.1.1/tcp/80 for an IPv4 address with TCP protocol
     * - /ip6zone/x/ip6/::1 for an IPv6 address with a zone
     * - /dns4/example.com for a domain name resolvable only to IPv4 addresses
     * - /ipfs/bafybeiccfclkdtucu6y4yc5cpr6y3yuinr67svmii46v5cfcrkp47ihehy/README.txt -IPFS address w/CID and path to `README.txt`.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content Identifier (CID) - Self-describing unique ID for distributed systems
     * https://github.com/multiformats/cid
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ethereum Digital Signature
     * Digital signature of the CID using Ethereum's signing mechanism.
     * Refer to the Ethereum Blockchain integration section for details.
     */
    ETH_DIGITAL_SIGNATURE(): string | null;
    ETH_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bitcoin Digital Signature
     * Digital signature of the CID using Bitcoin's signing mechanism.
     * Refer to the Bitcoin Blockchain integration section for details.
     */
    BTC_DIGITAL_SIGNATURE(): string | null;
    BTC_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Litecoin Digital Signature
     * Digital signature of the CID using Litecoin's signing mechanism.
     * Refer to the Litecoin Blockchain integration section for details.
     */
    LTC_DIGITAL_SIGNATURE(): string | null;
    LTC_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ripple Digital Signature
     * Digital signature of the CID using Ripple's signing mechanism.
     * Refer to the Ripple Blockchain integration section for details.
     */
    XRP_DIGITAL_SIGNATURE(): string | null;
    XRP_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cardano Digital Signature
     * Digital signature of the CID using Cardano's signing mechanism.
     * Refer to the Cardano Blockchain integration section for details.
     */
    ADA_DIGITAL_SIGNATURE(): string | null;
    ADA_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stellar Digital Signature
     * Digital signature of the CID using Stellar's signing mechanism.
     * Refer to the Stellar Blockchain integration section for details.
     */
    XLM_DIGITAL_SIGNATURE(): string | null;
    XLM_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dogecoin Digital Signature
     * Digital signature of the CID using Dogecoin's signing mechanism.
     * Refer to the Dogecoin Blockchain integration section for details.
     */
    DOGE_DIGITAL_SIGNATURE(): string | null;
    DOGE_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Monero Digital Signature
     * Digital signature of the CID using Monero's signing mechanism.
     * Refer to the Monero Blockchain integration section for details.
     */
    XMR_DIGITAL_SIGNATURE(): string | null;
    XMR_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polkadot Digital Signature
     * Digital signature of the CID using Polkadot's signing mechanism.
     * Refer to the Polkadot Blockchain integration section for details.
     */
    DOT_DIGITAL_SIGNATURE(): string | null;
    DOT_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Filecoin Digital Signature
     * Digital signature of the CID using Filecoin's signing mechanism.
     * Refer to the Filecoin Blockchain integration section for details.
     */
    FIL_DIGITAL_SIGNATURE(): string | null;
    FIL_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tezos Digital Signature
     * Digital signature of the CID using Tezos's signing mechanism.
     * Refer to the Tezos Blockchain integration section for details.
     */
    XTZ_DIGITAL_SIGNATURE(): string | null;
    XTZ_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cosmos Digital Signature
     * Digital signature of the CID using Cosmos's signing mechanism.
     * Refer to the Cosmos Blockchain integration section for details.
     */
    ATOM_DIGITAL_SIGNATURE(): string | null;
    ATOM_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tron Digital Signature
     * Digital signature of the CID using Tron's signing mechanism.
     * Refer to the Tron Blockchain integration section for details.
     */
    TRX_DIGITAL_SIGNATURE(): string | null;
    TRX_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Binance Coin Digital Signature
     * Digital signature of the CID using Binance Coin's signing mechanism.
     * Refer to the Binance Coin Blockchain integration section for details.
     */
    BNB_DIGITAL_SIGNATURE(): string | null;
    BNB_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Avalanche Digital Signature
     * Digital signature of the CID using Avalanche's signing mechanism.
     * Refer to the Avalanche Blockchain integration section for details.
     */
    AVAX_DIGITAL_SIGNATURE(): string | null;
    AVAX_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solana Digital Signature
     * Digital signature of the CID using Solana's signing mechanism.
     * Refer to the Solana Blockchain integration section for details.
     */
    SOL_DIGITAL_SIGNATURE(): string | null;
    SOL_DIGITAL_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
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
    static createPNM(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, ETH_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, BTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, LTC_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XRP_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, ADA_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XLM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, DOGE_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XMR_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, DOT_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, FIL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, XTZ_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, ATOM_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, TRX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, BNB_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, AVAX_DIGITAL_SIGNATUREOffset: flatbuffers.Offset, SOL_DIGITAL_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    CID: string | Uint8Array | null;
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
    constructor(MULTIFORMAT_ADDRESS?: string | Uint8Array | null, CID?: string | Uint8Array | null, ETH_DIGITAL_SIGNATURE?: string | Uint8Array | null, BTC_DIGITAL_SIGNATURE?: string | Uint8Array | null, LTC_DIGITAL_SIGNATURE?: string | Uint8Array | null, XRP_DIGITAL_SIGNATURE?: string | Uint8Array | null, ADA_DIGITAL_SIGNATURE?: string | Uint8Array | null, XLM_DIGITAL_SIGNATURE?: string | Uint8Array | null, DOGE_DIGITAL_SIGNATURE?: string | Uint8Array | null, XMR_DIGITAL_SIGNATURE?: string | Uint8Array | null, DOT_DIGITAL_SIGNATURE?: string | Uint8Array | null, FIL_DIGITAL_SIGNATURE?: string | Uint8Array | null, XTZ_DIGITAL_SIGNATURE?: string | Uint8Array | null, ATOM_DIGITAL_SIGNATURE?: string | Uint8Array | null, TRX_DIGITAL_SIGNATURE?: string | Uint8Array | null, BNB_DIGITAL_SIGNATURE?: string | Uint8Array | null, AVAX_DIGITAL_SIGNATURE?: string | Uint8Array | null, SOL_DIGITAL_SIGNATURE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map