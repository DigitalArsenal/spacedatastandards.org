import * as flatbuffers from 'flatbuffers';
import { OPPAreas, OPPAreasT } from './OPPAreas.js';
import { OPPAssetRef, OPPAssetRefT } from './OPPAssetRef.js';
import { OPPDimensions, OPPDimensionsT } from './OPPDimensions.js';
import { OPPMass, OPPMassT } from './OPPMass.js';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
import { OPPRadarCrossSection, OPPRadarCrossSectionT } from './OPPRadarCrossSection.js';
import { OPPSurface, OPPSurfaceT } from './OPPSurface.js';
/**
 * Object Physical Properties - the sourced physical description of one space
 * object and, when one exists, of the exact 3D asset that represents it.
 *
 * Division of labour with the neighbouring standards. $CAT is catalogue
 * identity and orbit, and its RCS, SIZE and MASS scalars are unattributed
 * convenience fields carried from the catalogue publisher. $BUS is the bus
 * DESIGN, shared by every object built on it. $VAM is the asset manifest: the
 * bytes, the licence, the review and the geometry metrics. $PNL is the
 * articulated panel model consumed by solar-radiation-pressure propagation.
 * $OPP is the per-object physical truth in which EVERY value names its own
 * source, epoch and method. $OPP never restates orbital elements and never
 * duplicates bus-design values; a per-object value that came from the bus
 * design is stated here with METHOD INFERRED_FROM_FAMILY so a consumer can see
 * that it is an approximation.
 *
 * Joins. NORAD_CAT_ID and OBJECT_ID join to $CAT. BUS_ID joins to $BUS.
 * ASSET joins to the exact reviewed $VAM variant. ENTITY_ID is the stable
 * non-catalogue key shared with $VAM for objects that have no catalogue entry.
 *
 * Never-invent law, enforced by the shape rather than by prose: a physical
 * quantity exists only as an OPPQuantity and OPPQuantity.PROVENANCE is
 * required, so there is no encoding for a mass, dimension, area or
 * cross-section that does not name where it came from. Unknown values are
 * absent. A consumer that finds a field missing has learned that no admissible
 * source published it.
 */
export declare class OPP implements flatbuffers.IUnpackableObject<OPPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPP;
    static getRootAsOPP(bb: flatbuffers.ByteBuffer, obj?: OPP): OPP;
    static getSizePrefixedRootAsOPP(bb: flatbuffers.ByteBuffer, obj?: OPP): OPP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * SemVer 2.0.0 record-format version, not a content revision.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $CAT.NORAD_CAT_ID verbatim. Zero when the object has no catalogue number.
     */
    NORAD_CAT_ID(): number;
    /**
     * $CAT.OBJECT_ID verbatim: the COSPAR international designator.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $CAT.OBJECT_NAME verbatim, for display only. Never a join key.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable non-catalogue entity key, such as an asset catalogue entity path.
     * MUST equal ASSET.ENTITY_ID when ASSET is present.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Join key to the $BUS record describing this object's bus design; holds
     * that record's BUS.ID verbatim. Empty when the bus is unknown or has no
     * $BUS record.
     */
    BUS_ID(): string | null;
    BUS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bus or platform family name verbatim from BUS_FAMILY_PROVENANCE.SOURCE,
     * for objects whose family is known but has no $BUS record.
     */
    BUS_FAMILY(): string | null;
    BUS_FAMILY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provenance of BUS_FAMILY. Present whenever BUS_FAMILY is nonempty.
     */
    BUS_FAMILY_PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    /**
     * Manufacturer or prime contractor as stated by MANUFACTURER_PROVENANCE.
     */
    MANUFACTURER(): string | null;
    MANUFACTURER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provenance of MANUFACTURER. Present whenever MANUFACTURER is nonempty.
     */
    MANUFACTURER_PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    MASS(obj?: OPPMass): OPPMass | null;
    DIMENSIONS(obj?: OPPDimensions): OPPDimensions | null;
    AREAS(obj?: OPPAreas): OPPAreas | null;
    /**
     * One entry per band, polarization and aspect the sources publish. Empty
     * means no source published a radar cross-section for this object.
     */
    RADAR_CROSS_SECTIONS(index: number, obj?: OPPRadarCrossSection): OPPRadarCrossSection | null;
    radarCrossSectionsLength(): number;
    /**
     * Visual magnitude, UNITS "mag", with the observing conditions in
     * PROVENANCE.NOTES.
     */
    VISUAL_MAGNITUDE(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Material and surface inventory.
     */
    SURFACES(index: number, obj?: OPPSurface): OPPSurface | null;
    surfacesLength(): number;
    /**
     * Binding to the exact reviewed 3D asset this record accompanies. Absent for
     * an object with no asset; the physical values remain valid without it.
     */
    ASSET(obj?: OPPAssetRef): OPPAssetRef | null;
    /**
     * Every source consulted while building this record, including sources that
     * yielded no value. Lets a consumer distinguish "not looked for" from
     * "looked for and not published".
     */
    SOURCES(index: number, obj?: OPPProvenance): OPPProvenance | null;
    sourcesLength(): number;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when
     * the record was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when
     * the record was last updated.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 containing a multihash of the exact superseded $OPP bytes.
     */
    SUPERSEDES_OPP_CID(): string | null;
    SUPERSEDES_OPP_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOPP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addBusId(builder: flatbuffers.Builder, BUS_IDOffset: flatbuffers.Offset): void;
    static addBusFamily(builder: flatbuffers.Builder, BUS_FAMILYOffset: flatbuffers.Offset): void;
    static addBusFamilyProvenance(builder: flatbuffers.Builder, BUS_FAMILY_PROVENANCEOffset: flatbuffers.Offset): void;
    static addManufacturer(builder: flatbuffers.Builder, MANUFACTUREROffset: flatbuffers.Offset): void;
    static addManufacturerProvenance(builder: flatbuffers.Builder, MANUFACTURER_PROVENANCEOffset: flatbuffers.Offset): void;
    static addMass(builder: flatbuffers.Builder, MASSOffset: flatbuffers.Offset): void;
    static addDimensions(builder: flatbuffers.Builder, DIMENSIONSOffset: flatbuffers.Offset): void;
    static addAreas(builder: flatbuffers.Builder, AREASOffset: flatbuffers.Offset): void;
    static addRadarCrossSections(builder: flatbuffers.Builder, RADAR_CROSS_SECTIONSOffset: flatbuffers.Offset): void;
    static createRadarCrossSectionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRadarCrossSectionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVisualMagnitude(builder: flatbuffers.Builder, VISUAL_MAGNITUDEOffset: flatbuffers.Offset): void;
    static addSurfaces(builder: flatbuffers.Builder, SURFACESOffset: flatbuffers.Offset): void;
    static createSurfacesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSurfacesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAsset(builder: flatbuffers.Builder, ASSETOffset: flatbuffers.Offset): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addSupersedesOppCid(builder: flatbuffers.Builder, SUPERSEDES_OPP_CIDOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOPP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): OPPT;
    unpackTo(_o: OPPT): void;
}
export declare class OPPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    BUS_ID: string | Uint8Array | null;
    BUS_FAMILY: string | Uint8Array | null;
    BUS_FAMILY_PROVENANCE: OPPProvenanceT | null;
    MANUFACTURER: string | Uint8Array | null;
    MANUFACTURER_PROVENANCE: OPPProvenanceT | null;
    MASS: OPPMassT | null;
    DIMENSIONS: OPPDimensionsT | null;
    AREAS: OPPAreasT | null;
    RADAR_CROSS_SECTIONS: (OPPRadarCrossSectionT)[];
    VISUAL_MAGNITUDE: OPPQuantityT | null;
    SURFACES: (OPPSurfaceT)[];
    ASSET: OPPAssetRefT | null;
    SOURCES: (OPPProvenanceT)[];
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    SUPERSEDES_OPP_CID: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, BUS_ID?: string | Uint8Array | null, BUS_FAMILY?: string | Uint8Array | null, BUS_FAMILY_PROVENANCE?: OPPProvenanceT | null, MANUFACTURER?: string | Uint8Array | null, MANUFACTURER_PROVENANCE?: OPPProvenanceT | null, MASS?: OPPMassT | null, DIMENSIONS?: OPPDimensionsT | null, AREAS?: OPPAreasT | null, RADAR_CROSS_SECTIONS?: (OPPRadarCrossSectionT)[], VISUAL_MAGNITUDE?: OPPQuantityT | null, SURFACES?: (OPPSurfaceT)[], ASSET?: OPPAssetRefT | null, SOURCES?: (OPPProvenanceT)[], CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, SUPERSEDES_OPP_CID?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPP.d.ts.map