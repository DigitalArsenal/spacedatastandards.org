import * as flatbuffers from 'flatbuffers';
import { PHBMeasurement, PHBMeasurementT } from './PHBMeasurement.js';
/**
 * Star Catalog Entry
 */
export declare class STR implements flatbuffers.IUnpackableObject<STRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STR;
    static getRootAsSTR(bb: flatbuffers.ByteBuffer, obj?: STR): STR;
    static getSizePrefixedRootAsSTR(bb: flatbuffers.ByteBuffer, obj?: STR): STR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique internal identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Community satellite-tracking star catalog identifier
     */
    CS_ID(): bigint;
    /**
     * GNC star catalog identifier
     */
    GNC_CAT_ID(): number;
    /**
     * Source identifier in the third data release of the all-sky space astrometry survey
     */
    GAIADR3_CAT_ID(): bigint;
    /**
     * Identifier in the first space astrometry mission's main catalog
     */
    HIP_CAT_ID(): number;
    /**
     * Catalog version string
     */
    CAT_VERSION(): string | null;
    CAT_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Astrometry source description
     */
    ASTROMETRY_ORIGIN(): string | null;
    ASTROMETRY_ORIGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of stellar position (Julian years)
     */
    STAR_EPOCH(): number;
    /**
     * Right ascension (degrees, ICRS)
     */
    RA(): number;
    /**
     * Right ascension uncertainty (arcseconds)
     */
    RA_UNC(): number;
    /**
     * Declination (degrees, ICRS)
     */
    DEC(): number;
    /**
     * Declination uncertainty (arcseconds)
     */
    DEC_UNC(): number;
    /**
     * True if position uncertainty is flagged
     */
    POS_UNC_FLAG(): boolean;
    /**
     * Parallax (milliarcseconds)
     */
    PARALLAX(): number;
    /**
     * Parallax uncertainty (milliarcseconds)
     */
    PARALLAX_UNC(): number;
    /**
     * Proper motion in RA (milliarcseconds/year)
     */
    PMRA(): number;
    /**
     * Proper motion in RA uncertainty (milliarcseconds/year)
     */
    PMRA_UNC(): number;
    /**
     * Proper motion in DEC (milliarcseconds/year)
     */
    PMDEC(): number;
    /**
     * Proper motion in DEC uncertainty (milliarcseconds/year)
     */
    PMDEC_UNC(): number;
    /**
     * True if proper motion uncertainty is flagged
     */
    PM_UNC_FLAG(): boolean;
    /**
     * Broad-band G magnitude of the space astrometry photometric system
     */
    GMAG(): number;
    /**
     * G-band magnitude uncertainty
     */
    GMAG_UNC(): number;
    /**
     * BP-band magnitude (blue prism photometer of the space astrometry system)
     */
    BPMAG(): number;
    /**
     * BP-band magnitude uncertainty
     */
    BPMAG_UNC(): number;
    /**
     * RP-band magnitude (red prism photometer of the space astrometry system)
     */
    RPMAG(): number;
    /**
     * RP-band magnitude uncertainty
     */
    RPMAG_UNC(): number;
    /**
     * Near-infrared J-band magnitude (1.25 um)
     */
    JMAG(): number;
    /**
     * J-band magnitude uncertainty
     */
    JMAG_UNC(): number;
    /**
     * Near-infrared Ks-band magnitude (2.17 um)
     */
    KMAG(): number;
    /**
     * K-band magnitude uncertainty
     */
    KMAG_UNC(): number;
    /**
     * Near-infrared H-band magnitude (1.65 um)
     */
    HMAG(): number;
    /**
     * H-band magnitude uncertainty
     */
    HMAG_UNC(): number;
    /**
     * True if star is variable
     */
    VAR_FLAG(): boolean;
    /**
     * True if star is in a multiple system
     */
    MULT_FLAG(): boolean;
    /**
     * Nearest neighbor catalog identifier
     */
    NEIGHBOR_ID(): number;
    /**
     * True if nearest neighbor is within confusion radius
     */
    NEIGHBOR_FLAG(): boolean;
    /**
     * Distance to nearest neighbor (arcseconds)
     */
    NEIGHBOR_DISTANCE(): number;
    /**
     * True if position shift detected between catalogs
     */
    SHIFT_FLAG(): boolean;
    /**
     * Position shift magnitude (arcseconds)
     */
    SHIFT(): number;
    /**
     * Effective temperature (kelvin)
     */
    TEFF(): number;
    /**
     * Effective temperature uncertainty (kelvin)
     */
    TEFF_UNC(): number;
    /**
     * Surface gravity, log10 of g in cm s^-2
     */
    LOGG(): number;
    /**
     * Surface gravity uncertainty (dex)
     */
    LOGG_UNC(): number;
    /**
     * Metallicity [M/H] (dex)
     */
    METALLICITY(): number;
    /**
     * Interstellar extinction at 541.4 nm, A0 (magnitudes)
     */
    EXTINCTION_A0(): number;
    /**
     * Radial velocity, positive receding (km/s)
     */
    RADIAL_VELOCITY(): number;
    /**
     * Radial velocity uncertainty (km/s)
     */
    RADIAL_VELOCITY_UNC(): number;
    /**
     * Spectral type in the MK system, e.g. "A1 V"
     */
    SPECTRAL_TYPE(): string | null;
    SPECTRAL_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Proper name as recognised by the astronomical naming authority
     */
    PROPER_NAME(): string | null;
    PROPER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bayer or Flamsteed designation with its constellation, e.g. "alf CMa" or "9 CMa"
     */
    BAYER_FLAMSTEED(): string | null;
    BAYER_FLAMSTEED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constellation containing the star, three-letter abbreviation
     */
    CONSTELLATION(): string | null;
    CONSTELLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bright-star catalog number (HR); 0 when not in that catalog
     */
    HR_CAT_ID(): number;
    /**
     * Spectral-type catalog number (HD); 0 when not in that catalog
     */
    HD_CAT_ID(): number;
    /**
     * Other designations, each in the form its catalog uses
     */
    DESIGNATIONS(index: number): string;
    DESIGNATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    designationsLength(): number;
    /**
     * Variability type in the standard variable-star classification, e.g. "DSCT" or "EA"
     */
    VARIABILITY_CLASS(): string | null;
    VARIABILITY_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Period of variability (days)
     */
    VARIABILITY_PERIOD(): number;
    /**
     * Peak-to-peak variability amplitude (magnitudes)
     */
    VARIABILITY_AMPLITUDE(): number;
    /**
     * Epoch of maximum light (or minimum, for eclipsing systems), Modified Julian Date (TT)
     */
    VARIABILITY_EPOCH(): number;
    /**
     * Brightness in every band the star was measured or modelled in
     */
    PHOTOMETRY(index: number, obj?: PHBMeasurement): PHBMeasurement | null;
    photometryLength(): number;
    static startSTR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCsId(builder: flatbuffers.Builder, CS_ID: bigint): void;
    static addGncCatId(builder: flatbuffers.Builder, GNC_CAT_ID: number): void;
    static addGaiadr3CatId(builder: flatbuffers.Builder, GAIADR3_CAT_ID: bigint): void;
    static addHipCatId(builder: flatbuffers.Builder, HIP_CAT_ID: number): void;
    static addCatVersion(builder: flatbuffers.Builder, CAT_VERSIONOffset: flatbuffers.Offset): void;
    static addAstrometryOrigin(builder: flatbuffers.Builder, ASTROMETRY_ORIGINOffset: flatbuffers.Offset): void;
    static addStarEpoch(builder: flatbuffers.Builder, STAR_EPOCH: number): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addRaUnc(builder: flatbuffers.Builder, RA_UNC: number): void;
    static addDec(builder: flatbuffers.Builder, DEC: number): void;
    static addDecUnc(builder: flatbuffers.Builder, DEC_UNC: number): void;
    static addPosUncFlag(builder: flatbuffers.Builder, POS_UNC_FLAG: boolean): void;
    static addParallax(builder: flatbuffers.Builder, PARALLAX: number): void;
    static addParallaxUnc(builder: flatbuffers.Builder, PARALLAX_UNC: number): void;
    static addPmra(builder: flatbuffers.Builder, PMRA: number): void;
    static addPmraUnc(builder: flatbuffers.Builder, PMRA_UNC: number): void;
    static addPmdec(builder: flatbuffers.Builder, PMDEC: number): void;
    static addPmdecUnc(builder: flatbuffers.Builder, PMDEC_UNC: number): void;
    static addPmUncFlag(builder: flatbuffers.Builder, PM_UNC_FLAG: boolean): void;
    static addGmag(builder: flatbuffers.Builder, GMAG: number): void;
    static addGmagUnc(builder: flatbuffers.Builder, GMAG_UNC: number): void;
    static addBpmag(builder: flatbuffers.Builder, BPMAG: number): void;
    static addBpmagUnc(builder: flatbuffers.Builder, BPMAG_UNC: number): void;
    static addRpmag(builder: flatbuffers.Builder, RPMAG: number): void;
    static addRpmagUnc(builder: flatbuffers.Builder, RPMAG_UNC: number): void;
    static addJmag(builder: flatbuffers.Builder, JMAG: number): void;
    static addJmagUnc(builder: flatbuffers.Builder, JMAG_UNC: number): void;
    static addKmag(builder: flatbuffers.Builder, KMAG: number): void;
    static addKmagUnc(builder: flatbuffers.Builder, KMAG_UNC: number): void;
    static addHmag(builder: flatbuffers.Builder, HMAG: number): void;
    static addHmagUnc(builder: flatbuffers.Builder, HMAG_UNC: number): void;
    static addVarFlag(builder: flatbuffers.Builder, VAR_FLAG: boolean): void;
    static addMultFlag(builder: flatbuffers.Builder, MULT_FLAG: boolean): void;
    static addNeighborId(builder: flatbuffers.Builder, NEIGHBOR_ID: number): void;
    static addNeighborFlag(builder: flatbuffers.Builder, NEIGHBOR_FLAG: boolean): void;
    static addNeighborDistance(builder: flatbuffers.Builder, NEIGHBOR_DISTANCE: number): void;
    static addShiftFlag(builder: flatbuffers.Builder, SHIFT_FLAG: boolean): void;
    static addShift(builder: flatbuffers.Builder, SHIFT: number): void;
    static addTeff(builder: flatbuffers.Builder, TEFF: number): void;
    static addTeffUnc(builder: flatbuffers.Builder, TEFF_UNC: number): void;
    static addLogg(builder: flatbuffers.Builder, LOGG: number): void;
    static addLoggUnc(builder: flatbuffers.Builder, LOGG_UNC: number): void;
    static addMetallicity(builder: flatbuffers.Builder, METALLICITY: number): void;
    static addExtinctionA0(builder: flatbuffers.Builder, EXTINCTION_A0: number): void;
    static addRadialVelocity(builder: flatbuffers.Builder, RADIAL_VELOCITY: number): void;
    static addRadialVelocityUnc(builder: flatbuffers.Builder, RADIAL_VELOCITY_UNC: number): void;
    static addSpectralType(builder: flatbuffers.Builder, SPECTRAL_TYPEOffset: flatbuffers.Offset): void;
    static addProperName(builder: flatbuffers.Builder, PROPER_NAMEOffset: flatbuffers.Offset): void;
    static addBayerFlamsteed(builder: flatbuffers.Builder, BAYER_FLAMSTEEDOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addHrCatId(builder: flatbuffers.Builder, HR_CAT_ID: number): void;
    static addHdCatId(builder: flatbuffers.Builder, HD_CAT_ID: number): void;
    static addDesignations(builder: flatbuffers.Builder, DESIGNATIONSOffset: flatbuffers.Offset): void;
    static createDesignationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDesignationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVariabilityClass(builder: flatbuffers.Builder, VARIABILITY_CLASSOffset: flatbuffers.Offset): void;
    static addVariabilityPeriod(builder: flatbuffers.Builder, VARIABILITY_PERIOD: number): void;
    static addVariabilityAmplitude(builder: flatbuffers.Builder, VARIABILITY_AMPLITUDE: number): void;
    static addVariabilityEpoch(builder: flatbuffers.Builder, VARIABILITY_EPOCH: number): void;
    static addPhotometry(builder: flatbuffers.Builder, PHOTOMETRYOffset: flatbuffers.Offset): void;
    static createPhotometryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhotometryVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSTR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSTR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, CS_ID: bigint, GNC_CAT_ID: number, GAIADR3_CAT_ID: bigint, HIP_CAT_ID: number, CAT_VERSIONOffset: flatbuffers.Offset, ASTROMETRY_ORIGINOffset: flatbuffers.Offset, STAR_EPOCH: number, RA: number, RA_UNC: number, DEC: number, DEC_UNC: number, POS_UNC_FLAG: boolean, PARALLAX: number, PARALLAX_UNC: number, PMRA: number, PMRA_UNC: number, PMDEC: number, PMDEC_UNC: number, PM_UNC_FLAG: boolean, GMAG: number, GMAG_UNC: number, BPMAG: number, BPMAG_UNC: number, RPMAG: number, RPMAG_UNC: number, JMAG: number, JMAG_UNC: number, KMAG: number, KMAG_UNC: number, HMAG: number, HMAG_UNC: number, VAR_FLAG: boolean, MULT_FLAG: boolean, NEIGHBOR_ID: number, NEIGHBOR_FLAG: boolean, NEIGHBOR_DISTANCE: number, SHIFT_FLAG: boolean, SHIFT: number, TEFF: number, TEFF_UNC: number, LOGG: number, LOGG_UNC: number, METALLICITY: number, EXTINCTION_A0: number, RADIAL_VELOCITY: number, RADIAL_VELOCITY_UNC: number, SPECTRAL_TYPEOffset: flatbuffers.Offset, PROPER_NAMEOffset: flatbuffers.Offset, BAYER_FLAMSTEEDOffset: flatbuffers.Offset, CONSTELLATIONOffset: flatbuffers.Offset, HR_CAT_ID: number, HD_CAT_ID: number, DESIGNATIONSOffset: flatbuffers.Offset, VARIABILITY_CLASSOffset: flatbuffers.Offset, VARIABILITY_PERIOD: number, VARIABILITY_AMPLITUDE: number, VARIABILITY_EPOCH: number, PHOTOMETRYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): STRT;
    unpackTo(_o: STRT): void;
}
export declare class STRT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CS_ID: bigint;
    GNC_CAT_ID: number;
    GAIADR3_CAT_ID: bigint;
    HIP_CAT_ID: number;
    CAT_VERSION: string | Uint8Array | null;
    ASTROMETRY_ORIGIN: string | Uint8Array | null;
    STAR_EPOCH: number;
    RA: number;
    RA_UNC: number;
    DEC: number;
    DEC_UNC: number;
    POS_UNC_FLAG: boolean;
    PARALLAX: number;
    PARALLAX_UNC: number;
    PMRA: number;
    PMRA_UNC: number;
    PMDEC: number;
    PMDEC_UNC: number;
    PM_UNC_FLAG: boolean;
    GMAG: number;
    GMAG_UNC: number;
    BPMAG: number;
    BPMAG_UNC: number;
    RPMAG: number;
    RPMAG_UNC: number;
    JMAG: number;
    JMAG_UNC: number;
    KMAG: number;
    KMAG_UNC: number;
    HMAG: number;
    HMAG_UNC: number;
    VAR_FLAG: boolean;
    MULT_FLAG: boolean;
    NEIGHBOR_ID: number;
    NEIGHBOR_FLAG: boolean;
    NEIGHBOR_DISTANCE: number;
    SHIFT_FLAG: boolean;
    SHIFT: number;
    TEFF: number;
    TEFF_UNC: number;
    LOGG: number;
    LOGG_UNC: number;
    METALLICITY: number;
    EXTINCTION_A0: number;
    RADIAL_VELOCITY: number;
    RADIAL_VELOCITY_UNC: number;
    SPECTRAL_TYPE: string | Uint8Array | null;
    PROPER_NAME: string | Uint8Array | null;
    BAYER_FLAMSTEED: string | Uint8Array | null;
    CONSTELLATION: string | Uint8Array | null;
    HR_CAT_ID: number;
    HD_CAT_ID: number;
    DESIGNATIONS: (string)[];
    VARIABILITY_CLASS: string | Uint8Array | null;
    VARIABILITY_PERIOD: number;
    VARIABILITY_AMPLITUDE: number;
    VARIABILITY_EPOCH: number;
    PHOTOMETRY: (PHBMeasurementT)[];
    constructor(ID?: string | Uint8Array | null, CS_ID?: bigint, GNC_CAT_ID?: number, GAIADR3_CAT_ID?: bigint, HIP_CAT_ID?: number, CAT_VERSION?: string | Uint8Array | null, ASTROMETRY_ORIGIN?: string | Uint8Array | null, STAR_EPOCH?: number, RA?: number, RA_UNC?: number, DEC?: number, DEC_UNC?: number, POS_UNC_FLAG?: boolean, PARALLAX?: number, PARALLAX_UNC?: number, PMRA?: number, PMRA_UNC?: number, PMDEC?: number, PMDEC_UNC?: number, PM_UNC_FLAG?: boolean, GMAG?: number, GMAG_UNC?: number, BPMAG?: number, BPMAG_UNC?: number, RPMAG?: number, RPMAG_UNC?: number, JMAG?: number, JMAG_UNC?: number, KMAG?: number, KMAG_UNC?: number, HMAG?: number, HMAG_UNC?: number, VAR_FLAG?: boolean, MULT_FLAG?: boolean, NEIGHBOR_ID?: number, NEIGHBOR_FLAG?: boolean, NEIGHBOR_DISTANCE?: number, SHIFT_FLAG?: boolean, SHIFT?: number, TEFF?: number, TEFF_UNC?: number, LOGG?: number, LOGG_UNC?: number, METALLICITY?: number, EXTINCTION_A0?: number, RADIAL_VELOCITY?: number, RADIAL_VELOCITY_UNC?: number, SPECTRAL_TYPE?: string | Uint8Array | null, PROPER_NAME?: string | Uint8Array | null, BAYER_FLAMSTEED?: string | Uint8Array | null, CONSTELLATION?: string | Uint8Array | null, HR_CAT_ID?: number, HD_CAT_ID?: number, DESIGNATIONS?: (string)[], VARIABILITY_CLASS?: string | Uint8Array | null, VARIABILITY_PERIOD?: number, VARIABILITY_AMPLITUDE?: number, VARIABILITY_EPOCH?: number, PHOTOMETRY?: (PHBMeasurementT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STR.d.ts.map