import * as flatbuffers from 'flatbuffers';
/**
 * Launch initialization: priors for the first element sets of new objects
 * and for a deployment batch fitted jointly.
 */
export declare class PCFLaunch implements flatbuffers.IUnpackableObject<PCFLaunchT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFLaunch;
    static getRootAsPCFLaunch(bb: flatbuffers.ByteBuffer, obj?: PCFLaunch): PCFLaunch;
    static getSizePrefixedRootAsPCFLaunch(bb: flatbuffers.ByteBuffer, obj?: PCFLaunch): PCFLaunch;
    /**
     * A priori B_eff (Cd*A/m) of a new object, m2/kg. Default 0.01.
     */
    DRAG_AREA_OVER_MASS_PRIOR_M2_KG(): number;
    /**
     * A priori AGOM (Cr*A/m) of a new object, m2/kg. Default 0.01.
     */
    SRP_AREA_OVER_MASS_PRIOR_M2_KG(): number;
    /**
     * Prior 1-sigma of each object's separation velocity per axis, m/s.
     * Default 1.
     */
    SEPARATION_SIGMA_M_S(): number;
    /**
     * Shrinkage 1-sigma of each object's B_eff about the batch mean, m2/kg.
     * Absent, it is DRAG_AREA_OVER_MASS_PRIOR_M2_KG.
     */
    SHRINK_SIGMA_M2_KG(): number;
    /**
     * True when SHRINK_SIGMA_M2_KG carries a value; false means absent.
     */
    HAS_SHRINK_SIGMA_M2_KG(): boolean;
    /**
     * Prior 1-sigma of the batch-mean B_eff, m2/kg. Default 1.
     */
    BATCH_MEAN_SIGMA_M2_KG(): number;
    static startPCFLaunch(builder: flatbuffers.Builder): void;
    static addDragAreaOverMassPriorM2Kg(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_PRIOR_M2_KG: number): void;
    static addSrpAreaOverMassPriorM2Kg(builder: flatbuffers.Builder, SRP_AREA_OVER_MASS_PRIOR_M2_KG: number): void;
    static addSeparationSigmaMS(builder: flatbuffers.Builder, SEPARATION_SIGMA_M_S: number): void;
    static addShrinkSigmaM2Kg(builder: flatbuffers.Builder, SHRINK_SIGMA_M2_KG: number): void;
    static addHasShrinkSigmaM2Kg(builder: flatbuffers.Builder, HAS_SHRINK_SIGMA_M2_KG: boolean): void;
    static addBatchMeanSigmaM2Kg(builder: flatbuffers.Builder, BATCH_MEAN_SIGMA_M2_KG: number): void;
    static endPCFLaunch(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFLaunch(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_PRIOR_M2_KG: number, SRP_AREA_OVER_MASS_PRIOR_M2_KG: number, SEPARATION_SIGMA_M_S: number, SHRINK_SIGMA_M2_KG: number, HAS_SHRINK_SIGMA_M2_KG: boolean, BATCH_MEAN_SIGMA_M2_KG: number): flatbuffers.Offset;
    unpack(): PCFLaunchT;
    unpackTo(_o: PCFLaunchT): void;
}
export declare class PCFLaunchT implements flatbuffers.IGeneratedObject {
    DRAG_AREA_OVER_MASS_PRIOR_M2_KG: number;
    SRP_AREA_OVER_MASS_PRIOR_M2_KG: number;
    SEPARATION_SIGMA_M_S: number;
    SHRINK_SIGMA_M2_KG: number;
    HAS_SHRINK_SIGMA_M2_KG: boolean;
    BATCH_MEAN_SIGMA_M2_KG: number;
    constructor(DRAG_AREA_OVER_MASS_PRIOR_M2_KG?: number, SRP_AREA_OVER_MASS_PRIOR_M2_KG?: number, SEPARATION_SIGMA_M_S?: number, SHRINK_SIGMA_M2_KG?: number, HAS_SHRINK_SIGMA_M2_KG?: boolean, BATCH_MEAN_SIGMA_M2_KG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFLaunch.d.ts.map