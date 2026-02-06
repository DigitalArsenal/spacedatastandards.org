import * as flatbuffers from 'flatbuffers';
import { gnssSatObs, gnssSatObsT } from './gnssSatObs.js';
/**
 * GNSS Observation
 */
export declare class GNO implements flatbuffers.IUnpackableObject<GNOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNO;
    static getRootAsGNO(bb: flatbuffers.ByteBuffer, obj?: GNO): GNO;
    static getSizePrefixedRootAsGNO(bb: flatbuffers.ByteBuffer, obj?: GNO): GNO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver identifier
     */
    RECEIVER_ID(): string | null;
    RECEIVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver type/model
     */
    RECEIVER_TYPE(): string | null;
    RECEIVER_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna identifier
     */
    ANTENNA_ID(): string | null;
    ANTENNA_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna type/model
     */
    ANTENNA_TYPE(): string | null;
    ANTENNA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver firmware version
     */
    FIRMWARE_VERSION(): string | null;
    FIRMWARE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver clock offset in seconds
     */
    CLOCK_OFFSET(): number;
    /**
     * Receiver clock drift in seconds/second
     */
    CLOCK_DRIFT(): number;
    /**
     * Receiver geodetic latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Receiver geodetic longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Receiver altitude in meters above WGS-84
     */
    ALTITUDE(): number;
    /**
     * Approximate position X in meters (ECEF)
     */
    APPROX_X(): number;
    /**
     * Approximate position Y in meters (ECEF)
     */
    APPROX_Y(): number;
    /**
     * Approximate position Z in meters (ECEF)
     */
    APPROX_Z(): number;
    /**
     * Observation interval in seconds
     */
    INTERVAL(): number;
    /**
     * Number of satellites observed
     */
    NUM_SATS(): number;
    /**
     * PDOP
     */
    PDOP(): number;
    /**
     * HDOP
     */
    HDOP(): number;
    /**
     * VDOP
     */
    VDOP(): number;
    /**
     * Satellite observations
     */
    SAT_OBS(index: number, obj?: gnssSatObs): gnssSatObs | null;
    satObsLength(): number;
    /**
     * Observation code set identifiers
     */
    OBS_CODE_SET(index: number): string;
    OBS_CODE_SET(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    obsCodeSetLength(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGNO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addReceiverId(builder: flatbuffers.Builder, RECEIVER_IDOffset: flatbuffers.Offset): void;
    static addReceiverType(builder: flatbuffers.Builder, RECEIVER_TYPEOffset: flatbuffers.Offset): void;
    static addAntennaId(builder: flatbuffers.Builder, ANTENNA_IDOffset: flatbuffers.Offset): void;
    static addAntennaType(builder: flatbuffers.Builder, ANTENNA_TYPEOffset: flatbuffers.Offset): void;
    static addFirmwareVersion(builder: flatbuffers.Builder, FIRMWARE_VERSIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addClockOffset(builder: flatbuffers.Builder, CLOCK_OFFSET: number): void;
    static addClockDrift(builder: flatbuffers.Builder, CLOCK_DRIFT: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addApproxX(builder: flatbuffers.Builder, APPROX_X: number): void;
    static addApproxY(builder: flatbuffers.Builder, APPROX_Y: number): void;
    static addApproxZ(builder: flatbuffers.Builder, APPROX_Z: number): void;
    static addInterval(builder: flatbuffers.Builder, INTERVAL: number): void;
    static addNumSats(builder: flatbuffers.Builder, NUM_SATS: number): void;
    static addPdop(builder: flatbuffers.Builder, PDOP: number): void;
    static addHdop(builder: flatbuffers.Builder, HDOP: number): void;
    static addVdop(builder: flatbuffers.Builder, VDOP: number): void;
    static addSatObs(builder: flatbuffers.Builder, SAT_OBSOffset: flatbuffers.Offset): void;
    static createSatObsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSatObsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObsCodeSet(builder: flatbuffers.Builder, OBS_CODE_SETOffset: flatbuffers.Offset): void;
    static createObsCodeSetVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObsCodeSetVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endGNO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGNO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, RECEIVER_IDOffset: flatbuffers.Offset, RECEIVER_TYPEOffset: flatbuffers.Offset, ANTENNA_IDOffset: flatbuffers.Offset, ANTENNA_TYPEOffset: flatbuffers.Offset, FIRMWARE_VERSIONOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, CLOCK_OFFSET: number, CLOCK_DRIFT: number, LATITUDE: number, LONGITUDE: number, ALTITUDE: number, APPROX_X: number, APPROX_Y: number, APPROX_Z: number, INTERVAL: number, NUM_SATS: number, PDOP: number, HDOP: number, VDOP: number, SAT_OBSOffset: flatbuffers.Offset, OBS_CODE_SETOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GNOT;
    unpackTo(_o: GNOT): void;
}
export declare class GNOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    RECEIVER_ID: string | Uint8Array | null;
    RECEIVER_TYPE: string | Uint8Array | null;
    ANTENNA_ID: string | Uint8Array | null;
    ANTENNA_TYPE: string | Uint8Array | null;
    FIRMWARE_VERSION: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    CLOCK_OFFSET: number;
    CLOCK_DRIFT: number;
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE: number;
    APPROX_X: number;
    APPROX_Y: number;
    APPROX_Z: number;
    INTERVAL: number;
    NUM_SATS: number;
    PDOP: number;
    HDOP: number;
    VDOP: number;
    SAT_OBS: (gnssSatObsT)[];
    OBS_CODE_SET: (string)[];
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, RECEIVER_ID?: string | Uint8Array | null, RECEIVER_TYPE?: string | Uint8Array | null, ANTENNA_ID?: string | Uint8Array | null, ANTENNA_TYPE?: string | Uint8Array | null, FIRMWARE_VERSION?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, CLOCK_OFFSET?: number, CLOCK_DRIFT?: number, LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number, APPROX_X?: number, APPROX_Y?: number, APPROX_Z?: number, INTERVAL?: number, NUM_SATS?: number, PDOP?: number, HDOP?: number, VDOP?: number, SAT_OBS?: (gnssSatObsT)[], OBS_CODE_SET?: (string)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNO.d.ts.map