import * as flatbuffers from 'flatbuffers';
import { mtiStandard } from './mtiStandard.js';
/**
 * Moving Target Indicator
 */
export declare class MTI implements flatbuffers.IUnpackableObject<MTIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MTI;
    static getRootAsMTI(bb: flatbuffers.ByteBuffer, obj?: MTI): MTI;
    static getSizePrefixedRootAsMTI(bb: flatbuffers.ByteBuffer, obj?: MTI): MTI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MTI standard (e.g., STANAG 4607)
     */
    STANDARD(): mtiStandard;
    /**
     * Platform type (P3 field)
     */
    P3(): string | null;
    P3(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Platform activity (P6 field)
     */
    P6(): string | null;
    P6(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor type (P7 field)
     */
    P7(): string | null;
    P7(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor model (P8 field)
     */
    P8(): string | null;
    P8(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference time code (P9)
     */
    P9(): number;
    /**
     * Security classification (P10)
     */
    P10(): number;
    /**
     * Mission segment identifiers
     */
    MISSIONS(index: number): string;
    MISSIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    missionsLength(): number;
    /**
     * Dwell segment data references
     */
    DWELLS(index: number): string;
    DWELLS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dwellsLength(): number;
    /**
     * High range resolution profile references
     */
    HRRS(index: number): string;
    HRRS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    hrrsLength(): number;
    /**
     * Job definition references
     */
    JOB_DEFS(index: number): string;
    JOB_DEFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    jobDefsLength(): number;
    /**
     * Free text entries
     */
    FREE_TEXTS(index: number): string;
    FREE_TEXTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    freeTextsLength(): number;
    /**
     * Platform location data references
     */
    PLATFORM_LOCS(index: number): string;
    PLATFORM_LOCS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    platformLocsLength(): number;
    /**
     * Job request references
     */
    JOB_REQUESTS(index: number): string;
    JOB_REQUESTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    jobRequestsLength(): number;
    static startMTI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addStandard(builder: flatbuffers.Builder, STANDARD: mtiStandard): void;
    static addP3(builder: flatbuffers.Builder, P3Offset: flatbuffers.Offset): void;
    static addP6(builder: flatbuffers.Builder, P6Offset: flatbuffers.Offset): void;
    static addP7(builder: flatbuffers.Builder, P7Offset: flatbuffers.Offset): void;
    static addP8(builder: flatbuffers.Builder, P8Offset: flatbuffers.Offset): void;
    static addP9(builder: flatbuffers.Builder, P9: number): void;
    static addP10(builder: flatbuffers.Builder, P10: number): void;
    static addMissions(builder: flatbuffers.Builder, MISSIONSOffset: flatbuffers.Offset): void;
    static createMissionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMissionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDwells(builder: flatbuffers.Builder, DWELLSOffset: flatbuffers.Offset): void;
    static createDwellsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDwellsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHrrs(builder: flatbuffers.Builder, HRRSOffset: flatbuffers.Offset): void;
    static createHrrsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHrrsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addJobDefs(builder: flatbuffers.Builder, JOB_DEFSOffset: flatbuffers.Offset): void;
    static createJobDefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startJobDefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFreeTexts(builder: flatbuffers.Builder, FREE_TEXTSOffset: flatbuffers.Offset): void;
    static createFreeTextsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFreeTextsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlatformLocs(builder: flatbuffers.Builder, PLATFORM_LOCSOffset: flatbuffers.Offset): void;
    static createPlatformLocsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlatformLocsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addJobRequests(builder: flatbuffers.Builder, JOB_REQUESTSOffset: flatbuffers.Offset): void;
    static createJobRequestsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startJobRequestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMTI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMTIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMTIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMTI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, STANDARD: mtiStandard, P3Offset: flatbuffers.Offset, P6Offset: flatbuffers.Offset, P7Offset: flatbuffers.Offset, P8Offset: flatbuffers.Offset, P9: number, P10: number, MISSIONSOffset: flatbuffers.Offset, DWELLSOffset: flatbuffers.Offset, HRRSOffset: flatbuffers.Offset, JOB_DEFSOffset: flatbuffers.Offset, FREE_TEXTSOffset: flatbuffers.Offset, PLATFORM_LOCSOffset: flatbuffers.Offset, JOB_REQUESTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MTIT;
    unpackTo(_o: MTIT): void;
}
export declare class MTIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    STANDARD: mtiStandard;
    P3: string | Uint8Array | null;
    P6: string | Uint8Array | null;
    P7: string | Uint8Array | null;
    P8: string | Uint8Array | null;
    P9: number;
    P10: number;
    MISSIONS: (string)[];
    DWELLS: (string)[];
    HRRS: (string)[];
    JOB_DEFS: (string)[];
    FREE_TEXTS: (string)[];
    PLATFORM_LOCS: (string)[];
    JOB_REQUESTS: (string)[];
    constructor(ID?: string | Uint8Array | null, STANDARD?: mtiStandard, P3?: string | Uint8Array | null, P6?: string | Uint8Array | null, P7?: string | Uint8Array | null, P8?: string | Uint8Array | null, P9?: number, P10?: number, MISSIONS?: (string)[], DWELLS?: (string)[], HRRS?: (string)[], JOB_DEFS?: (string)[], FREE_TEXTS?: (string)[], PLATFORM_LOCS?: (string)[], JOB_REQUESTS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MTI.d.ts.map