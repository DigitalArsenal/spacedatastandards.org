import * as flatbuffers from 'flatbuffers';
import { TFNDesignator, TFNDesignatorT } from './TFNDesignator.js';
import { TFNOperatingSurface, TFNOperatingSurfaceT } from './TFNOperatingSurface.js';
import { TFNProvenance, TFNProvenanceT } from './TFNProvenance.js';
import { tfnFacilityType } from './tfnFacilityType.js';
/**
 * Transport Facility Node
 */
export declare class TFN implements flatbuffers.IUnpackableObject<TFNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TFN;
    static getRootAsTFN(bb: flatbuffers.ByteBuffer, obj?: TFN): TFN;
    static getSizePrefixedRootAsTFN(bb: flatbuffers.ByteBuffer, obj?: TFN): TFN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this facility record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * `$GNP.ID` of the gazetteer place carrying this facility's name set
     * and location. Location is joined, never re-published here.
     */
    PLACE_ID(): string | null;
    PLACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Kind of facility.
     */
    FACILITY_TYPE(): tfnFacilityType;
    /**
     * Operational display name, verbatim, when it differs from the place
     * name in `$GNP`.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every designator the facility answers to, scheme-tagged.
     */
    DESIGNATORS(index: number, obj?: TFNDesignator): TFNDesignator | null;
    designatorsLength(): number;
    /**
     * ISO 3166-1 alpha-2 country code, uppercase, as the source states it.
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Field or reference elevation, metres above mean sea level as the
     * source publishes it. Zero means unpublished, never sea level; a
     * facility at sea level is distinguished by ELEVATION_PUBLISHED.
     */
    ELEVATION_M(): number;
    /**
     * ELEVATION_M carries a published value.
     */
    ELEVATION_PUBLISHED(): boolean;
    /**
     * Magnetic variation at the facility, degrees, positive east, as the
     * source publishes it. NaN when unpublished.
     */
    MAGNETIC_VARIATION_DEG(): number;
    /**
     * The operating surfaces of the facility.
     */
    OPERATING_SURFACES(index: number, obj?: TFNOperatingSurface): TFNOperatingSurface | null;
    operatingSurfacesLength(): number;
    /**
     * Maximum vessel draft the facility accepts, metres.
     */
    MAXIMUM_DRAFT_M(): number;
    /**
     * Depth of water at the principal anchorage, metres.
     */
    ANCHORAGE_DEPTH_M(): number;
    /**
     * Harbor type token, verbatim as the source publishes it.
     */
    HARBOR_TYPE(): string | null;
    HARBOR_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Shelter afforded token, verbatim as the source publishes it.
     */
    SHELTER_AFFORDED(): string | null;
    SHELTER_AFFORDED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset lineage and licence. Required.
     */
    SOURCE(obj?: TFNProvenance): TFNProvenance | null;
    static startTFN(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addPlaceId(builder: flatbuffers.Builder, PLACE_IDOffset: flatbuffers.Offset): void;
    static addFacilityType(builder: flatbuffers.Builder, FACILITY_TYPE: tfnFacilityType): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDesignators(builder: flatbuffers.Builder, DESIGNATORSOffset: flatbuffers.Offset): void;
    static createDesignatorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDesignatorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addElevationM(builder: flatbuffers.Builder, ELEVATION_M: number): void;
    static addElevationPublished(builder: flatbuffers.Builder, ELEVATION_PUBLISHED: boolean): void;
    static addMagneticVariationDeg(builder: flatbuffers.Builder, MAGNETIC_VARIATION_DEG: number): void;
    static addOperatingSurfaces(builder: flatbuffers.Builder, OPERATING_SURFACESOffset: flatbuffers.Offset): void;
    static createOperatingSurfacesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOperatingSurfacesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaximumDraftM(builder: flatbuffers.Builder, MAXIMUM_DRAFT_M: number): void;
    static addAnchorageDepthM(builder: flatbuffers.Builder, ANCHORAGE_DEPTH_M: number): void;
    static addHarborType(builder: flatbuffers.Builder, HARBOR_TYPEOffset: flatbuffers.Offset): void;
    static addShelterAfforded(builder: flatbuffers.Builder, SHELTER_AFFORDEDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endTFN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTFNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTFNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TFNT;
    unpackTo(_o: TFNT): void;
}
export declare class TFNT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PLACE_ID: string | Uint8Array | null;
    FACILITY_TYPE: tfnFacilityType;
    NAME: string | Uint8Array | null;
    DESIGNATORS: (TFNDesignatorT)[];
    COUNTRY_CODE: string | Uint8Array | null;
    ELEVATION_M: number;
    ELEVATION_PUBLISHED: boolean;
    MAGNETIC_VARIATION_DEG: number;
    OPERATING_SURFACES: (TFNOperatingSurfaceT)[];
    MAXIMUM_DRAFT_M: number;
    ANCHORAGE_DEPTH_M: number;
    HARBOR_TYPE: string | Uint8Array | null;
    SHELTER_AFFORDED: string | Uint8Array | null;
    SOURCE: TFNProvenanceT | null;
    constructor(ID?: string | Uint8Array | null, PLACE_ID?: string | Uint8Array | null, FACILITY_TYPE?: tfnFacilityType, NAME?: string | Uint8Array | null, DESIGNATORS?: (TFNDesignatorT)[], COUNTRY_CODE?: string | Uint8Array | null, ELEVATION_M?: number, ELEVATION_PUBLISHED?: boolean, MAGNETIC_VARIATION_DEG?: number, OPERATING_SURFACES?: (TFNOperatingSurfaceT)[], MAXIMUM_DRAFT_M?: number, ANCHORAGE_DEPTH_M?: number, HARBOR_TYPE?: string | Uint8Array | null, SHELTER_AFFORDED?: string | Uint8Array | null, SOURCE?: TFNProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TFN.d.ts.map