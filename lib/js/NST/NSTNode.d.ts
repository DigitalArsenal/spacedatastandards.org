import * as flatbuffers from 'flatbuffers';
/**
 * Node Status Record (NST)
 * Description
 * Presence and identity of the peers a node knows about, as a node reports
 * them to operator dashboards: who the peer is (its identity record fields),
 * how it can be reached, whether it is online, where it is, which software
 * and standards versions it runs, and how the row reached the board. The
 * SOURCE field is the provenance of the row itself so an operator can always
 * answer "how did this peer get here?": declared in configuration, pinned by
 * an operator, or seen on a live connection. A set carries every row the
 * emitting node currently admits and the emitting node's own row.
 * One known peer as reported by the emitting node.
 */
export declare class NSTNode implements flatbuffers.IUnpackableObject<NSTNodeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NSTNode;
    static getRootAsNSTNode(bb: flatbuffers.ByteBuffer, obj?: NSTNode): NSTNode;
    static getSizePrefixedRootAsNSTNode(bb: flatbuffers.ByteBuffer, obj?: NSTNode): NSTNode;
    /**
     * Peer identifier (multihash, base58).
     */
    PEER_ID(): string | null;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Distinguished name from the peer's identity record.
     */
    DN(): string | null;
    DN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORGANIZATION(): string | null;
    ORGANIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRUST_LEVEL(): string | null;
    TRUST_LEVEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROLE(): string | null;
    ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AGENT_VERSION(): string | null;
    AGENT_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Multiformat addresses the peer is known by.
     */
    MULTIFORMAT_ADDRESS(index: number): string;
    MULTIFORMAT_ADDRESS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    multiformatAddressLength(): number;
    /**
     * Unix seconds of last observation; 0 = never.
     */
    LAST_SEEN(): bigint;
    IS_ONLINE(): boolean;
    /**
     * Round-trip latency to the peer, milliseconds; 0 = unknown.
     */
    LATENCY_MS(): number;
    /**
     * Full vCard 4.0 text derived from the peer's identity record.
     */
    VCARD(): string | null;
    VCARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Resolved coordinates; 0,0 = unresolved.
     */
    LAT(): number;
    LON(): number;
    GEO_COUNTRY(): string | null;
    GEO_COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEO_CITY(): string | null;
    GEO_CITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True on the node emitting this set.
     */
    IS_SELF(): boolean;
    /**
     * Seconds since the emitting process started (self only).
     */
    UPTIME_S(): bigint;
    SUITE_VERSION(): string | null;
    SUITE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STANDARDS_VERSION(): string | null;
    STANDARDS_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How this row reached the board: exactly one of "config" (declared in the
     * node's configuration), "pinned" (pinned by an operator) or "connected"
     * (seen right now on a live connection).
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True for configuration and operator pins; a pinned peer keeps its row
     * while unreachable.
     */
    PINNED(): boolean;
    /**
     * For SOURCE "config" the configuration key an operator can edit; for
     * SOURCE "pinned" the operator's own note. Never a manufactured label.
     */
    PIN_NOTE(): string | null;
    PIN_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peers this peer is currently connected to, for the connection graph.
     */
    CONNECTED_PEER_IDS(index: number): string;
    CONNECTED_PEER_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    connectedPeerIdsLength(): number;
    /**
     * Signing public key from the peer's identity record.
     */
    SIGNING_PUBLIC_KEY(): string | null;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encryption public key from the peer's identity record.
     */
    ENCRYPTION_PUBLIC_KEY(): string | null;
    ENCRYPTION_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the peer's identity record.
     */
    EPM_CID(): string | null;
    EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the content-addressed storage daemon the peer runs.
     */
    STORAGE_DAEMON_VERSION(): string | null;
    STORAGE_DAEMON_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Onion-service address when the peer is reachable over an anonymity
     * network.
     */
    ONION_ADDRESS(): string | null;
    ONION_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNSTNode(builder: flatbuffers.Builder): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addDn(builder: flatbuffers.Builder, DNOffset: flatbuffers.Offset): void;
    static addOrganization(builder: flatbuffers.Builder, ORGANIZATIONOffset: flatbuffers.Offset): void;
    static addTrustLevel(builder: flatbuffers.Builder, TRUST_LEVELOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLEOffset: flatbuffers.Offset): void;
    static addAgentVersion(builder: flatbuffers.Builder, AGENT_VERSIONOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static createMultiformatAddressVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiformatAddressVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLastSeen(builder: flatbuffers.Builder, LAST_SEEN: bigint): void;
    static addIsOnline(builder: flatbuffers.Builder, IS_ONLINE: boolean): void;
    static addLatencyMs(builder: flatbuffers.Builder, LATENCY_MS: number): void;
    static addVcard(builder: flatbuffers.Builder, VCARDOffset: flatbuffers.Offset): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addGeoCountry(builder: flatbuffers.Builder, GEO_COUNTRYOffset: flatbuffers.Offset): void;
    static addGeoCity(builder: flatbuffers.Builder, GEO_CITYOffset: flatbuffers.Offset): void;
    static addIsSelf(builder: flatbuffers.Builder, IS_SELF: boolean): void;
    static addUptimeS(builder: flatbuffers.Builder, UPTIME_S: bigint): void;
    static addSuiteVersion(builder: flatbuffers.Builder, SUITE_VERSIONOffset: flatbuffers.Offset): void;
    static addStandardsVersion(builder: flatbuffers.Builder, STANDARDS_VERSIONOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addPinned(builder: flatbuffers.Builder, PINNED: boolean): void;
    static addPinNote(builder: flatbuffers.Builder, PIN_NOTEOffset: flatbuffers.Offset): void;
    static addConnectedPeerIds(builder: flatbuffers.Builder, CONNECTED_PEER_IDSOffset: flatbuffers.Offset): void;
    static createConnectedPeerIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConnectedPeerIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addEncryptionPublicKey(builder: flatbuffers.Builder, ENCRYPTION_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addEpmCid(builder: flatbuffers.Builder, EPM_CIDOffset: flatbuffers.Offset): void;
    static addStorageDaemonVersion(builder: flatbuffers.Builder, STORAGE_DAEMON_VERSIONOffset: flatbuffers.Offset): void;
    static addOnionAddress(builder: flatbuffers.Builder, ONION_ADDRESSOffset: flatbuffers.Offset): void;
    static endNSTNode(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNSTNode(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset, DNOffset: flatbuffers.Offset, ORGANIZATIONOffset: flatbuffers.Offset, TRUST_LEVELOffset: flatbuffers.Offset, ROLEOffset: flatbuffers.Offset, AGENT_VERSIONOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, LAST_SEEN: bigint, IS_ONLINE: boolean, LATENCY_MS: number, VCARDOffset: flatbuffers.Offset, LAT: number, LON: number, GEO_COUNTRYOffset: flatbuffers.Offset, GEO_CITYOffset: flatbuffers.Offset, IS_SELF: boolean, UPTIME_S: bigint, SUITE_VERSIONOffset: flatbuffers.Offset, STANDARDS_VERSIONOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, PINNED: boolean, PIN_NOTEOffset: flatbuffers.Offset, CONNECTED_PEER_IDSOffset: flatbuffers.Offset, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, ENCRYPTION_PUBLIC_KEYOffset: flatbuffers.Offset, EPM_CIDOffset: flatbuffers.Offset, STORAGE_DAEMON_VERSIONOffset: flatbuffers.Offset, ONION_ADDRESSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NSTNodeT;
    unpackTo(_o: NSTNodeT): void;
}
export declare class NSTNodeT implements flatbuffers.IGeneratedObject {
    PEER_ID: string | Uint8Array | null;
    DN: string | Uint8Array | null;
    ORGANIZATION: string | Uint8Array | null;
    TRUST_LEVEL: string | Uint8Array | null;
    ROLE: string | Uint8Array | null;
    AGENT_VERSION: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: (string)[];
    LAST_SEEN: bigint;
    IS_ONLINE: boolean;
    LATENCY_MS: number;
    VCARD: string | Uint8Array | null;
    LAT: number;
    LON: number;
    GEO_COUNTRY: string | Uint8Array | null;
    GEO_CITY: string | Uint8Array | null;
    IS_SELF: boolean;
    UPTIME_S: bigint;
    SUITE_VERSION: string | Uint8Array | null;
    STANDARDS_VERSION: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    PINNED: boolean;
    PIN_NOTE: string | Uint8Array | null;
    CONNECTED_PEER_IDS: (string)[];
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    ENCRYPTION_PUBLIC_KEY: string | Uint8Array | null;
    EPM_CID: string | Uint8Array | null;
    STORAGE_DAEMON_VERSION: string | Uint8Array | null;
    ONION_ADDRESS: string | Uint8Array | null;
    constructor(PEER_ID?: string | Uint8Array | null, DN?: string | Uint8Array | null, ORGANIZATION?: string | Uint8Array | null, TRUST_LEVEL?: string | Uint8Array | null, ROLE?: string | Uint8Array | null, AGENT_VERSION?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: (string)[], LAST_SEEN?: bigint, IS_ONLINE?: boolean, LATENCY_MS?: number, VCARD?: string | Uint8Array | null, LAT?: number, LON?: number, GEO_COUNTRY?: string | Uint8Array | null, GEO_CITY?: string | Uint8Array | null, IS_SELF?: boolean, UPTIME_S?: bigint, SUITE_VERSION?: string | Uint8Array | null, STANDARDS_VERSION?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, PINNED?: boolean, PIN_NOTE?: string | Uint8Array | null, CONNECTED_PEER_IDS?: (string)[], SIGNING_PUBLIC_KEY?: string | Uint8Array | null, ENCRYPTION_PUBLIC_KEY?: string | Uint8Array | null, EPM_CID?: string | Uint8Array | null, STORAGE_DAEMON_VERSION?: string | Uint8Array | null, ONION_ADDRESS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NSTNode.d.ts.map