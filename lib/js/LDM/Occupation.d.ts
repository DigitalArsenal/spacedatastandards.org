import * as flatbuffers from 'flatbuffers';
/**
 * Information about a person's occupation
 */
export declare class Occupation implements flatbuffers.IUnpackableObject<OccupationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Occupation;
    static getRootAsOccupation(bb: flatbuffers.ByteBuffer, obj?: Occupation): Occupation;
    static getSizePrefixedRootAsOccupation(bb: flatbuffers.ByteBuffer, obj?: Occupation): Occupation;
    /**
     * Name of the occupation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOccupation(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static endOccupation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOccupation(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OccupationT;
    unpackTo(_o: OccupationT): void;
}
export declare class OccupationT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Occupation.d.ts.map