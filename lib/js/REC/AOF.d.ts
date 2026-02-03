import * as flatbuffers from 'flatbuffers';
/**
 * AOS Transfer Frame (CCSDS 732.0-B-3)
 */
export declare class AOF implements flatbuffers.IUnpackableObject<AOFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AOF;
    static getRootAsAOF(bb: flatbuffers.ByteBuffer, obj?: AOF): AOF;
    static getSizePrefixedRootAsAOF(bb: flatbuffers.ByteBuffer, obj?: AOF): AOF;
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
     * Virtual channel frame count
     */
    VIRTUAL_FRAME_COUNT(): number;
    /**
     * Replay flag
     */
    REPLAY_FLAG(): boolean;
    /**
     * VC frame count usage flag
     */
    VC_FRAME_COUNT_USAGE(): boolean;
    /**
     * VC frame count cycle
     */
    VC_FRAME_COUNT_CYCLE(): number;
    /**
     * Insert zone
     */
    INSERT_ZONE(index: number): number | null;
    insertZoneLength(): number;
    insertZoneArray(): Uint8Array | null;
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
    static startAOF(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addSpacecraftId(builder: flatbuffers.Builder, SPACECRAFT_ID: number): void;
    static addVirtualChannelId(builder: flatbuffers.Builder, VIRTUAL_CHANNEL_ID: number): void;
    static addVirtualFrameCount(builder: flatbuffers.Builder, VIRTUAL_FRAME_COUNT: number): void;
    static addReplayFlag(builder: flatbuffers.Builder, REPLAY_FLAG: boolean): void;
    static addVcFrameCountUsage(builder: flatbuffers.Builder, VC_FRAME_COUNT_USAGE: boolean): void;
    static addVcFrameCountCycle(builder: flatbuffers.Builder, VC_FRAME_COUNT_CYCLE: number): void;
    static addInsertZone(builder: flatbuffers.Builder, INSERT_ZONEOffset: flatbuffers.Offset): void;
    static createInsertZoneVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInsertZoneVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOcf(builder: flatbuffers.Builder, OCFOffset: flatbuffers.Offset): void;
    static createOcfVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOcfVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFecf(builder: flatbuffers.Builder, FECF: number): void;
    static endAOF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAOFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAOFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAOF(builder: flatbuffers.Builder, VERSION: number, SPACECRAFT_ID: number, VIRTUAL_CHANNEL_ID: number, VIRTUAL_FRAME_COUNT: number, REPLAY_FLAG: boolean, VC_FRAME_COUNT_USAGE: boolean, VC_FRAME_COUNT_CYCLE: number, INSERT_ZONEOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, OCFOffset: flatbuffers.Offset, FECF: number): flatbuffers.Offset;
    unpack(): AOFT;
    unpackTo(_o: AOFT): void;
}
export declare class AOFT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    SPACECRAFT_ID: number;
    VIRTUAL_CHANNEL_ID: number;
    VIRTUAL_FRAME_COUNT: number;
    REPLAY_FLAG: boolean;
    VC_FRAME_COUNT_USAGE: boolean;
    VC_FRAME_COUNT_CYCLE: number;
    INSERT_ZONE: (number)[];
    DATA: (number)[];
    OCF: (number)[];
    FECF: number;
    constructor(VERSION?: number, SPACECRAFT_ID?: number, VIRTUAL_CHANNEL_ID?: number, VIRTUAL_FRAME_COUNT?: number, REPLAY_FLAG?: boolean, VC_FRAME_COUNT_USAGE?: boolean, VC_FRAME_COUNT_CYCLE?: number, INSERT_ZONE?: (number)[], DATA?: (number)[], OCF?: (number)[], FECF?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AOF.d.ts.map