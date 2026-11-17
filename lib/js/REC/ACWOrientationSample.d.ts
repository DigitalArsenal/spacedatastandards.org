import * as flatbuffers from 'flatbuffers';
/**
 * Body-fixed to STATES-frame rotation at one epoch.
 */
export declare class ACWOrientationSample implements flatbuffers.IUnpackableObject<ACWOrientationSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWOrientationSample;
    static getRootAsACWOrientationSample(bb: flatbuffers.ByteBuffer, obj?: ACWOrientationSample): ACWOrientationSample;
    static getSizePrefixedRootAsACWOrientationSample(bb: flatbuffers.ByteBuffer, obj?: ACWOrientationSample): ACWOrientationSample;
    /**
     * Sample epoch as Julian Date in TT.
     */
    JULIAN_DATE_TT(): number;
    /**
     * Quaternion rotating body-fixed axes into the STATES frame
     * (Earth-fixed); vector part Q1..Q3, scalar QC.
     */
    Q1(): number;
    Q2(): number;
    Q3(): number;
    QC(): number;
    static startACWOrientationSample(builder: flatbuffers.Builder): void;
    static addJulianDateTt(builder: flatbuffers.Builder, JULIAN_DATE_TT: number): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static endACWOrientationSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWOrientationSample(builder: flatbuffers.Builder, JULIAN_DATE_TT: number, Q1: number, Q2: number, Q3: number, QC: number): flatbuffers.Offset;
    unpack(): ACWOrientationSampleT;
    unpackTo(_o: ACWOrientationSampleT): void;
}
export declare class ACWOrientationSampleT implements flatbuffers.IGeneratedObject {
    JULIAN_DATE_TT: number;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    constructor(JULIAN_DATE_TT?: number, Q1?: number, Q2?: number, Q3?: number, QC?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWOrientationSample.d.ts.map