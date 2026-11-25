import * as flatbuffers from 'flatbuffers';
/**
 * Reference to a supporting underlying SDS record without duplicating its payload.
 */
export declare class TMXRecordRef implements flatbuffers.IUnpackableObject<TMXRecordRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXRecordRef;
    static getRootAsTMXRecordRef(bb: flatbuffers.ByteBuffer, obj?: TMXRecordRef): TMXRecordRef;
    static getSizePrefixedRootAsTMXRecordRef(bb: flatbuffers.ByteBuffer, obj?: TMXRecordRef): TMXRecordRef;
    /**
     * Four-character SDS file identifier including "$", e.g. "$CDM", "$ACW", "$RFL", "$RDE", "$THP".
     */
    SCHEMA_FILE_ID(): string;
    SCHEMA_FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Record identifier within the referenced SDS standard.
     */
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional NORAD catalog number associated with the event.
     */
    NORAD_CAT_ID(): number;
    /**
     * Event epoch or peak timestamp, RFC 3339 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary metric label (e.g. "MISS_DISTANCE_KM", "DOSE_MSV_H", "J_S_DB").
     */
    METRIC_LABEL(): string | null;
    METRIC_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary metric numeric value.
     */
    METRIC_VALUE(): number;
    /**
     * Physical units string for METRIC_VALUE.
     */
    METRIC_UNITS(): string | null;
    METRIC_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTMXRecordRef(builder: flatbuffers.Builder): void;
    static addSchemaFileId(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addMetricLabel(builder: flatbuffers.Builder, METRIC_LABELOffset: flatbuffers.Offset): void;
    static addMetricValue(builder: flatbuffers.Builder, METRIC_VALUE: number): void;
    static addMetricUnits(builder: flatbuffers.Builder, METRIC_UNITSOffset: flatbuffers.Offset): void;
    static endTMXRecordRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXRecordRef(builder: flatbuffers.Builder, SCHEMA_FILE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, EPOCHOffset: flatbuffers.Offset, METRIC_LABELOffset: flatbuffers.Offset, METRIC_VALUE: number, METRIC_UNITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMXRecordRefT;
    unpackTo(_o: TMXRecordRefT): void;
}
export declare class TMXRecordRefT implements flatbuffers.IGeneratedObject {
    SCHEMA_FILE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    EPOCH: string | Uint8Array | null;
    METRIC_LABEL: string | Uint8Array | null;
    METRIC_VALUE: number;
    METRIC_UNITS: string | Uint8Array | null;
    constructor(SCHEMA_FILE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, EPOCH?: string | Uint8Array | null, METRIC_LABEL?: string | Uint8Array | null, METRIC_VALUE?: number, METRIC_UNITS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXRecordRef.d.ts.map