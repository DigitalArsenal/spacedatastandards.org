/**
 * Which kind of object owns a parameter. A parameter is meaningless without
 * its owner: the same symbol evaluated on a space object and on a thruster
 * are different quantities. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum pceOwnerClass {
    UNSPECIFIED = 0,
    /**
     * A tracked object with an orbital state.
     */
    SPACE_OBJECT = 1,
    /**
     * A point with an ephemeris but no vehicle properties: a celestial body,
     * a barycentre, or a libration point.
     */
    SPACE_POINT = 2,
    /**
     * A fixed site on a body surface.
     */
    GROUND_SITE = 3,
    /**
     * A thrust-producing device carried by a space object.
     */
    THRUSTER = 4,
    /**
     * A propellant reservoir carried by a space object.
     */
    FUEL_TANK = 5,
    /**
     * An instantaneous velocity change.
     */
    IMPULSIVE_BURN = 6,
    /**
     * A thrust arc of finite duration.
     */
    FINITE_BURN = 7,
    /**
     * An electrical power source and its bus.
     */
    POWER_SYSTEM = 8,
    /**
     * The orientation state of a space object.
     */
    ATTITUDE_SYSTEM = 9,
    /**
     * A differential-corrector or optimizer instance.
     */
    SOLVER = 10,
    /**
     * A set of space objects propagated together.
     */
    OBJECT_GROUP = 11
}
//# sourceMappingURL=pceOwnerClass.d.ts.map