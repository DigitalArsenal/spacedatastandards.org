import * as flatbuffers from 'flatbuffers';
import { PRWWindowRefusal, PRWWindowRefusalT } from './PRWWindowRefusal.js';
/**
 * Summary of the answers to a window request.
 */
export declare class PRWWindowReport implements flatbuffers.IUnpackableObject<PRWWindowReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWWindowReport;
    static getRootAsPRWWindowReport(bb: flatbuffers.ByteBuffer, obj?: PRWWindowReport): PRWWindowReport;
    static getSizePrefixedRootAsPRWWindowReport(bb: flatbuffers.ByteBuffer, obj?: PRWWindowReport): PRWWindowReport;
    /**
     * Queries received, answered and refused.
     */
    QUERIES(): number;
    ANSWERED(): number;
    REFUSED(): number;
    /**
     * Source records received.
     */
    SOURCE_RECORDS(): number;
    REFUSALS(index: number, obj?: PRWWindowRefusal): PRWWindowRefusal | null;
    refusalsLength(): number;
    /**
     * The propagator and its configuration, e.g. "SGP4, Vallado, WGS-72,
     * opsmode i; TEME, UTC, km and km/s".
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWWindowReport(builder: flatbuffers.Builder): void;
    static addQueries(builder: flatbuffers.Builder, QUERIES: number): void;
    static addAnswered(builder: flatbuffers.Builder, ANSWERED: number): void;
    static addRefused(builder: flatbuffers.Builder, REFUSED: number): void;
    static addSourceRecords(builder: flatbuffers.Builder, SOURCE_RECORDS: number): void;
    static addRefusals(builder: flatbuffers.Builder, REFUSALSOffset: flatbuffers.Offset): void;
    static createRefusalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRefusalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static endPRWWindowReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWWindowReport(builder: flatbuffers.Builder, QUERIES: number, ANSWERED: number, REFUSED: number, SOURCE_RECORDS: number, REFUSALSOffset: flatbuffers.Offset, PROVIDEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWWindowReportT;
    unpackTo(_o: PRWWindowReportT): void;
}
export declare class PRWWindowReportT implements flatbuffers.IGeneratedObject {
    QUERIES: number;
    ANSWERED: number;
    REFUSED: number;
    SOURCE_RECORDS: number;
    REFUSALS: (PRWWindowRefusalT)[];
    PROVIDER: string | Uint8Array | null;
    constructor(QUERIES?: number, ANSWERED?: number, REFUSED?: number, SOURCE_RECORDS?: number, REFUSALS?: (PRWWindowRefusalT)[], PROVIDER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWWindowReport.d.ts.map