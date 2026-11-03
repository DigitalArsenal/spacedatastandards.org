import * as flatbuffers from 'flatbuffers';
import { CMEArrival, CMEArrivalT } from './CMEArrival.js';
import { CMEMeasurement, CMEMeasurementT } from './CMEMeasurement.js';
import { PVN, PVNT } from './PVN.js';
/**
 * Coronal Mass Ejection
 */
export declare class CME implements flatbuffers.IUnpackableObject<CMET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CME;
    static getRootAsCME(bb: flatbuffers.ByteBuffer, obj?: CME): CME;
    static getSizePrefixedRootAsCME(bb: flatbuffers.ByteBuffer, obj?: CME): CME;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The source's own identity, verbatim (DONKI activityID; CDAW date-time).
     */
    EVENT_ID(): string;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    CATALOG(): string | null;
    CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source location token, verbatim (e.g. N12W05), and parsed Stonyhurst.
     */
    SOURCE_LOCATION(): string | null;
    SOURCE_LOCATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    HG_LATITUDE_DEG(): number;
    HG_LONGITUDE_DEG(): number;
    REGION_NUMBER(): number;
    HAS_REGION_NUMBER(): boolean;
    INSTRUMENTS(index: number): string;
    INSTRUMENTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    instrumentsLength(): number;
    /**
     * Linked event identities as the source states them (flares, shocks, storms).
     */
    LINKED_EVENT_IDS(index: number): string;
    LINKED_EVENT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    linkedEventIdsLength(): number;
    MEASUREMENTS(index: number, obj?: CMEMeasurement): CMEMeasurement | null;
    measurementsLength(): number;
    ARRIVALS(index: number, obj?: CMEArrival): CMEArrival | null;
    arrivalsLength(): number;
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVENANCE(obj?: PVN): PVN | null;
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_DIGEST(): string | null;
    SOURCE_DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCME(builder: flatbuffers.Builder): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addCatalog(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addSourceLocation(builder: flatbuffers.Builder, SOURCE_LOCATIONOffset: flatbuffers.Offset): void;
    static addHgLatitudeDeg(builder: flatbuffers.Builder, HG_LATITUDE_DEG: number): void;
    static addHgLongitudeDeg(builder: flatbuffers.Builder, HG_LONGITUDE_DEG: number): void;
    static addRegionNumber(builder: flatbuffers.Builder, REGION_NUMBER: number): void;
    static addHasRegionNumber(builder: flatbuffers.Builder, HAS_REGION_NUMBER: boolean): void;
    static addInstruments(builder: flatbuffers.Builder, INSTRUMENTSOffset: flatbuffers.Offset): void;
    static createInstrumentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInstrumentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinkedEventIds(builder: flatbuffers.Builder, LINKED_EVENT_IDSOffset: flatbuffers.Offset): void;
    static createLinkedEventIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinkedEventIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeasurements(builder: flatbuffers.Builder, MEASUREMENTSOffset: flatbuffers.Offset): void;
    static createMeasurementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMeasurementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addArrivals(builder: flatbuffers.Builder, ARRIVALSOffset: flatbuffers.Offset): void;
    static createArrivalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArrivalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endCME(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CMET;
    unpackTo(_o: CMET): void;
}
export declare class CMET implements flatbuffers.IGeneratedObject {
    EVENT_ID: string | Uint8Array | null;
    CATALOG: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    SOURCE_LOCATION: string | Uint8Array | null;
    HG_LATITUDE_DEG: number;
    HG_LONGITUDE_DEG: number;
    REGION_NUMBER: number;
    HAS_REGION_NUMBER: boolean;
    INSTRUMENTS: (string)[];
    LINKED_EVENT_IDS: (string)[];
    MEASUREMENTS: (CMEMeasurementT)[];
    ARRIVALS: (CMEArrivalT)[];
    NOTE: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(EVENT_ID?: string | Uint8Array | null, CATALOG?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, SOURCE_LOCATION?: string | Uint8Array | null, HG_LATITUDE_DEG?: number, HG_LONGITUDE_DEG?: number, REGION_NUMBER?: number, HAS_REGION_NUMBER?: boolean, INSTRUMENTS?: (string)[], LINKED_EVENT_IDS?: (string)[], MEASUREMENTS?: (CMEMeasurementT)[], ARRIVALS?: (CMEArrivalT)[], NOTE?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CME.d.ts.map