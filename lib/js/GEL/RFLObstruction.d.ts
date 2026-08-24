import * as flatbuffers from 'flatbuffers';
import { rflObstacleInteraction } from './rflObstacleInteraction.js';
/**
 * One obstacle interaction on one sample's path. SPARSE: entries exist only
 * where an interaction was computed, so a clear path is never encoded as a
 * row of zeroes.
 *
 * This is the join that makes an arbitrary 3D object a first-class part of
 * the link budget: MATERIAL_ID names the `$RFS` record whose permittivity,
 * conductivity, penetration loss and roughness produced LOSS_DB, and
 * GEOMETRY_REF_ID names the exact mesh, face set, panel or analytic shape
 * inside it that was hit.
 */
export declare class RFLObstruction implements flatbuffers.IUnpackableObject<RFLObstructionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLObstruction;
    static getRootAsRFLObstruction(bb: flatbuffers.ByteBuffer, obj?: RFLObstruction): RFLObstruction;
    static getSizePrefixedRootAsRFLObstruction(bb: flatbuffers.ByteBuffer, obj?: RFLObstruction): RFLObstruction;
    /**
     * Index into the sample arrays this interaction applies to.
     */
    SAMPLE_INDEX(): number;
    /**
     * Producer's identifier for the obstacle instance.
     */
    OBSTACLE_ID(): string | null;
    OBSTACLE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFS.MATERIAL_ID` of the surface that was hit. An obstruction loss with
     * no material is an unattributed number: a metal panel and a plasterboard
     * wall of the same size do entirely different things to a link.
     */
    MATERIAL_ID(): string | null;
    MATERIAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFS.RFSGeometryRef.GEOMETRY_REF_ID` of the exact geometry hit.
     */
    GEOMETRY_REF_ID(): string | null;
    GEOMETRY_REF_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$VAM` asset identity of the obstacle mesh, when the obstacle is a
     * reviewed 3D asset.
     */
    VAM_ID(): string | null;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VARIANT_ID(): string | null;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$CAT.NORAD_CAT_ID` when the obstacle is a catalogued object (an
     * occulting spacecraft, a structure on another vehicle). 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    INTERACTION(): rflObstacleInteraction;
    /**
     * Angle between the incident ray and the surface normal, degrees [0-90).
     */
    INCIDENCE_ANGLE_DEG(): number;
    /**
     * Path length travelled INSIDE the material, metres. With
     * `$RFS.ATTENUATION_DB_PER_M` this is what makes penetration loss
     * reproducible instead of a stated constant.
     */
    PATH_LENGTH_IN_MATERIAL_M(): number;
    /**
     * Loss this interaction contributed, dB (positive).
     */
    LOSS_DB(): number;
    /**
     * Extra propagation delay of a reflected or scattered component, seconds.
     */
    EXCESS_DELAY_S(): number;
    /**
     * Fraction of the first Fresnel zone still clear [0-1]. 1 means the zone is
     * untouched.
     */
    FRESNEL_CLEARANCE_FRACTION(): number;
    /**
     * Distance from the transmitter to the interaction point, metres.
     */
    DISTANCE_FROM_TRANSMITTER_M(): number;
    static startRFLObstruction(builder: flatbuffers.Builder): void;
    static addSampleIndex(builder: flatbuffers.Builder, SAMPLE_INDEX: number): void;
    static addObstacleId(builder: flatbuffers.Builder, OBSTACLE_IDOffset: flatbuffers.Offset): void;
    static addMaterialId(builder: flatbuffers.Builder, MATERIAL_IDOffset: flatbuffers.Offset): void;
    static addGeometryRefId(builder: flatbuffers.Builder, GEOMETRY_REF_IDOffset: flatbuffers.Offset): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInteraction(builder: flatbuffers.Builder, INTERACTION: rflObstacleInteraction): void;
    static addIncidenceAngleDeg(builder: flatbuffers.Builder, INCIDENCE_ANGLE_DEG: number): void;
    static addPathLengthInMaterialM(builder: flatbuffers.Builder, PATH_LENGTH_IN_MATERIAL_M: number): void;
    static addLossDb(builder: flatbuffers.Builder, LOSS_DB: number): void;
    static addExcessDelayS(builder: flatbuffers.Builder, EXCESS_DELAY_S: number): void;
    static addFresnelClearanceFraction(builder: flatbuffers.Builder, FRESNEL_CLEARANCE_FRACTION: number): void;
    static addDistanceFromTransmitterM(builder: flatbuffers.Builder, DISTANCE_FROM_TRANSMITTER_M: number): void;
    static endRFLObstruction(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLObstruction(builder: flatbuffers.Builder, SAMPLE_INDEX: number, OBSTACLE_IDOffset: flatbuffers.Offset, MATERIAL_IDOffset: flatbuffers.Offset, GEOMETRY_REF_IDOffset: flatbuffers.Offset, VAM_IDOffset: flatbuffers.Offset, VARIANT_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERACTION: rflObstacleInteraction, INCIDENCE_ANGLE_DEG: number, PATH_LENGTH_IN_MATERIAL_M: number, LOSS_DB: number, EXCESS_DELAY_S: number, FRESNEL_CLEARANCE_FRACTION: number, DISTANCE_FROM_TRANSMITTER_M: number): flatbuffers.Offset;
    unpack(): RFLObstructionT;
    unpackTo(_o: RFLObstructionT): void;
}
export declare class RFLObstructionT implements flatbuffers.IGeneratedObject {
    SAMPLE_INDEX: number;
    OBSTACLE_ID: string | Uint8Array | null;
    MATERIAL_ID: string | Uint8Array | null;
    GEOMETRY_REF_ID: string | Uint8Array | null;
    VAM_ID: string | Uint8Array | null;
    VARIANT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERACTION: rflObstacleInteraction;
    INCIDENCE_ANGLE_DEG: number;
    PATH_LENGTH_IN_MATERIAL_M: number;
    LOSS_DB: number;
    EXCESS_DELAY_S: number;
    FRESNEL_CLEARANCE_FRACTION: number;
    DISTANCE_FROM_TRANSMITTER_M: number;
    constructor(SAMPLE_INDEX?: number, OBSTACLE_ID?: string | Uint8Array | null, MATERIAL_ID?: string | Uint8Array | null, GEOMETRY_REF_ID?: string | Uint8Array | null, VAM_ID?: string | Uint8Array | null, VARIANT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERACTION?: rflObstacleInteraction, INCIDENCE_ANGLE_DEG?: number, PATH_LENGTH_IN_MATERIAL_M?: number, LOSS_DB?: number, EXCESS_DELAY_S?: number, FRESNEL_CLEARANCE_FRACTION?: number, DISTANCE_FROM_TRANSMITTER_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLObstruction.d.ts.map