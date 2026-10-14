import * as flatbuffers from 'flatbuffers';
import { TIMConversionRequest, TIMConversionRequestT } from './TIMConversionRequest.js';
import { TIMConversionResult, TIMConversionResultT } from './TIMConversionResult.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { timingStandard } from './timingStandard.js';
/**
 * Time System and time-conversion envelope.
 */
export declare class TIM implements flatbuffers.IUnpackableObject<TIMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIM;
    static getRootAsTIM(bb: flatbuffers.ByteBuffer, obj?: TIM): TIM;
    static getSizePrefixedRootAsTIM(bb: flatbuffers.ByteBuffer, obj?: TIM): TIM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Legacy time-system selector retained for existing TIM consumers.
     */
    TIME_SYSTEM(): timingStandard;
    /**
     * A single tagged instant.
     */
    INSTANT(obj?: TIMInstant): TIMInstant | null;
    /**
     * Time conversion request.
     */
    CONVERSION_REQUEST(obj?: TIMConversionRequest): TIMConversionRequest | null;
    /**
     * Time conversion result.
     */
    CONVERSION_RESULT(obj?: TIMConversionResult): TIMConversionResult | null;
    static startTIM(builder: flatbuffers.Builder): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addInstant(builder: flatbuffers.Builder, INSTANTOffset: flatbuffers.Offset): void;
    static addConversionRequest(builder: flatbuffers.Builder, CONVERSION_REQUESTOffset: flatbuffers.Offset): void;
    static addConversionResult(builder: flatbuffers.Builder, CONVERSION_RESULTOffset: flatbuffers.Offset): void;
    static endTIM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTIMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TIMT;
    unpackTo(_o: TIMT): void;
}
export declare class TIMT implements flatbuffers.IGeneratedObject {
    TIME_SYSTEM: timingStandard;
    INSTANT: TIMInstantT | null;
    CONVERSION_REQUEST: TIMConversionRequestT | null;
    CONVERSION_RESULT: TIMConversionResultT | null;
    constructor(TIME_SYSTEM?: timingStandard, INSTANT?: TIMInstantT | null, CONVERSION_REQUEST?: TIMConversionRequestT | null, CONVERSION_RESULT?: TIMConversionResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIM.d.ts.map