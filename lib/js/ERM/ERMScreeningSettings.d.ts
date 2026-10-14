import * as flatbuffers from 'flatbuffers';
import { ERMStrataSettings, ERMStrataSettingsT } from './ERMStrataSettings.js';
/**
 * Settings of a screening-rule evaluation.
 */
export declare class ERMScreeningSettings implements flatbuffers.IUnpackableObject<ERMScreeningSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningSettings;
    static getRootAsERMScreeningSettings(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningSettings): ERMScreeningSettings;
    static getSizePrefixedRootAsERMScreeningSettings(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningSettings): ERMScreeningSettings;
    STRATA_SETTINGS(obj?: ERMStrataSettings): ERMStrataSettings | null;
    HARD_BODY_RADIUS_M(): number;
    PC_THRESHOLD(): number;
    NECESSITY_LEVEL(): number;
    BOUND_COVERAGE(): number;
    DIRECTIONS(): number;
    /**
     * Miss distances evaluated, m; empty = 0, 10, 50, 100, 500, 1000, 2000,
     * 5000.
     */
    MISS_DISTANCES_M(index: number): number | null;
    missDistancesMLength(): number;
    missDistancesMArray(): Float64Array | null;
    PAIRS_PER_STRATUM(): number;
    SEED(): bigint;
    static startERMScreeningSettings(builder: flatbuffers.Builder): void;
    static addStrataSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset): void;
    static addHardBodyRadiusM(builder: flatbuffers.Builder, HARD_BODY_RADIUS_M: number): void;
    static addPcThreshold(builder: flatbuffers.Builder, PC_THRESHOLD: number): void;
    static addNecessityLevel(builder: flatbuffers.Builder, NECESSITY_LEVEL: number): void;
    static addBoundCoverage(builder: flatbuffers.Builder, BOUND_COVERAGE: number): void;
    static addDirections(builder: flatbuffers.Builder, DIRECTIONS: number): void;
    static addMissDistancesM(builder: flatbuffers.Builder, MISS_DISTANCES_MOffset: flatbuffers.Offset): void;
    static createMissDistancesMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMissDistancesMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMissDistancesMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPairsPerStratum(builder: flatbuffers.Builder, PAIRS_PER_STRATUM: number): void;
    static addSeed(builder: flatbuffers.Builder, SEED: bigint): void;
    static endERMScreeningSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset, HARD_BODY_RADIUS_M: number, PC_THRESHOLD: number, NECESSITY_LEVEL: number, BOUND_COVERAGE: number, DIRECTIONS: number, MISS_DISTANCES_MOffset: flatbuffers.Offset, PAIRS_PER_STRATUM: number, SEED: bigint): flatbuffers.Offset;
    unpack(): ERMScreeningSettingsT;
    unpackTo(_o: ERMScreeningSettingsT): void;
}
export declare class ERMScreeningSettingsT implements flatbuffers.IGeneratedObject {
    STRATA_SETTINGS: ERMStrataSettingsT | null;
    HARD_BODY_RADIUS_M: number;
    PC_THRESHOLD: number;
    NECESSITY_LEVEL: number;
    BOUND_COVERAGE: number;
    DIRECTIONS: number;
    MISS_DISTANCES_M: (number)[];
    PAIRS_PER_STRATUM: number;
    SEED: bigint;
    constructor(STRATA_SETTINGS?: ERMStrataSettingsT | null, HARD_BODY_RADIUS_M?: number, PC_THRESHOLD?: number, NECESSITY_LEVEL?: number, BOUND_COVERAGE?: number, DIRECTIONS?: number, MISS_DISTANCES_M?: (number)[], PAIRS_PER_STRATUM?: number, SEED?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningSettings.d.ts.map