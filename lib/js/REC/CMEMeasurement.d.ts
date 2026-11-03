import * as flatbuffers from 'flatbuffers';
/**
 * One analysis of a CME's geometry and speed.
 */
export declare class CMEMeasurement implements flatbuffers.IUnpackableObject<CMEMeasurementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMEMeasurement;
    static getRootAsCMEMeasurement(bb: flatbuffers.ByteBuffer, obj?: CMEMeasurement): CMEMeasurement;
    static getSizePrefixedRootAsCMEMeasurement(bb: flatbuffers.ByteBuffer, obj?: CMEMeasurement): CMEMeasurement;
    /**
     * Catalog and technique, verbatim (e.g. M2M_CATALOG, SWPC_CAT; CDAW).
     */
    CATALOG(): string | null;
    CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TECHNIQUE(): string | null;
    TECHNIQUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source marks this analysis as its best.
     */
    IS_MOST_ACCURATE(): boolean;
    /**
     * The instant the measurement refers to, RFC 3339 UTC (DONKI time21_5;
     * CDAW first C2 appearance).
     */
    REFERENCE_TIME(): string | null;
    REFERENCE_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Heliocentric distance of REFERENCE_TIME, solar radii (21.5 for DONKI).
     */
    REFERENCE_HEIGHT_RSUN(): number;
    /**
     * Stonyhurst direction of propagation, degrees.
     */
    HG_LATITUDE_DEG(): number;
    HG_LONGITUDE_DEG(): number;
    HALF_ANGLE_DEG(): number;
    /**
     * Plane-of-sky central and measurement position angles, and width, degrees.
     */
    CENTRAL_PA_DEG(): number;
    MEASUREMENT_PA_DEG(): number;
    ANGULAR_WIDTH_DEG(): number;
    /**
     * Speeds, km/s: the analysis's speed; CDAW linear, 2nd-order initial,
     * final and at 20 Rs.
     */
    SPEED_KM_S(): number;
    SPEED_INITIAL_KM_S(): number;
    SPEED_FINAL_KM_S(): number;
    SPEED_20RSUN_KM_S(): number;
    ACCELERATION_M_S2(): number;
    MASS_G(): number;
    KINETIC_ENERGY_ERG(): number;
    /**
     * Source type token, verbatim (e.g. S, C, O, R, ER).
     */
    TYPE_CODE(): string | null;
    TYPE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCMEMeasurement(builder: flatbuffers.Builder): void;
    static addCatalog(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset): void;
    static addTechnique(builder: flatbuffers.Builder, TECHNIQUEOffset: flatbuffers.Offset): void;
    static addIsMostAccurate(builder: flatbuffers.Builder, IS_MOST_ACCURATE: boolean): void;
    static addReferenceTime(builder: flatbuffers.Builder, REFERENCE_TIMEOffset: flatbuffers.Offset): void;
    static addReferenceHeightRsun(builder: flatbuffers.Builder, REFERENCE_HEIGHT_RSUN: number): void;
    static addHgLatitudeDeg(builder: flatbuffers.Builder, HG_LATITUDE_DEG: number): void;
    static addHgLongitudeDeg(builder: flatbuffers.Builder, HG_LONGITUDE_DEG: number): void;
    static addHalfAngleDeg(builder: flatbuffers.Builder, HALF_ANGLE_DEG: number): void;
    static addCentralPaDeg(builder: flatbuffers.Builder, CENTRAL_PA_DEG: number): void;
    static addMeasurementPaDeg(builder: flatbuffers.Builder, MEASUREMENT_PA_DEG: number): void;
    static addAngularWidthDeg(builder: flatbuffers.Builder, ANGULAR_WIDTH_DEG: number): void;
    static addSpeedKmS(builder: flatbuffers.Builder, SPEED_KM_S: number): void;
    static addSpeedInitialKmS(builder: flatbuffers.Builder, SPEED_INITIAL_KM_S: number): void;
    static addSpeedFinalKmS(builder: flatbuffers.Builder, SPEED_FINAL_KM_S: number): void;
    static addSpeed20RsunKmS(builder: flatbuffers.Builder, SPEED_20RSUN_KM_S: number): void;
    static addAccelerationMS2(builder: flatbuffers.Builder, ACCELERATION_M_S2: number): void;
    static addMassG(builder: flatbuffers.Builder, MASS_G: number): void;
    static addKineticEnergyErg(builder: flatbuffers.Builder, KINETIC_ENERGY_ERG: number): void;
    static addTypeCode(builder: flatbuffers.Builder, TYPE_CODEOffset: flatbuffers.Offset): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static endCMEMeasurement(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCMEMeasurement(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset, TECHNIQUEOffset: flatbuffers.Offset, IS_MOST_ACCURATE: boolean, REFERENCE_TIMEOffset: flatbuffers.Offset, REFERENCE_HEIGHT_RSUN: number, HG_LATITUDE_DEG: number, HG_LONGITUDE_DEG: number, HALF_ANGLE_DEG: number, CENTRAL_PA_DEG: number, MEASUREMENT_PA_DEG: number, ANGULAR_WIDTH_DEG: number, SPEED_KM_S: number, SPEED_INITIAL_KM_S: number, SPEED_FINAL_KM_S: number, SPEED_20RSUN_KM_S: number, ACCELERATION_M_S2: number, MASS_G: number, KINETIC_ENERGY_ERG: number, TYPE_CODEOffset: flatbuffers.Offset, NOTEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMEMeasurementT;
    unpackTo(_o: CMEMeasurementT): void;
}
export declare class CMEMeasurementT implements flatbuffers.IGeneratedObject {
    CATALOG: string | Uint8Array | null;
    TECHNIQUE: string | Uint8Array | null;
    IS_MOST_ACCURATE: boolean;
    REFERENCE_TIME: string | Uint8Array | null;
    REFERENCE_HEIGHT_RSUN: number;
    HG_LATITUDE_DEG: number;
    HG_LONGITUDE_DEG: number;
    HALF_ANGLE_DEG: number;
    CENTRAL_PA_DEG: number;
    MEASUREMENT_PA_DEG: number;
    ANGULAR_WIDTH_DEG: number;
    SPEED_KM_S: number;
    SPEED_INITIAL_KM_S: number;
    SPEED_FINAL_KM_S: number;
    SPEED_20RSUN_KM_S: number;
    ACCELERATION_M_S2: number;
    MASS_G: number;
    KINETIC_ENERGY_ERG: number;
    TYPE_CODE: string | Uint8Array | null;
    NOTE: string | Uint8Array | null;
    constructor(CATALOG?: string | Uint8Array | null, TECHNIQUE?: string | Uint8Array | null, IS_MOST_ACCURATE?: boolean, REFERENCE_TIME?: string | Uint8Array | null, REFERENCE_HEIGHT_RSUN?: number, HG_LATITUDE_DEG?: number, HG_LONGITUDE_DEG?: number, HALF_ANGLE_DEG?: number, CENTRAL_PA_DEG?: number, MEASUREMENT_PA_DEG?: number, ANGULAR_WIDTH_DEG?: number, SPEED_KM_S?: number, SPEED_INITIAL_KM_S?: number, SPEED_FINAL_KM_S?: number, SPEED_20RSUN_KM_S?: number, ACCELERATION_M_S2?: number, MASS_G?: number, KINETIC_ENERGY_ERG?: number, TYPE_CODE?: string | Uint8Array | null, NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMEMeasurement.d.ts.map