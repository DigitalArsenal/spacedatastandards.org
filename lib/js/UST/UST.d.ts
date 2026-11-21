import * as flatbuffers from 'flatbuffers';
import { USTAcknowledgement, USTAcknowledgementT } from './USTAcknowledgement.js';
import { USTFailure, USTFailureT } from './USTFailure.js';
import { USTPendingUpdate, USTPendingUpdateT } from './USTPendingUpdate.js';
/**
 * Update Status
 */
export declare class UST implements flatbuffers.IUnpackableObject<USTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): UST;
    static getRootAsUST(bb: flatbuffers.ByteBuffer, obj?: UST): UST;
    static getSizePrefixedRootAsUST(bb: flatbuffers.ByteBuffer, obj?: UST): UST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The publishing node's libp2p peer id; must equal the message's author.
     */
    PEER_ID(): string;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The version the node runs.
     */
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The node's status sequence; a receiver keeps the highest per peer.
     */
    SEQUENCE(): bigint;
    /**
     * Release update identifier the status is about, when there is one.
     */
    UPDATE_ID(): string | null;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * current, pending or failed.
     */
    STATE(): string;
    STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Set exactly when STATE is pending.
     */
    PENDING(obj?: USTPendingUpdate): USTPendingUpdate | null;
    /**
     * Set exactly when STATE is failed.
     */
    FAILED(obj?: USTFailure): USTFailure | null;
    /**
     * The newest update signal the node accepted.
     */
    ACKNOWLEDGED(obj?: USTAcknowledgement): USTAcknowledgement | null;
    /**
     * When the node stated this (RFC 3339, UTC).
     */
    AT(): string;
    AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startUST(builder: flatbuffers.Builder): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addPending(builder: flatbuffers.Builder, PENDINGOffset: flatbuffers.Offset): void;
    static addFailed(builder: flatbuffers.Builder, FAILEDOffset: flatbuffers.Offset): void;
    static addAcknowledged(builder: flatbuffers.Builder, ACKNOWLEDGEDOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, ATOffset: flatbuffers.Offset): void;
    static endUST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishUSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedUSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): USTT;
    unpackTo(_o: USTT): void;
}
export declare class USTT implements flatbuffers.IGeneratedObject {
    PEER_ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    SEQUENCE: bigint;
    UPDATE_ID: string | Uint8Array | null;
    STATE: string | Uint8Array | null;
    PENDING: USTPendingUpdateT | null;
    FAILED: USTFailureT | null;
    ACKNOWLEDGED: USTAcknowledgementT | null;
    AT: string | Uint8Array | null;
    constructor(PEER_ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, SEQUENCE?: bigint, UPDATE_ID?: string | Uint8Array | null, STATE?: string | Uint8Array | null, PENDING?: USTPendingUpdateT | null, FAILED?: USTFailureT | null, ACKNOWLEDGED?: USTAcknowledgementT | null, AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=UST.d.ts.map