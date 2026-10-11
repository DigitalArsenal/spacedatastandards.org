import * as flatbuffers from 'flatbuffers';
import { catalogProductKind } from './catalogProductKind.js';
/**
 * One product the catalog selected for the object, by content identifier.
 */
export declare class CATProduct implements flatbuffers.IUnpackableObject<CATProductT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CATProduct;
    static getRootAsCATProduct(bb: flatbuffers.ByteBuffer, obj?: CATProduct): CATProduct;
    static getSizePrefixedRootAsCATProduct(bb: flatbuffers.ByteBuffer, obj?: CATProduct): CATProduct;
    /**
     * What the product is.
     */
    KIND(): catalogProductKind;
    /**
     * CIDv1 of the product record: a multihash (SHA-256) of its exact bytes as
     * published, a size-prefixed FlatBuffer.
     */
    RECORD_CID(): string | null;
    RECORD_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The product's source: its PROVENANCE SOURCE_ID.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the product, ISO 8601 UTC: an $OMM's EPOCH, an $OCM's first state
     * epoch.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why the catalog selected this product over the other candidates of its
     * KIND, as the selecting integrator states it (for example, the lowest
     * measured median error for the object's orbit regime and prediction
     * horizon).
     */
    SELECTION_REASON(): string | null;
    SELECTION_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when a maneuver after EPOCH retired the product and no product of its
     * KIND from after the maneuver has been selected yet.
     */
    STALE(): boolean;
    static startCATProduct(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: catalogProductKind): void;
    static addRecordCid(builder: flatbuffers.Builder, RECORD_CIDOffset: flatbuffers.Offset): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSelectionReason(builder: flatbuffers.Builder, SELECTION_REASONOffset: flatbuffers.Offset): void;
    static addStale(builder: flatbuffers.Builder, STALE: boolean): void;
    static endCATProduct(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCATProduct(builder: flatbuffers.Builder, KIND: catalogProductKind, RECORD_CIDOffset: flatbuffers.Offset, SOURCE_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, SELECTION_REASONOffset: flatbuffers.Offset, STALE: boolean): flatbuffers.Offset;
    unpack(): CATProductT;
    unpackTo(_o: CATProductT): void;
}
export declare class CATProductT implements flatbuffers.IGeneratedObject {
    KIND: catalogProductKind;
    RECORD_CID: string | Uint8Array | null;
    SOURCE_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SELECTION_REASON: string | Uint8Array | null;
    STALE: boolean;
    constructor(KIND?: catalogProductKind, RECORD_CID?: string | Uint8Array | null, SOURCE_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SELECTION_REASON?: string | Uint8Array | null, STALE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CATProduct.d.ts.map