import * as flatbuffers from 'flatbuffers';
import { papGainCutAxis } from './papGainCutAxis.js';
/**
 * One one-dimensional gain cut through the synthesized pattern.
 */
export declare class PAPGainCut implements flatbuffers.IUnpackableObject<PAPGainCutT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PAPGainCut;
    static getRootAsPAPGainCut(bb: flatbuffers.ByteBuffer, obj?: PAPGainCut): PAPGainCut;
    static getSizePrefixedRootAsPAPGainCut(bb: flatbuffers.ByteBuffer, obj?: PAPGainCut): PAPGainCut;
    CUT_ID(): string;
    CUT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    AXIS(): papGainCutAxis;
    FIXED_ANGLE_DEG(): number;
    ANGLES_DEG(index: number): number | null;
    anglesDegLength(): number;
    anglesDegArray(): Float64Array;
    GAIN_DBI(index: number): number | null;
    gainDbiLength(): number;
    gainDbiArray(): Float64Array;
    static startPAPGainCut(builder: flatbuffers.Builder): void;
    static addCutId(builder: flatbuffers.Builder, CUT_IDOffset: flatbuffers.Offset): void;
    static addAxis(builder: flatbuffers.Builder, AXIS: papGainCutAxis): void;
    static addFixedAngleDeg(builder: flatbuffers.Builder, FIXED_ANGLE_DEG: number): void;
    static addAnglesDeg(builder: flatbuffers.Builder, ANGLES_DEGOffset: flatbuffers.Offset): void;
    static createAnglesDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAnglesDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAnglesDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGainDbi(builder: flatbuffers.Builder, GAIN_DBIOffset: flatbuffers.Offset): void;
    static createGainDbiVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGainDbiVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGainDbiVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPAPGainCut(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPAPGainCut(builder: flatbuffers.Builder, CUT_IDOffset: flatbuffers.Offset, AXIS: papGainCutAxis, FIXED_ANGLE_DEG: number, ANGLES_DEGOffset: flatbuffers.Offset, GAIN_DBIOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PAPGainCutT;
    unpackTo(_o: PAPGainCutT): void;
}
export declare class PAPGainCutT implements flatbuffers.IGeneratedObject {
    CUT_ID: string | Uint8Array | null;
    AXIS: papGainCutAxis;
    FIXED_ANGLE_DEG: number;
    ANGLES_DEG: (number)[];
    GAIN_DBI: (number)[];
    constructor(CUT_ID?: string | Uint8Array | null, AXIS?: papGainCutAxis, FIXED_ANGLE_DEG?: number, ANGLES_DEG?: (number)[], GAIN_DBI?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PAPGainCut.d.ts.map