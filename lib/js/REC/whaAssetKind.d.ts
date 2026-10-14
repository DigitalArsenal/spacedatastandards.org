/**
 * Wallet Holdings Attestation (WHA)
 * Description
 * What one or more wallets or accounts held at a stated time, across chains,
 * and what it was worth: each asset held (a chain's native coin or a token),
 * its amount and its value in a stated currency, per-chain subtotals and
 * whether each chain's lookup was complete, the errors met, the total, and
 * who attested it. A node can publish one to show a security bond, a
 * treasury or a collateral balance; a reader can check it against the chains
 * itself, because every holding names its chain, address and asset.
 *
 * The same record asks and answers. A request carries ACCOUNTS (the chain
 * and address of each wallet to read) and nothing else; the answer repeats
 * them and adds HOLDINGS, CHAINS, the totals and the attester. A lookup that
 * fails contributes nothing, is marked incomplete and is named in ERRORS: an
 * attestation never invents a balance, and a value that could not be priced
 * is marked unvalued, never zero.
 *
 * Wallets an operator has linked to a node account are $ACT records of kind
 * ExternalLink (EXTERNAL_CHAIN, EXTERNAL_ADDRESS); each maps to one account
 * here, with ACCOUNT_ID naming the $ACT. WHA itself reads public chain state
 * only and never carries keys.
 * What kind of asset a holding is. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum whaAssetKind {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * The chain's native coin (BTC, ETH, SOL, ...).
     */
    Native = 1,
    /**
     * A fungible token issued by a contract or mint (ERC-20, SPL, ...).
     */
    FungibleToken = 2,
    /**
     * A non-fungible token (an attestation of value normally leaves these out).
     */
    NonFungibleToken = 3
}
//# sourceMappingURL=whaAssetKind.d.ts.map