import * as flatbuffers from 'flatbuffers';
import { pduType } from './pduType.js';
import { transmissionMode } from './transmissionMode.js';
/**
 * CCSDS File Delivery Protocol PDU (CCSDS 727.0-B-5)
 */
export declare class CFP implements flatbuffers.IUnpackableObject<CFPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CFP;
    static getRootAsCFP(bb: flatbuffers.ByteBuffer, obj?: CFP): CFP;
    static getSizePrefixedRootAsCFP(bb: flatbuffers.ByteBuffer, obj?: CFP): CFP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * PDU version
     */
    VERSION(): number;
    /**
     * PDU type
     */
    PDU_TYPE(): pduType;
    /**
     * Direction (toward receiver or sender)
     */
    DIRECTION(): number;
    /**
     * Transmission mode
     */
    TRANSMISSION_MODE(): transmissionMode;
    /**
     * CRC present flag
     */
    CRC_FLAG(): boolean;
    /**
     * Large file flag
     */
    LARGE_FILE_FLAG(): boolean;
    /**
     * Data field length
     */
    DATA_FIELD_LENGTH(): number;
    /**
     * Source entity ID
     */
    SOURCE_ENTITY_ID(): bigint;
    /**
     * Transaction sequence number
     */
    TRANSACTION_SEQ_NUM(): bigint;
    /**
     * Destination entity ID
     */
    DESTINATION_ENTITY_ID(): bigint;
    /**
     * File checksum type
     */
    CHECKSUM_TYPE(): number;
    /**
     * File size
     */
    FILE_SIZE(): bigint;
    /**
     * Source filename
     */
    SOURCE_FILENAME(): string | null;
    SOURCE_FILENAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Destination filename
     */
    DESTINATION_FILENAME(): string | null;
    DESTINATION_FILENAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * PDU data
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    static startCFP(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addPduType(builder: flatbuffers.Builder, PDU_TYPE: pduType): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: number): void;
    static addTransmissionMode(builder: flatbuffers.Builder, TRANSMISSION_MODE: transmissionMode): void;
    static addCrcFlag(builder: flatbuffers.Builder, CRC_FLAG: boolean): void;
    static addLargeFileFlag(builder: flatbuffers.Builder, LARGE_FILE_FLAG: boolean): void;
    static addDataFieldLength(builder: flatbuffers.Builder, DATA_FIELD_LENGTH: number): void;
    static addSourceEntityId(builder: flatbuffers.Builder, SOURCE_ENTITY_ID: bigint): void;
    static addTransactionSeqNum(builder: flatbuffers.Builder, TRANSACTION_SEQ_NUM: bigint): void;
    static addDestinationEntityId(builder: flatbuffers.Builder, DESTINATION_ENTITY_ID: bigint): void;
    static addChecksumType(builder: flatbuffers.Builder, CHECKSUM_TYPE: number): void;
    static addFileSize(builder: flatbuffers.Builder, FILE_SIZE: bigint): void;
    static addSourceFilename(builder: flatbuffers.Builder, SOURCE_FILENAMEOffset: flatbuffers.Offset): void;
    static addDestinationFilename(builder: flatbuffers.Builder, DESTINATION_FILENAMEOffset: flatbuffers.Offset): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCFP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCFPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCFPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCFP(builder: flatbuffers.Builder, VERSION: number, PDU_TYPE: pduType, DIRECTION: number, TRANSMISSION_MODE: transmissionMode, CRC_FLAG: boolean, LARGE_FILE_FLAG: boolean, DATA_FIELD_LENGTH: number, SOURCE_ENTITY_ID: bigint, TRANSACTION_SEQ_NUM: bigint, DESTINATION_ENTITY_ID: bigint, CHECKSUM_TYPE: number, FILE_SIZE: bigint, SOURCE_FILENAMEOffset: flatbuffers.Offset, DESTINATION_FILENAMEOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CFPT;
    unpackTo(_o: CFPT): void;
}
export declare class CFPT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    PDU_TYPE: pduType;
    DIRECTION: number;
    TRANSMISSION_MODE: transmissionMode;
    CRC_FLAG: boolean;
    LARGE_FILE_FLAG: boolean;
    DATA_FIELD_LENGTH: number;
    SOURCE_ENTITY_ID: bigint;
    TRANSACTION_SEQ_NUM: bigint;
    DESTINATION_ENTITY_ID: bigint;
    CHECKSUM_TYPE: number;
    FILE_SIZE: bigint;
    SOURCE_FILENAME: string | Uint8Array | null;
    DESTINATION_FILENAME: string | Uint8Array | null;
    DATA: (number)[];
    constructor(VERSION?: number, PDU_TYPE?: pduType, DIRECTION?: number, TRANSMISSION_MODE?: transmissionMode, CRC_FLAG?: boolean, LARGE_FILE_FLAG?: boolean, DATA_FIELD_LENGTH?: number, SOURCE_ENTITY_ID?: bigint, TRANSACTION_SEQ_NUM?: bigint, DESTINATION_ENTITY_ID?: bigint, CHECKSUM_TYPE?: number, FILE_SIZE?: bigint, SOURCE_FILENAME?: string | Uint8Array | null, DESTINATION_FILENAME?: string | Uint8Array | null, DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CFP.d.ts.map