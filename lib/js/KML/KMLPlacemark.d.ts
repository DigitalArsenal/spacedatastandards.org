import * as flatbuffers from 'flatbuffers';
import { KMLCamera, KMLCameraT } from './KMLCamera.js';
import { KMLData, KMLDataT } from './KMLData.js';
import { KMLLineString, KMLLineStringT } from './KMLLineString.js';
import { KMLLinearRing, KMLLinearRingT } from './KMLLinearRing.js';
import { KMLLookAt, KMLLookAtT } from './KMLLookAt.js';
import { KMLModel, KMLModelT } from './KMLModel.js';
import { KMLMultiGeometry, KMLMultiGeometryT } from './KMLMultiGeometry.js';
import { KMLMultiTrack, KMLMultiTrackT } from './KMLMultiTrack.js';
import { KMLPoint, KMLPointT } from './KMLPoint.js';
import { KMLPolygon, KMLPolygonT } from './KMLPolygon.js';
import { KMLRegion, KMLRegionT } from './KMLRegion.js';
import { KMLSchemaData, KMLSchemaDataT } from './KMLSchemaData.js';
import { KMLStyle, KMLStyleT } from './KMLStyle.js';
import { KMLStyleMap, KMLStyleMapT } from './KMLStyleMap.js';
import { KMLTimeSpan, KMLTimeSpanT } from './KMLTimeSpan.js';
import { KMLTimeStamp, KMLTimeStampT } from './KMLTimeStamp.js';
import { KMLTrack, KMLTrackT } from './KMLTrack.js';
/**
 * Placemark feature
 */
export declare class KMLPlacemark implements flatbuffers.IUnpackableObject<KMLPlacemarkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPlacemark;
    static getRootAsKMLPlacemark(bb: flatbuffers.ByteBuffer, obj?: KMLPlacemark): KMLPlacemark;
    static getSizePrefixedRootAsKMLPlacemark(bb: flatbuffers.ByteBuffer, obj?: KMLPlacemark): KMLPlacemark;
    /**
     * Placemark name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description (may contain HTML)
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Visibility flag
     */
    VISIBILITY(): boolean;
    /**
     * Style URL reference
     */
    STYLE_URL(): string | null;
    STYLE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inline style
     */
    STYLE(obj?: KMLStyle): KMLStyle | null;
    /**
     * Snippet (short description)
     */
    SNIPPET(): string | null;
    SNIPPET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether open in tree view
     */
    OPEN(): boolean;
    /**
     * Address
     */
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Point geometry
     */
    POINT(obj?: KMLPoint): KMLPoint | null;
    /**
     * LineString geometry
     */
    LINE_STRING(obj?: KMLLineString): KMLLineString | null;
    /**
     * Polygon geometry
     */
    POLYGON(obj?: KMLPolygon): KMLPolygon | null;
    /**
     * LinearRing geometry (standalone)
     */
    LINEAR_RING(obj?: KMLLinearRing): KMLLinearRing | null;
    /**
     * MultiGeometry
     */
    MULTI_GEOMETRY(obj?: KMLMultiGeometry): KMLMultiGeometry | null;
    /**
     * 3D Model
     */
    MODEL(obj?: KMLModel): KMLModel | null;
    /**
     * gx:Track
     */
    TRACK(obj?: KMLTrack): KMLTrack | null;
    /**
     * gx:MultiTrack
     */
    MULTI_TRACK(obj?: KMLMultiTrack): KMLMultiTrack | null;
    /**
     * LookAt viewpoint
     */
    LOOK_AT(obj?: KMLLookAt): KMLLookAt | null;
    /**
     * Camera viewpoint
     */
    CAMERA(obj?: KMLCamera): KMLCamera | null;
    /**
     * TimeSpan
     */
    TIME_SPAN(obj?: KMLTimeSpan): KMLTimeSpan | null;
    /**
     * TimeStamp
     */
    TIME_STAMP(obj?: KMLTimeStamp): KMLTimeStamp | null;
    /**
     * Extended data
     */
    EXTENDED_DATA(index: number, obj?: KMLData): KMLData | null;
    extendedDataLength(): number;
    /**
     * Schema data
     */
    SCHEMA_DATA(obj?: KMLSchemaData): KMLSchemaData | null;
    /**
     * Region
     */
    REGION(obj?: KMLRegion): KMLRegion | null;
    /**
     * StyleMap (inline)
     */
    STYLE_MAP(obj?: KMLStyleMap): KMLStyleMap | null;
    static startKMLPlacemark(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addStyleUrl(builder: flatbuffers.Builder, STYLE_URLOffset: flatbuffers.Offset): void;
    static addStyle(builder: flatbuffers.Builder, STYLEOffset: flatbuffers.Offset): void;
    static addSnippet(builder: flatbuffers.Builder, SNIPPETOffset: flatbuffers.Offset): void;
    static addOpen(builder: flatbuffers.Builder, OPEN: boolean): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addPoint(builder: flatbuffers.Builder, POINTOffset: flatbuffers.Offset): void;
    static addLineString(builder: flatbuffers.Builder, LINE_STRINGOffset: flatbuffers.Offset): void;
    static addPolygon(builder: flatbuffers.Builder, POLYGONOffset: flatbuffers.Offset): void;
    static addLinearRing(builder: flatbuffers.Builder, LINEAR_RINGOffset: flatbuffers.Offset): void;
    static addMultiGeometry(builder: flatbuffers.Builder, MULTI_GEOMETRYOffset: flatbuffers.Offset): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addTrack(builder: flatbuffers.Builder, TRACKOffset: flatbuffers.Offset): void;
    static addMultiTrack(builder: flatbuffers.Builder, MULTI_TRACKOffset: flatbuffers.Offset): void;
    static addLookAt(builder: flatbuffers.Builder, LOOK_ATOffset: flatbuffers.Offset): void;
    static addCamera(builder: flatbuffers.Builder, CAMERAOffset: flatbuffers.Offset): void;
    static addTimeSpan(builder: flatbuffers.Builder, TIME_SPANOffset: flatbuffers.Offset): void;
    static addTimeStamp(builder: flatbuffers.Builder, TIME_STAMPOffset: flatbuffers.Offset): void;
    static addExtendedData(builder: flatbuffers.Builder, EXTENDED_DATAOffset: flatbuffers.Offset): void;
    static createExtendedDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExtendedDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSchemaData(builder: flatbuffers.Builder, SCHEMA_DATAOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static addStyleMap(builder: flatbuffers.Builder, STYLE_MAPOffset: flatbuffers.Offset): void;
    static endKMLPlacemark(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLPlacemarkT;
    unpackTo(_o: KMLPlacemarkT): void;
}
export declare class KMLPlacemarkT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    STYLE_URL: string | Uint8Array | null;
    STYLE: KMLStyleT | null;
    SNIPPET: string | Uint8Array | null;
    OPEN: boolean;
    ADDRESS: string | Uint8Array | null;
    POINT: KMLPointT | null;
    LINE_STRING: KMLLineStringT | null;
    POLYGON: KMLPolygonT | null;
    LINEAR_RING: KMLLinearRingT | null;
    MULTI_GEOMETRY: KMLMultiGeometryT | null;
    MODEL: KMLModelT | null;
    TRACK: KMLTrackT | null;
    MULTI_TRACK: KMLMultiTrackT | null;
    LOOK_AT: KMLLookAtT | null;
    CAMERA: KMLCameraT | null;
    TIME_SPAN: KMLTimeSpanT | null;
    TIME_STAMP: KMLTimeStampT | null;
    EXTENDED_DATA: (KMLDataT)[];
    SCHEMA_DATA: KMLSchemaDataT | null;
    REGION: KMLRegionT | null;
    STYLE_MAP: KMLStyleMapT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, STYLE_URL?: string | Uint8Array | null, STYLE?: KMLStyleT | null, SNIPPET?: string | Uint8Array | null, OPEN?: boolean, ADDRESS?: string | Uint8Array | null, POINT?: KMLPointT | null, LINE_STRING?: KMLLineStringT | null, POLYGON?: KMLPolygonT | null, LINEAR_RING?: KMLLinearRingT | null, MULTI_GEOMETRY?: KMLMultiGeometryT | null, MODEL?: KMLModelT | null, TRACK?: KMLTrackT | null, MULTI_TRACK?: KMLMultiTrackT | null, LOOK_AT?: KMLLookAtT | null, CAMERA?: KMLCameraT | null, TIME_SPAN?: KMLTimeSpanT | null, TIME_STAMP?: KMLTimeStampT | null, EXTENDED_DATA?: (KMLDataT)[], SCHEMA_DATA?: KMLSchemaDataT | null, REGION?: KMLRegionT | null, STYLE_MAP?: KMLStyleMapT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPlacemark.d.ts.map