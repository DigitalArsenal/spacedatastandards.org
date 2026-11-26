import * as flatbuffers from 'flatbuffers';
import { CATProduct, CATProductT } from './CATProduct.js';
import { CATRecommendation, CATRecommendationT } from './CATRecommendation.js';
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
    /**
     * Join key to the BUS record describing this object's satellite bus; holds
     * that record's BUS.ID verbatim. MANUFACTURER, DIM_X/DIM_Y/DIM_Z, DRY_MASS
     * and WET_MASS are properties of the bus design and live on BUS — they are
     * NOT duplicated here. Empty when the bus is unknown.
     */
    BUS_ID(): string | null;
    BUS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Absolute URI identifying the original catalog's object-ID namespace.
     * This is an identifier, not an instruction to fetch a resource. Use with
     * CATALOG_OBJECT_ID only when both fields are present. Preserve the pair
     * through replicas and derived catalogs; it does not assert a NORAD or
     * COSPAR association. If the authority can reassign an object ID, this URI
     * must identify its immutable edition or assignment interval, rather than
     * the unversioned catalog. Stable IDs may use a persistent catalog URI.
     */
    CATALOG_URI(): string | null;
    CATALOG_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Exact, opaque object identifier assigned by CATALOG_URI's authority.
     * Preserve case, Unicode and leading zeros. Numeric-looking native IDs
     * are not NORAD_CAT_ID values. Neither a matching name nor a native ID
     * in a different namespace establishes that two records describe the same
     * physical object. Publication provenance retains source and edition data.
     */
    CATALOG_OBJECT_ID(): string | null;
    CATALOG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The products an integrating catalog selected for the object as of
     * PRODUCTS_AS_OF: one $OMM per mean-element theory, each with the $OCM of
     * the same source and epoch where there is one. The object's maneuvers are
     * its $MNV stream, not references here.
     */
    PRODUCTS(index: number, obj?: CATProduct): CATProduct | null;
    productsLength(): number;
    /**
     * ISO 8601 UTC instant the selection in PRODUCTS holds at.
     */
    PRODUCTS_AS_OF(): string | null;
    PRODUCTS_AS_OF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The recommended product per span of lead, in lead order, the spans not
     * overlapping. Absent: the catalog recommends no product. Past the last
     * span no product is recommended.
     */
    RECOMMENDED(index: number, obj?: CATRecommendation): CATRecommendation | null;
    recommendedLength(): number;
    /**
     * Current estimated remaining maneuvering delta-V capability [m/s] as of
     * DELTA_V_AS_OF, derived from historical maneuver detection (SDN-AP over the
     * element-set archive) and propulsion-class bounds. Zero when assessed as
     * non-maneuvering or depleted; absent/unassessed when DELTA_V_AS_OF is empty.
     */
    ESTIMATED_DELTA_V_MPS(): number;
    /**
     * 1-sigma uncertainty of ESTIMATED_DELTA_V_MPS [m/s].
     */
    ESTIMATED_DELTA_V_UNC_MPS(): number;
    /**
     * Cumulative historical delta-V magnitude [m/s] summed across detected or
     * confirmed maneuvers in the object's $MNV archive history up to DELTA_V_AS_OF.
     */
    HISTORICAL_DELTA_V_MPS(): number;
    /**
     * Number of merged detected or confirmed maneuvers observed in the object's
     * historical archive up to DELTA_V_AS_OF.
     */
    MANEUVER_COUNT(): number;
    /**
     * ISO 8601 UTC epoch of the most recent detected or confirmed maneuver, or
     * empty when no maneuver has been observed.
     */
    LAST_MANEUVER_EPOCH(): string | null;
    LAST_MANEUVER_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC instant when the delta-V fields above were last evaluated.
     * Non-empty distinguishes an assessed 0 m/s object from an unassessed record.
     */
    DELTA_V_AS_OF(): string | null;
    DELTA_V_AS_OF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method and source provenance for the delta-V estimate (for example
     * "sdn-ap/maneuver-detection+catalog-composer").
     */
    DELTA_V_PROVENANCE(): string | null;
    DELTA_V_PROVENANCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static addBusId(builder: flatbuffers.Builder, BUS_IDOffset: flatbuffers.Offset): void;
    static addCatalogUri(builder: flatbuffers.Builder, CATALOG_URIOffset: flatbuffers.Offset): void;
    static addCatalogObjectId(builder: flatbuffers.Builder, CATALOG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addProducts(builder: flatbuffers.Builder, PRODUCTSOffset: flatbuffers.Offset): void;
    static createProductsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProductsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProductsAsOf(builder: flatbuffers.Builder, PRODUCTS_AS_OFOffset: flatbuffers.Offset): void;
    static addRecommended(builder: flatbuffers.Builder, RECOMMENDEDOffset: flatbuffers.Offset): void;
    static createRecommendedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecommendedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEstimatedDeltaVMps(builder: flatbuffers.Builder, ESTIMATED_DELTA_V_MPS: number): void;
    static addEstimatedDeltaVUncMps(builder: flatbuffers.Builder, ESTIMATED_DELTA_V_UNC_MPS: number): void;
    static addHistoricalDeltaVMps(builder: flatbuffers.Builder, HISTORICAL_DELTA_V_MPS: number): void;
    static addManeuverCount(builder: flatbuffers.Builder, MANEUVER_COUNT: number): void;
    static addLastManeuverEpoch(builder: flatbuffers.Builder, LAST_MANEUVER_EPOCHOffset: flatbuffers.Offset): void;
    static addDeltaVAsOf(builder: flatbuffers.Builder, DELTA_V_AS_OFOffset: flatbuffers.Offset): void;
    static addDeltaVProvenance(builder: flatbuffers.Builder, DELTA_V_PROVENANCEOffset: flatbuffers.Offset): void;
    static endCAT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCATBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCAT(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_TYPE: spaceObjectClass, OPS_STATUS_CODE: operationalState, OWNER: legacyCountryCode, LAUNCH_DATEOffset: flatbuffers.Offset, LAUNCH_SITEOffset: flatbuffers.Offset, DECAY_DATEOffset: flatbuffers.Offset, PERIOD: number, INCLINATION: number, APOGEE: number, PERIGEE: number, RCS: number, DATA_STATUS_CODE: dataAvailability, ORBIT_CENTEROffset: flatbuffers.Offset, ORBIT_TYPE: orbitRegime, DEPLOYMENT_DATEOffset: flatbuffers.Offset, MANEUVERABLE: boolean, SIZE: number, MASS: number, MASS_TYPE: massCategory, PAYLOADSOffset: flatbuffers.Offset, BUS_IDOffset: flatbuffers.Offset, CATALOG_URIOffset: flatbuffers.Offset, CATALOG_OBJECT_IDOffset: flatbuffers.Offset, PRODUCTSOffset: flatbuffers.Offset, PRODUCTS_AS_OFOffset: flatbuffers.Offset, RECOMMENDEDOffset: flatbuffers.Offset, ESTIMATED_DELTA_V_MPS: number, ESTIMATED_DELTA_V_UNC_MPS: number, HISTORICAL_DELTA_V_MPS: number, MANEUVER_COUNT: number, LAST_MANEUVER_EPOCHOffset: flatbuffers.Offset, DELTA_V_AS_OFOffset: flatbuffers.Offset, DELTA_V_PROVENANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    BUS_ID: string | Uint8Array | null;
    CATALOG_URI: string | Uint8Array | null;
    CATALOG_OBJECT_ID: string | Uint8Array | null;
    PRODUCTS: (CATProductT)[];
    PRODUCTS_AS_OF: string | Uint8Array | null;
    RECOMMENDED: (CATRecommendationT)[];
    ESTIMATED_DELTA_V_MPS: number;
    ESTIMATED_DELTA_V_UNC_MPS: number;
    HISTORICAL_DELTA_V_MPS: number;
    MANEUVER_COUNT: number;
    LAST_MANEUVER_EPOCH: string | Uint8Array | null;
    DELTA_V_AS_OF: string | Uint8Array | null;
    DELTA_V_PROVENANCE: string | Uint8Array | null;
    constructor(OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_TYPE?: spaceObjectClass, OPS_STATUS_CODE?: operationalState, OWNER?: legacyCountryCode, LAUNCH_DATE?: string | Uint8Array | null, LAUNCH_SITE?: string | Uint8Array | null, DECAY_DATE?: string | Uint8Array | null, PERIOD?: number, INCLINATION?: number, APOGEE?: number, PERIGEE?: number, RCS?: number, DATA_STATUS_CODE?: dataAvailability, ORBIT_CENTER?: string | Uint8Array | null, ORBIT_TYPE?: orbitRegime, DEPLOYMENT_DATE?: string | Uint8Array | null, MANEUVERABLE?: boolean, SIZE?: number, MASS?: number, MASS_TYPE?: massCategory, PAYLOADS?: (PLDT)[], BUS_ID?: string | Uint8Array | null, CATALOG_URI?: string | Uint8Array | null, CATALOG_OBJECT_ID?: string | Uint8Array | null, PRODUCTS?: (CATProductT)[], PRODUCTS_AS_OF?: string | Uint8Array | null, RECOMMENDED?: (CATRecommendationT)[], ESTIMATED_DELTA_V_MPS?: number, ESTIMATED_DELTA_V_UNC_MPS?: number, HISTORICAL_DELTA_V_MPS?: number, MANEUVER_COUNT?: number, LAST_MANEUVER_EPOCH?: string | Uint8Array | null, DELTA_V_AS_OF?: string | Uint8Array | null, DELTA_V_PROVENANCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CAT.d.ts.map