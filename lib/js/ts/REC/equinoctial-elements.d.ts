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
    af(): number;
    ag(): number;
    l(): number;
    n(): number;
    chi(): number;
    psi(): number;
    static startequinoctialElements(builder: flatbuffers.Builder): void;
    static addAf(builder: flatbuffers.Builder, af: number): void;
    static addAg(builder: flatbuffers.Builder, ag: number): void;
    static addL(builder: flatbuffers.Builder, l: number): void;
    static addN(builder: flatbuffers.Builder, n: number): void;
    static addChi(builder: flatbuffers.Builder, chi: number): void;
    static addPsi(builder: flatbuffers.Builder, psi: number): void;
    static endequinoctialElements(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createequinoctialElements(builder: flatbuffers.Builder, af: number, ag: number, l: number, n: number, chi: number, psi: number): flatbuffers.Offset;
    unpack(): equinoctialElementsT;
    unpackTo(_o: equinoctialElementsT): void;
}
export declare class equinoctialElementsT implements flatbuffers.IGeneratedObject {
    af: number;
    ag: number;
    l: number;
    n: number;
    chi: number;
    psi: number;
    constructor(af?: number, ag?: number, l?: number, n?: number, chi?: number, psi?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=equinoctial-elements.d.ts.map