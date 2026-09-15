import * as flatbuffers from 'flatbuffers';
import { CQRSourceProvenance, CQRSourceProvenanceT } from './CQRSourceProvenance.js';
import { OCM, OCMT } from './OCM.js';
import { OEM, OEMT } from './OEM.js';
import { OMM, OMMT } from './OMM.js';
import { PPE, PPET } from './PPE.js';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { PRWTleLines, PRWTleLinesT } from './PRWTleLines.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Exactly one scientific source arm, or a validated instance/source handle.
 * OMM/TLE use their native mean-element units; OEM/PPE km and km/s; OCM its
 * declared units. No implicit conversion of TEME, ECEF or ICRF-labelled data.
 */
export declare class CQRObjectSource implements flatbuffers.IUnpackableObject<CQRObjectSourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRObjectSource;
    static getRootAsCQRObjectSource(bb: flatbuffers.ByteBuffer, obj?: CQRObjectSource): CQRObjectSource;
    static getSizePrefixedRootAsCQRObjectSource(bb: flatbuffers.ByteBuffer, obj?: CQRObjectSource): CQRObjectSource;
    OBJECT_ID(): string;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CATALOG_ID(): number;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SOURCE_HANDLE(): number;
    /**
     * Host-connected provider for mean elements; no embedded fixed SGP4 choice.
     */
    PROPAGATOR_PORT_ID(): string | null;
    PROPAGATOR_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MEAN_ELEMENTS(obj?: OMM): OMM | null;
    EPHEMERIS(obj?: OEM): OEM | null;
    COMPREHENSIVE_ORBIT(obj?: OCM): OCM | null;
    POLYNOMIAL_EPHEMERIS(obj?: PPE): PPE | null;
    TLE_LINES(obj?: PRWTleLines): PRWTleLines | null;
    PROVENANCE(obj?: CQRSourceProvenance): CQRSourceProvenance | null;
    /**
     * Optional source epoch and perigee/apogee altitude above the reference
     * Earth radius used by the source model, in SI metres (not geocentric radii).
     */
    SOURCE_EPOCH(obj?: TIMInstant): TIMInstant | null;
    PERIGEE_ALTITUDE_M(): number;
    /**
     * True when PERIGEE_ALTITUDE_M carries a value; false means absent.
     */
    HAS_PERIGEE_ALTITUDE_M(): boolean;
    APOGEE_ALTITUDE_M(): number;
    /**
     * True when APOGEE_ALTITUDE_M carries a value; false means absent.
     */
    HAS_APOGEE_ALTITUDE_M(): boolean;
    static startCQRObjectSource(builder: flatbuffers.Builder): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addNoradCatalogId(builder: flatbuffers.Builder, NORAD_CATALOG_ID: number): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addSourceHandle(builder: flatbuffers.Builder, SOURCE_HANDLE: number): void;
    static addPropagatorPortId(builder: flatbuffers.Builder, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset): void;
    static addMeanElements(builder: flatbuffers.Builder, MEAN_ELEMENTSOffset: flatbuffers.Offset): void;
    static addEphemeris(builder: flatbuffers.Builder, EPHEMERISOffset: flatbuffers.Offset): void;
    static addComprehensiveOrbit(builder: flatbuffers.Builder, COMPREHENSIVE_ORBITOffset: flatbuffers.Offset): void;
    static addPolynomialEphemeris(builder: flatbuffers.Builder, POLYNOMIAL_EPHEMERISOffset: flatbuffers.Offset): void;
    static addTleLines(builder: flatbuffers.Builder, TLE_LINESOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceEpoch(builder: flatbuffers.Builder, SOURCE_EPOCHOffset: flatbuffers.Offset): void;
    static addPerigeeAltitudeM(builder: flatbuffers.Builder, PERIGEE_ALTITUDE_M: number): void;
    static addHasPerigeeAltitudeM(builder: flatbuffers.Builder, HAS_PERIGEE_ALTITUDE_M: boolean): void;
    static addApogeeAltitudeM(builder: flatbuffers.Builder, APOGEE_ALTITUDE_M: number): void;
    static addHasApogeeAltitudeM(builder: flatbuffers.Builder, HAS_APOGEE_ALTITUDE_M: boolean): void;
    static endCQRObjectSource(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRObjectSourceT;
    unpackTo(_o: CQRObjectSourceT): void;
}
export declare class CQRObjectSourceT implements flatbuffers.IGeneratedObject {
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    NORAD_CATALOG_ID: number;
    INSTANCE: PRWInstanceT | null;
    SOURCE_HANDLE: number;
    PROPAGATOR_PORT_ID: string | Uint8Array | null;
    MEAN_ELEMENTS: OMMT | null;
    EPHEMERIS: OEMT | null;
    COMPREHENSIVE_ORBIT: OCMT | null;
    POLYNOMIAL_EPHEMERIS: PPET | null;
    TLE_LINES: PRWTleLinesT | null;
    PROVENANCE: CQRSourceProvenanceT | null;
    SOURCE_EPOCH: TIMInstantT | null;
    PERIGEE_ALTITUDE_M: number;
    HAS_PERIGEE_ALTITUDE_M: boolean;
    APOGEE_ALTITUDE_M: number;
    HAS_APOGEE_ALTITUDE_M: boolean;
    constructor(OBJECT_ID?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, NORAD_CATALOG_ID?: number, INSTANCE?: PRWInstanceT | null, SOURCE_HANDLE?: number, PROPAGATOR_PORT_ID?: string | Uint8Array | null, MEAN_ELEMENTS?: OMMT | null, EPHEMERIS?: OEMT | null, COMPREHENSIVE_ORBIT?: OCMT | null, POLYNOMIAL_EPHEMERIS?: PPET | null, TLE_LINES?: PRWTleLinesT | null, PROVENANCE?: CQRSourceProvenanceT | null, SOURCE_EPOCH?: TIMInstantT | null, PERIGEE_ALTITUDE_M?: number, HAS_PERIGEE_ALTITUDE_M?: boolean, APOGEE_ALTITUDE_M?: number, HAS_APOGEE_ALTITUDE_M?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRObjectSource.d.ts.map