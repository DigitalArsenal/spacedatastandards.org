import * as flatbuffers from 'flatbuffers';
/**
 * Chi-square gate threshold for one number of degrees of freedom.
 */
export declare class ASGGateThreshold implements flatbuffers.IUnpackableObject<ASGGateThresholdT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGGateThreshold;
    static getRootAsASGGateThreshold(bb: flatbuffers.ByteBuffer, obj?: ASGGateThreshold): ASGGateThreshold;
    static getSizePrefixedRootAsASGGateThreshold(bb: flatbuffers.ByteBuffer, obj?: ASGGateThreshold): ASGGateThreshold;
    DEGREES_OF_FREEDOM(): number;
    /**
     * D2 threshold at the gate probability.
     */
    THRESHOLD(): number;
    static startASGGateThreshold(builder: flatbuffers.Builder): void;
    static addDegreesOfFreedom(builder: flatbuffers.Builder, DEGREES_OF_FREEDOM: number): void;
    static addThreshold(builder: flatbuffers.Builder, THRESHOLD: number): void;
    static endASGGateThreshold(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGGateThreshold(builder: flatbuffers.Builder, DEGREES_OF_FREEDOM: number, THRESHOLD: number): flatbuffers.Offset;
    unpack(): ASGGateThresholdT;
    unpackTo(_o: ASGGateThresholdT): void;
}
export declare class ASGGateThresholdT implements flatbuffers.IGeneratedObject {
    DEGREES_OF_FREEDOM: number;
    THRESHOLD: number;
    constructor(DEGREES_OF_FREEDOM?: number, THRESHOLD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGGateThreshold.d.ts.map