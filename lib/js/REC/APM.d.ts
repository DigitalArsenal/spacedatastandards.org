import * as flatbuffers from 'flatbuffers';
/**
 * Attitude Parameter Message
 */
export declare class APM implements flatbuffers.IUnpackableObject<APMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APM;
    static getRootAsAPM(bb: flatbuffers.ByteBuffer, obj?: APM): APM;
    static getSizePrefixedRootAsAPM(bb: flatbuffers.ByteBuffer, obj?: APM): APM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_APM_VERS(): string | null;
    CCSDS_APM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    Q1(): number;
    Q2(): number;
    Q3(): number;
    QC(): number;
    static startAPM(builder: flatbuffers.Builder): void;
    static addCcsdsApmVers(builder: flatbuffers.Builder, CCSDS_APM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static endAPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAPM(builder: flatbuffers.Builder, CCSDS_APM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number): flatbuffers.Offset;
    unpack(): APMT;
    unpackTo(_o: APMT): void;
}
export declare class APMT implements flatbuffers.IGeneratedObject {
    CCSDS_APM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    constructor(CCSDS_APM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APM.d.ts.map