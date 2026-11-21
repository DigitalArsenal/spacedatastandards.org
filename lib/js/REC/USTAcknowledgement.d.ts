import * as flatbuffers from 'flatbuffers';
/**
 * The newest update signal the node accepted.
 */
export declare class USTAcknowledgement implements flatbuffers.IUnpackableObject<USTAcknowledgementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): USTAcknowledgement;
    static getRootAsUSTAcknowledgement(bb: flatbuffers.ByteBuffer, obj?: USTAcknowledgement): USTAcknowledgement;
    static getSizePrefixedRootAsUSTAcknowledgement(bb: flatbuffers.ByteBuffer, obj?: USTAcknowledgement): USTAcknowledgement;
    /**
     * Release update identifier.
     */
    UPDATE_ID(): string | null;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sequence number of the update signal.
     */
    SEQUENCE(): bigint;
    static startUSTAcknowledgement(builder: flatbuffers.Builder): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static endUSTAcknowledgement(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUSTAcknowledgement(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset, SEQUENCE: bigint): flatbuffers.Offset;
    unpack(): USTAcknowledgementT;
    unpackTo(_o: USTAcknowledgementT): void;
}
export declare class USTAcknowledgementT implements flatbuffers.IGeneratedObject {
    UPDATE_ID: string | Uint8Array | null;
    SEQUENCE: bigint;
    constructor(UPDATE_ID?: string | Uint8Array | null, SEQUENCE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=USTAcknowledgement.d.ts.map