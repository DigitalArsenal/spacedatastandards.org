import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMGate, ERMGateT } from './ERMGate.js';
import { ERMHorizonFactor, ERMHorizonFactorT } from './ERMHorizonFactor.js';
import { ERMMeasuredOn, ERMMeasuredOnT } from './ERMMeasuredOn.js';
import { ERMModelScale, ERMModelScaleT } from './ERMModelScale.js';
import { ERMModelStratum, ERMModelStratumT } from './ERMModelStratum.js';
import { ERMPropagatorRegime, ERMPropagatorRegimeT } from './ERMPropagatorRegime.js';
import { ERMProvenanceFile, ERMProvenanceFileT } from './ERMProvenanceFile.js';
import { ERMRealismCell, ERMRealismCellT } from './ERMRealismCell.js';
import { ERMStrataSettings, ERMStrataSettingsT } from './ERMStrataSettings.js';
import { ERMStratumFactor, ERMStratumFactorT } from './ERMStratumFactor.js';
import { ermErrorBasis } from './ermErrorBasis.js';
import { ermModelForm } from './ermModelForm.js';
/**
 * An orbit error model.
 */
export declare class ERMModel implements flatbuffers.IUnpackableObject<ERMModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMModel;
    static getRootAsERMModel(bb: flatbuffers.ByteBuffer, obj?: ERMModel): ERMModel;
    static getSizePrefixedRootAsERMModel(bb: flatbuffers.ByteBuffer, obj?: ERMModel): ERMModel;
    /**
     * Model identifier (e.g. a calibration version); empty = none.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the calibration the model freezes; empty = none.
     */
    CALIBRATION_VERSION(): string | null;
    CALIBRATION_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the candidate or variant, e.g. "S3-KC".
     */
    CANDIDATE(): string | null;
    CANDIDATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FORM(): ermModelForm;
    BASIS(): ermErrorBasis;
    /**
     * How the statistics were formed, human-readable.
     */
    BASIS_TEXT(): string | null;
    BASIS_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Propagator the predictions came from, e.g. "SGP4 (Vallado 2020,
     * WGS-72, opsmode i)".
     */
    PROPAGATOR(): string | null;
    PROPAGATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STRATA_SETTINGS(obj?: ERMStrataSettings): ERMStrataSettings | null;
    /**
     * Horizons of the realism cells, days.
     */
    HORIZONS_DAYS(index: number): number | null;
    horizonsDaysLength(): number;
    horizonsDaysArray(): Float64Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    /**
     * Probabilities of the stratum quantiles (7 values).
     */
    QUANTILE_PROBABILITIES(index: number): number | null;
    quantileProbabilitiesLength(): number;
    quantileProbabilitiesArray(): Float64Array | null;
    /**
     * Model the realism was tested against; empty = none.
     */
    COVERAGE_MODEL(): string | null;
    COVERAGE_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GATE(obj?: ERMGate): ERMGate | null;
    STRATA(index: number, obj?: ERMModelStratum): ERMModelStratum | null;
    strataLength(): number;
    SCALE(obj?: ERMModelScale): ERMModelScale | null;
    CELLS(index: number, obj?: ERMRealismCell): ERMRealismCell | null;
    cellsLength(): number;
    /**
     * ElementSetModel: factors and statuses by stratum.
     */
    STRATUM_FACTORS(index: number, obj?: ERMStratumFactor): ERMStratumFactor | null;
    stratumFactorsLength(): number;
    /**
     * ElementSetModel: strata with fewer samples are not used.
     */
    MINIMUM_BIN_SAMPLES(): bigint;
    /**
     * HorizonFactors: the factors.
     */
    HORIZON_FACTORS(index: number, obj?: ERMHorizonFactor): ERMHorizonFactor | null;
    horizonFactorsLength(): number;
    /**
     * PropagatorCovariance: per regime.
     */
    PROPAGATOR_REGIMES(index: number, obj?: ERMPropagatorRegime): ERMPropagatorRegime | null;
    propagatorRegimesLength(): number;
    /**
     * PropagatorCovariance: window of the epoch fit, ISO 8601.
     */
    EPOCH_WINDOW_START(): string | null;
    EPOCH_WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_WINDOW_STOP(): string | null;
    EPOCH_WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MEASURED_ON(obj?: ERMMeasuredOn): ERMMeasuredOn | null;
    /**
     * Sources (lineages) the model applies to; empty = any.
     */
    SOURCES(index: number): string;
    SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourcesLength(): number;
    /**
     * True for a model pooled over all sources.
     */
    POOLED(): boolean;
    /**
     * Repository, commit and files the model was derived from.
     */
    PROVENANCE_REPOSITORY(): string | null;
    PROVENANCE_REPOSITORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVENANCE_COMMIT(): string | null;
    PROVENANCE_COMMIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVENANCE_FILES(index: number, obj?: ERMProvenanceFile): ERMProvenanceFile | null;
    provenanceFilesLength(): number;
    /**
     * Free label, e.g. the model and calibration paths.
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMModel(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCalibrationVersion(builder: flatbuffers.Builder, CALIBRATION_VERSIONOffset: flatbuffers.Offset): void;
    static addCandidate(builder: flatbuffers.Builder, CANDIDATEOffset: flatbuffers.Offset): void;
    static addForm(builder: flatbuffers.Builder, FORM: ermModelForm): void;
    static addBasis(builder: flatbuffers.Builder, BASIS: ermErrorBasis): void;
    static addBasisText(builder: flatbuffers.Builder, BASIS_TEXTOffset: flatbuffers.Offset): void;
    static addPropagator(builder: flatbuffers.Builder, PROPAGATOROffset: flatbuffers.Offset): void;
    static addStrataSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset): void;
    static addHorizonsDays(builder: flatbuffers.Builder, HORIZONS_DAYSOffset: flatbuffers.Offset): void;
    static createHorizonsDaysVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHorizonsDaysVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHorizonsDaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addQuantileProbabilities(builder: flatbuffers.Builder, QUANTILE_PROBABILITIESOffset: flatbuffers.Offset): void;
    static createQuantileProbabilitiesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createQuantileProbabilitiesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQuantileProbabilitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoverageModel(builder: flatbuffers.Builder, COVERAGE_MODELOffset: flatbuffers.Offset): void;
    static addGate(builder: flatbuffers.Builder, GATEOffset: flatbuffers.Offset): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScale(builder: flatbuffers.Builder, SCALEOffset: flatbuffers.Offset): void;
    static addCells(builder: flatbuffers.Builder, CELLSOffset: flatbuffers.Offset): void;
    static createCellsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCellsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStratumFactors(builder: flatbuffers.Builder, STRATUM_FACTORSOffset: flatbuffers.Offset): void;
    static createStratumFactorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStratumFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinimumBinSamples(builder: flatbuffers.Builder, MINIMUM_BIN_SAMPLES: bigint): void;
    static addHorizonFactors(builder: flatbuffers.Builder, HORIZON_FACTORSOffset: flatbuffers.Offset): void;
    static createHorizonFactorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHorizonFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPropagatorRegimes(builder: flatbuffers.Builder, PROPAGATOR_REGIMESOffset: flatbuffers.Offset): void;
    static createPropagatorRegimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPropagatorRegimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochWindowStart(builder: flatbuffers.Builder, EPOCH_WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addEpochWindowStop(builder: flatbuffers.Builder, EPOCH_WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addMeasuredOn(builder: flatbuffers.Builder, MEASURED_ONOffset: flatbuffers.Offset): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPooled(builder: flatbuffers.Builder, POOLED: boolean): void;
    static addProvenanceRepository(builder: flatbuffers.Builder, PROVENANCE_REPOSITORYOffset: flatbuffers.Offset): void;
    static addProvenanceCommit(builder: flatbuffers.Builder, PROVENANCE_COMMITOffset: flatbuffers.Offset): void;
    static addProvenanceFiles(builder: flatbuffers.Builder, PROVENANCE_FILESOffset: flatbuffers.Offset): void;
    static createProvenanceFilesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProvenanceFilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static endERMModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMModelT;
    unpackTo(_o: ERMModelT): void;
}
export declare class ERMModelT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CALIBRATION_VERSION: string | Uint8Array | null;
    CANDIDATE: string | Uint8Array | null;
    FORM: ermModelForm;
    BASIS: ermErrorBasis;
    BASIS_TEXT: string | Uint8Array | null;
    PROPAGATOR: string | Uint8Array | null;
    STRATA_SETTINGS: ERMStrataSettingsT | null;
    HORIZONS_DAYS: (number)[];
    COUNTS: ERMCountsT | null;
    QUANTILE_PROBABILITIES: (number)[];
    COVERAGE_MODEL: string | Uint8Array | null;
    GATE: ERMGateT | null;
    STRATA: (ERMModelStratumT)[];
    SCALE: ERMModelScaleT | null;
    CELLS: (ERMRealismCellT)[];
    STRATUM_FACTORS: (ERMStratumFactorT)[];
    MINIMUM_BIN_SAMPLES: bigint;
    HORIZON_FACTORS: (ERMHorizonFactorT)[];
    PROPAGATOR_REGIMES: (ERMPropagatorRegimeT)[];
    EPOCH_WINDOW_START: string | Uint8Array | null;
    EPOCH_WINDOW_STOP: string | Uint8Array | null;
    MEASURED_ON: ERMMeasuredOnT | null;
    SOURCES: (string)[];
    POOLED: boolean;
    PROVENANCE_REPOSITORY: string | Uint8Array | null;
    PROVENANCE_COMMIT: string | Uint8Array | null;
    PROVENANCE_FILES: (ERMProvenanceFileT)[];
    LABEL: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, CALIBRATION_VERSION?: string | Uint8Array | null, CANDIDATE?: string | Uint8Array | null, FORM?: ermModelForm, BASIS?: ermErrorBasis, BASIS_TEXT?: string | Uint8Array | null, PROPAGATOR?: string | Uint8Array | null, STRATA_SETTINGS?: ERMStrataSettingsT | null, HORIZONS_DAYS?: (number)[], COUNTS?: ERMCountsT | null, QUANTILE_PROBABILITIES?: (number)[], COVERAGE_MODEL?: string | Uint8Array | null, GATE?: ERMGateT | null, STRATA?: (ERMModelStratumT)[], SCALE?: ERMModelScaleT | null, CELLS?: (ERMRealismCellT)[], STRATUM_FACTORS?: (ERMStratumFactorT)[], MINIMUM_BIN_SAMPLES?: bigint, HORIZON_FACTORS?: (ERMHorizonFactorT)[], PROPAGATOR_REGIMES?: (ERMPropagatorRegimeT)[], EPOCH_WINDOW_START?: string | Uint8Array | null, EPOCH_WINDOW_STOP?: string | Uint8Array | null, MEASURED_ON?: ERMMeasuredOnT | null, SOURCES?: (string)[], POOLED?: boolean, PROVENANCE_REPOSITORY?: string | Uint8Array | null, PROVENANCE_COMMIT?: string | Uint8Array | null, PROVENANCE_FILES?: (ERMProvenanceFileT)[], LABEL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMModel.d.ts.map