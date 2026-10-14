import * as flatbuffers from 'flatbuffers';
import { ERMArcPrediction, ERMArcPredictionT } from './ERMArcPrediction.js';
/**
 * Predictions for an arc plan.
 */
export declare class ERMArcPredictions implements flatbuffers.IUnpackableObject<ERMArcPredictionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMArcPredictions;
    static getRootAsERMArcPredictions(bb: flatbuffers.ByteBuffer, obj?: ERMArcPredictions): ERMArcPredictions;
    static getSizePrefixedRootAsERMArcPredictions(bb: flatbuffers.ByteBuffer, obj?: ERMArcPredictions): ERMArcPredictions;
    ARCS(index: number, obj?: ERMArcPrediction): ERMArcPrediction | null;
    arcsLength(): number;
    static startERMArcPredictions(builder: flatbuffers.Builder): void;
    static addArcs(builder: flatbuffers.Builder, ARCSOffset: flatbuffers.Offset): void;
    static createArcsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArcsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMArcPredictions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMArcPredictions(builder: flatbuffers.Builder, ARCSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMArcPredictionsT;
    unpackTo(_o: ERMArcPredictionsT): void;
}
export declare class ERMArcPredictionsT implements flatbuffers.IGeneratedObject {
    ARCS: (ERMArcPredictionT)[];
    constructor(ARCS?: (ERMArcPredictionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMArcPredictions.d.ts.map