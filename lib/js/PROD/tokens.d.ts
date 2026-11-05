export type Product = 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P7' | 'P8' | 'P9';
export type TokenKind = 'MINUTES' | 'KM' | 'KM_S' | 'DEG' | 'REV_PER_DAY' | 'UNITLESS' | 'INTEGER' | 'CALENDAR' | 'TEXT' | 'FLAG' | 'M2_KG' | 'M2_KG_S' | 'M_S2' | 'KM_S2' | 'W_KG' | 'SECONDS' | 'S_PER_DAY' | 'ARCSEC' | 'SIGMA_KM' | 'SIGMA_KM_S' | 'COVARIANCE' | 'SENSITIVITY' | 'MEASUREMENT';
export interface Token {
    readonly product: Product;
    readonly token: string;
    readonly startColumn: number;
    readonly format: string;
    readonly kind: TokenKind;
}
export type Refusal = {
    readonly code: string;
    readonly message: string;
};
export type Result<T> = {
    readonly ok: true;
    readonly value: T;
} | {
    readonly ok: false;
    readonly refusal: Refusal;
};
export declare const ok: <T>(value: T) => Result<T>;
export declare const refuse: <T = never>(code: string, message: string) => Result<T>;
export declare const MINUTES_FORMAT = "F12.6";
export declare const CALENDAR_FORMAT = "S18";
export declare const COVARIANCE_FORMAT = "%+14.6E";
export declare const TAG_VALUE_FORMAT = "%+.15E";
export declare const P3_ROW_INDENT = "\t";
export declare const P3_VALUE_SEPARATOR = " ";
export declare const P3_TITLE = "UVW COVARIANCE MATRIX";
export declare const P3_TRIANGLE_TITLE = "LOWER TRIANG 6x6 by row:";
export declare const P2_LABEL = "NLEXYZ";
export declare const P1_TRAILER = "END";
export declare const P9_SIGN_CONVENTION = "RESIDUAL = OBSERVED - COMPUTED";
export declare const P1_HEADER_LINES: readonly (readonly string[])[];
export declare const P1_EPOCH_BLOCK: readonly (readonly string[])[];
export declare const P2_ROW: readonly string[];
export declare const P3_LINES: readonly string[];
export declare const P5_TAG_SEPARATOR = " = ";
export declare const P5_COVARIANCE_SECTION: readonly string[];
export declare const P7_LINES: Readonly<Record<'TLE1' | 'TLE2' | 'ELF', readonly string[]>>;
export declare const TLE_LINE_LENGTH = 69;
export declare const P8_HEADER_LINE: readonly string[];
export declare const P8_EPOCH_ROW: readonly string[];
export declare const P9_ROW: readonly string[];
export declare const TOKENS: readonly Token[];
export declare const PRODUCTS: readonly Product[];
export declare function tokensOf(product: Product): readonly Token[];
export declare function tokenOf(product: Product, token: string): Token;
/** The width a format occupies, 0 for a free-width tag value. */
export declare function formatWidth(format: string): number;
/** The last column a token occupies. */
export declare function endColumn(token: Token): number;
/** Fw.d: fixed point; null when the value does not fit or is not finite. */
export declare function formatFixed(value: number, width: number, decimals: number): string | null;
/** %+w.dE: an explicit sign, d decimals, E, a signed exponent of at least two digits; null when it does not fit. */
export declare function formatExponent(value: number, width: number, decimals: number): string | null;
/** Iw: an integer; null for a non-integer or one that does not fit. */
export declare function formatInteger(value: number, width: number): string | null;
/** Aw: text, left-justified; null when longer than the field. */
export declare function formatText(value: string, width: number): string | null;
/** Formats a value for a token; null means the value does not fit the field (the writer refuses). */
export declare function formatToken(token: Token, value: number | string | boolean): string | null;
/** Places formatted fields on one line at their start columns (1-based); refuses an overlap. */
export declare function placeFields(fields: readonly {
    readonly startColumn: number;
    readonly text: string;
}[]): Result<string>;
export declare const YEAR_PIVOT = 57;
export declare const CALENDAR_FIRST_YEAR = 1957;
export declare const CALENDAR_LAST_YEAR = 2056;
export declare function fullYear(twoDigitYear: number): number;
export declare function isLeapYear(year: number): boolean;
export declare function daysInYear(year: number): number;
export interface Calendar {
    readonly year: number;
    readonly dayOfYear: number;
    readonly hour: number;
    readonly minute: number;
    /** Seconds with three decimals, 0 <= second < 61 as parsed; 60.xxx is a leap second. */
    readonly second: number;
}
/** YY/DDD HHMM SS.SSS for a UTC instant in milliseconds; null outside 1957..2056. */
export declare function formatCalendar(utcMs: number): string | null;
/** Parses YY/DDD HHMM SS.SSS; refuses a malformed text, a day outside the year or an out-of-range time. */
export declare function parseCalendar(text: string): Result<Calendar>;
/** The UTC instant of a parsed calendar form, milliseconds; refuses a leap second (60.xxx), which UTC-as-milliseconds cannot hold. */
export declare function calendarToUtcMs(c: Calendar): Result<number>;
/** Month (1-12) and day of month of a day of the year; null when the day does not exist in the year. */
export declare function monthDay(year: number, dayOfYear: number): {
    month: number;
    day: number;
} | null;
//# sourceMappingURL=tokens.d.ts.map