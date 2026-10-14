import * as flatbuffers from 'flatbuffers';
/**
 * The solar array.
 */
export declare class ppsSolarArray implements flatbuffers.IUnpackableObject<ppsSolarArrayT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ppsSolarArray;
    static getRootAsppsSolarArray(bb: flatbuffers.ByteBuffer, obj?: ppsSolarArray): ppsSolarArray;
    static getSizePrefixedRootAsppsSolarArray(bb: flatbuffers.ByteBuffer, obj?: ppsSolarArray): ppsSolarArray;
    /**
     * Active area, m^2.
     */
    AREA_M2(): number;
    /**
     * Cell efficiency at the operating temperature, 0-1; 0 = the
     * simulator's default.
     */
    EFFICIENCY(): number;
    /**
     * Solar irradiance at 1 AU, W/m^2; 0 = 1361.
     */
    SOLAR_CONSTANT_W_M2(): number;
    /**
     * Array normal in body axes, unit vector, 3 values; empty = the
     * simulator's default.
     */
    NORMAL_BODY(index: number): number | null;
    normalBodyLength(): number;
    normalBodyArray(): Float64Array | null;
    /**
     * Fractional loss of output per year; 0 = none.
     */
    DEGRADATION_PER_YEAR(): number;
    static startppsSolarArray(builder: flatbuffers.Builder): void;
    static addAreaM2(builder: flatbuffers.Builder, AREA_M2: number): void;
    static addEfficiency(builder: flatbuffers.Builder, EFFICIENCY: number): void;
    static addSolarConstantWM2(builder: flatbuffers.Builder, SOLAR_CONSTANT_W_M2: number): void;
    static addNormalBody(builder: flatbuffers.Builder, NORMAL_BODYOffset: flatbuffers.Offset): void;
    static createNormalBodyVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNormalBodyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNormalBodyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDegradationPerYear(builder: flatbuffers.Builder, DEGRADATION_PER_YEAR: number): void;
    static endppsSolarArray(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createppsSolarArray(builder: flatbuffers.Builder, AREA_M2: number, EFFICIENCY: number, SOLAR_CONSTANT_W_M2: number, NORMAL_BODYOffset: flatbuffers.Offset, DEGRADATION_PER_YEAR: number): flatbuffers.Offset;
    unpack(): ppsSolarArrayT;
    unpackTo(_o: ppsSolarArrayT): void;
}
export declare class ppsSolarArrayT implements flatbuffers.IGeneratedObject {
    AREA_M2: number;
    EFFICIENCY: number;
    SOLAR_CONSTANT_W_M2: number;
    NORMAL_BODY: (number)[];
    DEGRADATION_PER_YEAR: number;
    constructor(AREA_M2?: number, EFFICIENCY?: number, SOLAR_CONSTANT_W_M2?: number, NORMAL_BODY?: (number)[], DEGRADATION_PER_YEAR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ppsSolarArray.d.ts.map