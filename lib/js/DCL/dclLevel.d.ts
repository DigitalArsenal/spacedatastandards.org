import * as flatbuffers from 'flatbuffers';
/**
 * The mean level of a node correction at one altitude node.
 */
export declare class dclLevel implements flatbuffers.IUnpackableObject<dclLevelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclLevel;
    static getRootAsdclLevel(bb: flatbuffers.ByteBuffer, obj?: dclLevel): dclLevel;
    static getSizePrefixedRootAsdclLevel(bb: flatbuffers.ByteBuffer, obj?: dclLevel): dclLevel;
    /**
     * Altitude node, km; NaN = the single global node.
     */
    ALTITUDE_KM(): number;
    /**
     * Mean correction over the time nodes, K, and its formal sigma (NaN = not
     * computed).
     */
    MEAN_K(): number;
    SIGMA_K(): number;
    static startdclLevel(builder: flatbuffers.Builder): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KM: number): void;
    static addMeanK(builder: flatbuffers.Builder, MEAN_K: number): void;
    static addSigmaK(builder: flatbuffers.Builder, SIGMA_K: number): void;
    static enddclLevel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclLevel(builder: flatbuffers.Builder, ALTITUDE_KM: number, MEAN_K: number, SIGMA_K: number): flatbuffers.Offset;
    unpack(): dclLevelT;
    unpackTo(_o: dclLevelT): void;
}
export declare class dclLevelT implements flatbuffers.IGeneratedObject {
    ALTITUDE_KM: number;
    MEAN_K: number;
    SIGMA_K: number;
    constructor(ALTITUDE_KM?: number, MEAN_K?: number, SIGMA_K?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclLevel.d.ts.map