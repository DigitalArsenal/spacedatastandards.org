import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
import { exoDisposition } from './exoDisposition.js';
export declare class EXO implements flatbuffers.IUnpackableObject<EXOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EXO;
    static getRootAsEXO(bb: flatbuffers.ByteBuffer, obj?: EXO): EXO;
    static getSizePrefixedRootAsEXO(bb: flatbuffers.ByteBuffer, obj?: EXO): EXO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    PL_NAME(): string;
    PL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    HOSTNAME(): string | null;
    HOSTNAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Archive identifier string, e.g. Gaia DR3 <source_id>. Never a JS number.
     */
    GAIA_DR3_ID(): string | null;
    GAIA_DR3_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SIMBAD_ID(): string | null;
    SIMBAD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Period in days; semimajor axis in AU; eccentricity dimensionless.
     */
    PL_ORBPER(obj?: EXOParameter): EXOParameter | null;
    PL_ORBSMAX(obj?: EXOParameter): EXOParameter | null;
    PL_ORBECCEN(obj?: EXOParameter): EXOParameter | null;
    /**
     * Argument of periastron and orbital inclination in degrees. The archive
     * preserves each publication's convention (planet/star omega may differ).
     */
    PL_ORBLPER(obj?: EXOParameter): EXOParameter | null;
    PL_ORBINCL(obj?: EXOParameter): EXOParameter | null;
    /**
     * Transit midpoint T0 and periastron epoch Tp, JD in their named systems.
     */
    PL_TRANMID(obj?: EXOParameter): EXOParameter | null;
    PL_TRANMID_SYSTEMREF(): string | null;
    PL_TRANMID_SYSTEMREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PL_ORBTPER(obj?: EXOParameter): EXOParameter | null;
    PL_ORBTPER_SYSTEMREF(): string | null;
    PL_ORBTPER_SYSTEMREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Longitude of ascending node Omega, degrees in the stated reference frame.
     * Not a PSCompPars column; absence must never become an assumed zero.
     */
    LONG_ASC_NODE(obj?: EXOParameter): EXOParameter | null;
    LONG_ASC_NODE_UNKNOWN(): boolean;
    LONG_ASC_NODE_FRAME(): string | null;
    LONG_ASC_NODE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sky-projected spin-orbit obliquity lambda, degrees (not true 3D obliquity).
     */
    PL_PROJOBLIQ(obj?: EXOParameter): EXOParameter | null;
    /**
     * Planet radius in Earth radii; best mass in Earth masses with its basis.
     */
    PL_RADE(obj?: EXOParameter): EXOParameter | null;
    PL_BMASSE(obj?: EXOParameter): EXOParameter | null;
    /**
     * Archive provenance token, e.g. Mass, Msini, M-R relationship. A measured
     * m*sin(i) is not silently promoted to mass; an estimate remains labeled.
     */
    PL_BMASSPROV(): string | null;
    PL_BMASSPROV(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Equilibrium temperature in kelvin, with the source's model assumptions.
     */
    PL_EQT(obj?: EXOParameter): EXOParameter | null;
    /**
     * Dimensionless geometric albedo, distinct from Bond albedo. Not currently
     * in PSCompPars; source/band are explicit when a publisher supplies it.
     */
    GEOMETRIC_ALBEDO(obj?: EXOParameter): EXOParameter | null;
    GEOMETRIC_ALBEDO_BAND(): string | null;
    GEOMETRIC_ALBEDO_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Archive discovery-method token, preserved verbatim for new techniques.
     */
    DISCOVERYMETHOD(): string | null;
    DISCOVERYMETHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Calendar year; -1 means absent.
     */
    DISC_YEAR(): number;
    DISC_REFNAME(): string | null;
    DISC_REFNAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ARCHIVE_STATUS(): exoDisposition;
    /**
     * Original archive flag: 0 not controversial, 1 controversial, -1 absent.
     */
    PL_CONTROV_FLAG(): number;
    /**
     * Reference explaining status, especially disputes or retractions.
     */
    STATUS_REFERENCE(): string | null;
    STATUS_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC retrieval time, and replayable source table/query URL.
     */
    RETRIEVED_AT(): string;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SOURCE_CATALOG(): string | null;
    SOURCE_CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEXO(builder: flatbuffers.Builder): void;
    static addPlName(builder: flatbuffers.Builder, PL_NAMEOffset: flatbuffers.Offset): void;
    static addHostname(builder: flatbuffers.Builder, HOSTNAMEOffset: flatbuffers.Offset): void;
    static addGaiaDr3Id(builder: flatbuffers.Builder, GAIA_DR3_IDOffset: flatbuffers.Offset): void;
    static addSimbadId(builder: flatbuffers.Builder, SIMBAD_IDOffset: flatbuffers.Offset): void;
    static addPlOrbper(builder: flatbuffers.Builder, PL_ORBPEROffset: flatbuffers.Offset): void;
    static addPlOrbsmax(builder: flatbuffers.Builder, PL_ORBSMAXOffset: flatbuffers.Offset): void;
    static addPlOrbeccen(builder: flatbuffers.Builder, PL_ORBECCENOffset: flatbuffers.Offset): void;
    static addPlOrblper(builder: flatbuffers.Builder, PL_ORBLPEROffset: flatbuffers.Offset): void;
    static addPlOrbincl(builder: flatbuffers.Builder, PL_ORBINCLOffset: flatbuffers.Offset): void;
    static addPlTranmid(builder: flatbuffers.Builder, PL_TRANMIDOffset: flatbuffers.Offset): void;
    static addPlTranmidSystemref(builder: flatbuffers.Builder, PL_TRANMID_SYSTEMREFOffset: flatbuffers.Offset): void;
    static addPlOrbtper(builder: flatbuffers.Builder, PL_ORBTPEROffset: flatbuffers.Offset): void;
    static addPlOrbtperSystemref(builder: flatbuffers.Builder, PL_ORBTPER_SYSTEMREFOffset: flatbuffers.Offset): void;
    static addLongAscNode(builder: flatbuffers.Builder, LONG_ASC_NODEOffset: flatbuffers.Offset): void;
    static addLongAscNodeUnknown(builder: flatbuffers.Builder, LONG_ASC_NODE_UNKNOWN: boolean): void;
    static addLongAscNodeFrame(builder: flatbuffers.Builder, LONG_ASC_NODE_FRAMEOffset: flatbuffers.Offset): void;
    static addPlProjobliq(builder: flatbuffers.Builder, PL_PROJOBLIQOffset: flatbuffers.Offset): void;
    static addPlRade(builder: flatbuffers.Builder, PL_RADEOffset: flatbuffers.Offset): void;
    static addPlBmasse(builder: flatbuffers.Builder, PL_BMASSEOffset: flatbuffers.Offset): void;
    static addPlBmassprov(builder: flatbuffers.Builder, PL_BMASSPROVOffset: flatbuffers.Offset): void;
    static addPlEqt(builder: flatbuffers.Builder, PL_EQTOffset: flatbuffers.Offset): void;
    static addGeometricAlbedo(builder: flatbuffers.Builder, GEOMETRIC_ALBEDOOffset: flatbuffers.Offset): void;
    static addGeometricAlbedoBand(builder: flatbuffers.Builder, GEOMETRIC_ALBEDO_BANDOffset: flatbuffers.Offset): void;
    static addDiscoverymethod(builder: flatbuffers.Builder, DISCOVERYMETHODOffset: flatbuffers.Offset): void;
    static addDiscYear(builder: flatbuffers.Builder, DISC_YEAR: number): void;
    static addDiscRefname(builder: flatbuffers.Builder, DISC_REFNAMEOffset: flatbuffers.Offset): void;
    static addArchiveStatus(builder: flatbuffers.Builder, ARCHIVE_STATUS: exoDisposition): void;
    static addPlControvFlag(builder: flatbuffers.Builder, PL_CONTROV_FLAG: number): void;
    static addStatusReference(builder: flatbuffers.Builder, STATUS_REFERENCEOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addSourceCatalog(builder: flatbuffers.Builder, SOURCE_CATALOGOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static endEXO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEXOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEXOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EXOT;
    unpackTo(_o: EXOT): void;
}
export declare class EXOT implements flatbuffers.IGeneratedObject {
    PL_NAME: string | Uint8Array | null;
    HOSTNAME: string | Uint8Array | null;
    GAIA_DR3_ID: string | Uint8Array | null;
    SIMBAD_ID: string | Uint8Array | null;
    PL_ORBPER: EXOParameterT | null;
    PL_ORBSMAX: EXOParameterT | null;
    PL_ORBECCEN: EXOParameterT | null;
    PL_ORBLPER: EXOParameterT | null;
    PL_ORBINCL: EXOParameterT | null;
    PL_TRANMID: EXOParameterT | null;
    PL_TRANMID_SYSTEMREF: string | Uint8Array | null;
    PL_ORBTPER: EXOParameterT | null;
    PL_ORBTPER_SYSTEMREF: string | Uint8Array | null;
    LONG_ASC_NODE: EXOParameterT | null;
    LONG_ASC_NODE_UNKNOWN: boolean;
    LONG_ASC_NODE_FRAME: string | Uint8Array | null;
    PL_PROJOBLIQ: EXOParameterT | null;
    PL_RADE: EXOParameterT | null;
    PL_BMASSE: EXOParameterT | null;
    PL_BMASSPROV: string | Uint8Array | null;
    PL_EQT: EXOParameterT | null;
    GEOMETRIC_ALBEDO: EXOParameterT | null;
    GEOMETRIC_ALBEDO_BAND: string | Uint8Array | null;
    DISCOVERYMETHOD: string | Uint8Array | null;
    DISC_YEAR: number;
    DISC_REFNAME: string | Uint8Array | null;
    ARCHIVE_STATUS: exoDisposition;
    PL_CONTROV_FLAG: number;
    STATUS_REFERENCE: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    SOURCE_CATALOG: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    constructor(PL_NAME?: string | Uint8Array | null, HOSTNAME?: string | Uint8Array | null, GAIA_DR3_ID?: string | Uint8Array | null, SIMBAD_ID?: string | Uint8Array | null, PL_ORBPER?: EXOParameterT | null, PL_ORBSMAX?: EXOParameterT | null, PL_ORBECCEN?: EXOParameterT | null, PL_ORBLPER?: EXOParameterT | null, PL_ORBINCL?: EXOParameterT | null, PL_TRANMID?: EXOParameterT | null, PL_TRANMID_SYSTEMREF?: string | Uint8Array | null, PL_ORBTPER?: EXOParameterT | null, PL_ORBTPER_SYSTEMREF?: string | Uint8Array | null, LONG_ASC_NODE?: EXOParameterT | null, LONG_ASC_NODE_UNKNOWN?: boolean, LONG_ASC_NODE_FRAME?: string | Uint8Array | null, PL_PROJOBLIQ?: EXOParameterT | null, PL_RADE?: EXOParameterT | null, PL_BMASSE?: EXOParameterT | null, PL_BMASSPROV?: string | Uint8Array | null, PL_EQT?: EXOParameterT | null, GEOMETRIC_ALBEDO?: EXOParameterT | null, GEOMETRIC_ALBEDO_BAND?: string | Uint8Array | null, DISCOVERYMETHOD?: string | Uint8Array | null, DISC_YEAR?: number, DISC_REFNAME?: string | Uint8Array | null, ARCHIVE_STATUS?: exoDisposition, PL_CONTROV_FLAG?: number, STATUS_REFERENCE?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, SOURCE_CATALOG?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EXO.d.ts.map