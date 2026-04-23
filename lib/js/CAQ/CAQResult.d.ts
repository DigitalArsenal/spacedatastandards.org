import * as flatbuffers from 'flatbuffers';
import { ETM, ETMT } from './ETM.js';
import { catalogQueryKind } from './catalogQueryKind.js';
/**
 * Catalog query result payload.
 */
export declare class CAQResult implements flatbuffers.IUnpackableObject<CAQResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CAQResult;
    static getRootAsCAQResult(bb: flatbuffers.ByteBuffer, obj?: CAQResult): CAQResult;
    static getSizePrefixedRootAsCAQResult(bb: flatbuffers.ByteBuffer, obj?: CAQResult): CAQResult;
    KIND(): catalogQueryKind;
    /**
     * Populated when KIND == ROWS.
     */
    ROWS(index: number, obj?: ETM): ETM | null;
    rowsLength(): number;
    /**
     * Populated when KIND == ENTITY_INDICES.
     */
    ENTITY_INDICES(index: number): number | null;
    entityIndicesLength(): number;
    entityIndicesArray(): Uint32Array | null;
    /**
     * Populated when KIND == VISIBILITY_MASK (one byte per entity).
     */
    MASK(index: number): number | null;
    maskLength(): number;
    maskArray(): Uint8Array | null;
    /**
     * Number of visible (masked-in) entities in MASK.
     */
    VISIBLE_COUNT(): number;
    /**
     * Populated when KIND == CATALOG_ROW.
     */
    ENTITY_INDEX(): number;
    /**
     * Single matched row when KIND == CATALOG_ROW.
     */
    ROW(obj?: ETM): ETM | null;
    static startCAQResult(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: catalogQueryKind): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEntityIndices(builder: flatbuffers.Builder, ENTITY_INDICESOffset: flatbuffers.Offset): void;
    static createEntityIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEntityIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEntityIndicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMask(builder: flatbuffers.Builder, MASKOffset: flatbuffers.Offset): void;
    static createMaskVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVisibleCount(builder: flatbuffers.Builder, VISIBLE_COUNT: number): void;
    static addEntityIndex(builder: flatbuffers.Builder, ENTITY_INDEX: number): void;
    static addRow(builder: flatbuffers.Builder, ROWOffset: flatbuffers.Offset): void;
    static endCAQResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CAQResultT;
    unpackTo(_o: CAQResultT): void;
}
export declare class CAQResultT implements flatbuffers.IGeneratedObject {
    KIND: catalogQueryKind;
    ROWS: (ETMT)[];
    ENTITY_INDICES: (number)[];
    MASK: (number)[];
    VISIBLE_COUNT: number;
    ENTITY_INDEX: number;
    ROW: ETMT | null;
    constructor(KIND?: catalogQueryKind, ROWS?: (ETMT)[], ENTITY_INDICES?: (number)[], MASK?: (number)[], VISIBLE_COUNT?: number, ENTITY_INDEX?: number, ROW?: ETMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CAQResult.d.ts.map