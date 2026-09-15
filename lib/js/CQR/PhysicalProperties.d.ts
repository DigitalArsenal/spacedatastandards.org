import * as flatbuffers from 'flatbuffers';
export declare class PhysicalProperties implements flatbuffers.IUnpackableObject<PhysicalPropertiesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PhysicalProperties;
    static getRootAsPhysicalProperties(bb: flatbuffers.ByteBuffer, obj?: PhysicalProperties): PhysicalProperties;
    static getSizePrefixedRootAsPhysicalProperties(bb: flatbuffers.ByteBuffer, obj?: PhysicalProperties): PhysicalProperties;
    /**
     * Comments in the Physical Properties section.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Wet mass of the space object.
     */
    WET_MASS(): number;
    /**
     * Dry mass of the space object.
     */
    DRY_MASS(): number;
    /**
     * Units for mass values.
     */
    MASS_UNITS(): string | null;
    MASS_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quaternion component q1 of orientation from OEB to EME2000.
     */
    OEB_Q1(): number;
    /**
     * Quaternion component q2.
     */
    OEB_Q2(): number;
    /**
     * Quaternion component q3.
     */
    OEB_Q3(): number;
    /**
     * Quaternion scalar component qc.
     */
    OEB_QC(): number;
    /**
     * Maximum dimension of the object along OEB frame axes.
     */
    OEB_MAX(): number;
    /**
     * Intermediate dimension along OEB frame axes.
     */
    OEB_INT(): number;
    /**
     * Minimum dimension of the object along OEB frame axes.
     */
    OEB_MIN(): number;
    /**
     * Area along OEB_MAX axis.
     */
    AREA_ALONG_OEB_MAX(): number;
    /**
     * Area along OEB_INT axis.
     */
    AREA_ALONG_OEB_INT(): number;
    /**
     * Area along OEB_MIN axis.
     */
    AREA_ALONG_OEB_MIN(): number;
    /**
     * Units for area values.
     */
    AREA_UNITS(): string | null;
    AREA_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constant area for drag computations.
     */
    DRAG_CONST_AREA(): number;
    /**
     * Nominal drag coefficient.
     */
    DRAG_COEFF_NOM(): number;
    /**
     * Uncertainty in the drag coefficient.
     */
    DRAG_UNCERTAINTY(): number;
    /**
     * Constant area for solar radiation pressure computations.
     */
    SRP_CONST_AREA(): number;
    /**
     * Nominal solar radiation pressure coefficient.
     */
    SOLAR_RAD_COEFF(): number;
    /**
     * Uncertainty in the solar radiation pressure coefficient.
     */
    SRP_UNCERTAINTY(): number;
    static startPhysicalProperties(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWetMass(builder: flatbuffers.Builder, WET_MASS: number): void;
    static addDryMass(builder: flatbuffers.Builder, DRY_MASS: number): void;
    static addMassUnits(builder: flatbuffers.Builder, MASS_UNITSOffset: flatbuffers.Offset): void;
    static addOebQ1(builder: flatbuffers.Builder, OEB_Q1: number): void;
    static addOebQ2(builder: flatbuffers.Builder, OEB_Q2: number): void;
    static addOebQ3(builder: flatbuffers.Builder, OEB_Q3: number): void;
    static addOebQc(builder: flatbuffers.Builder, OEB_QC: number): void;
    static addOebMax(builder: flatbuffers.Builder, OEB_MAX: number): void;
    static addOebInt(builder: flatbuffers.Builder, OEB_INT: number): void;
    static addOebMin(builder: flatbuffers.Builder, OEB_MIN: number): void;
    static addAreaAlongOebMax(builder: flatbuffers.Builder, AREA_ALONG_OEB_MAX: number): void;
    static addAreaAlongOebInt(builder: flatbuffers.Builder, AREA_ALONG_OEB_INT: number): void;
    static addAreaAlongOebMin(builder: flatbuffers.Builder, AREA_ALONG_OEB_MIN: number): void;
    static addAreaUnits(builder: flatbuffers.Builder, AREA_UNITSOffset: flatbuffers.Offset): void;
    static addDragConstArea(builder: flatbuffers.Builder, DRAG_CONST_AREA: number): void;
    static addDragCoeffNom(builder: flatbuffers.Builder, DRAG_COEFF_NOM: number): void;
    static addDragUncertainty(builder: flatbuffers.Builder, DRAG_UNCERTAINTY: number): void;
    static addSrpConstArea(builder: flatbuffers.Builder, SRP_CONST_AREA: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, SOLAR_RAD_COEFF: number): void;
    static addSrpUncertainty(builder: flatbuffers.Builder, SRP_UNCERTAINTY: number): void;
    static endPhysicalProperties(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPhysicalProperties(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, WET_MASS: number, DRY_MASS: number, MASS_UNITSOffset: flatbuffers.Offset, OEB_Q1: number, OEB_Q2: number, OEB_Q3: number, OEB_QC: number, OEB_MAX: number, OEB_INT: number, OEB_MIN: number, AREA_ALONG_OEB_MAX: number, AREA_ALONG_OEB_INT: number, AREA_ALONG_OEB_MIN: number, AREA_UNITSOffset: flatbuffers.Offset, DRAG_CONST_AREA: number, DRAG_COEFF_NOM: number, DRAG_UNCERTAINTY: number, SRP_CONST_AREA: number, SOLAR_RAD_COEFF: number, SRP_UNCERTAINTY: number): flatbuffers.Offset;
    unpack(): PhysicalPropertiesT;
    unpackTo(_o: PhysicalPropertiesT): void;
}
export declare class PhysicalPropertiesT implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    WET_MASS: number;
    DRY_MASS: number;
    MASS_UNITS: string | Uint8Array | null;
    OEB_Q1: number;
    OEB_Q2: number;
    OEB_Q3: number;
    OEB_QC: number;
    OEB_MAX: number;
    OEB_INT: number;
    OEB_MIN: number;
    AREA_ALONG_OEB_MAX: number;
    AREA_ALONG_OEB_INT: number;
    AREA_ALONG_OEB_MIN: number;
    AREA_UNITS: string | Uint8Array | null;
    DRAG_CONST_AREA: number;
    DRAG_COEFF_NOM: number;
    DRAG_UNCERTAINTY: number;
    SRP_CONST_AREA: number;
    SOLAR_RAD_COEFF: number;
    SRP_UNCERTAINTY: number;
    constructor(COMMENT?: (string)[], WET_MASS?: number, DRY_MASS?: number, MASS_UNITS?: string | Uint8Array | null, OEB_Q1?: number, OEB_Q2?: number, OEB_Q3?: number, OEB_QC?: number, OEB_MAX?: number, OEB_INT?: number, OEB_MIN?: number, AREA_ALONG_OEB_MAX?: number, AREA_ALONG_OEB_INT?: number, AREA_ALONG_OEB_MIN?: number, AREA_UNITS?: string | Uint8Array | null, DRAG_CONST_AREA?: number, DRAG_COEFF_NOM?: number, DRAG_UNCERTAINTY?: number, SRP_CONST_AREA?: number, SOLAR_RAD_COEFF?: number, SRP_UNCERTAINTY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PhysicalProperties.d.ts.map