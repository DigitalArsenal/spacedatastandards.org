import * as flatbuffers from 'flatbuffers';
/**
 * A star detected by a camera: a direction in the camera frame.
 */
export declare class SKQDetection implements flatbuffers.IUnpackableObject<SKQDetectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKQDetection;
    /**
     * Direction in the camera frame; any non-zero length.
     */
    X(): number;
    Y(): number;
    Z(): number;
    /**
     * Relative brightness; larger is brighter. Orders the detections.
     */
    BRIGHTNESS(): number;
    RESERVED(): number;
    static sizeOf(): number;
    static createSKQDetection(builder: flatbuffers.Builder, X: number, Y: number, Z: number, BRIGHTNESS: number, RESERVED: number): flatbuffers.Offset;
    unpack(): SKQDetectionT;
    unpackTo(_o: SKQDetectionT): void;
}
export declare class SKQDetectionT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    BRIGHTNESS: number;
    RESERVED: number;
    constructor(X?: number, Y?: number, Z?: number, BRIGHTNESS?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKQDetection.d.ts.map