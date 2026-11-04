import * as flatbuffers from 'flatbuffers';
/**
 * One UTC day of JB2008 drivers, as Space Environment Technologies publishes
 * them (SOLFSMY.TXT and DTCFILE.TXT): solar indices in SFU with their
 * 81-day centred averages, reported at 12 UT of DATE, and the hourly
 * Dst-derived exospheric temperature change. A provider applies the model's
 * own lags (1 day for F10 and S10, 2 for M10, 5 for Y10) by reading earlier
 * rows, and states how it interpolates between them.
 */
export declare class PRWJB2008Indices implements flatbuffers.IUnpackableObject<PRWJB2008IndicesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWJB2008Indices;
    static getRootAsPRWJB2008Indices(bb: flatbuffers.ByteBuffer, obj?: PRWJB2008Indices): PRWJB2008Indices;
    static getSizePrefixedRootAsPRWJB2008Indices(bb: flatbuffers.ByteBuffer, obj?: PRWJB2008Indices): PRWJB2008Indices;
    /**
     * ISO 8601 calendar date (UTC) the row's values apply to.
     */
    DATE(): string;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    F10(): number;
    F10_CENTRED_81(): number;
    S10(): number;
    S10_CENTRED_81(): number;
    M10(): number;
    M10_CENTRED_81(): number;
    Y10(): number;
    Y10_CENTRED_81(): number;
    /**
     * Exospheric temperature change from Dst (K), hours 00 through 23 UTC.
     */
    DTC_HOURLY_K(index: number): number | null;
    dtcHourlyKLength(): number;
    dtcHourlyKArray(): Float64Array | null;
    /**
     * Source flags as published (SOLFSMY Ssrc), e.g. "4B".
     */
    SOURCE_FLAGS(): string | null;
    SOURCE_FLAGS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWJB2008Indices(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addF10(builder: flatbuffers.Builder, F10: number): void;
    static addF10Centred81(builder: flatbuffers.Builder, F10_CENTRED_81: number): void;
    static addS10(builder: flatbuffers.Builder, S10: number): void;
    static addS10Centred81(builder: flatbuffers.Builder, S10_CENTRED_81: number): void;
    static addM10(builder: flatbuffers.Builder, M10: number): void;
    static addM10Centred81(builder: flatbuffers.Builder, M10_CENTRED_81: number): void;
    static addY10(builder: flatbuffers.Builder, Y10: number): void;
    static addY10Centred81(builder: flatbuffers.Builder, Y10_CENTRED_81: number): void;
    static addDtcHourlyK(builder: flatbuffers.Builder, DTC_HOURLY_KOffset: flatbuffers.Offset): void;
    static createDtcHourlyKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDtcHourlyKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDtcHourlyKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourceFlags(builder: flatbuffers.Builder, SOURCE_FLAGSOffset: flatbuffers.Offset): void;
    static endPRWJB2008Indices(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWJB2008Indices(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset, F10: number, F10_CENTRED_81: number, S10: number, S10_CENTRED_81: number, M10: number, M10_CENTRED_81: number, Y10: number, Y10_CENTRED_81: number, DTC_HOURLY_KOffset: flatbuffers.Offset, SOURCE_FLAGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWJB2008IndicesT;
    unpackTo(_o: PRWJB2008IndicesT): void;
}
export declare class PRWJB2008IndicesT implements flatbuffers.IGeneratedObject {
    DATE: string | Uint8Array | null;
    F10: number;
    F10_CENTRED_81: number;
    S10: number;
    S10_CENTRED_81: number;
    M10: number;
    M10_CENTRED_81: number;
    Y10: number;
    Y10_CENTRED_81: number;
    DTC_HOURLY_K: (number)[];
    SOURCE_FLAGS: string | Uint8Array | null;
    constructor(DATE?: string | Uint8Array | null, F10?: number, F10_CENTRED_81?: number, S10?: number, S10_CENTRED_81?: number, M10?: number, M10_CENTRED_81?: number, Y10?: number, Y10_CENTRED_81?: number, DTC_HOURLY_K?: (number)[], SOURCE_FLAGS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWJB2008Indices.d.ts.map