import * as flatbuffers from 'flatbuffers';
import { VSTCameraRotation, VSTCameraRotationT } from './VSTCameraRotation.js';
import { viewerCameraFrameMode } from './viewerCameraFrameMode.js';
import { viewerSatelliteAlignmentMode } from './viewerSatelliteAlignmentMode.js';
/**
 * Camera options for a space-domain scenario viewer.
 */
export declare class VSTCameraOptions implements flatbuffers.IUnpackableObject<VSTCameraOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VSTCameraOptions;
    static getRootAsVSTCameraOptions(bb: flatbuffers.ByteBuffer, obj?: VSTCameraOptions): VSTCameraOptions;
    static getSizePrefixedRootAsVSTCameraOptions(bb: flatbuffers.ByteBuffer, obj?: VSTCameraOptions): VSTCameraOptions;
    /**
     * Camera frame relative to the focused target or default scene.
     */
    CAMERA_FRAME_MODE(): viewerCameraFrameMode;
    /**
     * Satellite body alignment mode when focused on a satellite.
     */
    SATELLITE_ALIGNMENT(): viewerSatelliteAlignmentMode;
    /**
     * Camera distance from the current target in kilometers.
     */
    DISTANCE_FROM_TARGET_KM(): number;
    /**
     * Camera orientation offset.
     */
    ROTATION(obj?: VSTCameraRotation): VSTCameraRotation | null;
    static startVSTCameraOptions(builder: flatbuffers.Builder): void;
    static addCameraFrameMode(builder: flatbuffers.Builder, CAMERA_FRAME_MODE: viewerCameraFrameMode): void;
    static addSatelliteAlignment(builder: flatbuffers.Builder, SATELLITE_ALIGNMENT: viewerSatelliteAlignmentMode): void;
    static addDistanceFromTargetKm(builder: flatbuffers.Builder, DISTANCE_FROM_TARGET_KM: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATIONOffset: flatbuffers.Offset): void;
    static endVSTCameraOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VSTCameraOptionsT;
    unpackTo(_o: VSTCameraOptionsT): void;
}
export declare class VSTCameraOptionsT implements flatbuffers.IGeneratedObject {
    CAMERA_FRAME_MODE: viewerCameraFrameMode;
    SATELLITE_ALIGNMENT: viewerSatelliteAlignmentMode;
    DISTANCE_FROM_TARGET_KM: number;
    ROTATION: VSTCameraRotationT | null;
    constructor(CAMERA_FRAME_MODE?: viewerCameraFrameMode, SATELLITE_ALIGNMENT?: viewerSatelliteAlignmentMode, DISTANCE_FROM_TARGET_KM?: number, ROTATION?: VSTCameraRotationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VSTCameraOptions.d.ts.map