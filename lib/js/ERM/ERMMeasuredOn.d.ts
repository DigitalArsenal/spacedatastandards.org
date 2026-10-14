import * as flatbuffers from 'flatbuffers';
/**
 * Where a model was measured.
 */
export declare class ERMMeasuredOn implements flatbuffers.IUnpackableObject<ERMMeasuredOnT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMMeasuredOn;
    static getRootAsERMMeasuredOn(bb: flatbuffers.ByteBuffer, obj?: ERMMeasuredOn): ERMMeasuredOn;
    static getSizePrefixedRootAsERMMeasuredOn(bb: flatbuffers.ByteBuffer, obj?: ERMMeasuredOn): ERMMeasuredOn;
    /**
     * Lineages of the reference data.
     */
    LINEAGES(index: number): string;
    LINEAGES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    lineagesLength(): number;
    /**
     * ISO 8601 interval start/end.
     */
    WINDOW(): string | null;
    WINDOW(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EVIDENCE(): string | null;
    EVIDENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMMeasuredOn(builder: flatbuffers.Builder): void;
    static addLineages(builder: flatbuffers.Builder, LINEAGESOffset: flatbuffers.Offset): void;
    static createLineagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLineagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindow(builder: flatbuffers.Builder, WINDOWOffset: flatbuffers.Offset): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addEvidence(builder: flatbuffers.Builder, EVIDENCEOffset: flatbuffers.Offset): void;
    static endERMMeasuredOn(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMMeasuredOn(builder: flatbuffers.Builder, LINEAGESOffset: flatbuffers.Offset, WINDOWOffset: flatbuffers.Offset, RULEOffset: flatbuffers.Offset, EVIDENCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMMeasuredOnT;
    unpackTo(_o: ERMMeasuredOnT): void;
}
export declare class ERMMeasuredOnT implements flatbuffers.IGeneratedObject {
    LINEAGES: (string)[];
    WINDOW: string | Uint8Array | null;
    RULE: string | Uint8Array | null;
    EVIDENCE: string | Uint8Array | null;
    constructor(LINEAGES?: (string)[], WINDOW?: string | Uint8Array | null, RULE?: string | Uint8Array | null, EVIDENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMMeasuredOn.d.ts.map