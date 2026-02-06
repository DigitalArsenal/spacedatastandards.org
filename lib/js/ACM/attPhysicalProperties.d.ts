import * as flatbuffers from 'flatbuffers';
/**
 * Attitude Physical Characteristics
 */
export declare class attPhysicalProperties implements flatbuffers.IUnpackableObject<attPhysicalPropertiesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): attPhysicalProperties;
    static getRootAsattPhysicalProperties(bb: flatbuffers.ByteBuffer, obj?: attPhysicalProperties): attPhysicalProperties;
    static getSizePrefixedRootAsattPhysicalProperties(bb: flatbuffers.ByteBuffer, obj?: attPhysicalProperties): attPhysicalProperties;
    /**
     * Drag coefficient
     */
    DRAG_COEFF(): number;
    /**
     * Wet mass in kg
     */
    WET_MASS(): number;
    /**
     * Dry mass in kg
     */
    DRY_MASS(): number;
    /**
     * Center of pressure reference frame
     */
    CP_REF_FRAME(): string | null;
    CP_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Center of pressure X in m
     */
    CP_X(): number;
    /**
     * Center of pressure Y in m
     */
    CP_Y(): number;
    /**
     * Center of pressure Z in m
     */
    CP_Z(): number;
    /**
     * Inertia reference frame
     */
    INERTIA_REF_FRAME(): string | null;
    INERTIA_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Moment of inertia about X axis in kg*m^2
     */
    IXX(): number;
    /**
     * Moment of inertia about Y axis in kg*m^2
     */
    IYY(): number;
    /**
     * Moment of inertia about Z axis in kg*m^2
     */
    IZZ(): number;
    /**
     * Product of inertia XY in kg*m^2
     */
    IXY(): number;
    /**
     * Product of inertia XZ in kg*m^2
     */
    IXZ(): number;
    /**
     * Product of inertia YZ in kg*m^2
     */
    IYZ(): number;
    static startattPhysicalProperties(builder: flatbuffers.Builder): void;
    static addDragCoeff(builder: flatbuffers.Builder, DRAG_COEFF: number): void;
    static addWetMass(builder: flatbuffers.Builder, WET_MASS: number): void;
    static addDryMass(builder: flatbuffers.Builder, DRY_MASS: number): void;
    static addCpRefFrame(builder: flatbuffers.Builder, CP_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addCpX(builder: flatbuffers.Builder, CP_X: number): void;
    static addCpY(builder: flatbuffers.Builder, CP_Y: number): void;
    static addCpZ(builder: flatbuffers.Builder, CP_Z: number): void;
    static addInertiaRefFrame(builder: flatbuffers.Builder, INERTIA_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addIxx(builder: flatbuffers.Builder, IXX: number): void;
    static addIyy(builder: flatbuffers.Builder, IYY: number): void;
    static addIzz(builder: flatbuffers.Builder, IZZ: number): void;
    static addIxy(builder: flatbuffers.Builder, IXY: number): void;
    static addIxz(builder: flatbuffers.Builder, IXZ: number): void;
    static addIyz(builder: flatbuffers.Builder, IYZ: number): void;
    static endattPhysicalProperties(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createattPhysicalProperties(builder: flatbuffers.Builder, DRAG_COEFF: number, WET_MASS: number, DRY_MASS: number, CP_REF_FRAMEOffset: flatbuffers.Offset, CP_X: number, CP_Y: number, CP_Z: number, INERTIA_REF_FRAMEOffset: flatbuffers.Offset, IXX: number, IYY: number, IZZ: number, IXY: number, IXZ: number, IYZ: number): flatbuffers.Offset;
    unpack(): attPhysicalPropertiesT;
    unpackTo(_o: attPhysicalPropertiesT): void;
}
export declare class attPhysicalPropertiesT implements flatbuffers.IGeneratedObject {
    DRAG_COEFF: number;
    WET_MASS: number;
    DRY_MASS: number;
    CP_REF_FRAME: string | Uint8Array | null;
    CP_X: number;
    CP_Y: number;
    CP_Z: number;
    INERTIA_REF_FRAME: string | Uint8Array | null;
    IXX: number;
    IYY: number;
    IZZ: number;
    IXY: number;
    IXZ: number;
    IYZ: number;
    constructor(DRAG_COEFF?: number, WET_MASS?: number, DRY_MASS?: number, CP_REF_FRAME?: string | Uint8Array | null, CP_X?: number, CP_Y?: number, CP_Z?: number, INERTIA_REF_FRAME?: string | Uint8Array | null, IXX?: number, IYY?: number, IZZ?: number, IXY?: number, IXZ?: number, IYZ?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=attPhysicalProperties.d.ts.map