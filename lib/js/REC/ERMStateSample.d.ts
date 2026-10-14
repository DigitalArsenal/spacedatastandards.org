import * as flatbuffers from 'flatbuffers';
/**
 * A sampled state with a covariance.
 */
export declare class ERMStateSample implements flatbuffers.IUnpackableObject<ERMStateSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStateSample;
    static getRootAsERMStateSample(bb: flatbuffers.ByteBuffer, obj?: ERMStateSample): ERMStateSample;
    static getSizePrefixedRootAsERMStateSample(bb: flatbuffers.ByteBuffer, obj?: ERMStateSample): ERMStateSample;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION_M(index: number): number | null;
    positionMLength(): number;
    positionMArray(): Float64Array | null;
    VELOCITY_M_S(index: number): number | null;
    velocityMSLength(): number;
    velocityMSArray(): Float64Array | null;
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    static startERMStateSample(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addPositionM(builder: flatbuffers.Builder, POSITION_MOffset: flatbuffers.Offset): void;
    static createPositionMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityMS(builder: flatbuffers.Builder, VELOCITY_M_SOffset: flatbuffers.Offset): void;
    static createVelocityMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMStateSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMStateSample(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, POSITION_MOffset: flatbuffers.Offset, VELOCITY_M_SOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMStateSampleT;
    unpackTo(_o: ERMStateSampleT): void;
}
export declare class ERMStateSampleT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    POSITION_M: (number)[];
    VELOCITY_M_S: (number)[];
    COVARIANCE: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, POSITION_M?: (number)[], VELOCITY_M_S?: (number)[], COVARIANCE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStateSample.d.ts.map