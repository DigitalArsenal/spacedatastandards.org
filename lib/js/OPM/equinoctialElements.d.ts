import * as flatbuffers from 'flatbuffers';
/**
 * Equinoctial Elements
 */
export declare class equinoctialElements implements flatbuffers.IUnpackableObject<equinoctialElementsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): equinoctialElements;
    static getRootAsequinoctialElements(bb: flatbuffers.ByteBuffer, obj?: equinoctialElements): equinoctialElements;
    static getSizePrefixedRootAsequinoctialElements(bb: flatbuffers.ByteBuffer, obj?: equinoctialElements): equinoctialElements;
    AF(): number;
    AG(): number;
    L(): number;
    N(): number;
    CHI(): number;
    PSI(): number;
    static startequinoctialElements(builder: flatbuffers.Builder): void;
    static addAf(builder: flatbuffers.Builder, AF: number): void;
    static addAg(builder: flatbuffers.Builder, AG: number): void;
    static addL(builder: flatbuffers.Builder, L: number): void;
    static addN(builder: flatbuffers.Builder, N: number): void;
    static addChi(builder: flatbuffers.Builder, CHI: number): void;
    static addPsi(builder: flatbuffers.Builder, PSI: number): void;
    static endequinoctialElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createequinoctialElements(builder: flatbuffers.Builder, AF: number, AG: number, L: number, N: number, CHI: number, PSI: number): flatbuffers.Offset;
    unpack(): equinoctialElementsT;
    unpackTo(_o: equinoctialElementsT): void;
}
export declare class equinoctialElementsT implements flatbuffers.IGeneratedObject {
    AF: number;
    AG: number;
    L: number;
    N: number;
    CHI: number;
    PSI: number;
    constructor(AF?: number, AG?: number, L?: number, N?: number, CHI?: number, PSI?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=equinoctialElements.d.ts.map