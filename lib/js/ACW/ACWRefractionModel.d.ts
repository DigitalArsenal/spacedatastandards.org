import * as flatbuffers from 'flatbuffers';
import { acwRefractionModelKind } from './acwRefractionModelKind.js';
/**
 * Atmospheric refraction model for apparent-elevation access checks.
 */
export declare class ACWRefractionModel implements flatbuffers.IUnpackableObject<ACWRefractionModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWRefractionModel;
    static getRootAsACWRefractionModel(bb: flatbuffers.ByteBuffer, obj?: ACWRefractionModel): ACWRefractionModel;
    static getSizePrefixedRootAsACWRefractionModel(bb: flatbuffers.ByteBuffer, obj?: ACWRefractionModel): ACWRefractionModel;
    MODEL_KIND(): acwRefractionModelKind;
    /**
     * Local pressure in pascals.
     */
    PRESSURE_PA(): number;
    /**
     * Local temperature in kelvin.
     */
    TEMPERATURE_K(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_MODEL_KIND(): boolean;
    HAS_PRESSURE_PA(): boolean;
    HAS_TEMPERATURE_K(): boolean;
    static startACWRefractionModel(builder: flatbuffers.Builder): void;
    static addModelKind(builder: flatbuffers.Builder, MODEL_KIND: acwRefractionModelKind): void;
    static addPressurePa(builder: flatbuffers.Builder, PRESSURE_PA: number): void;
    static addTemperatureK(builder: flatbuffers.Builder, TEMPERATURE_K: number): void;
    static addHasModelKind(builder: flatbuffers.Builder, HAS_MODEL_KIND: boolean): void;
    static addHasPressurePa(builder: flatbuffers.Builder, HAS_PRESSURE_PA: boolean): void;
    static addHasTemperatureK(builder: flatbuffers.Builder, HAS_TEMPERATURE_K: boolean): void;
    static endACWRefractionModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWRefractionModel(builder: flatbuffers.Builder, MODEL_KIND: acwRefractionModelKind, PRESSURE_PA: number, TEMPERATURE_K: number, HAS_MODEL_KIND: boolean, HAS_PRESSURE_PA: boolean, HAS_TEMPERATURE_K: boolean): flatbuffers.Offset;
    unpack(): ACWRefractionModelT;
    unpackTo(_o: ACWRefractionModelT): void;
}
export declare class ACWRefractionModelT implements flatbuffers.IGeneratedObject {
    MODEL_KIND: acwRefractionModelKind;
    PRESSURE_PA: number;
    TEMPERATURE_K: number;
    HAS_MODEL_KIND: boolean;
    HAS_PRESSURE_PA: boolean;
    HAS_TEMPERATURE_K: boolean;
    constructor(MODEL_KIND?: acwRefractionModelKind, PRESSURE_PA?: number, TEMPERATURE_K?: number, HAS_MODEL_KIND?: boolean, HAS_PRESSURE_PA?: boolean, HAS_TEMPERATURE_K?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWRefractionModel.d.ts.map