import * as flatbuffers from 'flatbuffers';
import { clgRayDirection } from './clgRayDirection.js';
/**
 * One demanded ray at an interval boundary, TT offsets from graph epoch.
 * Emission equals boundary OFFSET_S. Reception bracket encloses the mapped
 * emission bracket and light-time solve error; SIMULTANEOUS uses equal times.
 */
export declare class CLGRayTimes implements flatbuffers.IUnpackableObject<CLGRayTimesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGRayTimes;
    DIRECTION(): clgRayDirection;
    EMISSION_S(): number;
    RECEPTION_S(): number;
    RECEPTION_BRACKET_LO_S(): number;
    RECEPTION_BRACKET_HI_S(): number;
    HAS_VALUES(): boolean;
    static sizeOf(): number;
    static createCLGRayTimes(builder: flatbuffers.Builder, DIRECTION: clgRayDirection, EMISSION_S: number, RECEPTION_S: number, RECEPTION_BRACKET_LO_S: number, RECEPTION_BRACKET_HI_S: number, HAS_VALUES: boolean): flatbuffers.Offset;
    unpack(): CLGRayTimesT;
    unpackTo(_o: CLGRayTimesT): void;
}
export declare class CLGRayTimesT implements flatbuffers.IGeneratedObject {
    DIRECTION: clgRayDirection;
    EMISSION_S: number;
    RECEPTION_S: number;
    RECEPTION_BRACKET_LO_S: number;
    RECEPTION_BRACKET_HI_S: number;
    HAS_VALUES: boolean;
    constructor(DIRECTION?: clgRayDirection, EMISSION_S?: number, RECEPTION_S?: number, RECEPTION_BRACKET_LO_S?: number, RECEPTION_BRACKET_HI_S?: number, HAS_VALUES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGRayTimes.d.ts.map