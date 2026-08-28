/**
 * The class of authority behind a schedule row. Ordinals are wire values:
 * append only; never reorder or reuse.
 */
export declare enum stxScheduleAuthorityClass {
    /**
     * The publisher does not state where the row came from. AUTHORITY defaults
     * here so an unset field can never be read as a coordination register.
     */
    UNSPECIFIED = 0,
    /**
     * An international frequency coordination register or seasonal
     * requirement-notification process carries the row.
     */
    COORDINATION_REGISTER = 1,
    /**
     * A spectrum regulator or licensing administration publishes the row.
     */
    REGULATOR_PUBLISHED = 2,
    /**
     * The broadcaster, operator or licensee publishes its own schedule.
     */
    BROADCASTER_PUBLISHED = 3,
    /**
     * A monitoring service or organized observation programme logged the
     * transmission and published the row from what it heard.
     */
    MONITORING_OBSERVATION = 4,
    /**
     * An observer community or enthusiast compilation asserts the row with no
     * register, regulator or broadcaster behind it.
     */
    COMMUNITY_COMPILED = 5
}
//# sourceMappingURL=stxScheduleAuthorityClass.d.ts.map