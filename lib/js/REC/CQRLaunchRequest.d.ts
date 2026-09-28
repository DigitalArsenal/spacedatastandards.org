import * as flatbuffers from 'flatbuffers';
import { CQRLaunchCriterion, CQRLaunchCriterionT } from './CQRLaunchCriterion.js';
import { CQRLaunchObject, CQRLaunchObjectT } from './CQRLaunchObject.js';
import { CQRLaunchSegment, CQRLaunchSegmentT } from './CQRLaunchSegment.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
export declare class CQRLaunchRequest implements flatbuffers.IUnpackableObject<CQRLaunchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchRequest;
    static getRootAsCQRLaunchRequest(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchRequest): CQRLaunchRequest;
    static getSizePrefixedRootAsCQRLaunchRequest(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchRequest): CQRLaunchRequest;
    MISSION_NAME(): string | null;
    MISSION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Liftoff time the segment trajectories were produced for.
     */
    NOMINAL_LIFTOFF(obj?: TIMInstant): TIMInstant | null;
    /**
     * Liftoff window, inclusive of both ends.
     */
    WINDOW_OPEN(obj?: TIMInstant): TIMInstant | null;
    WINDOW_CLOSE(obj?: TIMInstant): TIMInstant | null;
    /**
     * Spacing of evaluated liftoff times, seconds.
     */
    LIFTOFF_STEP_SECONDS(): number;
    SEGMENTS(index: number, obj?: CQRLaunchSegment): CQRLaunchSegment | null;
    segmentsLength(): number;
    OBJECTS(index: number, obj?: CQRLaunchObject): CQRLaunchObject | null;
    objectsLength(): number;
    /**
     * One criterion per object class present in OBJECTS.
     */
    CRITERIA(index: number, obj?: CQRLaunchCriterion): CQRLaunchCriterion | null;
    criteriaLength(): number;
    /**
     * Segment states below this height above the reference ellipsoid are not
     * screened, metres.
     */
    MINIMUM_ALTITUDE_M(): number;
    /**
     * Screening ends this long after liftoff, seconds, or earlier where a
     * trajectory ends.
     */
    SCREEN_SECONDS_AFTER_LIFTOFF(): number;
    /**
     * Time added before and after every closure for vehicle performance and
     * timing uncertainty, seconds.
     */
    CLOSURE_PAD_SECONDS(): number;
    /**
     * Report approaches whose criterion ratio is below this value; 1 reports
     * violations only.
     */
    REPORT_RATIO(): number;
    /**
     * Earth-fixed frame shared by every trajectory and ephemeris.
     */
    EVALUATION_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    static startCQRLaunchRequest(builder: flatbuffers.Builder): void;
    static addMissionName(builder: flatbuffers.Builder, MISSION_NAMEOffset: flatbuffers.Offset): void;
    static addNominalLiftoff(builder: flatbuffers.Builder, NOMINAL_LIFTOFFOffset: flatbuffers.Offset): void;
    static addWindowOpen(builder: flatbuffers.Builder, WINDOW_OPENOffset: flatbuffers.Offset): void;
    static addWindowClose(builder: flatbuffers.Builder, WINDOW_CLOSEOffset: flatbuffers.Offset): void;
    static addLiftoffStepSeconds(builder: flatbuffers.Builder, LIFTOFF_STEP_SECONDS: number): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCriteria(builder: flatbuffers.Builder, CRITERIAOffset: flatbuffers.Offset): void;
    static createCriteriaVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCriteriaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinimumAltitudeM(builder: flatbuffers.Builder, MINIMUM_ALTITUDE_M: number): void;
    static addScreenSecondsAfterLiftoff(builder: flatbuffers.Builder, SCREEN_SECONDS_AFTER_LIFTOFF: number): void;
    static addClosurePadSeconds(builder: flatbuffers.Builder, CLOSURE_PAD_SECONDS: number): void;
    static addReportRatio(builder: flatbuffers.Builder, REPORT_RATIO: number): void;
    static addEvaluationFrame(builder: flatbuffers.Builder, EVALUATION_FRAMEOffset: flatbuffers.Offset): void;
    static endCQRLaunchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRLaunchRequestT;
    unpackTo(_o: CQRLaunchRequestT): void;
}
export declare class CQRLaunchRequestT implements flatbuffers.IGeneratedObject {
    MISSION_NAME: string | Uint8Array | null;
    NOMINAL_LIFTOFF: TIMInstantT | null;
    WINDOW_OPEN: TIMInstantT | null;
    WINDOW_CLOSE: TIMInstantT | null;
    LIFTOFF_STEP_SECONDS: number;
    SEGMENTS: (CQRLaunchSegmentT)[];
    OBJECTS: (CQRLaunchObjectT)[];
    CRITERIA: (CQRLaunchCriterionT)[];
    MINIMUM_ALTITUDE_M: number;
    SCREEN_SECONDS_AFTER_LIFTOFF: number;
    CLOSURE_PAD_SECONDS: number;
    REPORT_RATIO: number;
    EVALUATION_FRAME: RFMCoordinateSystemT | null;
    constructor(MISSION_NAME?: string | Uint8Array | null, NOMINAL_LIFTOFF?: TIMInstantT | null, WINDOW_OPEN?: TIMInstantT | null, WINDOW_CLOSE?: TIMInstantT | null, LIFTOFF_STEP_SECONDS?: number, SEGMENTS?: (CQRLaunchSegmentT)[], OBJECTS?: (CQRLaunchObjectT)[], CRITERIA?: (CQRLaunchCriterionT)[], MINIMUM_ALTITUDE_M?: number, SCREEN_SECONDS_AFTER_LIFTOFF?: number, CLOSURE_PAD_SECONDS?: number, REPORT_RATIO?: number, EVALUATION_FRAME?: RFMCoordinateSystemT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchRequest.d.ts.map