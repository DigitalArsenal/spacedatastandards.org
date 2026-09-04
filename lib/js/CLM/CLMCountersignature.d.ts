import * as flatbuffers from 'flatbuffers';
/**
 * One party's attestation to a claim, signed over the same canonical form the
 * claimant signed.
 */
export declare class CLMCountersignature implements flatbuffers.IUnpackableObject<CLMCountersignatureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLMCountersignature;
    static getRootAsCLMCountersignature(bb: flatbuffers.ByteBuffer, obj?: CLMCountersignature): CLMCountersignature;
    static getSizePrefixedRootAsCLMCountersignature(bb: flatbuffers.ByteBuffer, obj?: CLMCountersignature): CLMCountersignature;
    /**
     * Peer identifier of the countersigning party.
     */
    PEER_ID(): string;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Content identifier of the countersigning party's identity record.
     */
    PROFILE_CID(): string | null;
    PROFILE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix timestamp in milliseconds when the countersignature was made.
     */
    SIGNED_AT(): bigint;
    /**
     * Countersignature over the canonical claim form.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startCLMCountersignature(builder: flatbuffers.Builder): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addProfileCid(builder: flatbuffers.Builder, PROFILE_CIDOffset: flatbuffers.Offset): void;
    static addSignedAt(builder: flatbuffers.Builder, SIGNED_AT: bigint): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCLMCountersignature(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLMCountersignature(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset, PROFILE_CIDOffset: flatbuffers.Offset, SIGNED_AT: bigint, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CLMCountersignatureT;
    unpackTo(_o: CLMCountersignatureT): void;
}
export declare class CLMCountersignatureT implements flatbuffers.IGeneratedObject {
    PEER_ID: string | Uint8Array | null;
    PROFILE_CID: string | Uint8Array | null;
    SIGNED_AT: bigint;
    SIGNATURE: (number)[];
    constructor(PEER_ID?: string | Uint8Array | null, PROFILE_CID?: string | Uint8Array | null, SIGNED_AT?: bigint, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLMCountersignature.d.ts.map