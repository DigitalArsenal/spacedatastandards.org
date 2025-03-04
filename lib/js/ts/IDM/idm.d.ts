import * as flatbuffers from 'flatbuffers';
import { Band, BandT } from './band.js';
import { DataMode } from './data-mode.js';
import { DeviceType } from './device-type.js';
import { FrequencyRange, FrequencyRangeT } from './frequency-range.js';
import { PolarizationType } from './polarization-type.js';
import { SimplePolarization } from './simple-polarization.js';
import { StokesParameters, StokesParametersT } from './stokes-parameters.js';
/**
 * Integrated Device Message
 */
export declare class IDM implements flatbuffers.IUnpackableObject<IDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IDM;
    static getRootAsIDM(bb: flatbuffers.ByteBuffer, obj?: IDM): IDM;
    static getSizePrefixedRootAsIDM(bb: flatbuffers.ByteBuffer, obj?: IDM): IDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for the EMT
     */
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the EMT
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of the data (real, simulated, synthetic)
     */
    dataMode(): DataMode;
    /**
     * Uplink frequency range
     */
    uplink(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Downlink frequency range
     */
    downlink(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Beacon frequency range
     */
    beacon(obj?: FrequencyRange): FrequencyRange | null;
    /**
     * Bands associated with the EMT
     */
    band(index: number, obj?: Band): Band | null;
    bandLength(): number;
    /**
     * Type of polarization used
     */
    polarizationType(): PolarizationType;
    /**
     * Simple polarization configuration
     */
    simplePolarization(): SimplePolarization;
    /**
     * Stokes parameters for polarization characterization
     */
    stokesParameters(obj?: StokesParameters): StokesParameters | null;
    /**
     * Power required in Watts
     */
    powerRequired(): number;
    /**
     * Type of power (eg. AC or DC)
     */
    powerType(): string | null;
    powerType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the EMT can transmit
     */
    transmit(): boolean;
    /**
     * Indicates if the EMT can receive
     */
    receive(): boolean;
    /**
     * Type of the sensor
     */
    sensorType(): DeviceType;
    /**
     * Source of the data
     */
    source(): string | null;
    source(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp of the last observation
     */
    lastObTime(): string | null;
    lastObTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lower left elevation limit
     */
    lowerLeftElevationLimit(): number;
    /**
     * Upper left azimuth limit
     */
    upperLeftAzimuthLimit(): number;
    /**
     * Lower right elevation limit
     */
    lowerRightElevationLimit(): number;
    /**
     * Lower left azimuth limit
     */
    lowerLeftAzimuthLimit(): number;
    /**
     * Upper right elevation limit
     */
    upperRightElevationLimit(): number;
    /**
     * Upper right azimuth limit
     */
    upperRightAzimuthLimit(): number;
    /**
     * Lower right azimuth limit
     */
    lowerRightAzimuthLimit(): number;
    /**
     * Upper left elevation limit
     */
    upperLeftElevationLimit(): number;
    /**
     * Right geostationary belt limit
     */
    rightGeoBeltLimit(): number;
    /**
     * Left geostationary belt limit
     */
    leftGeoBeltLimit(): number;
    /**
     * Magnitude limit of the sensor
     */
    magnitudeLimit(): number;
    /**
     * Indicates if the site is taskable
     */
    taskable(): boolean;
    static startIDM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addDataMode(builder: flatbuffers.Builder, dataMode: DataMode): void;
    static addUplink(builder: flatbuffers.Builder, uplinkOffset: flatbuffers.Offset): void;
    static addDownlink(builder: flatbuffers.Builder, downlinkOffset: flatbuffers.Offset): void;
    static addBeacon(builder: flatbuffers.Builder, beaconOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, bandOffset: flatbuffers.Offset): void;
    static createBandVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBandVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarizationType(builder: flatbuffers.Builder, polarizationType: PolarizationType): void;
    static addSimplePolarization(builder: flatbuffers.Builder, simplePolarization: SimplePolarization): void;
    static addStokesParameters(builder: flatbuffers.Builder, stokesParametersOffset: flatbuffers.Offset): void;
    static addPowerRequired(builder: flatbuffers.Builder, powerRequired: number): void;
    static addPowerType(builder: flatbuffers.Builder, powerTypeOffset: flatbuffers.Offset): void;
    static addTransmit(builder: flatbuffers.Builder, transmit: boolean): void;
    static addReceive(builder: flatbuffers.Builder, receive: boolean): void;
    static addSensorType(builder: flatbuffers.Builder, sensorType: DeviceType): void;
    static addSource(builder: flatbuffers.Builder, sourceOffset: flatbuffers.Offset): void;
    static addLastObTime(builder: flatbuffers.Builder, lastObTimeOffset: flatbuffers.Offset): void;
    static addLowerLeftElevationLimit(builder: flatbuffers.Builder, lowerLeftElevationLimit: number): void;
    static addUpperLeftAzimuthLimit(builder: flatbuffers.Builder, upperLeftAzimuthLimit: number): void;
    static addLowerRightElevationLimit(builder: flatbuffers.Builder, lowerRightElevationLimit: number): void;
    static addLowerLeftAzimuthLimit(builder: flatbuffers.Builder, lowerLeftAzimuthLimit: number): void;
    static addUpperRightElevationLimit(builder: flatbuffers.Builder, upperRightElevationLimit: number): void;
    static addUpperRightAzimuthLimit(builder: flatbuffers.Builder, upperRightAzimuthLimit: number): void;
    static addLowerRightAzimuthLimit(builder: flatbuffers.Builder, lowerRightAzimuthLimit: number): void;
    static addUpperLeftElevationLimit(builder: flatbuffers.Builder, upperLeftElevationLimit: number): void;
    static addRightGeoBeltLimit(builder: flatbuffers.Builder, rightGeoBeltLimit: number): void;
    static addLeftGeoBeltLimit(builder: flatbuffers.Builder, leftGeoBeltLimit: number): void;
    static addMagnitudeLimit(builder: flatbuffers.Builder, magnitudeLimit: number): void;
    static addTaskable(builder: flatbuffers.Builder, taskable: boolean): void;
    static endIDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishIDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedIDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): IDMT;
    unpackTo(_o: IDMT): void;
}
export declare class IDMT implements flatbuffers.IGeneratedObject {
    id: string | Uint8Array | null;
    name: string | Uint8Array | null;
    dataMode: DataMode;
    uplink: FrequencyRangeT | null;
    downlink: FrequencyRangeT | null;
    beacon: FrequencyRangeT | null;
    band: (BandT)[];
    polarizationType: PolarizationType;
    simplePolarization: SimplePolarization;
    stokesParameters: StokesParametersT | null;
    powerRequired: number;
    powerType: string | Uint8Array | null;
    transmit: boolean;
    receive: boolean;
    sensorType: DeviceType;
    source: string | Uint8Array | null;
    lastObTime: string | Uint8Array | null;
    lowerLeftElevationLimit: number;
    upperLeftAzimuthLimit: number;
    lowerRightElevationLimit: number;
    lowerLeftAzimuthLimit: number;
    upperRightElevationLimit: number;
    upperRightAzimuthLimit: number;
    lowerRightAzimuthLimit: number;
    upperLeftElevationLimit: number;
    rightGeoBeltLimit: number;
    leftGeoBeltLimit: number;
    magnitudeLimit: number;
    taskable: boolean;
    constructor(id?: string | Uint8Array | null, name?: string | Uint8Array | null, dataMode?: DataMode, uplink?: FrequencyRangeT | null, downlink?: FrequencyRangeT | null, beacon?: FrequencyRangeT | null, band?: (BandT)[], polarizationType?: PolarizationType, simplePolarization?: SimplePolarization, stokesParameters?: StokesParametersT | null, powerRequired?: number, powerType?: string | Uint8Array | null, transmit?: boolean, receive?: boolean, sensorType?: DeviceType, source?: string | Uint8Array | null, lastObTime?: string | Uint8Array | null, lowerLeftElevationLimit?: number, upperLeftAzimuthLimit?: number, lowerRightElevationLimit?: number, lowerLeftAzimuthLimit?: number, upperRightElevationLimit?: number, upperRightAzimuthLimit?: number, lowerRightAzimuthLimit?: number, upperLeftElevationLimit?: number, rightGeoBeltLimit?: number, leftGeoBeltLimit?: number, magnitudeLimit?: number, taskable?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=idm.d.ts.map