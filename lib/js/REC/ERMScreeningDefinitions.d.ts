import * as flatbuffers from 'flatbuffers';
/**
 * Definitions of the terms of a screening report (human-readable).
 */
export declare class ERMScreeningDefinitions implements flatbuffers.IUnpackableObject<ERMScreeningDefinitionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningDefinitions;
    static getRootAsERMScreeningDefinitions(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningDefinitions): ERMScreeningDefinitions;
    static getSizePrefixedRootAsERMScreeningDefinitions(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningDefinitions): ERMScreeningDefinitions;
    CASES(): string | null;
    CASES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLLISION(): string | null;
    COLLISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROBABILISTIC(): string | null;
    PROBABILISTIC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BOUNDED_SET(): string | null;
    BOUNDED_SET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSSIBILITY(): string | null;
    POSSIBILITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MISSED_COLLISION(): string | null;
    MISSED_COLLISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FALSE_ALERT(): string | null;
    FALSE_ALERT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMScreeningDefinitions(builder: flatbuffers.Builder): void;
    static addCases(builder: flatbuffers.Builder, CASESOffset: flatbuffers.Offset): void;
    static addCollision(builder: flatbuffers.Builder, COLLISIONOffset: flatbuffers.Offset): void;
    static addProbabilistic(builder: flatbuffers.Builder, PROBABILISTICOffset: flatbuffers.Offset): void;
    static addBoundedSet(builder: flatbuffers.Builder, BOUNDED_SETOffset: flatbuffers.Offset): void;
    static addPossibility(builder: flatbuffers.Builder, POSSIBILITYOffset: flatbuffers.Offset): void;
    static addMissedCollision(builder: flatbuffers.Builder, MISSED_COLLISIONOffset: flatbuffers.Offset): void;
    static addFalseAlert(builder: flatbuffers.Builder, FALSE_ALERTOffset: flatbuffers.Offset): void;
    static endERMScreeningDefinitions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningDefinitions(builder: flatbuffers.Builder, CASESOffset: flatbuffers.Offset, COLLISIONOffset: flatbuffers.Offset, PROBABILISTICOffset: flatbuffers.Offset, BOUNDED_SETOffset: flatbuffers.Offset, POSSIBILITYOffset: flatbuffers.Offset, MISSED_COLLISIONOffset: flatbuffers.Offset, FALSE_ALERTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMScreeningDefinitionsT;
    unpackTo(_o: ERMScreeningDefinitionsT): void;
}
export declare class ERMScreeningDefinitionsT implements flatbuffers.IGeneratedObject {
    CASES: string | Uint8Array | null;
    COLLISION: string | Uint8Array | null;
    PROBABILISTIC: string | Uint8Array | null;
    BOUNDED_SET: string | Uint8Array | null;
    POSSIBILITY: string | Uint8Array | null;
    MISSED_COLLISION: string | Uint8Array | null;
    FALSE_ALERT: string | Uint8Array | null;
    constructor(CASES?: string | Uint8Array | null, COLLISION?: string | Uint8Array | null, PROBABILISTIC?: string | Uint8Array | null, BOUNDED_SET?: string | Uint8Array | null, POSSIBILITY?: string | Uint8Array | null, MISSED_COLLISION?: string | Uint8Array | null, FALSE_ALERT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningDefinitions.d.ts.map