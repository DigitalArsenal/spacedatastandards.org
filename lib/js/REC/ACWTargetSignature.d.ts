import * as flatbuffers from 'flatbuffers';
/**
 * Observable signature of a simulated target.
 */
export declare class ACWTargetSignature implements flatbuffers.IUnpackableObject<ACWTargetSignatureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWTargetSignature;
    static getRootAsACWTargetSignature(bb: flatbuffers.ByteBuffer, obj?: ACWTargetSignature): ACWTargetSignature;
    static getSizePrefixedRootAsACWTargetSignature(bb: flatbuffers.ByteBuffer, obj?: ACWTargetSignature): ACWTargetSignature;
    /**
     * Radar cross-section, square meters (RADAR).
     */
    RCS_M2(): number;
    /**
     * Diameter, meters, and geometric albedo of the diffuse sphere that sets
     * the magnitude, in the band of EOO.MAG (OPTICAL).
     */
    DIAMETER_M(): number;
    GEOMETRIC_ALBEDO(): number;
    /**
     * Emitter carrier frequency, hertz, and EIRP toward the sensor, dBW
     * (PASSIVE_RF). A frequency of 0 means the target does not emit.
     */
    EMITTER_FREQUENCY_HZ(): number;
    EMITTER_EIRP_DBW(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_RCS_M2(): boolean;
    HAS_DIAMETER_M(): boolean;
    HAS_GEOMETRIC_ALBEDO(): boolean;
    HAS_EMITTER_FREQUENCY_HZ(): boolean;
    HAS_EMITTER_EIRP_DBW(): boolean;
    static startACWTargetSignature(builder: flatbuffers.Builder): void;
    static addRcsM2(builder: flatbuffers.Builder, RCS_M2: number): void;
    static addDiameterM(builder: flatbuffers.Builder, DIAMETER_M: number): void;
    static addGeometricAlbedo(builder: flatbuffers.Builder, GEOMETRIC_ALBEDO: number): void;
    static addEmitterFrequencyHz(builder: flatbuffers.Builder, EMITTER_FREQUENCY_HZ: number): void;
    static addEmitterEirpDbw(builder: flatbuffers.Builder, EMITTER_EIRP_DBW: number): void;
    static addHasRcsM2(builder: flatbuffers.Builder, HAS_RCS_M2: boolean): void;
    static addHasDiameterM(builder: flatbuffers.Builder, HAS_DIAMETER_M: boolean): void;
    static addHasGeometricAlbedo(builder: flatbuffers.Builder, HAS_GEOMETRIC_ALBEDO: boolean): void;
    static addHasEmitterFrequencyHz(builder: flatbuffers.Builder, HAS_EMITTER_FREQUENCY_HZ: boolean): void;
    static addHasEmitterEirpDbw(builder: flatbuffers.Builder, HAS_EMITTER_EIRP_DBW: boolean): void;
    static endACWTargetSignature(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWTargetSignature(builder: flatbuffers.Builder, RCS_M2: number, DIAMETER_M: number, GEOMETRIC_ALBEDO: number, EMITTER_FREQUENCY_HZ: number, EMITTER_EIRP_DBW: number, HAS_RCS_M2: boolean, HAS_DIAMETER_M: boolean, HAS_GEOMETRIC_ALBEDO: boolean, HAS_EMITTER_FREQUENCY_HZ: boolean, HAS_EMITTER_EIRP_DBW: boolean): flatbuffers.Offset;
    unpack(): ACWTargetSignatureT;
    unpackTo(_o: ACWTargetSignatureT): void;
}
export declare class ACWTargetSignatureT implements flatbuffers.IGeneratedObject {
    RCS_M2: number;
    DIAMETER_M: number;
    GEOMETRIC_ALBEDO: number;
    EMITTER_FREQUENCY_HZ: number;
    EMITTER_EIRP_DBW: number;
    HAS_RCS_M2: boolean;
    HAS_DIAMETER_M: boolean;
    HAS_GEOMETRIC_ALBEDO: boolean;
    HAS_EMITTER_FREQUENCY_HZ: boolean;
    HAS_EMITTER_EIRP_DBW: boolean;
    constructor(RCS_M2?: number, DIAMETER_M?: number, GEOMETRIC_ALBEDO?: number, EMITTER_FREQUENCY_HZ?: number, EMITTER_EIRP_DBW?: number, HAS_RCS_M2?: boolean, HAS_DIAMETER_M?: boolean, HAS_GEOMETRIC_ALBEDO?: boolean, HAS_EMITTER_FREQUENCY_HZ?: boolean, HAS_EMITTER_EIRP_DBW?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWTargetSignature.d.ts.map