/**
 * Where the space weather of a propagation comes from. Append new values
 * only.
 */
export declare enum pcfWeatherSource {
    /**
     * Infer: PCFSpaceWeather when the force model carries it, else the daily
     * rows supplied with the request.
     */
    UNSPECIFIED = 0,
    /**
     * PCFSpaceWeather, held for the whole arc.
     */
    CONSTANT = 1,
    /**
     * Daily rows supplied with the request ($SPW rows; the JB2008 indices
     * for the JB2008 atmosphere).
     */
    RECORDS = 2
}
//# sourceMappingURL=pcfWeatherSource.d.ts.map