import * as flatbuffers from 'flatbuffers';
/**
 * gx:TourControl tour primitive
 */
export declare class KMLTourControl implements flatbuffers.IUnpackableObject<KMLTourControlT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTourControl;
    static getRootAsKMLTourControl(bb: flatbuffers.ByteBuffer, obj?: KMLTourControl): KMLTourControl;
    static getSizePrefixedRootAsKMLTourControl(bb: flatbuffers.ByteBuffer, obj?: KMLTourControl): KMLTourControl;
    /**
     * Play mode (pause)
     */
    PLAY_MODE(): string | null;
    PLAY_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLTourControl(builder: flatbuffers.Builder): void;
    static addPlayMode(builder: flatbuffers.Builder, PLAY_MODEOffset: flatbuffers.Offset): void;
    static endKMLTourControl(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLTourControl(builder: flatbuffers.Builder, PLAY_MODEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLTourControlT;
    unpackTo(_o: KMLTourControlT): void;
}
export declare class KMLTourControlT implements flatbuffers.IGeneratedObject {
    PLAY_MODE: string | Uint8Array | null;
    constructor(PLAY_MODE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTourControl.d.ts.map