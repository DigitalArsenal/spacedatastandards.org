import * as flatbuffers from 'flatbuffers';
import { SplitRecipient, SplitRecipientT } from './SplitRecipient.js';
import { memoBindingScheme } from './memoBindingScheme.js';
import { settlementMechanism } from './settlementMechanism.js';
/**
 * Chain Settlement / Smart-Contract Descriptor. The forward description of the
 * exact established splitter contract/program a buyer's wallet targets so
 * payment and platform commission settle atomically on-chain. Referenced by
 * `$CMT.CONTRACTS` and echoed into a store `checkout` quote. Commission is
 * realized by the splitter contract itself when the buyer pays it; there is no
 * off-chain or manual settlement step.
 */
export declare class SCX implements flatbuffers.IUnpackableObject<SCXT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCX;
    static getRootAsSCX(bb: flatbuffers.ByteBuffer, obj?: SCX): SCX;
    static getSizePrefixedRootAsSCX(bb: flatbuffers.ByteBuffer, obj?: SCX): SCX;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Settlement chain identifier, e.g. "ethereum", "solana", "bitcoin"
     * (matches `$PUR.PAYMENT_CHAIN`)
     */
    CHAIN(): string;
    CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * EVM chainId; 0 for non-EVM chains
     */
    CHAIN_ID(): bigint;
    /**
     * On-chain settlement mechanism
     */
    SETTLEMENT_KIND(): settlementMechanism;
    /**
     * Established split standard id, e.g. "0xsplits.v2" (ETH) or the SOL
     * splitter program name. An audited off-the-shelf standard, not a custom
     * contract.
     */
    SPLITTER_STANDARD(): string | null;
    SPLITTER_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Deployed splitter contract address (ETH) or splitter program id (SOL) the
     * buyer's payment routes into
     */
    SPLITTER_ADDRESS(): string | null;
    SPLITTER_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The specific split configuration (recipient set + basis points) registered
     * with the splitter
     */
    SPLIT_CONFIG_ID(): string | null;
    SPLIT_CONFIG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ERC-20 / SPL mint address for stablecoin settlement; empty = native asset
     */
    TOKEN_ADDRESS(): string | null;
    TOKEN_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Token symbol, e.g. "USDC"
     */
    TOKEN_SYMBOL(): string | null;
    TOKEN_SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Token decimals, e.g. 6 for USDC
     */
    TOKEN_DECIMALS(): number;
    /**
     * The recipient set the split configuration encodes (platform + publisher…),
     * mirrored here for independent verification
     */
    SPLIT_RECIPIENTS(index: number, obj?: SplitRecipient): SplitRecipient | null;
    splitRecipientsLength(): number;
    /**
     * Confirmations required before the payment is accepted
     */
    MIN_CONFIRMATIONS(): number;
    /**
     * How the order reference is bound on-chain for replay-safe matching
     */
    MEMO_SCHEME(): memoBindingScheme;
    static startSCX(builder: flatbuffers.Builder): void;
    static addChain(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset): void;
    static addChainId(builder: flatbuffers.Builder, CHAIN_ID: bigint): void;
    static addSettlementKind(builder: flatbuffers.Builder, SETTLEMENT_KIND: settlementMechanism): void;
    static addSplitterStandard(builder: flatbuffers.Builder, SPLITTER_STANDARDOffset: flatbuffers.Offset): void;
    static addSplitterAddress(builder: flatbuffers.Builder, SPLITTER_ADDRESSOffset: flatbuffers.Offset): void;
    static addSplitConfigId(builder: flatbuffers.Builder, SPLIT_CONFIG_IDOffset: flatbuffers.Offset): void;
    static addTokenAddress(builder: flatbuffers.Builder, TOKEN_ADDRESSOffset: flatbuffers.Offset): void;
    static addTokenSymbol(builder: flatbuffers.Builder, TOKEN_SYMBOLOffset: flatbuffers.Offset): void;
    static addTokenDecimals(builder: flatbuffers.Builder, TOKEN_DECIMALS: number): void;
    static addSplitRecipients(builder: flatbuffers.Builder, SPLIT_RECIPIENTSOffset: flatbuffers.Offset): void;
    static createSplitRecipientsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSplitRecipientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinConfirmations(builder: flatbuffers.Builder, MIN_CONFIRMATIONS: number): void;
    static addMemoScheme(builder: flatbuffers.Builder, MEMO_SCHEME: memoBindingScheme): void;
    static endSCX(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSCX(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset, CHAIN_ID: bigint, SETTLEMENT_KIND: settlementMechanism, SPLITTER_STANDARDOffset: flatbuffers.Offset, SPLITTER_ADDRESSOffset: flatbuffers.Offset, SPLIT_CONFIG_IDOffset: flatbuffers.Offset, TOKEN_ADDRESSOffset: flatbuffers.Offset, TOKEN_SYMBOLOffset: flatbuffers.Offset, TOKEN_DECIMALS: number, SPLIT_RECIPIENTSOffset: flatbuffers.Offset, MIN_CONFIRMATIONS: number, MEMO_SCHEME: memoBindingScheme): flatbuffers.Offset;
    unpack(): SCXT;
    unpackTo(_o: SCXT): void;
}
export declare class SCXT implements flatbuffers.IGeneratedObject {
    CHAIN: string | Uint8Array | null;
    CHAIN_ID: bigint;
    SETTLEMENT_KIND: settlementMechanism;
    SPLITTER_STANDARD: string | Uint8Array | null;
    SPLITTER_ADDRESS: string | Uint8Array | null;
    SPLIT_CONFIG_ID: string | Uint8Array | null;
    TOKEN_ADDRESS: string | Uint8Array | null;
    TOKEN_SYMBOL: string | Uint8Array | null;
    TOKEN_DECIMALS: number;
    SPLIT_RECIPIENTS: (SplitRecipientT)[];
    MIN_CONFIRMATIONS: number;
    MEMO_SCHEME: memoBindingScheme;
    constructor(CHAIN?: string | Uint8Array | null, CHAIN_ID?: bigint, SETTLEMENT_KIND?: settlementMechanism, SPLITTER_STANDARD?: string | Uint8Array | null, SPLITTER_ADDRESS?: string | Uint8Array | null, SPLIT_CONFIG_ID?: string | Uint8Array | null, TOKEN_ADDRESS?: string | Uint8Array | null, TOKEN_SYMBOL?: string | Uint8Array | null, TOKEN_DECIMALS?: number, SPLIT_RECIPIENTS?: (SplitRecipientT)[], MIN_CONFIRMATIONS?: number, MEMO_SCHEME?: memoBindingScheme);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCX.d.ts.map