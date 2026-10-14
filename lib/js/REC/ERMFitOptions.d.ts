import * as flatbuffers from 'flatbuffers';
import { ERMFitSettings, ERMFitSettingsT } from './ERMFitSettings.js';
/**
 * Fit settings: shared by every object, and per object.
 */
export declare class ERMFitOptions implements flatbuffers.IUnpackableObject<ERMFitOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMFitOptions;
    static getRootAsERMFitOptions(bb: flatbuffers.ByteBuffer, obj?: ERMFitOptions): ERMFitOptions;
    static getSizePrefixedRootAsERMFitOptions(bb: flatbuffers.ByteBuffer, obj?: ERMFitOptions): ERMFitOptions;
    /**
     * Settings for every object without its own entry in FITS.
     */
    SHARED(obj?: ERMFitSettings): ERMFitSettings | null;
    /**
     * Per-object overrides (NORAD_CAT_ID set); empty = fit every object of
     * the ephemeris with SHARED.
     */
    FITS(index: number, obj?: ERMFitSettings): ERMFitSettings | null;
    fitsLength(): number;
    static startERMFitOptions(builder: flatbuffers.Builder): void;
    static addShared(builder: flatbuffers.Builder, SHAREDOffset: flatbuffers.Offset): void;
    static addFits(builder: flatbuffers.Builder, FITSOffset: flatbuffers.Offset): void;
    static createFitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMFitOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMFitOptions(builder: flatbuffers.Builder, SHAREDOffset: flatbuffers.Offset, FITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMFitOptionsT;
    unpackTo(_o: ERMFitOptionsT): void;
}
export declare class ERMFitOptionsT implements flatbuffers.IGeneratedObject {
    SHARED: ERMFitSettingsT | null;
    FITS: (ERMFitSettingsT)[];
    constructor(SHARED?: ERMFitSettingsT | null, FITS?: (ERMFitSettingsT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMFitOptions.d.ts.map