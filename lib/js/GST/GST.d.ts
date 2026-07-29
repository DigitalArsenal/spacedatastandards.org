import * as flatbuffers from 'flatbuffers';
import { gstAntennaAxisType } from './gstAntennaAxisType.js';
import { gstFrameRealization } from './gstFrameRealization.js';
import { gstNetwork } from './gstNetwork.js';
/**
 * Ground/Tracking Station Definition — the geodetic identity and geometry of
 * one tracking station, sufficient to reduce a radiometric or laser
 * observation taken from it.
 *
 * This is deliberately NOT $SEN. $SEN describes an SSA sensor site by
 * latitude/longitude/altitude with tasking plans and statistics; it carries no
 * terrestrial frame realization, no station velocity, no reference epoch, and
 * no antenna axis geometry. Station coordinates without a frame realization
 * and an epoch cannot be propagated for plate motion and are therefore not
 * usable for orbit determination.
 */
export declare class GST implements flatbuffers.IUnpackableObject<GSTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GST;
    static getRootAsGST(bb: flatbuffers.ByteBuffer, obj?: GST): GST;
    static getSizePrefixedRootAsGST(bb: flatbuffers.ByteBuffer, obj?: GST): GST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable station identifier as used by the operating network, e.g. "DSS-63".
     */
    STATION_ID(): string;
    STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable station name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating network.
     */
    NETWORK(): gstNetwork;
    /**
     * IERS DOMES number, when the station has one.
     */
    DOMES_NUMBER(): string | null;
    DOMES_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NASA CDP / SLR site number, when the station has one.
     */
    CDP_NUMBER(): string | null;
    CDP_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Terrestrial reference frame realization of POSITION_* and VELOCITY_*.
     */
    FRAME_REALIZATION(): gstFrameRealization;
    /**
     * Free-text realization name, required when FRAME_REALIZATION is OTHER.
     */
    FRAME_REALIZATION_NAME(): string | null;
    FRAME_REALIZATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch at which POSITION_* is valid, ISO 8601. Positions MUST be
     * propagated to the observation epoch with VELOCITY_* before use.
     */
    REFERENCE_EPOCH(): string | null;
    REFERENCE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station position in the stated realization, metres.
     */
    POSITION_X(): number;
    POSITION_Y(): number;
    POSITION_Z(): number;
    /**
     * Station velocity (plate motion) in the stated realization, metres per
     * year. Zero is a claim that the station does not move, not a default.
     */
    VELOCITY_X(): number;
    VELOCITY_Y(): number;
    VELOCITY_Z(): number;
    /**
     * 1-sigma position uncertainty, metres.
     */
    POSITION_SIGMA_X(): number;
    POSITION_SIGMA_Y(): number;
    POSITION_SIGMA_Z(): number;
    /**
     * Antenna mount geometry.
     */
    ANTENNA_AXIS_TYPE(): gstAntennaAxisType;
    /**
     * Distance between the two mount axes, metres. Zero for an intersecting-axis
     * mount.
     */
    AXIS_OFFSET_M(): number;
    /**
     * Vector from the monument marker to the antenna reference point, metres.
     */
    ECCENTRICITY_X(): number;
    ECCENTRICITY_Y(): number;
    ECCENTRICITY_Z(): number;
    /**
     * Frame the eccentricity vector is expressed in, e.g. "XYZ" (geocentric
     * Cartesian) or "NEU" (local north-east-up).
     */
    ECCENTRICITY_FRAME(): string | null;
    ECCENTRICITY_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uplink bands the station can transmit, e.g. ["S", "X", "Ka"].
     */
    TRANSMIT_BANDS(index: number): string;
    TRANSMIT_BANDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    transmitBandsLength(): number;
    /**
     * Downlink bands the station can receive.
     */
    RECEIVE_BANDS(index: number): string;
    RECEIVE_BANDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    receiveBandsLength(): number;
    /**
     * Station clock offset from the stated time scale, seconds.
     */
    CLOCK_OFFSET_S(): number;
    /**
     * Station clock rate, seconds per second.
     */
    CLOCK_RATE_S_PER_S(): number;
    /**
     * Time scale the clock terms are referenced to, e.g. "UTC", "TAI".
     */
    CLOCK_TIME_SCALE(): string | null;
    CLOCK_TIME_SCALE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of the interval over which this definition applies, ISO 8601.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the interval over which this definition applies, ISO 8601.
     */
    VALID_TO(): string | null;
    VALID_TO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provenance of these coordinates, e.g. "DSN 810-005 rev. E", an ILRS SINEX
     * file name, or a VLBI station catalogue identifier.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGST(builder: flatbuffers.Builder): void;
    static addStationId(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addNetwork(builder: flatbuffers.Builder, NETWORK: gstNetwork): void;
    static addDomesNumber(builder: flatbuffers.Builder, DOMES_NUMBEROffset: flatbuffers.Offset): void;
    static addCdpNumber(builder: flatbuffers.Builder, CDP_NUMBEROffset: flatbuffers.Offset): void;
    static addFrameRealization(builder: flatbuffers.Builder, FRAME_REALIZATION: gstFrameRealization): void;
    static addFrameRealizationName(builder: flatbuffers.Builder, FRAME_REALIZATION_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceEpoch(builder: flatbuffers.Builder, REFERENCE_EPOCHOffset: flatbuffers.Offset): void;
    static addPositionX(builder: flatbuffers.Builder, POSITION_X: number): void;
    static addPositionY(builder: flatbuffers.Builder, POSITION_Y: number): void;
    static addPositionZ(builder: flatbuffers.Builder, POSITION_Z: number): void;
    static addVelocityX(builder: flatbuffers.Builder, VELOCITY_X: number): void;
    static addVelocityY(builder: flatbuffers.Builder, VELOCITY_Y: number): void;
    static addVelocityZ(builder: flatbuffers.Builder, VELOCITY_Z: number): void;
    static addPositionSigmaX(builder: flatbuffers.Builder, POSITION_SIGMA_X: number): void;
    static addPositionSigmaY(builder: flatbuffers.Builder, POSITION_SIGMA_Y: number): void;
    static addPositionSigmaZ(builder: flatbuffers.Builder, POSITION_SIGMA_Z: number): void;
    static addAntennaAxisType(builder: flatbuffers.Builder, ANTENNA_AXIS_TYPE: gstAntennaAxisType): void;
    static addAxisOffsetM(builder: flatbuffers.Builder, AXIS_OFFSET_M: number): void;
    static addEccentricityX(builder: flatbuffers.Builder, ECCENTRICITY_X: number): void;
    static addEccentricityY(builder: flatbuffers.Builder, ECCENTRICITY_Y: number): void;
    static addEccentricityZ(builder: flatbuffers.Builder, ECCENTRICITY_Z: number): void;
    static addEccentricityFrame(builder: flatbuffers.Builder, ECCENTRICITY_FRAMEOffset: flatbuffers.Offset): void;
    static addTransmitBands(builder: flatbuffers.Builder, TRANSMIT_BANDSOffset: flatbuffers.Offset): void;
    static createTransmitBandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTransmitBandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceiveBands(builder: flatbuffers.Builder, RECEIVE_BANDSOffset: flatbuffers.Offset): void;
    static createReceiveBandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReceiveBandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockOffsetS(builder: flatbuffers.Builder, CLOCK_OFFSET_S: number): void;
    static addClockRateSPerS(builder: flatbuffers.Builder, CLOCK_RATE_S_PER_S: number): void;
    static addClockTimeScale(builder: flatbuffers.Builder, CLOCK_TIME_SCALEOffset: flatbuffers.Offset): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidTo(builder: flatbuffers.Builder, VALID_TOOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endGST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGST(builder: flatbuffers.Builder, STATION_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, NETWORK: gstNetwork, DOMES_NUMBEROffset: flatbuffers.Offset, CDP_NUMBEROffset: flatbuffers.Offset, FRAME_REALIZATION: gstFrameRealization, FRAME_REALIZATION_NAMEOffset: flatbuffers.Offset, REFERENCE_EPOCHOffset: flatbuffers.Offset, POSITION_X: number, POSITION_Y: number, POSITION_Z: number, VELOCITY_X: number, VELOCITY_Y: number, VELOCITY_Z: number, POSITION_SIGMA_X: number, POSITION_SIGMA_Y: number, POSITION_SIGMA_Z: number, ANTENNA_AXIS_TYPE: gstAntennaAxisType, AXIS_OFFSET_M: number, ECCENTRICITY_X: number, ECCENTRICITY_Y: number, ECCENTRICITY_Z: number, ECCENTRICITY_FRAMEOffset: flatbuffers.Offset, TRANSMIT_BANDSOffset: flatbuffers.Offset, RECEIVE_BANDSOffset: flatbuffers.Offset, CLOCK_OFFSET_S: number, CLOCK_RATE_S_PER_S: number, CLOCK_TIME_SCALEOffset: flatbuffers.Offset, VALID_FROMOffset: flatbuffers.Offset, VALID_TOOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GSTT;
    unpackTo(_o: GSTT): void;
}
export declare class GSTT implements flatbuffers.IGeneratedObject {
    STATION_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    NETWORK: gstNetwork;
    DOMES_NUMBER: string | Uint8Array | null;
    CDP_NUMBER: string | Uint8Array | null;
    FRAME_REALIZATION: gstFrameRealization;
    FRAME_REALIZATION_NAME: string | Uint8Array | null;
    REFERENCE_EPOCH: string | Uint8Array | null;
    POSITION_X: number;
    POSITION_Y: number;
    POSITION_Z: number;
    VELOCITY_X: number;
    VELOCITY_Y: number;
    VELOCITY_Z: number;
    POSITION_SIGMA_X: number;
    POSITION_SIGMA_Y: number;
    POSITION_SIGMA_Z: number;
    ANTENNA_AXIS_TYPE: gstAntennaAxisType;
    AXIS_OFFSET_M: number;
    ECCENTRICITY_X: number;
    ECCENTRICITY_Y: number;
    ECCENTRICITY_Z: number;
    ECCENTRICITY_FRAME: string | Uint8Array | null;
    TRANSMIT_BANDS: (string)[];
    RECEIVE_BANDS: (string)[];
    CLOCK_OFFSET_S: number;
    CLOCK_RATE_S_PER_S: number;
    CLOCK_TIME_SCALE: string | Uint8Array | null;
    VALID_FROM: string | Uint8Array | null;
    VALID_TO: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    constructor(STATION_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, NETWORK?: gstNetwork, DOMES_NUMBER?: string | Uint8Array | null, CDP_NUMBER?: string | Uint8Array | null, FRAME_REALIZATION?: gstFrameRealization, FRAME_REALIZATION_NAME?: string | Uint8Array | null, REFERENCE_EPOCH?: string | Uint8Array | null, POSITION_X?: number, POSITION_Y?: number, POSITION_Z?: number, VELOCITY_X?: number, VELOCITY_Y?: number, VELOCITY_Z?: number, POSITION_SIGMA_X?: number, POSITION_SIGMA_Y?: number, POSITION_SIGMA_Z?: number, ANTENNA_AXIS_TYPE?: gstAntennaAxisType, AXIS_OFFSET_M?: number, ECCENTRICITY_X?: number, ECCENTRICITY_Y?: number, ECCENTRICITY_Z?: number, ECCENTRICITY_FRAME?: string | Uint8Array | null, TRANSMIT_BANDS?: (string)[], RECEIVE_BANDS?: (string)[], CLOCK_OFFSET_S?: number, CLOCK_RATE_S_PER_S?: number, CLOCK_TIME_SCALE?: string | Uint8Array | null, VALID_FROM?: string | Uint8Array | null, VALID_TO?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GST.d.ts.map