import * as flatbuffers from 'flatbuffers';
/**
 * Telecommand Transfer Frame (CCSDS 232.0-B-3)
 */
export declare class TCF implements flatbuffers.IUnpackableObject<TCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TCF;
    static getRootAsTCF(bb: flatbuffers.ByteBuffer, obj?: TCF): TCF;
    static getSizePrefixedRootAsTCF(bb: flatbuffers.ByteBuffer, obj?: TCF): TCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Transfer frame version
     */
    VERSION(): number;
    /**
     * Bypass flag
     */
    BYPASS_FLAG(): boolean;
    /**
     * Control command flag
     */
    CONTROL_CMD_FLAG(): boolean;
    /**
     * Spacecraft identifier
     */
    SPACECRAFT_ID(): number;
    /**
     * Virtual channel identifier
     */
    VIRTUAL_CHANNEL_ID(): number;
    /**
     * Frame length
     */
    FRAME_LENGTH(): number;
    /**
     * Frame sequence number
     */
    FRAME_SEQUENCE_NUM(): number;
    /**
     * Data field
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    /**
     * Frame error control field
     */
    FECF(): number;
    static startTCF(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addBypassFlag(builder: flatbuffers.Builder, BYPASS_FLAG: boolean): void;
    static addControlCmdFlag(builder: flatbuffers.Builder, CONTROL_CMD_FLAG: boolean): void;
    static addSpacecraftId(builder: flatbuffers.Builder, SPACECRAFT_ID: number): void;
    static addVirtualChannelId(builder: flatbuffers.Builder, VIRTUAL_CHANNEL_ID: number): void;
    static addFrameLength(builder: flatbuffers.Builder, FRAME_LENGTH: number): void;
    static addFrameSequenceNum(builder: flatbuffers.Builder, FRAME_SEQUENCE_NUM: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFecf(builder: flatbuffers.Builder, FECF: number): void;
    static endTCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTCF(builder: flatbuffers.Builder, VERSION: number, BYPASS_FLAG: boolean, CONTROL_CMD_FLAG: boolean, SPACECRAFT_ID: number, VIRTUAL_CHANNEL_ID: number, FRAME_LENGTH: number, FRAME_SEQUENCE_NUM: number, DATAOffset: flatbuffers.Offset, FECF: number): flatbuffers.Offset;
    unpack(): TCFT;
    unpackTo(_o: TCFT): void;
}
export declare class TCFT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    BYPASS_FLAG: boolean;
    CONTROL_CMD_FLAG: boolean;
    SPACECRAFT_ID: number;
    VIRTUAL_CHANNEL_ID: number;
    FRAME_LENGTH: number;
    FRAME_SEQUENCE_NUM: number;
    DATA: (number)[];
    FECF: number;
    constructor(VERSION?: number, BYPASS_FLAG?: boolean, CONTROL_CMD_FLAG?: boolean, SPACECRAFT_ID?: number, VIRTUAL_CHANNEL_ID?: number, FRAME_LENGTH?: number, FRAME_SEQUENCE_NUM?: number, DATA?: (number)[], FECF?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TCF.d.ts.map