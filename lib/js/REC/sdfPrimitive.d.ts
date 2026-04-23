/**
 * Signed Distance Field — detection and containment queries for sensor /
 * geometric volumes.
 *
 * Convention for signed-distance values:
 *   - Negative values are inside the volume.
 *   - Zero is on the boundary.
 *   - Positive values are outside the volume.
 * Primitive shape family for an SDF volume.
 */
export declare enum sdfPrimitive {
    /**
     * Cone with apex at origin, +Z boresight.
     */
    CONE = 0,
    /**
     * Rectangular pyramid (four planes + range cap).
     */
    RECTANGULAR = 1,
    /**
     * Sphere centered at origin.
     */
    SPHERE = 2,
    /**
     * Cylinder along Z axis.
     */
    CYLINDER = 3,
    /**
     * Plugin-defined custom SDF.
     */
    CUSTOM = 255
}
//# sourceMappingURL=sdfPrimitive.d.ts.map