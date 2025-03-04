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
    comment(index: number): string;
    comment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Wet mass of the space object.
     */
    wetMass(): number;
    /**
     * Dry mass of the space object.
     */
    dryMass(): number;
    /**
     * Units for mass values.
     */
    massUnits(): string | null;
    massUnits(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quaternion component q1 of orientation from OEB to EME2000.
     */
    oebQ1(): number;
    /**
     * Quaternion component q2.
     */
    oebQ2(): number;
    /**
     * Quaternion component q3.
     */
    oebQ3(): number;
    /**
     * Quaternion scalar component qc.
     */
    oebQc(): number;
    /**
     * Maximum dimension of the object along OEB frame axes.
     */
    oebMax(): number;
    /**
     * Intermediate dimension along OEB frame axes.
     */
    oebInt(): number;
    /**
     * Minimum dimension of the object along OEB frame axes.
     */
    oebMin(): number;
    /**
     * Area along OEB_MAX axis.
     */
    areaAlongOebMax(): number;
    /**
     * Area along OEB_INT axis.
     */
    areaAlongOebInt(): number;
    /**
     * Area along OEB_MIN axis.
     */
    areaAlongOebMin(): number;
    /**
     * Units for area values.
     */
    areaUnits(): string | null;
    areaUnits(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constant area for drag computations.
     */
    dragConstArea(): number;
    /**
     * Nominal drag coefficient.
     */
    dragCoeffNom(): number;
    /**
     * Uncertainty in the drag coefficient.
     */
    dragUncertainty(): number;
    /**
     * Constant area for solar radiation pressure computations.
     */
    srpConstArea(): number;
    /**
     * Nominal solar radiation pressure coefficient.
     */
    solarRadCoeff(): number;
    /**
     * Uncertainty in the solar radiation pressure coefficient.
     */
    srpUncertainty(): number;
    static startPhysicalProperties(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWetMass(builder: flatbuffers.Builder, wetMass: number): void;
    static addDryMass(builder: flatbuffers.Builder, dryMass: number): void;
    static addMassUnits(builder: flatbuffers.Builder, massUnitsOffset: flatbuffers.Offset): void;
    static addOebQ1(builder: flatbuffers.Builder, oebQ1: number): void;
    static addOebQ2(builder: flatbuffers.Builder, oebQ2: number): void;
    static addOebQ3(builder: flatbuffers.Builder, oebQ3: number): void;
    static addOebQc(builder: flatbuffers.Builder, oebQc: number): void;
    static addOebMax(builder: flatbuffers.Builder, oebMax: number): void;
    static addOebInt(builder: flatbuffers.Builder, oebInt: number): void;
    static addOebMin(builder: flatbuffers.Builder, oebMin: number): void;
    static addAreaAlongOebMax(builder: flatbuffers.Builder, areaAlongOebMax: number): void;
    static addAreaAlongOebInt(builder: flatbuffers.Builder, areaAlongOebInt: number): void;
    static addAreaAlongOebMin(builder: flatbuffers.Builder, areaAlongOebMin: number): void;
    static addAreaUnits(builder: flatbuffers.Builder, areaUnitsOffset: flatbuffers.Offset): void;
    static addDragConstArea(builder: flatbuffers.Builder, dragConstArea: number): void;
    static addDragCoeffNom(builder: flatbuffers.Builder, dragCoeffNom: number): void;
    static addDragUncertainty(builder: flatbuffers.Builder, dragUncertainty: number): void;
    static addSrpConstArea(builder: flatbuffers.Builder, srpConstArea: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, solarRadCoeff: number): void;
    static addSrpUncertainty(builder: flatbuffers.Builder, srpUncertainty: number): void;
    static endPhysicalProperties(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPhysicalProperties(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset, wetMass: number, dryMass: number, massUnitsOffset: flatbuffers.Offset, oebQ1: number, oebQ2: number, oebQ3: number, oebQc: number, oebMax: number, oebInt: number, oebMin: number, areaAlongOebMax: number, areaAlongOebInt: number, areaAlongOebMin: number, areaUnitsOffset: flatbuffers.Offset, dragConstArea: number, dragCoeffNom: number, dragUncertainty: number, srpConstArea: number, solarRadCoeff: number, srpUncertainty: number): flatbuffers.Offset;
    unpack(): PhysicalPropertiesT;
    unpackTo(_o: PhysicalPropertiesT): void;
}
export declare class PhysicalPropertiesT implements flatbuffers.IGeneratedObject {
    comment: (string)[];
    wetMass: number;
    dryMass: number;
    massUnits: string | Uint8Array | null;
    oebQ1: number;
    oebQ2: number;
    oebQ3: number;
    oebQc: number;
    oebMax: number;
    oebInt: number;
    oebMin: number;
    areaAlongOebMax: number;
    areaAlongOebInt: number;
    areaAlongOebMin: number;
    areaUnits: string | Uint8Array | null;
    dragConstArea: number;
    dragCoeffNom: number;
    dragUncertainty: number;
    srpConstArea: number;
    solarRadCoeff: number;
    srpUncertainty: number;
    constructor(comment?: (string)[], wetMass?: number, dryMass?: number, massUnits?: string | Uint8Array | null, oebQ1?: number, oebQ2?: number, oebQ3?: number, oebQc?: number, oebMax?: number, oebInt?: number, oebMin?: number, areaAlongOebMax?: number, areaAlongOebInt?: number, areaAlongOebMin?: number, areaUnits?: string | Uint8Array | null, dragConstArea?: number, dragCoeffNom?: number, dragUncertainty?: number, srpConstArea?: number, solarRadCoeff?: number, srpUncertainty?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=physical-properties.d.ts.map