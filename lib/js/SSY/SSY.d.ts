import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
import { SSYAlternate, SSYAlternateT } from './SSYAlternate.js';
import { SSYCrossIdentifier, SSYCrossIdentifierT } from './SSYCrossIdentifier.js';
import { SSYJFactor, SSYJFactorT } from './SSYJFactor.js';
import { SSYPlacement, SSYPlacementT } from './SSYPlacement.js';
import { SSYProfileFit, SSYProfileFitT } from './SSYProfileFit.js';
import { SSYProperMotion, SSYProperMotionT } from './SSYProperMotion.js';
import { ssyDistanceTechnique } from './ssyDistanceTechnique.js';
import { ssyFalsePositiveVerdict } from './ssyFalsePositiveVerdict.js';
import { ssyMetallicityTechnique } from './ssyMetallicityTechnique.js';
import { ssySystemKind } from './ssySystemKind.js';
import { ssyVerdict } from './ssyVerdict.js';
/**
 * Stellar System: one galaxy or star cluster and its cited properties.
 */
export declare class SSY implements flatbuffers.IUnpackableObject<SSYT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSY;
    static getRootAsSSY(bb: flatbuffers.ByteBuffer, obj?: SSY): SSY;
    static getSizePrefixedRootAsSSY(bb: flatbuffers.ByteBuffer, obj?: SSY): SSY;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier, publisher-qualified, e.g. "lvdb:antlia_2".
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ABBREVIATION(): string | null;
    ABBREVIATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESIGNATIONS(index: number): string;
    DESIGNATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    designationsLength(): number;
    CROSS_IDS(index: number, obj?: SSYCrossIdentifier): SSYCrossIdentifier | null;
    crossIdsLength(): number;
    SYSTEM_CLASS(): ssySystemKind;
    /**
     * Morphological type verbatim, e.g. dSph, dIrr, GC, NSC.
     */
    MORPHOLOGY(): string | null;
    MORPHOLOGY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the host system's SSY record, e.g. "lvdb:m_031".
     */
    HOST_ID(): string | null;
    HOST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONFIRMED_REAL(): ssyVerdict;
    CONFIRMED_GALAXY(): ssyVerdict;
    CONFIRMED_STAR_CLUSTER(): ssyVerdict;
    FALSE_POSITIVE(): ssyFalsePositiveVerdict;
    FALSE_POSITIVE_REFS(index: number): string;
    FALSE_POSITIVE_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    falsePositiveRefsLength(): number;
    /**
     * Calendar year; -1 absent.
     */
    DISCOVERY_YEAR(): number;
    DISCOVERY_REFS(index: number): string;
    DISCOVERY_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    discoveryRefsLength(): number;
    NOTES(index: number): string;
    NOTES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    notesLength(): number;
    /**
     * ICRS degrees.
     */
    RA(obj?: EXOParameter): EXOParameter | null;
    DEC(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_MODULUS(obj?: EXOParameter): EXOParameter | null;
    /**
     * Heliocentric distance, kpc (derived from DISTANCE_MODULUS when the source says so).
     */
    DISTANCE(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_METHOD(): ssyDistanceTechnique;
    DISTANCE_METHOD_TEXT(): string | null;
    DISTANCE_METHOD_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trigonometric parallax, mas (open and globular clusters).
     */
    PARALLAX(obj?: EXOParameter): EXOParameter | null;
    PLACEMENT(obj?: SSYPlacement): SSYPlacement | null;
    APPARENT_MAG_V(obj?: EXOParameter): EXOParameter | null;
    APPARENT_MAG_B(obj?: EXOParameter): EXOParameter | null;
    APPARENT_MAG_I(obj?: EXOParameter): EXOParameter | null;
    MEAN_EBV(obj?: EXOParameter): EXOParameter | null;
    EXTINCTION_AV(obj?: EXOParameter): EXOParameter | null;
    ABSOLUTE_MAG_V(obj?: EXOParameter): EXOParameter | null;
    /**
     * log10 stellar mass, dex(solMass); the reference states the M/L.
     */
    STELLAR_MASS_LOG(obj?: EXOParameter): EXOParameter | null;
    /**
     * Adopted half-light ellipse: semi-major axis (arcmin), 1 - b/a, PA N->E (deg).
     */
    RHALF(obj?: EXOParameter): EXOParameter | null;
    ELLIPTICITY(obj?: EXOParameter): EXOParameter | null;
    POSITION_ANGLE(obj?: EXOParameter): EXOParameter | null;
    /**
     * Model of the adopted RHALF, verbatim from the source.
     */
    STRUCTURE_MODEL(): string | null;
    STRUCTURE_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Projected half-light radius in pc; and its azimuthal average.
     */
    RHALF_PC(obj?: EXOParameter): EXOParameter | null;
    RHALF_SPH_PC(obj?: EXOParameter): EXOParameter | null;
    SURFACE_BRIGHTNESS_RHALF(obj?: EXOParameter): EXOParameter | null;
    HOLMBERG_DIAMETER(obj?: EXOParameter): EXOParameter | null;
    PROFILE_FITS(index: number, obj?: SSYProfileFit): SSYProfileFit | null;
    profileFitsLength(): number;
    /**
     * Heliocentric systemic line-of-sight velocity and dispersions, km/s.
     */
    VLOS_SYSTEMIC(obj?: EXOParameter): EXOParameter | null;
    VLOS_SIGMA(obj?: EXOParameter): EXOParameter | null;
    VLOS_SIGMA_CENTRAL(obj?: EXOParameter): EXOParameter | null;
    VLOS_ROTATION(obj?: EXOParameter): EXOParameter | null;
    VELOCITY_GSR(obj?: EXOParameter): EXOParameter | null;
    VELOCITY_LG(obj?: EXOParameter): EXOParameter | null;
    /**
     * Adopted systemic proper motion, mas/yr (PMRA includes cos DEC).
     */
    PMRA(obj?: EXOParameter): EXOParameter | null;
    PMDEC(obj?: EXOParameter): EXOParameter | null;
    PMRA_PMDEC_CORR(obj?: EXOParameter): EXOParameter | null;
    PROPER_MOTIONS(index: number, obj?: SSYProperMotion): SSYProperMotion | null;
    properMotionsLength(): number;
    METALLICITY_SPECTROSCOPIC(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_SPECTROSCOPIC_SIGMA(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_PHOTOMETRIC(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_PHOTOMETRIC_SIGMA(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_ISOCHRONE(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_ISOCHRONE_SIGMA(obj?: EXOParameter): EXOParameter | null;
    /**
     * Adopted [Fe/H], dex, and which measurement it is.
     */
    METALLICITY(obj?: EXOParameter): EXOParameter | null;
    METALLICITY_BASIS(): ssyMetallicityTechnique;
    GAS_PHASE_METALLICITY(obj?: EXOParameter): EXOParameter | null;
    GAS_PHASE_METALLICITY_METHOD(): string | null;
    GAS_PHASE_METALLICITY_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Age in Gyr, or log10 age in yr as the source states it.
     */
    AGE(obj?: EXOParameter): EXOParameter | null;
    LOG_AGE(obj?: EXOParameter): EXOParameter | null;
    /**
     * Lookback times at which 50, 80 and 90% of stars had formed, Gyr.
     */
    TAU_50(obj?: EXOParameter): EXOParameter | null;
    TAU_80(obj?: EXOParameter): EXOParameter | null;
    TAU_90(obj?: EXOParameter): EXOParameter | null;
    /**
     * HI flux, Jy km/s; HI kinematics, km/s; log10 HI mass, dex(solMass).
     */
    FLUX_HI(obj?: EXOParameter): EXOParameter | null;
    VLOS_SYSTEMIC_HI(obj?: EXOParameter): EXOParameter | null;
    SIGMA_HI(obj?: EXOParameter): EXOParameter | null;
    VROT_HI(obj?: EXOParameter): EXOParameter | null;
    HI_LINE_WIDTH_50(obj?: EXOParameter): EXOParameter | null;
    HI_MASS_LOG(obj?: EXOParameter): EXOParameter | null;
    /**
     * log10 masses, dex(solMass): Wolf et al. 2010 within r_1/2, and total.
     */
    DYNAMICAL_MASS_WOLF_LOG(obj?: EXOParameter): EXOParameter | null;
    TOTAL_MASS_LOG(obj?: EXOParameter): EXOParameter | null;
    /**
     * Open clusters: member count and Jacobi radius (pc).
     */
    MEMBER_COUNT(obj?: EXOParameter): EXOParameter | null;
    JACOBI_RADIUS_PC(obj?: EXOParameter): EXOParameter | null;
    /**
     * Published orbit, kpc, and the potential it was integrated in, verbatim.
     */
    PERICENTER(obj?: EXOParameter): EXOParameter | null;
    APOCENTER(obj?: EXOParameter): EXOParameter | null;
    ORBIT_POTENTIAL(): string | null;
    ORBIT_POTENTIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    J_FACTORS(index: number, obj?: SSYJFactor): SSYJFactor | null;
    jFactorsLength(): number;
    ALTERNATES(index: number, obj?: SSYAlternate): SSYAlternate | null;
    alternatesLength(): number;
    /**
     * Interval meaning of ERR1/ERR2, e.g. "84th and 16th percentiles".
     */
    UNCERTAINTY_CONVENTION(): string | null;
    UNCERTAINTY_CONVENTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Confidence of LIMIT values, (0, 1), e.g. 0.95.
     */
    LIMIT_CONFIDENCE(): number;
    /**
     * Source catalog, its release, its own key and table, and the row URL.
     */
    SOURCE_CATALOG(): string | null;
    SOURCE_CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_RELEASE(): string | null;
    SOURCE_RELEASE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_KEY(): string | null;
    SOURCE_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_TABLE(): string | null;
    SOURCE_TABLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * sha256 of the source files this record was parsed from.
     */
    SOURCE_SHA256(index: number): string;
    SOURCE_SHA256(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourceSha256Length(): number;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset license; absent means unknown terms, not a grant.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSSY(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAbbreviation(builder: flatbuffers.Builder, ABBREVIATIONOffset: flatbuffers.Offset): void;
    static addDesignations(builder: flatbuffers.Builder, DESIGNATIONSOffset: flatbuffers.Offset): void;
    static createDesignationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDesignationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCrossIds(builder: flatbuffers.Builder, CROSS_IDSOffset: flatbuffers.Offset): void;
    static createCrossIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCrossIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSystemClass(builder: flatbuffers.Builder, SYSTEM_CLASS: ssySystemKind): void;
    static addMorphology(builder: flatbuffers.Builder, MORPHOLOGYOffset: flatbuffers.Offset): void;
    static addHostId(builder: flatbuffers.Builder, HOST_IDOffset: flatbuffers.Offset): void;
    static addConfirmedReal(builder: flatbuffers.Builder, CONFIRMED_REAL: ssyVerdict): void;
    static addConfirmedGalaxy(builder: flatbuffers.Builder, CONFIRMED_GALAXY: ssyVerdict): void;
    static addConfirmedStarCluster(builder: flatbuffers.Builder, CONFIRMED_STAR_CLUSTER: ssyVerdict): void;
    static addFalsePositive(builder: flatbuffers.Builder, FALSE_POSITIVE: ssyFalsePositiveVerdict): void;
    static addFalsePositiveRefs(builder: flatbuffers.Builder, FALSE_POSITIVE_REFSOffset: flatbuffers.Offset): void;
    static createFalsePositiveRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFalsePositiveRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiscoveryYear(builder: flatbuffers.Builder, DISCOVERY_YEAR: number): void;
    static addDiscoveryRefs(builder: flatbuffers.Builder, DISCOVERY_REFSOffset: flatbuffers.Offset): void;
    static createDiscoveryRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDiscoveryRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static createNotesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNotesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRa(builder: flatbuffers.Builder, RAOffset: flatbuffers.Offset): void;
    static addDec(builder: flatbuffers.Builder, DECOffset: flatbuffers.Offset): void;
    static addDistanceModulus(builder: flatbuffers.Builder, DISTANCE_MODULUSOffset: flatbuffers.Offset): void;
    static addDistance(builder: flatbuffers.Builder, DISTANCEOffset: flatbuffers.Offset): void;
    static addDistanceMethod(builder: flatbuffers.Builder, DISTANCE_METHOD: ssyDistanceTechnique): void;
    static addDistanceMethodText(builder: flatbuffers.Builder, DISTANCE_METHOD_TEXTOffset: flatbuffers.Offset): void;
    static addParallax(builder: flatbuffers.Builder, PARALLAXOffset: flatbuffers.Offset): void;
    static addPlacement(builder: flatbuffers.Builder, PLACEMENTOffset: flatbuffers.Offset): void;
    static addApparentMagV(builder: flatbuffers.Builder, APPARENT_MAG_VOffset: flatbuffers.Offset): void;
    static addApparentMagB(builder: flatbuffers.Builder, APPARENT_MAG_BOffset: flatbuffers.Offset): void;
    static addApparentMagI(builder: flatbuffers.Builder, APPARENT_MAG_IOffset: flatbuffers.Offset): void;
    static addMeanEbv(builder: flatbuffers.Builder, MEAN_EBVOffset: flatbuffers.Offset): void;
    static addExtinctionAv(builder: flatbuffers.Builder, EXTINCTION_AVOffset: flatbuffers.Offset): void;
    static addAbsoluteMagV(builder: flatbuffers.Builder, ABSOLUTE_MAG_VOffset: flatbuffers.Offset): void;
    static addStellarMassLog(builder: flatbuffers.Builder, STELLAR_MASS_LOGOffset: flatbuffers.Offset): void;
    static addRhalf(builder: flatbuffers.Builder, RHALFOffset: flatbuffers.Offset): void;
    static addEllipticity(builder: flatbuffers.Builder, ELLIPTICITYOffset: flatbuffers.Offset): void;
    static addPositionAngle(builder: flatbuffers.Builder, POSITION_ANGLEOffset: flatbuffers.Offset): void;
    static addStructureModel(builder: flatbuffers.Builder, STRUCTURE_MODELOffset: flatbuffers.Offset): void;
    static addRhalfPc(builder: flatbuffers.Builder, RHALF_PCOffset: flatbuffers.Offset): void;
    static addRhalfSphPc(builder: flatbuffers.Builder, RHALF_SPH_PCOffset: flatbuffers.Offset): void;
    static addSurfaceBrightnessRhalf(builder: flatbuffers.Builder, SURFACE_BRIGHTNESS_RHALFOffset: flatbuffers.Offset): void;
    static addHolmbergDiameter(builder: flatbuffers.Builder, HOLMBERG_DIAMETEROffset: flatbuffers.Offset): void;
    static addProfileFits(builder: flatbuffers.Builder, PROFILE_FITSOffset: flatbuffers.Offset): void;
    static createProfileFitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProfileFitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVlosSystemic(builder: flatbuffers.Builder, VLOS_SYSTEMICOffset: flatbuffers.Offset): void;
    static addVlosSigma(builder: flatbuffers.Builder, VLOS_SIGMAOffset: flatbuffers.Offset): void;
    static addVlosSigmaCentral(builder: flatbuffers.Builder, VLOS_SIGMA_CENTRALOffset: flatbuffers.Offset): void;
    static addVlosRotation(builder: flatbuffers.Builder, VLOS_ROTATIONOffset: flatbuffers.Offset): void;
    static addVelocityGsr(builder: flatbuffers.Builder, VELOCITY_GSROffset: flatbuffers.Offset): void;
    static addVelocityLg(builder: flatbuffers.Builder, VELOCITY_LGOffset: flatbuffers.Offset): void;
    static addPmra(builder: flatbuffers.Builder, PMRAOffset: flatbuffers.Offset): void;
    static addPmdec(builder: flatbuffers.Builder, PMDECOffset: flatbuffers.Offset): void;
    static addPmraPmdecCorr(builder: flatbuffers.Builder, PMRA_PMDEC_CORROffset: flatbuffers.Offset): void;
    static addProperMotions(builder: flatbuffers.Builder, PROPER_MOTIONSOffset: flatbuffers.Offset): void;
    static createProperMotionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProperMotionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMetallicitySpectroscopic(builder: flatbuffers.Builder, METALLICITY_SPECTROSCOPICOffset: flatbuffers.Offset): void;
    static addMetallicitySpectroscopicSigma(builder: flatbuffers.Builder, METALLICITY_SPECTROSCOPIC_SIGMAOffset: flatbuffers.Offset): void;
    static addMetallicityPhotometric(builder: flatbuffers.Builder, METALLICITY_PHOTOMETRICOffset: flatbuffers.Offset): void;
    static addMetallicityPhotometricSigma(builder: flatbuffers.Builder, METALLICITY_PHOTOMETRIC_SIGMAOffset: flatbuffers.Offset): void;
    static addMetallicityIsochrone(builder: flatbuffers.Builder, METALLICITY_ISOCHRONEOffset: flatbuffers.Offset): void;
    static addMetallicityIsochroneSigma(builder: flatbuffers.Builder, METALLICITY_ISOCHRONE_SIGMAOffset: flatbuffers.Offset): void;
    static addMetallicity(builder: flatbuffers.Builder, METALLICITYOffset: flatbuffers.Offset): void;
    static addMetallicityBasis(builder: flatbuffers.Builder, METALLICITY_BASIS: ssyMetallicityTechnique): void;
    static addGasPhaseMetallicity(builder: flatbuffers.Builder, GAS_PHASE_METALLICITYOffset: flatbuffers.Offset): void;
    static addGasPhaseMetallicityMethod(builder: flatbuffers.Builder, GAS_PHASE_METALLICITY_METHODOffset: flatbuffers.Offset): void;
    static addAge(builder: flatbuffers.Builder, AGEOffset: flatbuffers.Offset): void;
    static addLogAge(builder: flatbuffers.Builder, LOG_AGEOffset: flatbuffers.Offset): void;
    static addTau50(builder: flatbuffers.Builder, TAU_50Offset: flatbuffers.Offset): void;
    static addTau80(builder: flatbuffers.Builder, TAU_80Offset: flatbuffers.Offset): void;
    static addTau90(builder: flatbuffers.Builder, TAU_90Offset: flatbuffers.Offset): void;
    static addFluxHi(builder: flatbuffers.Builder, FLUX_HIOffset: flatbuffers.Offset): void;
    static addVlosSystemicHi(builder: flatbuffers.Builder, VLOS_SYSTEMIC_HIOffset: flatbuffers.Offset): void;
    static addSigmaHi(builder: flatbuffers.Builder, SIGMA_HIOffset: flatbuffers.Offset): void;
    static addVrotHi(builder: flatbuffers.Builder, VROT_HIOffset: flatbuffers.Offset): void;
    static addHiLineWidth50(builder: flatbuffers.Builder, HI_LINE_WIDTH_50Offset: flatbuffers.Offset): void;
    static addHiMassLog(builder: flatbuffers.Builder, HI_MASS_LOGOffset: flatbuffers.Offset): void;
    static addDynamicalMassWolfLog(builder: flatbuffers.Builder, DYNAMICAL_MASS_WOLF_LOGOffset: flatbuffers.Offset): void;
    static addTotalMassLog(builder: flatbuffers.Builder, TOTAL_MASS_LOGOffset: flatbuffers.Offset): void;
    static addMemberCount(builder: flatbuffers.Builder, MEMBER_COUNTOffset: flatbuffers.Offset): void;
    static addJacobiRadiusPc(builder: flatbuffers.Builder, JACOBI_RADIUS_PCOffset: flatbuffers.Offset): void;
    static addPericenter(builder: flatbuffers.Builder, PERICENTEROffset: flatbuffers.Offset): void;
    static addApocenter(builder: flatbuffers.Builder, APOCENTEROffset: flatbuffers.Offset): void;
    static addOrbitPotential(builder: flatbuffers.Builder, ORBIT_POTENTIALOffset: flatbuffers.Offset): void;
    static addJFactors(builder: flatbuffers.Builder, J_FACTORSOffset: flatbuffers.Offset): void;
    static createJFactorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startJFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAlternates(builder: flatbuffers.Builder, ALTERNATESOffset: flatbuffers.Offset): void;
    static createAlternatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUncertaintyConvention(builder: flatbuffers.Builder, UNCERTAINTY_CONVENTIONOffset: flatbuffers.Offset): void;
    static addLimitConfidence(builder: flatbuffers.Builder, LIMIT_CONFIDENCE: number): void;
    static addSourceCatalog(builder: flatbuffers.Builder, SOURCE_CATALOGOffset: flatbuffers.Offset): void;
    static addSourceRelease(builder: flatbuffers.Builder, SOURCE_RELEASEOffset: flatbuffers.Offset): void;
    static addSourceKey(builder: flatbuffers.Builder, SOURCE_KEYOffset: flatbuffers.Offset): void;
    static addSourceTable(builder: flatbuffers.Builder, SOURCE_TABLEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static createSourceSha256Vector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourceSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSSY(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSSYBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSSYBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SSYT;
    unpackTo(_o: SSYT): void;
}
export declare class SSYT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ABBREVIATION: string | Uint8Array | null;
    DESIGNATIONS: (string)[];
    CROSS_IDS: (SSYCrossIdentifierT)[];
    SYSTEM_CLASS: ssySystemKind;
    MORPHOLOGY: string | Uint8Array | null;
    HOST_ID: string | Uint8Array | null;
    CONFIRMED_REAL: ssyVerdict;
    CONFIRMED_GALAXY: ssyVerdict;
    CONFIRMED_STAR_CLUSTER: ssyVerdict;
    FALSE_POSITIVE: ssyFalsePositiveVerdict;
    FALSE_POSITIVE_REFS: (string)[];
    DISCOVERY_YEAR: number;
    DISCOVERY_REFS: (string)[];
    NOTES: (string)[];
    RA: EXOParameterT | null;
    DEC: EXOParameterT | null;
    DISTANCE_MODULUS: EXOParameterT | null;
    DISTANCE: EXOParameterT | null;
    DISTANCE_METHOD: ssyDistanceTechnique;
    DISTANCE_METHOD_TEXT: string | Uint8Array | null;
    PARALLAX: EXOParameterT | null;
    PLACEMENT: SSYPlacementT | null;
    APPARENT_MAG_V: EXOParameterT | null;
    APPARENT_MAG_B: EXOParameterT | null;
    APPARENT_MAG_I: EXOParameterT | null;
    MEAN_EBV: EXOParameterT | null;
    EXTINCTION_AV: EXOParameterT | null;
    ABSOLUTE_MAG_V: EXOParameterT | null;
    STELLAR_MASS_LOG: EXOParameterT | null;
    RHALF: EXOParameterT | null;
    ELLIPTICITY: EXOParameterT | null;
    POSITION_ANGLE: EXOParameterT | null;
    STRUCTURE_MODEL: string | Uint8Array | null;
    RHALF_PC: EXOParameterT | null;
    RHALF_SPH_PC: EXOParameterT | null;
    SURFACE_BRIGHTNESS_RHALF: EXOParameterT | null;
    HOLMBERG_DIAMETER: EXOParameterT | null;
    PROFILE_FITS: (SSYProfileFitT)[];
    VLOS_SYSTEMIC: EXOParameterT | null;
    VLOS_SIGMA: EXOParameterT | null;
    VLOS_SIGMA_CENTRAL: EXOParameterT | null;
    VLOS_ROTATION: EXOParameterT | null;
    VELOCITY_GSR: EXOParameterT | null;
    VELOCITY_LG: EXOParameterT | null;
    PMRA: EXOParameterT | null;
    PMDEC: EXOParameterT | null;
    PMRA_PMDEC_CORR: EXOParameterT | null;
    PROPER_MOTIONS: (SSYProperMotionT)[];
    METALLICITY_SPECTROSCOPIC: EXOParameterT | null;
    METALLICITY_SPECTROSCOPIC_SIGMA: EXOParameterT | null;
    METALLICITY_PHOTOMETRIC: EXOParameterT | null;
    METALLICITY_PHOTOMETRIC_SIGMA: EXOParameterT | null;
    METALLICITY_ISOCHRONE: EXOParameterT | null;
    METALLICITY_ISOCHRONE_SIGMA: EXOParameterT | null;
    METALLICITY: EXOParameterT | null;
    METALLICITY_BASIS: ssyMetallicityTechnique;
    GAS_PHASE_METALLICITY: EXOParameterT | null;
    GAS_PHASE_METALLICITY_METHOD: string | Uint8Array | null;
    AGE: EXOParameterT | null;
    LOG_AGE: EXOParameterT | null;
    TAU_50: EXOParameterT | null;
    TAU_80: EXOParameterT | null;
    TAU_90: EXOParameterT | null;
    FLUX_HI: EXOParameterT | null;
    VLOS_SYSTEMIC_HI: EXOParameterT | null;
    SIGMA_HI: EXOParameterT | null;
    VROT_HI: EXOParameterT | null;
    HI_LINE_WIDTH_50: EXOParameterT | null;
    HI_MASS_LOG: EXOParameterT | null;
    DYNAMICAL_MASS_WOLF_LOG: EXOParameterT | null;
    TOTAL_MASS_LOG: EXOParameterT | null;
    MEMBER_COUNT: EXOParameterT | null;
    JACOBI_RADIUS_PC: EXOParameterT | null;
    PERICENTER: EXOParameterT | null;
    APOCENTER: EXOParameterT | null;
    ORBIT_POTENTIAL: string | Uint8Array | null;
    J_FACTORS: (SSYJFactorT)[];
    ALTERNATES: (SSYAlternateT)[];
    UNCERTAINTY_CONVENTION: string | Uint8Array | null;
    LIMIT_CONFIDENCE: number;
    SOURCE_CATALOG: string | Uint8Array | null;
    SOURCE_RELEASE: string | Uint8Array | null;
    SOURCE_KEY: string | Uint8Array | null;
    SOURCE_TABLE: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_SHA256: (string)[];
    CITATION: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ABBREVIATION?: string | Uint8Array | null, DESIGNATIONS?: (string)[], CROSS_IDS?: (SSYCrossIdentifierT)[], SYSTEM_CLASS?: ssySystemKind, MORPHOLOGY?: string | Uint8Array | null, HOST_ID?: string | Uint8Array | null, CONFIRMED_REAL?: ssyVerdict, CONFIRMED_GALAXY?: ssyVerdict, CONFIRMED_STAR_CLUSTER?: ssyVerdict, FALSE_POSITIVE?: ssyFalsePositiveVerdict, FALSE_POSITIVE_REFS?: (string)[], DISCOVERY_YEAR?: number, DISCOVERY_REFS?: (string)[], NOTES?: (string)[], RA?: EXOParameterT | null, DEC?: EXOParameterT | null, DISTANCE_MODULUS?: EXOParameterT | null, DISTANCE?: EXOParameterT | null, DISTANCE_METHOD?: ssyDistanceTechnique, DISTANCE_METHOD_TEXT?: string | Uint8Array | null, PARALLAX?: EXOParameterT | null, PLACEMENT?: SSYPlacementT | null, APPARENT_MAG_V?: EXOParameterT | null, APPARENT_MAG_B?: EXOParameterT | null, APPARENT_MAG_I?: EXOParameterT | null, MEAN_EBV?: EXOParameterT | null, EXTINCTION_AV?: EXOParameterT | null, ABSOLUTE_MAG_V?: EXOParameterT | null, STELLAR_MASS_LOG?: EXOParameterT | null, RHALF?: EXOParameterT | null, ELLIPTICITY?: EXOParameterT | null, POSITION_ANGLE?: EXOParameterT | null, STRUCTURE_MODEL?: string | Uint8Array | null, RHALF_PC?: EXOParameterT | null, RHALF_SPH_PC?: EXOParameterT | null, SURFACE_BRIGHTNESS_RHALF?: EXOParameterT | null, HOLMBERG_DIAMETER?: EXOParameterT | null, PROFILE_FITS?: (SSYProfileFitT)[], VLOS_SYSTEMIC?: EXOParameterT | null, VLOS_SIGMA?: EXOParameterT | null, VLOS_SIGMA_CENTRAL?: EXOParameterT | null, VLOS_ROTATION?: EXOParameterT | null, VELOCITY_GSR?: EXOParameterT | null, VELOCITY_LG?: EXOParameterT | null, PMRA?: EXOParameterT | null, PMDEC?: EXOParameterT | null, PMRA_PMDEC_CORR?: EXOParameterT | null, PROPER_MOTIONS?: (SSYProperMotionT)[], METALLICITY_SPECTROSCOPIC?: EXOParameterT | null, METALLICITY_SPECTROSCOPIC_SIGMA?: EXOParameterT | null, METALLICITY_PHOTOMETRIC?: EXOParameterT | null, METALLICITY_PHOTOMETRIC_SIGMA?: EXOParameterT | null, METALLICITY_ISOCHRONE?: EXOParameterT | null, METALLICITY_ISOCHRONE_SIGMA?: EXOParameterT | null, METALLICITY?: EXOParameterT | null, METALLICITY_BASIS?: ssyMetallicityTechnique, GAS_PHASE_METALLICITY?: EXOParameterT | null, GAS_PHASE_METALLICITY_METHOD?: string | Uint8Array | null, AGE?: EXOParameterT | null, LOG_AGE?: EXOParameterT | null, TAU_50?: EXOParameterT | null, TAU_80?: EXOParameterT | null, TAU_90?: EXOParameterT | null, FLUX_HI?: EXOParameterT | null, VLOS_SYSTEMIC_HI?: EXOParameterT | null, SIGMA_HI?: EXOParameterT | null, VROT_HI?: EXOParameterT | null, HI_LINE_WIDTH_50?: EXOParameterT | null, HI_MASS_LOG?: EXOParameterT | null, DYNAMICAL_MASS_WOLF_LOG?: EXOParameterT | null, TOTAL_MASS_LOG?: EXOParameterT | null, MEMBER_COUNT?: EXOParameterT | null, JACOBI_RADIUS_PC?: EXOParameterT | null, PERICENTER?: EXOParameterT | null, APOCENTER?: EXOParameterT | null, ORBIT_POTENTIAL?: string | Uint8Array | null, J_FACTORS?: (SSYJFactorT)[], ALTERNATES?: (SSYAlternateT)[], UNCERTAINTY_CONVENTION?: string | Uint8Array | null, LIMIT_CONFIDENCE?: number, SOURCE_CATALOG?: string | Uint8Array | null, SOURCE_RELEASE?: string | Uint8Array | null, SOURCE_KEY?: string | Uint8Array | null, SOURCE_TABLE?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_SHA256?: (string)[], CITATION?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSY.d.ts.map