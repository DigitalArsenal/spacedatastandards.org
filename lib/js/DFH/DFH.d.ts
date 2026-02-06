import * as flatbuffers from 'flatbuffers';
import { driftRecord, driftRecordT } from './driftRecord.js';
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
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite number
     */
    SAT_NO(): number;
    /**
     * Object designator
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object common name
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * History start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * History end time (ISO 8601)
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Current effective until date (ISO 8601)
     */
    EFFECTIVE_UNTIL(): string | null;
    EFFECTIVE_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Current drift rate in degrees/day
     */
    DRIFT_RATE(): number;
    /**
     * Current mean longitude in degrees East
     */
    MEAN_LONGITUDE(): number;
    /**
     * Longitude slot center in degrees East (if station-keeping)
     */
    SLOT_CENTER(): number;
    /**
     * Longitude slot half-width in degrees
     */
    SLOT_HALF_WIDTH(): number;
    /**
     * Whether object is actively station-keeping
     */
    STATION_KEEPING(): boolean;
    /**
     * Historical drift records
     */
    RECORDS(index: number, obj?: driftRecord): driftRecord | null;
    recordsLength(): number;
    /**
     * Number of records in history
     */
    NUM_RECORDS(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDFH(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addEffectiveUntil(builder: flatbuffers.Builder, EFFECTIVE_UNTILOffset: flatbuffers.Offset): void;
    static addDriftRate(builder: flatbuffers.Builder, DRIFT_RATE: number): void;
    static addMeanLongitude(builder: flatbuffers.Builder, MEAN_LONGITUDE: number): void;
    static addSlotCenter(builder: flatbuffers.Builder, SLOT_CENTER: number): void;
    static addSlotHalfWidth(builder: flatbuffers.Builder, SLOT_HALF_WIDTH: number): void;
    static addStationKeeping(builder: flatbuffers.Builder, STATION_KEEPING: boolean): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNumRecords(builder: flatbuffers.Builder, NUM_RECORDS: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endDFH(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDFHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDFHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDFH(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, OBJECT_DESIGNATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, EFFECTIVE_UNTILOffset: flatbuffers.Offset, DRIFT_RATE: number, MEAN_LONGITUDE: number, SLOT_CENTER: number, SLOT_HALF_WIDTH: number, STATION_KEEPING: boolean, RECORDSOffset: flatbuffers.Offset, NUM_RECORDS: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DFHT;
    unpackTo(_o: DFHT): void;
}
export declare class DFHT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    EFFECTIVE_UNTIL: string | Uint8Array | null;
    DRIFT_RATE: number;
    MEAN_LONGITUDE: number;
    SLOT_CENTER: number;
    SLOT_HALF_WIDTH: number;
    STATION_KEEPING: boolean;
    RECORDS: (driftRecordT)[];
    NUM_RECORDS: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, OBJECT_DESIGNATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, EFFECTIVE_UNTIL?: string | Uint8Array | null, DRIFT_RATE?: number, MEAN_LONGITUDE?: number, SLOT_CENTER?: number, SLOT_HALF_WIDTH?: number, STATION_KEEPING?: boolean, RECORDS?: (driftRecordT)[], NUM_RECORDS?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DFH.d.ts.map