import * as flatbuffers from 'flatbuffers';
/**
 * GEO Drift History
 */
export declare class DFH implements flatbuffers.IUnpackableObject<DFHT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DFH;
    static getRootAsDFH(bb: flatbuffers.ByteBuffer, obj?: DFH): DFH;
    static getSizePrefixedRootAsDFH(bb: flatbuffers.ByteBuffer, obj?: DFH): DFH;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EFFECTIVE_UNTIL(): string | null;
    EFFECTIVE_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DRIFT_RATE(): number;
    static startDFH(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addEffectiveUntil(builder: flatbuffers.Builder, EFFECTIVE_UNTILOffset: flatbuffers.Offset): void;
    static addDriftRate(builder: flatbuffers.Builder, DRIFT_RATE: number): void;
    static endDFH(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDFHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDFHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDFH(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, EFFECTIVE_UNTILOffset: flatbuffers.Offset, DRIFT_RATE: number): flatbuffers.Offset;
    unpack(): DFHT;
    unpackTo(_o: DFHT): void;
}
export declare class DFHT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    EFFECTIVE_UNTIL: string | Uint8Array | null;
    DRIFT_RATE: number;
    constructor(ID?: string | Uint8Array | null, EFFECTIVE_UNTIL?: string | Uint8Array | null, DRIFT_RATE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DFH.d.ts.map