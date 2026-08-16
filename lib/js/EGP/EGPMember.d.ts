import * as flatbuffers from 'flatbuffers';
/**
 * One membership assertion.
 */
export declare class EGPMember implements flatbuffers.IUnpackableObject<EGPMemberT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EGPMember;
    static getRootAsEGPMember(bb: flatbuffers.ByteBuffer, obj?: EGPMember): EGPMember;
    static getSizePrefixedRootAsEGPMember(bb: flatbuffers.ByteBuffer, obj?: EGPMember): EGPMember;
    /**
     * Four-character standard code of the referenced record, `$` included,
     * e.g. `$CAT`. Never the union ordinal.
     */
    STANDARD(): string;
    STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The referenced record's publisher-stable identifier, verbatim.
     */
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Denormalized fast key for catalogued space objects. 0 means absent, which
     * is the normal case for every non-catalogue member.
     */
    NORAD_CAT_ID(): number;
    /**
     * Optional content identifier pinning the exact referenced record bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp the member was added.
     */
    ADDED_AT(): string | null;
    ADDED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publisher note about this membership; never a substitute for a field.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEGPMember(builder: flatbuffers.Builder): void;
    static addStandard(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addAddedAt(builder: flatbuffers.Builder, ADDED_ATOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endEGPMember(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEGPMember(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, CIDOffset: flatbuffers.Offset, ADDED_ATOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EGPMemberT;
    unpackTo(_o: EGPMemberT): void;
}
export declare class EGPMemberT implements flatbuffers.IGeneratedObject {
    STANDARD: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    CID: string | Uint8Array | null;
    ADDED_AT: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(STANDARD?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, CID?: string | Uint8Array | null, ADDED_AT?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EGPMember.d.ts.map