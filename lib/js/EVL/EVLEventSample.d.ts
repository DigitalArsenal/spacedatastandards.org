import * as flatbuffers from 'flatbuffers';
import { PCEParameterSample, PCEParameterSampleT } from './PCEParameterSample.js';
import { evlSamplePoint } from './evlSamplePoint.js';
/**
 * Parameter values captured at one instant inside an event.
 */
export declare class EVLEventSample implements flatbuffers.IUnpackableObject<EVLEventSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLEventSample;
    static getRootAsEVLEventSample(bb: flatbuffers.ByteBuffer, obj?: EVLEventSample): EVLEventSample;
    static getSizePrefixedRootAsEVLEventSample(bb: flatbuffers.ByteBuffer, obj?: EVLEventSample): EVLEventSample;
    POINT(): evlSamplePoint;
    SAMPLE(obj?: PCEParameterSample): PCEParameterSample | null;
    static startEVLEventSample(builder: flatbuffers.Builder): void;
    static addPoint(builder: flatbuffers.Builder, POINT: evlSamplePoint): void;
    static addSample(builder: flatbuffers.Builder, SAMPLEOffset: flatbuffers.Offset): void;
    static endEVLEventSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EVLEventSampleT;
    unpackTo(_o: EVLEventSampleT): void;
}
export declare class EVLEventSampleT implements flatbuffers.IGeneratedObject {
    POINT: evlSamplePoint;
    SAMPLE: PCEParameterSampleT | null;
    constructor(POINT?: evlSamplePoint, SAMPLE?: PCEParameterSampleT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLEventSample.d.ts.map