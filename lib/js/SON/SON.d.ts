import * as flatbuffers from 'flatbuffers';
/**
 * Sonar and Underwater Acoustics
 */
export declare class SON implements flatbuffers.IUnpackableObject<SONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SON;
    static getRootAsSON(bb: flatbuffers.ByteBuffer, obj?: SON): SON;
    static getSizePrefixedRootAsSON(bb: flatbuffers.ByteBuffer, obj?: SON): SON;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ACTIVE_CONFIG(): string | null;
    ACTIVE_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PASSIVE_CONFIG(): string | null;
    PASSIVE_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TL_REQUEST(): string | null;
    TL_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENVIRONMENT(): string | null;
    ENVIRONMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_SIGNATURE(): string | null;
    TARGET_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TMA_INPUT(): string | null;
    TMA_INPUT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TORPEDO_SEEKER(): string | null;
    TORPEDO_SEEKER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSON(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addActiveConfig(builder: flatbuffers.Builder, ACTIVE_CONFIGOffset: flatbuffers.Offset): void;
    static addPassiveConfig(builder: flatbuffers.Builder, PASSIVE_CONFIGOffset: flatbuffers.Offset): void;
    static addTlRequest(builder: flatbuffers.Builder, TL_REQUESTOffset: flatbuffers.Offset): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENTOffset: flatbuffers.Offset): void;
    static addTargetSignature(builder: flatbuffers.Builder, TARGET_SIGNATUREOffset: flatbuffers.Offset): void;
    static addTmaInput(builder: flatbuffers.Builder, TMA_INPUTOffset: flatbuffers.Offset): void;
    static addTorpedoSeeker(builder: flatbuffers.Builder, TORPEDO_SEEKEROffset: flatbuffers.Offset): void;
    static endSON(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSON(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, ACTIVE_CONFIGOffset: flatbuffers.Offset, PASSIVE_CONFIGOffset: flatbuffers.Offset, TL_REQUESTOffset: flatbuffers.Offset, ENVIRONMENTOffset: flatbuffers.Offset, TARGET_SIGNATUREOffset: flatbuffers.Offset, TMA_INPUTOffset: flatbuffers.Offset, TORPEDO_SEEKEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SONT;
    unpackTo(_o: SONT): void;
}
export declare class SONT implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    ACTIVE_CONFIG: string | Uint8Array | null;
    PASSIVE_CONFIG: string | Uint8Array | null;
    TL_REQUEST: string | Uint8Array | null;
    ENVIRONMENT: string | Uint8Array | null;
    TARGET_SIGNATURE: string | Uint8Array | null;
    TMA_INPUT: string | Uint8Array | null;
    TORPEDO_SEEKER: string | Uint8Array | null;
    constructor(COMMAND?: string | Uint8Array | null, ACTIVE_CONFIG?: string | Uint8Array | null, PASSIVE_CONFIG?: string | Uint8Array | null, TL_REQUEST?: string | Uint8Array | null, ENVIRONMENT?: string | Uint8Array | null, TARGET_SIGNATURE?: string | Uint8Array | null, TMA_INPUT?: string | Uint8Array | null, TORPEDO_SEEKER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SON.d.ts.map