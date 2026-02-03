import * as flatbuffers from 'flatbuffers';
import { packetType } from './packetType.js';
/**
 * Space Packet Protocol (CCSDS 133.0-B-1)
 */
export declare class SPP implements flatbuffers.IUnpackableObject<SPPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SPP;
    static getRootAsSPP(bb: flatbuffers.ByteBuffer, obj?: SPP): SPP;
    static getSizePrefixedRootAsSPP(bb: flatbuffers.ByteBuffer, obj?: SPP): SPP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Packet version number
     */
    VERSION(): number;
    /**
     * Packet type (TM or TC)
     */
    PACKET_TYPE(): packetType;
    /**
     * Secondary header flag
     */
    SEC_HDR_FLAG(): boolean;
    /**
     * Application Process Identifier
     */
    APID(): number;
    /**
     * Sequence flags (00=continuation, 01=first, 10=last, 11=standalone)
     */
    SEQUENCE_FLAGS(): number;
    /**
     * Sequence count
     */
    SEQUENCE_COUNT(): number;
    /**
     * Data length minus 1
     */
    DATA_LENGTH(): number;
    /**
     * Packet data zone
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    static startSPP(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addPacketType(builder: flatbuffers.Builder, PACKET_TYPE: packetType): void;
    static addSecHdrFlag(builder: flatbuffers.Builder, SEC_HDR_FLAG: boolean): void;
    static addApid(builder: flatbuffers.Builder, APID: number): void;
    static addSequenceFlags(builder: flatbuffers.Builder, SEQUENCE_FLAGS: number): void;
    static addSequenceCount(builder: flatbuffers.Builder, SEQUENCE_COUNT: number): void;
    static addDataLength(builder: flatbuffers.Builder, DATA_LENGTH: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSPP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSPP(builder: flatbuffers.Builder, VERSION: number, PACKET_TYPE: packetType, SEC_HDR_FLAG: boolean, APID: number, SEQUENCE_FLAGS: number, SEQUENCE_COUNT: number, DATA_LENGTH: number, DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SPPT;
    unpackTo(_o: SPPT): void;
}
export declare class SPPT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    PACKET_TYPE: packetType;
    SEC_HDR_FLAG: boolean;
    APID: number;
    SEQUENCE_FLAGS: number;
    SEQUENCE_COUNT: number;
    DATA_LENGTH: number;
    DATA: (number)[];
    constructor(VERSION?: number, PACKET_TYPE?: packetType, SEC_HDR_FLAG?: boolean, APID?: number, SEQUENCE_FLAGS?: number, SEQUENCE_COUNT?: number, DATA_LENGTH?: number, DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SPP.d.ts.map