import * as flatbuffers from 'flatbuffers';
import { timeSystem } from './timeSystem.js';
/**
 * Time System
 */
export declare class TIM implements flatbuffers.IUnpackableObject<TIMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIM;
    static getRootAsTIM(bb: flatbuffers.ByteBuffer, obj?: TIM): TIM;
    static getSizePrefixedRootAsTIM(bb: flatbuffers.ByteBuffer, obj?: TIM): TIM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    TIME_SYSTEM(): timeSystem;
    static startTIM(builder: flatbuffers.Builder): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static endTIM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTIM(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): flatbuffers.Offset;
    unpack(): TIMT;
    unpackTo(_o: TIMT): void;
}
export declare class TIMT implements flatbuffers.IGeneratedObject {
    TIME_SYSTEM: timeSystem;
    constructor(TIME_SYSTEM?: timeSystem);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIM.d.ts.map