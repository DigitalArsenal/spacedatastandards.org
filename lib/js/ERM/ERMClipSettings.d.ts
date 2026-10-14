import * as flatbuffers from 'flatbuffers';
import { ERMClipCentre, ERMClipCentreT } from './ERMClipCentre.js';
/**
 * Clipping of outlying errors.
 */
export declare class ERMClipSettings implements flatbuffers.IUnpackableObject<ERMClipSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMClipSettings;
    static getRootAsERMClipSettings(bb: flatbuffers.ByteBuffer, obj?: ERMClipSettings): ERMClipSettings;
    static getSizePrefixedRootAsERMClipSettings(bb: flatbuffers.ByteBuffer, obj?: ERMClipSettings): ERMClipSettings;
    /**
     * Errors further than K robust scales from the centre are clipped; 0 = no
     * clipping.
     */
    K(): number;
    STRATA(index: number, obj?: ERMClipCentre): ERMClipCentre | null;
    strataLength(): number;
    static startERMClipSettings(builder: flatbuffers.Builder): void;
    static addK(builder: flatbuffers.Builder, K: number): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMClipSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMClipSettings(builder: flatbuffers.Builder, K: number, STRATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMClipSettingsT;
    unpackTo(_o: ERMClipSettingsT): void;
}
export declare class ERMClipSettingsT implements flatbuffers.IGeneratedObject {
    K: number;
    STRATA: (ERMClipCentreT)[];
    constructor(K?: number, STRATA?: (ERMClipCentreT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMClipSettings.d.ts.map