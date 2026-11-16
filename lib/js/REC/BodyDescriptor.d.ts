import * as flatbuffers from 'flatbuffers';
import { BodyRecordRef, BodyRecordRefT } from './BodyRecordRef.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
/**
 * Shared body descriptor, usable by ACW, CLG and future SCV revisions.
 * No absence means Earth. Axes retain their FIXED_FRAME X/Y/Z order.
 * SCVEllipsoid and DTT mapping is normative in docs/clg-contract.md section 2.
 */
export declare class BodyDescriptor implements flatbuffers.IUnpackableObject<BodyDescriptorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BodyDescriptor;
    static getRootAsBodyDescriptor(bb: flatbuffers.ByteBuffer, obj?: BodyDescriptor): BodyDescriptor;
    static getSizePrefixedRootAsBodyDescriptor(bb: flatbuffers.ByteBuffer, obj?: BodyDescriptor): BodyDescriptor;
    /**
     * Physical NAIF body, not barycenter; HAS_NAIF_ID required, zero invalid.
     */
    NAIF_ID(): number;
    FIXED_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    /**
     * Each axis requires its HAS flag and a finite positive value.
     */
    SEMI_AXIS_X_M(): number;
    SEMI_AXIS_Y_M(): number;
    SEMI_AXIS_Z_M(): number;
    MODEL_ID(): string;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exact model-manifest bytes, 64 lowercase hexadecimal characters.
     */
    MODEL_SHA256(): string;
    MODEL_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Required explicit assertion, "NONE" or a supported model identifier.
     */
    ATMOSPHERE_MODEL_ID(): string;
    ATMOSPHERE_MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Absent means no terrain supplied; elevation remains mandatory for sites.
     */
    TERRAIN(obj?: BodyRecordRef): BodyRecordRef | null;
    /**
     * Optional SHC or MODEL reference; its radius is not the shape radius.
     */
    GRAVITY(obj?: BodyRecordRef): BodyRecordRef | null;
    /**
     * True HAS flag, positive radius and name required for non-ANY lighting.
     * This is a named spherical-shadow approximation, not ellipsoidal lighting.
     */
    LIGHTING_SPHERE_RADIUS_M(): number;
    LIGHTING_MODEL_ID(): string | null;
    LIGHTING_MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_NAIF_ID(): boolean;
    HAS_SEMI_AXIS_X_M(): boolean;
    HAS_SEMI_AXIS_Y_M(): boolean;
    HAS_SEMI_AXIS_Z_M(): boolean;
    HAS_LIGHTING_SPHERE_RADIUS_M(): boolean;
    static startBodyDescriptor(builder: flatbuffers.Builder): void;
    static addNaifId(builder: flatbuffers.Builder, NAIF_ID: number): void;
    static addFixedFrame(builder: flatbuffers.Builder, FIXED_FRAMEOffset: flatbuffers.Offset): void;
    static addSemiAxisXM(builder: flatbuffers.Builder, SEMI_AXIS_X_M: number): void;
    static addSemiAxisYM(builder: flatbuffers.Builder, SEMI_AXIS_Y_M: number): void;
    static addSemiAxisZM(builder: flatbuffers.Builder, SEMI_AXIS_Z_M: number): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelSha256(builder: flatbuffers.Builder, MODEL_SHA256Offset: flatbuffers.Offset): void;
    static addAtmosphereModelId(builder: flatbuffers.Builder, ATMOSPHERE_MODEL_IDOffset: flatbuffers.Offset): void;
    static addTerrain(builder: flatbuffers.Builder, TERRAINOffset: flatbuffers.Offset): void;
    static addGravity(builder: flatbuffers.Builder, GRAVITYOffset: flatbuffers.Offset): void;
    static addLightingSphereRadiusM(builder: flatbuffers.Builder, LIGHTING_SPHERE_RADIUS_M: number): void;
    static addLightingModelId(builder: flatbuffers.Builder, LIGHTING_MODEL_IDOffset: flatbuffers.Offset): void;
    static addHasNaifId(builder: flatbuffers.Builder, HAS_NAIF_ID: boolean): void;
    static addHasSemiAxisXM(builder: flatbuffers.Builder, HAS_SEMI_AXIS_X_M: boolean): void;
    static addHasSemiAxisYM(builder: flatbuffers.Builder, HAS_SEMI_AXIS_Y_M: boolean): void;
    static addHasSemiAxisZM(builder: flatbuffers.Builder, HAS_SEMI_AXIS_Z_M: boolean): void;
    static addHasLightingSphereRadiusM(builder: flatbuffers.Builder, HAS_LIGHTING_SPHERE_RADIUS_M: boolean): void;
    static endBodyDescriptor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BodyDescriptorT;
    unpackTo(_o: BodyDescriptorT): void;
}
export declare class BodyDescriptorT implements flatbuffers.IGeneratedObject {
    NAIF_ID: number;
    FIXED_FRAME: RFMCoordinateSystemT | null;
    SEMI_AXIS_X_M: number;
    SEMI_AXIS_Y_M: number;
    SEMI_AXIS_Z_M: number;
    MODEL_ID: string | Uint8Array | null;
    MODEL_SHA256: string | Uint8Array | null;
    ATMOSPHERE_MODEL_ID: string | Uint8Array | null;
    TERRAIN: BodyRecordRefT | null;
    GRAVITY: BodyRecordRefT | null;
    LIGHTING_SPHERE_RADIUS_M: number;
    LIGHTING_MODEL_ID: string | Uint8Array | null;
    HAS_NAIF_ID: boolean;
    HAS_SEMI_AXIS_X_M: boolean;
    HAS_SEMI_AXIS_Y_M: boolean;
    HAS_SEMI_AXIS_Z_M: boolean;
    HAS_LIGHTING_SPHERE_RADIUS_M: boolean;
    constructor(NAIF_ID?: number, FIXED_FRAME?: RFMCoordinateSystemT | null, SEMI_AXIS_X_M?: number, SEMI_AXIS_Y_M?: number, SEMI_AXIS_Z_M?: number, MODEL_ID?: string | Uint8Array | null, MODEL_SHA256?: string | Uint8Array | null, ATMOSPHERE_MODEL_ID?: string | Uint8Array | null, TERRAIN?: BodyRecordRefT | null, GRAVITY?: BodyRecordRefT | null, LIGHTING_SPHERE_RADIUS_M?: number, LIGHTING_MODEL_ID?: string | Uint8Array | null, HAS_NAIF_ID?: boolean, HAS_SEMI_AXIS_X_M?: boolean, HAS_SEMI_AXIS_Y_M?: boolean, HAS_SEMI_AXIS_Z_M?: boolean, HAS_LIGHTING_SPHERE_RADIUS_M?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BodyDescriptor.d.ts.map