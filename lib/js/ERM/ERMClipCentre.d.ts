import * as flatbuffers from 'flatbuffers';
/**
 * Robust clipping centre and scale of one stratum.
 */
export declare class ERMClipCentre implements flatbuffers.IUnpackableObject<ERMClipCentreT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMClipCentre;
    static getRootAsERMClipCentre(bb: flatbuffers.ByteBuffer, obj?: ERMClipCentre): ERMClipCentre;
    static getSizePrefixedRootAsERMClipCentre(bb: flatbuffers.ByteBuffer, obj?: ERMClipCentre): ERMClipCentre;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    /**
     * Centre of the R, T, N position errors, km (3 values).
     */
    CENTRE_KM(index: number): number | null;
    centreKmLength(): number;
    centreKmArray(): Float64Array | null;
    /**
     * Robust scale of the R, T, N position errors, km (3 values).
     */
    SCALE_KM(index: number): number | null;
    scaleKmLength(): number;
    scaleKmArray(): Float64Array | null;
    static startERMClipCentre(builder: flatbuffers.Builder): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addCentreKm(builder: flatbuffers.Builder, CENTRE_KMOffset: flatbuffers.Offset): void;
    static createCentreKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCentreKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCentreKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScaleKm(builder: flatbuffers.Builder, SCALE_KMOffset: flatbuffers.Offset): void;
    static createScaleKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScaleKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScaleKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMClipCentre(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMClipCentre(builder: flatbuffers.Builder, REGIME_INDEX: number, AGE_INDEX: number, CENTRE_KMOffset: flatbuffers.Offset, SCALE_KMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMClipCentreT;
    unpackTo(_o: ERMClipCentreT): void;
}
export declare class ERMClipCentreT implements flatbuffers.IGeneratedObject {
    REGIME_INDEX: number;
    AGE_INDEX: number;
    CENTRE_KM: (number)[];
    SCALE_KM: (number)[];
    constructor(REGIME_INDEX?: number, AGE_INDEX?: number, CENTRE_KM?: (number)[], SCALE_KM?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMClipCentre.d.ts.map