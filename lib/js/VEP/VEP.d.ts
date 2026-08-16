import * as flatbuffers from 'flatbuffers';
import { VEPPerformancePoint, VEPPerformancePointT } from './VEPPerformancePoint.js';
import { VEPProvenance, VEPProvenanceT } from './VEPProvenance.js';
import { VEPReplenishment, VEPReplenishmentT } from './VEPReplenishment.js';
import { trackEnvironment } from './trackEnvironment.js';
import { vepEnergyType } from './vepEnergyType.js';
import { vepInterpolation } from './vepInterpolation.js';
/**
 * Vehicle Endurance Profile
 */
export declare class VEP implements flatbuffers.IUnpackableObject<VEPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VEP;
    static getRootAsVEP(bb: flatbuffers.ByteBuffer, obj?: VEP): VEP;
    static getSizePrefixedRootAsVEP(bb: flatbuffers.ByteBuffer, obj?: VEP): VEP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this profile record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Publisher-stable identifier of the vehicle CLASS this profile models.
     * Required: every profile is at least class-level.
     */
    VEHICLE_CLASS_ID(): string;
    VEHICLE_CLASS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Verbatim vehicle type token refining the class, when this profile is
     * a per-type refinement.
     */
    VEHICLE_TYPE_DESIGNATOR(): string | null;
    VEHICLE_TYPE_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Domain the vehicle operates in. The `$TRK` enum reused verbatim;
     * ordinal 0 is SPACE, so it is defaulted to UNKNOWN explicitly.
     */
    ENVIRONMENT(): trackEnvironment;
    /**
     * Kind of energy store.
     */
    ENERGY_TYPE(): vepEnergyType;
    /**
     * Usable energy store capacity, in CAPACITY_UNITS.
     */
    CAPACITY_VALUE(): number;
    /**
     * Units of CAPACITY_VALUE, verbatim. The same unit keys
     * SPECIFIC_RANGE_M_PER_UNIT and the replenishment transfer rates.
     */
    CAPACITY_UNITS(): string | null;
    CAPACITY_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fraction of capacity [0-1] held as reserve; endurance computations
     * spend down to the reserve, never through it.
     */
    RESERVE_FRACTION(): number;
    /**
     * The burn-rate table, keyed regime x altitude x speed. Required, and
     * never a single collapsed scalar.
     */
    PERFORMANCE_POINTS(index: number, obj?: VEPPerformancePoint): VEPPerformancePoint | null;
    performancePointsLength(): number;
    /**
     * How a consumer interpolates between the points.
     */
    INTERPOLATION(): vepInterpolation;
    /**
     * Maximum endurance, seconds, as the source publishes it.
     */
    MAXIMUM_ENDURANCE_S(): number;
    /**
     * Maximum range, metres, as the source publishes it.
     */
    MAXIMUM_RANGE_M(): number;
    /**
     * Best-loiter speed, metres per second.
     */
    LOITER_SPEED_MPS(): number;
    /**
     * Service ceiling, metres above mean sea level.
     */
    SERVICE_CEILING_M(): number;
    /**
     * Replenishment options available to this class or type.
     */
    REPLENISHMENT(index: number, obj?: VEPReplenishment): VEPReplenishment | null;
    replenishmentLength(): number;
    /**
     * `$VEP.ID` of the parent profile this one refines — the class-to-type
     * specialization chain. Absent for a class-level root profile.
     */
    REFINES_ID(): string | null;
    REFINES_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset lineage and licence. Required.
     */
    SOURCE(obj?: VEPProvenance): VEPProvenance | null;
    static startVEP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addVehicleClassId(builder: flatbuffers.Builder, VEHICLE_CLASS_IDOffset: flatbuffers.Offset): void;
    static addVehicleTypeDesignator(builder: flatbuffers.Builder, VEHICLE_TYPE_DESIGNATOROffset: flatbuffers.Offset): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENT: trackEnvironment): void;
    static addEnergyType(builder: flatbuffers.Builder, ENERGY_TYPE: vepEnergyType): void;
    static addCapacityValue(builder: flatbuffers.Builder, CAPACITY_VALUE: number): void;
    static addCapacityUnits(builder: flatbuffers.Builder, CAPACITY_UNITSOffset: flatbuffers.Offset): void;
    static addReserveFraction(builder: flatbuffers.Builder, RESERVE_FRACTION: number): void;
    static addPerformancePoints(builder: flatbuffers.Builder, PERFORMANCE_POINTSOffset: flatbuffers.Offset): void;
    static createPerformancePointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPerformancePointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATION: vepInterpolation): void;
    static addMaximumEnduranceS(builder: flatbuffers.Builder, MAXIMUM_ENDURANCE_S: number): void;
    static addMaximumRangeM(builder: flatbuffers.Builder, MAXIMUM_RANGE_M: number): void;
    static addLoiterSpeedMps(builder: flatbuffers.Builder, LOITER_SPEED_MPS: number): void;
    static addServiceCeilingM(builder: flatbuffers.Builder, SERVICE_CEILING_M: number): void;
    static addReplenishment(builder: flatbuffers.Builder, REPLENISHMENTOffset: flatbuffers.Offset): void;
    static createReplenishmentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReplenishmentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefinesId(builder: flatbuffers.Builder, REFINES_IDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endVEP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishVEPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedVEPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): VEPT;
    unpackTo(_o: VEPT): void;
}
export declare class VEPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    VEHICLE_CLASS_ID: string | Uint8Array | null;
    VEHICLE_TYPE_DESIGNATOR: string | Uint8Array | null;
    ENVIRONMENT: trackEnvironment;
    ENERGY_TYPE: vepEnergyType;
    CAPACITY_VALUE: number;
    CAPACITY_UNITS: string | Uint8Array | null;
    RESERVE_FRACTION: number;
    PERFORMANCE_POINTS: (VEPPerformancePointT)[];
    INTERPOLATION: vepInterpolation;
    MAXIMUM_ENDURANCE_S: number;
    MAXIMUM_RANGE_M: number;
    LOITER_SPEED_MPS: number;
    SERVICE_CEILING_M: number;
    REPLENISHMENT: (VEPReplenishmentT)[];
    REFINES_ID: string | Uint8Array | null;
    SOURCE: VEPProvenanceT | null;
    constructor(ID?: string | Uint8Array | null, VEHICLE_CLASS_ID?: string | Uint8Array | null, VEHICLE_TYPE_DESIGNATOR?: string | Uint8Array | null, ENVIRONMENT?: trackEnvironment, ENERGY_TYPE?: vepEnergyType, CAPACITY_VALUE?: number, CAPACITY_UNITS?: string | Uint8Array | null, RESERVE_FRACTION?: number, PERFORMANCE_POINTS?: (VEPPerformancePointT)[], INTERPOLATION?: vepInterpolation, MAXIMUM_ENDURANCE_S?: number, MAXIMUM_RANGE_M?: number, LOITER_SPEED_MPS?: number, SERVICE_CEILING_M?: number, REPLENISHMENT?: (VEPReplenishmentT)[], REFINES_ID?: string | Uint8Array | null, SOURCE?: VEPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VEP.d.ts.map