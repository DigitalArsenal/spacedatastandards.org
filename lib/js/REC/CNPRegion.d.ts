import * as flatbuffers from 'flatbuffers';
import { cnpRegionKind } from './cnpRegionKind.js';
/**
 * Geography an aggregate is keyed to.
 *
 * A separate table so an absent REGION means "the source did not key by
 * geography", which is different from GLOBAL ("the source aggregated across
 * all geographies") and different again from an empty CODE.
 */
export declare class CNPRegion implements flatbuffers.IUnpackableObject<CNPRegionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CNPRegion;
    static getRootAsCNPRegion(bb: flatbuffers.ByteBuffer, obj?: CNPRegion): CNPRegion;
    static getSizePrefixedRootAsCNPRegion(bb: flatbuffers.ByteBuffer, obj?: CNPRegion): CNPRegion;
    /**
     * Granularity of CODE.
     */
    KIND(): cnpRegionKind;
    /**
     * The region key, verbatim from the source in the coding scheme KIND
     * names. Never re-coded between schemes on ingest.
     */
    CODE(): string | null;
    CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable region name as the source publishes it. Joins to
     * $CTR for country identity when KIND is COUNTRY.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCNPRegion(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: cnpRegionKind): void;
    static addCode(builder: flatbuffers.Builder, CODEOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static endCNPRegion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCNPRegion(builder: flatbuffers.Builder, KIND: cnpRegionKind, CODEOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CNPRegionT;
    unpackTo(_o: CNPRegionT): void;
}
export declare class CNPRegionT implements flatbuffers.IGeneratedObject {
    KIND: cnpRegionKind;
    CODE: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    constructor(KIND?: cnpRegionKind, CODE?: string | Uint8Array | null, NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CNPRegion.d.ts.map