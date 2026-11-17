/**
 * Scenario reference category. This is intentionally broader than the
 * underlying domain schemas because a scene reference can point at an SDS
 * record, a variable placeholder, or a visual annotation.
 */
export declare enum scenarioReferenceKind {
    UNKNOWN = 0,
    SATELLITE = 1,
    GROUND_SITE = 2,
    SENSOR = 3,
    VARIABLE_SATELLITE = 4,
    VARIABLE_SITE = 5,
    POINT_OF_INTEREST = 6,
    EXCLUSION_ZONE = 7,
    OBSERVATION = 8,
    /**
     * A group: the $EGP of the enclosing $REC whose GROUP_ID equals
     * REFERENCE_ID.
     */
    GROUP = 9,
    /**
     * An area of interest: the $GJN feature of the enclosing $REC whose ID
     * equals REFERENCE_ID. NAME is its label; COUNTRY is its ISO 3166-1
     * alpha-2 code when the area is a country.
     */
    AREA_OF_INTEREST = 10
}
//# sourceMappingURL=scenarioReferenceKind.d.ts.map