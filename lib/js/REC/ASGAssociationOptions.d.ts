import * as flatbuffers from 'flatbuffers';
import { asgScanGrouping } from './asgScanGrouping.js';
/**
 * Settings of a gated association. Every field has its default.
 */
export declare class ASGAssociationOptions implements flatbuffers.IUnpackableObject<ASGAssociationOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGAssociationOptions;
    static getRootAsASGAssociationOptions(bb: flatbuffers.ByteBuffer, obj?: ASGAssociationOptions): ASGAssociationOptions;
    static getSizePrefixedRootAsASGAssociationOptions(bb: flatbuffers.ByteBuffer, obj?: ASGAssociationOptions): ASGAssociationOptions;
    /**
     * Probability mass inside the chi-square gate, (0, 1).
     */
    GATE_PROBABILITY(): number;
    /**
     * Correct predictions for light time.
     */
    LIGHT_TIME(): boolean;
    /**
     * Minimum posterior for an unambiguous association, (0, 1].
     */
    MIN_POSTERIOR(): number;
    /**
     * Spatial density of clutter (false or new-object detections) in the
     * posterior, per unit measurement volume; 0 = none.
     */
    CLUTTER_DENSITY(): number;
    SCAN(): asgScanGrouping;
    /**
     * Out-of-gate candidates reported per observation, 1 to 50.
     */
    MAX_CANDIDATES(): number;
    /**
     * Report each candidate's predicted position, velocity and covariance.
     */
    GEOMETRY(): boolean;
    static startASGAssociationOptions(builder: flatbuffers.Builder): void;
    static addGateProbability(builder: flatbuffers.Builder, GATE_PROBABILITY: number): void;
    static addLightTime(builder: flatbuffers.Builder, LIGHT_TIME: boolean): void;
    static addMinPosterior(builder: flatbuffers.Builder, MIN_POSTERIOR: number): void;
    static addClutterDensity(builder: flatbuffers.Builder, CLUTTER_DENSITY: number): void;
    static addScan(builder: flatbuffers.Builder, SCAN: asgScanGrouping): void;
    static addMaxCandidates(builder: flatbuffers.Builder, MAX_CANDIDATES: number): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRY: boolean): void;
    static endASGAssociationOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGAssociationOptions(builder: flatbuffers.Builder, GATE_PROBABILITY: number, LIGHT_TIME: boolean, MIN_POSTERIOR: number, CLUTTER_DENSITY: number, SCAN: asgScanGrouping, MAX_CANDIDATES: number, GEOMETRY: boolean): flatbuffers.Offset;
    unpack(): ASGAssociationOptionsT;
    unpackTo(_o: ASGAssociationOptionsT): void;
}
export declare class ASGAssociationOptionsT implements flatbuffers.IGeneratedObject {
    GATE_PROBABILITY: number;
    LIGHT_TIME: boolean;
    MIN_POSTERIOR: number;
    CLUTTER_DENSITY: number;
    SCAN: asgScanGrouping;
    MAX_CANDIDATES: number;
    GEOMETRY: boolean;
    constructor(GATE_PROBABILITY?: number, LIGHT_TIME?: boolean, MIN_POSTERIOR?: number, CLUTTER_DENSITY?: number, SCAN?: asgScanGrouping, MAX_CANDIDATES?: number, GEOMETRY?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGAssociationOptions.d.ts.map