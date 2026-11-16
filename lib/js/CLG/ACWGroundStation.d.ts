import * as flatbuffers from 'flatbuffers';
import { ACWBlackoutWindow, ACWBlackoutWindowT } from './ACWBlackoutWindow.js';
/**
 * Ground-station geodetic definition and scheduling constraints.
 */
export declare class ACWGroundStation implements flatbuffers.IUnpackableObject<ACWGroundStationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWGroundStation;
    static getRootAsACWGroundStation(bb: flatbuffers.ByteBuffer, obj?: ACWGroundStation): ACWGroundStation;
    static getSizePrefixedRootAsACWGroundStation(bb: flatbuffers.ByteBuffer, obj?: ACWGroundStation): ACWGroundStation;
    STATION_ID(): string | null;
    STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geodetic latitude, radians.
     */
    LATITUDE_RAD(): number;
    /**
     * Geodetic longitude, radians.
     */
    LONGITUDE_RAD(): number;
    /**
     * Height along the outward normal of CENTRAL_BODY ellipsoid, meters.
     * docs/clg-contract.md section 4: at height > 0, own-body interior penetration of the
     * finite segment blocks; tangent contact is clear. At height <= 0, including
     * zero, use the supporting plane, without an own-ellipsoid intersection test.
     * The user elevation mask and supplied terrain apply separately at all heights.
     */
    ALTITUDE_M(): number;
    /**
     * Explicit minimum visible elevation, radians; HAS flag required.
     */
    MIN_ELEVATION_RAD(): number;
    /**
     * Number of simultaneous contacts this station can schedule.
     */
    CHANNEL_CAPACITY(): number;
    /**
     * Station-specific unavailable intervals.
     */
    BLACKOUT_WINDOWS(index: number, obj?: ACWBlackoutWindow): ACWBlackoutWindow | null;
    blackoutWindowsLength(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_LATITUDE_RAD(): boolean;
    HAS_LONGITUDE_RAD(): boolean;
    HAS_ALTITUDE_M(): boolean;
    HAS_MIN_ELEVATION_RAD(): boolean;
    HAS_CHANNEL_CAPACITY(): boolean;
    static startACWGroundStation(builder: flatbuffers.Builder): void;
    static addStationId(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addLatitudeRad(builder: flatbuffers.Builder, LATITUDE_RAD: number): void;
    static addLongitudeRad(builder: flatbuffers.Builder, LONGITUDE_RAD: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addMinElevationRad(builder: flatbuffers.Builder, MIN_ELEVATION_RAD: number): void;
    static addChannelCapacity(builder: flatbuffers.Builder, CHANNEL_CAPACITY: number): void;
    static addBlackoutWindows(builder: flatbuffers.Builder, BLACKOUT_WINDOWSOffset: flatbuffers.Offset): void;
    static createBlackoutWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBlackoutWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasLatitudeRad(builder: flatbuffers.Builder, HAS_LATITUDE_RAD: boolean): void;
    static addHasLongitudeRad(builder: flatbuffers.Builder, HAS_LONGITUDE_RAD: boolean): void;
    static addHasAltitudeM(builder: flatbuffers.Builder, HAS_ALTITUDE_M: boolean): void;
    static addHasMinElevationRad(builder: flatbuffers.Builder, HAS_MIN_ELEVATION_RAD: boolean): void;
    static addHasChannelCapacity(builder: flatbuffers.Builder, HAS_CHANNEL_CAPACITY: boolean): void;
    static endACWGroundStation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWGroundStation(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, LATITUDE_RAD: number, LONGITUDE_RAD: number, ALTITUDE_M: number, MIN_ELEVATION_RAD: number, CHANNEL_CAPACITY: number, BLACKOUT_WINDOWSOffset: flatbuffers.Offset, HAS_LATITUDE_RAD: boolean, HAS_LONGITUDE_RAD: boolean, HAS_ALTITUDE_M: boolean, HAS_MIN_ELEVATION_RAD: boolean, HAS_CHANNEL_CAPACITY: boolean): flatbuffers.Offset;
    unpack(): ACWGroundStationT;
    unpackTo(_o: ACWGroundStationT): void;
}
export declare class ACWGroundStationT implements flatbuffers.IGeneratedObject {
    STATION_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    LATITUDE_RAD: number;
    LONGITUDE_RAD: number;
    ALTITUDE_M: number;
    MIN_ELEVATION_RAD: number;
    CHANNEL_CAPACITY: number;
    BLACKOUT_WINDOWS: (ACWBlackoutWindowT)[];
    HAS_LATITUDE_RAD: boolean;
    HAS_LONGITUDE_RAD: boolean;
    HAS_ALTITUDE_M: boolean;
    HAS_MIN_ELEVATION_RAD: boolean;
    HAS_CHANNEL_CAPACITY: boolean;
    constructor(STATION_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, LATITUDE_RAD?: number, LONGITUDE_RAD?: number, ALTITUDE_M?: number, MIN_ELEVATION_RAD?: number, CHANNEL_CAPACITY?: number, BLACKOUT_WINDOWS?: (ACWBlackoutWindowT)[], HAS_LATITUDE_RAD?: boolean, HAS_LONGITUDE_RAD?: boolean, HAS_ALTITUDE_M?: boolean, HAS_MIN_ELEVATION_RAD?: boolean, HAS_CHANNEL_CAPACITY?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWGroundStation.d.ts.map