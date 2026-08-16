import * as flatbuffers from 'flatbuffers';
import { vepRegime } from './vepRegime.js';
/**
 * One point of the burn-rate table: consumption at a stated regime,
 * altitude, and speed.
 */
export declare class VEPPerformancePoint implements flatbuffers.IUnpackableObject<VEPPerformancePointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VEPPerformancePoint;
    static getRootAsVEPPerformancePoint(bb: flatbuffers.ByteBuffer, obj?: VEPPerformancePoint): VEPPerformancePoint;
    static getSizePrefixedRootAsVEPPerformancePoint(bb: flatbuffers.ByteBuffer, obj?: VEPPerformancePoint): VEPPerformancePoint;
    /**
     * Altitude the point is stated at, metres above mean sea level. NaN for
     * surface and subsurface regimes where altitude does not apply.
     */
    ALTITUDE_M(): number;
    /**
     * Speed the point is stated at, metres per second.
     */
    SPEED_MPS(): number;
    /**
     * Operating regime.
     */
    REGIME(): vepRegime;
    /**
     * Consumption rate at this point, in BURN_RATE_UNITS per second unless
     * the unit token itself states another time base.
     */
    BURN_RATE_VALUE(): number;
    /**
     * Units of BURN_RATE_VALUE, verbatim. Required: a rate with no unit is
     * not publishable.
     */
    BURN_RATE_UNITS(): string;
    BURN_RATE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Distance travelled per unit of energy at this point, metres per
     * CAPACITY_UNITS unit.
     */
    SPECIFIC_RANGE_M_PER_UNIT(): number;
    /**
     * Gross mass the point is stated at, kilograms.
     */
    GROSS_MASS_KG(): number;
    static startVEPPerformancePoint(builder: flatbuffers.Builder): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addSpeedMps(builder: flatbuffers.Builder, SPEED_MPS: number): void;
    static addRegime(builder: flatbuffers.Builder, REGIME: vepRegime): void;
    static addBurnRateValue(builder: flatbuffers.Builder, BURN_RATE_VALUE: number): void;
    static addBurnRateUnits(builder: flatbuffers.Builder, BURN_RATE_UNITSOffset: flatbuffers.Offset): void;
    static addSpecificRangeMPerUnit(builder: flatbuffers.Builder, SPECIFIC_RANGE_M_PER_UNIT: number): void;
    static addGrossMassKg(builder: flatbuffers.Builder, GROSS_MASS_KG: number): void;
    static endVEPPerformancePoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVEPPerformancePoint(builder: flatbuffers.Builder, ALTITUDE_M: number, SPEED_MPS: number, REGIME: vepRegime, BURN_RATE_VALUE: number, BURN_RATE_UNITSOffset: flatbuffers.Offset, SPECIFIC_RANGE_M_PER_UNIT: number, GROSS_MASS_KG: number): flatbuffers.Offset;
    unpack(): VEPPerformancePointT;
    unpackTo(_o: VEPPerformancePointT): void;
}
export declare class VEPPerformancePointT implements flatbuffers.IGeneratedObject {
    ALTITUDE_M: number;
    SPEED_MPS: number;
    REGIME: vepRegime;
    BURN_RATE_VALUE: number;
    BURN_RATE_UNITS: string | Uint8Array | null;
    SPECIFIC_RANGE_M_PER_UNIT: number;
    GROSS_MASS_KG: number;
    constructor(ALTITUDE_M?: number, SPEED_MPS?: number, REGIME?: vepRegime, BURN_RATE_VALUE?: number, BURN_RATE_UNITS?: string | Uint8Array | null, SPECIFIC_RANGE_M_PER_UNIT?: number, GROSS_MASS_KG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VEPPerformancePoint.d.ts.map