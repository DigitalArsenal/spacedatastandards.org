import * as flatbuffers from 'flatbuffers';
/**
 * Surviving Debris Prediction
 */
export declare class survivingDebris implements flatbuffers.IUnpackableObject<survivingDebrisT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): survivingDebris;
    static getRootAssurvivingDebris(bb: flatbuffers.ByteBuffer, obj?: survivingDebris): survivingDebris;
    static getSizePrefixedRootAssurvivingDebris(bb: flatbuffers.ByteBuffer, obj?: survivingDebris): survivingDebris;
    /**
     * Fragment identifier
     */
    FRAGMENT_ID(): string | null;
    FRAGMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Material type
     */
    MATERIAL(): string | null;
    MATERIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fragment mass in kg
     */
    MASS(): number;
    /**
     * Casualty area in m^2
     */
    CASUALTY_AREA(): number;
    /**
     * Survival probability (0.0-1.0)
     */
    SURVIVAL_PROBABILITY(): number;
    static startsurvivingDebris(builder: flatbuffers.Builder): void;
    static addFragmentId(builder: flatbuffers.Builder, FRAGMENT_IDOffset: flatbuffers.Offset): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addCasualtyArea(builder: flatbuffers.Builder, CASUALTY_AREA: number): void;
    static addSurvivalProbability(builder: flatbuffers.Builder, SURVIVAL_PROBABILITY: number): void;
    static endsurvivingDebris(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createsurvivingDebris(builder: flatbuffers.Builder, FRAGMENT_IDOffset: flatbuffers.Offset, MATERIALOffset: flatbuffers.Offset, MASS: number, CASUALTY_AREA: number, SURVIVAL_PROBABILITY: number): flatbuffers.Offset;
    unpack(): survivingDebrisT;
    unpackTo(_o: survivingDebrisT): void;
}
export declare class survivingDebrisT implements flatbuffers.IGeneratedObject {
    FRAGMENT_ID: string | Uint8Array | null;
    MATERIAL: string | Uint8Array | null;
    MASS: number;
    CASUALTY_AREA: number;
    SURVIVAL_PROBABILITY: number;
    constructor(FRAGMENT_ID?: string | Uint8Array | null, MATERIAL?: string | Uint8Array | null, MASS?: number, CASUALTY_AREA?: number, SURVIVAL_PROBABILITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=survivingDebris.d.ts.map