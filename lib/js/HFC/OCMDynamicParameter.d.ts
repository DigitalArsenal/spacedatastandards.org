import * as flatbuffers from 'flatbuffers';
/**
 * A parameter of the dynamical model that an orbit solution carries with the state: its value at the solution
 * epoch and whether the orbit determination solved for it (a held value is a catalog value).
 */
export declare class OCMDynamicParameter implements flatbuffers.IUnpackableObject<OCMDynamicParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMDynamicParameter;
    static getRootAsOCMDynamicParameter(bb: flatbuffers.ByteBuffer, obj?: OCMDynamicParameter): OCMDynamicParameter;
    static getSizePrefixedRootAsOCMDynamicParameter(bb: flatbuffers.ByteBuffer, obj?: OCMDynamicParameter): OCMDynamicParameter;
    /**
     * Parameter name. A VCM's B, BDOT, AGOM and T are DRAG_AREA_OVER_MASS (Cd*A/m), DRAG_AREA_OVER_MASS_RATE,
     * SRP_AREA_OVER_MASS (Cr*A/m) and IN_TRACK_ACCELERATION, the names of PRW's prwDynamicParameter. Other names
     * are the producer's, as in USER_DEFINED_PARAMETERS.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value at the solution epoch, in UNITS.
     */
    VALUE(): number;
    /**
     * Units of VALUE: m**2/kg for DRAG_AREA_OVER_MASS and SRP_AREA_OVER_MASS, m**2/kg/s for DRAG_AREA_OVER_MASS_RATE,
     * m/s**2 for IN_TRACK_ACCELERATION.
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the orbit determination solved for the parameter, false when VALUE was held.
     */
    SOLVED_FOR(): boolean;
    static startOCMDynamicParameter(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addSolvedFor(builder: flatbuffers.Builder, SOLVED_FOR: boolean): void;
    static endOCMDynamicParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMDynamicParameter(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUE: number, UNITSOffset: flatbuffers.Offset, SOLVED_FOR: boolean): flatbuffers.Offset;
    unpack(): OCMDynamicParameterT;
    unpackTo(_o: OCMDynamicParameterT): void;
}
export declare class OCMDynamicParameterT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: number;
    UNITS: string | Uint8Array | null;
    SOLVED_FOR: boolean;
    constructor(NAME?: string | Uint8Array | null, VALUE?: number, UNITS?: string | Uint8Array | null, SOLVED_FOR?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMDynamicParameter.d.ts.map