import * as flatbuffers from 'flatbuffers';
export declare class AEMAttitudeEntry implements flatbuffers.IUnpackableObject<AEMAttitudeEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AEMAttitudeEntry;
    static getRootAsAEMAttitudeEntry(bb: flatbuffers.ByteBuffer, obj?: AEMAttitudeEntry): AEMAttitudeEntry;
    static getSizePrefixedRootAsAEMAttitudeEntry(bb: flatbuffers.ByteBuffer, obj?: AEMAttitudeEntry): AEMAttitudeEntry;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    Q1(): number;
    Q2(): number;
    Q3(): number;
    QC(): number;
    RATE_X(): number;
    RATE_Y(): number;
    RATE_Z(): number;
    static startAEMAttitudeEntry(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addRateX(builder: flatbuffers.Builder, RATE_X: number): void;
    static addRateY(builder: flatbuffers.Builder, RATE_Y: number): void;
    static addRateZ(builder: flatbuffers.Builder, RATE_Z: number): void;
    static endAEMAttitudeEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAEMAttitudeEntry(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number, RATE_X: number, RATE_Y: number, RATE_Z: number): flatbuffers.Offset;
    unpack(): AEMAttitudeEntryT;
    unpackTo(_o: AEMAttitudeEntryT): void;
}
export declare class AEMAttitudeEntryT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    RATE_X: number;
    RATE_Y: number;
    RATE_Z: number;
    constructor(EPOCH?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number, RATE_X?: number, RATE_Y?: number, RATE_Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AEMAttitudeEntry.d.ts.map