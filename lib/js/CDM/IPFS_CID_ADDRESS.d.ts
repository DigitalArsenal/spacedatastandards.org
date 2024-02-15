import * as flatbuffers from 'flatbuffers';
/**
 * IPFS CID and Account Identifier
 */
export declare class IPFS_CID_ADDRESS implements flatbuffers.IUnpackableObject<IPFS_CID_ADDRESST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IPFS_CID_ADDRESS;
    static getRootAsIPFS_CID_ADDRESS(bb: flatbuffers.ByteBuffer, obj?: IPFS_CID_ADDRESS): IPFS_CID_ADDRESS;
    static getSizePrefixedRootAsIPFS_CID_ADDRESS(bb: flatbuffers.ByteBuffer, obj?: IPFS_CID_ADDRESS): IPFS_CID_ADDRESS;
    IPFS_CID(): string | null;
    IPFS_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KEY_ADDRESS(): string | null;
    KEY_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIPFS_CID_ADDRESS(builder: flatbuffers.Builder): void;
    static addIpfsCid(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, KEY_ADDRESSOffset: flatbuffers.Offset): void;
    static endIPFS_CID_ADDRESS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIPFS_CID_ADDRESS(builder: flatbuffers.Builder, IPFS_CIDOffset: flatbuffers.Offset, KEY_ADDRESSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IPFS_CID_ADDRESST;
    unpackTo(_o: IPFS_CID_ADDRESST): void;
}
export declare class IPFS_CID_ADDRESST implements flatbuffers.IGeneratedObject {
    IPFS_CID: string | Uint8Array | null;
    KEY_ADDRESS: string | Uint8Array | null;
    constructor(IPFS_CID?: string | Uint8Array | null, KEY_ADDRESS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IPFS_CID_ADDRESS.d.ts.map