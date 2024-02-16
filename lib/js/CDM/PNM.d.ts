import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message
 */
export declare class PNM implements flatbuffers.IUnpackableObject<PNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM;
    static getRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static getSizePrefixedRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    /**
     * IPFS Content Identifier (CID)
     * The hash of a file stored on the InterPlanetary File System (IPFS).
     * Refer to the section on IPFS integration for details.
     */
    IPFS_CID(): string | null;
    IPFS_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier generated from the data provider's public key
     */
    KEY_ADDRESS(): string | null;
    KEY_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SpaceDataStandards 4 Character File Identifier
     */
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addIpfsCid(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, KEY_ADDRESSOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNM(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset, KEY_ADDRESSOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    IPFS_CID: string | Uint8Array | null;
    KEY_ADDRESS: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    constructor(IPFS_CID?: string | Uint8Array | null, KEY_ADDRESS?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map