import * as flatbuffers from 'flatbuffers';
import { EVLEvent, EVLEventT } from './EVLEvent.js';
import { evlLocatorClass } from './evlLocatorClass.js';
import { evlResultStatus } from './evlResultStatus.js';
/**
 * The events found, and the interval they were actually searched over.
 */
export declare class EVLEventReport implements flatbuffers.IUnpackableObject<EVLEventReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLEventReport;
    static getRootAsEVLEventReport(bb: flatbuffers.ByteBuffer, obj?: EVLEventReport): EVLEventReport;
    static getSizePrefixedRootAsEVLEventReport(bb: flatbuffers.ByteBuffer, obj?: EVLEventReport): EVLEventReport;
    STATUS(): evlResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LOCATOR_CLASS(): evlLocatorClass;
    TARGET_OBJECT_ID(): string | null;
    TARGET_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interval actually searched, ISO 8601. A BUDGET_EXCEEDED run reports the
     * interval it reached, not the interval it was asked for.
     */
    SCAN_START_EPOCH(): string | null;
    SCAN_START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCAN_STOP_EPOCH(): string | null;
    SCAN_STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of the epochs, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Events in chronological order of START_EPOCH.
     */
    EVENTS(index: number, obj?: EVLEvent): EVLEvent | null;
    eventsLength(): number;
    /**
     * Event-function evaluations actually performed, for step-independence
     * evidence.
     */
    FUNCTION_EVALUATION_COUNT(): number;
    /**
     * Content identifier of the Earth-orientation data set actually used.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEVLEventReport(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: evlResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addLocatorClass(builder: flatbuffers.Builder, LOCATOR_CLASS: evlLocatorClass): void;
    static addTargetObjectId(builder: flatbuffers.Builder, TARGET_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addScanStartEpoch(builder: flatbuffers.Builder, SCAN_START_EPOCHOffset: flatbuffers.Offset): void;
    static addScanStopEpoch(builder: flatbuffers.Builder, SCAN_STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFunctionEvaluationCount(builder: flatbuffers.Builder, FUNCTION_EVALUATION_COUNT: number): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endEVLEventReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLEventReport(builder: flatbuffers.Builder, STATUS: evlResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, LOCATOR_CLASS: evlLocatorClass, TARGET_OBJECT_IDOffset: flatbuffers.Offset, SCAN_START_EPOCHOffset: flatbuffers.Offset, SCAN_STOP_EPOCHOffset: flatbuffers.Offset, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset, EVENTSOffset: flatbuffers.Offset, FUNCTION_EVALUATION_COUNT: number, EOP_DATA_SET_CIDOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EVLEventReportT;
    unpackTo(_o: EVLEventReportT): void;
}
export declare class EVLEventReportT implements flatbuffers.IGeneratedObject {
    STATUS: evlResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    LOCATOR_CLASS: evlLocatorClass;
    TARGET_OBJECT_ID: string | Uint8Array | null;
    SCAN_START_EPOCH: string | Uint8Array | null;
    SCAN_STOP_EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    EVENTS: (EVLEventT)[];
    FUNCTION_EVALUATION_COUNT: number;
    EOP_DATA_SET_CID: string | Uint8Array | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: evlResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, LOCATOR_CLASS?: evlLocatorClass, TARGET_OBJECT_ID?: string | Uint8Array | null, SCAN_START_EPOCH?: string | Uint8Array | null, SCAN_STOP_EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, EVENTS?: (EVLEventT)[], FUNCTION_EVALUATION_COUNT?: number, EOP_DATA_SET_CID?: string | Uint8Array | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLEventReport.d.ts.map