import * as flatbuffers from 'flatbuffers';
/**
 * Coverage Grid Figure-of-Merit
 */
export declare class CVG implements flatbuffers.IUnpackableObject<CVGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVG;
    static getRootAsCVG(bb: flatbuffers.ByteBuffer, obj?: CVG): CVG;
    static getSizePrefixedRootAsCVG(bb: flatbuffers.ByteBuffer, obj?: CVG): CVG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this coverage computation
     */
    COVERAGE_ID(): string;
    COVERAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grid scheme identifier; "H3" for the H3 hexagonal hierarchical grid
     */
    GRID_SCHEME(): string | null;
    GRID_SCHEME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grid resolution (H3 resolution 0-15)
     */
    GRID_RESOLUTION(): number;
    /**
     * Grid cell indexes (H3 cell ids); all metric arrays align to this order
     */
    CELL_INDEXES(index: number): bigint | null;
    cellIndexesLength(): number;
    /**
     * Epoch window start (UNIX timestamp) [numeric seconds since
     * 1970-01-01T00:00:00 UTC]
     */
    WINDOW_START(): number;
    /**
     * Epoch window stop (UNIX timestamp) [numeric seconds since
     * 1970-01-01T00:00:00 UTC]
     */
    WINDOW_STOP(): number;
    /**
     * Sampling step in seconds used to compute access intervals
     */
    STEP_SIZE(): number;
    /**
     * Sensor identifiers contributing to the coverage set
     */
    SENSOR_IDS(index: number): string;
    SENSOR_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sensorIdsLength(): number;
    /**
     * Asset (satellite) identifiers contributing to the coverage set
     */
    ASSET_IDS(index: number): string;
    ASSET_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    assetIdsLength(): number;
    /**
     * Per-cell number of access intervals in the window
     */
    ACCESS_COUNTS(index: number): number | null;
    accessCountsLength(): number;
    accessCountsArray(): Uint32Array | null;
    /**
     * Per-cell total access duration in seconds
     */
    ACCESS_TOTAL_S(index: number): number | null;
    accessTotalSLength(): number;
    accessTotalSArray(): Float64Array | null;
    /**
     * Per-cell mean revisit interval in seconds
     */
    REVISIT_MEAN_S(index: number): number | null;
    revisitMeanSLength(): number;
    revisitMeanSArray(): Float64Array | null;
    /**
     * Per-cell maximum revisit interval in seconds
     */
    REVISIT_MAX_S(index: number): number | null;
    revisitMaxSLength(): number;
    revisitMaxSArray(): Float64Array | null;
    /**
     * Per-cell mean response time in seconds
     */
    RESPONSE_MEAN_S(index: number): number | null;
    responseMeanSLength(): number;
    responseMeanSArray(): Float64Array | null;
    /**
     * Per-cell maximum response time in seconds
     */
    RESPONSE_MAX_S(index: number): number | null;
    responseMaxSLength(): number;
    responseMaxSArray(): Float64Array | null;
    /**
     * Per-cell maximum coverage gap in seconds
     */
    GAP_MAX_S(index: number): number | null;
    gapMaxSLength(): number;
    gapMaxSArray(): Float64Array | null;
    /**
     * Per-cell fraction of the window with at least one access [0-1]
     */
    COVERAGE_FRACTION(index: number): number | null;
    coverageFractionLength(): number;
    coverageFractionArray(): Float64Array | null;
    /**
     * Unix ms this coverage set was computed
     */
    COMPUTED_AT(): bigint;
    /**
     * Ed25519 signature by the producing `$EPM`
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startCVG(builder: flatbuffers.Builder): void;
    static addCoverageId(builder: flatbuffers.Builder, COVERAGE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addGridScheme(builder: flatbuffers.Builder, GRID_SCHEMEOffset: flatbuffers.Offset): void;
    static addGridResolution(builder: flatbuffers.Builder, GRID_RESOLUTION: number): void;
    static addCellIndexes(builder: flatbuffers.Builder, CELL_INDEXESOffset: flatbuffers.Offset): void;
    static createCellIndexesVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startCellIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_START: number): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOP: number): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addSensorIds(builder: flatbuffers.Builder, SENSOR_IDSOffset: flatbuffers.Offset): void;
    static createSensorIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSensorIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssetIds(builder: flatbuffers.Builder, ASSET_IDSOffset: flatbuffers.Offset): void;
    static createAssetIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssetIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccessCounts(builder: flatbuffers.Builder, ACCESS_COUNTSOffset: flatbuffers.Offset): void;
    static createAccessCountsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAccessCountsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAccessCountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccessTotalS(builder: flatbuffers.Builder, ACCESS_TOTAL_SOffset: flatbuffers.Offset): void;
    static createAccessTotalSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAccessTotalSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAccessTotalSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRevisitMeanS(builder: flatbuffers.Builder, REVISIT_MEAN_SOffset: flatbuffers.Offset): void;
    static createRevisitMeanSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRevisitMeanSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRevisitMeanSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRevisitMaxS(builder: flatbuffers.Builder, REVISIT_MAX_SOffset: flatbuffers.Offset): void;
    static createRevisitMaxSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRevisitMaxSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRevisitMaxSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResponseMeanS(builder: flatbuffers.Builder, RESPONSE_MEAN_SOffset: flatbuffers.Offset): void;
    static createResponseMeanSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResponseMeanSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResponseMeanSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResponseMaxS(builder: flatbuffers.Builder, RESPONSE_MAX_SOffset: flatbuffers.Offset): void;
    static createResponseMaxSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResponseMaxSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResponseMaxSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGapMaxS(builder: flatbuffers.Builder, GAP_MAX_SOffset: flatbuffers.Offset): void;
    static createGapMaxSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGapMaxSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGapMaxSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoverageFraction(builder: flatbuffers.Builder, COVERAGE_FRACTIONOffset: flatbuffers.Offset): void;
    static createCoverageFractionVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoverageFractionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoverageFractionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCVG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCVGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCVGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCVG(builder: flatbuffers.Builder, COVERAGE_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, GRID_SCHEMEOffset: flatbuffers.Offset, GRID_RESOLUTION: number, CELL_INDEXESOffset: flatbuffers.Offset, WINDOW_START: number, WINDOW_STOP: number, STEP_SIZE: number, SENSOR_IDSOffset: flatbuffers.Offset, ASSET_IDSOffset: flatbuffers.Offset, ACCESS_COUNTSOffset: flatbuffers.Offset, ACCESS_TOTAL_SOffset: flatbuffers.Offset, REVISIT_MEAN_SOffset: flatbuffers.Offset, REVISIT_MAX_SOffset: flatbuffers.Offset, RESPONSE_MEAN_SOffset: flatbuffers.Offset, RESPONSE_MAX_SOffset: flatbuffers.Offset, GAP_MAX_SOffset: flatbuffers.Offset, COVERAGE_FRACTIONOffset: flatbuffers.Offset, COMPUTED_AT: bigint, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CVGT;
    unpackTo(_o: CVGT): void;
}
export declare class CVGT implements flatbuffers.IGeneratedObject {
    COVERAGE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    GRID_SCHEME: string | Uint8Array | null;
    GRID_RESOLUTION: number;
    CELL_INDEXES: (bigint)[];
    WINDOW_START: number;
    WINDOW_STOP: number;
    STEP_SIZE: number;
    SENSOR_IDS: (string)[];
    ASSET_IDS: (string)[];
    ACCESS_COUNTS: (number)[];
    ACCESS_TOTAL_S: (number)[];
    REVISIT_MEAN_S: (number)[];
    REVISIT_MAX_S: (number)[];
    RESPONSE_MEAN_S: (number)[];
    RESPONSE_MAX_S: (number)[];
    GAP_MAX_S: (number)[];
    COVERAGE_FRACTION: (number)[];
    COMPUTED_AT: bigint;
    SIGNATURE: (number)[];
    constructor(COVERAGE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, GRID_SCHEME?: string | Uint8Array | null, GRID_RESOLUTION?: number, CELL_INDEXES?: (bigint)[], WINDOW_START?: number, WINDOW_STOP?: number, STEP_SIZE?: number, SENSOR_IDS?: (string)[], ASSET_IDS?: (string)[], ACCESS_COUNTS?: (number)[], ACCESS_TOTAL_S?: (number)[], REVISIT_MEAN_S?: (number)[], REVISIT_MAX_S?: (number)[], RESPONSE_MEAN_S?: (number)[], RESPONSE_MAX_S?: (number)[], GAP_MAX_S?: (number)[], COVERAGE_FRACTION?: (number)[], COMPUTED_AT?: bigint, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVG.d.ts.map