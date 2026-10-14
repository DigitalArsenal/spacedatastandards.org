import * as flatbuffers from 'flatbuffers';
import { XMTIntegratedObject, XMTIntegratedObjectT } from './XMTIntegratedObject.js';
import { XMTManeuverPolicy, XMTManeuverPolicyT } from './XMTManeuverPolicy.js';
import { XMTMatchReport, XMTMatchReportT } from './XMTMatchReport.js';
import { XMTReasonCount, XMTReasonCountT } from './XMTReasonCount.js';
import { XMTSelectionPolicy, XMTSelectionPolicyT } from './XMTSelectionPolicy.js';
import { XMTUnplacedRecord, XMTUnplacedRecordT } from './XMTUnplacedRecord.js';
/**
 * Result of a catalog integration.
 */
export declare class XMTIntegrateReport implements flatbuffers.IUnpackableObject<XMTIntegrateReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTIntegrateReport;
    static getRootAsXMTIntegrateReport(bb: flatbuffers.ByteBuffer, obj?: XMTIntegrateReport): XMTIntegrateReport;
    static getSizePrefixedRootAsXMTIntegrateReport(bb: flatbuffers.ByteBuffer, obj?: XMTIntegrateReport): XMTIntegrateReport;
    AS_OF_MS(): bigint;
    /**
     * The policies applied (SELECTION may omit its MEASURED table and give
     * MEASURED_ROWS).
     */
    SELECTION(obj?: XMTSelectionPolicy): XMTSelectionPolicy | null;
    MANEUVERS(obj?: XMTManeuverPolicy): XMTManeuverPolicy | null;
    CATALOG_RECORDS(): number;
    OMM_RECORDS(): number;
    OCM_RECORDS(): number;
    MNV_RECORDS(): number;
    /**
     * Product kinds with a selection.
     */
    SELECTED_COUNT(): number;
    /**
     * Objects with products but no eligible one.
     */
    STALE_COUNT(): number;
    /**
     * Objects with no product.
     */
    NO_PRODUCT_COUNT(): number;
    /**
     * Selections decided by source order (nothing measured).
     */
    UNMEASURED_COUNT(): number;
    /**
     * Selections without a paired $OCM.
     */
    WITHOUT_OCM_COUNT(): number;
    MANEUVERABLE_COUNT(): number;
    MANEUVER_EVENT_COUNT(): number;
    /**
     * Events merged from more than one source.
     */
    MERGED_EVENT_COUNT(): number;
    /**
     * Unlinked records by reason.
     */
    UNLINKED_COUNTS(index: number, obj?: XMTReasonCount): XMTReasonCount | null;
    unlinkedCountsLength(): number;
    /**
     * Records refused.
     */
    REFUSED_COUNT(): number;
    /**
     * The identity links tested, with BOUND set where they bound.
     */
    IDENTITY(obj?: XMTMatchReport): XMTMatchReport | null;
    OBJECTS(index: number, obj?: XMTIntegratedObject): XMTIntegratedObject | null;
    objectsLength(): number;
    /**
     * Products that named no catalog object (first 1000).
     */
    UNLINKED(index: number, obj?: XMTUnplacedRecord): XMTUnplacedRecord | null;
    unlinkedLength(): number;
    /**
     * Products refused as unreadable (first 1000).
     */
    REFUSED(index: number, obj?: XMTUnplacedRecord): XMTUnplacedRecord | null;
    refusedLength(): number;
    static startXMTIntegrateReport(builder: flatbuffers.Builder): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addSelection(builder: flatbuffers.Builder, SELECTIONOffset: flatbuffers.Offset): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static addCatalogRecords(builder: flatbuffers.Builder, CATALOG_RECORDS: number): void;
    static addOmmRecords(builder: flatbuffers.Builder, OMM_RECORDS: number): void;
    static addOcmRecords(builder: flatbuffers.Builder, OCM_RECORDS: number): void;
    static addMnvRecords(builder: flatbuffers.Builder, MNV_RECORDS: number): void;
    static addSelectedCount(builder: flatbuffers.Builder, SELECTED_COUNT: number): void;
    static addStaleCount(builder: flatbuffers.Builder, STALE_COUNT: number): void;
    static addNoProductCount(builder: flatbuffers.Builder, NO_PRODUCT_COUNT: number): void;
    static addUnmeasuredCount(builder: flatbuffers.Builder, UNMEASURED_COUNT: number): void;
    static addWithoutOcmCount(builder: flatbuffers.Builder, WITHOUT_OCM_COUNT: number): void;
    static addManeuverableCount(builder: flatbuffers.Builder, MANEUVERABLE_COUNT: number): void;
    static addManeuverEventCount(builder: flatbuffers.Builder, MANEUVER_EVENT_COUNT: number): void;
    static addMergedEventCount(builder: flatbuffers.Builder, MERGED_EVENT_COUNT: number): void;
    static addUnlinkedCounts(builder: flatbuffers.Builder, UNLINKED_COUNTSOffset: flatbuffers.Offset): void;
    static createUnlinkedCountsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnlinkedCountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefusedCount(builder: flatbuffers.Builder, REFUSED_COUNT: number): void;
    static addIdentity(builder: flatbuffers.Builder, IDENTITYOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnlinked(builder: flatbuffers.Builder, UNLINKEDOffset: flatbuffers.Offset): void;
    static createUnlinkedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnlinkedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefused(builder: flatbuffers.Builder, REFUSEDOffset: flatbuffers.Offset): void;
    static createRefusedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRefusedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTIntegrateReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTIntegrateReportT;
    unpackTo(_o: XMTIntegrateReportT): void;
}
export declare class XMTIntegrateReportT implements flatbuffers.IGeneratedObject {
    AS_OF_MS: bigint;
    SELECTION: XMTSelectionPolicyT | null;
    MANEUVERS: XMTManeuverPolicyT | null;
    CATALOG_RECORDS: number;
    OMM_RECORDS: number;
    OCM_RECORDS: number;
    MNV_RECORDS: number;
    SELECTED_COUNT: number;
    STALE_COUNT: number;
    NO_PRODUCT_COUNT: number;
    UNMEASURED_COUNT: number;
    WITHOUT_OCM_COUNT: number;
    MANEUVERABLE_COUNT: number;
    MANEUVER_EVENT_COUNT: number;
    MERGED_EVENT_COUNT: number;
    UNLINKED_COUNTS: (XMTReasonCountT)[];
    REFUSED_COUNT: number;
    IDENTITY: XMTMatchReportT | null;
    OBJECTS: (XMTIntegratedObjectT)[];
    UNLINKED: (XMTUnplacedRecordT)[];
    REFUSED: (XMTUnplacedRecordT)[];
    constructor(AS_OF_MS?: bigint, SELECTION?: XMTSelectionPolicyT | null, MANEUVERS?: XMTManeuverPolicyT | null, CATALOG_RECORDS?: number, OMM_RECORDS?: number, OCM_RECORDS?: number, MNV_RECORDS?: number, SELECTED_COUNT?: number, STALE_COUNT?: number, NO_PRODUCT_COUNT?: number, UNMEASURED_COUNT?: number, WITHOUT_OCM_COUNT?: number, MANEUVERABLE_COUNT?: number, MANEUVER_EVENT_COUNT?: number, MERGED_EVENT_COUNT?: number, UNLINKED_COUNTS?: (XMTReasonCountT)[], REFUSED_COUNT?: number, IDENTITY?: XMTMatchReportT | null, OBJECTS?: (XMTIntegratedObjectT)[], UNLINKED?: (XMTUnplacedRecordT)[], REFUSED?: (XMTUnplacedRecordT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTIntegrateReport.d.ts.map