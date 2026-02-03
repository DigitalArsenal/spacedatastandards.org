import * as flatbuffers from 'flatbuffers';
import { DataLinkType } from './DataLinkType.js';
/**
 * Communications Systems
 */
export declare class COM implements flatbuffers.IUnpackableObject<COMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COM;
    static getRootAsCOM(bb: flatbuffers.ByteBuffer, obj?: COM): COM;
    static getSizePrefixedRootAsCOM(bb: flatbuffers.ByteBuffer, obj?: COM): COM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    SYSTEM_ID(): number;
    ENTITY_ID(): number;
    IS_TRANSMITTING(): boolean;
    IS_RECEIVING(): boolean;
    CURRENT_FREQUENCY_HZ(): number;
    CURRENT_POWER_WATTS(): number;
    CURRENT_DATA_RATE_BPS(): number;
    MESSAGES_SENT(): bigint;
    MESSAGES_RECEIVED(): bigint;
    BYTES_SENT(): bigint;
    BYTES_RECEIVED(): bigint;
    CONNECTED_NODES(index: number): number | null;
    connectedNodesLength(): number;
    connectedNodesArray(): Uint32Array | null;
    ACTIVE_LINKS(index: number): DataLinkType | null;
    activeLinksLength(): number;
    activeLinksArray(): Int8Array | null;
    LAST_UPDATE_MS(): bigint;
    static startCOM(builder: flatbuffers.Builder): void;
    static addSystemId(builder: flatbuffers.Builder, SYSTEM_ID: number): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_ID: number): void;
    static addIsTransmitting(builder: flatbuffers.Builder, IS_TRANSMITTING: boolean): void;
    static addIsReceiving(builder: flatbuffers.Builder, IS_RECEIVING: boolean): void;
    static addCurrentFrequencyHz(builder: flatbuffers.Builder, CURRENT_FREQUENCY_HZ: number): void;
    static addCurrentPowerWatts(builder: flatbuffers.Builder, CURRENT_POWER_WATTS: number): void;
    static addCurrentDataRateBps(builder: flatbuffers.Builder, CURRENT_DATA_RATE_BPS: number): void;
    static addMessagesSent(builder: flatbuffers.Builder, MESSAGES_SENT: bigint): void;
    static addMessagesReceived(builder: flatbuffers.Builder, MESSAGES_RECEIVED: bigint): void;
    static addBytesSent(builder: flatbuffers.Builder, BYTES_SENT: bigint): void;
    static addBytesReceived(builder: flatbuffers.Builder, BYTES_RECEIVED: bigint): void;
    static addConnectedNodes(builder: flatbuffers.Builder, CONNECTED_NODESOffset: flatbuffers.Offset): void;
    static createConnectedNodesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConnectedNodesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConnectedNodesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addActiveLinks(builder: flatbuffers.Builder, ACTIVE_LINKSOffset: flatbuffers.Offset): void;
    static createActiveLinksVector(builder: flatbuffers.Builder, data: DataLinkType[]): flatbuffers.Offset;
    static startActiveLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLastUpdateMs(builder: flatbuffers.Builder, LAST_UPDATE_MS: bigint): void;
    static endCOM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCOMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCOMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCOM(builder: flatbuffers.Builder, SYSTEM_ID: number, ENTITY_ID: number, IS_TRANSMITTING: boolean, IS_RECEIVING: boolean, CURRENT_FREQUENCY_HZ: number, CURRENT_POWER_WATTS: number, CURRENT_DATA_RATE_BPS: number, MESSAGES_SENT: bigint, MESSAGES_RECEIVED: bigint, BYTES_SENT: bigint, BYTES_RECEIVED: bigint, CONNECTED_NODESOffset: flatbuffers.Offset, ACTIVE_LINKSOffset: flatbuffers.Offset, LAST_UPDATE_MS: bigint): flatbuffers.Offset;
    unpack(): COMT;
    unpackTo(_o: COMT): void;
}
export declare class COMT implements flatbuffers.IGeneratedObject {
    SYSTEM_ID: number;
    ENTITY_ID: number;
    IS_TRANSMITTING: boolean;
    IS_RECEIVING: boolean;
    CURRENT_FREQUENCY_HZ: number;
    CURRENT_POWER_WATTS: number;
    CURRENT_DATA_RATE_BPS: number;
    MESSAGES_SENT: bigint;
    MESSAGES_RECEIVED: bigint;
    BYTES_SENT: bigint;
    BYTES_RECEIVED: bigint;
    CONNECTED_NODES: (number)[];
    ACTIVE_LINKS: (DataLinkType)[];
    LAST_UPDATE_MS: bigint;
    constructor(SYSTEM_ID?: number, ENTITY_ID?: number, IS_TRANSMITTING?: boolean, IS_RECEIVING?: boolean, CURRENT_FREQUENCY_HZ?: number, CURRENT_POWER_WATTS?: number, CURRENT_DATA_RATE_BPS?: number, MESSAGES_SENT?: bigint, MESSAGES_RECEIVED?: bigint, BYTES_SENT?: bigint, BYTES_RECEIVED?: bigint, CONNECTED_NODES?: (number)[], ACTIVE_LINKS?: (DataLinkType)[], LAST_UPDATE_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COM.d.ts.map