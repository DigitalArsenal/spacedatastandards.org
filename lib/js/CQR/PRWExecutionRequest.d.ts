import * as flatbuffers from 'flatbuffers';
import { PRWFiniteBurn, PRWFiniteBurnT } from './PRWFiniteBurn.js';
import { PRWForceConfiguration, PRWForceConfigurationT } from './PRWForceConfiguration.js';
import { PRWImpulse, PRWImpulseT } from './PRWImpulse.js';
import { PRWIntegratorSettings, PRWIntegratorSettingsT } from './PRWIntegratorSettings.js';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
import { PRWStateMatrix, PRWStateMatrixT } from './PRWStateMatrix.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { prwDensityTreatment } from './prwDensityTreatment.js';
import { prwDerivativeTechnique } from './prwDerivativeTechnique.js';
/**
 * Fixed endpoint propagation. Provider selected by the host's connected port.
 */
export declare class PRWExecutionRequest implements flatbuffers.IUnpackableObject<PRWExecutionRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWExecutionRequest;
    static getRootAsPRWExecutionRequest(bb: flatbuffers.ByteBuffer, obj?: PRWExecutionRequest): PRWExecutionRequest;
    static getSizePrefixedRootAsPRWExecutionRequest(bb: flatbuffers.ByteBuffer, obj?: PRWExecutionRequest): PRWExecutionRequest;
    INITIAL(obj?: PRWResidentState): PRWResidentState | null;
    TARGET_EPOCH(obj?: TIMInstant): TIMInstant | null;
    INTEGRATOR(obj?: PRWIntegratorSettings): PRWIntegratorSettings | null;
    FORCES(obj?: PRWForceConfiguration): PRWForceConfiguration | null;
    INCLUDE_STM(): boolean;
    STM_TECHNIQUE(): prwDerivativeTechnique;
    DENSITY_TREATMENT(): prwDensityTreatment;
    INITIAL_COVARIANCE(obj?: PRWStateMatrix): PRWStateMatrix | null;
    INITIAL_MASS_COVARIANCE(obj?: PRWStateMatrix): PRWStateMatrix | null;
    SAMPLE_EPOCHS(index: number, obj?: TIMInstant): TIMInstant | null;
    sampleEpochsLength(): number;
    IMPULSES(index: number, obj?: PRWImpulse): PRWImpulse | null;
    impulsesLength(): number;
    /**
     * Explicitly selects 7-state integration even if FINITE_BURNS is empty.
     */
    INCLUDE_MASS_DYNAMICS(): boolean;
    FINITE_BURNS(index: number, obj?: PRWFiniteBurn): PRWFiniteBurn | null;
    finiteBurnsLength(): number;
    static startPRWExecutionRequest(builder: flatbuffers.Builder): void;
    static addInitial(builder: flatbuffers.Builder, INITIALOffset: flatbuffers.Offset): void;
    static addTargetEpoch(builder: flatbuffers.Builder, TARGET_EPOCHOffset: flatbuffers.Offset): void;
    static addIntegrator(builder: flatbuffers.Builder, INTEGRATOROffset: flatbuffers.Offset): void;
    static addForces(builder: flatbuffers.Builder, FORCESOffset: flatbuffers.Offset): void;
    static addIncludeStm(builder: flatbuffers.Builder, INCLUDE_STM: boolean): void;
    static addStmTechnique(builder: flatbuffers.Builder, STM_TECHNIQUE: prwDerivativeTechnique): void;
    static addDensityTreatment(builder: flatbuffers.Builder, DENSITY_TREATMENT: prwDensityTreatment): void;
    static addInitialCovariance(builder: flatbuffers.Builder, INITIAL_COVARIANCEOffset: flatbuffers.Offset): void;
    static addInitialMassCovariance(builder: flatbuffers.Builder, INITIAL_MASS_COVARIANCEOffset: flatbuffers.Offset): void;
    static addSampleEpochs(builder: flatbuffers.Builder, SAMPLE_EPOCHSOffset: flatbuffers.Offset): void;
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSampleEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addImpulses(builder: flatbuffers.Builder, IMPULSESOffset: flatbuffers.Offset): void;
    static createImpulsesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startImpulsesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIncludeMassDynamics(builder: flatbuffers.Builder, INCLUDE_MASS_DYNAMICS: boolean): void;
    static addFiniteBurns(builder: flatbuffers.Builder, FINITE_BURNSOffset: flatbuffers.Offset): void;
    static createFiniteBurnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFiniteBurnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWExecutionRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWExecutionRequestT;
    unpackTo(_o: PRWExecutionRequestT): void;
}
export declare class PRWExecutionRequestT implements flatbuffers.IGeneratedObject {
    INITIAL: PRWResidentStateT | null;
    TARGET_EPOCH: TIMInstantT | null;
    INTEGRATOR: PRWIntegratorSettingsT | null;
    FORCES: PRWForceConfigurationT | null;
    INCLUDE_STM: boolean;
    STM_TECHNIQUE: prwDerivativeTechnique;
    DENSITY_TREATMENT: prwDensityTreatment;
    INITIAL_COVARIANCE: PRWStateMatrixT | null;
    INITIAL_MASS_COVARIANCE: PRWStateMatrixT | null;
    SAMPLE_EPOCHS: (TIMInstantT)[];
    IMPULSES: (PRWImpulseT)[];
    INCLUDE_MASS_DYNAMICS: boolean;
    FINITE_BURNS: (PRWFiniteBurnT)[];
    constructor(INITIAL?: PRWResidentStateT | null, TARGET_EPOCH?: TIMInstantT | null, INTEGRATOR?: PRWIntegratorSettingsT | null, FORCES?: PRWForceConfigurationT | null, INCLUDE_STM?: boolean, STM_TECHNIQUE?: prwDerivativeTechnique, DENSITY_TREATMENT?: prwDensityTreatment, INITIAL_COVARIANCE?: PRWStateMatrixT | null, INITIAL_MASS_COVARIANCE?: PRWStateMatrixT | null, SAMPLE_EPOCHS?: (TIMInstantT)[], IMPULSES?: (PRWImpulseT)[], INCLUDE_MASS_DYNAMICS?: boolean, FINITE_BURNS?: (PRWFiniteBurnT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWExecutionRequest.d.ts.map