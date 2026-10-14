import * as flatbuffers from 'flatbuffers';
/**
 * Parameters of a scenario-epoch text container.
 */
export declare class NCDScenarioEpochContainer implements flatbuffers.IUnpackableObject<NCDScenarioEpochContainerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NCDScenarioEpochContainer;
    static getRootAsNCDScenarioEpochContainer(bb: flatbuffers.ByteBuffer, obj?: NCDScenarioEpochContainer): NCDScenarioEpochContainer;
    static getSizePrefixedRootAsNCDScenarioEpochContainer(bb: flatbuffers.ByteBuffer, obj?: NCDScenarioEpochContainer): NCDScenarioEpochContainer;
    /**
     * Epoch that every record offset is measured from, ISO 8601.
     */
    SCENARIO_EPOCH(): string | null;
    SCENARIO_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time scale the scenario epoch is expressed in.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Distance unit of the records, e.g. "Meters", "Kilometers".
     */
    DISTANCE_UNIT(): string | null;
    DISTANCE_UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Named coordinate system of the records.
     */
    COORDINATE_SYSTEM(): string | null;
    COORDINATE_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Named coordinate axes, when stated separately from the system.
     */
    COORDINATE_AXES(): string | null;
    COORDINATE_AXES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Central body of the records.
     */
    CENTRAL_BODY(): string | null;
    CENTRAL_BODY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Named interpolation method, e.g. "Lagrange", "Hermite".
     */
    INTERPOLATION_METHOD(): string | null;
    INTERPOLATION_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interpolation order expressed as (samples - 1), which is how these
     * containers state it. Carried verbatim rather than converted, so a rewrite
     * reproduces the source exactly.
     */
    INTERPOLATION_SAMPLES_M1(): number;
    /**
     * Number of ephemeris points declared in the container.
     */
    NUMBER_OF_EPHEMERIS_POINTS(): number;
    /**
     * Segment boundary offsets in seconds from SCENARIO_EPOCH, when present.
     */
    SEGMENT_BOUNDARY_TIMES(index: number): number | null;
    segmentBoundaryTimesLength(): number;
    segmentBoundaryTimesArray(): Float64Array | null;
    static startNCDScenarioEpochContainer(builder: flatbuffers.Builder): void;
    static addScenarioEpoch(builder: flatbuffers.Builder, SCENARIO_EPOCHOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addDistanceUnit(builder: flatbuffers.Builder, DISTANCE_UNITOffset: flatbuffers.Offset): void;
    static addCoordinateSystem(builder: flatbuffers.Builder, COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static addCoordinateAxes(builder: flatbuffers.Builder, COORDINATE_AXESOffset: flatbuffers.Offset): void;
    static addCentralBody(builder: flatbuffers.Builder, CENTRAL_BODYOffset: flatbuffers.Offset): void;
    static addInterpolationMethod(builder: flatbuffers.Builder, INTERPOLATION_METHODOffset: flatbuffers.Offset): void;
    static addInterpolationSamplesM1(builder: flatbuffers.Builder, INTERPOLATION_SAMPLES_M1: number): void;
    static addNumberOfEphemerisPoints(builder: flatbuffers.Builder, NUMBER_OF_EPHEMERIS_POINTS: number): void;
    static addSegmentBoundaryTimes(builder: flatbuffers.Builder, SEGMENT_BOUNDARY_TIMESOffset: flatbuffers.Offset): void;
    static createSegmentBoundaryTimesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSegmentBoundaryTimesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSegmentBoundaryTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endNCDScenarioEpochContainer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNCDScenarioEpochContainer(builder: flatbuffers.Builder, SCENARIO_EPOCHOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, DISTANCE_UNITOffset: flatbuffers.Offset, COORDINATE_SYSTEMOffset: flatbuffers.Offset, COORDINATE_AXESOffset: flatbuffers.Offset, CENTRAL_BODYOffset: flatbuffers.Offset, INTERPOLATION_METHODOffset: flatbuffers.Offset, INTERPOLATION_SAMPLES_M1: number, NUMBER_OF_EPHEMERIS_POINTS: number, SEGMENT_BOUNDARY_TIMESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NCDScenarioEpochContainerT;
    unpackTo(_o: NCDScenarioEpochContainerT): void;
}
export declare class NCDScenarioEpochContainerT implements flatbuffers.IGeneratedObject {
    SCENARIO_EPOCH: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    DISTANCE_UNIT: string | Uint8Array | null;
    COORDINATE_SYSTEM: string | Uint8Array | null;
    COORDINATE_AXES: string | Uint8Array | null;
    CENTRAL_BODY: string | Uint8Array | null;
    INTERPOLATION_METHOD: string | Uint8Array | null;
    INTERPOLATION_SAMPLES_M1: number;
    NUMBER_OF_EPHEMERIS_POINTS: number;
    SEGMENT_BOUNDARY_TIMES: (number)[];
    constructor(SCENARIO_EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, DISTANCE_UNIT?: string | Uint8Array | null, COORDINATE_SYSTEM?: string | Uint8Array | null, COORDINATE_AXES?: string | Uint8Array | null, CENTRAL_BODY?: string | Uint8Array | null, INTERPOLATION_METHOD?: string | Uint8Array | null, INTERPOLATION_SAMPLES_M1?: number, NUMBER_OF_EPHEMERIS_POINTS?: number, SEGMENT_BOUNDARY_TIMES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NCDScenarioEpochContainer.d.ts.map