import * as flatbuffers from 'flatbuffers';
import { ENGINE_TYPE } from './engine-type.js';
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
    engineName(): string | null;
    engineName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Engine
     */
    type(): ENGINE_TYPE;
    /**
     * Thrust Produced by the Engine (in Newtons)
     */
    thrust(): number;
    static startENGINE(builder: flatbuffers.Builder): void;
    static addEngineName(builder: flatbuffers.Builder, engineNameOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, type: ENGINE_TYPE): void;
    static addThrust(builder: flatbuffers.Builder, thrust: number): void;
    static endENGINE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createENGINE(builder: flatbuffers.Builder, engineNameOffset: flatbuffers.Offset, type: ENGINE_TYPE, thrust: number): flatbuffers.Offset;
    unpack(): ENGINET;
    unpackTo(_o: ENGINET): void;
}
export declare class ENGINET implements flatbuffers.IGeneratedObject {
    engineName: string | Uint8Array | null;
    type: ENGINE_TYPE;
    thrust: number;
    constructor(engineName?: string | Uint8Array | null, type?: ENGINE_TYPE, thrust?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=engine.d.ts.map