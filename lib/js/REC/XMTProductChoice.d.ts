import * as flatbuffers from 'flatbuffers';
import { XMTProductCandidate, XMTProductCandidateT } from './XMTProductCandidate.js';
import { XMTProductSelection, XMTProductSelectionT } from './XMTProductSelection.js';
/**
 * The choice for one product kind of one object.
 */
export declare class XMTProductChoice implements flatbuffers.IUnpackableObject<XMTProductChoiceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTProductChoice;
    static getRootAsXMTProductChoice(bb: flatbuffers.ByteBuffer, obj?: XMTProductChoice): XMTProductChoice;
    static getSizePrefixedRootAsXMTProductChoice(bb: flatbuffers.ByteBuffer, obj?: XMTProductChoice): XMTProductChoice;
    /**
     * Product kind, e.g. "sgp4", "sgp4xp".
     */
    PRODUCT(): string | null;
    PRODUCT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CANDIDATES(index: number, obj?: XMTProductCandidate): XMTProductCandidate | null;
    candidatesLength(): number;
    /**
     * Absent when no candidate was eligible (the kind is stale).
     */
    SELECTED(obj?: XMTProductSelection): XMTProductSelection | null;
    static startXMTProductChoice(builder: flatbuffers.Builder): void;
    static addProduct(builder: flatbuffers.Builder, PRODUCTOffset: flatbuffers.Offset): void;
    static addCandidates(builder: flatbuffers.Builder, CANDIDATESOffset: flatbuffers.Offset): void;
    static createCandidatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCandidatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSelected(builder: flatbuffers.Builder, SELECTEDOffset: flatbuffers.Offset): void;
    static endXMTProductChoice(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTProductChoiceT;
    unpackTo(_o: XMTProductChoiceT): void;
}
export declare class XMTProductChoiceT implements flatbuffers.IGeneratedObject {
    PRODUCT: string | Uint8Array | null;
    CANDIDATES: (XMTProductCandidateT)[];
    SELECTED: XMTProductSelectionT | null;
    constructor(PRODUCT?: string | Uint8Array | null, CANDIDATES?: (XMTProductCandidateT)[], SELECTED?: XMTProductSelectionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTProductChoice.d.ts.map