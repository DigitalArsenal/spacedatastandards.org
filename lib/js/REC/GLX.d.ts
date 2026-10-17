import * as flatbuffers from 'flatbuffers';
import { glxDistanceTechnique } from './glxDistanceTechnique.js';
import { glxObjectCategory } from './glxObjectCategory.js';
import { glxRedshiftTechnique } from './glxRedshiftTechnique.js';
import { glxSpectralRestFrame } from './glxSpectralRestFrame.js';
import { glxTruthValue } from './glxTruthValue.js';
export declare class GLX implements flatbuffers.IUnpackableObject<GLXT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GLX;
    static getRootAsGLX(bb: flatbuffers.ByteBuffer, obj?: GLX): GLX;
    static getSizePrefixedRootAsGLX(bb: flatbuffers.ByteBuffer, obj?: GLX): GLX;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESIGNATIONS(index: number): string;
    DESIGNATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    designationsLength(): number;
    /**
     * ICRS right ascension and declination, degrees.
     */
    RA_DEG(): number;
    DEC_DEG(): number;
    CSO_ID(): string | null;
    CSO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published distance and uncertainty in Mpc; METHOD and REF name its basis.
     */
    DISTANCE_MPC(): number;
    DISTANCE_UNC_MPC(): number;
    DISTANCE_METHOD(): glxDistanceTechnique;
    DISTANCE_REF(): string | null;
    DISTANCE_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published heliocentric radial velocity, km/s. Do not substitute c*z.
     */
    HELIO_VELOCITY_KMS(): number;
    /**
     * Dimensionless z; its uncertainty, technique and rest frame are below.
     */
    REDSHIFT(): number;
    /**
     * Full major-axis diameter, arcmin, at the named band and surface brightness.
     */
    ISOPHOTAL_MAJOR_ARCMIN(): number;
    /**
     * Source band token, e.g. B or Ks. D25 B and K20 Ks are different isophotes.
     */
    ISOPHOTE_BAND(): string | null;
    ISOPHOTE_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Surface-brightness threshold in mag/arcsec^2, e.g. 25 in B or 20 in Ks.
     */
    ISOPHOTE_LEVEL(): number;
    /**
     * Minor/major ratio b/a, dimensionless; position angle east of north, degrees.
     */
    AXIS_RATIO(): number;
    PA_DEG(): number;
    /**
     * Disk inclination, degrees; source estimate, never inferred from b/a here.
     */
    INCLINATION_DEG(): number;
    /**
     * Numerical de Vaucouleurs morphology, not an integer category or default.
     */
    T_TYPE(): number;
    HUBBLE_CLASS(): string | null;
    HUBBLE_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source bar classification verbatim (e.g. SA, SAB, SB); absent is unknown.
     */
    BAR(): string | null;
    BAR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    B_TOTAL_MAG(): number;
    K_TOTAL_MAG(): number;
    /**
     * Catalog-qualified group identifier, also usable for finger-of-God grouping.
     */
    GROUP_ID(): string | null;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LOCAL_GROUP_MEMBER(): glxTruthValue;
    SOURCE_CATALOG(): string | null;
    SOURCE_CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset license; absent means unknown terms, not a redistribution grant.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REDSHIFT_UNC(): number;
    REDSHIFT_KIND(): glxRedshiftTechnique;
    REDSHIFT_FRAME(): glxSpectralRestFrame;
    SOURCE_CLASS(): glxObjectCategory;
    SURVEY(): string | null;
    SURVEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RELEASE(): string | null;
    RELEASE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_SAMPLE(): string | null;
    TARGET_SAMPLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Line-of-sight comoving distance in Mpc, with the adopted cosmology below.
     */
    COMOVING_DISTANCE_MPC(): number;
    /**
     * c times lookback time, Mpc; distinct from comoving or luminosity distance.
     */
    LIGHT_TRAVEL_DISTANCE_MPC(): number;
    /**
     * Versioned parameter-set identifier, e.g. Planck18; no implicit cosmology.
     */
    COSMOLOGY_ID(): string | null;
    COSMOLOGY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGLX(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDesignations(builder: flatbuffers.Builder, DESIGNATIONSOffset: flatbuffers.Offset): void;
    static createDesignationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDesignationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRaDeg(builder: flatbuffers.Builder, RA_DEG: number): void;
    static addDecDeg(builder: flatbuffers.Builder, DEC_DEG: number): void;
    static addCsoId(builder: flatbuffers.Builder, CSO_IDOffset: flatbuffers.Offset): void;
    static addDistanceMpc(builder: flatbuffers.Builder, DISTANCE_MPC: number): void;
    static addDistanceUncMpc(builder: flatbuffers.Builder, DISTANCE_UNC_MPC: number): void;
    static addDistanceMethod(builder: flatbuffers.Builder, DISTANCE_METHOD: glxDistanceTechnique): void;
    static addDistanceRef(builder: flatbuffers.Builder, DISTANCE_REFOffset: flatbuffers.Offset): void;
    static addHelioVelocityKms(builder: flatbuffers.Builder, HELIO_VELOCITY_KMS: number): void;
    static addRedshift(builder: flatbuffers.Builder, REDSHIFT: number): void;
    static addIsophotalMajorArcmin(builder: flatbuffers.Builder, ISOPHOTAL_MAJOR_ARCMIN: number): void;
    static addIsophoteBand(builder: flatbuffers.Builder, ISOPHOTE_BANDOffset: flatbuffers.Offset): void;
    static addIsophoteLevel(builder: flatbuffers.Builder, ISOPHOTE_LEVEL: number): void;
    static addAxisRatio(builder: flatbuffers.Builder, AXIS_RATIO: number): void;
    static addPaDeg(builder: flatbuffers.Builder, PA_DEG: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addTType(builder: flatbuffers.Builder, T_TYPE: number): void;
    static addHubbleClass(builder: flatbuffers.Builder, HUBBLE_CLASSOffset: flatbuffers.Offset): void;
    static addBar(builder: flatbuffers.Builder, BAROffset: flatbuffers.Offset): void;
    static addBTotalMag(builder: flatbuffers.Builder, B_TOTAL_MAG: number): void;
    static addKTotalMag(builder: flatbuffers.Builder, K_TOTAL_MAG: number): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addLocalGroupMember(builder: flatbuffers.Builder, LOCAL_GROUP_MEMBER: glxTruthValue): void;
    static addSourceCatalog(builder: flatbuffers.Builder, SOURCE_CATALOGOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addRedshiftUnc(builder: flatbuffers.Builder, REDSHIFT_UNC: number): void;
    static addRedshiftKind(builder: flatbuffers.Builder, REDSHIFT_KIND: glxRedshiftTechnique): void;
    static addRedshiftFrame(builder: flatbuffers.Builder, REDSHIFT_FRAME: glxSpectralRestFrame): void;
    static addSourceClass(builder: flatbuffers.Builder, SOURCE_CLASS: glxObjectCategory): void;
    static addSurvey(builder: flatbuffers.Builder, SURVEYOffset: flatbuffers.Offset): void;
    static addRelease(builder: flatbuffers.Builder, RELEASEOffset: flatbuffers.Offset): void;
    static addTargetSample(builder: flatbuffers.Builder, TARGET_SAMPLEOffset: flatbuffers.Offset): void;
    static addComovingDistanceMpc(builder: flatbuffers.Builder, COMOVING_DISTANCE_MPC: number): void;
    static addLightTravelDistanceMpc(builder: flatbuffers.Builder, LIGHT_TRAVEL_DISTANCE_MPC: number): void;
    static addCosmologyId(builder: flatbuffers.Builder, COSMOLOGY_IDOffset: flatbuffers.Offset): void;
    static endGLX(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGLXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGLXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createGLX(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESIGNATIONSOffset: flatbuffers.Offset, RA_DEG: number, DEC_DEG: number, CSO_IDOffset: flatbuffers.Offset, DISTANCE_MPC: number, DISTANCE_UNC_MPC: number, DISTANCE_METHOD: glxDistanceTechnique, DISTANCE_REFOffset: flatbuffers.Offset, HELIO_VELOCITY_KMS: number, REDSHIFT: number, ISOPHOTAL_MAJOR_ARCMIN: number, ISOPHOTE_BANDOffset: flatbuffers.Offset, ISOPHOTE_LEVEL: number, AXIS_RATIO: number, PA_DEG: number, INCLINATION_DEG: number, T_TYPE: number, HUBBLE_CLASSOffset: flatbuffers.Offset, BAROffset: flatbuffers.Offset, B_TOTAL_MAG: number, K_TOTAL_MAG: number, GROUP_IDOffset: flatbuffers.Offset, LOCAL_GROUP_MEMBER: glxTruthValue, SOURCE_CATALOGOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset, LICENSEOffset: flatbuffers.Offset, REDSHIFT_UNC: number, REDSHIFT_KIND: glxRedshiftTechnique, REDSHIFT_FRAME: glxSpectralRestFrame, SOURCE_CLASS: glxObjectCategory, SURVEYOffset: flatbuffers.Offset, RELEASEOffset: flatbuffers.Offset, TARGET_SAMPLEOffset: flatbuffers.Offset, COMOVING_DISTANCE_MPC: number, LIGHT_TRAVEL_DISTANCE_MPC: number, COSMOLOGY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GLXT;
    unpackTo(_o: GLXT): void;
}
export declare class GLXT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESIGNATIONS: (string)[];
    RA_DEG: number;
    DEC_DEG: number;
    CSO_ID: string | Uint8Array | null;
    DISTANCE_MPC: number;
    DISTANCE_UNC_MPC: number;
    DISTANCE_METHOD: glxDistanceTechnique;
    DISTANCE_REF: string | Uint8Array | null;
    HELIO_VELOCITY_KMS: number;
    REDSHIFT: number;
    ISOPHOTAL_MAJOR_ARCMIN: number;
    ISOPHOTE_BAND: string | Uint8Array | null;
    ISOPHOTE_LEVEL: number;
    AXIS_RATIO: number;
    PA_DEG: number;
    INCLINATION_DEG: number;
    T_TYPE: number;
    HUBBLE_CLASS: string | Uint8Array | null;
    BAR: string | Uint8Array | null;
    B_TOTAL_MAG: number;
    K_TOTAL_MAG: number;
    GROUP_ID: string | Uint8Array | null;
    LOCAL_GROUP_MEMBER: glxTruthValue;
    SOURCE_CATALOG: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    REDSHIFT_UNC: number;
    REDSHIFT_KIND: glxRedshiftTechnique;
    REDSHIFT_FRAME: glxSpectralRestFrame;
    SOURCE_CLASS: glxObjectCategory;
    SURVEY: string | Uint8Array | null;
    RELEASE: string | Uint8Array | null;
    TARGET_SAMPLE: string | Uint8Array | null;
    COMOVING_DISTANCE_MPC: number;
    LIGHT_TRAVEL_DISTANCE_MPC: number;
    COSMOLOGY_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESIGNATIONS?: (string)[], RA_DEG?: number, DEC_DEG?: number, CSO_ID?: string | Uint8Array | null, DISTANCE_MPC?: number, DISTANCE_UNC_MPC?: number, DISTANCE_METHOD?: glxDistanceTechnique, DISTANCE_REF?: string | Uint8Array | null, HELIO_VELOCITY_KMS?: number, REDSHIFT?: number, ISOPHOTAL_MAJOR_ARCMIN?: number, ISOPHOTE_BAND?: string | Uint8Array | null, ISOPHOTE_LEVEL?: number, AXIS_RATIO?: number, PA_DEG?: number, INCLINATION_DEG?: number, T_TYPE?: number, HUBBLE_CLASS?: string | Uint8Array | null, BAR?: string | Uint8Array | null, B_TOTAL_MAG?: number, K_TOTAL_MAG?: number, GROUP_ID?: string | Uint8Array | null, LOCAL_GROUP_MEMBER?: glxTruthValue, SOURCE_CATALOG?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, REDSHIFT_UNC?: number, REDSHIFT_KIND?: glxRedshiftTechnique, REDSHIFT_FRAME?: glxSpectralRestFrame, SOURCE_CLASS?: glxObjectCategory, SURVEY?: string | Uint8Array | null, RELEASE?: string | Uint8Array | null, TARGET_SAMPLE?: string | Uint8Array | null, COMOVING_DISTANCE_MPC?: number, LIGHT_TRAVEL_DISTANCE_MPC?: number, COSMOLOGY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GLX.d.ts.map