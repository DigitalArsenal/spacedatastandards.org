import * as flatbuffers from 'flatbuffers';
import { AGRBin, AGRBinT } from './AGRBin.js';
import { AGRCategory, AGRCategoryT } from './AGRCategory.js';
import { AGRPivotCell, AGRPivotCellT } from './AGRPivotCell.js';
import { AGRSeries, AGRSeriesT } from './AGRSeries.js';
import { agrKind } from './agrKind.js';
/**
 * Aggregation Result - one summary over one standard's records.
 */
export declare class AGR implements flatbuffers.IUnpackableObject<AGRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGR;
    static getRootAsAGR(bb: flatbuffers.ByteBuffer, obj?: AGR): AGR;
    static getSizePrefixedRootAsAGR(bb: flatbuffers.ByteBuffer, obj?: AGR): AGR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    KIND(): agrKind;
    /**
     * Standard code of the records aggregated, e.g. "OMM".
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SQL selection the aggregate was computed over, when any.
     */
    SQL(): string | null;
    SQL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Field on the X axis; may be a derived field the serving node computes.
     */
    X_FIELD(): string | null;
    X_FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fields on the Y axis, one series each.
     */
    Y_FIELDS(index: number): string;
    Y_FIELDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    yFieldsLength(): number;
    /**
     * True when X values are Unix milliseconds.
     */
    X_IS_TIME(): boolean;
    /**
     * Unit of X when the standard declares one.
     */
    X_UNIT(): string | null;
    X_UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BINS(index: number, obj?: AGRBin): AGRBin | null;
    binsLength(): number;
    CATEGORIES(index: number, obj?: AGRCategory): AGRCategory | null;
    categoriesLength(): number;
    SERIES(index: number, obj?: AGRSeries): AGRSeries | null;
    seriesLength(): number;
    PIVOT(index: number, obj?: AGRPivotCell): AGRPivotCell | null;
    pivotLength(): number;
    /**
     * Row keys of a pivot in display order.
     */
    ROW_KEYS(index: number): string;
    ROW_KEYS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rowKeysLength(): number;
    /**
     * Column keys of a pivot in display order.
     */
    COL_KEYS(index: number): string;
    COL_KEYS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    colKeysLength(): number;
    /**
     * Records scanned to compute the aggregate.
     */
    SCANNED(): bigint;
    /**
     * Records that matched the selection.
     */
    MATCHED(): bigint;
    /**
     * Records the serving node holds for the standard.
     */
    STORED(): bigint;
    /**
     * True when a bounded scan returned before covering every stored record.
     */
    PARTIAL(): boolean;
    /**
     * True when a category or pivot was cut to its top entries.
     */
    TRUNCATED(): boolean;
    /**
     * Milliseconds the serving node spent computing the aggregate.
     */
    ELAPSED_MS(): number;
    /**
     * Unix milliseconds the serving numbers were last true.
     */
    AS_OF_MS(): bigint;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAGR(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: agrKind): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addSql(builder: flatbuffers.Builder, SQLOffset: flatbuffers.Offset): void;
    static addXField(builder: flatbuffers.Builder, X_FIELDOffset: flatbuffers.Offset): void;
    static addYFields(builder: flatbuffers.Builder, Y_FIELDSOffset: flatbuffers.Offset): void;
    static createYFieldsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startYFieldsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addXIsTime(builder: flatbuffers.Builder, X_IS_TIME: boolean): void;
    static addXUnit(builder: flatbuffers.Builder, X_UNITOffset: flatbuffers.Offset): void;
    static addBins(builder: flatbuffers.Builder, BINSOffset: flatbuffers.Offset): void;
    static createBinsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBinsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCategories(builder: flatbuffers.Builder, CATEGORIESOffset: flatbuffers.Offset): void;
    static createCategoriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCategoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSeries(builder: flatbuffers.Builder, SERIESOffset: flatbuffers.Offset): void;
    static createSeriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSeriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPivot(builder: flatbuffers.Builder, PIVOTOffset: flatbuffers.Offset): void;
    static createPivotVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPivotVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRowKeys(builder: flatbuffers.Builder, ROW_KEYSOffset: flatbuffers.Offset): void;
    static createRowKeysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColKeys(builder: flatbuffers.Builder, COL_KEYSOffset: flatbuffers.Offset): void;
    static createColKeysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startColKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScanned(builder: flatbuffers.Builder, SCANNED: bigint): void;
    static addMatched(builder: flatbuffers.Builder, MATCHED: bigint): void;
    static addStored(builder: flatbuffers.Builder, STORED: bigint): void;
    static addPartial(builder: flatbuffers.Builder, PARTIAL: boolean): void;
    static addTruncated(builder: flatbuffers.Builder, TRUNCATED: boolean): void;
    static addElapsedMs(builder: flatbuffers.Builder, ELAPSED_MS: number): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static endAGR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAGRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAGRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAGR(builder: flatbuffers.Builder, KIND: agrKind, SCHEMA_NAMEOffset: flatbuffers.Offset, SQLOffset: flatbuffers.Offset, X_FIELDOffset: flatbuffers.Offset, Y_FIELDSOffset: flatbuffers.Offset, X_IS_TIME: boolean, X_UNITOffset: flatbuffers.Offset, BINSOffset: flatbuffers.Offset, CATEGORIESOffset: flatbuffers.Offset, SERIESOffset: flatbuffers.Offset, PIVOTOffset: flatbuffers.Offset, ROW_KEYSOffset: flatbuffers.Offset, COL_KEYSOffset: flatbuffers.Offset, SCANNED: bigint, MATCHED: bigint, STORED: bigint, PARTIAL: boolean, TRUNCATED: boolean, ELAPSED_MS: number, AS_OF_MS: bigint, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AGRT;
    unpackTo(_o: AGRT): void;
}
export declare class AGRT implements flatbuffers.IGeneratedObject {
    KIND: agrKind;
    SCHEMA_NAME: string | Uint8Array | null;
    SQL: string | Uint8Array | null;
    X_FIELD: string | Uint8Array | null;
    Y_FIELDS: (string)[];
    X_IS_TIME: boolean;
    X_UNIT: string | Uint8Array | null;
    BINS: (AGRBinT)[];
    CATEGORIES: (AGRCategoryT)[];
    SERIES: (AGRSeriesT)[];
    PIVOT: (AGRPivotCellT)[];
    ROW_KEYS: (string)[];
    COL_KEYS: (string)[];
    SCANNED: bigint;
    MATCHED: bigint;
    STORED: bigint;
    PARTIAL: boolean;
    TRUNCATED: boolean;
    ELAPSED_MS: number;
    AS_OF_MS: bigint;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    constructor(KIND?: agrKind, SCHEMA_NAME?: string | Uint8Array | null, SQL?: string | Uint8Array | null, X_FIELD?: string | Uint8Array | null, Y_FIELDS?: (string)[], X_IS_TIME?: boolean, X_UNIT?: string | Uint8Array | null, BINS?: (AGRBinT)[], CATEGORIES?: (AGRCategoryT)[], SERIES?: (AGRSeriesT)[], PIVOT?: (AGRPivotCellT)[], ROW_KEYS?: (string)[], COL_KEYS?: (string)[], SCANNED?: bigint, MATCHED?: bigint, STORED?: bigint, PARTIAL?: boolean, TRUNCATED?: boolean, ELAPSED_MS?: number, AS_OF_MS?: bigint, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGR.d.ts.map