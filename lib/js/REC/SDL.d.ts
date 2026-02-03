import * as flatbuffers from 'flatbuffers';
/**
 * Space Data Link Security (CCSDS 355.0-B-1)
 */
export declare class SDL implements flatbuffers.IUnpackableObject<SDLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDL;
    static getRootAsSDL(bb: flatbuffers.ByteBuffer, obj?: SDL): SDL;
    static getSizePrefixedRootAsSDL(bb: flatbuffers.ByteBuffer, obj?: SDL): SDL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Security Parameter Index
     */
    SPI(): number;
    /**
     * Initialization vector length in bytes
     */
    IV_LENGTH(): number;
    /**
     * Initialization vector
     */
    IV(index: number): number | null;
    ivLength(): number;
    ivArray(): Uint8Array | null;
    /**
     * MAC length in bytes
     */
    MAC_LENGTH(): number;
    /**
     * Message authentication code
     */
    MAC(index: number): number | null;
    macLength(): number;
    macArray(): Uint8Array | null;
    /**
     * Pad length
     */
    PAD_LENGTH(): number;
    /**
     * Security payload
     */
    PAYLOAD(index: number): number | null;
    payloadLength(): number;
    payloadArray(): Uint8Array | null;
    static startSDL(builder: flatbuffers.Builder): void;
    static addSpi(builder: flatbuffers.Builder, SPI: number): void;
    static addIvLength(builder: flatbuffers.Builder, IV_LENGTH: number): void;
    static addIv(builder: flatbuffers.Builder, IVOffset: flatbuffers.Offset): void;
    static createIvVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIvVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMacLength(builder: flatbuffers.Builder, MAC_LENGTH: number): void;
    static addMac(builder: flatbuffers.Builder, MACOffset: flatbuffers.Offset): void;
    static createMacVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMacVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPadLength(builder: flatbuffers.Builder, PAD_LENGTH: number): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static createPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSDL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSDLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSDLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSDL(builder: flatbuffers.Builder, SPI: number, IV_LENGTH: number, IVOffset: flatbuffers.Offset, MAC_LENGTH: number, MACOffset: flatbuffers.Offset, PAD_LENGTH: number, PAYLOADOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SDLT;
    unpackTo(_o: SDLT): void;
}
export declare class SDLT implements flatbuffers.IGeneratedObject {
    SPI: number;
    IV_LENGTH: number;
    IV: (number)[];
    MAC_LENGTH: number;
    MAC: (number)[];
    PAD_LENGTH: number;
    PAYLOAD: (number)[];
    constructor(SPI?: number, IV_LENGTH?: number, IV?: (number)[], MAC_LENGTH?: number, MAC?: (number)[], PAD_LENGTH?: number, PAYLOAD?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDL.d.ts.map