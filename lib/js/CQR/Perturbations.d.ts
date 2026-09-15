import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
export declare class Perturbations implements flatbuffers.IUnpackableObject<PerturbationsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Perturbations;
    static getRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    static getSizePrefixedRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    /**
     * Comments in the Perturbations section.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Atmospheric model used.
     */
    ATMOSPHERIC_MODEL(obj?: ATM): ATM | null;
    /**
     * Gravity model used.
     */
    GRAVITY_MODEL(): string | null;
    GRAVITY_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Degree of the gravity model.
     */
    GRAVITY_DEGREE(): number;
    /**
     * Order of the gravity model.
     */
    GRAVITY_ORDER(): number;
    /**
     * Gravitational constant times the mass of the central body.
     */
    GM(): number;
    /**
     * List of celestial bodies included in n-body perturbations.
     */
    N_BODY_PERTURBATIONS(index: number): string;
    N_BODY_PERTURBATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    nBodyPerturbationsLength(): number;
    /**
     * Ocean tides model used.
     */
    OCEAN_TIDES_MODEL(): string | null;
    OCEAN_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solid tides model used.
     */
    SOLID_TIDES_MODEL(): string | null;
    SOLID_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric tides model used.
     */
    ATMOSPHERIC_TIDES_MODEL(): string | null;
    ATMOSPHERIC_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geopotential model used.
     */
    GEOPOTENTIAL_MODEL(): string | null;
    GEOPOTENTIAL_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar radiation pressure model used.
     */
    SOLAR_RAD_PRESSURE(): string | null;
    SOLAR_RAD_PRESSURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Albedo model used.
     */
    ALBEDO(): string | null;
    ALBEDO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thermal model used.
     */
    THERMAL(): string | null;
    THERMAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Relativity model used.
     */
    RELATIVITY(): string | null;
    RELATIVITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric drag model used.
     */
    ATMOSPHERIC_DRAG(): string | null;
    ATMOSPHERIC_DRAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fixed geomagnetic Kp index used.
     */
    FIXED_GEOMAG_KP(): number;
    /**
     * Fixed F10.7 solar flux value used.
     */
    FIXED_F10P7(): number;
    /**
     * Fixed mean F10.7 solar flux value used.
     */
    FIXED_F10P7_MEAN(): number;
    static startPerturbations(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODELOffset: flatbuffers.Offset): void;
    static addGravityModel(builder: flatbuffers.Builder, GRAVITY_MODELOffset: flatbuffers.Offset): void;
    static addGravityDegree(builder: flatbuffers.Builder, GRAVITY_DEGREE: number): void;
    static addGravityOrder(builder: flatbuffers.Builder, GRAVITY_ORDER: number): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, N_BODY_PERTURBATIONSOffset: flatbuffers.Offset): void;
    static createNBodyPerturbationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNBodyPerturbationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOceanTidesModel(builder: flatbuffers.Builder, OCEAN_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addSolidTidesModel(builder: flatbuffers.Builder, SOLID_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addAtmosphericTidesModel(builder: flatbuffers.Builder, ATMOSPHERIC_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, GEOPOTENTIAL_MODELOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, SOLAR_RAD_PRESSUREOffset: flatbuffers.Offset): void;
    static addAlbedo(builder: flatbuffers.Builder, ALBEDOOffset: flatbuffers.Offset): void;
    static addThermal(builder: flatbuffers.Builder, THERMALOffset: flatbuffers.Offset): void;
    static addRelativity(builder: flatbuffers.Builder, RELATIVITYOffset: flatbuffers.Offset): void;
    static addAtmosphericDrag(builder: flatbuffers.Builder, ATMOSPHERIC_DRAGOffset: flatbuffers.Offset): void;
    static addFixedGeomagKp(builder: flatbuffers.Builder, FIXED_GEOMAG_KP: number): void;
    static addFixedF10P7(builder: flatbuffers.Builder, FIXED_F10P7: number): void;
    static addFixedF10P7Mean(builder: flatbuffers.Builder, FIXED_F10P7_MEAN: number): void;
    static endPerturbations(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PerturbationsT;
    unpackTo(_o: PerturbationsT): void;
}
export declare class PerturbationsT implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    ATMOSPHERIC_MODEL: ATMT | null;
    GRAVITY_MODEL: string | Uint8Array | null;
    GRAVITY_DEGREE: number;
    GRAVITY_ORDER: number;
    GM: number;
    N_BODY_PERTURBATIONS: (string)[];
    OCEAN_TIDES_MODEL: string | Uint8Array | null;
    SOLID_TIDES_MODEL: string | Uint8Array | null;
    ATMOSPHERIC_TIDES_MODEL: string | Uint8Array | null;
    GEOPOTENTIAL_MODEL: string | Uint8Array | null;
    SOLAR_RAD_PRESSURE: string | Uint8Array | null;
    ALBEDO: string | Uint8Array | null;
    THERMAL: string | Uint8Array | null;
    RELATIVITY: string | Uint8Array | null;
    ATMOSPHERIC_DRAG: string | Uint8Array | null;
    FIXED_GEOMAG_KP: number;
    FIXED_F10P7: number;
    FIXED_F10P7_MEAN: number;
    constructor(COMMENT?: (string)[], ATMOSPHERIC_MODEL?: ATMT | null, GRAVITY_MODEL?: string | Uint8Array | null, GRAVITY_DEGREE?: number, GRAVITY_ORDER?: number, GM?: number, N_BODY_PERTURBATIONS?: (string)[], OCEAN_TIDES_MODEL?: string | Uint8Array | null, SOLID_TIDES_MODEL?: string | Uint8Array | null, ATMOSPHERIC_TIDES_MODEL?: string | Uint8Array | null, GEOPOTENTIAL_MODEL?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: string | Uint8Array | null, ALBEDO?: string | Uint8Array | null, THERMAL?: string | Uint8Array | null, RELATIVITY?: string | Uint8Array | null, ATMOSPHERIC_DRAG?: string | Uint8Array | null, FIXED_GEOMAG_KP?: number, FIXED_F10P7?: number, FIXED_F10P7_MEAN?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Perturbations.d.ts.map