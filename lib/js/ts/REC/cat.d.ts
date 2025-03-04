import * as flatbuffers from 'flatbuffers';
import { PLD, PLDT } from './pld.js';
import { dataStatusCode } from './data-status-code.js';
import { legacyCountryCode } from './legacy-country-code.js';
import { massType } from './mass-type.js';
import { objectType } from './object-type.js';
import { opsStatusCode } from './ops-status-code.js';
import { orbitType } from './orbit-type.js';
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
    objectName(): string | null;
    objectName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International Designator (YYYY-NNNAAA)
     */
    objectId(): string | null;
    objectId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD Catalog Number
     */
    noradCatId(): number;
    /**
     * Object type (Payload, Rocket body, Debris, Unknown)
     */
    objectType(): objectType;
    /**
     * Operational Status Code
     */
    opsStatusCode(): opsStatusCode;
    /**
     * Ownership, typically country or company
     */
    owner(): legacyCountryCode;
    /**
     * Launch Date [year-month-day] (ISO 8601)
     */
    launchDate(): string | null;
    launchDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch Site
     */
    launchSite(): string | null;
    launchSite(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Decay Date, if applicable [year-month-day] (ISO 8601)
     */
    decayDate(): string | null;
    decayDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbital period [minutes]
     */
    period(): number;
    /**
     * Inclination [degrees]
     */
    inclination(): number;
    /**
     * Apogee Altitude [kilometers]
     */
    apogee(): number;
    /**
     * Perigee Altitude [kilometers]
     */
    perigee(): number;
    /**
     * Radar Cross Section [meters2]; blank if no data available
     */
    rcs(): number;
    /**
     * Data status code; blank otherwise
     */
    dataStatusCode(): dataStatusCode;
    /**
     * Orbit center
     */
    orbitCenter(): string | null;
    orbitCenter(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit type (Orbit, Landing, Impact, Docked to RSO, roundtrip)
     */
    orbitType(): orbitType;
    /**
     * Deployment Date [year-month-day] (ISO 8601)
     */
    deploymentDate(): string | null;
    deploymentDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicates if the object is maneuverable
     */
    maneuverable(): boolean;
    /**
     * Size [meters]; blank if no data available
     */
    size(): number;
    /**
     * Mass [kilograms]; blank if no data available
     */
    mass(): number;
    /**
     * Mass type (Dry, Wet)
     */
    massType(): massType;
    /**
     * Vector of PAYLOADS
     */
    payloads(index: number, obj?: PLD): PLD | null;
    payloadsLength(): number;
    static startCAT(builder: flatbuffers.Builder): void;
    static addObjectName(builder: flatbuffers.Builder, objectNameOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, objectIdOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, noradCatId: number): void;
    static addObjectType(builder: flatbuffers.Builder, objectType: objectType): void;
    static addOpsStatusCode(builder: flatbuffers.Builder, opsStatusCode: opsStatusCode): void;
    static addOwner(builder: flatbuffers.Builder, owner: legacyCountryCode): void;
    static addLaunchDate(builder: flatbuffers.Builder, launchDateOffset: flatbuffers.Offset): void;
    static addLaunchSite(builder: flatbuffers.Builder, launchSiteOffset: flatbuffers.Offset): void;
    static addDecayDate(builder: flatbuffers.Builder, decayDateOffset: flatbuffers.Offset): void;
    static addPeriod(builder: flatbuffers.Builder, period: number): void;
    static addInclination(builder: flatbuffers.Builder, inclination: number): void;
    static addApogee(builder: flatbuffers.Builder, apogee: number): void;
    static addPerigee(builder: flatbuffers.Builder, perigee: number): void;
    static addRcs(builder: flatbuffers.Builder, rcs: number): void;
    static addDataStatusCode(builder: flatbuffers.Builder, dataStatusCode: dataStatusCode): void;
    static addOrbitCenter(builder: flatbuffers.Builder, orbitCenterOffset: flatbuffers.Offset): void;
    static addOrbitType(builder: flatbuffers.Builder, orbitType: orbitType): void;
    static addDeploymentDate(builder: flatbuffers.Builder, deploymentDateOffset: flatbuffers.Offset): void;
    static addManeuverable(builder: flatbuffers.Builder, maneuverable: boolean): void;
    static addSize(builder: flatbuffers.Builder, size: number): void;
    static addMass(builder: flatbuffers.Builder, mass: number): void;
    static addMassType(builder: flatbuffers.Builder, massType: massType): void;
    static addPayloads(builder: flatbuffers.Builder, payloadsOffset: flatbuffers.Offset): void;
    static createPayloadsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPayloadsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCAT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCAT(builder: flatbuffers.Builder, objectNameOffset: flatbuffers.Offset, objectIdOffset: flatbuffers.Offset, noradCatId: number, objectType: objectType, opsStatusCode: opsStatusCode, owner: legacyCountryCode, launchDateOffset: flatbuffers.Offset, launchSiteOffset: flatbuffers.Offset, decayDateOffset: flatbuffers.Offset, period: number, inclination: number, apogee: number, perigee: number, rcs: number, dataStatusCode: dataStatusCode, orbitCenterOffset: flatbuffers.Offset, orbitType: orbitType, deploymentDateOffset: flatbuffers.Offset, maneuverable: boolean, size: number, mass: number, massType: massType, payloadsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CATT;
    unpackTo(_o: CATT): void;
}
export declare class CATT implements flatbuffers.IGeneratedObject {
    objectName: string | Uint8Array | null;
    objectId: string | Uint8Array | null;
    noradCatId: number;
    objectType: objectType;
    opsStatusCode: opsStatusCode;
    owner: legacyCountryCode;
    launchDate: string | Uint8Array | null;
    launchSite: string | Uint8Array | null;
    decayDate: string | Uint8Array | null;
    period: number;
    inclination: number;
    apogee: number;
    perigee: number;
    rcs: number;
    dataStatusCode: dataStatusCode;
    orbitCenter: string | Uint8Array | null;
    orbitType: orbitType;
    deploymentDate: string | Uint8Array | null;
    maneuverable: boolean;
    size: number;
    mass: number;
    massType: massType;
    payloads: (PLDT)[];
    constructor(objectName?: string | Uint8Array | null, objectId?: string | Uint8Array | null, noradCatId?: number, objectType?: objectType, opsStatusCode?: opsStatusCode, owner?: legacyCountryCode, launchDate?: string | Uint8Array | null, launchSite?: string | Uint8Array | null, decayDate?: string | Uint8Array | null, period?: number, inclination?: number, apogee?: number, perigee?: number, rcs?: number, dataStatusCode?: dataStatusCode, orbitCenter?: string | Uint8Array | null, orbitType?: orbitType, deploymentDate?: string | Uint8Array | null, maneuverable?: boolean, size?: number, mass?: number, massType?: massType, payloads?: (PLDT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=cat.d.ts.map