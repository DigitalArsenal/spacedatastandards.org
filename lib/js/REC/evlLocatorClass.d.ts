/**
 * What kind of event is being located. Every class is one instance of the
 * same pair: an event function of time, and a refined root. Append new values
 * only; never reorder or reuse existing values.
 */
export declare enum evlLocatorClass {
    UNSPECIFIED = 0,
    /**
     * Passage of the target through the shadow of one or more occulting
     * bodies.
     */
    ECLIPSE = 1,
    /**
     * Visibility of the target from a surface site, subject to a horizon or
     * mask constraint.
     */
    CONTACT = 2,
    /**
     * Entry of a body or object into a sensor field of view.
     */
    INTRUSION = 3,
    /**
     * Passage of the target through an apsis of its orbit.
     */
    APSIDES = 4,
    /**
     * Passage of the target through the node line of a stated coordinate
     * system.
     */
    NODE_CROSSING = 5,
    /**
     * The generic locator: a condition on any $PCE catalog parameter. Altitude
     * crossings, latitude crossings and beta-angle limits are this class, not
     * classes of their own.
     */
    PARAMETER_CONDITION = 6
}
//# sourceMappingURL=evlLocatorClass.d.ts.map