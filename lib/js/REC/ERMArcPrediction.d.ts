import * as flatbuffers from 'flatbuffers';
import { ERMPredictionSample, ERMPredictionSampleT } from './ERMPredictionSample.js';
/**
 * Predictions of one arc, aligned with its targets.
 */
export declare class ERMArcPrediction implements flatbuffers.IUnpackableObject<ERMArcPredictionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArcPrediction;
    static getRootAsERMArcPrediction(bb: flatbuffers.ByteBuffer, obj?: ERMArcPrediction): ERMArcPrediction;
    static getSizePrefixedRootAsERMArcPrediction(bb: flatbuffers.ByteBuffer, obj?: ERMArcPrediction): ERMArcPrediction;
    ARC(): number;
    SAMPLES(index: number, obj?: ERMPredictionSample): ERMPredictionSample | null;
    samplesLength(): number;
    static startERMArcPrediction(builder: flatbuffers.Builder): void;
    static addArc(builder: flatbuffers.Builder, ARC: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMArcPrediction(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMArcPrediction(builder: flatbuffers.Builder, ARC: number, SAMPLESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMArcPredictionT;
    unpackTo(_o: ERMArcPredictionT): void;
}
export declare class ERMArcPredictionT implements flatbuffers.IGeneratedObject {
    ARC: number;
    SAMPLES: (ERMPredictionSampleT)[];
    constructor(ARC?: number, SAMPLES?: (ERMPredictionSampleT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArcPrediction.d.ts.map