import * as flatbuffers from 'flatbuffers';
/**
 * One point of an emission-limit curve. FREQUENCY_OFFSET_HZ is signed and is
 * relative to RFEEmissionMask.REFERENCE_FREQUENCY_HZ. VALUE is expressed in
 * the mask's required UNITS.
 */
export declare class RFEEmissionMaskPoint implements flatbuffers.IUnpackableObject<RFEEmissionMaskPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFEEmissionMaskPoint;
    static getRootAsRFEEmissionMaskPoint(bb: flatbuffers.ByteBuffer, obj?: RFEEmissionMaskPoint): RFEEmissionMaskPoint;
    static getSizePrefixedRootAsRFEEmissionMaskPoint(bb: flatbuffers.ByteBuffer, obj?: RFEEmissionMaskPoint): RFEEmissionMaskPoint;
    FREQUENCY_OFFSET_HZ(): number;
    VALUE(): number;
    static startRFEEmissionMaskPoint(builder: flatbuffers.Builder): void;
    static addFrequencyOffsetHz(builder: flatbuffers.Builder, FREQUENCY_OFFSET_HZ: number): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static endRFEEmissionMaskPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFEEmissionMaskPoint(builder: flatbuffers.Builder, FREQUENCY_OFFSET_HZ: number, VALUE: number): flatbuffers.Offset;
    unpack(): RFEEmissionMaskPointT;
    unpackTo(_o: RFEEmissionMaskPointT): void;
}
export declare class RFEEmissionMaskPointT implements flatbuffers.IGeneratedObject {
    FREQUENCY_OFFSET_HZ: number;
    VALUE: number;
    constructor(FREQUENCY_OFFSET_HZ?: number, VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFEEmissionMaskPoint.d.ts.map