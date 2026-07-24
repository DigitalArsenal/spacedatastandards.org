import * as flatbuffers from 'flatbuffers';
/**
 * Time interval for time-dynamic properties
 */
export declare class CZMInterval implements flatbuffers.IUnpackableObject<CZMIntervalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMInterval;
    static getRootAsCZMInterval(bb: flatbuffers.ByteBuffer, obj?: CZMInterval): CZMInterval;
    static getSizePrefixedRootAsCZMInterval(bb: flatbuffers.ByteBuffer, obj?: CZMInterval): CZMInterval;
    /**
     * ISO 8601 interval string (e.g. "2012-03-15T10:00:00Z/2012-03-16T10:00:00Z")
     */
    INTERVAL(): string | null;
    INTERVAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCZMInterval(builder: flatbuffers.Builder): void;
    static addInterval(builder: flatbuffers.Builder, INTERVALOffset: flatbuffers.Offset): void;
    static endCZMInterval(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMInterval(builder: flatbuffers.Builder, INTERVALOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CZMIntervalT;
    unpackTo(_o: CZMIntervalT): void;
}
export declare class CZMIntervalT implements flatbuffers.IGeneratedObject {
    INTERVAL: string | Uint8Array | null;
    constructor(INTERVAL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMInterval.d.ts.map