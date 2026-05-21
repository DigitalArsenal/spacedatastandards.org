import * as flatbuffers from 'flatbuffers';
/**
 * Reentry fragment evaluation.
 */
export declare class remFragmentEvaluation implements flatbuffers.IUnpackableObject<remFragmentEvaluationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): remFragmentEvaluation;
    static getRootAsremFragmentEvaluation(bb: flatbuffers.ByteBuffer, obj?: remFragmentEvaluation): remFragmentEvaluation;
    static getSizePrefixedRootAsremFragmentEvaluation(bb: flatbuffers.ByteBuffer, obj?: remFragmentEvaluation): remFragmentEvaluation;
    /**
     * Fragment identifier.
     */
    FRAGMENT_ID(): string | null;
    FRAGMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent object or component identifier.
     */
    PARENT_ID(): string | null;
    PARENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Material name or class.
     */
    MATERIAL(): string | null;
    MATERIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fragment mass in kilograms.
     */
    MASS_KG(): number;
    /**
     * Reference area in square meters.
     */
    REFERENCE_AREA_M2(): number;
    /**
     * Ballistic coefficient in kilograms per square meter.
     */
    BALLISTIC_COEFFICIENT_KG_PER_M2(): number;
    /**
     * Demise probability from zero to one.
     */
    DEMISE_PROBABILITY(): number;
    /**
     * Survival probability from zero to one.
     */
    SURVIVAL_PROBABILITY(): number;
    /**
     * Predicted impact epoch in ISO 8601 UTC format.
     */
    IMPACT_EPOCH(): string | null;
    IMPACT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicted impact latitude in degrees.
     */
    IMPACT_LATITUDE_DEG(): number;
    /**
     * Predicted impact longitude in degrees.
     */
    IMPACT_LONGITUDE_DEG(): number;
    /**
     * Impact kinetic energy in joules.
     */
    IMPACT_ENERGY_J(): number;
    /**
     * Casualty area in square meters.
     */
    CASUALTY_AREA_M2(): number;
    static startremFragmentEvaluation(builder: flatbuffers.Builder): void;
    static addFragmentId(builder: flatbuffers.Builder, FRAGMENT_IDOffset: flatbuffers.Offset): void;
    static addParentId(builder: flatbuffers.Builder, PARENT_IDOffset: flatbuffers.Offset): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KG: number): void;
    static addReferenceAreaM2(builder: flatbuffers.Builder, REFERENCE_AREA_M2: number): void;
    static addBallisticCoefficientKgPerM2(builder: flatbuffers.Builder, BALLISTIC_COEFFICIENT_KG_PER_M2: number): void;
    static addDemiseProbability(builder: flatbuffers.Builder, DEMISE_PROBABILITY: number): void;
    static addSurvivalProbability(builder: flatbuffers.Builder, SURVIVAL_PROBABILITY: number): void;
    static addImpactEpoch(builder: flatbuffers.Builder, IMPACT_EPOCHOffset: flatbuffers.Offset): void;
    static addImpactLatitudeDeg(builder: flatbuffers.Builder, IMPACT_LATITUDE_DEG: number): void;
    static addImpactLongitudeDeg(builder: flatbuffers.Builder, IMPACT_LONGITUDE_DEG: number): void;
    static addImpactEnergyJ(builder: flatbuffers.Builder, IMPACT_ENERGY_J: number): void;
    static addCasualtyAreaM2(builder: flatbuffers.Builder, CASUALTY_AREA_M2: number): void;
    static endremFragmentEvaluation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createremFragmentEvaluation(builder: flatbuffers.Builder, FRAGMENT_IDOffset: flatbuffers.Offset, PARENT_IDOffset: flatbuffers.Offset, MATERIALOffset: flatbuffers.Offset, MASS_KG: number, REFERENCE_AREA_M2: number, BALLISTIC_COEFFICIENT_KG_PER_M2: number, DEMISE_PROBABILITY: number, SURVIVAL_PROBABILITY: number, IMPACT_EPOCHOffset: flatbuffers.Offset, IMPACT_LATITUDE_DEG: number, IMPACT_LONGITUDE_DEG: number, IMPACT_ENERGY_J: number, CASUALTY_AREA_M2: number): flatbuffers.Offset;
    unpack(): remFragmentEvaluationT;
    unpackTo(_o: remFragmentEvaluationT): void;
}
export declare class remFragmentEvaluationT implements flatbuffers.IGeneratedObject {
    FRAGMENT_ID: string | Uint8Array | null;
    PARENT_ID: string | Uint8Array | null;
    MATERIAL: string | Uint8Array | null;
    MASS_KG: number;
    REFERENCE_AREA_M2: number;
    BALLISTIC_COEFFICIENT_KG_PER_M2: number;
    DEMISE_PROBABILITY: number;
    SURVIVAL_PROBABILITY: number;
    IMPACT_EPOCH: string | Uint8Array | null;
    IMPACT_LATITUDE_DEG: number;
    IMPACT_LONGITUDE_DEG: number;
    IMPACT_ENERGY_J: number;
    CASUALTY_AREA_M2: number;
    constructor(FRAGMENT_ID?: string | Uint8Array | null, PARENT_ID?: string | Uint8Array | null, MATERIAL?: string | Uint8Array | null, MASS_KG?: number, REFERENCE_AREA_M2?: number, BALLISTIC_COEFFICIENT_KG_PER_M2?: number, DEMISE_PROBABILITY?: number, SURVIVAL_PROBABILITY?: number, IMPACT_EPOCH?: string | Uint8Array | null, IMPACT_LATITUDE_DEG?: number, IMPACT_LONGITUDE_DEG?: number, IMPACT_ENERGY_J?: number, CASUALTY_AREA_M2?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=remFragmentEvaluation.d.ts.map