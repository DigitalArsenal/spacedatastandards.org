import * as flatbuffers from 'flatbuffers';
/**
 * Result of a single SDF point-in-volume query (24 bytes, 8-byte aligned).
 */
export declare class sdfResult implements flatbuffers.IUnpackableObject<sdfResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sdfResult;
    /**
     * Entity identifier.
     */
    ENTITY_ID(): number;
    /**
     * Detection flag (1 == inside, 0 == outside).
     */
    DETECTED(): number;
    /**
     * Signed distance (negative inside, zero on boundary, positive outside).
     */
    SIGNED_DISTANCE(): number;
    /**
     * Distance to the closest boundary point (always positive).
     */
    CLOSEST_DISTANCE(): number;
    static sizeOf(): number;
    static createsdfResult(builder: flatbuffers.Builder, ENTITY_ID: number, DETECTED: number, SIGNED_DISTANCE: number, CLOSEST_DISTANCE: number): flatbuffers.Offset;
    unpack(): sdfResultT;
    unpackTo(_o: sdfResultT): void;
}
export declare class sdfResultT implements flatbuffers.IGeneratedObject {
    ENTITY_ID: number;
    DETECTED: number;
    SIGNED_DISTANCE: number;
    CLOSEST_DISTANCE: number;
    constructor(ENTITY_ID?: number, DETECTED?: number, SIGNED_DISTANCE?: number, CLOSEST_DISTANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sdfResult.d.ts.map