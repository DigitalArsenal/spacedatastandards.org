/**
 * Operations this record can request. Values 1-4 are the original
 * position-only planet-centred-inertial / planet-centred-fixed / geodetic
 * conversions and are FROZEN. Append new values only; never reorder.
 */
export declare enum frmOperationCode {
    UNKNOWN = 0,
    PCI_TO_PCPF = 1,
    PCPF_TO_PCI = 2,
    LLA_TO_PCPF = 3,
    PCPF_TO_LLA = 4,
    /**
     * Transform a full state (position AND velocity) from SOURCE_COORDINATE_SYSTEM
     * to TARGET_COORDINATE_SYSTEM at EPOCH, expressed in TARGET_REPRESENTATION.
     */
    STATE_TRANSFORM = 5,
    /**
     * Return only the rotation from SOURCE_COORDINATE_SYSTEM to
     * TARGET_COORDINATE_SYSTEM at EPOCH, with its time derivative and the
     * angular velocity of the target axes. No state is required.
     */
    FRAME_ROTATION = 6,
    /**
     * Convert a state between element sets within ONE coordinate system.
     */
    STATE_REPRESENTATION_CONVERT = 7
}
//# sourceMappingURL=frmOperationCode.d.ts.map