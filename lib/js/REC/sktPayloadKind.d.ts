/**
 * What a tile's payload is.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sktPayloadKind {
    UNSPECIFIED = 0,
    /**
     * Packed SKTPoint sources.
     */
    POINT_SOURCES = 1,
    /**
     * Pixel map of a diffuse quantity.
     */
    DIFFUSE_MAP = 2,
    /**
     * Pixel map of localisation probability per pixel; the values of a
     * complete layer at one order sum to 1.
     */
    PROBABILITY_MAP = 3
}
//# sourceMappingURL=sktPayloadKind.d.ts.map