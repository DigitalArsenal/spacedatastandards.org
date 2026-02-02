import * as flatbuffers from 'flatbuffers';
/**
 * Antenna Beam
 */
export declare class BEM implements flatbuffers.IUnpackableObject<BEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BEM;
    static getRootAsBEM(bb: flatbuffers.ByteBuffer, obj?: BEM): BEM;
    static getSizePrefixedRootAsBEM(bb: flatbuffers.ByteBuffer, obj?: BEM): BEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BEAM_NAME(): string | null;
    BEAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BEAM_CONTOURS(index: number): string;
    BEAM_CONTOURS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    beamContoursLength(): number;
    static startBEM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addBeamName(builder: flatbuffers.Builder, BEAM_NAMEOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static addBeamContours(builder: flatbuffers.Builder, BEAM_CONTOURSOffset: flatbuffers.Offset): void;
    static createBeamContoursVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBeamContoursVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBEM(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, BEAM_NAMEOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset, BEAM_CONTOURSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BEMT;
    unpackTo(_o: BEMT): void;
}
export declare class BEMT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    BEAM_NAME: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    BEAM_CONTOURS: (string)[];
    constructor(ID?: string | Uint8Array | null, BEAM_NAME?: string | Uint8Array | null, NOTES?: string | Uint8Array | null, BEAM_CONTOURS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BEM.d.ts.map