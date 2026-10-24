import * as flatbuffers from 'flatbuffers';
/**
 * Keplerian broadcast parameters (GPS, Galileo, BeiDou, QZSS, NavIC), in the
 * symbols of IS-GPS-200. Angles in radians, lengths in meters, times in
 * seconds; every field defaults to 0.
 */
export declare class gnssKeplerianBroadcast implements flatbuffers.IUnpackableObject<gnssKeplerianBroadcastT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): gnssKeplerianBroadcast;
    static getRootAsgnssKeplerianBroadcast(bb: flatbuffers.ByteBuffer, obj?: gnssKeplerianBroadcast): gnssKeplerianBroadcast;
    static getSizePrefixedRootAsgnssKeplerianBroadcast(bb: flatbuffers.ByteBuffer, obj?: gnssKeplerianBroadcast): gnssKeplerianBroadcast;
    /**
     * Square root of the semi-major axis, sqrt(m).
     */
    SQRT_A(): number;
    /**
     * Eccentricity, dimensionless.
     */
    ECCENTRICITY(): number;
    /**
     * Inclination at TOE, rad.
     */
    I0(): number;
    /**
     * Longitude of the ascending node at the weekly epoch, rad.
     */
    OMEGA0(): number;
    /**
     * Argument of perigee, rad.
     */
    OMEGA(): number;
    /**
     * Mean anomaly at TOE, rad.
     */
    M0(): number;
    /**
     * Mean motion difference from the computed value, rad/s.
     */
    DELTA_N(): number;
    /**
     * Rate of right ascension, rad/s.
     */
    OMEGA_DOT(): number;
    /**
     * Rate of inclination, rad/s.
     */
    IDOT(): number;
    /**
     * Cosine harmonic correction to the argument of latitude, rad.
     */
    CUC(): number;
    /**
     * Sine harmonic correction to the argument of latitude, rad.
     */
    CUS(): number;
    /**
     * Cosine harmonic correction to the orbit radius, m.
     */
    CRC(): number;
    /**
     * Sine harmonic correction to the orbit radius, m.
     */
    CRS(): number;
    /**
     * Cosine harmonic correction to the inclination, rad.
     */
    CIC(): number;
    /**
     * Sine harmonic correction to the inclination, rad.
     */
    CIS(): number;
    /**
     * Time of ephemeris, seconds of the system week.
     */
    TOE(): number;
    /**
     * System week of TOE, not rolled over.
     */
    WEEK(): number;
    /**
     * Issue of data as broadcast (IODE, IODC or IODnav).
     */
    IODE_OR_IODNAV(): number;
    /**
     * Fit interval, hours.
     */
    FIT_INTERVAL_HOURS(): number;
    static startgnssKeplerianBroadcast(builder: flatbuffers.Builder): void;
    static addSqrtA(builder: flatbuffers.Builder, SQRT_A: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addI0(builder: flatbuffers.Builder, I0: number): void;
    static addOmega0(builder: flatbuffers.Builder, OMEGA0: number): void;
    static addOmega(builder: flatbuffers.Builder, OMEGA: number): void;
    static addM0(builder: flatbuffers.Builder, M0: number): void;
    static addDeltaN(builder: flatbuffers.Builder, DELTA_N: number): void;
    static addOmegaDot(builder: flatbuffers.Builder, OMEGA_DOT: number): void;
    static addIdot(builder: flatbuffers.Builder, IDOT: number): void;
    static addCuc(builder: flatbuffers.Builder, CUC: number): void;
    static addCus(builder: flatbuffers.Builder, CUS: number): void;
    static addCrc(builder: flatbuffers.Builder, CRC: number): void;
    static addCrs(builder: flatbuffers.Builder, CRS: number): void;
    static addCic(builder: flatbuffers.Builder, CIC: number): void;
    static addCis(builder: flatbuffers.Builder, CIS: number): void;
    static addToe(builder: flatbuffers.Builder, TOE: number): void;
    static addWeek(builder: flatbuffers.Builder, WEEK: number): void;
    static addIodeOrIodnav(builder: flatbuffers.Builder, IODE_OR_IODNAV: number): void;
    static addFitIntervalHours(builder: flatbuffers.Builder, FIT_INTERVAL_HOURS: number): void;
    static endgnssKeplerianBroadcast(builder: flatbuffers.Builder): flatbuffers.Offset;
    static creategnssKeplerianBroadcast(builder: flatbuffers.Builder, SQRT_A: number, ECCENTRICITY: number, I0: number, OMEGA0: number, OMEGA: number, M0: number, DELTA_N: number, OMEGA_DOT: number, IDOT: number, CUC: number, CUS: number, CRC: number, CRS: number, CIC: number, CIS: number, TOE: number, WEEK: number, IODE_OR_IODNAV: number, FIT_INTERVAL_HOURS: number): flatbuffers.Offset;
    unpack(): gnssKeplerianBroadcastT;
    unpackTo(_o: gnssKeplerianBroadcastT): void;
}
export declare class gnssKeplerianBroadcastT implements flatbuffers.IGeneratedObject {
    SQRT_A: number;
    ECCENTRICITY: number;
    I0: number;
    OMEGA0: number;
    OMEGA: number;
    M0: number;
    DELTA_N: number;
    OMEGA_DOT: number;
    IDOT: number;
    CUC: number;
    CUS: number;
    CRC: number;
    CRS: number;
    CIC: number;
    CIS: number;
    TOE: number;
    WEEK: number;
    IODE_OR_IODNAV: number;
    FIT_INTERVAL_HOURS: number;
    constructor(SQRT_A?: number, ECCENTRICITY?: number, I0?: number, OMEGA0?: number, OMEGA?: number, M0?: number, DELTA_N?: number, OMEGA_DOT?: number, IDOT?: number, CUC?: number, CUS?: number, CRC?: number, CRS?: number, CIC?: number, CIS?: number, TOE?: number, WEEK?: number, IODE_OR_IODNAV?: number, FIT_INTERVAL_HOURS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=gnssKeplerianBroadcast.d.ts.map