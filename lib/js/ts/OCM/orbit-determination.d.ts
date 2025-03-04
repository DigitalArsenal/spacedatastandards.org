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
    odId(): string | null;
    odId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the previous orbit determination.
     */
    odPrevId(): string | null;
    odPrevId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm used for orbit determination.
     */
    odAlgorithm(): string | null;
    odAlgorithm(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method used for orbit determination.
     */
    odMethod(): string | null;
    odMethod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the orbit determination.
     */
    odEpoch(): string | null;
    odEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time tag of the orbit determination.
     */
    odTimeTag(): string | null;
    odTimeTag(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Process noise model used.
     */
    odProcessNoise(): string | null;
    odProcessNoise(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance reduction techniques used.
     */
    odCovReduction(): string | null;
    odCovReduction(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Noise models used.
     */
    odNoiseModels(): string | null;
    odNoiseModels(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Types of observations used (e.g., RANGE, DOPPLER).
     */
    odObservationsType(index: number): string;
    odObservationsType(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    odObservationsTypeLength(): number;
    /**
     * Number of observations used.
     */
    odObservationsUsed(): number;
    /**
     * Number of tracks used.
     */
    odTracksUsed(): number;
    /**
     * Data weighting scheme used.
     */
    odDataWeighting(): string | null;
    odDataWeighting(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Convergence criteria used.
     */
    odConvergenceCriteria(): string | null;
    odConvergenceCriteria(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters estimated during orbit determination.
     */
    odEstParameters(index: number): string;
    odEstParameters(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    odEstParametersLength(): number;
    /**
     * A priori data used for orbit determination.
     */
    odAprioriData(): string | null;
    odAprioriData(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Residuals from the orbit determination.
     */
    odResiduals(): string | null;
    odResiduals(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOrbitDetermination(builder: flatbuffers.Builder): void;
    static addOdId(builder: flatbuffers.Builder, odIdOffset: flatbuffers.Offset): void;
    static addOdPrevId(builder: flatbuffers.Builder, odPrevIdOffset: flatbuffers.Offset): void;
    static addOdAlgorithm(builder: flatbuffers.Builder, odAlgorithmOffset: flatbuffers.Offset): void;
    static addOdMethod(builder: flatbuffers.Builder, odMethodOffset: flatbuffers.Offset): void;
    static addOdEpoch(builder: flatbuffers.Builder, odEpochOffset: flatbuffers.Offset): void;
    static addOdTimeTag(builder: flatbuffers.Builder, odTimeTagOffset: flatbuffers.Offset): void;
    static addOdProcessNoise(builder: flatbuffers.Builder, odProcessNoiseOffset: flatbuffers.Offset): void;
    static addOdCovReduction(builder: flatbuffers.Builder, odCovReductionOffset: flatbuffers.Offset): void;
    static addOdNoiseModels(builder: flatbuffers.Builder, odNoiseModelsOffset: flatbuffers.Offset): void;
    static addOdObservationsType(builder: flatbuffers.Builder, odObservationsTypeOffset: flatbuffers.Offset): void;
    static createOdObservationsTypeVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOdObservationsTypeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOdObservationsUsed(builder: flatbuffers.Builder, odObservationsUsed: number): void;
    static addOdTracksUsed(builder: flatbuffers.Builder, odTracksUsed: number): void;
    static addOdDataWeighting(builder: flatbuffers.Builder, odDataWeightingOffset: flatbuffers.Offset): void;
    static addOdConvergenceCriteria(builder: flatbuffers.Builder, odConvergenceCriteriaOffset: flatbuffers.Offset): void;
    static addOdEstParameters(builder: flatbuffers.Builder, odEstParametersOffset: flatbuffers.Offset): void;
    static createOdEstParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOdEstParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOdAprioriData(builder: flatbuffers.Builder, odAprioriDataOffset: flatbuffers.Offset): void;
    static addOdResiduals(builder: flatbuffers.Builder, odResidualsOffset: flatbuffers.Offset): void;
    static endOrbitDetermination(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOrbitDetermination(builder: flatbuffers.Builder, odIdOffset: flatbuffers.Offset, odPrevIdOffset: flatbuffers.Offset, odAlgorithmOffset: flatbuffers.Offset, odMethodOffset: flatbuffers.Offset, odEpochOffset: flatbuffers.Offset, odTimeTagOffset: flatbuffers.Offset, odProcessNoiseOffset: flatbuffers.Offset, odCovReductionOffset: flatbuffers.Offset, odNoiseModelsOffset: flatbuffers.Offset, odObservationsTypeOffset: flatbuffers.Offset, odObservationsUsed: number, odTracksUsed: number, odDataWeightingOffset: flatbuffers.Offset, odConvergenceCriteriaOffset: flatbuffers.Offset, odEstParametersOffset: flatbuffers.Offset, odAprioriDataOffset: flatbuffers.Offset, odResidualsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OrbitDeterminationT;
    unpackTo(_o: OrbitDeterminationT): void;
}
export declare class OrbitDeterminationT implements flatbuffers.IGeneratedObject {
    odId: string | Uint8Array | null;
    odPrevId: string | Uint8Array | null;
    odAlgorithm: string | Uint8Array | null;
    odMethod: string | Uint8Array | null;
    odEpoch: string | Uint8Array | null;
    odTimeTag: string | Uint8Array | null;
    odProcessNoise: string | Uint8Array | null;
    odCovReduction: string | Uint8Array | null;
    odNoiseModels: string | Uint8Array | null;
    odObservationsType: (string)[];
    odObservationsUsed: number;
    odTracksUsed: number;
    odDataWeighting: string | Uint8Array | null;
    odConvergenceCriteria: string | Uint8Array | null;
    odEstParameters: (string)[];
    odAprioriData: string | Uint8Array | null;
    odResiduals: string | Uint8Array | null;
    constructor(odId?: string | Uint8Array | null, odPrevId?: string | Uint8Array | null, odAlgorithm?: string | Uint8Array | null, odMethod?: string | Uint8Array | null, odEpoch?: string | Uint8Array | null, odTimeTag?: string | Uint8Array | null, odProcessNoise?: string | Uint8Array | null, odCovReduction?: string | Uint8Array | null, odNoiseModels?: string | Uint8Array | null, odObservationsType?: (string)[], odObservationsUsed?: number, odTracksUsed?: number, odDataWeighting?: string | Uint8Array | null, odConvergenceCriteria?: string | Uint8Array | null, odEstParameters?: (string)[], odAprioriData?: string | Uint8Array | null, odResiduals?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=orbit-determination.d.ts.map