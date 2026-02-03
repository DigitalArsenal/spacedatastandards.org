import * as flatbuffers from 'flatbuffers';
/**
 * Telemetry Transfer Frame (CCSDS 132.0-B-2)
 */
export declare class TMF implements flatbuffers.IUnpackableObject<TMFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMF;
    static getRootAsTMF(bb: flatbuffers.ByteBuffer, obj?: TMF): TMF;
    static getSizePrefixedRootAsTMF(bb: flatbuffers.ByteBuffer, obj?: TMF): TMF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Transfer frame version
     */
    VERSION(): number;
    /**
     * Spacecraft identifier
     */
    SPACECRAFT_ID(): number;
    /**
     * Virtual channel identifier
     */
    VIRTUAL_CHANNEL_ID(): number;
    /**
     * Operational control field flag
     */
    OCF_FLAG(): boolean;
    /**
     * Master channel frame count
     */
    MASTER_FRAME_COUNT(): number;
    /**
     * Virtual channel frame count
     */
    VIRTUAL_FRAME_COUNT(): number;
    /**
     * Secondary header flag
     */
    SEC_HDR_FLAG(): boolean;
    /**
     * Synchronization flag
     */
    SYNCH_FLAG(): boolean;
    /**
     * Packet order flag
     */
    PACKET_ORDER_FLAG(): boolean;
    /**
     * Segment length identifier
     */
    SEGMENT_LENGTH_ID(): number;
    /**
     * First header pointer
     */
    FIRST_HDR_POINTER(): number;
    /**
     * Data field
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    /**
     * Operational control field
     */
    OCF(index: number): number | null;
    ocfLength(): number;
    ocfArray(): Uint8Array | null;
    /**
     * Frame error control field
     */
    FECF(): number;
    static startTMF(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addSpacecraftId(builder: flatbuffers.Builder, SPACECRAFT_ID: number): void;
    static addVirtualChannelId(builder: flatbuffers.Builder, VIRTUAL_CHANNEL_ID: number): void;
    static addOcfFlag(builder: flatbuffers.Builder, OCF_FLAG: boolean): void;
    static addMasterFrameCount(builder: flatbuffers.Builder, MASTER_FRAME_COUNT: number): void;
    static addVirtualFrameCount(builder: flatbuffers.Builder, VIRTUAL_FRAME_COUNT: number): void;
    static addSecHdrFlag(builder: flatbuffers.Builder, SEC_HDR_FLAG: boolean): void;
    static addSynchFlag(builder: flatbuffers.Builder, SYNCH_FLAG: boolean): void;
    static addPacketOrderFlag(builder: flatbuffers.Builder, PACKET_ORDER_FLAG: boolean): void;
    static addSegmentLengthId(builder: flatbuffers.Builder, SEGMENT_LENGTH_ID: number): void;
    static addFirstHdrPointer(builder: flatbuffers.Builder, FIRST_HDR_POINTER: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOcf(builder: flatbuffers.Builder, OCFOffset: flatbuffers.Offset): void;
    static createOcfVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOcfVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFecf(builder: flatbuffers.Builder, FECF: number): void;
    static endTMF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTMFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTMFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTMF(builder: flatbuffers.Builder, VERSION: number, SPACECRAFT_ID: number, VIRTUAL_CHANNEL_ID: number, OCF_FLAG: boolean, MASTER_FRAME_COUNT: number, VIRTUAL_FRAME_COUNT: number, SEC_HDR_FLAG: boolean, SYNCH_FLAG: boolean, PACKET_ORDER_FLAG: boolean, SEGMENT_LENGTH_ID: number, FIRST_HDR_POINTER: number, DATAOffset: flatbuffers.Offset, OCFOffset: flatbuffers.Offset, FECF: number): flatbuffers.Offset;
    unpack(): TMFT;
    unpackTo(_o: TMFT): void;
}
export declare class TMFT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    SPACECRAFT_ID: number;
    VIRTUAL_CHANNEL_ID: number;
    OCF_FLAG: boolean;
    MASTER_FRAME_COUNT: number;
    VIRTUAL_FRAME_COUNT: number;
    SEC_HDR_FLAG: boolean;
    SYNCH_FLAG: boolean;
    PACKET_ORDER_FLAG: boolean;
    SEGMENT_LENGTH_ID: number;
    FIRST_HDR_POINTER: number;
    DATA: (number)[];
    OCF: (number)[];
    FECF: number;
    constructor(VERSION?: number, SPACECRAFT_ID?: number, VIRTUAL_CHANNEL_ID?: number, OCF_FLAG?: boolean, MASTER_FRAME_COUNT?: number, VIRTUAL_FRAME_COUNT?: number, SEC_HDR_FLAG?: boolean, SYNCH_FLAG?: boolean, PACKET_ORDER_FLAG?: boolean, SEGMENT_LENGTH_ID?: number, FIRST_HDR_POINTER?: number, DATA?: (number)[], OCF?: (number)[], FECF?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMF.d.ts.map