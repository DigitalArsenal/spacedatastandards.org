import * as flatbuffers from 'flatbuffers';
import { KMLCamera, KMLCameraT } from './KMLCamera.js';
import { KMLFlyToMode } from './KMLFlyToMode.js';
import { KMLLookAt, KMLLookAtT } from './KMLLookAt.js';
/**
 * gx:FlyTo tour primitive
 */
export declare class KMLFlyTo implements flatbuffers.IUnpackableObject<KMLFlyToT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLFlyTo;
    static getRootAsKMLFlyTo(bb: flatbuffers.ByteBuffer, obj?: KMLFlyTo): KMLFlyTo;
    static getSizePrefixedRootAsKMLFlyTo(bb: flatbuffers.ByteBuffer, obj?: KMLFlyTo): KMLFlyTo;
    /**
     * Duration in seconds
     */
    DURATION(): number;
    /**
     * Fly-to mode
     */
    FLY_TO_MODE(): KMLFlyToMode;
    /**
     * LookAt viewpoint
     */
    LOOK_AT(obj?: KMLLookAt): KMLLookAt | null;
    /**
     * Camera viewpoint
     */
    CAMERA(obj?: KMLCamera): KMLCamera | null;
    static startKMLFlyTo(builder: flatbuffers.Builder): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addFlyToMode(builder: flatbuffers.Builder, FLY_TO_MODE: KMLFlyToMode): void;
    static addLookAt(builder: flatbuffers.Builder, LOOK_ATOffset: flatbuffers.Offset): void;
    static addCamera(builder: flatbuffers.Builder, CAMERAOffset: flatbuffers.Offset): void;
    static endKMLFlyTo(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLFlyToT;
    unpackTo(_o: KMLFlyToT): void;
}
export declare class KMLFlyToT implements flatbuffers.IGeneratedObject {
    DURATION: number;
    FLY_TO_MODE: KMLFlyToMode;
    LOOK_AT: KMLLookAtT | null;
    CAMERA: KMLCameraT | null;
    constructor(DURATION?: number, FLY_TO_MODE?: KMLFlyToMode, LOOK_AT?: KMLLookAtT | null, CAMERA?: KMLCameraT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLFlyTo.d.ts.map