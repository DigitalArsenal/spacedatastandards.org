/**
 * Content class carried by a transmission. Capability classes only: this
 * enum never encodes a programme, a broadcaster, or an editorial judgement.
 * Ordinals are wire values: append only; never reorder or reuse.
 */
export declare enum stxContentClass {
    UNSPECIFIED = 0,
    /**
     * Sound programming intended for a general audience.
     */
    SOUND_PROGRAMME = 1,
    /**
     * Television programming.
     */
    TELEVISION_PROGRAMME = 2,
    /**
     * Digitally multiplexed data or sound carriage.
     */
    DIGITAL_MULTIPLEX = 3,
    /**
     * Continuous or intermittent carrier radiated for identification,
     * propagation assessment or channel marking, with no programme content.
     */
    BEACON_OR_MARKER = 4,
    /**
     * Keyed or spoken sequences of letters, digits or words with no published
     * meaning, radiated on a fixed frequency by an unidentified or
     * non-broadcast user.
     */
    FORMATTED_NUMERIC_OR_VOICE = 5,
    /**
     * Data, telemetry or telecommand traffic.
     */
    DATA_OR_TELEMETRY = 6,
    /**
     * Standard time or frequency dissemination.
     */
    TIME_SIGNAL = 7,
    /**
     * Meteorological, navigational or safety broadcast to a service.
     */
    SERVICE_BULLETIN = 8,
    /**
     * The source states a content class this enum does not model. The source's
     * own term is retained verbatim in the provenance entry.
     */
    OTHER = 9
}
//# sourceMappingURL=stxContentClass.d.ts.map