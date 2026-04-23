import * as flatbuffers from 'flatbuffers';
import { PLD, PLDT } from './PLD.js';
import { dataAvailability } from './dataAvailability.js';
import { legacyCountryCode } from './legacyCountryCode.js';
import { massCategory } from './massCategory.js';
import { operationalState } from './operationalState.js';
import { orbitRegime } from './orbitRegime.js';
import { spaceObjectClass } from './spaceObjectClass.js';
/**
 * Catalog Entity Message
 */
export declare class CAT implements flatbuffers.IUnpackableObject<CATT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CAT;
    static getRootAsCAT(bb: flatbuffers.ByteBuffer, obj?: CAT): CAT;
    static getSizePrefixedRootAsCAT(bb: flatbuffers.ByteBuffer, obj?: CAT): CAT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Satellite Name(s)
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International Designator (YYYY-NNNAAA)
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD Catalog Number
     */
    NORAD_CAT_ID(): number;
    /**
     * Object type (Payload, Rocket body, Debris, Unknown)
     */
    OBJECT_TYPE(): spaceObjectClass;
    /**
     * Operational Status Code
     */
    OPS_STATUS_CODE(): operationalState;
    /**
     * Ownership, typically country or company
     */
    OWNER(): legacyCountryCode;
    /**
     * Launch Date [year-month-day] (ISO 8601)
     */
    LAUNCH_DATE(): string | null;
    LAUNCH_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch Site
     */
    LAUNCH_SITE(): string | null;
    LAUNCH_SITE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Decay Date, if applicable [year-month-day] (ISO 8601)
     */
    DECAY_DATE(): string | null;
    DECAY_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbital period [minutes]
     */
    PERIOD(): number;
    /**
     * Inclination [degrees]
     */
    INCLINATION(): number;
    /**
     * Apogee Altitude [kilometers]
     */
    APOGEE(): number;
    /**
     * Perigee Altitude [kilometers]
     */
    PERIGEE(): number;
    /**
     * Radar Cross Section [meters2]; blank if no data available
     */
    RCS(): number;
    /**
     * Data status code; blank otherwise
     */
    DATA_STATUS_CODE(): dataAvailability;
    /**
     * Orbit center
     */
    ORBIT_CENTER(): string | null;
    ORBIT_CENTER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit type (Orbit, Landing, Impact, Docked to RSO, roundtrip)
     */
    ORBIT_TYPE(): orbitRegime;
    /**
     * Deployment Date [year-month-day] (ISO 8601)
     */
    DEPLOYMENT_DATE(): string | null;
    DEPLOYMENT_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the object is maneuverable
     */
    MANEUVERABLE(): boolean;
    /**
     * Size [meters]; blank if no data available
     */
    SIZE(): number;
    /**
     * Mass [kilograms]; blank if no data available
     */
    MASS(): number;
    /**
     * Mass type (Dry, Wet)
     */
    MASS_TYPE(): massCategory;
    /**
     * Vector of PAYLOADS
     */
    PAYLOADS(index: number, obj?: PLD): PLD | null;
    payloadsLength(): number;
    static startCAT(builder: flatbuffers.Builder): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectType(builder: flatbuffers.Builder, OBJECT_TYPE: spaceObjectClass): void;
    static addOpsStatusCode(builder: flatbuffers.Builder, OPS_STATUS_CODE: operationalState): void;
    static addOwner(builder: flatbuffers.Builder, OWNER: legacyCountryCode): void;
    static addLaunchDate(builder: flatbuffers.Builder, LAUNCH_DATEOffset: flatbuffers.Offset): void;
    static addLaunchSite(builder: flatbuffers.Builder, LAUNCH_SITEOffset: flatbuffers.Offset): void;
    static addDecayDate(builder: flatbuffers.Builder, DECAY_DATEOffset: flatbuffers.Offset): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addDataStatusCode(builder: flatbuffers.Builder, DATA_STATUS_CODE: dataAvailability): void;
    static addOrbitCenter(builder: flatbuffers.Builder, ORBIT_CENTEROffset: flatbuffers.Offset): void;
    static addOrbitType(builder: flatbuffers.Builder, ORBIT_TYPE: orbitRegime): void;
    static addDeploymentDate(builder: flatbuffers.Builder, DEPLOYMENT_DATEOffset: flatbuffers.Offset): void;
    static addManeuverable(builder: flatbuffers.Builder, MANEUVERABLE: boolean): void;
    static addSize(builder: flatbuffers.Builder, SIZE: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addMassType(builder: flatbuffers.Builder, MASS_TYPE: massCategory): void;
    static addPayloads(builder: flatbuffers.Builder, PAYLOADSOffset: flatbuffers.Offset): void;
    static createPayloadsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPayloadsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCAT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCAT(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_TYPE: spaceObjectClass, OPS_STATUS_CODE: operationalState, OWNER: legacyCountryCode, LAUNCH_DATEOffset: flatbuffers.Offset, LAUNCH_SITEOffset: flatbuffers.Offset, DECAY_DATEOffset: flatbuffers.Offset, PERIOD: number, INCLINATION: number, APOGEE: number, PERIGEE: number, RCS: number, DATA_STATUS_CODE: dataAvailability, ORBIT_CENTEROffset: flatbuffers.Offset, ORBIT_TYPE: orbitRegime, DEPLOYMENT_DATEOffset: flatbuffers.Offset, MANEUVERABLE: boolean, SIZE: number, MASS: number, MASS_TYPE: massCategory, PAYLOADSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CATT;
    unpackTo(_o: CATT): void;
}
export declare class CATT implements flatbuffers.IGeneratedObject {
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_TYPE: spaceObjectClass;
    OPS_STATUS_CODE: operationalState;
    OWNER: legacyCountryCode;
    LAUNCH_DATE: string | Uint8Array | null;
    LAUNCH_SITE: string | Uint8Array | null;
    DECAY_DATE: string | Uint8Array | null;
    PERIOD: number;
    INCLINATION: number;
    APOGEE: number;
    PERIGEE: number;
    RCS: number;
    DATA_STATUS_CODE: dataAvailability;
    ORBIT_CENTER: string | Uint8Array | null;
    ORBIT_TYPE: orbitRegime;
    DEPLOYMENT_DATE: string | Uint8Array | null;
    MANEUVERABLE: boolean;
    SIZE: number;
    MASS: number;
    MASS_TYPE: massCategory;
    PAYLOADS: (PLDT)[];
    constructor(OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_TYPE?: spaceObjectClass, OPS_STATUS_CODE?: operationalState, OWNER?: legacyCountryCode, LAUNCH_DATE?: string | Uint8Array | null, LAUNCH_SITE?: string | Uint8Array | null, DECAY_DATE?: string | Uint8Array | null, PERIOD?: number, INCLINATION?: number, APOGEE?: number, PERIGEE?: number, RCS?: number, DATA_STATUS_CODE?: dataAvailability, ORBIT_CENTER?: string | Uint8Array | null, ORBIT_TYPE?: orbitRegime, DEPLOYMENT_DATE?: string | Uint8Array | null, MANEUVERABLE?: boolean, SIZE?: number, MASS?: number, MASS_TYPE?: massCategory, PAYLOADS?: (PLDT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CAT.d.ts.map