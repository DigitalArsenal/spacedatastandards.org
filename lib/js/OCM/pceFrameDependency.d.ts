/**
 * What geometric context a parameter needs before it has a value. This states
 * the REQUIREMENT; the specific axis set and origin, when the parameter is
 * only defined for one, are named by REQUIRED_AXIS_TYPE and
 * REQUIRED_ORIGIN_KIND on the descriptor. Append new values only.
 */
export declare enum pceFrameDependency {
    UNSPECIFIED = 0,
    /**
     * The value is the same in every coordinate system: mass, duration,
     * a tank pressure.
     */
    FRAME_INDEPENDENT = 1,
    /**
     * The value depends on the full coordinate system, axes and origin.
     */
    COORDINATE_SYSTEM_DEPENDENT = 2,
    /**
     * The value depends on the central body alone and not on the axes: the
     * classical element set of a two-body orbit about a named body.
     */
    CENTRAL_BODY_DEPENDENT = 3,
    /**
     * The value depends on a surface site as well as a body.
     */
    SURFACE_SITE_DEPENDENT = 4,
    /**
     * The value depends on a second object as well as the owner.
     */
    SECOND_OBJECT_DEPENDENT = 5
}
//# sourceMappingURL=pceFrameDependency.d.ts.map