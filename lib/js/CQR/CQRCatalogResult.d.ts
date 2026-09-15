import * as flatbuffers from 'flatbuffers';
import { CQREvent, CQREventT } from './CQREvent.js';
import { CQRScreeningStatistics, CQRScreeningStatisticsT } from './CQRScreeningStatistics.js';
/**
 * Stable order by TCA then primary/secondary identity; ties retain original
 * input-pair order. EVENT_OFFSET indexes this order across bounded chunks.
 * PIV output cap, YIELDED and BACKLOG_REMAINING carry stream backpressure.
 */
export declare class CQRCatalogResult implements flatbuffers.IUnpackableObject<CQRCatalogResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRCatalogResult;
    static getRootAsCQRCatalogResult(bb: flatbuffers.ByteBuffer, obj?: CQRCatalogResult): CQRCatalogResult;
    static getSizePrefixedRootAsCQRCatalogResult(bb: flatbuffers.ByteBuffer, obj?: CQRCatalogResult): CQRCatalogResult;
    OBJECTS_PARSED(): bigint;
    CONJUNCTIONS_FOUND(): bigint;
    EVENTS(index: number, obj?: CQREvent): CQREvent | null;
    eventsLength(): number;
    STATISTICS(obj?: CQRScreeningStatistics): CQRScreeningStatistics | null;
    EVENT_OFFSET(): bigint;
    FINAL_CHUNK(): boolean;
    static startCQRCatalogResult(builder: flatbuffers.Builder): void;
    static addObjectsParsed(builder: flatbuffers.Builder, OBJECTS_PARSED: bigint): void;
    static addConjunctionsFound(builder: flatbuffers.Builder, CONJUNCTIONS_FOUND: bigint): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatistics(builder: flatbuffers.Builder, STATISTICSOffset: flatbuffers.Offset): void;
    static addEventOffset(builder: flatbuffers.Builder, EVENT_OFFSET: bigint): void;
    static addFinalChunk(builder: flatbuffers.Builder, FINAL_CHUNK: boolean): void;
    static endCQRCatalogResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRCatalogResultT;
    unpackTo(_o: CQRCatalogResultT): void;
}
export declare class CQRCatalogResultT implements flatbuffers.IGeneratedObject {
    OBJECTS_PARSED: bigint;
    CONJUNCTIONS_FOUND: bigint;
    EVENTS: (CQREventT)[];
    STATISTICS: CQRScreeningStatisticsT | null;
    EVENT_OFFSET: bigint;
    FINAL_CHUNK: boolean;
    constructor(OBJECTS_PARSED?: bigint, CONJUNCTIONS_FOUND?: bigint, EVENTS?: (CQREventT)[], STATISTICS?: CQRScreeningStatisticsT | null, EVENT_OFFSET?: bigint, FINAL_CHUNK?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRCatalogResult.d.ts.map