import * as flatbuffers from 'flatbuffers';
import { CZMBillboard, CZMBillboardT } from './CZMBillboard.js';
import { CZMBox, CZMBoxT } from './CZMBox.js';
import { CZMCartesian, CZMCartesianT } from './CZMCartesian.js';
import { CZMCartographicDegrees, CZMCartographicDegreesT } from './CZMCartographicDegrees.js';
import { CZMCorridor, CZMCorridorT } from './CZMCorridor.js';
import { CZMCylinder, CZMCylinderT } from './CZMCylinder.js';
import { CZMDynamicProperty, CZMDynamicPropertyT } from './CZMDynamicProperty.js';
import { CZMEllipse, CZMEllipseT } from './CZMEllipse.js';
import { CZMEllipsoid, CZMEllipsoidT } from './CZMEllipsoid.js';
import { CZMInterpolation, CZMInterpolationT } from './CZMInterpolation.js';
import { CZMLabel, CZMLabelT } from './CZMLabel.js';
import { CZMModel, CZMModelT } from './CZMModel.js';
import { CZMOrientation, CZMOrientationT } from './CZMOrientation.js';
import { CZMPath, CZMPathT } from './CZMPath.js';
import { CZMPoint, CZMPointT } from './CZMPoint.js';
import { CZMPolygon, CZMPolygonT } from './CZMPolygon.js';
import { CZMPolyline, CZMPolylineT } from './CZMPolyline.js';
import { CZMPolylineVolume, CZMPolylineVolumeT } from './CZMPolylineVolume.js';
import { CZMRectangle, CZMRectangleT } from './CZMRectangle.js';
import { CZMTileset, CZMTilesetT } from './CZMTileset.js';
import { CZMViewFrom, CZMViewFromT } from './CZMViewFrom.js';
import { CZMWall, CZMWallT } from './CZMWall.js';
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
    /**
     * Orientation (quaternion)
     */
    ORIENTATION(obj?: CZMOrientation): CZMOrientation | null;
    /**
     * Suggested camera offset
     */
    VIEW_FROM(obj?: CZMViewFrom): CZMViewFrom | null;
    /**
     * Whether to delete this object
     */
    DELETE(): boolean;
    /**
     * Box properties
     */
    BOX(obj?: CZMBox): CZMBox | null;
    /**
     * Corridor properties
     */
    CORRIDOR(obj?: CZMCorridor): CZMCorridor | null;
    /**
     * Cylinder properties
     */
    CYLINDER(obj?: CZMCylinder): CZMCylinder | null;
    /**
     * Ellipsoid properties
     */
    ELLIPSOID(obj?: CZMEllipsoid): CZMEllipsoid | null;
    /**
     * Polyline volume properties
     */
    POLYLINE_VOLUME(obj?: CZMPolylineVolume): CZMPolylineVolume | null;
    /**
     * Rectangle properties
     */
    RECTANGLE(obj?: CZMRectangle): CZMRectangle | null;
    /**
     * 3D Tileset properties
     */
    TILESET(obj?: CZMTileset): CZMTileset | null;
    /**
     * Wall properties
     */
    WALL(obj?: CZMWall): CZMWall | null;
    /**
     * Position interpolation settings
     */
    POSITION_INTERPOLATION(obj?: CZMInterpolation): CZMInterpolation | null;
    /**
     * Position reference frame (FIXED or INERTIAL)
     */
    POSITION_REFERENCE_FRAME(): string | null;
    POSITION_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position reference to another entity
     */
    POSITION_REFERENCE(): string | null;
    POSITION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orientation epoch (ISO 8601)
     */
    ORIENTATION_EPOCH(): string | null;
    ORIENTATION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orientation sampled data [t, x, y, z, w, t, x, y, z, w, ...]
     */
    ORIENTATION_ARRAY(index: number): number | null;
    orientationArrayLength(): number;
    orientationArrayArray(): Float64Array | null;
    /**
     * Orientation interpolation settings
     */
    ORIENTATION_INTERPOLATION(obj?: CZMInterpolation): CZMInterpolation | null;
    /**
     * Orientation reference to another entity
     */
    ORIENTATION_REFERENCE(): string | null;
    ORIENTATION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Generic bag for all time-dynamic (non-static) properties
     */
    DYNAMIC_PROPERTIES(index: number, obj?: CZMDynamicProperty): CZMDynamicProperty | null;
    dynamicPropertiesLength(): number;
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
    static addOrientation(builder: flatbuffers.Builder, ORIENTATIONOffset: flatbuffers.Offset): void;
    static addViewFrom(builder: flatbuffers.Builder, VIEW_FROMOffset: flatbuffers.Offset): void;
    static addDelete(builder: flatbuffers.Builder, DELETE: boolean): void;
    static addBox(builder: flatbuffers.Builder, BOXOffset: flatbuffers.Offset): void;
    static addCorridor(builder: flatbuffers.Builder, CORRIDOROffset: flatbuffers.Offset): void;
    static addCylinder(builder: flatbuffers.Builder, CYLINDEROffset: flatbuffers.Offset): void;
    static addEllipsoid(builder: flatbuffers.Builder, ELLIPSOIDOffset: flatbuffers.Offset): void;
    static addPolylineVolume(builder: flatbuffers.Builder, POLYLINE_VOLUMEOffset: flatbuffers.Offset): void;
    static addRectangle(builder: flatbuffers.Builder, RECTANGLEOffset: flatbuffers.Offset): void;
    static addTileset(builder: flatbuffers.Builder, TILESETOffset: flatbuffers.Offset): void;
    static addWall(builder: flatbuffers.Builder, WALLOffset: flatbuffers.Offset): void;
    static addPositionInterpolation(builder: flatbuffers.Builder, POSITION_INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addPositionReferenceFrame(builder: flatbuffers.Builder, POSITION_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addPositionReference(builder: flatbuffers.Builder, POSITION_REFERENCEOffset: flatbuffers.Offset): void;
    static addOrientationEpoch(builder: flatbuffers.Builder, ORIENTATION_EPOCHOffset: flatbuffers.Offset): void;
    static addOrientationArray(builder: flatbuffers.Builder, ORIENTATION_ARRAYOffset: flatbuffers.Offset): void;
    static createOrientationArrayVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOrientationArrayVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOrientationArrayVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrientationInterpolation(builder: flatbuffers.Builder, ORIENTATION_INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addOrientationReference(builder: flatbuffers.Builder, ORIENTATION_REFERENCEOffset: flatbuffers.Offset): void;
    static addDynamicProperties(builder: flatbuffers.Builder, DYNAMIC_PROPERTIESOffset: flatbuffers.Offset): void;
    static createDynamicPropertiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDynamicPropertiesVector(builder: flatbuffers.Builder, numElems: number): void;
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
    ORIENTATION: CZMOrientationT | null;
    VIEW_FROM: CZMViewFromT | null;
    DELETE: boolean;
    BOX: CZMBoxT | null;
    CORRIDOR: CZMCorridorT | null;
    CYLINDER: CZMCylinderT | null;
    ELLIPSOID: CZMEllipsoidT | null;
    POLYLINE_VOLUME: CZMPolylineVolumeT | null;
    RECTANGLE: CZMRectangleT | null;
    TILESET: CZMTilesetT | null;
    WALL: CZMWallT | null;
    POSITION_INTERPOLATION: CZMInterpolationT | null;
    POSITION_REFERENCE_FRAME: string | Uint8Array | null;
    POSITION_REFERENCE: string | Uint8Array | null;
    ORIENTATION_EPOCH: string | Uint8Array | null;
    ORIENTATION_ARRAY: (number)[];
    ORIENTATION_INTERPOLATION: CZMInterpolationT | null;
    ORIENTATION_REFERENCE: string | Uint8Array | null;
    DYNAMIC_PROPERTIES: (CZMDynamicPropertyT)[];
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, PARENT?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, AVAILABILITY?: string | Uint8Array | null, POSITION_CARTOGRAPHIC_DEGREES?: CZMCartographicDegreesT | null, POSITION_CARTESIAN?: CZMCartesianT | null, POSITION_EPOCH?: string | Uint8Array | null, POSITION_CARTOGRAPHIC_DEGREES_ARRAY?: (number)[], POSITION_CARTESIAN_ARRAY?: (number)[], BILLBOARD?: CZMBillboardT | null, LABEL?: CZMLabelT | null, POINT?: CZMPointT | null, POLYLINE?: CZMPolylineT | null, POLYGON?: CZMPolygonT | null, MODEL?: CZMModelT | null, PATH?: CZMPathT | null, ELLIPSE?: CZMEllipseT | null, ORIENTATION?: CZMOrientationT | null, VIEW_FROM?: CZMViewFromT | null, DELETE?: boolean, BOX?: CZMBoxT | null, CORRIDOR?: CZMCorridorT | null, CYLINDER?: CZMCylinderT | null, ELLIPSOID?: CZMEllipsoidT | null, POLYLINE_VOLUME?: CZMPolylineVolumeT | null, RECTANGLE?: CZMRectangleT | null, TILESET?: CZMTilesetT | null, WALL?: CZMWallT | null, POSITION_INTERPOLATION?: CZMInterpolationT | null, POSITION_REFERENCE_FRAME?: string | Uint8Array | null, POSITION_REFERENCE?: string | Uint8Array | null, ORIENTATION_EPOCH?: string | Uint8Array | null, ORIENTATION_ARRAY?: (number)[], ORIENTATION_INTERPOLATION?: CZMInterpolationT | null, ORIENTATION_REFERENCE?: string | Uint8Array | null, DYNAMIC_PROPERTIES?: (CZMDynamicPropertyT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPacket.d.ts.map