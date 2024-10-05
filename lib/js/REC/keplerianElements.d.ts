import * as flatbuffers from 'flatbuffers';
import { anomalyType } from './anomalyType.js';
/**
 * Keplerian Elements
 */
export declare class keplerianElements implements flatbuffers.IUnpackableObject<keplerianElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): keplerianElements;
    static getRootAskeplerianElements(bb: flatbuffers.ByteBuffer, obj?: keplerianElements): keplerianElements;
    static getSizePrefixedRootAskeplerianElements(bb: flatbuffers.ByteBuffer, obj?: keplerianElements): keplerianElements;
    SEMI_MAJOR_AXIS(): number;
    ECCENTRICITY(): number;
    INCLINATION(): number;
    RA_OF_ASC_NODE(): number;
    ARG_OF_PERICENTER(): number;
    ANOMALY_TYPE(): anomalyType;
    ANOMALY(): number;
    static startkeplerianElements(builder: flatbuffers.Builder): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addAnomalyType(builder: flatbuffers.Builder, ANOMALY_TYPE: anomalyType): void;
    static addAnomaly(builder: flatbuffers.Builder, ANOMALY: number): void;
    static endkeplerianElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createkeplerianElements(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, ANOMALY_TYPE: anomalyType, ANOMALY: number): flatbuffers.Offset;
    unpack(): keplerianElementsT;
    unpackTo(_o: keplerianElementsT): void;
}
export declare class keplerianElementsT implements flatbuffers.IGeneratedObject {
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    ANOMALY_TYPE: anomalyType;
    ANOMALY: number;
    constructor(SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, ANOMALY_TYPE?: anomalyType, ANOMALY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=keplerianElements.d.ts.map