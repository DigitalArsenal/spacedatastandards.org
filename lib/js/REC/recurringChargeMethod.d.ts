/**
 * On-chain recurring charge mechanism.
 */
export declare enum recurringChargeMethod {
    /**
     * ERC-20 allowance the settlement contract draws per period
     */
    Erc20Allowance = 0,
    /**
     * EVM delegated / session-key authorization
     */
    EvmDelegate = 1,
    /**
     * Solana delegated token authority
     */
    SolDelegate = 2,
    /**
     * No standing authorization; the buyer re-authorizes each period
     */
    ReAuthorizePerPeriod = 3
}
//# sourceMappingURL=recurringChargeMethod.d.ts.map