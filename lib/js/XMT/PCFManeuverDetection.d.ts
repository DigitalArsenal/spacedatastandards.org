import * as flatbuffers from 'flatbuffers';
import { pcfInnovationCorrelation } from './pcfInnovationCorrelation.js';
/**
 * Maneuver detection from fit innovations: a generalized-likelihood-ratio
 * scan of the six mean elements.
 */
export declare class PCFManeuverDetection implements flatbuffers.IUnpackableObject<PCFManeuverDetectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFManeuverDetection;
    static getRootAsPCFManeuverDetection(bb: flatbuffers.ByteBuffer, obj?: PCFManeuverDetection): PCFManeuverDetection;
    static getSizePrefixedRootAsPCFManeuverDetection(bb: flatbuffers.ByteBuffer, obj?: PCFManeuverDetection): PCFManeuverDetection;
    /**
     * False-alarm rate the THRESHOLD is calibrated for, per object-year. A
     * provider that cannot recalibrate refuses another rate. Default 1.
     */
    FALSE_ALARMS_PER_OBJECT_YEAR(): number;
    /**
     * How innovation correlation is weighted. Default ONE_SAMPLE_PER_REVOLUTION.
     */
    CORRELATION_MODEL(): pcfInnovationCorrelation;
    /**
     * The statistic Lambda (chi-square, 3 degrees of freedom) above which a
     * maneuver is declared. Default 20.
     */
    THRESHOLD(): number;
    /**
     * States kept clear at each end of the arc when scanning. Default 12.
     */
    MARGIN_STATES(): number;
    /**
     * Half-width of the window the burn epoch is refined in, hours. Default 2.
     */
    REFINE_WINDOW_HOURS(): number;
    /**
     * Fewest states an arc must hold to be scanned. Default 48.
     */
    MINIMUM_STATES(): number;
    static startPCFManeuverDetection(builder: flatbuffers.Builder): void;
    static addFalseAlarmsPerObjectYear(builder: flatbuffers.Builder, FALSE_ALARMS_PER_OBJECT_YEAR: number): void;
    static addCorrelationModel(builder: flatbuffers.Builder, CORRELATION_MODEL: pcfInnovationCorrelation): void;
    static addThreshold(builder: flatbuffers.Builder, THRESHOLD: number): void;
    static addMarginStates(builder: flatbuffers.Builder, MARGIN_STATES: number): void;
    static addRefineWindowHours(builder: flatbuffers.Builder, REFINE_WINDOW_HOURS: number): void;
    static addMinimumStates(builder: flatbuffers.Builder, MINIMUM_STATES: number): void;
    static endPCFManeuverDetection(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFManeuverDetection(builder: flatbuffers.Builder, FALSE_ALARMS_PER_OBJECT_YEAR: number, CORRELATION_MODEL: pcfInnovationCorrelation, THRESHOLD: number, MARGIN_STATES: number, REFINE_WINDOW_HOURS: number, MINIMUM_STATES: number): flatbuffers.Offset;
    unpack(): PCFManeuverDetectionT;
    unpackTo(_o: PCFManeuverDetectionT): void;
}
export declare class PCFManeuverDetectionT implements flatbuffers.IGeneratedObject {
    FALSE_ALARMS_PER_OBJECT_YEAR: number;
    CORRELATION_MODEL: pcfInnovationCorrelation;
    THRESHOLD: number;
    MARGIN_STATES: number;
    REFINE_WINDOW_HOURS: number;
    MINIMUM_STATES: number;
    constructor(FALSE_ALARMS_PER_OBJECT_YEAR?: number, CORRELATION_MODEL?: pcfInnovationCorrelation, THRESHOLD?: number, MARGIN_STATES?: number, REFINE_WINDOW_HOURS?: number, MINIMUM_STATES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFManeuverDetection.d.ts.map