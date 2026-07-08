/**
 * Payment method accepted
 */
export declare enum paymentMethod {
    /**
     * Ethereum cryptocurrency
     */
    Crypto_ETH = 0,
    /**
     * Solana cryptocurrency
     */
    Crypto_SOL = 1,
    /**
     * Bitcoin cryptocurrency
     */
    Crypto_BTC = 2,
    /**
     * Internal SDN credits system
     */
    SDN_Credits = 3,
    /**
     * Fiat payment via Stripe
     */
    Fiat_Stripe = 4,
    /**
     * Free/open data
     */
    Free = 5,
    /**
     * Usage-based billing settled after metered delivery
     */
    UsageBased = 6,
    /**
     * Enterprise/offline invoicing
     */
    Enterprise = 7
}
//# sourceMappingURL=paymentMethod.d.ts.map