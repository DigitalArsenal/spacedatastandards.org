import * as flatbuffers from 'flatbuffers';
import { DataType } from './DataType.js';
import { eopSeries } from './eopSeries.js';
import { iauPrecessionNutationModel } from './iauPrecessionNutationModel.js';
/**
 * Earth Orientation Parameters
 */
export declare class EOP implements flatbuffers.IUnpackableObject<EOPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOP;
    static getRootAsEOP(bb: flatbuffers.ByteBuffer, obj?: EOP): EOP;
    static getSizePrefixedRootAsEOP(bb: flatbuffers.ByteBuffer, obj?: EOP): EOP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     *  Date in ISO 8601 format, e.g., "2018-01-01T00:00:00Z"
     */
    DATE(): string | null;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     *  Modified Julian Date in UTC, e.g., 58119
     */
    MJD(): number;
    /**
     *  x component of Pole Wander in radians, e.g., 2.872908911518888E-7
     */
    X_POLE_WANDER_RADIANS(): number;
    /**
     *  y component of Pole Wander in radians, e.g., 1.2003259523750447E-6
     */
    Y_POLE_WANDER_RADIANS(): number;
    /**
     *  x component of Celestial Pole Offset in radians, e.g., 5.720801437092525E-10
     */
    X_CELESTIAL_POLE_OFFSET_RADIANS(): number;
    /**
     *  y component of Celestial Pole Offset in radians, e.g., -8.484239419416879E-10
     */
    Y_CELESTIAL_POLE_OFFSET_RADIANS(): number;
    /**
     *  UT1 minus UTC in seconds, e.g., 0.2163567
     */
    UT1_MINUS_UTC_SECONDS(): number;
    /**
     *  TAI minus UTC in seconds, e.g., 37
     */
    TAI_MINUS_UTC_SECONDS(): number;
    /**
     *  Correction to Length of Day in seconds, e.g., 8.094E-4
     */
    LENGTH_OF_DAY_CORRECTION_SECONDS(): number;
    /**
     *  Data type (O = Observed, P = Predicted)
     */
    DATA_TYPE(): DataType;
    /**
     * Published series this row was taken from. Rows from different series are
     * NOT interchangeable at the microarcsecond level and must not be merged
     * without recording which series each row came from.
     */
    SERIES(): eopSeries;
    /**
     * Precession-nutation model the celestial pole offsets are expressed
     * against. X_/Y_CELESTIAL_POLE_OFFSET_RADIANS are CIP offsets in the GCRS
     * (dX, dY) under the IAU 2000/2006 conventions; a consumer cannot apply
     * them correctly without knowing which model produced them.
     */
    IAU_CONVENTION(): iauPrecessionNutationModel;
    /**
     * 1-sigma uncertainty in x Pole Wander, radians.
     */
    X_POLE_WANDER_UNCERTAINTY_RADIANS(): number;
    /**
     * 1-sigma uncertainty in y Pole Wander, radians.
     */
    Y_POLE_WANDER_UNCERTAINTY_RADIANS(): number;
    /**
     * 1-sigma uncertainty in the x Celestial Pole Offset, radians.
     */
    X_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS(): number;
    /**
     * 1-sigma uncertainty in the y Celestial Pole Offset, radians.
     */
    Y_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS(): number;
    /**
     * 1-sigma uncertainty in UT1 minus UTC, seconds.
     */
    UT1_MINUS_UTC_UNCERTAINTY_SECONDS(): number;
    /**
     * 1-sigma uncertainty in the Length of Day correction, seconds.
     */
    LENGTH_OF_DAY_UNCERTAINTY_SECONDS(): number;
    static startEOP(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addMjd(builder: flatbuffers.Builder, MJD: number): void;
    static addXPoleWanderRadians(builder: flatbuffers.Builder, X_POLE_WANDER_RADIANS: number): void;
    static addYPoleWanderRadians(builder: flatbuffers.Builder, Y_POLE_WANDER_RADIANS: number): void;
    static addXCelestialPoleOffsetRadians(builder: flatbuffers.Builder, X_CELESTIAL_POLE_OFFSET_RADIANS: number): void;
    static addYCelestialPoleOffsetRadians(builder: flatbuffers.Builder, Y_CELESTIAL_POLE_OFFSET_RADIANS: number): void;
    static addUt1MinusUtcSeconds(builder: flatbuffers.Builder, UT1_MINUS_UTC_SECONDS: number): void;
    static addTaiMinusUtcSeconds(builder: flatbuffers.Builder, TAI_MINUS_UTC_SECONDS: number): void;
    static addLengthOfDayCorrectionSeconds(builder: flatbuffers.Builder, LENGTH_OF_DAY_CORRECTION_SECONDS: number): void;
    static addDataType(builder: flatbuffers.Builder, DATA_TYPE: DataType): void;
    static addSeries(builder: flatbuffers.Builder, SERIES: eopSeries): void;
    static addIauConvention(builder: flatbuffers.Builder, IAU_CONVENTION: iauPrecessionNutationModel): void;
    static addXPoleWanderUncertaintyRadians(builder: flatbuffers.Builder, X_POLE_WANDER_UNCERTAINTY_RADIANS: number): void;
    static addYPoleWanderUncertaintyRadians(builder: flatbuffers.Builder, Y_POLE_WANDER_UNCERTAINTY_RADIANS: number): void;
    static addXCelestialPoleOffsetUncertaintyRadians(builder: flatbuffers.Builder, X_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number): void;
    static addYCelestialPoleOffsetUncertaintyRadians(builder: flatbuffers.Builder, Y_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number): void;
    static addUt1MinusUtcUncertaintySeconds(builder: flatbuffers.Builder, UT1_MINUS_UTC_UNCERTAINTY_SECONDS: number): void;
    static addLengthOfDayUncertaintySeconds(builder: flatbuffers.Builder, LENGTH_OF_DAY_UNCERTAINTY_SECONDS: number): void;
    static endEOP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOP(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset, MJD: number, X_POLE_WANDER_RADIANS: number, Y_POLE_WANDER_RADIANS: number, X_CELESTIAL_POLE_OFFSET_RADIANS: number, Y_CELESTIAL_POLE_OFFSET_RADIANS: number, UT1_MINUS_UTC_SECONDS: number, TAI_MINUS_UTC_SECONDS: number, LENGTH_OF_DAY_CORRECTION_SECONDS: number, DATA_TYPE: DataType, SERIES: eopSeries, IAU_CONVENTION: iauPrecessionNutationModel, X_POLE_WANDER_UNCERTAINTY_RADIANS: number, Y_POLE_WANDER_UNCERTAINTY_RADIANS: number, X_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number, Y_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number, UT1_MINUS_UTC_UNCERTAINTY_SECONDS: number, LENGTH_OF_DAY_UNCERTAINTY_SECONDS: number): flatbuffers.Offset;
    unpack(): EOPT;
    unpackTo(_o: EOPT): void;
}
export declare class EOPT implements flatbuffers.IGeneratedObject {
    DATE: string | Uint8Array | null;
    MJD: number;
    X_POLE_WANDER_RADIANS: number;
    Y_POLE_WANDER_RADIANS: number;
    X_CELESTIAL_POLE_OFFSET_RADIANS: number;
    Y_CELESTIAL_POLE_OFFSET_RADIANS: number;
    UT1_MINUS_UTC_SECONDS: number;
    TAI_MINUS_UTC_SECONDS: number;
    LENGTH_OF_DAY_CORRECTION_SECONDS: number;
    DATA_TYPE: DataType;
    SERIES: eopSeries;
    IAU_CONVENTION: iauPrecessionNutationModel;
    X_POLE_WANDER_UNCERTAINTY_RADIANS: number;
    Y_POLE_WANDER_UNCERTAINTY_RADIANS: number;
    X_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number;
    Y_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS: number;
    UT1_MINUS_UTC_UNCERTAINTY_SECONDS: number;
    LENGTH_OF_DAY_UNCERTAINTY_SECONDS: number;
    constructor(DATE?: string | Uint8Array | null, MJD?: number, X_POLE_WANDER_RADIANS?: number, Y_POLE_WANDER_RADIANS?: number, X_CELESTIAL_POLE_OFFSET_RADIANS?: number, Y_CELESTIAL_POLE_OFFSET_RADIANS?: number, UT1_MINUS_UTC_SECONDS?: number, TAI_MINUS_UTC_SECONDS?: number, LENGTH_OF_DAY_CORRECTION_SECONDS?: number, DATA_TYPE?: DataType, SERIES?: eopSeries, IAU_CONVENTION?: iauPrecessionNutationModel, X_POLE_WANDER_UNCERTAINTY_RADIANS?: number, Y_POLE_WANDER_UNCERTAINTY_RADIANS?: number, X_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS?: number, Y_CELESTIAL_POLE_OFFSET_UNCERTAINTY_RADIANS?: number, UT1_MINUS_UTC_UNCERTAINTY_SECONDS?: number, LENGTH_OF_DAY_UNCERTAINTY_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOP.d.ts.map