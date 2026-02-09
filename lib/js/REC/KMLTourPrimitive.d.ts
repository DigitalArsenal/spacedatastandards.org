import * as flatbuffers from 'flatbuffers';
import { KMLAnimatedUpdate, KMLAnimatedUpdateT } from './KMLAnimatedUpdate.js';
import { KMLFlyTo, KMLFlyToT } from './KMLFlyTo.js';
import { KMLSoundCue, KMLSoundCueT } from './KMLSoundCue.js';
import { KMLTourControl, KMLTourControlT } from './KMLTourControl.js';
import { KMLWait, KMLWaitT } from './KMLWait.js';
/**
 * Tour primitive (union-like)
 */
export declare class KMLTourPrimitive implements flatbuffers.IUnpackableObject<KMLTourPrimitiveT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTourPrimitive;
    static getRootAsKMLTourPrimitive(bb: flatbuffers.ByteBuffer, obj?: KMLTourPrimitive): KMLTourPrimitive;
    static getSizePrefixedRootAsKMLTourPrimitive(bb: flatbuffers.ByteBuffer, obj?: KMLTourPrimitive): KMLTourPrimitive;
    /**
     * FlyTo
     */
    FLY_TO(obj?: KMLFlyTo): KMLFlyTo | null;
    /**
     * Wait
     */
    WAIT(obj?: KMLWait): KMLWait | null;
    /**
     * AnimatedUpdate
     */
    ANIMATED_UPDATE(obj?: KMLAnimatedUpdate): KMLAnimatedUpdate | null;
    /**
     * TourControl
     */
    TOUR_CONTROL(obj?: KMLTourControl): KMLTourControl | null;
    /**
     * SoundCue
     */
    SOUND_CUE(obj?: KMLSoundCue): KMLSoundCue | null;
    static startKMLTourPrimitive(builder: flatbuffers.Builder): void;
    static addFlyTo(builder: flatbuffers.Builder, FLY_TOOffset: flatbuffers.Offset): void;
    static addWait(builder: flatbuffers.Builder, WAITOffset: flatbuffers.Offset): void;
    static addAnimatedUpdate(builder: flatbuffers.Builder, ANIMATED_UPDATEOffset: flatbuffers.Offset): void;
    static addTourControl(builder: flatbuffers.Builder, TOUR_CONTROLOffset: flatbuffers.Offset): void;
    static addSoundCue(builder: flatbuffers.Builder, SOUND_CUEOffset: flatbuffers.Offset): void;
    static endKMLTourPrimitive(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLTourPrimitiveT;
    unpackTo(_o: KMLTourPrimitiveT): void;
}
export declare class KMLTourPrimitiveT implements flatbuffers.IGeneratedObject {
    FLY_TO: KMLFlyToT | null;
    WAIT: KMLWaitT | null;
    ANIMATED_UPDATE: KMLAnimatedUpdateT | null;
    TOUR_CONTROL: KMLTourControlT | null;
    SOUND_CUE: KMLSoundCueT | null;
    constructor(FLY_TO?: KMLFlyToT | null, WAIT?: KMLWaitT | null, ANIMATED_UPDATE?: KMLAnimatedUpdateT | null, TOUR_CONTROL?: KMLTourControlT | null, SOUND_CUE?: KMLSoundCueT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTourPrimitive.d.ts.map