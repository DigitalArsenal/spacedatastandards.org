import * as flatbuffers from 'flatbuffers';
/**
 * GEO Spacecraft Status
 */
export declare class GEO implements flatbuffers.IUnpackableObject<GEOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GEO;
    static getRootAsGEO(bb: flatbuffers.ByteBuffer, obj?: GEO): GEO;
    static getSizePrefixedRootAsGEO(bb: flatbuffers.ByteBuffer, obj?: GEO): GEO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SS(): number;
    SC(): number;
    RELATIVE_ENERGY(): number;
    LONGITUDE_RATE(): number;
    LONGITUDE_MIN(): number;
    LONGITUDE_MAX(): number;
    CONFIDENCE_LEVEL(): string | null;
    CONFIDENCE_LEVEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PLANE_CHANGE_STATUS(): string | null;
    PLANE_CHANGE_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TROUGH_TYPE(): string | null;
    TROUGH_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LOST_FLAG(): boolean;
    SEMI_ANNUAL_CORR_FLAG(): boolean;
    OBJECT_STATUS(): string | null;
    OBJECT_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SAT_NO(): number;
    static startGEO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSs(builder: flatbuffers.Builder, SS: number): void;
    static addSc(builder: flatbuffers.Builder, SC: number): void;
    static addRelativeEnergy(builder: flatbuffers.Builder, RELATIVE_ENERGY: number): void;
    static addLongitudeRate(builder: flatbuffers.Builder, LONGITUDE_RATE: number): void;
    static addLongitudeMin(builder: flatbuffers.Builder, LONGITUDE_MIN: number): void;
    static addLongitudeMax(builder: flatbuffers.Builder, LONGITUDE_MAX: number): void;
    static addConfidenceLevel(builder: flatbuffers.Builder, CONFIDENCE_LEVELOffset: flatbuffers.Offset): void;
    static addPlaneChangeStatus(builder: flatbuffers.Builder, PLANE_CHANGE_STATUSOffset: flatbuffers.Offset): void;
    static addTroughType(builder: flatbuffers.Builder, TROUGH_TYPEOffset: flatbuffers.Offset): void;
    static addLostFlag(builder: flatbuffers.Builder, LOST_FLAG: boolean): void;
    static addSemiAnnualCorrFlag(builder: flatbuffers.Builder, SEMI_ANNUAL_CORR_FLAG: boolean): void;
    static addObjectStatus(builder: flatbuffers.Builder, OBJECT_STATUSOffset: flatbuffers.Offset): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static endGEO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGEO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SS: number, SC: number, RELATIVE_ENERGY: number, LONGITUDE_RATE: number, LONGITUDE_MIN: number, LONGITUDE_MAX: number, CONFIDENCE_LEVELOffset: flatbuffers.Offset, PLANE_CHANGE_STATUSOffset: flatbuffers.Offset, TROUGH_TYPEOffset: flatbuffers.Offset, LOST_FLAG: boolean, SEMI_ANNUAL_CORR_FLAG: boolean, OBJECT_STATUSOffset: flatbuffers.Offset, RAW_FILE_URIOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, SAT_NO: number): flatbuffers.Offset;
    unpack(): GEOT;
    unpackTo(_o: GEOT): void;
}
export declare class GEOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SS: number;
    SC: number;
    RELATIVE_ENERGY: number;
    LONGITUDE_RATE: number;
    LONGITUDE_MIN: number;
    LONGITUDE_MAX: number;
    CONFIDENCE_LEVEL: string | Uint8Array | null;
    PLANE_CHANGE_STATUS: string | Uint8Array | null;
    TROUGH_TYPE: string | Uint8Array | null;
    LOST_FLAG: boolean;
    SEMI_ANNUAL_CORR_FLAG: boolean;
    OBJECT_STATUS: string | Uint8Array | null;
    RAW_FILE_URI: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    SAT_NO: number;
    constructor(ID?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, SS?: number, SC?: number, RELATIVE_ENERGY?: number, LONGITUDE_RATE?: number, LONGITUDE_MIN?: number, LONGITUDE_MAX?: number, CONFIDENCE_LEVEL?: string | Uint8Array | null, PLANE_CHANGE_STATUS?: string | Uint8Array | null, TROUGH_TYPE?: string | Uint8Array | null, LOST_FLAG?: boolean, SEMI_ANNUAL_CORR_FLAG?: boolean, OBJECT_STATUS?: string | Uint8Array | null, RAW_FILE_URI?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, SAT_NO?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GEO.d.ts.map