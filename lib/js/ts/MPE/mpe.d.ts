import * as flatbuffers from 'flatbuffers';
import { meanElementTheory } from './mean-element-theory.js';
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
    entityId(): string | null;
    entityId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of Mean Keplerian elements (UNIX timestamp) [numeric seconds since 1970-01-01T00:00:00 UTC]
     */
    epoch(): number;
    /**
     * Mean motion in rev/day [M if chosen to represent orbit size for SGP/SGP4 elements]
     */
    meanMotion(): number;
    /**
     * Eccentricity (unitless)
     */
    eccentricity(): number;
    /**
     * Inclination in degrees
     */
    inclination(): number;
    /**
     * Right ascension of ascending node in degrees
     */
    raOfAscNode(): number;
    /**
     * Argument of pericenter in degrees
     */
    argOfPericenter(): number;
    /**
     * Mean anomaly in degrees
     */
    meanAnomaly(): number;
    /**
     * SGP/SGP4 drag-like coefficient (BSTAR) in units of 1/[Earth radii]
     */
    bstar(): number;
    /**
     * Description of the Mean Element Theory (SGP4, DSST, USM)
     */
    meanElementTheory(): meanElementTheory;
    static startMPE(builder: flatbuffers.Builder): void;
    static addEntityId(builder: flatbuffers.Builder, entityIdOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, epoch: number): void;
    static addMeanMotion(builder: flatbuffers.Builder, meanMotion: number): void;
    static addEccentricity(builder: flatbuffers.Builder, eccentricity: number): void;
    static addInclination(builder: flatbuffers.Builder, inclination: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, raOfAscNode: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, argOfPericenter: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, meanAnomaly: number): void;
    static addBstar(builder: flatbuffers.Builder, bstar: number): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, meanElementTheory: meanElementTheory): void;
    static endMPE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMPE(builder: flatbuffers.Builder, entityIdOffset: flatbuffers.Offset, epoch: number, meanMotion: number, eccentricity: number, inclination: number, raOfAscNode: number, argOfPericenter: number, meanAnomaly: number, bstar: number, meanElementTheory: meanElementTheory): flatbuffers.Offset;
    unpack(): MPET;
    unpackTo(_o: MPET): void;
}
export declare class MPET implements flatbuffers.IGeneratedObject {
    entityId: string | Uint8Array | null;
    epoch: number;
    meanMotion: number;
    eccentricity: number;
    inclination: number;
    raOfAscNode: number;
    argOfPericenter: number;
    meanAnomaly: number;
    bstar: number;
    meanElementTheory: meanElementTheory;
    constructor(entityId?: string | Uint8Array | null, epoch?: number, meanMotion?: number, eccentricity?: number, inclination?: number, raOfAscNode?: number, argOfPericenter?: number, meanAnomaly?: number, bstar?: number, meanElementTheory?: meanElementTheory);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mpe.d.ts.map