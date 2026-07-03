export declare enum timConversionStatus {
    /**
     * Conversion completed.
     */
    OK = 0,
    /**
     * Input epoch or requested representation is invalid.
     */
    INVALID_INPUT = 1,
    /**
     * Requested source or target time system is not supported.
     */
    UNSUPPORTED_TIME_SYSTEM = 2,
    /**
     * Conversion requires leap-second data that was not available.
     */
    LEAP_SECOND_DATA_REQUIRED = 3,
    /**
     * Conversion requires Earth-orientation data that was not available.
     */
    EOP_DATA_REQUIRED = 4,
    /**
     * Requested instant is outside the supported conversion range.
     */
    OUT_OF_RANGE = 5
}
//# sourceMappingURL=timConversionStatus.d.ts.map