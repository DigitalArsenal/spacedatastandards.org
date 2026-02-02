import * as flatbuffers from 'flatbuffers';
import { cltuPduType } from './cltuPduType.js';
/**
 * Command Link Transmission Unit Service (CCSDS 912.3-B-2)
 */
export declare class CLT implements flatbuffers.IUnpackableObject<CLTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLT;
    static getRootAsCLT(bb: flatbuffers.ByteBuffer, obj?: CLT): CLT;
    static getSizePrefixedRootAsCLT(bb: flatbuffers.ByteBuffer, obj?: CLT): CLT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * PDU type
     */
    PDU_TYPE(): cltuPduType;
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
     * CLTU data
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    static startCLT(builder: flatbuffers.Builder): void;
    static addPduType(builder: flatbuffers.Builder, PDU_TYPE: cltuPduType): void;
    static addInitiatorId(builder: flatbuffers.Builder, INITIATOR_IDOffset: flatbuffers.Offset): void;
    static addResponderPortId(builder: flatbuffers.Builder, RESPONDER_PORT_IDOffset: flatbuffers.Offset): void;
    static addServiceType(builder: flatbuffers.Builder, SERVICE_TYPE: number): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addInvokeId(builder: flatbuffers.Builder, INVOKE_ID: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCLT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCLTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCLTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCLT(builder: flatbuffers.Builder, PDU_TYPE: cltuPduType, INITIATOR_IDOffset: flatbuffers.Offset, RESPONDER_PORT_IDOffset: flatbuffers.Offset, SERVICE_TYPE: number, VERSION: number, INVOKE_ID: number, DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CLTT;
    unpackTo(_o: CLTT): void;
}
export declare class CLTT implements flatbuffers.IGeneratedObject {
    PDU_TYPE: cltuPduType;
    INITIATOR_ID: string | Uint8Array | null;
    RESPONDER_PORT_ID: string | Uint8Array | null;
    SERVICE_TYPE: number;
    VERSION: number;
    INVOKE_ID: number;
    DATA: (number)[];
    constructor(PDU_TYPE?: cltuPduType, INITIATOR_ID?: string | Uint8Array | null, RESPONDER_PORT_ID?: string | Uint8Array | null, SERVICE_TYPE?: number, VERSION?: number, INVOKE_ID?: number, DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLT.d.ts.map