import * as flatbuffers from 'flatbuffers';
import { ERMAgeBin, ERMAgeBinT } from './ERMAgeBin.js';
import { ERMClipSettings, ERMClipSettingsT } from './ERMClipSettings.js';
import { ERMRegime, ERMRegimeT } from './ERMRegime.js';
/**
 * The strata of a model and how samples are taken. Empty REGIMES and
 * AGE_BINS mean the producer's defaults.
 */
export declare class ERMStrataSettings implements flatbuffers.IUnpackableObject<ERMStrataSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStrataSettings;
    static getRootAsERMStrataSettings(bb: flatbuffers.ByteBuffer, obj?: ERMStrataSettings): ERMStrataSettings;
    static getSizePrefixedRootAsERMStrataSettings(bb: flatbuffers.ByteBuffer, obj?: ERMStrataSettings): ERMStrataSettings;
    REGIMES(index: number, obj?: ERMRegime): ERMRegime | null;
    regimesLength(): number;
    AGE_BINS(index: number, obj?: ERMAgeBin): ERMAgeBin | null;
    ageBinsLength(): number;
    /**
     * Reference states are thinned to this step, s.
     */
    REFERENCE_STEP_S(): number;
    CLIP(obj?: ERMClipSettings): ERMClipSettings | null;
    static startERMStrataSettings(builder: flatbuffers.Builder): void;
    static addRegimes(builder: flatbuffers.Builder, REGIMESOffset: flatbuffers.Offset): void;
    static createRegimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRegimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAgeBins(builder: flatbuffers.Builder, AGE_BINSOffset: flatbuffers.Offset): void;
    static createAgeBinsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAgeBinsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferenceStepS(builder: flatbuffers.Builder, REFERENCE_STEP_S: number): void;
    static addClip(builder: flatbuffers.Builder, CLIPOffset: flatbuffers.Offset): void;
    static endERMStrataSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMStrataSettingsT;
    unpackTo(_o: ERMStrataSettingsT): void;
}
export declare class ERMStrataSettingsT implements flatbuffers.IGeneratedObject {
    REGIMES: (ERMRegimeT)[];
    AGE_BINS: (ERMAgeBinT)[];
    REFERENCE_STEP_S: number;
    CLIP: ERMClipSettingsT | null;
    constructor(REGIMES?: (ERMRegimeT)[], AGE_BINS?: (ERMAgeBinT)[], REFERENCE_STEP_S?: number, CLIP?: ERMClipSettingsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStrataSettings.d.ts.map