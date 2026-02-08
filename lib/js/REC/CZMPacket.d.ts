import * as flatbuffers from 'flatbuffers';
import { CZMBillboard, CZMBillboardT } from './CZMBillboard.js';
import { CZMCartesian, CZMCartesianT } from './CZMCartesian.js';
import { CZMCartographicDegrees, CZMCartographicDegreesT } from './CZMCartographicDegrees.js';
import { CZMEllipse, CZMEllipseT } from './CZMEllipse.js';
import { CZMLabel, CZMLabelT } from './CZMLabel.js';
import { CZMModel, CZMModelT } from './CZMModel.js';
import { CZMPath, CZMPathT } from './CZMPath.js';
import { CZMPoint, CZMPointT } from './CZMPoint.js';
import { CZMPolygon, CZMPolygonT } from './CZMPolygon.js';
import { CZMPolyline, CZMPolylineT } from './CZMPolyline.js';
/**
 * A CZML Packet describing an entity and its properties
 */
export declare class CZMPacket implements flatbuffers.IUnpackableObject<CZMPacketT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPacket;
    static getRootAsCZMPacket(bb: flatbuffers.ByteBuffer, obj?: CZMPacket): CZMPacket;
    static getSizePrefixedRootAsCZMPacket(bb: flatbuffers.ByteBuffer, obj?: CZMPacket): CZMPacket;
    /**
     * Unique identifier for this object
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent packet ID
     */
    PARENT(): string | null;
    PARENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description (HTML allowed)
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Availability interval (ISO 8601 interval)
     */
    AVAILABILITY(): string | null;
    AVAILABILITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position as cartographic degrees
     */
    POSITION_CARTOGRAPHIC_DEGREES(obj?: CZMCartographicDegrees): CZMCartographicDegrees | null;
    /**
     * Position as Cartesian
     */
    POSITION_CARTESIAN(obj?: CZMCartesian): CZMCartesian | null;
    /**
     * Time-tagged positions [time, lon, lat, height, time, lon, lat, height, ...]
     */
    POSITION_EPOCH(): string | null;
    POSITION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time-tagged cartographic degree values
     */
    POSITION_CARTOGRAPHIC_DEGREES_ARRAY(index: number): number | null;
    positionCartographicDegreesArrayLength(): number;
    positionCartographicDegreesArrayArray(): Float64Array | null;
    /**
     * Time-tagged Cartesian values
     */
    POSITION_CARTESIAN_ARRAY(index: number): number | null;
    positionCartesianArrayLength(): number;
    positionCartesianArrayArray(): Float64Array | null;
    /**
     * Billboard properties
     */
    BILLBOARD(obj?: CZMBillboard): CZMBillboard | null;
    /**
     * Label properties
     */
    LABEL(obj?: CZMLabel): CZMLabel | null;
    /**
     * Point properties
     */
    POINT(obj?: CZMPoint): CZMPoint | null;
    /**
     * Polyline properties
     */
    POLYLINE(obj?: CZMPolyline): CZMPolyline | null;
    /**
     * Polygon properties
     */
    POLYGON(obj?: CZMPolygon): CZMPolygon | null;
    /**
     * Model properties
     */
    MODEL(obj?: CZMModel): CZMModel | null;
    /**
     * Path properties
     */
    PATH(obj?: CZMPath): CZMPath | null;
    /**
     * Ellipse properties
     */
    ELLIPSE(obj?: CZMEllipse): CZMEllipse | null;
    static startCZMPacket(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addParent(builder: flatbuffers.Builder, PARENTOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAvailability(builder: flatbuffers.Builder, AVAILABILITYOffset: flatbuffers.Offset): void;
    static addPositionCartographicDegrees(builder: flatbuffers.Builder, POSITION_CARTOGRAPHIC_DEGREESOffset: flatbuffers.Offset): void;
    static addPositionCartesian(builder: flatbuffers.Builder, POSITION_CARTESIANOffset: flatbuffers.Offset): void;
    static addPositionEpoch(builder: flatbuffers.Builder, POSITION_EPOCHOffset: flatbuffers.Offset): void;
    static addPositionCartographicDegreesArray(builder: flatbuffers.Builder, POSITION_CARTOGRAPHIC_DEGREES_ARRAYOffset: flatbuffers.Offset): void;
    static createPositionCartographicDegreesArrayVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCartographicDegreesArrayVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCartographicDegreesArrayVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionCartesianArray(builder: flatbuffers.Builder, POSITION_CARTESIAN_ARRAYOffset: flatbuffers.Offset): void;
    static createPositionCartesianArrayVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCartesianArrayVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCartesianArrayVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBillboard(builder: flatbuffers.Builder, BILLBOARDOffset: flatbuffers.Offset): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addPoint(builder: flatbuffers.Builder, POINTOffset: flatbuffers.Offset): void;
    static addPolyline(builder: flatbuffers.Builder, POLYLINEOffset: flatbuffers.Offset): void;
    static addPolygon(builder: flatbuffers.Builder, POLYGONOffset: flatbuffers.Offset): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static addEllipse(builder: flatbuffers.Builder, ELLIPSEOffset: flatbuffers.Offset): void;
    static endCZMPacket(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPacketT;
    unpackTo(_o: CZMPacketT): void;
}
export declare class CZMPacketT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    PARENT: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    AVAILABILITY: string | Uint8Array | null;
    POSITION_CARTOGRAPHIC_DEGREES: CZMCartographicDegreesT | null;
    POSITION_CARTESIAN: CZMCartesianT | null;
    POSITION_EPOCH: string | Uint8Array | null;
    POSITION_CARTOGRAPHIC_DEGREES_ARRAY: (number)[];
    POSITION_CARTESIAN_ARRAY: (number)[];
    BILLBOARD: CZMBillboardT | null;
    LABEL: CZMLabelT | null;
    POINT: CZMPointT | null;
    POLYLINE: CZMPolylineT | null;
    POLYGON: CZMPolygonT | null;
    MODEL: CZMModelT | null;
    PATH: CZMPathT | null;
    ELLIPSE: CZMEllipseT | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, PARENT?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, AVAILABILITY?: string | Uint8Array | null, POSITION_CARTOGRAPHIC_DEGREES?: CZMCartographicDegreesT | null, POSITION_CARTESIAN?: CZMCartesianT | null, POSITION_EPOCH?: string | Uint8Array | null, POSITION_CARTOGRAPHIC_DEGREES_ARRAY?: (number)[], POSITION_CARTESIAN_ARRAY?: (number)[], BILLBOARD?: CZMBillboardT | null, LABEL?: CZMLabelT | null, POINT?: CZMPointT | null, POLYLINE?: CZMPolylineT | null, POLYGON?: CZMPolygonT | null, MODEL?: CZMModelT | null, PATH?: CZMPathT | null, ELLIPSE?: CZMEllipseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPacket.d.ts.map