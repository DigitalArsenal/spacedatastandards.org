import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
import { PRWJB2008IndicesTable, PRWJB2008IndicesTableT } from './PRWJB2008IndicesTable.js';
import { SPW, SPWT } from './SPW.js';
import { dclCorrection, dclCorrectionT } from './dclCorrection.js';
import { dclFitStatistics, dclFitStatisticsT } from './dclFitStatistics.js';
import { dclIteration, dclIterationT } from './dclIteration.js';
import { dclLevel, dclLevelT } from './dclLevel.js';
import { dclObject, dclObjectT } from './dclObject.js';
import { dclPoints, dclPointsT } from './dclPoints.js';
import { dclProduct } from './dclProduct.js';
import { dclSettings, dclSettingsT } from './dclSettings.js';
import { dclStates, dclStatesT } from './dclStates.js';
import { dclStatus } from './dclStatus.js';
/**
 * Density Calibration - a density-model correction, how it was fitted, and
 * the densities, decays, energies and drag work computed with it.
 */
export declare class DCL implements flatbuffers.IUnpackableObject<DCLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DCL;
    static getRootAsDCL(bb: flatbuffers.ByteBuffer, obj?: DCL): DCL;
    static getSizePrefixedRootAsDCL(bb: flatbuffers.ByteBuffer, obj?: DCL): DCL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the record; empty = not assigned.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds the record was produced.
     */
    CREATED_AT_MS(): bigint;
    /**
     * Identifier of the producing service or tool.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PRODUCT(): dclProduct;
    /**
     * The density model and version (JB08 2008, NRLMSIS00E 2000, ...).
     */
    ATMOSPHERE(obj?: ATM): ATM | null;
    /**
     * JB2008 drivers: daily solar indices and the hourly Dst-derived
     * exospheric temperature change (DTC_HOURLY_K).
     */
    JB2008_DRIVERS(obj?: PRWJB2008IndicesTable): PRWJB2008IndicesTable | null;
    /**
     * NRLMSISE-00 drivers: daily space weather.
     */
    SPACE_WEATHER(index: number, obj?: SPW): SPW | null;
    spaceWeatherLength(): number;
    /**
     * Geopotential for the energy: field name (e.g. "EGM2008"), degree and
     * order, central-term GM (m^3/s^2; 0 = 3.986004418e14) and the Earth's
     * rotation rate (rad/s; 0 = 7.292115e-5).
     */
    GRAVITY_FIELD(): string | null;
    GRAVITY_FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GRAVITY_DEGREE(): number;
    GRAVITY_ORDER(): number;
    GM_M3_S2(): number;
    EARTH_ROTATION_RAD_S(): number;
    /**
     * Drag work: ballistic coefficient Cd A / m, m^2/kg; 0 = 1.
     */
    BALLISTIC_COEFFICIENT_M2_KG(): number;
    SETTINGS(obj?: dclSettings): dclSettings | null;
    /**
     * The correction: applied (an input) or estimated (a result).
     */
    CORRECTION(obj?: dclCorrection): dclCorrection | null;
    STATUS(): dclStatus;
    /**
     * Stable machine-readable reason when STATUS is not Solved, e.g.
     * "invalid-request", "invalid-correction", "integration-failed".
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * DensityEvaluation and DensityCalibration: the points.
     */
    POINTS(obj?: dclPoints): dclPoints | null;
    /**
     * OrbitalDecay and DecayCalibration: the objects.
     */
    OBJECTS(index: number, obj?: dclObject): dclObject | null;
    objectsLength(): number;
    /**
     * DecayCalibration: the overall fit, the correction's level at each
     * altitude node, the iteration history, the correlation of the level
     * with the precision-weighted mean ln B (near -1 = the level is not
     * determined), and the formal sigma of the mean level, K.
     */
    FIT(obj?: dclFitStatistics): dclFitStatistics | null;
    LEVELS(index: number, obj?: dclLevel): dclLevel | null;
    levelsLength(): number;
    HISTORY(index: number, obj?: dclIteration): dclIteration | null;
    historyLength(): number;
    LEVEL_LN_B_CORRELATION(): number;
    MEAN_LEVEL_SIGMA_K(): number;
    /**
     * OrbitalEnergy and DragWork: the states and their results.
     */
    STATES(obj?: dclStates): dclStates | null;
    static startDCL(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCreatedAtMs(builder: flatbuffers.Builder, CREATED_AT_MS: bigint): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addProduct(builder: flatbuffers.Builder, PRODUCT: dclProduct): void;
    static addAtmosphere(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset): void;
    static addJb2008Drivers(builder: flatbuffers.Builder, JB2008_DRIVERSOffset: flatbuffers.Offset): void;
    static addSpaceWeather(builder: flatbuffers.Builder, SPACE_WEATHEROffset: flatbuffers.Offset): void;
    static createSpaceWeatherVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpaceWeatherVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGravityField(builder: flatbuffers.Builder, GRAVITY_FIELDOffset: flatbuffers.Offset): void;
    static addGravityDegree(builder: flatbuffers.Builder, GRAVITY_DEGREE: number): void;
    static addGravityOrder(builder: flatbuffers.Builder, GRAVITY_ORDER: number): void;
    static addGmM3S2(builder: flatbuffers.Builder, GM_M3_S2: number): void;
    static addEarthRotationRadS(builder: flatbuffers.Builder, EARTH_ROTATION_RAD_S: number): void;
    static addBallisticCoefficientM2Kg(builder: flatbuffers.Builder, BALLISTIC_COEFFICIENT_M2_KG: number): void;
    static addSettings(builder: flatbuffers.Builder, SETTINGSOffset: flatbuffers.Offset): void;
    static addCorrection(builder: flatbuffers.Builder, CORRECTIONOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: dclStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFit(builder: flatbuffers.Builder, FITOffset: flatbuffers.Offset): void;
    static addLevels(builder: flatbuffers.Builder, LEVELSOffset: flatbuffers.Offset): void;
    static createLevelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHistory(builder: flatbuffers.Builder, HISTORYOffset: flatbuffers.Offset): void;
    static createHistoryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHistoryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLevelLnBCorrelation(builder: flatbuffers.Builder, LEVEL_LN_B_CORRELATION: number): void;
    static addMeanLevelSigmaK(builder: flatbuffers.Builder, MEAN_LEVEL_SIGMA_K: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static endDCL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDCLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDCLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): DCLT;
    unpackTo(_o: DCLT): void;
}
export declare class DCLT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CREATED_AT_MS: bigint;
    PRODUCER: string | Uint8Array | null;
    PRODUCT: dclProduct;
    ATMOSPHERE: ATMT | null;
    JB2008_DRIVERS: PRWJB2008IndicesTableT | null;
    SPACE_WEATHER: (SPWT)[];
    GRAVITY_FIELD: string | Uint8Array | null;
    GRAVITY_DEGREE: number;
    GRAVITY_ORDER: number;
    GM_M3_S2: number;
    EARTH_ROTATION_RAD_S: number;
    BALLISTIC_COEFFICIENT_M2_KG: number;
    SETTINGS: dclSettingsT | null;
    CORRECTION: dclCorrectionT | null;
    STATUS: dclStatus;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    POINTS: dclPointsT | null;
    OBJECTS: (dclObjectT)[];
    FIT: dclFitStatisticsT | null;
    LEVELS: (dclLevelT)[];
    HISTORY: (dclIterationT)[];
    LEVEL_LN_B_CORRELATION: number;
    MEAN_LEVEL_SIGMA_K: number;
    STATES: dclStatesT | null;
    constructor(ID?: string | Uint8Array | null, CREATED_AT_MS?: bigint, PRODUCER?: string | Uint8Array | null, PRODUCT?: dclProduct, ATMOSPHERE?: ATMT | null, JB2008_DRIVERS?: PRWJB2008IndicesTableT | null, SPACE_WEATHER?: (SPWT)[], GRAVITY_FIELD?: string | Uint8Array | null, GRAVITY_DEGREE?: number, GRAVITY_ORDER?: number, GM_M3_S2?: number, EARTH_ROTATION_RAD_S?: number, BALLISTIC_COEFFICIENT_M2_KG?: number, SETTINGS?: dclSettingsT | null, CORRECTION?: dclCorrectionT | null, STATUS?: dclStatus, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, POINTS?: dclPointsT | null, OBJECTS?: (dclObjectT)[], FIT?: dclFitStatisticsT | null, LEVELS?: (dclLevelT)[], HISTORY?: (dclIterationT)[], LEVEL_LN_B_CORRELATION?: number, MEAN_LEVEL_SIGMA_K?: number, STATES?: dclStatesT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DCL.d.ts.map