import * as flatbuffers from 'flatbuffers';
export declare class OrbitDetermination implements flatbuffers.IUnpackableObject<OrbitDeterminationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OrbitDetermination;
    static getRootAsOrbitDetermination(bb: flatbuffers.ByteBuffer, obj?: OrbitDetermination): OrbitDetermination;
    static getSizePrefixedRootAsOrbitDetermination(bb: flatbuffers.ByteBuffer, obj?: OrbitDetermination): OrbitDetermination;
    /**
     * Unique identifier for the orbit determination.
     */
    OD_ID(): string | null;
    OD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the previous orbit determination.
     */
    OD_PREV_ID(): string | null;
    OD_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm used for orbit determination.
     */
    OD_ALGORITHM(): string | null;
    OD_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method used for orbit determination.
     */
    OD_METHOD(): string | null;
    OD_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the orbit determination.
     */
    OD_EPOCH(): string | null;
    OD_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time tag of the orbit determination.
     */
    OD_TIME_TAG(): string | null;
    OD_TIME_TAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Process noise model used.
     */
    OD_PROCESS_NOISE(): string | null;
    OD_PROCESS_NOISE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance reduction techniques used.
     */
    OD_COV_REDUCTION(): string | null;
    OD_COV_REDUCTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Noise models used.
     */
    OD_NOISE_MODELS(): string | null;
    OD_NOISE_MODELS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Types of observations used (e.g., RANGE, DOPPLER).
     */
    OD_OBSERVATIONS_TYPE(index: number): string;
    OD_OBSERVATIONS_TYPE(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    odObservationsTypeLength(): number;
    /**
     * Number of observations used.
     */
    OD_OBSERVATIONS_USED(): number;
    /**
     * Number of tracks used.
     */
    OD_TRACKS_USED(): number;
    /**
     * Data weighting scheme used.
     */
    OD_DATA_WEIGHTING(): string | null;
    OD_DATA_WEIGHTING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Convergence criteria used.
     */
    OD_CONVERGENCE_CRITERIA(): string | null;
    OD_CONVERGENCE_CRITERIA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters estimated during orbit determination.
     */
    OD_EST_PARAMETERS(index: number): string;
    OD_EST_PARAMETERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    odEstParametersLength(): number;
    /**
     * A priori data used for orbit determination.
     */
    OD_APRIORI_DATA(): string | null;
    OD_APRIORI_DATA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Residuals from the orbit determination.
     */
    OD_RESIDUALS(): string | null;
    OD_RESIDUALS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOrbitDetermination(builder: flatbuffers.Builder): void;
    static addOdId(builder: flatbuffers.Builder, OD_IDOffset: flatbuffers.Offset): void;
    static addOdPrevId(builder: flatbuffers.Builder, OD_PREV_IDOffset: flatbuffers.Offset): void;
    static addOdAlgorithm(builder: flatbuffers.Builder, OD_ALGORITHMOffset: flatbuffers.Offset): void;
    static addOdMethod(builder: flatbuffers.Builder, OD_METHODOffset: flatbuffers.Offset): void;
    static addOdEpoch(builder: flatbuffers.Builder, OD_EPOCHOffset: flatbuffers.Offset): void;
    static addOdTimeTag(builder: flatbuffers.Builder, OD_TIME_TAGOffset: flatbuffers.Offset): void;
    static addOdProcessNoise(builder: flatbuffers.Builder, OD_PROCESS_NOISEOffset: flatbuffers.Offset): void;
    static addOdCovReduction(builder: flatbuffers.Builder, OD_COV_REDUCTIONOffset: flatbuffers.Offset): void;
    static addOdNoiseModels(builder: flatbuffers.Builder, OD_NOISE_MODELSOffset: flatbuffers.Offset): void;
    static addOdObservationsType(builder: flatbuffers.Builder, OD_OBSERVATIONS_TYPEOffset: flatbuffers.Offset): void;
    static createOdObservationsTypeVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOdObservationsTypeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOdObservationsUsed(builder: flatbuffers.Builder, OD_OBSERVATIONS_USED: number): void;
    static addOdTracksUsed(builder: flatbuffers.Builder, OD_TRACKS_USED: number): void;
    static addOdDataWeighting(builder: flatbuffers.Builder, OD_DATA_WEIGHTINGOffset: flatbuffers.Offset): void;
    static addOdConvergenceCriteria(builder: flatbuffers.Builder, OD_CONVERGENCE_CRITERIAOffset: flatbuffers.Offset): void;
    static addOdEstParameters(builder: flatbuffers.Builder, OD_EST_PARAMETERSOffset: flatbuffers.Offset): void;
    static createOdEstParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOdEstParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOdAprioriData(builder: flatbuffers.Builder, OD_APRIORI_DATAOffset: flatbuffers.Offset): void;
    static addOdResiduals(builder: flatbuffers.Builder, OD_RESIDUALSOffset: flatbuffers.Offset): void;
    static endOrbitDetermination(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOrbitDetermination(builder: flatbuffers.Builder, OD_IDOffset: flatbuffers.Offset, OD_PREV_IDOffset: flatbuffers.Offset, OD_ALGORITHMOffset: flatbuffers.Offset, OD_METHODOffset: flatbuffers.Offset, OD_EPOCHOffset: flatbuffers.Offset, OD_TIME_TAGOffset: flatbuffers.Offset, OD_PROCESS_NOISEOffset: flatbuffers.Offset, OD_COV_REDUCTIONOffset: flatbuffers.Offset, OD_NOISE_MODELSOffset: flatbuffers.Offset, OD_OBSERVATIONS_TYPEOffset: flatbuffers.Offset, OD_OBSERVATIONS_USED: number, OD_TRACKS_USED: number, OD_DATA_WEIGHTINGOffset: flatbuffers.Offset, OD_CONVERGENCE_CRITERIAOffset: flatbuffers.Offset, OD_EST_PARAMETERSOffset: flatbuffers.Offset, OD_APRIORI_DATAOffset: flatbuffers.Offset, OD_RESIDUALSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OrbitDeterminationT;
    unpackTo(_o: OrbitDeterminationT): void;
}
export declare class OrbitDeterminationT implements flatbuffers.IGeneratedObject {
    OD_ID: string | Uint8Array | null;
    OD_PREV_ID: string | Uint8Array | null;
    OD_ALGORITHM: string | Uint8Array | null;
    OD_METHOD: string | Uint8Array | null;
    OD_EPOCH: string | Uint8Array | null;
    OD_TIME_TAG: string | Uint8Array | null;
    OD_PROCESS_NOISE: string | Uint8Array | null;
    OD_COV_REDUCTION: string | Uint8Array | null;
    OD_NOISE_MODELS: string | Uint8Array | null;
    OD_OBSERVATIONS_TYPE: (string)[];
    OD_OBSERVATIONS_USED: number;
    OD_TRACKS_USED: number;
    OD_DATA_WEIGHTING: string | Uint8Array | null;
    OD_CONVERGENCE_CRITERIA: string | Uint8Array | null;
    OD_EST_PARAMETERS: (string)[];
    OD_APRIORI_DATA: string | Uint8Array | null;
    OD_RESIDUALS: string | Uint8Array | null;
    constructor(OD_ID?: string | Uint8Array | null, OD_PREV_ID?: string | Uint8Array | null, OD_ALGORITHM?: string | Uint8Array | null, OD_METHOD?: string | Uint8Array | null, OD_EPOCH?: string | Uint8Array | null, OD_TIME_TAG?: string | Uint8Array | null, OD_PROCESS_NOISE?: string | Uint8Array | null, OD_COV_REDUCTION?: string | Uint8Array | null, OD_NOISE_MODELS?: string | Uint8Array | null, OD_OBSERVATIONS_TYPE?: (string)[], OD_OBSERVATIONS_USED?: number, OD_TRACKS_USED?: number, OD_DATA_WEIGHTING?: string | Uint8Array | null, OD_CONVERGENCE_CRITERIA?: string | Uint8Array | null, OD_EST_PARAMETERS?: (string)[], OD_APRIORI_DATA?: string | Uint8Array | null, OD_RESIDUALS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OrbitDetermination.d.ts.map