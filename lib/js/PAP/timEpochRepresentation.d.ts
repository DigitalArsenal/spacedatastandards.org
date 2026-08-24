export declare enum timEpochRepresentation {
    /**
     * Julian Date day count.
     */
    JULIAN_DATE = 0,
    /**
     * Modified Julian Date day count (JD - 2400000.5).
     */
    MODIFIED_JULIAN_DATE = 1,
    /**
     * Seconds since 1970-01-01T00:00:00 UTC.
     */
    UNIX_SECONDS = 2,
    /**
     * ISO 8601 timestamp text.
     */
    ISO8601 = 3,
    /**
     * Seconds since 1980-01-06T00:00:00 GPS.
     */
    GPS_SECONDS = 4,
    /**
     * GNSS week number plus seconds within the week.
     */
    GNSS_WEEK_SECONDS = 5,
    /**
     * CCSDS binary time-code field with preamble metadata.
     */
    CCSDS_TIME_CODE = 6,
    /**
     * Seconds from an application-defined mission epoch.
     */
    MISSION_ELAPSED_SECONDS = 7
}
//# sourceMappingURL=timEpochRepresentation.d.ts.map