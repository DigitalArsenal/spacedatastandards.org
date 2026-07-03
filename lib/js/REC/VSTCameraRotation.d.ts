import * as flatbuffers from 'flatbuffers';
/**
 * Camera rotation offset. Quaternions are preferred when present; Euler
 * angles are retained for import of older scenario JSON.
 */
export declare class VSTCameraRotation implements flatbuffers.IUnpackableObject<VSTCameraRotationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VSTCameraRotation;
    static getRootAsVSTCameraRotation(bb: flatbuffers.ByteBuffer, obj?: VSTCameraRotation): VSTCameraRotation;
    static getSizePrefixedRootAsVSTCameraRotation(bb: flatbuffers.ByteBuffer, obj?: VSTCameraRotation): VSTCameraRotation;
    /**
     * Yaw angle in degrees for Euler-angle camera imports.
     */
    YAW_DEG(): number;
    /**
     * Pitch angle in degrees for Euler-angle camera imports.
     */
    PITCH_DEG(): number;
    /**
     * Roll angle in degrees for Euler-angle camera imports.
     */
    ROLL_DEG(): number;
    /**
     * Quaternion x component for camera orientation.
     */
    QUATERNION_X(): number;
    /**
     * Quaternion y component for camera orientation.
     */
    QUATERNION_Y(): number;
    /**
     * Quaternion z component for camera orientation.
     */
    QUATERNION_Z(): number;
    /**
     * Quaternion w component for camera orientation.
     */
    QUATERNION_W(): number;
    /**
     * True when quaternion fields define the authoritative rotation.
     */
    USES_QUATERNION(): boolean;
    static startVSTCameraRotation(builder: flatbuffers.Builder): void;
    static addYawDeg(builder: flatbuffers.Builder, YAW_DEG: number): void;
    static addPitchDeg(builder: flatbuffers.Builder, PITCH_DEG: number): void;
    static addRollDeg(builder: flatbuffers.Builder, ROLL_DEG: number): void;
    static addQuaternionX(builder: flatbuffers.Builder, QUATERNION_X: number): void;
    static addQuaternionY(builder: flatbuffers.Builder, QUATERNION_Y: number): void;
    static addQuaternionZ(builder: flatbuffers.Builder, QUATERNION_Z: number): void;
    static addQuaternionW(builder: flatbuffers.Builder, QUATERNION_W: number): void;
    static addUsesQuaternion(builder: flatbuffers.Builder, USES_QUATERNION: boolean): void;
    static endVSTCameraRotation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVSTCameraRotation(builder: flatbuffers.Builder, YAW_DEG: number, PITCH_DEG: number, ROLL_DEG: number, QUATERNION_X: number, QUATERNION_Y: number, QUATERNION_Z: number, QUATERNION_W: number, USES_QUATERNION: boolean): flatbuffers.Offset;
    unpack(): VSTCameraRotationT;
    unpackTo(_o: VSTCameraRotationT): void;
}
export declare class VSTCameraRotationT implements flatbuffers.IGeneratedObject {
    YAW_DEG: number;
    PITCH_DEG: number;
    ROLL_DEG: number;
    QUATERNION_X: number;
    QUATERNION_Y: number;
    QUATERNION_Z: number;
    QUATERNION_W: number;
    USES_QUATERNION: boolean;
    constructor(YAW_DEG?: number, PITCH_DEG?: number, ROLL_DEG?: number, QUATERNION_X?: number, QUATERNION_Y?: number, QUATERNION_Z?: number, QUATERNION_W?: number, USES_QUATERNION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VSTCameraRotation.d.ts.map