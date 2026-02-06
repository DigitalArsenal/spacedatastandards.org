import * as flatbuffers from 'flatbuffers';
import { beamContourPoint, beamContourPointT } from './beamContourPoint.js';
/**
 * Beam Contour (iso-gain boundary)
 */
export declare class beamContour implements flatbuffers.IUnpackableObject<beamContourT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): beamContour;
    static getRootAsbeamContour(bb: flatbuffers.ByteBuffer, obj?: beamContour): beamContour;
    static getSizePrefixedRootAsbeamContour(bb: flatbuffers.ByteBuffer, obj?: beamContour): beamContour;
    /**
     * Contour level identifier
     */
    CONTOUR_ID(): string | null;
    CONTOUR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gain level in dBi
     */
    GAIN_LEVEL(): number;
    /**
     * Contour boundary points
     */
    POINTS(index: number, obj?: beamContourPoint): beamContourPoint | null;
    pointsLength(): number;
    static startbeamContour(builder: flatbuffers.Builder): void;
    static addContourId(builder: flatbuffers.Builder, CONTOUR_IDOffset: flatbuffers.Offset): void;
    static addGainLevel(builder: flatbuffers.Builder, GAIN_LEVEL: number): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endbeamContour(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createbeamContour(builder: flatbuffers.Builder, CONTOUR_IDOffset: flatbuffers.Offset, GAIN_LEVEL: number, POINTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): beamContourT;
    unpackTo(_o: beamContourT): void;
}
export declare class beamContourT implements flatbuffers.IGeneratedObject {
    CONTOUR_ID: string | Uint8Array | null;
    GAIN_LEVEL: number;
    POINTS: (beamContourPointT)[];
    constructor(CONTOUR_ID?: string | Uint8Array | null, GAIN_LEVEL?: number, POINTS?: (beamContourPointT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=beamContour.d.ts.map