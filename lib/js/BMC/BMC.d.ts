import * as flatbuffers from 'flatbuffers';
/**
 * Beam Contour
 */
export declare class BMC implements flatbuffers.IUnpackableObject<BMCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BMC;
    static getRootAsBMC(bb: flatbuffers.ByteBuffer, obj?: BMC): BMC;
    static getSizePrefixedRootAsBMC(bb: flatbuffers.ByteBuffer, obj?: BMC): BMC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONTOUR_IDX(): number;
    GAIN(): number;
    REGION_NAME(): string | null;
    REGION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOGRAPHY(): string | null;
    GEOGRAPHY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOGRAPHY_TEXT(): string | null;
    GEOGRAPHY_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOGRAPHY_JSON(): string | null;
    GEOGRAPHY_JSON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOGRAPHY_TYPE(): string | null;
    GEOGRAPHY_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOGRAPHY_NDIMS(): number;
    GEOGRAPHY_SRID(): number;
    static startBMC(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addContourIdx(builder: flatbuffers.Builder, CONTOUR_IDX: number): void;
    static addGain(builder: flatbuffers.Builder, GAIN: number): void;
    static addRegionName(builder: flatbuffers.Builder, REGION_NAMEOffset: flatbuffers.Offset): void;
    static addGeography(builder: flatbuffers.Builder, GEOGRAPHYOffset: flatbuffers.Offset): void;
    static addGeographyText(builder: flatbuffers.Builder, GEOGRAPHY_TEXTOffset: flatbuffers.Offset): void;
    static addGeographyJson(builder: flatbuffers.Builder, GEOGRAPHY_JSONOffset: flatbuffers.Offset): void;
    static addGeographyType(builder: flatbuffers.Builder, GEOGRAPHY_TYPEOffset: flatbuffers.Offset): void;
    static addGeographyNdims(builder: flatbuffers.Builder, GEOGRAPHY_NDIMS: number): void;
    static addGeographySrid(builder: flatbuffers.Builder, GEOGRAPHY_SRID: number): void;
    static endBMC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBMCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBMCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBMC(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, CONTOUR_IDX: number, GAIN: number, REGION_NAMEOffset: flatbuffers.Offset, GEOGRAPHYOffset: flatbuffers.Offset, GEOGRAPHY_TEXTOffset: flatbuffers.Offset, GEOGRAPHY_JSONOffset: flatbuffers.Offset, GEOGRAPHY_TYPEOffset: flatbuffers.Offset, GEOGRAPHY_NDIMS: number, GEOGRAPHY_SRID: number): flatbuffers.Offset;
    unpack(): BMCT;
    unpackTo(_o: BMCT): void;
}
export declare class BMCT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    CONTOUR_IDX: number;
    GAIN: number;
    REGION_NAME: string | Uint8Array | null;
    GEOGRAPHY: string | Uint8Array | null;
    GEOGRAPHY_TEXT: string | Uint8Array | null;
    GEOGRAPHY_JSON: string | Uint8Array | null;
    GEOGRAPHY_TYPE: string | Uint8Array | null;
    GEOGRAPHY_NDIMS: number;
    GEOGRAPHY_SRID: number;
    constructor(ID?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, CONTOUR_IDX?: number, GAIN?: number, REGION_NAME?: string | Uint8Array | null, GEOGRAPHY?: string | Uint8Array | null, GEOGRAPHY_TEXT?: string | Uint8Array | null, GEOGRAPHY_JSON?: string | Uint8Array | null, GEOGRAPHY_TYPE?: string | Uint8Array | null, GEOGRAPHY_NDIMS?: number, GEOGRAPHY_SRID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BMC.d.ts.map