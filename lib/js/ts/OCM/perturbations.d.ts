import * as flatbuffers from 'flatbuffers';
export declare class Perturbations implements flatbuffers.IUnpackableObject<PerturbationsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Perturbations;
    static getRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    static getSizePrefixedRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    /**
     * Comments in the Perturbations section.
     */
    comment(index: number): string;
    comment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Atmospheric model used.
     */
    atmosphericModel(): string | null;
    atmosphericModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gravity model used.
     */
    gravityModel(): string | null;
    gravityModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Degree of the gravity model.
     */
    gravityDegree(): number;
    /**
     * Order of the gravity model.
     */
    gravityOrder(): number;
    /**
     * Gravitational constant times the mass of the central body.
     */
    gm(): number;
    /**
     * List of celestial bodies included in n-body perturbations.
     */
    nBodyPerturbations(index: number): string;
    nBodyPerturbations(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    nBodyPerturbationsLength(): number;
    /**
     * Ocean tides model used.
     */
    oceanTidesModel(): string | null;
    oceanTidesModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solid tides model used.
     */
    solidTidesModel(): string | null;
    solidTidesModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric tides model used.
     */
    atmosphericTidesModel(): string | null;
    atmosphericTidesModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geopotential model used.
     */
    geopotentialModel(): string | null;
    geopotentialModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar radiation pressure model used.
     */
    solarRadPressure(): string | null;
    solarRadPressure(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Albedo model used.
     */
    albedo(): string | null;
    albedo(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thermal model used.
     */
    thermal(): string | null;
    thermal(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Relativity model used.
     */
    relativity(): string | null;
    relativity(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric drag model used.
     */
    atmosphericDrag(): string | null;
    atmosphericDrag(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fixed geomagnetic Kp index used.
     */
    fixedGeomagKp(): number;
    /**
     * Fixed F10.7 solar flux value used.
     */
    fixedF10P7(): number;
    /**
     * Fixed mean F10.7 solar flux value used.
     */
    fixedF10P7Mean(): number;
    static startPerturbations(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, atmosphericModelOffset: flatbuffers.Offset): void;
    static addGravityModel(builder: flatbuffers.Builder, gravityModelOffset: flatbuffers.Offset): void;
    static addGravityDegree(builder: flatbuffers.Builder, gravityDegree: number): void;
    static addGravityOrder(builder: flatbuffers.Builder, gravityOrder: number): void;
    static addGm(builder: flatbuffers.Builder, gm: number): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, nBodyPerturbationsOffset: flatbuffers.Offset): void;
    static createNBodyPerturbationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNBodyPerturbationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOceanTidesModel(builder: flatbuffers.Builder, oceanTidesModelOffset: flatbuffers.Offset): void;
    static addSolidTidesModel(builder: flatbuffers.Builder, solidTidesModelOffset: flatbuffers.Offset): void;
    static addAtmosphericTidesModel(builder: flatbuffers.Builder, atmosphericTidesModelOffset: flatbuffers.Offset): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, geopotentialModelOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, solarRadPressureOffset: flatbuffers.Offset): void;
    static addAlbedo(builder: flatbuffers.Builder, albedoOffset: flatbuffers.Offset): void;
    static addThermal(builder: flatbuffers.Builder, thermalOffset: flatbuffers.Offset): void;
    static addRelativity(builder: flatbuffers.Builder, relativityOffset: flatbuffers.Offset): void;
    static addAtmosphericDrag(builder: flatbuffers.Builder, atmosphericDragOffset: flatbuffers.Offset): void;
    static addFixedGeomagKp(builder: flatbuffers.Builder, fixedGeomagKp: number): void;
    static addFixedF10P7(builder: flatbuffers.Builder, fixedF10P7: number): void;
    static addFixedF10P7Mean(builder: flatbuffers.Builder, fixedF10P7Mean: number): void;
    static endPerturbations(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPerturbations(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset, atmosphericModelOffset: flatbuffers.Offset, gravityModelOffset: flatbuffers.Offset, gravityDegree: number, gravityOrder: number, gm: number, nBodyPerturbationsOffset: flatbuffers.Offset, oceanTidesModelOffset: flatbuffers.Offset, solidTidesModelOffset: flatbuffers.Offset, atmosphericTidesModelOffset: flatbuffers.Offset, geopotentialModelOffset: flatbuffers.Offset, solarRadPressureOffset: flatbuffers.Offset, albedoOffset: flatbuffers.Offset, thermalOffset: flatbuffers.Offset, relativityOffset: flatbuffers.Offset, atmosphericDragOffset: flatbuffers.Offset, fixedGeomagKp: number, fixedF10P7: number, fixedF10P7Mean: number): flatbuffers.Offset;
    unpack(): PerturbationsT;
    unpackTo(_o: PerturbationsT): void;
}
export declare class PerturbationsT implements flatbuffers.IGeneratedObject {
    comment: (string)[];
    atmosphericModel: string | Uint8Array | null;
    gravityModel: string | Uint8Array | null;
    gravityDegree: number;
    gravityOrder: number;
    gm: number;
    nBodyPerturbations: (string)[];
    oceanTidesModel: string | Uint8Array | null;
    solidTidesModel: string | Uint8Array | null;
    atmosphericTidesModel: string | Uint8Array | null;
    geopotentialModel: string | Uint8Array | null;
    solarRadPressure: string | Uint8Array | null;
    albedo: string | Uint8Array | null;
    thermal: string | Uint8Array | null;
    relativity: string | Uint8Array | null;
    atmosphericDrag: string | Uint8Array | null;
    fixedGeomagKp: number;
    fixedF10P7: number;
    fixedF10P7Mean: number;
    constructor(comment?: (string)[], atmosphericModel?: string | Uint8Array | null, gravityModel?: string | Uint8Array | null, gravityDegree?: number, gravityOrder?: number, gm?: number, nBodyPerturbations?: (string)[], oceanTidesModel?: string | Uint8Array | null, solidTidesModel?: string | Uint8Array | null, atmosphericTidesModel?: string | Uint8Array | null, geopotentialModel?: string | Uint8Array | null, solarRadPressure?: string | Uint8Array | null, albedo?: string | Uint8Array | null, thermal?: string | Uint8Array | null, relativity?: string | Uint8Array | null, atmosphericDrag?: string | Uint8Array | null, fixedGeomagKp?: number, fixedF10P7?: number, fixedF10P7Mean?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=perturbations.d.ts.map