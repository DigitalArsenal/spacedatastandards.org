import * as flatbuffers from 'flatbuffers';
import { imageFormat } from './imageFormat.js';
/**
 * Ground Imagery
 */
export declare class GDI implements flatbuffers.IUnpackableObject<GDIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GDI;
    static getRootAsGDI(bb: flatbuffers.ByteBuffer, obj?: GDI): GDI;
    static getSizePrefixedRootAsGDI(bb: flatbuffers.ByteBuffer, obj?: GDI): GDI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image capture time (ISO 8601)
     */
    IMAGE_TIME(): string | null;
    IMAGE_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image filename
     */
    FILENAME(): string | null;
    FILENAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image format
     */
    FORMAT(): imageFormat;
    /**
     * File size (bytes)
     */
    FILESIZE(): bigint;
    /**
     * File checksum value
     */
    CHECKSUM_VALUE(): string | null;
    CHECKSUM_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region GeoJSON boundary
     */
    REGION_GEO_JSON(): string | null;
    REGION_GEO_JSON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region text description
     */
    REGION_TEXT(): string | null;
    REGION_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region name
     */
    REGION(): string | null;
    REGION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region type
     */
    REGION_TYPE(): string | null;
    REGION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region geometry dimensions
     */
    REGION_NDIMS(): number;
    /**
     * Region spatial reference ID
     */
    REGION_SRID(): number;
    /**
     * Subject object identifier
     */
    SUBJECT_ID(): string | null;
    SUBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image name or title
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Keywords for search/classification
     */
    KEYWORDS(index: number): string;
    KEYWORDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    keywordsLength(): number;
    /**
     * Notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGDI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addImageTime(builder: flatbuffers.Builder, IMAGE_TIMEOffset: flatbuffers.Offset): void;
    static addFilename(builder: flatbuffers.Builder, FILENAMEOffset: flatbuffers.Offset): void;
    static addFormat(builder: flatbuffers.Builder, FORMAT: imageFormat): void;
    static addFilesize(builder: flatbuffers.Builder, FILESIZE: bigint): void;
    static addChecksumValue(builder: flatbuffers.Builder, CHECKSUM_VALUEOffset: flatbuffers.Offset): void;
    static addRegionGeoJson(builder: flatbuffers.Builder, REGION_GEO_JSONOffset: flatbuffers.Offset): void;
    static addRegionText(builder: flatbuffers.Builder, REGION_TEXTOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static addRegionType(builder: flatbuffers.Builder, REGION_TYPEOffset: flatbuffers.Offset): void;
    static addRegionNdims(builder: flatbuffers.Builder, REGION_NDIMS: number): void;
    static addRegionSrid(builder: flatbuffers.Builder, REGION_SRID: number): void;
    static addSubjectId(builder: flatbuffers.Builder, SUBJECT_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeywords(builder: flatbuffers.Builder, KEYWORDSOffset: flatbuffers.Offset): void;
    static createKeywordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeywordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endGDI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGDIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGDIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGDI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, IMAGE_TIMEOffset: flatbuffers.Offset, FILENAMEOffset: flatbuffers.Offset, FORMAT: imageFormat, FILESIZE: bigint, CHECKSUM_VALUEOffset: flatbuffers.Offset, REGION_GEO_JSONOffset: flatbuffers.Offset, REGION_TEXTOffset: flatbuffers.Offset, REGIONOffset: flatbuffers.Offset, REGION_TYPEOffset: flatbuffers.Offset, REGION_NDIMS: number, REGION_SRID: number, SUBJECT_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset, KEYWORDSOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GDIT;
    unpackTo(_o: GDIT): void;
}
export declare class GDIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    IMAGE_TIME: string | Uint8Array | null;
    FILENAME: string | Uint8Array | null;
    FORMAT: imageFormat;
    FILESIZE: bigint;
    CHECKSUM_VALUE: string | Uint8Array | null;
    REGION_GEO_JSON: string | Uint8Array | null;
    REGION_TEXT: string | Uint8Array | null;
    REGION: string | Uint8Array | null;
    REGION_TYPE: string | Uint8Array | null;
    REGION_NDIMS: number;
    REGION_SRID: number;
    SUBJECT_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    TAGS: (string)[];
    KEYWORDS: (string)[];
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, IMAGE_TIME?: string | Uint8Array | null, FILENAME?: string | Uint8Array | null, FORMAT?: imageFormat, FILESIZE?: bigint, CHECKSUM_VALUE?: string | Uint8Array | null, REGION_GEO_JSON?: string | Uint8Array | null, REGION_TEXT?: string | Uint8Array | null, REGION?: string | Uint8Array | null, REGION_TYPE?: string | Uint8Array | null, REGION_NDIMS?: number, REGION_SRID?: number, SUBJECT_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, TAGS?: (string)[], KEYWORDS?: (string)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GDI.d.ts.map