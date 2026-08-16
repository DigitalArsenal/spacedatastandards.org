import * as flatbuffers from 'flatbuffers';
/**
 * One designator the facility answers to in a named coding system.
 */
export declare class TFNDesignator implements flatbuffers.IUnpackableObject<TFNDesignatorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TFNDesignator;
    static getRootAsTFNDesignator(bb: flatbuffers.ByteBuffer, obj?: TFNDesignator): TFNDesignator;
    static getSizePrefixedRootAsTFNDesignator(bb: flatbuffers.ByteBuffer, obj?: TFNDesignator): TFNDesignator;
    /**
     * Coding-system token, verbatim (the system's own name). Never a field
     * name and never normalized by the publisher.
     */
    SCHEME(): string;
    SCHEME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The designator within that system, verbatim.
     */
    VALUE(): string;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startTFNDesignator(builder: flatbuffers.Builder): void;
    static addScheme(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endTFNDesignator(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTFNDesignator(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TFNDesignatorT;
    unpackTo(_o: TFNDesignatorT): void;
}
export declare class TFNDesignatorT implements flatbuffers.IGeneratedObject {
    SCHEME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(SCHEME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TFNDesignator.d.ts.map