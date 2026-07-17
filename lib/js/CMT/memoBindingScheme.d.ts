/**
 * How the purchase reference (`$PUR.REQUEST_ID`) is bound on-chain so a
 * payment can be matched to an order replay-safely.
 */
export declare enum memoBindingScheme {
    /**
     * No on-chain memo binding
     */
    NoMemo = 0,
    /**
     * Bound in EVM transaction calldata
     */
    TxData = 1,
    /**
     * Solana memo program instruction
     */
    SolMemo = 2,
    /**
     * Bitcoin OP_RETURN output
     */
    OpReturn = 3
}
//# sourceMappingURL=memoBindingScheme.d.ts.map