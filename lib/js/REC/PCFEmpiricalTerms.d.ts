import * as flatbuffers from 'flatbuffers';
/**
 * Empirical along-track terms of the averaged theories: a transverse
 * acceleration [TAU0 + TAUC cos u + TAUS sin u] g(t), u the argument of
 * latitude and g = 1 on the fit arc.
 */
export declare class PCFEmpiricalTerms implements flatbuffers.IUnpackableObject<PCFEmpiricalTermsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFEmpiricalTerms;
    static getRootAsPCFEmpiricalTerms(bb: flatbuffers.ByteBuffer, obj?: PCFEmpiricalTerms): PCFEmpiricalTerms;
    static getSizePrefixedRootAsPCFEmpiricalTerms(bb: flatbuffers.ByteBuffer, obj?: PCFEmpiricalTerms): PCFEmpiricalTerms;
    /**
     * Fit the once-per-revolution pair (TAUC, TAUS). Default true.
     */
    ONCE_PER_REVOLUTION(): boolean;
    /**
     * The constant term TAU0 is free only when this rule selects it: a fitted
     * B_eff above this limit, m2/kg, is replaced by TAU0 with B_eff at its
     * prior. Default 0.5; the rule applies only when HAS_TAU0_RULE_LIMIT_M2_KG.
     */
    TAU0_RULE_LIMIT_M2_KG(): number;
    /**
     * True turns the TAU0 rule on with TAU0_RULE_LIMIT_M2_KG; false (the
     * default) leaves TAU0 off.
     */
    HAS_TAU0_RULE_LIMIT_M2_KG(): boolean;
    /**
     * True holds TAUC and TAUS after the arc end above the drag regime
     * (perigee above MEAN_ELEMENT.DRAG_REGIME_PERIGEE_KM), where they carry the
     * once-per-revolution part of radiation pressure; false decays them over
     * PERSISTENCE_HOURS, as inside the drag regime. Default true. A buffer
     * written before 1.268.0 omits a false value, so it reads true.
     */
    HELD_ABOVE_DRAG_REGIME(): boolean;
    /**
     * Persistence time of the empirical force after the arc end, hours.
     * Default 24.
     */
    PERSISTENCE_HOURS(): number;
    static startPCFEmpiricalTerms(builder: flatbuffers.Builder): void;
    static addOncePerRevolution(builder: flatbuffers.Builder, ONCE_PER_REVOLUTION: boolean): void;
    static addTau0RuleLimitM2Kg(builder: flatbuffers.Builder, TAU0_RULE_LIMIT_M2_KG: number): void;
    static addHasTau0RuleLimitM2Kg(builder: flatbuffers.Builder, HAS_TAU0_RULE_LIMIT_M2_KG: boolean): void;
    static addHeldAboveDragRegime(builder: flatbuffers.Builder, HELD_ABOVE_DRAG_REGIME: boolean): void;
    static addPersistenceHours(builder: flatbuffers.Builder, PERSISTENCE_HOURS: number): void;
    static endPCFEmpiricalTerms(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFEmpiricalTerms(builder: flatbuffers.Builder, ONCE_PER_REVOLUTION: boolean, TAU0_RULE_LIMIT_M2_KG: number, HAS_TAU0_RULE_LIMIT_M2_KG: boolean, HELD_ABOVE_DRAG_REGIME: boolean, PERSISTENCE_HOURS: number): flatbuffers.Offset;
    unpack(): PCFEmpiricalTermsT;
    unpackTo(_o: PCFEmpiricalTermsT): void;
}
export declare class PCFEmpiricalTermsT implements flatbuffers.IGeneratedObject {
    ONCE_PER_REVOLUTION: boolean;
    TAU0_RULE_LIMIT_M2_KG: number;
    HAS_TAU0_RULE_LIMIT_M2_KG: boolean;
    HELD_ABOVE_DRAG_REGIME: boolean;
    PERSISTENCE_HOURS: number;
    constructor(ONCE_PER_REVOLUTION?: boolean, TAU0_RULE_LIMIT_M2_KG?: number, HAS_TAU0_RULE_LIMIT_M2_KG?: boolean, HELD_ABOVE_DRAG_REGIME?: boolean, PERSISTENCE_HOURS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFEmpiricalTerms.d.ts.map