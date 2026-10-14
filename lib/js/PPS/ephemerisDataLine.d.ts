import * as flatbuffers from 'flatbuffers';
/**
 * A single ephemeris data line (for non-uniform time steps only)
 * Use this format when time intervals between states are irregular.
 * For uniform time steps, use the compact EPHEMERIS_DATA array instead.
 */
export declare class ephemerisDataLine implements flatbuffers.IUnpackableObject<ephemerisDataLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ephemerisDataLine;
    static getRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    static getSizePrefixedRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    /**
     * Epoch time, in ISO 8601 UTC format (required for non-uniform steps)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position vector X-component km
     */
    X(): number;
    /**
     * Position vector Y-component km
     */
    Y(): number;
    /**
     * Position vector Z-component km
     */
    Z(): number;
    /**
     * Velocity vector X-component km/s
     */
    X_DOT(): number;
    /**
     * Velocity vector Y-component km/s
     */
    Y_DOT(): number;
    /**
     * Velocity vector Z-component km/s
     */
    Z_DOT(): number;
    /**
     * Optional: Acceleration vector X-component km/s²
     */
    X_DDOT(): number;
    /**
     * Optional: Acceleration vector Y-component km/s²
     */
    Y_DDOT(): number;
    /**
     * Optional: Acceleration vector Z-component km/s²
     */
    Z_DDOT(): number;
    /**
     * Satellite clock bias (offset), microseconds. SP3 position-record clock
     * column. The SP3 bad/absent sentinel 999999.999999 is NOT stored; omit the
     * field instead.
     */
    CLOCK_BIAS_MICROSECONDS(): number;
    /**
     * Satellite clock rate of change, 1e-4 microseconds per second. SP3
     * velocity-record clock-rate column. Sentinel 999999.999999 is not stored.
     */
    CLOCK_RATE_MICROSECONDS_PER_SECOND(): number;
    /**
     * Standard deviation of CLOCK_BIAS_MICROSECONDS, picoseconds.
     */
    CLOCK_BIAS_SIGMA_PICOSECONDS(): number;
    /**
     * Standard deviation of CLOCK_RATE_MICROSECONDS_PER_SECOND,
     * 1e-4 picoseconds per second.
     */
    CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND(): number;
    /**
     * Per-coordinate position standard-deviation EXPONENTS, SP3 base**n form:
     * sigma = POS_VEL_BASE**n, with the position base from the SP3 header and
     * the result in mm. These are the raw SP3 exponent columns, kept as
     * exponents so an SP3 round-trip is exact; a consumer that wants a linear
     * sigma raises the header base to this power.
     */
    X_SIGMA_EXPONENT(): number;
    Y_SIGMA_EXPONENT(): number;
    Z_SIGMA_EXPONENT(): number;
    /**
     * Per-coordinate velocity standard-deviation exponents, result in
     * 1e-4 mm/s. Same base**n rule.
     */
    X_DOT_SIGMA_EXPONENT(): number;
    Y_DOT_SIGMA_EXPONENT(): number;
    Z_DOT_SIGMA_EXPONENT(): number;
    static startephemerisDataLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static addXDdot(builder: flatbuffers.Builder, X_DDOT: number): void;
    static addYDdot(builder: flatbuffers.Builder, Y_DDOT: number): void;
    static addZDdot(builder: flatbuffers.Builder, Z_DDOT: number): void;
    static addClockBiasMicroseconds(builder: flatbuffers.Builder, CLOCK_BIAS_MICROSECONDS: number): void;
    static addClockRateMicrosecondsPerSecond(builder: flatbuffers.Builder, CLOCK_RATE_MICROSECONDS_PER_SECOND: number): void;
    static addClockBiasSigmaPicoseconds(builder: flatbuffers.Builder, CLOCK_BIAS_SIGMA_PICOSECONDS: number): void;
    static addClockRateSigmaPicosecondsPerSecond(builder: flatbuffers.Builder, CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND: number): void;
    static addXSigmaExponent(builder: flatbuffers.Builder, X_SIGMA_EXPONENT: number): void;
    static addYSigmaExponent(builder: flatbuffers.Builder, Y_SIGMA_EXPONENT: number): void;
    static addZSigmaExponent(builder: flatbuffers.Builder, Z_SIGMA_EXPONENT: number): void;
    static addXDotSigmaExponent(builder: flatbuffers.Builder, X_DOT_SIGMA_EXPONENT: number): void;
    static addYDotSigmaExponent(builder: flatbuffers.Builder, Y_DOT_SIGMA_EXPONENT: number): void;
    static addZDotSigmaExponent(builder: flatbuffers.Builder, Z_DOT_SIGMA_EXPONENT: number): void;
    static endephemerisDataLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createephemerisDataLine(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number, X_DDOT: number, Y_DDOT: number, Z_DDOT: number, CLOCK_BIAS_MICROSECONDS: number, CLOCK_RATE_MICROSECONDS_PER_SECOND: number, CLOCK_BIAS_SIGMA_PICOSECONDS: number, CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND: number, X_SIGMA_EXPONENT: number, Y_SIGMA_EXPONENT: number, Z_SIGMA_EXPONENT: number, X_DOT_SIGMA_EXPONENT: number, Y_DOT_SIGMA_EXPONENT: number, Z_DOT_SIGMA_EXPONENT: number): flatbuffers.Offset;
    unpack(): ephemerisDataLineT;
    unpackTo(_o: ephemerisDataLineT): void;
}
export declare class ephemerisDataLineT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    X_DDOT: number;
    Y_DDOT: number;
    Z_DDOT: number;
    CLOCK_BIAS_MICROSECONDS: number;
    CLOCK_RATE_MICROSECONDS_PER_SECOND: number;
    CLOCK_BIAS_SIGMA_PICOSECONDS: number;
    CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND: number;
    X_SIGMA_EXPONENT: number;
    Y_SIGMA_EXPONENT: number;
    Z_SIGMA_EXPONENT: number;
    X_DOT_SIGMA_EXPONENT: number;
    Y_DOT_SIGMA_EXPONENT: number;
    Z_DOT_SIGMA_EXPONENT: number;
    constructor(EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, X_DDOT?: number, Y_DDOT?: number, Z_DDOT?: number, CLOCK_BIAS_MICROSECONDS?: number, CLOCK_RATE_MICROSECONDS_PER_SECOND?: number, CLOCK_BIAS_SIGMA_PICOSECONDS?: number, CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND?: number, X_SIGMA_EXPONENT?: number, Y_SIGMA_EXPONENT?: number, Z_SIGMA_EXPONENT?: number, X_DOT_SIGMA_EXPONENT?: number, Y_DOT_SIGMA_EXPONENT?: number, Z_DOT_SIGMA_EXPONENT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemerisDataLine.d.ts.map