import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Burn times absent until reached; zero means an actual edge at initial epoch.
 */
export declare class PRWBurnReport implements flatbuffers.IUnpackableObject<PRWBurnReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWBurnReport;
    static getRootAsPRWBurnReport(bb: flatbuffers.ByteBuffer, obj?: PRWBurnReport): PRWBurnReport;
    static getSizePrefixedRootAsPRWBurnReport(bb: flatbuffers.ByteBuffer, obj?: PRWBurnReport): PRWBurnReport;
    BURN_INDEX(): number;
    STARTED(): boolean;
    STOPPED(): boolean;
    START_BY_EVENT(): boolean;
    STOP_BY_EVENT(): boolean;
    START_SECONDS(): number;
    /**
     * True when START_SECONDS carries a value; false means absent.
     */
    HAS_START_SECONDS(): boolean;
    STOP_SECONDS(): number;
    /**
     * True when STOP_SECONDS carries a value; false means absent.
     */
    HAS_STOP_SECONDS(): boolean;
    START_EPOCH(obj?: TIMInstant): TIMInstant | null;
    STOP_EPOCH(obj?: TIMInstant): TIMInstant | null;
    /**
     * Integral of thrust acceleration magnitude, m/s; not vector net delta-v.
     */
    DELTA_V_M_S(): number;
    PROPELLANT_KG(): number;
    static startPRWBurnReport(builder: flatbuffers.Builder): void;
    static addBurnIndex(builder: flatbuffers.Builder, BURN_INDEX: number): void;
    static addStarted(builder: flatbuffers.Builder, STARTED: boolean): void;
    static addStopped(builder: flatbuffers.Builder, STOPPED: boolean): void;
    static addStartByEvent(builder: flatbuffers.Builder, START_BY_EVENT: boolean): void;
    static addStopByEvent(builder: flatbuffers.Builder, STOP_BY_EVENT: boolean): void;
    static addStartSeconds(builder: flatbuffers.Builder, START_SECONDS: number): void;
    static addHasStartSeconds(builder: flatbuffers.Builder, HAS_START_SECONDS: boolean): void;
    static addStopSeconds(builder: flatbuffers.Builder, STOP_SECONDS: number): void;
    static addHasStopSeconds(builder: flatbuffers.Builder, HAS_STOP_SECONDS: boolean): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addDeltaVMS(builder: flatbuffers.Builder, DELTA_V_M_S: number): void;
    static addPropellantKg(builder: flatbuffers.Builder, PROPELLANT_KG: number): void;
    static endPRWBurnReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWBurnReportT;
    unpackTo(_o: PRWBurnReportT): void;
}
export declare class PRWBurnReportT implements flatbuffers.IGeneratedObject {
    BURN_INDEX: number;
    STARTED: boolean;
    STOPPED: boolean;
    START_BY_EVENT: boolean;
    STOP_BY_EVENT: boolean;
    START_SECONDS: number;
    HAS_START_SECONDS: boolean;
    STOP_SECONDS: number;
    HAS_STOP_SECONDS: boolean;
    START_EPOCH: TIMInstantT | null;
    STOP_EPOCH: TIMInstantT | null;
    DELTA_V_M_S: number;
    PROPELLANT_KG: number;
    constructor(BURN_INDEX?: number, STARTED?: boolean, STOPPED?: boolean, START_BY_EVENT?: boolean, STOP_BY_EVENT?: boolean, START_SECONDS?: number, HAS_START_SECONDS?: boolean, STOP_SECONDS?: number, HAS_STOP_SECONDS?: boolean, START_EPOCH?: TIMInstantT | null, STOP_EPOCH?: TIMInstantT | null, DELTA_V_M_S?: number, PROPELLANT_KG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWBurnReport.d.ts.map