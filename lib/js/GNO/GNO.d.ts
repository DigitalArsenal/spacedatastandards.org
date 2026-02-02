import * as flatbuffers from 'flatbuffers';
/**
 * GNSS Observation
 */
export declare class GNO implements flatbuffers.IUnpackableObject<GNOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNO;
    static getRootAsGNO(bb: flatbuffers.ByteBuffer, obj?: GNO): GNO;
    static getSizePrefixedRootAsGNO(bb: flatbuffers.ByteBuffer, obj?: GNO): GNO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    GNSS_SAT_ID(): string | null;
    GNSS_SAT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACKING_STATUS(): number;
    AGC_STATE(): number;
    OBS_CODE_SET(index: number): string;
    OBS_CODE_SET(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    obsCodeSetLength(): number;
    OB(index: number): string;
    OB(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    obLength(): number;
    static startGNO(builder: flatbuffers.Builder): void;
    static addGnssSatId(builder: flatbuffers.Builder, GNSS_SAT_IDOffset: flatbuffers.Offset): void;
    static addTrackingStatus(builder: flatbuffers.Builder, TRACKING_STATUS: number): void;
    static addAgcState(builder: flatbuffers.Builder, AGC_STATE: number): void;
    static addObsCodeSet(builder: flatbuffers.Builder, OBS_CODE_SETOffset: flatbuffers.Offset): void;
    static createObsCodeSetVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObsCodeSetVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOb(builder: flatbuffers.Builder, OBOffset: flatbuffers.Offset): void;
    static createObVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGNO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGNO(builder: flatbuffers.Builder, GNSS_SAT_IDOffset: flatbuffers.Offset, TRACKING_STATUS: number, AGC_STATE: number, OBS_CODE_SETOffset: flatbuffers.Offset, OBOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GNOT;
    unpackTo(_o: GNOT): void;
}
export declare class GNOT implements flatbuffers.IGeneratedObject {
    GNSS_SAT_ID: string | Uint8Array | null;
    TRACKING_STATUS: number;
    AGC_STATE: number;
    OBS_CODE_SET: (string)[];
    OB: (string)[];
    constructor(GNSS_SAT_ID?: string | Uint8Array | null, TRACKING_STATUS?: number, AGC_STATE?: number, OBS_CODE_SET?: (string)[], OB?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNO.d.ts.map