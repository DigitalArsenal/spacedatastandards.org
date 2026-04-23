import * as flatbuffers from 'flatbuffers';
/**
 * Protocol handler declared by a plugin.
 */
export declare class PLGProtocolSpec implements flatbuffers.IUnpackableObject<PLGProtocolSpecT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGProtocolSpec;
    static getRootAsPLGProtocolSpec(bb: flatbuffers.ByteBuffer, obj?: PLGProtocolSpec): PLGProtocolSpec;
    static getSizePrefixedRootAsPLGProtocolSpec(bb: flatbuffers.ByteBuffer, obj?: PLGProtocolSpec): PLGProtocolSpec;
    PROTOCOL_ID(): string | null;
    PROTOCOL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METHOD_ID(): string | null;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INPUT_PORT_ID(): string | null;
    INPUT_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OUTPUT_PORT_ID(): string | null;
    OUTPUT_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WIRE_ID(): string | null;
    WIRE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRANSPORT_KIND(): string | null;
    TRANSPORT_KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROLE(): string | null;
    ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SPEC_URI(): string | null;
    SPEC_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AUTO_INSTALL(): boolean;
    ADVERTISE(): boolean;
    DISCOVERY_KEY(): string | null;
    DISCOVERY_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DEFAULT_PORT(): number;
    REQUIRE_SECURE_TRANSPORT(): boolean;
    static startPLGProtocolSpec(builder: flatbuffers.Builder): void;
    static addProtocolId(builder: flatbuffers.Builder, PROTOCOL_IDOffset: flatbuffers.Offset): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addInputPortId(builder: flatbuffers.Builder, INPUT_PORT_IDOffset: flatbuffers.Offset): void;
    static addOutputPortId(builder: flatbuffers.Builder, OUTPUT_PORT_IDOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addWireId(builder: flatbuffers.Builder, WIRE_IDOffset: flatbuffers.Offset): void;
    static addTransportKind(builder: flatbuffers.Builder, TRANSPORT_KINDOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLEOffset: flatbuffers.Offset): void;
    static addSpecUri(builder: flatbuffers.Builder, SPEC_URIOffset: flatbuffers.Offset): void;
    static addAutoInstall(builder: flatbuffers.Builder, AUTO_INSTALL: boolean): void;
    static addAdvertise(builder: flatbuffers.Builder, ADVERTISE: boolean): void;
    static addDiscoveryKey(builder: flatbuffers.Builder, DISCOVERY_KEYOffset: flatbuffers.Offset): void;
    static addDefaultPort(builder: flatbuffers.Builder, DEFAULT_PORT: number): void;
    static addRequireSecureTransport(builder: flatbuffers.Builder, REQUIRE_SECURE_TRANSPORT: boolean): void;
    static endPLGProtocolSpec(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGProtocolSpec(builder: flatbuffers.Builder, PROTOCOL_IDOffset: flatbuffers.Offset, METHOD_IDOffset: flatbuffers.Offset, INPUT_PORT_IDOffset: flatbuffers.Offset, OUTPUT_PORT_IDOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, WIRE_IDOffset: flatbuffers.Offset, TRANSPORT_KINDOffset: flatbuffers.Offset, ROLEOffset: flatbuffers.Offset, SPEC_URIOffset: flatbuffers.Offset, AUTO_INSTALL: boolean, ADVERTISE: boolean, DISCOVERY_KEYOffset: flatbuffers.Offset, DEFAULT_PORT: number, REQUIRE_SECURE_TRANSPORT: boolean): flatbuffers.Offset;
    unpack(): PLGProtocolSpecT;
    unpackTo(_o: PLGProtocolSpecT): void;
}
export declare class PLGProtocolSpecT implements flatbuffers.IGeneratedObject {
    PROTOCOL_ID: string | Uint8Array | null;
    METHOD_ID: string | Uint8Array | null;
    INPUT_PORT_ID: string | Uint8Array | null;
    OUTPUT_PORT_ID: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    WIRE_ID: string | Uint8Array | null;
    TRANSPORT_KIND: string | Uint8Array | null;
    ROLE: string | Uint8Array | null;
    SPEC_URI: string | Uint8Array | null;
    AUTO_INSTALL: boolean;
    ADVERTISE: boolean;
    DISCOVERY_KEY: string | Uint8Array | null;
    DEFAULT_PORT: number;
    REQUIRE_SECURE_TRANSPORT: boolean;
    constructor(PROTOCOL_ID?: string | Uint8Array | null, METHOD_ID?: string | Uint8Array | null, INPUT_PORT_ID?: string | Uint8Array | null, OUTPUT_PORT_ID?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, WIRE_ID?: string | Uint8Array | null, TRANSPORT_KIND?: string | Uint8Array | null, ROLE?: string | Uint8Array | null, SPEC_URI?: string | Uint8Array | null, AUTO_INSTALL?: boolean, ADVERTISE?: boolean, DISCOVERY_KEY?: string | Uint8Array | null, DEFAULT_PORT?: number, REQUIRE_SECURE_TRANSPORT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGProtocolSpec.d.ts.map