import * as flatbuffers from 'flatbuffers';
import { linkState } from './linkState.js';
import { linkType } from './linkType.js';
/**
 * Link Status
 */
export declare class LKS implements flatbuffers.IUnpackableObject<LKST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LKS;
    static getRootAsLKS(bb: flatbuffers.ByteBuffer, obj?: LKS): LKS;
    static getSizePrefixedRootAsLKS(bb: flatbuffers.ByteBuffer, obj?: LKS): LKS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First endpoint on-orbit identifier
     */
    ID_ON_ORBIT1(): string | null;
    ID_ON_ORBIT1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First endpoint satellite catalog number
     */
    SAT_NO1(): number;
    /**
     * Second endpoint on-orbit identifier
     */
    ID_ON_ORBIT2(): string | null;
    ID_ON_ORBIT2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second endpoint satellite catalog number
     */
    SAT_NO2(): number;
    /**
     * Constellation name
     */
    CONSTELLATION(): string | null;
    CONSTELLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link name or identifier
     */
    LINK_NAME(): string | null;
    LINK_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link type
     */
    LINK_TYPE(): linkType;
    /**
     * Link state
     */
    LINK_STATE(): linkState;
    /**
     * RF band
     */
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link start time (ISO 8601)
     */
    LINK_START_TIME(): string | null;
    LINK_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link stop time (ISO 8601)
     */
    LINK_STOP_TIME(): string | null;
    LINK_STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First endpoint beam identifier
     */
    ID_BEAM1(): string | null;
    ID_BEAM1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First endpoint name
     */
    END_POINT1_NAME(): string | null;
    END_POINT1_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First endpoint latitude (degrees)
     */
    END_POINT1_LAT(): number;
    /**
     * First endpoint longitude (degrees)
     */
    END_POINT1_LON(): number;
    /**
     * Second endpoint beam identifier
     */
    ID_BEAM2(): string | null;
    ID_BEAM2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second endpoint name
     */
    END_POINT2_NAME(): string | null;
    END_POINT2_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second endpoint latitude (degrees)
     */
    END_POINT2_LAT(): number;
    /**
     * Second endpoint longitude (degrees)
     */
    END_POINT2_LON(): number;
    /**
     * Data rate from endpoint 1 to 2 (Mbps)
     */
    DATA_RATE1_TO2(): number;
    /**
     * Data rate from endpoint 2 to 1 (Mbps)
     */
    DATA_RATE2_TO1(): number;
    /**
     * System capability status
     */
    SYS_CAP(): string | null;
    SYS_CAP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operational capability status
     */
    OPS_CAP(): string | null;
    OPS_CAP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLKS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdOnOrbit1(builder: flatbuffers.Builder, ID_ON_ORBIT1Offset: flatbuffers.Offset): void;
    static addSatNo1(builder: flatbuffers.Builder, SAT_NO1: number): void;
    static addIdOnOrbit2(builder: flatbuffers.Builder, ID_ON_ORBIT2Offset: flatbuffers.Offset): void;
    static addSatNo2(builder: flatbuffers.Builder, SAT_NO2: number): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addLinkName(builder: flatbuffers.Builder, LINK_NAMEOffset: flatbuffers.Offset): void;
    static addLinkType(builder: flatbuffers.Builder, LINK_TYPE: linkType): void;
    static addLinkState(builder: flatbuffers.Builder, LINK_STATE: linkState): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addLinkStartTime(builder: flatbuffers.Builder, LINK_START_TIMEOffset: flatbuffers.Offset): void;
    static addLinkStopTime(builder: flatbuffers.Builder, LINK_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addIdBeam1(builder: flatbuffers.Builder, ID_BEAM1Offset: flatbuffers.Offset): void;
    static addEndPoint1Name(builder: flatbuffers.Builder, END_POINT1_NAMEOffset: flatbuffers.Offset): void;
    static addEndPoint1Lat(builder: flatbuffers.Builder, END_POINT1_LAT: number): void;
    static addEndPoint1Lon(builder: flatbuffers.Builder, END_POINT1_LON: number): void;
    static addIdBeam2(builder: flatbuffers.Builder, ID_BEAM2Offset: flatbuffers.Offset): void;
    static addEndPoint2Name(builder: flatbuffers.Builder, END_POINT2_NAMEOffset: flatbuffers.Offset): void;
    static addEndPoint2Lat(builder: flatbuffers.Builder, END_POINT2_LAT: number): void;
    static addEndPoint2Lon(builder: flatbuffers.Builder, END_POINT2_LON: number): void;
    static addDataRate1To2(builder: flatbuffers.Builder, DATA_RATE1_TO2: number): void;
    static addDataRate2To1(builder: flatbuffers.Builder, DATA_RATE2_TO1: number): void;
    static addSysCap(builder: flatbuffers.Builder, SYS_CAPOffset: flatbuffers.Offset): void;
    static addOpsCap(builder: flatbuffers.Builder, OPS_CAPOffset: flatbuffers.Offset): void;
    static endLKS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLKSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLKSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLKS(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ON_ORBIT1Offset: flatbuffers.Offset, SAT_NO1: number, ID_ON_ORBIT2Offset: flatbuffers.Offset, SAT_NO2: number, CONSTELLATIONOffset: flatbuffers.Offset, LINK_NAMEOffset: flatbuffers.Offset, LINK_TYPE: linkType, LINK_STATE: linkState, BANDOffset: flatbuffers.Offset, LINK_START_TIMEOffset: flatbuffers.Offset, LINK_STOP_TIMEOffset: flatbuffers.Offset, ID_BEAM1Offset: flatbuffers.Offset, END_POINT1_NAMEOffset: flatbuffers.Offset, END_POINT1_LAT: number, END_POINT1_LON: number, ID_BEAM2Offset: flatbuffers.Offset, END_POINT2_NAMEOffset: flatbuffers.Offset, END_POINT2_LAT: number, END_POINT2_LON: number, DATA_RATE1_TO2: number, DATA_RATE2_TO1: number, SYS_CAPOffset: flatbuffers.Offset, OPS_CAPOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LKST;
    unpackTo(_o: LKST): void;
}
export declare class LKST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ON_ORBIT1: string | Uint8Array | null;
    SAT_NO1: number;
    ID_ON_ORBIT2: string | Uint8Array | null;
    SAT_NO2: number;
    CONSTELLATION: string | Uint8Array | null;
    LINK_NAME: string | Uint8Array | null;
    LINK_TYPE: linkType;
    LINK_STATE: linkState;
    BAND: string | Uint8Array | null;
    LINK_START_TIME: string | Uint8Array | null;
    LINK_STOP_TIME: string | Uint8Array | null;
    ID_BEAM1: string | Uint8Array | null;
    END_POINT1_NAME: string | Uint8Array | null;
    END_POINT1_LAT: number;
    END_POINT1_LON: number;
    ID_BEAM2: string | Uint8Array | null;
    END_POINT2_NAME: string | Uint8Array | null;
    END_POINT2_LAT: number;
    END_POINT2_LON: number;
    DATA_RATE1_TO2: number;
    DATA_RATE2_TO1: number;
    SYS_CAP: string | Uint8Array | null;
    OPS_CAP: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ON_ORBIT1?: string | Uint8Array | null, SAT_NO1?: number, ID_ON_ORBIT2?: string | Uint8Array | null, SAT_NO2?: number, CONSTELLATION?: string | Uint8Array | null, LINK_NAME?: string | Uint8Array | null, LINK_TYPE?: linkType, LINK_STATE?: linkState, BAND?: string | Uint8Array | null, LINK_START_TIME?: string | Uint8Array | null, LINK_STOP_TIME?: string | Uint8Array | null, ID_BEAM1?: string | Uint8Array | null, END_POINT1_NAME?: string | Uint8Array | null, END_POINT1_LAT?: number, END_POINT1_LON?: number, ID_BEAM2?: string | Uint8Array | null, END_POINT2_NAME?: string | Uint8Array | null, END_POINT2_LAT?: number, END_POINT2_LON?: number, DATA_RATE1_TO2?: number, DATA_RATE2_TO1?: number, SYS_CAP?: string | Uint8Array | null, OPS_CAP?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LKS.d.ts.map