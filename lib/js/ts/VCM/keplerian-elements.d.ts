import * as flatbuffers from 'flatbuffers';
import { anomalyType } from './anomaly-type.js';
/**
 * Keplerian Elements
 */
export declare class keplerianElements implements flatbuffers.IUnpackableObject<keplerianElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): keplerianElements;
    static getRootAskeplerianElements(bb: flatbuffers.ByteBuffer, obj?: keplerianElements): keplerianElements;
    static getSizePrefixedRootAskeplerianElements(bb: flatbuffers.ByteBuffer, obj?: keplerianElements): keplerianElements;
    semiMajorAxis(): number;
    eccentricity(): number;
    inclination(): number;
    raOfAscNode(): number;
    argOfPericenter(): number;
    anomalyType(): anomalyType;
    anomaly(): number;
    static startkeplerianElements(builder: flatbuffers.Builder): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, semiMajorAxis: number): void;
    static addEccentricity(builder: flatbuffers.Builder, eccentricity: number): void;
    static addInclination(builder: flatbuffers.Builder, inclination: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, raOfAscNode: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, argOfPericenter: number): void;
    static addAnomalyType(builder: flatbuffers.Builder, anomalyType: anomalyType): void;
    static addAnomaly(builder: flatbuffers.Builder, anomaly: number): void;
    static endkeplerianElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createkeplerianElements(builder: flatbuffers.Builder, semiMajorAxis: number, eccentricity: number, inclination: number, raOfAscNode: number, argOfPericenter: number, anomalyType: anomalyType, anomaly: number): flatbuffers.Offset;
    unpack(): keplerianElementsT;
    unpackTo(_o: keplerianElementsT): void;
}
export declare class keplerianElementsT implements flatbuffers.IGeneratedObject {
    semiMajorAxis: number;
    eccentricity: number;
    inclination: number;
    raOfAscNode: number;
    argOfPericenter: number;
    anomalyType: anomalyType;
    anomaly: number;
    constructor(semiMajorAxis?: number, eccentricity?: number, inclination?: number, raOfAscNode?: number, argOfPericenter?: number, anomalyType?: anomalyType, anomaly?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=keplerian-elements.d.ts.map