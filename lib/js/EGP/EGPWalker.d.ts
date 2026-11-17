import * as flatbuffers from 'flatbuffers';
import { egpWalkerPattern } from './egpWalkerPattern.js';
/**
 * The Walker definition a constellation group's members are generated from.
 * Angles are in degrees, as an $OMM states them.
 */
export declare class EGPWalker implements flatbuffers.IUnpackableObject<EGPWalkerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EGPWalker;
    static getRootAsEGPWalker(bb: flatbuffers.ByteBuffer, obj?: EGPWalker): EGPWalker;
    static getSizePrefixedRootAsEGPWalker(bb: flatbuffers.ByteBuffer, obj?: EGPWalker): EGPWalker;
    PATTERN(): egpWalkerPattern;
    /**
     * T: number of satellites.
     */
    TOTAL_SATELLITES(): number;
    /**
     * P: number of planes.
     */
    PLANES(): number;
    /**
     * F: relative phasing, 0 to PLANES - 1.
     */
    PHASING(): number;
    INCLINATION(): number;
    /**
     * Circular height above the WGS 84 equatorial radius, km.
     */
    ALTITUDE_KM(): number;
    /**
     * CUSTOM only: the right ascension the ascending nodes are spread over.
     */
    RA_OF_ASC_NODE_SPREAD(): number;
    /**
     * Right ascension of the ascending node of the first plane.
     */
    FIRST_RA_OF_ASC_NODE(): number;
    /**
     * Mean anomaly of the first satellite of the first plane.
     */
    FIRST_MEAN_ANOMALY(): number;
    ECCENTRICITY(): number;
    ARG_OF_PERICENTER(): number;
    /**
     * Epoch of the generated elements, ISO 8601 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Catalog number of the first satellite; the others follow it in order.
     */
    FIRST_NORAD_CAT_ID(): number;
    static startEGPWalker(builder: flatbuffers.Builder): void;
    static addPattern(builder: flatbuffers.Builder, PATTERN: egpWalkerPattern): void;
    static addTotalSatellites(builder: flatbuffers.Builder, TOTAL_SATELLITES: number): void;
    static addPlanes(builder: flatbuffers.Builder, PLANES: number): void;
    static addPhasing(builder: flatbuffers.Builder, PHASING: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KM: number): void;
    static addRaOfAscNodeSpread(builder: flatbuffers.Builder, RA_OF_ASC_NODE_SPREAD: number): void;
    static addFirstRaOfAscNode(builder: flatbuffers.Builder, FIRST_RA_OF_ASC_NODE: number): void;
    static addFirstMeanAnomaly(builder: flatbuffers.Builder, FIRST_MEAN_ANOMALY: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addFirstNoradCatId(builder: flatbuffers.Builder, FIRST_NORAD_CAT_ID: number): void;
    static endEGPWalker(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEGPWalker(builder: flatbuffers.Builder, PATTERN: egpWalkerPattern, TOTAL_SATELLITES: number, PLANES: number, PHASING: number, INCLINATION: number, ALTITUDE_KM: number, RA_OF_ASC_NODE_SPREAD: number, FIRST_RA_OF_ASC_NODE: number, FIRST_MEAN_ANOMALY: number, ECCENTRICITY: number, ARG_OF_PERICENTER: number, EPOCHOffset: flatbuffers.Offset, FIRST_NORAD_CAT_ID: number): flatbuffers.Offset;
    unpack(): EGPWalkerT;
    unpackTo(_o: EGPWalkerT): void;
}
export declare class EGPWalkerT implements flatbuffers.IGeneratedObject {
    PATTERN: egpWalkerPattern;
    TOTAL_SATELLITES: number;
    PLANES: number;
    PHASING: number;
    INCLINATION: number;
    ALTITUDE_KM: number;
    RA_OF_ASC_NODE_SPREAD: number;
    FIRST_RA_OF_ASC_NODE: number;
    FIRST_MEAN_ANOMALY: number;
    ECCENTRICITY: number;
    ARG_OF_PERICENTER: number;
    EPOCH: string | Uint8Array | null;
    FIRST_NORAD_CAT_ID: number;
    constructor(PATTERN?: egpWalkerPattern, TOTAL_SATELLITES?: number, PLANES?: number, PHASING?: number, INCLINATION?: number, ALTITUDE_KM?: number, RA_OF_ASC_NODE_SPREAD?: number, FIRST_RA_OF_ASC_NODE?: number, FIRST_MEAN_ANOMALY?: number, ECCENTRICITY?: number, ARG_OF_PERICENTER?: number, EPOCH?: string | Uint8Array | null, FIRST_NORAD_CAT_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EGPWalker.d.ts.map