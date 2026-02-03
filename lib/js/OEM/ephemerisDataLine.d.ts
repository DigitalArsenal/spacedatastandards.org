import * as flatbuffers from 'flatbuffers';
/**
 * A single ephemeris data line (for non-uniform time steps only)
 * Use this format when time intervals between states are irregular.
 * For uniform time steps, use the compact EPHEMERIS_DATA array instead.
 */
export declare class ephemerisDataLine implements flatbuffers.IUnpackableObject<ephemerisDataLineT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ephemerisDataLine;
    static getRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    static getSizePrefixedRootAsephemerisDataLine(bb: flatbuffers.ByteBuffer, obj?: ephemerisDataLine): ephemerisDataLine;
    /**
     * Epoch time, in ISO 8601 UTC format (required for non-uniform steps)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position vector X-component km
     */
    X(): number;
    /**
     * Position vector Y-component km
     */
    Y(): number;
    /**
     * Position vector Z-component km
     */
    Z(): number;
    /**
     * Velocity vector X-component km/s
     */
    X_DOT(): number;
    /**
     * Velocity vector Y-component km/s
     */
    Y_DOT(): number;
    /**
     * Velocity vector Z-component km/s
     */
    Z_DOT(): number;
    /**
     * Optional: Acceleration vector X-component km/s²
     */
    X_DDOT(): number;
    /**
     * Optional: Acceleration vector Y-component km/s²
     */
    Y_DDOT(): number;
    /**
     * Optional: Acceleration vector Z-component km/s²
     */
    Z_DDOT(): number;
    static startephemerisDataLine(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static addXDdot(builder: flatbuffers.Builder, X_DDOT: number): void;
    static addYDdot(builder: flatbuffers.Builder, Y_DDOT: number): void;
    static addZDdot(builder: flatbuffers.Builder, Z_DDOT: number): void;
    static endephemerisDataLine(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createephemerisDataLine(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number, X_DDOT: number, Y_DDOT: number, Z_DDOT: number): flatbuffers.Offset;
    unpack(): ephemerisDataLineT;
    unpackTo(_o: ephemerisDataLineT): void;
}
export declare class ephemerisDataLineT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    X_DDOT: number;
    Y_DDOT: number;
    Z_DDOT: number;
    constructor(EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, X_DDOT?: number, Y_DDOT?: number, Z_DDOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ephemerisDataLine.d.ts.map