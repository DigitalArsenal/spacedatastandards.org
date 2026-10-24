export declare enum gnssObsType {
    PSEUDORANGE = 0,
    CARRIER_PHASE = 1,
    /**
     * One-way Doppler of the received carrier (Hz), positive when the
     * satellite is approaching (the RINEX convention).
     */
    DOPPLER = 2,
    SNR = 3,
    RAW_IF = 4,
    /**
     * Ionosphere phase delay (RINEX observation type I), as the file states it.
     */
    IONOSPHERE_PHASE_DELAY = 5,
    /**
     * Receiver channel number (RINEX observation type X), as the receiver reports it.
     */
    CHANNEL_NUMBER = 6
}
//# sourceMappingURL=gnssObsType.d.ts.map