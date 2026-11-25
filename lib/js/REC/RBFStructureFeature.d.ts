import * as flatbuffers from 'flatbuffers';
import { rbfStructureKind } from './rbfStructureKind.js';
/**
 * Radial magnetospheric feature (torus, moon sweep gap, ring absorption, or slot region).
 */
export declare class RBFStructureFeature implements flatbuffers.IUnpackableObject<RBFStructureFeatureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBFStructureFeature;
    static getRootAsRBFStructureFeature(bb: flatbuffers.ByteBuffer, obj?: RBFStructureFeature): RBFStructureFeature;
    static getSizePrefixedRootAsRBFStructureFeature(bb: flatbuffers.ByteBuffer, obj?: RBFStructureFeature): RBFStructureFeature;
    /**
     * Feature classification.
     */
    KIND(): rbfStructureKind;
    /**
     * Descriptive feature name (e.g. "IO_TORUS", "EUROPA_SWEEP", "MAIN_RINGS").
     */
    FEATURE_NAME(): string;
    FEATURE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Inner radial boundary in planetary radii (R_b).
     */
    RADIAL_MIN_RB(): number;
    /**
     * Outer radial boundary in planetary radii (R_b).
     */
    RADIAL_MAX_RB(): number;
    /**
     * Multiplicative flux attenuation (or enhancement) factor in this feature.
     */
    ATTENUATION_FACTOR(): number;
    static startRBFStructureFeature(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: rbfStructureKind): void;
    static addFeatureName(builder: flatbuffers.Builder, FEATURE_NAMEOffset: flatbuffers.Offset): void;
    static addRadialMinRb(builder: flatbuffers.Builder, RADIAL_MIN_RB: number): void;
    static addRadialMaxRb(builder: flatbuffers.Builder, RADIAL_MAX_RB: number): void;
    static addAttenuationFactor(builder: flatbuffers.Builder, ATTENUATION_FACTOR: number): void;
    static endRBFStructureFeature(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRBFStructureFeature(builder: flatbuffers.Builder, KIND: rbfStructureKind, FEATURE_NAMEOffset: flatbuffers.Offset, RADIAL_MIN_RB: number, RADIAL_MAX_RB: number, ATTENUATION_FACTOR: number): flatbuffers.Offset;
    unpack(): RBFStructureFeatureT;
    unpackTo(_o: RBFStructureFeatureT): void;
}
export declare class RBFStructureFeatureT implements flatbuffers.IGeneratedObject {
    KIND: rbfStructureKind;
    FEATURE_NAME: string | Uint8Array | null;
    RADIAL_MIN_RB: number;
    RADIAL_MAX_RB: number;
    ATTENUATION_FACTOR: number;
    constructor(KIND?: rbfStructureKind, FEATURE_NAME?: string | Uint8Array | null, RADIAL_MIN_RB?: number, RADIAL_MAX_RB?: number, ATTENUATION_FACTOR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBFStructureFeature.d.ts.map