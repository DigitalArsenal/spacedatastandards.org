import * as flatbuffers from 'flatbuffers';
export declare class Maneuver implements flatbuffers.IUnpackableObject<ManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Maneuver;
    static getRootAsManeuver(bb: flatbuffers.ByteBuffer, obj?: Maneuver): Maneuver;
    static getSizePrefixedRootAsManeuver(bb: flatbuffers.ByteBuffer, obj?: Maneuver): Maneuver;
    /**
     * Unique identifier for the maneuver.
     */
    MAN_ID(): string | null;
    MAN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Basis of the maneuver plan (e.g., planned, predicted, estimated).
     */
    MAN_BASIS(): string | null;
    MAN_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the maneuver device.
     */
    MAN_DEVICE_ID(): string | null;
    MAN_DEVICE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the previous maneuver.
     */
    MAN_PREV_ID(): string | null;
    MAN_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Purpose of the maneuver.
     */
    MAN_PURPOSE(): string | null;
    MAN_PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the maneuver data.
     */
    MAN_REF_FRAME(): string | null;
    MAN_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the maneuver reference frame.
     */
    MAN_FRAME_EPOCH(): string | null;
    MAN_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of maneuver (e.g., IMPULSIVE, FINITE).
     */
    MAN_TYPE(): string | null;
    MAN_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start epoch of the maneuver.
     */
    MAN_EPOCH_START(): string | null;
    MAN_EPOCH_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration of the maneuver.
     */
    MAN_DURATION(): number;
    /**
     * Units for the maneuver data values.
     */
    MAN_UNITS(index: number): string;
    MAN_UNITS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manUnitsLength(): number;
    /**
     * Data associated with the maneuver.
     */
    DATA(index: number): string;
    DATA(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dataLength(): number;
    /**
     * Comments related to the maneuver.
     */
    MAN_COMMENT(index: number): string;
    MAN_COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manCommentLength(): number;
    /**
     * Ordered DATA columns, including TIME_ABSOLUTE or TIME_RELATIVE first.
     * CCSDS 502.0-B-3 Tables 6-7 to 6-9; absent means composition unspecified.
     * DATA entries are complete time-history lines; MAN_UNITS excludes time tags.
     * Relative time tags are seconds from METADATA.EPOCH_TZERO.
     */
    MAN_COMPOSITION(index: number): string;
    MAN_COMPOSITION(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manCompositionLength(): number;
    /**
     * Next maneuver identifier (CCSDS 502.0-B-3 Table 6-7).
     */
    MAN_NEXT_ID(): string | null;
    MAN_NEXT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OD, navigation solution or simulation identifier (Table 6-7).
     */
    MAN_BASIS_ID(): string | null;
    MAN_BASIS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Previous maneuver completion: absolute epoch or seconds from EPOCH_TZERO.
     * CCSDS 502.0-B-3 Table 6-7; absolute times use METADATA.TIME_SYSTEM.
     */
    MAN_PREV_EPOCH(): string | null;
    MAN_PREV_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Next maneuver start; same time convention as MAN_PREV_EPOCH (Table 6-7).
     */
    MAN_NEXT_EPOCH(): string | null;
    MAN_NEXT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of predicted orbit or attitude states (Table 6-7).
     */
    MAN_PRED_SOURCE(): string | null;
    MAN_PRED_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gravitational assist body name (Table 6-7).
     */
    GRAV_ASSIST_NAME(): string | null;
    GRAV_ASSIST_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CONTINUOUS, TIME or TIME_AND_ANGLE; absent means CONTINUOUS (Table 6-7).
     */
    DC_TYPE(): string | null;
    DC_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duty-cycle window start; MAN_PREV_EPOCH time convention (Table 6-7).
     */
    DC_WIN_OPEN(): string | null;
    DC_WIN_OPEN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duty-cycle window end; MAN_PREV_EPOCH time convention (Table 6-7).
     */
    DC_WIN_CLOSE(): string | null;
    DC_WIN_CLOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum and maximum ON cycles; HAS_DC_*_CYCLES marks presence (Table 6-7).
     */
    DC_MIN_CYCLES(): number;
    DC_MAX_CYCLES(): number;
    /**
     * Presence of the corresponding cycle bound; zero remains representable.
     */
    HAS_DC_MIN_CYCLES(): boolean;
    HAS_DC_MAX_CYCLES(): boolean;
    /**
     * First and final duty-cycle sequence times; MAN_PREV_EPOCH convention.
     * Required with DC_WIN_OPEN/CLOSE when DC_TYPE is not CONTINUOUS (Table 6-7).
     */
    DC_EXEC_START(): string | null;
    DC_EXEC_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DC_EXEC_STOP(): string | null;
    DC_EXEC_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duty-cycle reference time; MAN_PREV_EPOCH time convention (Table 6-7).
     */
    DC_REF_TIME(): string | null;
    DC_REF_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Pulse ON duration and start-to-start period, seconds; NaN means absent (Table 6-7).
     * Required with DC_REF_TIME for non-continuous cycles; period >= duration.
     */
    DC_TIME_PULSE_DURATION(): number;
    DC_TIME_PULSE_PERIOD(): number;
    /**
     * Three-component reference unit direction in MAN_REF_FRAME (Table 6-7).
     * Required with DC_BODY_FRAME/TRIGGER and both angles for TIME_AND_ANGLE.
     */
    DC_REF_DIR(index: number): number | null;
    dcRefDirLength(): number;
    dcRefDirArray(): Float64Array | null;
    /**
     * Body frame of DC_BODY_TRIGGER (Table 6-7).
     */
    DC_BODY_FRAME(): string | null;
    DC_BODY_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Three-component body-frame trigger unit direction (Table 6-7).
     */
    DC_BODY_TRIGGER(index: number): number | null;
    dcBodyTriggerLength(): number;
    dcBodyTriggerArray(): Float64Array | null;
    /**
     * Pulse start and stop phase angles, degrees; NaN means unspecified.
     * CCSDS 502.0-B-3 Table 6-7.
     */
    DC_PA_START_ANGLE(): number;
    DC_PA_STOP_ANGLE(): number;
    static startManeuver(builder: flatbuffers.Builder): void;
    static addManId(builder: flatbuffers.Builder, MAN_IDOffset: flatbuffers.Offset): void;
    static addManBasis(builder: flatbuffers.Builder, MAN_BASISOffset: flatbuffers.Offset): void;
    static addManDeviceId(builder: flatbuffers.Builder, MAN_DEVICE_IDOffset: flatbuffers.Offset): void;
    static addManPrevId(builder: flatbuffers.Builder, MAN_PREV_IDOffset: flatbuffers.Offset): void;
    static addManPurpose(builder: flatbuffers.Builder, MAN_PURPOSEOffset: flatbuffers.Offset): void;
    static addManRefFrame(builder: flatbuffers.Builder, MAN_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addManFrameEpoch(builder: flatbuffers.Builder, MAN_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addManType(builder: flatbuffers.Builder, MAN_TYPEOffset: flatbuffers.Offset): void;
    static addManEpochStart(builder: flatbuffers.Builder, MAN_EPOCH_STARTOffset: flatbuffers.Offset): void;
    static addManDuration(builder: flatbuffers.Builder, MAN_DURATION: number): void;
    static addManUnits(builder: flatbuffers.Builder, MAN_UNITSOffset: flatbuffers.Offset): void;
    static createManUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManComment(builder: flatbuffers.Builder, MAN_COMMENTOffset: flatbuffers.Offset): void;
    static createManCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManComposition(builder: flatbuffers.Builder, MAN_COMPOSITIONOffset: flatbuffers.Offset): void;
    static createManCompositionVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManCompositionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManNextId(builder: flatbuffers.Builder, MAN_NEXT_IDOffset: flatbuffers.Offset): void;
    static addManBasisId(builder: flatbuffers.Builder, MAN_BASIS_IDOffset: flatbuffers.Offset): void;
    static addManPrevEpoch(builder: flatbuffers.Builder, MAN_PREV_EPOCHOffset: flatbuffers.Offset): void;
    static addManNextEpoch(builder: flatbuffers.Builder, MAN_NEXT_EPOCHOffset: flatbuffers.Offset): void;
    static addManPredSource(builder: flatbuffers.Builder, MAN_PRED_SOURCEOffset: flatbuffers.Offset): void;
    static addGravAssistName(builder: flatbuffers.Builder, GRAV_ASSIST_NAMEOffset: flatbuffers.Offset): void;
    static addDcType(builder: flatbuffers.Builder, DC_TYPEOffset: flatbuffers.Offset): void;
    static addDcWinOpen(builder: flatbuffers.Builder, DC_WIN_OPENOffset: flatbuffers.Offset): void;
    static addDcWinClose(builder: flatbuffers.Builder, DC_WIN_CLOSEOffset: flatbuffers.Offset): void;
    static addDcMinCycles(builder: flatbuffers.Builder, DC_MIN_CYCLES: number): void;
    static addDcMaxCycles(builder: flatbuffers.Builder, DC_MAX_CYCLES: number): void;
    static addHasDcMinCycles(builder: flatbuffers.Builder, HAS_DC_MIN_CYCLES: boolean): void;
    static addHasDcMaxCycles(builder: flatbuffers.Builder, HAS_DC_MAX_CYCLES: boolean): void;
    static addDcExecStart(builder: flatbuffers.Builder, DC_EXEC_STARTOffset: flatbuffers.Offset): void;
    static addDcExecStop(builder: flatbuffers.Builder, DC_EXEC_STOPOffset: flatbuffers.Offset): void;
    static addDcRefTime(builder: flatbuffers.Builder, DC_REF_TIMEOffset: flatbuffers.Offset): void;
    static addDcTimePulseDuration(builder: flatbuffers.Builder, DC_TIME_PULSE_DURATION: number): void;
    static addDcTimePulsePeriod(builder: flatbuffers.Builder, DC_TIME_PULSE_PERIOD: number): void;
    static addDcRefDir(builder: flatbuffers.Builder, DC_REF_DIROffset: flatbuffers.Offset): void;
    static createDcRefDirVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDcRefDirVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDcRefDirVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDcBodyFrame(builder: flatbuffers.Builder, DC_BODY_FRAMEOffset: flatbuffers.Offset): void;
    static addDcBodyTrigger(builder: flatbuffers.Builder, DC_BODY_TRIGGEROffset: flatbuffers.Offset): void;
    static createDcBodyTriggerVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDcBodyTriggerVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDcBodyTriggerVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDcPaStartAngle(builder: flatbuffers.Builder, DC_PA_START_ANGLE: number): void;
    static addDcPaStopAngle(builder: flatbuffers.Builder, DC_PA_STOP_ANGLE: number): void;
    static endManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createManeuver(builder: flatbuffers.Builder, MAN_IDOffset: flatbuffers.Offset, MAN_BASISOffset: flatbuffers.Offset, MAN_DEVICE_IDOffset: flatbuffers.Offset, MAN_PREV_IDOffset: flatbuffers.Offset, MAN_PURPOSEOffset: flatbuffers.Offset, MAN_REF_FRAMEOffset: flatbuffers.Offset, MAN_FRAME_EPOCHOffset: flatbuffers.Offset, MAN_TYPEOffset: flatbuffers.Offset, MAN_EPOCH_STARTOffset: flatbuffers.Offset, MAN_DURATION: number, MAN_UNITSOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, MAN_COMMENTOffset: flatbuffers.Offset, MAN_COMPOSITIONOffset: flatbuffers.Offset, MAN_NEXT_IDOffset: flatbuffers.Offset, MAN_BASIS_IDOffset: flatbuffers.Offset, MAN_PREV_EPOCHOffset: flatbuffers.Offset, MAN_NEXT_EPOCHOffset: flatbuffers.Offset, MAN_PRED_SOURCEOffset: flatbuffers.Offset, GRAV_ASSIST_NAMEOffset: flatbuffers.Offset, DC_TYPEOffset: flatbuffers.Offset, DC_WIN_OPENOffset: flatbuffers.Offset, DC_WIN_CLOSEOffset: flatbuffers.Offset, DC_MIN_CYCLES: number, DC_MAX_CYCLES: number, HAS_DC_MIN_CYCLES: boolean, HAS_DC_MAX_CYCLES: boolean, DC_EXEC_STARTOffset: flatbuffers.Offset, DC_EXEC_STOPOffset: flatbuffers.Offset, DC_REF_TIMEOffset: flatbuffers.Offset, DC_TIME_PULSE_DURATION: number, DC_TIME_PULSE_PERIOD: number, DC_REF_DIROffset: flatbuffers.Offset, DC_BODY_FRAMEOffset: flatbuffers.Offset, DC_BODY_TRIGGEROffset: flatbuffers.Offset, DC_PA_START_ANGLE: number, DC_PA_STOP_ANGLE: number): flatbuffers.Offset;
    unpack(): ManeuverT;
    unpackTo(_o: ManeuverT): void;
}
export declare class ManeuverT implements flatbuffers.IGeneratedObject {
    MAN_ID: string | Uint8Array | null;
    MAN_BASIS: string | Uint8Array | null;
    MAN_DEVICE_ID: string | Uint8Array | null;
    MAN_PREV_ID: string | Uint8Array | null;
    MAN_PURPOSE: string | Uint8Array | null;
    MAN_REF_FRAME: string | Uint8Array | null;
    MAN_FRAME_EPOCH: string | Uint8Array | null;
    MAN_TYPE: string | Uint8Array | null;
    MAN_EPOCH_START: string | Uint8Array | null;
    MAN_DURATION: number;
    MAN_UNITS: (string)[];
    DATA: (string)[];
    MAN_COMMENT: (string)[];
    MAN_COMPOSITION: (string)[];
    MAN_NEXT_ID: string | Uint8Array | null;
    MAN_BASIS_ID: string | Uint8Array | null;
    MAN_PREV_EPOCH: string | Uint8Array | null;
    MAN_NEXT_EPOCH: string | Uint8Array | null;
    MAN_PRED_SOURCE: string | Uint8Array | null;
    GRAV_ASSIST_NAME: string | Uint8Array | null;
    DC_TYPE: string | Uint8Array | null;
    DC_WIN_OPEN: string | Uint8Array | null;
    DC_WIN_CLOSE: string | Uint8Array | null;
    DC_MIN_CYCLES: number;
    DC_MAX_CYCLES: number;
    HAS_DC_MIN_CYCLES: boolean;
    HAS_DC_MAX_CYCLES: boolean;
    DC_EXEC_START: string | Uint8Array | null;
    DC_EXEC_STOP: string | Uint8Array | null;
    DC_REF_TIME: string | Uint8Array | null;
    DC_TIME_PULSE_DURATION: number;
    DC_TIME_PULSE_PERIOD: number;
    DC_REF_DIR: (number)[];
    DC_BODY_FRAME: string | Uint8Array | null;
    DC_BODY_TRIGGER: (number)[];
    DC_PA_START_ANGLE: number;
    DC_PA_STOP_ANGLE: number;
    constructor(MAN_ID?: string | Uint8Array | null, MAN_BASIS?: string | Uint8Array | null, MAN_DEVICE_ID?: string | Uint8Array | null, MAN_PREV_ID?: string | Uint8Array | null, MAN_PURPOSE?: string | Uint8Array | null, MAN_REF_FRAME?: string | Uint8Array | null, MAN_FRAME_EPOCH?: string | Uint8Array | null, MAN_TYPE?: string | Uint8Array | null, MAN_EPOCH_START?: string | Uint8Array | null, MAN_DURATION?: number, MAN_UNITS?: (string)[], DATA?: (string)[], MAN_COMMENT?: (string)[], MAN_COMPOSITION?: (string)[], MAN_NEXT_ID?: string | Uint8Array | null, MAN_BASIS_ID?: string | Uint8Array | null, MAN_PREV_EPOCH?: string | Uint8Array | null, MAN_NEXT_EPOCH?: string | Uint8Array | null, MAN_PRED_SOURCE?: string | Uint8Array | null, GRAV_ASSIST_NAME?: string | Uint8Array | null, DC_TYPE?: string | Uint8Array | null, DC_WIN_OPEN?: string | Uint8Array | null, DC_WIN_CLOSE?: string | Uint8Array | null, DC_MIN_CYCLES?: number, DC_MAX_CYCLES?: number, HAS_DC_MIN_CYCLES?: boolean, HAS_DC_MAX_CYCLES?: boolean, DC_EXEC_START?: string | Uint8Array | null, DC_EXEC_STOP?: string | Uint8Array | null, DC_REF_TIME?: string | Uint8Array | null, DC_TIME_PULSE_DURATION?: number, DC_TIME_PULSE_PERIOD?: number, DC_REF_DIR?: (number)[], DC_BODY_FRAME?: string | Uint8Array | null, DC_BODY_TRIGGER?: (number)[], DC_PA_START_ANGLE?: number, DC_PA_STOP_ANGLE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Maneuver.d.ts.map