import * as flatbuffers from 'flatbuffers';
import { scnGlobeDisplay } from './scnGlobeDisplay.js';
import { scnRicCoordinates } from './scnRicCoordinates.js';
/**
 * Relative-motion RIC box and RPO time-lapse settings kept with a scenario.
 */
export declare class SCNRicBox implements flatbuffers.IUnpackableObject<SCNRicBoxT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNRicBox;
    static getRootAsSCNRicBox(bb: flatbuffers.ByteBuffer, obj?: SCNRicBox): SCNRicBox;
    static getSizePrefixedRootAsSCNRicBox(bb: flatbuffers.ByteBuffer, obj?: SCNRicBox): SCNRicBox;
    /**
     * Reference id of the center (target) object.
     */
    CENTER_ID(): string | null;
    CENTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference ids of the member (chaser / companion) objects inside the box.
     */
    MEMBER_IDS(index: number): string;
    MEMBER_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    memberIdsLength(): number;
    /**
     * Half-size along the radial axis in meters (0 means auto-fit).
     */
    HALF_RADIAL_M(): number;
    /**
     * Half-size along the in-track axis in meters (0 means auto-fit).
     */
    HALF_IN_TRACK_M(): number;
    /**
     * Half-size along the cross-track axis in meters (0 means auto-fit).
     */
    HALF_CROSS_TRACK_M(): number;
    /**
     * Coordinate convention (curvilinear along the orbit, or rectilinear).
     */
    COORDINATES(): scnRicCoordinates;
    /**
     * True when member orbits are drawn relative to the center object.
     */
    RELATIVE_ORBITS(): boolean;
    /**
     * Globe display mode while the RIC box is shown.
     */
    GLOBE_DISPLAY(): scnGlobeDisplay;
    /**
     * True when 1-sigma wireframe covariance ellipsoids are shown on boxed objects.
     */
    SHOW_COVARIANCE(): boolean;
    /**
     * Grid divisions per side (0 uses viewer default).
     */
    DIVISIONS(): number;
    /**
     * RPO time-lapse trail duration in seconds (0 uses viewer default).
     */
    RPO_TRAIL_SECONDS(): number;
    /**
     * Reference ids of chasers flying historical RPO trajectories in this RIC box.
     */
    RPO_CHASER_IDS(index: number): string;
    RPO_CHASER_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rpoChaserIdsLength(): number;
    /**
     * True when the RIC box itself is visible.
     */
    SHOW_BOX(): boolean;
    static startSCNRicBox(builder: flatbuffers.Builder): void;
    static addCenterId(builder: flatbuffers.Builder, CENTER_IDOffset: flatbuffers.Offset): void;
    static addMemberIds(builder: flatbuffers.Builder, MEMBER_IDSOffset: flatbuffers.Offset): void;
    static createMemberIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMemberIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHalfRadialM(builder: flatbuffers.Builder, HALF_RADIAL_M: number): void;
    static addHalfInTrackM(builder: flatbuffers.Builder, HALF_IN_TRACK_M: number): void;
    static addHalfCrossTrackM(builder: flatbuffers.Builder, HALF_CROSS_TRACK_M: number): void;
    static addCoordinates(builder: flatbuffers.Builder, COORDINATES: scnRicCoordinates): void;
    static addRelativeOrbits(builder: flatbuffers.Builder, RELATIVE_ORBITS: boolean): void;
    static addGlobeDisplay(builder: flatbuffers.Builder, GLOBE_DISPLAY: scnGlobeDisplay): void;
    static addShowCovariance(builder: flatbuffers.Builder, SHOW_COVARIANCE: boolean): void;
    static addDivisions(builder: flatbuffers.Builder, DIVISIONS: number): void;
    static addRpoTrailSeconds(builder: flatbuffers.Builder, RPO_TRAIL_SECONDS: number): void;
    static addRpoChaserIds(builder: flatbuffers.Builder, RPO_CHASER_IDSOffset: flatbuffers.Offset): void;
    static createRpoChaserIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRpoChaserIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShowBox(builder: flatbuffers.Builder, SHOW_BOX: boolean): void;
    static endSCNRicBox(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNRicBox(builder: flatbuffers.Builder, CENTER_IDOffset: flatbuffers.Offset, MEMBER_IDSOffset: flatbuffers.Offset, HALF_RADIAL_M: number, HALF_IN_TRACK_M: number, HALF_CROSS_TRACK_M: number, COORDINATES: scnRicCoordinates, RELATIVE_ORBITS: boolean, GLOBE_DISPLAY: scnGlobeDisplay, SHOW_COVARIANCE: boolean, DIVISIONS: number, RPO_TRAIL_SECONDS: number, RPO_CHASER_IDSOffset: flatbuffers.Offset, SHOW_BOX: boolean): flatbuffers.Offset;
    unpack(): SCNRicBoxT;
    unpackTo(_o: SCNRicBoxT): void;
}
export declare class SCNRicBoxT implements flatbuffers.IGeneratedObject {
    CENTER_ID: string | Uint8Array | null;
    MEMBER_IDS: (string)[];
    HALF_RADIAL_M: number;
    HALF_IN_TRACK_M: number;
    HALF_CROSS_TRACK_M: number;
    COORDINATES: scnRicCoordinates;
    RELATIVE_ORBITS: boolean;
    GLOBE_DISPLAY: scnGlobeDisplay;
    SHOW_COVARIANCE: boolean;
    DIVISIONS: number;
    RPO_TRAIL_SECONDS: number;
    RPO_CHASER_IDS: (string)[];
    SHOW_BOX: boolean;
    constructor(CENTER_ID?: string | Uint8Array | null, MEMBER_IDS?: (string)[], HALF_RADIAL_M?: number, HALF_IN_TRACK_M?: number, HALF_CROSS_TRACK_M?: number, COORDINATES?: scnRicCoordinates, RELATIVE_ORBITS?: boolean, GLOBE_DISPLAY?: scnGlobeDisplay, SHOW_COVARIANCE?: boolean, DIVISIONS?: number, RPO_TRAIL_SECONDS?: number, RPO_CHASER_IDS?: (string)[], SHOW_BOX?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNRicBox.d.ts.map