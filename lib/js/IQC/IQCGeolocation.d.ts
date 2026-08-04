import * as flatbuffers from 'flatbuffers';
/**
 * Geodetic position of the receiver at capture time.
 *
 * A separate table because latitude/longitude 0,0 is a VALID coordinate: an
 * absent GEOLOCATION means "the source published no position", which a
 * zero-defaulted scalar pair could never express.
 */
export declare class IQCGeolocation implements flatbuffers.IUnpackableObject<IQCGeolocationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCGeolocation;
    static getRootAsIQCGeolocation(bb: flatbuffers.ByteBuffer, obj?: IQCGeolocation): IQCGeolocation;
    static getSizePrefixedRootAsIQCGeolocation(bb: flatbuffers.ByteBuffer, obj?: IQCGeolocation): IQCGeolocation;
    /**
     * Geodetic latitude, degrees, WGS-84, positive north.
     */
    LATITUDE_DEG(): number;
    /**
     * Geodetic longitude, degrees, WGS-84, positive east.
     */
    LONGITUDE_DEG(): number;
    /**
     * Height above the WGS-84 ellipsoid, metres. Absent in most SigMF
     * recordings; SigMF `core:geolocation` is a GeoJSON Point whose third
     * ordinate is optional.
     */
    ALTITUDE_M(): number;
    /**
     * Reported position uncertainty, metres, when the source states one.
     */
    UNCERTAINTY_M(): number;
    /**
     * How the position was obtained, verbatim from the source (e.g. "GPS",
     * "station registry", "author-supplied"). Never inferred.
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQCGeolocation(builder: flatbuffers.Builder): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addUncertaintyM(builder: flatbuffers.Builder, UNCERTAINTY_M: number): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static endIQCGeolocation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCGeolocation(builder: flatbuffers.Builder, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_M: number, UNCERTAINTY_M: number, METHODOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IQCGeolocationT;
    unpackTo(_o: IQCGeolocationT): void;
}
export declare class IQCGeolocationT implements flatbuffers.IGeneratedObject {
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    UNCERTAINTY_M: number;
    METHOD: string | Uint8Array | null;
    constructor(LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, UNCERTAINTY_M?: number, METHOD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCGeolocation.d.ts.map