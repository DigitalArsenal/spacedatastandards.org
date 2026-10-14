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
    /**
     * MANUFACTURER (CCSDS 502.0-B-3): the object's manufacturer.
     */
    MANUFACTURER(): string | null;
    MANUFACTURER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BUS_MODEL: the object's bus model.
     */
    BUS_MODEL(): string | null;
    BUS_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * DOCKED_WITH: comma-separated names of the objects it is docked with.
     */
    DOCKED_WITH(): string | null;
    DOCKED_WITH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * INITIAL_WET_MASS in kg, NaN when not stated.
     */
    INITIAL_WET_MASS(): number;
    /**
     * OEB_PARENT_FRAME: the frame the optimally enclosing box is defined in.
     */
    OEB_PARENT_FRAME(): string | null;
    OEB_PARENT_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OEB_PARENT_FRAME_EPOCH.
     */
    OEB_PARENT_FRAME_EPOCH(): string | null;
    OEB_PARENT_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * AREA_MIN_FOR_PC in m**2, NaN when not stated.
     */
    AREA_MIN_FOR_PC(): number;
    /**
     * AREA_MAX_FOR_PC in m**2, NaN when not stated.
     */
    AREA_MAX_FOR_PC(): number;
    /**
     * AREA_TYP_FOR_PC in m**2, NaN when not stated.
     */
    AREA_TYP_FOR_PC(): number;
    /**
     * RCS in m**2, NaN when not stated.
     */
    RCS(): number;
    /**
     * RCS_MIN in m**2, NaN when not stated.
     */
    RCS_MIN(): number;
    /**
     * RCS_MAX in m**2, NaN when not stated.
     */
    RCS_MAX(): number;
    /**
     * VM_ABSOLUTE: absolute visual magnitude, NaN when not stated.
     */
    VM_ABSOLUTE(): number;
    /**
     * VM_APPARENT_MIN: minimum apparent visual magnitude, NaN when not stated.
     */
    VM_APPARENT_MIN(): number;
    /**
     * VM_APPARENT: apparent visual magnitude, NaN when not stated.
     */
    VM_APPARENT(): number;
    /**
     * VM_APPARENT_MAX: maximum apparent visual magnitude, NaN when not stated.
     */
    VM_APPARENT_MAX(): number;
    /**
     * REFLECTANCE: typical reflectivity, NaN when not stated.
     */
    REFLECTANCE(): number;
    /**
     * ATT_CONTROL_MODE.
     */
    ATT_CONTROL_MODE(): string | null;
    ATT_CONTROL_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_ACTUATOR_TYPE.
     */
    ATT_ACTUATOR_TYPE(): string | null;
    ATT_ACTUATOR_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_KNOWLEDGE in degrees, NaN when not stated.
     */
    ATT_KNOWLEDGE(): number;
    /**
     * ATT_CONTROL in degrees, NaN when not stated.
     */
    ATT_CONTROL(): number;
    /**
     * ATT_POINTING in degrees, NaN when not stated.
     */
    ATT_POINTING(): number;
    /**
     * AVG_MANEUVER_FREQ in maneuvers per year, NaN when not stated.
     */
    AVG_MANEUVER_FREQ(): number;
    /**
     * MAX_THRUST in N, NaN when not stated.
     */
    MAX_THRUST(): number;
    /**
     * DV_BOL: delta-v at beginning of life in km/s, NaN when not stated.
     */
    DV_BOL(): number;
    /**
     * DV_REMAINING in km/s, NaN when not stated.
     */
    DV_REMAINING(): number;
    /**
     * IXX in kg*m**2, NaN when not stated.
     */
    IXX(): number;
    /**
     * IYY in kg*m**2, NaN when not stated.
     */
    IYY(): number;
    /**
     * IZZ in kg*m**2, NaN when not stated.
     */
    IZZ(): number;
    /**
     * IXY in kg*m**2, NaN when not stated.
     */
    IXY(): number;
    /**
     * IXZ in kg*m**2, NaN when not stated.
     */
    IXZ(): number;
    /**
     * IYZ in kg*m**2, NaN when not stated.
     */
    IYZ(): number;
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
    static addManufacturer(builder: flatbuffers.Builder, MANUFACTUREROffset: flatbuffers.Offset): void;
    static addBusModel(builder: flatbuffers.Builder, BUS_MODELOffset: flatbuffers.Offset): void;
    static addDockedWith(builder: flatbuffers.Builder, DOCKED_WITHOffset: flatbuffers.Offset): void;
    static addInitialWetMass(builder: flatbuffers.Builder, INITIAL_WET_MASS: number): void;
    static addOebParentFrame(builder: flatbuffers.Builder, OEB_PARENT_FRAMEOffset: flatbuffers.Offset): void;
    static addOebParentFrameEpoch(builder: flatbuffers.Builder, OEB_PARENT_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addAreaMinForPc(builder: flatbuffers.Builder, AREA_MIN_FOR_PC: number): void;
    static addAreaMaxForPc(builder: flatbuffers.Builder, AREA_MAX_FOR_PC: number): void;
    static addAreaTypForPc(builder: flatbuffers.Builder, AREA_TYP_FOR_PC: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addRcsMin(builder: flatbuffers.Builder, RCS_MIN: number): void;
    static addRcsMax(builder: flatbuffers.Builder, RCS_MAX: number): void;
    static addVmAbsolute(builder: flatbuffers.Builder, VM_ABSOLUTE: number): void;
    static addVmApparentMin(builder: flatbuffers.Builder, VM_APPARENT_MIN: number): void;
    static addVmApparent(builder: flatbuffers.Builder, VM_APPARENT: number): void;
    static addVmApparentMax(builder: flatbuffers.Builder, VM_APPARENT_MAX: number): void;
    static addReflectance(builder: flatbuffers.Builder, REFLECTANCE: number): void;
    static addAttControlMode(builder: flatbuffers.Builder, ATT_CONTROL_MODEOffset: flatbuffers.Offset): void;
    static addAttActuatorType(builder: flatbuffers.Builder, ATT_ACTUATOR_TYPEOffset: flatbuffers.Offset): void;
    static addAttKnowledge(builder: flatbuffers.Builder, ATT_KNOWLEDGE: number): void;
    static addAttControl(builder: flatbuffers.Builder, ATT_CONTROL: number): void;
    static addAttPointing(builder: flatbuffers.Builder, ATT_POINTING: number): void;
    static addAvgManeuverFreq(builder: flatbuffers.Builder, AVG_MANEUVER_FREQ: number): void;
    static addMaxThrust(builder: flatbuffers.Builder, MAX_THRUST: number): void;
    static addDvBol(builder: flatbuffers.Builder, DV_BOL: number): void;
    static addDvRemaining(builder: flatbuffers.Builder, DV_REMAINING: number): void;
    static addIxx(builder: flatbuffers.Builder, IXX: number): void;
    static addIyy(builder: flatbuffers.Builder, IYY: number): void;
    static addIzz(builder: flatbuffers.Builder, IZZ: number): void;
    static addIxy(builder: flatbuffers.Builder, IXY: number): void;
    static addIxz(builder: flatbuffers.Builder, IXZ: number): void;
    static addIyz(builder: flatbuffers.Builder, IYZ: number): void;
    static endPhysicalProperties(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPhysicalProperties(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, WET_MASS: number, DRY_MASS: number, MASS_UNITSOffset: flatbuffers.Offset, OEB_Q1: number, OEB_Q2: number, OEB_Q3: number, OEB_QC: number, OEB_MAX: number, OEB_INT: number, OEB_MIN: number, AREA_ALONG_OEB_MAX: number, AREA_ALONG_OEB_INT: number, AREA_ALONG_OEB_MIN: number, AREA_UNITSOffset: flatbuffers.Offset, DRAG_CONST_AREA: number, DRAG_COEFF_NOM: number, DRAG_UNCERTAINTY: number, SRP_CONST_AREA: number, SOLAR_RAD_COEFF: number, SRP_UNCERTAINTY: number, MANUFACTUREROffset: flatbuffers.Offset, BUS_MODELOffset: flatbuffers.Offset, DOCKED_WITHOffset: flatbuffers.Offset, INITIAL_WET_MASS: number, OEB_PARENT_FRAMEOffset: flatbuffers.Offset, OEB_PARENT_FRAME_EPOCHOffset: flatbuffers.Offset, AREA_MIN_FOR_PC: number, AREA_MAX_FOR_PC: number, AREA_TYP_FOR_PC: number, RCS: number, RCS_MIN: number, RCS_MAX: number, VM_ABSOLUTE: number, VM_APPARENT_MIN: number, VM_APPARENT: number, VM_APPARENT_MAX: number, REFLECTANCE: number, ATT_CONTROL_MODEOffset: flatbuffers.Offset, ATT_ACTUATOR_TYPEOffset: flatbuffers.Offset, ATT_KNOWLEDGE: number, ATT_CONTROL: number, ATT_POINTING: number, AVG_MANEUVER_FREQ: number, MAX_THRUST: number, DV_BOL: number, DV_REMAINING: number, IXX: number, IYY: number, IZZ: number, IXY: number, IXZ: number, IYZ: number): flatbuffers.Offset;
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
    MANUFACTURER: string | Uint8Array | null;
    BUS_MODEL: string | Uint8Array | null;
    DOCKED_WITH: string | Uint8Array | null;
    INITIAL_WET_MASS: number;
    OEB_PARENT_FRAME: string | Uint8Array | null;
    OEB_PARENT_FRAME_EPOCH: string | Uint8Array | null;
    AREA_MIN_FOR_PC: number;
    AREA_MAX_FOR_PC: number;
    AREA_TYP_FOR_PC: number;
    RCS: number;
    RCS_MIN: number;
    RCS_MAX: number;
    VM_ABSOLUTE: number;
    VM_APPARENT_MIN: number;
    VM_APPARENT: number;
    VM_APPARENT_MAX: number;
    REFLECTANCE: number;
    ATT_CONTROL_MODE: string | Uint8Array | null;
    ATT_ACTUATOR_TYPE: string | Uint8Array | null;
    ATT_KNOWLEDGE: number;
    ATT_CONTROL: number;
    ATT_POINTING: number;
    AVG_MANEUVER_FREQ: number;
    MAX_THRUST: number;
    DV_BOL: number;
    DV_REMAINING: number;
    IXX: number;
    IYY: number;
    IZZ: number;
    IXY: number;
    IXZ: number;
    IYZ: number;
    constructor(COMMENT?: (string)[], WET_MASS?: number, DRY_MASS?: number, MASS_UNITS?: string | Uint8Array | null, OEB_Q1?: number, OEB_Q2?: number, OEB_Q3?: number, OEB_QC?: number, OEB_MAX?: number, OEB_INT?: number, OEB_MIN?: number, AREA_ALONG_OEB_MAX?: number, AREA_ALONG_OEB_INT?: number, AREA_ALONG_OEB_MIN?: number, AREA_UNITS?: string | Uint8Array | null, DRAG_CONST_AREA?: number, DRAG_COEFF_NOM?: number, DRAG_UNCERTAINTY?: number, SRP_CONST_AREA?: number, SOLAR_RAD_COEFF?: number, SRP_UNCERTAINTY?: number, MANUFACTURER?: string | Uint8Array | null, BUS_MODEL?: string | Uint8Array | null, DOCKED_WITH?: string | Uint8Array | null, INITIAL_WET_MASS?: number, OEB_PARENT_FRAME?: string | Uint8Array | null, OEB_PARENT_FRAME_EPOCH?: string | Uint8Array | null, AREA_MIN_FOR_PC?: number, AREA_MAX_FOR_PC?: number, AREA_TYP_FOR_PC?: number, RCS?: number, RCS_MIN?: number, RCS_MAX?: number, VM_ABSOLUTE?: number, VM_APPARENT_MIN?: number, VM_APPARENT?: number, VM_APPARENT_MAX?: number, REFLECTANCE?: number, ATT_CONTROL_MODE?: string | Uint8Array | null, ATT_ACTUATOR_TYPE?: string | Uint8Array | null, ATT_KNOWLEDGE?: number, ATT_CONTROL?: number, ATT_POINTING?: number, AVG_MANEUVER_FREQ?: number, MAX_THRUST?: number, DV_BOL?: number, DV_REMAINING?: number, IXX?: number, IYY?: number, IZZ?: number, IXY?: number, IXZ?: number, IYZ?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PhysicalProperties.d.ts.map