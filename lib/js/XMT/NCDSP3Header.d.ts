import * as flatbuffers from 'flatbuffers';
/**
 * Header block of a fixed-column satellite position container (SP3).
 */
export declare class NCDSP3Header implements flatbuffers.IUnpackableObject<NCDSP3HeaderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NCDSP3Header;
    static getRootAsNCDSP3Header(bb: flatbuffers.ByteBuffer, obj?: NCDSP3Header): NCDSP3Header;
    static getSizePrefixedRootAsNCDSP3Header(bb: flatbuffers.ByteBuffer, obj?: NCDSP3Header): NCDSP3Header;
    /**
     * Record content indicator, e.g. "P" for positions only, "V" with
     * velocities.
     */
    FILE_TYPE(): string | null;
    FILE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite system indicator recorded in the header.
     */
    SATELLITE_SYSTEM(): string | null;
    SATELLITE_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit type as recorded, e.g. fitted, extrapolated, broadcast, helmert.
     */
    ORBIT_TYPE(): string | null;
    ORBIT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data used to produce the file, as recorded.
     */
    DATA_USED(): string | null;
    DATA_USED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Terrestrial reference frame name as recorded.
     */
    COORDINATE_SYSTEM(): string | null;
    COORDINATE_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producing agency as recorded IN THE FILE. This is observed content, not a
     * classification.
     */
    AGENCY(): string | null;
    AGENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system as recorded in the header.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Week number of the first epoch in the file's own week counter.
     */
    GPS_WEEK(): number;
    /**
     * Seconds of week of the first epoch.
     */
    SECONDS_OF_WEEK(): number;
    /**
     * Modified Julian Day of the first epoch.
     */
    MODIFIED_JULIAN_DAY_START(): number;
    /**
     * Fractional day of the first epoch.
     */
    FRACTIONAL_DAY(): number;
    /**
     * Uniform interval between epochs, seconds.
     */
    EPOCH_INTERVAL_SECONDS(): number;
    /**
     * Number of epochs declared in the header.
     */
    NUMBER_OF_EPOCHS(): number;
    /**
     * Satellite identifiers in header order.
     */
    SATELLITE_IDS(index: number): string;
    SATELLITE_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    satelliteIdsLength(): number;
    /**
     * Per-satellite accuracy exponents, parallel to SATELLITE_IDS. The accuracy
     * is POSITION_VELOCITY_BASE raised to this power.
     */
    SATELLITE_ACCURACY_EXPONENTS(index: number): number | null;
    satelliteAccuracyExponentsLength(): number;
    satelliteAccuracyExponentsArray(): Int8Array | null;
    /**
     * Base for the position and velocity standard-deviation exponents carried
     * per state in $OEM.
     */
    POSITION_VELOCITY_BASE(): number;
    /**
     * Base for the clock bias and clock rate standard-deviation exponents.
     */
    CLOCK_RATE_BASE(): number;
    /**
     * Header comment lines in file order.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    static startNCDSP3Header(builder: flatbuffers.Builder): void;
    static addFileType(builder: flatbuffers.Builder, FILE_TYPEOffset: flatbuffers.Offset): void;
    static addSatelliteSystem(builder: flatbuffers.Builder, SATELLITE_SYSTEMOffset: flatbuffers.Offset): void;
    static addOrbitType(builder: flatbuffers.Builder, ORBIT_TYPEOffset: flatbuffers.Offset): void;
    static addDataUsed(builder: flatbuffers.Builder, DATA_USEDOffset: flatbuffers.Offset): void;
    static addCoordinateSystem(builder: flatbuffers.Builder, COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static addAgency(builder: flatbuffers.Builder, AGENCYOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addGpsWeek(builder: flatbuffers.Builder, GPS_WEEK: number): void;
    static addSecondsOfWeek(builder: flatbuffers.Builder, SECONDS_OF_WEEK: number): void;
    static addModifiedJulianDayStart(builder: flatbuffers.Builder, MODIFIED_JULIAN_DAY_START: number): void;
    static addFractionalDay(builder: flatbuffers.Builder, FRACTIONAL_DAY: number): void;
    static addEpochIntervalSeconds(builder: flatbuffers.Builder, EPOCH_INTERVAL_SECONDS: number): void;
    static addNumberOfEpochs(builder: flatbuffers.Builder, NUMBER_OF_EPOCHS: number): void;
    static addSatelliteIds(builder: flatbuffers.Builder, SATELLITE_IDSOffset: flatbuffers.Offset): void;
    static createSatelliteIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSatelliteIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSatelliteAccuracyExponents(builder: flatbuffers.Builder, SATELLITE_ACCURACY_EXPONENTSOffset: flatbuffers.Offset): void;
    static createSatelliteAccuracyExponentsVector(builder: flatbuffers.Builder, data: number[] | Int8Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSatelliteAccuracyExponentsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSatelliteAccuracyExponentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionVelocityBase(builder: flatbuffers.Builder, POSITION_VELOCITY_BASE: number): void;
    static addClockRateBase(builder: flatbuffers.Builder, CLOCK_RATE_BASE: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static endNCDSP3Header(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNCDSP3Header(builder: flatbuffers.Builder, FILE_TYPEOffset: flatbuffers.Offset, SATELLITE_SYSTEMOffset: flatbuffers.Offset, ORBIT_TYPEOffset: flatbuffers.Offset, DATA_USEDOffset: flatbuffers.Offset, COORDINATE_SYSTEMOffset: flatbuffers.Offset, AGENCYOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, GPS_WEEK: number, SECONDS_OF_WEEK: number, MODIFIED_JULIAN_DAY_START: number, FRACTIONAL_DAY: number, EPOCH_INTERVAL_SECONDS: number, NUMBER_OF_EPOCHS: number, SATELLITE_IDSOffset: flatbuffers.Offset, SATELLITE_ACCURACY_EXPONENTSOffset: flatbuffers.Offset, POSITION_VELOCITY_BASE: number, CLOCK_RATE_BASE: number, COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NCDSP3HeaderT;
    unpackTo(_o: NCDSP3HeaderT): void;
}
export declare class NCDSP3HeaderT implements flatbuffers.IGeneratedObject {
    FILE_TYPE: string | Uint8Array | null;
    SATELLITE_SYSTEM: string | Uint8Array | null;
    ORBIT_TYPE: string | Uint8Array | null;
    DATA_USED: string | Uint8Array | null;
    COORDINATE_SYSTEM: string | Uint8Array | null;
    AGENCY: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    GPS_WEEK: number;
    SECONDS_OF_WEEK: number;
    MODIFIED_JULIAN_DAY_START: number;
    FRACTIONAL_DAY: number;
    EPOCH_INTERVAL_SECONDS: number;
    NUMBER_OF_EPOCHS: number;
    SATELLITE_IDS: (string)[];
    SATELLITE_ACCURACY_EXPONENTS: (number)[];
    POSITION_VELOCITY_BASE: number;
    CLOCK_RATE_BASE: number;
    COMMENT: (string)[];
    constructor(FILE_TYPE?: string | Uint8Array | null, SATELLITE_SYSTEM?: string | Uint8Array | null, ORBIT_TYPE?: string | Uint8Array | null, DATA_USED?: string | Uint8Array | null, COORDINATE_SYSTEM?: string | Uint8Array | null, AGENCY?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, GPS_WEEK?: number, SECONDS_OF_WEEK?: number, MODIFIED_JULIAN_DAY_START?: number, FRACTIONAL_DAY?: number, EPOCH_INTERVAL_SECONDS?: number, NUMBER_OF_EPOCHS?: number, SATELLITE_IDS?: (string)[], SATELLITE_ACCURACY_EXPONENTS?: (number)[], POSITION_VELOCITY_BASE?: number, CLOCK_RATE_BASE?: number, COMMENT?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NCDSP3Header.d.ts.map