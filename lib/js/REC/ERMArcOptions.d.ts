import * as flatbuffers from 'flatbuffers';
import { ERMStrataSettings, ERMStrataSettingsT } from './ERMStrataSettings.js';
/**
 * Settings of an arc plan.
 */
export declare class ERMArcOptions implements flatbuffers.IUnpackableObject<ERMArcOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArcOptions;
    static getRootAsERMArcOptions(bb: flatbuffers.ByteBuffer, obj?: ERMArcOptions): ERMArcOptions;
    static getSizePrefixedRootAsERMArcOptions(bb: flatbuffers.ByteBuffer, obj?: ERMArcOptions): ERMArcOptions;
    STRATA_SETTINGS(obj?: ERMStrataSettings): ERMStrataSettings | null;
    /**
     * Target prediction ages, days; empty = 0, 0.25, 0.75, 1.5, 2.5, 4, 6.
     */
    TARGET_AGES_DAYS(index: number): number | null;
    targetAgesDaysLength(): number;
    targetAgesDaysArray(): Float64Array | null;
    /**
     * Age 0 uses the first reference epoch at or after the set epoch within
     * this, s.
     */
    EPOCH_TOLERANCE_S(): number;
    /**
     * Other ages use the nearest reference epoch within this, s.
     */
    TARGET_TOLERANCE_S(): number;
    static startERMArcOptions(builder: flatbuffers.Builder): void;
    static addStrataSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset): void;
    static addTargetAgesDays(builder: flatbuffers.Builder, TARGET_AGES_DAYSOffset: flatbuffers.Offset): void;
    static createTargetAgesDaysVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetAgesDaysVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetAgesDaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochToleranceS(builder: flatbuffers.Builder, EPOCH_TOLERANCE_S: number): void;
    static addTargetToleranceS(builder: flatbuffers.Builder, TARGET_TOLERANCE_S: number): void;
    static endERMArcOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMArcOptions(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset, TARGET_AGES_DAYSOffset: flatbuffers.Offset, EPOCH_TOLERANCE_S: number, TARGET_TOLERANCE_S: number): flatbuffers.Offset;
    unpack(): ERMArcOptionsT;
    unpackTo(_o: ERMArcOptionsT): void;
}
export declare class ERMArcOptionsT implements flatbuffers.IGeneratedObject {
    STRATA_SETTINGS: ERMStrataSettingsT | null;
    TARGET_AGES_DAYS: (number)[];
    EPOCH_TOLERANCE_S: number;
    TARGET_TOLERANCE_S: number;
    constructor(STRATA_SETTINGS?: ERMStrataSettingsT | null, TARGET_AGES_DAYS?: (number)[], EPOCH_TOLERANCE_S?: number, TARGET_TOLERANCE_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArcOptions.d.ts.map