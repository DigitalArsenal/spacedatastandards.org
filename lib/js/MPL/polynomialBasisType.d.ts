/**
 * Polynomial basis type for coefficient interpretation.
 * Determines how the coefficient arrays are evaluated.
 */
export declare enum polynomialBasisType {
    /**
     * Chebyshev polynomials of the first kind T_n(x).
     * Most common for ephemeris fitting due to minimax approximation properties.
     */
    CHEBYSHEV = 0,
    /**
     * Legendre polynomials P_n(x).
     * Orthogonal on [-1, 1] with unit weight function.
     */
    LEGENDRE = 1,
    /**
     * Hermite interpolating polynomials.
     * Matches both function values and derivatives at nodes.
     */
    HERMITE = 2,
    /**
     * Lagrange interpolating polynomials.
     * Exact interpolation through specified nodes.
     */
    LAGRANGE = 3,
    /**
     * Standard power series (monomial basis): c0 + c1*x + c2*x^2 + ...
     */
    POWER_SERIES = 4
}
//# sourceMappingURL=polynomialBasisType.d.ts.map