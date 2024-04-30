import * as flatbuffers from 'flatbuffers';
import { ENGINE_TYPE } from './ENGINE_TYPE.js';
/**
 * Engine Details
 */
export declare class ENGINE implements flatbuffers.IUnpackableObject<ENGINET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ENGINE;
    static getRootAsENGINE(bb: flatbuffers.ByteBuffer, obj?: ENGINE): ENGINE;
    static getSizePrefixedRootAsENGINE(bb: flatbuffers.ByteBuffer, obj?: ENGINE): ENGINE;
    /**
     * Engine Name
     */
    ENGINE_NAME(): string | null;
    ENGINE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Engine
     */
    TYPE(): ENGINE_TYPE;
    /**
     * Thrust Produced by the Engine (in Newtons)
     */
    THRUST(): number;
    static startENGINE(builder: flatbuffers.Builder): void;
    static addEngineName(builder: flatbuffers.Builder, ENGINE_NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: ENGINE_TYPE): void;
    static addThrust(builder: flatbuffers.Builder, THRUST: number): void;
    static endENGINE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createENGINE(builder: flatbuffers.Builder, ENGINE_NAMEOffset: flatbuffers.Offset, TYPE: ENGINE_TYPE, THRUST: number): flatbuffers.Offset;
    unpack(): ENGINET;
    unpackTo(_o: ENGINET): void;
}
export declare class ENGINET implements flatbuffers.IGeneratedObject {
    ENGINE_NAME: string | Uint8Array | null;
    TYPE: ENGINE_TYPE;
    THRUST: number;
    constructor(ENGINE_NAME?: string | Uint8Array | null, TYPE?: ENGINE_TYPE, THRUST?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ENGINE.d.ts.map