import * as flatbuffers from 'flatbuffers';
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
     * CelesTrak Star catalog identifier
     */
    CS_ID(): bigint;
    /**
     * GNC star catalog identifier
     */
    GNC_CAT_ID(): number;
    /**
     * Gaia DR3 source identifier
     */
    GAIADR3_CAT_ID(): bigint;
    /**
     * Hipparcos catalog identifier
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
     * Gaia G-band magnitude
     */
    GMAG(): number;
    /**
     * Gaia G-band magnitude uncertainty
     */
    GMAG_UNC(): number;
    /**
     * Gaia BP-band magnitude (blue photometer)
     */
    BPMAG(): number;
    /**
     * Gaia BP-band magnitude uncertainty
     */
    BPMAG_UNC(): number;
    /**
     * Gaia RP-band magnitude (red photometer)
     */
    RPMAG(): number;
    /**
     * Gaia RP-band magnitude uncertainty
     */
    RPMAG_UNC(): number;
    /**
     * 2MASS J-band magnitude (1.25 um)
     */
    JMAG(): number;
    /**
     * J-band magnitude uncertainty
     */
    JMAG_UNC(): number;
    /**
     * 2MASS K-band magnitude (2.17 um)
     */
    KMAG(): number;
    /**
     * K-band magnitude uncertainty
     */
    KMAG_UNC(): number;
    /**
     * 2MASS H-band magnitude (1.65 um)
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
    static endSTR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSTR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, CS_ID: bigint, GNC_CAT_ID: number, GAIADR3_CAT_ID: bigint, HIP_CAT_ID: number, CAT_VERSIONOffset: flatbuffers.Offset, ASTROMETRY_ORIGINOffset: flatbuffers.Offset, STAR_EPOCH: number, RA: number, RA_UNC: number, DEC: number, DEC_UNC: number, POS_UNC_FLAG: boolean, PARALLAX: number, PARALLAX_UNC: number, PMRA: number, PMRA_UNC: number, PMDEC: number, PMDEC_UNC: number, PM_UNC_FLAG: boolean, GMAG: number, GMAG_UNC: number, BPMAG: number, BPMAG_UNC: number, RPMAG: number, RPMAG_UNC: number, JMAG: number, JMAG_UNC: number, KMAG: number, KMAG_UNC: number, HMAG: number, HMAG_UNC: number, VAR_FLAG: boolean, MULT_FLAG: boolean, NEIGHBOR_ID: number, NEIGHBOR_FLAG: boolean, NEIGHBOR_DISTANCE: number, SHIFT_FLAG: boolean, SHIFT: number): flatbuffers.Offset;
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
    constructor(ID?: string | Uint8Array | null, CS_ID?: bigint, GNC_CAT_ID?: number, GAIADR3_CAT_ID?: bigint, HIP_CAT_ID?: number, CAT_VERSION?: string | Uint8Array | null, ASTROMETRY_ORIGIN?: string | Uint8Array | null, STAR_EPOCH?: number, RA?: number, RA_UNC?: number, DEC?: number, DEC_UNC?: number, POS_UNC_FLAG?: boolean, PARALLAX?: number, PARALLAX_UNC?: number, PMRA?: number, PMRA_UNC?: number, PMDEC?: number, PMDEC_UNC?: number, PM_UNC_FLAG?: boolean, GMAG?: number, GMAG_UNC?: number, BPMAG?: number, BPMAG_UNC?: number, RPMAG?: number, RPMAG_UNC?: number, JMAG?: number, JMAG_UNC?: number, KMAG?: number, KMAG_UNC?: number, HMAG?: number, HMAG_UNC?: number, VAR_FLAG?: boolean, MULT_FLAG?: boolean, NEIGHBOR_ID?: number, NEIGHBOR_FLAG?: boolean, NEIGHBOR_DISTANCE?: number, SHIFT_FLAG?: boolean, SHIFT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STR.d.ts.map