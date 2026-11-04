import * as flatbuffers from 'flatbuffers';
/**
 * An element set a trajectory was computed from (SDS addition: CCSDS 502.0-B-3
 * TRAJ_BASIS_ID names one determination, a relative trajectory has two).
 */
export declare class OCMSeedSet implements flatbuffers.IUnpackableObject<OCMSeedSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMSeedSet;
    static getRootAsOCMSeedSet(bb: flatbuffers.ByteBuffer, obj?: OCMSeedSet): OCMSeedSet;
    static getSizePrefixedRootAsOCMSeedSet(bb: flatbuffers.ByteBuffer, obj?: OCMSeedSet): OCMSeedSet;
    /**
     * NORAD_CAT_ID of the object the set describes.
     */
    NORAD_CAT_ID(): number;
    /**
     * EPOCH of the element set, ISO 8601 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CREATION_DATE of the element set: when its originator made it, ISO 8601
     * UTC.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MESSAGE_ID of the element set; for a Space-Track set its GP_ID.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOCMSeedSet(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static endOCMSeedSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMSeedSet(builder: flatbuffers.Builder, NORAD_CAT_ID: number, EPOCHOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, MESSAGE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMSeedSetT;
    unpackTo(_o: OCMSeedSetT): void;
}
export declare class OCMSeedSetT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    EPOCH: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    constructor(NORAD_CAT_ID?: number, EPOCH?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMSeedSet.d.ts.map