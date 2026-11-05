import { type Result } from './tokens.js';
export type Vec3 = readonly [number, number, number];
export type State = readonly [number, number, number, number, number, number];
/** Row-major square matrix. */
export type Matrix = number[][];
/** a km, af, ag, L deg, chi, psi, fr. */
export type Equinoctial = readonly [number, number, number, number, number, number, number];
export declare const EQUINOCTIAL_ORDER: readonly string[];
export declare const EQUINOCTIAL_UNITS: readonly string[];
export declare const cross: (a: Vec3, b: Vec3) => Vec3;
export declare const dot: (a: Vec3, b: Vec3) => number;
export declare const norm: (a: Vec3) => number;
export declare function identity(n: number): Matrix;
export declare function multiply(a: Matrix, b: Matrix): Matrix;
export declare function transpose(a: Matrix): Matrix;
/** T P T^T. */
export declare function transformCovariance(p: Matrix, t: Matrix): Matrix;
/** The lower triangle, row by row, of an n x n matrix. */
export declare function fullToLtm(full: Matrix, n: number): number[];
/** The symmetric n x n matrix of a lower triangle given row by row; refuses a wrong length. */
export declare function ltmToFull(ltm: readonly number[], n: number): Result<Matrix>;
/** Gauss-Jordan inverse with partial pivoting; refuses a singular matrix. */
export declare function invert(a: Matrix): Result<Matrix>;
/** blockdiag(m, m, I_{n-6}) for a 3 x 3 rotation m and a covariance dimension n >= 6. */
export declare function blockRotation(m: Matrix, n: number): Matrix;
/** Rows U (radial), V (along-track), W (cross-track) from the position and velocity; refuses a degenerate pair. */
export declare function uvwBasis(r: Vec3, v: Vec3): Result<Matrix>;
/** A state rotated by m: position and velocity rows by the same matrix. */
export declare function rotateState(m: Matrix, s: State): State;
/** An LTM covariance of dimension n (6 state rows then parameters) rotated into the UVW frame of (r, v). */
export declare function covarianceToUvw(ltm: readonly number[], n: number, r: Vec3, v: Vec3): Result<number[]>;
/** The inverse of covarianceToUvw (the rotation's transpose). */
export declare function covarianceFromUvw(ltm: readonly number[], n: number, r: Vec3, v: Vec3): Result<number[]>;
/** max |M M^T - I| of a rotation. */
export declare function orthogonalityError(m: Matrix): number;
/** The equinoctial set of a cartesian state (km, km/s) under mu (km**3/s**2); fr defaults to the orbit's sense. */
export declare function cartesianToEquinoctial(s: State, mu: number, fr?: number): Result<Equinoctial>;
/** The cartesian state (km, km/s) of an equinoctial set under mu. */
export declare function equinoctialToCartesian(eq: Equinoctial, mu: number): Result<State>;
/**
 * d(x, y, z, vx, vy, vz) / d(a, af, ag, L[deg], chi, psi), analytic at the given elements: the 6 x 6 forward
 * Jacobian (fr is a discrete factor, not differentiated).
 */
export declare function equinoctialJacobian(eq: Equinoctial, mu: number): Result<Matrix>;
/** The 6 x 6 state block of an LTM covariance (dimension n) projected to equinoctial elements; parameter rows unchanged. */
export declare function covarianceToEquinoctial(ltm: readonly number[], n: number, eq: Equinoctial, mu: number): Result<number[]>;
/** The inverse of covarianceToEquinoctial at the same elements. */
export declare function covarianceFromEquinoctial(ltm: readonly number[], n: number, eq: Equinoctial, mu: number): Result<number[]>;
//# sourceMappingURL=frames.d.ts.map