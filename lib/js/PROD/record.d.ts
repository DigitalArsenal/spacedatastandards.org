import { OCMT, type PRWStateMatrixT, covarianceOrdering, prwDynamicParameter, meanElementSource } from '../OCM/main.js';
import { type ODRT, memMeasurementType } from '../ODR/main.js';
import { type Result } from './tokens.js';
import { type Equinoctial, type Matrix, type State } from './frames.js';
export interface ParameterDefinition {
    readonly name: string;
    /** The product symbol: B, BDOT, AGOM, T, OUTGASSING. */
    readonly symbol: string;
    readonly kind: prwDynamicParameter;
    readonly units: string;
}
/** The five dynamical-model parameters a covariance may carry after the state, in their fixed order. */
export declare const PARAMETERS: readonly ParameterDefinition[];
export declare const STATE_UNITS: readonly string[];
export declare const STATE_ROWS = 6;
export declare const COVARIANCE_ORDERING = covarianceOrdering.LTM;
export declare const REFUSAL_CODES: readonly string[];
export declare function parameterByKind(kind: prwDynamicParameter): ParameterDefinition | undefined;
export declare function parameterByName(name: string): ParameterDefinition | undefined;
/** The COV_UNITS of a covariance over the state and the named parameters (COV_SIZE entries, D10). */
export declare function covarianceUnits(parameters: readonly string[]): string[];
export interface RecordForceModel {
    readonly gravityModel: string | null;
    readonly gravityDegree: number;
    readonly gravityOrder: number;
    readonly atmosphericDrag: string | null;
    readonly atmosphericModel: string | null;
    readonly solarRadiationPressure: string | null;
    readonly nBody: readonly string[];
    readonly solidTides: string | null;
    readonly oceanTides: string | null;
    readonly fixedF107: number;
    readonly fixedF107Mean: number;
    readonly fixedGeomagneticAp: number;
}
export interface RecordIntegrator {
    readonly mode: number;
    readonly coordinateSystem: number;
    readonly partials: number;
    readonly stepMode: number;
    readonly fixedStep: boolean;
    readonly stepSizeSelection: number;
    readonly initialStepSeconds: number;
    readonly errorControl: number;
}
export interface RecordMeta {
    readonly objectName: string | null;
    readonly objectDesignator: string | null;
    readonly internationalDesignator: string | null;
    readonly noradCatId: number;
    readonly originator: string | null;
    readonly creationDate: string | null;
    readonly messageId: string | null;
    /** ORB_AVERAGING, else the mean element set's theory name. */
    readonly theory: string | null;
    readonly frame: string | null;
    readonly covarianceFrame: string | null;
    readonly centerName: string | null;
    readonly timeSystem: string | null;
    readonly epoch: string;
    readonly epochMs: number;
    readonly taiMinusUtc: number | null;
    readonly ut1MinusUtc: number | null;
    readonly ut1Rate: number | null;
    readonly polarMotionX: number | null;
    readonly polarMotionY: number | null;
    readonly leapSecondEpoch: string | null;
    readonly leapSecondTaiMinusUtc: number | null;
    readonly nutationTag: string | null;
    readonly eopSource: string | null;
    /** km**3/s**2, PERTURBATIONS.GM; null when not stated. */
    readonly gm: number | null;
    readonly forceModel: RecordForceModel | null;
    readonly integrator: RecordIntegrator | null;
    readonly toolVersion: string | null;
}
export interface RecordParameter extends ParameterDefinition {
    readonly value: number;
    readonly solvedFor: boolean;
}
export interface RecordMeanElements {
    readonly theory: meanElementSource;
    readonly epoch: string;
    readonly meanMotion: number;
    readonly eccentricity: number;
    readonly inclination: number;
    readonly raan: number;
    readonly argOfPericenter: number;
    readonly meanAnomaly: number;
    readonly bstar: number;
    readonly meanMotionDot: number;
    readonly meanMotionDdot: number;
    readonly bterm: number;
    readonly agom: number;
}
export interface RecordElements {
    readonly meanElements: RecordMeanElements | null;
    /** The $OCM EQUINOCTIAL set at the first state (D2); null without a state or GM. */
    readonly equinoctial: Equinoctial | null;
    /** Every dynamical-model parameter the solution carries, solved for or held, in the fixed order. */
    readonly parameters: readonly RecordParameter[];
}
export interface RecordFit {
    readonly observations: number | null;
    readonly tracks: number | null;
    readonly iterations: number | null;
    readonly converged: boolean | null;
    readonly rmsKm: number | null;
    readonly weightedRms: number | null;
    readonly sedr: number | null;
    readonly solvedFor: readonly string[];
    readonly method: string | null;
    readonly arcStart: string | null;
    readonly arcStop: string | null;
}
export interface RecordEpoch {
    readonly minutes: number;
    readonly epochMs: number;
    readonly state: State;
    readonly rev: number | null;
    readonly geodetic: null;
    readonly meanElements: null;
}
export interface RecordCovariance {
    readonly frame: string | null;
    readonly type: string;
    readonly ordering: covarianceOrdering;
    readonly size: number;
    readonly parameters: readonly string[];
    readonly kinds: readonly prwDynamicParameter[];
    readonly units: readonly string[];
    readonly perEpoch: readonly {
        readonly ltm: readonly number[];
        readonly sigma: readonly number[];
    }[];
    readonly sensitivities: readonly Matrix[] | null;
}
export interface RecordResidual {
    readonly id: string;
    readonly epoch: string | null;
    readonly epochMs: number | null;
    readonly type: memMeasurementType;
    readonly typeName: string;
    readonly observed: number;
    readonly computed: number;
    /** OBSERVED_VALUE - COMPUTED_VALUE. */
    readonly residual: number;
    readonly weight: number;
    readonly accepted: boolean;
    readonly code: string | null;
    readonly iteration: number;
    readonly prefitResidual: number;
    readonly normalizedResidual: number;
    readonly reason: string | null;
}
export interface Record {
    readonly ocm: OCMT;
    readonly odr: ODRT | null;
    readonly meta: RecordMeta;
    readonly elements: RecordElements;
    readonly fit: RecordFit;
    readonly epochs: readonly RecordEpoch[];
    readonly covariance: RecordCovariance;
    readonly residuals: readonly RecordResidual[];
}
/** The Record of an $OCM (and the $ODR of its fit's residuals, and the module's STM rows per epoch, where given). */
export declare function fromOcm(ocm: OCMT, odr?: ODRT | null, sensitivities?: readonly PRWStateMatrixT[]): Result<Record>;
/** The $OCM of a Record: the one it was born from, validated again, so the bytes are the ones that came in. */
export declare function toOcm(record: Record): Result<OCMT>;
//# sourceMappingURL=record.d.ts.map