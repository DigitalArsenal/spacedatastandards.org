import * as flatbuffers from 'flatbuffers';
/**
 * One purpose-key slot of an operator.
 */
export declare class ACTKeySlot implements flatbuffers.IUnpackableObject<ACTKeySlotT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACTKeySlot;
    static getRootAsACTKeySlot(bb: flatbuffers.ByteBuffer, obj?: ACTKeySlot): ACTKeySlot;
    static getSizePrefixedRootAsACTKeySlot(bb: flatbuffers.ByteBuffer, obj?: ACTKeySlot): ACTKeySlot;
    /**
     * Slot name, e.g. "signing", "encryption", "publication".
     */
    SLOT(): string | null;
    SLOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Derivation path currently in use.
     */
    KEY_PATH(): string | null;
    KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Derivation path the next rotation will use.
     */
    NEXT_PATH(): string | null;
    NEXT_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROTATABLE(): boolean;
    /**
     * Key algorithm, e.g. "secp256k1", "ed25519", "x25519".
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACTKeySlot(builder: flatbuffers.Builder): void;
    static addSlot(builder: flatbuffers.Builder, SLOTOffset: flatbuffers.Offset): void;
    static addKeyPath(builder: flatbuffers.Builder, KEY_PATHOffset: flatbuffers.Offset): void;
    static addNextPath(builder: flatbuffers.Builder, NEXT_PATHOffset: flatbuffers.Offset): void;
    static addRotatable(builder: flatbuffers.Builder, ROTATABLE: boolean): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static endACTKeySlot(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACTKeySlot(builder: flatbuffers.Builder, SLOTOffset: flatbuffers.Offset, KEY_PATHOffset: flatbuffers.Offset, NEXT_PATHOffset: flatbuffers.Offset, ROTATABLE: boolean, ALGORITHMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACTKeySlotT;
    unpackTo(_o: ACTKeySlotT): void;
}
export declare class ACTKeySlotT implements flatbuffers.IGeneratedObject {
    SLOT: string | Uint8Array | null;
    KEY_PATH: string | Uint8Array | null;
    NEXT_PATH: string | Uint8Array | null;
    ROTATABLE: boolean;
    ALGORITHM: string | Uint8Array | null;
    constructor(SLOT?: string | Uint8Array | null, KEY_PATH?: string | Uint8Array | null, NEXT_PATH?: string | Uint8Array | null, ROTATABLE?: boolean, ALGORITHM?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACTKeySlot.d.ts.map