/**
 * Which forecast times the source actually publishes. Append new values
 * only; never reorder or reuse existing values.
 */
export declare enum wxfTimeBasis {
    /**
     * INIT_TIME_MS names a run; VALID_TIME_MS = INIT_TIME_MS + LEAD_HOURS *
     * 3,600,000. This is the existing WXF convention.
     */
    Initialization = 0,
    /**
     * Only VALID_TIME_MS is known. The source may blend runs or omit their
     * initialization times. INIT_TIME_MS, LEAD_HOURS and HORIZON_HOURS MUST
     * be omitted; their zero defaults do not mean a run in 1970, zero lead,
     * or zero horizon. RETRIEVED_AT is not a substitute for initialization.
     */
    ValidTimeOnly = 1
}
//# sourceMappingURL=wxfTimeBasis.d.ts.map