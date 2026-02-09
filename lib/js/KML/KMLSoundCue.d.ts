import * as flatbuffers from 'flatbuffers';
/**
 * gx:SoundCue tour primitive
 */
export declare class KMLSoundCue implements flatbuffers.IUnpackableObject<KMLSoundCueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLSoundCue;
    static getRootAsKMLSoundCue(bb: flatbuffers.ByteBuffer, obj?: KMLSoundCue): KMLSoundCue;
    static getSizePrefixedRootAsKMLSoundCue(bb: flatbuffers.ByteBuffer, obj?: KMLSoundCue): KMLSoundCue;
    /**
     * Audio file URL
     */
    HREF(): string | null;
    HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Delayed start in seconds
     */
    DELAYED_START(): number;
    static startKMLSoundCue(builder: flatbuffers.Builder): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static addDelayedStart(builder: flatbuffers.Builder, DELAYED_START: number): void;
    static endKMLSoundCue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLSoundCue(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset, DELAYED_START: number): flatbuffers.Offset;
    unpack(): KMLSoundCueT;
    unpackTo(_o: KMLSoundCueT): void;
}
export declare class KMLSoundCueT implements flatbuffers.IGeneratedObject {
    HREF: string | Uint8Array | null;
    DELAYED_START: number;
    constructor(HREF?: string | Uint8Array | null, DELAYED_START?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLSoundCue.d.ts.map