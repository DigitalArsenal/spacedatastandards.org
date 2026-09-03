import * as flatbuffers from 'flatbuffers';
import { ACTKeySlot, ACTKeySlotT } from './ACTKeySlot.js';
import { actKind } from './actKind.js';
import { peerRegistryTrustCategory } from './peerRegistryTrustCategory.js';
/**
 * Account Record - operator, session, challenge or external link.
 */
export declare class ACT implements flatbuffers.IUnpackableObject<ACTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACT;
    static getRootAsACT(bb: flatbuffers.ByteBuffer, obj?: ACT): ACT;
    static getSizePrefixedRootAsACT(bb: flatbuffers.ByteBuffer, obj?: ACT): ACT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ACCOUNT_ID(): string | null;
    ACCOUNT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KIND(): actKind;
    /**
     * Extended public key the operator proves control of.
     */
    XPUB(): string | null;
    XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fingerprint of XPUB.
     */
    XPUB_FINGERPRINT(): string | null;
    XPUB_FINGERPRINT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRUST_LEVEL(): peerRegistryTrustCategory;
    SIGNING_PUBLIC_KEY(): string | null;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the operator's identity record.
     */
    EPM_CID(): string | null;
    EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer identifier the account is bound to.
     */
    PEER_ID(): string | null;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds.
     */
    CREATED_AT(): bigint;
    /**
     * Unix milliseconds; 0 = never.
     */
    LAST_SEEN(): bigint;
    /**
     * Unix milliseconds a session or challenge expires; 0 = none.
     */
    EXPIRES_AT(): bigint;
    CHALLENGE_ID(): string | null;
    CHALLENGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Challenge text the operator signs.
     */
    CHALLENGE(): string | null;
    CHALLENGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature over CHALLENGE.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * Signature scheme identifier.
     */
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * External chain identifier of a linked wallet (CAIP-2 form).
     */
    EXTERNAL_CHAIN(): string | null;
    EXTERNAL_CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * External address of a linked wallet.
     */
    EXTERNAL_ADDRESS(): string | null;
    EXTERNAL_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the external link has been verified.
     */
    LINKED(): boolean;
    KEY_SLOTS(index: number, obj?: ACTKeySlot): ACTKeySlot | null;
    keySlotsLength(): number;
    static startACT(builder: flatbuffers.Builder): void;
    static addAccountId(builder: flatbuffers.Builder, ACCOUNT_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: actKind): void;
    static addXpub(builder: flatbuffers.Builder, XPUBOffset: flatbuffers.Offset): void;
    static addXpubFingerprint(builder: flatbuffers.Builder, XPUB_FINGERPRINTOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addTrustLevel(builder: flatbuffers.Builder, TRUST_LEVEL: peerRegistryTrustCategory): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addEpmCid(builder: flatbuffers.Builder, EPM_CIDOffset: flatbuffers.Offset): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addLastSeen(builder: flatbuffers.Builder, LAST_SEEN: bigint): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addChallengeId(builder: flatbuffers.Builder, CHALLENGE_IDOffset: flatbuffers.Offset): void;
    static addChallenge(builder: flatbuffers.Builder, CHALLENGEOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addExternalChain(builder: flatbuffers.Builder, EXTERNAL_CHAINOffset: flatbuffers.Offset): void;
    static addExternalAddress(builder: flatbuffers.Builder, EXTERNAL_ADDRESSOffset: flatbuffers.Offset): void;
    static addLinked(builder: flatbuffers.Builder, LINKED: boolean): void;
    static addKeySlots(builder: flatbuffers.Builder, KEY_SLOTSOffset: flatbuffers.Offset): void;
    static createKeySlotsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeySlotsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createACT(builder: flatbuffers.Builder, ACCOUNT_IDOffset: flatbuffers.Offset, KIND: actKind, XPUBOffset: flatbuffers.Offset, XPUB_FINGERPRINTOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TRUST_LEVEL: peerRegistryTrustCategory, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, EPM_CIDOffset: flatbuffers.Offset, PEER_IDOffset: flatbuffers.Offset, CREATED_AT: bigint, LAST_SEEN: bigint, EXPIRES_AT: bigint, CHALLENGE_IDOffset: flatbuffers.Offset, CHALLENGEOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset, EXTERNAL_CHAINOffset: flatbuffers.Offset, EXTERNAL_ADDRESSOffset: flatbuffers.Offset, LINKED: boolean, KEY_SLOTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACTT;
    unpackTo(_o: ACTT): void;
}
export declare class ACTT implements flatbuffers.IGeneratedObject {
    ACCOUNT_ID: string | Uint8Array | null;
    KIND: actKind;
    XPUB: string | Uint8Array | null;
    XPUB_FINGERPRINT: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TRUST_LEVEL: peerRegistryTrustCategory;
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    EPM_CID: string | Uint8Array | null;
    PEER_ID: string | Uint8Array | null;
    CREATED_AT: bigint;
    LAST_SEEN: bigint;
    EXPIRES_AT: bigint;
    CHALLENGE_ID: string | Uint8Array | null;
    CHALLENGE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNATURE_TYPE: string | Uint8Array | null;
    EXTERNAL_CHAIN: string | Uint8Array | null;
    EXTERNAL_ADDRESS: string | Uint8Array | null;
    LINKED: boolean;
    KEY_SLOTS: (ACTKeySlotT)[];
    constructor(ACCOUNT_ID?: string | Uint8Array | null, KIND?: actKind, XPUB?: string | Uint8Array | null, XPUB_FINGERPRINT?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TRUST_LEVEL?: peerRegistryTrustCategory, SIGNING_PUBLIC_KEY?: string | Uint8Array | null, EPM_CID?: string | Uint8Array | null, PEER_ID?: string | Uint8Array | null, CREATED_AT?: bigint, LAST_SEEN?: bigint, EXPIRES_AT?: bigint, CHALLENGE_ID?: string | Uint8Array | null, CHALLENGE?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_TYPE?: string | Uint8Array | null, EXTERNAL_CHAIN?: string | Uint8Array | null, EXTERNAL_ADDRESS?: string | Uint8Array | null, LINKED?: boolean, KEY_SLOTS?: (ACTKeySlotT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACT.d.ts.map