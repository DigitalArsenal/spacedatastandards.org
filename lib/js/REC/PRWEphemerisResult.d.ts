import * as flatbuffers from 'flatbuffers';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
export declare class PRWEphemerisResult implements flatbuffers.IUnpackableObject<PRWEphemerisResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWEphemerisResult;
    static getRootAsPRWEphemerisResult(bb: flatbuffers.ByteBuffer, obj?: PRWEphemerisResult): PRWEphemerisResult;
    static getSizePrefixedRootAsPRWEphemerisResult(bb: flatbuffers.ByteBuffer, obj?: PRWEphemerisResult): PRWEphemerisResult;
    TARGET_NAIF_ID(): number;
    CENTER_NAIF_ID(): number;
    /**
     * Explicit ICRF axes and named NAIF origin; FRM state in SI m/m/s.
     */
    STATE(obj?: PRWResidentState): PRWResidentState | null;
    EPHEMERIS_SOURCE(): string;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startPRWEphemerisResult(builder: flatbuffers.Builder): void;
    static addTargetNaifId(builder: flatbuffers.Builder, TARGET_NAIF_ID: number): void;
    static addCenterNaifId(builder: flatbuffers.Builder, CENTER_NAIF_ID: number): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static endPRWEphemerisResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWEphemerisResultT;
    unpackTo(_o: PRWEphemerisResultT): void;
}
export declare class PRWEphemerisResultT implements flatbuffers.IGeneratedObject {
    TARGET_NAIF_ID: number;
    CENTER_NAIF_ID: number;
    STATE: PRWResidentStateT | null;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    constructor(TARGET_NAIF_ID?: number, CENTER_NAIF_ID?: number, STATE?: PRWResidentStateT | null, EPHEMERIS_SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWEphemerisResult.d.ts.map