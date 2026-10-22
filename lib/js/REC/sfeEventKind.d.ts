/**
 * Observing domain of the event.
 */
export declare enum sfeEventKind {
    /**
     * Not stated. Ordinal 0 so an unset field is never read as a real kind.
     */
    UNSPECIFIED = 0,
    /**
     * Soft X-ray flare (e.g. event type XRA).
     */
    XRAY = 1,
    /**
     * Optical flare (e.g. event type FLA).
     */
    OPTICAL = 2,
    /**
     * Radio burst or sweep.
     */
    RADIO = 3,
    /**
     * A kind this enum does not model; EVENT_TYPE_CODE carries the source token.
     */
    CUSTOM = 4
}
//# sourceMappingURL=sfeEventKind.d.ts.map