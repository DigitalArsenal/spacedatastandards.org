/**
 * Trajectory state representation type.
 * Defines how trajectory data is parameterized in this OCM.
 * CCSDS 502.0-B-3 Section 7 specifies multiple trajectory state types.
 */
export declare enum trajectoryType {
    /**
     * Cartesian position and velocity (X, Y, Z, X_DOT, Y_DOT, Z_DOT).
     */
    CARTESIAN_PV = 0,
    /**
     * Cartesian position, velocity, and acceleration (9 components).
     */
    CARTESIAN_PVA = 1,
    /**
     * Polynomial coefficients for Cartesian position (and optionally velocity).
     * Associated data in POLYNOMIAL_POSITION_RECORDS.
     */
    POLYNOMIAL_POS = 2,
    /**
     * Polynomial coefficients for classical orbital elements.
     * Associated data in POLYNOMIAL_OE_RECORDS.
     */
    POLYNOMIAL_OE = 3,
    /**
     * Hermite interpolating polynomial representation.
     */
    HERMITE = 4,
    /**
     * Lagrange interpolating polynomial representation.
     */
    LAGRANGE = 5,
    /**
     * Keplerian classical set in STATE_DATA, 6 values per row: semi-major axis
     * [km], eccentricity, inclination, right ascension of the ascending node,
     * argument of periapsis and true anomaly [deg]. SANA Orbital Elements
     * KEPLERIAN (OID 1.3.112.4.57.5.11).
     */
    KEPLERIAN = 6,
    /**
     * As KEPLERIAN with the mean anomaly in place of the true anomaly. SANA
     * Orbital Elements KEPLERIANMEAN (OID 1.3.112.4.57.5.12).
     */
    KEPLERIAN_MEAN = 7,
    /**
     * Equinoctial set in STATE_DATA, 7 values per row: semi-major axis [km],
     * af = e cos(argp + fr RAAN), ag = e sin(argp + fr RAAN), mean longitude
     * L = M + argp + fr RAAN [deg], chi = tan(i/2)^fr sin(RAAN),
     * psi = tan(i/2)^fr cos(RAAN), and the retrograde factor fr (+1 or -1).
     * SANA Orbital Elements EQUINOCTIAL (OID 1.3.112.4.57.5.8).
     */
    EQUINOCTIAL = 8,
    /**
     * Modified equinoctial set, 7 values per row: semi-latus rectum
     * p = a (1 - e^2) [km], af, ag, true longitude L' = nu + argp + fr RAAN
     * [deg], chi, psi, fr. SANA Orbital Elements EQUINOCTIALMOD
     * (OID 1.3.112.4.57.5.9).
     */
    EQUINOCTIAL_MOD = 9
}
//# sourceMappingURL=trajectoryType.d.ts.map