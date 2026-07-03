import * as flatbuffers from 'flatbuffers';
import { maintenanceType } from './maintenanceType.js';
/**
 * Sensor Maintenance Event
 */
export declare class sensorMaintenanceEvent implements flatbuffers.IUnpackableObject<sensorMaintenanceEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sensorMaintenanceEvent;
    static getRootAssensorMaintenanceEvent(bb: flatbuffers.ByteBuffer, obj?: sensorMaintenanceEvent): sensorMaintenanceEvent;
    static getSizePrefixedRootAssensorMaintenanceEvent(bb: flatbuffers.ByteBuffer, obj?: sensorMaintenanceEvent): sensorMaintenanceEvent;
    /**
     * Maintenance start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maintenance end time (ISO 8601)
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of maintenance
     */
    TYPE(): maintenanceType;
    /**
     * Description of maintenance performed
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Components affected
     */
    COMPONENTS(index: number): string;
    COMPONENTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    componentsLength(): number;
    static startsensorMaintenanceEvent(builder: flatbuffers.Builder): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: maintenanceType): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addComponents(builder: flatbuffers.Builder, COMPONENTSOffset: flatbuffers.Offset): void;
    static createComponentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startComponentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endsensorMaintenanceEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createsensorMaintenanceEvent(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, TYPE: maintenanceType, DESCRIPTIONOffset: flatbuffers.Offset, COMPONENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): sensorMaintenanceEventT;
    unpackTo(_o: sensorMaintenanceEventT): void;
}
export declare class sensorMaintenanceEventT implements flatbuffers.IGeneratedObject {
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    TYPE: maintenanceType;
    DESCRIPTION: string | Uint8Array | null;
    COMPONENTS: (string)[];
    constructor(START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, TYPE?: maintenanceType, DESCRIPTION?: string | Uint8Array | null, COMPONENTS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sensorMaintenanceEvent.d.ts.map