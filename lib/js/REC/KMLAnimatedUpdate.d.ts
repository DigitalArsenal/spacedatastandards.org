import * as flatbuffers from 'flatbuffers';
import { KMLUpdate, KMLUpdateT } from './KMLUpdate.js';
/**
 * gx:AnimatedUpdate tour primitive
 */
export declare class KMLAnimatedUpdate implements flatbuffers.IUnpackableObject<KMLAnimatedUpdateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLAnimatedUpdate;
    static getRootAsKMLAnimatedUpdate(bb: flatbuffers.ByteBuffer, obj?: KMLAnimatedUpdate): KMLAnimatedUpdate;
    static getSizePrefixedRootAsKMLAnimatedUpdate(bb: flatbuffers.ByteBuffer, obj?: KMLAnimatedUpdate): KMLAnimatedUpdate;
    /**
     * Duration in seconds
     */
    DURATION(): number;
    /**
     * Delayed start in seconds
     */
    DELAYED_START(): number;
    /**
     * Update
     */
    UPDATE(obj?: KMLUpdate): KMLUpdate | null;
    static startKMLAnimatedUpdate(builder: flatbuffers.Builder): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addDelayedStart(builder: flatbuffers.Builder, DELAYED_START: number): void;
    static addUpdate(builder: flatbuffers.Builder, UPDATEOffset: flatbuffers.Offset): void;
    static endKMLAnimatedUpdate(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLAnimatedUpdateT;
    unpackTo(_o: KMLAnimatedUpdateT): void;
}
export declare class KMLAnimatedUpdateT implements flatbuffers.IGeneratedObject {
    DURATION: number;
    DELAYED_START: number;
    UPDATE: KMLUpdateT | null;
    constructor(DURATION?: number, DELAYED_START?: number, UPDATE?: KMLUpdateT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLAnimatedUpdate.d.ts.map