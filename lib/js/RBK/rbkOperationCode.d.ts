export declare enum rbkOperationCode {
    UNKNOWN = 0,
    /**
     * Compose two Modified Rodrigues Parameter rotations.
     */
    ADD_MRP = 1,
    /**
     * Compute the relative Modified Rodrigues Parameter rotation from VECTOR_B to VECTOR_A.
     */
    SUB_MRP = 2,
    /**
     * Force a Modified Rodrigues Parameter vector to its shadow set.
     */
    MRP_SHADOW = 3,
    /**
     * Switch to the MRP shadow set when norm exceeds SWITCH_THRESHOLD.
     */
    MRP_SWITCH = 4,
    /**
     * Convert scalar-first Euler parameters/quaternion to MRP.
     */
    EP_TO_MRP = 5,
    /**
     * Convert MRP to scalar-first Euler parameters/quaternion.
     */
    MRP_TO_EP = 6,
    /**
     * Convert direction cosine matrix to scalar-first Euler parameters/quaternion.
     */
    DCM_TO_EP = 7,
    /**
     * Convert scalar-first Euler parameters/quaternion to direction cosine matrix.
     */
    EP_TO_DCM = 8,
    /**
     * Convert direction cosine matrix to Modified Rodrigues Parameters.
     */
    DCM_TO_MRP = 9,
    /**
     * Convert Modified Rodrigues Parameters to direction cosine matrix.
     */
    MRP_TO_DCM = 10,
    /**
     * Return the MRP B matrix that maps body angular rate to MRP derivative.
     */
    B_MATRIX_MRP = 11,
    /**
     * Return the inverse MRP B matrix that maps MRP derivative to body angular rate.
     */
    B_INV_MATRIX_MRP = 12,
    /**
     * Compute MRP derivative from MRP and body angular rate vectors.
     */
    D_MRP = 13,
    /**
     * Compute body angular rate from MRP and MRP derivative vectors.
     */
    D_MRP_TO_OMEGA = 14,
    /**
     * Return the MRP B-dot matrix from MRP and MRP derivative vectors.
     */
    B_DOT_MATRIX_MRP = 15,
    /**
     * Compute second MRP derivative from MRP, MRP derivative, body rate, and body acceleration.
     */
    DD_MRP = 16,
    /**
     * Compute body angular acceleration from MRP, MRP derivative, and second MRP derivative.
     */
    DD_MRP_TO_D_OMEGA = 17,
    /**
     * Compose two Gibbs-vector rotations.
     */
    ADD_GIBBS = 18,
    /**
     * Compute the relative Gibbs-vector rotation from VECTOR_B to VECTOR_A.
     */
    SUB_GIBBS = 19,
    /**
     * Convert scalar-first Euler parameters/quaternion to Gibbs vector.
     */
    EP_TO_GIBBS = 20,
    /**
     * Convert Gibbs vector to scalar-first Euler parameters/quaternion.
     */
    GIBBS_TO_EP = 21,
    /**
     * Convert direction cosine matrix to Gibbs vector.
     */
    DCM_TO_GIBBS = 22,
    /**
     * Convert Gibbs vector to direction cosine matrix.
     */
    GIBBS_TO_DCM = 23,
    /**
     * Convert Modified Rodrigues Parameters to Gibbs vector.
     */
    MRP_TO_GIBBS = 24,
    /**
     * Convert Gibbs vector to Modified Rodrigues Parameters.
     */
    GIBBS_TO_MRP = 25,
    /**
     * Return the Gibbs-vector B matrix that maps body angular rate to Gibbs derivative.
     */
    B_MATRIX_GIBBS = 26,
    /**
     * Return the inverse Gibbs-vector B matrix that maps Gibbs derivative to body angular rate.
     */
    B_INV_MATRIX_GIBBS = 27,
    /**
     * Compute Gibbs derivative from Gibbs vector and body angular rate vectors.
     */
    D_GIBBS = 28,
    /**
     * Compose two principal rotation vector rotations.
     */
    ADD_PRV = 29,
    /**
     * Compute the relative principal rotation vector from VECTOR_B to VECTOR_A.
     */
    SUB_PRV = 30,
    /**
     * Convert scalar-first Euler parameters/quaternion to principal rotation vector.
     */
    EP_TO_PRV = 31,
    /**
     * Convert principal rotation vector to scalar-first Euler parameters/quaternion.
     */
    PRV_TO_EP = 32,
    /**
     * Convert direction cosine matrix to principal rotation vector.
     */
    DCM_TO_PRV = 33,
    /**
     * Convert principal rotation vector to direction cosine matrix.
     */
    PRV_TO_DCM = 34,
    /**
     * Convert Modified Rodrigues Parameters to principal rotation vector.
     */
    MRP_TO_PRV = 35,
    /**
     * Convert principal rotation vector to Modified Rodrigues Parameters.
     */
    PRV_TO_MRP = 36,
    /**
     * Convert Gibbs vector to principal rotation vector.
     */
    GIBBS_TO_PRV = 37,
    /**
     * Convert principal rotation vector to Gibbs vector.
     */
    PRV_TO_GIBBS = 38,
    /**
     * Return the principal-rotation-vector B matrix that maps body angular rate to PRV derivative.
     */
    B_MATRIX_PRV = 39,
    /**
     * Return the inverse principal-rotation-vector B matrix that maps PRV derivative to body angular rate.
     */
    B_INV_MATRIX_PRV = 40,
    /**
     * Compute principal rotation vector derivative from PRV and body angular rate vectors.
     */
    D_PRV = 41,
    /**
     * Compose two Euler-angle rotations using EULER_SEQUENCE.
     */
    ADD_EULER = 42,
    /**
     * Compute the relative Euler-angle rotation from VECTOR_B to VECTOR_A using EULER_SEQUENCE.
     */
    SUB_EULER = 43,
    /**
     * Convert Euler angles to direction cosine matrix using EULER_SEQUENCE.
     */
    EULER_TO_DCM = 44,
    /**
     * Convert direction cosine matrix to Euler angles using EULER_SEQUENCE.
     */
    DCM_TO_EULER = 45,
    /**
     * Convert Euler angles to scalar-first Euler parameters/quaternion using EULER_SEQUENCE.
     */
    EULER_TO_EP = 46,
    /**
     * Convert scalar-first Euler parameters/quaternion to Euler angles using EULER_SEQUENCE.
     */
    EP_TO_EULER = 47,
    /**
     * Convert Euler angles to Modified Rodrigues Parameters using EULER_SEQUENCE.
     */
    EULER_TO_MRP = 48,
    /**
     * Convert Modified Rodrigues Parameters to Euler angles using EULER_SEQUENCE.
     */
    MRP_TO_EULER = 49,
    /**
     * Convert Euler angles to Gibbs vector using EULER_SEQUENCE.
     */
    EULER_TO_GIBBS = 50,
    /**
     * Convert Gibbs vector to Euler angles using EULER_SEQUENCE.
     */
    GIBBS_TO_EULER = 51,
    /**
     * Convert Euler angles to principal rotation vector using EULER_SEQUENCE.
     */
    EULER_TO_PRV = 52,
    /**
     * Convert principal rotation vector to Euler angles using EULER_SEQUENCE.
     */
    PRV_TO_EULER = 53,
    /**
     * Return the Euler-angle B matrix that maps body angular rate to Euler-angle derivative.
     */
    B_MATRIX_EULER = 54,
    /**
     * Return the inverse Euler-angle B matrix that maps Euler-angle derivative to body angular rate.
     */
    B_INV_MATRIX_EULER = 55,
    /**
     * Compute Euler-angle derivative from Euler angles and body angular rate vectors.
     */
    D_EULER = 56,
    /**
     * Return the skew-symmetric tilde matrix that maps VECTOR_A cross products.
     */
    TILDE_MATRIX = 57,
    /**
     * Return the Basilisk AVS one-axis elementary direction-cosine matrix for ANGLE_RAD.
     */
    M1_ROTATION_MATRIX = 58,
    /**
     * Return the Basilisk AVS two-axis elementary direction-cosine matrix for ANGLE_RAD.
     */
    M2_ROTATION_MATRIX = 59,
    /**
     * Return the Basilisk AVS three-axis elementary direction-cosine matrix for ANGLE_RAD.
     */
    M3_ROTATION_MATRIX = 60
}
//# sourceMappingURL=rbkOperationCode.d.ts.map