import * as flatbuffers from 'flatbuffers';
import { NHSThroughputSample, NHSThroughputSampleT } from './NHSThroughputSample.js';
import { nhsServiceState } from './nhsServiceState.js';
/**
 * Node Health Status - one snapshot of a node's own health.
 */
export declare class NHS implements flatbuffers.IUnpackableObject<NHST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NHS;
    static getRootAsNHS(bb: flatbuffers.ByteBuffer, obj?: NHS): NHS;
    static getSizePrefixedRootAsNHS(bb: flatbuffers.ByteBuffer, obj?: NHS): NHS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the node reporting (a peer identifier, host name or asset
     * identifier).
     */
    NODE_ID(): string | null;
    NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds when the snapshot was taken.
     */
    GENERATED_AT_MS(): bigint;
    /**
     * Unix milliseconds when the service started; 0 = unknown.
     */
    STARTED_AT_MS(): bigint;
    /**
     * Seconds the service has been running.
     */
    UPTIME_S(): bigint;
    SERVICE_STATE(): nhsServiceState;
    /**
     * Operating mode the service runs in, as the service names it, e.g.
     * "full", "edge", "relay", "maintenance".
     */
    SERVICE_MODE(): string | null;
    SERVICE_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Software name and version of the service, e.g. "sdn-server 1.4.2".
     */
    SOFTWARE_VERSION(): string | null;
    SOFTWARE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Location of the node's data store (a path or URI).
     */
    STORAGE_PATH(): string | null;
    STORAGE_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Records the node's data store holds.
     */
    STORE_TOTAL_RECORDS(): bigint;
    /**
     * Bytes the node's data store occupies.
     */
    STORE_TOTAL_BYTES(): bigint;
    /**
     * True when the disk figures below were measured.
     */
    HAS_DISK(): boolean;
    /**
     * Capacity of the volume holding the store, bytes.
     */
    DISK_CAPACITY_BYTES(): bigint;
    /**
     * Free bytes on that volume.
     */
    DISK_FREE_BYTES(): bigint;
    /**
     * Bytes on that volume available to the service (free bytes less any
     * reserve the service may not use).
     */
    DISK_AVAILABLE_BYTES(): bigint;
    /**
     * True when the network figures below were measured.
     */
    HAS_NETWORK(): boolean;
    /**
     * Total bytes received since the service started.
     */
    TOTAL_IN_BYTES(): bigint;
    /**
     * Total bytes sent since the service started.
     */
    TOTAL_OUT_BYTES(): bigint;
    /**
     * Current receive rate, bytes per second.
     */
    RATE_IN_BPS(): number;
    /**
     * Current send rate, bytes per second.
     */
    RATE_OUT_BPS(): number;
    /**
     * Recent throughput, oldest first.
     */
    THROUGHPUT_HISTORY(index: number, obj?: NHSThroughputSample): NHSThroughputSample | null;
    throughputHistoryLength(): number;
    /**
     * True when the processor and memory figures below were measured.
     */
    HAS_COMPUTE(): boolean;
    /**
     * Processor load, 0..1 of all cores.
     */
    CPU_LOAD(): number;
    /**
     * Processor cores available to the service.
     */
    CPU_CORES(): number;
    /**
     * Memory the service uses, bytes.
     */
    MEMORY_USED_BYTES(): bigint;
    /**
     * Memory available to the service, bytes.
     */
    MEMORY_TOTAL_BYTES(): bigint;
    /**
     * Peers or clients currently connected; 0 = none or not measured.
     */
    CONNECTION_COUNT(): number;
    /**
     * Short human-readable notes on anything degraded, e.g. "disk 92% full".
     */
    NOTES(index: number): string;
    NOTES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    notesLength(): number;
    static startNHS(builder: flatbuffers.Builder): void;
    static addNodeId(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addStartedAtMs(builder: flatbuffers.Builder, STARTED_AT_MS: bigint): void;
    static addUptimeS(builder: flatbuffers.Builder, UPTIME_S: bigint): void;
    static addServiceState(builder: flatbuffers.Builder, SERVICE_STATE: nhsServiceState): void;
    static addServiceMode(builder: flatbuffers.Builder, SERVICE_MODEOffset: flatbuffers.Offset): void;
    static addSoftwareVersion(builder: flatbuffers.Builder, SOFTWARE_VERSIONOffset: flatbuffers.Offset): void;
    static addStoragePath(builder: flatbuffers.Builder, STORAGE_PATHOffset: flatbuffers.Offset): void;
    static addStoreTotalRecords(builder: flatbuffers.Builder, STORE_TOTAL_RECORDS: bigint): void;
    static addStoreTotalBytes(builder: flatbuffers.Builder, STORE_TOTAL_BYTES: bigint): void;
    static addHasDisk(builder: flatbuffers.Builder, HAS_DISK: boolean): void;
    static addDiskCapacityBytes(builder: flatbuffers.Builder, DISK_CAPACITY_BYTES: bigint): void;
    static addDiskFreeBytes(builder: flatbuffers.Builder, DISK_FREE_BYTES: bigint): void;
    static addDiskAvailableBytes(builder: flatbuffers.Builder, DISK_AVAILABLE_BYTES: bigint): void;
    static addHasNetwork(builder: flatbuffers.Builder, HAS_NETWORK: boolean): void;
    static addTotalInBytes(builder: flatbuffers.Builder, TOTAL_IN_BYTES: bigint): void;
    static addTotalOutBytes(builder: flatbuffers.Builder, TOTAL_OUT_BYTES: bigint): void;
    static addRateInBps(builder: flatbuffers.Builder, RATE_IN_BPS: number): void;
    static addRateOutBps(builder: flatbuffers.Builder, RATE_OUT_BPS: number): void;
    static addThroughputHistory(builder: flatbuffers.Builder, THROUGHPUT_HISTORYOffset: flatbuffers.Offset): void;
    static createThroughputHistoryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThroughputHistoryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasCompute(builder: flatbuffers.Builder, HAS_COMPUTE: boolean): void;
    static addCpuLoad(builder: flatbuffers.Builder, CPU_LOAD: number): void;
    static addCpuCores(builder: flatbuffers.Builder, CPU_CORES: number): void;
    static addMemoryUsedBytes(builder: flatbuffers.Builder, MEMORY_USED_BYTES: bigint): void;
    static addMemoryTotalBytes(builder: flatbuffers.Builder, MEMORY_TOTAL_BYTES: bigint): void;
    static addConnectionCount(builder: flatbuffers.Builder, CONNECTION_COUNT: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static createNotesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNotesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endNHS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNHSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNHSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createNHS(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset, GENERATED_AT_MS: bigint, STARTED_AT_MS: bigint, UPTIME_S: bigint, SERVICE_STATE: nhsServiceState, SERVICE_MODEOffset: flatbuffers.Offset, SOFTWARE_VERSIONOffset: flatbuffers.Offset, STORAGE_PATHOffset: flatbuffers.Offset, STORE_TOTAL_RECORDS: bigint, STORE_TOTAL_BYTES: bigint, HAS_DISK: boolean, DISK_CAPACITY_BYTES: bigint, DISK_FREE_BYTES: bigint, DISK_AVAILABLE_BYTES: bigint, HAS_NETWORK: boolean, TOTAL_IN_BYTES: bigint, TOTAL_OUT_BYTES: bigint, RATE_IN_BPS: number, RATE_OUT_BPS: number, THROUGHPUT_HISTORYOffset: flatbuffers.Offset, HAS_COMPUTE: boolean, CPU_LOAD: number, CPU_CORES: number, MEMORY_USED_BYTES: bigint, MEMORY_TOTAL_BYTES: bigint, CONNECTION_COUNT: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NHST;
    unpackTo(_o: NHST): void;
}
export declare class NHST implements flatbuffers.IGeneratedObject {
    NODE_ID: string | Uint8Array | null;
    GENERATED_AT_MS: bigint;
    STARTED_AT_MS: bigint;
    UPTIME_S: bigint;
    SERVICE_STATE: nhsServiceState;
    SERVICE_MODE: string | Uint8Array | null;
    SOFTWARE_VERSION: string | Uint8Array | null;
    STORAGE_PATH: string | Uint8Array | null;
    STORE_TOTAL_RECORDS: bigint;
    STORE_TOTAL_BYTES: bigint;
    HAS_DISK: boolean;
    DISK_CAPACITY_BYTES: bigint;
    DISK_FREE_BYTES: bigint;
    DISK_AVAILABLE_BYTES: bigint;
    HAS_NETWORK: boolean;
    TOTAL_IN_BYTES: bigint;
    TOTAL_OUT_BYTES: bigint;
    RATE_IN_BPS: number;
    RATE_OUT_BPS: number;
    THROUGHPUT_HISTORY: (NHSThroughputSampleT)[];
    HAS_COMPUTE: boolean;
    CPU_LOAD: number;
    CPU_CORES: number;
    MEMORY_USED_BYTES: bigint;
    MEMORY_TOTAL_BYTES: bigint;
    CONNECTION_COUNT: number;
    NOTES: (string)[];
    constructor(NODE_ID?: string | Uint8Array | null, GENERATED_AT_MS?: bigint, STARTED_AT_MS?: bigint, UPTIME_S?: bigint, SERVICE_STATE?: nhsServiceState, SERVICE_MODE?: string | Uint8Array | null, SOFTWARE_VERSION?: string | Uint8Array | null, STORAGE_PATH?: string | Uint8Array | null, STORE_TOTAL_RECORDS?: bigint, STORE_TOTAL_BYTES?: bigint, HAS_DISK?: boolean, DISK_CAPACITY_BYTES?: bigint, DISK_FREE_BYTES?: bigint, DISK_AVAILABLE_BYTES?: bigint, HAS_NETWORK?: boolean, TOTAL_IN_BYTES?: bigint, TOTAL_OUT_BYTES?: bigint, RATE_IN_BPS?: number, RATE_OUT_BPS?: number, THROUGHPUT_HISTORY?: (NHSThroughputSampleT)[], HAS_COMPUTE?: boolean, CPU_LOAD?: number, CPU_CORES?: number, MEMORY_USED_BYTES?: bigint, MEMORY_TOTAL_BYTES?: bigint, CONNECTION_COUNT?: number, NOTES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NHS.d.ts.map