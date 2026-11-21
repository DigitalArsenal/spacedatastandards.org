import * as flatbuffers from 'flatbuffers';
/**
 * An update the node installed and that failed its health gate or trial.
 */
export declare class USTFailure implements flatbuffers.IUnpackableObject<USTFailureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): USTFailure;
    static getRootAsUSTFailure(bb: flatbuffers.ByteBuffer, obj?: USTFailure): USTFailure;
    static getSizePrefixedRootAsUSTFailure(bb: flatbuffers.ByteBuffer, obj?: USTFailure): USTFailure;
    /**
     * Release update identifier.
     */
    UPDATE_ID(): string | null;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version that failed.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sequence number of the update signal.
     */
    SEQUENCE(): bigint;
    /**
     * When it failed (RFC 3339, UTC).
     */
    AT(): string | null;
    AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why, as one of the fixed reason codes (see the header).
     */
    REASON_CODE(): string | null;
    REASON_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * False when the revert was refused and the failed build keeps running.
     */
    ROLLED_BACK(): boolean;
    static startUSTFailure(builder: flatbuffers.Builder): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static addAt(builder: flatbuffers.Builder, ATOffset: flatbuffers.Offset): void;
    static addReasonCode(builder: flatbuffers.Builder, REASON_CODEOffset: flatbuffers.Offset): void;
    static addRolledBack(builder: flatbuffers.Builder, ROLLED_BACK: boolean): void;
    static endUSTFailure(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUSTFailure(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, SEQUENCE: bigint, ATOffset: flatbuffers.Offset, REASON_CODEOffset: flatbuffers.Offset, ROLLED_BACK: boolean): flatbuffers.Offset;
    unpack(): USTFailureT;
    unpackTo(_o: USTFailureT): void;
}
export declare class USTFailureT implements flatbuffers.IGeneratedObject {
    UPDATE_ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    SEQUENCE: bigint;
    AT: string | Uint8Array | null;
    REASON_CODE: string | Uint8Array | null;
    ROLLED_BACK: boolean;
    constructor(UPDATE_ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, SEQUENCE?: bigint, AT?: string | Uint8Array | null, REASON_CODE?: string | Uint8Array | null, ROLLED_BACK?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=USTFailure.d.ts.map