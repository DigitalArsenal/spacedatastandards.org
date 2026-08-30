import * as flatbuffers from 'flatbuffers';
import { rfmLibrationPoint } from './rfmLibrationPoint.js';
import { rfmOriginKind } from './rfmOriginKind.js';
/**
 * The point a coordinate system is centred on. Body and barycentre
 * identifiers are integer ephemeris body codes; text NAME is descriptive
 * only and is never the machine key.
 */
export declare class RFMOrigin implements flatbuffers.IUnpackableObject<RFMOriginT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMOrigin;
    static getRootAsRFMOrigin(bb: flatbuffers.ByteBuffer, obj?: RFMOrigin): RFMOrigin;
    static getSizePrefixedRootAsRFMOrigin(bb: flatbuffers.ByteBuffer, obj?: RFMOrigin): RFMOrigin;
    KIND(): rfmOriginKind;
    /**
     * Ephemeris body code when KIND is CELESTIAL_BODY.
     */
    CELESTIAL_BODY_ID(): number;
    /**
     * Ephemeris body code of the barycentre when KIND is BARYCENTRE.
     */
    BARYCENTRE_ID(): number;
    /**
     * Which libration point, when KIND is LIBRATION_POINT.
     */
    LIBRATION_POINT(): rfmLibrationPoint;
    /**
     * Ephemeris body code of the libration system primary.
     */
    LIBRATION_PRIMARY_ID(): number;
    /**
     * Ephemeris body code of the libration system secondary.
     */
    LIBRATION_SECONDARY_ID(): number;
    /**
     * Identifier of the space object when KIND is SPACE_OBJECT.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the surface site when KIND is GROUND_SITE.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body code of the body the site sits on.
     */
    SITE_BODY_ID(): number;
    /**
     * Geodetic latitude of the site, degrees, positive north.
     */
    SITE_LATITUDE(): number;
    /**
     * Geodetic longitude of the site, degrees, positive east.
     */
    SITE_LONGITUDE(): number;
    /**
     * Height of the site above the reference ellipsoid, metres.
     */
    SITE_ALTITUDE(): number;
    /**
     * Human-readable label. Descriptive only.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFMOrigin(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: rfmOriginKind): void;
    static addCelestialBodyId(builder: flatbuffers.Builder, CELESTIAL_BODY_ID: number): void;
    static addBarycentreId(builder: flatbuffers.Builder, BARYCENTRE_ID: number): void;
    static addLibrationPoint(builder: flatbuffers.Builder, LIBRATION_POINT: rfmLibrationPoint): void;
    static addLibrationPrimaryId(builder: flatbuffers.Builder, LIBRATION_PRIMARY_ID: number): void;
    static addLibrationSecondaryId(builder: flatbuffers.Builder, LIBRATION_SECONDARY_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addSiteBodyId(builder: flatbuffers.Builder, SITE_BODY_ID: number): void;
    static addSiteLatitude(builder: flatbuffers.Builder, SITE_LATITUDE: number): void;
    static addSiteLongitude(builder: flatbuffers.Builder, SITE_LONGITUDE: number): void;
    static addSiteAltitude(builder: flatbuffers.Builder, SITE_ALTITUDE: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static endRFMOrigin(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFMOrigin(builder: flatbuffers.Builder, KIND: rfmOriginKind, CELESTIAL_BODY_ID: number, BARYCENTRE_ID: number, LIBRATION_POINT: rfmLibrationPoint, LIBRATION_PRIMARY_ID: number, LIBRATION_SECONDARY_ID: number, OBJECT_IDOffset: flatbuffers.Offset, SITE_IDOffset: flatbuffers.Offset, SITE_BODY_ID: number, SITE_LATITUDE: number, SITE_LONGITUDE: number, SITE_ALTITUDE: number, NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFMOriginT;
    unpackTo(_o: RFMOriginT): void;
}
export declare class RFMOriginT implements flatbuffers.IGeneratedObject {
    KIND: rfmOriginKind;
    CELESTIAL_BODY_ID: number;
    BARYCENTRE_ID: number;
    LIBRATION_POINT: rfmLibrationPoint;
    LIBRATION_PRIMARY_ID: number;
    LIBRATION_SECONDARY_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    SITE_ID: string | Uint8Array | null;
    SITE_BODY_ID: number;
    SITE_LATITUDE: number;
    SITE_LONGITUDE: number;
    SITE_ALTITUDE: number;
    NAME: string | Uint8Array | null;
    constructor(KIND?: rfmOriginKind, CELESTIAL_BODY_ID?: number, BARYCENTRE_ID?: number, LIBRATION_POINT?: rfmLibrationPoint, LIBRATION_PRIMARY_ID?: number, LIBRATION_SECONDARY_ID?: number, OBJECT_ID?: string | Uint8Array | null, SITE_ID?: string | Uint8Array | null, SITE_BODY_ID?: number, SITE_LATITUDE?: number, SITE_LONGITUDE?: number, SITE_ALTITUDE?: number, NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMOrigin.d.ts.map