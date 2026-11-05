import * as flatbuffers from 'flatbuffers';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
/**
 * Projected areas and the ratios derived from them.
 */
export declare class OPPAreas implements flatbuffers.IUnpackableObject<OPPAreasT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPAreas;
    static getRootAsOPPAreas(bb: flatbuffers.ByteBuffer, obj?: OPPAreas): OPPAreas;
    static getSizePrefixedRootAsOPPAreas(bb: flatbuffers.ByteBuffer, obj?: OPPAreas): OPPAreas;
    /**
     * Average projected cross-sectional area over all aspects [m2].
     */
    CROSS_SECTIONAL_AVERAGE(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Smallest projected cross-sectional area [m2].
     */
    CROSS_SECTIONAL_MINIMUM(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Largest projected cross-sectional area [m2].
     */
    CROSS_SECTIONAL_MAXIMUM(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Total solar-array area [m2].
     */
    SOLAR_ARRAY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Area-to-mass ratio [m2/kg], only when a source publishes one directly or
     * the publisher derives it with PROVENANCE.METHOD DERIVED.
     */
    AREA_TO_MASS_RATIO(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Ballistic coefficient [kg/m2].
     */
    BALLISTIC_COEFFICIENT(obj?: OPPQuantity): OPPQuantity | null;
    static startOPPAreas(builder: flatbuffers.Builder): void;
    static addCrossSectionalAverage(builder: flatbuffers.Builder, CROSS_SECTIONAL_AVERAGEOffset: flatbuffers.Offset): void;
    static addCrossSectionalMinimum(builder: flatbuffers.Builder, CROSS_SECTIONAL_MINIMUMOffset: flatbuffers.Offset): void;
    static addCrossSectionalMaximum(builder: flatbuffers.Builder, CROSS_SECTIONAL_MAXIMUMOffset: flatbuffers.Offset): void;
    static addSolarArray(builder: flatbuffers.Builder, SOLAR_ARRAYOffset: flatbuffers.Offset): void;
    static addAreaToMassRatio(builder: flatbuffers.Builder, AREA_TO_MASS_RATIOOffset: flatbuffers.Offset): void;
    static addBallisticCoefficient(builder: flatbuffers.Builder, BALLISTIC_COEFFICIENTOffset: flatbuffers.Offset): void;
    static endOPPAreas(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPAreasT;
    unpackTo(_o: OPPAreasT): void;
}
export declare class OPPAreasT implements flatbuffers.IGeneratedObject {
    CROSS_SECTIONAL_AVERAGE: OPPQuantityT | null;
    CROSS_SECTIONAL_MINIMUM: OPPQuantityT | null;
    CROSS_SECTIONAL_MAXIMUM: OPPQuantityT | null;
    SOLAR_ARRAY: OPPQuantityT | null;
    AREA_TO_MASS_RATIO: OPPQuantityT | null;
    BALLISTIC_COEFFICIENT: OPPQuantityT | null;
    constructor(CROSS_SECTIONAL_AVERAGE?: OPPQuantityT | null, CROSS_SECTIONAL_MINIMUM?: OPPQuantityT | null, CROSS_SECTIONAL_MAXIMUM?: OPPQuantityT | null, SOLAR_ARRAY?: OPPQuantityT | null, AREA_TO_MASS_RATIO?: OPPQuantityT | null, BALLISTIC_COEFFICIENT?: OPPQuantityT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPAreas.d.ts.map