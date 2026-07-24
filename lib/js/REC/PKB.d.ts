import * as flatbuffers from 'flatbuffers';
import { brokerCustodyModel } from './brokerCustodyModel.js';
import { brokerLiveness } from './brokerLiveness.js';
/**
 * Publisher Key-Broker Descriptor
 */
export declare class PKB implements flatbuffers.IUnpackableObject<PKBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PKB;
    static getRootAsPKB(bb: flatbuffers.ByteBuffer, obj?: PKB): PKB;
    static getSizePrefixedRootAsPKB(bb: flatbuffers.ByteBuffer, obj?: PKB): PKB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable broker identity, referenced by `$PLG`/`$STO`/`$PUR`/`$LGR`
     */
    BROKER_ID(): string;
    BROKER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * IPFS CID of the publisher `$EPM` that operates this broker
     */
    PUBLISHER_EPM_CID(): string | null;
    PUBLISHER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * libp2p peer id of the publisher node hosting the broker
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * libp2p protocol the broker answers on
     * (e.g. "/space-data-network/module-delivery/1.0.0")
     */
    PROTOCOL_ID(): string | null;
    PROTOCOL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dialable multiformat addresses for the broker
     */
    MULTIFORMAT_ADDRESSES(index: number): string;
    MULTIFORMAT_ADDRESSES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    multiformatAddressesLength(): number;
    /**
     * The broker's public key (from the key server's get_public_key) so the
     * buyer can pin it
     */
    BROKER_PUBLIC_KEY(index: number): number | null;
    brokerPublicKeyLength(): number;
    brokerPublicKeyArray(): Uint8Array | null;
    /**
     * Custody model (default: full publisher custody)
     */
    BROKER_KIND(): brokerCustodyModel;
    /**
     * Store-maintained liveness status
     */
    LIVENESS(): brokerLiveness;
    /**
     * Unix ms of the last successful probe/heartbeat
     */
    LAST_HEARTBEAT_AT(): bigint;
    /**
     * Expected heartbeat cadence in ms
     */
    HEARTBEAT_INTERVAL_MS(): bigint;
    /**
     * Unix ms the store first saw this broker
     */
    FIRST_SEEN_AT(): bigint;
    /**
     * Unix ms this descriptor was last updated
     */
    UPDATED_AT(): bigint;
    /**
     * Ed25519 signature by the publisher `$EPM` over the self-attested endpoint
     * fields; re-verified by the store's live probe
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startPKB(builder: flatbuffers.Builder): void;
    static addBrokerId(builder: flatbuffers.Builder, BROKER_IDOffset: flatbuffers.Offset): void;
    static addPublisherEpmCid(builder: flatbuffers.Builder, PUBLISHER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProtocolId(builder: flatbuffers.Builder, PROTOCOL_IDOffset: flatbuffers.Offset): void;
    static addMultiformatAddresses(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSESOffset: flatbuffers.Offset): void;
    static createMultiformatAddressesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiformatAddressesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBrokerPublicKey(builder: flatbuffers.Builder, BROKER_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static createBrokerPublicKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBrokerPublicKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBrokerKind(builder: flatbuffers.Builder, BROKER_KIND: brokerCustodyModel): void;
    static addLiveness(builder: flatbuffers.Builder, LIVENESS: brokerLiveness): void;
    static addLastHeartbeatAt(builder: flatbuffers.Builder, LAST_HEARTBEAT_AT: bigint): void;
    static addHeartbeatIntervalMs(builder: flatbuffers.Builder, HEARTBEAT_INTERVAL_MS: bigint): void;
    static addFirstSeenAt(builder: flatbuffers.Builder, FIRST_SEEN_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPKB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPKBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPKBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPKB(builder: flatbuffers.Builder, BROKER_IDOffset: flatbuffers.Offset, PUBLISHER_EPM_CIDOffset: flatbuffers.Offset, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROTOCOL_IDOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSESOffset: flatbuffers.Offset, BROKER_PUBLIC_KEYOffset: flatbuffers.Offset, BROKER_KIND: brokerCustodyModel, LIVENESS: brokerLiveness, LAST_HEARTBEAT_AT: bigint, HEARTBEAT_INTERVAL_MS: bigint, FIRST_SEEN_AT: bigint, UPDATED_AT: bigint, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PKBT;
    unpackTo(_o: PKBT): void;
}
export declare class PKBT implements flatbuffers.IGeneratedObject {
    BROKER_ID: string | Uint8Array | null;
    PUBLISHER_EPM_CID: string | Uint8Array | null;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROTOCOL_ID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESSES: (string)[];
    BROKER_PUBLIC_KEY: (number)[];
    BROKER_KIND: brokerCustodyModel;
    LIVENESS: brokerLiveness;
    LAST_HEARTBEAT_AT: bigint;
    HEARTBEAT_INTERVAL_MS: bigint;
    FIRST_SEEN_AT: bigint;
    UPDATED_AT: bigint;
    SIGNATURE: (number)[];
    constructor(BROKER_ID?: string | Uint8Array | null, PUBLISHER_EPM_CID?: string | Uint8Array | null, PROVIDER_PEER_ID?: string | Uint8Array | null, PROTOCOL_ID?: string | Uint8Array | null, MULTIFORMAT_ADDRESSES?: (string)[], BROKER_PUBLIC_KEY?: (number)[], BROKER_KIND?: brokerCustodyModel, LIVENESS?: brokerLiveness, LAST_HEARTBEAT_AT?: bigint, HEARTBEAT_INTERVAL_MS?: bigint, FIRST_SEEN_AT?: bigint, UPDATED_AT?: bigint, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PKB.d.ts.map