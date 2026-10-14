import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Geometric SPK state query, TDB; NAIF IDs state origin and target explicitly.
 */
export declare class PRWEphemerisRequest implements flatbuffers.IUnpackableObject<PRWEphemerisRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWEphemerisRequest;
    static getRootAsPRWEphemerisRequest(bb: flatbuffers.ByteBuffer, obj?: PRWEphemerisRequest): PRWEphemerisRequest;
    static getSizePrefixedRootAsPRWEphemerisRequest(bb: flatbuffers.ByteBuffer, obj?: PRWEphemerisRequest): PRWEphemerisRequest;
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    TARGET_NAIF_ID(): number;
    CENTER_NAIF_ID(): number;
    static startPRWEphemerisRequest(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTargetNaifId(builder: flatbuffers.Builder, TARGET_NAIF_ID: number): void;
    static addCenterNaifId(builder: flatbuffers.Builder, CENTER_NAIF_ID: number): void;
    static endPRWEphemerisRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWEphemerisRequest(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, TARGET_NAIF_ID: number, CENTER_NAIF_ID: number): flatbuffers.Offset;
    unpack(): PRWEphemerisRequestT;
    unpackTo(_o: PRWEphemerisRequestT): void;
}
export declare class PRWEphemerisRequestT implements flatbuffers.IGeneratedObject {
    EPOCH: TIMInstantT | null;
    TARGET_NAIF_ID: number;
    CENTER_NAIF_ID: number;
    constructor(EPOCH?: TIMInstantT | null, TARGET_NAIF_ID?: number, CENTER_NAIF_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWEphemerisRequest.d.ts.map