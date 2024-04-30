import * as flatbuffers from 'flatbuffers';
import { ENGINE, ENGINET } from './ENGINE.js';
/**
 * Stage Details
 */
export declare class STAGE implements flatbuffers.IUnpackableObject<STAGET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STAGE;
    static getRootAsSTAGE(bb: flatbuffers.ByteBuffer, obj?: STAGE): STAGE;
    static getSizePrefixedRootAsSTAGE(bb: flatbuffers.ByteBuffer, obj?: STAGE): STAGE;
    /**
     * Stage Number
     */
    STAGE_NUMBER(): number;
    /**
     * Engines Used in This Stage
     */
    ENGINES(index: number, obj?: ENGINE): ENGINE | null;
    enginesLength(): number;
    /**
     * Fuel Type Used in This Stage
     */
    FUEL_TYPE(): string | null;
    FUEL_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thrust Produced by This Stage (in Newtons)
     */
    THRUST(): number;
    /**
     * Duration of the Burn (in Seconds)
     */
    BURN_DURATION(): number;
    static startSTAGE(builder: flatbuffers.Builder): void;
    static addStageNumber(builder: flatbuffers.Builder, STAGE_NUMBER: number): void;
    static addEngines(builder: flatbuffers.Builder, ENGINESOffset: flatbuffers.Offset): void;
    static createEnginesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnginesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFuelType(builder: flatbuffers.Builder, FUEL_TYPEOffset: flatbuffers.Offset): void;
    static addThrust(builder: flatbuffers.Builder, THRUST: number): void;
    static addBurnDuration(builder: flatbuffers.Builder, BURN_DURATION: number): void;
    static endSTAGE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSTAGE(builder: flatbuffers.Builder, STAGE_NUMBER: number, ENGINESOffset: flatbuffers.Offset, FUEL_TYPEOffset: flatbuffers.Offset, THRUST: number, BURN_DURATION: number): flatbuffers.Offset;
    unpack(): STAGET;
    unpackTo(_o: STAGET): void;
}
export declare class STAGET implements flatbuffers.IGeneratedObject {
    STAGE_NUMBER: number;
    ENGINES: (ENGINET)[];
    FUEL_TYPE: string | Uint8Array | null;
    THRUST: number;
    BURN_DURATION: number;
    constructor(STAGE_NUMBER?: number, ENGINES?: (ENGINET)[], FUEL_TYPE?: string | Uint8Array | null, THRUST?: number, BURN_DURATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STAGE.d.ts.map