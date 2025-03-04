import * as flatbuffers from 'flatbuffers';
import { ENGINE, ENGINET } from './engine.js';
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
    stageNumber(): number;
    /**
     * Engines Used in This Stage
     */
    engines(index: number, obj?: ENGINE): ENGINE | null;
    enginesLength(): number;
    /**
     * Fuel Type Used in This Stage
     */
    fuelType(): string | null;
    fuelType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thrust Produced by This Stage (in Newtons)
     */
    thrust(): number;
    /**
     * Duration of the Burn (in Seconds)
     */
    burnDuration(): number;
    static startSTAGE(builder: flatbuffers.Builder): void;
    static addStageNumber(builder: flatbuffers.Builder, stageNumber: number): void;
    static addEngines(builder: flatbuffers.Builder, enginesOffset: flatbuffers.Offset): void;
    static createEnginesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEnginesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFuelType(builder: flatbuffers.Builder, fuelTypeOffset: flatbuffers.Offset): void;
    static addThrust(builder: flatbuffers.Builder, thrust: number): void;
    static addBurnDuration(builder: flatbuffers.Builder, burnDuration: number): void;
    static endSTAGE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSTAGE(builder: flatbuffers.Builder, stageNumber: number, enginesOffset: flatbuffers.Offset, fuelTypeOffset: flatbuffers.Offset, thrust: number, burnDuration: number): flatbuffers.Offset;
    unpack(): STAGET;
    unpackTo(_o: STAGET): void;
}
export declare class STAGET implements flatbuffers.IGeneratedObject {
    stageNumber: number;
    engines: (ENGINET)[];
    fuelType: string | Uint8Array | null;
    thrust: number;
    burnDuration: number;
    constructor(stageNumber?: number, engines?: (ENGINET)[], fuelType?: string | Uint8Array | null, thrust?: number, burnDuration?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=stage.d.ts.map