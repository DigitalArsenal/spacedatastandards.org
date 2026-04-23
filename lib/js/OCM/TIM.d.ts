import * as flatbuffers from 'flatbuffers';
import { timingStandard } from './timingStandard.js';
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
    TIME_SYSTEM(): timingStandard;
    static startTIM(builder: flatbuffers.Builder): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static endTIM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTIM(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): flatbuffers.Offset;
    unpack(): TIMT;
    unpackTo(_o: TIMT): void;
}
export declare class TIMT implements flatbuffers.IGeneratedObject {
    TIME_SYSTEM: timingStandard;
    constructor(TIME_SYSTEM?: timingStandard);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIM.d.ts.map