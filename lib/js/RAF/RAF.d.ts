import * as flatbuffers from 'flatbuffers';
import { rafPduType } from './rafPduType.js';
/**
 * Return All Frames Service (CCSDS 913.1-B-2)
 */
export declare class RAF implements flatbuffers.IUnpackableObject<RAFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RAF;
    static getRootAsRAF(bb: flatbuffers.ByteBuffer, obj?: RAF): RAF;
    static getSizePrefixedRootAsRAF(bb: flatbuffers.ByteBuffer, obj?: RAF): RAF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * PDU type
     */
    PDU_TYPE(): rafPduType;
    /**
     * Initiator identifier
     */
    INITIATOR_ID(): string | null;
    INITIATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Responder port identifier
     */
    RESPONDER_PORT_ID(): string | null;
    RESPONDER_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Service type
     */
    SERVICE_TYPE(): number;
    /**
     * Version number
     */
    VERSION(): number;
    /**
     * Invoke ID
     */
    INVOKE_ID(): number;
    /**
     * Frame quality
     */
    FRAME_QUALITY(): number;
    /**
     * Data
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    static startRAF(builder: flatbuffers.Builder): void;
    static addPduType(builder: flatbuffers.Builder, PDU_TYPE: rafPduType): void;
    static addInitiatorId(builder: flatbuffers.Builder, INITIATOR_IDOffset: flatbuffers.Offset): void;
    static addResponderPortId(builder: flatbuffers.Builder, RESPONDER_PORT_IDOffset: flatbuffers.Offset): void;
    static addServiceType(builder: flatbuffers.Builder, SERVICE_TYPE: number): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addInvokeId(builder: flatbuffers.Builder, INVOKE_ID: number): void;
    static addFrameQuality(builder: flatbuffers.Builder, FRAME_QUALITY: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRAF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRAFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRAFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRAF(builder: flatbuffers.Builder, PDU_TYPE: rafPduType, INITIATOR_IDOffset: flatbuffers.Offset, RESPONDER_PORT_IDOffset: flatbuffers.Offset, SERVICE_TYPE: number, VERSION: number, INVOKE_ID: number, FRAME_QUALITY: number, DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RAFT;
    unpackTo(_o: RAFT): void;
}
export declare class RAFT implements flatbuffers.IGeneratedObject {
    PDU_TYPE: rafPduType;
    INITIATOR_ID: string | Uint8Array | null;
    RESPONDER_PORT_ID: string | Uint8Array | null;
    SERVICE_TYPE: number;
    VERSION: number;
    INVOKE_ID: number;
    FRAME_QUALITY: number;
    DATA: (number)[];
    constructor(PDU_TYPE?: rafPduType, INITIATOR_ID?: string | Uint8Array | null, RESPONDER_PORT_ID?: string | Uint8Array | null, SERVICE_TYPE?: number, VERSION?: number, INVOKE_ID?: number, FRAME_QUALITY?: number, DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RAF.d.ts.map