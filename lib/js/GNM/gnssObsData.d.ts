import * as flatbuffers from 'flatbuffers';
import { gnssObsType } from './gnssObsType.js';
/**
 * GNSS Observation Data Point
 */
export declare class gnssObsData implements flatbuffers.IUnpackableObject<gnssObsDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): gnssObsData;
    static getRootAsgnssObsData(bb: flatbuffers.ByteBuffer, obj?: gnssObsData): gnssObsData;
    static getSizePrefixedRootAsgnssObsData(bb: flatbuffers.ByteBuffer, obj?: gnssObsData): gnssObsData;
    /**
     * Signal type code (e.g., L1C, L2P, L5Q, E1B)
     */
    SIGNAL(): string | null;
    SIGNAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation type
     */
    OBS_TYPE(): gnssObsType;
    /**
     * Observation value (units depend on type: m, cycles, Hz, dB-Hz)
     */
    VALUE(): number;
    /**
     * Loss of lock indicator
     */
    LLI(): number;
    /**
     * Signal strength indicator (1-9)
     */
    SSI(): number;
    static startgnssObsData(builder: flatbuffers.Builder): void;
    static addSignal(builder: flatbuffers.Builder, SIGNALOffset: flatbuffers.Offset): void;
    static addObsType(builder: flatbuffers.Builder, OBS_TYPE: gnssObsType): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addLli(builder: flatbuffers.Builder, LLI: number): void;
    static addSsi(builder: flatbuffers.Builder, SSI: number): void;
    static endgnssObsData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static creategnssObsData(builder: flatbuffers.Builder, SIGNALOffset: flatbuffers.Offset, OBS_TYPE: gnssObsType, VALUE: number, LLI: number, SSI: number): flatbuffers.Offset;
    unpack(): gnssObsDataT;
    unpackTo(_o: gnssObsDataT): void;
}
export declare class gnssObsDataT implements flatbuffers.IGeneratedObject {
    SIGNAL: string | Uint8Array | null;
    OBS_TYPE: gnssObsType;
    VALUE: number;
    LLI: number;
    SSI: number;
    constructor(SIGNAL?: string | Uint8Array | null, OBS_TYPE?: gnssObsType, VALUE?: number, LLI?: number, SSI?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=gnssObsData.d.ts.map