import * as flatbuffers from 'flatbuffers';
import { meanElementTheory } from './meanElementTheory.js';
/**
 * Minimum Propagatable Element Set
 */
export declare class MPE implements flatbuffers.IUnpackableObject<MPET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPE;
    static getRootAsMPE(bb: flatbuffers.ByteBuffer, obj?: MPE): MPE;
    static getSizePrefixedRootAsMPE(bb: flatbuffers.ByteBuffer, obj?: MPE): MPE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique ID as a String [no units]
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of Mean Keplerian elements (UNIX timestamp) [numeric seconds since 1970-01-01T00:00:00 UTC]
     */
    EPOCH(): number;
    /**
     * Mean motion in rev/day [M if chosen to represent orbit size for SGP/SGP4 elements]
     */
    MEAN_MOTION(): number;
    /**
     * Eccentricity (unitless)
     */
    ECCENTRICITY(): number;
    /**
     * Inclination in degrees
     */
    INCLINATION(): number;
    /**
     * Right ascension of ascending node in degrees
     */
    RA_OF_ASC_NODE(): number;
    /**
     * Argument of pericenter in degrees
     */
    ARG_OF_PERICENTER(): number;
    /**
     * Mean anomaly in degrees
     */
    MEAN_ANOMALY(): number;
    /**
     * SGP/SGP4 drag-like coefficient (BSTAR) in units of 1/[Earth radii]
     */
    BSTAR(): number;
    /**
     * Description of the Mean Element Theory (SGP4, DSST, USM)
     */
    MEAN_ELEMENT_THEORY(): meanElementTheory;
    static startMPE(builder: flatbuffers.Builder): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementTheory): void;
    static endMPE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMPE(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset, EPOCH: number, MEAN_MOTION: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, MEAN_ANOMALY: number, BSTAR: number, MEAN_ELEMENT_THEORY: meanElementTheory): flatbuffers.Offset;
    unpack(): MPET;
    unpackTo(_o: MPET): void;
}
export declare class MPET implements flatbuffers.IGeneratedObject {
    ENTITY_ID: string | Uint8Array | null;
    EPOCH: number;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    BSTAR: number;
    MEAN_ELEMENT_THEORY: meanElementTheory;
    constructor(ENTITY_ID?: string | Uint8Array | null, EPOCH?: number, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, BSTAR?: number, MEAN_ELEMENT_THEORY?: meanElementTheory);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MPE.d.ts.map