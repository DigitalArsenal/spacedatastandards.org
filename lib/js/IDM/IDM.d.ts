import * as flatbuffers from 'flatbuffers';
import { Band, BandT } from './Band.js';
import { DataMode } from './DataMode.js';
import { DeviceType } from './DeviceType.js';
import { FrequencyRange, FrequencyRangeT } from './FrequencyRange.js';
import { PolarizationType } from './PolarizationType.js';
import { SimplePolarization } from './SimplePolarization.js';
import { StokesParameters, StokesParametersT } from './StokesParameters.js';
/**
 * Integrated Device Message
 */
export declare class IDM implements flatbuffers.IUnpackableObject<IDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IDM;
    static getRootAsIDM(bb: flatbuffers.ByteBuffer, obj?: IDM): IDM;
    static getSizePrefixedRootAsIDM(bb: flatbuffers.ByteBuffer, obj?: IDM): IDM;
    /**
     * Unique identifier for the EMT
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the EMT
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of the data (real, simulated, synthetic)
     */
    DATA_MODE(): DataMode;
    /**
     * Uplink frequency range
     */
    UPLINK(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Downlink frequency range
     */
    DOWNLINK(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Beacon frequency range
     */
    BEACON(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Bands associated with the EMT
     */
    BAND(index: number, obj?: Band): Band | null;
    bandLength(): number;
    /**
     * Type of polarization used
     */
    POLARIZATION_TYPE(): PolarizationType;
    /**
     * Simple polarization configuration
     */
    SIMPLE_POLARIZATION(): SimplePolarization;
    /**
     * Stokes parameters for polarization characterization
     */
    STOKES_PARAMETERS(obj?: StokesParameters): StokesParameters | null;
    /**
     * Power required in Watts
     */
    POWER_REQUIRED(): number;
    /**
     * Type of power (eg. AC or DC)
     */
    POWER_TYPE(): string | null;
    POWER_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the EMT can transmit
     */
    TRANSMIT(): boolean;
    /**
     * Indicates if the EMT can receive
     */
    RECEIVE(): boolean;
    /**
     * Type of the sensor
     */
    SENSOR_TYPE(): DeviceType;
    /**
     * Source of the data
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp of the last observation
     */
    LAST_OB_TIME(): string | null;
    LAST_OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lower left elevation limit
     */
    LOWER_LEFT_ELEVATION_LIMIT(): number;
    /**
     * Upper left azimuth limit
     */
    UPPER_LEFT_AZIMUTH_LIMIT(): number;
    /**
     * Lower right elevation limit
     */
    LOWER_RIGHT_ELEVATION_LIMIT(): number;
    /**
     * Lower left azimuth limit
     */
    LOWER_LEFT_AZIMUTH_LIMIT(): number;
    /**
     * Upper right elevation limit
     */
    UPPER_RIGHT_ELEVATION_LIMIT(): number;
    /**
     * Upper right azimuth limit
     */
    UPPER_RIGHT_AZIMUTH_LIMIT(): number;
    /**
     * Lower right azimuth limit
     */
    LOWER_RIGHT_AZIMUTH_LIMIT(): number;
    /**
     * Upper left elevation limit
     */
    UPPER_LEFT_ELEVATION_LIMIT(): number;
    /**
     * Right geostationary belt limit
     */
    RIGHT_GEO_BELT_LIMIT(): number;
    /**
     * Left geostationary belt limit
     */
    LEFT_GEO_BELT_LIMIT(): number;
    /**
     * Magnitude limit of the sensor
     */
    MAGNITUDE_LIMIT(): number;
    /**
     * Indicates if the site is taskable
     */
    TASKABLE(): boolean;
    static startIDM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDataMode(builder: flatbuffers.Builder, DATA_MODE: DataMode): void;
    static addUplink(builder: flatbuffers.Builder, UPLINKOffset: flatbuffers.Offset): void;
    static addDownlink(builder: flatbuffers.Builder, DOWNLINKOffset: flatbuffers.Offset): void;
    static addBeacon(builder: flatbuffers.Builder, BEACONOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static createBandVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBandVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarizationType(builder: flatbuffers.Builder, POLARIZATION_TYPE: PolarizationType): void;
    static addSimplePolarization(builder: flatbuffers.Builder, SIMPLE_POLARIZATION: SimplePolarization): void;
    static addStokesParameters(builder: flatbuffers.Builder, STOKES_PARAMETERSOffset: flatbuffers.Offset): void;
    static addPowerRequired(builder: flatbuffers.Builder, POWER_REQUIRED: number): void;
    static addPowerType(builder: flatbuffers.Builder, POWER_TYPEOffset: flatbuffers.Offset): void;
    static addTransmit(builder: flatbuffers.Builder, TRANSMIT: boolean): void;
    static addReceive(builder: flatbuffers.Builder, RECEIVE: boolean): void;
    static addSensorType(builder: flatbuffers.Builder, SENSOR_TYPE: DeviceType): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addLastObTime(builder: flatbuffers.Builder, LAST_OB_TIMEOffset: flatbuffers.Offset): void;
    static addLowerLeftElevationLimit(builder: flatbuffers.Builder, LOWER_LEFT_ELEVATION_LIMIT: number): void;
    static addUpperLeftAzimuthLimit(builder: flatbuffers.Builder, UPPER_LEFT_AZIMUTH_LIMIT: number): void;
    static addLowerRightElevationLimit(builder: flatbuffers.Builder, LOWER_RIGHT_ELEVATION_LIMIT: number): void;
    static addLowerLeftAzimuthLimit(builder: flatbuffers.Builder, LOWER_LEFT_AZIMUTH_LIMIT: number): void;
    static addUpperRightElevationLimit(builder: flatbuffers.Builder, UPPER_RIGHT_ELEVATION_LIMIT: number): void;
    static addUpperRightAzimuthLimit(builder: flatbuffers.Builder, UPPER_RIGHT_AZIMUTH_LIMIT: number): void;
    static addLowerRightAzimuthLimit(builder: flatbuffers.Builder, LOWER_RIGHT_AZIMUTH_LIMIT: number): void;
    static addUpperLeftElevationLimit(builder: flatbuffers.Builder, UPPER_LEFT_ELEVATION_LIMIT: number): void;
    static addRightGeoBeltLimit(builder: flatbuffers.Builder, RIGHT_GEO_BELT_LIMIT: number): void;
    static addLeftGeoBeltLimit(builder: flatbuffers.Builder, LEFT_GEO_BELT_LIMIT: number): void;
    static addMagnitudeLimit(builder: flatbuffers.Builder, MAGNITUDE_LIMIT: number): void;
    static addTaskable(builder: flatbuffers.Builder, TASKABLE: boolean): void;
    static endIDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): IDMT;
    unpackTo(_o: IDMT): void;
}
export declare class IDMT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DATA_MODE: DataMode;
    UPLINK: FrequencyRangeT | null;
    DOWNLINK: FrequencyRangeT | null;
    BEACON: FrequencyRangeT | null;
    BAND: (BandT)[];
    POLARIZATION_TYPE: PolarizationType;
    SIMPLE_POLARIZATION: SimplePolarization;
    STOKES_PARAMETERS: StokesParametersT | null;
    POWER_REQUIRED: number;
    POWER_TYPE: string | Uint8Array | null;
    TRANSMIT: boolean;
    RECEIVE: boolean;
    SENSOR_TYPE: DeviceType;
    SOURCE: string | Uint8Array | null;
    LAST_OB_TIME: string | Uint8Array | null;
    LOWER_LEFT_ELEVATION_LIMIT: number;
    UPPER_LEFT_AZIMUTH_LIMIT: number;
    LOWER_RIGHT_ELEVATION_LIMIT: number;
    LOWER_LEFT_AZIMUTH_LIMIT: number;
    UPPER_RIGHT_ELEVATION_LIMIT: number;
    UPPER_RIGHT_AZIMUTH_LIMIT: number;
    LOWER_RIGHT_AZIMUTH_LIMIT: number;
    UPPER_LEFT_ELEVATION_LIMIT: number;
    RIGHT_GEO_BELT_LIMIT: number;
    LEFT_GEO_BELT_LIMIT: number;
    MAGNITUDE_LIMIT: number;
    TASKABLE: boolean;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DATA_MODE?: DataMode, UPLINK?: FrequencyRangeT | null, DOWNLINK?: FrequencyRangeT | null, BEACON?: FrequencyRangeT | null, BAND?: (BandT)[], POLARIZATION_TYPE?: PolarizationType, SIMPLE_POLARIZATION?: SimplePolarization, STOKES_PARAMETERS?: StokesParametersT | null, POWER_REQUIRED?: number, POWER_TYPE?: string | Uint8Array | null, TRANSMIT?: boolean, RECEIVE?: boolean, SENSOR_TYPE?: DeviceType, SOURCE?: string | Uint8Array | null, LAST_OB_TIME?: string | Uint8Array | null, LOWER_LEFT_ELEVATION_LIMIT?: number, UPPER_LEFT_AZIMUTH_LIMIT?: number, LOWER_RIGHT_ELEVATION_LIMIT?: number, LOWER_LEFT_AZIMUTH_LIMIT?: number, UPPER_RIGHT_ELEVATION_LIMIT?: number, UPPER_RIGHT_AZIMUTH_LIMIT?: number, LOWER_RIGHT_AZIMUTH_LIMIT?: number, UPPER_LEFT_ELEVATION_LIMIT?: number, RIGHT_GEO_BELT_LIMIT?: number, LEFT_GEO_BELT_LIMIT?: number, MAGNITUDE_LIMIT?: number, TASKABLE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IDM.d.ts.map