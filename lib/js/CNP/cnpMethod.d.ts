/**
 * How the underlying observations were produced.
 */
export declare enum cnpMethod {
    /**
     * M-Lab NDT7 measurement.
     */
    NDT7 = 0,
    /**
     * A speed test other than NDT7 (Ookla, Cloudflare AIM, operator-native).
     */
    SPEED_TEST = 1,
    /**
     * ICMP or UDP echo.
     */
    PING = 2,
    /**
     * Path trace.
     */
    TRACEROUTE = 3,
    /**
     * Telemetry read from the user terminal itself.
     */
    TERMINAL_TELEMETRY = 4,
    /**
     * Bulk HTTP transfer.
     */
    HTTP_DOWNLOAD = 5,
    /**
     * Passive observation of production traffic.
     */
    PASSIVE = 6,
    /**
     * Modelled or simulated rather than measured. A modelled value is not a
     * measurement and this member is how a consumer refuses to treat it as one.
     */
    MODELED = 7,
    /**
     * The source states a method none of the above names.
     */
    OTHER = 8
}
//# sourceMappingURL=cnpMethod.d.ts.map