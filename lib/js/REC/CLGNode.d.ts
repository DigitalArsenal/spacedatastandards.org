import * as flatbuffers from 'flatbuffers';
import { CLGQuaternion, CLGQuaternionT } from './CLGQuaternion.js';
import { CLGRecordRef, CLGRecordRefT } from './CLGRecordRef.js';
import { CLGVector3, CLGVector3T } from './CLGVector3.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
import { clgAttitudeLaw } from './clgAttitudeLaw.js';
import { clgElevationGate } from './clgElevationGate.js';
import { clgNodeCategory } from './clgNodeCategory.js';
export declare class CLGNode implements flatbuffers.IUnpackableObject<CLGNodeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGNode;
    static getRootAsCLGNode(bb: flatbuffers.ByteBuffer, obj?: CLGNode): CLGNode;
    static getSizePrefixedRootAsCLGNode(bb: flatbuffers.ByteBuffer, obj?: CLGNode): CLGNode;
    NODE_ID(): string;
    NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    CATEGORY(): clgNodeCategory;
    /**
     * All indices require their HAS flag; -1 remains an invalid wire default.
     */
    BODY_INDEX(): number;
    IDENTITY(obj?: CLGRecordRef): CLGRecordRef | null;
    STATE_SOURCE_INDEX(): number;
    MAX_SIMULTANEOUS_LINKS(): number;
    /**
     * Stations: Cartesian fixed-frame meters and ellipsoid-normal unit up.
     */
    SITE_POSITION_M(obj?: CLGVector3): CLGVector3 | null;
    SITE_UP(obj?: CLGVector3): CLGVector3 | null;
    /**
     * Stations require MIN_ELEVATION; spacecraft require NONE and absent angle.
     */
    ELEVATION_GATE(): clgElevationGate;
    MIN_ELEVATION_RAD(): number;
    /**
     * Stations require STATION_ENU. Spacecraft explicitly select one other law.
     */
    ATTITUDE_LAW(): clgAttitudeLaw;
    /**
     * Required only for INERTIALLY_FIXED, node -> declared inertial frame.
     */
    FIXED_ATTITUDE(obj?: CLGQuaternion): CLGQuaternion | null;
    ATTITUDE_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_CATEGORY(): boolean;
    HAS_BODY_INDEX(): boolean;
    HAS_STATE_SOURCE_INDEX(): boolean;
    HAS_MAX_SIMULTANEOUS_LINKS(): boolean;
    HAS_ELEVATION_GATE(): boolean;
    HAS_MIN_ELEVATION_RAD(): boolean;
    HAS_ATTITUDE_LAW(): boolean;
    static startCLGNode(builder: flatbuffers.Builder): void;
    static addNodeId(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: clgNodeCategory): void;
    static addBodyIndex(builder: flatbuffers.Builder, BODY_INDEX: number): void;
    static addIdentity(builder: flatbuffers.Builder, IDENTITYOffset: flatbuffers.Offset): void;
    static addStateSourceIndex(builder: flatbuffers.Builder, STATE_SOURCE_INDEX: number): void;
    static addMaxSimultaneousLinks(builder: flatbuffers.Builder, MAX_SIMULTANEOUS_LINKS: number): void;
    static addSitePositionM(builder: flatbuffers.Builder, SITE_POSITION_MOffset: flatbuffers.Offset): void;
    static addSiteUp(builder: flatbuffers.Builder, SITE_UPOffset: flatbuffers.Offset): void;
    static addElevationGate(builder: flatbuffers.Builder, ELEVATION_GATE: clgElevationGate): void;
    static addMinElevationRad(builder: flatbuffers.Builder, MIN_ELEVATION_RAD: number): void;
    static addAttitudeLaw(builder: flatbuffers.Builder, ATTITUDE_LAW: clgAttitudeLaw): void;
    static addFixedAttitude(builder: flatbuffers.Builder, FIXED_ATTITUDEOffset: flatbuffers.Offset): void;
    static addAttitudeFrame(builder: flatbuffers.Builder, ATTITUDE_FRAMEOffset: flatbuffers.Offset): void;
    static addHasCategory(builder: flatbuffers.Builder, HAS_CATEGORY: boolean): void;
    static addHasBodyIndex(builder: flatbuffers.Builder, HAS_BODY_INDEX: boolean): void;
    static addHasStateSourceIndex(builder: flatbuffers.Builder, HAS_STATE_SOURCE_INDEX: boolean): void;
    static addHasMaxSimultaneousLinks(builder: flatbuffers.Builder, HAS_MAX_SIMULTANEOUS_LINKS: boolean): void;
    static addHasElevationGate(builder: flatbuffers.Builder, HAS_ELEVATION_GATE: boolean): void;
    static addHasMinElevationRad(builder: flatbuffers.Builder, HAS_MIN_ELEVATION_RAD: boolean): void;
    static addHasAttitudeLaw(builder: flatbuffers.Builder, HAS_ATTITUDE_LAW: boolean): void;
    static endCLGNode(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGNodeT;
    unpackTo(_o: CLGNodeT): void;
}
export declare class CLGNodeT implements flatbuffers.IGeneratedObject {
    NODE_ID: string | Uint8Array | null;
    CATEGORY: clgNodeCategory;
    BODY_INDEX: number;
    IDENTITY: CLGRecordRefT | null;
    STATE_SOURCE_INDEX: number;
    MAX_SIMULTANEOUS_LINKS: number;
    SITE_POSITION_M: CLGVector3T | null;
    SITE_UP: CLGVector3T | null;
    ELEVATION_GATE: clgElevationGate;
    MIN_ELEVATION_RAD: number;
    ATTITUDE_LAW: clgAttitudeLaw;
    FIXED_ATTITUDE: CLGQuaternionT | null;
    ATTITUDE_FRAME: RFMCoordinateSystemT | null;
    HAS_CATEGORY: boolean;
    HAS_BODY_INDEX: boolean;
    HAS_STATE_SOURCE_INDEX: boolean;
    HAS_MAX_SIMULTANEOUS_LINKS: boolean;
    HAS_ELEVATION_GATE: boolean;
    HAS_MIN_ELEVATION_RAD: boolean;
    HAS_ATTITUDE_LAW: boolean;
    constructor(NODE_ID?: string | Uint8Array | null, CATEGORY?: clgNodeCategory, BODY_INDEX?: number, IDENTITY?: CLGRecordRefT | null, STATE_SOURCE_INDEX?: number, MAX_SIMULTANEOUS_LINKS?: number, SITE_POSITION_M?: CLGVector3T | null, SITE_UP?: CLGVector3T | null, ELEVATION_GATE?: clgElevationGate, MIN_ELEVATION_RAD?: number, ATTITUDE_LAW?: clgAttitudeLaw, FIXED_ATTITUDE?: CLGQuaternionT | null, ATTITUDE_FRAME?: RFMCoordinateSystemT | null, HAS_CATEGORY?: boolean, HAS_BODY_INDEX?: boolean, HAS_STATE_SOURCE_INDEX?: boolean, HAS_MAX_SIMULTANEOUS_LINKS?: boolean, HAS_ELEVATION_GATE?: boolean, HAS_MIN_ELEVATION_RAD?: boolean, HAS_ATTITUDE_LAW?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGNode.d.ts.map