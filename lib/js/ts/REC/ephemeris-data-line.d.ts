import * as flatbuffers from 'flatbuffers';
/**
 * A single ephemeris data line
 */
export declare class ephemerisDataLine implements flatbuffers.IUnpackableObject<ephemerisDataLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ephemerisDataLine;
    static getRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    static getSizePrefixedRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    /**
     * Epoch time, in ISO 8601 UTC format
     */
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position vector X-component km
     */
    x(): number;
    /**
     * Position vector Y-component km
     */
    y(): number;
    /**
     * Position vector Z-component km
     */
    z(): number;
    /**
     * Velocity vector X-component km/s
     */
    xDot(): number;
    /**
     * Velocity vector Y-component km/s
     */
    yDot(): number;
    /**
     * Velocity vector Z-component km/s
     */
    zDot(): number;
    /**
     * Optional: Acceleration vector X-component km/s/s
     */
    xDdot(): number;
    /**
     * Optional: Acceleration vector Y-component km/s/s
     */
    yDdot(): number;
    /**
     * Optional: Acceleration vector Z-component km/s/s
     */
    zDdot(): number;
    static startephemerisDataLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, x: number): void;
    static addY(builder: flatbuffers.Builder, y: number): void;
    static addZ(builder: flatbuffers.Builder, z: number): void;
    static addXDot(builder: flatbuffers.Builder, xDot: number): void;
    static addYDot(builder: flatbuffers.Builder, yDot: number): void;
    static addZDot(builder: flatbuffers.Builder, zDot: number): void;
    static addXDdot(builder: flatbuffers.Builder, xDdot: number): void;
    static addYDdot(builder: flatbuffers.Builder, yDdot: number): void;
    static addZDdot(builder: flatbuffers.Builder, zDdot: number): void;
    static endephemerisDataLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createephemerisDataLine(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset, x: number, y: number, z: number, xDot: number, yDot: number, zDot: number, xDdot: number, yDdot: number, zDdot: number): flatbuffers.Offset;
    unpack(): ephemerisDataLineT;
    unpackTo(_o: ephemerisDataLineT): void;
}
export declare class ephemerisDataLineT implements flatbuffers.IGeneratedObject {
    epoch: string | Uint8Array | null;
    x: number;
    y: number;
    z: number;
    xDot: number;
    yDot: number;
    zDot: number;
    xDdot: number;
    yDdot: number;
    zDdot: number;
    constructor(epoch?: string | Uint8Array | null, x?: number, y?: number, z?: number, xDot?: number, yDot?: number, zDot?: number, xDdot?: number, yDdot?: number, zDdot?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemeris-data-line.d.ts.map