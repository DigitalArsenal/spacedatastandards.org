import * as flatbuffers from 'flatbuffers';
import { meanElementSource } from './meanElementSource.js';
/**
 * A mean element set under a named theory, with the elements exactly as the theory defines
 * them. SDS addition: CCSDS 502.0-B-3 OCM carries no mean-motion element set. Epoch in
 * METADATA.TIME_SYSTEM; frame is TRAJ_REF_FRAME about CENTER_NAME (EARTH).
 */
export declare class OCMMeanElements implements flatbuffers.IUnpackableObject<OCMMeanElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMMeanElements;
    static getRootAsOCMMeanElements(bb: flatbuffers.ByteBuffer, obj?: OCMMeanElements): OCMMeanElements;
    static getSizePrefixedRootAsOCMMeanElements(bb: flatbuffers.ByteBuffer, obj?: OCMMeanElements): OCMMeanElements;
    /**
     * The theory the set is defined under and flies on, written explicitly, SGP4 (0)
     * included. A reader refuses UNSPECIFIED.
     */
    MEAN_ELEMENT_THEORY(): meanElementSource;
    /**
     * EPOCH of the elements (ISO 8601 UTC).
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * MEAN_MOTION in rev/day as the theory defines it: Kozai for SGP4, Brouwer for SGP4-XP
     * and AP. Never derived from a semi-major axis.
     */
    MEAN_MOTION(): number;
    /**
     * ECCENTRICITY (unitless).
     */
    ECCENTRICITY(): number;
    /**
     * INCLINATION, deg.
     */
    INCLINATION(): number;
    /**
     * RA_OF_ASC_NODE, deg.
     */
    RA_OF_ASC_NODE(): number;
    /**
     * ARG_OF_PERICENTER, deg.
     */
    ARG_OF_PERICENTER(): number;
    /**
     * MEAN_ANOMALY, deg.
     */
    MEAN_ANOMALY(): number;
    /**
     * BSTAR in 1/Earth radii. SGP4 only; 0 for SGP4-XP and AP.
     */
    BSTAR(): number;
    /**
     * MEAN_MOTION_DOT in rev/day**2. SGP4 only.
     */
    MEAN_MOTION_DOT(): number;
    /**
     * MEAN_MOTION_DDOT in rev/day**3. SGP4 only.
     */
    MEAN_MOTION_DDOT(): number;
    /**
     * BTERM, the SGP4-XP drag term Cd*A/m in m**2/kg. SGP4-XP and AP only; 0 for SGP4.
     */
    BTERM(): number;
    /**
     * AGOM, the SGP4-XP radiation term Cr*A/m in m**2/kg. SGP4-XP and AP only; 0 for SGP4.
     */
    AGOM(): number;
    static startOCMMeanElements(builder: flatbuffers.Builder): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementSource): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addBterm(builder: flatbuffers.Builder, BTERM: number): void;
    static addAgom(builder: flatbuffers.Builder, AGOM: number): void;
    static endOCMMeanElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMMeanElements(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementSource, EPOCHOffset: flatbuffers.Offset, MEAN_MOTION: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, MEAN_ANOMALY: number, BSTAR: number, MEAN_MOTION_DOT: number, MEAN_MOTION_DDOT: number, BTERM: number, AGOM: number): flatbuffers.Offset;
    unpack(): OCMMeanElementsT;
    unpackTo(_o: OCMMeanElementsT): void;
}
export declare class OCMMeanElementsT implements flatbuffers.IGeneratedObject {
    MEAN_ELEMENT_THEORY: meanElementSource;
    EPOCH: string | Uint8Array | null;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    BTERM: number;
    AGOM: number;
    constructor(MEAN_ELEMENT_THEORY?: meanElementSource, EPOCH?: string | Uint8Array | null, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, BSTAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, BTERM?: number, AGOM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMMeanElements.d.ts.map