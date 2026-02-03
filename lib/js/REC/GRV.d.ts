import * as flatbuffers from 'flatbuffers';
import { CentralBody } from './CentralBody.js';
import { GravityModelName } from './GravityModelName.js';
import { GravityModelType } from './GravityModelType.js';
/**
 * Gravity Models
 */
export declare class GRV implements flatbuffers.IUnpackableObject<GRVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GRV;
    static getRootAsGRV(bb: flatbuffers.ByteBuffer, obj?: GRV): GRV;
    static getSizePrefixedRootAsGRV(bb: flatbuffers.ByteBuffer, obj?: GRV): GRV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    MODEL_TYPE(): GravityModelType;
    MODEL_NAME(): GravityModelName;
    CENTRAL_BODY(): CentralBody;
    MAX_DEGREE(): number;
    MAX_ORDER(): number;
    INCLUDE_SUN(): boolean;
    INCLUDE_MOON(): boolean;
    INCLUDE_PLANETS(): boolean;
    SOLID_TIDES(): boolean;
    OCEAN_TIDES(): boolean;
    POLE_TIDES(): boolean;
    static startGRV(builder: flatbuffers.Builder): void;
    static addModelType(builder: flatbuffers.Builder, MODEL_TYPE: GravityModelType): void;
    static addModelName(builder: flatbuffers.Builder, MODEL_NAME: GravityModelName): void;
    static addCentralBody(builder: flatbuffers.Builder, CENTRAL_BODY: CentralBody): void;
    static addMaxDegree(builder: flatbuffers.Builder, MAX_DEGREE: number): void;
    static addMaxOrder(builder: flatbuffers.Builder, MAX_ORDER: number): void;
    static addIncludeSun(builder: flatbuffers.Builder, INCLUDE_SUN: boolean): void;
    static addIncludeMoon(builder: flatbuffers.Builder, INCLUDE_MOON: boolean): void;
    static addIncludePlanets(builder: flatbuffers.Builder, INCLUDE_PLANETS: boolean): void;
    static addSolidTides(builder: flatbuffers.Builder, SOLID_TIDES: boolean): void;
    static addOceanTides(builder: flatbuffers.Builder, OCEAN_TIDES: boolean): void;
    static addPoleTides(builder: flatbuffers.Builder, POLE_TIDES: boolean): void;
    static endGRV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGRVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGRVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGRV(builder: flatbuffers.Builder, MODEL_TYPE: GravityModelType, MODEL_NAME: GravityModelName, CENTRAL_BODY: CentralBody, MAX_DEGREE: number, MAX_ORDER: number, INCLUDE_SUN: boolean, INCLUDE_MOON: boolean, INCLUDE_PLANETS: boolean, SOLID_TIDES: boolean, OCEAN_TIDES: boolean, POLE_TIDES: boolean): flatbuffers.Offset;
    unpack(): GRVT;
    unpackTo(_o: GRVT): void;
}
export declare class GRVT implements flatbuffers.IGeneratedObject {
    MODEL_TYPE: GravityModelType;
    MODEL_NAME: GravityModelName;
    CENTRAL_BODY: CentralBody;
    MAX_DEGREE: number;
    MAX_ORDER: number;
    INCLUDE_SUN: boolean;
    INCLUDE_MOON: boolean;
    INCLUDE_PLANETS: boolean;
    SOLID_TIDES: boolean;
    OCEAN_TIDES: boolean;
    POLE_TIDES: boolean;
    constructor(MODEL_TYPE?: GravityModelType, MODEL_NAME?: GravityModelName, CENTRAL_BODY?: CentralBody, MAX_DEGREE?: number, MAX_ORDER?: number, INCLUDE_SUN?: boolean, INCLUDE_MOON?: boolean, INCLUDE_PLANETS?: boolean, SOLID_TIDES?: boolean, OCEAN_TIDES?: boolean, POLE_TIDES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GRV.d.ts.map