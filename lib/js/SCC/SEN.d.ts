import * as flatbuffers from 'flatbuffers';
import { sensorMaintenanceEvent, sensorMaintenanceEventT } from './sensorMaintenanceEvent.js';
import { sensorPlan, sensorPlanT } from './sensorPlan.js';
import { sensorStats, sensorStatsT } from './sensorStats.js';
import { sensorStatus } from './sensorStatus.js';
/**
 * Sensor Management
 */
export declare class SEN implements flatbuffers.IUnpackableObject<SENT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SEN;
    static getRootAsSEN(bb: flatbuffers.ByteBuffer, obj?: SEN): SEN;
    static getSizePrefixedRootAsSEN(bb: flatbuffers.ByteBuffer, obj?: SEN): SEN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique sensor identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor type
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Current operational status
     */
    STATUS(): sensorStatus;
    /**
     * Site identifier
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geodetic latitude in degrees
     */
    LATITUDE(): number;
    /**
     * Geodetic longitude in degrees
     */
    LONGITUDE(): number;
    /**
     * Altitude in meters above WGS-84
     */
    ALTITUDE(): number;
    /**
     * Last status update (ISO 8601)
     */
    STATUS_TIME(): string | null;
    STATUS_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maintenance history
     */
    MAINTENANCE(index: number, obj?: sensorMaintenanceEvent): sensorMaintenanceEvent | null;
    maintenanceLength(): number;
    /**
     * Observation plans/taskings
     */
    PLANS(index: number, obj?: sensorPlan): sensorPlan | null;
    plansLength(): number;
    /**
     * Operational statistics
     */
    STATISTICS(index: number, obj?: sensorStats): sensorStats | null;
    statisticsLength(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSEN(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: sensorStatus): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addStatusTime(builder: flatbuffers.Builder, STATUS_TIMEOffset: flatbuffers.Offset): void;
    static addMaintenance(builder: flatbuffers.Builder, MAINTENANCEOffset: flatbuffers.Offset): void;
    static createMaintenanceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMaintenanceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlans(builder: flatbuffers.Builder, PLANSOffset: flatbuffers.Offset): void;
    static createPlansVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlansVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatistics(builder: flatbuffers.Builder, STATISTICSOffset: flatbuffers.Offset): void;
    static createStatisticsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatisticsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endSEN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSENBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSENBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSEN(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, STATUS: sensorStatus, SITE_IDOffset: flatbuffers.Offset, LATITUDE: number, LONGITUDE: number, ALTITUDE: number, STATUS_TIMEOffset: flatbuffers.Offset, MAINTENANCEOffset: flatbuffers.Offset, PLANSOffset: flatbuffers.Offset, STATISTICSOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SENT;
    unpackTo(_o: SENT): void;
}
export declare class SENT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    STATUS: sensorStatus;
    SITE_ID: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE: number;
    STATUS_TIME: string | Uint8Array | null;
    MAINTENANCE: (sensorMaintenanceEventT)[];
    PLANS: (sensorPlanT)[];
    STATISTICS: (sensorStatsT)[];
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, STATUS?: sensorStatus, SITE_ID?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, ALTITUDE?: number, STATUS_TIME?: string | Uint8Array | null, MAINTENANCE?: (sensorMaintenanceEventT)[], PLANS?: (sensorPlanT)[], STATISTICS?: (sensorStatsT)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SEN.d.ts.map