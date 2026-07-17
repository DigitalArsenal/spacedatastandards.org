/**
 * On-chain settlement mechanism a buyer's payment targets.
 */
export declare enum settlementMechanism {
    /**
     * Native-asset transfer to a plain address (no split contract)
     */
    NativeTransfer = 0,
    /**
     * ERC-20 / SPL token transfer to a plain address
     */
    Erc20Transfer = 1,
    /**
     * 0xSplits-style splitter contract on an EVM chain
     */
    EthSplitter = 2,
    /**
     * Splitter program on Solana
     */
    SolSplitter = 3,
    /**
     * Direct address payout (e.g. Bitcoin); split settled off-contract
     */
    DirectAddress = 4
}
//# sourceMappingURL=settlementMechanism.d.ts.map