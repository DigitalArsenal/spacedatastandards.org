import * as flatbuffers from 'flatbuffers';
import { CQRObjectSource, CQRObjectSourceT } from './CQRObjectSource.js';
import { CQRScreeningControls, CQRScreeningControlsT } from './CQRScreeningControls.js';
import { CQRSourceProvenance, CQRSourceProvenanceT } from './CQRSourceProvenance.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
/**
 * Order arrays index the supplied catalog stream in exact reception order.
 * Ranges are half-open; absent endpoints select the full respective range.
 */
export declare class CQRCatalogRequest implements flatbuffers.IUnpackableObject<CQRCatalogRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRCatalogRequest;
    static getRootAsCQRCatalogRequest(bb: flatbuffers.ByteBuffer, obj?: CQRCatalogRequest): CQRCatalogRequest;
    static getSizePrefixedRootAsCQRCatalogRequest(bb: flatbuffers.ByteBuffer, obj?: CQRCatalogRequest): CQRCatalogRequest;
    PRIMARIES(index: number, obj?: CQRObjectSource): CQRObjectSource | null;
    primariesLength(): number;
    SECONDARIES(index: number, obj?: CQRObjectSource): CQRObjectSource | null;
    secondariesLength(): number;
    CONTROLS(obj?: CQRScreeningControls): CQRScreeningControls | null;
    EVALUATION_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    ORDERED_CATALOG_INDICES(index: number): number | null;
    orderedCatalogIndicesLength(): number;
    orderedCatalogIndicesArray(): Uint32Array | null;
    START_ORDER_INDEX(): number;
    /**
     * True when START_ORDER_INDEX carries a value; false means absent.
     */
    HAS_START_ORDER_INDEX(): boolean;
    END_ORDER_INDEX(): number;
    /**
     * True when END_ORDER_INDEX carries a value; false means absent.
     */
    HAS_END_ORDER_INDEX(): boolean;
    SECONDARY_START_ORDER_INDEX(): number;
    /**
     * True when SECONDARY_START_ORDER_INDEX carries a value; false means absent.
     */
    HAS_SECONDARY_START_ORDER_INDEX(): boolean;
    SECONDARY_END_ORDER_INDEX(): number;
    /**
     * True when SECONDARY_END_ORDER_INDEX carries a value; false means absent.
     */
    HAS_SECONDARY_END_ORDER_INDEX(): boolean;
    SELECTED_SOURCES(index: number, obj?: CQRSourceProvenance): CQRSourceProvenance | null;
    selectedSourcesLength(): number;
    static startCQRCatalogRequest(builder: flatbuffers.Builder): void;
    static addPrimaries(builder: flatbuffers.Builder, PRIMARIESOffset: flatbuffers.Offset): void;
    static createPrimariesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPrimariesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSecondaries(builder: flatbuffers.Builder, SECONDARIESOffset: flatbuffers.Offset): void;
    static createSecondariesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSecondariesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addControls(builder: flatbuffers.Builder, CONTROLSOffset: flatbuffers.Offset): void;
    static addEvaluationFrame(builder: flatbuffers.Builder, EVALUATION_FRAMEOffset: flatbuffers.Offset): void;
    static addOrderedCatalogIndices(builder: flatbuffers.Builder, ORDERED_CATALOG_INDICESOffset: flatbuffers.Offset): void;
    static createOrderedCatalogIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOrderedCatalogIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOrderedCatalogIndicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStartOrderIndex(builder: flatbuffers.Builder, START_ORDER_INDEX: number): void;
    static addHasStartOrderIndex(builder: flatbuffers.Builder, HAS_START_ORDER_INDEX: boolean): void;
    static addEndOrderIndex(builder: flatbuffers.Builder, END_ORDER_INDEX: number): void;
    static addHasEndOrderIndex(builder: flatbuffers.Builder, HAS_END_ORDER_INDEX: boolean): void;
    static addSecondaryStartOrderIndex(builder: flatbuffers.Builder, SECONDARY_START_ORDER_INDEX: number): void;
    static addHasSecondaryStartOrderIndex(builder: flatbuffers.Builder, HAS_SECONDARY_START_ORDER_INDEX: boolean): void;
    static addSecondaryEndOrderIndex(builder: flatbuffers.Builder, SECONDARY_END_ORDER_INDEX: number): void;
    static addHasSecondaryEndOrderIndex(builder: flatbuffers.Builder, HAS_SECONDARY_END_ORDER_INDEX: boolean): void;
    static addSelectedSources(builder: flatbuffers.Builder, SELECTED_SOURCESOffset: flatbuffers.Offset): void;
    static createSelectedSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSelectedSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCQRCatalogRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRCatalogRequestT;
    unpackTo(_o: CQRCatalogRequestT): void;
}
export declare class CQRCatalogRequestT implements flatbuffers.IGeneratedObject {
    PRIMARIES: (CQRObjectSourceT)[];
    SECONDARIES: (CQRObjectSourceT)[];
    CONTROLS: CQRScreeningControlsT | null;
    EVALUATION_FRAME: RFMCoordinateSystemT | null;
    ORDERED_CATALOG_INDICES: (number)[];
    START_ORDER_INDEX: number;
    HAS_START_ORDER_INDEX: boolean;
    END_ORDER_INDEX: number;
    HAS_END_ORDER_INDEX: boolean;
    SECONDARY_START_ORDER_INDEX: number;
    HAS_SECONDARY_START_ORDER_INDEX: boolean;
    SECONDARY_END_ORDER_INDEX: number;
    HAS_SECONDARY_END_ORDER_INDEX: boolean;
    SELECTED_SOURCES: (CQRSourceProvenanceT)[];
    constructor(PRIMARIES?: (CQRObjectSourceT)[], SECONDARIES?: (CQRObjectSourceT)[], CONTROLS?: CQRScreeningControlsT | null, EVALUATION_FRAME?: RFMCoordinateSystemT | null, ORDERED_CATALOG_INDICES?: (number)[], START_ORDER_INDEX?: number, HAS_START_ORDER_INDEX?: boolean, END_ORDER_INDEX?: number, HAS_END_ORDER_INDEX?: boolean, SECONDARY_START_ORDER_INDEX?: number, HAS_SECONDARY_START_ORDER_INDEX?: boolean, SECONDARY_END_ORDER_INDEX?: number, HAS_SECONDARY_END_ORDER_INDEX?: boolean, SELECTED_SOURCES?: (CQRSourceProvenanceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRCatalogRequest.d.ts.map