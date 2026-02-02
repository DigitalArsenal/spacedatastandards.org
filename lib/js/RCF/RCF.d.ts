import * as flatbuffers from 'flatbuffers';
import { rcfPduType } from './rcfPduType.js';
/**
 * Return Channel Frames Service (CCSDS 913.5-B-2)
 */
export declare class RCF implements flatbuffers.IUnpackableObject<RCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RCF;
    static getRootAsRCF(bb: flatbuffers.ByteBuffer, obj?: RCF): RCF;
    static getSizePrefixedRootAsRCF(bb: flatbuffers.ByteBuffer, obj?: RCF): RCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * PDU type
     */
    PDU_TYPE(): rcfPduType;
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
     * Spacecraft ID filter
     */
    SPACECRAFT_ID(): number;
    /**
     * Virtual channel ID filter
     */
    VIRTUAL_CHANNEL_ID(): number;
    /**
     * Data
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    static startRCF(builder: flatbuffers.Builder): void;
    static addPduType(builder: flatbuffers.Builder, PDU_TYPE: rcfPduType): void;
    static addInitiatorId(builder: flatbuffers.Builder, INITIATOR_IDOffset: flatbuffers.Offset): void;
    static addResponderPortId(builder: flatbuffers.Builder, RESPONDER_PORT_IDOffset: flatbuffers.Offset): void;
    static addServiceType(builder: flatbuffers.Builder, SERVICE_TYPE: number): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addInvokeId(builder: flatbuffers.Builder, INVOKE_ID: number): void;
    static addSpacecraftId(builder: flatbuffers.Builder, SPACECRAFT_ID: number): void;
    static addVirtualChannelId(builder: flatbuffers.Builder, VIRTUAL_CHANNEL_ID: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRCF(builder: flatbuffers.Builder, PDU_TYPE: rcfPduType, INITIATOR_IDOffset: flatbuffers.Offset, RESPONDER_PORT_IDOffset: flatbuffers.Offset, SERVICE_TYPE: number, VERSION: number, INVOKE_ID: number, SPACECRAFT_ID: number, VIRTUAL_CHANNEL_ID: number, DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RCFT;
    unpackTo(_o: RCFT): void;
}
export declare class RCFT implements flatbuffers.IGeneratedObject {
    PDU_TYPE: rcfPduType;
    INITIATOR_ID: string | Uint8Array | null;
    RESPONDER_PORT_ID: string | Uint8Array | null;
    SERVICE_TYPE: number;
    VERSION: number;
    INVOKE_ID: number;
    SPACECRAFT_ID: number;
    VIRTUAL_CHANNEL_ID: number;
    DATA: (number)[];
    constructor(PDU_TYPE?: rcfPduType, INITIATOR_ID?: string | Uint8Array | null, RESPONDER_PORT_ID?: string | Uint8Array | null, SERVICE_TYPE?: number, VERSION?: number, INVOKE_ID?: number, SPACECRAFT_ID?: number, VIRTUAL_CHANNEL_ID?: number, DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RCF.d.ts.map