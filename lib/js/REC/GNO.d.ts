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
    /**
     * Time scale of EPOCH as the file names it: GPS, GLO, GAL, QZS, BDT or IRN.
     * Default empty (not stated).
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RINEX epoch flag: 0 OK, 1 power failure since the previous epoch, 2 start of
     * a moving antenna, 3 new site occupation, 4 header information follows, 5
     * external event, 6 cycle slip records follow. Default 0.
     */
    EPOCH_FLAG(): number;
    /**
     * Marker name from the header. Default empty.
     */
    MARKER_NAME(): string | null;
    MARKER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Marker number from the header. Default empty.
     */
    MARKER_NUMBER(): string | null;
    MARKER_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Marker type from the header. Default empty.
     */
    MARKER_TYPE(): string | null;
    MARKER_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observer from the header. Default empty.
     */
    OBSERVER(): string | null;
    OBSERVER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Agency from the header. Default empty.
     */
    AGENCY(): string | null;
    AGENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna delta from the marker to the antenna reference point: height, east,
     * north, meters, as [H, E, N]. Default empty.
     */
    ANTENNA_DELTA_HEN(index: number): number | null;
    antennaDeltaHenLength(): number;
    antennaDeltaHenArray(): Float64Array | null;
    /**
     * Phase shift records as the header writes them, one per line, for example
     * "G L2S -0.25000". Default empty.
     */
    PHASE_SHIFTS(index: number): string;
    PHASE_SHIFTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    phaseShiftsLength(): number;
    /**
     * Unit of the signal strength observations as the header states it. Default
     * empty.
     */
    SIGNAL_STRENGTH_UNIT(): string | null;
    SIGNAL_STRENGTH_UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Leap seconds of the header (RINEX LEAP SECONDS), seconds. Meaningful only
     * when HAS_LEAP_SECONDS.
     */
    LEAP_SECONDS(): number;
    /**
     * True when LEAP_SECONDS carries a value; false (the default) means absent.
     */
    HAS_LEAP_SECONDS(): boolean;
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
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEpochFlag(builder: flatbuffers.Builder, EPOCH_FLAG: number): void;
    static addMarkerName(builder: flatbuffers.Builder, MARKER_NAMEOffset: flatbuffers.Offset): void;
    static addMarkerNumber(builder: flatbuffers.Builder, MARKER_NUMBEROffset: flatbuffers.Offset): void;
    static addMarkerType(builder: flatbuffers.Builder, MARKER_TYPEOffset: flatbuffers.Offset): void;
    static addObserver(builder: flatbuffers.Builder, OBSERVEROffset: flatbuffers.Offset): void;
    static addAgency(builder: flatbuffers.Builder, AGENCYOffset: flatbuffers.Offset): void;
    static addAntennaDeltaHen(builder: flatbuffers.Builder, ANTENNA_DELTA_HENOffset: flatbuffers.Offset): void;
    static createAntennaDeltaHenVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAntennaDeltaHenVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAntennaDeltaHenVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhaseShifts(builder: flatbuffers.Builder, PHASE_SHIFTSOffset: flatbuffers.Offset): void;
    static createPhaseShiftsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhaseShiftsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignalStrengthUnit(builder: flatbuffers.Builder, SIGNAL_STRENGTH_UNITOffset: flatbuffers.Offset): void;
    static addLeapSeconds(builder: flatbuffers.Builder, LEAP_SECONDS: number): void;
    static addHasLeapSeconds(builder: flatbuffers.Builder, HAS_LEAP_SECONDS: boolean): void;
    static endGNO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGNOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGNO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, RECEIVER_IDOffset: flatbuffers.Offset, RECEIVER_TYPEOffset: flatbuffers.Offset, ANTENNA_IDOffset: flatbuffers.Offset, ANTENNA_TYPEOffset: flatbuffers.Offset, FIRMWARE_VERSIONOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, CLOCK_OFFSET: number, CLOCK_DRIFT: number, LATITUDE: number, LONGITUDE: number, ALTITUDE: number, APPROX_X: number, APPROX_Y: number, APPROX_Z: number, INTERVAL: number, NUM_SATS: number, PDOP: number, HDOP: number, VDOP: number, SAT_OBSOffset: flatbuffers.Offset, OBS_CODE_SETOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, EPOCH_FLAG: number, MARKER_NAMEOffset: flatbuffers.Offset, MARKER_NUMBEROffset: flatbuffers.Offset, MARKER_TYPEOffset: flatbuffers.Offset, OBSERVEROffset: flatbuffers.Offset, AGENCYOffset: flatbuffers.Offset, ANTENNA_DELTA_HENOffset: flatbuffers.Offset, PHASE_SHIFTSOffset: flatbuffers.Offset, SIGNAL_STRENGTH_UNITOffset: flatbuffers.Offset, LEAP_SECONDS: number, HAS_LEAP_SECONDS: boolean): flatbuffers.Offset;
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
    TIME_SYSTEM: string | Uint8Array | null;
    EPOCH_FLAG: number;
    MARKER_NAME: string | Uint8Array | null;
    MARKER_NUMBER: string | Uint8Array | null;
    MARKER_TYPE: string | Uint8Array | null;
    OBSERVER: string | Uint8Array | null;
    AGENCY: string | Uint8Array | null;
    ANTENNA_DELTA_HEN: (number)[];
    PHASE_SHIFTS: (string)[];
    SIGNAL_STRENGTH_UNIT: string | Uint8Array | null;
    LEAP_SECONDS: number;
    HAS_LEAP_SECONDS: boolean;
    constructor(ID?: string | Uint8Array | null, RECEIVER_ID?: string | Uint8Array | null, RECEIVER_TYPE?: string | Uint8Array | null, ANTENNA_ID?: string | Uint8Array | null, ANTENNA_TYPE?: string | Uint8Array | null, FIRMWARE_VERSION?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, CLOCK_OFFSET?: number, CLOCK_DRIFT?: number, LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number, APPROX_X?: number, APPROX_Y?: number, APPROX_Z?: number, INTERVAL?: number, NUM_SATS?: number, PDOP?: number, HDOP?: number, VDOP?: number, SAT_OBS?: (gnssSatObsT)[], OBS_CODE_SET?: (string)[], NOTES?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, EPOCH_FLAG?: number, MARKER_NAME?: string | Uint8Array | null, MARKER_NUMBER?: string | Uint8Array | null, MARKER_TYPE?: string | Uint8Array | null, OBSERVER?: string | Uint8Array | null, AGENCY?: string | Uint8Array | null, ANTENNA_DELTA_HEN?: (number)[], PHASE_SHIFTS?: (string)[], SIGNAL_STRENGTH_UNIT?: string | Uint8Array | null, LEAP_SECONDS?: number, HAS_LEAP_SECONDS?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNO.d.ts.map